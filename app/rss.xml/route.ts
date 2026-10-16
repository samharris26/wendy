import { AUTHOR, FORMAT_LABELS, getAllPosts, getPostBySlug } from "@/lib/blog";

// The blog as RSS 2.0, at /rss.xml. Full text goes in content:encoded so
// readers and syndication tools get the whole post, not a teaser; the share
// card rides along as the item's image.
export const dynamic = "force-static";

const SITE = "https://www.asknoa.app";

function cdata(value: string): string {
  // ]]> inside the payload would close the section early.
  return `<![CDATA[${value.replace(/\]\]>/g, "]]]]><![CDATA[>")}]]>`;
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Relative hrefs and srcs only work in a feed once they're absolute. */
function absolute(html: string): string {
  return html.replace(/(href|src)="\/(?!\/)/g, `$1="${SITE}/`);
}

export async function GET() {
  const posts = getAllPosts();
  const items = await Promise.all(
    posts.map(async (meta) => {
      const post = await getPostBySlug(meta.slug);
      const url = `${SITE}/blog/${meta.slug}`;
      const body = post ? absolute(post.contentHtml) : "";
      return [
        "    <item>",
        `      <title>${cdata(meta.title)}</title>`,
        `      <link>${escapeXml(url)}</link>`,
        `      <guid isPermaLink="true">${escapeXml(url)}</guid>`,
        `      <pubDate>${new Date(`${meta.date}T09:00:00Z`).toUTCString()}</pubDate>`,
        `      <dc:creator>${cdata(meta.author)}</dc:creator>`,
        `      <category>${cdata(FORMAT_LABELS[meta.format])}</category>`,
        ...meta.tags.map((tag) => `      <category>${cdata(tag)}</category>`),
        `      <description>${cdata(meta.dek)}</description>`,
        `      <content:encoded>${cdata(body)}</content:encoded>`,
        `      <enclosure url="${escapeXml(`${url}/card/link`)}" type="image/png" length="0" />`,
        "    </item>",
      ].join("\n");
    }),
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>The Noa blog</title>
    <link>${SITE}/blog</link>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml" />
    <description>One useful idea at a time for running a busy household, from ${AUTHOR.name}, who builds Noa.</description>
    <language>en-GB</language>
    <copyright>© ${new Date().getFullYear()} Noa</copyright>
    <lastBuildDate>${new Date(`${posts[0]?.date ?? new Date().toISOString().slice(0, 10)}T09:00:00Z`).toUTCString()}</lastBuildDate>
    <image>
      <url>${SITE}/og.png</url>
      <title>The Noa blog</title>
      <link>${SITE}/blog</link>
    </image>
${items.join("\n")}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "content-type": "application/rss+xml; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
