# Artifacts

What the agent makes in a session lands on that session's clipboard (see `Clipboard`). Pin one there and it shows up on the Artifacts page, `/artifacts`: the clipboard tile on the rail after the knowledge base, `kr-ib kr-blue-2`.

## The pin

`kr-pinmark` sits in the head of the open artifact, beside its versions. It is a bare mark like the other pen marks: a pushpin drawn in pen, leaning, with the word Pin by hand in `mute`. Pressed (`is-on`, `aria-pressed`), the pin stands up, turns `red` and reads Pinned; the kind line under the title adds “pinned to Artifacts”, and the artifact's tab carries a small `kr-tack`. Pressing it again unpins.

## The page

One `kr-cork` under the page title. The pieces are in a grid, newest pinned first, each leaning up to 1.5 degrees its own way (`--tilt`).

- **A pinned piece, `kr-pinned`.** A `card` 216px wide with a `kr-tack` through its top, the cork's pinned-paper shadow, a window and a caption. The window, `kr-pinned-win`, is 200 by 138.
- **A thumbnail is the real thing made small.** `kr-pinned-page` is the artifact drawn 440px wide and scaled into the window. `is-doc` is a markdown document in the app's own type on `sheet`; `is-web` is a web page as a white printout under a browser bar, `kr-pinned-bar`, in its own colours in both themes. An image fills the window, `kr-pinned-img`.
- **Anything else has no preview.** Code, a table, a PDF: `kr-pinned-none` is plain `paper-2` with the kind struck on it, `kr-ext`, Courier 22 in capitals in `blue-2` ink at `tilt-stamp`, the one place Courier is this big, and “no preview” by hand.
- **The caption, `kr-pinned-cap`.** The name in `label`, the kind and size in Courier 11, and the session and workspace it came from by hand, after the workspace's `kr-dot`.

## What you can do

- Five 26px `kr-btn` filter by kind: All, Markdown, HTML, Images, Other, each with its count by hand; the pressed one is `is-on`. Find looks at names, sessions and workspaces.
- A click opens the piece in a drawer at full size, with the session it was pinned from and Open the session, then Copy, Download and Unpin as 26px `kr-btn`. The open piece stands straight inside a dashed ink outline.
- The tack is a button: pull it and the piece comes down. Undo in the page head pins it back where it was.
- With nothing to show, one note is pinned in the middle of the cork and says why.
- The page opens on the shared loading state, `Loading`, with ARTIFACTS on the box.
