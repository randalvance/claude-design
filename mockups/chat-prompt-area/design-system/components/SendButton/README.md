# SendButton

The round send button that becomes a square red stop button while the agent works.

A 40px `pp-send` button. Empty it is `paper-2` with a `faint` arrow. With a draft it takes `is-ready`: `blue`, white, `shadow-blue-md`; under an `is-max` ancestor it turns `red`. On send, add `is-fly` for one 5-step flight of the arrow. While the agent works, swap the arrow for the square and add `is-stop`: the button becomes a `red` rounded square tilted -4° whose icon stamps in once and then holds still. The stop state must never pulse or loop. Update `aria-label` with the state.
