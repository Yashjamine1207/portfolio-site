# Yash Jamine — Engineering Portfolio

A world-class, technically credible engineering portfolio website built with **Next.js 16**, **Tailwind CSS v4**, and **React Three Fiber (Three.js)**.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# → http://localhost:3000

# Build for production
npm run build

# Start production server
npm start
```

## 📦 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.2.4 (App Router) |
| Styling | Tailwind CSS v4 + Custom CSS Design System |
| 3D | React Three Fiber + Three.js + Drei |
| Fonts | Inter + JetBrains Mono (Google Fonts) |

## 🗂 Project Structure

```
portfolio-site/
├── public/                    # Static assets
├── src/
│   ├── app/
│   │   ├── globals.css        # Design system (CSS variables, cards, etc.)
│   │   ├── layout.js          # Root layout, metadata, fonts
│   │   └── page.js            # Main page (all sections)
│   ├── components/
│   │   ├── Navbar.jsx         # Sticky blur nav + mobile menu
│   │   ├── Hero.jsx           # Hero section + CTAs
│   │   ├── HeroScene.jsx      # Three.js 3D wireframe scene
│   │   ├── About.jsx          # Professional summary
│   │   ├── CoreStrengths.jsx  # 4 capability pillars
│   │   ├── FeaturedProjects.jsx # 8 expandable case studies
│   │   ├── AIDigitalTwin.jsx  # AI/ML project section
│   │   ├── Internships.jsx    # 5 experience cards
│   │   ├── CurrentResearch.jsx # MSc thesis
│   │   ├── AdditionalProjects.jsx # Compact project cards
│   │   ├── ToolsMethods.jsx   # Technical toolkit
│   │   ├── Contact.jsx        # Contact details + CTAs
│   │   ├── Footer.jsx         # Professional footer
│   │   ├── ThemeToggle.jsx    # Dark/light mode toggle
│   │   └── ScrollReveal.jsx   # Intersection Observer animations
│   └── data/
│       ├── projects.js        # All project data
│       ├── internships.js     # Internship/research data
│       └── tools.js           # Tools + current research data
├── package.json
├── next.config.mjs
├── postcss.config.mjs
├── jsconfig.json
├── eslint.config.mjs
└── .gitignore
```

## ✨ Features

- **3D Hero Scene** — Wireframe engineering sculpture with particle effects
- **Dark / Light Mode** — CSS variable theming with localStorage persistence
- **Expandable Project Cards** — Click to reveal full case study details
- **Scroll Reveal Animations** — Intersection Observer with reduced-motion support
- **Responsive Design** — Mobile-first with breakpoints at 640px and 768px
- **SEO Optimised** — Meta tags, Open Graph, semantic HTML

## 🌐 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect the GitHub repository to [vercel.com](https://vercel.com) for automatic deployments.

## 📋 Dependencies

### Production
- `next` — React framework with SSR/SSG
- `react` / `react-dom` — UI library
- `three` — 3D graphics engine
- `@react-three/fiber` — React renderer for Three.js
- `@react-three/drei` — Useful helpers for R3F

### Development
- `tailwindcss` / `@tailwindcss/postcss` — Utility-first CSS
- `eslint` / `eslint-config-next` — Linting

## 📝 License

All content © Yash Jamine. Project outcomes derived from verified engineering work.
