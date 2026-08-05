# Antigravity Research Prompt — Micro-Tool Hub Opportunity Research

Paste everything below into Google Antigravity. It has Firecrawl (Firepro)
MCP available — use its search/scrape/map/crawl tools throughout. This is
running in parallel with a separate Claude Code research pipeline using a
different methodology on purpose, so the two can be cross-checked against
each other rather than duplicating the same blind spots.

---

## Context

I'm building a portfolio of free, ad-monetized micro-tool web utilities
(single-purpose tools: calculators, converters, generators, checkers,
rulers, pickers — think calculator.net-style pages, but individually
well-built). Business model: rank on Google organic search, monetize with
Google AdSense once traffic exists. Zero/near-zero budget — one ~$10-12
domain, free hosting (Cloudflare Pages), AI-written code (Astro + Tailwind),
no ongoing infra cost.

**Architecture decision already made:** ONE hub domain, not many separate
domains. Each tool is a route on the hub (e.g. `hub.com/word-counter`) with
its own dedicated 1200+ word guide article. I need your research to also
help pick the hub's **theme** (a coherent topic family the domain should
own — e.g. all measurement tools, or all text/writing tools, or all
random/generator tools) — not just individual tool ideas in isolation.

**Two hard constraints, verified from primary sources, do not relitigate
these — treat them as fixed:**

1. **No finance/health/legal/insurance/tax/medical/salary tools, ever**,
   regardless of how much search demand exists. Google's AdSense support
   forum (April 2026, community-recommended answer) confirms tool-based
   sites in these categories face permanent rejection. This is a hard
   exclusion filter, not a scoring penalty — apply it before anything else.
2. **AI Overviews now answer 70-80% of purely informational queries**
   directly on the Google results page (killing the click) **but under 20%
   of transactional/task-completion queries** (source: Ahrefs research,
   March 2026). This means every candidate must be screened for whether its
   query is phrased as "how to X / what is X" (high AI Overview risk, avoid)
   vs "X calculator / online X / X converter" (low risk, the target zone).
   This is the single most important 2026-specific filter — a tool nobody
   clicks through to because Google answered it inline is worthless no
   matter how good everything else about it looks.

I also already own a separate site, **eventrentalcosts.com** (a party/event
rental pricing directory, ~3 weeks old, already getting real Google Search
Console impressions for queries like "tent rental cost", "wedding rentals
[city]", "party rental prices" across ~15+ US metros). Flag any tool
candidate that would meaningfully cross-link or share topical authority with
that site — that's a bonus signal your research can surface that a generic
tool-idea search wouldn't.

## What I want from you — use a DIFFERENT method than the obvious one

A parallel pipeline is already mining competitor tool-site sitemaps
(calculator.net, RapidTables, Omni Calculator, etc.) for proven-demand
tools with weak execution, plus basic Reddit searches. **Don't just repeat
that.** Instead, lean into these angles:

1. **Public revenue precedent.** Search Indie Hackers, Show HN
   (news.ycombinator.com "Show HN"), and Product Hunt for people who have
   actually launched a small tool site and *reported real numbers*
   (AdSense income, traffic, "I made $X from this tool"). This is direct
   evidence a tool category can monetize — something no amount of SERP
   analysis proves on its own. Log the tool category and whatever numbers
   are reported, with source links.
2. **Rising-interest signal, not just static volume.** Use whatever
   trend/interest-over-time signal you can find (Google Trends via search,
   or search result freshness/recency patterns) to distinguish tool
   categories with flat-but-real demand from ones actively growing —
   growing demand with a still-thin SERP is the best combination.
3. **Chrome Web Store / browser extension category demand as a proxy.**
   If people install a browser extension to do something (e.g. "screen
   ruler", "word counter", "color picker", "QR generator"), that's evidence
   the same task has real search demand as an "online X" web tool too, and
   extension review counts give you a rough demand ranking that competitor
   sitemaps don't show. Cross-reference extension categories against what
   the sitemap-mining pipeline would find.
4. **Wider forum sweep than Reddit alone** — Stack Exchange /
   Super User / Ask Different for "is there a tool that", Quora, niche
   subreddit and forum communities specific to a candidate vertical
   (e.g. r/webdev, r/graphic_design, r/tipping, r/college for
   student-adjacent tools) — go deeper into 3-4 verticals rather than
   shallow across everything.
5. **Category-level thinking for the hub theme question.** Beyond
   individual tool ideas, tell me: which 2-3 tool *categories* (not single
   tools) have the deepest bench of related sub-tools, so the hub domain
   could plausibly own 15-30 tools within one coherent theme instead of a
   grab-bag. This directly informs domain name selection, which I have not
   done yet — don't propose actual domain names, just theme clusters.

## Required output format (so I can merge your findings with the other pipeline)

A ranked table:

| Candidate | Category/theme cluster | Demand evidence (with source) | Query intent shape (task-completion vs informational) | AI Overview risk (low/med/high) + why | YMYL? (must be No to include) | Monetization precedent found? | Cross-link synergy with eventrentalcosts.com? |
|---|---|---|---|---|---|---|---|

Then:
- **Top 3-5 hub theme cluster recommendations**, each with a rough count of
  sub-tools it could support and why the theme has coherence (not just a
  pile of unrelated tools sharing a domain).
- **Any public revenue numbers you found**, with source links — even
  approximate or self-reported ones are useful signal.
- **A contrarian check**: if you find anything in your research that
  contradicts the AI-Overview-risk framing above (e.g. a "how to" query
  that surprisingly still drives real traffic despite an AI Overview, or a
  transactional query that actually does get an AI Overview now), flag it
  explicitly — that's exactly the kind of disagreement worth surfacing
  between two independent research passes.

Aim for genuine research depth over a huge candidate count — 20-30 well-
evidenced candidates beats 100 shallow ones.
