"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";

/** "One useful idea a week" — joins the weekly email list (email only). */
export function BlogSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), source: "blog" }),
      });
      if (!res.ok) throw new Error(`Signup responded ${res.status}`);
      track("Blog signup");
      setStatus("done");
    } catch (err) {
      console.error("Blog signup error:", err);
      setStatus("error");
    }
  }

  return (
    <div className="flex flex-col gap-[18px] rounded-[34px] bg-primaryText p-6 sm:px-[38px] sm:py-[34px]">
      <span className="flex flex-col gap-[9px]">
        <span className="font-display text-[26px] leading-[1.2] text-white sm:text-[30px]">One useful idea a week</span>
        <span className="max-w-[30em] text-base leading-normal text-[#C3CFE2]">
          A short weekly email: one thing that worked in our house, and the printable if there is one. Unsubscribe whenever.
        </span>
      </span>
      {status === "done" ? (
        <p className="text-base font-medium text-white">Thanks, you&rsquo;re on the list.</p>
      ) : (
        <form onSubmit={submit} className="flex flex-col gap-2.5 sm:flex-row">
          <label htmlFor="blog-signup-email" className="sr-only">
            Email address
          </label>
          <input
            id="blog-signup-email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.co.uk"
            className="h-12 flex-1 rounded-[20px] bg-inkPanel px-[18px] text-base text-white outline-none placeholder:text-[#AAB8D0] focus:ring-2 focus:ring-accent sm:h-[50px]"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="h-12 flex-none rounded-[20px] bg-accent px-6 text-base font-semibold text-white transition-colors hover:bg-accentHover disabled:opacity-70 sm:h-[50px]"
          >
            {status === "loading" ? "Subscribing…" : "Subscribe"}
          </button>
        </form>
      )}
      {status === "error" && <p className="text-sm text-[#C3CFE2]">That didn&rsquo;t go through. Try again in a moment.</p>}
    </div>
  );
}
