# Chat prompt area

The composer for the chat app, in the agent-turn-capsule design language (navy ground,
IBM Plex Sans + JetBrains Mono, 28px chip-style pills, kind-coloured dots).

Live canvas: https://claude.ai/artifact/KRFPT94y9P7bNHML3wQxis

## Boards

| File | What |
|---|---|
| `Main.dc.html` | Interactive composer in a thread: rich-text editor with floating format bar, model + effort popover (5-detent slider), fuel-gauge context meter with breakdown popover, YOLO switch, send. Sending appends a bubble and a live capsule; send morphs into a stop button (or ⎋) while the agent works. |
| `States.dc.html` | Seven static states: idle, typing + selection, model popover, Max effort, YOLO on, low fuel, agent working (stop). |
| `Anatomy.dc.html` | Numbered anatomy, motion spec table, the Max-effort moment, gauge geometry, rules. |
| `canvas.json` | Canvas index (frames, order, notes). |

## Notes

- The gauge reads like a fuel gauge: F is a fresh conversation, E is a full context window.
  The arc is what is left; a ghost segment previews what the current draft will consume.
- Max effort is the only state that animates continuously: conic ring, flame slider,
  sparks, MAX tag. Everything else answers an input and respects `prefers-reduced-motion`.
- Demo exaggeration: each typed character counts as 25 tokens so the needle visibly moves.
