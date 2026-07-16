# Project Memory

This file stores durable project facts for future sessions: what the project is, where materials live, what decisions were made, and what remains unresolved. Do not store secrets, tokens, passwords, or private credentials here.

## How To Use This Memory

- Read this file at the start of each session before changing the site.
- Add one short entry when the user corrects a process or makes a durable project decision.
- Keep source materials in `all docs for project/` unless the user explicitly approves publishing selected assets.
- If this file becomes too large, split topic notes into separate files under `memory/` and link them here.

## Project

**Working title:** `Урсула: 3D-игры`.

**Purpose:** static course website for students in grades 5-7 learning to create 3D games in the «Урсула» constructor and program interactive objects/NPC behavior with the visual language ПРИМС.

**Audience:** students in grades 5-7, mentors, teachers, and beginners without confident programming experience.

## Pedagogical Direction

ПРИМС should be explained visually: through states, transitions, events, actions, small diagrams, icons, and screenshots. Text commands are acceptable only as explanations around a visual diagram, not as the main teaching format.

## Course Structure

1. Introduction to the «Урсула» constructor.
2. Scene, models, and game roles of objects.
3. ПРИМС: states and transitions.
4. Simple behavior recipes for NPCs and interactive objects.
5. Analysis of the finished game `Опасные яблоки`.

## ПРИМС Recipe Topics

- NPC stands and shows text.
- NPC waits 3 seconds and changes state.
- NPC walks to a random point.
- NPC searches for the player in a radius.
- NPC moves toward the player.
- NPC loses the player and returns back.
- NPC switches an indicator: green/red.
- NPC plays a sound.
- NPC opens a door or activates an object.
- NPC attacks the player or target.
- NPC counts collected items.
- Game ends with victory or defeat.

## Dangerous Apples Example

Game: `Опасные яблоки`.

Diagram/screenshot names:

- `ezh_198`
- `guard_198`
- `green_apple_198`
- `red_apple_198`
- `gold_key_198`
- `button_198`
- `gate_1_198`
- `gate_2_198`
- `winpoint_198`

Key variables:

- `know_key`
- `has_key`
- `has_apple`
- `ezh_fed`
- `btn_active`
- `gate_open`

## Paths And Materials

- Main site: `C:\Users\Dasha\Documents\my programs`.
- Incoming materials for analysis: `C:\Users\Dasha\Documents\my programs\all docs for project`.
- `all docs for project/` is ignored by Git and should not be published by default.
- Published screenshots for `Опасные яблоки` live in `assets/img/diagrams/` and are referenced by `lessons/dangerous-apples.html`.
- Raw incoming materials still live in `all docs for project/` and remain ignored by Git.
- GraphML diagrams were read from `C:\Users\Dasha\Documents\Берлога\3D-игры\Диаграмы для игр\198`.

## External Sources

- Мастерская игр «Урсула»: https://games.kruzhok.org/
- ПРИМС module configuration: https://games.kruzhok.org/prims_cfg
- Cyberiada Graph Editor: https://games.kruzhok.org/cyberiada-graphml/
- ПРИМС on «Берлога»: https://platform.kruzhok.org/programming
- Technical module wiki: https://wishmaster2310.github.io/cocos_ursula_wiki/

## Current Site Decisions

- The site is static HTML/CSS with a small JS file for the mobile menu.
- There is no build system and no runtime dependency stack.
- Educational examples should be visual.
- Real diagrams are shown as screenshots.
- Recipe diagrams are represented as HTML/CSS visual diagrams with module icons where possible.
- The visual style should stay calm and clear, without overloaded UI.

## Repository And GitHub

- GitHub account: https://github.com/DGubar
- Repository: https://github.com/DGubar/ursula-junior
- Branch: `main`.
- Initial commit: `03bd4c8 Initial Ursula course site`.
- Remote push succeeded.
- GitHub CLI was installed, but `gh auth login` did not persist in the active session.
- Git Credential Manager handled push authentication.

## Open Questions

1. What final course title should be used?
2. How many hours or lessons is the course designed for: 36, 72, or another format?
3. Should the course support independent student study, mentor-led classes, or both?
4. Are separate teacher pages needed: goals, equipment, lesson flow, assessment criteria?
5. Should selected screenshots/PDFs/diagrams be copied into versioned site assets, or only referenced locally from `all docs for project/`?
6. What is the final student project: reproduce `Опасные яблоки`, make a game from a template, or create an original project?
7. Should the site include a section about common mistakes in ПРИМС diagrams?
8. Can official icons from `games.kruzhok.org/prims_cfg` be used directly, or should local copies be saved?
9. Should the course later be formatted as a printable/PDF manual?
10. Which materials are internal and must never be published to GitHub?

## Approved Harness Adaptation

The user approved adapting only these harness-starter ideas:

- Project memory.
- Handoff workflow.
- Russian text workflow.

Do not install harness-starter, copy its full skill set, or change global tool configuration without explicit approval.

## Next Useful Steps

- Keep future publishable screenshots in versioned folders under `assets/img/` instead of linking directly to `all docs for project/`.
- Add more real «Урсула» interface screenshots.
- Add practice lesson pages with expected result and assessment criteria.
- Continue replacing text-like pseudo-commands in recipes with visual diagrams.
- Create a dedicated reference page for each frequently used ПРИМС module.
