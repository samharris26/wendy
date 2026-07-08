import type { NextConfig } from "next";

// The automated blog used to rotate a fixed topic list, publishing near-
// duplicate posts on the same queries (see blog/EDITORIAL.md). The duplicates
// were removed 2026-07-08; each old URL 301s to the canonical post on that
// topic so any links or indexed pages carry over.
const removedBlogPostRedirects = [
  ["applying-gtd-principles-for-a-more-organised-family-life", "adapting-gtd-principles-for-an-organised-family-life"],
  ["applying-gtd-principles-to-family-life-capture-clarify-organise-reflect-and-engage", "adapting-gtd-principles-for-an-organised-family-life"],
  ["mastering-screen-time-intentional-tech-use-for-parents-and-children", "strategies-for-managing-screen-time-for-families"],
  ["streamlining-family-organisation-simplifying-your-digital-tools", "simplify-your-family-life-reducing-app-overload-and-choosing-a-single-organisational-tool"],
  ["why-most-people-ignore-reminders-and-how-to-set-up-a-timely-contextual-and-actionable-reminder-system", "how-to-create-a-reminder-system-that-works-for-your-family"],
  ["protecting-precious-time-blocking-your-calendar-for-family-date-nights-and-self-care", "mastering-the-art-of-time-blocking-for-family-relationships-and-self-care"],
  ["mastering-the-busy-family-calendar-strategies-for-syncing-schedules-and-avoiding-conflicts", "mastering-the-family-calendar-strategies-for-syncing-schedules-preventing-double-bookings-and-keeping-everyone-updated"],
  ["building-a-productive-morning-routine-as-a-parent", "building-a-productive-morning-routine-tips-for-busy-parents"],
  ["understanding-and-easing-the-mental-load-in-family-life", "redistributing-the-mental-load-in-family-life-with-productivity-tools"],
  ["how-to-conduct-an-effective-weekly-family-planning-session", "how-to-conduct-a-successful-weekly-family-planning-session"],
  ["essential-tips-for-parents-to-prepare-for-the-school-term", "practical-tips-for-parents-preparing-for-the-school-term"],
  ["efficient-meal-planning-for-busy-families-tips-for-seamless-cooking-and-shopping", "the-ultimate-guide-to-efficient-meal-planning-for-busy-families"],
  ["digital-vs-paper-planning-for-families-finding-the-perfect-balance", "digital-vs-paper-planning-systems-for-families-finding-the-perfect-balance"],
  ["simplify-family-holiday-planning-with-shared-packing-lists-and-coordinated-reminders", "streamline-your-family-holiday-planning-with-shared-packing-lists-and-coordinated-reminders"],
  ["the-psychology-of-forgetting-and-practical-systems-for-staying-organised", "understanding-the-psychology-of-forgetting-and-how-to-combat-it"],
  ["cultivating-positive-family-habits-for-a-harmonious-home", "building-positive-family-habits-with-chore-routines-screen-time-boundaries-and-bedtime-rituals"],
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: process.cwd(),
  async redirects() {
    return removedBlogPostRedirects.map(([from, to]) => ({
      source: `/blog/${from}`,
      destination: `/blog/${to}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
