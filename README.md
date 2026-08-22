# EKOIMPEX – eko.ee

A modern, multilingual website for EKOIMPEX, specializing in Goodyear lubricants and industrial additives. Built with [Astro](https://astro.build/) for optimal performance and user experience.

**Live Site:** [https://eko.ee](https://eko.ee)

## 🌟 Features

- **Multilingual Support** – Estonian, English, and Russian with automatic language detection
- **Dark Mode** – Toggle between light and dark themes for comfortable viewing
- **Responsive Design** – Fully optimized for mobile, tablet, and desktop devices
- **Performance Optimized** – Fast loading times with inlined stylesheets and optimized assets
- **Accessibility** – Built with semantic HTML and accessible component patterns
- **SEO Friendly** – Proper meta tags, structured data, and clean URL structure
- **Analytics** – Integrated Vercel Analytics and Speed Insights

## 🛠️ Tech Stack

- **Framework:** [Astro 5](https://astro.build/) – Static site generation with islands architecture
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) – Utility-first CSS framework
- **Language:** [TypeScript](https://www.typescriptlang.org/) – Type-safe development
- **Icons:** [Lucide Astro](https://github.com/lucide-icons/lucide-astro) – Beautiful icon library
- **Fonts:** [Fontsource](https://fontsource.org/) – Self-hosted web fonts (Inter, Montserrat)
- **Analytics:** [Vercel Analytics](https://vercel.com/analytics) & [Speed Insights](https://vercel.com/speed-insights)
- **Deployment:** [GitHub Pages](https://pages.github.com/)

## 📦 Development Setup

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm installed
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/eko.ee.git
cd eko.ee

# Install dependencies
npm install
```

### Development

```bash
# Start development server (http://localhost:3000)
npm run dev

# Format code with Prettier
npm run format

# Run linting checks
npm run lint

# Lint and fix TypeScript/JavaScript files
npm run lint --fix
```

### Production

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## 📁 Project Structure

```
src/
├── components/        # Reusable Astro components
│   ├── About.astro
│   ├── BusinessLines.astro
│   ├── Contact.astro
│   ├── Footer.astro
│   ├── Header.astro
│   ├── Hero.astro
│   ├── LanguageSwitcher.astro
│   ├── Logo.astro
│   ├── MobileStickyNav.astro
│   ├── PartnerForm.astro
│   └── ThemeToggle.astro
├── layouts/           # Page layouts
│   └── Layout.astro
├── pages/             # Page routes
│   ├── index.astro
│   └── [lang]/
│       ├── index.astro
│       └── partner.astro
├── i18n/              # Internationalization
│   └── ui.ts
├── assets/            # Images, icons, etc.
├── types.ts           # TypeScript type definitions
├── constants.ts       # Application constants
└── index.css          # Global styles
```

## 🌐 Internationalization (i18n)

The site supports automatic language detection and manual switching:

- **Estonian (et)** – Default locale
- **English (en)**
- **Russian (ru)**

URLs are prefixed with the language code (e.g., `/et/`, `/en/`, `/ru/`). The site detects the browser language and redirects accordingly.

## 🎨 Customization

### Colors & Theme

Colors are defined in Tailwind config and can be customized:
- `goodyear-gold` – Primary brand color
- `baltic-blue` – Secondary accent color
- `industrial-grey` – Background color

### Content & Copy

Multilingual content is managed via the i18n/ui.ts file. Update translations there to change site copy.

## 📋 Quality Assurance

The project includes:

- **ESLint** – Code quality and style checking
- **Prettier** – Automatic code formatting
- **Husky & Lint-Staged** – Git hooks for pre-commit linting and formatting
- **TypeScript** – Static type checking

```bash
# Run all checks before committing
npm run lint
npm run format
```

## 📝 License

This project is part of EKOIMPEX. All rights reserved.

## 📞 Contact

For questions or inquiries about EKOIMPEX, visit [eko.ee](https://eko.ee) or use the contact form on the website.
