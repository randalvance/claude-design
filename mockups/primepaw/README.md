# Primepaw (Paper diorama)

Primepaw is the chat app. Its interface is a paper diorama: cardboard and paper cut-outs laid on one cream sheet, lit from the
top left so each piece casts one shadow down and to the right. Motion is quick and smooth, and Caveat, Nunito, Fraunces and
Courier New carry the type. The system behind it is Kraft (see below).

Live canvas: https://claude.ai/artifact/KRFPT94y9P7bNHML3wQxis

## Boards

Every screen is a live demo with a light board and a `…Dark` board.

| File | What |
|---|---|
| `Diorama.dc.html` | The app shell (icon rail, sessions grouped by workspace, chat with capsules, composer) as a live paper diorama: cardboard and paper cut-outs laid on one cream sheet, lit from the top left so each piece casts one shadow down and to the right. The rail, the sessions board, the capsule mats and the composer frame are cardboard with a thick, darker cut edge; the chat column is a sheet of paper with the thread and the composer on a second sheet laid over the tabs; sessions are paper strips and capsules are cream plates on green mats. The rail icons, the Select button and the send disc are coloured cut-outs carrying the same paper texture as the chat sheet and the session rows, with a cut edge in a darker shade of their own colour (the rail name is the tooltip); the paw, badges, the busy pill and the cat peeking over the composer are stickers, stuck flat with a white cut border and no shadow. Boards run edge to edge with a 3px margin. The Advanced options switch, the YOLO button, the effort levels and the picker checks follow the Kraft design system's toggles: a thick-card pull-tab sliding in a slot cut into the paper with on and off handwritten in it, cardboard that stays pressed flat when on (terracotta for Max), YOLO as a rubber stamp that is a faded black outline when off and red ink when on, a green sticker check. The white paper (the chat sheet, the leaf, rows and fields) carries the paper texture of the Factory Overseer workshop walls with its colour kept, cardboard is a flecked board, the workspace headers are paper strips tinted with their workspace's colour and textured like the rows, their count and caret written in pen ink, the first session tucked under its header, and the prompt box stays plain. Hovering a session row shows a three-dot menu mark at its far right, in space kept for it. An open session's title bar and tab strip take the same paper colour as its workspace header. Tabs carry the same paper texture and lead with an icon, unselected ones are a lighter cut of the workspace's paper, and a capsule's timer is a dark blue sticker. Popups are torn sheets of paper taped over the composer, and the fuel gauge opens one that breaks down the context window. The session title is handwritten like the greeting, can be rewritten by clicking it, and has a button that generates a new one. Big titles are ink soaked into the paper, and a selected row is real highlighter with the paper showing through. Sessions under a header stack like a deck of cards, and a working session carries a paper pinwheel: four coloured blades with folded tips on an ink pin, turning. Night theme included. |
| `DioramaDark.dc.html` | The same diorama as its dark mode variant, opening in the night theme, with the rail button to flip back to day. Generated with `Diorama.dc.html`. |
| `DioramaSession.dc.html`, `DioramaSessionDark.dc.html` | The same live shell opened on a session with its side panel showing. Tabs at the right of the strip open it. Artifacts are clipped to a cardboard clipboard with one tab per artifact, a version stepper, and Copy, Download and Ask on the side. Each artifact also shows in the thread as a paper chip. The side chat is a legal pad whose asides stay out of the session, with Put in chat to carry an answer into the composer. With both open they stack, and the panel's left edge drags to resize. |
| `DioramaAgents.dc.html`, `DioramaAgentsDark.dc.html` | Agents list: index cards with a taped 12×12 pixel portrait, a highlighter on the picked name and a Start a chat button. |
| `DioramaAgent.dc.html`, `DioramaAgentDark.dc.html` | Agent edit page: sticky header with the portrait and editable name, then description, system prompt, preferred model, MCP servers and skills. |
| `DioramaSkills.dc.html`, `DioramaSkillsDark.dc.html` | Skills list: one card per skill with a stamped source, a pull-tab toggle and usage. |
| `DioramaSkill.dc.html`, `DioramaSkillDark.dc.html` | Skill edit page: editable name and slash command, description, trigger phrases, instructions, files, who it is on for and usage. |
| `DioramaWorkspaces.dc.html`, `DioramaWorkspacesDark.dc.html` | Workspaces list: cards with a colour spine, linked folders and New session. |
| `DioramaWorkspace.dc.html`, `DioramaWorkspaceDark.dc.html` | Workspace edit page: colour swatches, linked folders, extra context, memory, Kanban board, agents and skills. |
| `DioramaMemory.dc.html`, `DioramaMemoryDark.dc.html` | Memory: tabs for Global, Workspaces and Agents, facts in sections, and the 4 KB budget ruler. |
| `DioramaMCPs.dc.html`, `DioramaMCPsDark.dc.html` | MCP servers: every server on one timetable sheet, with a side drawer for its tools and connection. |
| `DioramaKanban.dc.html`, `DioramaKanbanDark.dc.html` | Kanban boards list: one card per board with a stamped source, counts and sync. |
| `DioramaBoard.dc.html`, `DioramaBoardDark.dc.html` | One board as a framed cork board with pinned sticky notes, plus a dependencies view and a card drawer. |
| `DioramaBackground.dc.html`, `DioramaBackgroundDark.dc.html` | Background jobs: a timetable sheet of every job and workflow, with a side drawer for run history. |
| `canvas.json` | Canvas index: the Paper diorama page, its frames, order and notes. |
| `support.js` | The runtime the boards load. |

All screens share the rail, one paper sheet for the content, the wall texture on paper, thick-card buttons, stickers with a cut edge, paper pinwheels, torn-paper popups, a paper pull-tab toggle and real highlighter on selected rows. Stamps stay ink on the paper and the Board keeps its cork. Kraft's "One way to do each thing" section lists the shared rules: type scale, heading levels, header and button sizes, tabs, highlighter, hover and status colours.

## Kraft design system

The diorama's material system is Kraft, published as a Design System artifact at
https://claude.ai/artifact/PJrLaykUz6ZwqcxZe7TswV and mirrored under `design-system-kraft/`:

- `tokens.json` — two themes (Paper, Night): 48 colour tokens for the cream desk, the three
  cardboard faces and their cut edges, the papers, the ink and the sticker colours; the same four
  type families in 10 styles; spacing and radii by pixel value; 14 shadows that are a solid cut
  edge plus one soft cast shadow (`lift-paper-1..3`, `lift-board`, `lift-board-sm`, `lift-board-up`,
  `lift-mat`, `lift-frame`, the `press-*` states) and the shadowless sticker cuts (`sticker`, `sticker-s`, `sticker-on`); tilt,
  stroke, texture and motion scales.
- `README.md` and `materials.md` — the brand book (three materials, one light, flat stickers,
  depth by stacking, colour, type, motion, grain, textures) and the material recipe table.
- `components/bundle.css` — `kr-*` classes for the materials (`kr-board`, `kr-sheet`,
  `kr-sticker`) and the parts cut from them: Button (every button is thick card with the paper texture:
  kraft, blue, sage for the confirm, terracotta for the destructive one, latched flat when on),
  IconButton (rail tiles and discs), Toggle (a paper pull-tab in a cut slot), Sheet, Board, Sticker, Tab,
  Title, Stamp, Popup, Note, Cork, Capsule, Gauge, Clipboard, LegalPad and ArtifactChip, each with a `preview.html` and `README.md`, a Dark
  mode card, and the cover.
- `assets/Icons/` — the 26 single-ink icons as SVG.

The canvas records it in `designSystems` too and carries its tokens at `project/ds/kraft/`.

## Notes

- The canvas has one page, Paper diorama: the shell and every other screen stacked top to bottom, light on the left and dark on the right, with notes in a third column. The earlier Paper page, its 12 boards and the Paper Chat design system were removed; they live in git history before this commit. The Paper Chat artifact itself is still published at https://claude.ai/artifact/M426mkexTAeeJ552WsSWFh.

Every screen has a dark mode board, generated with its light one. The `theme` prop sets which it opens in, and the rail button flips it.

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
