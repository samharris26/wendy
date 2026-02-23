"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

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
        <Link href="#product" className="text-lg font-semibold tracking-tight text-primaryText">
          Wendy
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

        <Link
          href="#waitlist"
          className="rounded-xl bg-primaryText px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0b223d]"
        >
          Start using Wendy
        </Link>
      </nav>
    </header>
  );
}
