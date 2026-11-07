# The prompts, as templates

These are the puppy's prompts with the puppy taken out. Each has a handful of slots; fill them from the
character brief and keep every sentence outside the slots, because those sentences are what make the
sheets sliceable (the green key, the flat cut edge, the same size in every cell) and what keep the
style on the Kraft design language (flat paper, die-cut border, pen ink, no shadow). After the base, every
prompt opens with the recap so the model keeps the character it is shown.

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
| `{EARS}` | the part that bounces, droops or perks (ears, antennae, feathers, a hat) | ears |

Colours come from the Kraft tokens so the character sits on the boards like every other sticker. The
light-theme values: paper cream `#f3e9d5`, sheet white `#fbf7ee`, kraft `#d9bc86`, kraft dark `#b3905a`,
terracotta red `#c8553d`, blue `#3b5b9a`, green `#5b8c5a`, amber `#b8792f`, gold `#e3b53a`, pink `#e8a9a2`,
ink `#2a2219`. Two or three paper colours plus ink and one accent is plenty; the puppy is cream, kraft,
red and pink.

## The base (text to image, 1024 by 1024)

> Paper-craft cut-out character, the mascot of a paper diorama app: {CREATURE}, only its head and its two front {PAWS} showing, peeking over a straight horizontal edge as if looking over a wall, facing the viewer. Everything is made of layered flat paper cut-outs: {FEATURES}, thin hand-drawn pen outlines on every piece of paper, and a narrow white die-cut sticker border around the whole figure. Flat colours with a faint paper grain, no gradients, not 3D, not a photo, no drop shadow. The figure is cut off flat along the straight edge where its {PAWS} hook over it, and nothing at all is drawn below that edge. Large and centred, isolated on a solid flat bright green chroma-key background (#00FF00). No text, no letters, no logo, no other objects.

## The mood sheets (edits of the base, 2048 by 1024, one per mood)

Every mood sheet opens with:

> Using the paper cut-out {CREATURE} from the reference image exactly as it is ({RECAP}, the same flat paper style and the same peeking-over-an-edge pose with both {PAWS} hooked on the edge), draw a stop-motion animation sprite sheet: a grid of 4 columns and 2 rows, 8 cells of equal size, on the same solid flat bright green (#00FF00) background, with no grid lines, no borders, no labels and no text. The 8 frames read left to right along the top row and then along the bottom row and loop back to the first. In every cell the character is the same size and in the same place, with the flat cut bottom edge of its {PAWS} at the same height, and each frame changes only a little from the one before it, like a paper puppet moved between photographs. The animation:

and ends with the mood. The boards play `idle`, `error` and `ask` as loops and `greet`, `celebrate`
and `sad` once, holding the last frame, so the loops must end where they start and the one-shots must
end at rest with the {PAWS} back on the edge. Keep each beat; reword the body parts for the creature.

- **idle**, a loop, the resting state the character spends most of its time in: "the character rests calmly with its chin and {PAWS} on the edge and breathes slowly, rising a touch and settling back; it blinks once around the fifth and sixth frames, and one of its {EARS} lifts slightly and settles; a content, gentle smile throughout."
- **greet**, one shot, played when a session opens or you poke it: "a happy hello: the character perks up, lifts its right {PAW} off the edge and waves it from side to side, its {EARS} bounce and its mouth opens in a wide happy smile with a small pink paper tongue showing; by the last frame the {PAW} is back on the edge."
- **celebrate**, one shot, a turn finished or a report landed: "a cheer: the character throws both {PAWS} up in the air with joy, eyes closed in a big happy grin, {EARS} flying up, bouncing up and down, while a few small paper confetti pieces in red, blue, green and amber pop up around its head and drift down; by the last frame both {PAWS} are back on the edge."
- **sad**, one shot, the agent was stopped or a tool denied: "a slow droop: the character's {EARS} sink down, its eyebrows turn up with worry, its eyes look down, its mouth turns down, it sinks a little lower behind the edge, and one small blue paper teardrop forms by its eye and slides down its cheek; a slow, sorry motion."
- **error**, a loop, a failed session in the open thread: "a dizzy spell: the character has bumped its head and wobbles from side to side, dazed, with little spiral swirl eyes, {EARS} sticking out stiffly, a small red paper exclamation mark bursting above its head, and three tiny paper stars circling over its head."
- **ask**, a loop, a question or an approval waits on you: "asking for attention: the character tilts its head curiously from one side to the other, one of its {EARS} raised, eyebrows up, eyes wide and shiny, a big orange paper question mark popping up above its head, and it taps the edge with one {PAW}."

## The avatar (edit of the base, 1024 by 1024)

> Using the paper cut-out {CREATURE} from the reference image exactly as it is ({RECAP}), draw one avatar portrait of it: just {HEAD}, seen straight from the front, looking at the viewer with a friendly closed-mouth smile, centred and filling the picture, cut out as one round paper sticker with a clean white die-cut border all around it, on a solid flat bright green (#00FF00) background. No text, no shadow, nothing else in the picture.

## The body (edit of the base, 1024 by 1536)

The body is only a reference for the walk strips; it never ships. It has to be the whole creature at
rest, feet on the ground, because the strips copy it.

> Using the paper cut-out {CREATURE} from the reference image exactly as it is ({RECAP}), draw the whole character from head to toe: it stands upright on its two hind legs like a little mascot, seen straight from the front, with {BODY}. One flat paper cut-out with a clean white die-cut border all around it, centred, filling the height of the picture, on a solid flat bright green (#00FF00) background. No text, no shadow, nothing else in the picture.

## The turnaround (edit of the body, 1536 by 1024, GPT Image 2.6)

The character from its four sides in one row: front, left side, back, right side. Like the body it
never ships; it is what the walk strips copy, and it is where the sides the front never shows get
settled. Drawn from the body alone, every strip invents its own back (the puppy's came back wearing
the tummy patch), so draw the turnaround before any strip and judge it against the slots.

> A character turnaround sheet (model sheet) of the paper cut-out {CREATURE} from the reference image, exactly as it is: {RECAP}, {BODY}, pen-ink outlines, flat paper colours with a faint grain, and a white die-cut sticker border around each figure. The character stands upright in the same neutral pose in every view, both {PAWS} relaxed at its sides, both feet planted, the same size and proportions, feet on one ground line. Four views in one row, left to right, with a wide green gap between them: 1. from the front, facing the viewer, exactly like the reference; 2. from its left side in strict profile, facing the left edge of the picture, so we see {SIDE}; 3. from directly behind, facing away from the viewer, so we see {BACK}; 4. from its right side in strict profile, facing the right edge of the picture, so we see {SIDE} mirrored, its tail at the left. All on a solid flat bright green (#00FF00) background, with no ground line drawn, no grid lines, no borders, no labels and no text. Flat paper, no shadows, no gradients, not 3D.

## The walk strips (edits of the turnaround and the body, 1536 by 1024, one per facing)

The Factory Overseer reads the sheet by column, so the six cells have to hold these six poses in this
order, in every facing. GPT Image 2.6 draws each strip from two reference images, the turnaround first
and the body second (`comfy.md` has the graph), as a grid of 3 columns and 2 rows; `build.py` reads the
six cells in reading order. The figure the prompt points at on the turnaround and the facing clause are
the only things that change between the four strips.

> The first reference image is a character turnaround of the paper cut-out {CREATURE}: its front, its left side, its back and its right side. The second reference image is the same character from the front. Draw the character exactly as the turnaround's {VIEW} shows it ({RECAP}), as a stop-motion sprite sheet: a grid of 3 columns and 2 rows, 6 cells of equal size, on a solid flat bright green (#00FF00) background, with no grid lines, no borders, no labels and no text. The 6 cells read left to right along the top row and then along the bottom row. In every cell the character is the same size as in the turnaround, seen {FACING}, with its feet standing on the same ground line. The 6 cells: 1. standing still with both {PAWS} relaxed at its sides, both feet planted, exactly like the turnaround's {VIEW}; 2. mid-step walking, its left leg planted straight down under the body and its right leg bent and lifted so the sole of its right foot shows, the legs staying under the body and never spreading sideways, the arms swinging; 3. the other step, its right leg planted and its left leg bent and lifted showing its sole, the arms swinging the other way; 4. working, both {PAWS} raised up in front of its chest as if typing on a keyboard; 5. working, one {PAW} pushed forward as if pressing a button; 6. waving hello with one {PAW} raised high above its head. Flat paper, no shadows, no gradients, like a paper puppet moved between photographs.

`{VIEW}` and `{FACING}`, per strip:

- `walk-down`: "first figure, the front"; "straight from the front, facing the viewer, its body upright and square to the viewer in every cell, never turning"
- `walk-left`: "second figure, the left side"; "from the side in strict profile, turned to face the left edge of the picture, so we see {SIDE}; its head stays in that profile in every cell, never turning toward the viewer, so only one eye ever shows"
- `walk-right`: "fourth figure, the right side"; "from the side in strict profile, turned to face the right edge of the picture, so we see {SIDE} mirrored, its tail at the left; its head stays in that profile in every cell, never turning toward the viewer, so only one eye ever shows"
- `walk-up`: "third figure, the back"; "from directly behind, facing straight away from the viewer, so we see {BACK}; its body stays upright and square to the viewer, never turning; in cell 4 only its elbows show at its sides, and in cell 5 the pushed {PAW} is out of sight in front of it"

Without GPT credits, Qwen draws a strip from the body alone, at 2048 by 512 as one row of 6 cells: open
with the body prompt's recap ("Using the paper cut-out {CREATURE} from the reference image exactly as it
is ({RECAP}, the same standing pose), draw a stop-motion sprite strip: one row of 6 cells of equal size,
…"), then the same six cells and facing clause. Expect to redraw the back, and to check the profiles
for a second eye.
