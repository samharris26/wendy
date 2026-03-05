"use client";

import { WaitlistForm } from "./WaitlistForm";

export function FinalCTA() {
  return (
    <section className="bg-surface px-6 py-20 lg:px-10">
      <div className="mx-auto w-full max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-primaryText sm:text-4xl lg:text-5xl">
          The assistant your household actually needs.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-secondaryText">
          Wendy keeps plans, tasks, lists and reminders organised so life runs smoothly.
        </p>
        <div className="mt-10">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
