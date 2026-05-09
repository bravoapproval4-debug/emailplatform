# Email Advisor

A production-ready Next.js 15 static website for Brevo email marketing education. Built with TypeScript, Tailwind CSS, and static export.

## Tech Stack

- Next.js 15 (static export)
- TypeScript
- Tailwind CSS
- gray-matter (frontmatter parsing)
- marked (markdown rendering)
- Google Fonts (Poppins + Inter)

## Getting Started

```bash
npm install --legacy-peer-deps
npm run dev
```

## Build

```bash
npm run build
```

The static site is exported to the `out/` directory.

## Structure

- `app/` — Next.js App Router pages
- `components/` — Reusable React components
- `content/articles/` — MDX article files
- `lib/articles.ts` — Article data loading utilities
- `public/` — Static assets

## Content

20 articles across 5 categories:
- Email Marketing Basics (4 articles)
- Automation & Workflows (4 articles)
- Deliverability & List Management (4 articles)
- Analytics & Reporting (4 articles)
- vs Competitors (4 articles)

## Domain

https://emailplatformadvisor.online
