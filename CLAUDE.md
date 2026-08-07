# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this is

A static, dependency-free website (no build step, no framework) for The Vasi Verse — Vasavi Hegde's product-style portfolio. Plain HTML/CSS/JS only.

## Source of truth

`docs/00_PROJECT_BRIEF/Implementation_Decisions.md` is LOCKED and overrides every other document if there's a conflict. Read it first. In order of authority:

1. `docs/00_PROJECT_BRIEF/Implementation_Decisions.md` — locked decisions, takes precedence over everything below.
2. `docs/00_PROJECT_BRIEF/Design_Principles.md` — the 20 non-negotiable design principles. When a design choice is ambiguous, these decide it, not aesthetics or trends.
3. `docs/01_BRAND/` — Brand Guidelines, Colors, Typography, Motion. These are LOCKED token values; `css/style.css` implements them exactly.
4. `docs/02_INFORMATION_ARCHITECTURE/Information_Architecture.md` — site structure, navigation, page relationships.
5. `docs/03_PRDS/` — one PRD per page (Home, Builds, Case Studies, Playground, Resume, Connect).
6. `docs/04_DESIGN/` — one `.fig.md` design spec per page, with exact layout, spacing, and copy.

Do not redesign anything in `docs/` unless explicitly asked. If a page's implementation seems to disagree with its PRD/design doc, the docs win — fix the code, don't reinterpret the doc.

## Repo layout

- `index.html`, `builds.html`, `case-studies.html`, `playground.html`, `resume.html`, `connect.html`, `404.html` — the site, one file per page. Each duplicates the same `<nav>` and `<footer>` markup (no templating system exists) — when editing nav/footer, update all seven files identically.
- `css/style.css` — single design-system stylesheet. CSS custom properties in `:root` hold every locked color/spacing/motion token. Component classes (`.card`, `.editorial-row`, `.meta-panel`, `.chip`, `.pill`, `.timeline`, etc.) are shared across pages — prefer reusing an existing class over inventing a new pattern.
- `js/main.js` — vanilla JS, no dependencies: nav scroll state, mobile nav toggle, hero entrance animation (plays once per `sessionStorage` key per page), IntersectionObserver-based scroll reveal (`[data-reveal]`), smooth-scroll for in-page anchors, and the Connect page's mailto-based contact form. Respects `prefers-reduced-motion` throughout.
- `assets/` — SVG illustrations (abstract, dark, generated to match the brand palette — never stock photography, per Brand Guidelines), the favicon, and resume files.
- `docs/` — the locked planning documents described above. Treat as read-only reference unless the user asks to change product direction.

## Known placeholders

Per Implementation Decision 6/7, some links are intentionally placeholder until Vasavi fills them in. They're marked with `<!-- TODO: ... -->` comments in the HTML:

- Notion documentation links (`builds.html`, `case-studies.html`) → `https://notion.so`
- LinkedIn → `https://www.linkedin.com`
- Playground GitHub repo links → `https://github.com/vasvi12` (profile, not per-repo)
- `assets/resume/resume-placeholder.pdf` — a minimal generated placeholder PDF, not the real resume

Don't "fix" these by inventing specific URLs — leave the TODO markers for Vasavi to fill in with real links.

## Conventions to follow when editing

- No build tooling, no npm dependencies, no bundler. Keep it that way.
- New sections need a reason: re-read Design Principle 19 ("Every Section Must Earn Its Place") before adding one.
- Motion timings are locked (`docs/01_BRAND/Motion.md`): 250ms micro-interactions, 450ms card interactions, 600ms scroll reveals, 700ms page-level transitions, 900ms hero entrance only. Use the existing `--dur-*` and `--ease-*` custom properties rather than new values.
- Never add a custom cursor (Locked Decision 3).
- Small accent text/links use `--color-accent-hover` (`#6B98C4`), not `--color-accent`, for contrast (Locked Decision 4).
- Every internal link must resolve to a real page in this repo — no dead ends, no placeholder pages (Navigation Rules in the IA doc). External placeholders (Notion/LinkedIn/GitHub) are the one sanctioned exception, and only because Decision 6 explicitly allows it.

## Testing changes

There's no test suite. To verify a change:

```bash
python3 -m http.server 8000
```

Then check the page in a browser at a few widths (mobile ~390px, tablet ~768px, desktop 1440px), and confirm `js/main.js` has no console errors.
