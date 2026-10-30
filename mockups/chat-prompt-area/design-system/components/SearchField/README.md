# SearchField

The search field, New button and filter row at the top of the sessions panel.

`pp-search` is a `<label>` wrapping the icon, a real `<input type="search">` and a `pp-kbd` shortcut; the placeholder is hand-written. Beside it sits a `pp-btn` (blue, hard `blue-2` shadow). Filters are `pp-filt` buttons; a pressed one takes `is-on`, which paints it `highlighter` with a `highlighter-2` border, and `aria-pressed="true"`. Hover lifts fields and buttons 1px.
