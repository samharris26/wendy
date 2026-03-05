"use client";

import { useEffect, useState } from "react";

const days = [
  { short: "Mon", date: 10 },
  { short: "Tue", date: 11 },
  { short: "Wed", date: 12 },
  { short: "Thu", date: 13 },
  { short: "Fri", date: 14 },
  { short: "Sat", date: 15 },
  { short: "Sun", date: 16 },
];

const events = [
  { day: 0, start: 0, span: 1, label: "Team standup", color: "bg-accent/15 text-accent border-accent/20" },
  { day: 0, start: 2, span: 1, label: "School pickup", color: "bg-blue-400/15 text-blue-600 border-blue-400/20" },
  { day: 1, start: 1, span: 1, label: "Dentist", color: "bg-emerald-500/15 text-emerald-700 border-emerald-500/20" },
  { day: 2, start: 0, span: 2, label: "Workshop", color: "bg-accent/15 text-accent border-accent/20" },
  { day: 3, start: 1, span: 1, label: "Football training", color: "bg-blue-400/15 text-blue-600 border-blue-400/20" },
  { day: 3, start: 3, span: 1, label: "Dinner w/ James", color: "bg-emerald-500/15 text-emerald-700 border-emerald-500/20" },
  { day: 4, start: 0, span: 1, label: "Team standup", color: "bg-accent/15 text-accent border-accent/20" },
  { day: 5, start: 1, span: 2, label: "Garden party", color: "bg-emerald-500/15 text-emerald-700 border-emerald-500/20" },
  { day: 6, start: 1, span: 1, label: "Family lunch", color: "bg-blue-400/15 text-blue-600 border-blue-400/20" },
];

const times = ["9:00", "11:00", "13:00", "15:00"];

export function ProductVisual() {
  const [today, setToday] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => setToday((prev) => (prev + 1) % 7), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-surface px-6 py-20 lg:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">The App</p>
          <h2 className="text-3xl font-semibold tracking-tight text-primaryText sm:text-4xl lg:text-5xl">
            Everything in one calm timeline.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-secondaryText">
            Work, school, sports and family plans all appear together. Wendy becomes the single place your household runs from.
          </p>
        </div>

        {/* Calendar visual */}
        <div className="overflow-hidden rounded-3xl border border-primaryText/5 bg-card p-4 shadow-surface-sm sm:p-6 md:p-8">
          {/* Calendar header badges */}
          <div className="mb-4 flex gap-2">
            <span className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 font-mono text-[10px] text-accent">Google</span>
            <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-2.5 py-1 font-mono text-[10px] text-blue-500">Apple</span>
            <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] text-emerald-600">Wendy</span>
          </div>

          {/* Day header row */}
          <div className="mb-3 grid grid-cols-[48px_repeat(7,1fr)] gap-1">
            <div />
            {days.map((d, i) => (
              <div
                key={i}
                className={`flex flex-col items-center gap-1 rounded-xl py-2 transition-all duration-500 ${
                  i === today ? "bg-accent/10" : ""
                }`}
              >
                <span className="font-mono text-[10px] text-secondaryText">{d.short}</span>
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold transition-all duration-500 ${
                    i === today
                      ? "bg-accent text-white"
                      : "text-primaryText"
                  }`}
                >
                  {d.date}
                </span>
              </div>
            ))}
          </div>

          {/* Time grid */}
          <div className="grid grid-cols-[48px_repeat(7,1fr)] gap-1">
            {times.map((time, row) => (
              <div key={row} className="contents">
                <div className="flex items-start pt-1 font-mono text-[10px] text-secondaryText/60">
                  {time}
                </div>
                {days.map((_, col) => {
                  const event = events.find((e) => e.day === col && e.start === row);
                  if (event) {
                    return (
                      <div
                        key={col}
                        className={`rounded-lg border px-2 py-1.5 text-[11px] font-medium ${event.color}`}
                        style={{
                          gridRow: `span ${event.span}`,
                        }}
                      >
                        <span className="hidden sm:inline">{event.label}</span>
                        <span className="sm:hidden">{event.label.slice(0, 8)}{event.label.length > 8 ? "..." : ""}</span>
                      </div>
                    );
                  }
                  // Check if this cell is covered by a spanning event
                  const covered = events.find(
                    (e) => e.day === col && e.start < row && e.start + e.span > row
                  );
                  if (covered) return null;
                  return (
                    <div
                      key={col}
                      className="min-h-[36px] rounded-lg border border-transparent"
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
