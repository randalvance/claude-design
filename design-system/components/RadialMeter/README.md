A gasoline-gauge arc showing how much of a bounded resource is used — in the composer, the context window.

**Provide:** `value` 0–1, `size` (40 in the composer, 72 standalone), optional `label`, `format`.

- 240° sweep open at the bottom, needle from the hub, numeral in `timer`/`numeral` mono below the hub.
- Colour steps by value: `accent` under 70%, `warn` 70–90%, `err` over 90% with a `glow-err` drop-shadow on the arc. The fill animates over 700ms.
- It is `role="meter"` with `aria-valuenow`; pair it with a tooltip giving the absolute numbers ("68k / 200k tokens").
