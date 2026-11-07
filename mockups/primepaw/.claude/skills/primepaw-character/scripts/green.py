#!/usr/bin/env python3
"""Lay a sheet GPT Image drew on the solid chroma-key green that pet/build.py keys out.

    green.py <downloaded.png> <pet/src/<id>/<sheet>.png>

GPT Image answers either with the green sheet it was asked for or with a transparent PNG, the figures
at alpha 250 to 254 over a faint halo below 30. The transparent kind is remapped (0 below 24, opaque
from 250) and laid on #00FF00; the opaque kind is written through as it is. Needs Pillow and numpy.
"""
import sys
import numpy as np
from PIL import Image

if len(sys.argv) != 3:
    sys.exit(__doc__)
src, out = sys.argv[1], sys.argv[2]
im = Image.open(src).convert('RGBA')
a = np.asarray(im).astype(np.float32)
alpha = a[..., 3]
if (alpha < 250).mean() > .01:   # the transparent kind: most of it is the see-through background
    k = np.clip((alpha - 24) / (250 - 24), 0, 1)[..., None]
    rgb = a[..., :3] * k + np.array([0, 255, 0], np.float32) * (1 - k)
    kind = 'transparent, laid on green'
else:
    rgb = a[..., :3]
    kind = 'opaque, written through'
Image.fromarray(rgb.astype(np.uint8), 'RGB').convert('RGBA').save(out)
print(f'{src}: {kind}, {im.size[0]}x{im.size[1]} -> {out}')
