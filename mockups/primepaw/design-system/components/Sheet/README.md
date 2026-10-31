# Sheet

A cut sheet of paper: the base surface for cards, rows, capsules and lists.

Use `pp-sheet` for anything that sits on the paper: it is `sheet` on a hairline in `line` with `shadow-sheet`. Add `is-sm` or `is-lg` to change the shadow step. `pp-card` is the composer and popover variant on `card` with the pink `blush` top edge; `is-focus` lifts it, `is-max` turns the border to `max`. `pp-deck` wraps a sheet to show two more sheets stacked behind it (`deck-1`, `deck-2`), the way every capsule is drawn.

You provide the content and a width; the sheet takes the height of its content. Do not round the corners beyond `radius-3` and do not add blur.
