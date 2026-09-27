// Drafts the next blog post from the brief queue in scripts/topics.json, for
// Sam to edit in a draft PR (see .github/workflows/generate-blog-post.yml and
// blog/EDITORIAL.md). Nothing this script writes is published until merged.
//
//   node scripts/generate-blog-post.js            # draft the next brief
//   node scripts/generate-blog-post.js --dry-run  # print the prompt, call nothing
//
// Writes blog/posts/<date>-<slug>.md, marks the brief done, and prints a JSON
// line {"file","slug","title","briefId"} for the workflow to pick up.

const Anthropic = require("@anthropic-ai/sdk");
const matter = require("gray-matter");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const POSTS_DIR = path.join(ROOT, "blog", "posts");
const TOPICS_PATH = path.join(__dirname, "topics.json");
const EDITORIAL = fs.readFileSync(path.join(ROOT, "blog", "EDITORIAL.md"), "utf-8");
const MODEL = "claude-opus-5";

const FORMATS = ["from-sam", "printable", "seasonal", "data"];

// Pages the draft may link to inline, where genuinely relevant.
const LINKS = `
- /blog/<slug> for any existing post listed above
- https://www.asknoa.app/shared-family-calendar (shared family calendar)
- https://www.asknoa.app/features/tasks (tasks you can assign)
- https://www.asknoa.app/family-shopping-list (shared shopping list)
- https://www.asknoa.app/shared-list-app (shared lists)`;

function existingPosts() {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const { data } = matter(fs.readFileSync(path.join(POSTS_DIR, f), "utf-8"));
      return { slug: f.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, ""), title: data.title, format: data.format };
    });
}

function printables() {
  const dir = path.join(ROOT, "public", "printables");
  return fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith(".pdf")).map((f) => `/printables/${f}`) : [];
}

// The one post we treat as the reference for voice and frontmatter shape.
function examplePost() {
  const f = fs.readdirSync(POSTS_DIR).find((n) => n.endsWith("sunday-reset-routine.md"));
  return f ? fs.readFileSync(path.join(POSTS_DIR, f), "utf-8") : "";
}

function buildPrompt(brief, posts, date) {
  const system = `You draft posts for the Noa blog (asknoa.app/blog). Noa is an iPhone app for households: one shared calendar, shared lists and tasks you can assign to a person. The blog is written in the first person by Sam, Noa's founder, for busy UK parents.

Your draft goes to Sam in a pull request, and Sam will only read it through before publishing. So it must be finished: nothing left to fill in, and nothing a careful reader could catch out as untrue.

The editorial policy below is binding:

<editorial_policy>
${EDITORIAL}
</editorial_policy>

Hard rules on truth, because this is published under a real person's name:
- Never invent facts about Sam, Sam's household, children, partner, city or history, and never tell a story as something that happened to Sam. First person is for opinions and advice ("I'd start with two jobs each"), not for anecdotes. Scenes are written as recognisable moments in any house ("It's 8.40 and someone at the school gate is wearing a onesie"), not as Sam's memories.
- Never invent statistics, studies or quotes. Only use a :::stat block when the brief's sources give the exact figure; otherwise make the point without a number.
- Only describe Noa features listed here: one shared calendar for the household, a colour for each person, events that repeat (including every year) with reminders, shared lists (with the whole household or just some members), tasks assigned to people with reminders, and a morning briefing. Never imply any other feature.
- Leave no TODOs, placeholders, square-bracket gaps or notes to Sam. If a point can't be made truthfully without Sam's input, cut it.

Markdown directives the site renders as designed blocks (use two to four, where they genuinely help):
- :::checklist{label="..."} followed by a markdown list and :::
- :::quote followed by one line and :::   (the line must also appear as the frontmatter quote)
- ::app{src="/images/home.png" caption="..."}   (screenshots available: /images/home.png, /images/calendar.png, /images/lists.png, /images/tasks.png)
- ::printable{pdf="..." title="..." body="..."}   (only with one of these existing PDFs: ${printables().join(", ") || "none"}; never invent a PDF path)
- :::stat{figure="..." source="..."} caption :::   (see the truth rules)

Output the complete markdown file and nothing else: YAML frontmatter, then the body. Frontmatter fields, in this order: title, cardTitle (40 characters or fewer, for the share card), date, description (140 to 155 characters, for search results), dek (one or two sentences under the title), keyword, format, tags (two to four), quote (under 200 characters, taken from the post), cover, and carousel (hook, sub, three points each with title and body, close, closeSub). Cover is one of: {kind: "title"}, {kind: "calendar", caption}, {kind: "phone", screenshot}, {kind: "checklist", items: [{text, done}] with four short items, the first two done}. Do not include author, pdf or featured; the site fills those in. Quote YAML strings with double quotes.

Here is a published post that shows the voice, the directives and the frontmatter shape exactly:

<example_post>
${examplePost()}
</example_post>`;

  const user = `Draft the next post.

<brief>
Format: ${brief.format}
Working title: ${brief.title}
Angle: ${brief.angle}
${brief.keyword ? `Search query to serve: ${brief.keyword}` : "No search target: write for sharing, not for search."}
${brief.sources?.length ? `Sources Sam trusts for this one: ${brief.sources.join("; ")}` : ""}
${brief.notes ? `Sam's notes: ${brief.notes}` : ""}
</brief>

Date for the frontmatter: ${date}

Existing posts (link to one or two where it helps; never cover the same ground):
${posts.map((p) => `- /blog/${p.slug}: ${p.title} (${p.format})`).join("\n")}

Other pages you may link to:${LINKS}`;

  return { system, user };
}

function validate(markdown, brief) {
  const { data, content } = matter(markdown);
  const missing = ["title", "cardTitle", "description", "dek", "format", "quote", "cover"].filter((k) => !data[k]);
  if (missing.length) throw new Error(`Draft frontmatter is missing: ${missing.join(", ")}`);
  if (!FORMATS.includes(data.format)) throw new Error(`Unknown format "${data.format}"`);
  if (data.format !== brief.format) console.warn(`Note: brief asked for ${brief.format}, draft says ${data.format}`);
  if (data.quote.length > 260) throw new Error("Quote is over 260 characters; the quote card can't set it");
  if (content.trim().split(/\s+/).length < 300) throw new Error("Draft body is under 300 words");
  // Drafts must be publishable after a read-through: no notes left for Sam.
  if (/TODO|<!--|\[(?:insert|add|name|your)[^\]]*\]/i.test(markdown)) throw new Error("Draft still contains a TODO, comment or placeholder");
  const pdfs = [...content.matchAll(/pdf="([^"]+)"/g)].map((m) => m[1]).filter((p) => !printables().includes(p));
  if (pdfs.length) throw new Error(`Draft links a printable that doesn't exist: ${pdfs.join(", ")}`);
  return data;
}

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .split("-")
    .slice(0, 8)
    .join("-");
}

async function main() {
  const dryRun = process.argv.includes("--dry-run");
  const queue = JSON.parse(fs.readFileSync(TOPICS_PATH, "utf-8"));
  const brief = queue.briefs.find((b) => b.status === "todo");
  if (!brief) {
    console.error("Brief queue is empty: no draft. Add briefs to scripts/topics.json.");
    return;
  }

  const date = new Date().toISOString().slice(0, 10);
  const { system, user } = buildPrompt(brief, existingPosts(), date);

  if (dryRun) {
    console.log(`--- system (${system.length} chars) ---\n${system}\n\n--- user ---\n${user}`);
    return;
  }

  const client = new Anthropic();
  const messages = [{ role: "user", content: user }];
  let text;
  let data;
  let response;
  // One retry: a draft that fails validation goes back with the reason.
  for (let attempt = 1; ; attempt++) {
    response = await client.beta.messages.create({
      model: MODEL,
      max_tokens: 16000,
      thinking: { type: "adaptive" },
      output_config: { effort: "high" },
      // Server-side fallback if the request is declined by a safety classifier.
      betas: ["server-side-fallback-2026-06-01"],
      fallbacks: [{ model: "claude-opus-4-8" }],
      system,
      messages,
    });

    if (response.stop_reason === "refusal") {
      throw new Error(`Draft declined: ${response.stop_details?.explanation ?? "no explanation"}`);
    }
    if (response.stop_reason === "max_tokens") throw new Error("Draft hit max_tokens before finishing");

    text = response.content
      .filter((b) => b.type === "text")
      .map((b) => b.text)
      .join("")
      .trim()
      .replace(/^```(?:markdown|md)?\n([\s\S]*?)\n```$/, "$1");

    try {
      data = validate(text, brief);
      break;
    } catch (err) {
      if (attempt >= 2) throw err;
      console.error(`Draft ${attempt} rejected (${err.message}); asking for a fix`);
      messages.push({ role: "assistant", content: response.content });
      messages.push({ role: "user", content: `That draft can't be used: ${err.message}. Return the complete corrected file, and nothing else.` });
    }
  }
  const slug = slugify(data.cardTitle || data.title);
  const file = path.join(POSTS_DIR, `${date}-${slug}.md`);
  if (fs.existsSync(file)) throw new Error(`${path.relative(ROOT, file)} already exists`);
  fs.writeFileSync(file, text.endsWith("\n") ? text : `${text}\n`);

  brief.status = "done";
  brief.draftedAs = slug;
  fs.writeFileSync(TOPICS_PATH, JSON.stringify(queue, null, 2) + "\n");

  console.error(`Drafted ${path.relative(ROOT, file)} (${response.usage.output_tokens} output tokens)`);
  console.log(JSON.stringify({ file: path.relative(ROOT, file), slug, title: data.title, briefId: brief.id }));
}

main().catch((err) => {
  if (err instanceof Anthropic.APIError) {
    console.error(`Claude API error ${err.status}: ${err.message}`);
  } else {
    console.error("Failed to draft blog post:", err.message ?? err);
  }
  process.exit(1);
});
