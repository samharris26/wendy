"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const APP_STORE_URL =
  "https://apps.apple.com/gb/app/noa-your-life-organised/id6760316752?itscg=30200&itsct=apps_box_link&mttnsubad=6760316752";

const navItems = [
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
  { label: "Blog", href: "/blog" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-150 ${
        isScrolled
          ? "border-[var(--color-rule)] bg-background/90 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="font-heading text-2xl italic text-accent" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
          Noa
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="text-sm font-medium text-secondaryText transition-colors hover:text-primaryText"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <span className="hidden font-mono text-[11px] uppercase tracking-wider text-accentDeep lg:block">
            Household free for 7 days
          </span>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-primaryText px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0b223d]"
          >
            Download free
          </a>
        </div>
      </nav>
    </header>
  );
}
