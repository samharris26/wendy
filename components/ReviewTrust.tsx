import { Pencil, Trash2, CalendarX, Check } from "lucide-react";

const capabilities = [
  { icon: Pencil, label: "Edit titles" },
  { icon: Trash2, label: "Remove items" },
  { icon: CalendarX, label: "Clear dates" },
  { icon: Check, label: "Confirm when ready" },
];

export function ReviewTrust() {
  return (
    <section className="bg-surface px-6 py-20 lg:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-3xl rounded-3xl border border-primaryText/5 bg-card p-12 shadow-surface-sm md:p-20">
          <div className="text-center">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
              You Stay in Control
            </p>
            <h2 className="text-3xl text-primaryText sm:text-4xl lg:text-5xl">
              Review before you save.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-secondaryText">
              Noa helps structure the plan, but nothing is saved until you
              confirm. Edit titles, remove items, clear dates, and save when
              it looks right.
            </p>
          </div>

          <div className="mx-auto mt-10 flex flex-wrap justify-center gap-3">
            {capabilities.map((cap) => (
              <div
                key={cap.label}
                className="flex items-center gap-2 rounded-full border border-primaryText/10 bg-white px-4 py-2.5 shadow-sm"
              >
                <cap.icon className="h-3.5 w-3.5 text-accent" />
                <span className="text-xs font-medium text-secondaryText">
                  {cap.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
