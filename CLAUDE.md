@AGENTS.md

# Sparkle Bins

Single-page marketing site for a local bin cleaning service. Built with Next.js 16, React 19, Tailwind CSS 4, and TypeScript.

## Project structure

- `app/page.tsx` — The entire site (hero, how it works, pricing, about, book now, footer)
- `app/layout.tsx` — Root layout and metadata
- `app/globals.css` — Global styles and Tailwind theme (custom `accent` color tokens)
- `public/` — Static images (hero backgrounds, photos)

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — Run ESLint

## Key details

- Single-page app with no routing — all sections live in `app/page.tsx`
- Booking flow is SMS-based: the "Text Me to Book" button opens the user's messaging app with a pre-filled template (address + preferred Saturday)
- Phone number: (702) 637-8989
- Pricing: $10 per bin
- Service runs on Saturdays after Republic Services empties bins
- Deployed on Vercel
