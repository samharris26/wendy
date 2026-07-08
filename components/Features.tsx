import { Reveal } from "./Reveal";

/* ── Shared mini-UI atoms (app-faithful: 8–12px radii, hairlines, mono) ── */

function MiniCheck({ done, tint = "accent" }: { done?: boolean; tint?: "accent" | "primary" }) {
  const color = tint === "accent" ? "var(--color-accent)" : "var(--color-primary-text)";
  return (
    <span
      className="flex h-4 w-4 shrink-0 items-center justify-center rounded border-2"
      style={{
        borderColor: done ? color : "rgba(11,36,64,0.2)",
        background: done ? color : "transparent",
      }}
    >
      {done && (
        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}
    </span>
  );
}

function PersonChip({ name, hue }: { name: string; hue: "orange" | "blue" | "green" }) {
  const palette = {
    orange: "border-accent/30 bg-accentSoft/50 text-accentDeep",
    blue: "border-blue-400/30 bg-blue-50 text-blue-600",
    green: "border-emerald-500/30 bg-emerald-50 text-emerald-700",
  } as const;
  return (
    <span className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] ${palette[hue]}`}>
      {name}
    </span>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-primaryText/5 bg-background/70 px-3 py-2.5">
      {children}
    </div>
  );
}

/* ── Bento cells ─────────────────────────────────────────────── */

function CellChrome({
  index,
  title,
  blurb,
  children,
  className = "",
}: {
  index: string;
  title: string;
  blurb: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`noa-card group flex h-full flex-col p-6 transition-transform duration-300 hover:-translate-y-1 md:p-7 ${className}`}
    >
      <div className="mb-4 flex items-baseline justify-between">
        <span className="font-mono text-[10px] tracking-[0.22em] text-accent">F_{index}</span>
        <hr className="rule ml-4 flex-1 opacity-60" />
      </div>
      <div className="flex-1">{children}</div>
      <div className="mt-6">
        <h3 className="text-xl text-primaryText md:text-2xl">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-secondaryText">{blurb}</p>
      </div>
    </article>
  );
}

function CalendarCell() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return (
    <CellChrome
      index="01"
      title="Everyone's calendar, one view."
      blurb="Apple and Google calendars side by side — school, work and clubs together, clashes visible before they happen."
    >
      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          <PersonChip name="Sam" hue="orange" />
          <PersonChip name="Jane" hue="blue" />
          <PersonChip name="Kids" hue="green" />
        </div>
        <div className="flex justify-between rounded-lg border border-primaryText/5 bg-background/70 px-3 py-2">
          {days.map((d, i) => (
            <span
              key={i}
              className={`flex h-7 w-7 items-center justify-center rounded-full font-mono text-[11px] ${
                i === 4 ? "bg-accent text-white" : "text-secondaryText"
              }`}
            >
              {d}
            </span>
          ))}
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {[
            { bar: "bg-accent", label: "Team standup", time: "09:00" },
            { bar: "bg-blue-400", label: "School pickup", time: "15:00" },
            { bar: "bg-emerald-500", label: "Dinner w/ James", time: "19:00" },
            { bar: "bg-accent", label: "Football — Phoebe", time: "SAT" },
          ].map((ev) => (
            <Row key={ev.label}>
              <span className={`h-6 w-1.5 rounded-full ${ev.bar}`} />
              <span className="flex-1 truncate text-xs text-primaryText">{ev.label}</span>
              <span className="font-mono text-[9px] tracking-wider text-secondaryText">{ev.time}</span>
            </Row>
          ))}
        </div>
      </div>
    </CellChrome>
  );
}

function TasksCell() {
  return (
    <CellChrome
      index="02"
      title="Tasks that get done."
      blurb="Capture in seconds, assign to a person, nudge when overdue."
    >
      <div className="flex flex-col gap-2">
        <Row>
          <MiniCheck done />
          <span className="flex-1 text-xs text-secondaryText/50 line-through">Book dentist</span>
          <PersonChip name="Sam" hue="orange" />
        </Row>
        <Row>
          <MiniCheck />
          <span className="flex-1 text-xs text-primaryText">Buy birthday present</span>
          <PersonChip name="Jane" hue="blue" />
        </Row>
        <Row>
          <MiniCheck />
          <span className="flex-1 text-xs text-primaryText">Renew car insurance</span>
          <span className="font-mono text-[9px] uppercase tracking-wider text-accent">due fri</span>
        </Row>
      </div>
    </CellChrome>
  );
}

function ListsCell() {
  return (
    <CellChrome
      index="03"
      title="Lists you can share."
      blurb="Shopping, packing, gifts — ticked off live from anyone's phone."
    >
      <div className="flex flex-col gap-2">
        <div className="mb-1 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-wider text-accentDeep">Shopping</span>
          <span className="rounded-full border border-accent/40 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-accentDeep">
            Shared
          </span>
        </div>
        {[
          { label: "Oat milk", done: true },
          { label: "Sourdough bread", done: false },
          { label: "Avocados", done: false },
        ].map((item) => (
          <Row key={item.label}>
            <MiniCheck done={item.done} />
            <span className={`text-xs ${item.done ? "text-secondaryText/50 line-through" : "text-primaryText"}`}>
              {item.label}
            </span>
          </Row>
        ))}
      </div>
    </CellChrome>
  );
}

function BriefingCell() {
  return (
    <CellChrome
      index="04"
      title="A briefing, every morning."
      blurb="7am, push or WhatsApp: today's events, tasks and what to not forget."
    >
      <div className="rounded-xl border border-primaryText/5 bg-background/70 p-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primaryText font-mono text-[10px] italic text-white">
            N
          </span>
          <span className="text-[11px] font-semibold text-primaryText">Noa</span>
          <span className="ml-auto font-mono text-[9px] text-secondaryText">07:00</span>
        </div>
        <p className="text-xs leading-relaxed text-secondaryText">
          Morning, Sam. 3 events today — school pick-up moved to 15:00. One task
          due: <span className="text-primaryText">renew car insurance</span>.
        </p>
      </div>
    </CellChrome>
  );
}

function HouseholdCell() {
  return (
    <CellChrome
      index="06"
      title="Built for the whole household."
      blurb="Up to 6 people on one plan — everyone sees the same lists, calendars and tasks, from their own phone. Free for your first 7 days."
    >
      <div className="grid gap-2 sm:grid-cols-2">
        {[
          { initials: "SH", name: "Sam Harris", role: "Owner", tint: "bg-primaryText/10 text-primaryText" },
          { initials: "JH", name: "Jane Harris", role: "Member", tint: "bg-accent/15 text-accentDeep" },
          { initials: "PH", name: "Phoebe", role: "Member", tint: "bg-blue-400/15 text-blue-600" },
          { initials: "AH", name: "Archie", role: "Member", tint: "bg-emerald-500/15 text-emerald-700" },
        ].map((m) => (
          <Row key={m.initials}>
            <span className={`flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold ${m.tint}`}>
              {m.initials}
            </span>
            <span className="flex-1">
              <span className="block text-xs font-medium text-primaryText">{m.name}</span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-secondaryText/70">{m.role}</span>
            </span>
            <span className="system-dot h-2 w-2 rounded-full bg-success" />
          </Row>
        ))}
      </div>
    </CellChrome>
  );
}

function WidgetsCell() {
  return (
    <CellChrome
      index="05"
      title="On your home screen."
      blurb="Widgets for today at a glance; gentle nudges before things slip."
    >
      <div className="rounded-xl border border-primaryText/5 bg-background/70 p-4">
        <div className="mb-2.5 flex items-center justify-between">
          <span className="text-xs font-bold text-primaryText">Today</span>
          <span className="font-mono text-[9px] text-secondaryText">3 events</span>
        </div>
        <div className="flex flex-col gap-1.5">
          {[
            { color: "bg-accent", text: "09:00 Team standup" },
            { color: "bg-blue-400", text: "12:30 Lunch with Sarah" },
            { color: "bg-emerald-500", text: "15:00 School pickup" },
          ].map((e) => (
            <div key={e.text} className="flex items-center gap-2">
              <span className={`h-1.5 w-1.5 rounded-full ${e.color}`} />
              <span className="text-[11px] text-secondaryText">{e.text}</span>
            </div>
          ))}
        </div>
      </div>
    </CellChrome>
  );
}

/* ── Section ─────────────────────────────────────────────────── */

export function Features() {
  return (
    <section id="features" className="px-6 py-24 lg:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal className="mb-14">
          <p className="eyebrow">Built for families</p>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-2xl text-4xl leading-[1.1] text-primaryText sm:text-5xl">
              Everything your household runs on,{" "}
              <em className="italic text-accent">in one place.</em>
            </h2>
            <p className="max-w-xs pb-1 text-sm leading-relaxed text-secondaryText">
              Six things families juggle across five apps — Noa does them all,
              calmly.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          <Reveal className="md:col-span-2"><CalendarCell /></Reveal>
          <Reveal delay={100}><TasksCell /></Reveal>
          <Reveal delay={50}><ListsCell /></Reveal>
          <Reveal delay={100}><BriefingCell /></Reveal>
          <Reveal delay={150}><WidgetsCell /></Reveal>
          <Reveal className="md:col-span-3"><HouseholdCell /></Reveal>
        </div>
      </div>
    </section>
  );
}
