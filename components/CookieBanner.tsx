"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CONSENT_KEY = "noa_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="mx-auto flex max-w-3xl flex-col items-start gap-4 rounded-2xl border border-primaryText/10 bg-card px-6 py-5 shadow-lg sm:flex-row sm:items-center sm:gap-6">
        <p className="flex-1 text-sm leading-relaxed text-secondaryText">
          We use cookies and analytics to improve your experience. By continuing you agree to our{" "}
          <Link href="/privacy" className="underline transition-colors hover:text-primaryText">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms" className="underline transition-colors hover:text-primaryText">
            Terms
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={decline}
            className="rounded-lg border border-primaryText/15 px-4 py-2 font-heading text-xs font-medium text-secondaryText transition-colors hover:border-primaryText/30 hover:text-primaryText"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="rounded-lg bg-primaryText px-4 py-2 font-heading text-xs font-medium text-card transition-opacity hover:opacity-90"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
