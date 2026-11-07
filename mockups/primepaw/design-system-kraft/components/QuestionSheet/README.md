# QuestionSheet

When the agent has to ask, the turn stops and its questions wait in the dock above the composer. The inbox shows the same two pieces, unchanged.

`kr-qdock` is the collapsed card: a cream strip on an amber mat, the capsule's sibling. It holds the session's agent as its portrait sticker in a taped photo (`kr-qph`), the line `implementer-agent has 3 questions` with the agent's name in `Courier` 12 (`kr-qwho`), and one `kr-btn is-go` for Answer. Under the line, in `Caveat` 17, are the topics, or how many are answered once you have started. It holds still. The amber, the Needs you sticker and the badge on the session row are the signal, and nothing pulses.

Answer opens `kr-qsheet`, a dialog: one `kr-tab` per question above a `kr-qpaper` sheet. A tab's label is a short topic taken from its question, and `kr-qtick` beside it is a dashed ring that turns into a green sticker tick once the question has an answer. The sheet's header repeats the portrait and the line, with the session under it, and `kr-qx` closes it. Each tab then shows, in this order:

- the problem, `kr-qprob`: why this needs a person, in one to three plain sentences
- the question, `kr-qq`: one line in `Fraunces` 20, with `Pick one` or `Pick any that apply` under it
- the options, `kr-qopts`: a column each, with its short text as a `kr-btn` and the longer description under it in `kr-qdesc`. A picked button stays pressed flat with a green tick. When you can pick more than one, each option is a `kr-qchk` with a `kr-check` box instead of a button. At most one option carries the `kr-qrec` Recommended sticker, and some questions have none. Nothing is picked for you.

A first answer to a pick-one question moves on to the next tab still open. Submit sends every answer at once. It stays off until every tab has an answer and says how many are left, `Submit · 2 left`, then `Submit answers`. Closing the sheet keeps what you picked. You can also just write in the composer instead.

Once sent, the sheet is struck with an ANSWERED `kr-stamp` and closes, the card leaves the dock, and the thread keeps a `kr-slip is-stub` whose `kr-qdone` lists each topic with its answer.
