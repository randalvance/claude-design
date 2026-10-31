# Composer

The ruled index card where the user writes: textarea on ruled lines, then a bar of tags, gauge, stamp and the send button.

A `pp-card` holding a `pp-ed` ruled area (lines every 28px in `rule`, matching the 28px line height) with a real `<textarea class="pp-ta">` and a visually hidden label, then a `pp-bar` with `pp-tools` (ModelTag, Gauge, StampToggle, a `pp-dirtag` working-directory tag), a hand-written `pp-hint` and the SendButton. Add `is-focus` to the card while the textarea has focus (it lifts). Put `is-max` on an ancestor for Max effort: the card border turns `max`, the placeholder `red`, the MaxStamp appears and the bars flicker. Grow the textarea with its content up to 196px. Escape closes an open popover first, then stops the agent.
