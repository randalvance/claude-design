# NotePage

A note in the knowledge base is a sheet of paper: `kr-page` is `card` paper with the `pulp-paper` texture and `lift-paper-3`, and `kr-pagestack` lays two more sheets under it at a slight lean, so it reads as the top page of a pile. It is the only paper that carries long writing.

The top of the page is the note’s fields. `kr-page-meta` is the file path in `Courier` 11. `kr-page-title` is the title in `Fraunces` 36. `kr-props` is a grid of `Courier` keys and values for `type` (a `kr-btn is-sm` that opens the list of types), `description` and `tags`; each tag is a `kr-tag`, highlighter marker in `Caveat` 17. A dashed rule closes the fields.

Below it the note is blocks, each a `kr-blk`: `kr-h2` and `kr-h3` in `Fraunces` 20 and 17, `kr-p` in `Nunito` 15 at 1.65, `kr-quote` in italic `Fraunces` 17 behind a `kraft-2` rule, `kr-codeblock` printed on `paper-2` with its language in the corner, `kr-ptable` with an inked header rule and dashed rows, and `kr-outline` for lists. Inline, `kr-icode` is code and `kr-wiki` is a [[link]] to another note, blue ink underlined; `is-missing` dashes the line for a note not written yet. A block you are writing in is `kr-writing`, a pale blue wash with a dashed edge, and shows its Markdown.

Every block has a gutter (`kr-blk-gut`) left of the text, shown on hover and focus: a plus to add a block below and `kr-grip`, the handle you drag the block by, or click for Turn into, Move up, Move down, Duplicate and Delete. Alt+↑↓ moves it from the keyboard. While you drag, the block fades (`is-dragging`) and a blue line (`is-drop-before`, `is-drop-after`) marks where it lands.

A list item’s bullet is its handle. Its depth is `--d`, indented 26px a level, with a dashed guide back to its parent. Drop it on the top or bottom of another item to move it with everything under it; drop it on the middle to nest it, and that item takes the highlighter (`is-nest`) with “drop to nest it here”. Tab and Shift+Tab nest and lift the item you are writing.

Parent, related, links and backlinks sit in the margin under kraft labels. The graph puts every note on `kr-cork` as a `kr-gcard` with a `kr-tack` and its folder colour along the top, strung together with `kr-thread`: red for links, pale string for related, dashed ink for the parent.
