# Sarunya — Portfolio 2026

A modern, performant portfolio website built with Next.js App Router, featuring immersive Three.js animations, smooth Framer Motion transitions, dark/light theming, and full EN/TH internationalization.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 4 |
| UI Components | shadcn/ui |
| Animation | Framer Motion (`motion`) |
| 3D Background | Three.js / @react-three/fiber |
| Theme | next-themes (Dark / Light) |
| i18n | Custom hook + JSON locale files (EN / TH) |
| Icons | Lucide React |

## Features

- **Dark / Light Mode** — smooth toggle, system preference aware, single source of truth via CSS custom properties
- **EN / TH Language** — URL-based switching (`?lang=th`), type-safe translations
- **Three.js Background** — interactive particle system with mouse tracking
- **Framer Motion Animations** — staggered skill cards, hero scale-in, infinite gradient text
- **Typing Animation** — role cycling in the hero section
- **Responsive** — mobile, tablet, desktop layouts
- **SEO Optimized** — OpenGraph, Twitter cards, JSON-LD structured data, robots.txt, sitemap.xml
- **Server Component First** — Hero, Skills, Project sections are server-rendered; client boundary limited to interactive elements only

## Architecture

```
src/
  app/
    layout.tsx          # Root layout — metadata, theme provider, JSON-LD
    page.tsx            # Server component — reads searchParams, passes translations
    globals.css         # Theme tokens (OKLch CSS custom properties)
    robots.ts           # /robots.txt route
    sitemap.ts          # /sitemap.xml route
  components/
    hero/               # Hero section (server component)
    skill/              # Skills section (server component)
    project/            # Projects section (server component)
    navigate/           # Navbar, menus, toggles (client — scroll/interaction)
    theme/              # ThemeProvider, ModeToggle (client)
    motion/             # Framer Motion wrappers (client)
    three-background.tsx # Three.js canvas (client)
    ui/                 # shadcn/ui primitives
  constants/            # Data config (skills, projects, nav, footer)
  hooks/
    useLanguage.ts      # Client hook for language — used only in interactive components
  lib/
    get-translations.ts # Server-safe translation loader
    utils.ts            # cn() Tailwind merge utility
  locales/
    en.json             # English translations
    th.json             # Thai translations
```

## Server vs Client Components

| Component | Type | Reason |
|---|---|---|
| `page.tsx` | Server | Reads searchParams, no browser APIs |
| `layout.tsx` | Server | Static shell, metadata export |
| `Hero`, `Skills`, `Project` | Server | Content only — receive `t` as prop |
| `Footer` | Server | Static content |
| `Navbar`, `DesktopMenu`, `MobileMenu` | Client | Scroll tracking, state |
| `LangToggle`, `ModeToggle` | Client | User interaction |
| `ThreeBackground` | Client | WebGL / browser API |
| Motion wrappers | Client | Framer Motion requires browser |

## Theme System

See [theme.md](./theme.md) for full documentation on color tokens, how to change colors, and light/dark mode values.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Lint

```bash
npm run build   # production build
npm run lint    # ESLint check
```

## Progress

See [progress.md](./progress.md) for a timestamped log of completed features and remaining work.
