# Naledi Interiors

Marketing and portfolio website for **Naledi Interiors** — a boutique interior design studio specialising in quiet luxury residential and commercial spaces.

---

## Tech Stack

- **React 18** + TypeScript
- **Vite** (dev server on port 8080)
- **Tailwind CSS** + shadcn/ui (Radix UI)
- **React Router DOM v6** (client-side routing)
- **React Hook Form** + Zod (contact form validation)
- **TanStack Query v5**
- **Deployed on Netlify** (build output: `dist/`)

---

## Pages

| Route | Page |
|---|---|
| `/` | Home — hero, marquee reviews, portfolio |
| `/about` | About — founder story, team (Lise, Daphney, Abijah) |
| `/services` | Services listing |
| `/contact` | Contact form + FAQ accordion |

---

## Running Locally

```bash
npm install       # only needed if node_modules is missing
npm run dev       # starts dev server at http://localhost:8080
```

Other commands:

```bash
npm run build     # production build → dist/
npm run preview   # preview production build locally
npm run test      # run tests
npm run lint      # ESLint
```

---

## Project Structure

```
src/
├── assets/          # Logo and project photography
├── components/      # Shared components (Navigation, Footer, Layout, WhatsApp button, Exit intent popup)
├── components/ui/   # shadcn/ui component library
├── hooks/           # Custom React hooks
├── lib/             # Utilities
├── pages/           # Route-level page components
└── test/            # Vitest tests
```

---

## Contact

WhatsApp: +267 73293302  
Author: Tshireletso Atwine, Founder & Creative Director
