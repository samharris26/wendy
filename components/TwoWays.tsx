import { MessageSquare, FileText } from "lucide-react";

const modes = [
  {
    icon: MessageSquare,
    label: "Quick capture",
    title: "Ask Noa",
    description:
      "Add things naturally. Create tasks, update plans, add to shopping, or check what\u2019s coming up.",
    examples: [
      "Add football training Thursday at 6pm",
      "Add milk and pasta to shopping",
      "What\u2019s on this weekend?",
    ],
  },
  {
    icon: FileText,
    label: "Bigger plans",
    title: "Import a plan",
    description:
      "Paste a plan from ChatGPT, Notes, or anywhere else. Noa turns it into structured tasks and lists you can review before saving.",
    examples: [
      "Weekly meal plan",
      "Birthday party checklist",
      "Packing list",
      "Sunday reset plan",
    ],
  },
];

export function TwoWays() {
  return (
    <section className="px-6 py-20 lg:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
            Two Ways In
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-primaryText sm:text-4xl lg:text-5xl">
            Quick things or bigger plans.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-secondaryText">
            Capture something fast, or paste a whole plan. Noa handles both.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {modes.map((mode) => (
            <article
              key={mode.title}
              className="flex flex-col rounded-2xl border border-primaryText/10 bg-card p-7 shadow-surface-xs md:p-8"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                  <mode.icon className="h-5 w-5 text-accent" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                  {mode.label}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-primaryText">
                {mode.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-secondaryText">
                {mode.description}
              </p>

              <div className="mt-6 flex flex-col gap-2">
                {mode.examples.map((ex) => (
                  <div
                    key={ex}
                    className="rounded-lg border border-primaryText/5 bg-white px-4 py-2.5"
                  >
                    <span className="text-xs text-secondaryText">
                      &ldquo;{ex}&rdquo;
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
