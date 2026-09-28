# TECHORA Electronics Demo

A premium, Bengali-first Bangladesh electronics e-commerce demo for CodePixel Web, built with Next.js, TypeScript, React and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

This is a frontend-only demo. Product data, brand configuration, delivery charges and WhatsApp details are centralized in `lib/data.ts`.

## Typography

Premium, fully self-hosted Bengali-first type system (no external requests):

- **Noto Sans Bengali Variable** (100–900) — all Bengali text, headings, prices (৳, ০-৯ and Latin digits)
- **Manrope Variable** (200–800) — Latin display text (wordmark, eyebrows, brand pills, order numbers)

Fonts are bundled via [Fontsource](https://fontsource.org) (`@fontsource-variable/*`) and imported in `app/layout.tsx`; the stacks are defined as `--font-bengali` / `--font-latin` in `app/globals.css`.
