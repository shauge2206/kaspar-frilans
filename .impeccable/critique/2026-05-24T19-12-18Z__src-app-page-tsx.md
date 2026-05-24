---
target: src/app/page.tsx
total_score: 26
p0_count: 0
p1_count: 2
timestamp: 2026-05-24T19-12-18Z
slug: src-app-page-tsx
---
# Design Critique — src/app/page.tsx

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Theme toggle names current state; route pill marks active page; no scroll-progress on home |
| 2 | Match System / Real World | 3 | Norwegian "Saker / Om / Kontakt" idiomatic; "Utvalg · 2023–2025" date will go stale |
| 3 | User Control and Freedom | 3 | Theme persists; keyboard nav works; no skip-to-content link |
| 4 | Consistency and Standards | 3 | Kicker tracking normalized; hero kicker has a dot indicator other kickers lack |
| 5 | Error Prevention | 2 | Contact form has no visible client-side validation |
| 6 | Recognition Rather Than Recall | 3 | Toggle shows current theme name; nav shows active route via shared-id pill |
| 7 | Flexibility and Efficiency | 2 | No keyboard shortcut for theme cycle; no /saker filter by topic/year/publication |
| 8 | Aesthetic and Minimalist Design | 4 | Restrained, on-brand, generous whitespace, no decoration that doesn't earn its place |
| 9 | Error Recovery | 2 | No visible error or success states in the contact form path |
| 10 | Help and Documentation | 1 | No help UI — defensible for a portfolio |
| **Total** | | **26/40** | **Solid, ship-ready with polish opportunities** |

## Anti-Patterns Verdict

**LLM assessment**: Real Norwegian content, singular typographic voice (Manrope, no second face), editorial idioms (kicker labels in tracked uppercase, hairline separators, numbered values list, publication marquee). The five-theme system is deeply customized. Faint post-2023 "portfolio with dotted vignette + clamp() type" smell but no single move flags as obvious slop.

**Deterministic scan**: `impeccable detect --fast --json src/` returned `[]`. Zero anti-pattern findings.

**Visual overlays**: Skipped — no browser automation surface in this session. Fallback: source + CLI scan only.

## Priority Issues

- **[P1] Muted text fails the WCAG AAA commitment.** `--color-mute` on graphite measures ≈4.7:1, below the stated AAA target. Either bump mute colors across themes, or downgrade PRODUCT.md/DESIGN.md to AA so spec matches build. (Fix in this run: downgraded to AA.)
- **[P1] CTA heading and primary button repeat the same phrase.** H2 "Snakkes om et oppdrag?" duplicates the button label. (Fix in this run: H2 → "Klar for et samarbeid?")
- **[P2] Featured-work section drops the 4th tile on mobile.** Hidden md:block — mobile loses the "Bla i arkivet →" callout. (Fix in this run: now visible on all breakpoints, full-width below cards on mobile.)
- **[P2] No keyboard skip-to-content link.** WCAG 2.4.1 (Bypass Blocks). (Fix in this run: skip link added in layout.tsx; main element gets id="main".)
- **[P3] Hero italic emphasis on "Bergen" overweights geography.** Bergen is not the differentiating beat. (Fix in this run: highlightWords removed; headline reads flat.)

## Persona Red Flags

**Erlend (trade-press editor, fisheries beat, time-poor)**: Contact details aren't visible without clicking Kontakt — one extra hop. Featured "Utvalgte saker" on / aren't filtered by beat; he has to click into /saker and scroll. No filter on /saker yet.

**Marte (investigative editor, evaluating Kaspar for long-form)**: "Gravejournalistikk" is first in values (good) but the body is generic. /om describes the Master's training but offers no annotated case study or methodology note. Signal mentioned in footer but not surfaced near the CTA.

## Minor Observations

- "Mastergrad i undersøkende journalistikk" is buried mid-paragraph; could be elevated to a kicker stat near the hero.
- Hero kicker has a `bg-coral-400` dot other kickers lack — give all the dot or remove from hero.
- "Utvalg · 2023–2025" hard-coded years will stale.
- 3 publications in the marquee duplicated twice cycles quickly; the reduced-motion static row may read more honestly site-wide.

## Questions to Consider

- What's the most editor-meaningful credential to elevate above the bio paragraph?
- If contact-info-on-every-page is the conversion, why hide email and phone behind a nav click?
- Is a case-study deep-dive on /om worth implementing v1?
