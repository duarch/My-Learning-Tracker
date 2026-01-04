# Maintenance Guide

This guide explains how to maintain and update the Learning Tracker site.

## Quick Start

- Install dependencies: `npm install`
- Run dev server: `npm run dev` (visit http://localhost:4321)
- Build for production: `npm run build`
- Push to `main` → GitHub Actions auto-builds and deploys to GitHub Pages

## Editing Content

### Adding or updating course/goal entries

Edit `content/tracker.md`:
- Add new rows to the course/certification tables
- Use `⚡` for in-progress, `⏳` for soon, `✓` for completed
- Format: `| ⚡ | Year | [Link or Title] | Source |`

### Editing sidebar pages

The sidebar contains three main sections (defined in `src/layouts/Layout.astro`):

1. **Tracker** (`content/tracker.md`) — Main learning tracker with courses and goals
2. **Goals** (`content/goals.md`) — Career objectives and skill roadmap  
3. **Bucket List** (`content/bucket-list.md`) — Checklist and future plans

Edit these `.md` files in the `content/` folder and push to update the site.

## Adding New Pages

To add a new page to the sidebar:

1. Create a new markdown file in `content/` folder (e.g., `content/resources.md`)
2. Add YAML frontmatter:
   ```yaml
   ---
   title: "Resources"
   ---
   ```
3. Create a route file in `src/pages/` (e.g., `src/pages/resources.astro`):
   ```astro
   ---
   import { getEntryBySlug } from 'astro:content';
   import Layout from '../layouts/Layout.astro';
   
   const entry = await getEntryBySlug('blog', 'resources');
   const { Content } = await entry.render();
   ---
   
   <Layout>
     <article>
       <Content />
     </article>
   </Layout>
   ```
4. Add navigation link in `src/layouts/Layout.astro`:
   ```astro
   <li><a href={href('resources')}>Resources</a></li>
   ```
5. Commit and push to deploy

## Design & Styling

- **Layout**: `src/layouts/Layout.astro` contains all CSS and navigation
- **Color scheme**: Neutral + teal accent (#0ea5a5)
- **Typography**: Inter font with hierarchy (H1: 36px, H2: 28px, body: 15px)
- **Responsive**: Sidebar becomes horizontal nav on screens < 768px
- **Theme**: Light/dark mode toggle persisted in browser localStorage

To customize colors, edit the CSS `:root` variables in `Layout.astro`:
```css
:root {
  --bg: #ffffff;
  --muted: #f4f6f8;
  --text: #0b1220;
  --accent: #0ea5a5;
}
```

## Features

### Dark Mode Toggle
- Click the theme toggle in the top-right of the sidebar
- Preference is saved in browser localStorage
- Affects entire site automatically

### Functional Checkboxes
- Click checkboxes in tables to mark items complete/incomplete
- State is saved in your browser's localStorage
- Persists when you reload the page (but only on your device)
- **Note**: This is client-side only — not synced to the repository

## Change Log

- 2026-01-04: Dark mode toggle added; checkboxes made functional with localStorage persistence; comprehensive CSS styling implemented
- 2026-01-04: Emoji rendering fixed (⚡ ⏳ ✓); TOC removed from tracker; Design Ideas page removed; maintenance file renamed
- 2026-01-04: Project scaffolded with Astro + Svelte; markdown files moved to `content/`; GitHub Pages deployment configured
