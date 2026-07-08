"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AppStoreButton } from "./AppStoreButton";

const FLOATING_CHIPS = [
  { label: "Milk added to shopping", time: "08:12", delay: 0 },
  { label: "School pick-up at 3pm", time: "TODAY", delay: 2.2 },
  { label: "Sam: book dentist", time: "DONE", delay: 4.4 },
];

/** Hand-drawn marker underline, drawn in on load. */
function Underline() {
  return (
    <svg
      className="absolute -bottom-2 left-0 w-full md:-bottom-3"
      viewBox="0 0 300 14"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M4 10 C 60 4, 150 3, 296 7"
        stroke="var(--color-accent)"
        strokeWidth="4"
        strokeLinecap="round"
        pathLength="1"
        className="stroke-draw is-revealed"
      />
    </svg>
  );
}

/** Little hand-drawn sparkle. */
function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2 C 12.8 7.5, 16.5 11.2, 22 12 C 16.5 12.8, 12.8 16.5, 12 22 C 11.2 16.5, 7.5 12.8, 2 12 C 7.5 11.2, 11.2 7.5, 12 2 Z"
        fill="var(--color-accent)"
      />
    </svg>
  );
}

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
      phone.style.transform = `translate(${x * 12}px, ${y * 8}px) rotate(2deg)`;
    };

    const handleLeave = () => {
      phone.style.transform = "rotate(2deg)";
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
    transition: "opacity 700ms cubic-bezier(0.16,1,0.3,1), transform 700ms cubic-bezier(0.16,1,0.3,1)",
    transitionDelay: `${delay}ms`,
  });

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-x-clip bg-background px-6 pb-10 pt-14 md:px-16 md:pb-16 md:pt-20"
    >
      {/* Concentric arcs radiating from the phone side */}
      <svg
        className="pointer-events-none absolute -right-40 top-1/2 hidden h-[900px] w-[900px] -translate-y-1/2 lg:block"
        viewBox="0 0 900 900"
        fill="none"
        aria-hidden
      >
        {[180, 260, 340, 420].map((r) => (
          <circle
            key={r}
            cx="450"
            cy="450"
            r={r}
            stroke="var(--color-rule)"
            strokeWidth="1"
          />
        ))}
        <circle cx="450" cy="450" r="500" stroke="rgba(217,98,60,0.18)" strokeWidth="1" strokeDasharray="2 8" />
      </svg>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
        {/* Copy — left side */}
        <div className="text-center lg:text-left">
          <p className="eyebrow justify-center lg:justify-start" style={reveal(0)}>
            Free on the App Store — iPhone
          </p>

          <h1 className="mt-6 text-[2.9rem] leading-[1.05] text-primaryText sm:text-6xl lg:text-[4.6rem]">
            <span className="block" style={reveal(100)}>
              One calm app for
            </span>
            <span className="relative inline-block" style={reveal(240)}>
              <em className="italic text-accent">the whole household.</em>
              {loaded && <Underline />}
            </span>
          </h1>

          <p
            className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-secondaryText md:text-xl lg:mx-0"
            style={reveal(400)}
          >
            Calendars, tasks, shopping lists and reminders — together in one
            place, shared with your family, and in sync even over WhatsApp.
          </p>

          {/* CTA row */}
          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-5 lg:justify-start"
            style={reveal(560)}
          >
            <AppStoreButton />

            {/* QR — stamp-style for desktop visitors */}
            <div className="hidden items-center gap-3 lg:flex">
              <div className="rounded-lg border border-dashed border-accent/50 bg-white p-2">
                <Image
                  src="/qr-app-store.svg"
                  alt="QR code linking to Noa on the App Store"
                  width={76}
                  height={76}
                />
              </div>
              <span className="max-w-[110px] text-left font-mono text-[10px] uppercase leading-relaxed tracking-wider text-secondaryText">
                Scan to download
              </span>
            </div>
          </div>

          <p className="mt-6 font-mono text-[11px] uppercase tracking-wider text-secondaryText" style={reveal(680)}>
            Free to download&ensp;&middot;&ensp;
            <span className="text-accentDeep">Household free for 7 days</span>
            &ensp;&middot;&ensp;Cancel anytime
          </p>
        </div>

        {/* Phone — right side */}
        <div className="relative mx-auto w-fit lg:mx-0 lg:justify-self-center">
          {/* Tilted paper card behind the phone */}
          <div
            className="absolute -left-8 top-10 hidden h-[85%] w-[110%] -rotate-3 rounded-xl border border-border bg-surface/70 md:block"
            style={{
              opacity: loaded ? 1 : 0,
              transition: "opacity 900ms ease 500ms",
            }}
            aria-hidden
          />
          {/* Mono annotation on the card */}
          <span
            className="absolute -left-16 top-4 hidden -rotate-6 font-mono text-[10px] uppercase tracking-[0.2em] text-secondaryText md:block"
            style={{
              opacity: loaded ? 1 : 0,
              transition: "opacity 900ms ease 900ms",
            }}
            aria-hidden
          >
            fig. 01 — your week
          </span>

          <Sparkle
            className="absolute -right-10 -top-8 hidden h-7 w-7 md:block"
            aria-hidden
          />

          <div
            ref={phoneRef}
            className="relative w-[250px] transition-transform duration-200 ease-out md:w-[280px]"
            style={{
              opacity: loaded ? 1 : 0,
              transform: "rotate(2deg)",
              transitionProperty: "opacity, transform",
              transitionDuration: "800ms",
              transitionDelay: "300ms",
            }}
          >
            {/* Floating chips — app-style cards with mono timestamps */}
            {FLOATING_CHIPS.map((chip, i) => (
              <div
                key={chip.label}
                className="noa-card absolute z-30 hidden items-center gap-3 px-3.5 py-2.5 md:flex"
                style={{
                  top: i === 0 ? "8%" : i === 1 ? "44%" : "78%",
                  left: i === 1 ? undefined : "-62%",
                  right: i === 1 ? "-40%" : undefined,
                  transform: `rotate(${i === 1 ? 2 : -2}deg)`,
                  opacity: loaded ? 1 : 0,
                  transition: "opacity 600ms cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: `${800 + i * 200}ms`,
                  animation: loaded ? `floatChip 5s ease-in-out ${chip.delay}s infinite` : "none",
                }}
              >
                <span className="font-mono text-[9px] tracking-widest text-accent">{chip.time}</span>
                <span className="whitespace-nowrap text-xs font-medium text-primaryText">{chip.label}</span>
              </div>
            ))}

            {/* Phone frame */}
            <div className="relative overflow-hidden rounded-[40px] border-[6px] border-primaryText/90 bg-primaryText shadow-2xl shadow-primaryText/25">
              {/* Dynamic Island */}
              <div className="absolute left-1/2 top-2 z-20 h-[28px] w-[100px] -translate-x-1/2 rounded-full bg-primaryText" />

              {/* Screen */}
              <div className="relative overflow-hidden rounded-[34px]">
                <Image
                  src="/app-screenshot.png"
                  alt="The Noa app home screen showing today's plan"
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

      <style jsx>{`
        @keyframes floatChip {
          0%,
          100% {
            translate: 0 0;
          }
          50% {
            translate: 0 -6px;
          }
        }
      `}</style>
    </section>
  );
}
