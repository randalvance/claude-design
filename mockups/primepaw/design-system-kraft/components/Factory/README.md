# Factory

Every factory at a glance, at `/factory`: the factory tile on the rail after Kanban's (`factory.svg`, the sawtooth roof in the rail style). The page is one sheet, no left board: a header, the pause-all line, then one card per factory.

## The header

- **Title and count.** Factory as the page title, the tally by hand beside it: how many factories, how many running, idle, paused, off.
- **New factory.** A `kr-btn is-go` that opens a short menu of the boards that have no factory yet; picking one makes the card. A board that already has a factory is not offered twice, and when every board has one the menu says so.
- **Factory settings.** A plain `kr-btn` beside it: the steps, the runner and the limits every factory starts with.

## Pause all

`kr-pauseline` is a strip of sheet with the `kr-switch`, the words Pause all factories in bold, and the consequence in one line by hand: flip it and nothing new starts, what is in flight finishes its step, then waits. On, the strip tints amber (`is-on`) and the line says how to get back.

## The card

A `kr-fac`, a sheet with a hair edge, two to a row on the page.

- **Head.** The name by hand (`kr-fac-nm`), the board under it as a dashed link (`kr-fac-b`, "primepaw issues →"), the state as a `kr-pill`, and the factory's own `kr-switch` at the right.
- **State pills.** Running is the green pill; Paused is amber (`is-paused`), the global pause showing on every factory that is on; Idle is a plain paper label (`is-idle`), on but with nothing to pick up; Off is a dashed ghost (`is-off`). Nothing pulses.
- **Counts.** `kr-counts` is five numbers by hand with their words under: in flight, waiting on you, Blocked, to plan, queued. A zero goes faint (`is-zero`), waiting on you is amber (`is-attn`), Blocked is red (`is-bad`). A card with either of the last two sits on the amber mat (`is-needs`), as anything that waits on you does.
- **Blocked.** Under the counts, `kr-fac-why` is a dashed red slip with the `kr-pill is-fail`, the task and the reason in words, and one small button, Open the task.
- **Steps.** `kr-steps` along the bottom: the steps that are on as `kr-step` chips, each its icon and its label, joined by arrows by hand: Planning → Plan review → Implementation → Testing → Code review → Merge. A step that is off keeps its place as a dashed ghost with only its icon (`is-off`), so every strip lines up.
- **Off.** An off factory's counts and steps go to half strength; the switch brings it back, Idle on an empty board, Running on one with tasks.

## States

- **No factories yet.** The page title hand says so, one serif line explains what a factory does, and New factory is the way in.
- **All paused.** Every factory that is on wears the amber Paused pill; the pause line is amber and says what is finishing.
- **Blocked tasks.** The Blocked count goes red and the reason sits under it with the way to the task.
