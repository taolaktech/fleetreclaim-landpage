import Image from "next/image";

const navLinks = [
  { href: "#who-its-for", label: "Who it's for" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#use-cases", label: "Use cases" },
  { href: "#pricing", label: "Pricing" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-brand text-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-5">
        <a href="#top" className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="" width={32} height={32} className="h-8 w-8" priority />
          <span className="text-[17px] font-semibold tracking-tight">FleetReclaim</span>
        </a>

        <nav aria-label="Primary" className="ml-auto hidden items-center gap-7 md:flex">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-sm text-white/80 transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://app.fleetreclaim.com"
          className="ml-auto rounded-md bg-white px-4 py-2 text-sm font-semibold text-brand transition-colors hover:bg-brand-soft md:ml-0"
        >
          Start Recovering
        </a>
      </div>
    </header>
  );
}
