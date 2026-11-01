# Sheet

A piece of paper laid on the desk or on a board. Paper carries words: rows, fields, filters, the chat sheet, the leaf, cards.

`kr-sheet` is `sheet` paper with a `face` gradient over the `pulp-paper` tile (soft pulp clouds and short fibers, from the Texture tokens), a 1px border at 7% black and `lift-paper-1`. `is-2` lifts it a step (a hovered or selected row); `is-3` is tall paper with the `edge-2` cut and `lift-paper-3`, cut `radius-10` (the chat sheet, the leaf, the composer card). Colour it with `is-card` (the whitest paper, closest to the reader), `is-warm` (the chat sheet), `is-inner` (paper inside paper: capsule bodies, popovers), `is-kraft` (tabs and folders) or `is-hl` (selected, under a marker). `is-flat` removes the shadow for paper printed as part of a larger piece.

Rules: paper lies straight; only the selected row leans `tilt-row-on`. Padding is `space-8` to `space-12` on strips and `space-24` on the leaf. Rules printed on paper are `kr-rule`, dashed in `line`. Give a sheet a semantic element (`article`, `li`, `button`) and let the class carry only the material.
