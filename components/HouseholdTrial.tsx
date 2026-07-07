import { CalendarDays, ListChecks, MessageCircle, Users } from "lucide-react";
import { AppStoreButton } from "./AppStoreButton";

const perks = [
  {
    icon: Users,
    title: "Up to 6 people",
    description: "One plan covers the whole household — partners, kids, grandparents.",
  },
  {
    icon: ListChecks,
    title: "Shared lists & tasks",
    description: "Assign the dentist run, share the shopping list, see it all update live.",
  },
  {
    icon: CalendarDays,
    title: "Everyone's calendar",
    description: "School, work and clubs together, so clashes show up before they happen.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp for everyone",
    description: "Each person can message Noa from their own number.",
  },
];

export function HouseholdTrial() {
  return (
    <section className="px-6 py-20 lg:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="overflow-hidden rounded-xl border-[1.5px] border-accent/40 bg-accentSoft/70 shadow-surface-xs">
          <div className="grid gap-10 p-8 md:grid-cols-[1.1fr_1fr] md:p-14">
            {/* Left — the offer */}
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accentDeep">
                7-day free trial
              </p>
              <h2 className="text-3xl leading-tight text-primaryText sm:text-4xl lg:text-5xl">
                Try Household{" "}
                <em className="italic text-accent">free for 7 days.</em>
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-secondaryText">
                Get the full family experience from day one — shared calendars,
                lists and task assignment for up to 6 people. If it&apos;s not
                for you, cancel before the week is up and pay nothing.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <AppStoreButton />
              </div>
              <p className="mt-4 text-xs text-secondaryText">
                Start the trial inside the app. No commitment — cancel anytime
                in Settings.
              </p>
            </div>

            {/* Right — what you get */}
            <div className="grid content-center gap-3 sm:grid-cols-2">
              {perks.map((perk) => (
                <div
                  key={perk.title}
                  className="rounded-xl border border-primaryText/10 bg-card p-5 shadow-[0_1px_2px_rgba(11,36,64,0.04)]"
                >
                  <perk.icon className="h-5 w-5 text-accent" aria-hidden />
                  <h3 className="mt-3 text-base font-semibold text-primaryText" style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}>
                    {perk.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-secondaryText">
                    {perk.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
