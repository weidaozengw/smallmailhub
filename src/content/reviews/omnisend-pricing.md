---
title: "Omnisend Pricing in 2026: Real Costs at Every Tier (and the SMS Rule Change That Hits Hard)"
description: "The complete Omnisend pricing breakdown for 2026 — how the contact-tier model actually bills, the May 4 2026 SMS rule change that locks Free and Standard out, and which tier is right for your ecommerce store."
pubDate: 2026-07-29
targetKeyword: "omnisend pricing 2026"
productName: "Omnisend"
rating: 4.3
pros:
  - "Contact-tier pricing is honest — you know your monthly bill before you send a single campaign"
  - "Pro plan includes unlimited monthly emails (Standard = contacts × 12)"
  - "Built-in ecommerce transactional email via Order Confirmation automation — no separate product"
  - "Free plan is the only tier where you can build full ecommerce automations for $0"
  - "AI product recommendations and personalized send time are real Pro features, not upsells"
  - "Dedicated Account Expert from $400/mo plans — useful if you're scaling past 10K contacts"
cons:
  - "Billable contacts include non-subscribers (orders, carts, accounts) — your list can silently grow your bill"
  - "Pro plan is the only tier with SMS as of May 4 2026 — Free and Standard users lost access"
  - "No public annual discount for Standard or Pro (Custom plan is sales-led)"
  - "Standard → Pro price jump is steep at low contact counts ($16 → $59)"
  - "Account freeze costs $50 one-time — uncommon in this category"
  - "Charges paid are non-refundable except in 4 narrow cases"
pricing: "Free (500 emails/mo, 250 contacts) · Standard $16/mo (0–500 contacts) · Pro $59/mo (0–2,000 contacts) · Custom (sales-led)"
bestFor: "Ecommerce stores on Shopify, WooCommerce, BigCommerce, or Magento that need email + SMS in one platform and can size their billable contact count confidently."
affiliateUrl: "https://www.omnisend.com/?via=mailpilot"
---

Omnisend's pricing changed twice in the last 18 months, and the May 4, 2026 SMS rule change is the one that surprises most ecommerce owners. If you picked Omnisend in 2025 specifically because its Standard plan included SMS credits, that plan no longer has SMS access. As of 2026-07-29, only Pro plan subscribers can send SMS, and SMS is billed separately as a per-message add-on with no included credits on new subscriptions.

This breakdown covers the actual Omnisend pricing across all three self-serve plans and the sales-led Custom plan, with the contact-tier table, the email credit formula, and every pricing gotcha we could verify against Omnisend's official support documentation. Where numbers or rules could not be verified directly, they are flagged NEEDS_VERIFY.

## At a glance: 2026 Omnisend pricing

| Plan | Starting price | Billable contact range | Monthly emails | SMS | Best for |
|------|----------------|------------------------|----------------|-----|----------|
| **Free** | $0/mo | Up to 250 (segment cap) | 500/mo total | Not available as of May 4, 2026 | Hobbyists, very small stores |
| **Standard** | $16/mo | 0 – 500 | contacts × 12 | Not available as of May 4, 2026 | Small ecommerce, single-brand stores |
| **Pro** | $59/mo | 0 – 2,000 | Unlimited | Available ($0.007/SMS at $10K+ spend) | Scaling ecommerce, SMS + email combined |
| **Custom** | Quote-based | 12,000+ | Custom | Custom | Mid-market and enterprise stores |

**Three things to understand before you choose a tier:**

1. Omnisend's pricing is **contact-tier based**, not send-volume based. Your monthly bill is set by your *billable contacts* — not by how many campaigns you send. Send one campaign to 3,000 contacts or ten campaigns to 3,000 contacts — same price.
2. **Billable contacts are subscribers + non-subscribers.** Anyone who placed an order, abandoned a cart, or created an account but did not check "Accept marketing" still counts. The only contacts excluded from billing are *unsubscribed* contacts. (Omnisend support article 1840233, accessed 2026-07-29.)
3. **Email credits = contacts × 12 on Standard.** Pro gets unlimited monthly emails regardless of contact count. The formula is documented and the math is simple — 500 contacts = 6,000 emails/month, 3,000 contacts = 36,000 emails/month.

## The 2026 tier walk-through

### Free — what you actually get

The Omnisend Free tier covers all core ecommerce automation features but enforces a hard contact segment cap:

- ✅ Up to 500 emails/month
- ✅ Send campaigns to a maximum of **250 unique contacts** (you must build a segment of ≤ 250 contacts to send)
- ✅ Unlimited contact upload (the list can grow, but the segment you email cannot)
- ✅ All Omnisend features: forms, automation, segmentation, campaigns, push notifications, Google Customer Match, Facebook Custom Audiences
- ❌ "Powered by Omnisend" branding on forms and emails
- ❌ No SMS access (as of May 4, 2026 — see §4 below)
- ❌ Account is auto-deleted after 6 months of inactivity

Free is the only plan where you can build full ecommerce automation workflows for $0 — welcome series, abandoned cart, browse abandonment, post-purchase. The hard limit is the 250-contact email segment, which most growing stores outgrow within the first 6 months.

### Standard — $16/mo to start

Standard removes Omnisend branding and adds the email credit formula:

- ✅ 6,000 emails/month at 251–500 contacts (formula: contacts × 12)
- ✅ No "Powered by Omnisend" badge
- ✅ Advanced reporting
- ✅ Dynamic content blocks
- ✅ AI-powered product personalization
- ✅ Live chat support
- ✅ Dedicated Account Expert when monthly bill ≥ $400
- ❌ No SMS access as of May 4, 2026 (Free and Standard lost SMS in the rule change)
- ❌ Email cap at contacts × 12 — heavy senders will hit the cap

Pricing scales aggressively with billable contacts. Here is the public Standard cost table:

| Contacts | $/mo | Contacts | $/mo |
|----------|------|----------|------|
| 0 – 500 | **$16** | 5,001 – 5,500 | $88 |
| 501 – 1,000 | $20 | 5,501 – 6,000 | $100 |
| 1,001 – 1,500 | $25 | 6,001 – 6,500 | $106 |
| 1,501 – 2,000 | $30 | 6,501 – 7,000 | $113 |
| 2,001 – 2,500 | $44 | 7,001 – 9,000 | $127 |
| 2,501 – 3,000 | $50 | 9,001 – 10,000 | $132 |
| 3,001 – 3,500 | $56 | 10,001 – 10,500 | $150 |
| 3,501 – 4,000 | $63 | 10,501 – 11,000 | $163 |
| 4,001 – 4,500 | $75 | 11,001 – 11,500 | $169 |
| 4,501 – 5,000 | $81 | 11,501 – 12,000 | $175 |

Source: Omnisend live pricing page + inline pricing-new.min.js (`standard.costsRanges`), fetched 2026-07-29. Full table extends to 150,001 contacts at $1,508/mo.

### Pro — $59/mo to start (and the only SMS tier as of May 4, 2026)

Pro is the new SMS-only tier after the May 4, 2026 rule change. It also lifts the email cap:

- ✅ **Unlimited monthly emails** (no contacts × 12 cap)
- ✅ Personalized product recommender AI
- ✅ Personalized sending time
- ✅ SMS add-on (volume-based, starting at $0.007/SMS — see §4)
- ✅ Priority support from a dedicated account expert
- ✅ Forms AI + Reports AI
- ✅ Account Expert on plans ≥ $400/mo

Pro cost table:

| Contacts | $/mo | Contacts | $/mo |
|----------|------|----------|------|
| 0 – 2,000 | **$59** | 5,001 – 5,500 | $105 |
| 2,001 – 2,500 | $70 | 5,501 – 6,000 | $115 |
| 2,501 – 3,000 | $75 | 6,001 – 6,500 | $125 |
| 3,001 – 3,500 | $80 | 6,501 – 7,000 | $135 |
| 3,501 – 4,000 | $85 | 7,001 – 9,000 | $145 |
| 4,001 – 4,500 | $90 | 9,001 – 10,000 | $150 |
| 4,501 – 5,000 | $90 | 10,001 – 10,500 | $170 |

Source: Omnisend live pricing page + inline pricing-new.min.js (`pro.costsRanges`), fetched 2026-07-29. Full table extends to 150,001 contacts at $1,940/mo.

### Custom — sales-led

For stores past 12,000 contacts or with custom needs, Omnisend offers a sales-led Custom plan with custom contact count, free migration (contacts, data, segments), and a dedicated account expert. No public rate sheet — request via Omnisend's sales form.

## The "Starter Discount" — it's a promo, not a plan

Omnisend publishes three plans (Free, Standard, Pro), but the marketing page surfaces a **30% off promo** for new Standard or Pro subscribers called "Starter Discount":

- Pay 3 months upfront and the first 3 months are 30% off
- Standard $16 → $11.20/mo ($33.60 prepaid instead of $48.00)
- Pro $59 → $41.30/mo ($123.90 prepaid instead of $177.00)
- Discount applies **only once, to your first upgrade to a paid plan**

After the 3-month promo ends, billing resumes at the standard tier rate. This is a meaningful discount for new stores but does not change the underlying tier pricing. (Source: Omnisend live pricing page + support article 3533018, accessed 2026-07-29.)

## The May 4, 2026 SMS rule change

This is the single most important pricing update in 2026. Before May 4, 2026, Omnisend's Standard plan included $1 of SMS credit and Pro included SMS credits equal to the monthly subscription price. After May 4, 2026, the rules are different:

**For new subscribers on or after May 4, 2026:**

- **Free plan**: SMS not available at all
- **Standard plan**: SMS not available — must upgrade to Pro
- **Pro plan**: SMS available as an add-on. **No included credits.** Pay-per-message only.

**Pro SMS volume tiers (US/CA):**

| Monthly SMS spend | Rate per SMS |
|-------------------|--------------|
| $10 – $49.99 | $0.0090 |
| $50 – $999.99 | $0.0085 |
| $1,000 – $9,999.99 | $0.0080 |
| $10,000+ | $0.0070 |

Unused SMS credits roll over with a 60-day expiration. Each Brand (Omnisend account) has a separate SMS budget. (Source: Omnisend support article 1832295 + inline JSON on omnisend.com/pricing, accessed 2026-07-29.)

**Legacy subscribers (active SMS subscription before May 4, 2026)** keep the old rules — Standard still includes $1 SMS credit, Pro credits equal the monthly subscription price. The downgrade trap is real: if you downgrade from Pro to Free and re-subscribe on or after May 4, 2026, you move to the new pricing permanently and cannot return to legacy. (Source: support article 3998349, accessed 2026-07-29.)

For international SMS rates, the inline JSON on omnisend.com/pricing lists 100+ countries. Sampled major markets (US/CA SMS, US MMS, UK, AU, DE, FR, DK) range from $0.007 (US at $10K+ spend) to $0.108 (Germany entry tier). Full country rate table was extracted at 2026-07-29 but is not transcribed wholesale — *NEEDS_VERIFY for any country not listed above*.

## Automation workflows — no plan cap

Omnisend does not cap the number of active automation workflows by plan tier. The support documentation is explicit: "Automation Workflows can be used on all Omnisend plans." Free, Standard, Pro, and Custom users can all build unlimited automations — welcome series, abandoned cart, browse abandonment, post-purchase, win-back, birthday, and the transactional set (Order Confirmation, Shipping Confirmation, Cancellation Confirmation, Order Follow-up, Cross-Sell, Replenishment Reminder). (Source: support article 4315344 + 1421803, accessed 2026-07-29.)

What limits automation is *contact subscription status* — Welcome and Birthday automations fire only for subscribed contacts; Order/Shipping/Cancellation automations fire for *all* contact statuses (including unsubscribed). Non-subscribed contacts receiving automations still count toward your billable contact total. (Source: support article 1840233, accessed 2026-07-29.)

## Transactional email — built-in, not a separate product

Omnisend does not sell transactional email as a separate product line à la SendGrid or Postmark. Transactional email is delivered via built-in **Automation Workflows**, specifically the Order Confirmation, Shipping Confirmation, Cancellation Confirmation, Order Follow-up, Cross-Sell, and Replenishment Reminder templates. Available on **all plans, including Free**, with the trigger defaulting to "Paid for Order." (Source: support article 1421803, accessed 2026-07-29.)

**One important caveat**: Omnisend does **not** automatically disable your platform's default transactional email (Shopify, WooCommerce, BigCommerce). If you activate Omnisend's Order Confirmation automation, you must manually disable the platform's own order confirmation email to avoid sending duplicates. (Source: support article 1421803 — "Platform Email Override" section, accessed 2026-07-29.)

## Pricing gotchas worth knowing

1. **Contact tiers, not volume tiers** — your monthly bill is set by *billable contacts* (subscribers + non-subscribers), not by how many campaigns you send. Organic list growth can bump you into a higher tier silently. (Support article 3533018, 2283169.)
2. **"Non-subscribed" contacts are billable** — anyone who placed an order, abandoned a cart, or created an account but did not check "Accept marketing" still counts toward your billable total. Only *unsubscribed* contacts are excluded. (Support article 1840233.)
3. **Auto-tier upgrade at next billing cycle** — Omnisend notifies you by email when your billable contacts push you into a higher tier, but does not require opt-in. (Support article 3533018.)
4. **Mid-cycle tier upgrade is prompted but prorated** — if you import a large contact list mid-cycle, Omnisend prompts you to upgrade before sending. The charge is prorated to the remaining days in your billing cycle. (Support article 2283169.)
5. **No annual discount advertised** — Standard and Pro are monthly, billed every 30 days from upgrade date. Custom plan likely has annual options, but no public rate. *NEEDS_VERIFY: confirm with sales.* (Support article 2283169.)
6. **Two SMS pricing models co-exist** — legacy (pre-May 4, 2026) subscribers keep their old rules; new subscribers get the volume-based per-message pricing. Downgrading and re-subscribing moves you permanently to the new model. (Support article 1832295, 3998349.)
7. **SMS is a separate add-on charge** — your email plan and SMS subscription bill independently. You'll see two charges each billing cycle. (Support article 2283169.)
8. **Free → Pro SMS lock-in** — Free and Standard do not include SMS for new subscribers; only Pro has SMS access. (Support article 1832295.)
9. **Account freezing costs $50 one-time** — a 3–12 month temporary pause on your paid plan. Uncommon in this category. (Support article 3998349.)
10. **Cancel = end of cycle, no pro-rata refund for downgrade** — when you downgrade, no refund is issued; unused credit is applied to your next invoice. (Support article 3998349.)
11. **Auto-delete after 6 months of inactivity on Free** — log in at least once every 6 months to prevent account deletion. (Support article 3998349.)
12. **Shopify disconnect auto-cancels paid plan** — disconnecting the Omnisend app from your Shopify store automatically cancels your paid Omnisend subscription. (Support article 3998349.)
13. **Payment methods limited** — VISA, MasterCard, AmEx only. Discover, Diners Club, JCB, UnionPay are not supported. (FAQ on omnisend.com/pricing.)
14. **Account Expert only from $400/mo** — Standard and Pro both note "Account Expert (for plans $400/month or higher)" — at $16/mo Standard and $59/mo Pro, you do not get a dedicated expert unless you scale up. (Live pricing page + support article 3533018.)

## Refund policy

Omnisend's refund policy is **non-refundable by default**. Verbatim from the support documentation:

> "Charges paid by the customer are non-refundable." (Terms of Use, Section 6)

**Refund occasions** (case-by-case, may consider):

1. Customer not using any features (no email/SMS sent, no signup-form captures, no add-ons in the last month) → last billing cycle only
2. Customer canceled before new billing period but cancellation failed → last month's charge
3. System malfunction prevented customer from using paid features over the period they paid for
4. Account hacked / compromised → at Omnisend's discretion, partial refund; customer remains "fully responsible for the security of [their] account" per ToU 5.4

**Refund cap**: "A refund we provide in no situation will exceed the amount paid by the customer minus the actual costs incurred by us from our third-party vendors, e.g., SMS and/or payment processing service providers."

**Not refundable**: "unused features that come with your plan package, such as SMS credits or add-ons."

(Source: support article 1061808 + Omnisend Terms of Use §6, accessed 2026-07-29.)

## Who Omnisend is actually for in 2026

Omnisend is the right pick if:

- You run a single-brand ecommerce store on Shopify, WooCommerce, BigCommerce, or Magento
- You want email + SMS + push notifications in one ecommerce-focused platform
- Your billable contact count is predictable (you know roughly how many customers and carts you'll have this quarter)
- You want built-in Order Confirmation transactional email without a separate SendGrid-style bill
- You can size your team against the May 4, 2026 SMS rule change — meaning you're either on Pro for SMS or you've accepted that SMS is not part of your stack

Omnisend is not the right pick if:

- You send infrequent high-volume campaigns to large lists — Brevo's send-volume pricing model is cheaper
- You're a B2B service business or content creator — MailerLite or Kit fit better
- You need a built-in CRM for B2B lead management — pair Omnisend with a separate CRM
- SMS is critical and you're not ready for Pro pricing — Kit + a separate SMS tool may be cheaper

## How to choose

- **Under 250 contacts and testing the waters**: Free plan. Build all automations, send up to 500 emails/month, accept the "Powered by Omnisend" badge.
- **251–2,000 contacts, email-only, no SMS needed**: Standard plan. $16/mo at 0–500 contacts, scaling up the contact-tier table. Add the 30% Starter Discount promo for the first 3 months.
- **2,001–10,000 contacts, SMS needed, want unlimited sends**: Pro plan. $59/mo to start. SMS at $0.007–$0.009 per message depending on monthly spend.
- **Past 12,000 contacts, custom needs, dedicated expert**: Custom plan. Sales-led, no public rate.

## Frequently asked questions

**What counts as a billable contact on Omnisend?**

Subscribed contacts (anyone who opted in to marketing) plus non-subscribed contacts (anyone who placed an order, abandoned a cart, or created an account but did not check "Accept marketing"). Only unsubscribed contacts are excluded. (Support article 1840233.)

**Does Omnisend charge per email sent?**

No. Omnisend's pricing is contact-tier based. You pay for the number of billable contacts in your account, not the number of emails you send. Standard includes contacts × 12 monthly emails; Pro includes unlimited emails.

**Can I downgrade from Pro to Standard without losing SMS access?**

No. As of May 4, 2026, Standard plan does not include SMS. If you downgrade from Pro and want SMS back, you must re-upgrade to Pro. (Support article 1832295, 3998349.)

**Is there an annual discount on Omnisend?**

Not advertised for Standard or Pro. Both plans are monthly-billed every 30 days. The Custom plan may have annual options, but pricing is sales-led. *NEEDS_VERIFY with sales.* (Support article 2283169.)

**Does Omnisend offer a free trial of paid plans?**

The 30% off "Starter Discount" promo for the first 3 months on Standard or Pro is the closest equivalent. There is no separate 14-day or 30-day free trial of paid features without committing to a paid subscription.

**What happens to my account if I don't log in for 6 months on Free?**

Auto-delete. Omnisend deletes Free accounts that have not logged in for 6 months. There is no warning email in the support documentation, so set a calendar reminder if your Free store is seasonal. (Support article 3998349.)

---

**Pricing reviewed**: 2026-07-29. Next scheduled review: 2026-10-29 (3 months — focused on whether Omnisend introduces annual plans or modifies tier breakpoints around the May 4 SMS rule change).

**Sources accessed 2026-07-29**: omnisend.com/pricing (live HTML + inline pricing-new.min.js), support.omnisend.com/en/collections/35905-pricing-billing, support.omnisend.com/en/articles/3533018-omnisend-pricing-plans-, support.omnisend.com/en/articles/1832295-manage-your-omnisend-sms-credits-subscription, support.omnisend.com/en/articles/2283169-understand-your-omnisend-paid-plan-charges, support.omnisend.com/en/articles/1061808-omnisend-refund-policy, support.omnisend.com/en/articles/3998349-downgrade-cancel-or-freeze-your-omnisend-subscription, support.omnisend.com/en/articles/4315344-automation-faq, support.omnisend.com/en/articles/1421803-order-confirmation-automation, support.omnisend.com/en/articles/1840233-manage-non-subscribed-contacts.