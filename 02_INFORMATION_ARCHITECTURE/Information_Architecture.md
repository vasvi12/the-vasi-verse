# Information Architecture

**Product:** The Vasi Verse
**Version:** 1.0
**Owner:** Vasavi Hegde
**Status:** Locked

---

## Purpose

This document defines the structural organization, navigation hierarchy, user journeys, and relationships between every section within The Vasi Verse. The goal is to create an experience that feels intuitive, premium, and product-oriented.

Users should never wonder: Where am I? What should I click? Where does this lead? Navigation should feel effortless.

## Information Architecture Philosophy

The website should behave like a premium software product. Not a traditional portfolio. Not a blog. Not a resume website. Every click should feel like opening another layer of documentation.

## User Goals

**Primary User (Recruiter):** Understand who Vasavi is, evaluate product thinking, review actual work, access supporting documentation, download resume, contact.

**Primary User (Hiring Manager):** Evaluate PM process, explore product case studies, assess technical depth, verify product documentation, understand decision-making.

**Secondary Users (Engineers, Founders, Designers, Students):** Learn from the documentation.

## Navigation Structure

Top navigation: VH · Builds · Case Studies · Playground · Resume · Connect.

Minimal. Always visible. No dropdown menus. No secondary navigation.

## Website Structure

```
The Vasi Verse
├── Home
├── Builds
│     ├── StudioAI
│     ├── Growth Alpha
│     └── DotRyder
├── Case Studies
│     ├── Spotify
│     ├── Blinkit
│     ├── Uber
│     └── HootMe
├── Playground
│     ├── Malware Detection
│     ├── Attendance System
│     ├── AI Experiments
│     └── Prompt Engineering
├── Resume
└── Connect
```

## Navigation Philosophy

Navigation should remain invisible. Users should naturally understand where to go next. The website should encourage exploration. Never overwhelm users with options.

## Homepage Structure

Hero → Product Overview → Interactive Cards → Footer. Nothing else. The homepage introduces. It never explains everything.

## Hero

Purpose: Communicate identity immediately. Contains: Website Title, Professional Identity, One-line Product Statement, Explore CTA.

## Product Overview

Purpose: Quick understanding. Contains: Status, Owner, Version, Location, Mission, Category. Presented like product metadata.

## Interactive Cards

Three primary cards:

- **BUILDS** — Things I've built. → Work Documentation (Notion)
- **CASE STUDIES** — How I think. → Product Case Studies (Notion)
- **PLAYGROUND** — Experiments & Technical Work → GitHub Projects

Cards act as gateways. They are not destinations.

## Builds

Purpose: Show real work. Contains StudioAI, Growth Alpha, DotRyder. Each card includes Project Name, Subtitle, Role, Status, Year, Preview Image, View Documentation. Clicking opens a dedicated Notion page. Never display the full documentation on the website.

## Case Studies

Purpose: Demonstrate PM thinking. Contains Spotify, Blinkit, Uber, HootMe. Each follows the same card structure. Clicking opens a dedicated Notion page.

## Playground

Purpose: Show technical depth. Contains technical projects, AI experiments, automation, open-source work. Every card links directly to GitHub.

## Resume

Purpose: Provide downloadable professional resume. Contains Resume Preview, Download Button, LinkedIn, Email. No unnecessary information.

## Connect

Purpose: Allow recruiters to contact Vasavi. Contains Email, LinkedIn, GitHub, Portfolio, optional contact form. Minimal.

## User Journey

Recruiter lands → reads Hero → reads Product Overview → clicks Builds → chooses StudioAI → opens Notion → reads PRD → returns → downloads Resume → connects. Ideal journey.

## Card Navigation

Cards should never feel like buttons. They should feel like products. Hover → metadata appears → accent line animates → cursor changes → click → smooth transition → destination opens.

## External Links

External destinations include Notion, GitHub, LinkedIn, Resume. Whenever opening an external platform, open in a new tab. Never interrupt the browsing experience.

## Content Ownership

- **Website:** Preview, navigation, brand, storytelling.
- **Notion:** Documentation, research, PRDs, wireframes, roadmaps, interview notes, artifacts.
- **GitHub:** Code, projects, experiments, repositories.

## Page Relationships

Website → Preview → Documentation → Evidence → Recruiter Decision. Every page should move users closer to evidence.

## Navigation Rules

Every page accessible within two clicks. No hidden pages. No dead ends. Every section should link back to Home. Resume always accessible. Connect always accessible.

## Future Scalability

Architecture should support future additions (New Products, New Case Studies, Articles, Product Reviews, Speaking, Open Source) without redesigning navigation.

## Accessibility

Keyboard navigation supported. Visible focus indicators. Logical tab order. Screen-reader friendly. Navigation labels remain descriptive.

## SEO Structure

Every page should have a unique title, unique description, semantic headings, and meaningful URLs. Examples: /builds, /builds/studioai, /case-studies, /playground, /resume, /connect.

## Acceptance Criteria

Users understand the website structure within 30 seconds. Navigation remains intuitive. Every interaction leads to meaningful content. Website stays minimal despite future growth. No section exists without purpose.

## North Star

The website should feel like opening the documentation portal of a premium product company. Users should never think: "This is another portfolio." Instead they should think: "This feels like a product."

---

End of Document
