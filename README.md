# The Vasi Verse

The Vasi Verse is Vasavi Hegde's product-style portfolio — a static, dependency-free website documenting her work, product thinking, and technical experiments.

Live structure, brand system, and page-by-page specs are locked in [`docs/`](docs). This README covers how to run and maintain the built site.

## Structure

```
the-vasi-verse/
├── index.html          Home
├── builds.html          Builds — StudioAI, Growth Alpha, DotRyder
├── case-studies.html    Case Studies — Spotify, Blinkit, Uber, HootMe
├── playground.html      Playground — technical experiments timeline
├── resume.html           Resume preview + download
├── connect.html          Contact
├── 404.html              Not found page
├── css/style.css         Design system (tokens, components, layout)
├── js/main.js            Nav, scroll reveal, hero entrance, contact form
├── assets/               SVG illustrations, favicon, resume files
└── docs/                 Locked product brief, brand system, IA, PRDs, design specs
```

No build step. No framework. No dependencies. Open any `.html` file directly, or serve the folder with any static file server.

## Running locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Before deploying — replace placeholders

Per `docs/00_PROJECT_BRIEF/Implementation_Decisions.md` (Locked Decisions 6–7), Notion documentation links and some contact links are intentional placeholders. Search for `TODO` comments across the HTML files and update:

- **Notion documentation links** (`https://notion.so`) on `builds.html` and `case-studies.html` — point each to its real Notion page.
- **LinkedIn URL** (`https://www.linkedin.com`) — every page's footer/contact links use a generic placeholder.
- **GitHub repository links** on `playground.html` — currently point to the profile (`https://github.com/vasvi12`); link each experiment to its actual repo.
- **Resume PDF** (`assets/resume/resume-placeholder.pdf`) — replace with the real resume, keeping the same filename or updating the references in `resume.html`.

Email and the GitHub profile link are already filled in with real values.

## Design system

Colors, typography, motion timing, and spacing are locked in `docs/01_BRAND/`. Do not introduce new colors, fonts, or animation curves without updating those documents first — `css/style.css` is written to track them exactly.

## Browser support

Modern evergreen browsers. Respects `prefers-reduced-motion`. No JavaScript is required to read any page — `js/main.js` only adds nav behavior, scroll reveal, and the hero entrance animation.
