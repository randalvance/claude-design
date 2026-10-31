# Agent Teams design system — files

Mirror of the published system at https://claude.ai/artifact/DhusFk34yTB6vNqpvFvT66. `README.md` is the brand book (voice, colour, glow model, type, spacing, motion, iconography); this file is the plumbing.

| Path | What |
|---|---|
| `tokens.json` | The source of truth: colours (one theme, `dark`), type scale, spacing, radius, shadows/glows. Lists, not maps — the format the system page reads. |
| `tokens.css` | Compiled from `tokens.json`: `--bg-000`, `--accent`, `--glow-max`, `--space-4`, `--radius-lg`, `--font-sans`, … |
| `components/bundle.css` | Component styles. Colour, radius, spacing and shadow come from `tokens.css`; motion durations and easings are declared at its top. |
| `components/bundle.js` | One classic script assigning `window.AgentTeamsDS` (React 18 expected on the page, resolved lazily). Exports: Button, Chip, StatusDot, AgentAvatar (+Stack), Toggle, RadialMeter, GlowCard, SessionCard, TurnCapsule, EffortSlider, Composer, ThinkingIndicator, Bubble, AgentNode, Icon, `hueIndex`, `ICONS`, `EFFORT`. |
| `components/index.d.ts` | Prop types, as documentation. |
| `components/<Name>/README.md` | When to use it, what to pass, do/don't. |
| `components/<Name>/preview.html` | The live preview the system page renders. |
| `components/Cover/preview.html` | The cover on the system page. |
| `design-system.json` | The system page's index. |

## Use it

```html
<link rel="stylesheet" href="design-systems/agent-teams/tokens.css">
<link rel="stylesheet" href="design-systems/agent-teams/components/bundle.css">
<script src="https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/react-dom@18.3.1/umd/react-dom.production.min.js"></script>
<script src="design-systems/agent-teams/components/bundle.js"></script>
<script>
  const { TurnCapsule, Composer, hueIndex } = window.AgentTeamsDS;
</script>
```

Add a token in `tokens.json`, then regenerate `tokens.css` (the system page does this on save; `apps/agent-teams/screens/` links this folder directly, so keep both in step). Add an icon by pasting its Lucide inner markup into `ICONS` in `bundle.js`.
