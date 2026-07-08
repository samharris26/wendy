const OpenAI = require("openai");
const fs = require("fs");
const path = require("path");

const POSTS_DIR = path.join(__dirname, "..", "blog", "posts");
const TOPICS_PATH = path.join(__dirname, "topics.json");

// Pages the model may link to inline (1–2 per post, only where genuinely relevant)
const INTERNAL_LINKS = `
- https://www.asknoa.app/features/shared-family-calendar — shared family calendar feature
- https://www.asknoa.app/features/tasks — tasks & assignment feature
- https://www.asknoa.app/features/shared-lists — shared lists feature
- https://www.asknoa.app/features/whatsapp-assistant — WhatsApp assistant feature`;

async function main() {
  if (!fs.existsSync(POSTS_DIR)) {
    fs.mkdirSync(POSTS_DIR, { recursive: true });
  }

  // Topic queue: each topic is written exactly once. No rotation, no repeats —
  // repeating a topic produces a near-duplicate post competing with our own
  // earlier one for the same query.
  const topicsFile = JSON.parse(fs.readFileSync(TOPICS_PATH, "utf-8"));
  const topic = topicsFile.topics.find((t) => t.status === "todo");

  if (!topic) {
    console.log(
      "Topic queue is empty — no post generated. Add new topics to scripts/topics.json (source them from Search Console queries and People-Also-Ask boxes)."
    );
    return;
  }

  const existingPosts = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"));

  const today = new Date();
  const dateStr = today.toISOString().split("T")[0]; // YYYY-MM-DD

  const alreadyExists = existingPosts.some((f) => f.startsWith(dateStr));
  if (alreadyExists) {
    console.log(`A post for ${dateStr} already exists. Skipping.`);
    return;
  }

  console.log(`Generating draft: ${topic.title}`);
  console.log(`Target query: ${topic.keyword}`);

  const systemPrompt = `You write for the blog of Noa (www.asknoa.app), an iPhone app that brings a family's calendars, tasks and shopping lists into one place, with a WhatsApp assistant. Readers are busy UK parents and couples.

Your job is a strong FIRST DRAFT for a human editor — clarity and specificity beat polish.

VOICE — this is the most important section:
- Open inside a specific, recognisable scene from family life (the overflowing bin, the crumpled letter in the book bag, the 9pm "have we got a card?"). Never open with a definition, a statistic, or a question to the reader.
- Write like one specific person with opinions, not a consensus document. Take positions ("chore charts die by week three, and it's not your fault").
- Concrete beats abstract, always: "the £2 bake-sale coins" not "school-related financial obligations". UK texture: school run, book bags, bin night, half-term, the big shop.
- Vary sentence length aggressively. Some sentences should be four words. Contractions always.
- It's fine to be funny once or twice; it must never be fine to be bland.

STRUCTURE:
- 700–1000 words. Shorter and sharper beats longer and thorough.
- ## for section headings (no H1 — the template handles the title). Headings should be interesting on their own, not labels ("The Argument That Isn't About the Bins", not "Communication Problems").
- Bullet lists only when a list is genuinely the clearest form — at most one per post. Never end a post with a list.
- End with one closing thought that lands the core idea, followed by a single soft sentence pointing at Noa with a markdown link: [Noa](https://www.asknoa.app). No hard sell, no feature list.

SEO (quiet, not stuffed):
- The post targets ONE query, given by the user. Work it (or a close natural variant) into the title, exactly one H2, and the first 100 words. Nowhere else on purpose.
- Where genuinely relevant, link 1–2 of these pages inline with descriptive anchor text (markdown links only):${INTERNAL_LINKS}

BANNED — these mark text as machine-written:
- Openers: "In today's fast-paced world", "Are you tired of", "We've all been there", "Picture this", "Let's face it", "In the hustle and bustle".
- Words: journey, game-changer, unlock, leverage, revolutionise, empower, seamless, effortless, dive in, delve, elevate, supercharge, foster, streamline, robust.
- Structures: a bold-label bullet list of "benefits"; three-item parallel sentences ("It's not X. It's not Y. It's Z.") more than once; a summary section that restates the post; rhetorical questions as transitions.
- Any sentence that could appear unchanged in a competitor's blog.

FORMAT: no frontmatter or YAML. UK English throughout.`;

  const userPrompt = `Target query: "${topic.keyword}"

Brief: ${topic.prompt}

Return exactly this format:
TITLE: <title — compelling first, keyword-bearing second; sentence case; no colons-plus-subtitle formula>
DESCRIPTION: <140–155 chars for the meta description — a hook written for a human skimming search results, not a summary>

<article body in markdown>`;

  const client = new OpenAI();
  const response = await client.chat.completions.create({
    model: "gpt-4o",
    max_tokens: 2200,
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt },
    ],
  });

  const content = response.choices[0].message.content;

  // Parse TITLE / DESCRIPTION header lines
  const lines = content.split("\n");
  let title = topic.title;
  let description = "";
  let bodyStartIndex = 0;

  for (let i = 0; i < Math.min(lines.length, 5); i++) {
    if (lines[i].startsWith("TITLE: ")) {
      title = lines[i].replace("TITLE: ", "").trim();
      bodyStartIndex = i + 1;
    } else if (lines[i].startsWith("DESCRIPTION: ")) {
      description = lines[i].replace("DESCRIPTION: ", "").trim();
      bodyStartIndex = i + 1;
    }
  }
  while (lines[bodyStartIndex] && lines[bodyStartIndex].trim() === "") {
    bodyStartIndex++;
  }

  const body = lines.slice(bodyStartIndex).join("\n").trim();

  // Fallback description: first paragraph, stripped
  if (!description) {
    const firstParagraph = body
      .split("\n\n")
      .find((p) => p && !p.startsWith("#"));
    description = firstParagraph
      ? firstParagraph
          .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
          .replace(/[*_`]/g, "")
          .slice(0, 155)
          .trim() + "..."
      : topic.title;
  }

  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  const baseTags = ["family", "organisation"];
  const kw = topic.keyword.toLowerCase();
  const extraTags = [];
  if (/calendar|schedul|plan/.test(kw)) extraTags.push("calendar");
  if (/task|chore|todo|to-do/.test(kw)) extraTags.push("tasks");
  if (/whatsapp|digital|tech|screen/.test(kw)) extraTags.push("technology");
  if (/meal|holiday|travel|school|birthday/.test(kw)) extraTags.push("lifestyle");
  const tags = [...new Set([...baseTags, ...extraTags])];

  const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
date: "${dateStr}"
description: "${description.replace(/"/g, '\\"')}"
keyword: "${topic.keyword.replace(/"/g, '\\"')}"
author: "The Noa Team"
tags: [${tags.map((t) => `"${t}"`).join(", ")}]
---`;

  const fileContent = `${frontmatter}\n\n${body}\n`;
  const filename = `${dateStr}-${slug}.md`;
  fs.writeFileSync(path.join(POSTS_DIR, filename), fileContent, "utf-8");

  // Mark the topic done so it is never written twice
  topic.status = "done";
  fs.writeFileSync(TOPICS_PATH, JSON.stringify(topicsFile, null, 2) + "\n", "utf-8");

  console.log(`Written: blog/posts/${filename}`);
  console.log(`Title: ${title}`);
  console.log(`Remaining topics in queue: ${topicsFile.topics.filter((t) => t.status === "todo").length}`);
}

main().catch((err) => {
  console.error("Failed to generate blog post:", err);
  process.exit(1);
});
