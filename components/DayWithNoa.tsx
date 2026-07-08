import { Reveal } from "./Reveal";

type Moment = {
  time: string;
  title: string;
  copy: string;
  vignette: React.ReactNode;
};

function NotificationMock() {
  return (
    <div className="noa-card w-full max-w-xs p-4">
      <div className="mb-2 flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primaryText font-mono text-[10px] italic text-white">N</span>
        <span className="text-[11px] font-semibold text-primaryText">Noa · Daily briefing</span>
        <span className="ml-auto font-mono text-[9px] text-secondaryText">now</span>
      </div>
      <p className="text-xs leading-relaxed text-secondaryText">
        Morning, Sam. 3 events, 2 tasks. Phoebe&apos;s football moved to 10:00 —
        leave by 09:30.
      </p>
    </div>
  );
}

function WhatsAppMock() {
  return (
    <div className="noa-card w-full max-w-xs p-4">
      <div className="flex justify-end">
        <span className="rounded-2xl rounded-br-md bg-surface px-3.5 py-2 text-xs text-primaryText">
          add sun cream to the holiday list
        </span>
      </div>
      <div className="mt-2 flex">
        <span className="rounded-2xl rounded-bl-md bg-primaryText px-3.5 py-2 text-xs text-white">
          Added to <span className="font-semibold">Holiday packing</span> ✓
        </span>
      </div>
    </div>
  );
}

function ReminderMock() {
  return (
    <div className="noa-card w-full max-w-xs p-4">
      <div className="flex items-center gap-3">
        <span className="h-8 w-1.5 rounded-full bg-accent" />
        <div className="flex-1">
          <p className="text-xs font-semibold text-primaryText">School pick-up</p>
          <p className="font-mono text-[9px] uppercase tracking-wider text-secondaryText">15:00 · leave by 14:40</p>
        </div>
        <span className="rounded-full border border-accent/30 bg-accentSoft/50 px-2.5 py-0.5 font-mono text-[10px] text-accentDeep">
          Jane
        </span>
      </div>
    </div>
  );
}

function TomorrowMock() {
  return (
    <div className="noa-card w-full max-w-xs p-4">
      <p className="mb-2 text-xs font-bold text-primaryText">Tomorrow — Wednesday</p>
      <div className="flex flex-col gap-1.5">
        {[
          { color: "bg-blue-400", text: "08:00 Class photos" },
          { color: "bg-accent", text: "13:00 Dentist — Archie" },
          { color: "bg-emerald-500", text: "18:30 Swim squad" },
        ].map((e) => (
          <div key={e.text} className="flex items-center gap-2">
            <span className={`h-1.5 w-1.5 rounded-full ${e.color}`} />
            <span className="text-[11px] text-secondaryText">{e.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const MOMENTS: Moment[] = [
  {
    time: "07:00",
    title: "The day arrives, already sorted.",
    copy: "Your briefing lands before breakfast — what's on, what's due, and what changed overnight.",
    vignette: <NotificationMock />,
  },
  {
    time: "08:15",
    title: "Thought of it? It's captured.",
    copy: "Message Noa on WhatsApp from the school run. It files things in the right list, every time.",
    vignette: <WhatsAppMock />,
  },
  {
    time: "14:40",
    title: "The hand-off, handled.",
    copy: "Whoever's on pick-up gets the nudge — not everyone, not no one. Just the right person.",
    vignette: <ReminderMock />,
  },
  {
    time: "20:30",
    title: "Tomorrow, already in view.",
    copy: "One glance before bed. No Sunday-night scramble, no morning surprises.",
    vignette: <TomorrowMock />,
  },
];

export function DayWithNoa() {
  return (
    <section className="border-y border-[var(--color-rule)] bg-surface/40 px-6 py-24 lg:px-10">
      <div className="mx-auto w-full max-w-5xl">
        <Reveal className="mb-16 text-center">
          <p className="eyebrow justify-center">A day with Noa</p>
          <h2 className="mt-5 text-4xl text-primaryText sm:text-5xl">
            An ordinary Tuesday, <em className="italic text-accent">handled.</em>
          </h2>
        </Reveal>

        <div className="relative">
          {/* Spine */}
          <div
            className="absolute bottom-4 left-[19px] top-2 w-px bg-[var(--color-rule)] md:left-1/2"
            aria-hidden
          />

          <ol className="flex flex-col gap-14">
            {MOMENTS.map((moment, i) => {
              const flip = i % 2 === 1;
              return (
                <li key={moment.time} className="relative">
                  <Reveal>
                    <div className="grid items-center gap-6 pl-14 md:grid-cols-2 md:gap-16 md:pl-0">
                      {/* Time dot on the spine */}
                      <span
                        className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background font-mono text-[9px] tracking-wide text-accentDeep md:left-1/2 md:-translate-x-1/2"
                        aria-hidden
                      >
                        {moment.time}
                      </span>

                      <div className={`${flip ? "md:order-2 md:pl-16" : "md:pr-16 md:text-right"}`}>
                        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                          {moment.time}
                        </p>
                        <h3 className="mt-2 text-2xl text-primaryText">{moment.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-secondaryText">{moment.copy}</p>
                      </div>

                      <div className={`flex ${flip ? "md:order-1 md:justify-end md:pr-16" : "md:pl-16"}`}>
                        {moment.vignette}
                      </div>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
