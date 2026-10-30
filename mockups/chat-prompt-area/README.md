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
| `Paper.dc.html` | Page "Paper": the full shell (icon rail, workspace sessions, chat) as cut paper. Sessions are folder tabs over ruled index cards with a highlighter stroke on the selected row, a stepped paper pinwheel on busy rows and sticker badges. Sheets with hard offset shadows for depth, kraft notes with tape for the user, folder tabs, index-card composer, rubber-stamp YOLO and MAX. Every animation runs on `steps()` at 8–12 fps so it reads as stop motion: capsules boil while working, notes drop in, stamps thump down. |
| `Agents.dc.html` | Page "Paper": the Agents list page in the same cut-paper language. Rail with Agents selected; header with a hand-written count, search field and New agent button. Each agent is an index card with three things only: a taped-on 12×12 pixel portrait drawn as inline SVG rects from the palette tokens, the name, and the description. Clicking a card lifts it and runs a highlighter under the name; search is live; a dashed "Make a new agent" card closes the grid. |
| `Future.dc.html` | Page "Futuristic": the full shell as a HUD console. The sessions panel is a mono manifest with cyan bracket on the selected row, blinking amber segment on busy rows and amber square badges. Bracket corners, 1 px lines, mono microlabels, cyan accent with amber for YOLO and Max. Scan line across the working capsule, panels unclip, the reply types in. |
| `Saas.dc.html` | Page "Professional SaaS": the full shell as a conventional B2B product. White cards on a cool grey ground, 1 px borders, one indigo accent, Inter + JetBrains Mono. Rail with labelled icons and a brand tile; sessions panel with search, New button, All/Active segmented control and collapsible workspace groups with counts; status is a pill (Running, Done, Needs review). Chat header with breadcrumb, status pill and branch chip; underline tabs; capsules are bordered cards with a progress bar while working. Composer is a bordered card with a radio-list model menu and a segmented effort control. Motion is 150–250 ms eases, no bounce. |
| `canvas.json` | Canvas index (pages, frames, order, notes). |

## Paper Chat design system

The Paper variant has its own design system, published as a Design System artifact at
https://claude.ai/artifact/M426mkexTAeeJ552WsSWFh and mirrored under `design-system/`:

- `tokens.json` — one theme (Paper): 46 colour tokens, four type families (Fraunces, Nunito,
  Caveat, Courier New) in 22 styles, spacing by pixel value, radii, 15 hard offset shadows, a
  tilt scale for stickers and stamps, and stroke widths.
- `README.md` and `motion.md` — the brand book for a consuming agent (principles, voice, colour,
  type, surfaces, grain, states, iconography) and the full stop-motion table.
- `components/bundle.css` — every component as `pp-*` classes with `is-*` states, built from the
  Paper board's own CSS; `components/<Name>/preview.html` + `README.md` for 26 components
  (Sheet, Grain, Rail, FolderTab, ChatTab, SessionRow, SearchField, Header, Button, SendButton,
  StampToggle, Sticker, KindDot, Note, Said, Reply, Capsule, Ledger, Todo, Scrap, Composer,
  ModelTag, Gauge, Popover, MaxStamp, Inline) and the cover.
- `assets/Icons/` — the 26 single-ink icons (rail, fields, marks) as SVG.

The canvas records it in `designSystems` and carries its tokens at `project/ds/paper-chat/`.

## Notes

- The canvas has four pages: App shell (the full interface, states and anatomy), Paper
  (shell plus the Agents list page), Futuristic and Professional SaaS (one full-shell variant each on the same faked sessions,
  same interactions: session switching, tabs, expanding capsules, model + effort popover,
  gauge, YOLO, send/stop).

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
