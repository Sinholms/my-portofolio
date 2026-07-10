---
name: Muhammad Falih Akbar — Portfolio
description: A neobrutalist single-page developer portfolio — bold, confident, playful, with structure underneath the loudness.
colors:
  primary: "#FF6B2C"          # Ember Orange
  accent-2: "#00C9A7"         # Tide Teal
  accent-3: "#FF2E6C"         # Hot Rose
  accent-4: "#7B2FF7"         # Electric Violet
  accent-5: "#FFB800"         # Sunbeam Yellow
  neutral-bg: "#FFF5EB"       # Cream base
  surface: "#FFFFFF"          # Card surface
  cream: "#FFE8D0"            # Tint panel
  dark: "#141428"             # Indigo void (dark sections)
  border: "#1a1a1a"           # Ink border / shadow
  text: "#1a1a1a"             # Ink text
  muted: "#404040"            # Secondary text
typography:
  display:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 6vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.22em"
    textTransform: "uppercase"
  control:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    letterSpacing: "0.04em"
    textTransform: "uppercase"
rounded:
  none: "0px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.text}"
    rounded: "{rounded.none}"
    padding: "10px 20px"
  button-primary-hover:
    backgroundColor: "#FF8A55"
    textColor: "{colors.text}"
    rounded: "{rounded.none}"
    padding: "10px 20px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.none}"
    padding: "10px 20px"
  button-accent:
    backgroundColor: "{colors.accent-2}"
    textColor: "{colors.text}"
    rounded: "{rounded.none}"
    padding: "10px 20px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.none}"
    padding: "24px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
---

# Design System: Muhammad Falih Akbar — Portfolio

## 1. Overview

**Creative North Star: "The Bold Blueprint"**

This is neobrutalism with discipline: a confident, engineered poster system where every block is load-bearing. Hard ink borders and solid offset shadows give the page a printed, tactile weight, while a five-acid accent palette over a warm cream base keeps it playful rather than corporate. Structure sits underneath the loudness — the grid is intentional, the spacing breathes, and the motion is choreographed, not scattered. The site itself is the strongest proof of frontend ability, so the visual system must read as "real, serious, and recruiter-ready" within two minutes of arrival.

The system explicitly rejects what PRODUCT.md calls out as anti-references: generic corporate-minimal SaaS portfolios that all look like the same template; bland "modern" beige placeholders with no point of view; cartoonish / hand-drawn doodle illustrations passed off as personality; and muted, washed-out palettes that drain the energy out of the page.

**Key Characteristics:**
- Square corners everywhere (radius 0); hardness is the signature, never softness.
- Solid, zero-blur offset shadows in ink (#1a1a1a) — they are structure, not glow.
- One family (Space Grotesk) carried in multiple weights; hierarchy comes from size, weight, and color, not a second typeface.
- A committed five-accent palette over a cream base; color is used decisively, not sparingly.
- Bordered "kicker" badges open every section — a deliberate brand system, not AI scaffolding.
- Framer Motion entrance choreography on load and on scroll-into-view, with `prefers-reduced-motion` honored globally.

## 2. Colors

The palette is committed and playful: a warm cream canvas, an ink backbone, and five saturated accents that each own a region of the page. Neutrals are warm-tinted, never blue-gray.

### Primary
- **Ember Orange** (#FF6B2C): The lead voice. Primary buttons, the hero name accent, key highlights, scrollbar thumb, and selection. Used where you want the eye to land first.

### Secondary
- **Tide Teal** (#00C9A7): The calm counterweight. Accent buttons, "Open to roles" / status chips, secondary highlight blocks, and the teal offset shadow on dark cards.
- **Hot Rose** (#FF2E6C): The loud punctuation. Danger/error states, "Featured collaboration" tags, bullet markers, and accent blocks that need to pop.

### Tertiary
- **Electric Violet** (#7B2FF7): The focus and contrast color. Focus rings (`outline`), kicker badges on the hero/about, and dark-section accents. Also the `:focus-visible` outline color everywhere.
- **Sunbeam Yellow** (#FFB800): The highlight accent. Kicker badges (Skills), inline text highlights, and small decorative fills.

### Neutral
- **Cream Base** (#FFF5EB): The page background. Never replaced by white for full-page surfaces.
- **Card Surface** (#FFFFFF): Card and panel fills; the only place pure white appears.
- **Tint Panel** (#FFE8D0): Secondary panel tint (contact section, "What HRD can expect" box, tag backgrounds on hover).
- **Indigo Void** (#141428): Dark sections and dark cards (About facts, workflow strip). Carries white text.
- **Ink Border / Shadow** (#1a1a1a): Every border, the shadow color, and body text.
- **Ink Text** (#1a1a1a): Primary text on light surfaces.
- **Secondary Text** (#404040): Supporting copy, labels, muted descriptions. Must hold ≥4.5:1 on cream — verified; do not lighten further.

### Named Rules
**The One Accent Per Block Rule.** A given block commits to ONE accent role (its border-top, icon tile, or shadow). Mixing two accents inside one card reads as noise; rotate the accent between sibling blocks instead.

**The Cream Base Rule.** Full-bleed page backgrounds are Cream (#FFF5EB). White (#FFFFFF) is reserved for cards and panels that sit on top of the cream. A white page background is a bug, not a choice.

**The Saturated, Not Washed Rule.** Every accent is high-chroma and unapologetic. Never desaturate an accent "for elegance" — that is the muted-palette anti-reference. If contrast demands adjustment, shift lightness, not chroma.

## 3. Typography

**Display Font:** Space Grotesk (with `system-ui, sans-serif` fallback)
**Body Font:** Space Grotesk (with `system-ui, sans-serif` fallback)
**Label/Mono Font:** Space Grotesk (uppercase, tracked) — no second family is used.

**Character:** A single geometric grotesk carries the entire voice. The brand is confident enough to need only one typeface; weight (700 for display, 400 for body), size, and color do the differentiating. Pairing a second font would dilute the constructed, poster-like consistency.

### Hierarchy
- **Display** (700, clamp(2.25rem, 6vw, 4.5rem), line-height 1.02, letter-spacing -0.02em): Hero name and major section headings. Hero scales up to ~text-7xl on large screens; never exceeds 6rem.
- **Headline** (700, clamp(1.875rem, 4vw, 3rem), line-height ~1.1, tracking-tight): Section titles and project/card headings.
- **Title** (700, 1.25–1.5rem): Sub-headings inside cards and panels.
- **Body** (400, 1rem, line-height 1.6): Paragraphs and descriptions. Cap measure at 65–75ch for readability.
- **Label** (700, 0.75rem, letter-spacing 0.22em, uppercase): Kicker badges, eyebrows, and small meta. The 0.22em tracking is the deliberate brand signature — applied to the bordered kicker badge, never as bare text floating above a section.
- **Control** (700, 0.875rem, letter-spacing 0.04em, uppercase): Buttons and inputs (`.nb-btn`, `.nb-input`). Distinct from Label — slightly larger for tap/legibility, narrower tracking for the uppercase button text.

### Named Rules
**The Single-Family Rule.** Space Grotesk is the only typeface. Do not introduce a serif, mono, or second sans "for contrast." Contrast is earned through weight, scale, and the accent palette.

**The Kicker Badge Rule.** Section labels are NOT bare uppercase text. They are bordered, shadowed badges (`section-eyebrow` + 3px ink border + accent background + `shadow-nb-sm`). The tracked-uppercase treatment lives inside the badge; a lone tracked eyebrow above a heading is prohibited.

## 4. Elevation

This system is built on **hard, solid offset shadows with zero blur** — the defining neobrutalist trait. Depth is conveyed by a flat ink shape pushed 3–10px down-right from the element, not by soft gradients or blurs. Surfaces are flat until they carry a shadow; the shadow is the elevation.

### Shadow Vocabulary
- **nb-sm** (`box-shadow: 3px 3px 0 #1a1a1a`): Small tiles, icon boxes, chips, badges.
- **nb** (`box-shadow: 6px 6px 0 #1a1a1a`): Default card and button shadow.
- **nb-lg** (`box-shadow: 8px 8px 0 #1a1a1a`): Hover lift on cards.
- **nb-xl** (`box-shadow: 10px 10px 0 #1a1a1a`): Featured cards and hero panel.
- **nb-hover** (`box-shadow: 2px 2px 0 #1a1a1a`): Resting shadow on a pressed/hovered button.
- **nb-accent** (`box-shadow: 6px 6px 0 #FF6B2C`): Orange-tinted offset on accent-framed cards.
- **nb-accent-2** (`box-shadow: 6px 6px 0 #00C9A7`): Teal-tinted offset on dark cards.

### Named Rules
**The Hard Shadow Rule.** Every shadow is a solid `#1a1a1a` (or single accent) offset with `0` blur. Soft, blurred, or gradient shadows are forbidden — they are the "modern SaaS" look this brand rejects.

**The Press Rule.** Interactive elements translate toward their shadow on press: buttons move `translate(2px,2px)` on hover (shadow shrinks to `nb-hover`) and `translate(4px,4px)` on active (shadow collapses to 0). The element physically presses into the page; the shadow is the gap it leaves.

## 5. Components

### Buttons
- **Shape:** Square corners (radius 0), 3px ink border, `shadow-nb` (4px 4px 0 at rest in component CSS).
- **Primary (Ember Orange):** Background `#FF6B2C`, ink text, uppercase, bold, letter-spacing 0.04em. Hover → `#FF8A55` + press transform.
- **Secondary (white):** Background `#FFFFFF`, ink text; hover tint `#FFE8D0`.
- **Accent (Tide Teal):** Background `#00C9A7`, ink text; hover `#2DD4B5`.
- **Danger (Hot Rose):** Background `#FF2E6C`, ink text; used for error states.
- **Focus / Active:** `:focus-visible` → 3px Electric Violet outline, offset 4px. Never remove the border on press; collapse the shadow instead.

### Cards / Containers
- **Corner Style:** Square (radius 0).
- **Background:** White (#FFFFFF) on cream pages; Indigo Void (#141428) with white border for dark cards.
- **Shadow Strategy:** `nb-xl` (10px) on featured cards; `nb` (6px) default. Hover lifts to `nb-lg`.
- **Border:** 3px ink on all sides; featured variants add an 8px accent `border-top` (Ember Orange / Tide Teal / Electric Violet) as the block's single accent.
- **Internal Padding:** 24–32px (p-6 / p-8 on desktop).

### Inputs / Fields
- **Style:** 3px ink border, `shadow-nb-sm` (4px), square corners, white fill, ink text.
- **Focus:** Border shifts to Electric Violet (#7B2FF7) and shadow becomes the violet offset — a clear, high-contrast focus state (also the keyboard `:focus-visible` ring).
- **Error / Disabled:** Error messages use a Hot Rose (#FF2E6C) bordered block; disabled inputs drop to 50% opacity and `cursor-not-allowed`.
- **Placeholder:** `#a3a3a3` — acceptable on white, but verify it stays legible; prefer the muted ink (#404040) if contrast feels weak.

### Chips / Tags
- **Style:** 3px ink border, `shadow-nb-sm`, square corners, ink text. Skill/project tags sit on cream (#FFF5EB); status tags on Tint Panel (#FFE8D0) or an accent.
- **State:** Used statically as labels (role, stack, "Featured collaboration", "Open to roles"). The accent is the single color of the chip; do not gradient or outline-only.

### Navigation
- **Style:** Fixed top header, 3px ink bottom border, cream background. Wordmark `MFA.` with Ember Orange period.
- **Desktop links:** Small, semibold, muted ink; hover → Ember Orange background + ink text (full-bleed hover, not an underline). "Hire me" is a primary button.
- **Mobile:** Hamburger (`nb-btn-secondary`) toggles a stacked panel with full-width hover-orange links and a full-width primary CTA.

### Signature Components
- **Kicker Badge (`section-eyebrow`):** The section opener. Bordered, shadowed, accent-backed uppercase label (Ember Orange / Tide Teal / Hot Rose / Electric Violet / Sunbeam Yellow per section). One per section, top-left.
- **Heading Highlight (`nb-heading-block`):** Inline emphasized phrase wrapped in a white box with an Ember Orange offset shadow and cloned box-decoration — used for the About heading and inline keyword pops in section titles.
- **Candidate Snapshot / Facts panel:** A white `nb-card` with an 8px Ember Orange top border, a header bar in an accent, and divided rows — the "show, don't tell" proof block.
- **Surface textures:** `surface-grid` (44px ink grid lines at 6% opacity), `surface-dots` / `surface-dots-dark` (dot fields) — used as section backgrounds to add blueprint texture without imagery.

## 6. Do's and Don'ts

### Do:
- **Do** keep every corner square (radius 0) — hardness is the signature.
- **Do** use solid, zero-blur ink shadows (`6px 6px 0 #1a1a1a`) for all elevation.
- **Do** commit each block to a single accent; rotate accents across sibling blocks.
- **Do** open every section with a bordered, shadowed kicker badge (not bare tracked text).
- **Do** press buttons on interaction: translate toward the shadow, collapse the offset.
- **Do** keep body copy in ink (#1a1a1a) / secondary (#404040) on cream; verify ≥4.5:1.
- **Do** use Space Grotesk only; differentiate with weight, scale, and accent color.
- **Do** honor `prefers-reduced-motion` — all entrance motion is disabled under it.

### Don't:
- **Don't** use soft, blurred, or gradient shadows — that is the generic "modern SaaS" look this brand rejects.
- **Don't** desaturate or mute the accents "for elegance"; the muted, washed-out palette is an explicit anti-reference.
- **Don't** put a white background on a full page; the base is Cream (#FFF5EB). White is for cards only.
- **Don't** add a second typeface (serif, mono, or other sans) for "contrast" — single-family is deliberate.
- **Don't** float a tiny uppercase tracked eyebrow above a heading without its bordered badge.
- **Don't** introduce cartoonish / hand-drawn doodle illustrations as "personality" — playful means loud color and structure, not doodles.
- **Don't** replace neobrutalist structure with glassmorphism, side-stripe accent borders, or gradient text.
- **Don't** let body text fall below 4.5:1 contrast; never use light gray "for elegance" on tinted near-white.
