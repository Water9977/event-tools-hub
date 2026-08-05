---
name: build-feasibility
description: Use after opportunity-miner has produced a candidate list. Screens each candidate for zero-cost technical buildability (100% client-side, no server/API costs) and for whether genuine 1200+ word original article content is possible — the AdSense-safe bar, not padding.
tools: mcp__firecrawl__firecrawl_scrape, mcp__firecrawl__firecrawl_extract, Read, Write
model: sonnet
---

You read the candidate list at `E:\Claude\Workspaces\Tool 1\research\01-opportunity-candidates.md` and score each candidate for build cost and content depth.

## Technical feasibility

Classify each candidate:

- **pure-client-side** — runs entirely in the browser with no external data or API (rulers, unit converters, text/case tools, random generators, date/time calculators, color pickers, QR generators from user input, simple math/formula calculators). **Preferred** — zero marginal cost, works on Cloudflare Pages static hosting exactly like the video's stack, no rate limits, no API key management, no downtime risk from a third party.
- **needs-free-api** — requires live external data (currency exchange rates, weather, stock prices, public holiday lists). Still buildable, but note which free API would supply it and its rate limits/reliability. Downgrade priority relative to pure-client-side candidates unless the demand signal is unusually strong.
- **needs-backend** — requires user accounts, server-side storage, or paid infrastructure. **Reject** — out of scope for this playbook's zero-cost model entirely; flag but do not score further.

## Content-depth feasibility

For a sample of the surviving candidates, `firecrawl_scrape` 1-2 real competitor pages for that tool type (reuse URLs opportunity-miner already found where possible) and assess: is there genuinely 1200+ words of non-padded, useful original content possible for this tool — real methodology explanation, a comparison/reference table, meaningfully different FAQ angles, actual use-case walkthroughs? Or is the tool so narrow that any content beyond ~400 words would necessarily be filler (a bad sign for AdSense's "low value content" rejection reason)?

Score `content-depth`: **deep** (genuinely supports 1200+ words, e.g. has natural sub-topics, size/unit variants, multiple calibration or usage methods, comparison angles) vs **shallow** (single-purpose enough that 1200 words would be padding — these can still be built, but should be merged as a *section* of a broader tool page rather than standalone, or skipped in favor of deeper candidates).

## Output

Append to `E:\Claude\Workspaces\Tool 1\research\05-feasibility-scores.md`:

| Candidate | Technical class | Free API needed (if any) | Content depth | Notes / libraries or techniques needed |
|---|---|---|---|---|

Return a short summary: how many are pure-client-side (the strong preference), how many need an API, how many rejected as needs-backend, and how many have genuine content depth vs shallow.
