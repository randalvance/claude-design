# Sticker

A mark stuck onto cardboard or paper: the paw, number badges, status pills, the Done chip, workspace dots, the cat. A sticker is one solid identity colour with `gloss` across its top, a `sticker-cut` die-cut border and no shadow, ever.

- `kr-sticker` is the base: `kraft-2`, `radius-10`, a `sticker` cut, `white` glyph. Size it with width and height. `is-round` and `is-pill` change the cut; `is-s` uses the thinner `sticker-s` cut; `is-on` adds the gold `sticker-on` ring and `tilt-sticker-on`. Colour with `kr-blue`, `kr-blue-2`, `kr-red`, `kr-red-2`, `kr-green`, `kr-amber`, `kr-max`, `kr-teal`, `kr-violet`, `kr-attn`.
- `kr-mark` is the paw: the mark in `red` with the cut drawn as a `sticker-cut` outline, tilted `tilt-logo`, 54px in the rail.
- `kr-nb` is a 19px `attn` number badge in `badge` type, tilted `tilt-badge`; `kr-red` for pull requests and `is-row` for the 16px badge on a session row (`tilt-badge-row`).
- `kr-pill` is an uppercase status pill with a dot: `green` idle, `is-busy` red, `is-attn` gold with `on-attn`.
- `kr-chip` is the hand-written Done chip in `chip` type, `green`, tilted `tilt-chip`.
- `kr-dot` is a 10px square workspace dot in any identity colour; `kr-pin` is not a sticker any more: it is a paper pinwheel, four blades in `red`, `blue`, `green` and `amber` with folded lighter tips on an `ink` pin, casting one shadow and turning on `dur-loop`.

Give meaning-carrying stickers an `aria-label`; decorative dots get `aria-hidden`. A sticker is stuck to one piece and never straddles two. Nothing pulses: a busy sticker is red, not blinking.
