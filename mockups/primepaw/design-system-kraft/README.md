Kraft is the material language of the Primepaw diorama: one cream sheet of `desk`, lit from the top left, with cardboard, paper and stickers cut out and laid on it. Build every surface as one of those three materials and let the stack, not colour, carry the hierarchy.

## Principles

- **Three materials, nothing else.** Cardboard holds things: the rail, the sessions board, the mats, the composer frame. Paper carries words: sheets, rows, tabs, the leaf, cards. Stickers mark things: icons, badges, pills, the paw, the selected state. A part that is none of these is printed on the paper: a dashed outline, a rule, a line of hand-writing.
- **One light, one shadow.** Light comes from the top left. Every cut piece gets a `face` gradient fading to clear at 55%, a solid cut edge along the bottom and right (`edge`, `edge-2`, `board-2`, `kraft-2`, `mat-green-2`, `mat-red-2`) and one cast shadow down and to the right in `amb`, with `amb-2` under the tallest pieces. Taller means a thicker edge and a longer shadow: `lift-paper-1`, `lift-paper-2`, `lift-paper-3`, `lift-board`.
- **Stickers are flat.** A sticker has a `sticker-cut` die-cut border, `gloss` across its top and no shadow, ever: it is stuck to the surface it sits on. Stickers are the only things that tilt and the only things that take the gold `attn` ring (`sticker-on`) when selected.
- **Depth is stacking.** `desk`, then the boards and the chat sheet on the same level, then paper rows and mats on them, then the leaf over the tabs, then the composer frame, then stickers on whatever they are stuck to. Nothing floats; no blur-only shadows; no border where a cut edge will do.
- **The page is one piece of furniture.** `space-3` of desk around everything, then boards edge to edge; the rail and the sessions board stay put while the sheet scrolls.
- **Three voices.** Fraunces for titles and the agent's margin notes (`title`, `said`), Nunito for everything set in type (`body`, `label`), Caveat for everything written by hand (`hand`, `chip`): counts, durations, placeholders, chips and link buttons.
- **Quick and smooth.** Stickers scale and tilt, paper and cardboard travel down onto the desk when pressed. Durations from `dur-hover` to `dur-land`; loops only while the agent works, and nothing ever pulses.

## Materials

See the Materials section for the recipe of each. In short: cardboard is `board` on `board-2` with `flute` hairlines and `lift-board`; paper is `sheet` (or `card`, `sheet-warm`, `kraft`, `highlighter`) on `edge` with a `lift-paper-*` shadow; a sticker is a solid identity colour with `gloss`, a `sticker` cut and no shadow.

## Colour

- Grounds: `desk` behind everything, `sheet` for working paper, `card` for the paper closest to the reader (the leaf, the composer card, the selected tab), `sheet-warm` for the chat sheet, `paper` and `paper-2` for paper inside paper.
- Cardboard comes in four faces only: `board` (rail, sessions board), `kraft` (tabs and folders, lighter), `mat-green` (under capsule decks, the confirm button) and `mat-red` (the frame around the composer). Each has its `-2` cut edge; never cast a cardboard shadow in a colour other than its own edge.
- Sticker colours are identity colours at full value: `blue` for sessions and the primary action, `red` for the paw, memory and badges, `red-2` for pull requests and destructive actions, `green` for MCPs and done, `amber` for skills and busy, `max` for workspaces, `kind-think` for workflows, `kind-sub` for kanban, `attn` for the selected ring and attention, `kraft-2` for an uncoloured sticker.
- Text on a sticker is `white` for glyphs and `on-blue` or `on-attn` for words. Only `blue`, `red-2` and `attn` carry words; the rest carry glyphs, chips and badges (see each token's contrast note).
- Ink is `ink` for copy and labels, `mute` for secondary and hand-written copy, `faint` for placeholders only. `highlighter` marks the selected row or filter; it is paper, so it keeps a cut edge in `highlighter-2`.
- Night is the same diorama after dark: boards go to dark brown, paper to warm charcoal, the sticker cut to parchment (`sticker-cut`), the shadows to black. Every token has a night value; never hard-code a colour.

## Type

Set titles in `title` and the agent's narration in `said`. Set body copy in `body` and every control label in `label` or `label-sm`. Write counts, durations, placeholders and link buttons in `hand`, chips in `chip`. Badges use `badge`, uppercase with 0.06em tracking. Load Fraunces, Nunito and Caveat from Google Fonts; fall back to Georgia, system-ui and cursive.

## Depth

| Level | Material | Edge | Shadow | Parts |
| --- | --- | --- | --- | --- |
| 0 | the desk | none | none | the page |
| 1 | cardboard | `board-2`, 2 to 3px | `lift-board` | rail, sessions board |
| 1 | tall paper | `edge-2`, 2px | `lift-paper-3` | the chat sheet |
| 2 | paper | `edge`, 1px | `lift-paper-1`, `lift-paper-2` on hover | rows, fields, filters, buttons |
| 2 | mat | `mat-green-2`, 2px | `lift-mat` | capsule decks |
| 3 | tall paper | `edge-2`, 2px | `lift-paper-3` | the leaf over the tabs |
| 4 | frame | `mat-red-2`, 3px | `lift-frame`, card inside `recess` | the composer |
| top | sticker | `sticker-cut` | none | icons, badges, pills, the paw, the cat |

## Iconography

Icons are the Paper Chat set under `assets/Icons`: single-ink 24px glyphs drawn in `#2a2219`. On a sticker they are printed in `white` at 24px inside a 44px sticker (`space-10` padding); on paper they are `ink` at 16px. Inline the SVG and set the stroke to `currentColor` where the glyph must take a colour; an `<img>` cannot.

## Content

Labels are sentence case, verb first: "New session", "Run on main", "Open folder". Hand-written copy is short and lower-case where a person would write it: "12 open", "2h ago", "show all 12". A sticker carries one word or a number, never a sentence. The agent speaks in `said`, in the margin, in the first person.

## Motion

Hover: a sticker tilts `tilt-hover` and grows 4%; paper lifts 1px to `lift-paper-2`; cardboard lifts 1px with a longer edge. Press: a sticker scales to 96%; paper moves 1px down-right onto the desk (`press-paper`); cardboard travels 2px right and 3px down until its edge is gone (`press-board`). Selected: a sticker takes `sticker-on` and `tilt-sticker-on`; paper turns `highlighter`. Everything on `ease` at `dur-hover`; stickers land on `ease-pop` at `dur-land`. Under `prefers-reduced-motion` durations go to 0.01ms.

## Grain

Lay a multiply grain over the whole page at 40% (`kr-grain` in bundle.css) so cardboard, paper and sticker share one surface. Never grain a single piece.
