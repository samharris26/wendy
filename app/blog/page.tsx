import { OG_IMAGES } from "@/lib/og";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";

const POSTS_PER_PAGE = 6;

export const metadata: Metadata = {
  title: "Blog — family organisation tips, guides and ideas | Noa",
  description:
    "Tips, guides, and insights on family productivity, shared calendar management, household task organisation, and getting your busy family life in order with Noa.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — family organisation tips, guides and ideas | Noa",
    description:
      "Tips, guides, and insights on family productivity, shared calendar management, household task organisation, and getting your busy family life in order with Noa.",
    type: "website",
    images: OG_IMAGES,
  },
};

interface BlogPageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const allPosts = getAllPosts();
  const currentPage = Math.max(1, parseInt(params.page ?? "1", 10) || 1);
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const page = Math.min(currentPage, totalPages || 1);
  const posts = allPosts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="px-6 py-20 lg:px-10">
        <div className="mx-auto w-full max-w-3xl">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-interactive hover:underline"
          >
            &larr; Back to Noa
          </Link>

          <h1 className="text-4xl text-primaryText md:text-5xl">
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
                    <div className="flex items-center gap-3 text-xs text-secondaryText">
                      <time>
                        {new Date(post.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </time>
                      <span className="text-border">&middot;</span>
                      <span>{post.author}</span>
                      <span className="text-border">&middot;</span>
                      <span>{post.readTime} min read</span>
                    </div>
                    <h2 className="mt-1 text-2xl text-primaryText transition-colors group-hover:text-interactive">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-secondaryText">
                      {post.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-surfaceAlt px-2.5 py-0.5 text-xs text-secondaryText"
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

          {/* Pagination */}
          {totalPages > 1 && (
            <nav className="mt-16 flex items-center justify-center gap-2">
              {page > 1 && (
                <Link
                  href={page === 2 ? "/blog" : `/blog?page=${page - 1}`}
                  className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-secondaryText transition-colors hover:border-interactive hover:text-primaryText"
                >
                  &larr; Previous
                </Link>
              )}

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <Link
                  key={p}
                  href={p === 1 ? "/blog" : `/blog?page=${p}`}
                  className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                    p === page
                      ? "bg-interactive text-white"
                      : "text-secondaryText hover:text-primaryText"
                  }`}
                >
                  {p}
                </Link>
              ))}

              {page < totalPages && (
                <Link
                  href={`/blog?page=${page + 1}`}
                  className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-secondaryText transition-colors hover:border-interactive hover:text-primaryText"
                >
                  Next &rarr;
                </Link>
              )}
            </nav>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
