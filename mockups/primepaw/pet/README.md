# Jarvis, the paper puppy

The pet over the composer, the main agent's face, and the standee that walks the Factory Overseer's
floor are one character, a paper cut-out puppy: cream paper face and body, kraft brown floppy ears,
an eye patch and a tummy patch, a red collar with a tag, pink cheeks, pen-ink features, and the white
die-cut border every Kraft sticker has. Three cuts of it ship here, drawn on Comfy Cloud (Qwen Image 2.1,
the open-weight template, for the peeking sheets, the avatar and the body; GPT Image 2.6 Sunburst for
the turnaround and the puppet's parts sheets) and sliced by `build.py`.

| File | What it is | Where it goes |
| --- | --- | --- |
| `dog.png`, `dog.json` | The peeking puppy: an atlas with a row per mood (idle, greet, celebrate, sad, error, ask) and 8 frames across, drawn at 2x; the JSON holds the frame size and the CSS numbers | Over the composer on every board that has one, as `.pet`, see the `/* pet: */` block in a board's style |
| `dog-face.png` | The avatar: the puppy's head as one round sticker, 176px square (88 CSS px at 2x) | The Jarvis tile on the rail, the thread portraits, any row or badge that needs the main agent's face, as `.jface` |
| `dog-rig.png`, `dog-rig.json`, `puppet.js` | The standee as a cut-out puppet: the atlas of its pieces for each facing, the rig that says where each piece sits, where it turns and which is in front, and the driver that poses them in steps | The factory floor and the Pet board's mock of it, as `.standee`; see below |
| `src/dog/` | The sheets as Comfy Cloud drew them, on chroma-key green, one per mood, the avatar, the body design, the turnaround (the puppy from its four sides) and one parts sheet per facing (the figure taken apart into the puppet's pieces) | Inputs to `build.py`; keep them so a cut can be rebuilt |

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

## The standee, a cut-out puppet

The standee is animated the way a South Park character is: not a sprite sheet of drawn poses but a
puppet of separate paper pieces, each its own layer pinned at a pivot, posed by code in steps of a
tenth of a second so it reads as stop-motion. For each facing (down, toward the viewer; left; right;
up, away) the puppy comes apart into a head, its ears, a body, two arms, two legs and a tail; a profile
has one ear and a near and a far arm and leg. `dog-rig.png` packs every piece and `dog-rig.json` says
for each where it sits in the standing figure, where it turns (a leg and an arm at the top, the head at
the neck, an ear and the tail where they grow from the head and the body, the body at its base) and
its depth (the legs and the far limbs behind the body, the head and the near arm in front, the ears
behind the head from the front and over it from behind and in profile, the back view's tail lying over
the rump), all at a figure height of 448 px, about four times its size on screen.

`puppet.js` mounts a puppet on an element from the rig (`PetPuppet.load(url)`, then
`PetPuppet.mount(el, rig, { height })`) and poses it with `facing(f)` and `pose(doing, t, still)`:
idle breathes, with the ears and tail just alive; walking scissors the legs at the hip and swings the
arms against them in profile, and from the front or back lifts each foot in turn, with the body
rolling a little and the whole figure bobbing twice a stride; working pumps the paws; attention
raises one paw over the head and waves it, with a hop. Under `prefers-reduced-motion` nothing moves.
The Pet board walks it round a mock of the factory floor, and a host does the same with those three
calls. The factory puts no folded tab under it: the paws sit straight on the floor.

The pieces are drawn by GPT Image 2.6 Sunburst from `src/dog/turnaround.png`, the puppy from its four
sides, as one parts sheet per facing (`src/dog/parts-*.png`): the figure taken apart into its pieces,
laid out in a grid in reading order, every piece complete including what hides under another when the
puppet is together. `build.py` cuts the pieces off the sheet by the bands of paper, then fits each one
back into the turnaround's figure to find where it sits: the body first, over a range of scales, by a
normalised cross-correlation of its colours, which sets the sheet's scale against the turnaround; then
every piece at that scale by how well its pen-ink outline lies on the figure's outlines (both blurred,
so the fit sees it from a few pixels off) plus a little colour agreement, a score that forgives the
hidden part of a piece and does not let a cream leg settle inside the cream body, which a plain colour
match did. The white border counts for little in it: the figure has one only around its silhouette,
and a border that weighed much dragged every piece to the figure's edge. A tail is tried mirrored too,
since the model draws it either way round. `--check <file>` writes the four puppets put together under
the turnaround's figures, the way to judge a build before shipping it.

Before the puppet the standee was a sprite sheet, six drawn poses per facing in the Factory Overseer's
cell layout. The walk from behind never came right from words, even with two frames of a MiniMax walk
video as the reference, and a drawn pose can only ever be the pose that was drawn; the puppet moves any
way the code says. The sheet, its strips and that recipe went with it.

## Rebuilding a cut

```bash
python3 mockups/primepaw/pet/build.py            # all three, from src/dog/
python3 mockups/primepaw/pet/build.py --width 92 # the peeking puppy 92 CSS px wide
python3 mockups/primepaw/pet/build.py --name cat # another character, from src/cat/ to cat.png and friends
python3 mockups/primepaw/pet/build.py --check /tmp/rig.png  # and the four puppets put together under the turnaround, to judge the fit
```

The boards play 8 frames a row (`steps(8)` and an 8-column `background-size` in their `/* pet */`
block), so leave `--frames` at 8 unless you change those with it; `build.py` warns otherwise.

`build.py` keys the green out (the key colour is read off each sheet's border, edge pixels are
un-mixed), finds the cells on a sheet by the bands of paper rather than trusting the grid the model was
asked for (it draws 4 by 2, 4 by 3 or 3 by 3 as it likes), tightens each frame to its paper, scales
every frame of a cut alike (the puppet's four facings each to the same standing height, so it keeps its
height as it turns), lays them out with the flat cut edge, or the feet, on one line, and fits the puppet's
pieces back into the turnaround's figures (above). Needs Pillow and numpy.

## The prompts

The mood sheets, the avatar and the body went to the Qwen Image 2.1 edit graph with the previous cut
as its reference image (`TextEncodeQwenImage21` with `images.image_1`, the wide latent switched on),
25 steps, cfg 1, euler simple; the turnaround went to GPT Image 2.6 Sunburst with the body as the
reference image, and the parts sheets with the turnaround as a first reference and the body as a second. The base puppy came from the text-to-image template with the prompt below; everything
else edits from it.

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

**The parts sheets** (1536 by 1024, GPT Image 2.6, the turnaround first and the body second, one per
facing, two seeds each; the puppy ships the first seed's sheets, with the second seed's tail pasted into
the back sheet, since the first drew it as a hook). The front: "The first reference image is a character turnaround of a paper cut-out friendly floppy-eared puppy: its front, its left side, its back and its right side. The second reference image is the same puppy from the front. Draw the turnaround's first figure, the front view, taken apart into the separate paper pieces of a cut-out puppet, the way a South Park character's pieces are laid out for animation: a grid of 3 columns and 3 rows on the solid flat bright green (#00FF00) background, one piece per cell, with wide green gaps between the pieces, no grid lines, no labels, no text and no numbers. Every piece is drawn complete, at exactly the same scale as the figure in the turnaround, including the part of it that is hidden behind another piece when the puppet is put together: the top of each leg reaches up under the body, the top of each arm reaches in under the body's shoulder, the root of each ear reaches under the head, the base of the tail reaches under the body. Each piece is a flat paper cut-out with its own pen-ink outline and its own narrow white die-cut sticker border all the way around it, the same cream, kraft brown, red and pink paper colours with a faint grain as the turnaround. Flat paper, no shadows, no gradients, not 3D, nothing assembled, no whole figure anywhere in the picture. The nine pieces, in reading order: 1. the head alone, the cream face with the kraft brown patch over its left eye, the two dot eyes, the round black nose, the pink cheeks and the little smiling mouth, without the ears; 2. its left ear, the kraft brown floppy ear that hangs on the left of the picture, hanging straight down; 3. its right ear; 4. the body alone, the short round cream torso with the red collar and its round tag at the top and the kraft brown tummy patch, with no arms, no legs and no head; 5. its left arm, the cream paw that hangs on the left of the picture, straight down, complete up to the shoulder; 6. its right arm; 7. its left leg with its round foot, hanging straight down, complete up to the hip; 8. its right leg; 9. the short kraft brown tail."

The other three change the figure the prompt points at, the grid and the list of pieces. The back
("third figure, the view from directly behind", 3 by 3): the back of the head alone, plain cream with no
face and no ears; the left and right ears from behind; the body from behind, the plain cream back with
the back of the red collar and no patch; the left and right arms seen from behind; the left and right
legs with the backs of their feet; "the whole short kraft brown tail as the turnaround's back view
shows it, curving with its tip up". The profiles ("second figure, the left side view in strict
profile" and "fourth figure, the right side view in strict profile", a grid of 4 columns and 2 rows,
eight pieces): the head in profile with its snout pointing left (right), one dot eye, the black nose,
one pink cheek and the smile, without the ear; the one floppy ear that shows in profile; the body in
profile with the red collar at the top and the sliver of the tummy patch at its front, with no arms,
no legs, no head and no tail; the near arm, the paw on the side toward the viewer, complete up to the
shoulder; the far arm; the near leg with its round foot, complete up to the hip; the far leg; the tail
that sticks out at the right (left), complete to its base.
