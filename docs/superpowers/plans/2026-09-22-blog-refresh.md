# Blog refresh Implementation Plan

> Executed inline by the author of the spec in one session (Sam: "do what you
> can"). Steps use checkbox syntax. Visual measurements live in the handoff
> README (`~/Downloads/design_handoff_blog/README.md`) — build to it, don't
> re-derive.

**Goal:** Ship spec `docs/superpowers/specs/2026-09-22-blog-refresh-design.md`.

**Architecture:** `lib/blog.ts` grows a typed frontmatter model + a
remark-directive pipeline that emits the five inline blocks as HTML with
`blog-*` classes (styled in `app/blog/blog.css`). Share images are
`next/og` route handlers under `app/blog/[slug]/card/[kind]/route.tsx`,
sharing layout code in `lib/cards/`. Fonts are bundled TTFs read at request
time.

**Tech stack:** Next 15 app router, Tailwind 3, gray-matter, remark 15,
remark-directive, next/og, Anthropic SDK (pipeline), Resend REST (notify).

## Global constraints
- Tokens only from `app/globals.css` / handoff (no new colours).
- Playfair Display 500 for display only; Plus Jakarta Sans elsewhere; no italics.
- Cards: flat shapes + text; size bands, never truncate; stat `source` required.
- Author default: `Sam` / "Founder of Noa".
- Never `git add -A` (shared checkout); commit explicit paths.

## File map
- `lib/blog.ts` — model + parsing (modify)
- `lib/blog-directives.ts` — remark plugin: directives → block HTML (create)
- `lib/cards/fonts.ts`, `lib/cards/bands.ts`, `lib/cards/templates.tsx` (create)
- `app/blog/[slug]/card/[kind]/route.tsx` (create)
- `app/blog/[slug]/share/page.tsx` (create)
- `app/blog/page.tsx` + `components/blog/*` (rewrite / create)
- `app/blog/[slug]/page.tsx` (rewrite)
- `app/blog/blog.css` (create), `app/about/page.tsx` (create)
- `next.config.ts` (redirects), `blog/posts/*` (content)
- `scripts/generate-blog-post.js`, `scripts/notify-draft.js`,
  `scripts/topics.json`, `.github/workflows/generate-blog-post.yml`

## Tasks

### Task 1: Post model + directives
- [ ] Add `remark-directive`, `remark-rehype`-free path: keep `remark-html`
      with `sanitize: false`; plugin converts directive nodes to `html` nodes.
- [ ] `BlogPostMeta` gains `format: 'from-sam'|'printable'|'seasonal'|'data'`,
      `dek`, `featured`, `cover: CardCover`, `pdf?`, `author`, `authorRole`.
- [ ] `lib/cards/bands.ts`: `titleBand(kind, text)`, `quoteBand(text)`,
      `figureBand(text)` returning `{ size, maxEm, lineHeight }` per handoff.
- [ ] Verify: `node --test scripts/__tests__/bands.test.mjs` (band edges) and
      render a fixture post containing all five directives.

### Task 2: Share-card routes
- [ ] Download Playfair Display 500 + Plus Jakarta Sans 400/500/600/700 TTF
      into `assets/fonts/`.
- [ ] Templates: link 1200×630, pin 1000×1500, stat & quote & slide-1..5
      1080×1350. `kind` validated; unknown → 404; quote > 260 → link card.
- [ ] Verify each route in the browser for a short and a long title.

### Task 3: Index page (19a/19b)
- [ ] Server page reads posts; client `FormatFilter` toggles `data-format`
      visibility; pills only for present formats; featured = `featured:true`
      or newest.
- [ ] Verify 1440 and 390 widths; no horizontal scroll.

### Task 4: Post page (19c/19d) + share kit + about
- [ ] Header, cover (link card image), share rail / mobile pills (copy,
      WhatsApp, Pinterest with pin image `media=`, email), body, author box,
      Noa panel, 3 related (same format first, then newest).
- [ ] Metadata + JSON-LD (`Person` author, image = link card).
- [ ] `/blog/[slug]/share` noindex kit; `/about`.
- [ ] Verify desktop + mobile; `next build` green.

### Task 5: Content prune + rewrites
- [ ] Rewrite 11 keepers (first person, directives, `format`, `dek`, `cover`,
      `TODO(sam)` markers); delete the other 33; add 301s.
- [ ] Verify: every removed slug 301s to a live keeper (script over
      `next.config.ts` list vs `getAllPostSlugs`).

### Task 6: Pipeline
- [ ] Topic briefs queue with first briefs (half-term planner first).
- [ ] Generator on Anthropic SDK; writes post on a branch.
- [ ] Workflow: fortnight guard, draft PR, review request, notify email.
- [ ] Verify: `node scripts/generate-blog-post.js --dry-run` prints prompt;
      `node scripts/notify-draft.js --dry-run` prints email HTML.

### Task 7: Handover
- [ ] Push branch, open PR (not merged), list of Sam's pickups.
