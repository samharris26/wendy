# Blog refresh — design

Date: 2026-09-22 · Status: approved by Sam in chat · Branch: `feat/blog-refresh`

Visual source of truth: the Claude Design handoff at
`~/Downloads/design_handoff_blog/` (`README.md` + `Noa Blog.dc.html`, artboards
19a–19j). This spec records the decisions around it; it does not repeat the
handoff's measurements — build to the README.

## Why

44 auto-published gpt-4o posts, signed "The Noa Team", no images, a stale cream
OG card. ~1 search click in a quarter. The blog moves from anonymous SEO copy to
first-person posts by Sam, with generated share imagery made to travel
(Pinterest, Instagram, link previews).

## Decisions

- **Voice:** Sam, first person. `author` defaults to Sam everywhere (page,
  JSON-LD, cards).
- **Formats:** `from-sam`, `printable`, `seasonal`, `data`. Filter pills only
  render for formats that have at least one post, so **Noa Data stays hidden**:
  on 2026-09-22 the app had 139 users / 3 households / 13 task creators in 30
  days — too few for honest aggregate claims. Stat blocks and stat cards ship,
  but only with public, sourced figures; `source` is required.
- **Old posts:** prune 44 → 11 keepers, rewritten in Sam's voice; the rest 301
  to their closest keeper (or a landing page).
- **Pipeline:** fortnightly GitHub Action drafts a post with Claude from a topic
  brief, opens a **draft PR**, requests Sam's review (GitHub email) and sends a
  Resend email with the title, preview link and card images. Merge = publish.

## Phases (each shippable alone)

### 1 · Look + share images
- Frontmatter additions (all optional, sensible defaults so old posts render):
  `format` (default `from-sam`), `dek` (falls back to `description`),
  `featured` (bool), `cover` (`{ kind: title|stat|quote|checklist, figure,
  caption, source, quote, items[] }`), `pdf` (path under `/public/printables`),
  `author` (default Sam).
- Markdown directives via `remark-directive`, rendered to the handoff's five
  inline blocks: `:::stat{figure caption source}`, `:::quote{by}`,
  `:::app{src caption}`, `:::printable{pdf title body thumb}`,
  `:::checklist{label}` (list inside). All 780px with the −50px overhang.
- `/blog` index (19a/19b): masthead, client-side format pills, featured panel,
  3-col grid with the four cover treatments, author strip, signup + quiet app CTA.
- `/blog/[slug]` (19c/19d): header, cover (= link card), sticky share rail
  (copy, WhatsApp, Pinterest, email; rail → pill row on mobile), body,
  author box, one-sentence Noa panel, 3 related.
- Share images, one `next/og` route per template with bundled Playfair Display
  500 + Plus Jakarta Sans TTFs and the handoff's size bands (never truncate):
  `/blog/[slug]/card/{link,pin,stat,quote,slide-1..5}`. Link card is the index
  cover, post cover, `og:image`, `twitter:image` and JSON-LD `image`. Pinterest
  share uses the pin. Quote card refuses quotes > 260 chars (falls back to link).
- `/blog/[slug]/share` — unlisted (`noindex`) share kit listing every image
  with download links.
- `/about` — short founder page for "About Sam ›".
- Remove the old `/api/og` usage from the blog and the "The Noa Team" default.

### 2 · Content
Keepers (slug stays stable where the old slug is decent; otherwise new slug +
redirect): Sunday reset, chores by age, the invisible job, grandparents,
co-parenting calendar, sharing a family calendar, school admin, birthdays &
gifts, ADHD-friendly household, meal planning + shopping list, family holidays
+ packing list. The other 33 posts are deleted and 301'd via
`removedBlogPostRedirects` in `next.config.ts` (existing mechanism). Rewrites
follow `blog/EDITORIAL.md`; each carries `TODO(sam)` markers where only Sam's
household detail will do — these must be cleared before merge.

### 3 · Pipeline
- `scripts/topics.json` becomes a queue of briefs:
  `{ id, format, title, angle, keyword?, sources[], notes, status }`.
- `scripts/generate-blog-post.js` → Anthropic SDK, current Claude model, prompt
  from `EDITORIAL.md` + brief; outputs frontmatter incl. `format`, `dek`,
  `cover`; leaves `TODO(sam)` markers.
- Workflow: cron every other Tuesday (week-parity guard), creates branch
  `blog/draft-<id>`, opens a draft PR with the editing checklist, requests
  review from `samharris26`, and emails Sam via Resend
  (`scripts/notify-draft.js`) with the preview URL and card links.
- Secrets: `ANTHROPIC_API_KEY`, `RESEND_API_KEY`; repo setting "Allow GitHub
  Actions to create and approve pull requests".

## Out of scope
Noa Data posts (until volume), real PDFs beyond first drafts, photography.

## Needs from Sam
Photo (`public/images/sam.jpg`), clean populated app screenshots, printable
PDFs sign-off, GitHub secrets + Actions PR permission, `TODO(sam)` details.

## Testing
`next build` green; every card route renders at the right size for a short and
a long title (checked in the browser); old slugs 301 correctly; metadata
points at the link card; mobile 390px has no horizontal scroll.
