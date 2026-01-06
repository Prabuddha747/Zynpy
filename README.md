# Zynpy Landing Page

A modern, futuristic landing page for Zynpy - a UPI-first group money management platform. Built with React.js, Vite, and Framer Motion.

## Features

- 🎨 Modern, futuristic design with gradient animations
- 📱 Fully responsive design for all devices
- ⚡ Smooth scroll-triggered animations
- 🎯 Clean, professional UI/UX following American/European standards
- 🚀 Optimized for performance and SEO

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **CSS3** - Styling with modern features

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
landingPage/
├── src/
│   ├── components/       # React components
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── ProblemSection.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Features.jsx
│   │   ├── BuiltForHosts.jsx
│   │   ├── Transparency.jsx
│   │   ├── SocialProof.jsx
│   │   ├── FinalCTA.jsx
│   │   └── Footer.jsx
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html
├── package.json
├── vite.config.js
└── vercel.json           # Vercel deployment config
```

## Deployment

This project is configured for deployment on Vercel. The `vercel.json` file contains the necessary configuration.

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect the Vite configuration and deploy

Or use Vercel CLI:
```bash
npm i -g vercel
vercel
```

## Design Philosophy

The landing page follows a clean, modern fintech aesthetic with:

- **Color Palette**: Blue-violet gradients for primary actions, soft backgrounds for readability
- **Typography**: Inter font family for clarity and professionalism
- **Animations**: Subtle, scroll-triggered animations that enhance rather than distract
- **Spacing**: Generous whitespace for reduced cognitive load
- **Trust Building**: Transparent, calm design that builds confidence

## License

© 2024 Zynpy. All rights reserved.

