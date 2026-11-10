# Inbox

Everything that needs you, at `/inbox`: the tray tile on the rail right after the main agent's, its sticker the unread count. The page is two pieces, a conversations board on the left and the chosen conversation's items on the sheet.

## The board

- **One row per request.** A `kr-trow` for each conversation, grouped by where the request came from: a thread with the main agent, else a factory task, else a session; a pull request from someone else, with no request behind it, is a row of its own. The source sits on a `kr-trow-src` chip ahead of the title (`is-factory` amber, `is-session` blue, `is-pr` terracotta), then the newest item's line and its time by hand.
- **Markers.** A `kr-udot`, blue, while anything in it is unread; the title goes heavier too (`is-unread`). A red `kr-nb is-row` counts what still needs an answer. The chosen row is `is-on`, highlighted.
- **Filters.** `kr-filters` is five small cards, Needs answer · Reports · PRs · Factory · All; the pressed one is `is-on`, flat. Reports are the finish reports, from the factory and the main agent; a pull request waiting on your review is its own kind, under PRs. A conversation with nothing left in it leaves the board.

## The sheet

Items in time order, each a `kr-iitem` with a `kr-ihd` head: the read mark (`kr-imark`, a blue dot while unread, a hollow circle once read; press it to flip), the kind in small caps, who it came from and the time by hand, and Done at the right, which files the item with an Undo.

- **question** — a `kr-slip` on the amber mat with the `QuestionSheet` options inside (`kr-qprob`, `kr-qq`, `kr-qhint`, `kr-qopts`) and Answer in the `kr-slip-act`. Answered in place.
- **approval** — the `PermissionSlip` as it is in the session, minus the composer; its "or" line points at the session instead.
- **report** — a finish report, `kr-rpt`, filed by the factory or the main agent when a task is done: a paper report on the sage mat. The head is the factory sticker (or the main agent's face), the key in Courier (`kr-rpt-key`), the title (`kr-rpt-t`) and a green DONE `kr-stamp`. `kr-rpt-facts` lists when it was completed, how long it took in all (every session's time added up, the session count by hand), and the links: the issue in the tracker and the task on its board as hand-written `kr-rpt-a` links, and the PR on a `kr-prchip`. `kr-rpt-steps` is each session's time as the factory's step chips joined by arrows. Then, under dashed rules (`kr-rpt-sec`): what was done; the questions asked along the way, each a `kr-rpt-q` with the stage it was asked in as a `kr-stage`, the options given (`kr-rpt-o`, the picked one `is-on` in highlighter with a tick), and the answer with who gave it, `kr-rpt-by is-you` (a blue sticker) or `is-agent` (kraft, with the robot glyph); and the retro on three sticky notes (`kr-rpt-col is-good`, `is-bad`, `is-act`): what went well, what went wrong, and the action items with an owner each and a box to tick. `kr-rpt-f` ends it with who filed it and Dismiss, which files it with an Undo; a report has no Done in its head.
- **pull_request** — any pull request that needs your review, from a session, the factory or a colleague: a `kr-fcard is-needs` on the amber mat with the `kr-prchip`, the title, the repo and branch by hand, a `kr-pr-meta` line (who opened it, its size, the checks as `kr-chk`, `is-bad` in red when some fail) and the first line of its description. Open the PR goes to GitHub; Approve stamps APPROVED here and the card folds to a stub.
- **factory_blocked**, **factory_waiting**, **plan_ready** — a `kr-fcard` with the task's state as a `kr-pill` (`is-fail` Blocked, `is-attn` Waiting on you, `is-work` Ready for you), the column by hand, the reason in words, and one `kr-btn is-go`: Open the task, or Open the Plan tab. Blocked and Waiting on you sit on the amber mat (`is-needs`); Blocked writes its reason in red (`is-blocked`).
- **Answered items** fold to the slip's stub and say who in `kr-iby`, by hand: You, Jarvis (Thread YOLO), or You, through Jarvis.
- **Ask about this.** Under an open question, `kr-iask` is a short thread on a dashed rule: your follow-ups as small `kr-note`s on the right, the agent's answers as `kr-jsay` with its `kr-qph is-s` portrait, then a `kr-iask-in` box on a dashed line with a small Ask. The thread stays attached to the question after it is answered.

## States

- **Empty.** The sheet says Nothing needs you in the page title hand, with one serif line under it; the rail tile has no sticker.
- **Resolved elsewhere.** When an item is answered somewhere else, in the session or by the main agent under Thread YOLO, the stamp lands here, the item folds to its stub with who did it, and the row's sticker and the rail count drop. Nothing pulses.
