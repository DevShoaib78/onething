# Onething Studio

The website of [Onething Studio](https://onething.studio), a rapid digital product studio: websites,
web apps, mobile apps, MVPs and AI automation, from idea to launch in 1 to 4 weeks.

A single-page site built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4,
Lenis (smooth scroll), Motion (animation), ogl (the hero's WebGL background) and simple-icons.
Its layout and motion language follow the Framer template Nocta, rebuilt from scratch in Onething's
own brand, copy and work.

## Run it

```
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in out/
npm start        # serves out/ locally through Cloudflare's wrangler
```

Node 20.9 or newer (`.node-version` pins 22 for Cloudflare).

## Deploy

The site is a static export (`output: "export"` in `next.config.ts`), deployed to Cloudflare Workers
static assets. `wrangler.jsonc` runs `npm run build` and serves `./out`; pushes to `main` go to
production and every other branch or pull request gets its own preview link from Cloudflare
(`"previews": {}` in `wrangler.jsonc` enables those preview builds).

## Where things are

| Path | What it holds |
|---|---|
| `lib/content.ts` | Every word on the page: projects, testimonials (verbatim), services, process, FAQs, engagements, metrics, contact details. Edit copy here, not in components. |
| `lib/seo.ts` | Title, description, keywords and the JSON-LD graph, built from `lib/content.ts`. |
| `app/page.tsx` | The page, section by section. |
| `app/layout.tsx` | Fonts, metadata, structured data, smooth scroll. |
| `public/og-image.png` | The link-preview image (1200x630). Its source is `scripts/og-image.tsx`, which explains how to regenerate it. |
| `app/robots.ts`, `app/sitemap.ts`, `app/manifest.ts`, `app/llms.txt/` | Crawling, sitemap, web manifest and the plain-text brief for AI engines, all written out as files at build time. |
| `components/sections/` | One file per section. |
| `components/ui/` | Shared pieces: corner ticks, section tag meter, rolling-label buttons, fade-up reveal, accordion. |
| `components/reactbits/MicroSlats.tsx` | The hero background, [React Bits Micro Slats](https://reactbits.dev/backgrounds/micro-slats), themed orange in `Hero.tsx`. |
| `public/work/` | Captures of the live client sites, each in three widths (`640/`, `1080/` and full). `lib/image-loader.ts` picks the smallest that fits, since a static export has no image server. |
| `public/brand/` | Logo and mark. `app/icon.png`, `app/favicon.ico` and `app/apple-icon.png` come from the brand favicon. |
| `assets/fonts/` | Manrope ExtraBold, used by the preview-image source. |

## Page sections

| Section | Behaviour |
|---|---|
| Preloader | Letters rise out of a blur, then the panel lifts |
| Hero | Micro Slats in brand orange; starts as the loader lifts, pauses off screen |
| Ticker | Ideate, build, ship, iterate; one loop every 60s |
| About | Words light up as you scroll |
| Shipped & live | 10 live projects; cards pin and stack, covered cards shrink, dim and fade |
| Capabilities | 1280px and up: the section pins and the five panels open in turn as you scroll. Below that: cards that open as they come into view |
| Built in, every time | Six things every build includes |
| Method | Four-step accordion and tech stack |
| The old way vs ours | Each bottleneck is struck out and its fix rises in orange |
| Founder stories | Verbatim testimonials beside a sticky panel |
| Metrics | Count up when they arrive |
| Engagements | Three engagement shapes with an AI add-on toggle; no published prices |
| Answers | FAQs in two tabs |
| Marquee and footer | Contact by WhatsApp, email and phone |

Navigation: Index, Shipped, Capabilities, Method, Answers.

## Content rules

- Projects and testimonials are real and quoted exactly.
- Pricing is agreed on a call and confirmed in a quotation; the site never states fixed prices.
- Numbered labels are two digits with a leading slash: /01, /02, /03.

## Search and AI visibility

- Title, description, keywords, canonical URL, Open Graph and Twitter cards.
- Link preview image (1200x630) with its content centred, so square crops in WhatsApp still work.
- `robots.txt` allows search engines and AI crawlers; `sitemap.xml`; web manifest and icons.
- JSON-LD: organization and professional service, website, web page, portfolio, process and FAQ.
- `/llms.txt`: a plain-text brief for AI answer engines, generated from the same content.
- Collapsed FAQ answers and process steps stay in the HTML; rolling labels are drawn with CSS so no
  word appears twice in the markup.
- One h1, an h2 per section, h3 per card, descriptive alt text on every image.

Preview tags point at `https://onething.studio`. To get link previews on a Cloudflare preview URL,
set `NEXT_PUBLIC_SITE_URL` to that URL in the Cloudflare build variables.

## Performance

Scroll animations use only transform and opacity, there are no backdrop blurs in scrolling content,
the WebGL hero pauses when off screen, image drift and film grain are desktop only, and phones load
the smaller image widths. Layout is checked for horizontal overflow at 320 to 1440px.
