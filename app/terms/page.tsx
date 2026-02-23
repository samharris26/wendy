import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-20 lg:px-10">
      <div className="mx-auto w-full max-w-3xl rounded-2xl border border-black/10 bg-surface p-8">
        <h1 className="text-3xl font-semibold tracking-tight text-primaryText">Terms</h1>
        <p className="mt-4 text-sm leading-relaxed text-secondaryText">
          Wendy provides deterministic automation workflows for personal operations. This placeholder
          page will be replaced with full terms.
        </p>
        <Link href="/" className="mt-6 inline-block text-sm font-medium text-accent hover:underline">
          Back to Wendy
        </Link>
      </div>
    </main>
  );
}
