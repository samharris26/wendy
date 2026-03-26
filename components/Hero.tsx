"use client";

import { useEffect, useRef, useState } from "react";
import { WaitlistForm } from "./WaitlistForm";

const FLOATING_CHIPS = [
  { label: "Milk added to shopping", icon: "🛒", delay: 0 },
  { label: "School pick-up at 3pm", icon: "📅", delay: 2.2 },
  { label: "Sam: book dentist", icon: "✅", delay: 4.4 },
];

export function Hero() {
  const phoneRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [loaded, setLoaded] = useState(false);

  // Mouse-tracking parallax on phone
  useEffect(() => {
    const hero = heroRef.current;
    const phone = phoneRef.current;
    if (!hero || !phone) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const handleMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      phone.style.transform = `translate(${x * 12}px, ${y * 8}px) rotateY(${x * 3}deg) rotateX(${-y * 3}deg)`;
    };

    const handleLeave = () => {
      phone.style.transform = "translate(0, 0) rotateY(0) rotateX(0)";
    };

    hero.addEventListener("mousemove", handleMove);
    hero.addEventListener("mouseleave", handleLeave);
    return () => {
      hero.removeEventListener("mousemove", handleMove);
      hero.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  // Staggered entrance
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[85vh] w-full items-center overflow-x-clip overflow-y-visible bg-background px-6 md:px-16"
    >
      {/* Noise grain overlay */}
      <div className="pointer-events-none absolute inset-0 z-20 opacity-[0.035]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
      }} />

      {/* Warm gradient glow */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-accent/[0.06] blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-primaryText/[0.04] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-12 pt-16 md:pt-0 lg:flex-row lg:items-center lg:gap-16">
        {/* Copy — left side */}
        <div className="flex-1 text-center lg:text-left">
          <h1
            ref={headingRef}
            className="text-5xl font-bold leading-[1.05] tracking-tight text-primaryText md:text-6xl lg:text-7xl"
          >
            {["Your", "life,", "organised."].map((word, i) => (
              <span
                key={word}
                className="inline-block transition-all duration-700 ease-out"
                style={{
                  opacity: loaded ? 1 : 0,
                  transform: loaded ? "translateY(0)" : "translateY(24px)",
                  transitionDelay: `${i * 120}ms`,
                }}
              >
                {word}{i < 2 ? "\u00A0" : ""}
              </span>
            ))}
          </h1>

          <p
            className="mt-8 max-w-xl text-lg leading-relaxed text-secondaryText md:text-xl lg:mx-0 transition-all duration-700 ease-out"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(16px)",
              transitionDelay: "400ms",
            }}
          >
            Calendars, tasks, lists and reminders — all in one calm, beautifully
            designed app. Add things instantly or just ask Noa on WhatsApp.
          </p>

          <p
            className="mt-4 max-w-xl text-base leading-relaxed text-secondaryText lg:mx-0 transition-all duration-700 ease-out"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(16px)",
              transitionDelay: "520ms",
            }}
          >
            Noa is the household organisation app that brings your shared family
            calendar, family task management, and shopping lists together in one
            place. Sync Apple and Google Calendar, assign tasks to family members,
            and manage it all through natural language on WhatsApp.
          </p>

          <div
            className="mt-10 flex justify-center lg:justify-start transition-all duration-700 ease-out"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(16px)",
              transitionDelay: "640ms",
            }}
          >
            <WaitlistForm />
          </div>
        </div>

        {/* iPhone mockup — right side with parallax */}
        <div className="flex shrink-0 justify-center overflow-visible" style={{ perspective: "800px" }}>
          <div
            ref={phoneRef}
            className="relative w-[260px] md:w-[280px] transition-transform duration-200 ease-out"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(32px)",
              transitionProperty: "opacity",
              transitionDuration: "800ms",
              transitionDelay: "300ms",
            }}
          >
            {/* Floating chips */}
            {FLOATING_CHIPS.map((chip, i) => (
              <div
                key={chip.label}
                className="absolute z-30 hidden md:flex items-center gap-2 rounded-xl border border-primaryText/[0.08] bg-white/90 px-3 py-2 shadow-lg shadow-primaryText/[0.06] backdrop-blur-sm"
                style={{
                  top: i === 0 ? "5%" : i === 1 ? "45%" : "80%",
                  left: i === 0 ? "-45%" : i === 2 ? "-40%" : undefined,
                  right: i === 1 ? "-35%" : undefined,
                  opacity: loaded ? 1 : 0,
                  transform: loaded ? "translateY(0) scale(1)" : "translateY(12px) scale(0.9)",
                  transition: "opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: `${800 + i * 200}ms`,
                  animation: loaded ? `floatChip${i} 5s ease-in-out ${chip.delay}s infinite` : "none",
                }}
              >
                <span className="text-sm">{chip.icon}</span>
                <span className="whitespace-nowrap text-xs font-medium text-primaryText">{chip.label}</span>
              </div>
            ))}

            {/* Phone frame */}
            <div className="relative overflow-hidden rounded-[40px] border-[6px] border-primaryText/90 bg-primaryText shadow-2xl shadow-primaryText/20">
              {/* Dynamic Island */}
              <div className="absolute left-1/2 top-2 z-20 h-[28px] w-[100px] -translate-x-1/2 rounded-full bg-primaryText" />

              {/* Screen */}
              <div className="relative overflow-hidden rounded-[34px]">
                <video
                  src="/demo.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="block w-full"
                  ref={(el) => { if (el) el.playbackRate = 1.5; }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating chip keyframes */}
      <style jsx>{`
        @keyframes floatChip0 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes floatChip1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes floatChip2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }
      `}</style>
    </section>
  );
}
