# Zacisze Turawa Repo Agent Instructions

## Startup

Before editing this repository, read:

1. `AGENTS.md`
2. `PLAN.md`
3. `README.md`

If working from the parent project folder, also read:

```text
/Users/macbookpro/Documents/Claude/Projects/Hotel/_HANDOVER.md
/Users/macbookpro/Documents/Claude/Projects/Hotel/Session Brief Template.md
```

## Non-Negotiables

1. Do not invent copy, offers, room details, package details, prices, IDs, design features, or images.
2. Preserve current `zaciszeturawa.pl` content before rewriting anything.
3. Preserve current image/page pairing in the first production version.
4. Preserve the live URL structure in `src/data/url-map.json`.
5. Polish is first. English and German URLs remain in the route contract but content build happens later.
6. Never edit `CLAUDE.md` files in the parent project.
7. Do not delete files without Martin's explicit approval.
8. Payment stays inside GuestSage. This site must not process, store, proxy, or log card data.

## Stack Rules

Use:

- Astro
- TypeScript
- Pages CMS-backed Markdown/JSON
- Cloudflare Pages
- Lenis for smooth scroll
- GSAP ScrollTrigger for reveal/parallax

Load Lenis and GSAP only through Astro page/component islands where motion is actually used.

Reduced-motion preference must disable Lenis and all GSAP triggers.

Do not add React unless an interaction genuinely needs it.

## Content Rules

All visible production copy must come from Markdown or JSON content files, not hardcoded component text.

Do not build final pages until the source content crawl and image mapping are complete.

Pages CMS media should live under:

```text
public/media
```

CMS-editable content should live under:

```text
src/content
```

Shared route, domain, and booking data should live under:

```text
src/data
```

## Verification

After changes, run the smallest relevant checks:

```bash
npm run check
npm run build
git status --short --branch
```

For visual changes, also run a browser check.

Current V2 preview target:

```text
branch: codex/live-preview-scaffold
preview URL: https://demo.zaciszeturawa.com/
```

Before saying the V2 preview is available on the public demo URL, verify mobile, tablet, and desktop layouts locally; push the latest branch; then confirm `https://demo.zaciszeturawa.com/` returns 200 and serves the expected V2 assets/content.
