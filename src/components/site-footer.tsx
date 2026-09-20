import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-canvas">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <Image src="/logo.png" alt="" width={28} height={28} className="h-7 w-7" />
              <span className="text-[15px] font-semibold text-ink">FleetReclaim</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              Expense recovery and reconciliation software for rental hosts, private rental
              businesses, and commercial fleets.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-2 text-sm">
            <a href="#who-its-for" className="text-ink-muted hover:text-ink">Who it&apos;s for</a>
            <a href="#how-it-works" className="text-ink-muted hover:text-ink">How it works</a>
            <a href="#use-cases" className="text-ink-muted hover:text-ink">Use cases</a>
            <a href="#pricing" className="text-ink-muted hover:text-ink">Pricing</a>
            <a href="https://app.fleetreclaim.com" className="font-semibold text-brand hover:underline">
              Start Recovering
            </a>
          </nav>
        </div>

        <p className="mt-10 border-t border-line pt-6 text-xs leading-relaxed text-ink-muted">
          FleetReclaim is an independent product. It is not affiliated with, endorsed by, or
          sponsored by Turo, Getaround, or any toll authority, rental platform, or fleet-management
          provider. Those names are used only to describe the businesses FleetReclaim can serve.
        </p>
        <p className="mt-4 text-xs text-ink-muted">
          © {new Date().getFullYear()} FleetReclaim. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
