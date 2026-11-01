Kraft is the material language of the Primepaw diorama: one cream sheet of `desk`, lit from the top left, with cardboard, paper and stickers cut out and laid on it. Build every surface as one of those three materials and let the stack, not colour, carry the hierarchy.

## Principles

- **Three materials, nothing else.** Cardboard holds things and takes the pressing: the rail, the sessions board, the mats, the composer frame and every button. Paper carries words: sheets, rows, tabs, the leaf, cards. Stickers mark things: icons, badges, pills, the paw, the selected state. A part that is none of these is printed on the paper: a dashed outline, a rule, a line of hand-writing.
- **One light, one shadow.** Light comes from the top left. Every cut piece gets a `face` gradient fading to clear at 55%, a solid cut edge along the bottom and right (`edge`, `edge-2`, `board-2`, `kraft-2`, `mat-green-2`, `mat-red-2`) and one cast shadow down and to the right in `amb`, with `amb-2` under the tallest pieces. Taller means a thicker edge and a longer shadow: `lift-paper-1`, `lift-paper-2`, `lift-paper-3`, `lift-board`.
- **Stickers are flat.** A sticker has a `sticker-cut` die-cut border, `gloss` across its top and no shadow, ever: it is stuck to the surface it sits on. Stickers are the only things that tilt and the only things that take the gold `attn` ring (`sticker-on`) when selected.
- **Depth is stacking.** `desk`, then the boards and the chat sheet on the same level, then paper rows and mats on them, then the leaf over the tabs, then the composer frame, then stickers on whatever they are stuck to. Nothing floats; no blur-only shadows; no border where a cut edge will do.
- **The page is one piece of furniture.** `space-3` of desk around everything, then boards edge to edge; the rail and the sessions board stay put while the sheet scrolls.
- **Three voices.** Caveat for page titles, inked into the paper (`title`). Fraunces for section and card headings and the agent's margin notes (`heading`, `said`), Nunito for everything set in type (`body`, `label`), Caveat for everything written by hand (`hand`, `chip`): counts, durations, placeholders, chips and link buttons.
- **Quick and smooth.** Stickers scale and tilt, paper and cardboard travel down onto the desk when pressed. Durations from `dur-hover` to `dur-land`; loops only while the agent works, and nothing ever pulses.

## Materials

See the Materials section for the recipe of each. In short: cardboard is `board` on `board-2` with the flecked `pulp-board` tile and `lift-board`; paper is `sheet` (or `card`, `sheet-warm`, `kraft`, `highlighter`) on `edge` with a `lift-paper-*` shadow; a sticker is a solid identity colour with `gloss`, a `sticker` cut and no shadow.

Each material has a texture and keeps its colour. White paper carries the paper texture of the Factory Overseer workshop walls, ported texel for texel and lit from the top left (`pulp-paper`): soft pulp clouds and short fibers under the `face` gradient of the chat sheet, the leaf, rows, fields and cards. Boards, mats and frames are a flecked, unfluted board (`pulp-board`). Every button takes the paper texture over its own colour, so a button reads as the same stock as the sheet and the rows. The workspace header strips are paper tinted with their workspace's colour (`kr-sheet is-strip`, `--wc`), textured like the rows, and what is on them is written in pen: the count and the caret are `kr-pen`, Caveat in `ink`. Under a strip the sessions stack like a deck of cards (`kr-stack`), the first card tucked 3px under the strip. Tabs carry the paper texture over their kraft colour. All kraft takes the same texture. Stickers and the composer card stay plain. A working session carries a paper pinwheel (`kr-pin`): four blades in red, blue, green and amber with folded lighter tips on an ink pin, with its own shadow, turning on `dur-loop`. See the Texture tokens.

Every button is thick card with the `pulp-paper` texture: `kr-btn` in `board` with a `board-2` edge and `lift-board-sm`, `kr-blue` for a primary tool like Select, `kr-green` (`mat-green`) for the one committing action on a sheet, `kr-red` (`mat-red-2` on `mat-red-3`) for a destructive one, `is-on` pressed flat for a latched filter or mode. Paper and stickers are never buttons; the rail's navigation is a column of cardboard tiles (`kr-ib`), each in its identity colour under the paper texture, its edge a darker shade of the same.

## Colour

- Grounds: `desk` behind everything, `sheet` for working paper, `card` for the paper closest to the reader (the leaf, the composer card, the selected tab), `sheet-warm` for the chat sheet, `paper` and `paper-2` for paper inside paper.
- Cardboard comes in four faces only: `board` (rail, sessions board, every button), `kraft` (tabs and folders, lighter), `mat-green` (under capsule decks, the sage confirm button) and `mat-red` (the frame around the composer; its edge `mat-red-2` is the face of the destructive button, on `mat-red-3`). Each has its `-2` cut edge; never cast a cardboard shadow in a colour other than its own edge.
- Sticker colours are identity colours at full value: `blue` for sessions and the primary action, `red` for the paw, memory and badges, `red-2` for pull requests and destructive actions, `green` for MCPs and done, `amber` for skills and busy, `max` for workspaces, `kind-think` for workflows, `kind-sub` for kanban, `attn` for the selected ring and attention, `kraft-2` for an uncoloured sticker.
- Text on a sticker is `white` for glyphs, `on-blue` on the blue sticker and `on-attn` on gold. Only `attn` pills carry words; the rest carry glyphs, chips and badges (see each token's contrast note). Words that can be pressed go on cardboard.
- Ink is `ink` for copy and labels, `mute` for secondary and hand-written copy, `faint` for placeholders only. `highlighter` marks the selected row or filter; it is paper, so it keeps a cut edge in `highlighter-2`.
- Night is the same diorama after dark: boards go to dark brown, paper to warm charcoal, the sticker cut to parchment (`sticker-cut`), the shadows to black. Textures swap to their night tiles. Identity colours on buttons (rail tiles, `kr-btn kr-blue`) mix down to 62% into `desk` through `--dye`, so their white glyphs hold 4.5:1. Every token has a night value; never hard-code a colour. The Dark mode card shows the parts together.

## Type

Set page titles in `title` (`kr-title`), the title of an open session in `title-session` (`kr-title is-session`), section and card headings in `heading`, drawer titles in `heading-lg`, and the agent's narration in `said`. Set body copy in `body` and every control label in `label` or `label-sm`. Write counts, durations, placeholders and link buttons in `hand`, chips in `chip`. Badges use `badge`, uppercase with 0.06em tracking. Load Fraunces, Nunito and Caveat from Google Fonts; fall back to Georgia, system-ui and cursive.

## Depth

| Level | Material | Edge | Shadow | Parts |
| --- | --- | --- | --- | --- |
| 0 | the desk | none | none | the page |
| 1 | cardboard | `board-2`, 2 to 3px | `lift-board` | rail, sessions board |
| 1 | tall paper | `edge-2`, 2px | `lift-paper-3` | the chat sheet |
| 2 | paper | `edge`, 1px | `lift-paper-1`, `lift-paper-2` on hover | rows, fields |
| 2 | cardboard | `board-2`, 2px by 3px | `lift-board-sm`, `lift-board-up` on hover, `press-board` pressed | every button and icon disc |
| 2 | mat | `mat-green-2`, 2px | `lift-mat` | capsule decks |
| 3 | tall paper | `edge-2`, 2px | `lift-paper-3` | the leaf over the tabs |
| 4 | frame | `mat-red-2`, 3px | `lift-frame`, card inside `recess` | the composer |
| top | sticker | `sticker-cut` | none | icons, badges, pills, the paw, the cat |

## Iconography

Icons live under `assets/Icons`: single-ink 24px glyphs drawn in `#2a2219`. On a sticker they are printed in `white` at 24px inside a 44px sticker (`space-10` padding); on paper they are `ink` at 16px. Inline the SVG and set the stroke to `currentColor` where the glyph must take a colour; an `<img>` cannot.

## Content

Labels are sentence case, verb first: "New session", "Run on main", "Open folder". Hand-written copy is short and lower-case where a person would write it: "12 open", "2h ago", "show all 12". A sticker carries one word or a number, never a sentence. The agent speaks in `said`, in the margin, in the first person.

## Motion

Hover: a button lifts 1px up and left so its edge grows (`lift-board-up`); a row lifts 1px to `lift-paper-2`; a rail tile lifts like any button. Press: a button travels 2px right and 3px down until its edge is gone (`press-board`) and springs back; a row sits down 1px (`press-paper`); a rail tile travels like any button. Selected: a button stays pressed (`is-on`); a rail tile stays pressed flat with its face a shade darker; a sticker toggle takes `sticker-on` and `tilt-sticker-on`; a row turns `highlighter`. Everything on `ease` at `dur-hover`; stickers land on `ease-pop` at `dur-land`. Under `prefers-reduced-motion` durations go to 0.01ms.

## Grain

Lay a multiply grain over the whole page at 40% (`kr-grain` in bundle.css) so cardboard, paper and sticker share one surface. Never grain a single piece; the material textures (`pulp-paper`, `pulp-board`) belong to the piece and sit under its face.

## One way to do each thing

- **Type scale.** Nunito 11, 12, 13, 14, 15. Caveat 15, 17, 20, 26, 38, 50. Courier 10, 11, 12. Fraunces 15, 17, 20, and 36 for one big figure or initial. Nothing in between.
- **Headings by level.** Page title `title`. Drawer title `heading-lg`. Section and card heading `heading`. Subheading `heading-sm`.
- **Page headers.** A list page has a title row with no rule. An edit page has a sticky header with a dashed rule, 14px by 28px of padding, and its back link above the title.
- **Button sizes.** 32px for page and card actions, 26px for filters and row actions, 40px only for a lone call to action. Discs are 26px. The rail tile (44px) and the composer's send disc (42px) are their own sizes.
- **YOLO is a stamp.** The one mode that changes how a whole session runs is struck on the paper (`kr-stamp is-toggle`): a faded black outline when off, red ink when on.
- **Bare marks.** Dismiss, edit, pin, generate and a row's three-dot menu are the only presses that aren't thick card. They are small pen marks on the paper, 26px to the touch, and they tint on hover. Generate is a sparkle drawn in ink: loose overlapping pen strokes with a little hatching, never a clean icon.
- **Tabs.** Always paper texture, rounded top corners and an icon. Unselected tabs are kraft, except inside a session, where `is-ws` makes them a lighter cut of the workspace's paper so they never read as a kraft note. The selected one is cut from `card` with a red top edge.
- **Highlighter.** Always `marker` with its strokes over the paper. A selected row uses `kr-marked`; a selected sheet uses `is-hl`.
- **Hover.** Card lifts. Paper tints to `hover` and keeps its texture.
- **Status stickers.** White text sits on `st-green`, `st-amber` or `st-red`, which hold 4.5:1 in both themes.
- **Stamps.** One angle, `tilt-stamp`.
- **When the agent needs you.** The turn stops on a sheet on an amber mat in the thread: a `kr-slip` for a tool approval, the same mat with `kr-q` questions for a question. It holds still; only amber, the sticker and the row badge signal it. The composer stays open as the other way to answer. Your choice is struck with a `kr-stamp`, and the sheet folds to a stub. YOLO belongs to the session, skips slips but not questions, and approves a slip that's already waiting.
- **Side panel.** What sits beside a conversation lives in one panel opened by tabs at the right of the strip: artifacts on a `kr-clipboard`, the side chat on a `kr-pad`. With both open they stack. An artifact also shows in the thread as a `kr-artchip`.
- **Page or drawer.** Things you author (agents, skills, workspaces) open an edit page. Things that run or that you inspect in place (MCP servers, jobs, cards) open a drawer.
