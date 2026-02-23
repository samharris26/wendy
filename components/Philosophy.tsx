"use client";

import { useEffect, useRef } from "react";

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
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-secondaryText">
          Wendy doesn&apos;t guess. It parses. Confirms. Executes. Your life - structured.
        </p>
      </div>
    </section>
  );
}
