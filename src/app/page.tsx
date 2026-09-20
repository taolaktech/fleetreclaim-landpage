import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Pricing } from "@/components/pricing";
import {
  ArrowIcon,
  BoxIcon,
  CarIcon,
  CheckIcon,
  KeyIcon,
  MatchIcon,
  ReceiptIcon,
  ShieldIcon,
  TruckIcon,
  UploadIcon,
  UsersIcon,
} from "@/components/icons";

const APP_URL = "https://app.fleetreclaim.com";

const heroPoints = [
  "Match expenses to trips",
  "Identify responsible renters or drivers",
  "Organize supporting evidence",
];

const problemPoints = [
  {
    title: "Statements arrive weeks later",
    body: "Toll and violation notices show up long after the vehicle was returned, with plates and timestamps but no mention of who was driving.",
  },
  {
    title: "Trip records live somewhere else",
    body: "Reservations, rentals, routes, and vehicle assignments sit in a separate export, so every charge turns into a manual lookup.",
  },
  {
    title: "Unrecovered charges add up",
    body: "Anything you can't tie back to a trip quietly becomes a cost your business absorbs instead of a reimbursement you request.",
  },
];

const audiences = [
  {
    icon: KeyIcon,
    title: "Turo Hosts",
    body: "Match tolls and violations against guest trip records without manually searching through reservations.",
  },
  {
    icon: CarIcon,
    title: "Getaround Hosts",
    body: "Reconcile trip-related charges against vehicle and rental activity.",
  },
  {
    icon: ReceiptIcon,
    title: "Private Car Rentals",
    body: "Give independent rental businesses a repeatable way to track renter-related tolls, tickets, and violations.",
  },
  {
    icon: UsersIcon,
    title: "Rental Fleets",
    body: "Handle expense reconciliation across multiple vehicles, renters, and reservations from one workflow.",
  },
  {
    icon: TruckIcon,
    title: "Trucking Companies",
    body: "Associate tolls and violations with the appropriate truck, route/trip, and driver when the necessary trip data is available.",
  },
  {
    icon: BoxIcon,
    title: "Commercial Fleets",
    body: "Resolve trip-related expenses across company vehicles, drivers, and operating records.",
  },
];

const steps = [
  {
    icon: UploadIcon,
    step: "01",
    title: "Upload your documents",
    body: "Bring in toll statements, violation notices, and tickets as PDFs, images, or spreadsheets, along with your trip, rental, or vehicle-assignment export.",
  },
  {
    icon: MatchIcon,
    step: "02",
    title: "Let FleetReclaim reconcile",
    body: "FleetReclaim analyzes dates, vehicles, plates, transactions, trip windows, and available renter/driver information to identify the responsible record.",
  },
  {
    icon: ShieldIcon,
    step: "03",
    title: "Review and recover",
    body: "Confident matches are separated from transactions that need review, amounts already billed are subtracted, and the supporting evidence is organized for recovery.",
  },
];

const useCases = [
  {
    title: "Turo & Getaround Hosts",
    body: "Stop searching through individual reservations every time a toll or violation arrives. Upload your records and let FleetReclaim help connect expenses to the appropriate trip.",
  },
  {
    title: "Private Rental Businesses",
    body: "Create a consistent process for reconciling tolls, tickets, and violations across renters and vehicles.",
  },
  {
    title: "Multi-Vehicle Rental Fleets",
    body: "Process expenses across many vehicles while separating confident matches from transactions that require review.",
  },
  {
    title: "Trucking Companies",
    body: "Connect toll and violation records to trucks, trips, and drivers using the operational data available to your business.",
  },
  {
    title: "Commercial & Logistics Fleets",
    body: "Turn disconnected expense documents and vehicle records into an organized reconciliation workflow.",
  },
];

const rows = [
  { vehicle: "8KJR291", trip: "Mar 3 – Mar 7", party: "Guest · D. Reyes", expense: "FasTrak toll", status: "Matched", amount: "$18.75" },
  { vehicle: "TRK-4420", trip: "Mar 5 · Route 61", party: "Driver · M. Osei", expense: "Toll-by-plate", status: "Matched", amount: "$42.10" },
  { vehicle: "6PLM880", trip: "Mar 9 – Mar 11", party: "Renter · A. Whitfield", expense: "Parking violation", status: "Matched", amount: "$65.00" },
  { vehicle: "9CVA104", trip: "—", party: "Unassigned", expense: "Express lane toll", status: "Needs review", amount: "$7.40" },
];

function Eyebrow({ children, tone = "dark" }: { children: React.ReactNode; tone?: "dark" | "light" }) {
  return (
    <p
      className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${
        tone === "light" ? "text-white/70" : "text-brand"
      }`}
    >
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="bg-brand text-white">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
            <div>
              <Eyebrow tone="light">Expense recovery for rentals &amp; fleets</Eyebrow>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
                Recover tolls and violations
                <br className="hidden sm:block" /> without the paperwork.
              </h1>
              <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-white/80">
                FleetReclaim helps Turo and Getaround hosts, private rental businesses, fleet
                operators, and trucking companies match tolls and violations to the right vehicle,
                trip, renter, guest, or driver — with the supporting evidence organized for
                recovery.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={APP_URL}
                  className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-brand transition-colors hover:bg-brand-soft"
                >
                  Start Recovering
                  <ArrowIcon />
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  See How It Works
                </a>
              </div>

              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                {heroPoints.map(point => (
                  <li key={point} className="flex items-center gap-2 text-sm text-white/80">
                    <CheckIcon className="h-4 w-4 text-white" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Product preview */}
            <div className="min-w-0 overflow-hidden rounded-xl border border-white/15 bg-white p-4 shadow-2xl shadow-black/20">
              <div className="flex items-center justify-between border-b border-line pb-3">
                <div className="flex items-center gap-2">
                  <Image src="/logo.png" alt="" width={20} height={20} className="h-5 w-5" />
                  <span className="text-sm font-semibold text-ink">Recovery</span>
                </div>
                <span className="rounded-full bg-brand-soft px-2.5 py-1 text-[11px] font-semibold text-brand">
                  4 of 5 matched
                </span>
              </div>

              <div className="mt-3 -mx-1 overflow-x-auto px-1">
                <table className="w-full min-w-[440px] text-left text-[12.5px]">
                  <thead>
                    <tr className="text-[10.5px] uppercase tracking-[0.05em] text-ink-muted">
                      <th className="pb-2 font-semibold">Vehicle</th>
                      <th className="pb-2 font-semibold">Trip</th>
                      <th className="pb-2 font-semibold">Responsible Party</th>
                      <th className="pb-2 font-semibold">Expense</th>
                      <th className="pb-2 font-semibold">Status</th>
                      <th className="pb-2 text-right font-semibold">Recoverable</th>
                    </tr>
                  </thead>
                  <tbody className="text-ink">
                    {rows.map(row => (
                      <tr key={row.vehicle} className="border-t border-line">
                        <td className="py-2.5 font-mono text-[11.5px]">{row.vehicle}</td>
                        <td className="py-2.5 text-ink-muted">{row.trip}</td>
                        <td className="py-2.5">{row.party}</td>
                        <td className="py-2.5 text-ink-muted">{row.expense}</td>
                        <td className="py-2.5">
                          <span
                            className={`rounded-full px-2 py-0.5 text-[10.5px] font-semibold ${
                              row.status === "Matched"
                                ? "bg-brand-soft text-brand"
                                : "bg-amber-50 text-amber-700"
                            }`}
                          >
                            {row.status}
                          </span>
                        </td>
                        <td className="py-2.5 text-right font-semibold">{row.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-3 flex items-center justify-between border-t border-line pt-3 text-[12.5px]">
                <span className="text-ink-muted">Trip reimbursements identified</span>
                <span className="font-semibold text-ink">$133.25</span>
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
            <div className="max-w-2xl">
              <Eyebrow>The reconciliation gap</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-[34px]">
                Tolls and violations arrive separately from the trips that caused them.
              </h2>
              <p className="mt-4 text-[16.5px] leading-relaxed text-ink-muted">
                If your business has vehicle, trip, driver, or renter records and receives tolls,
                violations, tickets, or other trip-related charges separately, FleetReclaim helps
                reconcile those expenses back to the responsible trip, renter, guest, driver, or
                vehicle.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {problemPoints.map(item => (
                <div key={item.title} className="rounded-lg border border-line bg-canvas p-5">
                  <h3 className="text-[15px] font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section id="who-its-for" className="scroll-mt-20 bg-canvas">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
            <div className="max-w-2xl">
              <Eyebrow>Built for vehicle operators</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-[34px]">
                One recovery workflow, across every kind of fleet.
              </h2>
              <p className="mt-4 text-[16.5px] leading-relaxed text-ink-muted">
                Whether you&apos;re renting cars to guests, operating your own rental business, or
                managing commercial vehicles, FleetReclaim helps connect tolls and violations back
                to the trip and person responsible.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {audiences.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="rounded-lg border border-line bg-white p-6 transition-shadow hover:shadow-md hover:shadow-black/5"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-soft text-brand">
                    <Icon />
                  </span>
                  <h3 className="mt-4 text-[16px] font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{body}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-ink-muted">
              From peer-to-peer rentals to commercial fleets — whether you manage a few rental cars
              or a growing commercial fleet, FleetReclaim helps connect trip-related expenses to the
              people and vehicles responsible.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="scroll-mt-20 border-y border-line bg-white">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
            <div className="max-w-2xl">
              <Eyebrow>How it works</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-[34px]">
                From a stack of statements to an organized recovery list.
              </h2>
              <p className="mt-4 text-[16.5px] leading-relaxed text-ink-muted">
                Depending on your business, the responsible party may be a guest, renter, driver, or
                operator, and a record may be a reservation, rental, trip, route, or vehicle
                assignment. FleetReclaim uses &ldquo;trip&rdquo; as the general term and supports
                each of these operating models.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {steps.map(({ icon: Icon, step, title, body }) => (
                <div key={step} className="rounded-lg border border-line bg-canvas p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand text-white">
                      <Icon />
                    </span>
                    <span className="font-mono text-xs font-semibold text-ink-muted">{step}</span>
                  </div>
                  <h3 className="mt-4 text-[16px] font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section id="use-cases" className="scroll-mt-20 bg-canvas">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
            <div className="max-w-2xl">
              <Eyebrow>Built to scale with your fleet</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-[34px]">
                From one rental car to an entire fleet.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {useCases.map(item => (
                <div key={item.title} className="rounded-lg border border-line bg-white p-6">
                  <h3 className="text-[16px] font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Pricing />

        {/* Closing CTA */}
        <section className="bg-brand text-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-14 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-[34px]">
                Start recovering what your trips actually cost you.
              </h2>
              <p className="mt-3 text-[16.5px] leading-relaxed text-white/80">
                Built for Turo and Getaround hosts, private rental operators, and commercial fleets.
                Upload your first statement and see what&apos;s recoverable.
              </p>
            </div>
            <a
              href={APP_URL}
              className="inline-flex w-fit items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-brand-soft"
            >
              Start Recovering
              <ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
