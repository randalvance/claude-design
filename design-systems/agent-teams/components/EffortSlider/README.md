Five-stop slider for reasoning effort (`low` → `max`) inside the model menu.

**Provide:** `value`/`onChange` or `defaultValue` (index), optional `levels`.

- Fill is `accent`; stops are `ink-400` dots; thumb is `ink-100` with an `accent` border.
- At the last stop the system's one two-colour bloom fires: fill gradients to `accent-soft`, thumb takes `glow-max` and pops, the level word glows. Leaving the stop fades it in 300ms.
- A hidden native `<input type=range>` gives keyboard and screen-reader support; `aria-valuetext` reads the level word.
