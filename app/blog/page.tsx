/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AppStoreLink } from "@/components/AppStoreLink";
import { BlogSignup } from "@/components/blog/BlogSignup";
import { FormatFilter } from "@/components/blog/FormatFilter";
import { Avatar, cardUrl, NoaSymbol, PostCard } from "@/components/blog/parts";
import { AUTHOR, FORMAT_LABELS, FORMAT_ORDER, formatPostDate, getAllPosts } from "@/lib/blog";

const TITLE = "The Noa blog — notes from a house that runs on a shared calendar";
const DESCRIPTION =
  "Short, practical posts from Sam, who builds Noa: family calendars, school admin, chores, printables and the routines that actually stick.";

export function generateMetadata(): Metadata {
  const [featured] = pickFeatured();
  const image = featured ? cardUrl(featured.slug) : "/og.png";
  return {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: "/blog" },
    openGraph: { title: TITLE, description: DESCRIPTION, type: "website", images: [{ url: image, width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [image] },
  };
}

function pickFeatured() {
  const posts = getAllPosts();
  const featured = posts.find((p) => p.featured) ?? posts[0];
  return [featured, posts.filter((p) => p !== featured)] as const;
}

export default function BlogPage() {
  const [featured, rest] = pickFeatured();
  const present = new Set(getAllPosts().map((p) => p.format));
  const formats = FORMAT_ORDER.filter((f) => present.has(f)).map((id) => ({ id, label: FORMAT_LABELS[id] }));

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <main className="mx-auto flex w-full max-w-[1120px] flex-col gap-[22px] px-5 pb-16 pt-6 md:gap-[34px] md:px-6 md:pt-11">
        <header className="flex max-w-[640px] flex-col gap-3">
          <span className="blog-label">The Noa blog</span>
          <h1 className="font-display text-[33px] font-medium leading-[1.12] tracking-[-0.01em] text-primaryText md:text-[52px] md:leading-[1.08]">
            Notes from a house that runs on a shared calendar
          </h1>
          <p className="text-[17px] leading-[1.55] text-secondaryText md:text-lg">
            Practical ideas for running a busy house, from Sam, who builds Noa.
          </p>
        </header>

        {formats.length > 1 && <FormatFilter formats={formats} />}

        <div data-blog-grid className="flex flex-col gap-[22px] md:gap-[34px]">
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              data-format={featured.format}
              className="group flex flex-col gap-0 overflow-hidden rounded-[26px] bg-card md:rounded-[34px] lg:flex-row lg:gap-10 lg:p-3.5"
            >
              <img
                src={cardUrl(featured.slug)}
                alt=""
                width={1200}
                height={630}
                className="aspect-[1200/630] w-full flex-none object-cover lg:w-[540px] lg:self-center lg:rounded-[26px]"
              />
              <div className="flex min-w-0 flex-1 flex-col gap-4 p-6 lg:py-[30px] lg:pl-0 lg:pr-[30px]">
                <span className="flex flex-wrap items-center gap-2.5">
                  <span className="rounded-full bg-accentTint px-3 py-1.5 text-xs font-semibold leading-none text-accent">Featured</span>
                  <span className="text-sm font-medium text-meta">
                    {formatPostDate(featured.date)} &middot; {featured.readTime} min read
                  </span>
                </span>
                <h2 className="font-display text-[25px] font-medium leading-[1.18] text-primaryText transition-colors group-hover:text-interactive md:text-[34px]">
                  {featured.title}
                </h2>
                <p className="text-base leading-relaxed text-secondaryText md:text-[17px]">{featured.dek}</p>
                <span className="mt-auto flex items-center gap-3 pt-2">
                  <Avatar size={38} />
                  <span className="text-[15px] font-medium text-secondaryText">
                    {featured.author} &middot; {featured.authorRole}
                  </span>
                  <span className="ml-auto hidden text-[15px] font-semibold text-interactive sm:inline">Read the post &rsaquo;</span>
                </span>
              </div>
            </Link>
          )}

          <div className="grid gap-[22px] md:grid-cols-2 md:gap-[26px] xl:grid-cols-3">
            {rest.map((post) => (
              <PostCard key={post.slug} post={post} compact={false} />
            ))}
          </div>
          <p data-blog-empty className="hidden text-secondaryText">
            Nothing in this one yet.
          </p>
        </div>

        <div className="flex flex-col gap-4 rounded-[26px] bg-card p-6 sm:flex-row sm:items-center sm:gap-[22px] md:rounded-[34px] md:px-8 md:py-[26px]">
          <div className="flex items-center gap-4 sm:contents">
            <Avatar size={66} />
            <span className="flex flex-col gap-[7px]">
              <span className="text-[19px] font-semibold leading-none text-primaryText">Written by {AUTHOR.name}</span>
              <span className="text-base leading-normal text-secondaryText">{AUTHOR.bio}</span>
            </span>
          </div>
          <span className="flex flex-none items-center gap-4 sm:ml-auto">
            <Link href="/about" className="text-[15px] font-semibold text-interactive hover:text-accentHover">
              About Sam &rsaquo;
            </Link>
            <a
              href="/rss.xml"
              className="text-[15px] font-medium text-meta hover:text-primaryText"
              title="Subscribe to the Noa blog by RSS"
            >
              RSS
            </a>
          </span>
        </div>

        <div className="grid gap-[22px] md:grid-cols-[1.25fr_1fr] md:gap-[26px]">
          <BlogSignup />
          <div className="flex flex-col gap-3.5 rounded-[34px] bg-card p-6 md:px-8 md:py-[30px]">
            <NoaSymbol size={26} />
            <p className="text-[17px] leading-[1.55] text-secondaryText">
              Noa is the app underneath all of this: one shared calendar, lists and tasks for the whole house.
            </p>
            <AppStoreLink
              placement="blog-index"
              className="mt-auto inline-flex h-[46px] items-center self-start rounded-[20px] bg-accentTint px-5 text-[15px] font-semibold text-accent transition-colors hover:bg-[#DDE7FD]"
            >
              Try it free
            </AppStoreLink>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
