import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkDirective from "remark-directive";
import html from "remark-html";
import { remarkBlogDirectives } from "./blog-directives";

const POSTS_DIR = path.join(process.cwd(), "blog", "posts");

export const AUTHOR = {
  name: "Sam",
  role: "Founder of Noa",
  photo: "/images/sam.jpg",
  bio: "I build Noa, the shared calendar, lists and tasks app I wanted for my own household.",
};

export type PostFormat = "from-sam" | "printable" | "seasonal" | "data";

export const FORMAT_LABELS: Record<PostFormat, string> = {
  "from-sam": "From Sam",
  printable: "Printables",
  seasonal: "Seasonal",
  data: "Noa Data",
};

// Filter-pill order on the index. Pills only render for formats in use.
export const FORMAT_ORDER: PostFormat[] = ["from-sam", "printable", "data", "seasonal"];

export interface ChecklistItem {
  text: string;
  done: boolean;
}

// What the index card cover (and the Pinterest visual) shows.
export interface PostCover {
  kind: "title" | "stat" | "checklist" | "calendar" | "phone";
  figure?: string;
  caption?: string;
  source?: string;
  items?: ChecklistItem[];
  screenshot?: string;
}

export interface CarouselPoint {
  title: string;
  body: string;
}

export interface PostCarousel {
  hook: string;
  sub: string;
  points: [CarouselPoint, CarouselPoint, CarouselPoint];
  close: string;
  closeSub: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  /** Short title for share cards; falls back to title. */
  cardTitle: string;
  date: string;
  description: string;
  dek: string;
  format: PostFormat;
  featured: boolean;
  cover: PostCover;
  quote?: string;
  pdf?: string;
  carousel?: PostCarousel;
  tags: string[];
  author: string;
  authorRole: string;
  readTime: number; // minutes
}

export interface BlogPost extends BlogPostMeta {
  contentHtml: string;
}

const FORMATS = Object.keys(FORMAT_LABELS) as PostFormat[];

function defaultCover(format: PostFormat): PostCover {
  if (format === "seasonal") return { kind: "calendar" };
  return { kind: "title" };
}

function parseCover(raw: unknown, format: PostFormat): PostCover {
  if (!raw || typeof raw !== "object") return defaultCover(format);
  const c = raw as Record<string, unknown>;
  const kind = c.kind as PostCover["kind"];
  if (!["title", "stat", "checklist", "calendar", "phone"].includes(kind)) {
    return defaultCover(format);
  }
  if (kind === "stat" && (!c.figure || !c.source)) {
    throw new Error("cover.kind stat needs figure and source");
  }
  return {
    kind,
    figure: c.figure as string | undefined,
    caption: c.caption as string | undefined,
    source: c.source as string | undefined,
    screenshot: c.screenshot as string | undefined,
    items: Array.isArray(c.items)
      ? (c.items as unknown[]).map((i) =>
          typeof i === "string"
            ? { text: i, done: false }
            : { text: String((i as ChecklistItem).text), done: Boolean((i as ChecklistItem).done) },
        )
      : undefined,
  };
}

function slugFromFilename(filename: string): string {
  // Filename format: YYYY-MM-DD-title-slug.md
  return filename.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, "");
}

function toMeta(filename: string, data: Record<string, unknown>, content: string): BlogPostMeta {
  const format = FORMATS.includes(data.format as PostFormat)
    ? (data.format as PostFormat)
    : "from-sam";
  const description = (data.description as string) ?? "";
  // ~200 words per minute
  const wordCount = content.trim().split(/\s+/).length;
  const title = (data.title as string) ?? "Untitled";
  return {
    slug: slugFromFilename(filename),
    title,
    cardTitle: (data.cardTitle as string) ?? title,
    date: (data.date as string) ?? "",
    description,
    dek: (data.dek as string) ?? description,
    format,
    featured: Boolean(data.featured),
    cover: parseCover(data.cover, format),
    quote: data.quote as string | undefined,
    pdf: data.pdf as string | undefined,
    carousel: data.carousel as PostCarousel | undefined,
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    author: (data.author as string) ?? AUTHOR.name,
    authorRole: (data.authorRole as string) ?? AUTHOR.role,
    readTime: Math.max(1, Math.round(wordCount / 200)),
  };
}

function postFiles(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));
}

/**
 * Returns all blog post metadata, sorted by date descending (newest first).
 */
export function getAllPosts(): BlogPostMeta[] {
  const posts = postFiles().map((filename) => {
    const { data, content } = matter(fs.readFileSync(path.join(POSTS_DIR, filename), "utf-8"));
    return toMeta(filename, data, content);
  });
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostMeta(slug: string): BlogPostMeta | null {
  return getAllPosts().find((p) => p.slug === slug) ?? null;
}

// Editing notes like <!-- TODO(sam): … --> never reach the page.
const stripComments = (markdown: string) => markdown.replace(/<!--[\s\S]*?-->/g, "");

export async function renderMarkdown(markdown: string): Promise<string> {
  const processed = await remark()
    .use(remarkDirective)
    .use(remarkBlogDirectives)
    .use(html, { sanitize: false })
    .process(stripComments(markdown));
  return processed.toString();
}

/**
 * Returns a single blog post with its rendered HTML content.
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const filename = postFiles().find((f) => slugFromFilename(f) === slug);
  if (!filename) return null;
  const { data, content } = matter(fs.readFileSync(path.join(POSTS_DIR, filename), "utf-8"));
  return { ...toMeta(filename, data, content), contentHtml: await renderMarkdown(content) };
}

/**
 * Posts to show under "Read next": same format first, then newest.
 */
export function getRelatedPosts(slug: string, count = 3): BlogPostMeta[] {
  const all = getAllPosts();
  const current = all.find((p) => p.slug === slug);
  const others = all.filter((p) => p.slug !== slug);
  if (!current) return others.slice(0, count);
  const same = others.filter((p) => p.format === current.format);
  const rest = others.filter((p) => p.format !== current.format);
  return [...same, ...rest].slice(0, count);
}

/**
 * Returns all slugs for static generation.
 */
export function getAllPostSlugs(): string[] {
  return postFiles().map(slugFromFilename);
}

export function formatPostDate(date: string): string {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
