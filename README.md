# VisiMatrix — web + app UI on the Visi Matrix design system

A Next.js 15 (App Router, TypeScript) rebuild of visimatrix.com: the marketing site and the signed-in app, styled entirely by the **Visi Matrix** design system (warm neutrals, amber `#f8bd64`, outline page style).

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Where the design lives

| Path | What |
| --- | --- |
| `design-system/tokens.json` | Source of truth: colours (light + dark), type scale, spacing, radius, shadows, layout. Same file as the Visi Matrix design system. |
| `design-system/README.md` | Usage rules (brand book). |
| `scripts/build-tokens.py` | Compiles tokens → `app/styles/tokens.css`. Run `npm run tokens` after editing tokens. |
| `app/styles/tokens.css` | Generated CSS variables + type classes (`.type-lg`, `.eyebrow`…). Don't edit by hand. |
| `app/styles/visi-matrix.css` | The component layer: `vm-btn`, `vm-frame`, `vm-section`, `vm-plate`, `vm-cells`, `vm-table`, forms, app shell… Uses tokens only. |

Theme: `data-theme="light" | "dark"` on `<html>` (toggle in header/sidebar, remembered per browser).

## Routes

**Marketing** `app/(marketing)` — `/`, `/features`, `/prices`, `/about`, `/contact`, `/blog`, `/blog/[slug]`, `/docs`, `/privacy-policy`, `/terms-and-conditions`, `/refund-policy`
**Auth** `app/(auth)` — `/login`, `/register`
**App** `app/(app)` — mirrors the live app: `/projects` (list + New project modal), `/projects/[id]` with tabs Overview · Prompts · Analyzed Reports (report drawer) · Site Audit · Citations · Competitive Intel · Settings; workspace `/billing`, `/members`, `/account`

## Content & data

- `lib/site.ts`, `lib/blog.ts`, `content/legal/*.md` — copy taken from the live site.
- `lib/app-data.ts` — **sample data** for app screens, modelled on the live VisiMatrix workspace. Swap for your API; components only read these shapes.
- Forms are UI only (no submit handlers wired to a backend).

## Notes

- Fonts load from Google Fonts (Geist, Geist Mono, EB Garamond).
- Amber is a fill colour on light backgrounds; amber text uses `--accent-ink` for contrast.
