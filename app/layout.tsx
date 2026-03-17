import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  IBM_Plex_Mono,
  Outfit,
  Plus_Jakarta_Sans,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { CookieBanner } from "@/components/CookieBanner";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const siteUrl = "https://www.asknoa.app";

export const metadata: Metadata = {
  title: "Noa | Your Life, Organised",
  description:
    "Calendars, tasks, lists and reminders — all in one calm, beautifully designed app. Add things instantly or just ask Noa on WhatsApp.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Noa | Your Life, Organised",
    description:
      "Calendars, tasks, lists and reminders — all in one calm, beautifully designed app.",
    url: siteUrl,
    siteName: "Noa",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Noa — Your life, organised" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noa | Your Life, Organised",
    description:
      "Calendars, tasks, lists and reminders — all in one calm, beautifully designed app.",
    images: ["/og.png"],
  },
  verification: {
    google: "muIDe0NqiiYt-X9zFnw2E0A52WS9qRxZ1HQihIuruqs",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakartaSans.variable} ${ibmPlexMono.variable} ${cormorantGaramond.variable}`}
    >
      <body className="bg-background text-primaryText antialiased">
        {children}
        <CookieBanner />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
