"use client";

import { WaitlistForm } from "./WaitlistForm";

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
        <p className="mx-auto mt-8 mb-12 max-w-2xl text-xl leading-relaxed text-secondaryText md:text-2xl">
          Calendars, tasks, lists, and family coordination — beautifully designed for iOS. Upgrade to WhatsApp for hands-free control.
        </p>
        <div className="inline-flex w-full justify-center">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
