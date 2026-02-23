"use client";

import { useEffect, useRef } from "react";

const principles = [
  {
    title: "Parse",
    detail: "Commands are converted into explicit intent and arguments before action.",
  },
  {
    title: "Confirm",
    detail: "Ambiguous requests trigger clarification before any update is applied.",
  },
  {
    title: "Execute",
    detail: "Changes run against the right calendar and return deterministic results.",
  },
];

export function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      return;
    }

    let active = true;

    const observer = new IntersectionObserver(
      async (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting || !active) {
          return;
        }

        observer.disconnect();
        const { gsap } = await import("gsap");
        if (!active) {
          return;
        }

        gsap.fromTo(
          node,
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, duration: 0.45, ease: "power2.out" },
        );
      },
      { threshold: 0.3 },
    );

    observer.observe(node);

    return () => {
      active = false;
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#eef0f2] px-6 py-20 lg:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-sm font-medium text-secondaryText">Most AI assistants optimise for personality.</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-primaryText sm:text-4xl lg:text-5xl">
          Wendy optimises for <span className="text-accent">determinism</span>.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondaryText">
          Wendy doesn&apos;t guess. It parses. Confirms. Executes. Your life - structured.
        </p>
        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {principles.map((principle) => (
            <article key={principle.title} className="rounded-2xl border border-black/10 bg-white/70 p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.06em] text-primaryText">
                {principle.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-secondaryText">{principle.detail}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-secondaryText">
          Example: if two events match a reschedule command, Wendy asks which one to modify before
          execution.
        </p>
      </div>
    </section>
  );
}
