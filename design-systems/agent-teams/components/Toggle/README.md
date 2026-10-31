A switch for a boolean setting; the `danger` tone is the Yolo mode control.

**Provide:** `checked`/`onChange` (or `defaultChecked`), `label`, optional `help`, `tone`.

- On: track slides to `accent` (or `danger`), knob pops once with the overshoot curve. `danger` adds `glow-danger`; it does not loop.
- Help text is `caption` in `ink-300`, one short sentence ("Runs tools without asking.").
- Keyboard: space toggles; focus shows `focus-ring` on the track.
