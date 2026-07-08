"use client";

import Link from "next/link";
import { AppStoreButton } from "./AppStoreButton";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-rule)] bg-background px-6 pb-12 pt-20 lg:px-10">
      {/* Top — Download CTA */}
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-12 border-b border-primaryText/10 pb-16 md:flex-row md:items-center">
        <div className="max-w-lg">
          <p className="text-3xl italic text-accent md:text-4xl" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>Noa</p>
          <p className="mt-4 text-lg leading-relaxed text-secondaryText">
            Your life, organised. Calendars, tasks, lists and reminders — beautifully designed for iOS.
          </p>
          <p className="mt-2 text-sm text-secondaryText">
            Free to download &middot; Household free for 7 days.
          </p>
        </div>
        <AppStoreButton />
      </div>

      {/* Link columns */}
      <div className="mx-auto mt-12 grid w-full max-w-6xl grid-cols-2 gap-8 border-b border-primaryText/10 pb-12 sm:grid-cols-3 md:grid-cols-4">
        <div>
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-primaryText">
            Features
          </p>
          <ul className="space-y-3 text-sm text-secondaryText">
            <li>
              <Link href="/features/shared-family-calendar" className="transition-colors hover:text-primaryText">
                Shared family calendar
              </Link>
            </li>
            <li>
              <Link href="/features/tasks" className="transition-colors hover:text-primaryText">
                Tasks
              </Link>
            </li>
            <li>
              <Link href="/features/shared-lists" className="transition-colors hover:text-primaryText">
                Shared lists
              </Link>
            </li>
            <li>
              <Link href="/features/whatsapp-assistant" className="transition-colors hover:text-primaryText">
                WhatsApp assistant
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-primaryText">
            Company
          </p>
          <ul className="space-y-3 text-sm text-secondaryText">
            <li>
              <Link href="/blog" className="transition-colors hover:text-primaryText">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="transition-colors hover:text-primaryText">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition-colors hover:text-primaryText">
                Terms of service
              </Link>
            </li>
            <li>
              <a href="https://www.instagram.com/asknoa.app" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primaryText">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mx-auto mt-8 flex w-full max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2 font-mono text-xs text-secondaryText">
          <span className="system-dot inline-block h-2.5 w-2.5 rounded-full bg-success" aria-hidden />
          <span>System Operational</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.producthunt.com/products/noa-4?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-noa-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Noa - Your life admin for quick availability and scheduling | Product Hunt"
              width={160}
              height={35}
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1125090&theme=light&t=1776411913924"
              className="opacity-80 transition-opacity hover:opacity-100"
            />
          </a>
          <a href="https://peerpush.net/p/noa" target="_blank" rel="noopener">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://peerpush.net/p/noa/badge.png" alt="Noa on PeerPush" width={160} height={35} className="opacity-80 transition-opacity hover:opacity-100" />
          </a>
          <a href="https://tinylaunch.com" target="_blank" rel="noopener">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://tinylaunch.com/tinylaunch_badge_featured_on.svg" alt="Featured on TinyLaunch" width={160} height={35} className="opacity-80 transition-opacity hover:opacity-100" />
          </a>
        </div>

        <div className="font-mono text-xs text-secondaryText">
          <span>&copy; {new Date().getFullYear()} Noa.</span>
        </div>
      </div>
    </footer>
  );
}
