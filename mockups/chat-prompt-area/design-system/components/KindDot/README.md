# KindDot

The trail of 10px dots on a capsule, one per tool call, coloured by kind.

Lay `pp-dot` elements in a `pp-trail` in call order. Kinds: `is-think`, `is-read`, `is-bash`, `is-edit`, `is-ask`, `is-sub`, `is-err`, and `is-say`, which is square. Each dot pops in with `pp-popd`; the last dot while the agent works takes `is-run` and hops. The trail is decorative (`aria-hidden`); the capsule subtitle carries the counts in words. Never use the dots alone to say what happened.
