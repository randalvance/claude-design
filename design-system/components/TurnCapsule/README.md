One 44px row that collapses everything an agent did in a turn — tool calls, subagent spawns, thinking, narration — while the final reply renders outside it as a normal message.

**Provide:** `steps` (`{kind, label, detail, time, status}`), `agent`/`agentId`/`glyph`, `elapsed`, `live` + `now` (the shimmer line), `open`/`onToggle` or `defaultOpen`.

- Collapsed by default, including the live turn. The whole row is one button; chevron rotates 180°.
- Trail dots pop in per step; count chips list kinds; errors always surface as an `err` chip while collapsed.
- Expand animates `grid-template-rows 0fr → 1fr` (380ms); steps cascade with 55ms stagger; checks draw themselves.
- `said` steps render as italic `ink-200` prose, no status icon, no duration. Text is "final" only if nothing follows it.
- Subagent steps nest one level; deeper detail belongs in a Subagents panel, not here.
