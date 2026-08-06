# Color System

**Product:** The Vasi Verse
**Version:** 1.0
**Owner:** Vasavi Hegde
**Status:** Locked

---

## Purpose

This document defines the official color system for The Vasi Verse. Colors are not decorative. Every color must communicate hierarchy, interaction, depth or meaning. The palette should create an atmosphere that feels calm, premium, technical and intentional. The experience should resemble a premium software product rather than a marketing website.

## Color Philosophy

The interface should feel like late-night product discussions, design reviews, a dark IDE, a premium operating system, luxury technology. Not gaming. Not cyberpunk. Not neon. Not glassmorphism. The UI should disappear behind the content.

## Brand Personality Through Color

Professional, Premium, Modern, Minimal, Focused, Confident, Technical, Founder-led.

## Primary Color Palette

### Background — Midnight Canvas
- **HEX:** #080B12
- **Usage:** Entire website background.
- **Purpose:** Creates depth while allowing typography and cards to stand out. Never replace this color.

### Surface — Deep Slate
- **HEX:** #111827
- **Usage:** Navigation, content cards, containers, panels, sections.
- **Purpose:** Separates information from the background.

### Elevated Surface — Graphite Blue
- **HEX:** #1A2233
- **Usage:** Hover state, expanded cards, interactive panels, selected items.
- **Purpose:** Communicates elevation. Never use as page background.

### Primary Typography — Cloud White
- **HEX:** #F8FAFC
- **Usage:** Headings, titles, navigation, buttons, hero.
- **Purpose:** Maximum readability.

### Secondary Typography — Slate Grey
- **HEX:** #94A3B8
- **Usage:** Descriptions, metadata, labels, supporting copy.
- **Purpose:** Reduce visual noise while maintaining readability.

### Accent — Steel Blue
- **HEX:** #4A7BA7
- **Usage:** Buttons, links, interactive indicators, hover accents, small highlights.
- **Purpose:** Primary brand color. Should appear sparingly. Users should notice it. Never overwhelm the interface.

### Accent Hover — Sky Steel
- **HEX:** #6B98C4
- **Usage:** Hover state only. Never used as a permanent UI color.

## Borders

- **Soft Border:** rgba(255,255,255,0.08)
- **Usage:** Cards, navigation, inputs, dividers.
- **Purpose:** Separate without creating visual clutter.

## Status Colors

These colors communicate system status. They are NOT branding colors.

- **Success — #22C55E:** Completed, Validated, Live.
- **Warning — #F59E0B:** Beta, Prototype, In Progress.
- **Error — #EF4444:** Errors, Failed states. Never used decoratively.
- **Information — #3B82F6:** Information banners, System notices. Used sparingly.

## Interactive States

**Buttons:** Default Steel Blue → Hover Sky Steel → Pressed darken by 8% → Disabled 40% opacity.

**Cards:** Default Deep Slate → Hover Graphite Blue → Active Graphite Blue + Accent Border.

**Navigation:** Default Slate Grey → Hover Cloud White → Active Steel Blue underline.

**Links:** Default Cloud White → Hover Steel Blue → Visited Cloud White. Maintain consistency.

## Card Layering

Background → Surface → Elevated Surface → Accent. Users should immediately understand interaction hierarchy through brightness.

## Shadows

Never black shadows. Always use blue-tinted shadows.

- **Small:** 0 8px 24px rgba(0,0,0,0.18)
- **Medium:** 0 16px 48px rgba(0,0,0,0.24)
- **Large:** 0 24px 64px rgba(0,0,0,0.30)

Purpose: Create depth. Never drama.

## Opacity System

- Disabled 40%
- Muted 60%
- Secondary 75%
- Primary 100%

Maintain consistency across all components.

## Gradients

Use gradients sparingly. Only for hero backgrounds, card overlays, image overlays. Never for buttons, typography, navigation, cards.

- **Primary Gradient:** #080B12 → #111827
- **Accent Gradient:** #1A2233 → #4A7BA7 (10–15% opacity)

Very subtle. Almost invisible.

## Color Accessibility

Maintain WCAG AA minimum. Prefer AAA whenever possible. Never use low contrast combinations. Every text element must remain readable.

## Color Usage Rules

Accent Blue should never exceed 10% of the visible interface. Whitespace (negative space) should remain visually dominant. Typography should remain the strongest visual element. Color should guide interaction. Not demand attention.

## Psychological Intent

The palette should make users feel focused, calm, confident, curious, inspired, professional. It should never feel playful, aggressive, loud, corporate, or over-designed.

## Design Validation Checklist

Before introducing any new color ask: Does it improve hierarchy? Does it communicate interaction? Does it strengthen readability? Does it support the premium aesthetic? If the answer is no, do not add the color.

## North Star

The ideal user never consciously notices the color palette. Instead they simply think: "This feels premium." That is success.

---

End of Document
