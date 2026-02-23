import Link from "next/link";

export function Footer() {
  return (
    <footer id="footer" className="bg-[#111111] px-6 py-12 lg:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-lg font-semibold text-white">Wendy</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/70">
              The Personal OS inside WhatsApp.
            </p>
          </div>

          <div className="flex items-start justify-start gap-6 text-sm md:justify-end">
            <Link href="#product" className="text-white transition-colors hover:text-white/80">
              Product
            </Link>
            <Link href="/privacy" className="text-white/80 transition-colors hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="text-white/80 transition-colors hover:text-white">
              Terms
            </Link>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-end gap-2 font-mono text-xs text-white/80">
          <span className="system-dot inline-block h-2.5 w-2.5 rounded-full bg-[#16a34a]" aria-hidden />
          <span>System Operational</span>
        </div>
      </div>
    </footer>
  );
}
