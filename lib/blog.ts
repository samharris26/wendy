import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const POSTS_DIR = path.join(process.cwd(), "blog", "posts");

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  author: string;
  readTime: number; // minutes
}

export interface BlogPost extends BlogPostMeta {
  contentHtml: string;
}

/**
 * Returns all blog post metadata, sorted by date descending (newest first).
 */
export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));

  const posts: BlogPostMeta[] = files.map((filename) => {
    const filePath = path.join(POSTS_DIR, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    // Derive slug: strip date prefix and .md extension
    // Filename format: YYYY-MM-DD-title-slug.md
    const slug = filename.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, "");

    // Estimate read time: ~200 words per minute
    const wordCount = content.trim().split(/\s+/).length;
    const readTime = Math.max(1, Math.round(wordCount / 200));

    return {
      slug,
      title: data.title ?? "Untitled",
      date: data.date ?? "",
      description: data.description ?? "",
      tags: Array.isArray(data.tags) ? data.tags : [],
      author: data.author ?? "The Noa Team",
      readTime,
    };
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

/**
 * Returns a single blog post with its rendered HTML content.
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!fs.existsSync(POSTS_DIR)) return null;

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));

  // Find the file whose slug portion matches
  const filename = files.find((f) => {
    const fileSlug = f.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, "");
    return fileSlug === slug;
  });

  if (!filename) return null;

  const filePath = path.join(POSTS_DIR, filename);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  // Estimate read time: ~200 words per minute
  const wordCount = content.trim().split(/\s+/).length;
  const readTime = Math.max(1, Math.round(wordCount / 200));

  return {
    slug,
    title: data.title ?? "Untitled",
    date: data.date ?? "",
    description: data.description ?? "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    author: data.author ?? "The Noa Team",
    readTime,
    contentHtml,
  };
}

/**
 * Returns all slugs for static generation.
 */
export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, ""));
}
