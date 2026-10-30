# Popover

The model and effort popover: a taped sheet with a checklist of models and five effort stamps.

A `pp-pop` sheet (286px, `card`, `shadow-sheet-lg`) with a `pp-tape` strip drawn by its `::before`; it lands with `pp-popIn` and rests at -1°. Headings are `pp-pop-h` in Caveat. Models are `pp-mrow` buttons with a `pp-box` tick (`is-sel`, `aria-pressed`). Effort is a `pp-efs` row of five `pp-ef` buttons outlined in `ink`: the chosen one is `is-on` (filled `ink`), the model default carries `is-def` (a dot below), and MAX when chosen is `is-maxon` (red). Close with a `pp-adapt` note and, when the user has overridden the default, a `pp-lnk` to reset. Give it `role="dialog"` and an `aria-label`; the opener owns `aria-expanded`.
