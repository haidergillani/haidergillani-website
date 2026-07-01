# haidergillani.com

Personal portfolio of **Haider Gillani** — an interactive world map of the cities I've lived and built in, told through Minerva University's global rotation and the work that came with each stop.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, a custom **d3-geo** world map, and **Framer Motion**. Fully static, zero-config on Vercel.

---

## Editing content

Everything on the site is driven from a single file:

- **`lib/data.ts`** — your profile, the map pins (cities + coordinates + companies), the projects, and the companies wall. Edit here to change anything.

To add a city: add an entry to the `locations` array with its `coordinates: [longitude, latitude]`. The pin, its hover card, and its timeline entry all generate automatically.

---

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

---

## Deploying to Vercel

**Option A — Dashboard (recommended, no CLI):**

1. Go to [vercel.com/new](https://vercel.com/new) and **Import** this GitHub repo.
2. Framework preset auto-detects **Next.js** — no settings to change. Click **Deploy**.
3. Every `git push` to `main` now redeploys automatically.

**Option B — CLI:**

```bash
npm i -g vercel
vercel            # first run links the project
vercel --prod     # production deploy
```

## Connecting the domain (bought via Spaceship)

1. In the Vercel project → **Settings → Domains**, add `haidergillani.com` and `www.haidergillani.com`.
2. In **Spaceship → DNS management** for the domain, add the records Vercel shows you. Typically:
   - `A` record — host `@` → `76.76.21.21`
   - `CNAME` record — host `www` → `cname.vercel-dns.com`
3. Wait for DNS to propagate (minutes to a couple of hours). Vercel issues the SSL certificate automatically.

---

## Structure

```
app/
  layout.tsx        # fonts, metadata, global shell
  page.tsx          # section composition
  globals.css       # theme, background, scrollbar
components/
  WorldMap.tsx      # interactive d3-geo map + hover cards  ← the centerpiece
  Hero.tsx          # headline + map + stats
  Journey.tsx       # scroll-reveal timeline of cities
  Work.tsx          # projects grid + companies wall
  Footer.tsx        # contact + socials
  Nav.tsx, SectionHeading.tsx
lib/
  data.ts           # ← ALL content lives here
  geo.ts            # map projection + country paths
```
