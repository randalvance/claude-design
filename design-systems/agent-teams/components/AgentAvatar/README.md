The face of an agent everywhere it appears: a glyph on `surface-200`, ringed or filled in the agent's identity hue.

**Provide:** `id` or `name` (hashed to `agent-1`…`agent-8` via `hueIndex`), `glyph` (Lucide name chosen in the agent builder), `size`, optional `status`.

- `status="live"` adds the 1.6s pulse ring in the agent's hue; `done` pops a green check badge; `error` a red cross; `ask` an amber dot.
- `filled` paints the hue as the ground with `ink-on-accent` glyph — use in the builder preview and the team graph, not in dense lists.
- `AgentAvatar.Stack` shows a team: overlapping 22px avatars with a `surface-100` keyline. Teams have no colour of their own.
- Never tint the agent's messages with its hue; the avatar is the only identity carrier in a thread.
