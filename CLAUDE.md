@AGENTS.md

# my-portfolio

Personal portfolio site. Next.js 16 (App Router) + React 19 + TypeScript + Tailwind v4, deployed as a single marketing-style page (`app/page.tsx`) built from section components.

## Before writing App Router code

This repo's Next.js version (16.2.11) is newer than your training data — APIs, config, and conventions may have changed. Check `node_modules/next/dist/docs/01-app/` for the current App Router behavior (data fetching, caching, config, route conventions) before relying on remembered APIs, especially anything involving `fetch` caching, `next.config.ts`, or route segment config.

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build (also the fastest way to catch type errors across the app)
- `npm run lint` — ESLint (flat config: `eslint-config-next` core-web-vitals + typescript)

There is no test runner configured in this project. Don't introduce one speculatively; if the user asks for tests, ask what to use first.

## Structure & conventions

- Path alias `@/*` maps to repo root (see `tsconfig.json`) — use it instead of relative `../../` imports.
- `components/ui/` — shadcn primitives (style: `base-nova`, base color `neutral`, icon library `lucide`). Add new primitives via `shadcn` CLI conventions, not hand-rolled, so they stay consistent with `components.json`.
- `components/global/` — cross-page chrome (cursor effects, loading screen/reveal, parallax helpers).
- `components/homepage/` — sections composed directly into `app/page.tsx`.
- `lib/utils.ts` — shared helpers, notably `cn()` (clsx + tailwind-merge) for conditional class composition. Use it instead of manual string concatenation for class names.
- Mark a component `"use client"` only when it actually needs client-only APIs (hooks, browser globals, `motion`/`lenis`/animation libs). Don't push the directive up to a parent unnecessarily.
- Styling is Tailwind v4 (CSS-first config in `app/globals.css` via `@theme inline`, no `tailwind.config.*`). Design tokens (colors, radii) are CSS variables — extend them there rather than hardcoding new ad hoc colors in components when a token fits.
- Animation stack in use: `motion` (Framer Motion successor) for component animation, `lenis` for smooth scroll, `react-type-animation` for typewriter effects, `react-awesome-reveal` for scroll reveals. Prefer these over adding a new animation dependency.
- Fonts are wired through `next/font/google` in `app/layout.tsx` as CSS variables (`--font-sans`, `--font-permanent-marker`, `--font-patrick-hand`); reference them via the corresponding Tailwind font utility, don't import fonts elsewhere.

## Working style

Act as a senior engineer on this codebase: match existing patterns above before introducing new ones, keep components small and colocated by feature (`homepage/` vs `global/` vs `ui/`), and prefer extending an existing primitive/token over adding a new library or one-off style. This is a solo portfolio project — favor pragmatic, shippable changes over speculative abstraction.
