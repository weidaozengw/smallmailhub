# MailPilot — Email Marketing Reviews Site

Astro static site for reviewing email marketing tools for small businesses.

## Quick start (local dev)

```bash
bun install
bun run dev      # http://localhost:4321
bun run build    # builds to ./dist
bun run preview  # preview built site
```

## Deploy to Cloudflare Pages

1. Buy `smallmailhub.com` via Cloudflare Registrar (~$10.46/year)
2. Push this folder to a GitHub repo
3. In Cloudflare Pages dashboard: Connect to Git → select repo
4. Build command: `bun run build`
5. Build output directory: `dist`
6. Add custom domain: `smallmailhub.com`

## Content structure

```
src/content/
├── reviews/        # Individual tool reviews (one .md per product)
├── alternatives/   # "X alternatives" pages (one .md per competitor)
└── lists/          # Best-of list pages (one .md per list)
```

### To add a new review

Create `src/content/reviews/<product-slug>.md`:

```markdown
---
title: "Product Name Review (2026)"
description: "..."
pubDate: 2026-07-02
targetKeyword: "product review"
productName: "ProductName"
rating: 4.5
pros: [...]
cons: [...]
pricing: "$X/mo"
bestFor: "..."
affiliateUrl: "https://..."
draft: false
---

# Review content here
```

### To add a new alternatives page

Create `src/content/alternatives/<product>-alternatives.md`:

```markdown
---
title: "Best Product Alternatives (2026)"
description: "..."
pubDate: 2026-07-02
targetKeyword: "product alternatives"
replacedProduct: "ProductName"
alternatives: ["Alt1", "Alt2", ...]
draft: false
---

# Alternatives content here
```

## Editing the design

- `src/layouts/BaseLayout.astro` — site shell, nav, footer
- `src/pages/index.astro` — homepage
- `astro.config.mjs` — site URL, integrations

## Tools

- Astro 5 (static site generator)
- @astrojs/sitemap (auto-generated sitemap)
- No JavaScript framework — pure HTML + CSS for max SEO and min bundle

## Cost

- Domain: $10.46/year (Cloudflare at-cost)
- Hosting: $0 (Cloudflare Pages free tier)
- Content: $0 (AI-generated, you review)
- Tools: $0 (all free)

Total: **$10.46/year**