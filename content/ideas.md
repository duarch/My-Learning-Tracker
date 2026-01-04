---
title: "Design Ideas — My Learning Tracker"
date: 2026-01-04
tags: [design, ux, layout]
---

# Design Ideas — My Learning Tracker

## Selected approach: Modern minimalism with strong typography

### Turn this repository into an auto-deploy site on GitHub Pages using Astro + Svelte

#### Goals

- Markdown files will be the canonical content source: `content/home.md` (main site content), `content/bucket-list.md`, and `content/goals.md`.
- Allow content editing in markdown and automatic deployment to GitHub Pages using Astro with Svelte.
- Build a simple, fast, and elegant site to track learning progress.
- Add a `content/manutencao.md` (maintenance) file to record site changes and migrations.
- Make it easy to add new sections by adding markdown files.
- Use custom CSS for tighter visual control.

### Design Movement
**Swiss Modernism + Contemporary Minimalism** — Inspired by productivity tools like Notion, Linear and Obsidian. Focused on clarity, strong typographic hierarchy, and elegant functionality.

### Core Principles
1. **Hierarchy through typography**: Use contrast in size and weight to guide the eye rather than bright colors.
2. **Intentional negative space**: Generous spacing between sections for visual breathing room.
3. **Transparent functionality**: UI should be unobtrusive so content is the focus.
4. **Structural consistency**: 8px rhythm grid and harmonic proportions.

### Color Philosophy
- **Primary palette**: Neutral tones (gray, white, black) with a subtle blue/teal accent.
- **Rationale**: Reduces visual fatigue, lets content shine, communicates professionalism.
- **Emotional intent**: Confidence, clarity, focus, modernity.

### Layout Paradigm
- **Fixed sidebar navigation**: Left menu with main categories (Learning, Skills, Highlights, Bucket List).
- **Asymmetrical content area**: Main content with variable width and roomy cards.
- **Mobile-first**: Collapsible sidebar on mobile; single-column layout.

### Signature Elements
1. **Minimal dividers**: Subtle light-gray separators rather than heavy borders.
2. **Status badges**: Small badges to indicate progress (in-progress, completed, upcoming).
3. **Elevated cards**: Soft shadows with subtle hover effects.

### Interaction Philosophy
- **Smooth transitions**: Fade-ins and light slide-ups (200–300ms).
- **Subtle hovers**: Slight background color changes; no large transforms.
- **Immediate feedback**: Visual indicators for interactive states.

### Animation
- **Entrance**: Fade-in + slight slide-up (200ms) for cards on load.
- **Hover**: Quick background color shift (~50ms) and subtle elevation.
- **Transitions**: Use gentle easing (cubic-bezier) for state changes.

### Typography System
- **Display**: "Geist" or "Sohne" (modern sans, bold for titles).
- **Body**: "Inter" or "Geist" (clean sans, 400–500 weight for body text).
- **Hierarchy**:
  - H1: 32–36px, 700, line-height 1.2
  - H2: 24–28px, 600, line-height 1.3
  - Body: 14–16px, 400, line-height 1.6
  - Small: 12–13px, 500, line-height 1.5

---

## Applied Design Decisions
- ✓ Fixed sidebar navigation for clear organization
- ✓ Neutral palette with a subtle blue accent
- ✓ Strong typography (Geist/Inter)
- ✓ Generous spacing
- ✓ Soft-shadowed cards
- ✓ Status badges for visual progress
- ✓ Subtle, smooth transitions

