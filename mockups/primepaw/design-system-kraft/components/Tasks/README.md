# Tasks

One person's own list, `/tasks`: the squares tile on the rail between the idea board and Kanban, `kr-ib kr-blush`, with its glyph in `on-attn` ink like the bulb's. Nothing in it has to be code. There are no epics: a task can hold tasks, and those can hold more, as deep as it goes. A parent is the group: it has a name and a description like any task.

## The squares

The page is a tree at the side and one `kr-cork`. On the cork every task is a square, and they pack themselves: nothing is placed by hand.

- **A leaf, `kr-tasknote`.** A 108px sticky note with the task's name by hand, 17px, up to four lines. Its colour is its status: yellow to do, blue `is-doing`, green `is-done` with the name struck through. It leans up to 1.2 degrees its own way (`--tilt`).
- **The status, `kr-tasknote-stamp`.** Stamped at the foot of the note in Courier 10: dashed and grey for To do, solid navy for Doing, solid green for Done. It is a button: each press moves the task on.
- **A box, `kr-taskbox`.** A task with tasks inside it is paper that holds their squares, 8px apart inside 10px of padding, under a 34px strip, `kr-taskbox-head`, with its name in Fraunces 14 and how many of its leaves are done by hand. With `has-about` the strip is 52px and the description, `kr-taskbox-about`, runs under the name on one line. Boxes are `sheet` and, with `is-kraft`, `board`, by turns, so a box always sits on the other paper. A box has no status of its own: it is done when everything inside it is.
- **A folded box, `kr-taskstack`.** A stack of sheets the size of one square, with its name and what is inside by count. Folding is the same in the tree and on the cork.
- **Waiting, `is-held`.** A task can wait on another. Red string, `kr-string` in a `kr-strings` layer, runs pin to pin between them, sagging a little, and the one that waits has a hatched top edge and is stamped Waits until the other is done. A loop cannot be tied, and a task cannot wait on what holds it.
- **Picked, `is-sel`.** A dashed ink outline, the same as every picked piece of paper; its strings go to full strength and the rest fade.

`kr-task`, without the note, is something else: a factory task's folder in the sessions list.

## Moving them

- A double-click on a square puts a new task inside it; on the cork, one at the top. Its name is ready to type.
- A square drags, with everything inside it. Over the middle of another square that one takes a dashed blue outline, `is-over`: dropped, it goes inside, which is how tasks are grouped. By a square's edge, or in a box's own paper, a 4px blue bar, `kr-slot`, shows where it would go in. A dashed hole stays where it came from until it lands.
- The squares glide to their new places. Nothing pulses.

## The side

The tree is an outline that folds: each name after a 10px square in its status colour, a group after an outlined one, with its count by hand; the picked row is under the highlighter. Under the tree is the picked task's slip: its name in Fraunces 20, its description, three stamps for the status or the progress of a group, what it waits on and what it holds up, and Add inside, String, Move and the bin as 26px `kr-btn`. With nothing picked, the slip says how the board works. The page opens on the shared loading state, `Loading`, with TASKS on the box.
