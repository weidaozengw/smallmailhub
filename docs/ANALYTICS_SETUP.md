# Analytics & Search Console Setup

After smallmailhub.com is live on Cloudflare Pages, complete these 4 steps in order:

## Step 1: Google Search Console (free, 5 min)

1. Go to https://search.google.com/search-console/
2. Click "Add property" → choose "URL prefix"
3. Enter: `https://smallmailhub.com`
4. Choose verification method: **HTML tag** (easiest with our setup)
5. Copy the meta tag content (the random string in `content="..."`)
6. In Cloudflare Pages dashboard:
   - Go to your `mailpilot` project → Settings → Environment variables
   - Add variable: `PUBLIC_GSC_VERIFICATION` = the random string
   - Save and trigger a redeploy (Settings → Deployments → Retry)
7. Back in Search Console, click "Verify"
8. Once verified, submit your sitemap:
   - Sitemaps section → Enter: `sitemap-index.xml`
   - Submit

## Step 2: Google Analytics 4 (free, 5 min)

1. Go to https://analytics.google.com/
2. Create a new GA4 property for smallmailhub.com
3. Choose "Web" data stream → enter `https://smallmailhub.com`
4. Copy your Measurement ID (format: `G-XXXXXXXXXX`)
5. In Cloudflare Pages dashboard:
   - Add environment variable: `PUBLIC_GA4_ID` = your Measurement ID
   - Save and redeploy
6. Test by visiting your site in incognito mode, then check GA4 Realtime report

## Step 3: Bing Webmaster Tools (free, 3 min, optional but recommended)

1. Go to https://www.bing.com/webmasters
2. Sign in with Microsoft account
3. Add site: `https://smallmailhub.com`
4. Verify via DNS TXT record (Cloudflare handles this automatically)
5. Submit sitemap: `https://smallmailhub.com/sitemap-index.xml`

## Step 4: Cloudflare Web Analytics (free, instant)

1. In Cloudflare dashboard → smallmailhub.com → Analytics → Web Analytics
2. Click "Enable"
3. No code needed — Cloudflare injects automatically since your DNS is on Cloudflare
4. Gives you server-side analytics without cookies (privacy-friendly, no GDPR banner needed)

## Verification checklist

After all 4 steps, verify with these commands from your terminal:

```bash
# Check GA4 is loaded
curl -s https://smallmailhub.com | grep -o 'gtag/js?id=[^"]*'

# Check GSC verification meta tag
curl -s https://smallmailhub.com | grep -o 'google-site-verification[^"]*'

# Check sitemap
curl -s https://smallmailhub.com/sitemap-index.xml | head -20

# Check robots.txt
curl -s https://smallmailhub.com/robots.txt
```

All four should return real content. If any return empty, check the env vars in Cloudflare Pages dashboard.

## What to check daily (week 1)

After setup, watch these metrics daily:

- **GSC Performance:** Impressions, clicks, average position per page
- **GA4 Realtime:** Active users right now
- **GA4 Engagement:** Average engagement time, scroll depth per page
- **Cloudflare Analytics:** Total requests, unique visitors, bandwidth

The first 7 days are usually quiet (Google hasn't indexed you yet). Expect:
- Day 1-3: 0-10 visitors/day
- Day 4-7: 10-50 visitors/day
- Day 8-30: 50-500 visitors/day (if content is good)
- Day 30+: should be growing 20-30% week over week

## What to check weekly (after week 1)

- **Indexed pages:** GSC → Pages → See which URLs Google has indexed
- **Top queries:** GSC → Performance → Queries (these are the actual searches people did)
- **Crawl errors:** GSC → Pages → "Why pages aren't indexed"
- **Affiliate clicks:** GA4 → Events (after we add event tracking)