# Loading

What a page shows while it fetches its list: Jarvis fetches. It is one state for every page; Workspaces has it first. It was picked over blank cards ruled in pencil and over one big pinwheel.

## While it fetches

- **What stays.** The rail, the page title and the toolbar are there from the first frame. The sheet under them is empty: no placeholder cards and no spinner. The count under the title keeps its line while it is empty, so the title does not move when the list lands.
- **The scene, `kr-fetch`.** 370 by 316, centred in the sheet a little under the header. A cardboard `kr-ledge` carries two things. The pet in use stands side on, `kr-fetch-pet`, 180 by 225, as tall as it sits on its plinth, stepping between two frames of work every 190ms. Beside it is a `kr-filebox`: cardboard, 170 by 78, a thumb notch in its top edge and the page’s name on a paper label in Courier 12 capitals. Four `kr-filecard` index cards stand in the box, `is-1` to `is-4`, their tabs in the pinwheel’s four colours, and lift one at a time, 420ms each.
- **The bubble, `kr-say`.** A scissor-cut paper sticker with the die-cut rim and one hard shadow, leaning 3 degrees, its tail down to the pet. It says what is being fetched in Caveat 26: “Fetching your workspaces”, with `kr-dots` stepping one dot at a time.
- **The plinth.** The pet’s `kr-plinth` at the lower right, a kraft block under a cardboard slab with its name by hand, stands empty but for `kr-out`, a small card in its place: out fetching.

## When it lands

The scene goes in one frame. The page’s pieces arrive 90ms apart from the top, and the count takes its place under the title. The pet is back on the plinth on its celebrate row and says “Got them!” in the small bubble, `kr-say is-s`, for two and a half seconds. The bubble never takes a click.

## From page to page

Only two things change: the label on the box and the noun in the bubble. Agents reads AGENTS and “Fetching your agents”, Memory reads MEMORY and “Fetching your memory”. The box, the cards, the ledge, the plinth’s card and the timing stay as they are.

## Rules

- Only stepped frames move. Nothing pulses, shimmers or eases. Under `prefers-reduced-motion` it is a still.
- The scene is `aria-hidden`. The list has `aria-busy` while it fetches, and a status line says “Fetching your workspaces”, then the count.
- The pictures are Characters assets: `robot-fetch.png` is the two frames of work side by side, 256 by 320 each, and `robot-cheer.png` the cheer on the plinth. The puppy and the cat take the same two frames from their own standee sheets under `pet/` (the third row, the fourth and fifth poses).
