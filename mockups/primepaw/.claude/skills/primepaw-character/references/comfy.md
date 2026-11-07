# Drawing a character on Comfy Cloud

The puppy was drawn with Qwen Image 2.1, an open-weight model that runs on Comfy Cloud's own
credits rather than a partner's. Everything after the base is an *edit* of the base: the model sees the
previous cut as a reference image and keeps the character's identity, which is what makes eleven
separate sheets look like one creature. Use the `comfy-cloud` plugin's tools; the names below are its
tool names.

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
| `__REFERENCE__` | the reference's filename from `use_previous_output`: the base for the moods, the avatar and the body; the body for the walk strips |
| `__PROMPT__` | the sheet's prompt from `prompts.md` |
| `__WIDTH__`, `__HEIGHT__` | mood sheets 2048 by 1024; avatar 1024 by 1024; body 1024 by 1536; walk strips 2048 by 512 |
| `__SEED__` | any integer; a different seed per sheet, and a new one when a sheet needs redrawing |
| `__PREFIX__` | `<id>_<sheet>`, so the downloads are easy to tell apart |

The width and height are numbers in the JSON, not strings: replace the quoted placeholders whole.
Keep the sampler as it is (25 steps, cfg 1, euler, simple): cfg 1 is what Qwen Image 2.1 wants, and
raising it makes the colours bleed. `resolution: 0` on the text encoder lets the reference in at its own size.

Two stages, because the walk strips need the body:

1. **From the base:** the six mood sheets, the avatar and the body, eight items in one batch.
2. **From the body:** the four walk strips (down, left, right, up), four items in one batch, or, better,
   the GPT Image route below.

The walk strips are where Qwen falls short: seen from behind it splays the walking legs out sideways,
however the prompt words it, and in profile it turns the head toward the viewer. The puppy's four strips
were redrawn with GPT Image 2.6 Sunburst, a paid partner model, which drew every one right on its first
seed, so draw the strips with it when the credits are there and keep Qwen for the moods, the avatar and
the body. The graph is `LoadImage` (the body) → `OpenAIGPTImageNodeV2` (`model` `gpt-image-2.6-sunburst`,
`model.size` `1536x1024`, `model.quality` `high`, the body on `model.images.image_1`) →
`SaveImageAdvanced`, sent with `submit_workflow`, because the batch tool's bundled catalog can lag the
live one and refuse the template by name. Ask for a grid of 3 columns and 2 rows at that size (the model
draws 3:2, not a 4:1 strip, and `build.py` reads the six cells in reading order either way) and spell the
walk out: legs under the body, one foot lifted so its sole shows, never spread sideways. It costs 5 to
29 credits an image and the spend is gated, so ask the user before submitting. It returns a transparent
PNG rather than a green sheet, the figure at alpha 250 to 254 with a faint halo below 30: composite it
onto `#00FF00` with the alpha remapped (0 below 24, opaque from 250) before saving it as the source, so
the slicer keys it like the others.

Before the first batch, `estimate_credits` with `template_name: image_qwen_image_2_1_image_edit` says
what one edit costs; tell the user the total for twelve before spending it.

Wait with `get_batch_status` or `wait_for_batch`, then `get_batch_output` with `client_os`: it downloads
every image and reports where each landed. Copy them into `pet/src/<id>/` under the names `build.py`
expects: `idle.png`, `greet.png`, `celebrate.png`, `sad.png`, `error.png`, `ask.png`, `avatar.png`,
`body.png`, `walk-down.png`, `walk-left.png`, `walk-right.png`, `walk-up.png`.

## 3. Judging a sheet

Look at every sheet before building. The model is asked for a 4 by 2 grid of 8 cells, but it draws
the grid it likes (4 by 2, 4 by 3, 3 by 3); `build.py` finds the cells by the bands of paper, so an odd
grid is fine as long as the cells are separate and the creature is the same size in each. Redraw a sheet
with a new seed when:

- cells touch or overlap, so the bands cannot be told apart;
- the creature changes size or drifts across the cells (the frames would jitter);
- the character drifts (a different collar, a lost patch, a new colour);
- the motion is not there (a greet with no wave, a sad with no droop);
- anything but green shows around the figure (grid lines, labels, a frame).

Judge the walk strips as a set: `build.py` scales each facing to the same standing height, so a strip
drawn a little smaller is fine, but one drawn much smaller comes out soft. The figure must stay upright
and square to the viewer in every cell; the back view is the one Qwen gets wrong, twisting the body
or splaying the legs, so look at its walking cells closely and reach for GPT Image (above) if a second
seed does not fix it. The avatar must be one round sticker filling the frame, and the body a full figure
with its feet on the ground and nothing cropped.
