// Small GA4 (gtag.js) wrapper. Everything here is a no-op unless a measurement
// ID is configured, so the site works identically without analytics.

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

// Local/preview builds stay out of production analytics unless explicitly opted in.
export const analyticsEnabled =
  GA_MEASUREMENT_ID !== "" &&
  (process.env.NODE_ENV === "production" || process.env.NEXT_PUBLIC_GA_DEBUG === "true");

type EventParams = Record<string, string | number | boolean>;

export function trackEvent(name: string, params: EventParams = {}) {
  if (!analyticsEnabled) return;
  window.gtag?.("event", name, params);
}

export type CtaLocation =
  | "navigation"
  | "hero"
  | "pricing"
  | "final_cta"
  | "footer";

export function trackCtaClick(ctaName: string, location: CtaLocation, destination: string) {
  trackEvent("cta_click", {
    cta_name: ctaName,
    cta_location: location,
    destination,
  });
}

// Campaign parameters worth carrying across to the application.
const ATTRIBUTION_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "gbraid",
  "wbraid",
];

/**
 * Appends the campaign parameters of the current landing-page URL to an
 * outbound app link, without touching params the link already sets.
 */
export function withAttribution(destination: string): string {
  if (typeof window === "undefined") return destination;
  const incoming = new URLSearchParams(window.location.search);
  const url = new URL(destination, window.location.href);
  for (const key of ATTRIBUTION_PARAMS) {
    const value = incoming.get(key);
    if (value && !url.searchParams.has(key)) url.searchParams.set(key, value);
  }
  return url.toString();
}
