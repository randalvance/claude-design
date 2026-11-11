# MeetAgent

How a person meets and names their main agent: the one they talk to on the home page, which starts the sessions and reports back. The same form appears in two places: as the step of the setup checklist that has to be done before Open Primepaw works, and as a `kr-meet is-card` card in the middle of an empty home page while there is no main agent yet.

`kr-meet` is the form, on the paper as it is or on a card with `is-card`:

- The name on a ruled line, `kr-fld`: Caveat 38 with Jarvis pencilled in as the placeholder. Create with nothing written makes the rule a dashed red one (`is-bad`) and writes `kr-ferr`, "It needs a name", under it in red pen.
- The portrait, `kr-pstrip`: four portrait stickers, the pet characters’ faces (the robot dog, the puppy, the cat, the pug), each a round sticker with a white die-cut rim, taped on like photos, `kr-pph`, each a little askew by its own `--tilt`. The picked one (`is-on`) sits straight and is ringed in pen, `kr-pring`, drawn in when it is picked. The big photo, `kr-qph is-l`, shows the pick. A face is a picture, `kr-pface`, from the Characters assets (`assets/Characters/robot-face.png`, `dog-face.png`, `cat-face.png`), 32px on the strip, 64px on the big photo, 24px on the small one and 26px on the `kr-jarvis` tile.
- The model, `kr-mdef`: a `kr-switch` for the global default with the default written beside it by hand. On, `kr-msels is-dim` fades the two `kr-btn kr-msel` selects; off, they come to life, provider first, then the provider's models. Each opens a `kr-pop` with a row per choice.
- One line in Fraunces italic, `kr-mline`, says what it is for: "Your main agent starts work for you and never edits code itself." The name takes the place of "Your main agent" once there is one.
- Create is a `kr-btn is-go`, with "All of this can change later in Settings." beside it by hand. Pressed with a name, a red WELCOME `kr-stamp` lands on the form; then the step folds to done, or the home page becomes the empty home with the new agent greeting you.

Until there is a main agent, the rail's top tile is `kr-ib kr-nobody`, an empty frame drawn in dashed pen with a question mark, and the small photo places use `kr-qph is-empty`.

The setup checklist, `kr-setlist`, is six things on one sheet: Restore a backup, Meet your Main Agent, Sign in to GitHub, Clone your KB, Sign in to Ona, Set up MCPs. Each is a `kr-sitem` with a `kr-check` tick box, the title and one line in Nunito, and its state by hand on the right in `kr-sitem-st`: "skipped", "signed in as randal", "Jarvis came with your backup" beside the agent's small photo. The open one unfolds its `kr-sitem-b`: a paragraph, the action as a `kr-btn is-go`, and Later or Start fresh as a `kr-hlink`, a link written by hand. A done one, `is-done`, strikes its title through. Only the main agent has to be done before Open Primepaw works; a restored backup brings its agent along and ticks the step on its own.
