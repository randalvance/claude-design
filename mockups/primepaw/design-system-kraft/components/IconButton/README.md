# IconButton

A button that is only a glyph. The rail's navigation is a column of 44px cardboard tiles; every other icon button is a 30px cardboard disc. All of it is the same material as `Button`.

- `kr-ib` is a 44px rail tile: thick card in `kraft-2` by default, `radius-10`, the `pulp-paper` texture under the `face`, a 1px dark hairline, and a cut edge 2px right and 3px down in a darker shade of its own colour (`--c` mixed 55% into `edge-2`) over `amb`; the glyph in `white` at 24px with 9px padding. Colour it with the identity classes, which set `--c`: `kr-blue` sessions, `kr-blue-2` agents, `kr-amber` skills and background, `kr-max` workspaces, `kr-red` memory, `kr-green` MCPs, `kr-teal` workflows, `kr-violet` kanban, `kr-red-2` pull requests. The current one (`is-on`, `aria-current`) stays pressed flat with its face a shade darker. At night the colour mixes to 62% into `desk` (`--dye`) so the white glyph holds 4.5:1.
- `kr-ib is-sm` is a 30px cardboard disc (`radius-round`) for an action on a row, a card or the composer: copy, share, search, send, delete. `board` face with the `pulp-paper` texture, `board-2` edge, `lift-board-sm`, glyph in `ink` at 16px. `kr-green` is the sage disc (send, done), `kr-red` the terracotta disc (delete, stop), `is-on` a latched disc pressed flat.
- `kr-rail` lays rail tiles out in a 72px column with `space-8` gaps on a `kr-board`; `is-row` runs them horizontally for narrow screens.

Give every icon button an `aria-label` (and a `title` on the rail) and mark the current rail item `aria-current="page"`. A rail tile and a disc both lift 1px up and left on hover and travel 2px right and 3px down on press, like every button. Disabled is printed grey. Icons come from `assets/Icons`, inlined with `currentColor`.
