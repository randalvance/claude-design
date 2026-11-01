Paper Chat is the cut-paper skin of the chat app. Every surface is a sheet laid on a desk, depth comes from stacking and hard offset shadows, nothing sits perfectly straight, and every movement is quick and smooth, easing out in well under a quarter of a second.

## Principles

- **Depth by stacking, never by blur.** A sheet casts a solid shadow (`shadow-sheet`, `shadow-sheet-lg`) offset down and right. Blur, gradients and translucent overlays are not part of this system; the one exception is the grain and the tape.
- **Everything stuck on is a little crooked.** Stickers, badges, stamps, the logo and the token circle carry a fixed tilt from the Tilt tokens. Sheets themselves stay square; only what is stuck onto them tilts.
- **Motion is quick and smooth.** Transitions ease out in under 200 ms, stamps land with a soft overshoot, spinners turn continuously and the working capsule breathes. Nothing is stepped. See the Motion section for the full table.
- **Three voices.** Fraunces for what the agent says and the session's name, Nunito for the interface, Caveat for what is written in the margin.

## Content fundamentals

- Sentence case everywhere, including buttons ("New", "Reset demo"). Stickers and stamps are the only uppercase text ("WORKING", "YOLO", "MAX").
- The agent narrates in the first person, briefly, between its capsules: "Line 212 renders markdown but line 180 renders plain text, so I'll check what separates them." Set it in `said`.
- Hand annotations (the Caveat styles) are for the ephemeral and the meta only: durations, counts, hints, placeholders, empty states, popover headings, the live "now" line. Never a control's label and never the reply itself.
- Durations read as `22m 21s`, `6h 06m`, `34s`. Tool calls read as counts: "2 LLM calls · 1 tool call".
- No emoji. Status is carried by stickers, kind dots and stamps.

## Visual foundations

### Colour

Two themes. Paper is the lit desk the design was drawn on; Night is the same desk after dark, every token carrying a `night` value: grounds drop to a warm near-black, ink turns to cream, kraft darkens so cream reads on it, the signal colours lift a step, the highlighter becomes a dim olive band and the tape goes translucent. Nothing moves and no shadow softens; only the values change. Paper first: the design is a lit desk. Grounds, from the back forward: `desk`, `paper`, `panel`, `rail`, then the sheets `sheet`, `sheet-warm`, `card`. Text is `ink` on any of them; `mute` is secondary text and every hand annotation; `faint` is for placeholders and source icons only, since it reads at 3.2:1 on `sheet`.

Kraft is the second material: `kraft` for the user's notes, workspace folder tabs, the branch tag, the model tag and the capsule token circle, with `kraft-2` as its shadow.

Four signal colours, each with one meaning: `red` is live and urgent (busy sticker, stop, MAX, YOLO, the selected tab's top edge); `blue` is action (New, ready send, focus rings, links); `green` is done (idle sticker, Done chip, check stamps); `amber` is attention (busy durations, the pinwheel, needs review). The gauge arc moves `blue` to `amber` to `red` as context runs out. The kind dots add `kind-think` and `kind-sub`; the rest alias the signal colours.

Flagged pairs, kept exact from the board: white on `green` (3.9:1), white on `amber` (3.6:1), white on `red` (4.4:1), `amber` on `sheet` (3.6:1) and `red` on `sheet` (4.3:1) sit below 4.5:1. Each of those uses is also shaped, tilted or paired with an icon, so colour is never the only carrier. Raise the fill or drop the type size before using them for anything longer than a word.

### Type

Fraunces, Nunito and Caveat load from Google Fonts; "Courier New" is the mono. Body copy is `body` (15px/1.6) and the user's note is `note` (14.5px). The session title is `title` at 26px with Fraunces' optical size at 48. Interface labels are `ui` and `ui-small`, bold. Hand styles step from `hand-xl` (22px empty states) to `hand-xs` (13px subagent count). Mono is `code` (13px), `tag` (12px bold) and `kbd` (10px). Keep running text near 65 characters: replies and capsules are capped at 760px, narration at 720px, a note at 70% of the thread.

### Spacing and layout

The shell is rail (64px) + sessions panel (300px, 250px under 1000px wide) + the chat sheet, which fills the rest and stacks under 860px. The chat sheet pads `space-28` at the sides and `space-22` at the top; the content area adds `space-26` above and `space-18` between items. Capsules pad `space-14`; rows pad `space-6` vertical and `space-10` horizontal. The composer's ruled lines sit every `space-28`, matching its 28px line height.

### Surfaces, borders and shadows

Every sheet is `sheet` on `stroke-hair` `line`, radius `radius-3`, with a `shadow-*` offset. Lists inside a sheet divide with a dashed hairline in `line`. The composer card adds a `stroke-edge` top edge in `blush`; the selected chat tab adds the same edge in `red`. A focused composer lifts 2px toward the top left and its shadow grows to `shadow-sheet-raised`; Max effort swaps the border to `max` and the shadow to `shadow-max`.

### Grain

The app sheet carries a paper grain: an SVG `feTurbulence` filter (fractal noise, base frequency 0.85, 2 octaves) tinted toward kraft, laid over the whole shell at 35% opacity with multiply. Put it on the outermost sheet only; never on individual cards.

### Tilt

Rotations are tokens so they stay consistent: stickers `tilt-sticker`, badges `tilt-badge` on the rail and `tilt-badge-row` on rows, the Done chip `tilt-done`, the token circle `tilt-token`, stamps `tilt-badge-row` (YOLO) and `tilt-max` (MAX), tape `tilt-tape`. The selected row's highlighter is a 6° skew with `tilt-highlighter`.

### States

- Hover lifts a control 1px (2px for chat tabs) on a 2-step transition; capsules lift 1px up and left and their shadow grows one step.
- Focus is a `stroke-box` solid outline in `blue` (`ink` on blue fills, `red` on stamp buttons), offset 2px outside sheets and 2px inside rows.
- Selected is a highlighter stroke (`highlighter`, multiply) behind a row, a kraft-coloured face with a shadow on a rail button, a red top edge on a tab.
- Busy is a red sticker that wobbles, an amber pinwheel spinning in eight steps, a capsule that boils.
- Done is a green check stamped onto the token circle; stopped is the same stamp in red.
- Attention is a yellow `attn` exclamation sticker on the workspace tab and a red number badge on the row.

### Motion

See the Motion section: durations, step counts and which part each keyframe belongs to. Honour `prefers-reduced-motion` by collapsing durations, which `bundle.css` already does.

## Iconography

Inline stroke SVG on a 24px grid, 1.8px round-capped strokes, coloured by `currentColor`. The icon files under `assets/Icons` carry `ink` baked in for `<img>` use. Never an icon font, never emoji. Status marks are stickers and dots, not icons: a kind dot is a 10px disc (`radius-round`) with `shadow-sticker-soft`, except `kind-say`, which is square (`radius-2`).

## Components

Components are CSS classes in `components/bundle.css`, prefixed `pp-`, with state classes prefixed `is-` (`is-on`, `is-busy`, `is-open`, `is-live`, `is-max`, `is-focus`). Load `tokens.css`, the three Google Fonts families and `bundle.css`, put `pp-root` on the shell, and write real elements: `<button>` for anything clickable, `<textarea>` for the composer, `<input>` with a label for search. Each component's guideline says what you provide. The grain needs the `#pp-grain` filter definition on the page (see the Grain component).

## Accessibility

Text on sheets meets 4.5:1 (`ink` 15.4:1, `mute` 5.8:1). The flagged fills above are kept exact from the board and always carry a shape or icon as well. Every control is a real button with a visible focus ring. Every animation collapses under `prefers-reduced-motion`. The pinwheel and the boiling capsule are the only continuous motion while the agent works; the MAX bars flicker only while Max effort is on.
