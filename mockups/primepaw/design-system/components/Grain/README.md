# Grain

The paper texture laid over the whole shell.

Define the `#pp-grain` SVG filter once on the page (an `feTurbulence` fractal noise at base frequency 0.85, two octaves, colour-matrixed toward kraft) and put `pp-grain` on the outermost sheet. It paints a white layer through the filter at 35% opacity with multiply, so the grain darkens slightly and never lightens. Keep it on one element with `position: relative`; pointer events pass through. Never apply it to individual cards: stacked grain reads as dirt.
