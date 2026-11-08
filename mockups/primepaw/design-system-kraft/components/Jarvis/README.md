# Jarvis

Jarvis, the main agent, is the pet today: a paper creature, the robot dog, whose sprite peeks over the composer and whose face is the sticker on the `kr-ib kr-jarvis` tile; the README's **The pet** bullet says how, and the cuts live with the Primepaw mockup under `pet/`. This component keeps the character before it: Button, a cat in a bow tie, a paper cut-out, the first try at Jarvis, and the style the other agents' portraits are still drawn in.

## The cut

A round cream head with a kraft patch over his right ear and down that side, two pointed ears, bead eyes, blush cheeks, a red nose, two whiskers a side, and a red bow tie at the chin. Two paws hang below, so he can hold on to an edge. He is outlined in 1.6px ink and cut from cream (#f3e9d5) and kraft (#d9bc86); the bow and the nose are the red (#c8553d), the cheeks blush (#e8a9a2) at 70%. The drawing is `assets/Characters/jarvis.svg`, on an 84 by 70 box. `kr-jarvis-cut` gives it the paper's cut edge: a 1px light rim by day, white at night, and a hair of shadow.

## Where he was

- **Over the composer.** `kr-jarvis-peek`: 92px wide, 28px in from the right, leaning 4 degrees about his paws, which rest on the composer's frame. Below 860px he goes. The pet peeks from the same corner at the same tilt, `tilt-cat`.
- **Over the greeting.** The empty home's hello sheet had him at 84px, 12px in from the right.
- **The portrait.** His face as a flat sticker (`assets/Characters/jarvis-face.svg`, a 64 by 64 box): the same drawing in the same paper colours, the kraft patch, bead eyes, the red nose and the red bow, with a white die-cut rim and no shadow. It is never pixel art. It sat on the cream `kr-ib kr-jarvis` tile that tops every rail, at 32px, and first in the Meet your Main Agent strip; the tile and the strip show the pet's faces now, Characters assets beside his (`robot-face.png`, `dog-face.png`, `cat-face.png`, shown by `kr-pface`), and the other agents' portraits (`Agents`) keep this drawn style.

## What he does not do

He is a cut-out, not a character animation: he never blinks, bounces, pulses, follows the pointer or changes face with a session's state, and nothing happens when he is clicked. The pet does all of that, stepped like paper stop-motion and never pulsing, which is why the boards wear it.
