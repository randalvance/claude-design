# ModelTag

A swallow-tailed kraft tag: the model and effort button in the composer, and the branch tag in the header.

`pp-mbtn` is a button cut as a tag (clip-path, a punched hole in `paper`) showing the model name and five `pp-ebars` effort bars, 4 to 12px tall, lit in `ink` up to the current level. Under an `is-max` ancestor the lit bars turn `red` and flicker. It opens the Popover: set `aria-haspopup="dialog"` and `aria-expanded`. The same tag shape as a static `pp-tag` inside `pp-tagw` carries the branch name in mono in the header.
