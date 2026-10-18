A node in the team interaction graph: a 56px disc stroked in the agent's hue, its glyph inside, name below.

**Provide:** `name`, `id` (for the hue), `glyph`, optional `state` (`live` pulses and glows in the hue; `selected` washes the fill 18%; `failed` turns `err` with `glow-danger`).

- Edges between nodes are 1.5px `edge`; an edge carrying a message right now becomes `edge-active` with a flowing dash and a soft `glow-accent` drop-shadow (`.at-edge--active`).
- Lay nodes on a 24px grid; keep ≥ 32px between discs so pulse rings don't overlap.
- Clicking a node selects it and filters the thread to that agent; the hue in the thread avatars matches.
