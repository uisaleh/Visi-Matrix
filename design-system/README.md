Visi Matrix is a quiet, warm-neutral system for software marketing sites and product mockups: an off-white page, near-black ink, one amber accent, regular-weight type, and two surface styles: flat 4px cards, or the outline style (framed pages, 1px rules, square plates). Everything is set in light (default) and dark themes from the same tokens.

## Content fundamentals

- **Voice**: calm, confident, declarative. Short sentences that state what the product does: "Works autonomously, runs in parallel." "Hand work to teammates." No exclamation marks, no hype words.
- **Casing**: sentence case everywhere: headlines, buttons, nav. Headlines end with a full stop when they are sentences ("The new way to build software.").
- **Person**: speak about the product and to "you"/"your team"; "we" only in company and research copy.
- **Links and actions** carry a trailing glyph as text: → for navigation, ↗ for external, ⤓ for downloads. No emoji.
- **Numbers**: figures as digits; stats set in `type-lg` or larger.

## Color

- Page ground is `bg`; ink is `fg`. Light theme (`#f7f7f4` / `#26251e`) is the default; dark (`#14120b` / `#edecec`) swaps both.
- Raise content with **surface steps**, never shadows: `bg` → `card` → `card-01` … `card-04`. Hover moves one step deeper (`card` → `card-02`; `card-03` → `card-04`).
- Lines are `fg` at low alpha: `border-01` (2.5%) for card hairlines, `border-02` (10%) for dividers, `border-02-5` (20%) for ghost buttons, `border-03` (60%) for strong outlines.
- Secondary text is `text-sec` (fg 60%), tertiary `text-tertiary` (fg 40%). `text-sec` measures 4.1:1 on light `bg`: keep it to meta, captions and labels, never long body copy.
- `accent` (`#f8bd64`, amber) is the only brand hue. Use it as a **fill or mark**: the accent CTA (`vm-btn--accent`), eyebrow squares, active toggles, the featured plate edge, cover blocks. Text on an amber fill is always `on-accent` (dark ink, 9.1:1), never white.
- Amber as **text** uses `accent-ink`: `#8a5300` on light (5.9:1 on `bg`), `#f8bd64` on dark (11.1:1). Never set `accent` itself as text on a light ground (1.6:1).
- `accent-wash` (amber 20%) for highlighted cells, selection and promo strips; `accent-hover` for hover fills.
- Status: `ansi-green` for success and inserted lines, `ansi-red` for errors and removed lines, always with a sign (+/−) or a word. Diff rows use `line-inserted` / `line-removed`.
- Agent-timeline markers only: `timeline-thinking`, `timeline-grep`, `timeline-read`, `timeline-edit`.

## Typography

- One sans family at **weight 400** for nearly everything: headlines are large and light, not bold. `type-base-bold` is the rare exception.
- Scale: `type-2xl` 72 · `type-xl` 52 · `type-lg` 36 (section h2) · `type-md-lg` 26 (hero h1) · `type-md` 22 (feature h3) · `type-md-sm` 18 · `type-base` 16 (body) · `type-sm` 14 (nav, eyebrows) · `type-xs` 12.
- Tracking tightens as size grows (−0.03em at 72px) and opens slightly at small sizes (+0.01em at 14/12px). Line-height runs from 1.1 (display) to 1.5 (text). Balance headline wraps (`text-wrap: balance`).
- Section eyebrows: on card pages `type-sm` in `fg`; on outline pages the `eyebrow` style (mono 12px, uppercase, 0.06em, `text-sec`) with a 6px `accent` square before it. Both sit `v1` above the content.
- Editorial passages use `serif-body` (EB Garamond) in `text-sec`-like ink: manifesto and research copy only.
- Product mockups use the **system** stack (`type-product-*`, 11–13px) and the mono stack for code (`type-product-base-mono`).
- Below 900px the root font is 15px, so every rem value scales by 0.9375 (body 15px, hero h1 24.4px).
- Fonts: `sans` = Geist, `mono` = Geist Mono, `serif` = EB Garamond, all on Google Fonts.

## Spacing and layout

- Two units: **g** = 10px for horizontal and component spacing (`g0.5` 5 … `g3` 30) and **v** = 22.4px for vertical rhythm (`v1` 22.4 … `v8` 179.2; fractions in twelfths like `v3_12`).
- Page gutter `g2` (20px) on the header, every section and the footer.
- Sections: `v3` (67.2px) top and bottom; the hero gets `v5` (112px) on top; a closing headline section gets `v6` at the bottom.
- Content sits in `.container`, max `max-width-container` 1300px, centred. The grid is 24 equal columns with a `g1` gap (a 12-column variant uses `grid-gap` 12.8px).
- Headings sit `v1` above their content; cards stack `g1` apart.
- Header is fixed, `site-header-height` 52px (56px below 900px), on `bg` with no border.
- Breakpoints: 420, 660 (md), 900, 1140, 1380, 1470.

## Shape, borders and shadows

- `radius-xs` (4px) is the radius for cards, media frames, product windows and code. Buttons and badges are full pills (`radius-full`). Nothing in between on marketing surfaces; 8–24px radii appear only inside product and device mockups.
- Cards draw a 1px `border-01` hairline with `::before`, so the outline never shifts layout.
- Shadows are almost absent: `shadow-flyout` for menus; `shadow-2xl` / `shadow-device` only for a product window or phone floating over imagery.

## Outline page style

Use this for marketing and product pages, the default for new web pages. It is a framed, technical-drawing look.

- **Frame**: wrap the page in `.vm-frame` — the container (`max-width-container`) gets two 1px rails (`rule`) down its sides.
- **Sections** (`.vm-section`) stack inside the frame, each divided from the last by a 1px `rule`. Where a rule meets a rail, a 9px crosshair node (`node`, `rule-strong`) marks the crossing.
- **Plates** replace cards: square (`radius-none`), 1px `rule` border, `bg` or `card` ground (`vm-plate`, `--inset`), dashed `rule-strong` for placeholders (`--hollow`), a 2px `accent` edge for the one featured item (`--accent`).
- **Cell grids** (`.vm-cells`) run rail to rail with shared 1px borders: logo walls, stats, feature lists, pricing comparisons.
- **Dot field** (`.vm-dots`, `rule-strong` dots at `node` pitch) fills empty media areas and hero backdrops.
- Buttons stay pills; everything else inside the frame is square. No shadows; lines are always 1px.
- Labels: every section opens with an `eyebrow`. Numbered steps use mono numerals (01, 02, 03).

## Motion

- UI transitions run 0.14s (`duration`) on `cubic-bezier(.4, 0, .2, 1)`; sheets and backdrops run 0.25s on `ease-out-spring`. Respect `prefers-reduced-motion`: drop slide-ins.

## Components

- Use the `vm-*` classes in `components/bundle.css`: `Button` (pill accent, primary, secondary, ghost, text link), `Card`, `Plate`, `OutlineFrame`, `SiteHeader`, `SiteFooter`. Read each component's README before using it.
- Web pages default to the outline style: `OutlineFrame` + `Plate`. Use `Card` (4px, filled) for product mockups and denser in-app surfaces.
- Page skeleton, top to bottom: fixed header → hero (`type-md-lg` h1, then accent + ghost buttons `g1` apart, then a full-width product window at `radius-xs`) → feature rows (h3 + `vm-btn-text` link beside media) → testimonials in cards → changelog → closing CTA (`type-lg` + two buttons) → footer on `card`.
- Focus ring on every interactive element: 2px solid `fg`, offset 0.3ch.

## Iconography and imagery

- Icons are small monoline glyphs at text size, inheriting `fg` or `text-sec`; arrows and carets are typed glyphs (→ ↗ ↓ ⤓), not icons. No emoji, no illustrated icons.
- Imagery is product UI: real-looking app windows on muted landscape wallpapers, framed at `radius-xs`. No stock photos of people, no gradients.
- No logo ships with this system: set the wordmark "Visi Matrix" in `type-base` on the header.
