# Agent turn capsules

Two directions for collapsing an agent's tool calls, subagent spawns, thinking and
intermediate narration into one compact row per turn, while the final reply renders
outside it as a normal message.

Live canvas: https://claude.ai/artifact/7984nwgZoW7KB1GmfjrwuF

## Boards

| File | What |
|---|---|
| `Main.dc.html` | **A · Capsule** — one 44px row: avatar, "Worked for 3m 12s", kind-coloured dot trail, count chips, live shimmer line. Interactive demo with a replaying live turn. |
| `Anatomy.dc.html` | A's numbered anatomy, motion spec and rules. |
| `AltMain.dc.html` | **B · Deck + timeline** — stacked-card deck, outcome-first title, log-scaled duration sparkline, gutter-clock timeline on expand. Interactive demo. |
| `AltAnatomy.dc.html` | B's anatomy and the A-vs-B trade-off. |
| `canvas.json` | Canvas index (frames, order, notes). |

## Rules shared by both

- Collapsed by default, including the turn in progress.
- The final reply always renders outside the capsule.
- Text is "final" only if nothing follows it in the turn; earlier text is a `said`
  step inside the capsule (prose-styled, no duration, no status icon). While live, the
  capsule's current-step line quotes the latest narration.
- Errors surface in the collapsed state (chip in A, red `!` + red bar in B).
- Subagents nest one level; deeper detail belongs in the Subagents tab.
- Expand animates `grid-template-rows: 0fr → 1fr`; everything respects
  `prefers-reduced-motion`.

Pick A to scan *what happened* (kinds, errors). Pick B to scan *why it took so long*.
