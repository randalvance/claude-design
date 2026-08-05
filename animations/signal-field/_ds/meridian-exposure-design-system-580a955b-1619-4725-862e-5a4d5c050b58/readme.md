# Meridian Exposure — Design System

A design system for **Meridian**, the large-exposure reporting application of an
investment company. The product gives the **investment board** a clear, trustworthy
view of the firm's largest credit/investment exposures: a main **overview dashboard**
with KPI number cards, a sector pie chart, a trend bar chart, and tabbed exposure
register tables, navigated from a left sidebar.

> **Audience first.** Most readers are **senior board members**. Every decision here
> favours legibility, calm, and unambiguous signal over density or flourish: large
> type, high contrast, generous hit targets (≥44px), tabular figures, and a quiet,
> conservative palette.

## Sources & provenance
- **No codebase or Figma was provided** — this system was built from a written brief.
  Brief specified: a financial reporting app for large-exposure investments; board
  audience (mostly seniors); overview page with number cards, pie/bar charts, tabbed
  tables; left sidebar navigation.
- **Brand colors from the brief:** `primary-deep #071D49`, `primary-mid #307FE2`,
  and `primary` given as `#4258B` (only 5 hex digits — **invalid**). Interpreted as
  **`#4258B8`** (sits naturally between the deep navy and the bright blue). **Please
  confirm or correct.**
- **Brand name "Meridian"** and the logo mark are **placeholders** — no name or logo
  was supplied. Replace with the real brand identity.

---

## CONTENT FUNDAMENTALS
How Meridian writes.

- **Tone:** precise, plain, board-ready. Factual and calm; **never alarmist**, never
  casual. The reader is a fiduciary making decisions, not a consumer being marketed to.
- **Person:** third person and impersonal. Name the counterparty/sector and state the
  fact ("Nordström Energy exceeded its approved limit by £240m on 28 Mar"). Avoid
  "you"/"we" in data surfaces; first-person plural is acceptable only in narrative
  board commentary ("We recommend…").
- **Casing:** sentence case for headings, titles and buttons ("Export board pack", not
  "Export Board Pack"). **UPPERCASE only** for short eyebrow/section labels and table
  column headers, always with wide tracking.
- **Numbers:** always formatted and aligned — thousands separators, consistent decimals,
  explicit units (£m, £bn, %, pp). Currency symbol leads. Tabular figures everywhere.
  Dates as "31 Mar 2026". Percentages of a limit stated explicitly ("62% of limit").
- **Status language:** a fixed vocabulary — **Within limit / Watch / Breach** —
  mapped to positive / warning / negative. Don't invent synonyms.
- **Emoji:** never. **Exclamation marks:** never. Em-dashes and parentheses for asides
  are fine.
- **Vibe:** an annual-report / central-bank bulletin register — authoritative,
  measured, exact. Examples live in the *Brand → Voice & tone* card.

---

## VISUAL FOUNDATIONS
The look, and why.

- **Color.** A conservative navy-and-blue financial palette. Deep navy (`#071D49`)
  is the brand anchor — it owns the sidebar, headings and ink. Corporate blue
  (`#307FE2`) is the single interactive/accent color (links, active nav, primary
  buttons, the latest-period bar). Indigo (`#4258B8`) bridges the two for fills.
  Neutrals are **cool-tinted grays**. Semantic colors are reserved strictly for
  data direction & status: green = gains/within limit, amber = watch, red =
  loss/breach. See the *Colors* cards.
- **Type.** Three families. **Source Serif 4** (display) carries authority on KPI
  figures and page titles — serifs read well large for older eyes. **IBM Plex Sans**
  does all UI/body work and has excellent tabular figures. **IBM Plex Mono** aligns
  columns of numbers in tables. Body is **17px** minimum with 1.55 line-height; the
  scale is tuned one notch larger than typical web defaults.
- **Spacing.** 8px base grid (with 4px half-steps). Roomy by default — dense financial
  data still needs air for this audience. Cards pad 24px; KPI grids gap 20px.
- **Backgrounds.** Flat and quiet. Page is a near-white cool gray (`--ink-50`); cards
  are white. **No gradients, no imagery, no textures, no patterns** in the product
  chrome. Color comes from data, not decoration.
- **Cards.** White surface, 1px `--border-default` hairline, **12px** radius, and a
  near-flat `--shadow-xs` by default (grids read as a calm plane, not floating chips).
  Reserve `--shadow-md`/`elevated` for true overlays (dialogs, menus). KPI cards add a
  4px left accent bar in a chart/semantic color.
- **Corner radii.** Restrained and businesslike: controls 8px, cards 12px, pills 999px
  for badges only.
- **Borders & dividers.** 1px hairlines (`--border-default` / `--divider`). Table
  header gets a 2px bottom rule. Borders do the structural work that shadows don't.
- **Shadows.** Soft and **cool-tinted** (navy-based rgba), never gray-black, never
  glossy. Four steps: xs → lg.
- **Hover states.** Buttons darken one step (primary → `--blue-700`); secondary/ghost
  fill with a subtle gray/blue tint. Table rows tint `--blue-50`. Nav items tint white
  at 8%. **No** scale-up or lift on hover.
- **Press / active.** Color-only — the active nav item is solid blue; tabs get a 3px
  blue underline. No shrink/bounce.
- **Motion.** Quiet and short. `--duration-fast` 120ms for hovers, up to 260ms for the
  limit-bar fill. Easing is a calm `cubic-bezier(0.2,0,0,1)`. **No bounce, no infinite
  loops, no decorative motion.** Respect `prefers-reduced-motion`.
- **Transparency & blur.** Almost none. Slight white-alpha tints inside the navy
  sidebar for hover/section dividers; otherwise surfaces are opaque. No glassmorphism.
- **Imagery vibe.** The product is essentially image-free. Where photography is ever
  needed (board pack covers), keep it cool, sober and desaturated — no warm/lifestyle
  stock.
- **Layout rules.** Fixed 264px navy sidebar, fixed 72px top bar; content scrolls and
  is capped at 1440px and centred. Charts and the register sit on a 12-col mental grid;
  KPI row is 4-up.

---

## ICONOGRAPHY
- **System:** **Lucide** (MIT) — a clean, single-weight outline set: 24px grid, **2px
  stroke**, round caps/joins. It matches the calm, legible, non-decorative tone.
- **Delivery:** shipped as the **`Icon` component** (`components/core/Icon.jsx`), which
  draws a curated subset of Lucide **inline as SVG**. This means icons inherit
  `currentColor`, need no network, and survive React re-renders (important for the
  interactive kit). To add a glyph, paste its Lucide path into the `PATHS` map.
- **Usage:** icons support labels and actions; they never carry meaning alone in data.
  Sizes 16–22px in UI. Color inherits text color, or a semantic token for status icons.
- **No emoji. No unicode-as-icon** (except the ▲/▼/— direction glyphs in
  `DeltaIndicator` and the select chevron, which are intentional typographic marks).
- **Substitution flag:** Lucide is a **substitute** — no brand icon set was provided.
  If the firm has one, replace the `PATHS` map / `Icon` component.

---

## Fonts — substitution note
No brand fonts were provided. Source Serif 4, IBM Plex Sans and IBM Plex Mono are all
**open-source Google Fonts**, loaded via `@import` in `tokens/fonts.css`. If Meridian
has licensed brand faces, swap the `@font-face`/`@import` and the `--font-*` tokens.

---

## INDEX — what's in this system

**Root**
- `styles.css` — the single entry point consumers link (`@import` list only).
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills-compatible front matter for use in Claude Code.
- `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` — **generated**; do not edit.

**Tokens** (`tokens/`, all reached from `styles.css`)
- `fonts.css` · `colors.css` · `typography.css` · `layout.css` (spacing/radius/shadow/motion) · `base.css`

**Components** (`components/`) — React primitives, each with `.jsx`, `.d.ts`, `.prompt.md`
- `core/` — `Button`, `IconButton`, `Card`, `Badge`, `Icon`
- `data/` — `StatCard`, `DeltaIndicator`, `LimitBar`, `DataTable`
- `navigation/` — `Tabs`, `SidebarNav`
- `forms/` — `Select`

**UI kit** (`ui_kits/exposure-overview/`)
- `index.html` — interactive large-exposure overview dashboard (also a Starting Point)
- `App.jsx`, `TopBar.jsx`, `PieChart.jsx`, `BarChart.jsx`, `data.js`

**Foundation & brand cards** (`guidelines/`) — specimens shown on the Design System tab
(Colors, Type, Spacing, Brand).

**Assets** (`assets/`)
- `logo-mark.svg` — placeholder monogram mark.

### Using the system
Consumers link one file and read components off the namespace:
```html
<link rel="stylesheet" href="styles.css" />
<script src="_ds_bundle.js"></script>
<script>const { Button, StatCard, DataTable } = window.MeridianExposureDesignSystem_580a95;</script>
```
