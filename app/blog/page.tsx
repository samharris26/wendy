import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Noa",
  description:
    "Tips, guides and insights on family productivity, calendar management, and getting organised.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="px-6 py-20 lg:px-10">
        <div className="mx-auto w-full max-w-3xl">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
          >
            &larr; Back to Noa
          </Link>

          <h1 className="text-3xl font-semibold tracking-tight text-primaryText md:text-4xl">
            Blog
          </h1>
          <p className="mt-3 text-lg text-secondaryText">
            Practical tips on family productivity, calendar management, and staying organised.
          </p>

          {posts.length === 0 ? (
            <p className="mt-12 text-sm text-secondaryText">
              No posts yet. Check back soon!
            </p>
          ) : (
            <div className="mt-12 space-y-8">
              {posts.map((post) => (
                <article key={post.slug} className="group">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <time className="font-mono text-xs text-secondaryText">
                      {new Date(post.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <h2 className="mt-1 text-xl font-semibold tracking-tight text-primaryText transition-colors group-hover:text-accent">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-secondaryText">
                      {post.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-surface px-2.5 py-0.5 font-mono text-xs text-secondaryText"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
