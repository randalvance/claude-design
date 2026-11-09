# Sheet

A piece of paper laid on the desk or on a board. Paper carries words: rows, fields, filters, the chat sheet, the leaf, cards.

`kr-sheet` is `sheet` paper with a `face` gradient over the `pulp-paper` tile (the workshop wall texture), a 1px border at 7% black and `lift-paper-1`. `is-2` lifts it a step (a hovered or selected row); `is-3` is tall paper with the `edge-2` cut and `lift-paper-3`, cut `radius-10` (the chat sheet, the leaf, the composer card). Colour it with `is-card` (the whitest paper, closest to the reader), `is-warm` (the chat sheet), `is-inner` (paper inside paper: capsule bodies, popovers), `is-kraft` (tabs and folders) or `is-hl` (selected, under a marker). `is-flat` removes the shadow for paper printed as part of a larger piece.

`is-strip` is the strip that heads a workspace in the sessions board: paper tinted with the workspace colour (`--wc`, the colour of its dot, mixed 62% into `sheet`), the same `pulp-paper` texture as the rows, `radius-5`, a short shadow; its count and caret are written with `kr-pen` (Caveat, `ink`, multiplied into the paper), never a badge. Its sessions start 4px below it.

`kr-stack` lays sheets as a plain list: straight and square, one under the other with 4px between them, none overlapping another. The sessions under a workspace strip are such a list; a hovered sheet lifts 1px.

Rules: paper lies straight, the selected row too. Padding is `space-8` to `space-12` on strips and `space-24` on the leaf. Rules printed on paper are `kr-rule`, dashed in `line`. Give a sheet a semantic element (`article`, `li`, `button`) and let the class carry only the material.

`is-hl` is `marker` with its strokes over the paper texture. `kr-marked` marks a row inside a sheet the same way, translucent so the paper shows through.

`kr-task` files a factory task’s sessions together inside that list: a kraft folder, `radius-4`, with a `kraft-2` cut edge. Its tab, `kr-task-h`, is the factory sticker (`kr-sticker kr-green is-s kr-task-fac`), the task key in Courier (`kr-key`), the title and the count in `kr-pen`, with a caret that folds it; the sessions sit in a `kr-stack` inside it in the order the factory runs them. Each carries its stage as `kr-stage`, an 18px `paper-2` chip with the factory’s step glyph in `ink`: Planning, Plan review, Implementation, Testing, Code review. A row’s first slot is a faint robot, or `kr-pin` while that session works. Folded, the tab shows the current `kr-stage`, the pinwheel while it works and a red `kr-nb` when it waits on you.
