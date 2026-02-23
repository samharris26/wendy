"use client";

import { FormEvent, useState } from "react";

export interface WaitlistFormState {
  email: string;
  error: string | null;
  success: boolean;
}

const initialState: WaitlistFormState = {
  email: "",
  error: null,
  success: false,
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function CTA() {
  const [state, setState] = useState<WaitlistFormState>(initialState);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedEmail = state.email.trim().toLowerCase();
    if (!emailRegex.test(normalizedEmail)) {
      setState((current) => ({
        ...current,
        error: "Enter a valid email address.",
        success: false,
      }));
      return;
    }

    setState({
      email: "",
      error: null,
      success: true,
    });
  };

  return (
    <section id="pricing" className="px-6 py-20 lg:px-10">
      <div className="mx-auto w-full max-w-6xl rounded-3xl border border-primaryText/10 bg-card px-6 py-14 text-center shadow-surface-xs sm:px-10">
        <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight text-primaryText sm:text-4xl">
          Start running your life through Wendy.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-secondaryText">
          No dashboards. No complexity. Just one command bar - inside WhatsApp.
        </p>
        <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-secondaryText">
          Join the early-access waitlist for deterministic scheduling, rescheduling, and daily
          execution summaries.
        </p>

        <form id="waitlist" onSubmit={onSubmit} className="mx-auto mt-8 max-w-xl">
          <label htmlFor="waitlist-email" className="sr-only">
            Email address
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              id="waitlist-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              value={state.email}
              onChange={(event) =>
                setState((current) => ({
                  ...current,
                  email: event.target.value,
                  error: null,
                  success: false,
                }))
              }
              className="w-full rounded-xl border border-primaryText/15 bg-white px-4 py-3 text-sm text-primaryText outline-none transition-colors placeholder:text-secondaryText focus:border-accent"
              aria-invalid={Boolean(state.error)}
              aria-describedby={state.error ? "waitlist-error" : undefined}
            />
            <button
              type="submit"
              className="shrink-0 whitespace-nowrap rounded-xl bg-primaryText px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0b223d]"
            >
              Start using Wendy
            </button>
          </div>

          {state.error ? (
            <p id="waitlist-error" className="mt-3 text-left text-sm text-destructive">
              {state.error}
            </p>
          ) : null}

          {state.success ? (
            <p className="mt-3 text-left text-sm text-success">Request received. We&apos;ll reach out soon.</p>
          ) : null}
        </form>

        <a href="#waitlist" className="mt-4 inline-block text-sm font-medium text-secondaryText underline-offset-4 hover:underline">
          Join beta
        </a>
        <div className="mx-auto mt-6 grid max-w-3xl gap-2 text-left text-sm text-secondaryText sm:grid-cols-3">
          <p>Calendar sync with controlled confirmations.</p>
          <p>WhatsApp-native command flow.</p>
          <p>No spam. Product and access updates only.</p>
        </div>
      </div>
    </section>
  );
}
