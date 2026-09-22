import type { NextConfig } from "next";

// Removed blog posts, each 301'd to the closest post still published so
// links and indexed pages carry over. 2026-07-08: near-duplicates from the
// old rotating generator. 2026-09-22: the blog refresh cut 44 posts to 11
// rewritten ones (docs/superpowers/specs/2026-09-22-blog-refresh-design.md).
const removedBlogPostRedirects = [
  ["mastering-the-family-calendar-strategies-for-syncing-schedules-preventing-double-bookings-and-keeping-everyone-updated", "how-to-share-a-calendar-with-family"],
  ["the-benefits-of-shared-to-do-lists-for-families-and-couples", "the-invisible-job-mental-load"],
  ["building-a-productive-morning-routine-tips-for-busy-parents", "sunday-reset-routine"],
  ["redistributing-the-mental-load-in-family-life-with-productivity-tools", "the-invisible-job-mental-load"],
  ["creative-ways-to-use-whatsapp-for-family-organisation", "how-to-share-a-calendar-with-family"],
  ["how-to-conduct-a-successful-weekly-family-planning-session", "sunday-reset-routine"],
  ["practical-tips-for-parents-preparing-for-the-school-term", "school-admin-for-parents"],
  ["organising-children-s-extracurricular-activities-without-losing-your-sanity", "school-admin-for-parents"],
  ["the-ultimate-guide-to-efficient-meal-planning-for-busy-families", "family-meal-planning"],
  ["digital-vs-paper-planning-systems-for-families-finding-the-perfect-balance", "how-to-share-a-calendar-with-family"],
  ["streamline-your-family-holiday-planning-with-shared-packing-lists-and-coordinated-reminders", "family-holiday-packing-list"],
  ["boost-your-productivity-strategies-for-parents-balancing-work-and-home-life", "the-invisible-job-mental-load"],
  ["understanding-the-psychology-of-forgetting-and-how-to-combat-it", "adhd-friendly-household-organisation"],
  ["building-positive-family-habits-with-chore-routines-screen-time-boundaries-and-bedtime-rituals", "chores-for-kids-by-age"],
  ["achieving-equitable-chore-distribution-in-modern-households", "the-invisible-job-mental-load"],
  ["how-voice-input-is-changing-family-organisation", "the-invisible-job-mental-load"],
  ["adapting-gtd-principles-for-an-organised-family-life", "the-invisible-job-mental-load"],
  ["strategies-for-managing-screen-time-for-families", "chores-for-kids-by-age"],
  ["simplify-your-family-life-reducing-app-overload-and-choosing-a-single-organisational-tool", "how-to-share-a-calendar-with-family"],
  ["why-shared-household-task-lists-reduce-arguments", "the-invisible-job-mental-load"],
  ["five-ways-to-use-your-phone-as-a-family-command-centre", "how-to-share-a-calendar-with-family"],
  ["how-to-create-a-reminder-system-that-works-for-your-family", "adhd-friendly-household-organisation"],
  ["mastering-the-art-of-time-blocking-for-family-relationships-and-self-care", "the-invisible-job-mental-load"],
  ["mastering-the-family-calendar-strategies-for-busy-households", "how-to-share-a-calendar-with-family"],
  ["practical-advice-for-parents-to-prepare-for-the-school-term", "school-admin-for-parents"],
  ["the-sunday-night-scramble-how-to-start-your-week-without-the-panic", "sunday-reset-routine"],
  ["mastering-meal-planning-a-guide-to-batch-cooking-and-shared-grocery-lists", "family-meal-planning"],
  ["the-invisible-job-of-being-the-household-ceo", "the-invisible-job-mental-load"],
  ["balancing-tradition-and-technology-comparing-digital-and-paper-planning-systems-for-families", "how-to-share-a-calendar-with-family"],
  ["organising-family-holidays-your-guide-to-stress-free-travel", "family-holiday-packing-list"],
  ["practical-productivity-strategies-for-parents-balancing-work-and-home-life", "the-invisible-job-mental-load"],
  ["beyond-forgetfulness-harnessing-practical-systems-to-stay-organised", "adhd-friendly-household-organisation"],
  ["establishing-positive-family-habits-for-a-harmonious-home", "chores-for-kids-by-age"],
  ["mastering-the-family-calendar-sharing-tips-for-every-household", "how-to-share-a-calendar-with-family"],
  ["co-parenting-sanity-saver-one-calendar-two-homes", "co-parenting-shared-calendar"],
  ["the-30-minute-sunday-reset-for-an-organised-family-week", "sunday-reset-routine"],
  ["chores-for-kids-by-age-keep-the-chart-alive-past-week-three", "chores-for-kids-by-age"],
  ["the-whatsapp-group-chat-from-chaos-to-family-calm", "how-to-share-a-calendar-with-family"],
  ["transform-your-family-command-centre-into-a-digital-powerhouse", "how-to-share-a-calendar-with-family"],
  ["ditch-last-minute-chaos-mastering-birthday-and-gift-organisation", "remembering-birthdays-and-gifts"],
  ["taming-the-school-admin-chaos-a-parent-s-guide", "school-admin-for-parents"],
  ["why-adhd-friendly-household-organisation-makes-all-the-difference", "adhd-friendly-household-organisation"],
  ["bringing-grandparents-into-the-loop-sharing-family-schedules-made-simple", "grandparents-family-calendar"],
  ["applying-gtd-principles-for-a-more-organised-family-life", "the-invisible-job-mental-load"],
  ["applying-gtd-principles-to-family-life-capture-clarify-organise-reflect-and-engage", "the-invisible-job-mental-load"],
  ["mastering-screen-time-intentional-tech-use-for-parents-and-children", "chores-for-kids-by-age"],
  ["streamlining-family-organisation-simplifying-your-digital-tools", "how-to-share-a-calendar-with-family"],
  ["why-most-people-ignore-reminders-and-how-to-set-up-a-timely-contextual-and-actionable-reminder-system", "adhd-friendly-household-organisation"],
  ["protecting-precious-time-blocking-your-calendar-for-family-date-nights-and-self-care", "the-invisible-job-mental-load"],
  ["mastering-the-busy-family-calendar-strategies-for-syncing-schedules-and-avoiding-conflicts", "how-to-share-a-calendar-with-family"],
  ["building-a-productive-morning-routine-as-a-parent", "sunday-reset-routine"],
  ["understanding-and-easing-the-mental-load-in-family-life", "the-invisible-job-mental-load"],
  ["how-to-conduct-an-effective-weekly-family-planning-session", "sunday-reset-routine"],
  ["essential-tips-for-parents-to-prepare-for-the-school-term", "school-admin-for-parents"],
  ["efficient-meal-planning-for-busy-families-tips-for-seamless-cooking-and-shopping", "family-meal-planning"],
  ["digital-vs-paper-planning-for-families-finding-the-perfect-balance", "how-to-share-a-calendar-with-family"],
  ["simplify-family-holiday-planning-with-shared-packing-lists-and-coordinated-reminders", "family-holiday-packing-list"],
  ["the-psychology-of-forgetting-and-practical-systems-for-staying-organised", "adhd-friendly-household-organisation"],
  ["cultivating-positive-family-habits-for-a-harmonious-home", "chores-for-kids-by-age"],
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
