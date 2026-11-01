# IconButton

A button that is only a glyph. The rail's navigation is a column of 44px stickers; everything smaller is a 30px disc.

- `kr-ib` is a 44px rail sticker: `kraft-2` by default, `radius-10`, `gloss`, a `sticker` cut, the glyph in `white` at 24px with `space-10` padding. Colour it with the identity classes: `kr-blue` sessions, `kr-blue-2` agents, `kr-amber` skills and background, `kr-max` workspaces, `kr-red` memory, `kr-green` MCPs, `kr-teal` workflows, `kr-violet` kanban, `kr-red-2` pull requests. The selected one is `is-on`: `sticker-on` gold ring, `tilt-sticker-on`, scale 1.08. A `kr-nb` badge inside it sits on the top-right corner.
- `kr-ib is-sm` is a 30px round sticker for an action on a row or a card (copy, send, delete), glyph at 16px, `sticker-s` cut.
- `kr-ib is-sm is-paper` is a 30px paper disc with `lift-paper-1` for quiet actions on a sheet; it lifts on hover and sits down on press like a paper button.
- `kr-rail` lays rail stickers out in a 72px column with `space-8` gaps on a `kr-board`; `is-row` runs them horizontally for narrow screens.

Give every icon button an `aria-label` (and a `title` on the rail) and mark the current rail item `aria-current="page"`. Hover tilts a sticker `tilt-hover`; press scales it to 94%. Disabled is printed grey like a disabled button. Icons come from `assets/Icons`, inlined with `currentColor`.
