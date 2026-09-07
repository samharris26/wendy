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
import { AppStoreButton } from "./AppStoreButton";
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
      <section className="relative flex min-h-[80vh] w-full items-center overflow-hidden bg-background px-6 md:px-16">
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-12 pt-16 md:pt-0 lg:flex-row lg:items-center lg:gap-16">
          {/* copy */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl leading-[1.1] text-primaryText md:text-5xl lg:text-[3.5rem]">
              {data.heroHeadline}
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-secondaryText md:text-xl lg:mx-0">
              {data.heroSubheadline}
            </p>
            <div className="mt-10 flex justify-center lg:justify-start">
              <AppStoreButton />
            </div>
          </div>

          {/* phone mockup */}
          <div className="flex shrink-0 justify-center">
            <div className="relative w-[260px] md:w-[280px]">
              <div className="relative overflow-hidden rounded-[40px] border-[6px] border-primaryText bg-primaryText shadow-xl shadow-primaryText/15">
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
            <p className="eyebrow mb-3">Key features</p>
            <h2 className="text-3xl text-primaryText sm:text-4xl lg:text-5xl">
              Why families choose Noa
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {data.features.map((feature) => {
              const Icon = iconMap[feature.iconName];
              return (
                <article
                  key={feature.title}
                  className="noa-card p-6"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-interactiveTint">
                    <Icon className="h-5 w-5 text-interactive" />
                  </div>
                  <h3 className="text-lg text-primaryText">
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
      <section className="bg-surface/50 px-6 py-20 lg:px-10">
        <div className="mx-auto w-full max-w-3xl">
          <div className="noa-card p-8 md:p-12">
            {data.contentSections.map((section) => (
              <div key={section.heading} className="mb-10 last:mb-0">
                <h2 className="mb-4 text-2xl text-primaryText">
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
          <h2 className="mb-6 text-center text-2xl text-primaryText">
            Explore more
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-secondaryText transition-colors hover:border-interactive hover:text-primaryText"
            >
              Home
            </Link>
            {data.internalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-secondaryText transition-colors hover:border-interactive hover:text-primaryText"
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
