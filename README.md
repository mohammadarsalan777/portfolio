# Mohammad Arsalan — Developer Portfolio

A premium, animated, fully responsive portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Tech Stack

- **React 18 + Vite** — fast dev server and build
- **Tailwind CSS** — utility-first styling with a custom design token system
- **Framer Motion** — page-load, scroll-reveal, hover, and tilt animations
- **React Icons** (`react-icons`) — Feather + Simple Icons sets
- **React Router** — routing shell (single-page, ready to extend)
- **React Type Animation** — hero typing effect
- **EmailJS** — contact form delivery, no backend required

## Getting Started

```bash
npm install
npm run dev      # start local dev server
npm run build    # production build to /dist
npm run preview  # preview the production build
```

## Configuration

### 1. Contact form (EmailJS)

Create a free account at [emailjs.com](https://www.emailjs.com/), then set up a Service and Template.
Open `src/sections/Contact.jsx` and replace:

```js
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
```

with your real IDs. Your EmailJS template should expect `from_name`, `from_email`, `subject`, and `message` variables.

### 2. GitHub stats

Open `src/sections/GithubStats.jsx` and replace:

```js
const GITHUB_USERNAME = 'your-username'
```

with your GitHub handle. This section renders live images from `github-readme-stats`, `github-readme-streak-stats`, and `ghchart.rshah.org` — no API keys required.

### 3. Resume

Add your resume PDF at `public/resume.pdf`. The "Download Resume" button in the hero already links to `/resume.pdf`.

### 4. Content

All copy lives in `src/data/`:

- `content.js` — services, experience, testimonials, certificates, stats, about cards
- `projects.js` — project cards (title, description, features, tech, links, image)
- `skills.js` — skill groups and progress levels
- `socials.js` — social links (GitHub, LinkedIn, Twitter, Email)

Update these files with your own information — no need to touch component code.

### 5. Colors & type

The palette and fonts live in `tailwind.config.js` (`theme.extend.colors`, `theme.extend.fontFamily`) and are loaded via Google Fonts in `index.html` (Poppins for display type, Inter for body copy).

## Folder Structure

```
src/
  components/   Reusable UI: Navbar, Footer, Reveal, ProjectCard, TiltCard, etc.
  sections/     One file per page section (Hero, About, Skills, Projects, ...)
  data/         Static content consumed by sections
  hooks/        useScrollProgress, useActiveSection
  utils/        Small helpers (cn.js)
  App.jsx       Composes all sections
  main.jsx      App entry point
```

## Notes

- Respects `prefers-reduced-motion`.
- All animated counters, progress bars, and reveals trigger once, on scroll into view.
- Mobile menu, active-section nav indicator, and scroll progress bar are all wired up in `Navbar.jsx` / `ScrollProgressBar.jsx`.
