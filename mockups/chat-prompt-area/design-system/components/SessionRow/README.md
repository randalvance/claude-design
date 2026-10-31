# SessionRow

One session on an index card: source icon, title, status marks and a hand-written duration.

A `pp-row` button inside `pp-rows`, divided from its neighbours by a dashed hairline. Order inside the row: an optional red `pp-nb is-row` attention badge, the `pp-src` icons, an optional `pp-done` chip, the title in `pp-t` (one line, ellipsis), an optional `pp-subn` subagent count, the `pp-pin` pinwheel on busy rows, then the `pp-dur` duration in Caveat. States: `is-on` paints the highlighter stroke behind the row (skewed, multiply) and sets `aria-current`; `is-busy` turns the duration `amber`. Hover is a flat `paper-2` fill, no lift, so the card stays still.
