#!/bin/bash
# Deploy MailPilot site to Cloudflare Pages
# Usage: ./deploy.sh
#
# Prerequisites:
#   1. smallmailhub.com bought via Cloudflare Registrar
#   2. CLOUDFLARE_ACCOUNT_ID + CLOUDFLARE_API_TOKEN env vars set
#   3. Wrangler installed (bun add -g wrangler or use npx)

set -euo pipefail

# Auto-install wrangler if missing
if ! command -v wrangler &> /dev/null && ! command -v npx &> /dev/null; then
  echo "❌ Neither wrangler nor npx found. Install Node.js first."
  exit 1
fi

cd "$(dirname "$0")/.."

echo "📦 Building site..."
bun run build

echo "🚀 Deploying to Cloudflare Pages..."
echo "   Project name: mailpilot"
echo "   Domain: smallmailhub.com"

# Use wrangler pages deploy
WRANGLER="wrangler"
if ! command -v wrangler &> /dev/null; then
  WRANGLER="npx wrangler"
fi

$WRANGLER pages deploy dist --project-name mailpilot --branch main

echo ""
echo "✅ Deploy complete."
echo ""
echo "📋 Next steps:"
echo "   1. Go to https://dash.cloudflare.com → Pages → mailpilot"
echo "   2. Click 'Custom domains' → 'Set up a custom domain'"
echo "   3. Enter: smallmailhub.com"
echo "   4. Cloudflare will auto-configure DNS + SSL"
echo ""
echo "🕐 DNS propagation takes 1-5 minutes."
echo "🌐 Site will be live at https://smallmailhub.com"