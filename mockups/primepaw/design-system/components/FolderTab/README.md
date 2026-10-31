# FolderTab

A workspace group in the sessions panel: a kraft folder tab over an index card of session rows.

`pp-folder` wraps a `pp-folder-tab` button (chevron, a `pp-swatch` in the workspace colour, the name, an optional `pp-attn` exclamation sticker, a hand-written count) and a `pp-folder-body` that collapses on `is-closed` in five steps. The open tab has square bottom corners so it reads as attached to the card; closed, it rounds all four and gains `shadow-kraft`. Put session rows (see SessionRow) inside `pp-rows`. Set `aria-expanded` on the tab.
