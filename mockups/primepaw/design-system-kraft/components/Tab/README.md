# Tab

Chat tabs are strips of kraft-coloured paper with the `pulp-paper` texture, standing behind the leaf; the leaf is the paper laid over them, so the selected tab reads as part of the leaf.

`kr-tabs` (`role="tablist"`) lays `kr-tab` buttons (`role="tab"`, `aria-selected`) along the top of a tall `kr-sheet is-3 is-warm`. A tab is `kraft` paper, `radius-7` top corners, `space-8` by `space-14` padding plus 15px below that the leaf covers, a `kraft-2` edge and a short shadow. `is-on` is cut from `card` with a `stroke-tab` red top edge (`red`) and sits 1.5px lower so it meets the leaf. A view tab leads with its 14px icon (chat, branch, checklist, wrench, terminal, log). A `kr-tab-x` close disc and a `kr-pin` for a working tab go inside the tab. `kr-leaf` (`role="tabpanel"`) is the `card` paper laid over the tabs: `-5px` up into them, `edge-2` cut, `lift-paper-3`, a faint glow along its top edge, `radius-4` above and `radius-10` below, with `space-24` content padding.

Hover lifts a tab 2px; a tab never tilts. Keep tab names in `label-sm` and under 24 characters, with the working tab's pinwheel in place of its close disc.

Inside a session, add `is-ws` to unselected tabs and set `--wc` to the workspace colour. They become a lighter cut of the workspace's paper, so they stay distinct from a kraft note.
