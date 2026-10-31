# Capsule

One turn of agent work: a sheet on a deck with a kraft token, a title, counts, the kind-dot trail, and steps that unfold below.

A `pp-deck` section (the two stacked sheets behind) holding a `pp-cap` button and a `pp-body`. Inside the button: the `pp-tb` token circle with the elapsed time in Caveat and, once finished, a `pp-ok` check stamp (`is-stopped` makes it red with a square); `pp-cap-t` with a `strong` title and a `pp-cap-s` subtitle in counts; the `pp-trail` of KindDots; an optional `pp-now` hand-written line while live; the chevron. States on the deck: `is-open` unfolds the `pp-steps` list in six steps and slides each step in, staggered 50ms; `is-live` boils the sheet and wobbles the token. Set `aria-expanded` on the button. Steps are `pp-step` rows: a bold kind, the command or path in mono, a hand-written time. You provide the texts and the kinds; keep one capsule per turn and only the live one boiling.
