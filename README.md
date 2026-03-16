# Apex Classes — Next.js Website

> **Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS v4

---

## Project Structure

```
apex-classes/
├── app/
│   ├── globals.css          # Tailwind directives + custom CSS
│   ├── layout.tsx           # Root layout + <head> metadata
│   └── page.tsx             # Homepage (composes all sections)
│
├── components/
│   ├── layout/
│   │   ├── Topbar.tsx       # Top info bar (address, phone, email)
│   │   ├── Navbar.tsx       # Sticky desktop nav + hamburger
│   │   ├── MobileMenu.tsx   # Slide-in mobile drawer
│   │   └── Footer.tsx       # Footer with link columns
│   │
│   ├── sections/
│   │   ├── Hero.tsx         # Full-height hero with course panel
│   │   ├── TrustStrip.tsx   # Trust icons strip
│   │   ├── Courses.tsx      # 3×2 course card grid
│   │   ├── Numbers.tsx      # Stats + results on dark green bg
│   │   ├── WhyApex.tsx      # Features + timeline
│   │   ├── Testimonials.tsx # Topper testimonial cards
│   │   └── AdmissionCTA.tsx # Callback form CTA section
│   │
│   └── ui/
│       └── ScrollReveal.tsx # IntersectionObserver scroll animations
│
├── lib/
│   └── data.ts              # ← Edit ALL site content here
│
├── types/
│   └── index.ts             # TypeScript interfaces
│
└── public/
    └── logo.png             # ← Paste your logo here
```

---

## Quick Start

```bash
# 1. Install dependencies (already done if you used create-next-app)
npm install

# 2. Add your logo
# Copy logo.png into the /public folder

# 3. Run development server
npm run dev
# → http://localhost:3000

# 4. Build for production
npm run build
npm start
```

---

## Customisation

### Change content / text
All text, stats, course data, testimonials, and nav links live in one file:
```
lib/data.ts
```
Edit values there — no need to touch component files.

### Change brand colours
Brand colours are defined as CSS variables at the top of:
```
app/globals.css
```
```css
:root {
  --green:      #19573a;
  --green-dark: #0f3b27;
  --red:        #ed3237;
}
```

### Add a new page
Create `app/about/page.tsx` — Next.js App Router handles routing automatically.

---

## Deployment (Vercel — recommended)

```bash
npm install -g vercel
vercel
```

Or push to GitHub and import at [vercel.com](https://vercel.com).

---

## Brand
- **Green:** `#19573a`
- **Red:** `#ed3237`
- **Display font:** Cormorant Garamond (Google Fonts)
- **Body font:** Outfit (Google Fonts)
