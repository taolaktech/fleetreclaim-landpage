# FleetReclaim landing page

Marketing site for [FleetReclaim](https://app.fleetreclaim.com) — expense recovery and
reconciliation for rental hosts, private rental businesses, and commercial fleets.

Next.js (App Router) + Tailwind CSS, statically prerendered.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
```

## Checks

```bash
npx tsc --noEmit
npm run lint
npm run build
```

## Analytics (GA4)

Set the measurement ID in the hosting provider's environment (and in a local `.env.local`,
copied from `.env.example`) — it is never committed:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX   # GA4 Admin ▸ Data streams ▸ Web
```

`NEXT_PUBLIC_*` values are inlined at build time, so redeploy after changing it. Without the
variable gtag.js is not loaded and every tracking call is a no-op; it is also skipped outside
production builds unless `NEXT_PUBLIC_GA_DEBUG=true`.

Events (`src/lib/analytics.ts`): `page_view` (gtag config), `cta_click`
(`cta_name`, `cta_location`, `destination`), `pricing_view` (once per page view),
`billing_period_selected` (`billing_period`), `how_it_works_click`. No personal data is sent.
Outbound app links carry `utm_*`, `gclid`, `gbraid` and `wbraid` through to
app.fleetreclaim.com for attribution.

## Content

All page copy lives in `src/app/page.tsx` (section data arrays at the top of the file);
SEO title, description, keywords and OG tags live in `src/app/layout.tsx`.

Turo and Getaround are referenced descriptively only — FleetReclaim is not affiliated with,
endorsed by, or integrated with either platform, and their logos are not used.
