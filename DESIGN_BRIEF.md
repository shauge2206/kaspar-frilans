# DESIGN BRIEF — Variant 05-D

You are one of 6 parallel agents (A through F) building variants of the **idea-05-fluid-modern** design for Kaspar Knudsen (freelance journalist, Bergen). You work on branch `idea/05-fluid-modern-D` in this worktree.

The other 5 agents are working at the same time on identical content but with different fonts. Your job is to produce a distinct typographic personality within a strict "modern" frame.

## Your assigned font: **Manrope**

Import via `next/font/google`:

```ts
import { Manrope } from "next/font/google";

const display = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
```

Use **Manrope** for ALL text on the site (headings, body, UI). No mixing with other typefaces. This is your variant's signature.

## The five SHARED themes (identical across ALL variants A–F)

Build a theme system with these 5 named themes. Each variant must implement ALL 5. The user toggles between them via a UI button that **displays the current theme name** (e.g., a pill labeled "Noir" that cycles to "Sand" → "Marine" → "Aurora" → "Forest" → back to "Noir" on click).

Use CSS variables for theme tokens so a single class on `<html>` or `<body>` switches the whole site.

### 1. Noir
- bg: `#0A0A0A`  |  fg: `#FAFAFA`  |  surface: `#171717`  |  border: `#262626`  |  accent: `#6366F1` (indigo)

### 2. Sand
- bg: `#F5F1E8`  |  fg: `#2D2A26`  |  surface: `#FBF8F1`  |  border: `#E5E0D3`  |  accent: `#B8956E` (warm gold)

### 3. Marine
- bg: `#0F1F2E`  |  fg: `#E8F4F8`  |  surface: `#16293D`  |  border: `#1F3650`  |  accent: `#14B8A6` (teal)

### 4. Aurora
- bg: `#FFF8F3`  |  fg: `#1A1A2E`  |  surface: `#FFFFFF`  |  border: `#F0E5DC`  |  accent: `#EC4899` (pink)

### 5. Forest
- bg: `#1A2E1F`  |  fg: `#F5F3EE`  |  surface: `#243B2A`  |  border: `#2F4934`  |  accent: `#84CC16` (lime)

## Implementation requirements

1. **Persist theme** in `localStorage` so it survives reload. Default to "Noir" on first visit.
2. **Theme toggle UI** — a visible button (header/nav area or floating corner) that shows the current theme's NAME and cycles on click. Style it cleanly with your assigned font.
3. **Theme transitions** — when switching, use a 300–400ms CSS transition on `background-color`, `color`, and `border-color` so the site flows smoothly between themes.
4. **All UI uses theme tokens** — no hardcoded colors anywhere except in the theme variable definitions.

## Hard requirements (non-negotiable)

1. **Preserve every section and content of idea-05-fluid-modern.** Don't drop or rearrange the page structure. Restyle only — typography and theme system are the deltas.
2. **Modern aesthetic only.** Specifically:
   - **No brutalism** (no raw exposed grid, no hard slabs, no offset-of-color)
   - **No skeuomorphism** (no fake textures, drop shadows mimicking 3D, no fake materials)
   - Clean, refined, contemporary. Think Linear, Vercel, Apple, Read.cv.
3. **Use your assigned font (Manrope) for everything.** No serif fallback for headings; no monospace accents. One typeface, full hierarchy.
4. **Mobile-first, fully responsive.**
5. **Production-quality.** Type-check passes (`npx tsc --noEmit`). No placeholder text. No console errors.

## Process

1. Read `CLAUDE.md` and `AGENTS.md` in this worktree for project conventions.
2. Read existing `app/` to map every section that must be preserved.
3. Build the theme system (CSS variables + toggle component + localStorage persistence).
4. Apply the typography (load Manrope via next/font, wire up the variable, replace all text with it).
5. Restyle pages within the new theme tokens.
6. `npx tsc --noEmit` — must pass.
7. `npm run dev` — must boot cleanly on **http://localhost:3004** without errors.

## Done condition

Dev server boots on **http://localhost:3004** without crash/error. All 5 themes toggle correctly. The site uses **Manrope** throughout. Announce: "DONE — http://localhost:3004 — Manrope" and stop.
