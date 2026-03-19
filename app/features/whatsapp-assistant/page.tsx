import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { getLandingPageBySlug } from "@/lib/landing-pages";

const data = getLandingPageBySlug("features/whatsapp-assistant")!;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: "/features/whatsapp-assistant" },
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    type: "website",
  },
};

export default function Page() {
  return <LandingPage data={data} />;
}
