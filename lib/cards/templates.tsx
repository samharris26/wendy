/* eslint-disable @next/next/no-img-element, jsx-a11y/alt-text */
import type { ReactElement } from "react";
import { AUTHOR, FORMAT_LABELS, type BlogPostMeta } from "@/lib/blog";
import { publicImage } from "./fonts";
import {
  figureBand,
  linkTitleBand,
  pinTitleBand,
  pointTitleBand,
  quoteBand,
} from "./bands";

// Share-card templates, built to the design handoff (artboards 19e–19i).
// Satori rules: every multi-child div is flex, no grid, flat colour only.

export type CardKind = "link" | "pin" | "stat" | "quote" | "slide-1" | "slide-2" | "slide-3" | "slide-4" | "slide-5";

export const CARD_SIZES: Record<CardKind, { width: number; height: number }> = {
  link: { width: 1200, height: 630 },
  pin: { width: 1000, height: 1500 },
  stat: { width: 1080, height: 1350 },
  quote: { width: 1080, height: 1350 },
  "slide-1": { width: 1080, height: 1350 },
  "slide-2": { width: 1080, height: 1350 },
  "slide-3": { width: 1080, height: 1350 },
  "slide-4": { width: 1080, height: 1350 },
  "slide-5": { width: 1080, height: 1350 },
};

const C = {
  navy: "#0D2B45",
  page: "#EAEEF8",
  surface: "#EFF2F7",
  white: "#FFFFFF",
  blue: "#2F6BED",
  body: "#55637A",
  meta: "#6B7789",
  label: "#7C89A0",
  onNavy: "#C3CFE2",
  onNavyAccent: "#7FA4F5",
  empty: "#A9B5C7",
  bezel: "#10151F",
};

const PF = "Playfair";
const JK = "Jakarta";

/** Which cards a post can produce. Link and pin always; the rest need data. */
export function availableCards(post: BlogPostMeta): CardKind[] {
  const kinds: CardKind[] = ["link", "pin"];
  if (post.cover.kind === "stat") kinds.push("stat");
  if (post.quote && quoteBand(post.quote)) kinds.push("quote");
  if (post.carousel) kinds.push("slide-1", "slide-2", "slide-3", "slide-4", "slide-5");
  return kinds;
}

function Symbol({ size, onNavy }: { size: number; onNavy: boolean }) {
  const gap = size >= 28 ? 4 : size >= 20 ? 3 : 2;
  const cell = (size - gap) / 2;
  const radius = Math.round(size / 6.5);
  const colours = onNavy
    ? [C.onNavyAccent, C.white, C.white, "#6F8FE8"]
    : [C.blue, C.navy, C.navy, "#6F8FE8"];
  return (
    <div style={{ display: "flex", flexWrap: "wrap", width: size, height: size, gap }}>
      {colours.map((bg, i) => (
        <div key={i} style={{ width: cell, height: cell, borderRadius: radius, background: bg }} />
      ))}
    </div>
  );
}

function Lockup({ size, word, onNavy }: { size: number; word: number; onNavy: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: Math.round(size * 0.44) }}>
      <Symbol size={size} onNavy={onNavy} />
      <div style={{ fontFamily: PF, fontSize: word, color: onNavy ? C.white : C.navy, lineHeight: 1 }}>Noa</div>
    </div>
  );
}

function Label({ text, size, color }: { text: string; size: number; color: string }) {
  return (
    <div
      style={{
        fontFamily: JK,
        fontWeight: 700,
        fontSize: size,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color,
        lineHeight: 1,
      }}
    >
      {text}
    </div>
  );
}

function Footer({ onNavy }: { onNavy: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
      <Lockup size={32} word={38} onNavy={onNavy} />
      <div style={{ fontFamily: JK, fontWeight: 500, fontSize: 26, color: onNavy ? C.onNavy : C.meta }}>asknoa.app</div>
    </div>
  );
}

function Tick({ size, stroke, color }: { size: number; stroke: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  );
}

function Avatar({ size }: { size: number }) {
  const photo = publicImage(AUTHOR.photo);
  if (photo) {
    return <img src={photo} width={size} height={size} style={{ width: size, height: size, borderRadius: 999, objectFit: "cover" }} />;
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: 999,
        background: C.navy,
        color: C.white,
        fontFamily: PF,
        fontSize: Math.round(size * 0.46),
      }}
    >
      S
    </div>
  );
}

// ---------- a · link preview 1200×630 ----------
export function LinkCard({ post }: { post: BlogPostMeta }) {
  const band = linkTitleBand(post.cardTitle);
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", background: C.navy, padding: "64px 72px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Lockup size={28} word={34} onNavy />
        <Label text={FORMAT_LABELS[post.format]} size={15} color={C.onNavyAccent} />
      </div>
      <div style={{ fontFamily: PF, fontSize: band.size, lineHeight: band.lineHeight, color: C.white, maxWidth: `${band.maxEm}em`, letterSpacing: "-0.01em" }}>
        {post.cardTitle}
      </div>
      <div style={{ fontFamily: JK, fontWeight: 500, fontSize: 20, color: C.onNavy }}>asknoa.app</div>
    </div>
  );
}

// ---------- b · Pinterest pin 1000×1500 ----------
function PinVisual({ post, titleSize }: { post: BlogPostMeta; titleSize: number }) {
  const { cover } = post;
  if (cover.kind === "checklist" && cover.items?.length) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 32, marginTop: 60, background: C.white, borderRadius: 40, padding: "52px 48px" }}>
        {cover.items.slice(0, 5).map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 22 }}>
            {item.done ? (
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: 12, background: C.blue }}>
                <Tick size={24} stroke={3.2} color={C.white} />
              </div>
            ) : (
              <div style={{ width: 40, height: 40, borderRadius: 12, border: `3px solid ${C.empty}` }} />
            )}
            <div style={{ fontFamily: JK, fontWeight: 500, fontSize: 34, lineHeight: 1.2, color: item.done ? C.navy : C.body }}>{item.text}</div>
          </div>
        ))}
      </div>
    );
  }
  if (cover.kind === "stat" && cover.figure) {
    return (
      <div style={{ display: "flex", flexDirection: "column", marginTop: 60, background: C.navy, borderRadius: 40, padding: "56px 52px" }}>
        <div style={{ fontFamily: PF, fontSize: 200, lineHeight: 0.9, color: C.white, letterSpacing: "-0.03em" }}>{cover.figure}</div>
        <div style={{ marginTop: 32, fontFamily: JK, fontWeight: 500, fontSize: 36, lineHeight: 1.3, color: C.white }}>{cover.caption}</div>
        <div style={{ marginTop: 20, fontFamily: JK, fontWeight: 500, fontSize: 22, color: C.onNavy }}>{cover.source}</div>
      </div>
    );
  }
  // Phone: the post's screenshot, or Home. 408px frame keeps the 70px band inside the canvas.
  const shot = publicImage(cover.screenshot ?? "/images/home.png");
  if (!shot) return null;
  const frame = 408;
  // The phone takes whatever height is left (capped at 862) so a long dek
  // shortens the phone instead of pushing the footer off the canvas.
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: titleSize === 70 ? 56 : 60, marginBottom: 48, flexGrow: 1, flexShrink: 1, minHeight: 0, maxHeight: 862 }}>
      <div style={{ display: "flex", width: frame, height: "100%", background: C.bezel, borderRadius: 62, padding: 13, overflow: "hidden" }}>
        <img src={shot} width={frame - 26} style={{ width: frame - 26, borderRadius: 50 }} />
      </div>
    </div>
  );
}

export function PinCard({ post }: { post: BlogPostMeta }) {
  const band = pinTitleBand(post.cardTitle);
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", background: C.page, padding: "76px 68px", overflow: "hidden" }}>
      <Label text={FORMAT_LABELS[post.format]} size={20} color={C.label} />
      <div style={{ marginTop: 32, fontFamily: PF, fontSize: band.size, lineHeight: band.lineHeight, color: C.navy, letterSpacing: "-0.01em" }}>
        {post.cardTitle}
      </div>
      <div style={{ marginTop: 26, fontFamily: JK, fontSize: band.size === 70 ? 30 : 32, lineHeight: 1.45, color: C.body, maxWidth: "18em" }}>
        {post.dek}
      </div>
      <PinVisual post={post} titleSize={band.size} />
      <Footer onNavy={false} />
    </div>
  );
}

// ---------- c · stat card 1080×1350 ----------
export function StatCard({ post }: { post: BlogPostMeta }) {
  const { figure = "", caption, source } = post.cover;
  const band = figureBand(figure);
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", background: C.navy, padding: "84px 76px" }}>
      <Label text={FORMAT_LABELS[post.format]} size={20} color={C.onNavyAccent} />
      <div style={{ marginTop: "auto", fontFamily: PF, fontSize: band.size, lineHeight: band.lineHeight, color: C.white, letterSpacing: "-0.03em" }}>{figure}</div>
      <div style={{ marginTop: 44, fontFamily: JK, fontWeight: 500, fontSize: 46, lineHeight: 1.3, color: C.white, maxWidth: "17em" }}>{caption}</div>
      <div style={{ marginTop: 26, fontFamily: JK, fontWeight: 500, fontSize: 24, lineHeight: 1.4, color: C.onNavy }}>{source}</div>
      <Footer onNavy />
    </div>
  );
}

// ---------- d · quote card 1080×1350 ----------
export function QuoteCard({ post }: { post: BlogPostMeta }) {
  const quote = post.quote ?? "";
  const band = quoteBand(quote)!;
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", background: C.surface, padding: "84px 76px" }}>
      <div style={{ width: 88, height: 8, borderRadius: 4, background: C.blue }} />
      <div style={{ marginTop: "auto", fontFamily: PF, fontSize: band.size, lineHeight: band.lineHeight, color: C.navy, letterSpacing: "-0.01em" }}>
        {`“${quote}”`}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 22, marginTop: 48 }}>
        <Avatar size={84} />
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ fontFamily: JK, fontWeight: 600, fontSize: 32, color: C.navy }}>{post.author}</div>
          <div style={{ fontFamily: JK, fontWeight: 500, fontSize: 24, color: C.meta }}>{post.authorRole}</div>
        </div>
      </div>
      <Footer onNavy={false} />
    </div>
  );
}

// ---------- e · carousel 1080×1350 × 5 ----------
function Counter({ n, onNavy }: { n: number; onNavy: boolean }) {
  return <div style={{ fontFamily: JK, fontWeight: 600, fontSize: 22, color: onNavy ? C.onNavyAccent : C.label }}>{`${n} / 5`}</div>;
}

export function SlideCard({ post, n }: { post: BlogPostMeta; n: 1 | 2 | 3 | 4 | 5 }) {
  const c = post.carousel!;
  const frame = { display: "flex", flexDirection: "column" as const, width: "100%", height: "100%", padding: "84px 76px" };
  if (n === 1) {
    return (
      <div style={{ ...frame, background: C.navy }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Label text={FORMAT_LABELS[post.format]} size={20} color={C.onNavyAccent} />
          <Counter n={1} onNavy />
        </div>
        <div style={{ marginTop: "auto", fontFamily: PF, fontSize: c.hook.length > 60 ? 88 : 104, lineHeight: 1.08, color: C.white, letterSpacing: "-0.01em" }}>{c.hook}</div>
        <div style={{ marginTop: 36, fontFamily: JK, fontSize: 34, lineHeight: 1.45, color: C.onNavy, maxWidth: "20em" }}>{`${c.sub} Swipe →`}</div>
        <div style={{ display: "flex", marginTop: "auto" }}>
          <Lockup size={32} word={38} onNavy />
        </div>
      </div>
    );
  }
  if (n === 5) {
    return (
      <div style={{ ...frame, background: C.navy }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Lockup size={32} word={38} onNavy />
          <Counter n={5} onNavy />
        </div>
        <div style={{ marginTop: "auto", fontFamily: PF, fontSize: 88, lineHeight: 1.12, color: C.white, maxWidth: "13em", letterSpacing: "-0.01em" }}>{c.close}</div>
        <div style={{ marginTop: 32, fontFamily: JK, fontSize: 34, lineHeight: 1.5, color: C.onNavy, maxWidth: "19em" }}>{c.closeSub}</div>
        <div style={{ display: "flex", alignItems: "center", alignSelf: "flex-start", marginTop: 52, height: 104, borderRadius: 34, background: C.blue, padding: "0 52px" }}>
          <div style={{ fontFamily: JK, fontWeight: 600, fontSize: 34, color: C.white }}>asknoa.app/blog</div>
        </div>
        <div style={{ marginTop: "auto", fontFamily: JK, fontWeight: 500, fontSize: 26, color: C.onNavy }}>
          {"Noa is free to use. £39.99/yr for the whole house."}
        </div>
      </div>
    );
  }
  const point = c.points[n - 2];
  const band = pointTitleBand(point.title);
  return (
    <div style={{ ...frame, background: C.page }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontFamily: PF, fontSize: 130, lineHeight: 1, color: C.blue, letterSpacing: "-0.02em" }}>{`0${n - 1}`}</div>
        <Counter n={n} onNavy={false} />
      </div>
      <div style={{ marginTop: "auto", fontFamily: PF, fontSize: band.size, lineHeight: band.lineHeight, color: C.navy, maxWidth: `${band.maxEm}em`, letterSpacing: "-0.01em" }}>{point.title}</div>
      <div style={{ marginTop: 32, fontFamily: JK, fontSize: 34, lineHeight: 1.5, color: C.body, maxWidth: "19em" }}>{point.body}</div>
      <div style={{ display: "flex", marginTop: "auto" }}>
        <Lockup size={32} word={38} onNavy={false} />
      </div>
    </div>
  );
}

export function renderCard(kind: CardKind, post: BlogPostMeta): ReactElement {
  switch (kind) {
    case "link":
      return <LinkCard post={post} />;
    case "pin":
      return <PinCard post={post} />;
    case "stat":
      return <StatCard post={post} />;
    case "quote":
      return <QuoteCard post={post} />;
    default:
      return <SlideCard post={post} n={Number(kind.slice(6)) as 1 | 2 | 3 | 4 | 5} />;
  }
}
