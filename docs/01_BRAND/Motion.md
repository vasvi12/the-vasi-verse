# Motion System

**Product:** The Vasi Verse
**Version:** 1.0
**Owner:** Vasavi Hegde
**Status:** Locked

---

## Purpose

Motion exists to create continuity, improve navigation, reinforce hierarchy, and provide meaningful feedback. Motion should never exist simply to make the interface appear modern. The website should feel calm, premium, and intentional. Every movement should communicate confidence. Users should never notice animations. They should simply feel that everything flows naturally.

## Motion Philosophy

Motion is navigation. Motion is hierarchy. Motion is feedback. Motion is storytelling. Motion is never decoration. Every animation should answer one question: "Why is this moving?" If there is no answer, the animation should be removed.

## Motion Inspiration

Primary inspiration: Rossinavi (cinematic transitions), HUTS (elegant card interactions), Apple (restrained microinteractions), Linear (subtle responsiveness), Vercel (purposeful transitions). Do NOT imitate. Capture the feeling.

## Overall Motion Personality

Slow, Calm, Elegant, Confident, Premium, Natural, Minimal, Editorial. Never Flashy, Playful, Over-animated, Elastic, or Chaotic.

## Global Motion Rules

Every interaction should feel physically believable. Avoid exaggerated scaling. Avoid large rotations. Avoid bouncing. Avoid overshooting. Avoid unnecessary movement. Movement should support the user's attention.

## Animation Timing

| Type | Duration | Examples |
| --- | --- | --- |
| Micro Interaction | 250ms | Hover, buttons, links |
| Card Interaction | 450ms | Card hover, image reveal, card expansion |
| Page Transition | 700ms | Opening Builds / Case Studies / Playground, navigation |
| Hero Entrance | 900ms | Only on first page load. Never replay. |
| Scroll Reveal | 600ms | Each section appears smoothly. Never abruptly. |
| Loading Transition | 500ms | Minimal fade only. |

## Easing

Primary: ease-in-out. Secondary: ease-out. Never use bounce easing. Never use elastic easing. Never use playful motion curves.

## Hover Behavior

Hover should provide confidence. Never surprise.

- **Buttons:** Background transitions, slight lift 2px, duration 250ms.
- **Cards:** Background becomes slightly brighter, border opacity increases, shadow becomes slightly stronger, card lifts 4px, image zooms 1.02x, arrow shifts 4px. Nothing else moves.
- **Navigation:** Underline fades in, text opacity increases, duration 250ms.

## Cursor

The system uses the default native cursor. No custom cursor is used. (Locked Decision 3 — the custom cursor has been removed.)

## Page Transitions

The website should feel continuous. Users should never feel that pages abruptly disappear. When entering a new section: fade current content → slide upward → fade next content → complete. Duration 700ms, movement 16px, opacity 0 → 100. No horizontal sliding.

## Hero Animation

Only on first visit. Sequence: Logo → Headline → Subheading → Product Overview → Three Interactive Cards. Each element appears with 100ms stagger. Never replay after refresh.

## Scroll Animations

Elements should not fly in. Instead: fade + move upward 12px, duration 600ms, opacity 0 → 100. Never rotate. Never bounce.

## Interactive Cards

Inspired by HUTS. Cards are the primary interaction. Every card should feel tactile.

Hover → card elevates → background image brightens slightly → title shifts upward → metadata fades in → arrow animates.

Click → entire card expands slightly → page fades → destination appears. The transition should feel like entering another chapter.

## Image Behavior

Images never animate independently. They move only as part of the card. Hover: scale 1.02, brightness +5%, duration 450ms.

## Text Animation

Headings: fade only. Never slide more than 8px. Paragraphs: fade. No typing animation. No scrambling text. No word-by-word animation. Typography should feel calm.

## Navigation Behavior

Navigation remains minimal. No sticky animated menus. No floating buttons. Logo VH always visible. Navigation links fade between pages. No dramatic transitions.

## Footer

When reaching footer: fade in, large typography appears, button fades. Nothing slides dramatically. The ending should feel calm.

## Scroll Speed

Scrolling should feel natural. No scroll hijacking. No forced storytelling. Allow users complete control. Support smooth scrolling. Never interrupt.

## Focus States

Keyboard users must receive visible focus indicators. Focus rings should use Accent Blue. Animation 150ms. Accessible. Subtle.

## Mobile Motion

Reduce movement by 30%. Keep timing consistent. Avoid complex transitions. Maintain responsiveness. Performance takes priority.

## Reduced Motion Support

Respect operating system preferences. If "Reduce Motion" is enabled, disable large transitions, parallax, and fade delays. Maintain usability.

## Motion Hierarchy

- **Highest Motion:** Page transitions, interactive cards, hero.
- **Medium Motion:** Buttons, links, images.
- **Lowest Motion:** Typography, metadata, icons.

## Performance Budget

Animations must maintain 60 FPS. No animation should block interaction. GPU accelerated transforms only. Prefer transform and opacity. Avoid animating width, height, top, left, margin whenever possible.

## Acceptance Criteria

Motion should never delay navigation. Animations should never distract from content. Every interaction should reinforce hierarchy. The website should feel premium without appearing over-designed. Users should remember the experience, not the animation.

## Final Motion Principle

The best compliment for this website is not: "That animation was amazing." The best compliment is: "I didn't notice the animations. Everything just felt incredibly smooth." That is the standard for every interaction within The Vasi Verse.

---

End of Document
