@AGENTS.md

# Sparkle Bins

Single-page marketing site for Sparkle Bins — a local bin cleaning service run by Keiran, a kid entrepreneur in the Skyline Ridge community. Built with Next.js 16, React 19, Tailwind CSS 4, and TypeScript.

## Project structure

- `app/page.tsx` — The entire site (hero, how it works, pricing, video divider, FAQ, about, book now, footer)
- `app/layout.tsx` — Root layout, metadata, and font loading (Geist + Nunito)
- `app/globals.css` — Global styles, Tailwind theme (custom `accent` color tokens), sparkle animations
- `public/` — Static assets (hero backgrounds, photos, custom step icons, video)

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — Run ESLint

## Key details

- Single-page app with no routing — all sections live in `app/page.tsx`
- Page sections in order: Hero → How It Works → Pricing (before/after) → Video Divider → FAQ → About → Book Now → Footer
- Hero title "SPARKLE BINS" uses layered `-webkit-text-stroke` borders (white outer, dark blue middle, light blue inner) with a white-to-blue gradient fill, animated sparkle star SVGs, and Nunito font
- Section titles use uppercase bold text with a blue accent underline bar (`after:` pseudo-element)
- How It Works uses custom PNG icons (`icon-calendar.png`, `icon-dirty-bin.png`, `icon-clean-bin.png`) with `unoptimized` prop to preserve transparency
- Video divider plays `video.mp4` on loop (muted, autoplay) with a dark overlay
- FAQ uses native `<details>` accordion elements
- About section uses `keiran1.jpg` as a background image with dark overlay
- Booking flow is SMS-based: the "Text Me to Book" button opens the user's messaging app with a pre-filled template (address + preferred Saturday)
- Book Now section has Keiran's avatar overlapping the top of the card
- Phone number: (702) 637-8989
- Pricing: $10 per bin
- Service area: Skyline Ridge community only
- Service runs on Saturdays after Republic Services empties bins
- Deployed on Vercel
