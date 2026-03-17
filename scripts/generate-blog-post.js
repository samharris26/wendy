const OpenAI = require("openai");
const fs = require("fs");
const path = require("path");

const POSTS_DIR = path.join(__dirname, "..", "blog", "posts");
const TOPICS_PATH = path.join(__dirname, "topics.json");

async function main() {
  // Ensure posts directory exists
  if (!fs.existsSync(POSTS_DIR)) {
    fs.mkdirSync(POSTS_DIR, { recursive: true });
  }

  // Load topics
  const topics = JSON.parse(fs.readFileSync(TOPICS_PATH, "utf-8"));

  // Count existing posts for topic rotation
  const existingPosts = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"));
  const topicIndex = existingPosts.length % topics.length;
  const topic = topics[topicIndex];

  console.log(`Generating post ${existingPosts.length + 1}`);
  console.log(`Topic: ${topic.title} (index ${topicIndex}/${topics.length})`);

  // Build today's date
  const today = new Date();
  const dateStr = today.toISOString().split("T")[0]; // YYYY-MM-DD

  // Check if a post already exists for today
  const todayPrefix = dateStr;
  const alreadyExists = existingPosts.some((f) => f.startsWith(todayPrefix));
  if (alreadyExists) {
    console.log(`A post for ${dateStr} already exists. Skipping.`);
    return;
  }

  const systemPrompt = `You are a blog writer for Noa (www.asknoa.app), a family productivity app that combines calendars, tasks, lists, and reminders in one beautifully designed iOS app with WhatsApp integration.

Write in UK English (organisation not organization, colour not color, etc.). Target audience: busy parents, couples, and families who want to be more organised.

Rules:
- Write between 900 and 1200 words
- Use ## for section headings (H2). Do NOT include an H1 title — the title is handled separately in the page template
- Be practical and actionable — give specific, concrete advice readers can apply today
- Write in a warm, knowledgeable tone — like a helpful friend, not a corporate blog
- Naturally mention Noa where relevant but no more than 2-3 times in the whole article
- Include a clear call-to-action paragraph at the end encouraging readers to try Noa. Always use a markdown link: [Noa](https://www.asknoa.app). NEVER write a bare URL — always use markdown link syntax
- Do NOT start with cliches like "In today's fast-paced world" or "Are you tired of..."
- Do NOT use the words "journey", "game-changer", "unlock", "leverage", "revolutionise", or "empower" — not even in different capitalisation
- Do NOT include any frontmatter, metadata, or YAML — just the article content
- Use bullet points and numbered lists where they aid clarity
- Include at least 3 H2 sections
- Write for SEO: naturally incorporate relevant keywords without stuffing`;

  const userPrompt = `${topic.prompt}

Return the article title on the very first line, prefixed with "TITLE: ". Then leave a blank line and write the full article body in markdown.

Example format:
TITLE: Your Article Title Here

## First Section
Content here...`;

  // Call OpenAI API
  const client = new OpenAI();
  const response = await client.chat.completions.create({
    model: "gpt-4o",
    max_tokens: 2000,
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt },
    ],
  });

  const content = response.choices[0].message.content;

  // Parse title from response
  const lines = content.split("\n");
  let title = topic.title; // fallback
  let bodyStartIndex = 0;

  if (lines[0].startsWith("TITLE: ")) {
    title = lines[0].replace("TITLE: ", "").trim();
    bodyStartIndex = 1;
    // Skip blank line after title
    if (lines[bodyStartIndex] && lines[bodyStartIndex].trim() === "") {
      bodyStartIndex++;
    }
  }

  const body = lines.slice(bodyStartIndex).join("\n").trim();

  // Generate slug from title
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  // Generate description (first ~155 chars of first paragraph)
  const firstParagraph = body
    .split("\n\n")
    .find((p) => p && !p.startsWith("#"));
  const description = firstParagraph
    ? firstParagraph
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // strip markdown links
        .replace(/[*_`]/g, "") // strip formatting
        .slice(0, 155)
        .trim() + "..."
    : topic.title;

  // Build tags
  const baseTags = ["productivity", "family", "organisation"];
  const topicWords = topic.title.toLowerCase().split(/\s+/);
  const extraTags = [];
  if (topicWords.some((w) => ["calendar", "scheduling", "planning"].includes(w)))
    extraTags.push("calendar");
  if (topicWords.some((w) => ["task", "tasks", "chore", "chores", "todo"].includes(w)))
    extraTags.push("tasks");
  if (topicWords.some((w) => ["whatsapp", "digital", "tech", "screen"].includes(w)))
    extraTags.push("technology");
  if (topicWords.some((w) => ["meal", "holiday", "travel", "school"].includes(w)))
    extraTags.push("lifestyle");
  const tags = [...new Set([...baseTags, ...extraTags])];

  // Build frontmatter + file content
  const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
date: "${dateStr}"
description: "${description.replace(/"/g, '\\"')}"
tags: [${tags.map((t) => `"${t}"`).join(", ")}]
---`;

  const fileContent = `${frontmatter}\n\n${body}\n`;
  const filename = `${dateStr}-${slug}.md`;
  const filepath = path.join(POSTS_DIR, filename);

  fs.writeFileSync(filepath, fileContent, "utf-8");
  console.log(`Written: blog/posts/${filename}`);
  console.log(`Title: ${title}`);
  console.log(`Tags: ${tags.join(", ")}`);
}

main().catch((err) => {
  console.error("Failed to generate blog post:", err);
  process.exit(1);
});
