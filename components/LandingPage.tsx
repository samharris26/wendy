"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  CheckSquare,
  ListChecks,
  Users,
  Bell,
  MessageCircle,
  Share2,
  RefreshCw,
  Shield,
  Smartphone,
  Clock,
  Zap,
} from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WaitlistForm } from "./WaitlistForm";
import type { LandingPageData, IconName } from "@/lib/landing-pages";

const iconMap: Record<IconName, React.ComponentType<{ className?: string }>> = {
  Calendar,
  CheckSquare,
  ListChecks,
  Users,
  Bell,
  MessageCircle,
  Share2,
  RefreshCw,
  Shield,
  Smartphone,
  Clock,
  Zap,
};

export function LandingPage({ data }: { data: LandingPageData }) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative flex min-h-[85vh] w-full items-center overflow-hidden bg-background px-6 md:px-16">
        {/* background glow */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/4 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-primaryText/5 opacity-70 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-12 pt-16 md:pt-0 lg:flex-row lg:items-center lg:gap-16">
          {/* copy */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-primaryText md:text-5xl lg:text-6xl">
              {data.heroHeadline}
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-secondaryText md:text-xl lg:mx-0">
              {data.heroSubheadline}
            </p>
            <div className="mt-10 flex justify-center lg:justify-start">
              <WaitlistForm />
            </div>
          </div>

          {/* phone mockup */}
          <div className="flex shrink-0 justify-center">
            <div className="relative w-[260px] md:w-[280px]">
              <div className="relative overflow-hidden rounded-[40px] border-[6px] border-primaryText/90 bg-primaryText shadow-surface-sm">
                <div className="absolute left-1/2 top-2 z-20 h-[28px] w-[100px] -translate-x-1/2 rounded-full bg-primaryText" />
                <div className="relative overflow-hidden rounded-[34px]">
                  <Image
                    src={data.heroImage}
                    alt={`${data.keyword} — Noa app screenshot`}
                    width={280}
                    height={607}
                    className="block w-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
              Key features
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-primaryText sm:text-4xl lg:text-5xl">
              Why families choose Noa
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {data.features.map((feature) => {
              const Icon = iconMap[feature.iconName];
              return (
                <article
                  key={feature.title}
                  className="rounded-2xl border border-primaryText/10 bg-card p-6 shadow-surface-xs"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-primaryText">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-secondaryText">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="bg-surface px-6 py-20 lg:px-10">
        <div className="mx-auto w-full max-w-3xl">
          <div className="rounded-2xl border border-primaryText/10 bg-card p-8 md:p-12">
            {data.contentSections.map((section) => (
              <div key={section.heading} className="mb-10 last:mb-0">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-primaryText">
                  {section.heading}
                </h2>
                {section.paragraphs.map((para, i) => (
                  <p
                    key={i}
                    className="mb-4 text-base leading-relaxed text-secondaryText last:mb-0"
                  >
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Internal Links ── */}
      <section className="px-6 py-16 lg:px-10">
        <div className="mx-auto w-full max-w-3xl">
          <h2 className="mb-6 text-center text-2xl font-semibold tracking-tight text-primaryText">
            Explore more
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="rounded-full border border-primaryText/10 bg-card px-5 py-2.5 text-sm font-medium text-secondaryText shadow-sm transition-colors hover:border-accent/30 hover:text-primaryText"
            >
              Home
            </Link>
            {data.internalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-primaryText/10 bg-card px-5 py-2.5 text-sm font-medium text-secondaryText shadow-sm transition-colors hover:border-accent/30 hover:text-primaryText"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
