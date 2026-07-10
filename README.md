# Albert Digital Alchemy — Website

A responsive, animated marketing website for Albert Digital Alchemy, built with
React (Vite), Tailwind CSS v4, and Framer Motion.

## Design system

- **Palette:** deep violet -> magenta -> ember -> gold gradient (the "alchemy"
  transmutation), on a near-black void background and a soft lavender-white
  content background — following the client's purple/orange direction.
- **Type:** Fraunces (display headlines), Manrope (body), IBM Plex Mono
  (labels/eyebrows/data).
- **Signature element:** the animated "Alchemy Sigil" in the hero — six
  orbiting service disciplines feeding one glowing growth core.
- Motion patterns (gradient aurora field, service-card hover reveal) were
  adapted from community components on 21st.dev and recoloured/simplified to
  fit this brand system.

## Pages

- `/` Home — hero, why-choose-us, services preview, SEO section, CTA
- `/about` — company intro, founder/leadership profile, vision & mission
- `/services` — all 8 services, "why our services work"
- `/contact` — consultation form + direct contact details

All copy is sourced from the client-approved SEO content document; a few
structural additions (stat labels, section eyebrows, supporting sentences)
are marked inline in `src/data/content.js`.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm install
npm run build
```

This outputs a static site to `dist/`. The app uses hash-based routing
(`/#/about`, `/#/services`, `/#/contact`) so it can be deployed to **any**
static host with zero server configuration — no rewrite rules needed.

## Deploy

Upload the contents of `dist/` to any static host:

- **Netlify / Vercel:** drag-and-drop the `dist` folder, or connect the repo
  and set build command `npm run build`, publish directory `dist`.
- **GitHub Pages / any shared hosting / cPanel:** upload the contents of
  `dist/` to the web root.

## Contact form

The consultation form on `/contact` opens the visitor's email client with a
pre-filled message addressed to `contact@albertdigitalalchemy.com` — no
backend required. To capture submissions in a database or inbox tool
instead, swap the `handleSubmit` function in `src/pages/Contact.jsx` for a
call to a form backend (e.g. Formspree, Web3Forms) or your own API.

## Replacing assets

Brand assets live in `src/assets/` and `public/`:
- `logo-full.png` — navbar / footer logo
- `founder.jpeg` — About page leadership photo
- `favicon.ico`, `apple-touch-icon.png` — generated from the logo mark
