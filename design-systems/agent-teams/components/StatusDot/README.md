A 7px dot that encodes a step's kind by colour; a trail of them summarises a turn.

**Provide:** `kind`; flags `error`, `running`, `idle`; `delay` for cascade pop-in; `label` when the dot stands alone.

- Kinds use the `kind-*` tokens; `said` is a `radius-xs` square so narration reads differently from tool calls.
- `error` adds a 2px `glow-err` ring; `running` blinks; `idle` is the 10px breathing `ok` dot from session cards.
- In a trail, dots are decorative (`aria-hidden`); the chips carry the counts for screen readers.
