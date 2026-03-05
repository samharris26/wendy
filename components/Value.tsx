const items = [
  "Calendar",
  "Tasks",
  "Shopping lists",
  "Reminders",
  "Family coordination",
];

export function Value() {
  return (
    <section className="bg-surface px-6 py-20 lg:px-10">
      <div className="mx-auto w-full max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-primaryText sm:text-4xl lg:text-5xl">
          Your household shouldn&apos;t require five different apps.
        </h2>

        <div className="mx-auto mt-8 flex flex-wrap justify-center gap-2">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-primaryText/10 bg-card px-4 py-2 font-mono text-xs text-secondaryText shadow-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-secondaryText">
          Wendy brings everything together into one calm system.
        </p>
      </div>
    </section>
  );
}
