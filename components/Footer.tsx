"use client";

import Link from "next/link";
import { WaitlistForm } from "./WaitlistForm";

export function Footer() {
  return (
    <footer className="border-t border-primaryText/10 bg-background px-6 pb-12 pt-20 lg:px-10">
      {/* Top — Waitlist CTA */}
      <div id="waitlist" className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-12 border-b border-primaryText/10 pb-16 md:flex-row md:items-end">
        <div className="max-w-lg">
          <p className="text-3xl font-bold tracking-tight text-primaryText md:text-4xl">Wendy</p>
          <p className="mt-4 text-lg leading-relaxed text-secondaryText">
            Your family&apos;s operating system. Calendars, tasks, lists, and household coordination — beautifully designed for iOS.
          </p>
        </div>
        <div className="w-full md:w-[400px]">
          <WaitlistForm variant="compact" />
        </div>
      </div>

      {/* Bottom */}
      <div className="mx-auto mt-10 flex w-full max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2 font-mono text-xs text-secondaryText">
          <span className="system-dot inline-block h-2.5 w-2.5 rounded-full bg-success" aria-hidden />
          <span>System Operational</span>
        </div>

        <div className="flex gap-8 font-mono text-xs text-secondaryText">
          <Link href="/privacy" className="transition-colors hover:text-primaryText">Privacy</Link>
          <Link href="/terms" className="transition-colors hover:text-primaryText">Terms</Link>
          <span>&copy; {new Date().getFullYear()} Wendy OS.</span>
        </div>
      </div>
    </footer>
  );
}
