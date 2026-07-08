# Noa blog — editorial policy

Updated 2026-07-08, after reviewing 3 months of Search Console data: 35 published
posts earned ~60 impressions and 1 click. Volume isn't the problem to solve;
distinctiveness and targeting are.

## The rules

1. **One post = one search query.** Every post targets exactly one query
   (`keyword` in the frontmatter), chosen from Search Console data or
   People-Also-Ask boxes. Never two posts on the same query — they compete
   with each other, not with competitors. The queue in `scripts/topics.json`
   enforces this: topics run once, `todo` → `done`, no rotation.

2. **Nothing publishes unedited.** The Tuesday GitHub Action opens a **PR
   draft**, not a commit to main. A human (Sam) edits before merging:
   - Rewrite the opening scene from real life if it feels generic.
   - Cut anything you wouldn't say out loud to another parent.
   - Add one detail only our household would know.
   - Read it aloud once. If a sentence bores you, it bores everyone.
   If a draft isn't worth editing, close the PR — an unpublished post costs
   nothing; a bland one costs trust.

3. **Cadence: one a week, or fewer.** When the topic queue is empty the
   pipeline stops rather than repeating itself. Refill it deliberately.

4. **Voice** (encoded in the generator prompt, enforced in the edit):
   - Open inside a specific scene, never with a definition or a question.
   - Opinionated, concrete, UK texture (book bags, bin night, half-term).
   - 700–1000 words. Headings that are interesting on their own.
   - At most one bullet list. Never end on a list.
   - One soft Noa mention at the end + at most 1–2 inline links where the
     product genuinely fits. No feature dumps.

5. **What the blog is for.** Informational queries only (how-to, why, when).
   Commercial queries ("best family organiser app", "cozi alternative")
   belong to the dedicated landing pages in `app/(landing)/` — link to them,
   don't duplicate them.

## Adding topics

Append to `scripts/topics.json` with `status: "todo"` and a `keyword`. Good
sources, in order: queries we already get impressions for at position 15+,
People-Also-Ask under those queries, questions from real users (App Store
reviews, support email, Reddit r/Parenting threads).
