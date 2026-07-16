---
name: handoff
description: Use when the user asks to make a handoff, transfer work to the next session, save session state, preserve context, or mentions /handoff.
---

# Handoff

Use this skill when ending a session or preparing context for the next agent run.

## File

Create a handoff in `handoffs/<YYYY-MM-DD>-<short-slug>.md` at the project root.

If `handoffs/` does not exist, create it. If the target file already exists, add a numeric suffix and never overwrite an older handoff.

## Format

Use these sections:

1. **Objective:** what the user is trying to achieve.
2. **Current State:** what exists now and which files matter.
3. **Completed:** what changed in this session.
4. **Decisions:** durable user or project decisions.
5. **Blocked / Open Questions:** what needs user input.
6. **Next Step:** the single best next action.
7. **Memory Refs:** relevant facts from `memory/MEMORY.md`.
8. **Suggested Skills:** likely useful skills for the next session.
9. **Verification:** commands run or checks still needed.

## Rules

- Keep it factual and brief.
- Mention exact file paths for changed or important files.
- Do not include secrets or private credentials.
- If raw materials are involved, say whether they are ignored by Git or safe to publish.
- If Git was used, include branch, status, commit hash, and remote only when relevant.
- After writing the handoff, return the absolute file path to the user.
