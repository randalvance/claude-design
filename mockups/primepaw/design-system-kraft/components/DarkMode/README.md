# Dark mode

The same diorama after dark, set with `data-theme="night"` on any ancestor. Nothing is restyled by hand: every colour token has a night value and `bundle.css` swaps the rest.

- Boards go dark brown, paper warm charcoal, shadows black, and the sticker cut turns parchment.
- `pulp-paper` and `pulp-board` swap to their night tiles, with the light fibers at half strength so the texture stays quiet on dark faces.
- Identity colours on buttons (rail tiles, `kr-btn kr-blue`) mix to 62% into `desk` through `--dye`, because the night identity colours are bright enough to read as ink. White glyphs on them hold 4.5:1.
- A switch slot (`kr-switch`) drops to `desk-2` with a light hairline (`--slot`), because `paper-2` disappears against a night sheet.
- Pen ink (`kr-pen`) screens into the paper instead of multiplying.
