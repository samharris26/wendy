"use client";

import { useEffect, useState } from "react";
import { ClipboardPaste, CheckSquare } from "lucide-react";

const mealItems = [
  "Monday — Chicken stir fry",
  "Tuesday — Pasta bolognese",
  "Wednesday — Fish tacos",
  "Thursday — Veggie curry",
  "Friday — Homemade pizza",
];

const shoppingItems = [
  "Chicken breast",
  "Soy sauce",
  "Spaghetti",
  "Tinned tomatoes",
  "White fish",
  "Tortilla wraps",
];

/* Animation: items appear one-by-one, hold, then reset.
   Step 1      → task card
   Steps 3-7   → meal items (gap at 2)
   Steps 9-14  → shopping items (gap at 8)
   Steps 15-28 → hold
   Step 0 (reset) → all fade out via transition */
const TOTAL = 29;

export function ImportDemo() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % TOTAL), 450);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-surface px-6 py-20 lg:px-10">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-10 text-center">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
            See It Work
          </p>
          <h2 className="text-2xl text-primaryText sm:text-3xl lg:text-4xl">
            Paste a plan. Noa does the rest.
          </h2>
        </div>

        <div className="grid items-start gap-8 md:grid-cols-2">
          {/* Left: pasted text */}
          <div className="rounded-2xl border border-primaryText/10 bg-card p-6 shadow-surface-xs">
            <div className="mb-4 flex items-center gap-2">
              <ClipboardPaste className="h-3.5 w-3.5 text-accent" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                Pasted Text
              </span>
            </div>
            <div className="space-y-0.5 font-mono text-[11px] leading-relaxed text-secondaryText/80">
              <p className="font-semibold text-primaryText">
                Jane to do food shop Saturday 10am
              </p>
              <p className="pt-3 font-semibold text-primaryText">Weekly Meal Plan</p>
              <p>Monday: Chicken stir fry</p>
              <p>Tuesday: Pasta bolognese</p>
              <p>Wednesday: Fish tacos</p>
              <p>Thursday: Veggie curry</p>
              <p>Friday: Homemade pizza</p>
              <p className="pt-3 font-semibold text-primaryText">Shopping List</p>
              <p>&ndash; Chicken breast</p>
              <p>&ndash; Soy sauce</p>
              <p>&ndash; Spaghetti</p>
              <p>&ndash; Tinned tomatoes</p>
              <p>&ndash; White fish</p>
              <p>&ndash; Tortilla wraps</p>
            </div>
          </div>

          {/* Right: Noa parsed output */}
          <div className="flex flex-col gap-4">
            {/* Task card */}
            <div
              className={`rounded-2xl border border-primaryText/10 bg-card p-5 shadow-surface-xs transition-all duration-300 ${
                step >= 1
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-0"
              }`}
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 font-mono text-[10px] text-accent">
                  Task
                </span>
                <span className="font-mono text-[10px] text-secondaryText/50">
                  Assigned
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-primaryText/5 bg-white px-3 py-2.5">
                <CheckSquare className="h-4 w-4 shrink-0 text-accent" />
                <div className="flex-1">
                  <span className="text-xs font-medium text-primaryText">
                    Food shop
                  </span>
                  <div className="mt-0.5 flex items-center gap-2">
                    <span className="font-mono text-[10px] text-secondaryText/60">
                      Saturday 10:00
                    </span>
                    <span className="rounded-full bg-blue-100 px-1.5 py-0.5 font-mono text-[9px] text-blue-600">
                      Jane
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Meal Plan list */}
            <div className="rounded-2xl border border-primaryText/10 bg-card p-5 shadow-surface-xs">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 font-mono text-[10px] text-accent">
                  Meal Plan
                </span>
                <span className="font-mono text-[10px] text-secondaryText/50">
                  List
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {mealItems.map((item, i) => (
                  <div
                    key={item}
                    className={`flex items-center gap-3 rounded-lg border border-primaryText/5 bg-white px-3 py-2 transition-all duration-300 ${
                      step >= i + 3
                        ? "translate-y-0 opacity-100"
                        : "translate-y-1 opacity-0"
                    }`}
                  >
                    <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="text-xs text-secondaryText">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Shopping List */}
            <div className="rounded-2xl border border-primaryText/10 bg-card p-5 shadow-surface-xs">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 font-mono text-[10px] text-accent">
                  Shopping List
                </span>
                <span className="font-mono text-[10px] text-secondaryText/50">
                  List
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {shoppingItems.map((item, i) => (
                  <div
                    key={item}
                    className={`flex items-center gap-3 rounded-lg border border-primaryText/5 bg-white px-3 py-2 transition-all duration-300 ${
                      step >= 9 + i
                        ? "translate-y-0 opacity-100"
                        : "translate-y-1 opacity-0"
                    }`}
                  >
                    <div className="h-4 w-4 shrink-0 rounded border-2 border-primaryText/20" />
                    <span className="text-xs text-secondaryText">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
