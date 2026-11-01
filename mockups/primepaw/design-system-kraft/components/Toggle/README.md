# Toggle

Anything with an on and an off. A toggle that is a button is cardboard and latches: on means pressed flat. The two that are not buttons are a paper pull-tab in a cut slot and a printed box that gets a sticker.

- `kr-switch` (`role="switch"`, `aria-checked`) is a pop-up-book pull-tab: a 52 by 24px slot cut into the paper (`paper-2` with the `pulp-paper` texture, an inner shadow and a lit lower lip) with a 24 by 18px tab of thick card sliding in it, three pen grip lines on its face. Off, the tab sits left and `off` is handwritten in the slot. On, it slides 24px right, the slot turns `highlighter` and reads `on`. The word means the state never relies on colour alone.
- `kr-check` (`role="checkbox"`) is an 18px box printed in a 2px `bar` outline; checked, a `green` sticker with a white check is stuck over it, landing on `ease-pop` with a 4 degree tilt.
- A latched button is a `kr-btn` (or a `kr-ib is-sm` disc) with `aria-pressed`; `is-on` keeps it travelled 2px right and 3px down with the edge gone (`press-board`) and the face a shade darker. Filters (Mine, Busy), watch and pin work this way; a sage `kr-green is-on` marks a mode that is committing (Following, Watching).
- A rail sticker toggle is a `kr-ib` with `aria-pressed`; `is-on` adds the `sticker-on` gold ring and `tilt-sticker-on`.

Use the switch for a setting that applies at once, the check for an item in a list, a latched button for filters, watch and pin, and the rail sticker for a mode in the rail. Never animate a loop on a toggle.
