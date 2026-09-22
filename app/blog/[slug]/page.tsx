/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AppStoreLink } from "@/components/AppStoreLink";
import { ShareRail } from "@/components/blog/ShareRail";
import { AuthorBox, AuthorRow, cardUrl, FormatLabel } from "@/components/blog/parts";
import { getAllPostSlugs, getPostBySlug, getRelatedPosts } from "@/lib/blog";

const SITE = "https://www.asknoa.app";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found | Noa" };
  const image = { url: cardUrl(slug), width: 1200, height: 630, alt: post.title };

  return {
    title: `${post.title} | Noa Blog`,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.dek,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.dek,
      images: [image.url],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const canonicalUrl = `${SITE}/blog/${slug}`;
  const related = getRelatedPosts(slug);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: post.author, jobTitle: post.authorRole, url: `${SITE}/about` },
    publisher: { "@id": `${SITE}/#organization` },
    image: `${SITE}${cardUrl(slug)}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
    keywords: post.tags.join(", "),
  };
  const share = { title: post.title, url: canonicalUrl, pinImage: `${SITE}${cardUrl(slug, "pin")}` };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main className="px-5 pb-16 md:px-6">
        <header className="mx-auto flex max-w-[680px] flex-col gap-[18px] pt-8 md:gap-[22px] md:pt-[52px]">
          <Link href="/blog" className="blog-label hover:!text-primaryText">
            <FormatLabel post={post} className="!text-inherit" />
          </Link>
          <h1 className="font-display text-[34px] font-medium leading-[1.12] tracking-[-0.01em] text-primaryText md:text-[50px] md:leading-[1.1]">
            {post.title}
          </h1>
          <p className="text-[17px] leading-normal text-secondaryText md:text-[21px]">{post.dek}</p>
          <div className="pt-1">
            <AuthorRow post={post} />
          </div>
          <div className="md:hidden">
            <ShareRail {...share} layout="row" />
          </div>
        </header>

        <div className="mx-auto mt-7 max-w-[1080px] md:mt-9">
          <img
            src={cardUrl(slug)}
            alt=""
            width={1200}
            height={630}
            className="aspect-[1200/630] w-full rounded-[26px] object-cover md:rounded-[34px]"
          />
        </div>

        <div className="mx-auto mt-9 flex max-w-[900px] justify-center gap-11 md:mt-11">
          <aside className="hidden w-14 flex-none md:block">
            <div className="sticky top-24">
              <ShareRail {...share} layout="rail" />
            </div>
          </aside>

          <div className="w-full min-w-0 max-w-[680px] flex-none md:w-[680px]">
            <article className="blog-body" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

            <div className="mt-12 flex flex-col gap-[22px]">
              <AuthorBox className="blog-block" />

              <div className="blog-block flex flex-col gap-5 rounded-[26px] bg-primaryText p-6 sm:flex-row sm:items-center sm:gap-[26px] md:rounded-[34px] md:px-[34px] md:py-[30px]">
                <p className="text-[17px] leading-[1.55] text-[#C3CFE2] md:text-lg">
                  Noa is the app underneath all of this: one shared calendar, lists and tasks for the whole house.
                </p>
                <AppStoreLink
                  placement="blog-post"
                  className="inline-flex h-12 flex-none items-center justify-center rounded-[20px] bg-accent px-[22px] text-[15px] font-semibold text-white transition-colors hover:bg-accentHover"
                >
                  Try Noa free
                </AppStoreLink>
              </div>

              {related.length > 0 && (
                <nav className="blog-block flex flex-col gap-[18px] pt-[18px]" aria-label="Read next">
                  <span className="blog-label">Read next</span>
                  <div className="grid gap-[18px] sm:grid-cols-3">
                    {related.map((r) => (
                      <Link key={r.slug} href={`/blog/${r.slug}`} className="group overflow-hidden rounded-[26px] bg-card">
                        <div className={`h-[104px] ${r.cover.kind === "title" || r.cover.kind === "stat" || r.cover.kind === "phone" ? "bg-primaryText" : "bg-surface"}`} />
                        <div className="flex flex-col gap-2 px-[18px] pb-[18px] pt-4">
                          <FormatLabel post={r} className="!text-[10px]" />
                          <span className="font-display text-lg font-medium leading-[1.28] text-primaryText transition-colors group-hover:text-interactive">
                            {r.title}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </nav>
              )}
            </div>
          </div>

          {/* Empty column that keeps the measure optically centred against the rail. */}
          <div className="hidden w-14 flex-none md:block" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export const dynamicParams = false;
