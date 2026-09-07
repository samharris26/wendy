"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AppStoreButton } from "./AppStoreButton";

const FLOATING_CHIPS = [
  { label: "Milk added to shopping", meta: "8:12", side: "left", top: "8%" },
  { label: "School pick-up at 3pm", meta: "Today", side: "right", top: "44%" },
  { label: "Sam: book dentist", meta: "Done", side: "left", top: "78%" },
];

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const reveal = (delay: number) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(20px)",
    transition:
      "opacity 700ms cubic-bezier(0.16,1,0.3,1), transform 700ms cubic-bezier(0.16,1,0.3,1)",
    transitionDelay: `${delay}ms`,
  });

  return (
    <section className="relative w-full overflow-x-clip bg-background px-6 pb-12 pt-14 md:px-16 md:pb-20 md:pt-20">
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <p className="eyebrow" style={reveal(0)}>
            Free on the App Store · iPhone
          </p>

          <h1 className="mt-5 text-[2.9rem] leading-[1.06] text-primaryText sm:text-6xl lg:text-[4.4rem]">
            <span className="block" style={reveal(100)}>
              One calm app for
            </span>
            <span className="block" style={reveal(240)}>
              <em className="accent-italic">the whole household.</em>
            </span>
          </h1>

          <p
            className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-secondaryText md:text-xl lg:mx-0"
            style={reveal(400)}
          >
            Calendars, tasks, shopping lists and reminders — together in one
            place, shared with your family, and in sync even over WhatsApp.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-5 lg:justify-start"
            style={reveal(560)}
          >
            <AppStoreButton />

            <div className="hidden items-center gap-3 lg:flex">
              <div className="rounded-lg border border-border bg-card p-2">
                <Image
                  src="/qr-app-store.svg"
                  alt="QR code linking to Noa on the App Store"
                  width={76}
                  height={76}
                />
              </div>
              <span className="max-w-[110px] text-left text-xs leading-relaxed text-secondaryText">
                Scan to download
              </span>
            </div>
          </div>

          <p className="mt-6 text-[13px] text-secondaryText" style={reveal(680)}>
            Free to download&ensp;&middot;&ensp;
            <span className="font-medium text-interactive">Household free for 7 days</span>
            &ensp;&middot;&ensp;Cancel anytime
          </p>
        </div>

        {/* Phone */}
        <div className="relative mx-auto w-fit lg:mx-0 lg:justify-self-center">
          <div
            className="relative w-[250px] md:w-[280px]"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 800ms ease 300ms, transform 800ms ease 300ms",
            }}
          >
            {FLOATING_CHIPS.map((chip, i) => (
              <div
                key={chip.label}
                className="noa-card absolute z-30 hidden items-center gap-3 px-3.5 py-2.5 md:flex"
                style={{
                  top: chip.top,
                  left: chip.side === "left" ? "-58%" : undefined,
                  right: chip.side === "right" ? "-38%" : undefined,
                  opacity: loaded ? 1 : 0,
                  transition: "opacity 600ms cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: `${800 + i * 200}ms`,
                }}
              >
                <span className="text-[10px] font-semibold uppercase tracking-wide text-interactive">
                  {chip.meta}
                </span>
                <span className="whitespace-nowrap text-xs font-medium text-primaryText">
                  {chip.label}
                </span>
              </div>
            ))}

            {/* Phone frame */}
            <div className="relative overflow-hidden rounded-[40px] border-[6px] border-primaryText bg-primaryText shadow-xl shadow-primaryText/15">
              <div className="absolute left-1/2 top-2 z-20 h-[28px] w-[100px] -translate-x-1/2 rounded-full bg-primaryText" />
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
    </section>
  );
}
