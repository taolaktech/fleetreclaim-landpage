"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ArrowIcon, CheckIcon } from "@/components/icons";
import { trackCtaClick, trackEvent, withAttribution } from "@/lib/analytics";

// The app reads ?view= (not ?billing=), so both CTAs deep-link to its Billing page.
const BILLING_URL = "https://app.fleetreclaim.com/?view=billing";

const features = [
  "Toll reconciliation",
  "Violation matching",
  "Trip-to-renter/driver matching",
  "Evidence preparation",
  "Needs-review workflow",
  "Recovery dashboard",
  "Multi-vehicle support",
];

const operators = [
  "Turo hosts",
  "Getaround hosts",
  "Private car rentals",
  "Rental fleets",
  "Trucking companies",
  "Commercial fleets",
];

type Billing = "monthly" | "annual";

export function Pricing() {
  const [billing, setBilling] = useState<Billing>("monthly");
  const groupId = useId();
  const annual = billing === "annual";
  const sectionRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const anchor = ctaRef.current;
    if (anchor) anchor.href = withAttribution(BILLING_URL);
  }, []);

  // `pricing_view` fires once, the first time the section is meaningfully visible.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          trackEvent("pricing_view");
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="pricing" className="scroll-mt-20 border-y border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:py-20 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
            Simple pricing
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-[34px]">
            One plan. Everything you need to reclaim trip expenses.
          </h2>
          <p className="mt-4 text-[16.5px] leading-relaxed text-ink-muted">
            No complicated tiers. Get the tools you need to match tolls and violations, organize
            evidence, and identify expenses for recovery.
          </p>

          <p className="mt-8 text-sm font-semibold text-ink">The same plan works for</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {operators.map(operator => (
              <li
                key={operator}
                className="rounded-full border border-line bg-canvas px-3 py-1.5 text-[12.5px] text-ink-muted"
              >
                {operator}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-line bg-canvas p-6 shadow-lg shadow-black/5 sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                Plan
              </p>
              <p className="mt-1 text-[18px] font-semibold text-ink">FleetReclaim</p>
            </div>

            <div
              role="radiogroup"
              aria-label="Billing period"
              className="flex rounded-lg border border-line bg-white p-1"
            >
              {(["monthly", "annual"] as const).map(option => (
                <button
                  key={option}
                  type="button"
                  role="radio"
                  id={`${groupId}-${option}`}
                  aria-checked={billing === option}
                  onClick={() => {
                    setBilling(option);
                    trackEvent("billing_period_selected", { billing_period: option });
                  }}
                  className={`rounded-md px-3 py-1.5 text-[13px] font-semibold capitalize transition-colors ${
                    billing === option
                      ? "bg-brand text-white"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7 border-t border-line pt-6">
            <div className="flex items-end gap-2">
              <span className="text-[44px] font-semibold leading-none tracking-tight text-ink">
                {annual ? "$164.89" : "$14.99"}
              </span>
              <span className="pb-1.5 text-sm text-ink-muted">{annual ? "/year" : "/month"}</span>
            </div>

            <p aria-live="polite" className="mt-3 min-h-6 text-sm text-ink-muted">
              {annual ? (
                <span className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-brand-soft px-2.5 py-1 text-[11.5px] font-semibold text-brand">
                    1 Month Free
                  </span>
                  Save $14.99 annually
                </span>
              ) : (
                "Billed monthly. Switch to annual for one month free."
              )}
            </p>

            <a
              ref={ctaRef}
              href={BILLING_URL}
              onClick={() => trackCtaClick("get_started", "pricing", BILLING_URL)}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
            >
              Get Started
              <ArrowIcon />
            </a>

            <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
              {features.map(feature => (
                <li key={feature} className="flex items-start gap-2 text-sm text-ink">
                  <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-brand" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
