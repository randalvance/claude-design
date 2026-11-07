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

The body is only a reference for the turnaround; it never ships. It has to be the whole creature at
rest, feet on the ground, because the turnaround copies it.

> Using the paper cut-out {CREATURE} from the reference image exactly as it is ({RECAP}), draw the whole character from head to toe: it stands upright on its two hind legs like a little mascot, seen straight from the front, with {BODY}. One flat paper cut-out with a clean white die-cut border all around it, centred, filling the height of the picture, on a solid flat bright green (#00FF00) background. No text, no shadow, nothing else in the picture.

## The turnaround (edit of the body, 1536 by 1024, GPT Image 2.6)

The character from its four sides in one row: front, left side, back, right side. Like the body it
never ships; it is what the parts sheets copy, and it is where the sides the front never shows get
settled. Drawn from the body alone, every sheet invents its own back (the puppy's came back wearing
the tummy patch), so draw the turnaround before the parts and judge it against the slots.

> A character turnaround sheet (model sheet) of the paper cut-out {CREATURE} from the reference image, exactly as it is: {RECAP}, {BODY}, pen-ink outlines, flat paper colours with a faint grain, and a white die-cut sticker border around each figure. The character stands upright in the same neutral pose in every view, both {PAWS} relaxed at its sides, both feet planted, the same size and proportions, feet on one ground line. Four views in one row, left to right, with a wide green gap between them: 1. from the front, facing the viewer, exactly like the reference; 2. from its left side in strict profile, facing the left edge of the picture, so we see {SIDE}; 3. from directly behind, facing away from the viewer, so we see {BACK}; 4. from its right side in strict profile, facing the right edge of the picture, so we see {SIDE} mirrored, its tail at the left. All on a solid flat bright green (#00FF00) background, with no ground line drawn, no grid lines, no borders, no labels and no text. Flat paper, no shadows, no gradients, not 3D.

## The parts sheets (edits of the turnaround and the body, 1536 by 1024, one per facing)

The standee is a cut-out puppet, so what gets drawn is not poses but pieces: each facing's figure on
the turnaround taken apart, every piece complete including what hides under another when the puppet is
together, laid out in a grid in reading order so `build.py` can name them. It cuts them off the sheet by
the bands of paper and fits each back into the turnaround's figure to find where it sits, so the pieces
must be drawn at the turnaround's scale and as the turnaround draws them. GPT Image 2.6 draws each sheet
from two reference images, the turnaround first and the body second (`comfy.md` has the graph). The
figure the prompt points at, the grid and the list of pieces are the only things that change between
the four sheets; the order of the list is the order `build.py` expects.

> The first reference image is a character turnaround of a paper cut-out {CREATURE}: its front, its left side, its back and its right side. The second reference image is the same character from the front. Draw the turnaround's {VIEW}, taken apart into the separate paper pieces of a cut-out puppet, the way a South Park character's pieces are laid out for animation: a grid of {GRID} on the solid flat bright green (#00FF00) background, one piece per cell, with wide green gaps between the pieces, no grid lines, no labels, no text and no numbers. Every piece is drawn complete, at exactly the same scale as the figure in the turnaround, including the part of it that is hidden behind another piece when the puppet is put together: the top of each leg reaches up under the body, the top of each arm reaches in under the body's shoulder, the root of each ear reaches under the head, the base of the tail reaches under the body. Each piece is a flat paper cut-out with its own pen-ink outline and its own narrow white die-cut sticker border all the way around it, the same paper colours with a faint grain as the turnaround ({RECAP}). Flat paper, no shadows, no gradients, not 3D, nothing assembled, no whole figure anywhere in the picture. The {COUNT} pieces, in reading order: {PIECES}

`{VIEW}`, `{GRID}`, `{COUNT}` and `{PIECES}`, per sheet. The pieces are named for the puppy; a creature
with other parts (a bow, antennae, a hat) keeps the same roles, since `puppet.js` moves a head, ears,
a body, arms, legs and a tail, and draws its extra parts onto the piece they ride on.

- `parts-down`: "first figure, the front view"; 3 columns and 3 rows; nine: "1. the head alone, {the face: its patch, eyes, nose, cheeks and mouth}, without the ears; 2. its left ear, the one that hangs on the left of the picture, hanging straight down; 3. its right ear; 4. the body alone, {the torso with what sits on it: the collar and tag, the tummy patch}, with no arms, no legs and no head; 5. its left arm, the {PAW} that hangs on the left of the picture, straight down, complete up to the shoulder; 6. its right arm; 7. its left leg with its round foot, hanging straight down, complete up to the hip; 8. its right leg; 9. the short tail."
- `parts-up`: "third figure, the view from directly behind"; 3 columns and 3 rows; nine: "1. the back of the head alone, plain with no face at all, without the ears; 2. its left ear, the back of the ear that hangs on the left of the picture; 3. its right ear; 4. the body alone from behind, {the plain back with the back of the collar and no patch}, with no arms, no legs and no head; 5. its left arm, seen from behind, hanging straight down, complete up to the shoulder; 6. its right arm; 7. its left leg with the back of its foot, hanging straight down, complete up to the hip; 8. its right leg; 9. the whole tail as the turnaround's back view shows it."
- `parts-left`: "second figure, the left side view in strict profile"; 4 columns and 2 rows; eight: "1. the head alone in profile, with its snout pointing to the left, one eye, the nose, one cheek and the smile, without the ear; 2. the one ear that shows in profile, hanging straight down; 3. the body alone in profile, {the torso with the collar at the top and the sliver of the patch at its front}, with no arms, no legs, no head and no tail; 4. the near arm, the {PAW} on the side toward the viewer, hanging straight down, complete up to the shoulder; 5. the far arm, the one on the other side of the body; 6. the near leg with its round foot, hanging straight down, complete up to the hip; 7. the far leg; 8. the short tail that sticks out at the right, complete to its base."
- `parts-right`: "fourth figure, the right side view in strict profile"; 4 columns and 2 rows; the same eight with the snout pointing to the right and the tail sticking out at the left.

Two seeds per sheet is the cheap way to have a choice, and the sheets mix: the puppy's back sheet is
the first seed's pieces with the second seed's tail pasted into its cell, because the first drew the
tail as a hook and the second as the bean the turnaround shows lying across the rump. `build.py --check`
shows whether the pieces fit back together; a piece that lands wrong in every seed is drawn wrong, so
reword its line and draw that sheet again.
