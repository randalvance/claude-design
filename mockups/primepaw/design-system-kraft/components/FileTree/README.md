# FileTree

The knowledge base’s notes board is a file navigator printed on one sheet of paper, laid on the board under the filter. `kr-tree` is that sheet; `kr-tree-head` names the folder in small caps with three `kr-tree-btn` glyphs: New note, New folder, Collapse every folder. Each go into the folder you last opened.

`kr-tree-row` is one folder or file, 26px tall in `Nunito` 13. Folders come first, sorted by name, in 800 with `kr-tree-chev` and `kr-folder`, a manila folder: a `kraft` front over a `kraft-2` back that opens when the folder does. Files follow in 600 with `kr-page-icon`, their `.md` printed in `faint`. Every level indents 12px behind a hairline `kr-tree-guide` in `line`.

The open note sits under a highlighter (`is-on`: marker with its strokes). The folder that new notes go into takes a faint wash (`is-ctx`). Git state is printed at the right in `kr-git`: `M` in amber for a changed file, `U` in green (`is-new`) for a new one, an amber dot on a folder that holds either. A folder you are naming becomes a field with a blue edge in its row.

It is a `role="tree"` of `treeitem` rows with `aria-level`, `aria-expanded` on folders and `aria-selected` on the open note, which is the one row in the tab order. Up and Down move, Right opens a folder or steps into it, Left closes it or steps out to its parent, Home and End jump to the ends.
