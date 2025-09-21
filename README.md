# Portfolio Site

A complete Next.js portfolio website with TypeScript, Contentlayer for MDX project management, TailwindCSS styling, and GDPR-compliant analytics integration.

## 🚀 Stack Overview

- **Next.js 13** with App Router and TypeScript (strict mode)
- **Contentlayer** for MDX-based project ### 5. Analytics Not Loading

**Issue:** GA4 or Clarity not tracking
- Check environment variables are set correctly
- Verify user accepted cookies in banner
- Check browser console for script loading errors
- Ensure IDs are valid and active

### 6. Verifica Analytics in Funzione

**Come testare se Analytics funziona:**
1. Apri DevTools → Network tab
2. Visita http://localhost:3000
3. Accetta i cookie nel banner
4. Verifica caricamento script:
   - `googletagmanager.com/gtag/js?id=G-1F7K6071WF` per GA4
   - `clarity.ms/tag/td44xmnqzc` per Clarity
5. Controlla le dashboard:
   - [Google Analytics Real-Time](https://analytics.google.com) 
   - [Microsoft Clarity Live](https://clarity.microsoft.com) management
- **TailwindCSS** with @tailwindcss/typography for styling
- **Minimal shadcn-compatible UI components** (easily replaceable)
- **SEO optimization** (per-page metadata, sitemap, robots, JSON-LD)
- **SEO-ready Open Graph tags** (static images can be added manually)
- **Cookie consent system** for GDPR compliance (GA4 + Microsoft Clarity)
- **Git-based workflow** (no database required)

## 📁 Folder Structure

```
├── app/                          # Next.js App Router
│   ├── (site)/                   # Route group for main site
│   │   ├── layout.tsx           # Root layout with header/footer
│   │   ├── page.tsx             # Home page
│   │   ├── skills/page.tsx      # Skills page
│   │   ├── services/page.tsx    # Services page
│   │   ├── contact/page.tsx     # Contact page
│   │   └── projects/
│   │       ├── page.tsx         # Projects archive
│   │       └── [slug]/
│   │           ├── page.tsx     # Project detail
│   │           └── opengraph-image.tsx
│   ├── sitemap.ts              # Dynamic sitemap
│   └── robots.ts               # Robots.txt
├── components/                  # React components
│   ├── ui/                     # Basic UI components (shadcn compatible)
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── separator.tsx
│   ├── header.tsx              # Site header with navigation
│   ├── footer.tsx              # Site footer
│   ├── cookie-banner.tsx       # GDPR cookie consent
│   ├── analytics.tsx           # Analytics manager (GA4 + Clarity)
│   ├── project-card.tsx        # Project preview card
│   ├── project-meta.tsx        # Project metadata display
│   ├── gallery.tsx             # Image gallery component
│   ├── kpi.tsx                 # KPI metric display
│   └── structured-data.tsx     # JSON-LD injection
├── content/                    # MDX content
│   └── projects/              # Project files
│       └── example-case/
│           └── index.mdx
├── lib/                       # Utility functions
│   ├── utils.ts              # General utilities (cn helper)
│   └── consent.ts            # Cookie consent management
├── public/                   # Static assets
│   ├── projects/            # Project images
│   └── favicon.ico
├── scripts/                 # CLI tools
│   └── new-project.ts      # Project scaffolding script
└── styles/
    └── globals.css         # Global styles + Tailwind
```

## 🛠️ Prerequisites

- **Node.js 18+**
- **Git** for version control
- **npm** package manager

## ⚡ Quick Setup

1. **Clone and install dependencies:**
```bash
git clone <repository-url>
cd portfolio-site
npm install --legacy-peer-deps
```

2. **Set up environment variables:**
```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=G-1F7K6071WF      # Google Analytics ID (già configurato)
NEXT_PUBLIC_CLARITY_ID=td44xmnqzc    # Microsoft Clarity ID (già configurato)
```

3. **Start development server:**
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site.

## 📝 Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Full site URL for SEO and OG images | ✅ | `http://localhost:3000` |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 ID | ❌ | - |
| `NEXT_PUBLIC_CLARITY_ID` | Microsoft Clarity Project ID | ❌ | - |

## 📚 Content Management

### Adding New Projects

Use the built-in CLI to create new projects:

```bash
npm run new:project
```

This interactive script will:
- Prompt for project details (title, date, roles, stack, etc.)
- Generate a unique slug
- Create the project directory structure
- Generate starter MDX content

### Project Structure

Each project lives in `content/projects/<slug>/index.mdx` with this front-matter:

```yaml
---
title: "Project Title"           # Required
date: "2024-01-15"              # Required (YYYY-MM-DD format)
roles: ["Design", "Frontend"]    # Array of roles
stack: ["Next.js", "Tailwind"]  # Technology stack
summary: "Brief description"     # Short summary for cards/SEO
impact: ["+40% conversions"]     # Results/impact metrics
cover: "/projects/slug/cover.jpg" # Cover image path
gallery: ["/projects/slug/1.jpg"] # Gallery images
links: {"live": "url", "repo": "url"} # External links
draft: false                     # Hide from production if true
---
```

### Images

Place project images in `/public/projects/<slug>/`:
```
public/projects/my-project/
├── cover.jpg          # Main cover image
├── screen-1.jpg       # Gallery images
└── screen-2.jpg
```

## 🎨 Customizing UI Components

The project includes minimal UI components compatible with shadcn/ui. To replace them:

1. **Install shadcn/ui:**
```bash
npx shadcn-ui@latest init
```

2. **Replace individual components:**
```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add badge
```

The existing component APIs are designed to be compatible with shadcn/ui.

## 📊 Analytics Setup

### Google Analytics 4

1. Create a GA4 property at [Google Analytics](https://analytics.google.com)
2. Copy the Measurement ID (format: G-XXXXXXXXXX)
3. Add to `.env.local`: `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`
4. Users must accept "Analytics" in the cookie banner to load GA4

### Microsoft Clarity

1. Create a project at [Microsoft Clarity](https://clarity.microsoft.com)
2. Copy the Project ID
3. Add to `.env.local`: `NEXT_PUBLIC_CLARITY_ID=xxxxxxxxx`
4. Users must accept "Heatmap" in the cookie banner to load Clarity

**Important:** No tracking scripts load until users explicitly consent via the cookie banner.

## 📊 Analytics Configuration (Current Setup)

### Google Analytics 4
- **ID configurato:** `G-1F7K6071WF`
- **Dashboard:** [Google Analytics](https://analytics.google.com)
- **Codice implementato:**
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-1F7K6071WF"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-1F7K6071WF');
</script>
```

### Microsoft Clarity
- **ID configurato:** `td44xmnqzc`
- **Dashboard:** [Microsoft Clarity](https://clarity.microsoft.com)
- **Codice implementato:**
```html
<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "td44xmnqzc");
</script>
```

### 🔒 Privacy & GDPR
- **Caricamento condizionale:** Gli script si caricano SOLO dopo consenso utente
- **Banner cookie:** Permette scelta granulare (Analytics separato da Heatmap)  
- **Conformità GDPR:** Nessun tracking senza consenso esplicito
- **Storage locale:** Preferenze salvate in localStorage

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub:**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy to Vercel:**
   - Connect your GitHub repository on [Vercel](https://vercel.com)
   - Set environment variables in Vercel dashboard
   - Deploy automatically on every push

3. **Set production URL:**
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Other Platforms

The project works on any Node.js hosting platform:
- Netlify
- Railway
- DigitalOcean App Platform
- Self-hosted with PM2

## 🔍 SEO Features

- **Per-page metadata:** Unique titles and descriptions
- **Dynamic sitemap:** Auto-generated from content
- **Robots.txt:** SEO-friendly crawling rules
- **Open Graph meta tags:** SEO-friendly social sharing
- **JSON-LD structured data:** Person and Website schemas
- **Canonical URLs:** Proper URL canonicalization

## 🎯 Performance Features

- **Static generation:** Fast page loads with SSG
- **Image optimization:** Next.js automatic image optimization
- **Bundle optimization:** Automatic code splitting
- **Core Web Vitals:** Optimized for performance metrics

## 🛠️ Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run new:project  # Create new project (interactive)
```

## ⚠️ Common Issues & Solutions

### 1. Build Errors

**Error:** "Cannot find module 'contentlayer/generated'"
```bash
# Solution: Build contentlayer first
npx contentlayer build
npm run build
```

### 2. Image Issues

**Error:** Images not loading from `/public/projects/`
- Ensure images are placed in correct directory structure
- Check image paths in MDX front-matter match actual files
- Images must be in `/public/` to be served statically

### 3. Date Format

**Error:** Invalid date in project front-matter
- Use exact format: `YYYY-MM-DD` (e.g., `2024-01-15`)
- No time zones or time stamps

### 4. Analytics Not Loading

**Issue:** GA4 or Clarity not tracking
- Check environment variables are set correctly
- Verify user accepted cookies in banner
- Check browser console for script loading errors
- Ensure IDs are valid and active

### 5. Draft Projects Visible

**Issue:** Draft projects showing in production
- Set `draft: false` in project front-matter
- Restart development server after changes
- Check `NODE_ENV` is set to `production` in build

## 🎨 Customization Guide

### Changing Colors & Styling

1. **Edit Tailwind config:** `tailwind.config.ts`
2. **Modify global styles:** `styles/globals.css`
3. **Update component styles:** Individual component files

### Adding New Pages

1. Create new page in `app/(site)/new-page/page.tsx`
2. Add navigation link in `components/header.tsx`
3. Update sitemap in `app/sitemap.ts`

### Modifying Contact Info

Edit contact details in `app/(site)/contact/page.tsx`:
- Email address
- Phone number
- WhatsApp link
- Business hours
- Google Maps embed

### Adding New Service Categories

Edit services array in `app/(site)/services/page.tsx`.

### Updating Skills

Edit skill categories in `app/(site)/skills/page.tsx`.

## 🔒 GDPR & Privacy

- **Cookie consent:** Granular opt-in for analytics and heatmaps
- **No tracking by default:** Scripts only load after explicit consent
- **Local storage:** Consent preferences stored locally
- **Transparent:** Clear communication about data usage

For advanced GDPR compliance needs, consider integrating a full Consent Management Platform (CMP).

## 📄 License

This project is for portfolio use. Customize freely for your own projects.

## 🆘 Support

- Check this README for common solutions
- Review component comments for customization notes
- Test in development mode before deploying
- Use browser dev tools to debug issues

---

**Ready to build your portfolio?** Start by running `npm run dev` and customize the content to match your projects and style! 🚀