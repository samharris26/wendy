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
import { DockedBar } from "./DockedBar";
import { StoreButton } from "./StoreButton";
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
    <div className="min-h-screen bg-background pb-24">
      <Navbar />

      {/* ── Hero ── */}
      <section className="mx-auto grid w-full max-w-[1120px] items-center gap-12 px-6 pt-16 [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]">
        {/* copy */}
        <div className="flex flex-col gap-[26px]">
          <h1 className="font-display text-[clamp(36px,5.4vw,56px)] leading-[1.06] text-primaryText">
            {data.heroHeadline}
          </h1>
          <p className="max-w-[520px] text-[19px] leading-[1.6] text-secondaryText">
            {data.heroSubheadline}
          </p>
          <StoreButton className="self-start" />
        </div>

        {/* phone mockup */}
        <div className="flex justify-center">
          <div className="w-full max-w-[300px] rounded-[46px] bg-[#10151f] p-[9px] shadow-phone">
            <div className="overflow-hidden rounded-[38px]">
              <Image
                src={data.heroImage}
                alt={`${data.keyword} — Noa app screenshot`}
                width={300}
                height={650}
                className="block w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="mx-auto w-full max-w-[1120px] px-6 pt-24">
        <div className="mb-10 flex flex-col gap-2.5">
          <span className="eyebrow">Key features</span>
          <h2 className="font-display text-[clamp(32px,4.4vw,44px)] leading-[1.08] text-primaryText">
            Why families choose Noa
          </h2>
        </div>

        <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
          {data.features.map((feature) => {
            const Icon = iconMap[feature.iconName];
            return (
              <article key={feature.title} className="flex flex-col gap-3 rounded-[22px] bg-card p-[22px]">
                <span className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-accentTint">
                  <Icon className="h-[18px] w-[18px] text-accent" />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-[18px] font-semibold leading-[1.25] text-primaryText">{feature.title}</h3>
                  <p className="text-[15px] leading-[1.6] text-secondaryText">{feature.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── Content ── */}
      <section className="mx-auto w-full max-w-[800px] px-6 pt-24">
        <div className="rounded-[26px] bg-card p-8 md:p-12">
          {data.contentSections.map((section) => (
            <div key={section.heading} className="mb-10 last:mb-0">
              <h2 className="mb-4 font-display text-[26px] leading-[1.2] text-primaryText">
                {section.heading}
              </h2>
              {section.paragraphs.map((para, i) => (
                <p key={i} className="mb-4 text-[16px] leading-[1.65] text-secondaryText last:mb-0">
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── Internal Links ── */}
      <section className="mx-auto w-full max-w-[800px] px-6 pt-24">
        <div className="mx-auto w-full max-w-3xl">
          <h2 className="mb-6 text-center font-display text-[26px] text-primaryText">
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
      <DockedBar />
    </div>
  );
}
