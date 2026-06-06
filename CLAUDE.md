# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

IRIS-X™ v12.0 is a **static documentation site** for a proprietary trading/market-analysis system built by RI-Ecosys™. It is pure HTML/CSS/vanilla JavaScript (ES6 modules) with zero build dependencies.

## Running Locally

```bash
python3 -m http.server 8001
# Open http://localhost:8001
```

ES6 `import` statements require a server — opening `index.html` directly as a `file://` URL will fail with CORS errors on module loads.

There are no tests, no linter, no CI pipeline, and no build step.

## Architecture

### Entry Point & Module Loading

`index.html` is the single entry point. It renders a navigation bar and two containers:
- `#irisx-doc-root` — receives dynamically loaded doc-module panels
- `#ix-sections-container` — holds the 11 inline content sections

The key runtime function is `window.loadDocModule(modulePath, exportName)` (defined inline in `index.html`). It:
1. ES6-imports the module at `modulePath`
2. Reads `module[exportName].metadata` and `module[exportName].content`
3. Renders the content HTML into `#irisx-doc-root`, adding a TOC and a return button

### Doc Modules (`doc-modules/`)

Each file exports a named object with two fields:

```js
export const myModuleName = {
  metadata: { title, version, lastUpdated, description },
  content: `<html string>`   // full rendered HTML, no Markdown
};
```

Modules are loaded on demand; they are never bundled or pre-loaded. The `demo.js` module is the largest (24 KB) and implements an 8-screen tabbed walkthrough with real case-study data.

### CSS

Two stylesheets, intentionally separate:
- `css/irisx-docs.css` — header, navigation cards, footer, dashboard layout, CSS variables
- `css/doc-modules-styles.css` — typography, accordion, TOC, tables, callouts inside loaded modules

All CSS variables are defined in `:root` inside `irisx-docs.css`. Dark mode is driven by `prefers-color-scheme` media queries; the JS toggle adds/removes a `data-theme` attribute on `<html>`.

### Bilingual Support (EN/VI)

Language switching is CSS-only. The `<body>` carries `data-lang="en"` or `data-lang="vi"`. Elements that need translation have both languages in the DOM, hidden/shown via:

```css
[data-lang="en"] .lang-vi { display: none; }
[data-lang="vi"] .lang-en { display: none; }
```

The toggle button in the header sets `document.body.dataset.lang` and updates its own label.

### Reference Markdown (`glossary/`)

The three `.md` files in `glossary/` are **not loaded or rendered by the UI**. They are source-of-truth reference documents used when authoring module content. Do not add import logic for them without an explicit request.

## Conventions

- **Content lives in JS modules as HTML strings.** Do not add a Markdown renderer; all new content sections should follow the existing `export const … = { metadata, content }` pattern.
- **No external dependencies.** Do not introduce npm, a bundler, or any CDN-linked library.
- **Inline styles are acceptable** in module content strings when the style is specific to a single element; shared styles belong in `doc-modules-styles.css`.
- **Image files** go in `images/`; reference them with relative paths from `index.html` (e.g. `images/Screen1.jpeg`).
- The `modules/` directory (`modules/glossary.html`, `modules/js/glossary-init.js`) is legacy code — do not extend it.
