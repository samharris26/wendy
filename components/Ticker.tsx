const ITEMS = [
  "Milk added to shopping",
  "School pick-up 15:00",
  "Dentist booked",
  "Phoebe — football Sat 10:00",
  "Bins out tonight",
  "Daily briefing 07:00",
  "Packing list shared",
  "Task assigned to Sam",
  "Family lunch Sun 11:00",
  "Reminder: car MOT",
];

/**
 * Full-bleed ticker of everyday household moments — the site's pulse.
 * Content is duplicated for a seamless CSS loop; the copy is aria-hidden.
 */
export function Ticker() {
  const row = (hidden: boolean) => (
    <div
      className="flex shrink-0 items-center"
      aria-hidden={hidden || undefined}
    >
      {ITEMS.map((item) => (
        <span
          key={item}
          className="flex items-center whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.18em] text-primaryText/70"
        >
          <span className="px-6">{item}</span>
          <span className="text-accent" aria-hidden>
            ◆
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee overflow-hidden border-y border-[var(--color-rule)] bg-surface/60 py-3.5">
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
