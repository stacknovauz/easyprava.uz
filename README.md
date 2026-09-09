# easyprava.uz

Landing page for **EasyPrava** — a licensed driving school (o'quv markaz) in Tashkent that
prepares students for the A1, A, B, BC, C and D licence categories, and ships its own
student and instructor mobile apps.

## Stack

- Next.js 16 (App Router) — see `AGENTS.md`, this version has breaking changes vs older docs
- Tailwind CSS 4 (CSS-first config in `app/globals.css`)
- shadcn/ui (`radix-luma` style), lucide-react icons
- Fonts: Inter (body), Sora (headings), Geist Mono

## Where things live

| What | Where |
|---|---|
| Prices, courses, FAQ, testimonials, branches, contacts | `lib/content.ts` |
| Page sections | `components/landing/` |
| Brand lockup (traced from `public/logo2.jpg`) | `components/logo.tsx` |
| Design tokens (`--primary`, `--brand-yellow`, …) | `app/globals.css` |
| Favicon / apple icon / OG image | `app/icon.svg`, `app/apple-icon.png`, `app/opengraph-image.png` |
| Enrolment form endpoint | `app/api/lead/route.ts` |

Edit copy and pricing in `lib/content.ts` — not in the section components.

## Development

```bash
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Enrolment leads

`POST /api/lead` forwards submissions to Telegram. Set these in `.env.local`
(and in the hosting provider's environment variables) or leads are only written
to the server log:

```
TELEGRAM_BOT_TOKEN=...   # from @BotFather
TELEGRAM_CHAT_ID=...     # chat/channel that receives the leads
```
