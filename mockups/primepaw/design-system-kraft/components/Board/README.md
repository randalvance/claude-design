# Board

A piece of cardboard. Cardboard holds things: the rail, the sessions board, the mat under a capsule deck, the frame around the composer.

`kr-board` is the `board` face with `face` light over the flecked `pulp-board` tile, a 1px border in `board-2` at 60% and `lift-board` (a 2px by 3px `board-2` cut edge and the cast shadow). `is-mat` is the sage mat: `mat-green` on `mat-green-2`, `radius-9`, `lift-mat`, with `space-6` to `space-8` padding around the paper it holds. `is-frame` is the terracotta frame: `mat-red` on `mat-red-2`, padded by `stroke-frame`, and the `kr-sheet` inside it is set in with `recess` instead of lifted.

Rules: cardboard runs edge to edge with `space-3` of desk around the page; the rail is 72px wide and the sessions board 300px, both sticky. Cardboard never carries body copy, never tilts and never scales. Boards cast the longest shadows in the system; nothing but the composer frame sits higher than the leaf.
