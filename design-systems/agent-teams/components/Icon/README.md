The Lucide subset the system ships inline: 24px grid, 2px stroke, round caps, `currentColor`.

**Provide:** `name`, `size` (13 in step tiles, 14 in buttons, 16 default, 22 in nodes), `strokeWidth` (4 for the tiny badge check).

- To add a glyph, paste its Lucide inner markup into `ICONS` in `bundle.js`; keep the 24px viewBox.
- Agent glyphs (`bot`, `zap`, `compass`, `shield`, `search`, `wrench`, `plug`) are what the builder offers; step-kind icons are fixed by `KIND_ICON`.
- Icons never carry meaning alone — pair with a label or `aria-label`.
