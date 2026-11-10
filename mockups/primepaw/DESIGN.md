---
name: Kraft
description: "The Primepaw diorama: cardboard, paper and stickers cut out and laid on one cream desk, lit from the top left."
colors:
  desk: "#f4eee2"
  desk-2: "#e4dac6"
  sheet: "#fbf7ee"
  sheet-warm: "#f9f4e8"
  card: "#fdfaf3"
  paper: "#f6f0e4"
  paper-2: "#efe7d6"
  hover: "#f1e9d8"
  deck-1: "#ede4d2"
  deck-2: "#e6dcc8"
  board: "#cfae78"
  board-2: "#a3844f"
  kraft: "#dcc08c"
  kraft-2: "#b3905a"
  mat-green: "#8fb08a"
  mat-green-2: "#5f8a5e"
  mat-red: "#cf6a52"
  mat-red-2: "#9e4530"
  mat-red-3: "#6b2a1c"
  ink: "#2a2219"
  mute: "#6f6252"
  faint: "#72654f"
  line: "#d9ccb1"
  rule: "#dfe5ee"
  bar: "#b9a98a"
  white: "#ffffff"
  sticker-cut: "#ffffff"
  red: "#c8553d"
  red-2: "#8f3a2a"
  blue: "#3b5b9a"
  blue-2: "#2a4070"
  on-blue: "#ffffff"
  green: "#5b8c5a"
  amber: "#b8792f"
  max: "#c7935a"
  max-2: "#d9b48a"
  kind-think: "#4a8f99"
  kind-sub: "#8b6bb3"
  book: "#8d4f75"
  attn: "#f0c24a"
  on-attn: "#2a2219"
  st-green: "#497048"
  st-amber: "#936126"
  st-red: "#a04431"
  highlighter: "#fff0a0"
  highlighter-2: "#d9b84a"
  marker: "#ffe775"
  tape: "#f1e3a6b8"
  edge: "#cbbc9a"
  edge-2: "#a89570"
  amb: "rgba(60,40,15,0.36)"
  amb-2: "rgba(60,40,15,0.22)"
  face: "rgba(255,255,255,0.16)"
  gloss: "rgba(255,255,255,0.30)"
  veil: "#2a221959"
  shadow: "#cdbf9f"
  blush: "#e8a9a2"
  cork: "#b98c5e"
  cork-2: "#7a5634"
  stamp-ground: "#fffdf8cc"
  stamp-ground-soft: "#fffdf88c"
  knob: "#ffffff"
  glass: "#fffdf780"
typography:
  cover:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "120px"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "-0.01em"
    fontVariation: '"opsz" 144'
  heading-lg:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.25
  heading:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "17px"
    fontWeight: 600
    lineHeight: 1.25
  heading-sm:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.25
  said:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.5
  body:
    fontFamily: "Nunito, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Nunito, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 800
    lineHeight: 1.2
  label-sm:
    fontFamily: "Nunito, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.2
  badge:
    fontFamily: "Nunito, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "0.06em"
  greeting:
    fontFamily: "Caveat, cursive"
    fontSize: "50px"
    fontWeight: 600
    lineHeight: 1
  title:
    fontFamily: "Caveat, cursive"
    fontSize: "38px"
    fontWeight: 600
    lineHeight: 1.05
  title-session:
    fontFamily: "Caveat, cursive"
    fontSize: "26px"
    fontWeight: 600
    lineHeight: 1.05
  hand:
    fontFamily: "Caveat, cursive"
    fontSize: "17px"
    fontWeight: 500
    lineHeight: 1.25
  chip:
    fontFamily: "Caveat, cursive"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: "16px"
  code:
    fontFamily: "Courier New, Courier, ui-monospace, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  radius-2: "2px"
  radius-3: "3px"
  radius-4: "4px"
  radius-5: "5px"
  radius-7: "7px"
  radius-9: "9px"
  radius-10: "10px"
  radius-pill: "999px"
  radius-round: "50%"
spacing:
  space-2: "2px"
  space-3: "3px"
  space-4: "4px"
  space-6: "6px"
  space-8: "8px"
  space-10: "10px"
  space-12: "12px"
  space-14: "14px"
  space-16: "16px"
  space-24: "24px"
components:
  button:
    backgroundColor: "{colors.board}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.radius-4}"
    padding: "0 14px"
    height: "32px"
  button-sm:
    backgroundColor: "{colors.board}"
    textColor: "{colors.ink}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.radius-4}"
    padding: "0 10px"
    height: "26px"
  button-lg:
    backgroundColor: "{colors.board}"
    textColor: "{colors.ink}"
    rounded: "{rounded.radius-4}"
    padding: "0 16px"
    height: "40px"
  button-latched:
    backgroundColor: "{colors.board}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.radius-4}"
    padding: "0 14px"
    height: "32px"
  button-confirm:
    backgroundColor: "{colors.mat-green}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.radius-4}"
    padding: "0 14px"
    height: "32px"
  button-destructive:
    backgroundColor: "{colors.mat-red-2}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.radius-4}"
    padding: "0 14px"
    height: "32px"
  button-blue:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.radius-4}"
    padding: "0 14px"
    height: "32px"
  button-disabled:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.faint}"
    typography: "{typography.label}"
    rounded: "{rounded.radius-4}"
    padding: "0 14px"
    height: "32px"
  icon-button-rail:
    backgroundColor: "{colors.kraft-2}"
    textColor: "{colors.white}"
    rounded: "{rounded.radius-10}"
    padding: "9px"
    size: "44px"
  icon-button-disc:
    backgroundColor: "{colors.board}"
    textColor: "{colors.ink}"
    rounded: "{rounded.radius-round}"
    padding: "6px"
    size: "26px"
  switch:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.mute}"
    typography: "{typography.chip}"
    rounded: "{rounded.radius-2}"
    width: "52px"
    height: "24px"
  switch-on:
    backgroundColor: "{colors.marker}"
    textColor: "{colors.ink}"
    typography: "{typography.chip}"
    rounded: "{rounded.radius-2}"
    width: "52px"
    height: "24px"
  checkbox:
    backgroundColor: "{colors.sheet}"
    rounded: "{rounded.radius-2}"
    size: "18px"
  checkbox-checked:
    backgroundColor: "{colors.green}"
    textColor: "{colors.white}"
    rounded: "{rounded.radius-2}"
    size: "18px"
  tab:
    backgroundColor: "{colors.kraft}"
    textColor: "{colors.ink}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.radius-7}"
    padding: "8px 14px 15px"
  tab-selected:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.radius-7}"
    padding: "8px 14px 15px"
  leaf:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.radius-10}"
    padding: "24px"
  sheet:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.radius-4}"
  sheet-card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.radius-4}"
  row:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.radius-3}"
    padding: "8px 10px"
  row-hover:
    backgroundColor: "{colors.hover}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.radius-3}"
    padding: "8px 10px"
  row-selected:
    backgroundColor: "{colors.marker}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.radius-3}"
    padding: "8px 10px"
  board:
    backgroundColor: "{colors.board}"
    rounded: "{rounded.radius-10}"
  mat:
    backgroundColor: "{colors.mat-green}"
    rounded: "{rounded.radius-9}"
    padding: "6px"
  frame:
    backgroundColor: "{colors.mat-red}"
    rounded: "{rounded.radius-10}"
    padding: "7px"
  capsule:
    backgroundColor: "{colors.mat-green}"
    rounded: "{rounded.radius-9}"
    padding: "7px"
  sticker:
    backgroundColor: "{colors.kraft-2}"
    textColor: "{colors.white}"
    rounded: "{rounded.radius-10}"
    size: "44px"
  badge:
    backgroundColor: "{colors.attn}"
    textColor: "{colors.on-attn}"
    typography: "{typography.badge}"
    rounded: "{rounded.radius-round}"
    padding: "0 5px"
    height: "19px"
  pill:
    backgroundColor: "{colors.st-green}"
    textColor: "{colors.white}"
    typography: "{typography.badge}"
    rounded: "{rounded.radius-pill}"
    padding: "0 8px"
    height: "18px"
  chip-done:
    backgroundColor: "{colors.st-green}"
    textColor: "{colors.white}"
    typography: "{typography.chip}"
    rounded: "{rounded.radius-pill}"
    padding: "0 7px"
  stamp:
    textColor: "{colors.mute}"
    rounded: "{rounded.radius-3}"
    padding: "3px 7px"
  popup:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    padding: "18px 16px 12px"
    width: "300px"
  note-kraft:
    backgroundColor: "{colors.kraft}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.radius-4}"
    padding: "14px 16px"
  title:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
  heading:
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
---

# Design System: Kraft

Mirrors `design-system-kraft/tokens.json` (Kraft v1) with the Paper theme's values. Every token also has a Night value, listed in the token file and in `.impeccable/design.json`; when this file and the token file disagree, regenerate this file from the tokens. In the boards the tokens are CSS variables (`--desk`, `--board`, `--lift-board` and so on) set on the page wrapper and swapped by `data-theme="night"`; the component classes are the `kr-*` rules in `design-system-kraft/components/bundle.css`.

## Overview

**Creative North Star: "The Desk of Cut-outs"**

Everything in Primepaw is a piece laid on one cream desk: cardboard that holds things, paper that carries words, stickers that mark things. Nothing is drawn as a box with a border; it is cut out, given a thickness, and set down where it belongs. Depth is height. A board sits on the desk, paper sits on the board, the leaf sits over the tabs, the composer frame sits highest, and a sticker is stuck flat to whichever piece it lives on. The light comes from the top left and never moves, so every piece has one lit face, one cut edge along its bottom and right, and one shadow down and to the right.

The mood is tactile, calm and playful. Tactile: a button is thick card that lifts under the pointer and travels down into the desk when pressed; a row sits down a pixel when clicked; a toggle is a pull-tab sliding in a slot cut into the paper. Calm: nothing pulses, nothing glows, and the only things that keep moving are a working session's pinwheel and the Max effort ring. Playful: the paw, the cat peeking over the composer, rubber stamps, a highlighter that lets the paper show through, and a pinwheel on whatever is busy, each doing a job rather than decorating.

The diorama is explicitly not flat SaaS chrome (one sans for everything, thin grey borders, blur-only shadows, cards nested in cards), not glossy skeuomorphism (glassy bevels, photoreal leather or wood, heavy gradients), and not dark-mode neon (glowing accents, purple-to-blue gradients, cyan on black). Night is the same desk after dark, not a different system.

**Key Characteristics:**
- Three materials, nothing else: cardboard, paper, stickers. Anything that is none of these is printed or written on the paper.
- One light, one shadow: a face gradient fading out at 55%, a solid cut edge, one cast shadow in `amb`, always down and to the right.
- Depth is stacking, and the stack carries the hierarchy; colour names what a thing is.
- Three voices: Caveat written by hand, Fraunces for headings and the agent, Nunito for everything set in type, Courier for code and stamps.
- Textures live in the material: paper carries a pulp tile, cardboard a flecked board, and one 40% grain lies over the whole page.
- Quick and smooth: 150ms lifts and presses, 260ms landings on a pop ease, loops only while the agent works.

## Colors

A cream desk, four cardboard faces, a handful of papers, pen ink, and a dozen identity colours that only ever appear as stickers or the face of a button; the stack, not colour, carries the hierarchy.

### Primary
The cardboard family: what you press.
- **Cardboard Face** (`board`, #cfae78): the rail, the sessions board, and the colour of every button under its paper texture.
- **Cardboard Cut Edge** (`board-2`, #a3844f): the 2px by 3px edge along the bottom and right of every board and button, and the board's hairline border at 60%.
- **Kraft Paper** (`kraft`, #dcc08c): tabs, folders, labels, notes and tags; the lighter cardboard.
- **Kraft Cut Edge** (`kraft-2`, #b3905a): kraft's edge, and the face of an uncoloured sticker or rail tile.

### Secondary
The mats and the frame: the cardboard that commits or destroys.
- **Sage Mat** (`mat-green`, #8fb08a) on **Sage Cut Edge** (`mat-green-2`, #5f8a5e): the mat under a capsule deck and the one committing button on a sheet (Merge, Run, Save). Ink reads 6.3:1 on it.
- **Terracotta Frame** (`mat-red`, #cf6a52): the frame around the composer. Never a text ground.
- **Terracotta Cut Edge** (`mat-red-2`, #9e4530) on **Terracotta Deep Edge** (`mat-red-3`, #6b2a1c): the frame's edge, and the face of the destructive button (Delete, Stop, Discard) with white text at 6.5:1.

### Tertiary
Identity colours, printed only on stickers and button faces, each tied to one thing in the app.
- **Sessions Blue** (`blue`, #3b5b9a) with **Agents Navy** (`blue-2`, #2a4070) as its edge: the sessions sticker, the blue button for a primary tool such as Select, the agents tile.
- **Paw Red** (`red`, #c8553d): the paw, the memory sticker, number badges, the busy pill. **Pull-request Oxblood** (`red-2`, #8f3a2a): pull requests and destructive stickers.
- **MCP Green** (`green`, #5b8c5a): MCPs, the idle pill, the checked box. **Skills Amber** (`amber`, #b8792f): skills, background jobs, busy durations, the pinwheel's fourth blade, and mixed into cardboard for the mat under a permission slip or question card.
- **Workspaces Tan** (`max`, #c7935a) and **MAX Stamp Paper** (`max-2`, #d9b48a): the workspaces sticker and the MAX stamp.
- **Workflow Teal** (`kind-think`, #4a8f99), **Kanban Violet** (`kind-sub`, #8b6bb3), **Knowledge Plum** (`book`, #8d4f75): one sticker each on the rail and the matching kind dots.
- **Attention Gold** (`attn`, #f0c24a) with **On Gold** ink (`on-attn`, #2a2219): the ring around a selected sticker, the attention badge, the needs-you button, and the idea board’s rail tile, whose bulb is the one rail glyph in ink. The only sticker that carries words.
- **Status stickers** (`st-green` #497048, `st-amber` #936126, `st-red` #a04431): Done, Running, Failed and the busy badge, each holding 4.5:1 under white text in both themes.
- **Sticker White** (`white`, #ffffff) and **On Blue** (`on-blue`, #ffffff): glyphs on stickers. Never a surface.

### Neutral
- **Cream Desk** (`desk`, #f4eee2) to **Desk Rim** (`desk-2`, #e4dac6): the page, a radial vignette lit from the centre.
- **Plain Paper** (`sheet`, #fbf7ee): rows, fields, filters, step lists. **Warm Chat Sheet** (`sheet-warm`, #f9f4e8): the big paper behind the thread. **Whitest Card** (`card`, #fdfaf3): the leaf over the tabs, the composer card, the selected tab, anything closest to the reader. **Inner Paper** (`paper`, #f6f0e4) and **Tinted Paper** (`paper-2`, #efe7d6): paper inside paper, code chips, key caps, the slot of a switch, a disabled control. **Hover Tint** (`hover`, #f1e9d8): a hovered row. **Capsule Steps** (`deck-1` #ede4d2, `deck-2` #e6dcc8): alternating steps inside an open capsule.
- **Pen Ink** (`ink`, #2a2219): body copy, titles, labels and the pencil focus ring. **Faded Ink** (`mute`, #6f6252): secondary and hand-written copy. **Pencil Grey** (`faint`, #72654f): placeholders and disabled text, still 4.5:1 on paper.
- **Printed lines:** **Dashed Rule** (`line`, #d9ccb1), **Ruled Blue-Grey** (`rule`, #dfe5ee) on a note, **Idle Bar** (`bar`, #b9a98a) for effort bars and the outline of an unchecked box.
- **Cuts and shadows:** **Paper Cut Edge** (`edge`, #cbbc9a) and **Tall Paper Edge** (`edge-2`, #a89570); **Cast Shadow** (`amb`, rgba(60,40,15,0.36)) and **Far Shadow** (`amb-2`, rgba(60,40,15,0.22)); **Top-left Light** (`face`, rgba(255,255,255,0.16)) on every cut piece and **Sticker Gloss** (`gloss`, rgba(255,255,255,0.30)) on every sticker; **Die-cut White** (`sticker-cut`, #ffffff) around every sticker; **Pressed Edge** (`shadow`, #cdbf9f) under a disabled-looking button.
- **Marks on the paper:** **Marker Ink** (`marker`, #ffe775) for selected rows, active filters and the on slot of a switch, always with its strokes and the paper showing through; **Raw Highlighter** (`highlighter`, #fff0a0) is the pigment marker is mixed from and is never painted directly; **Highlighter Edge** (`highlighter-2`, #d9b84a); **Masking Tape** (`tape`, #f1e3a6b8); **Stamp Ground** (`stamp-ground`, #fffdf8cc) and **Soft Stamp Ground** (`stamp-ground-soft`, #fffdf88c) showing inside a stamp; **Warning Wash** (`blush`, #e8a9a2).
- **Scenery:** **Cork Face** (`cork`, #b98c5e) and **Cork Frame** (`cork-2`, #7a5634) for the Kanban board; **Popover Scrim** (`veil`, #2a221959); **Knob Outline** (`knob`, #ffffff) drawn over a dark ground; **Glass Chip** (`glass`, #fffdf780) over kraft.

### Named Rules
**The Three Materials Rule.** Every surface is cardboard, paper or a sticker. Cardboard is never white and never carries body copy; paper carries words; a sticker carries one word or a number, never a sentence, and only the gold `attn` sticker carries words at all.

**The Own-Edge Rule.** A piece's cut edge and border are a darker shade of its own colour (`board-2` under `board`, `kraft-2` under `kraft`, `mat-green-2` under `mat-green`). Never cast a cardboard shadow in another colour.

**The Night Twin Rule.** Every token has a Night value and nothing is hard-coded. At night boards go dark brown, paper to warm charcoal, the sticker cut to parchment, shadows to black, and identity colours on buttons mix down to 62% into the desk so white glyphs keep 4.5:1.

## Typography

**Display Font:** Caveat (with cursive), written by hand
**Headline Font:** Fraunces (with Georgia, serif)
**Body Font:** Nunito (with system-ui, sans-serif)
**Label/Mono Font:** Courier New (with Courier, ui-monospace, monospace)

**Character:** Three voices on one sheet. Titles are written by hand in Caveat and inked into the paper; headings and the agent's margin notes are set in Fraunces; everything set in type is Nunito, heavy at label sizes; code and rubber stamps are typewritten in Courier.

### Hierarchy
- **Display** (Caveat 600, 50px greeting / 38px page title / 26px session title, line-height 1 to 1.05): every page title, inked into the paper with the pulp texture running through the letters; the home greeting leans 1.2 degrees.
- **Headline** (Fraunces 600, 20px drawer titles / 17px section and card headings / 15px subheadings, line-height 1.25): the serif voice on paper.
- **Said** (Fraunces 500 italic, 16px, line-height 1.5): the agent's narration, written in the margin, in the first person.
- **Body** (Nunito 400, 14px, line-height 1.5): copy on paper.
- **Label** (Nunito 800, 13px, or 700 at 12px when small, line-height 1.2): buttons, rows, filters, tab names, step lists, kbd hints. **Badge** (Nunito 900, 11px, uppercase, 0.06em tracking): number badges and the busy pill.
- **Hand** (Caveat 500, 17px, 15px for small notes, 20px on sticky notes): counts, durations, placeholders, chips and link buttons; **Chip** (Caveat 600, 15px on 16px) for the Done chip and any hand-written sticker.
- **Code** (Courier New 400, 12px, line-height 1.5): code chips and key caps on tinted paper; stamps are Courier 700 at 10px (12px as a toggle), uppercase, 0.14em tracking.

### Named Rules
**The One Scale Rule.** Nunito 11, 12, 13, 14, 15. Caveat 15, 17, 20, 26, 38, 50. Courier 10, 11, 12. Fraunces 15, 17, 20, and 36 for one big figure or initial. Nothing in between.

**The Written-by-Hand Rule.** Anything a person would jot (a count, a duration, a placeholder, a show-all link, the word in a switch's slot) is Caveat in ink or faded ink, multiplied into the paper. It is never a badge.

**The Sentence-Case Rule.** Labels are sentence case and verb first ("New session", "Open folder"); hand-written copy is short and lower case ("12 open", "2h ago"); only badges and stamps are uppercase.

## Layout

The page is one piece of furniture. Three pixels of desk (`space-3`) run around everything, then the boards run edge to edge: a 72px cardboard rail of 44px tiles on the left with 8px gaps, a 300px cardboard sessions board beside it with a 10px gap, and the chat sheet filling the rest. The rail and the sessions board stay put while the sheet scrolls. Inside the sheet the tab row sits along the top and the leaf is laid over it, 5px up into the tabs, with 24px of content padding (`space-24`); the composer sits at the bottom inside its terracotta frame, set into it rather than lifted.

Density is compact and paper-like: rows and fields pad 8px vertically and 10px horizontally (`space-8`, `space-10`), buttons are 32px tall with 14px side padding, small buttons and discs 26px, a lone call to action 40px. Sessions under a workspace strip stack as a deck, each sheet 3px under the one above with a tiny alternating lean and two card edges showing under the last. Groups on a sheet sit 16px apart (`space-16`).

An open session's title bar runs on one line: when it runs short, the role and the workspace beside the title give way before the title does, and the status sticker always stays. What sits beside a conversation lives in one side panel opened by tabs at the right of the strip; with artifacts and the side chat both open they stack, and the panel's left edge drags to resize. The boards are desktop-width app screens; no breakpoint behaviour is recorded beyond that.

## Elevation & Depth

Depth is physical and hybrid: every cut piece has a face gradient from the top left (`face` fading to clear at 55%), a solid offset cut edge along its bottom and right, and one soft cast shadow in `amb` down and to the right, with a second far shadow in `amb-2` only under the tallest pieces. Taller means a thicker edge and a longer shadow. Stickers have no shadow at all, ever: they are die-cut with a white border and stuck flat to whatever they sit on. Nothing floats, no shadow is blur-only, and no border stands in for a cut edge. At night every edge and shadow has its own darker value; the geometry never changes.

The stack, from the desk up: the page (level 0); cardboard boards and the tall chat sheet (1); paper rows, fields, every button and disc, and the sage mats (2); the leaf over the tabs (3); the terracotta composer frame, with its card set in by `recess` (4); and stickers on top of whatever they are stuck to.

### Shadow Vocabulary
- **Paper at rest** (`lift-paper-1`, `box-shadow: 0 1px 0 #cbbc9a, 2px 3px 3px rgba(60,40,15,0.36)`): rows, filters, fields, paper buttons, step lists.
- **Paper lifted a step** (`lift-paper-2`, `box-shadow: 1px 1px 0 #cbbc9a, 3px 5px 6px rgba(60,40,15,0.36)`): a hovered row or paper button, the selected row.
- **Tall paper** (`lift-paper-3`, `box-shadow: 1px 2px 0 #a89570, 5px 8px 10px rgba(60,40,15,0.36), 10px 18px 26px -8px rgba(60,40,15,0.22)`): the chat sheet and the leaf.
- **Cardboard board** (`lift-board`, `box-shadow: 2px 3px 0 #a3844f, 5px 8px 10px rgba(60,40,15,0.36), 10px 18px 26px -8px rgba(60,40,15,0.22)`): the rail and the sessions board.
- **Button at rest** (`lift-board-sm`, `box-shadow: 2px 3px 0 #a3844f, 4px 6px 7px rgba(60,40,15,0.36)`): a 2px by 3px cut edge and a short cast shadow.
- **Button hovered** (`lift-board-up`, `box-shadow: 3px 4px 0 #a3844f, 6px 9px 10px rgba(60,40,15,0.36)`): lifted 1px up and left so the edge grows by a pixel.
- **Button pressed or latched** (`press-board`, `box-shadow: 0 0 0 #a3844f, 1px 1px 2px rgba(60,40,15,0.36)`): after travelling 2px right and 3px down, the edge is gone.
- **Row clicked** (`press-paper`, `box-shadow: 0 0 0 #cbbc9a, 1px 1px 1px rgba(60,40,15,0.36)`): the paper sits down on the desk.
- **Sage mat** (`lift-mat`, `box-shadow: 1.5px 2px 0 #5f8a5e, 4px 6px 7px rgba(60,40,15,0.36), 8px 14px 20px -8px rgba(60,40,15,0.22)`): under a capsule deck and the sage confirm button.
- **Terracotta frame** (`lift-frame`, `box-shadow: 1.5px 3px 0 #9e4530, 5px 9px 10px rgba(60,40,15,0.36), 12px 22px 30px -6px rgba(60,40,15,0.22)`): around the composer.
- **Sticker cut** (`sticker`, `box-shadow: 0 0 0 2px #ffffff, 0 0 0 2.6px rgba(0,0,0,0.16)`) and **small sticker cut** (`sticker-s`, `box-shadow: 0 0 0 1.5px #ffffff, 0 0 0 2px rgba(0,0,0,0.16)`): the die-cut border, no cast shadow.
- **Selected sticker** (`sticker-on`, `box-shadow: 0 0 0 2px #ffffff, 0 0 0 4.5px #f0c24a, 0 0 0 5px rgba(0,0,0,0.16)`): the white cut, then a gold ring.
- **Set in** (`recess`, `box-shadow: inset 1px 1px 3px rgba(0,0,0,0.14)`): the composer card inside its frame, the slot of a switch, a command inside a permission slip.

### Named Rules
**The One Light Rule.** Light comes from the top left and never moves: one lit face, one cut edge on the bottom and right, one shadow down and to the right. A shadow never changes direction.

**The Flat Sticker Rule.** A sticker has a die-cut border, gloss across its top and no shadow. It is stuck to one piece and never straddles two.

**The Depth-Is-Stacking Rule.** Hierarchy is how high a piece sits, not how bright it is. Nothing floats, nothing is blur-only, and no border where a cut edge will do.

## Shapes

Cardboard and stickers are cut round; paper is cut nearly square. Boards, the chat sheet, rail tiles and the terracotta frame take a 10px radius (`radius-10`); a sage mat 9px (`radius-9`); every button at every size 4px (`radius-4`), as do fields and the leaf's top corners (its bottom corners 10px); session rows 3px (`radius-3`); code chips, key caps and the square workspace dot 2px (`radius-2`); a tab's top corners 7px (`radius-7`), its bottom square where the leaf covers it; pills and chips are full pills (`radius-pill`, 999px) and badges, dots, discs and the pinwheel are round (`radius-round`, 50%).

Borders are hairlines that belong to the material: paper takes a 1px black border at 7% (or its edge colour at 40% when tall), cardboard a 1px border in its edge colour at 60%, a mat or frame 1.5px (`stroke-mat`) in its edge colour, and a sticker no border but a 2px die-cut (`stroke-cut`; 1.5px when small) in white. The selected tab carries a 3px red top edge (`stroke-tab`); the composer frame is 7px wide (`stroke-frame`). Focus is a 2px pencil ring in ink, offset 3px.

Texture is in the material, not on it: white paper, kraft and every button carry a 256px pulp-paper tile under the face gradient; boards, mats and frames a 128px flecked board tile; stickers and the composer card are plain. One multiply grain at 40% lies over the whole page so all three materials share a surface, and nothing is textured twice.

Only paper that is taped or pinned may lean, up to 1.5 degrees (a popup 1 degree, a sticky note by its `--r`). Stickers tilt by part (`tilt-logo` -8deg for the paw, badges 8deg, the Done chip -4deg, a selected sticker toggle -4deg with scale 1.08) and every stamp strikes at -4deg (`tilt-stamp`). Cardboard, buttons and paper laid flat never tilt, scale or rotate. Popups have a strip of tape and a torn lower edge; an artifact chip has a dog-eared corner; the highlighter is a hand-drawn blob with uneven corners.

### Named Rules
**The Cut-Edge Rule.** A piece is bounded by its cut edge and the material's own hairline, never by a drawn border or an outline.

**The Round-Cardboard, Square-Paper Rule.** 10px on cardboard, 3 to 4px on paper, pills and rounds only on stickers.

## Components

### Buttons
Every button is thick card with the paper texture: there is no other button material. Paper and stickers are never buttons.
- **Shape:** 4px radius at every size (`radius-4`); 32px tall with 14px side padding; small 26px with 10px; large 40px with 16px, for a lone call to action only.
- **Kraft (default, `kr-btn`):** cardboard face (`board`) under the pulp-paper texture, label in ink (Nunito 800, 13px), a 1px border in the edge colour at 60%, a 2px by 3px cut edge and short shadow (`lift-board-sm`). The primary action is the one nearest the composer or at the end of a row, not a different colour.
- **Sage confirm (`kr-green`):** `mat-green` on `mat-green-2` with ink, for the one committing action on a sheet (Merge, Run, Save). At most one per sheet.
- **Terracotta destructive (`kr-red`):** `mat-red-2` on `mat-red-3` with white, for Delete, Stop, Discard. Never beside the sage one without a kraft button between them.
- **Blue tool (`kr-blue`):** `blue` on `blue-2` with white, for a primary tool such as Select; at night it mixes down to 62% into the desk.
- **Hover:** lifts 1px up and left so the edge grows (`lift-board-up`), 150ms on `ease`. **Pressed:** travels 2px right and 3px down until the edge is gone (`press-board`) and springs back. **Latched (`is-on`, `aria-pressed`):** stays pressed with its face a shade darker, for filters and modes. **Focus:** a 2px ink ring offset 3px. **Disabled:** tinted paper (`paper-2`), pencil-grey text, no edge, no travel.
- **Bare marks:** dismiss, edit, pin, generate and a row's three-dot menu are the only presses that are not card: small pen marks on the paper, 26px to the touch, tinting on hover. Generate is a sparkle drawn in loose pen strokes, never a clean icon.

### Icon Buttons
- **Rail tile (`kr-ib`):** a 44px cardboard tile, 10px radius, 9px padding, the glyph in white at 24px; its colour is the identity colour of what it opens (sessions blue, agents navy, skills and background amber, workspaces tan, memory red, knowledge plum, MCPs green, workflows teal, the idea board gold with its glyph in ink, kanban violet, pull requests oxblood; uncoloured is `kraft-2`), with a cut edge in a darker shade of that colour. The current tile stays pressed flat with its face a shade darker. It lifts and presses like any button and never tilts.
- **Disc (`kr-ib is-sm`):** a 26px round cardboard disc (`board` on `board-2`, glyph in ink at 16px) for copy, share, search, send, delete; sage for send and done, terracotta for delete and stop. The composer's send disc is 42px, and the mic disc latches flat and turns red while listening.

### Toggles
- **Switch (`kr-switch`, `role="switch"`):** a 52 by 24px slot cut into the paper (`paper-2` with the pulp texture, an inner shadow and a lit lower lip) with a 24 by 18px tab of thick card sliding in it, three pen grip lines on its face. Off, the tab sits left and "off" is handwritten in the slot in Caveat; on, it slides 24px right, the slot turns marker yellow and reads "on". The word means the state never relies on colour alone.
- **Checkbox (`kr-check`):** an 18px box printed in a 2px idle-bar outline on paper; checked, a green sticker with a white check is stuck over it, landing on `ease-pop` in 260ms with a 4 degree tilt.
- **Latched button:** a kraft button or disc with `aria-pressed`, kept travelled with its edge gone; sage when the mode commits (Following, Watching).
- **Stamp toggle (`kr-stamp is-toggle`):** YOLO, the one mode that changes how a whole session runs, is a rubber stamp struck on the paper: a faded black outline when off, red ink when on, always at -4 degrees.
- **Sticker toggle:** a selected sticker takes the gold ring (`sticker-on`) and tilts -4 degrees at scale 1.08; hovered, -2 degrees.

### Tabs and the Leaf
- **Tab (`kr-tab`):** a strip of kraft paper with the pulp texture, 7px top corners, 8px by 14px padding plus 15px below that the leaf covers, Nunito 700 at 12px in ink, a kraft edge and short shadow; always leads with a 14px icon, name under 24 characters. Hover lifts it 1px; it never tilts. Inside a session unselected tabs are a lighter cut of the workspace's paper (`is-ws` with `--wc`), so they never read as a kraft note.
- **Selected (`is-on`):** cut from the whitest card with a 3px red top edge, sitting 1.5px lower so it meets the leaf. A working tab carries the pinwheel in place of its close disc.
- **Leaf (`kr-leaf`):** the card paper laid over the tabs, 5px up into them, with the tall-paper edge and shadow, 4px top and 10px bottom corners, a faint glow along its top edge and 24px content padding.

### Sheets and Boards (cards and containers)
- **Paper sheet (`kr-sheet`):** plain paper with the face gradient over the pulp tile, a 1px border at 7% black, 4px corners and the paper-at-rest shadow. Variants: lifted a step (`is-2`), tall with the thicker edge and 10px corners (`is-3`), whitest card (`is-card`), warm chat sheet (`is-warm`), inner paper (`is-inner`), kraft (`is-kraft`), highlighted under marker (`is-hl`), flat when printed as part of a larger piece (`is-flat`).
- **Row:** a sheet strip with 3px corners, 8px by 10px padding; hover tints it to `hover` and lifts it a step, click sits it down a pixel, selected is real highlighter (`kr-marked`): translucent marker strokes with uneven corners, the paper showing through, leaning half a degree. A row shows a three-dot menu mark at its far right on hover, in space kept for it.
- **Workspace strip (`is-strip`) and session list (`kr-stack`):** the header strip is paper tinted 62% with the workspace colour, textured like the rows, 5px corners, its count and caret written in pen; the sessions under it are a plain list, straight and square, 4px apart, none overlapping another or the strip.
- **Factory task (`kr-task`) and stage chip (`kr-stage`):** a factory task’s sessions are filed in a kraft folder in the list, 4px radius with a kraft cut edge; its tab is a 20px green factory sticker, the task key in Courier, the title and the count in pen, with a caret that folds it. Each session in it carries an 18px paper chip with the factory’s step glyph in ink (Planning, Plan review, Implementation, Testing, Code review), and the sessions run in that order. Folded, the tab shows the current stage chip, the pinwheel while it works and the red badge when it waits on you.
- **Cardboard board (`kr-board`):** the board face over the flecked tile, a 1px border in its edge colour at 60%, 10px corners and the board shadow; the rail and the sessions board. **Mat (`is-mat`):** sage on its edge, 9px corners, 6 to 8px of padding around the paper it holds. **Frame (`is-frame`):** terracotta, 7px wide, with the sheet inside set in by `recess` rather than lifted.
- **Capsule (`kr-capsule`):** one agent turn on a sage mat with a paper header (`lift-paper-1`) and its timer on a dark blue sticker hanging off the left edge at -7 degrees; a working capsule breathes while closed, an open one holds still and its steps fade in on alternating capsule-step papers.
- **Paper inside paper:** a popover on the leaf or a code chip in a row uses `paper` or `paper-2` with `lift-paper-1`; it is still a separate piece.

### Inputs and Fields
- **Style:** a field is a strip of plain paper like a row: 4px corners, the pulp texture, the paper-at-rest shadow, 8px by 10px padding, Nunito at 13 to 14px in ink with placeholders in pencil grey (Caveat where a person would write the hint). The composer's prompt box is the one plain card, set into its terracotta frame.
- **Focus:** the pencil ring, 2px in ink offset 3px. **Error:** the ruled line under a required name turns dashed red with the message under it in red pen ("It needs a name"). **Disabled:** tinted paper and pencil-grey text.

### Navigation
- **The rail:** a 72px sticky cardboard column of 44px identity-coloured tiles with 8px gaps and 12px top padding, the paw sticker at the top tilted -8 degrees, the main agent's cream tile beneath it badged with the threads waiting, and the tile name as a tooltip. The current tile is pressed flat; hover lifts it like any button; a number badge is a gold or red sticker overhanging the tile's top right corner at 8 degrees.
- **The sessions board:** a 300px sticky cardboard board of workspace strips and decks; a yellow attention badge on a group and a red one on a row mean a session needs you; a row’s first slot is a faint robot, or the turning pinwheel while that session works, with an amber duration; finished ones show a green Done chip; a factory task’s sessions sit in a kraft folder with a stage chip each.
- **Page or drawer:** things you author (agents, skills, workspaces) open an edit page with a sticky header, a dashed rule, 14px by 28px padding and its back link above the title; things that run or that you inspect in place (MCP servers, jobs, cards) open a drawer with a 20px Fraunces title. A list page has a title row and no rule.

### Stickers
- **Base (`kr-sticker`):** one solid identity colour with gloss across its top, a 2px white die-cut, 10px corners (round or pill variants), a white glyph at 24px inside 44px; no shadow. **Number badge (`kr-nb`):** 19px gold with ink digits (Nunito 900, 11px), red for pull requests, tilted 8 degrees (16px and -8 degrees on a row). **Status pill (`kr-pill`):** 18px uppercase with a dot, green idle, red busy, gold attention. **Done chip (`kr-chip`):** handwritten in Caveat on green, tilted -4 degrees. **Workspace dot (`kr-dot`):** a 10px square with a 2px corner. **The paw (`kr-mark`):** the red mark with its cut drawn as an outline, 54px in the rail.

### Signature pieces
- **Title (`kr-title`):** the page title in Caveat 600 at 38px with the pulp texture running through the letters and the ink multiplied into the sheet; 26px for an open session, 50px with a 1.2 degree lean for the home greeting. Clicking a session title rewrites it; a pen mark beside it generates a new one.
- **Stamp (`kr-stamp`):** Courier capitals in a 2px border of the same ink on the stamp ground, multiplied into the paper by day and sitting on top at night, always at -4 degrees; blue, red or green ink. For a kind or a source, never a live state. An SVG ink filter roughens its edges.
- **Popup (`kr-pop`):** a 300px sheet of card taped over the piece below with a torn lower edge, leaning 1 degree, a handwritten heading over a pen rule and dashed ruled rows with a handwritten note at the end; the fuel gauge opens one that breaks down the context window.
- **Notes:** a person's message is a plain kraft card, square to the page, with no tape (`kr-note`); a sticky note on the cork board is Caveat at 20px in dark ink on a coloured paper, pinned with a red tack and leaning by its `--r` (`kr-sticky`); the cork board itself is a framed cork face with a pin-hole speckle.
- **Pinwheel (`kr-pin`):** the one toy: four paper blades in red, blue, green and amber with folded lighter tips on an ink pin, 18px, casting one shadow and turning once every 1.2s on whatever is working. It is not a sticker.
- **When the agent needs you:** a tool approval is a permission slip, plain paper on an amber-mixed cardboard mat, with the command set into the paper, a handwritten question, and Allow once / Allow for this session / Deny as kraft buttons; questions wait as a card on the same mat in the dock above the composer and open a sheet with one folder tab per question; the answer is struck with a stamp and the thread keeps a stub. It holds still: only the amber, the sticker and the row badge signal it.
- **Jarvis (`kr-jarvis`):** the main agent is a paper creature, a robot dog today, with a puppy and a cat waiting in the portrait picker: a sprite sticker that peeks over the composer from the right, paws hooked on the frame, leaning 4 degrees, stepped frame by frame like paper stop-motion with one row of its atlas per mood (idle, greet, celebrate, sad, error, ask), never a pulse. Its face is the round sticker on the cream tile at the top of every rail and on the thread portraits, and its full body a standee on the Factory Overseer's floor. Button, the cut-out cat in a bow tie, was the character before it and keeps his own sheet; the other agents' portraits stay drawn stickers with a white die-cut rim and no shadow.
- **Loading (`kr-fetch`):** what a page shows while it fetches its list, the same on every page. The rail, the title and the toolbar are there from the first frame and the sheet under them is empty but for Jarvis: he is off his plinth (`kr-plinth`), where a small card says out fetching (`kr-out`), and at a cardboard file box on a ledge in the middle of the sheet, 370 by 316 in all. His standing cut, 180 by 225, steps between two frames of work every 190ms; four index cards with tabs in the pinwheel's colours lift one at a time, 420ms each; a scissor-cut paper bubble (`kr-say`, Caveat 26) says what he is fetching, its dots stepping. The box's label, Courier 12 in capitals, is the page's name; that label and the noun in the bubble are all that change from page to page. When the list lands the scene goes in one frame, the page's pieces arrive 90ms apart, the count takes its place under the title, and Jarvis is back on the plinth on his celebrate row with Got them in a small bubble (Caveat 20) for 2.5s. No placeholder cards, no spinner.
- **Home thread pieces:** the main agent's words in Fraunces, a session card per session it starts (workspace strip, branch, model, live status, last line, Open), a folded helper card for read-only research, a decision line per Thread YOLO call, and a finish report on a sage mat.
- **Clipboard and legal pad:** artifacts clip to a cardboard clipboard with a blue clip, one tab per artifact and a card sheet under it; the side chat is a yellow legal pad with a kraft header, a red margin line and blue rules; an artifact in the thread is a dog-eared card chip.
- **Gauge (`kr-gauge`):** a fuel gauge drawn in pen, F to E, the blue arc for what is left and a ghost segment for what the draft will cost.

### Motion
Everything answers an input on `ease` (cubic-bezier(0.2,0.7,0.2,1)) in 150ms (`dur-hover`); pieces dropping in and popovers take 240ms (`dur-enter`); stickers and stamps land on `ease-pop` (cubic-bezier(0.34,1.5,0.64,1)) in 260ms (`dur-land`). The only eased loops are the pinwheel's 1.2s turn and the Max effort ring, on `ease-io` with alternate; the pet's frames, on its mood rows and at the file box while a page fetches, are stepped one at a time like paper stop-motion and never eased; nothing ever pulses. Under `prefers-reduced-motion` every duration drops to 0.01ms and the pinwheel stops after one turn.

## Do's and Don'ts

### Do:
- **Do** build every surface as one of three materials: cardboard holds and is pressed, paper carries words, stickers mark things.
- **Do** give every cut piece a face gradient from the top left, a solid cut edge on its bottom and right in a darker shade of its own colour, and one cast shadow in `amb` down and to the right.
- **Do** cut every button, disc and rail tile from thick card with the paper texture over its own colour, 4px corners on buttons, and let it lift 1px on hover and travel 2px right and 3px down when pressed.
- **Do** keep stickers flat: a 2px white die-cut, gloss on top, no shadow, stuck to one piece.
- **Do** carry hierarchy by stacking (desk, board, paper, leaf, frame, sticker) and let colour name what a thing is.
- **Do** use the type scale and nothing in between: Nunito 11 to 15, Caveat 15 to 50, Courier 10 to 12, Fraunces 15, 17, 20 and 36.
- **Do** write counts, durations, placeholders, chips and link buttons by hand in Caveat, ink or faded ink, multiplied into the paper.
- **Do** mark the selected row with real highlighter, the paper showing through, and the selected tab by cutting it from card with a red top edge.
- **Do** use the one sage button for the one committing action on a sheet, the terracotta one for a destructive action, and put a kraft button between them.
- **Do** give every colour a Night value and swap textures to their night tiles; at night mix identity colours on buttons down to 62% so white glyphs hold 4.5:1.
- **Do** respect `prefers-reduced-motion`, keep loops to the pinwheel, Max and the pet's stepped frames, and keep labels sentence case and verb first.

### Don't:
- **Don't** draw a border where a cut edge will do, and never a blur-only shadow or a shadow in another piece's colour.
- **Don't** let anything float, pulse, glow or bounce; nothing moves unless the agent is working or the user touched it.
- **Don't** put body copy on cardboard, make paper or a sticker pressable, or let a sticker carry a sentence or straddle two pieces.
- **Don't** tilt, scale or rotate cardboard, buttons or paper laid flat; only stickers, stamps and taped or pinned paper lean.
- **Don't** grain a single piece or texture a piece twice: the tile sits in the material and the one page grain lies over everything.
- **Don't** hard-code a colour, paint with the raw highlighter instead of marker, or use a sticker for a live state a stamp or pill already shows.
- **Don't** reach for flat SaaS chrome: no single sans for everything, no thin grey borders, no cards nested in cards.
- **Don't** reach for glossy skeuomorphism: no glassy bevels, no photoreal leather or wood, no heavy gradients beyond the 55% face.
- **Don't** reach for dark-mode neon: no glowing accents, no purple-to-blue gradients, no cyan on black; Night is the same desk after dark.
- **Don't** put more than one sage button on a sheet, place terracotta beside sage, or make a large 40px button anything but a lone call to action.
