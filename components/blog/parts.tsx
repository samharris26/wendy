/* eslint-disable @next/next/no-img-element */
import fs from "fs";
import path from "path";
import Link from "next/link";
import { AUTHOR, FORMAT_LABELS, formatPostDate, type BlogPostMeta } from "@/lib/blog";

// Server-only building blocks shared by the blog index and post page
// (design handoff 19a–19d).

const hasPhoto = fs.existsSync(path.join(process.cwd(), "public", AUTHOR.photo.replace(/^\//, "")));

/** Sam's photo, or an ink initial until the real photo lands in public/images/sam.jpg. */
export function Avatar({ size }: { size: number }) {
  if (hasPhoto) {
    return (
      <img
        src={AUTHOR.photo}
        alt={AUTHOR.name}
        width={size}
        height={size}
        className="flex-none rounded-full object-cover"
        style={{ width: size, height: size }}
      />
    );
  }
  return (
    <span
      aria-hidden="true"
      className="flex flex-none items-center justify-center rounded-full bg-primaryText font-display text-white"
      style={{ width: size, height: size, fontSize: Math.round(size * 0.44) }}
    >
      S
    </span>
  );
}

export function NoaSymbol({ size = 22, onNavy = false }: { size?: number; onNavy?: boolean }) {
  const colours = onNavy ? ["#7FA4F5", "#FFFFFF", "#FFFFFF", "#6F8FE8"] : ["#2F6BED", "#0D2B45", "#0D2B45", "#6F8FE8"];
  const gap = size >= 22 ? 3 : 2;
  return (
    <span className="grid flex-none grid-cols-2" style={{ width: size, height: size, gap }} aria-hidden="true">
      {colours.map((c, i) => (
        <span key={i} style={{ background: c, borderRadius: Math.max(2, Math.round(size / 7)) }} />
      ))}
    </span>
  );
}

export function FormatLabel({ post, className = "" }: { post: Pick<BlogPostMeta, "format">; className?: string }) {
  return <span className={`blog-label ${className}`}>{FORMAT_LABELS[post.format]}</span>;
}

export function cardUrl(slug: string, kind = "link") {
  return `/blog/${slug}/card/${kind}`;
}

const TICK_PATH = "M5 12.5l4.5 4.5L19 7";

/** The four index-card cover treatments (19a), plus the phone variant. */
export function CardCover({ post, height }: { post: BlogPostMeta; height: number }) {
  const { cover } = post;
  if (cover.kind === "checklist" && cover.items?.length) {
    return (
      <div className="flex flex-col gap-[11px] bg-surface px-6 py-[22px]" style={{ height }}>
        {cover.items.slice(0, 4).map((item, i) => (
          <span key={i} className="flex items-center gap-[9px]">
            <span
              className="flex h-[17px] w-[17px] flex-none items-center justify-center rounded-[5px] border-2"
              style={{ borderColor: item.done ? "#2F6BED" : "#A9B5C7" }}
            >
              {item.done && (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#2F6BED" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d={TICK_PATH} />
                </svg>
              )}
            </span>
            <span className={`truncate text-[15px] font-medium ${item.done ? "text-primaryText" : "text-secondaryText"}`}>{item.text}</span>
          </span>
        ))}
        {post.pdf && <span className="blog-label mt-auto">Free PDF &middot; A4</span>}
      </div>
    );
  }
  if (cover.kind === "stat" && cover.figure) {
    return (
      <div className="flex flex-col justify-center gap-1.5 bg-primaryText px-6 py-[22px]" style={{ height }}>
        <span className="font-display text-[76px] leading-none tracking-[-0.02em] text-white">{cover.figure}</span>
        <span className="max-w-[15em] text-base font-medium leading-snug text-[#C3CFE2]">{cover.caption}</span>
      </div>
    );
  }
  if (cover.kind === "calendar") {
    // Decorative week grid: two booked days, a weekend.
    const cells = ["w", "b", "w", "w", "g", "g", "w", "b", "w", "w"];
    return (
      <div className="flex flex-col gap-3.5 bg-surface px-6 py-[22px]" style={{ height }}>
        <span className="blog-label">{cover.caption ?? "Mon – Fri"}</span>
        <div className="grid flex-1 grid-cols-5 grid-rows-2 gap-[7px]">
          {cells.map((c, i) => (
            <span key={i} className="rounded-lg" style={{ background: c === "b" ? "#2F6BED" : c === "g" ? "#DBE2F0" : "#FFFFFF" }} />
          ))}
        </div>
      </div>
    );
  }
  // "title" (From Sam) and "phone": the post's own card, set in Playfair on navy.
  return (
    <div className="flex flex-col justify-between bg-primaryText px-6 py-[22px]" style={{ height }}>
      <span className="blog-label !text-[#7FA4F5]">{FORMAT_LABELS[post.format]}</span>
      <span className="line-clamp-3 font-display text-[26px] leading-[1.15] text-white">{post.cardTitle}</span>
      <span className="flex items-center gap-2">
        <NoaSymbol size={14} onNavy />
        <span className="font-display text-[16px] leading-none text-white">Noa</span>
      </span>
    </div>
  );
}

export function PostCard({ post, compact = false }: { post: BlogPostMeta; compact?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      data-format={post.format}
      className="group flex flex-col overflow-hidden rounded-[26px] bg-card transition-shadow hover:shadow-[0_1px_2px_rgba(13,43,69,0.06),0_12px_32px_-18px_rgba(13,43,69,0.25)]"
    >
      <CardCover post={post} height={compact ? 150 : 196} />
      <div className="flex flex-1 flex-col gap-2.5 px-6 pb-6 pt-[22px]">
        <FormatLabel post={post} className="!text-[11px]" />
        <h3 className="font-display text-[22px] font-medium leading-[1.25] text-primaryText transition-colors group-hover:text-interactive md:text-2xl">
          {post.title}
        </h3>
        <p className={`text-[15px] leading-[1.55] text-secondaryText ${compact ? "hidden md:block" : ""}`}>{post.dek}</p>
        <span className="mt-auto pt-1 text-sm font-medium text-meta">{post.readTime} min read</span>
      </div>
    </Link>
  );
}

export function AuthorRow({ post, size = 46 }: { post: BlogPostMeta; size?: number }) {
  return (
    <div className="flex items-center gap-[13px]">
      <Avatar size={size} />
      <span className="flex flex-col gap-[5px]">
        <span className="text-base font-semibold leading-none text-primaryText">
          {post.author} &middot; {post.authorRole}
        </span>
        <span className="text-sm font-medium leading-none text-meta">
          {formatPostDate(post.date)} &middot; {post.readTime} min read
        </span>
      </span>
    </div>
  );
}

export function AuthorBox({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-4 rounded-[34px] bg-card p-6 sm:flex-row sm:items-center sm:gap-[22px] sm:px-8 sm:py-[26px] ${className}`}>
      <div className="flex items-center gap-4 sm:contents">
        <Avatar size={62} />
        <span className="flex flex-col gap-[7px]">
          <span className="text-lg font-semibold leading-none text-primaryText">
            {AUTHOR.name} &middot; {AUTHOR.role}
          </span>
          <span className="text-base leading-normal text-secondaryText">{AUTHOR.bio}</span>
        </span>
      </div>
      <Link href="/about" className="flex-none text-[15px] font-semibold text-interactive hover:text-[#1B4FC0] sm:ml-auto">
        About Sam &rsaquo;
      </Link>
    </div>
  );
}
