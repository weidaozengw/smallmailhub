#!/usr/bin/env python3
"""Generate 1200x630 OG images using Chrome DevTools Protocol via direct websocket."""
import json
import os
import re
import subprocess
import time
import urllib.request
from pathlib import Path
import websocket  # type: ignore

OG_DIR = Path("/Users/xiaoli/Desktop/mailpilot-site/public/og")
TEMPLATE = Path("/Users/xiaoli/Desktop/mailpilot-site/scripts/og-template.html").read_text()

CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
USER_DATA = "/tmp/chrome-og-gen"
DEBUG_PORT = 9224
DEBUG_URL = f"http://127.0.0.1:{DEBUG_PORT}"

JOBS = [
    ("course-creators", "BEST FOR COURSE CREATORS", "Email tools built for course launches, sales funnels, and student engagement.", "2026"),
    ("newsletter-creators", "BEST FOR NEWSLETTER CREATORS", "Tools optimized for newsletter-first creators who monetize via subscriptions.", "2026"),
    ("b2b", "BEST FOR B2B BUSINESSES", "Lead scoring, CRM, and multi-touch nurture sequences for long sales cycles.", "2026"),
    ("solopreneurs", "BEST FOR SOLOPRENEURS", "Affordable email tools for one-person businesses without dedicated marketing staff.", "2026"),
    ("transactional", "BEST FOR TRANSACTIONAL EMAIL", "Reliable deliverability for order confirmations, password resets, and notifications.", "2026"),
    ("bloggers", "BEST FOR BLOGGERS", "Tools that integrate with your CMS and monetize your audience with email.", "2026"),
    ("nonprofits", "BEST FOR NONPROFITS", "Discounted email tools designed for donor engagement and fundraising.", "2026"),
    ("cold-email", "BEST COLD EMAIL TOOLS", "Outbound sales platforms for personalized cold email at scale.", "2026"),
    ("transactional-services", "BEST TRANSACTIONAL SERVICES", "Dedicated transactional email APIs with the strongest deliverability.", "2026"),
    ("cheapest", "CHEAPEST EMAIL MARKETING", "The lowest-cost email tools that still deliver to the inbox in 2026.", "2026"),
    ("pricing-2026", "EMAIL MARKETING PRICING 2026", "Side-by-side pricing comparison for every major email platform.", "2026"),
    ("real-estate", "BEST FOR REAL ESTATE", "Email tools with CRM, listing alerts, and drip campaigns for agents.", "2026"),
]
already_have = {"beginners", "ecommerce", "smallbusiness", "saas"}
jobs = [j for j in JOBS if j[0] not in already_have]


def launch_chrome():
    Path(USER_DATA).mkdir(exist_ok=True)
    subprocess.run(["pkill", "-f", "chrome-og-gen"], capture_output=True)
    time.sleep(1)
    subprocess.Popen(
        [CHROME, f"--user-data-dir={USER_DATA}",
         f"--remote-debugging-port={DEBUG_PORT}",
         "--remote-allow-origins=*",
         "--headless=new",
         "--no-first-run",
         "--no-default-browser-check",
         "--disable-gpu",
         "about:blank"],
        stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    # Wait for debug port
    for _ in range(20):
        try:
            urllib.request.urlopen(f"{DEBUG_URL}/json/version", timeout=1).read()
            return True
        except Exception:
            time.sleep(0.5)
    return False


def get_ws():
    pages = json.loads(urllib.request.urlopen(f"{DEBUG_URL}/json/list", timeout=5).read())
    target = next((p for p in pages if p.get("type") == "page"), None)
    return websocket.create_connection(target["webSocketDebuggerUrl"], timeout=15)


def screenshot_html(ws, html_text, out_path):
    _id = [0]
    def cmd(method, params=None):
        _id[0] += 1
        msg = {"id": _id[0], "method": method}
        if params: msg["params"] = params
        ws.send(json.dumps(msg))
        while True:
            r = json.loads(ws.recv())
            if r.get("id") == _id[0]:
                return r
    # Set viewport
    cmd("Emulation.setDeviceMetricsOverride", {"width": 1200, "height": 630, "deviceScaleFactor": 1, "mobile": False})
    # Load HTML as data URL
    data_url = "data:text/html;charset=utf-8," + urllib.parse.quote(html_text)
    cmd("Page.navigate", {"url": data_url})
    time.sleep(0.5)
    # Capture
    result = cmd("Page.captureScreenshot", {"format": "png"})
    import base64
    with open(out_path, "wb") as f:
        f.write(base64.b64decode(result["result"]["data"]))


import urllib.parse

def main():
    if not launch_chrome():
        print("FAIL: Chrome did not start")
        return
    print(f"Chrome ready on {DEBUG_PORT}")
    ws = get_ws()
    print(f"Got WS target")

    OG_DIR.mkdir(parents=True, exist_ok=True)
    for slug, badge, subtitle, year in jobs:
        html = TEMPLATE.replace("__TITLE__", badge).replace("__SUBTITLE__", subtitle).replace("__YEAR__", year)
        out = OG_DIR / f"{slug}.png"
        try:
            screenshot_html(ws, html, out)
            print(f"  [{slug}] OK ({out.stat().st_size:,} bytes)")
        except Exception as e:
            print(f"  [{slug}] FAIL: {e}")

    ws.close()
    subprocess.run(["pkill", "-f", "chrome-og-gen"], capture_output=True)


if __name__ == "__main__":
    main()
