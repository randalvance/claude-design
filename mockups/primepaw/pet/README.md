# Jarvis, the paper puppy

The pet over the composer (or on its plinth where a board has no composer), the main agent's face, and the standee that walks the Factory Overseer's
floor are one character, a paper cut-out puppy: cream paper face and body, kraft brown floppy ears,
an eye patch and a tummy patch, a red collar with a tag, pink cheeks, pen-ink features, and the white
die-cut border every Kraft sticker has. Three cuts of it ship here, drawn on Comfy Cloud (GPT Image 2.6 Sunburst
for the peeking sheets, the turnaround and the standee's walk sheets; Qwen Image 2.1, the open-weight
template, for the base they all descend from, the avatar and the body) and sliced by `build.py`.

| File | What it is | Where it goes |
| --- | --- | --- |
| `dog.png`, `dog.json` | The peeking puppy: an atlas with a row per mood (idle, greet, celebrate, sad, error, ask) and 8 frames across, drawn at 2x; the JSON holds the frame size and the CSS numbers | Over the composer on every board that has one, as `.pet`; on every other board on a kraft plinth at the lower right, as `.buddy .pet`; see the `/* pet: */` and `/* buddy: */` blocks in a board's style |
| `dog-face.png` | The avatar: the puppy's head as one round sticker, 128px square (64 CSS px at 2x, the icon scale's largest step) | The Jarvis tile on the rail, the thread portraits, any row that needs the main agent's face, as `.jface`, at the boards' icon sizes: 64 as the sticker itself, 32 in a thread portrait, 24 in a rail tile (the glyph size of every 44px tile) or a small portrait, 16 on a row |
| `dog-walk.png`, `dog-walk.json`, `standee.js` | The standee as a sprite sheet: the Factory Overseer's pet sheet layout, 6 columns by 4 facings of 256 by 320 cells, every cell one drawing of the whole puppy; the JSON says what each column and row holds and how tall the standing puppy is; the driver plays it one cell at a time | The factory floor and the Pet board's mock of it, as `.standee`; see below |
| `src/dog/` | The sheets as Comfy Cloud drew them, on chroma-key green: one per mood, `peek.png` (the resting peeking puppy the mood sheets copy, one cell cut from the first idle sheet), the avatar, the body design, the turnaround (the puppy from its four sides) and one walk sheet per facing (the standee's six poses) | Inputs to `build.py`; keep them so a cut can be rebuilt |

Every file is named after the character, `dog`; a second character is the same five files and a source
folder under another id. The `primepaw-character` skill in `.claude/skills/` walks through drawing one,
building it and wiring it into the picker and the boards. The cat (`cat`) is the second one and the robot dog (`robot`) the third, drawn with that skill from the
puppy's prompts with their slots refilled; "The characters" below has their values.

See `DioramaPets.dc.html` for the three side by side, with every mood and the standee walking a round.

## How the peeking puppy plays

`.pet` is one element with the atlas as its background, `steps(8, jump-none)` across a row, and a
class per mood that picks the row: `idle`, `error` and `ask` loop; `greet`, `celebrate` and `sad` play
once and hold their last frame until the board clears the class. The boards set the class from what the
agent is doing: idle while it works or rests, `ask` while a question or a tool approval waits, `greet`
when a board opens, a session is picked or Jarvis says "On it", `celebrate` when a turn finishes or a
report lands, `sad` when you stop the agent or deny a tool, `error` while the thread Home has open
holds a failed session. Two rules order them: a timed reaction (`greet`, `celebrate`, `sad`, or the
dizzy spell Home plays on opening a thread with a failure in it) shows over the resting mood until its
timer ends, and among the resting moods `ask` wins over `error`, so a thread that waits on you and also
holds a failed session rests in `ask`, and the arrival spell is where its failure shows. A click on the
pet over the composer says hello. Under `prefers-reduced-motion` it holds its first frame.

On a board with no composer (Inbox, Agents, the factory, Memory and the rest) it stands on a kraft
plinth at the lower right, the plinth's top edge the line its paws hook over (the cut it was drawn for),
so every row plays as it does over the composer. There it is a button:
a click (or Enter) opens a prompt card above its head, and Send starts a session with Jarvis, the main
agent, with a hello as the card opens, a cheer on Send and a droop if you close the card on a draft.
Drag the pet or the plinth to move it left or right along the bottom; from the plinth the left and right
arrow keys move it too. The card sits on whichever side has room.

## The standee on the factory floor

The Factory Overseer (the `Factory-Redesign` branch) draws each agent as a paper pet standee on a
fixed 38-degree camera and reads a pet sheet by URL: 6 columns, one row per facing (down, left, right,
up). Column 0 stands, 1 and 2 are the two stomps of a walk, 3 and 4 the two beats of working, 5 and 0
the wave for attention. `dog-walk.png` is cut to that layout, every cell one drawing of the whole puppy,
the feet on the cell's ground line and the standing puppy 86% of the cell's height, so the host hands it
over as

```ts
petAssets: { byAgent: { jarvis: { src: "pet/dog-walk.png", layout: "sheet", height: 2.67 } } }
```

`dog-walk.json` repeats those numbers and the frame lists. `standee.js` plays the sheet the same way for
the Pet board and any host without the factory (`PetStandee.load(url)`, then
`PetStandee.mount(el, sheet, { height })`, and `facing(f)` and `pose(doing, t, still)` each frame):
walking is columns 1, 0, 2, 0 at 8 frames a second, a foot lifted and set down, then the other, with a
little bob and roll on top; working columns 3 and 4 at 5.5; attention 5 and 0 at 3.2 with a hop; idle
holds column 0 and breathes. Under `prefers-reduced-motion` nothing moves. The factory puts no folded
tab under it: the paws sit straight on the floor.

The walk is a stomp on purpose. The first sheets kicked the lifted foot up to show its sole, and from
behind that pose never came right from words, even with two frames of a MiniMax walk video as the
reference; a cut-out puppet of separate pieces, tried next, moved any way the code said but came apart
at the joints on screen. A foot lifted flat a little off the ground is a pose every model draws alike
from every side, and the whole figure drawn in each cell stays one piece of paper. The four sheets,
`src/dog/walk-*.png`, are drawn by GPT Image 2.6 Sunburst from `src/dog/turnaround.png`, the puppy
from its four sides, and the body; the character skill's `comfy.md` has the recipe and the prompts are
below.

## Rebuilding a cut

```bash
python3 mockups/primepaw/pet/build.py            # all three, from src/dog/
python3 mockups/primepaw/pet/build.py --width 92 # the peeking puppy 92 CSS px wide
python3 mockups/primepaw/pet/build.py --name cat # another character, from src/cat/ to cat.png and friends
python3 mockups/primepaw/pet/build.py --walk-cols 6  # read each walk sheet as one strip of six cells instead of finding them
```

The boards play 8 frames a row (`steps(8)` and an 8-column `background-size` in their `/* pet */`
block), so leave `--frames` at 8 unless you change those with it; `build.py` warns otherwise.

`build.py` keys the green out (the key colour is read off each sheet's border, edge pixels are
un-mixed), finds the cells on a sheet by the bands of paper rather than trusting the grid the model was
asked for (it draws 4 by 2, 4 by 3 or 3 by 3 as it likes), tightens each frame to its paper, scales
every frame of a cut alike (the standee's four facings each to the same standing height, so it keeps its
height as it turns), and lays them out with the flat cut edge, or the feet, on one line. Needs Pillow and numpy.

## The characters

| Id | Picker | Peeking frame | Where | Drawn |
| --- | --- | --- | --- | --- |
| `dog` | A paper puppy | 101x104 CSS px | the picker; worn by every board until the robot dog; `DioramaPets.dc.html` | by hand; the prompts below |
| `cat` | A paper cat | 104x114 CSS px | the picker only, not worn; `DioramaPets.dc.html` | by the `primepaw-character` skill; the puppy's prompts with the slots below |
| `robot` | A paper robot dog | 111x135 CSS px | worn by every board; `DioramaPets.dc.html` | by the `primepaw-character` skill, the first through its options step; the puppy's prompts with the slots below |

The cat's slot values, as the skill's templates in `references/prompts.md` took them:

| Slot | Value |
| --- | --- |
| `CREATURE` | a friendly round-faced tabby cat with pointed ears |
| `FEATURES` | a kraft brown paper face (#d9bc86) with a sheet-white paper muzzle (#fbf7ee), two pointed kraft brown paper ears with pink paper inner ears (#e8a9a2), three short dark kraft paper stripes (#b3905a) on its forehead, a blue paper collar (#3b5b9a) with a small round gold tag (#e3b53a), two round pink paper cheeks (#e8a9a2), a small pink triangle paper nose, two small dot eyes and a little w-shaped cat mouth drawn with a dark pen (#2a2219) |
| `RECAP` | the same kraft brown paper face with its white muzzle, pointed ears with pink insides, three dark stripes on its forehead, blue collar with its gold tag, pink cheeks, pen-ink features, the white die-cut sticker border |
| `HEAD` | the cat's head with its pointed ears and the top of its blue collar |
| `BODY` | a short round kraft brown paper body with a sheet-white paper chest patch, its two front paws hanging relaxed at its sides, two short legs with little round feet planted on the ground, a long kraft brown tail with three dark stripe rings curling up at one side, the same blue collar around its neck and the same friendly face |
| `SIDE` | one eye, one pointed ear, the white muzzle and the white chest showing as a sliver at its front, its nose pointing left and its long striped tail curling up behind it at the right |
| `BACK` | the back of its head with no face, the backs of both pointed ears standing up at the top, the back of the blue collar, a plain kraft brown back with no white patch at all, its long striped tail starting at the centre of its rump, in the middle of the bottom of its back where the two legs meet the body, and curling up to the left of the picture across its back with its tip near its left shoulder, the whole tail visible, never pointing straight up and never hanging down between its legs, its two paws at its sides and the backs of its feet |
| `PAWS`, `PAW` | paws, paw |
| `EARS`, `EAR` | ears, ear |

Where the cat's drawing went differently from the puppy's: its base came from a plain Qwen Image 2.1
text-to-image graph (the prompt wired straight into the encoder, 1024 square, seed 20261109), since the
template now rewrites the prompt and returned grey noise; the wall line it drew across the whole picture
was painted green outside the figure, or the slicer would have joined the mood cells. The turnaround's
first seed was taken, and its walk sheets were drawn like the puppy's, from that turnaround and its body.

The robot dog's slot values:

| Slot | Value |
| --- | --- |
| `CREATURE` | a friendly angular robot hound |
| `FEATURES` | a wedge-shaped sheet-white paper head (#fbf7ee) with pen-drawn panel lines, a kraft brown paper snout (#d9bc86) with a small square ink-black nose, two round ink-black eyes each ringed with a thin gold paper ring (#e3b53a), two tall pointed kraft brown paper ears standing up with blue paper tips (#3b5b9a), a terracotta red paper collar (#c8553d) with a small round gold paper tag (#e3b53a), two angular sheet-white paper paws with pen-drawn seam lines |
| `RECAP` | the same wedge-shaped sheet-white paper head with its pen-drawn panel lines, kraft brown snout with the small square black nose, round black eyes with thin gold rings, tall pointed kraft brown ears with blue tips, red collar with its gold tag, pen-ink features, the white die-cut sticker border |
| `HEAD` | the robot hound's wedge-shaped head with its pointed ears and the top of its red collar |
| `BODY` | a short angular sheet-white paper body made of flat panels with pen-drawn panel lines, a kraft brown paper chest plate on its front, its two angular front paws hanging relaxed at its sides, two short blocky legs with angular white feet planted on the ground, a short pointed kraft brown paper tail with a blue tip showing at one side, the same red collar with its gold tag around its neck and the same friendly face |
| `SIDE` | one eye with its gold ring, one pointed ear with its blue tip, the kraft brown snout pointing left, the kraft brown chest plate showing as a sliver at its front, and its short pointed tail with its blue tip at the right |
| `BACK` | the back of its wedge-shaped white head with no face, the backs of both tall pointed ears standing up at the top with their blue tips, the back of the red collar, a plain sheet-white back of flat panels with pen-drawn panel lines and no chest plate at all, its short pointed kraft brown tail with its blue tip starting at the centre of its rump, in the middle of the bottom of its back where the two legs meet the body, and sticking out sideways to the left of the picture across its back with its tip up near the left edge of its body, the whole tail visible, never pointing straight up and never hanging down between its legs, its two paws at its sides and the backs of its feet |
| `PAWS`, `PAW` | paws, paw |
| `EARS`, `EAR` | ears, ear |

Where the robot dog's drawing went differently: it was the first character through the skill's options
step. The base was drawn five ways in one Qwen batch (seeds 20261116 to 20261120, five takes on the brief
that differed in the head, the ears, the face and the accent) and laid side by side by `scripts/options.py`
for the pick; the pick was E's angular hound in B's colours, redrawn twice with the slots merged (seeds
20261121 and 20261122) and the first kept as the base, its wall line painted green outside the figure
like the cat's. The avatar, asked for as one round sticker, came back twice as the head inside a thin
ring, a badge (seeds 20261123 and 20261125); the third asked for the sticker cut along the head's outline
with no ring (seed 20261126) and was kept. The body is seed 20261124. The turnaround (seed 20261127) drew
the back's tail hanging down from the rump; an edit (seed 20261134) raised it only a little, and that
version is the source. The six moods (seeds 20261128 to 20261133, idle to ask) and the four walk sheets
(20261135 to 20261138) were all first seeds, until the back sheet showed two tails in every cell,
the one lying across the back and a second hanging between the legs, the turnaround's old tail come
back; it took two edits of that sheet to land the tail (the prompts below): the first (seed
20261139) took the hanging one away but left the other starting at the hip, at the side of the body,
and the second (seeds 20261140 and 20261141, the second kept) moved its base to the centre of the
rump, where the puppy's is. A third edit (seed 20261142) then fixed the typing cell, which the sheet
had drawn with the arms bent up and the fists beside the shoulders: now the upper arms go down the
sides and only the elbows show, the way the puppy's and the cat's do; and a fourth (seed 20261143)
fixed the pushing cell, whose arm was raised out to the side with the paw showing: now it goes
forward from the shoulder and only a stub of it shows, the paw out of sight in front, like the
cat's. That one is the source. Its peeking frame is the tallest of the three characters because the
ears stand up and the error and ask marks sit above them.

## The prompts

The avatar and the body went to the Qwen Image 2.1 edit graph with the base as the reference image
(`TextEncodeQwenImage21` with `images.image_1`, the wide latent switched on), 25 steps, cfg 1, euler
simple. The mood sheets, the turnaround and the walk sheets went to GPT Image 2.6 Sunburst: the mood
sheets with `src/dog/peek.png` as a first reference and the body as a second, the turnaround with the
body, the walk sheets with the turnaround first and the body second. The mood sheets were Qwen edits
of the base at first, and they flickered: from cell to cell the puppy changed size, its patch swapped
eyes and a mood's whole action sat in one frame with the rest at rest. GPT Image holds the drawing
still and does one beat per frame when every frame is spelled out. The base puppy came from the
text-to-image template with the prompt below; everything else descends from it.

**The base** (1024 by 1024, the text-to-image template, seed 20261107): "Paper-craft cut-out character, the mascot of a paper diorama app: a friendly floppy-eared puppy, only its head and its two front paws showing, peeking over a straight horizontal edge as if looking over a wall, facing the viewer. Everything is made of layered flat paper cut-outs: a cream paper face (#f3e9d5), kraft brown paper floppy ears and one kraft brown patch over its left eye (#d9bc86), a terracotta red paper collar (#c8553d) with a small round tag, two round pink paper cheeks (#e8a9a2), a round ink-black nose, two small dot eyes and a little smiling mouth drawn with a dark pen (#2a2219), thin hand-drawn pen outlines on every piece of paper, and a narrow white die-cut sticker border around the whole figure. Flat colours with a faint paper grain, no gradients, not 3D, not a photo, no drop shadow. The figure is cut off flat along the straight edge where its paws hook over it, and nothing at all is drawn below that edge. Large and centred, isolated on a solid flat bright green chroma-key background (#00FF00). No text, no letters, no logo, no other objects."

**The mood sheets** (1536 by 1024, one per mood, GPT Image 2.6, `peek.png` as the first reference
and the body as the second) open with: "The first reference image is a paper cut-out friendly
floppy-eared puppy peeking over a straight horizontal edge, only its head and its two front paws
showing, both paws hooked over the edge, cut off flat along that edge with nothing drawn below it: a
cream paper face, kraft brown floppy ears, one kraft brown patch over its left eye (the eye on the
right of the picture), a red collar with a round tag, pink cheeks, a round black nose, two dot eyes
and a little smiling mouth in pen ink, flat paper colours with a faint grain, and a narrow white
die-cut sticker border around the whole figure. The second reference image is the same puppy
standing, for its colours and proportions. Draw a stop-motion animation sprite sheet of that peeking
puppy, exactly as it is in the first reference: a grid of 4 columns and 2 rows, 8 cells of equal
size, on the solid flat bright green (#00FF00) background, with a clear green gap between the
figures, no grid lines, no borders, no labels, no numbers and no text. The 8 frames read left to
right along the top row and then along the bottom row. In every cell the puppy is the same drawing
at the same size in the same place, its patch always over the same eye, both paws on the edge unless
a frame says otherwise, and the flat cut bottom edge at the same height in every cell; each frame
changes only a little from the one before it, like a paper puppet moved between photographs. Flat
paper, no shadows, no gradients, not 3D. The eight frames, in order:" and then the eight beats of
each mood, one a frame, because a model given one sentence for the lot puts the action in a frame or
two and leaves the rest at rest, and the cut flickers instead of moving:

- idle (a loop): "1. at rest, chin up over the edge, paws on the edge, eyes open, a content gentle
  smile; 2. breathing in, risen a touch higher over the edge; 3. at its highest, its left ear (on
  the right of the picture) lifted slightly; 4. settling back down, the ear settling; 5. at rest,
  eyes half closed; 6. eyes closed in a blink; 7. eyes open again, at rest; 8. exactly like frame 1,
  so the loop closes."
- greet (one shot): "1. at rest, paws on the edge, smiling; 2. perking up: ears bounced up a little,
  mouth opening, its right paw (on the left of the picture) starting to lift off the edge; 3. the
  right paw raised up beside its head, its pad turned to the viewer, a wide happy open smile with a
  small pink paper tongue; 4. the paw waving outward, away from its head; 5. the paw waving back in,
  close beside its ear; 6. the paw waving outward again; 7. the paw coming back down toward the
  edge, the smile softening to a closed smile; 8. the paw back on the edge, at rest, exactly like
  frame 1."
- celebrate (one shot): "1. at rest, paws on the edge, smiling; 2. perking up: ears rising, both
  paws lifting off the edge, mouth opening; 3. both paws thrown up in the air, eyes closed in a big
  happy grin, ears flying up, a few small paper confetti pieces in red, blue, green and amber
  popping up around its head; 4. bounced up higher, paws spread wide, the confetti at its highest;
  5. coming down a little, the confetti drifting down past its ears; 6. bounced up again with both
  paws up, the confetti lower, around its cheeks; 7. the paws coming down to the edge, eyes opening,
  the last confetti pieces down near the edge; 8. both paws back on the edge, at rest with a happy
  smile and no confetti, exactly like frame 1."
- sad (one shot, held): "1. at rest, paws on the edge, its smile fading to a straight mouth; 2. its
  ears beginning to sink, its eyebrows turning up with worry; 3. ears down, eyes looking down, mouth
  turned down; 4. sunk a little lower behind the edge; 5. a small blue paper teardrop forming at the
  corner of its eye; 6. the teardrop sliding down its cheek; 7. the teardrop at the bottom of its
  cheek, the puppy at its lowest; 8. holding that sorry pose: ears down, mouth down, the teardrop at
  its cheek, paws still on the edge."
- error (a loop): "1. dazed from a bump on the head, its head tilted to the left of the picture,
  little spiral swirl eyes, ears sticking out stiffly, a small red paper exclamation mark bursting
  above its head and three tiny paper stars circling over its head; 2. head tilting back toward
  upright, the stars moved a step around its head; 3. head upright, the stars moved another step; 4.
  head tilting to the right of the picture; 5. head tilted to the right, the stars moved on; 6. head
  tilting back toward upright; 7. head upright; 8. head tilting to the left, the stars nearly back
  where they started, so the loop closes on frame 1. The swirl eyes, the stiff ears, the exclamation
  mark and the three stars are in every frame."
- ask (a loop): "1. looking at the viewer with wide shiny eyes, eyebrows up, its left ear (on the
  right of the picture) raised, a big orange paper question mark above its head, both paws on the
  edge; 2. head tilting to the left of the picture; 3. head tilted to the left, its right paw (on
  the left of the picture) lifted a little off the edge; 4. the paw tapping back down on the edge,
  head still tilted left; 5. head coming back upright; 6. head tilting to the right of the picture;
  7. head tilted to the right, the paw tapping the edge once more; 8. head coming back toward
  upright, so the loop closes on frame 1. The raised ear, the wide shiny eyes and the question mark
  above its head are in every frame."

**The avatar** (1024 by 1024): "...draw one avatar portrait of it: just the puppy's head with its ears
and the top of its red collar, seen straight from the front, looking at the viewer with a friendly
closed-mouth smile, centred and filling the picture, cut out as one round paper sticker with a clean
white die-cut border all around it, on a solid flat bright green (#00FF00) background. No text, no
shadow, nothing else in the picture."

**The body** (1024 by 1536, the reference for the turnaround): "...draw the whole puppy from head to
toe: it stands upright on its two hind legs like a little mascot, seen straight from the front, with a
short round cream paper body, a kraft brown paper patch on its tummy, its two front paws hanging
relaxed at its sides, two short legs with little round feet planted on the ground, the tip of its tail
showing at one side, the same red collar around its neck and the same friendly smiling face. One flat
paper cut-out with a clean white die-cut border all around it, centred, filling the height of the
picture, on a solid flat bright green (#00FF00) background. No text, no shadow, nothing else in the
picture."

**The turnaround** (1536 by 1024, GPT Image 2.6, from the body): "A character turnaround sheet (model
sheet) of the paper cut-out friendly floppy-eared puppy from the reference image, exactly as it is: the
same cream paper face with the kraft brown patch over its left eye, two small dot eyes, a round black
nose and a little smile, pink cheeks, kraft brown floppy ears, the red collar with its round tag, a short
round cream body with a kraft brown oval patch on its tummy, short legs with little round feet, a short
tail, pen-ink outlines, flat paper colours with a faint grain, and a white die-cut sticker border around
each figure. The puppy stands upright in the same neutral pose in every view, both paws relaxed at its
sides, both feet planted, the same size and proportions, feet on one ground line. Four views in one
row, left to right, with a wide green gap between them: 1. from the front, facing the viewer, exactly
like the reference; 2. from its left side in strict profile, its snout pointing to the left edge of the
picture, one eye, one ear, the tummy patch showing as a sliver at its front, its tail at the right;
3. from directly behind, facing away from the viewer: the back of its head with no face, the backs of
both floppy ears hanging at the sides, the back of the red collar, a plain cream back with no patch at
all, its short tail at the bottom in the middle, its two paws at its sides and the backs of its feet;
4. from its right side in strict profile, its snout pointing to the right edge of the picture, its tail
at the left. All on a solid flat bright green (#00FF00) background, with no ground line drawn, no grid
lines, no borders, no labels and no text. Flat paper, no shadows, no gradients, not 3D."

That wording put the tail where it said, a whole tail hanging in the middle, and it took three edits
of the sheet to land the tail, each with the turnaround as the first reference and the body as the
second (a whole tail at the hip, then a stub at the centre, both wrong). The one that stuck:
"...Reproduce the turnaround sheet exactly as it is, every figure the same size and in the same place,
with the same colours, the same pen-ink outlines, the same faint paper grain and the same white
die-cut sticker border around each figure, changing only one thing: the tail of the third figure, the
view from behind. Seen from directly behind, the puppy's short kraft brown paper tail (#d9bc86) starts
at the centre of its rump, in the middle of the bottom of its back right where the two legs meet the
body, and sticks out sideways to the left of the picture, lying across the cream back with its tip
curling up near the left edge of the body. The whole tail is visible from behind: its base at the
centre, its length going to the left, its tip curling upward at the left, the same kraft brown paper
with the same pen outline and about the same size as the tail the front view shows peeking out at its
hip, which is this same tail seen from the other side. It does not point straight up, does not hang
down and does not start at the side of the body: it starts at the centre and goes to the left. Nothing
else about the back view changes..." The skill's `{BACK}` slot now carries the tail that way from the
start.

**The walk sheets** (1536 by 1024, GPT Image 2.6, the turnaround first and the body second, one per
facing; seeds 20261108 to 20261111 for the puppy, 20261112 to 20261115 for the cat and 20261135 to 20261138 for the robot dog, down, left, right,
up, every first seed kept but the robot dog's back, edited four times, and the puppy's back, edited once for its pushing cell, below). The front: "The first reference image is a character turnaround of the paper cut-out a friendly floppy-eared puppy: its front, its left side, its back and its right side. The second reference image is the same character from the front. Draw the character exactly as the turnaround's first figure, the front shows it (the same cream paper face, kraft brown floppy ears and eye patch, red collar with its tag, pink cheeks, pen-ink features, the white die-cut sticker border), as a stop-motion sprite sheet: a grid of 3 columns and 2 rows, 6 cells of equal size, on a solid flat bright green (#00FF00) background, with no grid lines, no borders, no labels and no text. The 6 cells read left to right along the top row and then along the bottom row. In every cell the character is the same drawing at the same size as in the turnaround, seen straight from the front, facing the viewer, its body upright and square to the viewer in every cell, never turning, its feet on the same ground line, its head, body, ears and tail exactly alike from cell to cell, so that the six cells play as one animation of one figure. The 6 cells: 1. standing still with both paws relaxed at its sides, both feet planted, exactly like the turnaround's first figure, the front; 2. marching on the spot, a stomp: its right foot stays planted flat on the ground and its left foot is lifted a little way straight up off the ground, the foot kept flat and level exactly as it is when standing, the leg a little shorter and bent only a little at the knee, staying directly under the body, the sole never showing, the body a touch higher, the arms swinging, the left paw a little forward and the right a little back; 3. the other stomp: its left foot planted flat and its right foot lifted flat the same way, the arms swinging the other way; 4. working, both paws raised up in front of its chest as if typing on a keyboard; 5. working, one paw pushed forward as if pressing a button; 6. waving hello with one paw raised high above its head. Flat paper, no shadows, no gradients, like a paper puppet moved between photographs."

The other three change the figure the prompt points at and the facing clause: the left side ("second
figure, the left side"; "from the side in strict profile, turned to face the left edge of the picture, so
we see one eye, one ear, the tummy patch showing as a sliver at its front, its snout pointing left and its
tail at the right; its head stays in that profile in every cell, never turning toward the viewer, so only
one eye ever shows; in cells 2 and 3 the lifted foot is raised flat and level a little off the ground with
its toes pointing the way it faces, directly under the body"), the right side ("fourth figure, the right
side", the same mirrored, "its tail at the left") and the back ("third figure, the back"; "from directly
behind, facing straight away from the viewer, so we see" the `{BACK}` slot's back, "its body stays upright
and square to the viewer, never turning; in cell 4 only its elbows show at its sides, and in cell 5 the
pushed paw is out of sight in front of it; in cells 2 and 3 the lifted foot is simply raised flat a little
off the ground directly under the body, the back of its heel toward the viewer, its sole never showing,
never a leg angled out to the side").

**The robot dog's back sheet** came back with two tails in every cell, the one lying across the back and a second hanging between the legs, and it took two edits of it (1536 by 1024, GPT Image 2.6, the sheet itself as the first reference and the body as the second) to land the tail, both opening the way the turnaround's edit did: "The first reference image is a stop-motion sprite sheet of a paper cut-out friendly angular robot hound seen from directly behind, facing straight away from the viewer: a grid of 3 columns and 2 rows, 6 cells of equal size, on a solid flat bright green (#00FF00) background. The second reference image is the same character from the front." The first edit (seed 20261139) took the hanging tail away: "...Reproduce the sprite sheet exactly as it is, every figure the same size and in the same place in its cell, in the same pose, with the same colours, the same pen-ink outlines, the same pen-drawn panel lines, the same faint paper grain and the same white die-cut sticker border around each figure, on the same solid flat bright green background with no grid lines, no borders, no labels and no text, changing only one thing, the same way in every one of the six cells: the robot hound has exactly one tail. Right now each figure shows two tails. The second tail, the short one hanging straight down from the middle of the bottom of its back between its legs, is removed, and that spot becomes plain sheet-white paper back panel (#fbf7ee) with the same pen-drawn panel lines, the two legs meeting the body as before. The one tail that stays is the one already sticking out sideways to the left of the picture: its short pointed kraft brown paper tail (#d9bc86) with its blue tip, starting at the centre of its rump at the bottom of its back right where the two legs meet the body and sticking out across its back to the left with its tip up near the left edge of its body, the whole tail visible, the same size, shape and colours as it is now. Nothing else about any cell changes: the head, the backs of the ears with their blue tips, the back of the red collar, the paws, the feet and each cell's pose stay exactly as they are. Flat paper, no shadows, no gradients, not 3D." It did, but the tail it kept started at the hip, at the side of the body, not at the centre the words asked for. The second (seeds 20261140 and 20261141) moved it: "...changing only one thing, the same way in every one of the six cells: where the tail starts. Right now the tail sticks out from the left hip, from the side of the body. Instead, seen from directly behind, the robot hound's short pointed kraft brown paper tail (#d9bc86) with its blue tip starts at the centre of its rump, in the middle of the bottom of its back right where the two legs meet the body, and sticks out sideways to the left of the picture, lying across the sheet-white back with its tip up near the left edge of the body. The whole tail is visible from behind: its base at the centre of the rump, its length going to the left across the back, its tip pointing up at the left, the same kraft brown paper with the same blue tip, the same pen outline and about the same size as the tail the front view shows peeking out at its hip, which is this same tail seen from the other side. It does not point straight up, does not hang down between the legs and does not start at the side of the body: it starts at the centre and goes to the left. The side of the body where the tail used to stick out becomes plain sheet-white paper (#fbf7ee) with the same panel lines, the white die-cut border following the body's outline there. Nothing else about any cell changes: the head, the backs of the ears with their blue tips, the back of the red collar, the paws, the feet and each cell's pose stay exactly as they are. Flat paper, no shadows, no gradients, not 3D." The first of that pair put the tail at the centre but hanging down between the legs; the second has it starting at the centre and sticking out to the left. That sheet's typing cell, the fourth, still had its arms bent up with the fists beside the shoulders, where the puppy's and the cat's show the upper arms going down the sides with only the elbows out; a third edit (seed 20261142, the same opening and the same two references) put them right: "...changing only one thing, in one cell only: the arms of the fourth cell, the first cell of the bottom row. In that cell the robot hound is working, both paws raised up in front of its chest as if typing on a keyboard, and seen from directly behind its paws and forearms are out of sight in front of its body. Right now that cell's arms are drawn wrong: they are bent upward with the fists raised beside its shoulders, out at the sides. Instead, its two angular sheet-white paper upper arms go straight down from its shoulders along the sides of its body, exactly as they do in the first cell, the one standing still, and about halfway down the body each elbow bends forward so that the forearm and the paw go out of sight in front of the body; from behind only the two elbows show, each poking out a little at the side of the body about halfway down its back, as a small angular sheet-white paper corner with the same pen-ink outline and panel lines, nothing raised above them and no paws visible anywhere. The head, the backs of the ears with their blue tips, the back of the red collar, the body, the tail, the two legs, the feet and the pose of that cell stay exactly as they are, and the white die-cut sticker border follows the arms' new outline. The other five cells do not change at all. Flat paper, no shadows, no gradients, not 3D." It changed that cell alone. The pushing cell, the fifth, still raised its arm out to the side with the paw showing, where the cat's keeps it forward and hidden (the puppy's raises it too); a fourth edit (seed 20261143, the same opening and references) tucked it away: "...changing only one thing, in one cell only: the raised arm of the fifth cell, the middle cell of the bottom row. In that cell the robot hound is working, one paw pushed forward in front of it as if pressing a button, and seen from directly behind the pushed paw and its forearm are out of sight in front of its body. Right now that cell's arm is drawn wrong: the arm on the right side of the picture is raised out to the side at shoulder height with its paw showing. Instead, that arm goes forward from the shoulder, away from the viewer, so that from behind only the shoulder and a short stub of the angular sheet-white paper upper arm show, poking out a little at the right side of the body just below the red collar, with the same pen-ink outline and panel lines, and no paw is visible anywhere; the other arm, on the left side of the picture, stays hanging down at the side exactly as it is now. The head, the backs of the ears with their blue tips, the back of the red collar, the body, the tail, the two legs, the feet and the pose of that cell stay exactly as they are, and the white die-cut sticker border follows the arm's new outline. The other five cells do not change at all. Flat paper, no shadows, no gradients, not 3D." It changed that cell alone and is the sheet in use.

**The puppy's back sheet** had the same pushing cell, its arm raised out to the side with the paw showing, and one edit (seed 20261144; its own sheet first, its body second; the robot's opening with the puppy's words) tucked it away the same way: "...changing only one thing, in one cell only: the raised arm of the fifth cell, the middle cell of the bottom row. In that cell the puppy is working, one paw pushed forward in front of it as if pressing a button, and seen from directly behind the pushed paw and its forearm are out of sight in front of its body. Right now that cell's arm is drawn wrong: the arm on the right side of the picture is raised out to the side at shoulder height with its paw showing. Instead, that arm goes forward from the shoulder, away from the viewer, so that from behind only the shoulder and a short stub of the cream paper upper arm show, poking out a little at the right side of the body just below the red collar, with the same pen-ink outline, and no paw is visible anywhere; the other arm, on the left side of the picture, stays hanging down at the side exactly as it is now. The head, the backs of the floppy kraft brown ears, the back of the red collar, the cream body, the kraft brown tail, the two legs, the feet and the pose of that cell stay exactly as they are, and the white die-cut sticker border follows the arm's new outline. The other five cells do not change at all. Flat paper, no shadows, no gradients, not 3D." It changed that cell alone and is the sheet in use. The cat's sheets needed nothing: a check of all twelve walk sheets, cell by cell, found only these two pushing cells clearly off, and the front stomps of the robot dog and the puppy lifting the foot angled rather than flat, which was left as it reads fine in motion.
