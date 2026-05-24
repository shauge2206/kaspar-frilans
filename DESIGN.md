---
name: Kaspar Knudsen — Frilansjournalist
description: An editorial credentialing surface for a Norwegian freelance journalist.
colors:
  paper:        "#1a1a1c"
  paper-2:      "#232326"
  paper-3:      "#2d2d31"
  ink:          "#ededec"
  ink-2:        "#b9b9b6"
  mute:         "#7d7d79"
  mute-2:       "#555552"
  line:         "#323236"
  coral-300:    "#c9ad7d"
  coral-400:    "#b89870"
  coral-500:    "#a6855d"
  coral-600:    "#87683f"
  apricot-100:  "#38322a"
  apricot-200:  "#dcc7a0"
  teal-300:     "#87683f"
typography:
  display:
    fontFamily: "Manrope, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: "clamp(2.4rem, 4vw + 1rem, 5.2rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Manrope, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: "clamp(1.8rem, 2vw + 1rem, 2.8rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.018em"
  title:
    fontFamily: "Manrope, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Manrope, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "-0.005em"
  label:
    fontFamily: "Manrope, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.18em"
rounded:
  input: "14px"
  card: "22px"
  lift: "28px"
  pill: "9999px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-ghost:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-ghost-hover:
    backgroundColor: "{colors.paper-3}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  theme-toggle:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
  card-article:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "0"
  input-text:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.input}"
    padding: "28px 16px 10px"
  label-kicker:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.mute}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
---

# Design System: Kaspar Knudsen — Frilansjournalist

## 1. Overview

**Creative North Star: "The Wall Label"**

The site is the museum wall label, not the painting. A wall label is small, plainly typeset, sits in a specific place, and tells you only what you need to know to take the work seriously — who, where, when, and one line of context. It carries authority through restraint. No marketing voice, no decoration, no attempt to entertain. The visitor walks away with the name, the publications, and a way to make contact. That is the entire conversion event.

The system is built from editorial print conventions adapted to web: a clear masthead, kicker labels in tracked uppercase, generous whitespace, a single sans family at hierarchical weights, paper-toned surfaces with subtle elevation, and one warm accent that earns its presence by being used rarely. Five themes (graphite, linen, sand, ember, dawn) all sit inside the same restrained voice — they shift palette, never personality. Cross-cutting motion is slow, fade-and-rise (200–600ms with exponential ease-out), and never decorative.

What this system rejects, as stated in PRODUCT.md: **Squarespace / Wix portfolio templates** (centred hero photo, big-script tagline, three feature cards), **glossy influencer / personal-brand pages** (hero portrait at viewport height, display-cursive, "work with me" CTA, pastel gradients), and **generic SaaS marketing landings** (gradient hero, three benefit columns with icons, "trusted by" logo strip). If the design ever reads as one of those three, it has failed.

**Key Characteristics:**
- Tinted-neutral surfaces with one warm-metallic accent used sparingly (≤10% of any screen).
- Single sans family (Manrope) carrying the full hierarchy through weight and scale, never through font mixing.
- Editorial idioms: kicker labels in tracked uppercase, ruled separators, generous body line-height, drop-cap on first paragraph of long prose, pill chips.
- Five thematic palettes (graphite default + linen / sand / ember / dawn), swap-via-attribute, identical structural language.
- Subtle two-step elevation (`shadow-soft` / `shadow-lift`); flat by default on borders and labels.
- Motion is slow, fade-and-rise, never bouncy, never elastic.

## 2. Colors

A palette of tinted neutrals — never `#000`, never `#fff` — with a single warm-metallic accent that signals importance only when it appears. Documented values below are the **graphite** default theme; the other four themes (linen, sand, ember, dawn) redefine the same token names with palette-shifted values so theming swaps via a single `data-theme` attribute on `<html>`.

### Primary
- **Pressroom Brass** (`#a6855d`, token `coral-500`): The single accent. Used on the masthead initial, the focus-ring of inputs, the kicker dots in the theme toggle, and small typographic accents. **Appears on ≤10% of any screen.** Hover/active states deepen to **Brass Deep** (`#87683f`, token `coral-600`). Focus rings use **Brass Light** (`#b89870`, token `coral-400`) for slightly higher luminance.

### Secondary
- **Aged Newsprint** (`#dcc7a0`, token `apricot-200`): Used only as a paired stop with Pressroom Brass on the input focus-line gradient. Decorative paired use is the only allowed role; never as a standalone fill.

### Tertiary
- **Brass Deep** (`#87683f`, token `teal-300`): Identical hex to `coral-600` in the graphite default. Reserved as a per-theme tertiary tint slot for surface variations on light themes (sand, dawn) where the secondary accent is closer to the primary in hue.

### Neutral
- **Press Black** (`#1a1a1c`, token `paper`): The default page background. Off-true-black, tinted slightly toward warm-grey so it never reads as digital `#000`.
- **Press Black Elevated** (`#232326`, token `paper-2`): Card and surface backgrounds. The first elevation step.
- **Press Black Lifted** (`#2d2d31`, token `paper-3`): Hover-state surface, second elevation step. Also the destination for ghost-button hover.
- **Newsprint Off-White** (`#ededec`, token `ink`): Primary body and heading text. Off-true-white so it never glares.
- **Halftone Grey** (`#b9b9b6`, token `ink-2`): Secondary body text — captions, supporting paragraphs, byline metadata.
- **Cold Grey** (`#7d7d79`, token `mute`): Muted text — labels, kickers, footer notes.
- **Cold Grey Deep** (`#555552`, token `mute-2`): Rarely-used text — disabled states, tertiary metadata.
- **Rule** (`#323236`, token `line`): Hairline borders, ring outlines, horizontal separators. Named for the editorial typesetting term for a horizontal rule.

### Named Rules
**The One Voice Rule.** The Pressroom Brass accent is used on ≤10% of any given screen. Its rarity is the point. The moment two competing accent uses appear in the same view, one of them is wrong.

**The Tinted Neutral Rule.** `#000` and `#fff` are forbidden. Every neutral carries a faint warm tint toward the brand hue (chroma ≈ 0.005–0.01). Pure black and pure white are the hallmark of templates and must be designed past.

**The Theme Swap Rule.** All five themes use the same token names and the same structural relationships. A theme swap may change palette but must not change personality, density, or hierarchy. If a theme requires a different layout decision, the system is wrong, not the theme.

## 3. Typography

**Display / Body / Label / Mono Font:** Manrope (single family for the entire hierarchy, with `ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif` as the fallback stack).

**Character:** Manrope is a humanist geometric sans with subtle warmth — open apertures, even rhythm, settled weights — that reads as contemporary editorial without leaning Swiss or grotesk. One family carries the full hierarchy via weight and scale; mixing typefaces is prohibited.

### Hierarchy
- **Display** (weight 500, `clamp(2.4rem, 4vw + 1rem, 5.2rem)`, line-height 1.05, letter-spacing `-0.02em`): Page-defining headlines on `/`, `/saker`, `/om`, `/kontakt`. One per page, never more.
- **Headline** (weight 500, `clamp(1.8rem, 2vw + 1rem, 2.8rem)`, line-height 1.1, letter-spacing `-0.018em`): Section openers within long pages.
- **Title** (weight 600, `1.25rem`, line-height 1.3, letter-spacing `-0.01em`): Card titles, footer headers.
- **Body** (weight 400, `1.05rem`, line-height 1.65, letter-spacing `-0.005em`): Long-form paragraphs. Max line length 65–75ch.
- **Label** (weight 500, `0.72rem`, line-height 1.2, letter-spacing `0.18em`, uppercase): Kickers above headlines, navigation accents, metadata, badges. The editorial "all-caps tracked label" idiom.

### Named Rules
**The One Family Rule.** Manrope only, all weights, all sizes. No serif fallback for headings. No monospace for accents. No second display face. The discipline of one face across the entire system is part of the seriousness.

**The Tracked-Label Rule.** Anything in uppercase carries `letter-spacing: 0.18em` or `0.2em` and lives at label-size (≤0.78rem). Lowercase text never receives extended tracking, ever.

**The Italic-as-Editorial Rule.** Italic is reserved for emphasis within journalism's idiom — a single highlighted word in a kicker headline (rendered in the accent color), or a quoted-source aside. Decorative italic is forbidden.

## 4. Elevation

A two-step subtle shadow vocabulary, applied only to cards and primary buttons. Borders use a 1px tinted hairline (`line`), not a shadow. Default state is essentially flat — what depth there is shows up at hover, focus, or as a quiet response to user state. Light themes (sand, linen, dawn) carry shadows with much lower opacity (5–22% alpha) than dark themes (graphite, ember) so the elevation reads as inhabited paper, not stagey.

### Shadow Vocabulary
- **shadow-soft** (`0 1px 2px rgba(0,0,0,0.18), 0 8px 24px -8px rgba(0,0,0,0.32)`): The default card-at-rest and primary-button-at-rest elevation. Diffuse, ambient, low-presence.
- **shadow-lift** (`0 2px 4px rgba(0,0,0,0.24), 0 24px 60px -16px rgba(0,0,0,0.48)`): The hover-state lift on cards and primary buttons. 500ms transition. Never used at rest.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest except for cards and primary buttons. Labels, badges, inputs, list items, sections, and full-bleed regions never carry shadow. Adding shadow to a non-card surface is forbidden; rework with a `paper-2` background or a `line` ring instead.

**The Editorial Hairline Rule.** Borders are always 1px and tinted with the theme's `line` token, at full opacity or `line/70` for slightly softer separators. Side-stripe borders (a `border-left` or `border-right` >1px as a colored accent) are forbidden — see Do's and Don'ts.

## 5. Components

Each component is documented at the level of structural intent. Exact CSS lives in the sidecar at `.impeccable/design.json`.

### Buttons
- **Shape:** Pill (`border-radius: 9999px`, token `rounded.pill`). No squared buttons anywhere.
- **Primary:** Inked solid — `bg-ink` background, `text-paper` foreground, `shadow-soft` at rest, `shadow-lift` on hover with a 500ms easing. Padding `14px 28px`. The "send this email" CTA on `/kontakt`, the "snakkes om et oppdrag" CTA on `/`. There is one primary button per screen, ever.
- **Ghost:** Tinted-neutral surface — `bg-paper-2` background, `text-ink` foreground, `ring-1 ring-line` outline. Hover deepens to `bg-paper-3`. No shadow at any state. Used for secondary "see more saker" links and inline calls.
- **Magnetic motion:** A specific affordance on primary buttons — slight follow-cursor translate (`<8px`) on pointer hover, springs back on leave. Strictly subtle; never magnetic enough to feel like a toy.

### Theme Toggle
- A small pill-shaped button living in the header right-edge cluster.
- `bg-paper-2/85`, `ring-1 ring-line`, `backdrop-blur-md` (this is the only sanctioned glassmorphism in the system; see Do's and Don'ts).
- Displays the current theme name (e.g. "Graphite"), cycles to the next on click.
- A 2.5×2.5px Pressroom Brass dot precedes the label with a pulsed `animate-ping` glow at 40% opacity. The dot is the one decorative micro-flourish in the entire UI and earns its place by being functional — it's the only visible affordance signaling the toggle is interactive.

### Cards (Article)
- **Corner Style:** `rounded-[var(--radius-card)]` = 22px. Generous but not soft.
- **Background:** `bg-paper-2`.
- **Border:** `ring-1 ring-line/70`. Always present.
- **Shadow Strategy:** `shadow-soft` at rest, `shadow-lift` on group hover with 500ms ease.
- **Internal Padding:** Variable by content; image cards run flush, text cards pad `7` (28px) on smaller and `10` (40px) on larger breakpoints.
- The image-thumbnail variant uses `aspect-[4/5]` or `aspect-[16/10]` depending on context, with `overflow-hidden` and a parallax-shift inner element on scroll.

### Inputs (Text Field)
- **Style:** `rounded-[14px]`, `bg-paper`, `ring-1 ring-line/80`, no shadow.
- **Floating label** pattern — placeholder text is transparent at rest; the label sits inside the field, shrinks and lifts when the input receives focus or has content.
- **Focus state:** `ring-2 ring-coral-400`, background lifts to `bg-paper-2/60`, AND a 2px gradient underline (`from-coral-400 to-apricot-200`) draws in from the left over 500ms with the spring easing. This underline is the single delight in the form — once the user commits to typing, the system commits back.
- **Error / Disabled:** Not yet implemented in the contact form. When added, errors must use `text-ink` + `ring-coral-500` with explicit text (never color-only), and disabled drops `text-mute` + `opacity-60`.

### Form Card (Contact)
- A larger container variant — `rounded-[28px]` (token `rounded.lift`), `bg-paper/80`, `ring-1 ring-line/70`, `shadow-soft`, `backdrop-blur-md` on the whole card. The backdrop-blur is purposeful here: it acknowledges the dotted-vignette backdrop sits behind the form, and the blur lifts the form forward without an opaque cover.

### Navigation (Header)
- Sticky `top-0`, `z-40`, transparent at scroll-top.
- Background opacity rises from `paper/55%` → `paper/82%` as the user scrolls 0–120px, with a paired `backdrop-blur` rising from 4px → 14px and `border-bottom` opacity rising from 0 → 0.7. All three driven by `useScroll` + `useTransform`; the effect is a quiet lift of the masthead as the page begins below it.
- Logo is a small Pressroom Brass disc (28×28px, `bg-coral-500 text-paper rounded-full`) with the initial "K" and the wordmark "Kaspar Knudsen" beside it in `font-display text-[1.05rem] font-semibold`. Hover changes the rotation/positioning subtly via Motion.
- Inline nav uses `rounded-full px-3.5 py-2 text-sm font-medium text-ink-2 hover:text-ink`. The active route is rendered with a `bg-paper-2 ring-1 ring-line` pill behind it via a shared layout-id'd motion box.

### Kicker Label
- The signature small typographic element. Tracked uppercase, label-size, sits above every section opener and as a metadata field on every article card.
- Implementation: `<span className="inline-flex items-center gap-2 rounded-full border border-line/80 bg-paper/70 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-mute backdrop-blur-sm">`.
- The 0.2em tracking is non-negotiable; the kicker is the most-repeated typographic element on the site and must read as the same idiom every time.

### Word-Reveal Headline
- Display headlines on `/`, `/saker`, `/om`, `/kontakt` animate in word-by-word: each word starts at `y: 100%`, opacity 0, with `overflow-hidden` clipping; reveals over 900ms with 70ms stagger and `ease-out-quart`-style cubic-bezier `(0.22, 1, 0.36, 1)`. Highlighted words render in italic + `text-coral-500`.
- Highlighted (italic) words get `pb-[0.3em] pr-[0.12em]` bottom/right padding on their clip-mask wrapper to prevent slanted descenders and right-edge ascenders from clipping. Regular words use `pb-[0.18em]`.
- Reduced-motion fallback renders the headline statically.

### Portrait Placeholder
- A `4:5` aspect-ratio SVG card with viewing-frame corner brackets at the four corners, a `currentColor` opacity-22 head-and-torso silhouette in the centre, and the label "PORTRETT" in tracked uppercase at the bottom. No grid, no decoration, no hex pattern — the brackets do the framing work alone.

## 6. Do's and Don'ts

### Do:
- **Do** use Manrope for every piece of text. Display weight 500, body weight 400, label weight 500.
- **Do** keep the Pressroom Brass accent below 10% of any screen. If two accent uses compete in one view, remove one.
- **Do** use tracked uppercase (`letter-spacing: 0.18em` or higher) for every label, kicker, and metadata field — and only at label sizes (≤0.78rem).
- **Do** put the email and phone one tap or one glance away on every page. Contact is the conversion.
- **Do** use the editorial hairline (`ring-1 ring-line` or `border-1 border-line`) for separation, never a colored side-stripe.
- **Do** respect `prefers-reduced-motion`. Word-reveal headlines, page transitions, and parallax must degrade to a static state.
- **Do** keep card hover-shadow transitions slow (500ms) and use the spring `cubic-bezier(0.22, 1, 0.36, 1)` exclusively.
- **Do** test contrast at WCAG AA (≥4.5:1 body, ≥3:1 large text) on every one of the five themes.

### Don't:
- **Don't** ship anything that could be mistaken for a **Squarespace / Wix portfolio template** — centred hero photo, big-script tagline, three feature cards, scroll-snap testimonials.
- **Don't** ship anything that reads as a **glossy influencer / personal-brand page** — hero portrait at 80vh, display-cursive name, "work with me" CTA, soft pastel gradients.
- **Don't** ship anything that looks like a **generic SaaS marketing landing** — gradient hero, three benefit columns with icons, "trusted by" logo strip, animated product mockup, dark-mode-toggle-in-the-corner.
- **Don't** use `#000` or `#fff` anywhere. Every neutral is tinted toward warm-grey (chroma ≈ 0.005–0.01).
- **Don't** use a `border-left` or `border-right` greater than 1px as a colored accent on cards, list items, callouts, or alerts. Side-stripe borders are forbidden.
- **Don't** apply `background-clip: text` with a gradient. Gradient text is forbidden. Emphasis via weight, size, or italic + accent color.
- **Don't** use glassmorphism decoratively. The header backdrop-blur and the contact-card backdrop-blur are sanctioned because they sit over the dotted vignette; nothing else gets `backdrop-blur` without explicit purpose.
- **Don't** use shadows on labels, badges, kickers, or any non-card surface. Flat by default.
- **Don't** introduce a second typeface. No serif for body, no monospace for accents, no display script for the name.
- **Don't** use em dashes (`—`) in copy. Per PRODUCT.md and the impeccable shared design laws: commas, colons, semicolons, periods, or parentheses instead.
- **Don't** add a CTA modal, "schedule a call" widget, or newsletter signup. Friction-free contact is the conversion — email and phone, full stop.
- **Don't** invent a sixth theme. Five is the surface area; six is too many.
- **Don't** animate CSS layout properties (`width`, `height`, `top`, `left`). Animate transform and opacity only.
- **Don't** use bounce or elastic easing curves. Spring `cubic-bezier(0.22, 1, 0.36, 1)` exclusively.
