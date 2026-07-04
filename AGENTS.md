# AGENTS.md — my-portfolio

Single-page Next.js 16 portfolio. App Router. Neobrutalist design system.

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

## What to avoid

- Do not add test frameworks or test files — none exist.
- Do not change the design system prefix or token structure.
- Do not add theme toggle, authentication, or database — out of scope.
- Do not replace `react-icons/si` exports without verifying the exact name (e.g. `SiCss` → `SiCss3` in v5).
