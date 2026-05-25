---
name: Kaspar Knudsen — Frilansjournalist (Kommentarer)
description: Cream-paper editorial portfolio with Spectral italic display, amber drop-cap, and a single-theme light register.
colors:
  bg:          "#f5efe2"
  bg-elev:     "#ece5d3"
  bg-elev-2:   "#e2dac4"
  ink:         "#1b1812"
  ink-soft:    "#34302a"
  ink-mute:    "#6b6458"
  rule:        "#d2c9b3"
  amber:       "#7a5210"
  amber-soft:  "#5e3f0b"
  warn:        "#a04a1f"
typography:
  display:
    fontFamily: "Spectral, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.6rem, 5.5vw + 1rem, 6.5rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "clamp(1.8rem, 2.4vw + 1rem, 3rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.005em"
  body:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "clamp(1.25rem, 0.7vw + 1.1rem, 1.45rem)"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.18em"
rounded:
  flat: "0"
  card: "18px"
  hero: "28px"
  pill: "9999px"
components:
  button-primary:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.bg}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.amber-soft}"
    textColor: "{colors.bg}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
  button-ghost:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink-soft}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
  button-ghost-hover:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.amber}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
  tile-bordered:
    backgroundColor: "{colors.bg-elev}"
    textColor: "{colors.ink}"
    rounded: "{rounded.flat}"
    padding: "32px"
  tile-bordered-hover:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.flat}"
    padding: "32px"
  article-card:
    backgroundColor: "{colors.bg-elev}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "0"
  input-text:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.flat}"
    padding: "12px 16px"
  kicker-label:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.amber}"
    typography: "{typography.label}"
    rounded: "{rounded.flat}"
    padding: "0"
---

# Design System: Kaspar Knudsen — Frilansjournalist (Kommentarer)

## 1. Overview

**Creative North Star: "The Feature Page"**

The site reads as a single feature spread in a Saturday-edition magazine: a cream paper surface, Spectral serif throughout, italic display for the headline, amber drop-cap leading every long-form column, hairline rules between sections, a single muted accent color that does all the heavy work. The journalism comes first; the design is the chassis it travels in.

The register is a deliberate counterweight to the other Kaspar variants. Where the "Wall Label" variant favors typographic restraint with a single sans family, this one leans into print-magazine warmth: a serif with italic display, drop-cap initials, pullquotes with oversized opening quote marks, a faint paper-noise overlay, and a deep gold amber that anchors the cream. Light theme only, no toggle.

This system rejects, per the strategic brief: Squarespace / Wix portfolio templates (centred hero photo, big-script tagline, three feature cards); glossy influencer / personal-brand pages (display-cursive name, "work with me" CTA, pastel gradients); generic SaaS marketing landings (gradient hero, three benefit columns with icons, "trusted by" logo strip). If the page ever reads as one of those, the design has failed.

**Key Characteristics:**
- Cream-paper surface with warm-grey ink and a single deep-gold accent (Headline Amber). Accent appears on ≤10% of any screen.
- Single typeface family in two roles: Spectral serif (display, headline, body, italic emphasis) plus Inter sans constrained to smallcaps labels and UI metadata.
- Editorial idioms throughout: amber drop-cap on first paragraph of every long-form column, hairline rules between sections, pullquotes with oversized opening quotation marks, magazine-issue kicker ("Utgave 09 · Mai 2026").
- Flat editorial rectangles for most surfaces (no rounded corners). Two exceptions: article-card image containers (18px radius) and the hero image on slug pages (28px). Buttons are pills.
- Subtle SVG paper-noise overlay across the page at 3.5% opacity with `mix-blend-mode: overlay`, adds tactile grain without darkening the surface.

## 2. Colors

A tinted-neutral cream palette warmed throughout. Every neutral pulls toward the brand-amber hue (slightly warm grey rather than cold). Single saturated accent (Headline Amber) for credentialing moments.

### Primary
- **Headline Amber** (`#a87515`, token `amber`): The single accent. Used on the drop-cap initial of long-form prose, the dot before every kicker label, primary button fills, the focused-state of inputs, and small `<em>` highlights. **Appears on ≤10% of any screen.** Hover/active state deepens to **Amber Deep** (`#8a5e0f`, token `amber-soft`).
- **Amber Deep** (`#8a5e0f`, token `amber-soft`): Hover state for the primary accent.

### Tertiary
- **Rust Red** (`#a04a1f`, token `warn`): Reserved for warnings / error states / urgent flags. Not for decorative use.

### Neutral
- **Newsprint Cream** (`#f5efe2`, token `bg`): The default page background. A warm cream that reads as freshly-printed paper rather than digital white.
- **Pressed Cream** (`#ece5d3`, token `bg-elev`): Tile surfaces and elevated blocks. The first surface step above the page.
- **Stockcream** (`#e2dac4`, token `bg-elev-2`): Deepest tinted surface, used sparingly for second-level emphasis.
- **Editorial Ink** (`#1b1812`, token `ink`): Primary body and headline text. A warm near-black that never reads as digital `#000`.
- **Body Ink** (`#34302a`, token `ink-soft`): Secondary body text, captions inside cards.
- **Caption Ink** (`#6b6458`, token `ink-mute`): Tertiary text — kicker labels, byline metadata, footer rows.
- **Hairline** (`#d2c9b3`, token `rule`): 1px borders, separator rules, ring outlines. The editorial hairline.

### Named Rules
**The One Voice Rule.** Headline Amber is used on ≤10% of any given screen. Its rarity is the entire credential.

**The Cream-Tinted Rule.** Every neutral pulls warm toward the amber hue. No cold greys, no #000, no #fff. The page reads as paper, not as a screen.

**The Hairline Rule.** Borders are always 1px and always the `rule` token. Side-stripe borders (any `border-left` / `border-right` > 1px as a colored accent) are forbidden.

## 3. Typography

**Display / Body Font:** Spectral (with Georgia, "Times New Roman", serif as fallback). A modern transitional serif with editorial proportions and excellent italics.
**Label / UI Font:** Inter (with `ui-sans-serif, system-ui` fallback). Used only for smallcaps labels and the rare sans-set UI metadata row.
**Mono Font:** JetBrains Mono (with `ui-monospace, SFMono-Regular` fallback). Used sparingly for dates and numeric metadata.

**Character:** Spectral carries the entire reading experience. Its italic is the design's signature flourish — used for the second line of the hero headline ("Frilansjournalist i Bergen") and for emphasis within prose. The drop-cap on each long-form paragraph is set in Spectral at 5.6rem.

### Hierarchy
- **Display** (Spectral, regular 400, `clamp(1.9rem, 3.6vw + 0.5rem, 3.6rem)`, line-height 1.05, letter-spacing -0.015em): The home hero h1. Two lines: regular roman for the name, italic for the role-line beneath.
- **Headline** (Spectral, medium 500, `clamp(1.8rem, 2.4vw + 1rem, 3rem)`, line-height 1.1): Section openers (`Kvalitetsjournalistikk fra Bergen.`, `Hva jeg leverer.`).
- **Title** (Spectral, semibold 600, `1.5rem`, line-height 1.25): Article-card titles, footer column heads, hero side-card titles.
- **Body** (Spectral, regular 400, `clamp(1.25rem, 0.7vw + 1.1rem, 1.45rem)`, line-height 1.7): Long-form prose (`prose-longform` class). Max line length ~65–72ch.
- **Label** (Inter, semibold 600, `0.7rem`, letter-spacing 0.18em, uppercase): Every kicker, every byline metadata field, navigation strip. The smallcaps idiom.

### Named Rules
**The Drop-Cap Rule.** Every long-form prose article opens with a 5.6rem Spectral drop-cap in Headline Amber on the first paragraph (`p:first-of-type::first-letter`). Multiple paragraphs inside a single `<article>` only get one cap — the entry signal.

**The Italic-as-Voice Rule.** Italic Spectral is reserved for the hero role-line and for `<em>` emphasis within prose. It is not decorative. Never use italic for whole paragraphs or for section headlines.

**The Single-Family Rule.** Spectral carries the reading experience. Inter is constrained to smallcaps labels (≤0.78rem, uppercase, tracked 0.18em). JetBrains Mono is for numeric metadata only. Mixing fonts outside these slots is forbidden.

## 4. Elevation

The system is flat-by-default. There are no decorative drop shadows. Depth is conveyed through three mechanisms:

- **Tonal layering** between `bg`, `bg-elev`, and `bg-elev-2` for surface elevation.
- **Hairline borders** (1px `rule`) to mark tile boundaries against the page.
- **A faint global noise overlay** (3.5% opacity, mix-blend-mode overlay) that adds paper grain across the entire viewport without any element-specific shadow.

The hover state on tiles is a *background color shift* (amber-tinted via `color-mix`), not a shadow lift.

### Named Rules
**The No-Shadow Rule.** Drop shadows are forbidden on cards, buttons, tiles, and surfaces. If you need to signal interactivity, shift the background color or the border tone, not the shadow.

**The Paper-Grain Rule.** The global noise overlay (a 160×160 fractalNoise SVG, `mix-blend-mode: overlay`, opacity 0.035) is the only allowed texture. Don't add additional grain to individual elements.

## 5. Components

### Buttons
- **Shape:** Pill (`border-radius: 9999px`). No squared buttons.
- **Primary:** `bg-amber text-bg-cream font-sans-smallcaps`. Padding `12px 20px`. Hover deepens to `amber-soft`, no other change. No shadow at any state.
- **Ghost / Outline:** `bg-bg text-ink-soft border border-rule`. Hover shifts text to `amber` and border to `amber`. Used for secondary CTAs.
- The primary "Les saker →" and "Lei en frilanser" pair on the home hero is the canonical pattern.

### Tiles (Bordered Card)
- **Shape:** Flat rectangle (`border-radius: 0`). Sharp editorial edges, no rounding.
- **Border:** Always `border border-rule` (1px hairline, warm-cream).
- **Surface:** `bg-bg-elev` at rest.
- **Hover:** Apply `tile-hover-amber` class — background mixes 8% amber into the surface, border darkens to 30% amber tone. Transition 600ms with `cubic-bezier(0.22, 1, 0.36, 1)`. This is the system's signature interactive moment.
- **Padding:** `p-6` for small tiles, `p-8` for medium, `p-10` for the hero CTA block.
- Used on: `/om` services + values + address cards, `/kontakt` info card and form card, home "Sist publisert" card, home "Bestilling" block.

### Article Card (Image-Led)
- **Shape:** Rounded rectangle (`border-radius: 18px`) — one of only two rounded shapes in the system.
- **Border:** `border border-rule`.
- **Surface:** `bg-bg-elev` with `<Image>` fill, `object-cover`.
- **Overlay:** Bottom-to-top gradient (`from-[color:var(--bg)]/85 via-[color:var(--bg)]/30 to-transparent`) over the bottom 60% so kicker + title remain legible against any photo.
- **Tag pill:** Top-left, amber-bordered (`border-amber/40`), `bg-bg/80 backdrop-blur-sm`. Uses the first emneknagg from `sak.emneknagger`.
- **Title:** Spectral `clamp(1.15rem, 1.55rem)`, transitions to amber on group-hover.
- **Image:** Slow scale on hover (`group-hover:scale-[1.04]`, 1200ms ease-out-quint). Card translates `-translate-y-1` on hover.

### Inputs (Contact Form)
- **Shape:** Flat (`border-radius: 0`).
- **Surface:** `bg-bg` with `border border-rule`.
- **Focus:** Border shifts to `amber`. No glow, no shadow.
- **Label:** Smallcaps above the field, in `ink-mute`.
- **Submit:** Standard primary-button (amber pill).

### Kicker Label
- The signature small typographic element. Used at the top of every section across the site.
- Format: `<p className="smallcaps text-amber inline-flex items-center gap-3">` with a 2×2px solid amber dot before the label text.
- Always uppercase, always tracked `0.18em`, always smallcaps weight.
- Color: amber when announcing a primary section ("Erfaring", "Visjon"); `ink-mute` when announcing supporting metadata ("Sist publisert", "Skriv en melding").

### Drop-Cap
- The most distinctive long-form element. Defined via `.prose-longform p:first-of-type::first-letter`.
- Spectral serif, 5.6rem, semibold 600, color `amber`, `float: left`, `padding: 0.35rem 0.7rem 0 0`, `line-height: 0.92`.
- Appears on the FIRST paragraph of any `<article className="prose-longform">` block. Multiple paragraphs in one article get one cap — the article's "entry signal."

### Pullquote
- Italic Spectral at 1.6rem, color `ink-soft`, with a 2px `amber` left border (this is the system's one sanctioned vertical accent line — see Named Rules above for the side-stripe exception).
- An oversized `\201C` (curly opening quote) hangs to the upper-left at 5rem in amber at 0.45 opacity, anchored above the pullquote.
- Used in long-form `<article>` blocks to break stanza groups.

### Reading Progress
- A 3-pixel amber bar fixed at the top of the viewport, scaled by scroll position.
- Sits in the `Header`'s sibling root-layout position so it persists across route changes.
- Never animated — its width is directly bound to scrollY.

### Navigation (Header)
- Sticky at top, `backdrop-blur-md`, `bg-bg/85`, border-bottom hairline.
- The logo is the wordmark "Kaspar Knudsen" + a smallcaps tagline ("Frilansjournalist · Bergen"). No icon mark.
- Nav links use `glow` class — color shifts to amber on hover with a faint text-shadow glow.
- Active route is not visually marked (yet) — see Do's and Don'ts.

## 6. Do's and Don'ts

### Do:
- **Do** use Spectral for all serif text. Display, headline, title, and body all share one family — hierarchy comes from size and weight.
- **Do** keep Headline Amber below 10% of any screen. Drop-cap + kicker dots + a single CTA button is already at the limit.
- **Do** use the kicker dot pattern at the top of every section. The smallcaps + amber dot is the system's signature opener.
- **Do** put `post@kasparknudsen.no` one tap away. Contact is the conversion.
- **Do** use the hairline (`border border-rule`) for tile separation, never a colored side-stripe.
- **Do** respect `prefers-reduced-motion`. The CSS `fadeUp` keyframe and the ReadingProgress should both degrade gracefully.
- **Do** apply the `tile-hover-amber` class to every interactive tile. The 600ms amber-tint dissolve is the system's signature interactive moment.
- **Do** test WCAG AA contrast on every text block (mute-on-bg currently sits at ~4.5:1).

### Don't:
- **Don't** ship anything that could be mistaken for a Squarespace / Wix portfolio template — centred hero photo, big-script tagline, three feature cards, scroll-snap testimonials.
- **Don't** ship anything that reads as a glossy influencer / personal-brand page — hero portrait at 80vh, display-cursive name, "work with me" CTA, soft pastel gradients.
- **Don't** ship anything that looks like a generic SaaS marketing landing — gradient hero, three benefit columns with icons, "trusted by" logo strip, animated product mockup, dark-mode-toggle-in-the-corner.
- **Don't** use `#000` or `#fff` anywhere. Every neutral is tinted warm.
- **Don't** add drop shadows to anything. Depth comes from tonal layering and hairlines, not shadows.
- **Don't** use rounded corners on tiles, inputs, or content blocks. Only article-card images (18px), hero images (28px), and buttons (pill) are rounded.
- **Don't** introduce a second serif. Spectral only. No PT Serif, no Source Serif, no Cormorant.
- **Don't** use gradient text or `background-clip: text`. Emphasis comes from italic, weight, or solid amber color.
- **Don't** use em dashes (`—`) in copy. Use commas, colons, semicolons, periods, or parentheses.
- **Don't** add a CTA modal, "schedule a call" widget, or newsletter signup. Friction-free email is the conversion.
- **Don't** introduce a dark theme variant. This system is light-only; the variant trade-off is intentional.
- **Don't** animate CSS layout properties. Transform and opacity only.
- **Don't** use bounce or elastic easing. Spring `cubic-bezier(0.22, 1, 0.36, 1)` for the tile dissolve, `ease-out` for the fadeUp keyframe.
