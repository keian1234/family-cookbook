# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static, no-build family recipe site (plain HTML/CSS/JS, no framework, no package.json, no dependencies). Deployed via GitHub Pages from the `main` branch root at https://keian1234.github.io/family-cookbook/ — pushing to `main` is the deploy step.

## Running locally

There is no build step. Either:
- Open `index.html` directly in a browser, or
- Serve the directory so relative image paths resolve cleanly: `python3 -m http.server 8000` from the project root, then visit `http://localhost:8000/index.html`.

There is no lint/test/build tooling in this repo. Sanity-check JS syntax with `node --check app.js` (or `recipes.js`) after edits — there's no other automated check.

## Architecture

Four files load as plain `<script>`/`<link>` tags in `index.html`, no bundler or modules:

1. **`recipes.js`** — defines a single global `const RECIPES = [...]` array. This is the entire data layer. Each recipe object has: `id`, `title`, `sourceUrl`, `image` (path under `images/`, or a remote URL for one legacy entry), `category[]`, `cuisine[]`, `season[]`, `status` (`"Made"` | `"Favorite"` | `"New"` | `null`), `tags[]`, `rating` (1-5 or `null`), `time`, `servings`, `steps[]`, and `ingredients` — either a flat `string[]` or, for recipes with sub-recipes (e.g. burger + sauce), an array of `{ group, items }` objects. `app.js` branches on `typeof ingredients[0]` to detect which shape it's looking at. To add a recipe, append an object matching this schema; no other file needs to change.

2. **`app.js`** — reads the `RECIPES` global and does everything else: renders the filter panel, search, recipe grid, and modal. Filter UI is data-driven: `FILTER_GROUPS` at the top of the file lists which recipe properties get a pill row (category, cuisine, season, status, tags), and the actual pill values for each are computed at render time from whatever's present in `RECIPES` — adding a new category/cuisine/tag value to a recipe automatically produces a new filter pill with no code change. Filtering logic is OR within a property group, AND across groups, combined with the text search. Rating is a separate "at least N stars" filter, not part of `FILTER_GROUPS`. The filters panel is collapsible; its open/closed state is persisted to `localStorage` and the collapsed panel is set `inert` (not just visually hidden) so keyboard/screen-reader focus can't land on hidden filter pills.

3. **`index.html`** — the DOM skeleton `app.js` binds to via `getElementById`. The element IDs are a contract between the two files (`search`, `filter-groups`, `filters-toggle`, `filters-toggle-group`, `filters-collapse`, `filters-heading`, `clear-filters`, `result-count`, `recipe-grid`, `empty-state`, `modal-overlay`, `modal-content`, `modal-close`) — if you rename/remove one in `index.html`, update the matching `getElementById` call in `app.js`, and vice versa.

4. **`style.css`** — theme lives in `:root` custom properties (terracotta/cream/olive base palette, plus `--cuisine`/`--season`/`--favorite` accent colors used to color-code the different pill types: `pill-category`, `pill-cuisine`, `pill-season`, `pill-tag`, `filter-pill-<key>`, `badge-rating`, `badge-status`). Class names are generated inside `app.js` template strings, so a renamed class needs updating in both files.

## Adding recipes

When adding a new recipe that has a `sourceUrl`, fetch that page first and use it to fill in as many schema fields as possible — `time`, `servings`, `cuisine`, `category`, `ingredients`, `steps` — before asking the user. Only ask the user for fields the source page can't answer (e.g. `status`, `rating`, `season`, personal `tags` like "Meal Prep" or "Football") or fields the source leaves ambiguous. For a recipe with no `sourceUrl` (a family recipe with no link), ask the user for the data-dependent fields instead of guessing.

## Images

`images/` holds locally-hosted JPGs referenced by `recipes.js`'s `image` field (paths, not URLs). They were converted/resized from a Notion export via macOS `sips` (not committed as a script — a one-off conversion, not part of the app). One legacy recipe still points at a remote hotlinked image URL instead of a local file.
