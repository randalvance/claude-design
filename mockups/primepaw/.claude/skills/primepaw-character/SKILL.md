---
name: primepaw-character
description: Make a new Primepaw character for Jarvis, the main agent, in the paper cut-out style of the puppy, in its three cuts (the sprite that peeks over the composer with a row per mood, the round face sticker for the rail tile and the thread portraits, and the standee that walks the Factory Overseer's floor), drawn on Comfy Cloud (five options of the base first, laid side by side for the user to pick from), sliced by pet/build.py, shown on its own Pet board and wired into the portrait picker and the boards. Use it whenever the user asks for a new pet, mascot, character, avatar, portrait or look for Jarvis or for the Primepaw prototype (a cat, an owl, a fox, a robot, a bear…), wants a mood, a cut or a sheet of an existing character redrawn, wants to rebuild the sprites from the sources, or wants the boards to wear another character, even when they do not say "character" or "sprite".
---

# A Primepaw character

Jarvis, the main agent of the Primepaw prototype, is a paper cut-out creature. The first one is the
puppy, `dog`. A character is one creature in three cuts, and the boards, the picker and the factory
all read those cuts by name, so a new character is a new set of files under `pet/` plus a little wiring:

| Cut | Files | Where it shows |
| --- | --- | --- |
| The peeking sprite | `pet/<id>.png`, an atlas with a row per mood (idle, greet, celebrate, sad, error, ask) and 8 frames across, drawn at 2x; `pet/<id>.json` with the frame size | Over the composer on every board that has one, as `.pet`, stepped like paper stop-motion |
| The face sticker | `pet/<id>-face.png`, the head as one round sticker, 128 px square (64 CSS px at 2x; the boards show it at 64, 32, 24 and 16) | The Jarvis tile on the rail, the thread portraits, the picker, as `.jface` |
| The standee | `pet/<id>-walk.png`, the Factory Overseer's pet sheet: 6 columns (standing, the two stomps of a walk, two beats of work, a wave) by 4 facings, every cell one drawing of the whole figure; `pet/<id>-walk.json`, what each holds; `pet/standee.js` plays it one cell at a time | The factory floor, and the Pet board's mock of it, as `.standee` |
| The sources | `pet/src/<id>/`: the six mood sheets, `avatar.png`, `body.png`, `turnaround.png` (the character from its four sides, which the walk sheets copy) and four `walk-*.png` (each facing's six poses of the standee), all on chroma-key green, plus `base.png`, the drawing the edits started from and the peeking pose the mood sheets copy | Inputs to `build.py`; kept so any cut can be re-sliced or redrawn from the same base (the puppy's base was not kept; `peek.png`, one cell of its first idle sheet, stands in for it) |

Read `pet/README.md` once: it is the puppy's own account of the same system, and `DioramaPets.dc.html`
shows the three cuts side by side with every mood and the standee walking.

## The style that does not change

The character is a sticker in the Kraft design language, and the boards treat it as one: a flat paper
cut-out with a narrow white die-cut border, pen-ink features, flat Kraft colours with a faint grain, no
gradient, no shadow, no 3D. The peeking cut is cut off flat along the edge its paws hook over, because
that edge is what sits on the composer frame. Keep these in every prompt; a character that breaks
them looks pasted on rather than stuck on, and the breakage multiplies across 70 boards.

What a new character changes is the creature and its pieces: the species, two or three paper colours
from the Kraft palette, one accent (the puppy's red collar), the thing that moves in the moods (ears,
antennae, a hat). Design for 92 CSS px over the composer, and the face for 24 px, the glyph of the 44 px rail
tile (the face sits on the icon scale wherever it shows: 64 as the sticker, 32 in a portrait, 24 in a tile,
16 on a row): big shapes, few details.

## The workflow

### 1. Settle the character before drawing

Pick an `<id>` (one lowercase word, used in every filename and CSS url) and a picker name (what the
Setup form shows: "A paper puppy", "A paper owl"). Then write the brief as the slot values in
`references/prompts.md`: the creature, its paper pieces with their colours, the head, the body, the
side and back views (the back spelled out, absences included, since nothing else shows the model what
is there), the words for its limbs and its ears. Writing the slots first keeps the thirteen
sheets describing the same creature; drifting prompts are the usual reason a character falls apart.
Show the user the slots before spending credits if the request left any of them open.

### 2. Draw five options and let the user choose

Before anything is edited, draw the base five ways. Write five takes on the brief that differ in the
pieces the creature is made of (the shape of the head, the ears, how the face is drawn, the accent),
each with its own `{CREATURE}` and `{FEATURES}` and its own seed, and send them as five items of one
`submit_batch` of the text-to-image graph (`references/comfy.md`, step 1); Qwen runs on Comfy Cloud's
own credits, so the five cost little. Lay the downloads out with

```bash
python3 mockups/primepaw/.claude/skills/primepaw-character/scripts/options.py <sheet.png> A=<a.png> B=<b.png> C=<c.png> D=<d.png> E=<e.png>
```

which keys the green out and puts the five on the desk colour, big and at the size they will have over
the composer, under their letters. Send the sheet to the user with a line on each option and wait for
the pick; a pick with a change ("B with C's ears") is one more run of the graph with the slots merged.
The chosen drawing is the base, saved as `pet/src/<id>/base.png`, and its slot values are the brief
for everything after. Keep the other four in the scratchpad until the character is done, in case the
user comes back to one.

### 3. Draw the rest on Comfy Cloud

Follow `references/comfy.md`. In short: the chosen option is the base, judged hard against the list in
`comfy.md` and redrawn with a tightened prompt if it fails (a wall line across the picture, a shadow); then the
avatar and the body as edits of the base, one batch of the graph in `assets/qwen21-edit.workflow.json`;
then a turnaround of the body (front, left side, back, right side in one row) with GPT Image 2.6, judged
against the slots before anything is drawn from it, because a model invents whatever the body does not
show it and the turnaround is where the back and the sides get settled; then, GPT Image again, the six
mood sheets from the base (the peeking pose) and the body, every one of the eight frames spelled out so
the action is spread over them, and one walk sheet per facing from the turnaround and the body: the
standee's six poses in a grid, the walk a stomp (a foot lifted flat, then the other), which every model
draws alike from every side where a kicked-up foot never came right. The
GPT sheets go through the graph in `assets/gpt26-edit.workflow.json`, and the prompts come from
`references/prompts.md`, slots filled. GPT Image is a paid partner model, so say what a batch will
cost and get a yes before submitting it. Save every downloaded sheet under `pet/src/<id>/` with the
names `build.py` expects (GPT Image hands back transparent PNGs; `scripts/green.py` lays every GPT
download on the green the slicer keys out),
and look at each one before building: the judging list in `comfy.md` says what sends a sheet back for
a new seed.

### 4. Build the cuts

```bash
python3 mockups/primepaw/pet/build.py --name <id>
```

It keys the green out, finds the cells on each sheet by the bands of paper (the model draws the grid
it likes), tightens every frame to its paper, scales a cut's frames alike, and lays them out: the
peeking atlas with the cut edge on one line, the face squared up, and the walk sheets laid into the
Factory Overseer's cell layout, every facing at the same standing height with the feet on the cell's
ground line. Read its printout: every mood sheet should yield 8 frames of nearly the same size and
every walk sheet 6 cells of one figure height. A sheet that yields another count is resampled silently
and will stutter, or land its poses in the wrong columns; redraw it with a new seed rather than accept
it (`--walk-cols 6` forces six equal cells on a walk sheet whose bands cannot be told apart). Needs
Pillow and numpy on the host Python. The printout ends each cut
with its frame size (`--pw` and `--ph`); that size lives in every board's pet block, so when a rebuild
changes it for a character the boards already wear, run `use` again (step 6).

### 5. Look at it

Give the character its own Pet board pair and open it in the browser (`preview_start`, then
`DioramaPet<Id>.dc.html`; add a query string on a reload, since the preview caches a board it has seen):

```bash
python3 mockups/primepaw/.claude/skills/primepaw-character/scripts/character.py board <id> "<Name>"
```

That copies the puppy's Pet boards (light and dark) with the new cuts and frame size, and lists them on
the canvas under "Jarvis, the pet". The prose on the copies still describes the puppy; rewrite it for
the new creature. Check each mood plays and returns to rest, the face reads at every step of the icon
scale in the sticker section (64, 32, 24 on the rail tile mock, 16 on a row), the standee stands in all
four facings and stomps round the floor mock without a tab under it, every pose one figure.

### 6. Wire it in

```bash
python3 mockups/primepaw/.claude/skills/primepaw-character/scripts/character.py register <id> "<Name>"   # the portrait picker lists it
python3 mockups/primepaw/.claude/skills/primepaw-character/scripts/character.py use <id>                 # the boards wear it
python3 mockups/primepaw/.claude/skills/primepaw-character/scripts/character.py list                     # what exists now
```

`register` adds the character to the `FACES` list on the Setup and Home boards, where the portrait
picker shows one option per character with its own face. `use` makes every board wear it: the pet
atlas, the face sticker and the frame size in each board's `/* pet */` block, and the picker's selected
entry; a Pet board keeps its own character and only takes the frame size. Both are safe to run again.
Run `use` only when the user wants the new character to be Jarvis's look; a second character can just
sit in the picker.

Then the words: add the character to the table in `pet/README.md` with its prompts' slot values, give
the canvas a note beside its Pet boards (`canvas.json`, like `p26`), and mention it in the Kraft design
system's README under "The pet" if it changes what Jarvis is. A host shows the standee through
`pet/standee.js`: `PetStandee.load('pet/<id>-walk.json')`, `mount(el, sheet, { height })`, then `facing()`
and `pose(doing, t)` each frame, as the Pet board does; the Factory Overseer takes the sheet itself as
`{ src, layout: "sheet", height }`, the numbers in the JSON.

### 7. Done when

- `pet/<id>.png`, `.json`, `-face.png`, `-walk.png`, `-walk.json` exist and `pet/src/<id>/` holds the
  thirteen sources (the turnaround and the four walk sheets among them) and the base, so the character
  can be redrawn.
- The Pet board pair plays all six moods, shows the face at 64, 32, 24 and 16 and walks the standee in
  four facings.
- The picker lists it; if it was meant to be worn, the shell, a Home board and a page board show it
  over the composer and on the rail tile in the browser, light and dark.
- `pet/README.md` and the canvas note describe it, and the commit names the character.

## Files

- `references/prompts.md`: the puppy's prompts as templates, with the slot table and the puppy's values.
- `references/comfy.md`: the Comfy Cloud calls, sizes, seeds and what to reject.
- `assets/qwen21-t2i.workflow.json`: the Qwen text-to-image graph with placeholders, for the base.
- `assets/qwen21-edit.workflow.json`: the Qwen edit graph with placeholders, for the avatar and the body.
- `assets/gpt26-edit.workflow.json`: the GPT Image 2.6 graph with placeholders, two references in, for
  the turnaround, the mood sheets and the walk sheets.
- `scripts/options.py`: lays the five options of a base side by side on the desk colour, for the pick.
- `scripts/green.py`: lays a GPT Image download on the chroma-key green before it is saved as a source.
- `scripts/character.py`: `list`, `register`, `use`, `board`.
- `../../../pet/build.py`: the slicer; `--name <id>` reads `src/<id>/` and writes the five output files.
