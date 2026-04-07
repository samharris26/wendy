"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
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
          ? "border-primaryText/10 bg-white/95 shadow-[0_6px_18px_rgba(15,42,74,0.12)] backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="text-2xl font-bold tracking-tight text-primaryText">
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

        <a
          href="https://apps.apple.com/gb/app/noa-your-life-organised/id6760316752?itscg=30200&itsct=apps_box_link&mttnsubad=6760316752"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-primaryText px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0b223d]"
        >
          Download
        </a>
      </nav>
    </header>
  );
}
