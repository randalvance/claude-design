# Button

Every button is cut from one of the three materials, and the material says how much weight the action carries.

- `kr-btn kr-btn-sticker` is the primary. A die-cut sticker: solid `blue` with `gloss` across the top, a `sticker-cut` border and no shadow, because a sticker is stuck flat. One per sheet. Hover tilts it `tilt-hover` and grows it 4%; press scales it to 96%, a thumb pressing a sticker down. `kr-red-2` is the destructive sticker (white on `red-2`), `kr-attn` the needs-you sticker (`on-attn` ink on gold), `kr-green` for a done action with a glyph. `is-on` adds the gold `sticker-on` ring for a pressed, stateful sticker (Following).
- `kr-btn kr-btn-paper` is the secondary. A strip of `sheet` paper with the 1px `edge` and `lift-paper-1`. Hover tints it `hover` and lifts it 1px to `lift-paper-2`; press pushes it 1px down-right onto the desk (`press-paper`). `is-on` turns the strip `highlighter` for a stateful secondary (Filters). `kr-kraft` cuts the strip from `kraft` for actions that live among tabs and folders.
- `kr-btn kr-btn-board` is the heavy one. Cardboard: the `board` face with flutes, a 2px by 3px `board-2` cut edge and `lift-board-sm`. Use it for the one committing action on a form (Run, Merge, Save) and never more than one per sheet. Press collapses the edge: the button travels 2px right and 3px down until it sits on the paper (`press-board`). `kr-green` is the sage confirm, cut from `mat-green` with `ink` on it.
- `kr-btn kr-btn-print` is printed, not cut: a 1.5px dashed `bar` outline drawn on the paper for quiet, reversible actions (Pin, Watch, Add label). `is-on` sticks a small gold sticker inside the outline.
- `kr-btn kr-btn-link` is written: `hand` in `blue` with a dotted underline, for actions inside a sentence ("show all 12"). Hover runs a highlighter over it.

Sizes: 32px by default, `is-sm` 26px, `is-lg` 40px. Icons are 16px (14px small) before the label with a `space-6` gap; inline the SVG with `currentColor`.

Rules

- Labels in `label`, sentence case, verb first. A sticker carries at most three words.
- Disabled is printed grey: `paper-2`, `faint` ink, no cut, no edge, no shadow. A disabled sticker is not a sticker any more.
- Focus is a 2px `ink` pencil ring 3px off the piece, 4px off a sticker so it clears the white cut.
- Busy keeps the label and adds a `kr-pin` pinwheel sticker in place of the icon. Nothing pulses.
- Never shadow a sticker, never tilt paper or cardboard, never scale cardboard. Each material presses the way its weight allows: stickers squash, paper sits down, cardboard travels until its edge is gone.
- Text on a sticker only in `blue` (`on-blue`), `red-2` (white) and `attn` (`on-attn`); `green`, `amber` and `kraft-2` stickers carry glyphs.
