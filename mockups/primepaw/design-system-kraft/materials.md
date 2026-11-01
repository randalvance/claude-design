# Materials

Three materials, each with a fixed recipe. Pick the material by what the part does, then the colour by what it is.

| | Cardboard | Paper | Sticker |
| --- | --- | --- | --- |
| Holds | the rail, the sessions board, mats, the composer frame, the heavy button | rows, fields, filters, tabs, the chat sheet, the leaf, cards, the secondary button | icons, badges, pills, chips, dots, the paw, the cat, the primary button |
| Face | `board`, `kraft`, `mat-green`, `mat-red` with `face` on top and `flute` hairlines every `space-3` | `sheet`, `sheet-warm`, `card`, `paper`, `highlighter` with `face` on top | one identity colour with `gloss` on top |
| Border | 1px, the edge colour at 60% | 1px black at 7%, or the edge colour at 40% for tall paper | none |
| Cut edge | `board-2` (or the matching `-2`), 2px right and 3px down | `edge` 1px, `edge-2` 2px for tall paper | `sticker-cut`, 2px (1.5px when small) all round |
| Shadow | `lift-board`, `lift-mat`, `lift-frame` | `lift-paper-1` to `lift-paper-3` | none |
| Corners | `radius-10` (`radius-6` for the button, `radius-9` for a mat) | `radius-3` to `radius-4`; `radius-10` on the chat sheet | `radius-10`, `radius-8`, `radius-pill`, `radius-round` |
| Tilt | never | never (the selected row leans `tilt-row-on`) | fixed per part from the Tilt tokens |
| Pressed | travels 2px right, 3px down; `press-board` | travels 1px down-right; `press-paper` | scales to 96% |
| Selected | n/a | `highlighter` paper | `sticker-on` gold ring, `tilt-sticker-on` |
| In bundle.css | `kr-board`, `is-mat`, `is-frame` | `kr-sheet`, `is-2`, `is-3`, `is-card`, `is-warm`, `is-kraft`, `is-hl` | `kr-sticker` and the colour classes `kr-blue` … `kr-attn` |

Rules

- A piece casts one shadow in `amb`, down and to the right, and the shadow never changes direction. The tallest pieces add `amb-2` further out.
- A sticker is stuck to one piece; never let it straddle two.
- Cardboard is never white and never carries body copy; words on cardboard are labels in `ink` (on `board`, `kraft`, `mat-green`) and nothing on `mat-red`.
- Paper inside paper (a popover on the leaf, a code chip in a row) uses `paper` or `paper-2` and a `lift-paper-1` shadow: it is still a separate piece.
- The composer card sits in its terracotta frame with `recess`: the one place a piece is set into another rather than laid on it.
