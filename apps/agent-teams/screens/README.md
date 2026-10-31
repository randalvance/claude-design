# Agent Teams — screens

Twelve interactive artboards for the agent-teams app, built on the [Agent Teams design system](../../../design-systems/agent-teams/README.md). Each is a fluid page at 1360px with working controls (click agents, cycle permissions, drag effort, replay animations).

Live canvas: https://claude.ai/artifact/NaBZvNXBYvMsXdRmX34362 · Design system: https://claude.ai/artifact/DhusFk34yTB6vNqpvFvT66

Open any `.dc.html` from a static server (`python3 -m http.server` in this folder); `support.js` is the same DC runtime the `mockups/` folders ship, and `ds/agent-teams-ds` links to `../../../design-systems/agent-teams` so the screens load the real tokens and component bundle.

## Boards

| File | Screen | Try |
|---|---|---|
| `Main.dc.html` | **Create agent** — identity, glyph, model + effort, instructions, skills, connectors, permissions, Yolo; live preview | Rename to re-hash the hue; effort to max; flip Yolo |
| `Chat.dc.html` | **Session chat** — sessions sidebar, thread with done + live turns and a handoff, full composer; compaction built in (robot compactor; instant fold under reduced motion) | Open the model menu for the effort slider; press **Compact now** in the banner |
| `Graph.dc.html` | **Team graph** — orthogonal edges, live motes, blocked edge, inspector follows selection | Click nodes; Live / Replay |
| `Swimlanes.dc.html` | **Team swimlanes** — a lane per agent, bars by step kind, handoff connectors, now-line | Click a bar for its capsule |
| `Skills.dc.html` | **Skills editor** — library, trigger line, Instructions / Resources / Permissions / Arguments | Type into "Would it trigger?" |
| `Connectors.dc.html` | **Connectors & MCP** — health, transport, env, per-tool allow / ask / deny, try-a-call | Cycle a permission; pick Postgres |
| `Launch.dc.html` | **Start a session** — agent or team, worktree, context budget, first message, what-it-sees | Pick Reviewer; add the artifact; switch to A team |
| `Space.dc.html` | **Team space** — plans, artifacts, notes, context; who read what; pin into context | Filter by kind; open an entry |
| `Board.dc.html` | **Board** — five-stage kanban, agent assignees, live / blocked / failed glows, WIP | Select a card and Move → |
| `Compact.dc.html` | **Compaction A** — fold into a summary capsule. *Reduced-motion fallback.* | Autoplays; Replay |
| `Compact2.dc.html` | **Compaction B** — the gauge drains. *Study.* | Autoplays; Replay |
| `Compact3.dc.html` | **Compaction C** — robot compactor. **Chosen.** | Autoplays; stomp speed is a tweak |
| `canvas.json` | Canvas index: frames, order, titles, the installed design system | |

## Rules the screens follow

- Every control is a real `<button>`, `<input>` or `<a>`; icon-only buttons carry `aria-label`.
- Components are mounted from `window.AgentTeamsDS` via `<x-import component-from-global-scope="AgentTeamsDS.…">`; layout and copy stay markup.
- Agent hue = `hueIndex(id)` → `--agent-1…8`; never stored.
- Glow is earned: `glow-live`, `glow-attention`, `glow-danger`, `glow-max` (once per screen), `focus-ring`.
- Everything respects `prefers-reduced-motion`.
