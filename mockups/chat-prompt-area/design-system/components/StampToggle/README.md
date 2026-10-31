# StampToggle

A switch drawn as a rubber stamp: a dashed outline when off, a red stamped word when on.

A `pp-stampbtn` with `role="switch"` and `aria-checked`. Off, it is the word in `mute` inside a dashed `bar` outline. On, render a `pp-stamp` span inside it: the word in `red` with a `stroke-stamp` border, tilted -8°, multiplied onto the paper, landing with the `pp-stamp` keyframe; the outline and label underneath go transparent. Use it for a mode that should feel deliberate (YOLO). Keep the label to one short uppercase word.
