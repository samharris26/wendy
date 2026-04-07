import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

interface JoinPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: JoinPageProps): Promise<Metadata> {
  return {
    title: "Join a household on Noa",
    description: "You've been invited to join a household on Noa — the family organiser app.",
    openGraph: {
      title: "Join a household on Noa",
      description: "You've been invited to join a household on Noa — the family organiser app.",
      images: [{ url: "/og.png", width: 1200, height: 630 }],
    },
  };
}

export default async function JoinPage({ params }: JoinPageProps) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6 py-16">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Logo / branding */}
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold text-primaryText font-outfit">
            You&apos;ve been invited to Noa
          </h1>
          <p className="text-secondaryText text-base font-outfit">
            Someone wants you to join their household so you can share calendars, tasks, and lists together.
          </p>
        </div>

        {/* Invite code card */}
        <div className="bg-white rounded-2xl border border-border p-6 space-y-4 shadow-sm">
          <p className="text-sm text-secondaryText font-outfit">Your invite code</p>
          <div className="bg-background rounded-xl px-4 py-3 font-mono text-sm text-primaryText break-all select-all">
            {id}
          </div>
          <p className="text-xs text-secondaryText font-outfit">
            Copy this code, then paste it in the app under Settings &rarr; Household &rarr; &ldquo;Have an invite?&rdquo;
          </p>
        </div>

        {/* Steps */}
        <div className="text-left space-y-3">
          <p className="text-sm font-medium text-primaryText font-outfit">How to join:</p>
          <ol className="text-sm text-secondaryText font-outfit space-y-2 list-decimal list-inside">
            <li>Download Noa from the App Store</li>
            <li>Create your account and complete onboarding</li>
            <li>Go to Settings &rarr; Household</li>
            <li>Paste the invite code above and tap &ldquo;Join household&rdquo;</li>
          </ol>
        </div>

        {/* App Store link */}
        <Link
          href="https://apps.apple.com/gb/app/noa-your-life-organised/id6760316752?itscg=30200&itsct=apps_box_link&mttnsubad=6760316752"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Image
            src="/app-store-badge.svg"
            alt="Download on the App Store"
            width={160}
            height={54}
            priority
          />
        </Link>

        <p className="text-xs text-secondaryText font-outfit">
          Already have Noa?{" "}
          <span className="text-primaryText font-medium">Open the app</span> and paste the code in Household settings.
        </p>
      </div>
    </main>
  );
}
