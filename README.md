# Zacisze Turawa Website Rebuild

Lean Astro rebuild for `zaciszeturawa.pl`.

## Current Status

This repository is in foundation setup. Production page content has not been extracted yet.

Source rules:

- Polish site first.
- Current `zaciszeturawa.pl` content and image/page pairing must be preserved before copy or visual improvements.
- Final SEO target is `https://www.zaciszeturawa.pl/`.
- Temporary deployment/parking domain is `https://zaciszeturawa.com/`.
- Booking and payment stay inside the verified GuestSage iframe/link flow.

## Stack

- Astro
- TypeScript
- Pages CMS
- Cloudflare Pages
- Lenis for smooth scroll, only on pages that load the motion island
- GSAP ScrollTrigger for reveal/parallax, only on pages that load the motion island

Reduced-motion preference disables Lenis and all GSAP triggers.

## Commands

```bash
npm install
npm run dev
npm run check
npm run build
```
