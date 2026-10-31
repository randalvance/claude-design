Message bubbles. The user's is a filled `surface-300` bubble with a `radius-sm` tail at bottom-right; the agent's final reply is plain prose with no bubble at all.

**Provide:** `author` (`user` | `agent`), `children`. (Not `from` — that word is reserved by the canvas runtime's `x-import`.)

- User bubbles max 72% width (88% on phones), `body` type, `ink-100`.
- Agent replies slide up 8px on arrival (`at-replyIn`) after the capsule settles. They are never truncated or tinted with the agent's hue.
