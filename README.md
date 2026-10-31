# claude-design

Design work for several apps, kept in one place. Each app owns its screens; each design system is a sibling any app can link to; loose explorations live in `mockups/` and `animations/`.

```
design-systems/        one folder per system — tokens, brand book, component bundle, previews
  agent-teams/
apps/                  one folder per app — its screens, flows and app-specific notes
  agent-teams/
    screens/           interactive .dc.html artboards + canvas.json
mockups/               explorations not tied to a system (A/B directions, anatomy boards)
animations/            motion studies (loaders, session states, light effects)
```

## Conventions

- **A system is self-contained.** `design-systems/<name>/` holds `tokens.json` (source of truth), the compiled `tokens.css`, `README.md` (the brand book), `USAGE.md` (how to load it), and `components/` with one `bundle.js` + `bundle.css` and a `<Component>/README.md` + `preview.html` per component. A system never references an app.
- **An app links to its system, never copies it.** `apps/<app>/screens/ds/<system>` is a symlink to `../../../../design-systems/<system>`; the artboards load `ds/<system>/tokens.css`, `components/bundle.css` and `components/bundle.js`. One app may link several systems; several apps may link one.
- **Screens are `.dc.html` pages** that render standalone from any static server (each screen folder carries `support.js`, the DC runtime) and on a claude.ai Design canvas; `canvas.json` is the canvas index. Each `screens/README.md` lists its boards and what to try.
- **Naming:** kebab-case folders, the app and its primary system usually share a name (`apps/agent-teams` ↔ `design-systems/agent-teams`), but that is a convention, not a rule.
- **Published twins:** when a folder mirrors a claude.ai artifact, its README links the artifact. Edit here and republish, or edit there and re-sync; do not let the two drift silently.

## What's here

| Folder | What | Published twin |
|---|---|---|
| `design-systems/agent-teams/` | Dark, glow-driven system for the agent-teams app: 49 tokens, 15 React components | https://claude.ai/artifact/DhusFk34yTB6vNqpvFvT66 |
| `apps/agent-teams/screens/` | 12 interactive screens: agent builder, session chat, team graph, swimlanes, skills, connectors, launcher, team space, board, 3 compaction studies | https://claude.ai/artifact/NaBZvNXBYvMsXdRmX34362 |
| `mockups/agent-turn-capsules/` | Two directions for collapsing an agent's turn into one row; the capsule anatomy the system adopted | https://claude.ai/artifact/7984nwgZoW7KB1GmfjrwuF |
| `mockups/primepaw/` | Primepaw, the chat app, in the Paper design language: app shell, Agents, Workspaces, Kanban + cork board, Memory, Background, Skills, MCP servers as 12 interactive boards, plus the Paper Chat design system under `design-system/` | https://claude.ai/artifact/KRFPT94y9P7bNHML3wQxis |
| `animations/` | Chat loading indicators, session card states, aurora and signal-field light effects | — |

`animations/*/_ds/meridian-exposure-design-system-*` is an older financial-dashboard system embedded by the canvas export; it belongs under `design-systems/meridian-exposure/` when it is next touched.
