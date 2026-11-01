# Button

Every button is cut from cardboard. The face is `board` with `face` light over the flecked `pulp-board` tile, the cut edge is `board-2` (2px right, 3px down: `lift-board-sm`), the corners `radius-6`, the label `label` in `ink`. There is no other button material: paper carries words, stickers mark things, cardboard is what you press.

- `kr-btn` is kraft cardboard, for every action including the primary one. The primary action is the one nearest the composer or at the end of a row, not a different colour.
- `kr-green` is sage cardboard, `mat-green` on `mat-green-2` with `ink` (6.3:1), for the committing action on a form: Merge, Run, Save. At most one per sheet.
- `kr-red` is terracotta cardboard, `mat-red-2` on `mat-red-3` with `white` (6.5:1 in paper, 12:1 in night), for a destructive action: Delete, Stop, Discard. Never beside the sage one without a kraft button between them.
- `is-on` is a latched button: it stays pressed, travelled 2px right and 3px down with its edge gone (`press-board`) and its face a shade darker. Use it with `aria-pressed` for filters and modes (Mine, Busy, Following).

Sizes: 32px by default with `space-14` padding; `is-sm` 26px with `space-10` and `radius-4`; `is-lg` 40px with `space-16` and `radius-7`. Icons are 16px (14px small) before the label with a `space-6` gap; inline the SVG with `currentColor`.

States

- Hover lifts the button 1px up and left so its edge grows by a pixel (`lift-board-up`).
- Press travels it 2px right and 3px down until the edge is gone (`press-board`), then it springs back on `ease`.
- Focus is a 2px `ink` pencil ring 3px off the cardboard.
- Disabled is printed grey: `paper-2`, `faint` ink, no edge, no shadow. A disabled button is not cardboard any more.
- Busy keeps the label and puts a `kr-pin` pinwheel sticker where the icon was; set `aria-busy`. Nothing pulses.
- Nothing tilts and nothing scales: a button is a piece of cardboard, so it only travels.
