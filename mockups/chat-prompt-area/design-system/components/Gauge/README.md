# Gauge

A fuel gauge for the context window: F is a fresh conversation, E is a full window.

A 26px SVG with a 270° track in `line`, a fill arc whose dash length is 65.97 × remaining, a `pp-g-draft` ghost arc for what the current draft will use, a needle at 135° + 270° × remaining, and hand-written E and F. The fill is `is-ok` (blue) above 40% remaining, `is-mid` (amber) above 15%, `is-low` (red) below. Arc and needle move in eight steps, the ghost in three. The percentage sits beside it in `ui-small`. Give the whole thing `role="img"` and an `aria-label` with the reading in words.
