import { ImageResponse } from "next/og";
import { getAllPosts, getPostMeta } from "@/lib/blog";
import { cardFonts } from "@/lib/cards/fonts";
import { availableCards, CARD_SIZES, renderCard, type CardKind } from "@/lib/cards/templates";

// Share images for a post: /blog/<slug>/card/<kind>, where kind is link, pin,
// stat, quote or slide-1…slide-5. Built at deploy time, one per post and kind.
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().flatMap((post) => availableCards(post).map((kind) => ({ slug: post.slug, kind })));
}

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string; kind: string }> }) {
  const { slug, kind } = await params;
  const post = getPostMeta(slug);
  if (!post || !availableCards(post).includes(kind as CardKind)) {
    return new Response("Not found", { status: 404 });
  }
  const { width, height } = CARD_SIZES[kind as CardKind];
  return new ImageResponse(renderCard(kind as CardKind, post), {
    width,
    height,
    fonts: cardFonts(),
    headers: { "Cache-Control": "public, max-age=86400, s-maxage=31536000" },
  });
}
