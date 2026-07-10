# AGENTS.md — my-portfolio

Single-page Next.js 16 portfolio. App Router. Neobrutalist design system. Production-ready (40/40 critique score, 0 P0/P1/P2 issues).

## Commands

```json
npm run dev      // next dev (Turbopack)
npm run build    // next build
npm run start    // next start
npm run lint     // eslint (next/core-web-vitals + typescript configs)
```

No test or typecheck scripts exist. Build includes type-checking via Next.js.

## Architecture

- `app/page.tsx` — root page composes 7 section components in order.
- `app/layout.tsx` — Space Grotesk font, Header, Footer, BackToTop. No providers/themes wrapper.
- `components/` — 10 `'use client'` components (header, hero, about, services, skills, experience, projects, contact, footer, backtotop).
- `app/api/send/route.ts` — POST-only contact endpoint using Resend.
- `app/globals.css` — design tokens live here (`@theme inline`), NOT in `tailwind.config.ts`. The config file exists only for editor compatibility.

## Design tokens

All tokens use `nb-` prefix. Defined in `globals.css` under `@theme inline`:
- Colors: `nb-bg`, `nb-accent`, `nb-accent-2` through `nb-accent-5`, `nb-border`, `nb-text`, etc.
- Shadows: `shadow-nb`, `shadow-nb-sm`, `shadow-nb-lg`, `shadow-nb-xl`
- Border: custom `border-3` in tailwind.config.ts

Use these tokens directly in className strings. Do not hardcode colors.

## Framework quirks

- **React Compiler** enabled (`reactCompiler: true` in next.config.ts) — requires `babel-plugin-react-compiler`.
- **Tailwind v4** — uses `@import "tailwindcss"` syntax. `@theme inline` for tokens, NOT `@tailwind` directives.
- **PostCSS override** — pinned to `8.5.15` via `overrides` in package.json.
- **TypeScript `strict: true`** — no `any` or suppressions allowed.
- `PoweredByHeader` disabled, security headers set in next.config.ts.

## Contact API (`POST /api/send`)

- Requires `RESEND_API_KEY` in `.env.local` (sample exists).
- Validation: origin check, JSON content-type, rate limit (5 req / 10 min via in-memory map), honeypot `website` field, HTML escaping, size limits.
- No database — stateless. Rate limit resets on server restart.
- Sends via Resend to `falihakbar14@gmail.com`.

## Git notes

- `core.fileMode false` set — permission changes are ignored.
- `main` branch, single remote (`origin`). No CI workflows found.
- `.omo/run-continuation/` — OpenCode session artifacts; treat as transient (not git-tracked).

## Design Quality (as of 2026-07-10)

**Critique score:** 40/40 (P0: 0, P1: 0, P2: 0, P3: 0)

Latest critique snapshot: `.impeccable/critique/2026-07-10-summary.md`

### Recent fixes (polish pass continuation):
- Fixed all kicker badge borders (3 components) — `border-nb-accent` → `border-nb-border` for visible ink borders
- Broke consecutive 3-up grid rhythm — About principles now 2-column instead of 3-column
- Rewrote Services subtitle from generic stack list to proof-led outcomes
- Added deep-linking from Services CTAs to specific project cards (`#project-lpse-x-phase-3`, `#project-nusa-q`, `#project-personal-portfolio`)
- All projects now have anchor IDs for direct linking

### Design System Discipline:
- All shadows use `shadow-nb-*` tokens (no hardcoded offsets)
- All kicker badges follow `section-eyebrow` class + `border-3 border-nb-border bg-nb-accent*` pattern
- Copy leads with outcomes and real project names, not generic tech stacks
- Mobile CTA always visible (`md:hidden` on Header)
- Contact form has client-side validation with inline error blocks

### What NOT to change:
- Neobrutalist identity (square corners, hard shadows, loud accents) — this IS the brand
- Space Grotesk as the sole typeface — single-family is intentional
- Cream base (#FFF5EB) — never replace with pure white for page bg
- Section kicker badges — they're a deliberate brand system, not AI scaffolding
- Current grid rhythm variation (2-col About, 3-col Services, 3-col Skills) — intentionally broken to avoid repetition

## What to avoid

- Do not add test frameworks or test files — none exist.
- Do not change the design system prefix or token structure.
- Do not add theme toggle, authentication, or database — out of scope.
- Do not replace `react-icons/si` exports without verifying the exact name (e.g. `SiCss` → `SiCss3` in v5).
- Do not use `as any`, `@ts-ignore`, or type suppressions — TypeScript `strict: true`.
- Do not hardcode shadow offsets — use `shadow-nb-*` tokens.
- Do not make kicker borders invisible by matching border color to background (`border-nb-accent` on `bg-nb-accent`).
- Do not stack three identical 3-column grids consecutively — vary the rhythm.
- Do not revert to generic section copy ("What I Do", "My Services") — lead with proof and outcomes.
- Do not delegate visual work to `visual-engineering` category — it hangs in this environment; use `general` or direct edits.
