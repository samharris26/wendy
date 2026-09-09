import { Reveal } from "./Reveal";

const WEEK = ["M", "T", "W", "T", "F", "S", "S"];
const CAL_ROWS = [
  { time: "09:00", bar: "bg-calA", label: "Team standup" },
  { time: "15:00", bar: "bg-calB", label: "School pickup" },
  { time: "19:00", bar: "bg-calC", label: "Dinner w/ James" },
];

function InsetPanel({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-2.5 rounded-[18px] bg-background p-3.5">{children}</div>;
}

function ShowcaseCard({
  panel,
  title,
  copy,
}: {
  panel: React.ReactNode;
  title: string;
  copy: string;
}) {
  return (
    <div className="flex flex-col gap-[18px] rounded-[26px] bg-card p-6">
      {panel}
      <div className="flex flex-col gap-[7px]">
        <h3 className="text-[20px] font-semibold leading-[1.25] text-primaryText">{title}</h3>
        <p className="text-[15px] leading-[1.6] text-secondaryText">{copy}</p>
      </div>
    </div>
  );
}

function AssigneeChip({ name, swatch }: { name: string; swatch: string }) {
  return (
    <span className="ml-auto inline-flex flex-none items-center gap-[5px] rounded-full bg-surface px-2 py-1 text-[10px] font-semibold leading-none text-secondaryText">
      <span className={`h-[7px] w-[7px] rounded-[2px] ${swatch}`} />
      {name}
    </span>
  );
}

function ListRow({
  swatch,
  fill,
  title,
  meta,
}: {
  swatch: string;
  fill: string;
  title: string;
  meta: string;
}) {
  return (
    <div className="flex items-center gap-[11px] border-b border-hairline py-[11px] last:border-b-0">
      <span className="flex w-5 flex-none flex-col items-center gap-1">
        <span className={`h-[9px] w-[9px] rounded-[3px] ${swatch}`} />
        <span className="flex h-[3px] w-5 rounded-full bg-surfaceAlt">
          <span className={`rounded-full bg-accent`} style={{ width: fill }} />
        </span>
      </span>
      <span className="flex flex-col gap-1">
        <span className="text-[13px] font-medium leading-[1.2] text-primaryText">{title}</span>
        <span className="text-[11px] font-medium leading-none text-meta">{meta}</span>
      </span>
    </div>
  );
}

function OneLiner({
  icon,
  title,
  copy,
}: {
  icon: React.ReactNode;
  title: string;
  copy: string;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-[22px] bg-card p-[22px]">
      <span className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-accentTint">{icon}</span>
      <div className="flex flex-col gap-1.5">
        <h3 className="text-[18px] font-semibold leading-[1.25] text-primaryText">{title}</h3>
        <p className="text-[15px] leading-[1.6] text-secondaryText">{copy}</p>
      </div>
    </div>
  );
}

const iconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "var(--color-accent)",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function Features() {
  return (
    <section id="features" className="mx-auto flex w-full max-w-[1120px] flex-col gap-8 px-6 pt-24">
      <Reveal className="flex max-w-[660px] flex-col gap-2.5">
        <span className="eyebrow">Built for families</span>
        <h2 className="font-display text-[clamp(32px,4.4vw,44px)] leading-[1.08] text-primaryText">
          Everything your household runs on, in one place.
        </h2>
        <p className="text-[17px] leading-[1.6] text-secondaryText">
          Six things families juggle across five apps — Noa does them all, calmly.
        </p>
      </Reveal>

      {/* Row A — showcase cards */}
      <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
        <Reveal>
          <ShowcaseCard
            title="Everyone's calendar, one view."
            copy="Apple and Google calendars side by side — school, work and clubs together, clashes visible before they happen."
            panel={
              <InsetPanel>
                <div className="grid grid-cols-7 gap-[3px] text-center">
                  {WEEK.map((d, i) => (
                    <span key={i} className="text-[9px] font-bold leading-none text-[#5f6c81]">
                      {d}
                    </span>
                  ))}
                  {[7].map((d) => (
                    <span key={d} className="py-[5px] text-[13px] font-medium leading-none text-meta">
                      {d}
                    </span>
                  ))}
                  <span className="py-[5px]">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primaryText text-[13px] font-bold leading-none text-white">
                      8
                    </span>
                  </span>
                  {[9, 10, 11, 12, 13].map((d) => (
                    <span key={d} className="py-[5px] text-[13px] font-medium leading-none text-primaryText">
                      {d}
                    </span>
                  ))}
                </div>
                <div className="rounded-[14px] bg-card px-3 py-[2px]">
                  {CAL_ROWS.map((r) => (
                    <div key={r.label} className="flex items-center gap-2.5 border-b border-hairline py-[9px] last:border-b-0">
                      <span className="w-[34px] flex-none text-[11px] font-semibold leading-none text-meta">{r.time}</span>
                      <span className={`h-5 w-[3px] flex-none rounded-full ${r.bar}`} />
                      <span className="text-[13px] font-medium leading-[1.2] text-primaryText">{r.label}</span>
                    </div>
                  ))}
                </div>
              </InsetPanel>
            }
          />
        </Reveal>

        <Reveal delay={80}>
          <ShowcaseCard
            title="Tasks that get done."
            copy="Capture in seconds, assign to a person, nudge when overdue."
            panel={
              <div className="flex flex-col gap-2 rounded-[18px] bg-background p-3.5">
                <div className="flex items-center gap-[7px] pl-[3px]">
                  <span className="eyebrow text-[10px]">Overdue</span>
                  <span className="rounded-full bg-dangerTint px-[7px] py-[3px] text-[10px] font-bold leading-[1.3] text-danger">2</span>
                </div>
                <div className="rounded-[14px] bg-card px-3 py-[2px]">
                  <div className="flex items-center gap-[11px] border-b border-hairline py-[11px]">
                    <span className="h-[18px] w-[18px] flex-none rounded-full border-2 border-[#a9b5c7]" />
                    <span className="text-[13px] font-medium leading-[1.2] text-primaryText">Book dentist</span>
                    <AssigneeChip name="Sam" swatch="bg-calA" />
                  </div>
                  <div className="flex items-center gap-[11px] border-b border-hairline py-[11px]">
                    <span className="h-[18px] w-[18px] flex-none rounded-full border-2 border-[#a9b5c7]" />
                    <span className="text-[13px] font-medium leading-[1.2] text-primaryText">Buy birthday present</span>
                    <AssigneeChip name="Jane" swatch="bg-calB" />
                  </div>
                  <div className="flex items-center gap-[11px] py-[11px]">
                    <span className="h-[18px] w-[18px] flex-none rounded-full border-2 border-[#a9b5c7]" />
                    <span className="text-[13px] font-medium leading-[1.2] text-primaryText">Renew car insurance</span>
                    <span className="ml-auto flex-none text-[11px] font-semibold leading-none text-danger">Due Fri</span>
                  </div>
                </div>
              </div>
            }
          />
        </Reveal>

        <Reveal delay={160}>
          <ShowcaseCard
            title="Lists you can share."
            copy="Shopping, packing, gifts — ticked off live from anyone's phone."
            panel={
              <div className="flex flex-col gap-2 rounded-[18px] bg-background p-3.5">
                <div className="eyebrow pl-[3px] text-[10px]">Your lists</div>
                <div className="rounded-[14px] bg-card px-3 py-[2px]">
                  <ListRow swatch="bg-calA" fill="60%" title="Shopping" meta="3 open · shared with Jane" />
                  <ListRow swatch="bg-calB" fill="25%" title="Holiday packing" meta="9 open · Sun cream, Passports…" />
                </div>
              </div>
            }
          />
        </Reveal>
      </div>

      {/* Row B — one-liners */}
      <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
        <Reveal>
          <OneLiner
            title="A briefing, every morning."
            copy="7am, push or WhatsApp: today's events, tasks and what not to forget."
            icon={
              <svg {...iconProps} aria-hidden>
                <path d="M12 3.5l1.7 4.4 4.4 1.7-4.4 1.7L12 15.7l-1.7-4.4L5.9 9.6l4.4-1.7z" />
              </svg>
            }
          />
        </Reveal>
        <Reveal delay={80}>
          <OneLiner
            title="On your home screen."
            copy="Widgets for today at a glance; gentle nudges before things slip."
            icon={
              <svg {...iconProps} aria-hidden>
                <rect x="6" y="2.5" width="12" height="19" rx="3" />
                <path d="M10.5 5.5h3" />
              </svg>
            }
          />
        </Reveal>
        <Reveal delay={160}>
          <OneLiner
            title="Up to 6 people, one plan."
            copy="Everyone sees the same lists, calendars and tasks, from their own phone."
            icon={
              <svg {...iconProps} aria-hidden>
                <circle cx="9" cy="8" r="3.2" />
                <path d="M3.5 19c0-3 2.5-4.6 5.5-4.6s5.5 1.6 5.5 4.6" />
                <path d="M17 9h5M19.5 6.5v5" />
              </svg>
            }
          />
        </Reveal>
      </div>
    </section>
  );
}
