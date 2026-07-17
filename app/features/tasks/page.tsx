import { OG_IMAGES } from "@/lib/og";
import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { getLandingPageBySlug } from "@/lib/landing-pages";

const data = getLandingPageBySlug("features/tasks")!;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: "/features/tasks" },
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    type: "website",
    images: OG_IMAGES,
  },
};

export default function Page() {
  return <LandingPage data={data} />;
}
