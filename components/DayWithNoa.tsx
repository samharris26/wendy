import { Reveal } from "./Reveal";

const MOMENTS = [
  {
    time: "07:00",
    title: "The day arrives, already sorted.",
    copy: "Your briefing lands before breakfast — what's on, what's due, and what changed overnight.",
  },
  {
    time: "08:15",
    title: "Thought of it? It's captured.",
    copy: "Message Noa on WhatsApp from the school run. It files things in the right list, every time.",
  },
  {
    time: "14:40",
    title: "The hand-off, handled.",
    copy: "Whoever's on pick-up gets the nudge — not everyone, not no one. Just the right person.",
  },
  {
    time: "20:30",
    title: "Tomorrow, already in view.",
    copy: "One glance before bed. No Sunday-night scramble, no morning surprises.",
  },
];

function Bubble({ tone, children }: { tone: "out" | "in" | "confirm"; children: React.ReactNode }) {
  const cls = {
    out: "self-end max-w-[78%] rounded-[18px_18px_6px_18px] bg-primaryText text-white font-medium leading-[1.45]",
    in: "self-start max-w-[82%] rounded-[18px_18px_18px_6px] bg-surface text-primaryText font-medium leading-[1.6]",
    confirm: "self-start max-w-[82%] rounded-[18px_18px_18px_6px] bg-accentTint text-accentHover font-semibold leading-[1.45]",
  }[tone];
  return <span className={`px-[15px] py-3 text-[15px] ${cls}`}>{children}</span>;
}

export function DayWithNoa() {
  return (
    <section
      id="day"
      className="mx-auto grid w-full max-w-[1120px] items-start gap-10 px-6 pt-24 [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]"
    >
      {/* Left — timeline */}
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-2.5">
          <span className="eyebrow">A day with Noa</span>
          <h2 className="font-display text-[clamp(32px,4.4vw,44px)] leading-[1.08] text-primaryText">
            An ordinary Tuesday, handled.
          </h2>
        </div>

        <div className="flex flex-col gap-3.5">
          {MOMENTS.map((m) => (
            <div key={m.time} className="flex gap-4 rounded-[22px] bg-card p-5">
              <span className="w-11 flex-none pt-[3px] text-[13px] font-bold leading-none text-accent">{m.time}</span>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-[18px] font-semibold leading-[1.25] text-primaryText">{m.title}</h3>
                <p className="text-[15px] leading-[1.6] text-secondaryText">{m.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Right — WhatsApp */}
      <Reveal delay={120} className="flex flex-col gap-[18px]">
        <div className="flex flex-col gap-2.5">
          <span className="eyebrow">WhatsApp assistant</span>
          <h2 className="font-display text-[34px] leading-[1.12] text-primaryText">No app open? No problem.</h2>
          <p className="text-[16px] leading-[1.6] text-secondaryText">
            Message Noa like you&rsquo;d message a person. Works from any phone — even without the
            app — and stays in sync for the whole household.
          </p>
        </div>

        <div className="overflow-hidden rounded-[26px] bg-card">
          <div className="flex items-center gap-3 border-b border-hairline px-5 py-4">
            <span className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-primaryText text-[15px] font-bold leading-none text-white">
              N
            </span>
            <span className="flex flex-col gap-[3px]">
              <span className="text-[16px] font-semibold leading-none text-primaryText">Noa</span>
              <span className="text-[12px] font-medium leading-none text-meta">online</span>
            </span>
          </div>
          <div className="flex flex-col gap-3 px-5 py-[18px]">
            <Bubble tone="out">What&rsquo;s on this weekend?</Bubble>
            <Bubble tone="in">
              Saturday — 10:00 Phoebe football, 14:00 garden party prep. Sunday — 11:00 family lunch.
            </Bubble>
            <Bubble tone="out">Add sausages to the BBQ list</Bubble>
            <Bubble tone="confirm">Added to BBQ — that&rsquo;s 8 items now.</Bubble>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
