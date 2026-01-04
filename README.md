# My Learning Tracker

A minimal, markdown-driven learning tracker site built with Astro and Svelte. Track courses, goals, and learning progress with a clean, minimalist design.

## Features

✨ **Dark/Light Mode** — Theme toggle in sidebar persisted to browser localStorage  
✓ **Functional Checkboxes** — Check off completed items; state saves to browser  
📱 **Responsive Design** — Adapts from desktop sidebar layout to mobile horizontal nav  
🎨 **Swiss Minimalism** — Typography-first design with teal accent and neutral palette  
⚡ **Instant Deploy** — Push to `main` → GitHub Actions auto-builds and deploys to Pages

## Local Development

```bash
npm install              # Install dependencies
npm run dev              # Start dev server (http://localhost:4321)
npm run build            # Build for production
npm run preview          # Preview production build locally
```

## Content Structure

All content lives in the `content/` folder as Markdown files:

- **`content/tracker.md`** — Main page with courses, certifications, and learning progress
- **`content/goals.md`** — Career objectives and skill roadmap  
- **`content/bucket-list.md`** — Checklist and future plans

Edit these files and push to `main` to update the site automatically.

## How to Edit Content

### Add or update courses/goals
Edit the markdown tables in `content/tracker.md` (or other files):
```markdown
| ✓ | 2025 | [Course Name](link) | Source |
| ⚡ | | [In Progress Course](link) | Source |
| ⏳ | | [Coming Soon](link) | Source |
```

Use these status indicators:
- `✓` = Completed
- `⚡` = In progress  
- `⏳` = Planned/soon

### Mark checkboxes
Click checkboxes in tables to toggle completion. Your selections are saved in browser localStorage (device-specific, not synced to repo).

### Add a new page
See **MAINTENANCE.md** for detailed instructions on adding new pages to the sidebar.

## Deployment

Automatic deployment to GitHub Pages:
1. Push changes to `main` branch
2. GitHub Actions workflow automatically builds the site
3. Site updates within ~1-2 minutes at https://duarch.github.io/My-Learning-Tracker/

No manual deployment steps needed — Git push triggers everything.

## Maintenance

See **MAINTENANCE.md** for:
- Content editing guide
- How to add new pages  
- Design system and styling info
- Change log

## Design

- **Colors**: Neutral palette (light mode) with teal accent (#0ea5a5)  
- **Typography**: Inter font with hierarchy (H1: 36px, H2: 28px, body: 15px)
- **Layout**: Fixed 220px sidebar; responsive at 768px breakpoint
- **Theme**: Light/dark mode toggle with localStorage persistence

## Notes

- **Checkboxes persist locally** — State is saved in browser localStorage for the current device only. Refreshing the page preserves your selections.
- **Theme preference saved** — Your light/dark mode choice is remembered across sessions.
- **Design Ideas** — Philosophy and design principles documented in `content/ideas.md`
- **Maintenance log** — Track changes and updates in `MAINTENANCE.md`
