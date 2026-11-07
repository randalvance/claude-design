#!/usr/bin/env python3
"""Build Jarvis's three sprites from the sheets Comfy Cloud generated.

Inputs under pet/src/, all of the paper puppy on a flat chroma-key green background, as Qwen Image
2.1 draws them from the prompts in pet/README.md:
  <mood>.png       one grid of frames per mood: idle, greet, celebrate, sad, error, ask (the peeking puppy)
  avatar.png       the puppy's head as one round sticker
  walk-<facing>.png  one strip of 6 poses per facing: down (toward the viewer), left, right, up (away)

Outputs:
  pet/dog.png        the peeking atlas: one row per mood, 8 frames across, every frame the same size,
                     the puppy's flat cut edge on the frame's bottom
  pet/dog.json       the frame size and the CSS numbers the boards use
  pet/dog-face.png   the avatar, square, for the rail tile and the thread portraits
  pet/dog-walk.png   the walker, in the Factory Overseer's pet sheet layout: 6 columns (stand, step,
                     step, work, work, wave) by 4 rows (down, left, right, up) of 256 by 320 cells, feet
                     on one ground line
  pet/dog-walk.json  what each column and row holds, and the display height the factory should give it

    python3 mockups/primepaw/pet/build.py                       # reads each sheet's grid, the puppy 92 CSS px wide
    python3 mockups/primepaw/pet/build.py --frames 12 --width 92 # 12 frames per row
    python3 mockups/primepaw/pet/build.py --cols 4 --rows 3      # force a grid
"""
import argparse, json, os, sys
import numpy as np
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
MOODS = ['idle', 'greet', 'celebrate', 'sad', 'error', 'ask']
DPR = 2  # the atlas is drawn at 2x so it stays crisp on retina screens


def key_out(img, floor=38.0, ceil=190.0):
    """Turn the flat green background transparent. The key colour is the median of the sheet's
    border pixels, so a slightly off green still keys. Alpha ramps with the distance from that
    colour, and edge pixels are un-mixed so no green bleeds into the paper."""
    rgb = np.asarray(img.convert('RGB')).astype(np.float32)
    h, w, _ = rgb.shape
    border = np.concatenate([rgb[0], rgb[-1], rgb[:, 0], rgb[:, -1]])
    key = np.median(border, axis=0)
    dist = np.sqrt(((rgb - key) ** 2).sum(axis=2))
    a = np.clip((dist - floor) / (ceil - floor), 0.0, 1.0)
    # un-mix: c = a*fg + (1-a)*key  ->  fg = (c - (1-a)*key) / a
    safe = np.where(a > 0.02, a, 1.0)[..., None]
    fg = (rgb - (1.0 - a)[..., None] * key) / safe
    fg = np.where(a[..., None] > 0.02, fg, rgb)
    out = np.dstack([np.clip(fg, 0, 255), a * 255.0]).astype(np.uint8)
    return Image.fromarray(out, 'RGBA'), key


def bbox(alpha, thr=64):
    ys, xs = np.where(alpha > thr)
    if not len(xs):
        return None
    return int(xs.min()), int(ys.min()), int(xs.max()) + 1, int(ys.max()) + 1


def runs(mask, min_len):
    """The [start, end) spans where a 1-D boolean mask is true, skipping spans shorter than min_len."""
    out, start = [], None
    for i, v in enumerate(list(mask) + [False]):
        if v and start is None:
            start = i
        elif not v and start is not None:
            if i - start >= min_len:
                out.append((start, i))
            start = None
    return out


def slice_sheet(img, cols=None, rows=None):
    """Find the frames on the sheet. The model is asked for a grid, but it draws the grid it likes
    (4x2, 4x3, 3x3), so the cells are read off the sheet itself: rows are the bands where any
    paper shows, and the frames in a row are the bands across it. --cols/--rows force a fixed grid
    instead. Every frame is then tightened to its paper."""
    a = np.asarray(img)[..., 3] > 64
    w, h = img.size
    frames = []
    if cols and rows:
        cw, ch = w / cols, h / rows
        cells = [(round(c * cw), round(r * ch), round((c + 1) * cw), round((r + 1) * ch)) for r in range(rows) for c in range(cols)]
    else:
        cells = []
        for y0, y1 in runs(a.any(axis=1), h // 20):
            for x0, x1 in runs(a[y0:y1].any(axis=0), w // 30):
                cells.append((x0, y0, x1, y1))
    for x0, y0, x1, y1 in cells:
        cell = img.crop((x0, y0, x1, y1))
        b = bbox(np.asarray(cell)[..., 3])
        if b is None:
            continue
        frames.append(cell.crop(b))
    return frames


WALK_CELL = (256, 320)                       # the Factory Overseer's pet sheet cell
WALK_FACINGS = ['down', 'left', 'right', 'up']  # its rows, top to bottom
WALK_COLUMNS = ['stand', 'step-left', 'step-right', 'work-up', 'work-forward', 'wave']
WALK_STAND_H = 0.86                           # the standing puppy's share of the cell's height


def build_peek(src, args):
    sheets = {}
    for mood in MOODS:
        p = os.path.join(src, mood + '.png')
        if not os.path.exists(p):
            sys.exit('missing ' + p)
        img, key = key_out(Image.open(p))
        frames = slice_sheet(img, args.cols, args.rows)
        if not frames:
            sys.exit('no frames found in ' + p)
        print(f'{mood:10s} key {tuple(int(v) for v in key)}  {len(frames)} frames  '
              + ' '.join(f'{f.size[0]}x{f.size[1]}' for f in frames))
        sheets[mood] = frames

    # scale so the idle puppy is --width CSS px wide (times DPR), judged on its widest idle frame
    idle_w = max(f.size[0] for f in sheets['idle'])
    scale = (args.width * DPR) / idle_w
    scaled = {m: [f.resize((max(1, round(f.size[0] * scale)), max(1, round(f.size[1] * scale))), Image.LANCZOS) for f in fs]
              for m, fs in sheets.items()}
    fw = max(f.size[0] for fs in scaled.values() for f in fs) + 2 * args.pad
    fh = max(f.size[1] for fs in scaled.values() for f in fs) + 2 * args.pad
    fw += fw % 2; fh += fh % 2

    atlas = Image.new('RGBA', (fw * args.frames, fh * len(MOODS)), (0, 0, 0, 0))
    for r, mood in enumerate(MOODS):
        fs = scaled[mood]
        for i in range(args.frames):
            f = fs[(i * len(fs)) // args.frames]  # a sheet with more or fewer frames is spread evenly over the row
            x = i * fw + (fw - f.size[0]) // 2          # centred across
            y = r * fh + fh - args.pad - f.size[1]      # the flat cut edge sits on the frame's bottom
            atlas.alpha_composite(f, (x, y))
    atlas.save(os.path.join(HERE, 'dog.png'), optimize=True)

    manifest = {'moods': MOODS, 'frames': args.frames, 'dpr': DPR, 'frame': {'w': fw, 'h': fh},
                'css': {'w': fw / DPR, 'h': fh / DPR}, 'atlas': {'w': atlas.size[0], 'h': atlas.size[1]}}
    with open(os.path.join(HERE, 'dog.json'), 'w') as fp:
        json.dump(manifest, fp, indent=2)
    print(f'peek atlas {atlas.size[0]}x{atlas.size[1]}, frame {fw}x{fh} -> --pw:{fw / DPR}px; --ph:{fh / DPR}px')
    return scaled


def build_face(src, args, scaled):
    """The avatar: the round sticker from src/avatar.png, squared up; failing that, a square over the
    idle puppy's head."""
    p = os.path.join(src, 'avatar.png')
    side = args.face * DPR
    if os.path.exists(p):
        img, _ = key_out(Image.open(p))
        b = bbox(np.asarray(img)[..., 3])
        head = img.crop(b)
        s = (side - 2 * args.pad) / max(head.size)
        head = head.resize((max(1, round(head.size[0] * s)), max(1, round(head.size[1] * s))), Image.LANCZOS)
        sq = Image.new('RGBA', (side, side), (0, 0, 0, 0))
        sq.alpha_composite(head, ((side - head.size[0]) // 2, (side - head.size[1]) // 2))
        print(f'face from avatar.png, {side}x{side}')
    else:
        f0 = scaled['idle'][0]
        side = int(f0.size[0] * 0.78)
        left = (f0.size[0] - side) // 2
        face = f0.crop((left, 0, left + side, min(side, f0.size[1])))
        sq = Image.new('RGBA', (side, side), (0, 0, 0, 0)); sq.alpha_composite(face, (0, 0))
        print(f'face cropped from the idle frame, {side}x{side} (no src/avatar.png)')
    sq.save(os.path.join(HERE, 'dog-face.png'), optimize=True)


def build_walk(src, args):
    """The walker, for the Factory Overseer: its pet sheets are 6 columns by 4 facings of 256 by 320
    cells, column 0 standing, 1 and 2 the two steps of a walk, 3 and 4 the two beats of working and 5
    the wave for attention. Every frame is scaled alike, so the puppy keeps its height from pose to
    pose, and stands on the cell's ground line."""
    rows = {}
    for facing in WALK_FACINGS:
        p = os.path.join(src, f'walk-{facing}.png')
        if not os.path.exists(p):
            print(f'walk: no {p}, skipped')
            return
        img, key = key_out(Image.open(p))
        frames = slice_sheet(img, args.walk_cols or None, 1 if args.walk_cols else None)
        if not frames:
            sys.exit('no frames found in ' + p)
        print(f'walk-{facing:6s} key {tuple(int(v) for v in key)}  {len(frames)} frames  '
              + ' '.join(f'{f.size[0]}x{f.size[1]}' for f in frames))
        n = len(WALK_COLUMNS)
        rows[facing] = [frames[(i * len(frames)) // n] for i in range(n)] if len(frames) != n else frames

    cw, ch = WALK_CELL
    pad = args.pad
    stand_h = rows['down'][0].size[1]
    scale = (ch * WALK_STAND_H) / stand_h
    # a pose taller or wider than its cell at that scale (a paw over the head) shrinks them all alike
    for fs in rows.values():
        for f in fs:
            scale = min(scale, (ch - 2 * pad) / f.size[1], (cw - 2 * pad) / f.size[0])
    sheet = Image.new('RGBA', (cw * len(WALK_COLUMNS), ch * len(WALK_FACINGS)), (0, 0, 0, 0))
    for r, facing in enumerate(WALK_FACINGS):
        for c, f in enumerate(rows[facing]):
            g = f.resize((max(1, round(f.size[0] * scale)), max(1, round(f.size[1] * scale))), Image.LANCZOS)
            x = c * cw + (cw - g.size[0]) // 2
            y = r * ch + ch - pad - g.size[1]
            sheet.alpha_composite(g, (x, y))
    sheet.save(os.path.join(HERE, 'dog-walk.png'), optimize=True)
    stand = stand_h * scale / ch  # the standing puppy's share of the cell
    manifest = {'layout': 'sheet', 'cols': len(WALK_COLUMNS), 'rows': len(WALK_FACINGS), 'cell': {'w': cw, 'h': ch},
                'columns': WALK_COLUMNS, 'facings': WALK_FACINGS, 'sheet': {'w': sheet.size[0], 'h': sheet.size[1]},
                'standing': round(stand, 3),
                'factory': {'src': 'pet/dog-walk.png', 'layout': 'sheet', 'height': round(2.3 / stand, 2),
                            'animations': {'working': {'frames': [3, 4], 'fps': 5.5}, 'attention': {'frames': [5, 0], 'fps': 3.2}}}}
    with open(os.path.join(HERE, 'dog-walk.json'), 'w') as fp:
        json.dump(manifest, fp, indent=2)
    print(f'walk sheet {sheet.size[0]}x{sheet.size[1]}, the standing puppy {stand:.0%} of the cell -> factory height {2.3 / stand:.2f} tiles')


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--cols', type=int, default=0, help='force a grid on the mood sheets instead of reading it off each sheet')
    ap.add_argument('--rows', type=int, default=0)
    ap.add_argument('--frames', type=int, default=8, help='frames per row in the peeking atlas; a sheet with more or fewer is resampled to it')
    ap.add_argument('--width', type=int, default=92, help='how wide the idle peeking puppy is on screen, in CSS px')
    ap.add_argument('--face', type=int, default=88, help='the avatar\'s side, in CSS px')
    ap.add_argument('--walk-cols', type=int, default=0, help='force the number of cells on a walk strip')
    ap.add_argument('--pad', type=int, default=4, help='clear pixels around every frame, at atlas scale')
    args = ap.parse_args()

    src = os.path.join(HERE, 'src')
    scaled = build_peek(src, args)
    build_face(src, args, scaled)
    build_walk(src, args)


if __name__ == '__main__':
    main()
