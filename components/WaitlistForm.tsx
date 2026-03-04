"use client";

import { useState } from "react";
import { submitWaitlist } from "@/lib/waitlist";

export function WaitlistForm({ variant = "default" }: { variant?: "default" | "compact" }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !name.trim()) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      await submitWaitlist({ name: name.trim(), email: email.trim() });
      setStatus("success");
    } catch (err) {
      console.error("Waitlist signup error:", err);
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className={`flex items-center gap-3 ${variant === "compact" ? "" : "py-2"}`}>
        <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-success" />
        <span className="text-sm text-secondaryText">
          You&apos;re on the list. We&apos;ll be in touch.
        </span>
      </div>
    );
  }

  const isCompact = variant === "compact";

  return (
    <form onSubmit={handleSubmit} className={`flex w-full flex-col gap-3 ${isCompact ? "max-w-sm" : "max-w-md"}`}>
      <div className={`flex ${isCompact ? "flex-col" : "flex-col sm:flex-row"} gap-3`}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="flex-1 rounded-xl border border-primaryText/10 bg-white px-4 py-3 text-sm text-primaryText placeholder:text-secondaryText/50 transition-all focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/30"
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 rounded-xl border border-primaryText/10 bg-white px-4 py-3 text-sm text-primaryText placeholder:text-secondaryText/50 transition-all focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/30"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-primaryText px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primaryText/20 transition-colors hover:bg-[#0b223d] disabled:opacity-60"
      >
        {status === "loading" ? (
          <span className="flex items-center gap-2">
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" /><path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
            Joining…
          </span>
        ) : (
          <>
            <span>Join the Waitlist</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </>
        )}
      </button>
      {status === "error" && (
        <p className="mt-1 text-xs text-destructive">{errorMsg}</p>
      )}
    </form>
  );
}
