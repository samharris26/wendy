"use client";

import { useEffect, useRef } from "react";

export interface CommandMessage {
  id: string;
  role: "user" | "system";
  text: string;
  timestamp: string;
}

const messages: CommandMessage[] = [
  {
    id: "user-1",
    role: "user",
    text: "Add hockey at 3pm tomorrow for work",
    timestamp: "14:07",
  },
  {
    id: "system-1",
    role: "system",
    text: "Added \"Hockey\" at 15:00 tomorrow to Work calendar.",
    timestamp: "14:07",
  },
];

export function CommandDemo() {
  const panelRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      return;
    }

    let active = true;

    const run = async () => {
      const { gsap } = await import("gsap");
      if (!active) {
        return;
      }

      if (panelRef.current) {
        gsap.fromTo(
          panelRef.current,
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 1, y: 0, duration: 0.45, ease: "power2.out" },
        );
      }

      const lines = lineRefs.current.filter(Boolean);
      if (lines.length > 0) {
        gsap.fromTo(
          lines,
          { autoAlpha: 0, y: 10 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.32,
            stagger: 0.06,
            ease: "power2.out",
            delay: 0.08,
          },
        );
      }
    };

    void run();

    return () => {
      active = false;
    };
  }, []);

  return (
    <div
      ref={panelRef}
      className="rounded-2xl border border-primaryText/10 bg-card p-5 shadow-[0_8px_28px_rgba(15,42,74,0.12)]"
    >
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-medium text-secondaryText">WhatsApp Command</p>
        <p className="font-mono text-xs text-secondaryText">live simulation</p>
      </div>

      <div className="space-y-3">
        {messages.map((message, index) => {
          const isUser = message.role === "user";

          return (
            <div
              key={message.id}
              ref={(node) => {
                lineRefs.current[index] = node;
              }}
              className={`flex ${isUser ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[90%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  isUser
                    ? "rounded-br-md bg-primaryText text-white"
                    : "rounded-bl-md border border-primaryText/10 bg-[#f9fafb] text-primaryText"
                }`}
              >
                <p>{message.text}</p>
                {!isUser ? (
                  <div className="mt-2 flex items-center gap-2">
                    <span className="rounded-full border border-primaryText/20 bg-primaryText/10 px-2.5 py-1 text-[11px] font-medium text-primaryText">
                      Work
                    </span>
                    <span className="text-[11px] text-secondaryText">Calendar</span>
                  </div>
                ) : null}
                <p
                  className={`mt-2 text-right font-mono text-[11px] ${
                    isUser ? "text-white/80" : "text-secondaryText"
                  }`}
                >
                  {message.timestamp}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
