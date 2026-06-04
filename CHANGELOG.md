# Changelog — Naledi Interiors

All notable changes to this project are documented here.  
Format: `[YYYY-MM-DD] — Description`

---

## [2026-06-04]

### Contact
- Updated WhatsApp number to `+267 73293302` across all 5 files:
  - `src/components/WhatsAppButton.tsx` — phone number variable
  - `src/components/Navigation.tsx` — desktop + mobile `wa.me` links
  - `src/components/ExitIntentPopup.tsx` — `wa.me` link
  - `src/components/Footer.tsx` — `wa.me` link + display text
  - `src/pages/Contact.tsx` — `wa.me` link + display text

### About Page
- Updated founder name to **Tshireletso Atwine** throughout
- Removed Tshireletso from "The Team" grid (she appears only as Founder in the Our Story section)
- Updated team grid to 3 members: **Lise**, **Daphney**, **Abijah**
- Expanded team grid from `grid-cols-3` to correct 3-column layout

### README
- Rewrote `README.md` with full project description, tech stack, page routes, project structure, and contact details

### Portfolio Page (new)
- Created `src/data/portfolioData.ts` — typed data file for all portfolio content (projects, rooms, companies)
- Created `src/pages/Portfolio.tsx` — full portfolio page with:
  - Full-bleed hero image (`Fb banner Hero Main i.png`) matching other pages
  - Sticky `01 Residential / 02 Corporate` tab bar
  - Residential view with filter chips (All / Lounges / Bedrooms / Kitchens / Bathrooms / Dining / Dressing)
  - Corporate view grouped by company with intro text
  - 3-column image grid with 1px ruled gaps
  - Scroll-reveal animations on all cards
  - Lightbox with image, project details, detail quote, and sibling thumbnails
  - Sibling thumbnails are clickable — navigating updates the entire lightbox view
  - Lightbox sized to `max-w-6xl` / `max-h-[95vh]` for comfortable reading
  - Grid filler cells (tonal placeholders) complete any incomplete last row — eliminates dark grid bleed
  - CTA section linking to `/contact`
- Added `/portfolio` route to `src/App.tsx`
- Added **Portfolio** link to `src/components/Navigation.tsx` (desktop + mobile)

### Dermatome Skin Clinic — Corporate Images
- Created `src/assets/corporate/dermatome/` directory
- Copied and renamed 5 images from Telegram Desktop downloads:
  - `dermatome-reception.jpg`
  - `dermatome-waiting-area.jpg`
  - `dermatome-consultation-room.jpg`
  - `dermatome-examination-room.jpg`
  - `dermatome-examination-room-2.jpg`
- Expanded Dermatome from 3 → 5 spaces in `portfolioData.ts`, all wired to real images
- Each space given a `detail` field — a one-line design description shown on card hover and in the lightbox
- Added 6th Dermatome space ("Skin Bar") using `dermatome-placeholder.jpg` (copied from `place holde dermatome.jpg`)
- Corporate cards upgraded with:
  - Permanent bottom gradient so scene labels are always readable over photos
  - Scene label anchored to bottom of card at all times
  - Full hover overlay showing room label, detail sentence, and "View Space" CTA

---

## Pending / To Do

- [ ] Add real founder portrait (`founder-tshireletso.jpg` — 900×1200px, 3:4)
- [ ] Add team photos: `team-lise.jpg`, `team-daphney.jpg`, `team-abijah.jpg` (600×800px, 3:4)
- [ ] Replace residential portfolio placeholders with real project images
- [ ] Replace Apex corporate placeholders with real images
- [ ] Replace Dermatome "Skin Bar" placeholder with final photo
- [ ] Update residential project names/descriptions when confirmed
- [ ] Wire up contact form submission (Netlify Forms or EmailJS)
