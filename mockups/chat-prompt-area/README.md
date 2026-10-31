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
| `Agents.dc.html` | Page "Paper": the Agents list page in the same cut-paper language. Rail with Agents selected; header with a hand-written count, search field and New agent button. Each agent is an index card with a taped-on 12×12 pixel portrait drawn as inline SVG rects from the palette tokens, the name, the description and a Start a chat button (sheet with an ink border and hard shadow; fills blue once pressed and the footer line names the agent). Clicking the card itself lifts it and runs a highlighter under the name; search is live; a dashed "Make a new agent" card closes the grid. |
| `Agent.dc.html` | Page "Paper": the Agent edit page. Sticky header with a crumb back to Agents, the taped 12×12 portrait (Change portrait cycles the sprites), the name as an editable serif title with a live slug, a hand-written save state, Delete agent (dashed red) and Save agent (blue; kraft-grey while there is nothing to save, thumps a green Saved sticker down). Two columns of index cards: Description and Personality (trait stickers plus free text) and System prompt (ruled textarea with a character and token count) on the left; Preferred model (highlighter radio rows with the model swatch and its default effort), MCP servers (paper switches with tool counts) and Skills (ink checkbox rows with a red tick) on the right. Every edit marks the page dirty. Delete opens a kraft confirmation note; Tear it up replaces the page with a torn-paper scrap and an Undo. |
| `Workspaces.dc.html` | Page "Paper": the Workspaces list page. Each workspace is an index card with its colour painted as a spine down the left edge, the name (highlighter when picked), the linked folders in mono with a folder glyph, and one hand-written line: agents, memory facts and the Kanban board it is tied to. Cards with sessions working show a turning amber marker and a count. Every card has a New session button (fills blue once pressed, the footer names the workspace). Search matches names, folders and boards; a dashed "Make a new workspace" card closes the grid. |
| `Workspace.dc.html` | Page "Paper": the Workspace edit page. Sticky header with a crumb back to Workspaces, a taped colour chip with the initial, the editable serif name with a live slug, six colour swatches, the save state, Delete workspace and Save workspace. Left column: Linked folders (mono paths with a green git marker or a grey "no git", unlink ×, Add a folder which adds the next fake path), Extra context (ruled textarea with character and token counts) and Memory (facts learned by sessions here with where they came from; pin to keep, × to forget, write your own and press Enter or Remember). Right column: Kanban board (a single highlighter row for the linked board with its card count, Open board and Unlink; when nothing is linked the row is dashed, says so, and Link a board opens a small floating list of the boards in Kanban that overlays the page instead of pushing it down), Agents relevant here (checkbox rows with 12×12 portraits; unchecked ones go grey), Skills and MCP servers (paper switches with tool counts). Delete opens a kraft note that says the folders on disk are never touched; Tear it up shows the torn-paper state with Undo. |
| `Kanban.dc.html` | Page "Paper": the Kanban boards list. One index card per board with a rubber-stamped type in the corner (Local, Jira, GitHub), the source in mono (Jira key and host, GitHub repo, or "lives on this machine"), To do / Doing / Done counts as tags, and the workspaces it is tied to as colour chips. Jira and GitHub cards carry a Sync button (turning arrow while pulling, then a green "synced just now") and a hand-written sync state with how many tickets are new since; local cards say there is nothing to sync. Sync all in the header runs every synced board. Search matches names, types and workspaces; clicking a card opens it (the footer says so, the cork board is the next artboard down). |
| `Board.dc.html` | Page "Paper": one board as a framed cork board. Header with a crumb back to Kanban, the board name and a Jira stamp, a hand-written card count and sync state, the workspace chips, Sync with Jira (pulls a new pink note in) and Add card (pins a blue local note that goes to Jira on the next sync). Five columns (Backlog, To do, Doing, Review, Done) as kraft labels pinned with a red tack; cards are sticky notes in five pastel colours, each slightly crooked, with the ticket key, a priority dot, a hand-written title, the workspace swatch, the agent's pixel portrait and when it last moved. Drag a note onto another column to move it (the column lights up, history records the move); click one to open the ticket drawer: key tag, Jira stamp, open-in-Jira link, title, column chips (also move the card), workspace, agent (change cycles through the agents), epic, created, updated, links (parent, relates to, blocks) with their columns, description, a ruled notes-to-the-agent field with Save note, history, and sessions with status stickers, Open, and Start a session on this ticket. Two views in the header: Columns, with a Group by epic toggle that puts hand-written epic labels inside each column, and Dependencies, where notes cluster inside dashed epic regions with kraft labels, every note gets its own red tack, and string runs tack to tack between dependent notes (red for blocks, twine for relates to; the drawer's links are the source). Strings are SVG paths measured from the notes' positions after layout and re-measured on resize; clicking a note lights up its own strings and dims the rest. |
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
  (shell, Agents list + edit, Workspaces list + edit, Kanban list + cork board), Futuristic and Professional SaaS (one full-shell variant each on the same faked sessions,
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
