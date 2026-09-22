/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cardUrl } from "@/components/blog/parts";
import { getAllPostSlugs, getPostMeta } from "@/lib/blog";
import { availableCards, CARD_SIZES, type CardKind } from "@/lib/cards/templates";

// Share kit: every generated image for one post, with downloads, for posting
// to Pinterest, Instagram and LinkedIn by hand. Unlisted and not indexed.

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export const metadata: Metadata = { title: "Share kit | Noa Blog", robots: { index: false, follow: false } };

const NAMES: Record<string, string> = {
  link: "Link preview (also the cover)",
  pin: "Pinterest pin",
  stat: "Stat card",
  quote: "Quote card",
};

export default async function ShareKit({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostMeta(slug);
  if (!post) notFound();
  const kinds = availableCards(post);
  const slides = kinds.filter((k) => k.startsWith("slide-"));

  return (
    <main className="mx-auto flex max-w-[1120px] flex-col gap-8 bg-background px-5 py-10">
      <div className="flex flex-col gap-2">
        <span className="blog-label">Share kit</span>
        <h1 className="font-display text-3xl font-medium text-primaryText">{post.title}</h1>
        <Link href={`/blog/${slug}`} className="text-sm font-semibold text-interactive">
          View the post &rsaquo;
        </Link>
        {post.quote === undefined && <p className="text-sm text-meta">No quote card: add a quote to the post&rsquo;s frontmatter.</p>}
        {!post.carousel && <p className="text-sm text-meta">No carousel: add a carousel to the post&rsquo;s frontmatter.</p>}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {kinds
          .filter((k) => !k.startsWith("slide-"))
          .map((k) => (
            <Tile key={k} slug={slug} kind={k} label={NAMES[k]} />
          ))}
      </div>
      {slides.length > 0 && (
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-primaryText">Carousel, 5 slides</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {slides.map((k) => (
              <Tile key={k} slug={slug} kind={k} label={`Slide ${k.slice(6)}`} />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}

function Tile({ slug, kind, label }: { slug: string; kind: CardKind; label: string }) {
  const { width, height } = CARD_SIZES[kind];
  return (
    <figure className="flex flex-col gap-2">
      <img src={cardUrl(slug, kind)} alt={label} width={width} height={height} className="w-full rounded-xl bg-card" loading="lazy" />
      <figcaption className="flex items-center justify-between text-sm">
        <span className="font-medium text-secondaryText">
          {label} &middot; {width}&times;{height}
        </span>
        <a href={cardUrl(slug, kind)} download={`${slug}-${kind}.png`} className="font-semibold text-interactive">
          Download
        </a>
      </figcaption>
    </figure>
  );
}
