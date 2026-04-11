# CLAUDE.md — techstromserviceswebsite

## Project Overview
A Next.js services/portfolio website for Techstrom. This file guides Claude Code when working in this repository.

## Directory Structure
```
techstromserviceswebsite/
├── app/                  # Next.js App Router pages and layouts
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── [...]/            # Additional routes
├── components/           # Reusable React components
├── public/               # Static assets (images, fonts, icons)
├── styles/               # Global CSS / Tailwind config
├── lib/                  # Utility functions and helpers
└── types/                # Shared TypeScript types
```

## Tech Stack
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: *(update with Tailwind CSS / CSS Modules / Styled Components / etc.)*
- **Package Manager**: npm *(update if yarn/pnpm)*

## Common Commands
```bash
npm run dev       # Start local dev server (http://localhost:3000)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
npm run typecheck # Run TypeScript type checking (tsc --noEmit)
```

## Code Style & Conventions
- Use **TypeScript** for all new files; avoid `any`
- Prefer **named exports** for components; default exports for pages
- Component files use **PascalCase** (e.g., `HeroSection.tsx`)
- Utility/helper files use **camelCase** (e.g., `formatDate.ts`)
- Keep components small and focused; extract logic into `lib/` or custom hooks
- Use Next.js **`Image`** component for all images (never raw `<img>`)
- Use Next.js **`Link`** component for all internal navigation

## Environment Variables
- Stored in `.env.local` (never committed)
- Prefix public vars with `NEXT_PUBLIC_`
- Document required vars here as they are added:
  ```
  NEXT_PUBLIC_SITE_URL=
  # Add others as needed
  ```

## Key Decisions & Notes
- This is a **static/marketing site** — prefer static generation (`generateStaticParams`, no `use client` unless necessary)
- Keep `"use client"` directives pushed as far down the component tree as possible
- Metadata (SEO) is managed via Next.js `generateMetadata` in each `page.tsx`

## Out of Scope
- Do not modify files in `.next/` (build output)
- Do not commit `.env.local` or any secrets
