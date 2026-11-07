# Drawing a character on Comfy Cloud

The puppy's base, avatar and body were drawn with Qwen Image 2.1, an open-weight model that runs on
Comfy Cloud's own credits rather than a partner's; its mood sheets, turnaround and parts sheets with GPT
Image 2.6 Sunburst, a paid partner model, which holds a character still from cell to cell where Qwen
lets it drift. Everything after the base is an *edit*: the model sees an earlier cut as a reference
image and keeps the character's identity, which is what makes thirteen separate sheets look like one
creature. Use the `comfy-cloud` plugin's tools; the names below are its tool names.

## 1. The base: one text-to-image run

Run the text-to-image template once with the base prompt from `prompts.md`, 1024 by 1024:

```
run_template
  name: image_qwen_image_2_1_t2i
  client_os: darwin
  wait_for_output: true
  input_overrides:
    "459:474": { "on_false": "<the base prompt>" }
    "459:458": { "seed": <any integer; the puppy used 20261107> }
```

The template's prompt lives on a switch node, so the override goes to `459:474.on_false`, not to a
field called `prompt`. If the output plainly ignores the prompt, the template has changed: call
`get_job_status` with `include_workflow: "knobs"` on that job, find where the prompt now lives, and
resubmit with `submit_workflow` and `from_prompt_id` plus the right `input_overrides`.

Then `get_output` with `client_os` to look at it. Judge the base hard; every other sheet inherits it:

- The creature reads at 92 CSS px wide (the composer) and at 44 px (the rail tile). Big simple shapes,
  few small details. If a detail would vanish at 44 px, take it out of the prompt.
- It is one flat paper cut-out with a white die-cut border, pen-ink features, flat colours, no shadow,
  no 3D, on a clean flat green. Any gradient, shading or shadow leaks into every sheet.
- The peeking pose: head and two front paws (or hands) over a straight edge, nothing below the edge.
  The cut edge is what the boards hook on the composer frame.

A base that is close but not right is cheaper to re-run with a new seed or a tightened prompt than to
fix later. Once it is right, `use_previous_output` with its `prompt_id` gives the server-side filename
(a hash plus `.png`) that the edits take as `__REFERENCE__`, and save the downloaded file as
`pet/src/<id>/base.png` so the character can be redrawn.

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

Three stages, because the turnaround needs the body and the parts sheets need both:

1. **From the base:** the avatar and the body, two items in one Qwen batch.
2. **From the body:** the turnaround, one GPT Image run (below), judged against the slots before
   anything is drawn from it.
3. **From the base and the body, and from the turnaround and the body:** the six mood sheets (the
   base, which is the peeking pose, first and the body second) and the four parts sheets (down, left,
   right, up; the turnaround first and the body second), ten items in one GPT Image batch, or twenty
   with two seeds each.

Any model invents the sides it has not been shown: drawn from the body alone, the puppy's back came back
from GPT Image wearing the tummy patch. So the turnaround is drawn first, with GPT Image 2.6 Sunburst, a
paid partner model, and the parts sheets copy it. The mood sheets go to GPT Image too: as Qwen edits
the puppy changed size from cell to cell, its patch swapped eyes and a mood's whole action sat in one
frame, so the peeking cut flickered rather than moved. Qwen keeps the base, the avatar and the body.

The graph is `LoadImage` → `OpenAIGPTImageNodeV2` (`model` `gpt-image-2.6-sunburst`, `model.size`
`1536x1024`, `model.quality` `high`, a reference on `model.images.image_1` and a second one on
`image_2`) → `SaveImageAdvanced`, sent with `submit_workflow`, because the batch tool's bundled catalog
can lag the live one and refuse the template by name. A file from disk reaches `LoadImage` through
`upload_file`: run the curl it prints and give `LoadImage` the name it answers with. Two seeds per sheet,
as two items of one batch, is the cheap way to have a choice.

- **The turnaround:** the body on `image_1`, the turnaround prompt from `prompts.md`. Judge it like the
  base: four figures of one height on one ground line, the back with no face and with every absence
  the `{BACK}` slot names (the puppy's plain back, no patch), every part the front shows sitting where
  it should from behind (the puppy's tail: its base at the centre of the rump and the tail going out to the left
  across the back with its tip curling up, the front's tail seen from the other side; not a stub, not a
  whole tail at the hip, not a blob hanging between the legs), the profiles with one eye, the same colours in every view. Save it as
  `pet/src/<id>/turnaround.png`; it never ships, but every parts sheet copies it. One figure wrong on a sheet
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
- **Each parts sheet:** the turnaround on `image_1`, the body on `image_2`, the parts prompt from
  `prompts.md`, which points at the turnaround's figure for that facing and lists the pieces in the
  order `build.py` expects (nine for the front and the back, eight for a profile). Judge it by its
  pieces: every one there, one per cell, none touching, each with its own outline and border, all at
  one scale, the hidden parts drawn (a leg's top, an arm's top, an ear's root, the tail's base), no
  figure put together anywhere, nothing but green around them. A piece drawn the wrong way round (the
  puppy's back tail came as a hook on one seed and as the turnaround's bean on the other) is fixed by
  pasting the better seed's cell into the sheet, not by redrawing the lot. Then `build.py --check`
  shows the puppets put together under the turnaround; a piece that lands wrong there was drawn unlike
  the turnaround's, so reword its line and draw that sheet again.

It costs 5 to 29 credits an image and the spend is gated, so ask the user before submitting. It returns
either a green sheet or a transparent PNG, the figure at alpha 250 to 254 with a faint halo below 30:
composite the transparent kind onto `#00FF00` with the alpha remapped (0 below 24, opaque from 250)
before saving it as the source, so the slicer keys it like the others.

Before the first batch, `estimate_credits` with `template_name: image_qwen_image_2_1_image_edit` says
what one edit costs; tell the user the total for the two edits before spending it.

Wait with `get_batch_status` or `wait_for_batch`, then `get_batch_output` with `client_os`: it downloads
every image and reports where each landed. Copy them into `pet/src/<id>/` under the names `build.py`
expects: `idle.png`, `greet.png`, `celebrate.png`, `sad.png`, `error.png`, `ask.png`, `avatar.png`,
`body.png`, `turnaround.png`, `parts-down.png`, `parts-left.png`, `parts-right.png`, `parts-up.png`.

## 3. Judging a sheet

Look at every sheet before building. The model is asked for a 4 by 2 grid of 8 cells, but it draws
the grid it likes (4 by 2, 4 by 3, 3 by 3); `build.py` finds the cells by the bands of paper, so an odd
grid is fine as long as the cells are separate and the creature is the same size in each. Redraw a sheet
with a new seed when:

- cells touch or overlap, so the bands cannot be told apart;
- the creature changes size or drifts across the cells (the frames would jitter);
- the character drifts (a different collar, a lost patch, a new colour);
- the motion is not there (a greet with no wave, a sad with no droop);
- the markings swap sides between cells, or a mood's whole action sits in one or two cells with the
  rest at rest, so the cut flickers instead of moving;
- anything but green shows around the figure (grid lines, labels, a frame).

Judge the parts sheets with `build.py --check <file>`, which draws the four puppets put together under
the turnaround's figures: every piece should sit where the turnaround draws it, the figure whole with no
piece adrift. The printout gives each piece's fit; one well under the others on its sheet is the one to
look at. The back view is still the one that goes wrong, a model making up a back it was never shown, so
draw the turnaround first (above) and check the back sheet's pieces against its third figure.

The avatar must be one round sticker filling the frame, and the body a full figure with its feet on the
ground and nothing cropped.
