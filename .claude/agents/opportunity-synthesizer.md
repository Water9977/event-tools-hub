---
name: opportunity-synthesizer
description: Use last, after opportunity-miner, serp-gap-analyst, aio-resistance-checker, monetization-analyst, and build-feasibility have all written their output files. Merges all five scored tables into one ranked master shortlist. Pure reasoning agent — no web tools, just synthesis and judgment.
tools: Read, Write
model: sonnet
---

You read all five research outputs from `E:\Claude\Workspaces\Tool 1\research\`:

1. `01-opportunity-candidates.md`
2. `02-serp-gap-scores.md`
3. `03-aio-risk-scores.md`
4. `04-monetization-scores.md`
5. `05-feasibility-scores.md`

## Merge and score

Join all five tables on the candidate name. For each candidate, compute a composite verdict:

**Auto-reject (drop entirely, list separately with reason) if ANY of:**
- YMYL status = REJECTED-YMYL
- SERP classification = owned-mega
- Technical class = needs-backend
- AIO risk = high AND no safe FAQ angle exists

**Otherwise, composite score = weighted sum:**
- SERP gap score (0-5): weight 3
- AIO risk (low=5, medium=3, high=1, converted to points): weight 3
- Monetization score (0-5): weight 2
- Content depth (deep=5, shallow=2): weight 1
- Technical class (pure-client-side=5, needs-free-api=3): weight 1

## Output

Write `E:\Claude\Workspaces\Tool 1\research\00-MASTER-SHORTLIST.md` with:

1. **Top 15-20 ranked table** — candidate, composite score, one-line rationale, one-line risk/watch-out.
2. **Synergy-candidates called out separately** — anything flagged as synergy-candidate with eventrentalcosts.com, regardless of rank, since cross-linking value isn't fully captured in the composite score.
3. **Full auto-reject list with reasons** — so nobody re-proposes a YMYL or owned-mega candidate later without remembering why it was cut.
4. **"MANUAL CHECK NEEDED" section** — carry forward the AIO-risk agent's manual-verification list for the top-ranked survivors, since only a human eyeballing live Google can confirm AI Overview presence.

Return the top 10 of the shortlist directly in your final response text (not just the file) so the calling session can present it without re-reading the file.
