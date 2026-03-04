"use client";

import { useEffect, useRef } from "react";

export function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let active = true;

    const observer = new IntersectionObserver(
      async (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting || !active) return;

        observer.disconnect();
        const { gsap } = await import("gsap");
        if (!active) return;

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
    <section id="philosophy" ref={sectionRef} className="bg-surface px-6 py-20 lg:px-10">
      <div className="mx-auto w-full max-w-5xl">
        <div className="rounded-3xl border border-primaryText/5 bg-card p-12 text-center shadow-surface-sm md:p-20">
          <p className="text-lg text-secondaryText md:text-xl">
            Other tools scatter your life across a dozen apps.
          </p>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-primaryText md:text-6xl lg:text-7xl">
            Wendy keeps it{" "}
            <span className="text-secondaryText">all in one place.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg text-secondaryText">
            WhatsApp for control. The app for visibility. Your household, always in sync.
          </p>
        </div>
      </div>
    </section>
  );
}
