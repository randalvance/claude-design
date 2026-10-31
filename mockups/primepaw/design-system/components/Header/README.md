# Header

The chat sheet header: the session title in Fraunces, the branch on a kraft tag, a status sticker and icon buttons.

Lay the header out with flex, items aligned to the bottom, `space-18` gaps. The title is an `<h1 class="pp-title">` (26px Fraunces, one line). The branch is a `pp-tag` inside a `pp-tagw` wrapper, which gives the swallow-tailed tag its `kraft-2` drop shadow and the punched hole. Status is a Sticker. Icon-only actions are `pp-ib` round buttons with an `aria-label`. Put the role and workspace after the sticker in `mute`.
