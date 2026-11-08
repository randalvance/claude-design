#!/usr/bin/env python3
"""Build a character's three cuts from the sheets Comfy Cloud generated.

A character is one paper cut-out creature in three cuts; Jarvis's first is the puppy, `dog`. Inputs
under pet/src/<name>/, all on a flat chroma-key green background, as the models draw them from the
prompts in pet/README.md and the primepaw-character skill:
  <mood>.png        one grid of frames per mood: idle, greet, celebrate, sad, error, ask (the peeking puppy)
  avatar.png        the puppy's head as one round sticker
  turnaround.png    the puppy from its four sides in one row: front, left side, back, right side
  parts-<facing>.png  the figure of one facing taken apart into the pieces of a cut-out puppet, laid out
                    in a grid in reading order: down (toward the viewer), left, right, up (away)

Outputs, named after the character (--name, `dog` by default):
  pet/<name>.png        the peeking atlas: one row per mood, 8 frames across, every frame the same size,
                        the flat cut edge on the frame's bottom
  pet/<name>.json       the frame size and the CSS numbers the boards use
  pet/<name>-face.png   the avatar, square, for the rail tile and the thread portraits
  pet/<name>-rig.png    the standee's pieces, every facing's, packed in one atlas
  pet/<name>-rig.json   the rig: for each facing, where each piece sits in the figure, where it turns,
                        and its depth, which pet/puppet.js animates the way a South Park character is

    python3 mockups/primepaw/pet/build.py                       # the puppy, from src/dog/, 92 CSS px wide
    python3 mockups/primepaw/pet/build.py --name cat             # another character, from src/cat/
    python3 mockups/primepaw/pet/build.py --cols 4 --rows 3      # force a grid on the mood sheets
    python3 mockups/primepaw/pet/build.py --check /tmp/rig.png   # the puppets put together, under the turnaround

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


RIG_H = 448                                   # the standing figure's height in the rig, px: about 4x its size on screen, crisp on retina
RIG_FACINGS = ['down', 'left', 'right', 'up']
RIG_SHEET_ORDER = ['down', 'left', 'up', 'right']  # the turnaround draws front, left side, back, right side
RIG_MARGIN = 64


def _sym(tail_window, tail_z, ear_z=4):
    """The pieces of the front and back views, in the reading order the parts sheet lays them out: the role,
    the window of the figure the piece's centre must land in (fractions of its width and height: x0, x1,
    y0, y1), where its pivot is, and its depth, 0 at the back."""
    return [('head', (.25, .75, .02, .4), 'neck', 5), ('ear-l', (0, .45, .02, .55), 'root', ear_z), ('ear-r', (.55, 1, .02, .55), 'root', ear_z),
            ('body', (.3, .7, .35, .8), 'base', 2), ('arm-l', (0, .45, .35, .72), 'top', 1), ('arm-r', (.55, 1, .35, .72), 'top', 1),
            ('leg-l', (.1, .5, .65, 1), 'top', 1), ('leg-r', (.5, .9, .65, 1), 'top', 1), ('tail', tail_window, 'root', tail_z)]


def _side(front):
    """The pieces of a profile facing `front` (-1 left, 1 right): the arm hangs at the front of the body, the
    tail sticks out at the back; the far arm and leg sit behind everything, the ear in front of the head."""
    arm = (.15, .6, .4, .75) if front < 0 else (.4, .85, .4, .75)
    tail = (.55, 1, .5, .85) if front < 0 else (0, .45, .5, .85)
    return [('head', (.1, .9, .02, .4), 'neck', 5), ('ear', (.1, .9, .02, .55), 'root', 6), ('body', (.2, .8, .35, .8), 'base', 2),
            ('arm-near', arm, 'top', 3), ('arm-far', arm, 'top', 0),
            ('leg-near', (.2, .8, .65, 1), 'top', 1), ('leg-far', (.2, .8, .65, 1), 'top', 0), ('tail', tail, 'root', 0)]


# from behind the ears hang over the back of the head, in front of it, and the tail lies over the rump
RIG_PARTS = {'down': _sym((.72, 1, .55, .85), 0), 'up': _sym((.25, .65, .5, .8), 3, ear_z=6), 'left': _side(-1), 'right': _side(1)}
RIG_ANCHOR = {'ear': 'head', 'ear-l': 'head', 'ear-r': 'head', 'tail': 'body'}  # whose centre a rooted piece grows from


def _split(img):
    a = np.asarray(img).astype(np.float32)
    return a[..., :3], a[..., 3] > 128


def _resize(img, s):
    if s == 1:
        return img
    return img.resize((max(1, round(img.size[0] * s)), max(1, round(img.size[1] * s))), Image.LANCZOS)


def _corr(a, k):
    """Cross-correlation of a (H by W) with the kernel k (h by w) at every position where k lies within a."""
    H, W = a.shape
    h, w = k.shape
    c = np.fft.irfft2(np.fft.rfft2(a) * np.conj(np.fft.rfft2(k, s=(H, W))), s=(H, W))
    return c[:H - h + 1, :W - w + 1]


def _edges(img):
    """The pen-ink outline and the edges of the colour patches of a piece or figure laid on green, 0 to 1,
    with its white die-cut border counting little: the figure shows a border only around its
    silhouette, so a border that weighed much would drag every piece to the figure's edge."""
    rgb, mask = _split(img)
    a = np.asarray(img).astype(np.float32)[..., 3:4] / 255.0
    lum = (rgb * a + np.array([0, 255, 0], np.float32) * (1 - a)) @ np.array([.3, .59, .11], np.float32)
    gy, gx = np.gradient(lum)
    edge = np.clip(np.hypot(gx, gy) / 48.0, 0, 1)
    white = (rgb > 232).all(axis=2) & mask
    return np.where(white, edge * .15, edge).astype(np.float32)


def _blur(a, r=2, times=2):
    """A box blur of radius r, applied `times` over, near enough a Gaussian: it widens the basin an
    outline makes, so a fit finds it from a few pixels off."""
    for _ in range(times):
        for axis in (0, 1):
            pad = [(0, 0), (0, 0)]
            pad[axis] = (r, r)
            c = np.cumsum(np.pad(a, pad, mode='edge'), axis=axis)
            c = np.concatenate([np.zeros_like(np.take(c, [0], axis=axis)), c], axis=axis)
            n = a.shape[axis]
            a = (np.take(c, range(2 * r + 1, 2 * r + 1 + n), axis=axis) - np.take(c, range(0, n), axis=axis)) / (2 * r + 1)
    return a.astype(np.float32)


class Fitter:
    """Finds where a piece sits in a figure. Two scorers, both over the whole figure at once by FFT
    correlation: `scale` is a normalised cross-correlation of the piece's colours over its own paper
    with the figure's, honest about size (a piece shrunk into a flat patch of its own colour scores no
    better than it should) but unhappy about the part of a piece that hides under another when the
    puppet is together (a leg's top under the body); `fit` is mostly how well the piece's outline lies
    on the figure's outlines, blurred so the fit sees it from a few pixels off, plus a little of how
    close the colours are, which forgives the hidden part. So the body, which nothing much hides, sets
    a sheet's scale with the first, and every piece finds its place at that scale with the second.
    The figure's transparent pixels are made green so paper landing outside it counts against the
    fit."""

    def __init__(self, fig):
        self.w, self.h = fig.size
        m = RIG_MARGIN
        padded = Image.new('RGBA', (self.w + 2 * m, self.h + 2 * m), (0, 255, 0, 255))
        padded.alpha_composite(fig, (m, m))
        self.rgb, _ = _split(padded)
        self.ch = [self.rgb[..., i] for i in range(3)]
        self.edges = _blur(_edges(padded))

    def _window(self, pw, ph, window, shape):
        m = RIG_MARGIN
        x0, x1, y0, y1 = window
        ys, xs = np.mgrid[0:shape[0], 0:shape[1]]
        cx, cy = xs + pw / 2 - m, ys + ph / 2 - m
        return (cx >= x0 * self.w) & (cx <= x1 * self.w) & (cy >= y0 * self.h) & (cy <= y1 * self.h)

    def _pick(self, c, p, window):
        c = np.where(self._window(p.size[0], p.size[1], window, c.shape), c, -2)
        i = int(np.argmax(c))
        y, x = divmod(i, c.shape[1])
        return x - RIG_MARGIN, y - RIG_MARGIN, float(c[y, x])

    def scale(self, piece, window, scales):
        """(scale, x, y, score) by cross-correlation."""
        best = None
        for s in scales:
            p = _resize(piece, s)
            prgb, mask = _split(p)
            n = float(mask.sum())
            mk = mask.astype(np.float32)
            num = varf = 0.0
            varp = 0.0
            for i in range(3):
                f, pc = self.ch[i], prgb[..., i]
                pz = (pc - pc.mean(where=mask)) * mk
                s1 = _corr(f, mk)
                num = num + _corr(f, pz)
                varf = varf + _corr(f * f, mk) - s1 * s1 / n
                varp += float((pz * pz).sum())
            x, y, sc = self._pick(num / np.sqrt(np.maximum(varf, 1.0) * max(varp, 1.0)), p, window)
            if best is None or sc > best[3]:
                best = (s, x, y, sc)
        return best

    def fit(self, piece, window):
        """(x, y, score): the piece's top left in the figure's pixels."""
        prgb, mask = _split(piece)
        mk = mask.astype(np.float32)
        n = float(mask.sum())
        pe = _blur(_edges(piece))
        outline = _corr(self.edges, pe) / max(float(pe.sum()), 1.0)
        ssd = 0.0
        for i in range(3):
            f, pc = self.ch[i], prgb[..., i] * mk
            ssd = ssd + _corr(f * f, mk) - 2 * _corr(f, pc) + float((pc * pc).sum())
        colour = np.clip(1.0 - ssd / (3 * n) / 100.0 ** 2, 0, 1)
        return self._pick(.65 * outline + .35 * colour, piece, window)


def _pivot(rule, piece, at, anchors, role):
    """Where a piece turns, in its own pixels: a leg or arm at its top, the body at its base, the head at
    its neck, an ear or tail where it grows from the head or the body: its paper nearest that piece's
    centre, within the ear's top rows."""
    w, h = piece.size
    if rule == 'top':
        return (w / 2, h * .14)
    if rule == 'base':
        return (w / 2, h * .96)
    if rule == 'neck':
        return (w / 2, h * .9)
    _, mask = _split(piece)
    if role.startswith('ear'):
        mask[int(h * .25):] = False
    ys, xs = np.where(mask)
    ax, ay = anchors[RIG_ANCHOR[role]]
    d = (xs + at[0] - ax) ** 2 + (ys + at[1] - ay) ** 2
    i = int(np.argmin(d))
    return (float(xs[i]), float(ys[i]))


def build_rig(src, args):
    """The standee as a cut-out puppet, the way a South Park character is built: every piece of paper its
    own layer, pinned at a pivot and moved in steps by pet/puppet.js. Each facing's pieces come from a
    parts sheet (src/parts-<facing>.png, the figure taken apart on green) and are fitted back into that
    figure on the turnaround to find where each sits, then packed into one atlas, pet/<name>-rig.png,
    with the places, pivots and depths in pet/<name>-rig.json."""
    tp = os.path.join(src, 'turnaround.png')
    if not os.path.exists(tp):
        print(f'rig: no {tp}, skipped')
        return
    sheets = {}
    for facing in RIG_FACINGS:
        p = os.path.join(src, f'parts-{facing}.png')
        if not os.path.exists(p):
            print(f'rig: no {p}, skipped')
            return
        sheets[facing] = p
    turn, _ = key_out(Image.open(tp))
    figs = slice_sheet(turn)
    if len(figs) != 4:
        sys.exit(f'the turnaround holds {len(figs)} figures, not 4')
    figs = dict(zip(RIG_SHEET_ORDER, figs))

    rig = {'name': args.name, 'fps': 10, 'facings': {}}
    pieces = {}  # (facing, role) -> image at rig scale
    for facing in RIG_FACINGS:
        img, key = key_out(Image.open(sheets[facing]))
        cut = slice_sheet(img)
        spec = RIG_PARTS[facing]
        print(f'parts-{facing:5s} key {tuple(int(v) for v in key)}  {len(cut)} pieces  ' + ' '.join(f'{f.size[0]}x{f.size[1]}' for f in cut))
        if len(cut) != len(spec):
            sys.exit(f'parts-{facing}.png holds {len(cut)} pieces, not the {len(spec)} the rig expects ({", ".join(r for r, *_ in spec)}); redraw it')
        fig = figs[facing]
        fitter = Fitter(fig)
        # the body sets the sheet's scale against the turnaround and every piece is fitted at that scale,
        # unless the head correlates better: a plain body (the cat's back, all one kraft) matches the figure
        # at any size and the search drifts small, where a head's eyes and stripes pin the size down. A head
        # with a clear match of its own keeps its scale for itself and its ears, since a model draws the head
        # and the body of one sheet at sizes a little apart and the ears root in the head
        roles = [r for r, *_ in spec]
        scales = (.5, .55, .6, .65, .7, .75, .8, .9, 1.0, 1.15, 1.3)
        sb, _, _, bsc = fitter.scale(cut[roles.index('body')], spec[roles.index('body')][1], scales)
        sh, _, _, hsc = fitter.scale(cut[roles.index('head')], spec[roles.index('head')][1], scales)
        s0 = sb if bsc >= hsc else sh
        s_head = sh if hsc >= .6 else s0
        print(f'  scale x{s0:.2f} (the body correlates {bsc:.0%} at x{sb:.2f}, the head {hsc:.0%} at x{sh:.2f})'
              + (f'; the head and the ears at x{s_head:.2f}' if s_head != s0 else ''))
        placed, anchors = {}, {}
        for (role, window, rule, z), piece in zip(spec, cut):
            piece = _resize(piece, s_head if role.startswith(('head', 'ear')) else s0)
            x, y, sc = fitter.fit(piece, window)
            note = ''
            if role == 'tail':  # the model draws a tail either way round; keep the way that fits
                flipped = piece.transpose(Image.FLIP_LEFT_RIGHT)
                fx, fy, fsc = fitter.fit(flipped, window)
                if fsc > sc + .05:
                    piece, x, y, sc, note = flipped, fx, fy, fsc, '  (mirrored)'
            placed[role] = {'img': piece, 'at': (x, y), 'z': z, 'rule': rule, 'score': sc}
            anchors[role] = (x + piece.size[0] / 2, y + piece.size[1] / 2)
            print(f'  {role:8s} at ({x:4d},{y:4d})  fit {sc:.0%}' + note + ('' if sc >= .4 else '  <- poor fit, look at it'))
        # the far arm and leg of a profile hide behind the near ones; set them a little back and up
        for far, near in (('arm-far', 'arm-near'), ('leg-far', 'leg-near')):
            if far in placed:
                back = -1 if facing == 'left' else 1
                nx, ny = placed[near]['at']
                placed[far]['at'] = (nx + int(back * fig.size[0] * .07), ny - int(fig.size[1] * .015))
                anchors[far] = (placed[far]['at'][0] + placed[far]['img'].size[0] / 2, placed[far]['at'][1] + placed[far]['img'].size[1] / 2)
        k = RIG_H / fig.size[1]
        fw = round(fig.size[0] * k)
        parts = []
        for role, d in placed.items():
            px, py = _pivot(d['rule'], d['img'], d['at'], anchors, role)
            img = _resize(d['img'], k)
            pieces[(facing, role)] = img
            parts.append({'role': role, 'at': [round(d['at'][0] * k), round(d['at'][1] * k)], 'pivot': [round(px * k, 1), round(py * k, 1)], 'z': d['z'], 'fit': round(d['score'], 2)})
        rig['facings'][facing] = {'w': fw, 'parts': parts}

    # every facing in one frame, the widest, with the feet on its bottom edge
    FW = max(f['w'] for f in rig['facings'].values())
    for facing, f in rig['facings'].items():
        dx = (FW - f['w']) // 2
        for p in f['parts']:
            p['at'][0] += dx
        f.pop('w')
    rig['figure'] = {'w': FW, 'h': RIG_H}

    # pack the pieces on shelves, tallest first, a pixel of air around each
    order = sorted(pieces.items(), key=lambda kv: -kv[1].size[1])
    pad, AW = 2, 1024
    x = y = shelf = 0
    rects = {}
    for key, img in order:
        w, h = img.size
        if x + w + pad > AW:
            x, y, shelf = 0, y + shelf, 0
        rects[key] = (x + pad // 2, y + pad // 2, w, h)
        x += w + pad
        shelf = max(shelf, h + pad)
    AH = y + shelf
    atlas = Image.new('RGBA', (AW, AH), (0, 0, 0, 0))
    for key, (rx, ry, w, h) in rects.items():
        atlas.alpha_composite(pieces[key], (rx, ry))
    atlas.save(os.path.join(HERE, args.name + '-rig.png'), optimize=True)
    for facing, f in rig['facings'].items():
        for p in f['parts']:
            p['rect'] = list(rects[(facing, p['role'])])
    rig['atlas'] = {'src': f'{args.name}-rig.png', 'w': AW, 'h': AH}
    with open(os.path.join(HERE, args.name + '-rig.json'), 'w') as fp:
        json.dump(rig, fp, separators=(',', ':'))
    print(f'rig atlas {AW}x{AH}, the figure {FW}x{RIG_H} with its feet on the bottom edge')

    # a contact sheet of the four puppets put together, beside the turnaround figures, to judge the fit
    if args.check:
        sheet = Image.new('RGBA', (FW * 4, RIG_H * 2), (0, 255, 0, 255))
        for i, facing in enumerate(RIG_FACINGS):
            fig = _resize(figs[facing], RIG_H / figs[facing].size[1])
            sheet.alpha_composite(fig, (i * FW + (FW - fig.size[0]) // 2, 0))
            for p in sorted(rig['facings'][facing]['parts'], key=lambda p: p['z']):
                sheet.alpha_composite(pieces[(facing, p['role'])], (i * FW + p['at'][0], RIG_H + p['at'][1]))
        sheet.save(args.check)
        print(f'check sheet {args.check}: the turnaround above, the puppets below')


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--name', default='dog', help='the character: reads src/<name>/ and writes <name>.png, <name>.json, <name>-face.png, <name>-rig.png, <name>-rig.json')
    ap.add_argument('--cols', type=int, default=0, help='force a grid on the mood sheets instead of reading it off each sheet')
    ap.add_argument('--rows', type=int, default=0)
    ap.add_argument('--frames', type=int, default=8, help='frames per row in the peeking atlas; a sheet with more or fewer is resampled to it')
    ap.add_argument('--width', type=int, default=92, help='how wide the idle peeking puppy is on screen, in CSS px')
    ap.add_argument('--face', type=int, default=88, help='the avatar\'s side, in CSS px')
    ap.add_argument('--check', default='', help='also write a sheet of the four puppets put together under the turnaround, to judge the fit')
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
    build_rig(src, args)


if __name__ == '__main__':
    main()
