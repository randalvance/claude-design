# HomeThread

The home page is a thread with one personal agent, Jarvis, and Jarvis starts the sessions. These are the parts it is built from.

`kr-ib kr-jarvis` is the main agent's tile at the top of the rail: a cream tile with his portrait sticker instead of a glyph, `is-on` on the home page, and a `kr-nb` for the threads waiting on you.

`kr-trow` is a thread in the list: a paper strip with the title in Nunito 14, the time in Caveat 15, and the last thing said clamped to two lines. The open thread is `is-on`, highlighter like a picked session row. A `kr-nb kr-red is-row` says something in it waits on you. Rename and archive live in each row's menu.

In a thread your words are kraft notes and Jarvis's are `kr-jsay`, set in Fraunces 17. Jarvis leaves three kinds of cards:

- `kr-scard`, a session card for every session it starts, under a `kr-scap` line such as "Started Add CSV export in primepaw on a new worktree". The strip on top is the workspace's colour (`--wc`) with the branch in `Courier` 12, the model, and a `kr-pill` for the live status: `is-work` blue while working, `is-attn` waiting on you, plain green done, `is-fail` red. Below are the session's last summary line and Open. A card waiting on you, `is-needs`, sits on the amber mat like everything else that waits on you, and its Open is `is-go`. A failed card writes its line in red.
- `kr-helper`, a helper card: a read-only answer on a ruled index card, folded to the heading and one line until it is opened, with "read-only" in Caveat.
- `kr-dline`, a decision line for every call Thread YOLO makes, under a small red `kr-stamp`, with the time.

A job ends on `kr-report`, Jarvis's finish report on the sage mat that done things sit on, with a green DONE `kr-stamp`, the PR and its checks, and Open PR.

Thread YOLO is a `kr-stamp is-toggle` in the thread's header, off by default. Struck, it writes out what it risks in `kr-yrisk`, and from then on Jarvis answers the prompts of the sessions this thread starts and notes each one as a `kr-dline`.

When Jarvis is unsure, such as which workspace to start in, it asks with the same card and sheet as a session's questions: see `QuestionSheet`.
