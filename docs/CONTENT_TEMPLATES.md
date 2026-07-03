# Content Brief Templates

Reusable templates for each content type. Copy → fill in → publish.

## Template 1: Individual Tool Review

Target: `best [tool] review` / `[tool] review` / `is [tool] worth it`

File: `src/content/reviews/[tool-slug].md`

### Frontmatter

```yaml
---
title: "[Tool Name] Review [Year]: [Hook about who it's for]"
description: "[1 sentence hook with main finding]. [What's covered]. [What's not covered]."
pubDate: YYYY-MM-DD
targetKeyword: "[primary keyword]"
productName: "[Tool Name]"
affiliateUrl: "[affiliate link]"
rating: X.X  # out of 5, e.g., 4.5
pros:
  - "[Specific advantage with numbers/prices where possible]"
  - "[Different angle — feature advantage]"
  - "[Different angle — pricing/value advantage]"
  - "[Different angle — UX/speed advantage]"
  - "[Different angle — support/ecosystem advantage]"
cons:
  - "[Specific limitation with comparison to alternative]"
  - "[Different angle — pricing downside]"
  - "[Different angle — feature gap]"
  - "[Different angle — UX downside]"
pricing: "[Free tier specifics] · [Paid tier pricing at key list sizes]"
bestFor: "[2-5 word description of ideal user]"
draft: false
---
```

### Body structure (target: 1,500-2,500 words)

```
## Who [Tool] is for
- 4-6 bullet points of specific user types
- 2-3 bullet points of who it's NOT for

## Pricing breakdown
- Comparison table: list size vs tool vs competitors
- "Biggest savings kick in at..." sentence

## Features that matter for [use case]
- ### Email builder (or main feature 1)
- ### Automation (or main feature 2)
- ### [Tool-specific feature 3]
- ### Deliverability (or trust-related feature)

## What [Tool] doesn't do well
- ### [Limitation 1]
- ### [Limitation 2]
- ### [Limitation 3]

## The honest comparison: [Tool] vs [main competitor]
- 3-5 bullets where [Tool] wins
- 3-5 bullets where competitor wins
- "For most [target user], [Tool] is the better fit"

## Verdict
- One sentence rating summary
- "If you [situation A], [recommendation]"

## Frequently asked questions
- 4-6 questions addressing common objections
```

---

## Template 2: "X Alternatives" Page

Target: `[tool] alternatives` / `[tool] alternatives for [persona]` / `[tool] alternatives free`

File: `src/content/alternatives/[tool]-alternatives[-modifier].md`

### Frontmatter

```yaml
---
title: "[N] Best [Tool] Alternatives [for X] ([Year] Tested)"
description: "[Tool]'s [specific pain point]. These [N] platforms are what [target user] actually switch to in [Year] — with real pricing, real pros, and honest downsides."
pubDate: YYYY-MM-DD
targetKeyword: "[primary keyword]"
replacedProduct: "[Tool Name]"
alternatives:
  - "[Alt 1] — [one-liner descriptor]"
  - "[Alt 2] — [one-liner descriptor]"
  - "[Alt 3] — [one-liner descriptor]"
  - "[Alt 4] — [one-liner descriptor]"
  - "[Alt 5] — [one-liner descriptor]"
  - "[Alt 6] — [one-liner descriptor]"
  - "[Alt 7] — [one-liner descriptor]"
draft: false
---
```

### Body structure (target: 2,000-3,500 words)

```
## Quick answer: who's this guide for?
- 3-5 bullet points of "you are" criteria
- "If [you are X], [do Y]. If [you are Z], [do W]."

## [N]. [Top Pick] — [descriptor]
- **Pricing:** [numbers]
- [Tool description — 2-3 sentences]
- ### Why [target user] switch to it:
  - 3-5 bullets
- ### The honest downside:
  - 2-3 bullets
- **Best for:** [one line]

[Repeat for alternatives 2-7]

## The comparison table
| Tool | Free tier | 1,000 subs | 5,000 subs | Best for |

## How we picked these [N]
- 4-5 filter criteria explained

## Bottom line: which one should you pick?
- 4-5 conditional recommendations

## Frequently asked questions
- 4-6 questions
```

---

## Template 3: Best-Of List Page

Target: `best [category] for [persona]` / `best [category] [year]`

File: `src/content/lists/best-[category]-for-[persona].md`

### Frontmatter

```yaml
---
title: "Best [Category] for [Persona] in [Year] (Tested)"
description: "We tested [N] [category] across [time period]. These [N] are the ones we'd actually recommend to [persona] in [Year], ranked by [criteria]."
pubDate: YYYY-MM-DD
targetKeyword: "[primary keyword]"
items:
  - "[Tool 1] — [one-liner descriptor]"
  - "[Tool 2] — [one-liner descriptor]"
  - "[Tool 3] — [one-liner descriptor]"
  - "[Tool 4] — [one-liner descriptor]"
  - "[Tool 5] — [one-liner descriptor]"
  - "[Tool 6] — [one-liner descriptor]"
  - "[Tool 7] — [one-liner descriptor]"
draft: false
---
```

### Body structure (target: 2,500-4,000 words)

```
## Quick answer: who's this guide for?
- 4-5 bullet points of "you are" criteria
- "If any of those don't describe you, jump to [section]"

## How we picked these [N]
- 5 filter criteria with one-line explanations

## The [N] best [category] for [persona] in [Year]

### [N]. [Tool] — [descriptor]
- **Pricing:** [numbers]
- [Description — 2-3 sentences]
- **Best for:** [one line]
- **Skip if:** [one line]

[Repeat for tools 2-7]

## The comparison table
| Tool | Free tier | 1,000 subs | 5,000 subs | Best for |

## How to choose: a 4-question decision tree
- Q1: [decision question]
- Q2: [decision question]
- Q3: [decision question]
- Q4: [decision question]
- Each question leads to specific tool

## What we don't recommend
- 4-6 named tools with one-line reasons

## Bottom line
- Default recommendation for 80% of readers
- 2-3 specific recommendations for the other 20%
```

---

## Writing rules (apply to ALL templates)

### Voice
- First person plural ("we tested", "our verdict")
- Specific numbers over adjectives ("$10/mo" not "affordable")
- Direct recommendations over hedging ("MailerLite is the right answer" not "could be a good choice")
- No emojis
- No exclamation marks (except for genuine emphasis)

### SEO
- H1 = title (already in frontmatter)
- Each H2 contains target keyword variant if natural
- Internal links: every review links to alternatives page, every alternatives page links to 2-3 reviews
- External links: only to vendor official pricing pages (for transparency)
- Image alt text: descriptive, includes product name

### Honesty requirements (this is what differentiates us)
- Every review MUST include a "What [tool] doesn't do well" section with 3+ items
- Every review MUST include a "vs [competitor]" comparison
- Every review MUST end with "Skip if [scenario]" or equivalent
- Pros/cons must be specific, not generic ("$10/mo at 1,000 subscribers" not "affordable pricing")

### Affiliate disclosure
- Every page's meta description can mention "tested" or "honest"
- Footer has permanent disclosure link
- Top of every alternatives/review page has the orange callout box reminding users about affiliate model
- Use `rel="sponsored noopener"` on all affiliate links

### Word counts
- Reviews: 1,500-2,500 words
- Alternatives pages: 2,000-3,500 words
- Best-of lists: 2,500-4,000 words
- Shorter than this = thin content, won't rank
- Longer than this = padding, hurts readability

### Publishing cadence
- 3-5 new pages per week for the first 90 days
- Update existing pages every 6 months (refresh "Year" in title, update prices)
- Internal linking pass every 10 new pages