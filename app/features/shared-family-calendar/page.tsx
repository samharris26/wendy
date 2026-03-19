import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { getLandingPageBySlug } from "@/lib/landing-pages";

const data = getLandingPageBySlug("features/shared-family-calendar")!;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: "/features/shared-family-calendar" },
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    type: "website",
  },
};

export default function Page() {
  return <LandingPage data={data} />;
}
