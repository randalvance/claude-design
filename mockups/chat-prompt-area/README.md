# Chat prompt area + app shell

The chat app's main interface in the agent-turn-capsule design language (navy ground,
IBM Plex Sans + JetBrains Mono, 28px chip-style pills, kind-coloured dots): icon rail,
sessions panel grouped by workspace, chat window with deck capsules, and the composer.

Live canvas: https://claude.ai/artifact/KRFPT94y9P7bNHML3wQxis

## Boards

| File | What |
|---|---|
| `Main.dc.html` | Interactive app shell (1440×900). Icon rail with badges; sessions panel with search, workspace filter, Active toggle and collapsible workspace groups (busy spinner + amber duration, Done chip, needs-attention badge, selected row). Chat header with status, branch and zoom controls; nine tabs (Chat, Git, GitHub, Todos, Tools, Subagents, Browser, Terminal, Logs) each with faked content; chat thread of deck-style capsules that expand to steps, narration and a final reply; Artifacts drawer from the right rail. Composer: rich-text editor with floating format bar, model + effort popover (5-detent slider, model defaults), fuel-gauge context meter with breakdown popover, YOLO switch, working-directory chip, send that morphs into a stop button (or ⎋) while the agent works. Session contents and chats are faked; clicking a session swaps the thread. |
| `States.dc.html` | Seven static states: idle, typing + selection, model popover, Max effort, YOLO on, low fuel, agent working (stop). |
| `Anatomy.dc.html` | Numbered anatomy, motion spec table, the Max-effort moment, gauge geometry, rules. |
| `canvas.json` | Canvas index (frames, order, notes). |

## Notes

- The gauge reads like a fuel gauge: F is a fresh conversation, E is a full context window.
  The arc is what is left; a ghost segment previews what the current draft will consume.
- Max effort is the only state that animates continuously: conic ring, flame slider,
  sparks, MAX tag. Everything else answers an input and respects `prefers-reduced-motion`.
- Demo exaggeration: each typed character counts as 25 tokens so the needle visibly moves.
- The sessions panel copies the app's real grouping: workspaces carry a colour square and a
  count; a yellow `!` on the group and a red badge on the row mean a session needs attention.
  Busy rows show a spinner and an amber duration; finished ones a green Done chip.
- Adaptive thinking: the slider is effort, not a thinking budget. Each model carries its own
  default effort (Fable 5.1 / Sonnet 5.5 High, Opus 5.5 / Haiku 5.5 Medium); switching models
  snaps to it until the user overrides. "Show reasoning summary" is the only visibility control.
