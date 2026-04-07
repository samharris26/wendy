import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getPostBySlug, getAllPostSlugs } from "@/lib/blog";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found | Noa" };

  return {
    title: `${post.title} | Noa Blog`,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(post.title)}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`/api/og?title=${encodeURIComponent(post.title)}`],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="px-6 py-20 lg:px-10">
        <div className="mx-auto w-full max-w-3xl">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
          >
            &larr; All posts
          </Link>

          <article className="rounded-2xl border border-primaryText/10 bg-card p-8 md:p-12">
            <header>
              <div className="flex items-center gap-3 text-xs text-secondaryText">
                <time className="font-mono">
                  {new Date(post.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <span className="text-primaryText/20">&middot;</span>
                <span>{post.author}</span>
                <span className="text-primaryText/20">&middot;</span>
                <span>{post.readTime} min read</span>
              </div>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-primaryText">
                {post.title}
              </h1>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-surface px-2.5 py-0.5 font-mono text-xs text-secondaryText"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            <div
              className="prose prose-slate mt-10 max-w-none
                prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-primaryText
                prose-p:text-secondaryText prose-p:leading-relaxed
                prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                prose-li:text-secondaryText
                prose-strong:text-primaryText"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
