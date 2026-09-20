"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { trackEvent, trackCtaClick, withAttribution, type CtaLocation } from "@/lib/analytics";

/** Rewrites an anchor's href in place so campaign params reach the app. */
function useAttributedHref(href: string) {
  const ref = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    const anchor = ref.current;
    if (anchor) anchor.href = withAttribution(href);
  }, [href]);
  return ref;
}

type Props = {
  href: string;
  ctaName: string;
  ctaLocation: CtaLocation;
  className?: string;
  children: ReactNode;
};

/**
 * Anchor that reports a `cta_click` before navigation and forwards campaign
 * parameters to the application. The plain `href` is what renders on the
 * server, so the link works before hydration and without analytics.
 */
export function CtaLink({ href, ctaName, ctaLocation, className, children }: Props) {
  const ref = useAttributedHref(href);

  return (
    <a
      ref={ref}
      href={href}
      className={className}
      onClick={() => trackCtaClick(ctaName, ctaLocation, href)}
    >
      {children}
    </a>
  );
}

/** In-page anchor that reports a named event on click. */
export function TrackedAnchor({
  href,
  event,
  className,
  children,
}: {
  href: string;
  event: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a href={href} className={className} onClick={() => trackEvent(event)}>
      {children}
    </a>
  );
}
