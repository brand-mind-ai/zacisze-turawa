# Zacisze Turawa Repo Build Plan

Updated: 2026-05-17

## TLDR

This repo starts as a controlled foundation for the Zacisze rebuild. The first real content task is not design or page building. It is extraction: route inventory, current copy, current image/page mapping, and CMS-backed source files.

## Stage 0 - Repo Foundation

1. Keep the repo clean and buildable.
2. Configure Astro, TypeScript, Pages CMS, Cloudflare-compatible static output, and security headers.
3. Add source-of-truth data files:
   - `src/data/domains.json`
   - `src/data/booking.json`
   - `src/data/url-map.json`
4. Add empty CMS folders for Polish-first content.
5. Add the motion island with Lenis + GSAP ScrollTrigger disabled for reduced motion.

## Stage 1 - Verified Crawl And Content Preservation

1. Crawl `https://www.zaciszeturawa.pl/`.
2. Confirm every live URL and status.
3. Extract visible copy into structured Markdown.
4. Map current images to the exact page/section where they appear.
5. Create Polish content files first.
6. Preserve English and German routes in `src/data/url-map.json`, but defer translation rebuild.

## Stage 2 - Polish Site Build

Build reusable layouts/components only after content is extracted:

- global layout
- header/social links/phone/maps
- photo-first hero
- minimal date picker
- room slider
- offer/package slider
- image gallery
- footer with parallax-ready structure
- booking iframe page
- legal/static page layout

## Stage 3 - Booking, Security, Performance

1. Implement one booking URL builder.
2. Pass only verified GuestSage parameters.
3. Embed GuestSage only on the booking page.
4. Confirm security headers do not break the iframe.
5. Run build, check, route audit, Lighthouse-style performance review, and visual review.

## Stage 4 - Temporary Launch And Final Cutover

1. Deploy preview/parking build to `https://zaciszeturawa.com/`.
2. Keep SEO optimized for final `https://www.zaciszeturawa.pl/`.
3. Cut over `.pl` only after Polish content, routing, booking, security, and performance pass.
4. Rebuild EN/DE after Polish launch using the preserved route contract.
