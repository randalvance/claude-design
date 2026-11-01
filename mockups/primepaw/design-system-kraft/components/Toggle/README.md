# Toggle

Anything with an on and an off. On is always a sticker stuck on, or paper gone yellow under a marker; off is paper, a slot or a printed outline.

- `kr-switch` (`role="switch"`, `aria-checked`) is a 44 by 24px slot cut into the paper (`paper-2` with `recess`) and a 16px round sticker for the knob: `kraft-2` when off, sliding 20px right and turning `blue` when on while the slot goes `highlighter`.
- `kr-check` (`role="checkbox"`) is an 18px box printed in a 2px `bar` outline; checked, a `green` sticker with a white check is stuck over it, landing on `ease-pop` with a 4 degree tilt.
- A paper filter is a `kr-btn kr-btn-paper` with `aria-pressed`; `is-on` turns the strip `highlighter` with a `highlighter-2` edge.
- A printed stamp is a `kr-btn kr-btn-print`; `is-on` sticks a gold `attn` sticker inside the dashed outline.
- A sticker toggle is a `kr-ib` with `aria-pressed`; `is-on` adds the `sticker-on` gold ring and `tilt-sticker-on`.

Use the switch for a setting that applies at once, the check for an item in a list, the paper filter for a filter, the printed stamp for watch and pin, and the sticker toggle for a mode in the rail. Never animate a loop on a toggle.
