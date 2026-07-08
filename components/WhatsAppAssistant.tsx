import { Reveal } from "./Reveal";

function Bubble({
  from,
  children,
}: {
  from: "user" | "noa";
  children: React.ReactNode;
}) {
  return (
    <div className={`flex ${from === "user" ? "justify-end" : "justify-start"}`}>
      <span
        className={`max-w-[80%] px-3.5 py-2.5 text-xs leading-relaxed ${
          from === "user"
            ? "rounded-2xl rounded-br-md bg-surface text-primaryText"
            : "rounded-2xl rounded-bl-md bg-primaryText text-white"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

export function WhatsAppAssistant() {
  return (
    <section className="border-y border-[var(--color-rule)] bg-surface/40 px-6 py-24 lg:px-10">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 md:grid-cols-2">
        {/* Copy */}
        <Reveal>
          <p className="eyebrow">WhatsApp assistant</p>
          <h2 className="mt-5 text-4xl leading-[1.1] text-primaryText sm:text-5xl">
            No app open?{" "}
            <em className="italic text-accent">No problem.</em>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-secondaryText">
            Message Noa on WhatsApp like you&apos;d message a person. Add
            things, ask what&apos;s on, check if you&apos;re free — it all
            stays in sync with the app, and the rest of your household.
          </p>
          <ul className="mt-8 flex flex-col gap-3">
            {[
              "Works from any phone — even without the app",
              "Each household member can use their own number",
              "Your daily briefing, delivered to the chat",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-secondaryText">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Phone-framed chat */}
        <Reveal delay={150} className="mx-auto w-full max-w-[340px]">
          <div className="overflow-hidden rounded-[32px] border-[5px] border-primaryText/90 bg-background shadow-2xl shadow-primaryText/20">
            {/* Chat header */}
            <div className="flex items-center gap-3 border-b border-[var(--color-rule)] bg-card px-4 py-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primaryText font-mono text-xs italic text-white">
                N
              </span>
              <div className="flex-1">
                <p className="text-xs font-semibold text-primaryText">Noa</p>
                <p className="flex items-center gap-1.5 font-mono text-[9px] text-secondaryText">
                  <span className="system-dot inline-block h-1.5 w-1.5 rounded-full bg-success" />
                  online
                </p>
              </div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-secondaryText">WhatsApp</span>
            </div>

            {/* Thread */}
            <div className="flex flex-col gap-2.5 px-4 py-5">
              <Bubble from="user">What&apos;s on this weekend?</Bubble>
              <Bubble from="noa">
                <span className="mb-1 block font-semibold">Saturday</span>
                <span className="block text-white/80">10:00 Phoebe football</span>
                <span className="block text-white/80">14:00 Garden party prep</span>
                <span className="mb-1 mt-2 block font-semibold">Sunday</span>
                <span className="block text-white/80">11:00 Family lunch</span>
              </Bubble>
              <Bubble from="user">Add sausages to the BBQ list</Bubble>
              <Bubble from="noa">
                Added to <span className="font-semibold">BBQ</span> ✓ — that&apos;s 8 items now.
              </Bubble>
              {/* Typing indicator */}
              <div className="flex">
                <span className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-primaryText/90 px-3.5 py-3">
                  <span className="typing-dot h-1.5 w-1.5 rounded-full bg-white" />
                  <span className="typing-dot h-1.5 w-1.5 rounded-full bg-white" />
                  <span className="typing-dot h-1.5 w-1.5 rounded-full bg-white" />
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
