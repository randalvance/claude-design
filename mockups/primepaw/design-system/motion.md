# Motion

Everything moves like a stop-motion puppet: `steps(n)` on every transition and keyframe, between 8 and 12 frames a second, so the eye reads discrete poses instead of a glide. Nothing eases, nothing springs. A continuous animation is allowed only while the agent is working (boil, pinwheel, wobble, hop) or while Max effort is on (flicker).

| Name | Where | Duration | Steps | What it does |
| --- | --- | --- | --- | --- |
| hover lift | buttons, tabs, filters, rail | .2s (.15s rows) | 2 | translateY(-1px); tabs -2px; capsules translate(-1px,-1px) |
| `pp-drop` | a new user note | .4s | 5 | falls 16px from above, straightening from -3° |
| `pp-boil` | the working capsule | .6s loop | 3 | rotates ±.5° and shifts ±.5px, like a held drawing |
| `pp-tbwob` | the token circle while working | .6s loop | 3 | wobbles between -9° and -4° |
| `pp-wob` | the busy sticker | .5s loop | 2 | flips between -2° and 1° |
| `pp-spin8` | the pinwheel on busy rows | 1.2s loop | 8 | one full turn in eight poses |
| `pp-popd` | each kind dot as it appears | .3s | 3 | scales from 0 |
| `pp-hop` | the last dot while running | .5s loop | 2 | hops 3px |
| `pp-slide` | steps when a capsule opens | .3s, staggered | 4 | slides in 8px from the left |
| capsule open | `.pp-body` | .45s | 6 | grid rows 0fr to 1fr |
| folder open | `.pp-folder-body` | .35s | 5 | grid rows 0fr to 1fr; chevron turns in 3 steps |
| `pp-stamp` | check stamps, YOLO, MAX, the stop square, a model tick | .3s (.25s ticks) | 3 | lands from 1.9× and -14° to 1× and -8° |
| `pp-popIn` | the model popover | .3s | 4 | from -3° and .9× to -1° and 1× |
| `pp-fly` | the send arrow on send | .45s | 5 | leaves up and right, re-enters from below left |
| `pp-flick` | effort bars while Max is on | .5s loop | 2 | squashes to 70% height |
| gauge | arc and needle | .6s (.25s for the draft ghost) | 8 | moves to the new reading |
| composer focus | `.pp-card.is-focus` | .25s | 3 | lifts 2px, shadow grows |

Rules

- Hover: 2 steps, 200ms. Opening and closing: 4 to 6 steps. Landing stamps: 3 steps, 300ms. Loops: 2 or 3 steps, under 700ms.
- One thing boils at a time: the capsule that is working. Older capsules are still.
- Under `prefers-reduced-motion` every duration collapses to 0.01ms and loops run once; the layout must read without any of this.
