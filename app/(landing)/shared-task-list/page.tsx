import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { getLandingPageBySlug } from "@/lib/landing-pages";

const data = getLandingPageBySlug("shared-task-list")!;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    type: "website",
  },
};

export default function Page() {
  return <LandingPage data={data} />;
}
