# IconButton

A button that is only a glyph. The rail's navigation is a column of 44px stickers; every other icon button is a 30px cardboard disc, the same material as `Button`.

- `kr-ib` is a 44px rail sticker: `kraft-2` by default, `radius-10`, `gloss`, a `sticker` cut, the glyph in `white` at 24px with `space-10` padding. Colour it with the identity classes: `kr-blue` sessions, `kr-blue-2` agents, `kr-amber` skills and background, `kr-max` workspaces, `kr-red` memory, `kr-green` MCPs, `kr-teal` workflows, `kr-violet` kanban, `kr-red-2` pull requests. The selected one is `is-on`: `sticker-on` gold ring, `tilt-sticker-on`, scale 1.08. A `kr-nb` badge inside it sits on the top-right corner. The rail is the one place a button is a sticker: it is navigation stuck to the cardboard rail, not an action.
- `kr-ib is-sm` is a 30px cardboard disc (`radius-round`) for an action on a row, a card or the composer: copy, share, search, send, delete. `board` face with flutes, `board-2` edge, `lift-board-sm`, glyph in `ink` at 16px. `kr-green` is the sage disc (send, done), `kr-red` the terracotta disc (delete, stop), `is-on` a latched disc pressed flat.
- `kr-rail` lays rail stickers out in a 72px column with `space-8` gaps on a `kr-board`; `is-row` runs them horizontally for narrow screens.

Give every icon button an `aria-label` (and a `title` on the rail) and mark the current rail item `aria-current="page"`. A rail sticker tilts `tilt-hover` on hover and scales to 94% on press; a disc lifts and travels like a button. Disabled is printed grey. Icons come from `assets/Icons`, inlined with `currentColor`.
