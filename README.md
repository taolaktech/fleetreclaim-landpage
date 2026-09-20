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

## Content

All page copy lives in `src/app/page.tsx` (section data arrays at the top of the file);
SEO title, description, keywords and OG tags live in `src/app/layout.tsx`.

Turo and Getaround are referenced descriptively only — FleetReclaim is not affiliated with,
endorsed by, or integrated with either platform, and their logos are not used.
