#!/bin/bash
# MailPilot auto-deploy hook
# Triggered by git push to main. Builds site, deploys to Cloudflare Pages,
# reports status to Feishu. Fails loud — never silently breaks deploy.

set -euo pipefail

REPO_DIR="/Users/xiaoli/Desktop/mailpilot-site"
LOG="/tmp/mailpilot-deploy.log"
FEISHU_WEBHOOK="${FEISHU_WEBHOOK_URL:-${HERMES_FEISHU_WEBHOOK:-}}"
CHAT_ID="oc_fe1184767f680d100411232571d27a17"

cd "$REPO_DIR"

# Only deploy on main branch push
BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$BRANCH" != "main" ]; then
  echo "[skip] not on main (branch=$BRANCH)" >> "$LOG"
  exit 0
fi

# Load Cloudflare env from secrets
ENV_FILE="$HOME/.hermes/secrets/cloudflare.env"
if [ ! -f "$ENV_FILE" ]; then
  echo "[fail] missing $ENV_FILE" >> "$LOG"
  notify "[MailPilot deploy] FAIL: cloudflare.env missing"
  exit 1
fi
# shellcheck disable=SC1090
source "$ENV_FILE"

START=$(date +%s)
COMMIT=$(git rev-parse --short HEAD)
TIMESTAMP=$(date "+%Y-%m-%d %H:%M:%S %Z")

echo "[$TIMESTAMP] === deploy start (commit=$COMMIT) ===" >> "$LOG"

notify() {
  local msg="$1"
  if [ -n "$FEISHU_WEBHOOK" ]; then
    curl -sS -X POST "$FEISHU_WEBHOOK" \
      -H "Content-Type: application/json" \
      -d "{\"msg_type\":\"text\",\"content\":{\"text\":\"$msg\"}}" \
      --max-time 10 >/dev/null || echo "[notify-fail] $msg" >> "$LOG"
  fi
  echo "[notify] $msg" >> "$LOG"
}

# 1. Build
echo "[$TIMESTAMP] building..." >> "$LOG"
if ! npm run build >> "$LOG" 2>&1; then
  notify "🛑 [MailPilot] build FAILED at $COMMIT, deploy skipped. Check $LOG"
  exit 1
fi

# 2. Deploy via wrangler (NO_PROXY to dodge opencli 7890 proxy)
echo "[$TIMESTAMP] deploying to Cloudflare Pages..." >> "$LOG"
DEPLOY_OUT=$(NO_PROXY='*' HTTPS_PROXY='' HTTP_PROXY='' https_proxy='' http_proxy='' \
  /Users/xiaoli/.npm/_npx/32026684e21afda6/node_modules/.bin/wrangler \
  pages deploy dist --project-name=smallmailhub --commit-dirty=true 2>&1) || DEPLOY_RC=$?
DEPLOY_RC=${DEPLOY_RC:-0}
if [ "$DEPLOY_RC" -ne 0 ]; then
  FAIL_MSG=$(echo "$DEPLOY_OUT" | tail -c 2000)
  notify "🛑 [MailPilot] wrangler deploy FAILED at $COMMIT (rc=$DEPLOY_RC).
$FAIL_MSG"
  exit 1
fi

ELAPSED=$(( $(date +%s) - START ))
DEPLOY_URL=$(echo "$DEPLOY_OUT" | grep -oE 'https://[a-f0-9]+\.smallmailhub\.pages\.dev' | head -1)

echo "[$TIMESTAMP] === deploy ok in ${ELAPSED}s ($DEPLOY_URL) ===" >> "$LOG"

notify "✅ [MailPilot] deployed $COMMIT in ${ELAPSED}s
Preview: $DEPLOY_URL
Production: https://smallmailhub.com/"

exit 0
