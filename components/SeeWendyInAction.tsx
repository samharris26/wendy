"use client";

import { ChatExchange } from "./ChatExchange";

const examples = [
  {
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
    user: "Add milk, bananas and pasta to the shopping list",
    wendy: (
      <>
        <span className="mb-1 block font-mono text-[10px] text-white/50">Added to Shopping List</span>
        Milk, Bananas, Pasta
      </>
    ),
  },
  {
    user: "Remind me to renew car insurance in May",
    wendy: (
      <>
        <span className="mb-1 block font-mono text-[10px] text-white/50">Reminder created</span>
        <span className="font-medium">1 May</span>
        <span className="ml-1.5 text-white/70">Renew car insurance</span>
      </>
    ),
  },
  {
    user: "Move dentist to next Wednesday",
    wendy: (
      <>
        <span className="mb-1 block font-mono text-[10px] text-white/50">Event updated</span>
        <span className="font-medium">Wednesday 15:00</span>
        <span className="ml-1.5 text-white/70">Family calendar</span>
      </>
    ),
  },
];

export function SeeWendyInAction() {
  return (
    <section className="px-6 py-20 lg:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
            Natural Language
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-primaryText sm:text-4xl lg:text-5xl">
            Just say it. Wendy handles the rest.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-secondaryText">
            No menus. No complicated setup. Just type naturally.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {examples.map((ex, i) => (
            <div
              key={i}
              className="rounded-2xl border border-primaryText/10 bg-card p-6 shadow-surface-xs"
            >
              <ChatExchange userMessage={ex.user} wendyResponse={ex.wendy} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
