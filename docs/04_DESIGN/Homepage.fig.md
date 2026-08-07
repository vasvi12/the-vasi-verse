# Homepage.fig

**Version:** 1.0
**Status:** Design Locked
**Desktop First (1440px)**

---

## Philosophy

The homepage has one job. Not to explain everything. Not to show everything. Its only job is to make a recruiter think: "I need to explore this." The first 10 seconds decide everything.

## Canvas

Frame: Desktop 1440 × Auto Height.

## Grid

12 Column Grid. Margins 120px. Gutter 24px. Max Content Width 1200px. Everything aligns to this. Nothing breaks the grid.

## Background

Solid #080B12 + very subtle radial gradient, top right, opacity 6%, blur large. Almost invisible. No noise. No textures.

## Navigation

Height 72px. Width 100%. Padding 40px 120px.

Left: VH — Geist, 22px, SemiBold, White. Hover Accent Blue.

Right: Builds · Case Studies · Playground · Resume · Connect — Inter, 15px, Medium, spacing 36px. Hover: Text → Accent Blue → tiny underline animation. Nothing else.

## Hero

Height 100vh. Content centered vertically. Layout 58% / 42%. Left: Content. Right: Metadata Panel.

### LEFT COLUMN

Small Label: THE VASI VERSE — Geist Mono, 14px, letter spacing 12%, Accent Blue. Spacing 24px.

Identity: Founder • Product Manager • Engineer — Inter, 18px, Medium, Muted White. Spacing 48px.

Main Headline: "Building products through customer discovery, technology and execution." — Geist, 72px, Bold, line height 94%, letter spacing -3%, max width 620px. Spacing 40px.

Supporting Text: "I build products, validate ideas, and document the thinking behind every decision. The Vasi Verse is a curated collection of products, case studies and technical explorations." — Inter, 20px, line height 180%, color #94A3B8, max width 560px. Spacing 56px.

CTA: Explore Builds (Filled Button). Secondary: Download Resume (Ghost Button). Buttons: height 52px, gap 16px, radius 14px.

### RIGHT COLUMN

This is our signature. Not cards. Not glass. Documentation.

PRODUCT OVERVIEW — Geist Mono, 12px, Accent Blue, Uppercase. Spacing 40px.

Then:

- STATUS ● Active Development
- VERSION v1.0
- OWNER Vasavi Hegde
- ROLE Founder / Product Manager
- LOCATION Bangalore, India
- MISSION Build products that solve meaningful problems.

Every section separated 32px. Labels: Geist Mono, 12px, Uppercase, Secondary. Values: Inter, 18px, White.

Entire panel: width 380px, padding 40px, radius 24px, background #111827, border rgba(255,255,255,.08).

## Scroll Indicator

Bottom center. Very tiny. "↓ Explore". Opacity 60%. Moves 6px. Loop 3s. Very subtle.

## Transition

Scroll. Hero fades 10%. Metadata shifts upward 12px. Three Cards fade in. Exactly like HUTS.

## Interactive Cards Section

Padding Top 160px. Heading: Explore My Work — Geist, 48px. Subtitle: "Three ways to understand how I think, build and learn." Spacing 72px.

Cards: Three, equal width. Height 560px. Radius 28px. Padding 32px. Gap 32px.

Card Structure: Image 65% → Status Chip → Title → Description → Metadata → Arrow. Everything aligns left.

### BUILDS

Status: LIVE. Title: Builds. Description: "Products I've built, ventures I've launched, and product decisions I've documented." Metadata: 3 Products. Image: Dark AI Dashboard, very premium.

Hover: Image scale 1.02 → Card lift 6px → Shadow increase → Border Accent Blue → Arrow slides 8px.

### CASE STUDIES

Image: Wireframes, Journey Maps, Product Boards. Status: Growing. Metadata: 4 Studies.

### PLAYGROUND

Image: Code, AI, Terminal, Minimal. Status: Always Building. Metadata: Engineering.

## Footer

Massive whitespace. "Let's build something meaningful." — Geist, 56px, Bold. Below: Email · LinkedIn · GitHub — very tiny. Copyright: © 2026 The Vasi Verse.

## Motion

Page Load 900ms. Hover 300ms. Cards 450ms. Transitions 700ms. Never bounce. Never rotate. Never over animate.

## Responsive

Tablet: Hero single column, metadata below; cards 2 → 1. Mobile: Everything single column; typography scales proportionally.

## Accessibility

AA Contrast. Keyboard Support. Focus States. Semantic HTML. Reduced Motion.

## Success Criteria

A recruiter should understand who you are in under 10 seconds, click one of the three cards within 30 seconds, feel that they're exploring a premium product (not a personal website), and leave with the impression that the interface reflects product thinking, not visual excess. This page is where recruiters decide: "Okay, this person has actually built things."

---

End of Document
