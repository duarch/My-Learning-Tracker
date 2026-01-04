# My Learning Tracker

This repository contains a minimal static site built with Astro and Svelte that uses Markdown files as the canonical content source.

## Local development

- Install dependencies: `npm install`
- Run dev server: `npm run dev` (visit http://localhost:4321)
- Build for production: `npm run build`
- Preview build locally: `npm run preview`

## Content

All site content is in the `content/` folder as Markdown files. Add or edit markdown files there and push to `main` to update the site.

Key files:
- `content/home.md` — main page content
- `content/bucket-list.md` — checklist and bucket list
- `content/goals.md` — roadmap and goals
- `content/ideas.md` — design ideas and principles
- `content/manutencao.md` — maintenance log (changes and notes)

Pages are automatically generated for each main markdown file and are available at:
- `/` (Home)
- `/goals`
- `/bucket-list`
- `/ideas`
- `/manutencao`

## Deployment

The project is set up to deploy to GitHub Pages via GitHub Actions on push to `main`. The workflow builds the site and publishes the `dist/` output to GitHub Pages.

If your repo uses a project page (username.github.io/<repo>), `astro.config.mjs` already sets `base` to `/My-Learning-Tracker/`. Adjust `base` and `site` in `astro.config.mjs` if needed.

## Notes

- Design follows a minimal, typographic-first approach. Styles live in `src/layouts/Layout.astro` and can be extended.
- Emojis in content were normalized to text for accessibility and consistency.
