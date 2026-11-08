# The prompts, as templates

These are the puppy's prompts with the puppy taken out. Each has a handful of slots; fill them from the
character brief and keep every sentence outside the slots, because those sentences are what make the
sheets sliceable (the green key, the flat cut edge, the same size in every cell) and what keep the
style on the Kraft design language (flat paper, die-cut border, pen ink, no shadow). After the base, every
prompt names the character's pieces again (`{RECAP}`, or `{FEATURES}` on the mood sheets) so the model
keeps the character it is shown.

## The slots

| Slot | What goes in it | The puppy's value |
| --- | --- | --- |
| `{CREATURE}` | the creature in a few words, with the trait that makes its silhouette | a friendly floppy-eared puppy |
| `{FEATURES}` | its paper pieces, each with a Kraft colour, from the big ones to the pen-ink details | a cream paper face (#f3e9d5), kraft brown paper floppy ears and one kraft brown patch over its left eye (#d9bc86), a terracotta red paper collar (#c8553d) with a small round tag, two round pink paper cheeks (#e8a9a2), a round ink-black nose, two small dot eyes and a little smiling mouth drawn with a dark pen (#2a2219) |
| `{RECAP}` | the same pieces in a short list, for the edits | the same cream paper face, kraft brown floppy ears and eye patch, red collar with its tag, pink cheeks, pen-ink features, the white die-cut sticker border |
| `{HEAD}` | what the avatar shows: the head and whatever sits at the neck | the puppy's head with its ears and the top of its red collar |
| `{BODY}` | the standing figure, head to toe | a short round cream paper body, a kraft brown paper patch on its tummy, its two front paws hanging relaxed at its sides, two short legs with little round feet planted on the ground, the tip of its tail showing at one side, the same red collar around its neck and the same friendly smiling face |
| `{SIDE}` | what a profile view shows | one eye, one ear, the tummy patch showing as a sliver at its front, its snout pointing left and its tail at the right |
| `{BACK}` | what the view from behind shows, absences included: the front never shows the back, so the model makes one up unless this slot settles it; say where each part the front does show (a tail, a bow) sits from behind and how much of it shows, or it gets reinvented too | the back of its head with no face, the backs of both floppy ears hanging at the sides, the back of the red collar, a plain cream back with no patch at all, its short kraft brown tail starting at the centre of its rump, in the middle of the bottom of its back where the two legs meet the body, and sticking out sideways to the left of the picture across its back with its tip curling up near the left edge of its body, the whole tail visible, never pointing straight up and never hanging down between its legs, its two paws at its sides and the backs of its feet |
| `{PAWS}` | the word for its front limbs | paws |
| `{PAW}` | one of them | paw |
| `{EARS}` | the part that bounces, droops or perks (ears, antennae, feathers, a hat) | ears |

The cat, the second character, has its values in `pet/README.md` beside the puppy's, a second worked
example of the same slots. For the options step, write `{CREATURE}` and `{FEATURES}` five ways, one per
take on the brief; the other slots are written for the take the user picks.

Colours come from the Kraft tokens so the character sits on the boards like every other sticker. The
light-theme values: paper cream `#f3e9d5`, sheet white `#fbf7ee`, kraft `#d9bc86`, kraft dark `#b3905a`,
terracotta red `#c8553d`, blue `#3b5b9a`, green `#5b8c5a`, amber `#b8792f`, gold `#e3b53a`, pink `#e8a9a2`,
ink `#2a2219`. Two or three paper colours plus ink and one accent is plenty; the puppy is cream, kraft,
red and pink.

## The base (text to image, 1024 by 1024, the graph in `../assets/qwen21-t2i.workflow.json`)

> Paper-craft cut-out character, the mascot of a paper diorama app: {CREATURE}, only its head and its two front {PAWS} showing, peeking over a straight horizontal edge as if looking over a wall, facing the viewer. Everything is made of layered flat paper cut-outs: {FEATURES}, thin hand-drawn pen outlines on every piece of paper, and a narrow white die-cut sticker border around the whole figure. Flat colours with a faint paper grain, no gradients, not 3D, not a photo, no drop shadow. The figure is cut off flat along the straight edge where its {PAWS} hook over it, and nothing at all is drawn below that edge. Large and centred, isolated on a solid flat bright green chroma-key background (#00FF00). No text, no letters, no logo, no other objects.

## The mood sheets (edits of the peeking cut and the body, 1536 by 1024, one per mood, GPT Image 2.6)

The first reference is the character's resting peeking cut, one figure on green: the base itself for
a new character (the puppy's base was not kept, so `pet/src/dog/peek.png`, one cell of its first
idle sheet, stands in for it). The second is the body. Every mood sheet opens with:

> The first reference image is a paper cut-out {CREATURE} peeking over a straight horizontal edge, only its head and its two front {PAWS} showing, both {PAWS} hooked over the edge, cut off flat along that edge with nothing drawn below it: {FEATURES}, flat paper colours with a faint grain, and a narrow white die-cut sticker border around the whole figure. The second reference image is the same {CREATURE} standing, for its colours and proportions. Draw a stop-motion animation sprite sheet of that peeking {CREATURE}, exactly as it is in the first reference: a grid of 4 columns and 2 rows, 8 cells of equal size, on the solid flat bright green (#00FF00) background, with a clear green gap between the figures, no grid lines, no borders, no labels, no numbers and no text. The 8 frames read left to right along the top row and then along the bottom row. In every cell the {CREATURE} is the same drawing at the same size in the same place, its markings always on the same side, both {PAWS} on the edge unless a frame says otherwise, and the flat cut bottom edge at the same height in every cell; each frame changes only a little from the one before it, like a paper puppet moved between photographs. Flat paper, no shadows, no gradients, not 3D. The eight frames, in order:

and then the eight frames, one sentence each. Spell every frame out: given one sentence for the
whole motion, a model puts the action in a frame or two and leaves the rest at rest, and the cut
flickers instead of moving. The boards play `idle`, `error` and `ask` as loops and `greet`,
`celebrate` and `sad` once, holding the last frame, so a loop's eighth frame leads back into its
first and a one-shot ends with the {PAWS} back on the edge (`sad` ends held in its droop). Keep each
beat; reword the body parts for the creature.

- **idle**, a loop, the resting state the character spends most of its time in: "1. at rest, chin up
  over the edge, {PAWS} on the edge, eyes open, a content gentle smile; 2. breathing in, risen a
  touch higher over the edge; 3. at its highest, one of its {EARS} lifted slightly; 4. settling back
  down, the {EAR} settling; 5. at rest, eyes half closed; 6. eyes closed in a blink; 7. eyes open
  again, at rest; 8. exactly like frame 1, so the loop closes."
- **greet**, one shot, played when a session opens or you poke it: "1. at rest, {PAWS} on the edge,
  smiling; 2. perking up: {EARS} bounced up a little, mouth opening, its right {PAW} (on the left of
  the picture) starting to lift off the edge; 3. the right {PAW} raised up beside its head, its pad
  turned to the viewer, a wide happy open smile with a small pink paper tongue; 4. the {PAW} waving
  outward, away from its head; 5. the {PAW} waving back in, close beside its {EAR}; 6. the {PAW}
  waving outward again; 7. the {PAW} coming back down toward the edge, the smile softening to a
  closed smile; 8. the {PAW} back on the edge, at rest, exactly like frame 1."
- **celebrate**, one shot, a turn finished or a report landed: "1. at rest, {PAWS} on the edge,
  smiling; 2. perking up: {EARS} rising, both {PAWS} lifting off the edge, mouth opening; 3. both
  {PAWS} thrown up in the air, eyes closed in a big happy grin, {EARS} flying up, a few small paper
  confetti pieces in red, blue, green and amber popping up around its head; 4. bounced up higher,
  {PAWS} spread wide, the confetti at its highest; 5. coming down a little, the confetti drifting
  down past its {EARS}; 6. bounced up again with both {PAWS} up, the confetti lower, around its
  cheeks; 7. the {PAWS} coming down to the edge, eyes opening, the last confetti pieces down near
  the edge; 8. both {PAWS} back on the edge, at rest with a happy smile and no confetti, exactly
  like frame 1."
- **sad**, one shot, held on its last frame, the agent was stopped or a tool denied: "1. at rest,
  {PAWS} on the edge, its smile fading to a straight mouth; 2. its {EARS} beginning to sink, its
  eyebrows turning up with worry; 3. {EARS} down, eyes looking down, mouth turned down; 4. sunk a
  little lower behind the edge; 5. a small blue paper teardrop forming at the corner of its eye; 6.
  the teardrop sliding down its cheek; 7. the teardrop at the bottom of its cheek, the character at
  its lowest; 8. holding that sorry pose: {EARS} down, mouth down, the teardrop at its cheek, {PAWS}
  still on the edge."
- **error**, a loop, a failed session in the open thread: "1. dazed from a bump on the head, its
  head tilted to the left of the picture, little spiral swirl eyes, {EARS} sticking out stiffly, a
  small red paper exclamation mark bursting above its head and three tiny paper stars circling over
  its head; 2. head tilting back toward upright, the stars moved a step around its head; 3. head
  upright, the stars moved another step; 4. head tilting to the right of the picture; 5. head tilted
  to the right, the stars moved on; 6. head tilting back toward upright; 7. head upright; 8. head
  tilting to the left, the stars nearly back where they started, so the loop closes on frame 1. The
  swirl eyes, the stiff {EARS}, the exclamation mark and the three stars are in every frame."
- **ask**, a loop, a question or an approval waits on you: "1. looking at the viewer with wide shiny
  eyes, eyebrows up, one of its {EARS} raised, a big orange paper question mark above its head, both
  {PAWS} on the edge; 2. head tilting to the left of the picture; 3. head tilted to the left, its
  right {PAW} (on the left of the picture) lifted a little off the edge; 4. the {PAW} tapping back
  down on the edge, head still tilted left; 5. head coming back upright; 6. head tilting to the
  right of the picture; 7. head tilted to the right, the {PAW} tapping the edge once more; 8. head
  coming back toward upright, so the loop closes on frame 1. The raised {EAR}, the wide shiny eyes
  and the question mark above its head are in every frame."

## The avatar (edit of the base, 1024 by 1024)

> Using the paper cut-out {CREATURE} from the reference image exactly as it is ({RECAP}), draw one avatar portrait of it: just {HEAD}, seen straight from the front, looking at the viewer with a friendly closed-mouth smile, centred and filling the picture, cut out as one paper sticker with a clean white die-cut border that follows the outline of its head and {EARS}, with no circle, ring, badge or frame around it, on a solid flat bright green (#00FF00) background. No text, no shadow, nothing else in the picture.

## The body (edit of the base, 1024 by 1536)

The body is only a reference for the turnaround; it never ships. It has to be the whole creature at
rest, feet on the ground, because the turnaround copies it.

> Using the paper cut-out {CREATURE} from the reference image exactly as it is ({RECAP}), draw the whole character from head to toe: it stands upright on its two hind legs like a little mascot, seen straight from the front, with {BODY}. One flat paper cut-out with a clean white die-cut border all around it, centred, filling the height of the picture, on a solid flat bright green (#00FF00) background. No text, no shadow, nothing else in the picture.

## The turnaround (edit of the body, 1536 by 1024, GPT Image 2.6)

The character from its four sides in one row: front, left side, back, right side. Like the body it
never ships; it is what the walk sheets copy, and it is where the sides the front never shows get
settled. Drawn from the body alone, every sheet invents its own back (the puppy's came back wearing
the tummy patch), so draw the turnaround before the walk sheets and judge it against the slots.

> A character turnaround sheet (model sheet) of the paper cut-out {CREATURE} from the reference image, exactly as it is: {RECAP}, {BODY}, pen-ink outlines, flat paper colours with a faint grain, and a white die-cut sticker border around each figure. The character stands upright in the same neutral pose in every view, both {PAWS} relaxed at its sides, both feet planted, the same size and proportions, feet on one ground line. Four views in one row, left to right, with a wide green gap between them: 1. from the front, facing the viewer, exactly like the reference; 2. from its left side in strict profile, facing the left edge of the picture, so we see {SIDE}; 3. from directly behind, facing away from the viewer, so we see {BACK}; 4. from its right side in strict profile, facing the right edge of the picture, so we see {SIDE} mirrored, its tail at the left. All on a solid flat bright green (#00FF00) background, with no ground line drawn, no grid lines, no borders, no labels and no text. Flat paper, no shadows, no gradients, not 3D.

## The walk sheets (edits of the turnaround and the body, 1536 by 1024, one per facing, GPT Image 2.6)

The standee is a sprite sheet: the Factory Overseer reads it by column, so the six cells have to hold
these six poses in this order, in every facing, and `build.py` reads them in reading order off a grid of
3 columns and 2 rows. GPT Image 2.6 draws each sheet from two reference images, the turnaround first and
the body second (`comfy.md` has the graph). The walk is a stomp: the lifted foot stays flat and just rises
a little off the ground, a pose every model draws alike from every side, where a foot kicked up to show
its sole never came right from behind. Every cell is one drawing of the whole figure, so the frames hold
together on screen the way a cut-out puppet of separate pieces did not. The figure the prompt points at
on the turnaround and the facing clause are the only things that change between the four sheets.

> The first reference image is a character turnaround of the paper cut-out {CREATURE}: its front, its left side, its back and its right side. The second reference image is the same character from the front. Draw the character exactly as the turnaround's {VIEW} shows it ({RECAP}), as a stop-motion sprite sheet: a grid of 3 columns and 2 rows, 6 cells of equal size, on a solid flat bright green (#00FF00) background, with no grid lines, no borders, no labels and no text. The 6 cells read left to right along the top row and then along the bottom row. In every cell the character is the same drawing at the same size as in the turnaround, seen {FACING}, its feet on the same ground line, its head, body, {EARS} and tail exactly alike from cell to cell, so that the six cells play as one animation of one figure. The 6 cells: 1. standing still with both {PAWS} relaxed at its sides, both feet planted, exactly like the turnaround's {VIEW}; 2. marching on the spot, a stomp: its right foot stays planted flat on the ground and its left foot is lifted a little way straight up off the ground, the foot kept flat and level exactly as it is when standing, the leg a little shorter and bent only a little at the knee, staying directly under the body, the sole never showing, the body a touch higher, the arms swinging, the left {PAW} a little forward and the right a little back; 3. the other stomp: its left foot planted flat and its right foot lifted flat the same way, the arms swinging the other way; 4. working, both {PAWS} raised up in front of its chest as if typing on a keyboard; 5. working, one {PAW} pushed forward as if pressing a button; 6. waving hello with one {PAW} raised high above its head. Flat paper, no shadows, no gradients, like a paper puppet moved between photographs.

`{VIEW}` and `{FACING}`, per sheet:

- `walk-down`: "first figure, the front"; "straight from the front, facing the viewer, its body upright and square to the viewer in every cell, never turning"
- `walk-left`: "second figure, the left side"; "from the side in strict profile, turned to face the left edge of the picture, so we see {SIDE}; its head stays in that profile in every cell, never turning toward the viewer, so only one eye ever shows; in cells 2 and 3 the lifted foot is raised flat and level a little off the ground with its toes pointing the way it faces, directly under the body"
- `walk-right`: "fourth figure, the right side"; "from the side in strict profile, turned to face the right edge of the picture, so we see {SIDE} mirrored, its tail at the left; its head stays in that profile in every cell, never turning toward the viewer, so only one eye ever shows; in cells 2 and 3 the lifted foot is raised flat and level a little off the ground with its toes pointing the way it faces, directly under the body"
- `walk-up`: "third figure, the back"; "from directly behind, facing straight away from the viewer, so we see {BACK}; its body stays upright and square to the viewer, never turning; in cell 4 only its elbows show at its sides, and in cell 5 the pushed {PAW} is out of sight in front of it; in cells 2 and 3 the lifted foot is simply raised flat a little off the ground directly under the body, the back of its heel toward the viewer, its sole never showing, never a leg angled out to the side"

Two seeds per sheet is the cheap way to have a choice. A cell wrong on a sheet otherwise right is an
edit like the turnaround's: the sheet as `image_1`, reproduced exactly with that one cell changed.
