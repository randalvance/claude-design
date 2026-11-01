# Materials

Three materials, each with a fixed recipe. Pick the material by what the part does, then the colour by what it is.

| | Cardboard | Paper | Sticker |
| --- | --- | --- | --- |
| Holds | the rail and its icon tiles, the sessions board, mats, the composer frame, every button and icon disc | rows, fields, tabs, the chat sheet, the leaf, cards, the workspace strips | badges, pills, chips, dots, the paw, the cat |
| Face | `board`, `kraft`, `mat-green`, `mat-red` with `face` on top | `sheet`, `sheet-warm`, `card`, `paper`, `highlighter` with `face` on top | one identity colour with `gloss` on top |
| Texture | `pulp-board` on boards, mats and frames: a flecked, unfluted board. Buttons and discs carry `pulp-paper` over their colour | `pulp-paper` on white paper: the workshop wall, pulp clouds and lit fibers; kraft paper and the composer card plain | none: a sticker is printed |
| At night | dark brown boards; textures swap to their night tiles; identity colours on buttons mix down to 62% into `desk` (`--dye`) | warm charcoal, the night `pulp-paper` tile | the cut turns parchment |
| Border | 1px, the edge colour at 60% | 1px black at 7%, or the edge colour at 40% for tall paper | none |
| Cut edge | `board-2` (or the matching `-2`), 2px right and 3px down | `edge` 1px, `edge-2` 2px for tall paper | `sticker-cut`, 2px (1.5px when small) all round |
| Shadow | `lift-board`, `lift-mat`, `lift-frame` | `lift-paper-1` to `lift-paper-3` | none |
| Corners | `radius-10` (`radius-6` for the button, `radius-9` for a mat) | `radius-3` to `radius-4`; `radius-10` on the chat sheet | `radius-10`, `radius-8`, `radius-pill`, `radius-round` |
| Tilt | never | never (the selected row leans `tilt-row-on`) | fixed per part from the Tilt tokens |
| Pressed | travels 2px right, 3px down; `press-board`; a latched button stays there | a clicked row sits down 1px; `press-paper` | never pressed |
| Selected | `is-on`: pressed flat, face a shade darker | `highlighter` paper | `sticker-on` gold ring, `tilt-sticker-on` |
| In bundle.css | `kr-board`, `is-mat`, `is-frame`, `kr-btn`, `kr-ib`, `kr-ib is-sm` | `kr-sheet`, `is-2`, `is-3`, `is-card`, `is-warm`, `is-kraft`, `is-hl`, `is-strip`, `kr-stack`, `kr-pen` | `kr-sticker` and the colour classes `kr-blue` … `kr-attn` |

Rules

- A piece casts one shadow in `amb`, down and to the right, and the shadow never changes direction. The tallest pieces add `amb-2` further out.
- A sticker is stuck to one piece; never let it straddle two.
- Texture is in the material, not on it: the tile sits between the colour and the `face` gradient, so a tinted piece keeps its texture and its colour, and nothing is textured twice. The page grain (`kr-grain`) is the only layer that goes over everything.
- A workspace strip (`kr-sheet is-strip`) is paper tinted with its workspace colour (`--wc`, the colour of its dot), textured like the rows, and the first card of its deck tucks 3px under it. It is written on, not printed: its count and caret are `kr-pen`, Caveat in `ink` multiplied into the paper, never a sticker or a badge.
- Sessions under a strip are a deck (`kr-stack`): each sheet 3px under the one above with a tiny alternating lean, the first on top, two card edges showing under the last.
- The pinwheel (`kr-pin`) is the one toy: a paper pinwheel, four blades in `red`, `blue`, `green` and `amber` with their folded tips a shade lighter on an `ink` pin, casting one shadow and turning on `dur-loop`. It is not a sticker; it sits on whatever is working.
- Cardboard is never white and never carries body copy; words on cardboard are labels in `ink` (on `board`, `kraft`, `mat-green`), `white` on the destructive button's `mat-red-2`, and nothing on `mat-red`.
- Every button is thick card, the rail’s icon tiles included: its own colour under the same paper texture as the chat sheet and the rows (`pulp-paper`), with a cut edge in a darker shade of that colour. If a part can be pressed and it is not a row, a tab or a switch, cut it this way. A sticker is never pressed.
- Paper inside paper (a popover on the leaf, a code chip in a row) uses `paper` or `paper-2` and a `lift-paper-1` shadow: it is still a separate piece.
- The composer card sits in its terracotta frame with `recess`: the one place a piece is set into another rather than laid on it.
