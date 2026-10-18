# Changelog — Naledi Interiors

All notable changes to this project are documented here.  
Format: `[YYYY-MM-DD] — Description`

---

## [2026-10-18]

### About Page
- Removed **Abijah Diphofu** (Finance and Accounts) from the team grid after her resignation
- Deleted `src/assets/team/abijah.jpg` and its entry in `scripts/process-team-images.mjs`
- Team grid now shows 3 members: **Lise**, **Daphney**, **Basetsana**

### Portfolio
- Removed the **Apex** corporate project (it only had placeholder spaces, no photos)
- Every project location now reads "Area, Country", on the Portfolio cards, the lightbox and the home page "Selected Work" cards
- Home page corrections: Tlokweng Modern Haven and The Lounge Residence moved from "Gaborone" to "Tlokweng, Botswana"; Modern Classic Mansion moved from "Botswana" to "Uganda"
- Modern Classic Mansion and Kids Bedrooms show "Uganda" only until their areas are known

### Services & Navigation
- Removed the "Discover more" hover label from the five service cards (it looked like a link but went nowhere)
- Added `src/components/ScrollToTop.tsx`: every page now opens at the top. Before this, footer links opened the next page at its bottom, which is why every footer service link seemed to land on "Delivery & Installation"
- Fixed the shaky "Our Process" flip cards: hover is now read from the still outer card instead of the rotating inner one, which slipped out from under the cursor mid-flip and flipped back
- Home page "View All Projects" now opens `/portfolio` (it pointed at `/services`)

### Footer service links
- Each footer service now goes somewhere of its own. Before this, all five opened the same `/services` page
- On the Services page, a footer service scrolls to its card (e.g. `/services#procurement`) and gives the card a brief bronze glow. The scroll target is worked out from the card stack's layout, because the cards are sticky
- On every other page, a footer service opens a side panel (`src/components/ServicePanel.tsx`) with the service description, a "Book a … consultation" button that opens `/contact`, and the other services one click away
- Service wording moved to `src/data/services.ts`, shared by the Services page and the panel so they can't drift apart

## [2026-07-08]

### Home Page
- Replaced the philosophy-section background image in `src/pages/Index.tsx` with `src/assets/residential/bedrooms/bedroom-haven-i.jpg` after feedback that the previous image showed two bedroom windows instead of one
- Updated image alt text to "Elegant bedroom interior"

## [2026-07-07]

### Portfolio — Image Audit & Correctness
- Wiped and fully rebuilt `src/assets/residential/` from scratch
- Every image now traced by MD5 hash to its exact source subfolder in the authoritative download folder
- 31/31 residential + dermatome-new files verified — zero mismatches, zero cross-project contamination
- Strict project → country mapping enforced: Botswana images stay in Botswana projects, Uganda images stay in Uganda projects
- Previous wrong assignments fixed:
  - `bedroom-suite-manor-i/ii` were Bougie Blush photos incorrectly wired to Manor — corrected
  - `bedroom-master-lakefront-ii` was a Modern Haven photo incorrectly wired to Lake Front Tranquility — corrected
  - Several pre-existing "NO MATCH" files of unknown origin removed entirely

### Portfolio — New Projects Added
- **Bougie Blush** (Tlokweng, Botswana): 1 lounge, 2 bedrooms
- **Restorative by Design** (Najjera, Uganda): 1 bathroom
- **Kids Bedrooms** (Uganda): 4 bedrooms
- All wired to real verified images from source folder

### Portfolio — New Images Integrated
- **Luxe, Modern Manor**: added 4 lounges, 1 bedroom, 3 dining, 2 dressing rooms (all from Uganda source)
- **Lake Front Tranquility**: added 1 bedroom, 1 dining
- **Softened Grandeur**: added 1 lounge, 1 dining
- **Morning Light Diva**: added 1 dressing image (replaces placeholder)
- **Dermatome Skin Clinic**: added 5 new July 2026 images alongside original set (`dermatome-new-i` through `v`)

### Portfolio — Renders Section Expanded
- Added 4 new bedroom renders (x–xiii), 7 new bathroom renders (v–xi)
- Added 3 new render categories with filter tabs: **Dining**, **Dressing**, **Kitchens**
- Render sibling thumbnails ("More in this category") now correctly filter by category — previously showed renders from all categories

### Portfolio — Lightbox Fix
- "More from this project" thumbnails now strictly scoped to the current project's `projectKey`
- Render siblings label changed to "More in this category" (renders are not tied to a named project)

### Image Optimisation
- Compressed all portfolio images using `sharp` + mozjpeg (quality 80–82)
- Converted 3 oversized PNGs to JPEG:
  - `bedroom-lakefront-i.png` 2,084 KB → 151 KB (−93%)
  - `lounge-grandeur-i.png` 2,503 KB → 133 KB (−95%)
  - `dining-grandeur-i.png` 2,293 KB → 144 KB (−94%)
- Re-compressed 15 JPEGs that exceeded 150 KB
- All portfolio images now ≤ 160 KB; total portfolio image payload reduced by ~60%
- Added `scripts/compress-images.mjs` as a reusable compression utility
- Updated `portfolioData.ts` imports for the 3 PNG→JPG conversions

### Favicon
- Removed Lovable's `public/favicon.ico` via `git rm`
- Added `public/favicon.png` (Naledi logo) as the site favicon
- Updated `index.html`: icon, apple-touch-icon, OG image, and Twitter image all point to `/favicon.png`
- Removed all Lovable-branded meta tags

### Social Links
- Facebook updated to `https://www.facebook.com/nalediinteriorsUganda` (all 3 locations: Footer, Contact, ExitIntentPopup)
- Fixed typo in ExitIntentPopup: `naledinteriors` → `nalediinteriorsUganda`
- LinkedIn updated to `https://www.linkedin.com/company/naledi-interiors/posts/?feedView=all` (all 3 locations)

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
- [ ] Add team photos: `team-lise.jpg`, `team-daphney.jpg` (600×800px, 3:4)
- [ ] Replace Dermatome "Skin Bar" placeholder with final photo
- [ ] Wire up contact form submission (Netlify Forms or EmailJS). The form in `src/pages/Contact.tsx` currently only shows a "Thank you" alert, so enquiries are lost
- [ ] Give each service its own detail content, then bring back a "Discover more" link on the service cards in `src/pages/Services.tsx`
- [ ] Find the area for Modern Classic Mansion and Kids Bedrooms (both Uganda) so they match the "Area, Country" format
