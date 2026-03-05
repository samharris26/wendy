"use client";

import { ChatExchange } from "./ChatExchange";

export function WhatsAppAssistant() {
  return (
    <section className="px-6 py-20 lg:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left — text */}
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
              WhatsApp Assistant
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-primaryText sm:text-4xl">
              Your household assistant on WhatsApp.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-secondaryText">
              Sometimes opening an app is one step too many. Just message Wendy. She understands your questions and keeps everything in sync.
            </p>
          </div>

          {/* Right — chat demos */}
          <div className="flex flex-col gap-5">
            <div className="rounded-2xl border border-primaryText/10 bg-card p-6 shadow-surface-xs">
              <ChatExchange
                userMessage="What's on this weekend?"
                wendyResponse={
                  <>
                    <span className="mb-1.5 block font-medium">Saturday</span>
                    <span className="block text-white/80">10:00 Phoebe football</span>
                    <span className="block text-white/80">14:00 Garden party prep</span>
                    <span className="mb-1.5 mt-2 block font-medium">Sunday</span>
                    <span className="block text-white/80">11:00 Family lunch</span>
                  </>
                }
              />
            </div>
            <div className="rounded-2xl border border-primaryText/10 bg-card p-6 shadow-surface-xs">
              <ChatExchange
                userMessage="Am I free Thursday evening?"
                wendyResponse="Yes. You are free after 5:30pm."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
