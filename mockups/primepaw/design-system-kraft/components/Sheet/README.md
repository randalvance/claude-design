# Sheet

A piece of paper laid on the desk or on a board. Paper carries words: rows, fields, filters, the chat sheet, the leaf, cards.

`kr-sheet` is `sheet` paper with a `face` gradient over the `pulp-paper` tile (the workshop wall texture), a 1px border at 7% black and `lift-paper-1`. `is-2` lifts it a step (a hovered or selected row); `is-3` is tall paper with the `edge-2` cut and `lift-paper-3`, cut `radius-10` (the chat sheet, the leaf, the composer card). Colour it with `is-card` (the whitest paper, closest to the reader), `is-warm` (the chat sheet), `is-inner` (paper inside paper: capsule bodies, popovers), `is-kraft` (tabs and folders) or `is-hl` (selected, under a marker). `is-flat` removes the shadow for paper printed as part of a larger piece.

`is-strip` is the strip that heads a workspace in the sessions board: paper tinted with the workspace colour (`--wc`, the colour of its dot, mixed 62% into `sheet`), the same `pulp-paper` texture as the rows, `radius-5`, a short shadow; its count and caret are written with `kr-pen` (Caveat, `ink`, multiplied into the paper), never a badge. The deck under it starts 3px up, so its first card is tucked beneath the strip.

`kr-stack` lays sheets as a deck of cards: each one 3px under the one above with a tiny alternating lean, the first on top, and two card edges showing under the last. The sessions under a workspace strip are such a stack; a hovered sheet rises to the top.

Rules: paper lies straight; only the selected row leans `tilt-row-on`. Padding is `space-8` to `space-12` on strips and `space-24` on the leaf. Rules printed on paper are `kr-rule`, dashed in `line`. Give a sheet a semantic element (`article`, `li`, `button`) and let the class carry only the material.
