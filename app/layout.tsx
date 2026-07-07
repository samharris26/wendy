import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  IBM_Plex_Mono,
  Plus_Jakarta_Sans,
} from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { CookieBanner } from "@/components/CookieBanner";
import "./globals.css";

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
  title: "Noa — family organiser app for calendar, tasks and lists",
  description:
    "Noa brings your family's calendars, tasks, lists and reminders into one calm, beautifully designed app — even over WhatsApp. Free to download on iOS, with a 7-day free trial of Household.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Noa — family organiser app for calendar, tasks and lists",
    description:
      "Noa is the family organiser app that brings calendars, tasks, lists, and reminders into one calm, beautifully designed app.",
    url: siteUrl,
    siteName: "Noa",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Noa — Your life, organised" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noa — family organiser app for calendar, tasks and lists",
    description:
      "Noa is the family organiser app that brings calendars, tasks, lists, and reminders into one calm, beautifully designed app.",
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
      className={`${plusJakartaSans.variable} ${ibmPlexMono.variable} ${cormorantGaramond.variable}`}
    >
      <head>
        <Script
          defer
          data-website-id="dfid_7ukGdquhSwRimDxFFrNNp"
          data-domain="asknoa.app"
          src="https://datafa.st/js/script.js"
          strategy="afterInteractive"
        />
      </head>
      <body className="bg-background text-primaryText antialiased">
        {children}
        <CookieBanner />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
