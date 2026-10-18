A 44px sidebar row for one chat session: the agent's avatar, title, meta line and a state indicator on the right.

**Provide:** `title`, `agent`, `agentId`, `glyph`, `meta` (branch or last step, mono), `time`, `state`, `selected`, `onClick`.

- `busy`: conic `at-sweep` border + spinning ring + sliding bottom bar; the avatar pulses. `idle`: the breathing `ok` dot. `attention`: amber card pulse and a pulsing `warn` dot (a chip would crush the title in a 264px sidebar). `done` / `failed`: a chip, avatar badge.
- Titles truncate; the meta line truncates the mono part first.
- Hover lifts 2px and lightens the border; selected gets `accent-tint`.
