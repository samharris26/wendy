"use client";

import { useEffect, useState } from "react";
import { AppStoreLink } from "./AppStoreLink";

/**
 * Persistent download bar docked to the bottom of the viewport — mirrors the
 * app's docked "Ask Noa" bar. Hidden while the hero CTA is in view, revealed
 * on scroll past it, and dismissible for the session.
 */
export function DockedBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    try {
      setDismissed(sessionStorage.getItem("noa-docked-dismissed") === "1");
    } catch {
      setDismissed(false);
    }
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function dismiss() {
    setDismissed(true);
    try {
      sessionStorage.setItem("noa-docked-dismissed", "1");
    } catch {
      /* ignore */
    }
  }

  const show = visible && !dismissed;

  return (
    <div
      className={`fixed inset-x-4 bottom-4 z-30 mx-auto flex max-w-[1088px] items-center gap-4 rounded-[20px] bg-primaryText py-3.5 pl-[22px] pr-4 shadow-docked transition-all duration-300 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-[130%] opacity-0"
      }`}
    >
      <span className="flex min-w-0 flex-col gap-1">
        <span className="truncate text-[15px] font-semibold leading-none text-white">
          Noa — free on the App Store
        </span>
        <span className="truncate text-[13px] leading-none text-onNavyMuted">
          Household free for 7 days &middot; cancel anytime
        </span>
      </span>

      <AppStoreLink
            placement="docked-bar"
            className="ml-auto shrink-0 rounded-[14px] bg-white px-[22px] py-[13px] text-[15px] font-semibold leading-none text-primaryText transition-colors hover:bg-[#E6EAF3]"
      >
        Download
      </AppStoreLink>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss download bar"
        className="shrink-0 rounded-full p-1.5 text-onNavyMuted transition-colors hover:text-white"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </div>
  );
}
