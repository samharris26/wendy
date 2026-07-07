"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AppStoreButton } from "./AppStoreButton";

const FLOATING_CHIPS = [
  { label: "Milk added to shopping", icon: "🛒", delay: 0 },
  { label: "School pick-up at 3pm", icon: "📅", delay: 2.2 },
  { label: "Sam: book dentist", icon: "✅", delay: 4.4 },
];

export function Hero() {
  const phoneRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
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

  const reveal = (delay: number) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(20px)",
    transitionDelay: `${delay}ms`,
  });

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[88vh] w-full items-center overflow-x-clip overflow-y-visible bg-background px-6 md:px-16"
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

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-12 pb-16 pt-16 md:pt-8 lg:flex-row lg:items-center lg:gap-16">
        {/* Copy — left side */}
        <div className="flex-1 text-center lg:text-left">
          {/* Eyebrow */}
          <p
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accentSoft/60 px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-accentDeep transition-all duration-700 ease-out"
            style={reveal(0)}
          >
            Free on the App&nbsp;Store
          </p>

          <h1 className="text-5xl leading-[1.08] text-primaryText md:text-6xl lg:text-7xl">
            <span className="block transition-all duration-700 ease-out" style={reveal(100)}>
              One calm app for
            </span>
            <span className="block italic text-accent transition-all duration-700 ease-out" style={reveal(240)}>
              the whole household.
            </span>
          </h1>

          <p
            className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-secondaryText md:text-xl lg:mx-0 transition-all duration-700 ease-out"
            style={reveal(400)}
          >
            Noa brings your family&apos;s calendars, tasks, shopping lists and
            reminders into one place — and keeps everyone in sync, even over
            WhatsApp.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-5 lg:justify-start transition-all duration-700 ease-out"
            style={reveal(560)}
          >
            <AppStoreButton />

            {/* QR — desktop visitors can scan straight to the store */}
            <div className="hidden items-center gap-3 lg:flex">
              <Image
                src="/qr-app-store.svg"
                alt="QR code linking to Noa on the App Store"
                width={64}
                height={64}
                className="rounded-lg border border-border bg-white p-1"
              />
              <span className="max-w-[110px] text-left text-xs leading-snug text-secondaryText">
                Scan with your iPhone to download
              </span>
            </div>
          </div>

          <p
            className="mt-5 text-sm text-secondaryText transition-all duration-700 ease-out"
            style={reveal(680)}
          >
            Free to download &middot;{" "}
            <span className="font-semibold text-accentDeep">
              Try Household free for 7 days
            </span>{" "}
            &middot; Cancel anytime
          </p>
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
                <Image
                  src="/app-screenshot.png"
                  alt="Noa app"
                  width={390}
                  height={844}
                  className="block w-full"
                  priority
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
