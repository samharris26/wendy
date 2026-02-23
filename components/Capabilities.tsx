"use client";

import { CalendarClock, CircleCheck, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";

export interface ConflictOption {
  id: string;
  label: string;
  calendar: string;
  time: string;
}

const conflictOptions: ConflictOption[] = [
  { id: "work", label: "Hockey", calendar: "Work", time: "15:00" },
  { id: "personal", label: "Hockey", calendar: "Personal", time: "18:00" },
];

export function Capabilities() {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [showClearFlow, setShowClearFlow] = useState(false);

  const selectedOption = useMemo(
    () => conflictOptions.find((option) => option.id === selectedOptionId) ?? null,
    [selectedOptionId],
  );

  return (
    <section id="capabilities" className="px-6 py-20 lg:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.08em] text-secondaryText">Capabilities</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primaryText sm:text-4xl">
            Structured modules. Controlled execution.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          <article className="rounded-2xl border border-black/10 bg-surface p-5 shadow-surface-xs">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-primaryText">
              <Sparkles size={16} />
              <span>Natural Language -&gt; Structured Execution</span>
            </div>
            <div className="space-y-4">
              <div className="rounded-xl border border-black/10 bg-[#f9fafb] p-3 text-sm text-primaryText">
                Add dinner Friday at 7pm
              </div>
              <pre className="font-mono overflow-x-auto rounded-xl border border-black/10 bg-[#0f1115] p-3 text-xs leading-6 text-[#d2d6db]">
{`intent: create_event
title: "Dinner"
start_time: "2026-02-27T19:00:00"
calendar_target: "default"
confidence: 0.97`}
              </pre>
              <p className="text-sm leading-relaxed text-secondaryText">
                Deterministic intent parsing. Reliable execution. No guesswork.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-black/10 bg-surface p-5 shadow-surface-xs">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-primaryText">
              <CalendarClock size={16} />
              <span>Reschedule &amp; Cancel Flow</span>
            </div>
            <div className="space-y-4 text-sm">
              <div className="rounded-xl bg-accent px-3 py-2.5 text-white">Move hockey to 4pm</div>
              <div className="rounded-xl border border-black/10 bg-[#f9fafb] px-3 py-2.5 text-primaryText">
                Which one?
              </div>
              <div className="flex flex-wrap gap-2">
                {conflictOptions.map((option) => {
                  const isSelected = option.id === selectedOptionId;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setSelectedOptionId(option.id)}
                      className={`rounded-full border px-3 py-1.5 font-medium transition-colors ${
                        isSelected
                          ? "border-accent bg-[#0f62fe]/10 text-accent"
                          : "border-black/15 bg-white text-primaryText hover:border-black/25"
                      }`}
                    >
                      {option.label} - {option.calendar} - {option.time}
                    </button>
                  );
                })}
              </div>
              <div
                className={`rounded-xl border px-3 py-2.5 transition-all duration-200 ${
                  selectedOption
                    ? "border-success/25 bg-success/10 text-primaryText"
                    : "border-black/10 bg-[#f9fafb] text-secondaryText"
                }`}
              >
                {selectedOption
                  ? `Updated ${selectedOption.label} - ${selectedOption.calendar} to 16:00.`
                  : "Select one event to confirm update."}
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-black/10 bg-surface p-5 shadow-surface-xs">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-primaryText">
              <CircleCheck size={16} />
              <span>Daily System Summary</span>
            </div>
            <div className="space-y-4">
              <button
                type="button"
                onClick={() => setShowClearFlow((value) => !value)}
                className="rounded-full border border-black/15 bg-white px-3 py-1.5 text-xs font-medium text-primaryText transition-colors hover:border-black/30"
              >
                {showClearFlow ? "Show morning summary" : "Show clear-afternoon flow"}
              </button>

              {!showClearFlow ? (
                <div className="rounded-xl border border-black/10 bg-[#f9fafb] p-4">
                  <p className="text-sm leading-relaxed text-primaryText">
                    Good morning.
                    <br />
                    You have <span className="font-semibold text-accent">3 events</span> today.
                    <br />
                    <span className="font-semibold text-accent">1 task</span> due.
                    <br />
                    First event at <span className="font-semibold text-accent">09:30</span>.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="rounded-xl bg-accent px-3 py-2.5 text-sm text-white">
                    Clear tomorrow afternoon
                  </div>
                  <div className="rounded-xl border border-success/25 bg-success/10 px-3 py-2.5 text-sm text-primaryText">
                    Cancelled 2 events. Afternoon cleared.
                  </div>
                </div>
              )}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
