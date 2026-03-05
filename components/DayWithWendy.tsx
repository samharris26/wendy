"use client";

import { ChatExchange } from "./ChatExchange";

const moments = [
  {
    time: "Morning",
    user: "Wendy, what's on today?",
    wendy: (
      <>
        <span className="block text-white/80">9:00 Team standup</span>
        <span className="block text-white/80">12:30 Lunch with Sarah</span>
        <span className="block text-white/80">15:00 School pickup</span>
      </>
    ),
  },
  {
    time: "Afternoon",
    user: "Add football training Thursday at 6pm",
    wendy: (
      <>
        <span className="mb-1 block font-mono text-[10px] text-white/50">Event created</span>
        <span className="font-medium">Thursday 18:00</span>
        <span className="ml-1.5 text-white/70">Family calendar</span>
      </>
    ),
  },
  {
    time: "Evening",
    user: "Add milk and bananas to the shopping list",
    wendy: (
      <>
        <span className="mb-1 block font-mono text-[10px] text-white/50">Added to Shopping List</span>
        Milk, Bananas
      </>
    ),
  },
];

export function DayWithWendy() {
  return (
    <section className="bg-surface px-6 py-20 lg:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
            Real Usage
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-primaryText sm:text-4xl lg:text-5xl">
            A day with Wendy.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {moments.map((m) => (
            <div
              key={m.time}
              className="rounded-2xl border border-primaryText/10 bg-card p-7 shadow-surface-xs md:p-8"
            >
              <span className="mb-4 inline-block rounded-full border border-primaryText/10 bg-primaryText/5 px-3 py-1 font-mono text-[10px] text-secondaryText">
                {m.time}
              </span>
              <ChatExchange userMessage={m.user} wendyResponse={m.wendy} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
