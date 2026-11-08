#!/usr/bin/env python3
"""Build a character's three cuts from the sheets Comfy Cloud generated.

A character is one paper cut-out creature in three cuts; Jarvis's first is the puppy, `dog`. Inputs
under pet/src/<name>/, all on a flat chroma-key green background, as the models draw them from the
prompts in pet/README.md and the primepaw-character skill:
  <mood>.png        one grid of frames per mood: idle, greet, celebrate, sad, error, ask (the peeking puppy)
  avatar.png        the puppy's head as one round sticker
  turnaround.png    the puppy from its four sides in one row: front, left side, back, right side
  walk-<facing>.png one sprite sheet of 6 poses per facing (standing, two stomps of a walk, two beats
                    of work, a wave): down (toward the viewer), left, right, up (away)

Outputs, named after the character (--name, `dog` by default):
  pet/<name>.png        the peeking atlas: one row per mood, 8 frames across, every frame the same size,
                        the flat cut edge on the frame's bottom
  pet/<name>.json       the frame size and the CSS numbers the boards use
  pet/<name>-face.png   the avatar, square, for the rail tile and the thread portraits
  pet/<name>-walk.png   the standee, in the Factory Overseer's pet sheet layout: 6 columns (stand, the
                        two stomps, two beats of work, a wave) by 4 facings, 256 by 320 cells, one drawing
                        of the whole figure a cell, which pet/standee.js plays
  pet/<name>-walk.json  what each column and row holds, and the display height the factory should give it

    python3 mockups/primepaw/pet/build.py                       # the puppy, from src/dog/, 92 CSS px wide
    python3 mockups/primepaw/pet/build.py --name cat             # another character, from src/cat/
    python3 mockups/primepaw/pet/build.py --cols 4 --rows 3      # force a grid on the mood sheets
    python3 mockups/primepaw/pet/build.py --walk-cols 6          # force six cells on every walk sheet

The boards play 8 frames a row (steps(8) and an 8-column background-size in their /* pet */ block),
so --frames stays 8 unless those change with it; the script warns otherwise.
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
    atlas.save(os.path.join(HERE, args.name + '.png'), optimize=True)

    manifest = {'moods': MOODS, 'frames': args.frames, 'dpr': DPR, 'frame': {'w': fw, 'h': fh},
                'css': {'w': fw / DPR, 'h': fh / DPR}, 'atlas': {'w': atlas.size[0], 'h': atlas.size[1]}}
    with open(os.path.join(HERE, args.name + '.json'), 'w') as fp:
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
        if b is None:
            sys.exit('no paper found in ' + p)
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
    sq.save(os.path.join(HERE, args.name + '-face.png'), optimize=True)


WALK_CELL = (256, 320)                       # the Factory Overseer's pet sheet cell
WALK_FACINGS = ['down', 'left', 'right', 'up']  # its rows, top to bottom
WALK_COLUMNS = ['stand', 'stomp-left', 'stomp-right', 'work-up', 'work-forward', 'wave']
WALK_STAND_H = 0.86                           # the standing figure's share of the cell's height


def build_walk(src, args):
    """The standee, for the Factory Overseer: its pet sheets are 6 columns by 4 facings of 256 by 320
    cells, column 0 standing, 1 and 2 the two stomps of a walk (one foot lifted flat, then the other),
    3 and 4 the two beats of working and 5 the wave for attention. Every frame is one drawing of the
    whole figure, scaled alike so it keeps its height from pose to pose, standing on the cell's ground
    line."""
    rows = {}
    for facing in WALK_FACINGS:
        p = os.path.join(src, f'walk-{facing}.png')
        if not os.path.exists(p):
            print(f'walk: no {p}, so no standee; the boards do not need it')
            return
        img, key = key_out(Image.open(p))
        frames = slice_sheet(img, args.walk_cols or None, 1 if args.walk_cols else None)
        if not frames:
            sys.exit('no frames found in ' + p)
        print(f'walk-{facing:6s} key {tuple(int(v) for v in key)}  {len(frames)} frames  '
              + ' '.join(f'{f.size[0]}x{f.size[1]}' for f in frames))
        if args.walk_cols and len(frames) != args.walk_cols:
            print(f'warning: walk-{facing} was cut as {args.walk_cols} cells but only {len(frames)} held paper, so the poses '
                  f'after the empty cell have moved over by one', file=sys.stderr)
        n = len(WALK_COLUMNS)
        if len(frames) != n:
            print(f'warning: walk-{facing} has {len(frames)} cells, not {n}; its poses are spread over the {n} '
                  f'columns, so stand, stomp, work and wave may not land where the sheet layout expects', file=sys.stderr)
        rows[facing] = [frames[(i * len(frames)) // n] for i in range(n)] if len(frames) != n else frames

    cw, ch = WALK_CELL
    pad = args.pad
    stand_h = rows['down'][0].size[1]
    # every facing stands the same height, the front row's: the figure does not grow or shrink when it
    # turns, however large the model drew each sheet
    scales = {facing: (ch * WALK_STAND_H) / fs[0].size[1] for facing, fs in rows.items()}
    # a pose taller or wider than its cell at that scale (a paw over the head) shrinks them all alike
    shrink = 1.0
    for facing, fs in rows.items():
        for f in fs:
            shrink = min(shrink, (ch - 2 * pad) / (f.size[1] * scales[facing]), (cw - 2 * pad) / (f.size[0] * scales[facing]))
    scales = {facing: s * shrink for facing, s in scales.items()}
    sheet = Image.new('RGBA', (cw * len(WALK_COLUMNS), ch * len(WALK_FACINGS)), (0, 0, 0, 0))
    for r, facing in enumerate(WALK_FACINGS):
        for c, f in enumerate(rows[facing]):
            g = f.resize((max(1, round(f.size[0] * scales[facing])), max(1, round(f.size[1] * scales[facing]))), Image.LANCZOS)
            x = c * cw + (cw - g.size[0]) // 2
            y = r * ch + ch - pad - g.size[1]
            sheet.alpha_composite(g, (x, y))
    sheet.save(os.path.join(HERE, args.name + '-walk.png'), optimize=True)
    stand = stand_h * scales['down'] / ch  # the standing figure's share of the cell
    manifest = {'layout': 'sheet', 'cols': len(WALK_COLUMNS), 'rows': len(WALK_FACINGS), 'cell': {'w': cw, 'h': ch},
                'columns': WALK_COLUMNS, 'facings': WALK_FACINGS, 'sheet': {'w': sheet.size[0], 'h': sheet.size[1]},
                'standing': round(stand, 3),
                'factory': {'src': f'pet/{args.name}-walk.png', 'layout': 'sheet', 'height': round(2.3 / stand, 2),
                            'animations': {'walking': {'frames': [1, 0, 2, 0], 'fps': 8},
                                           'working': {'frames': [3, 4], 'fps': 5.5}, 'attention': {'frames': [5, 0], 'fps': 3.2}}}}
    with open(os.path.join(HERE, args.name + '-walk.json'), 'w') as fp:
        json.dump(manifest, fp, indent=2)
        fp.write('\n')
    print(f'walk sheet {sheet.size[0]}x{sheet.size[1]}, the standing figure {stand:.0%} of the cell -> factory height {2.3 / stand:.2f} tiles')


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--name', default='dog', help='the character: reads src/<name>/ and writes <name>.png, <name>.json, <name>-face.png, <name>-walk.png, <name>-walk.json')
    ap.add_argument('--cols', type=int, default=0, help='force a grid on the mood sheets instead of reading it off each sheet')
    ap.add_argument('--rows', type=int, default=0)
    ap.add_argument('--frames', type=int, default=8, help='frames per row in the peeking atlas; a sheet with more or fewer is resampled to it')
    ap.add_argument('--width', type=int, default=92, help='how wide the idle peeking puppy is on screen, in CSS px')
    ap.add_argument('--face', type=int, default=64, help='the avatar\'s side, in CSS px (64: the icon scale\'s largest step, 128 px at 2x)')
    ap.add_argument('--walk-cols', type=int, default=0, help='force the number of cells on a walk sheet')
    ap.add_argument('--pad', type=int, default=4, help='clear pixels around every frame, at atlas scale')
    args = ap.parse_args()
    if args.frames < 1:
        ap.error('--frames must be at least 1')
    if args.frames != 8:
        print(f'warning: the boards play 8 frames a row (steps(8) and an 8-column background-size in their '
              f'/* pet */ block); an atlas with {args.frames} needs those changed with it', file=sys.stderr)

    src = os.path.join(HERE, 'src', args.name)
    if not os.path.isdir(src):
        sys.exit(f'no sources for {args.name!r}: expected the sheets under {src}')
    scaled = build_peek(src, args)
    build_face(src, args, scaled)
    build_walk(src, args)


if __name__ == '__main__':
    main()
