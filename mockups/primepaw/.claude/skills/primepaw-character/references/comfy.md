# Drawing a character on Comfy Cloud

The puppy's base, avatar and body were drawn with Qwen Image 2.1, an open-weight model that runs on
Comfy Cloud's own credits rather than a partner's; its mood sheets, turnaround and walk sheets with GPT
Image 2.6 Sunburst, a paid partner model, which holds a character still from cell to cell where Qwen
lets it drift. Everything after the base is an *edit*: the model sees an earlier cut as a reference
image and keeps the character's identity, which is what makes thirteen separate sheets look like one
creature. Use the `comfy-cloud` plugin's tools; the names below are its tool names.

## 1. The base: five options in one batch

Run the graph in `../assets/qwen21-t2i.workflow.json` five times as one `submit_batch`, each item the
base prompt from `prompts.md` with a different take on the brief in its `{CREATURE}` and `{FEATURES}`
and its own seed (the robot dog's options took 20261116 to 20261120), `description` naming the option:

| Placeholder | Value |
| --- | --- |
| `__PROMPT__` | the base prompt, slots filled |
| `__SEED__` | any integer, the quoted placeholder replaced whole; the puppy's base used 20261107, the cat's 20261109 |
| `__PREFIX__` | `<id>_option_<letter>`, and `<id>_base` for a redraw of the pick |

It is Qwen Image 2.1 text to image at 1024 by 1024, 25 steps, cfg 1, euler simple, the prompt wired
straight into the encoder. The text-to-image template (`image_qwen_image_2_1_t2i`) drew the puppy's
base, but it has since taken to rewriting the prompt on its way in and answered the cat's with grey
noise, so the raw graph is the path now. It runs on Comfy Cloud's own credits, for about what the
template costs (`estimate_credits` with `template_name: image_qwen_image_2_1_t2i`).

Then `get_batch_output` with `client_os` to download the five, `scripts/options.py` to lay them side by
side keyed off the green, and the user picks (SKILL.md, step 2). Judge the pick hard; every other sheet
inherits it:

- The peeking creature reads at 92 CSS px wide over the composer, and its face at 24 px as the rail
  tile's glyph and 16 px on a row (the face sits on the icon scale: 64, 32, 24, 16). Big simple shapes,
  few small details. If a detail would vanish at 24 px, take it out of the prompt.
- It is one flat paper cut-out with a white die-cut border, pen-ink features, flat colours, no shadow,
  no 3D, on a clean flat green. Any gradient, shading or shadow leaks into every sheet.
- The peeking pose: head and two front paws (or hands) over a straight edge, nothing below the edge.
  The cut edge is what the boards hook on the composer frame.
- Nothing but green around the figure. The cat's base drew its wall as a line across the whole picture;
  it had to be painted green outside the figure before it went on as a reference, or the slicer would
  have joined the mood cells that copied it.

A base that is close but not right is cheaper to re-run with a new seed or a tightened prompt than to
fix later. Once it is right, `use_previous_output` with its `prompt_id` gives the server-side filename
(a hash plus `.png`) that the edits take as their reference, and save the downloaded file as
`pet/src/<id>/base.png` so the character can be redrawn. The base is also the first reference of every
mood sheet, so its resting pose is the one the moods return to.

## 2. The edits: a raw graph, submitted as a batch

The edits use the graph in `../assets/qwen21-edit.workflow.json`. Fill its placeholders and submit all
the sheets of one stage as one `submit_batch` of `submit_workflow` items, each with a `description`
that names the sheet:

| Placeholder | Value |
| --- | --- |
| `__REFERENCE__` | the reference's filename from `use_previous_output`: the base, for the avatar and the body |
| `__PROMPT__` | the sheet's prompt from `prompts.md` |
| `__WIDTH__`, `__HEIGHT__` | avatar 1024 by 1024; body 1024 by 1536 |
| `__SEED__` | any integer; a different seed per sheet, and a new one when a sheet needs redrawing |
| `__PREFIX__` | `<id>_<sheet>`, so the downloads are easy to tell apart |

The width and height are numbers in the JSON, not strings: replace the quoted placeholders whole.
Keep the sampler as it is (25 steps, cfg 1, euler, simple): cfg 1 is what Qwen Image 2.1 wants, and
raising it makes the colours bleed. `resolution: 0` on the text encoder lets the reference in at its own size.

Three stages, because the turnaround needs the body and the walk sheets need both:

1. **From the base:** the avatar and the body, two items in one Qwen batch.
2. **From the body:** the turnaround, one GPT Image run (below), judged against the slots before
   anything is drawn from it.
3. **From the base and the body, and from the turnaround and the body:** the six mood sheets (the
   base, which is the peeking pose, first and the body second) and the four walk sheets (down, left,
   right, up; the turnaround first and the body second), ten items in one GPT Image batch, or twenty
   with two seeds each.

Any model invents the sides it has not been shown: drawn from the body alone, the puppy's back came back
from GPT Image wearing the tummy patch. So the turnaround is drawn first, with GPT Image 2.6 Sunburst, a
paid partner model, and the walk sheets copy it. The mood sheets go to GPT Image too: as Qwen edits
the puppy changed size from cell to cell, its patch swapped eyes and a mood's whole action sat in one
frame, so the peeking cut flickered rather than moved. Qwen keeps the base, the avatar and the body.

The GPT Image sheets use the graph in `../assets/gpt26-edit.workflow.json`: two `LoadImage` nodes →
`OpenAIGPTImageNodeV2` (`gpt-image-2.6-sunburst`, 1536 by 1024, quality high) → `SaveImageAdvanced`,
sent as `submit_workflow` items of one `submit_batch`, because the batch tool's bundled catalog can lag
the live one and refuse the template by name. Its placeholders:

| Placeholder | Value |
| --- | --- |
| `__REFERENCE_1__`, `__REFERENCE_2__` | server-side filenames: from `use_previous_output` for a sheet Comfy drew, or from `upload_file` for a file on disk (run the curl it prints and take the `name` it answers with). The turnaround has one reference: drop the `ref2` node and the `model.images.image_2` line |
| `__PROMPT__` | the sheet's prompt from `prompts.md`, slots filled |
| `__SEED__` | any integer, the quoted placeholder replaced whole; a different seed per item |
| `__PREFIX__` | `<id>_<sheet>`, with `_a` and `_b` when a sheet is drawn with two seeds |

Two seeds per sheet, as two items of one batch, is the cheap way to have a choice. A batch of ten takes
a few minutes; `wait_for_batch` with `max_wait_seconds: 300` covers it. It can go on reporting every
job pending after they have finished: when it does, `get_job_status` on one job tells the truth, and
`get_batch_output` with `client_os` downloads whatever is done (`get_output` for a job it misses).

- **The turnaround:** the body on `image_1`, the turnaround prompt from `prompts.md`. Judge it like the
  base: four figures of one height on one ground line, the back with no face and with every absence
  the `{BACK}` slot names (the puppy's plain back, no patch), every part the front shows sitting where
  it should from behind (the puppy's tail: its base at the centre of the rump and the tail going out to the left
  across the back with its tip curling up, the front's tail seen from the other side; not a stub, not a
  whole tail at the hip, not a blob hanging between the legs), the profiles with one eye, the same colours in every view. Save it as
  `pet/src/<id>/turnaround.png`; it never ships, but every walk sheet copies it. One figure wrong on a sheet
  that is otherwise right is an edit, not a redraw: send the sheet back as `image_1` with the body as
  `image_2` and ask for it reproduced exactly with that one change; the other figures stay in place to
  the pixel.
- **Each mood sheet:** the base on `image_1` (it is the peeking pose; the puppy, whose base was not
  kept, uses `pet/src/dog/peek.png`, one cell of its first idle sheet), the body on `image_2`, the mood
  prompt from `prompts.md`, which spells out all eight frames. Judge it by its frames: eight cells, the
  figure the same size with its markings on the same side in every one, the action spread over the
  frames rather than sitting in one, a loop's last frame leading into its first and a one-shot ending
  with the paws back on the edge, nothing but green around the figures (confetti and marks are fine as
  long as they do not reach into the next cell).
- **Each walk sheet:** the turnaround on `image_1`, the body on `image_2`, the walk prompt from
  `prompts.md`, which points at the turnaround's figure for that facing and spells out the six poses:
  standing, the two stomps, two beats of work, the wave. Judge it by its cells: six, the figure the
  same drawing at the same size in every one with its feet on one ground line, the two stomps with a
  foot lifted flat a little off the ground directly under the body (no sole showing, no leg out to the
  side, no kicked-up foot: the stomp was chosen because the kicked step from behind never came right),
  the profiles keeping one eye, the back keeping every absence the `{BACK}` slot names, nothing but
  green around the figures. A cell wrong on a sheet otherwise right is an edit like the turnaround's:
  the sheet as `image_1`, reproduced exactly with that one cell changed. The puppy's four were drawn
  with seeds 20261108 to 20261111 and the cat's with 20261112 to 20261115 (down, left, right, up),
  every first seed kept; a redraw takes a new seed.

It costs 5 to 29 credits an image, there is no estimate call for it, and the spend is gated, so ask the
user before submitting; `get_batch_status` reports `billed` per job afterwards. It returns either the
green sheet it was asked for or, as every walk sheet did, a transparent PNG, the figure at alpha 250 to
254 over a faint halo:
run `scripts/green.py <download> pet/src/<id>/<sheet>.png` on every download, which lays the
transparent kind on `#00FF00` with the halo removed and writes the green kind through, so the slicer
keys them all alike.

Before the first batch, `estimate_credits` with `template_name: image_qwen_image_2_1_image_edit` says
what one edit costs; tell the user the total for the two edits before spending it.

Wait with `get_batch_status` or `wait_for_batch`, then `get_batch_output` with `client_os`: it downloads
every image and reports where each landed. Copy the Qwen sheets, and `green.py` the GPT ones, into
`pet/src/<id>/` under the names `build.py` expects: `idle.png`, `greet.png`, `celebrate.png`, `sad.png`, `error.png`, `ask.png`, `avatar.png`,
`body.png`, `turnaround.png`, `walk-down.png`, `walk-left.png`, `walk-right.png`, `walk-up.png`.

## 3. Judging a sheet

Look at every sheet before building. The model is asked for a 4 by 2 grid of 8 cells on a mood sheet
and a 3 by 2 grid of 6 on a walk sheet, but it draws the grid it likes (4 by 2, 4 by 3, 3 by 3);
`build.py` finds the cells by the bands of paper, so an odd grid is fine as long as the cells are
separate and the creature is the same size in each (`--walk-cols 6` forces six equal cells on a walk
sheet whose bands cannot be told apart). Redraw a sheet with a new seed when:

- cells touch or overlap, so the bands cannot be told apart;
- the creature changes size or drifts across the cells (the frames would jitter);
- the character drifts (a different collar, a lost patch, a new colour);
- the motion is not there (a greet with no wave, a sad with no droop);
- the markings swap sides between cells, or a mood's whole action sits in one or two cells with the
  rest at rest, so the cut flickers instead of moving;
- anything but green shows around the figure (grid lines, labels, a frame).

Judge the walk sheets as a set: `build.py` scales each facing to the same standing height, so a sheet
drawn a little smaller is fine, but one drawn much smaller comes out soft. The figure must stay upright
and square to the viewer in every cell, the same drawing at the same size on one ground line; the two
stomps lift a foot flat with no sole showing and no leg out to the side; the profiles keep one eye; the
back keeps every absence the `{BACK}` slot names. The back view is the one that goes wrong, so draw the
turnaround first (above) and check the back sheet's cells against its third figure.

The avatar must be one round sticker filling the frame, and the body a full figure with its feet on the
ground and nothing cropped.
