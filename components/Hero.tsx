"use client";

import { WaitlistForm } from "./WaitlistForm";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] w-full flex-col items-center justify-start overflow-hidden bg-background px-6 pt-12 md:px-16">
      {/* Background glow */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-primaryText/5 opacity-70 blur-[100px]" />
      </div>

      {/* Copy */}
      <div className="relative z-10 w-full max-w-4xl pt-16 text-center md:pt-20">
        <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-primaryText md:text-7xl lg:text-8xl">
          Your life, organised.
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-secondaryText md:text-xl">
          Calendars, tasks, lists and reminders — all in one calm, beautifully
          designed app. Add things instantly or just ask Noa on WhatsApp.
        </p>

        <div className="mt-10 inline-flex w-full justify-center">
          <WaitlistForm />
        </div>
      </div>

      {/* iPhone mockup rising from the bottom */}
      <div className="relative z-10 mt-16 flex w-full justify-center md:mt-20">
        <div className="relative w-[280px] md:w-[320px]">
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
    </section>
  );
}
