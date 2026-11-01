# Motion

Everything moves quickly and smoothly. Three easings do all the work: `ease` (`cubic-bezier(.2,.7,.2,1)`, an ease-out) for anything that moves or appears, `ease-pop` (`cubic-bezier(.34,1.5,.64,1)`, a soft overshoot) for anything that lands, and `ease-io` (`cubic-bezier(.45,0,.55,1)`) for the gentle loops that run while the agent is working. Spinners turn on `linear`. Nothing is stepped. A loop is allowed only while the agent is working (breathe, pinwheel, sway, hop) or while Max effort is on (flicker).

| Name | Where | Duration | Easing | What it does |
| --- | --- | --- | --- | --- |
| hover lift | buttons, tabs, filters, rail | .15s (.12s rows) | ease | translateY(-1px); tabs -2px; capsules translate(-1px,-1px) |
| `drop` | a new user note, cards and rows as they appear | .2s–.32s | ease | falls 10–16px from above, straightening from a slight tilt |
| `boil` | the working capsule | 1.2s loop, alternate | ease-io | breathes: rotates ±.5° and drifts ±.5px |
| `tbwob` | the token circle while working | 1.2s loop, alternate | ease-io | sways between -9° and -4° |
| `wob` | the busy sticker | 1s loop, alternate | ease-io | sways between -2° and 1° |
| `spin8`, `turn`, `spin` | pinwheels and the sync icon | .8s–1.2s loop | linear | one continuous turn |
| `popd` | each kind dot as it appears | .26s | ease-pop | scales up from 0 and settles |
| `hop` | the last dot while running | 1s loop, alternate | ease-io | lifts 3px and back |
| `slide` | steps when a capsule opens, drawers | .2s–.24s, staggered 45ms | ease | slides in from the side |
| capsule open | `.pp-body` | .34s | ease | grid rows 0fr to 1fr |
| folder open | `.pp-folder-body` | .26s | ease | grid rows 0fr to 1fr; the chevron turns with it |
| `stamp`, `thump` | check stamps, YOLO, MAX, Saved, the stop square, a model tick | .26s (.21s ticks) | ease-pop | lands from 1.6–1.9× and settles with a small bounce |
| `popIn` | the model popover | .24s | ease | from -3° and .9× to -1° and 1× |
| `fly` | the send arrow on send | .36s | ease | leaves up and right, re-enters from below left |
| `flick` | effort bars while Max is on | 1s loop, alternate | ease-io | squashes to 70% height and back |
| gauge | arc and needle | .45s (.2s for the draft ghost) | ease | moves to the new reading |
| composer focus | `.pp-card.is-focus` | .19s | ease | lifts 2px, shadow grows |

Rules

- Hover and state changes: 120–160ms, ease. Opening and closing: 250–350ms, ease. Landing stamps: about 260ms, ease-pop. Loops: 1 to 1.4s, ease-io, alternate, so nothing snaps back.
- One thing breathes at a time: the capsule that is working. Older capsules are still.
- Under `prefers-reduced-motion` every duration collapses to 0.01ms and loops run once; the layout must read without any of this.
