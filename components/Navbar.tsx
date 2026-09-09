"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const APP_STORE_URL =
  "https://apps.apple.com/gb/app/noa-your-life-organised/id6760316752?itscg=30200&itsct=apps_box_link&mttnsubad=6760316752";

const navItems = [
  { label: "Features", href: "/#features" },
  { label: "A day with Noa", href: "/#day" },
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
      className={`sticky top-0 z-20 border-b transition-colors duration-150 ${
        isScrolled ? "border-border bg-background/88 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1120px] flex-wrap items-center gap-x-5 gap-y-2 px-6 py-3.5">
        <Link href="/" className="font-display text-2xl leading-none text-primaryText">
          Noa
        </Link>

        <nav className="ml-3 flex flex-wrap gap-x-[22px] gap-y-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium leading-none text-secondaryText transition-colors hover:text-primaryText"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3.5">
          <span className="hidden text-[13px] font-medium leading-none text-meta sm:block">
            Household free for 7 days
          </span>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primaryText px-5 py-3 text-[15px] font-semibold leading-none text-white transition-colors hover:bg-[#0a2338]"
          >
            Download free
          </a>
        </div>
      </div>
    </header>
  );
}
