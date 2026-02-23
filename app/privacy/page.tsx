import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-20 lg:px-10">
      <div className="mx-auto w-full max-w-3xl rounded-2xl border border-primaryText/10 bg-card p-8">
        <h1 className="text-3xl font-semibold tracking-tight text-primaryText">Privacy</h1>
        <p className="mt-4 text-sm leading-relaxed text-secondaryText">
          Wendy is built for controlled, reliable execution. This placeholder page will be replaced with
          the full privacy policy.
        </p>
        <Link href="/" className="mt-6 inline-block text-sm font-medium text-accent hover:underline">
          Back to Wendy
        </Link>
      </div>
    </main>
  );
}
