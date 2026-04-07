# ATG Digital — Copilot Instructions

Personal portfolio and service showcase site for Albert George (freelance web developer). Vanilla HTML/CSS/JS — no build step, no framework, no npm.

## Architecture

Single-page portfolio (`index.html`) + `privacy.html`. Clean separation of concerns:
- `index.html` — structure and content
- `styles.css` — all presentation; ~600 lines
- `index.js` — all interactions; ~300 lines (typewriter, scroll reveals, mobile menu, tilt, form submit)

## Tech Stack

- **Vanilla HTML5 / CSS3 / ES6+** — no libraries, no transpilation
- **Google Fonts** via CDN: Inter (body), Playfair Display (headings), JetBrains Mono (labels)
- **Formspree** for contact form email delivery (`https://formspree.io/f/yourformid` — placeholder must be replaced before deploy)
- **Browser APIs**: IntersectionObserver, Fetch, CSS transforms

## Code Style

- **CSS class naming**: BEM-inspired — `.nav__link`, `.btn--primary`, `.reveal--delay-1`
- **Design tokens**: All colors, spacing, and transitions are CSS custom properties on `:root`. Always use existing variables; never hard-code raw values
  - Key: `--accent` (#6c63ff), `--bg` (#0a0a0f), `--text` (#e8e6e3), `--card-bg` (#1a1a25)
  - Standard transition: `var(--transition)` → `0.35s cubic-bezier(0.4, 0, 0.2, 1)`
- **Formatting**: Prettier (2-space indent, no tabs). Run: `npx prettier --write .`

## Local Development

```bash
python -m http.server 8000   # or: npx serve .
```

No build step needed. GitHub Pages deploys directly from the repo.

## Pitfalls to Avoid

- **Formspree ID**: The form `action` contains a placeholder. Flag this if touching the contact form.
- **CSS variable scope**: Changing `--accent`, `--bg`, etc. has site-wide visual impact — check all usages before modifying.
- **Active nav link**: Currently set via `element.style.color` (inline style). Prefer adding/removing `.is-active` class if refactoring.
- **3D tilt + z-index**: The `perspective(1000px)` tilt on cards creates new stacking contexts. Be cautious adding fixed/sticky elements near them.
- **Scroll reveal thresholds**: `IntersectionObserver` uses `threshold: 0.15` + `rootMargin: '-40px'`. Major layout changes may require tuning.
- **Reveal delay classes**: Stagger delays only go up to `--delay-3`. Adding a 4th+ sibling requires a new CSS class.
