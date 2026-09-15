"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { track } from "@vercel/analytics";

/**
 * "On Android?" prompt under the App Store button. Noa is iPhone-only, so
 * Android visitors can leave an email to hear when that changes — and the
 * sign-up count tells us whether an Android build is worth it.
 */
export function AndroidWaitlist({ placement }: { placement: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), source: "android" }),
      });
      if (!res.ok) throw new Error(`Waitlist responded ${res.status}`);
      track("Android waitlist signup", { placement, path: pathname });
      window.datafast?.("android_waitlist_signup", { placement });
      setStatus("success");
    } catch (err) {
      console.error("Android waitlist signup error:", err);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <p className="text-sm text-secondaryText">
        Thanks — we&apos;ll email you when Noa lands on Android.
      </p>
    );
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-sm text-secondaryText underline decoration-accent/40 underline-offset-4 transition-colors hover:text-primaryText"
      >
        On Android? Get notified when it launches
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm flex-col gap-2 sm:flex-row">
      <input
        type="email"
        placeholder="Your email"
        aria-label="Email for the Android waitlist"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        autoFocus
        className="flex-1 rounded-[16px] border border-primaryText/10 bg-card px-4 py-2.5 text-sm text-primaryText placeholder:text-secondaryText/50 focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/30"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-[16px] bg-primaryText px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0a2338] disabled:opacity-60"
      >
        {status === "loading" ? "Adding…" : "Notify me"}
      </button>
      {status === "error" && (
        <p className="text-xs text-destructive sm:basis-full">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}

declare global {
  interface Window {
    datafast?: (goal: string, params?: Record<string, string>) => void;
  }
}
