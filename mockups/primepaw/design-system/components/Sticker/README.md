# Sticker

Status marks stuck onto the paper: pill stickers, number badges, the attention sticker, the Done chip and the subagent count.

`pp-sticker` is an uppercase pill with a white dot: green for idle, `is-busy` red and wobbling, `is-attn` amber. `pp-nb` is a 16px red number badge (`is-row` tilts it the other way for session rows). `pp-attn` is the yellow exclamation on a workspace tab. `pp-done` is a hand-written green chip. `pp-subn` is an outlined hand-written count. Every one carries a fixed tilt from the Tilt tokens and a hard `shadow-sticker`. Give meaning-carrying marks an `aria-label`; decorative dots get `aria-hidden`.
