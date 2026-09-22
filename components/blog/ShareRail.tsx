"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";

// Share controls for a post: a sticky rail on desktop, a row of pills under
// the author on mobile (handoff 19c/19d). Pinterest is the tinted one — it's
// the channel the pin artwork is made for.

interface ShareProps {
  title: string;
  url: string;
  pinImage: string;
  layout: "rail" | "row";
}

const ICONS = {
  copy: (
    <path d="M10 13.5a4 4 0 0 0 5.7.4l3-3a4 4 0 0 0-5.7-5.7l-1.1 1.1M14 10.5a4 4 0 0 0-5.7-.4l-3 3a4 4 0 0 0 5.7 5.7l1.1-1.1" />
  ),
  whatsapp: <path d="M20 11.7a8 8 0 0 1-11.9 7L4 20l1.4-4a8 8 0 1 1 14.6-4.3z" />,
  pinterest: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M10 17.5l1.6-6.1a2.6 2.6 0 1 1 3.4 2.6c-1.2.5-2.4-.2-2.6-1.1" />
    </>
  ),
  email: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path d="M4 7l8 6 8-6" />
    </>
  ),
  tick: <path d="M5 12.5l4.5 4.5L19 7" />,
};

function Icon({ name, tinted }: { name: keyof typeof ICONS; tinted?: boolean }) {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke={tinted ? "#2F6BED" : "#55637A"} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}

export function ShareRail({ title, url, pinImage, layout }: ShareProps) {
  const [copied, setCopied] = useState(false);
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  const links = [
    { id: "whatsapp", label: "Share on WhatsApp", href: `https://wa.me/?text=${t}%20${u}` },
    {
      id: "pinterest",
      label: "Save to Pinterest",
      href: `https://www.pinterest.com/pin/create/button/?url=${u}&media=${encodeURIComponent(pinImage)}&description=${t}`,
    },
    { id: "email", label: "Share by email", href: `mailto:?subject=${t}&body=${u}` },
  ] as const;

  const size = layout === "rail" ? "h-[46px] w-[46px]" : "h-10 w-10";
  const base = `flex ${size} items-center justify-center rounded-full transition-colors`;

  return (
    <div className={layout === "rail" ? "flex flex-col gap-2.5 pt-1.5" : "flex items-center gap-2.5"}>
      {layout === "rail" && <span className="blog-label !text-[10px] !tracking-[0.14em] pb-1">Share</span>}
      <button
        type="button"
        aria-label={copied ? "Link copied" : "Copy link"}
        onClick={() => {
          navigator.clipboard.writeText(url).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          });
          track("Blog share", { channel: "copy" });
        }}
        className={`${base} bg-card hover:bg-surface`}
      >
        <Icon name={copied ? "tick" : "copy"} tinted={copied} />
      </button>
      {links.map((l) => (
        <a
          key={l.id}
          href={l.href}
          target={l.id === "email" ? undefined : "_blank"}
          rel="noopener noreferrer"
          aria-label={l.label}
          onClick={() => track("Blog share", { channel: l.id })}
          className={`${base} ${l.id === "pinterest" ? "bg-accentTint hover:bg-[#DDE7FD]" : "bg-card hover:bg-surface"}`}
        >
          <Icon name={l.id} tinted={l.id === "pinterest"} />
        </a>
      ))}
    </div>
  );
}
