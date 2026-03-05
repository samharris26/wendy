"use client";

import { WaitlistForm } from "./WaitlistForm";
import { ChatExchange } from "./ChatExchange";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden bg-background px-6 pb-24 pt-12 md:px-16">
      {/* Background glow */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-primaryText/5 opacity-70 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-4xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondaryText">
          Your family&apos;s
        </p>
        <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-primaryText md:text-7xl lg:text-8xl">
          Operating System.
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-secondaryText md:text-xl">
          Run your household from one calm, beautifully designed app.
          Calendars, tasks, lists and reminders live in one place.
          Add things instantly in the app or simply message Wendy on WhatsApp.
        </p>

        {/* WhatsApp demo */}
        <div className="mx-auto mt-10 max-w-sm rounded-2xl border border-primaryText/10 bg-card/80 p-5 shadow-surface-xs backdrop-blur-sm">
          <ChatExchange
            userMessage="Add dentist next Tuesday at 3pm for family"
            wendyResponse={
              <>
                <span className="mb-1 block font-mono text-[10px] text-white/50">Event created</span>
                <span className="font-medium">Tuesday 3:00pm</span>
                <span className="ml-1.5 text-white/70">Family calendar</span>
              </>
            }
          />
        </div>

        <div className="mt-10 inline-flex w-full justify-center">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
