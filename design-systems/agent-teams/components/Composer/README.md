The prompt area: a rich-text field, model selector with effort slider, radial context meter, Yolo toggle and Send.

**Provide:** `agent`, `model`, `effort` (index), `context` 0–1, `yolo`, `sending`, `placeholder`.

- `surface-100`, `radius-lg`, `space-3` padding. Focus lifts the border to `line-300`; `sending` adds `glow-live`.
- The model button opens a `GlowCard` popover above it holding model chips and the `EffortSlider`. When effort hits max, the popover, the model button's level word, the Send button and the composer border all take the `glow-max` bloom together.
- The context meter is the 40px `RadialMeter`; show absolute tokens on hover.
- Yolo is a `danger` toggle: on, the track glows red and stays red — no pulsing.
- Send is the only primary button on the screen and is disabled while the field is empty.
