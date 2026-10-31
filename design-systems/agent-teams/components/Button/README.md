Buttons trigger one action; the primary variant is the only accent-filled control on a screen.

**Provide:** `children` (sentence-case verb phrase), optional `icon` (Lucide name), `variant`, `onClick`.

- One `primary` per view; everything else `ghost`. `danger` only for destructive or risk actions (stop a run, clear a session).
- `glow` turns on `glow-live` and is reserved for the Send button while effort is at max.
- Text is `label` style on `ink-on-accent` (primary) or `ink-100` (ghost); never white on accent.
- Height 32px, `sm` 26px. Don't stretch to full width except on phones.
