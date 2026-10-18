The one card. Flat at rest; its `state` picks a glow from the shadow tokens.

**Provide:** `children`; optional `state`: `open` (dark `shadow-raised`), `live` (`glow-live`), `busy` (conic sweep border), `done` (brief `glow-done` then flat), `attention` (amber pulse + `warn-tint` wash), `danger`, `selected` (`accent-tint` wash), `max` (`glow-max` bloom — one per screen).

- `surface-100`, 1px `line-100`, `radius-lg`, `space-4` padding. Hover only lightens the border.
- Nest fills one step: chips and tiles inside are `surface-200`.
- Use `GlowCard` for connector cards, skill cards, agent definitions, popovers (`open`), and the model menu (`open`, or `max` when effort is at max).
