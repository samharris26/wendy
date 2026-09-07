# Marketing site refresh — align asknoa.app to the Sept 2026 app redesign

**Date:** 2026-09-07
**Branch:** `redesign/app-aligned-refresh`
**Status:** approved direction, in progress (local only — no deploy until reviewed)

## Why

The iOS app shipped its "4a/5a" redesign in Sept 2026 (`ios/FamilyAssistant`, `FAColor`/`FAFont`/`FARadius` in `RootTabView.swift`). The marketing site was last aligned to the *previous* app system (warm cream / burnt orange / paper texture, July 2026, commit `695b246`). It now looks like a different product.

## What changed in the app

| | Site today (old app system) | App now (Sept 2026) |
|---|---|---|
| Background | warm cream `#ECE5D8` + site-wide paper-grain noise | cool blue-grey `#EAEEF8`, flat, no texture |
| Cards | white, 12px radius, warm border `#C7BFAD` | white, **8px** radius, cool border `#C7CEDE`, shadow `0 1px 2px` @ 5% |
| Accent | burnt orange `#D9623C` | periwinkle **`#4A5FD9`** (decorative / accent word) + brighter **`#2F6BED`** for anything tappable |
| Ink | navy `#0B2440` / warm grey `#6B7280` | navy `#0D2B45` / cool blue-grey `#55637A` |
| Type | Georgia serif headings · Plus Jakarta body · IBM Plex Mono eyebrows · Cormorant display | Georgia serif + Plus Jakarta **retained**; **no mono, no Cormorant**; italic accent word retained but **periwinkle, not orange** |
| Character | editorial: hand-drawn sparkles, "fig. 01" annotations, rotated sticker badges, tilted paper cards, dashed-orange outlines, ticker marquee, "System Operational" | calm, clean, restrained — none of that; one flat accent underline is the only flourish (and per review, we drop even that) |

## Decisions (from brainstorm)

1. **Scope:** full redesign — re-tone + rethink section order/hierarchy + tighten copy that leans on the removed motifs.
2. **Personality:** match the app closely. Strip mono eyebrows and decorative SVG; lean on serif + Jakarta + one accent. No hero underline.
3. **Accent split:** bright blue `#2F6BED` leads on CTAs/links; periwinkle `#4A5FD9` for the italic accent word and quiet decoration.
4. Keep it local — review, tweak, then a single deploy. Screenshots handled separately (placeholders stay).

## Design system (foundation)

### `app/globals.css` — new tokens
```
--color-background:      #EAEEF8
--color-surface:         #DEE3EE   /* subtle fill: chips, icon buttons */
--color-surface-alt:     #EFF2F7   /* neutral chip / quiet panel */
--color-card:            #FFFFFF
--color-primary-text:    #0D2B45
--color-secondary-text:  #55637A
--color-tertiary-text:   #8B97AB   /* placeholder / meta */
--color-border:          #C7CEDE
--color-rule:            rgba(15,41,74,0.10)
--color-accent:          #4A5FD9   /* periwinkle — accent word, decoration */
--color-accent-soft:     #E1E4F7
--color-accent-deep:     #33409C
--color-interactive:     #2F6BED   /* CTAs, links */
--color-interactive-ink: #1B4FC0
--color-interactive-tint:#EDF2FE
--color-success:         #2E9E63
--color-destructive:     #E06A5E
--color-charcoal:        #0D2B45
```
- **Remove** `body::before` paper-grain texture entirely.
- **Remove** `--font-ibm-plex-mono` and `--font-cormorant` (and their `next/font` loaders in `app/layout.tsx`). Keep only Plus Jakarta Sans.
- `h1–h6` / `.font-heading`: Georgia serif, weight 500, `letter-spacing: -0.01em` at large sizes.
- `.accent-italic`: `font-style: italic; color: var(--color-accent)` (periwinkle).
- `.eyebrow`: redefined — plain Jakarta, 12px, weight 600, `letter-spacing: 0.02em`, colour `--color-secondary-text`; **no** `::before` square, **no** mono. Used sparingly; several sections drop it and let the serif heading carry.
- `.noa-card`: `border-radius: 8px`, `border: 1px solid var(--color-border)`, `box-shadow: 0 1px 2px rgba(15,41,74,0.05)`.
- **Remove** `.sticker`, `.font-mono`, `.font-drama` utility classes and all usages.
- Keep `.reveal` scroll-in and `prefers-reduced-motion` block. Remove `.marquee`, `.system-dot`, `.stroke-draw`, `.typing-dot` stays only if a chat mock keeps its typing indicator (WhatsApp section) — otherwise remove.

### `tailwind.config.ts`
Add `interactive`, `interactiveInk`, `interactiveTint`, `surfaceAlt`, `tertiaryText` colour mappings. Soften the two `boxShadow` presets to the app's near-flat values.

## Section architecture (homepage `app/page.tsx`)

**Today:** Hero → Ticker → Features → DayWithNoa → HowItWorks → WhatsAppAssistant → HouseholdTrial → Pricing → Faq → FinalCta

**Proposed:** Hero → Features → HowItWorks → DayWithNoa → WhatsAppAssistant → Pricing → Faq → FinalCta

- **Remove `Ticker`** — the marquee has no counterpart in the app; reads as noise.
- **Move `HowItWorks` up** (after Features): what it does → how you start.
- **Fold `HouseholdTrial` into Pricing.** The 7-day trial is already carried by the Hero, HowItWorks step 2, the Household pricing card, the FAQ and FinalCta. Keep one clean "7 days free" treatment on the Household card + a one-line reassurance under the pricing grid; drop the standalone ticket/tear-off section.
- Keep `StickyDownloadBar` (mobile) and `CookieBanner`.

## Component-by-component

- **Navbar:** logo Georgia italic → periwinkle. "Download free" button → `interactive` blue. Drop the mono "Household free for 7 days" strip (or plain Jakarta, muted).
- **Hero:** remove hand-drawn `Underline`, `Sparkle`, concentric arcs, tilted paper card, "fig. 01 — your week" annotation, dashed QR border (→ plain 1px border, 8px radius). Drop mouse-parallax + phone rotation — static and calm; keep the entrance fade. Keep the phone + 3 floating chips, restyled as flat `noa-card`s with Jakarta labels (no rotation, no mono timestamps — use "Today", "8:12", "Done" in Jakarta). Eyebrow → plain or removed. CTA sublines → Jakarta, sentence case.
- **Features:** drop `F_01` mono indices and the per-card `hr`. Flatten bento cards (`noa-card`, no hover lift or reduce to `-translate-y-0.5`). Keep the live micro-animations; recolour orange→periwinkle/interactive, `PersonChip` mono→Jakarta, `MiniCheck` →`interactive`. Person hues: keep a small multi-colour set but cool them (periwinkle / blue / green).
- **HowItWorks:** remove the Cormorant giant numeral and "Step X of 3" mono line. Numerals become Georgia serif (large, `--color-accent`) or a simple `01 / 02 / 03`. Keep the 3-column rule layout, cool the borders.
- **DayWithNoa:** keep the timeline. Times stay but in Jakarta (not mono); remove the uppercase mono `tracking-[0.22em]` labels. Spine + time-dot restyled with cool border. Vignette mini-cards → flat, recoloured.
- **WhatsAppAssistant:** keep the phone chat mock. Noa bubble stays navy `--color-primary-text`; user bubble `--color-surface`. Remove mono "WhatsApp" / "online" → Jakarta. Bullet dots → `--color-accent`. Typing indicator may stay.
- **Pricing:** `.sticker` badge → clean pill (`interactive` bg or `accent-soft`). `+` mono bullets → check icon or `•`. Serif price kept (matches app). `per` / footnote → Jakarta. Highlight border → `--color-interactive`. Primary CTA → `interactive` blue; secondary → navy outline or navy fill.
  - **Open question flagged:** code ships Free / Single / Household; a stale memory note says the Free tier was removed in April. Keeping current copy as-is — confirm on review.
- **Faq:** remove `Q_01` mono and mono `+`. Marker → Jakarta `+`/chevron in `--color-interactive`. Keep the `<details>` accordion.
- **FinalCta:** navy section kept. Remove `Sparkle` and concentric arcs; keep one soft glow, recoloured to periwinkle/blue at low opacity. Dashed QR border → plain. On-navy accent `#E8835E` → a light periwinkle/blue that clears AA on navy (≈`#8FA4FF`). Mono subline → Jakarta.
- **Footer:** remove "System Operational" + pulsing dot. Column headers → Jakarta 12px 600 uppercase, normal tracking. Logo → periwinkle italic. Keep the three review badges.
- **StickyDownloadBar:** navy button → `interactive` blue.
- **LandingPage** (14 landing + 4 feature pages, one component): card radii `2xl`→8px, remove "Key features" mono eyebrow, icon circle `bg-accent/10`→`interactive-tint`, icon `text-accent`→`interactive`, borders cool, hero phone shadow softened.
- **Blog** (`app/blog/page.tsx`, `app/blog/[slug]/page.tsx`, `RelatedLinks`, `ShareButtons`): `rounded-2xl`→8px, `font-mono` dates/tags → Jakarta, `prose-a` accent→`interactive`, tag chips `bg-surface`→`surface-alt`, cool borders.
- **Privacy / Terms / join / not-found:** token-followers; quick visual pass only.

## Out of scope

- Screenshots / app imagery (handled separately — placeholders stay).
- `components/ProductVisual.tsx`, `components/WaitlistForm.tsx` — unused/dead, not touched (contain legacy "Wendy" naming; flag for separate cleanup).
- Blog post *content*.
- Copy rewrite beyond removing lines tied to deleted motifs and obvious tightening.

## Delivery

Staged commits on `redesign/app-aligned-refresh`, each verified against the local dev server:
1. Foundation — tokens, globals, font loaders, tailwind config.
2. Chrome — Navbar, Footer, StickyDownloadBar, layout.
3. Homepage sections — Hero, Features, HowItWorks, DayWithNoa, WhatsAppAssistant, Pricing (+ folded trial), Faq, FinalCta; page.tsx reorder; delete Ticker + HouseholdTrial.
4. LandingPage + feature pages.
5. Blog + legal + join.
6. Cleanup — remove dead CSS utilities, unused imports, `Ticker.tsx`, `HouseholdTrial.tsx`.

Review locally, tweak, then one `vercel --prod` deploy.
