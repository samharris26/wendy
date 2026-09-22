# Noa blog — editorial policy

Updated 2026-09-22 for the blog refresh
(`docs/superpowers/specs/2026-09-22-blog-refresh-design.md`). The blog moved
from anonymous SEO articles (44 posts, about one search click a quarter) to
fewer, better posts written by Sam, built to be shared.

## The rules

1. **Written by Sam, in the first person.** Every post is Sam's voice and
   carries Sam's name. Nothing about Sam's household is ever invented: where
   a real detail would help, the draft leaves `<!-- TODO(sam): … -->` and Sam
   fills it in or deletes the line. These comments never reach the page.

2. **Nothing publishes unedited.** Every other Tuesday the GitHub Action
   drafts the next brief with Claude and opens a **draft PR**, requests Sam's
   review and emails Sam. Sam edits, then merges to publish. If a draft isn't
   worth editing, close the PR: an unpublished post costs nothing, a bland
   one costs trust.

3. **Four formats.** Every post has a `format`:
   - `from-sam`: an opinionated, practical post from real life
   - `printable`: a post built around a free A4 sheet (`public/printables`)
   - `seasonal`: timed to the school year (half-term, Christmas, back to school)
   - `data`: aggregate numbers from Noa, **on hold** until there are enough
     households for honest figures (139 users, 3 households on 2026-09-22)

4. **Numbers need a source.** A stat block needs a named public source
   (ONS, NHS, DfE, GOV.UK) in its `source` line, checked by Sam before merge.
   No invented statistics, studies or quotes. Ever.

5. **Voice.**
   - Open inside a specific scene, never with a definition or a question.
   - Opinionated, concrete, UK texture (book bags, bin night, half-term).
   - 600–1000 words. Headings that are interesting on their own.
   - Two to four designed blocks where they help (see below). Never end on a list.
   - One soft Noa mention at the end, plus at most one or two inline links
     where the product genuinely fits. No feature dumps, and only features
     Noa really has.

6. **Every post is shareable.** Frontmatter carries a short `cardTitle`, a
   `dek`, a `quote` (for the quote card) and a `cover`; most posts also get a
   five-slide `carousel`. The share images are generated from these fields:
   see `/blog/<slug>/share` for the kit.

## Designed blocks (markdown directives)

```
:::checklist{label="The whole routine"}
- one
- two
:::

:::quote
A line worth pulling out (also the frontmatter quote).
:::

:::stat{figure="60%" source="ONS, 2016"}
caption for the figure
:::

::app{src="/images/home.png" caption="…"}
::printable{pdf="/printables/sheet.pdf" title="…" body="…"}
```

## Adding briefs

Append to `briefs` in `scripts/topics.json` with `status: "todo"`: an `id`,
a `format`, a working `title`, the `angle`, and optionally a `keyword`,
trusted `sources` and your `notes`. The first `todo` brief is drafted next,
so order matters. Good sources: questions from real users, the school
calendar, and Search Console queries we already get impressions for.
`retiredKeywords` lists the old generator's topics, so they aren't repeated.

## Printables

Add a sheet to `scripts/build-printables.mjs`, run
`node scripts/build-printables.mjs <id>`, and commit the PDF.
