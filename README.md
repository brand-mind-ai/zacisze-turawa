# Zacisze Turawa Website Rebuild

Lean Astro rebuild for `zaciszeturawa.pl`.

## Current Status

This repository is in foundation setup. Current live-site content has been extracted from `https://www.zaciszeturawa.pl/` into Pages CMS-backed Markdown files, with current image references saved under `public/media/current-site`.

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
npm run crawl:current
npm run check
npm run build
```

## Cloudflare Pages Preview

Cloudflare Pages settings for this Astro static build:

- Repository: `brand-mind-ai/zacisze-turawa`
- Preview branch: `codex/live-preview-scaffold`
- Build command: `npm run build`
- Build output directory: `dist`
- Environment variable for temporary preview: `PUBLIC_SITE_URL=https://zaciszeturawa.com`

Reference: https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/

## Current Crawl Outputs

- `Current Site Inventory.md`
- `src/data/current-site-crawl.json`
- `src/data/image-map.json`
- `src/content/pl`
- `src/content/en`
- `src/content/de`
- `public/media/current-site`
