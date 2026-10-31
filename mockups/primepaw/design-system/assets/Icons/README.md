# Icons

Single-ink stroke glyphs on a 24px grid, drawn in `ink` (#2a2219): 1.8px stroke, round caps and joins, no fill. In the app they are inline `<svg>` with `stroke="currentColor"` so they take the button's colour (`mute` at rest, `ink` when selected, `red` for the mark). These files carry the ink baked in because `<img>` cannot inherit colour; re-colour by inlining the path.

Rail icons render at 18px, row and field icons at 12 to 16px. `mark` is the app's own glyph (three dots over a bust) and is a fill, as are `stop` and `pinwheel`; `pinwheel` spins in `amber` on busy rows, in eight steps.
