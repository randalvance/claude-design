The agent-side loading bubble before the first token: three bouncing `accent` dots, a slot-rolling status line and a live timer.

**Provide:** `messages` (short present-tense phrases), `interval`.

- Bubble shape is `radius-sm` on the top-left (toward the agent) and `radius-xl` elsewhere, on `surface-100`.
- Messages roll vertically with the standard ease over 550ms; the timer is `timer` mono in `ink-300`.
- Replace it with the `TurnCapsule` as soon as the first step arrives; never show both.
