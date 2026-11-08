#!/usr/bin/env python3
"""Lay the options for a character's base side by side, for the user to pick one.

    options.py <out.png> <letter>=<download.png> ...      e.g. options.py sheet.png A=dl/a.png B=dl/b.png

Each download is a base candidate on chroma-key green. The green is keyed out and every figure is put on
the desk colour, big and at the size it will have over the composer (92 CSS px wide, shown at 2x), under
its letter, so the user can judge them as stickers rather than as green pictures. Needs Pillow and numpy.
"""
import sys
import numpy as np
from PIL import Image, ImageDraw, ImageFont

DESK, INK = (244, 238, 226), (42, 34, 25)
BIG, SMALL, GAP, PAD = 420, 184, 36, 28      # the big figure's height, the composer-size width, in px


def keyed(path):
    """The figure cut off its green, as RGBA, trimmed to its paper."""
    a = np.asarray(Image.open(path).convert('RGB')).astype(np.float32)
    green = a[..., 1] - np.maximum(a[..., 0], a[..., 2])          # how green a pixel is beyond its other channels
    alpha = np.clip(1 - (green - 40) / 120, 0, 1)                   # paper stays, green goes, the edge fades
    rgb = a - (1 - alpha)[..., None] * np.array([0, 255, 0], np.float32)   # take the green spill off the edge
    rgb = np.clip(rgb / np.maximum(alpha, 1e-3)[..., None], 0, 255)
    out = np.dstack([rgb, alpha * 255]).astype(np.uint8)
    paper = alpha > .5                                               # trim to the figure, not to the wall line the
    cols = np.where(paper.sum(0) > .03 * paper.shape[0])[0]         # model draws across the whole picture
    rows = np.where(paper.sum(1) > .03 * paper.shape[1])[0]
    if len(cols) == 0 or len(rows) == 0:
        return Image.fromarray(out, 'RGBA')
    return Image.fromarray(out, 'RGBA').crop((cols.min(), rows.min(), cols.max() + 1, rows.max() + 1))


def font(size):
    try:
        return ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial Bold.ttf', size)
    except OSError:
        return ImageFont.load_default(size)


if len(sys.argv) < 3 or any('=' not in a for a in sys.argv[2:]):
    sys.exit(__doc__)
out, items = sys.argv[1], [a.split('=', 1) for a in sys.argv[2:]]
figs = [(label, keyed(path)) for label, path in items]
bigs = [f.resize((round(f.width * BIG / f.height), BIG), Image.LANCZOS) for _, f in figs]
smalls = [f.resize((SMALL, round(f.height * SMALL / f.width)), Image.LANCZOS) for _, f in figs]
col_w = max(max(b.width for b in bigs), SMALL) + GAP
sheet = Image.new('RGB', (PAD * 2 + col_w * len(figs) - GAP, PAD * 2 + 44 + BIG + 24 + max(s.height for s in smalls) + 8), DESK)
draw, big_font, small_font = ImageDraw.Draw(sheet), font(30), font(16)
for i, ((label, _), b, s) in enumerate(zip(figs, bigs, smalls)):
    x = PAD + i * col_w
    draw.text((x + (col_w - GAP) / 2, PAD), label, fill=INK, font=big_font, anchor='mt')
    sheet.paste(b, (x + ((col_w - GAP) - b.width) // 2, PAD + 44 + BIG - b.height), b)      # big, feet on one line
    y = PAD + 44 + BIG + 24
    sheet.paste(s, (x + ((col_w - GAP) - SMALL) // 2, y), s)                                # at composer size
    draw.text((x + (col_w - GAP) / 2, y + s.height + 4), 'over the composer', fill=INK, font=small_font, anchor='mt')
sheet.save(out)
print(f'{len(figs)} options -> {out} ({sheet.width}x{sheet.height})')
