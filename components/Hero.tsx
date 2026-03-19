"use client";

import { WaitlistForm } from "./WaitlistForm";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] w-full items-center overflow-hidden bg-background px-6 md:px-16">
      {/* Background glow */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-primaryText/5 opacity-70 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-12 pt-16 md:pt-0 lg:flex-row lg:items-center lg:gap-16">
        {/* Copy — left side on desktop */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-primaryText md:text-6xl lg:text-7xl">
            Your life, organised.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-secondaryText md:text-xl lg:mx-0">
            Calendars, tasks, lists and reminders — all in one calm, beautifully
            designed app. Add things instantly or just ask Noa on WhatsApp.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-secondaryText lg:mx-0">
            Noa is the household organisation app that brings your shared family
            calendar, family task management, and shopping lists together in one
            place. Sync Apple and Google Calendar, assign tasks to family members,
            and manage it all through natural language on WhatsApp.
          </p>

          <div className="mt-10 flex justify-center lg:justify-start">
            <WaitlistForm />
          </div>
        </div>

        {/* iPhone mockup — right side on desktop */}
        <div className="flex shrink-0 justify-center">
          <div className="relative w-[260px] md:w-[280px]">
            {/* Phone frame */}
            <div className="relative overflow-hidden rounded-[40px] border-[6px] border-primaryText/90 bg-primaryText shadow-surface-sm">
              {/* Notch / Dynamic Island */}
              <div className="absolute left-1/2 top-2 z-20 h-[28px] w-[100px] -translate-x-1/2 rounded-full bg-primaryText" />

              {/* Screen content */}
              <div className="relative overflow-hidden rounded-[34px]">
                <video
                  src="/demo.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="block w-full"
                  style={{ playbackRate: 1.5 } as React.CSSProperties}
                  ref={(el) => { if (el) el.playbackRate = 1.5; }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
