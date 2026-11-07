# Jarvis, the paper puppy

The pet over the composer, the main agent's face, and the standee that walks the Factory Overseer's
floor are one character, a paper cut-out puppy: cream paper face and body, kraft brown floppy ears,
an eye patch and a tummy patch, a red collar with a tag, pink cheeks, pen-ink features, and the white
die-cut border every Kraft sticker has. Three cuts of it ship here, all drawn with Qwen Image 2.1 on
Comfy Cloud (the open-weight templates, no partner credits) and sliced by `build.py`.

| File | What it is | Where it goes |
| --- | --- | --- |
| `dog.png`, `dog.json` | The peeking puppy: an atlas with a row per mood (idle, greet, celebrate, sad, error, ask) and 8 frames across, drawn at 2x; the JSON holds the frame size and the CSS numbers | Over the composer on every board that has one, as `.pet`, see the `/* pet: */` block in a board's style |
| `dog-face.png` | The avatar: the puppy's head as one round sticker, 176px square (88 CSS px at 2x) | The Jarvis tile on the rail, the thread portraits, any row or badge that needs the main agent's face, as `.jface` |
| `dog-walk.png`, `dog-walk.json` | The standee: the Factory Overseer's pet sheet, 6 columns by 4 facings of 256 by 320 px cells | The factory floor; see below |
| `src/dog/` | The sheets as Comfy Cloud drew them, on chroma-key green, one per mood, the avatar, the body design and one walk strip per facing | Inputs to `build.py`; keep them so a cut can be rebuilt |

Every file is named after the character, `dog`; a second character is the same five files and a source
folder under another id. The `primepaw-character` skill in `.claude/skills/` walks through drawing one,
building it and wiring it into the picker and the boards.

See `DioramaPet.dc.html` for the three side by side, with every mood and the standee walking a round.

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
puppy says hello. Under `prefers-reduced-motion` it holds its first frame.
The click is a mouse-only easter egg: the puppy is a decorative sticker, `aria-hidden` and outside the
tab order, so nothing a keyboard or a screen reader needs lives on it.

## The standee on the factory floor

The Factory Overseer (the `Factory-Redesign` branch) draws each agent as a paper pet standee on a
fixed 38-degree camera and reads a pet sheet by URL: 6 columns, one row per facing (down, left, right,
up). Column 0 stands, 1 and 2 are the two steps of a walk (it plays 0, 1, 2, 1 at 8 frames a second,
facing the way it goes), 3 and 4 the two beats of working (5.5 a second), 5 and 0 the wave for
attention (3.2 a second), with a little lift and roll on top. `dog-walk.png` is cut to that layout, the
puppy's feet on the cell's ground line and the standing puppy 86% of the cell's height, so the host
hands it over as

```ts
petAssets: { byAgent: { jarvis: { src: "pet/dog-walk.png", layout: "sheet", height: 2.67 } } }
```

`dog-walk.json` repeats those numbers. The factory puts no folded tab under it: the paws sit straight on the floor.

## Rebuilding a cut

```bash
python3 mockups/primepaw/pet/build.py            # all three, from src/dog/
python3 mockups/primepaw/pet/build.py --width 92 # the peeking puppy 92 CSS px wide
python3 mockups/primepaw/pet/build.py --name cat # another character, from src/cat/ to cat.png and friends
```

The boards play 8 frames a row (`steps(8)` and an 8-column `background-size` in their `/* pet */`
block), so leave `--frames` at 8 unless you change those with it; `build.py` warns otherwise.

`build.py` keys the green out (the key colour is read off each sheet's border, edge pixels are
un-mixed), finds the cells on a sheet by the bands of paper rather than trusting the grid the model was
asked for (it draws 4 by 2, 4 by 3 or 3 by 3 as it likes), tightens each frame to its paper, scales
every frame of a cut alike (the standee's four facings each to the same standing height, so it keeps its
height as it turns), and lays them out with the flat cut edge, or the feet, on one line. Needs
Pillow and numpy.

## The prompts

Every prompt went to the Qwen Image 2.1 edit graph with the previous cut as its reference image
(`TextEncodeQwenImage21` with `images.image_1`, the wide latent switched on), 25 steps, cfg 1, euler
simple. The base puppy came from the text-to-image template with the prompt below; everything else
edits from it.

**The base** (1024 by 1024, the text-to-image template, seed 20261107): "Paper-craft cut-out character, the mascot of a paper diorama app: a friendly floppy-eared puppy, only its head and its two front paws showing, peeking over a straight horizontal edge as if looking over a wall, facing the viewer. Everything is made of layered flat paper cut-outs: a cream paper face (#f3e9d5), kraft brown paper floppy ears and one kraft brown patch over its left eye (#d9bc86), a terracotta red paper collar (#c8553d) with a small round tag, two round pink paper cheeks (#e8a9a2), a round ink-black nose, two small dot eyes and a little smiling mouth drawn with a dark pen (#2a2219), thin hand-drawn pen outlines on every piece of paper, and a narrow white die-cut sticker border around the whole figure. Flat colours with a faint paper grain, no gradients, not 3D, not a photo, no drop shadow. The figure is cut off flat along the straight edge where its paws hook over it, and nothing at all is drawn below that edge. Large and centred, isolated on a solid flat bright green chroma-key background (#00FF00). No text, no letters, no logo, no other objects."

**The mood sheets** (2048 by 1024, one per mood) open with: "Using the paper cut-out puppy from the
reference image exactly as it is (the same cream paper face, kraft brown floppy ears and eye patch,
red collar with its tag, pink cheeks, pen-ink features, the white die-cut sticker border, the same
flat paper style and the same peeking-over-an-edge pose with both paws hooked on the edge), draw a
stop-motion animation sprite sheet: a grid of 4 columns and 2 rows, 8 cells of equal size, on the same
solid flat bright green (#00FF00) background, with no grid lines, no borders, no labels and no text.
The 8 frames read left to right along the top row and then along the bottom row and loop back to the
first. In every cell the puppy is the same size and in the same place, with the flat cut bottom edge
of its paws at the same height, and each frame changes only a little from the one before it, like a
paper puppet moved between photographs. The animation:" and then

- idle: "the puppy rests calmly with its chin and paws on the edge and breathes slowly, rising a touch
  and settling back; it blinks once around the fifth and sixth frames, and one ear lifts slightly and
  settles; a content, gentle smile throughout."
- greet: "a happy hello: the puppy perks up, lifts its right paw off the edge and waves it from side to
  side, its ears bounce and its mouth opens in a wide happy smile with a small pink paper tongue
  showing; by the last frame the paw is back on the edge."
- celebrate: "a cheer: the puppy throws both paws up in the air with joy, eyes closed in a big happy
  grin, ears flying up, bouncing up and down, while a few small paper confetti pieces in red, blue,
  green and amber pop up around its head and drift down; by the last frame both paws are back on the
  edge."
- sad: "a slow droop: the puppy's ears sink down, its eyebrows turn up with worry, its eyes look down,
  its mouth turns down, it sinks a little lower behind the edge, and one small blue paper teardrop
  forms by its eye and slides down its cheek; a slow, sorry motion."
- error: "a dizzy spell: the puppy has bumped its head and wobbles from side to side, dazed, with
  little spiral swirl eyes, ears sticking out stiffly, a small red paper exclamation mark bursting
  above its head, and three tiny paper stars circling over its head."
- ask: "asking for attention: the puppy tilts its head curiously from one side to the other, one ear
  raised, eyebrows up, eyes wide and shiny, a big orange paper question mark popping up above its
  head, and it taps the edge with one paw."

**The avatar** (1024 by 1024): "...draw one avatar portrait of it: just the puppy's head with its ears
and the top of its red collar, seen straight from the front, looking at the viewer with a friendly
closed-mouth smile, centred and filling the picture, cut out as one round paper sticker with a clean
white die-cut border all around it, on a solid flat bright green (#00FF00) background. No text, no
shadow, nothing else in the picture."

**The body** (1024 by 1536, the reference for the walk strips): "...draw the whole puppy from head to
toe: it stands upright on its two hind legs like a little mascot, seen straight from the front, with a
short round cream paper body, a kraft brown paper patch on its tummy, its two front paws hanging
relaxed at its sides, two short legs with little round feet planted on the ground, the tip of its tail
showing at one side, the same red collar around its neck and the same friendly smiling face. One flat
paper cut-out with a clean white die-cut border all around it, centred, filling the height of the
picture, on a solid flat bright green (#00FF00) background. No text, no shadow, nothing else in the
picture."

**The walk strips** (2048 by 512, one per facing, from the body): "...draw a stop-motion sprite strip:
one row of 6 cells of equal size, on a solid flat bright green (#00FF00) background, with no grid
lines, no borders, no labels and no text. In every cell the puppy is the same size, seen [straight from
the front, facing the viewer | from the side in profile, turned to face the left edge of the picture,
so we see one eye, one ear, its snout pointing left and its tail at the right | ...the right edge... |
from behind, facing away from the viewer, so we see the back of its head with both floppy ears, the
back of its collar, its back and its tail, and no face at all], with its feet standing on the same
ground line. The 6 cells, from left to right: 1. standing still with both paws relaxed at its sides;
2. mid-step walking, its left leg forward and right leg back, arms swinging; 3. mid-step walking, its
right leg forward and left leg back, arms swinging the other way; 4. working, both paws raised up in
front of its chest as if typing on a keyboard; 5. working, one paw pushed forward as if pressing a
button; 6. waving hello with one paw raised high above its head. Like a paper puppet moved between
photographs."
