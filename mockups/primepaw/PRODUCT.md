# Product

<!-- impeccable:product-schema 1 -->

Primepaw, as prototyped in this folder. The product truth below covers the Primepaw app; the paper-diorama boards here are its prototype and its evidence. Written 2026-11-07 from the boards, the Kraft brand book and one interview round. Facts marked *(prototype)* come from the boards and were not separately confirmed.

## Platform

web

## Users

One person: a solo developer running AI coding agents over their own repos and projects, on their own machine. They start work by describing a job, approve what agents may do, follow several sessions at once, and keep what they and the agents know in one place. No other audience is confirmed.

## Product Purpose

Primepaw is the chat app for working with coding agents. The developer talks to one personal main agent (Jarvis in the prototype) on the home page; it starts sessions in workspaces, answers for them when allowed, and reports back. Around the sessions sit everything an agent needs: workspaces with linked folders, agents, skills, MCP servers, memory, a knowledge base, Kanban boards and background jobs. Success is work getting done through agents without the developer driving each session by hand, and without losing track of what needs them.

## Positioning

Four claims, all confirmed as core:

- **A main agent runs sessions.** The personal agent starts, supervises and reports on every session, and never edits code itself.
- **One desk for agent work.** Workspaces, skills, MCP servers, memory, the knowledge base, boards and background jobs live in the app, not in scattered config files.
- **Git-backed shared knowledge.** The knowledge base is markdown in a git repo, pulled before every session, so people and agents share one source; memory is budgeted and inspectable.
- **Approvals you can trust.** Permission slips, question sheets and a per-session or per-thread YOLO give explicit, visible control over what agents may do.

## Operating Context

- Ships as a web app used in the browser (confirmed). The prototype's copy assumes access to folders on the developer's Mac: workspaces link local folders and the knowledge base lives in a local folder or a cloned repo. How the browser app reaches the local filesystem is not recorded here.
- Workspaces group sessions and carry a colour, linked folders, extra context, memory, a Kanban board, agents and skills. *(prototype)*
- A session runs on a branch with a chosen model and effort, produces artifacts (on a clipboard, with versions) and has a side chat whose asides stay out of the session. A session can wait on the developer: a tool approval (permission slip) or questions (question sheet, several per agent, at most one Recommended). *(prototype)*
- Home is a thread with the main agent. It leaves a session card per session it starts, a folded helper card for read-only research, a decision line per Thread YOLO call, and a finish report. *(prototype)*
- First run opens a six-step setup checklist: Restore a backup, Meet your Main Agent, Sign in to GitHub, Clone your KB, Sign in to Ona, Set up MCPs. Only Meet your Main Agent must be done before the app opens; the rest waits in Settings. *(prototype)*
- Integrations shown: GitHub, Ona, Jira, Linear (Kanban boards synced from Jira projects and GitHub issues, or kept local) and Slack. Demo data only; none is a confirmed commitment. *(prototype)*
- Models shown: Fable 5.1, Sonnet 5.5, Opus 5.5, Haiku 5.5, each with its own default effort. Effort is adaptive thinking, not a thinking budget; "Show reasoning summary" is the only visibility control. *(prototype)*
- The context window reads as a fuel gauge: F is a fresh conversation, E a full window, and a ghost segment previews what the current draft will consume. *(prototype)*
- The composer takes voice as well as text. *(prototype)*

## Capabilities and Constraints

Confirmed functionality, each with a light and a dark board in this folder (see README.md):

- Home thread with the main agent; the threads board; empty, waiting, asking and Thread-YOLO states; Meet your Main Agent (name, portrait, model) as a setup step and as the card on an empty home.
- Sessions: the workspace-grouped list with attention badges, busy and done states; an open session with tabs, capsules, composer, artifacts clipboard, side chat, and a title that can be rewritten or generated.
- Approvals: permission slips (Allow once, Allow for this session, Deny), question sheets, the inbox, YOLO per session (skips slips, never questions) and Thread YOLO.
- Agents list and edit page (description, system prompt, preferred model, MCP servers, skills).
- Skills list and edit page (slash command, trigger phrases, instructions, files, who it is on for, usage).
- Workspaces list and edit page. Memory with Global, Workspaces and Agents tabs and a 4 KB budget. MCP servers on one timetable with a tools drawer.
- Kanban boards list; one board as pinned notes with a dependencies view and a card drawer. Background jobs and workflows with run history.
- Knowledge base: git-backed markdown notes as a file tree with git marks, a block editor with drag and nesting, `[[links]]`, tags, backlinks and a force graph; set up by picking a folder or cloning a repo and choosing a commit-and-push cadence.

Terminology the product uses: workspace, session, thread, main agent, capsule, permission slip, question sheet, YOLO and Thread YOLO, effort, gauge, skill, MCP server, memory, knowledge base (KB), board, background job, artifact, side chat.

Constraints: the main agent never edits code itself. Memory has a 4 KB budget. Every screen ships in a light and a dark variant.

Undecided or not recorded:

- The production stack of the app. The prototype is static `.dc.html` boards on the DC runtime (`support.js`) and is not the app's code.
- How the browser app reaches local folders, and which integrations ship.
- Pricing, licensing, deployment, backups, multi-user features: nothing is claimed.

## Brand Commitments

- Name: Primepaw. The paw is the app's mark. The main agent is a paper creature (Jarvis, a paper robot dog in the prototype, with a puppy and a cat to pick from), and an agent's portrait is its face as a flat sticker: a drawing with a white die-cut rim and no shadow, never pixel art.
- The paper diorama, built on the Kraft material system under `design-system-kraft/`, is the committed visual language (the prototype's history records "the paper diorama is the only design"). Recorded here as binding and not expanded: the system itself lives in `design-system-kraft/README.md` and belongs to DESIGN.md, not this file.
- Voice, from the Kraft brand book: labels are sentence case and verb first ("New session", "Open folder"); hand-written copy is short and lower case where a person would write it; a sticker carries one word or a number, never a sentence; the agent speaks in the margin, in the first person.

## Evidence on Hand

- 26 screens, each light and dark: the `Diorama*.dc.html` boards in this folder, indexed by `canvas.json` and described in `README.md`. Canvas: https://claude.ai/artifact/KRFPT94y9P7bNHML3wQxis
- The Kraft design system under `design-system-kraft/`: tokens for two themes, the brand book, the material recipes, the component bundle with per-component previews, and 27 single-ink icons. Published at https://claude.ai/artifact/PJrLaykUz6ZwqcxZe7TswV
- Every name, session, ticket, workspace and integration in the boards is demo data (ORB-272, jira.example.com, fleet/infra). There are no real users, usage data, testimonials, press or a shipped build; future work must not fabricate any.

## Product Principles

1. The main agent fronts the work. The developer describes a job and reviews results; sessions are the agent's to start and run.
2. Nothing happens unseen. Every approval, question and YOLO decision is written down where the developer will read it.
3. One desk. Everything an agent needs is in the app and inspectable, never only in files.
4. Knowledge belongs to git. Notes and memory are plain markdown the developer can read, edit and version anywhere.
5. Several sessions, one attention. The interface shows what needs the developer now and lets the rest run.

## Accessibility & Inclusion

- Motion respects `prefers-reduced-motion`. Only a working session's pinwheel and Max effort loop, and nothing pulses.
- White glyphs on identity colours hold 4.5:1 in both themes; the Kraft tokens carry contrast notes.
- Keyboard: arrow keys walk the knowledge-base tree, Tab and Shift+Tab nest list items, Alt+↑↓ moves them, Esc stops voice input, Enter sends.

No formal standard beyond these is confirmed.
