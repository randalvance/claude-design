A dark, glowing system for an app that runs teams of AI agents: defining agents, skills, connectors and MCP servers; chatting with one agent; watching a team talk to each other. Agent activity is the subject of every screen, so the system spends its colour on *what the agents are doing* and keeps everything else quiet navy.

Seven surfaces share these rules: the agent builder, the chat launcher, the session thread, the prompt composer, the skills editor, the connectors / MCP editor, and the team interaction graph.

## Content fundamentals

- **Tone:** direct, operational, a little warm. The app reports what happened and what it needs; it never cheers. "Worked for 3m 12s", "Waiting on you", "pytest failed in 2 files" — not "Great news!".
- **Person:** the agent is *it* or its name ("Scout finished the audit"); the user is *you* only when the app needs something ("Needs your input"). Agents never say "I" in system chrome — that is reserved for their own messages.
- **Casing:** sentence case everywhere, including buttons ("Replay turn", "Add connector"). Step kinds, chip labels and mono meta are lowercase ("4 bash", "1 subagent").
- **Numbers and time:** elapsed times as `0:38` while live and "3m 12s" once done; tabular numerals always (`timer`, `caption`). Counts lead their noun ("7 steps"). Token counts abbreviated ("68k / 200k").
- **Status vocabulary** is fixed: **Working · Waiting · Done · Failed** for a turn; **Busy · Idle · Needs input · Done** for a session; **Thinking · Said** for narration. Don't coin synonyms.
- **Narration inside a turn** is quoted as the agent wrote it, set in `ink-200` italic prose; the final reply is never quoted or truncated.
- **Emoji:** none in chrome. Exclamation marks: none. Ellipses only in the live shimmer line.
- **Danger copy** is plain and short: the Yolo toggle reads "Yolo mode" with help text "Runs tools without asking." No warning icons stacked on warning colour.

## Visual foundations

### Colour
- One theme, **dark**. The page is `bg-000`; chrome is `bg-100`; anything you can click or open sits on `surface-100` with a `line-100` hairline. Nest fills one step at a time: `surface-200` inside `surface-100`, never two steps.
- **Text:** `ink-100` for everything the user must read, `ink-300` for meta, `ink-400` only for decoration or timestamps beside a readable label. `ink-200` is reserved for quoted narration.
- **One accent.** `accent` is the only interactive colour: primary buttons, the focus ring, slider fills, the live avatar ring. Text on an accent fill is `ink-on-accent`, never white.
- **Step kinds carry colour, not shape** (except `kind-said`, a square): `kind-bash`, `kind-read`, `kind-edit`, `kind-ask`, `kind-subagent`, `kind-think`, `kind-said`. Use them on trail dots, step icon tiles and the dot in a count chip. They are not status colours.
- **Status** is `ok` / `warn` / `err`, each with a 14% `-tint` fill for chips and washes. `danger` equals `err` on purpose: Yolo mode is a risk state and should look like one.
- **Agents are hued, not statused.** Each agent gets one of `agent-1` … `agent-8` by a stable hash of its id, plus a glyph. The hue paints its avatar ring, its node stroke in the team graph and its lane rail; its messages do not get tinted bubbles. A team is a stack of avatars, no team colour.
- **Glow colours** (`glow-accent`, `glow-ok`, `glow-warn`, `glow-err`, `glow-subagent`) are 35–45% alphas of their base. They never fill a surface; they live in `box-shadow`, conic borders and pulse rings.

### Glow — the elevation model
Nothing floats by default. A surface earns light for one of four reasons, and the shadow tokens are the whole vocabulary:
- **Live** (`glow-live`): an agent is working inside this card right now. On the capsule it is a 45% `glow-accent` mixed into the border; on a session card it is the conic sweep (see Motion).
- **Open / hovered** (`shadow-raised`): dark drop only, no colour — depth without meaning.
- **Needs you** (`glow-attention`): amber halo, pulsing. Pair with `warn-tint` wash on the card.
- **Danger** (`glow-danger`): Yolo mode on, a failed node.
- **Max effort** (`glow-max`): the effort slider at its last stop. A two-colour bloom (`accent-soft` core, `glow-subagent` outer) — the only place two hues glow together. Use it once per screen at most.
- Keyboard focus is `focus-ring`: a 2px `bg-000` gap then 2px `accent`, so it reads on every surface. Never `outline: none` without it.

### Type
- **IBM Plex Sans** for all UI and prose; **JetBrains Mono** for anything the machine produced: commands, paths, ids, timers, endpoints. Both hosted on Google Fonts.
- Scale: `display` 28 → `heading` 18 → `title` 14/600 → `body` 14/400 → `label` 13 → `caption` 12 → `chip` 11. Mono: `code` 12.5, `meta-mono` 11.5, `timer` 12, `numeral` 22.
- Titles are 600, never 700. Tracking −0.01em on `display`, `heading`, `title`; none elsewhere.
- Mono meta lines truncate with an ellipsis and reveal the full line on hover. Prose never truncates.

### Spacing & layout
- 4px grid. Row heights: a capsule or session row is **44px** tall collapsed; a step row is 32px; a chip is 20px.
- Cards pad `space-4`; capsule rows pad `space-2` × `space-3`; the composer pads `space-3`.
- A thread column is max 920px, centred, with `space-4` gutters at phone width. Editors (agent, skill, connector) are a 2-column form at ≥960px: fields left, live preview right.
- The team graph fills its pane; nodes are 56px discs on a 24px grid, edges 1.5px.

### Shape
- Controls `radius-md` (8), cards and rows `radius-lg` (12), bubbles `radius-xl` (14) with one `radius-sm` (4) tail corner toward the author, chips and toggles `radius-pill`.
- Hairlines do the structure: 1px `line-100` at rest, `line-200` on hover, `line-300` when open. Borders are never thicker than 1px except the 2px rule above a step list.

### Motion
Delight comes from a few recurring moves, all on one easing: `cubic-bezier(.2,.8,.2,1)`. Overshoot `cubic-bezier(.2,.8,.3,1.4)` only for pop-ins under 500ms.
- **Pop in** (350ms, overshoot): trail dots, the done badge, a new node.
- **Cascade** (400ms, 55ms stagger, 6px slide): step rows when a capsule opens; connector cards when a list loads.
- **Expand** `grid-template-rows: 0fr → 1fr` (380ms): never animate measured heights.
- **Draw** (`stroke-dashoffset`, 500ms): success checks, graph edges on first paint.
- **Shimmer** (1.8s linear loop, text-clipped gradient `ink-300 → #fff → ink-300`): the one line that says what is running right now. One shimmer per screen.
- **Pulse ring** (1.6s ease-out loop): a 2px `accent` ring scaling 0.8 → 1.7 and fading, around a live avatar.
- **Busy sweep** (3.2s linear loop): a conic gradient of `glow-accent → accent-soft` rotating behind a 1px mask around a busy session card.
- **Breathe** (3.6s): the idle `ok` dot scaling 0.85 → 1.05 with a `glow-ok` halo.
- **Attention pulse** (2.4s): `glow-attention` in and out.
- **Max-effort bloom**: when the slider reaches the last stop, `glow-max` fades in over 600ms and the thumb pops; the bloom then breathes at 4s. Leaving the stop fades it over 300ms.
- **Yolo on**: the track slides to `danger`, `glow-danger` fades in 300ms, the knob pops once. No loop.
- Everything collapses to instant under `prefers-reduced-motion`; glows become static at their mid value.

### States
- Hover: border → `line-200`; rows tint `surface-200`; no scale, no lift (lift is for `shadow-raised` on open only).
- Pressed: colour-only. Disabled: 40% opacity, `ink-400` text, no glow.
- Selected (a node, a session): `accent-tint` wash + `line-300` border.
- Error surfaces in the collapsed state too: a red chip or dot is never hidden behind an expand.

## Iconography
- **Lucide**, 24px grid, 2px stroke, round caps, inline SVG inheriting `currentColor`. Step-kind icons sit in a 24px `surface-200` tile at `radius-md`, coloured by their kind token.
- **Agent glyphs** are also Lucide, one per agent, chosen by the agent's author in the builder; they render in `ink-on-accent` on the agent's hue, or in the hue on `surface-200`.
- The app's own mark is a four-point spark (`M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z`) — plain, no logo yet. No emoji, no unicode-as-icon.
- Status is never icon-only: a dot or chip always has a word nearby or a label for screen readers.
