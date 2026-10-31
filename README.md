# New

Generated Landing Page site

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at your local development URL (typically `http://localhost:5173`)


## 🔍 SEO Configuration

This project was generated with automatic SEO metadata. Here's what's included and what you'll need to configure after deployment:

### Canonical URL & Domain
> **⚠️ Action required:** The canonical URL, sitemap, and robots.txt currently use a placeholder domain (`https://your-production-domain.com`). Replace this with your real domain in:
> - `index.html` → `<link rel="canonical" href="...">` and `og:url`
> - `public/robots.txt` → `Sitemap:` line
> - `public/sitemap.xml` → all `<loc>` entries


### Automatically Generated SEO
- **`index.html`** — `<title>`, `<meta description>`, `<link rel="canonical">`, Open Graph tags, Twitter Card tags, Schema.org JSON-LD
- **`public/sitemap.xml`** — one entry per page with correct slugs and priority
- **`public/robots.txt`** — allows all bots, disallows `/admin` and `/api/`, points to sitemap

### Page SEO Values
- **Homepage** — The homepage SEO title and description (from the first page's `seo` block in WebGeny) are emitted directly into the static `index.html` `<title>`, `<meta description>`, and Open Graph tags. Search engines read these immediately without JavaScript.
- **Other pages** — Each page's `seo.title` and `seo.description` values are available in `src/siteConfig.json` under each page's `seo` object. They are **not** emitted as separate static HTML files. To apply them at runtime, your app can read `siteConfig.json` and update `document.title` on route change.
- **Dynamic per-route static metadata** — Requires JavaScript execution or a future prerendering step. Not required for a working launch.

### React/Vite SEO Note
This is a client-side React/Vite application. Search engines crawl the static `index.html` metadata immediately, but dynamic per-route titles require JavaScript execution. For maximum SEO coverage on all routes, consider adding a prerendering step (e.g., `vite-plugin-prerender` or deploying on a platform with edge rendering) after launch. This is **not required** for a working launch.

## 📦 Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized static files.

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Vercel auto-detects Vite and deploys instantly

### Netlify
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) → "Add new site" → "Import from Git"
3. Build command: `npm run build`
4. Publish directory: `dist`

### Manual (Any Static Host)
1. Run `npm run build`
2. Upload the `dist` folder to your hosting provider

## 🛠 Tech Stack

- **React 18** - UI Library
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

---

Built with ❤️ using [Webgeny](https://webgeny.app)
