# Master Shortlist — Micro-Tool Hub Research

Synthesized from 134 candidates × 4 scoring passes (SERP gap, AI Overview
risk, monetization/YMYL, build feasibility). Done in the main conversation
thread, not delegated, so the judgment calls below (especially the
cross-agent contradiction in #13) have full context behind them.

## Headline finding: the hub theme should be Event/Party Planning Tools

Every scoring dimension converges on the same cluster, and it's the one
tied to a domain the user **already owns and already has live GSC
impressions on** (eventrentalcosts.com, 2-3 weeks old, ~180 impressions
across 15+ metros for tent/party/wedding rental queries). This isn't a
cold-start theme — it's the only candidate cluster that inherits existing
authority on day one instead of building it from zero. That directly serves
"fastest, least investment."

**Open decision this research surfaced (not decided here — genuinely
yours to make):** subdomain of eventrentalcosts.com (e.g.
`tools.eventrentalcosts.com`, zero extra domain cost, some inherited trust)
vs. a new standalone hub domain (full domain-authority independence, ~₹1000
extra, cleaner brand if the tools outgrow the rental-directory framing).
Both are consistent with the hub-not-12-domains architecture decided
earlier. Flagging this now because it changes what to search on Instant
Domain Search next.

## Top-ranked shortlist

| Rank | Candidate | SERP gap | AIO risk | Monetization | Feasibility | Verdict |
|---|---|---|---|---|---|---|
| 1 | **Tent Size Calculator** | 5 — verified blue-ocean-adjacent (every page-1 result is a single rental company's own lead-gen page, zero neutral hub) | low, verified | **5/5** — same product category as eventrentalcosts.com itself, confirmed real $100-1,750+/day pricing to cross-link | pure-client-side, deep (1200+ words confirmed via competitor scrape) | **Build first.** Unanimous across all 4 agents. Direct cross-link to an already-indexed property. |
| 2 | **Party/Event Budget Planner** | 4, verified | low, verified | 4/5 | pure-client-side, deep | Strong #2, same cluster |
| 3 | **Guest Count Estimator** | 4, verified | low, verified | 4/5 | pure-client-side, deep | Strong #3 |
| 4 | **Drink/Alcohol Quantity Calculator** | 3, verified (more competitive — Evite/BevMo present — but still no neutral hub) | low, verified | 4/5 — confirmed real ecosystem (ReserveBar/Drizly/Saucey) | pure-client-side, deep | Strong, slightly more crowded |
| 5 | **Food/Catering Quantity Calculator** | 3, verified | **medium** — thin "quick answer" content spotted bleeding into page 1 (ezcater's "how do you calculate catering per person") | 4/5 | pure-client-side, deep | **Needs your manual AI Overview check before greenlight** — see below |
| 6 | **Multi-Dimension Unit Converter (L×W×H at once)** | 4, verified genuine blue ocean (no direct competitor found) | low, verified | 2/5 — low but real (shipping/furniture-shopping adjacency) | pure-client-side, shallow (fine — it's a UX gap, not a content gap) | Good hub-diversifier outside the event cluster, cheap to build |
| 7 | **Binary/Hex/Base64/URL Toolkit** | 4, verified (fragmented thin SERP) | low | 2/5 — developer audience, low $ but real backlink/authority value | pure-client-side, deep | Good for domain authority, not for revenue |
| 8 | Cost-Per-Guest Calculator | 4, verified (flipped to blue ocean) | low | 3/5 | **shallow** — narrow modifier | Bundle as a feature *inside* the Budget Planner page, not a standalone route |
| 9 | RSVP Attendance Rate Estimator | 3, verified | low | 3/5 | **shallow** — subset of guest-count math | Bundle inside Guest Count Estimator, not standalone |

## Cut despite looking strong — read before second-guessing the list

**ATS Resume Format Checker** — this is the single most important entry in
this whole document, because three of the four agents ranked it their #1
pick (AIO agent: lowest risk + strongest demand signal in the set;
monetization agent: 4/5, confirmed career-services affiliate ecosystem).
**The SERP-gap agent killed it on live-verified evidence**: page 1 is
Jobscan, Enhancv, MyPerfectResume, and Kickresume — all real, funded
products, not thin sites. Per the auto-reject rule, a live-verified
owned-mega classification overrides everything else, because no amount of
content quality or monetization potential matters if a new domain
literally cannot rank. This is exactly the kind of trap a single-agent
pass would have missed — worth remembering next time a candidate looks
too good.

**AO3-style Word Counter** — technically the best SERP-gap score in the
whole set (5/5, genuine blue ocean, nothing exists). But the AIO agent
found a real demand mismatch on closer reading: what people actually
search for is "how to see word count on AO3" (already answered by AO3's
own UI), not "count my draft using AO3's rules." Monetization is 1/5 (the
fanfiction community is real but notoriously ad-averse). A high gap score
alone isn't sufficient — this is the clearest example in the dataset of
why all four dimensions have to agree.

## Second-look bucket — rejected on reasoning only, not live-verified

Home-improvement material calculators (**Concrete, Mulch, Gravel,
Roofing**) scored the **second-best monetization signal in the entire
134-candidate set** (4/5 each, confirmed real Home Depot 8% / Lowe's 20%
affiliate rates, roofing lead-gen is one of the most valuable verticals
online) — but were auto-rejected on SERP gap purely by reasoning
("calculator.net has a page for this") without an actual live search to
confirm calculator.net dominates *that specific* query rather than just
having a page. This is the weakest-evidence rejection type in the pipeline.
Worth 4-5 real Google searches before writing these off — see manual tasks
below. Not included in the ranked table above because the rejection rule
was applied correctly per the pipeline's own rubric; flagging because the
evidence behind it is thinner than everywhere else on this list.

## Full auto-reject list (with reasons, so nobody re-proposes these)

- **YMYL, safety-critical (3):** Voltage Drop Calculator, Wire Size
  Calculator (both NEC electrical-safety/fire-risk), Stair Calculator
  (building-code fall-safety). Not finance/health-labeled — these slipped
  past category filtering and only surfaced on a tangential-safety read.
- **owned-mega, live-verified (a sample of the strongest cases):** ATS
  Resume Checker (Jobscan/Enhancv/MyPerfectResume/Kickresume), Wheel of
  Names (wheelofnames.com is a real polished product), Title Case
  AP/Chicago/MLA Converter (capitalizemytitle.com entrenched), RAID
  Calculator (Seagate/Synology), Resistor Color Code Calculator
  (DigiKey/Mouser), Event Guest List/RSVP Tracker (Jotform/Partiful/
  RSVPify, all funded), QR Code Generator family (Canva/Adobe/QRCode
  Monkey), all PDF utilities (iLovePDF/Smallpdf), all generic image
  utilities (TinyPNG/remove.bg/iLoveIMG).
- **owned-mega, reasoning-only (74 total, see `02-serp-gap-scores.md` for
  the full list):** everything with a logged calculator.net/omnicalculator.
  com/rapidtables.com competitor was conservatively auto-rejected. The
  home-improvement cluster above is the one subset worth double-checking;
  the rest (day/time calculators cannibalized by Google's own native SERP
  widgets, generic dev-tool queries, generic color tools) are very likely
  correctly rejected.
- **needs-backend (3):** Webpage/Doc-to-PDF Converter (arbitrary-URL
  fetching needs server-side rendering — the doc-upload-only version is
  fine), Event Guest List/RSVP Tracker (real multi-guest collection needs
  storage), Remote-Controlled Presenter Countdown Timer (needs a
  cross-device relay).
- **High AIO/native-widget risk (9):** Day of the Week Calculator, Day
  Counter/Days Between Dates, Time Zone Calculator, Online Clock/Stopwatch/
  Timer, Random Number Generator, Coin Flip Simulator, Color Picker Tool,
  HTML Color Codes Reference, My Coordinates. **Note:** 6 of these 9 are
  killed by Google's own *native interactive SERP widgets* (it literally
  renders a working coin-flip/timer/color-picker/RNG inline), not
  probabilistic AI Overviews — this is a more permanent kill than AIO risk
  elsewhere on the list, worth remembering as a distinct pattern for future
  research passes.

## MANUAL CHECK NEEDED — your turn

Two separate things, don't conflate them:

**A. The AI Overview eyeball check** (search these on live Google,
logged out/incognito, report yes/no on whether an AI Overview box
renders):
1. Food/Catering Quantity Calculator ("how much food per person for a
   party") — this is the one genuine yellow flag in the top-5 build list
2. Party/Event Budget Planner
3. Guest Count Estimator
4. Drink/Alcohol Quantity Calculator for Events
5. Multi-Dimension Unit Converter — try "convert box dimensions online"
   and similar phrasings

**B. The second-look verification** (just search these normally and tell
me who's actually on page 1):
6. "concrete calculator"
7. "mulch calculator"
8. "gravel calculator"
9. "roofing calculator" — specifically note if it's calculator.net or if
   the field is more fragmented than reasoning assumed

## Round 2 — manual verification results + Antigravity cross-check

### Task A (live AI Overview check) — worse than predicted for 3 of 5

| Query tested | AIO present? | Impact |
|---|---|---|
| "how much food per person for a party" | **Yes** | Confirms earlier medium-risk flag on Food/Catering Calculator — do not target this exact phrasing |
| "party budget planner" | **No** | Party/Event Budget Planner confirmed clean — now the single safest pick in the event cluster |
| "how many guests should I invite calculator" | **Yes** | Different intent than Guest Count Estimator's actual target (RSVP-rate-from-invites-sent, not invite-count-from-venue-capacity) — not a clean kill, but flags that the "how many guests" phrasing family is AIO-hot; needs re-test on the *exact* target keyword |
| "how much alcohol to buy for a party" | **Yes** — full breakdown (bottles, ice, mixers, category %) rendered inline | **Downgrades Drink/Alcohol Quantity Calculator from low to high risk.** The AIO fully answers the simple case; a tool only wins if it does something the AIO can't (multi-drink-type inventory, cost estimate, shopping list export) — reposition or deprioritize |
| "convert box dimensions online" | **Yes** — AIO offers to do the calculation inline for the user | **Downgrades Multi-Dimension Unit Converter from low to high risk.** Google's assistant became the calculator here; hard kill |

**Lesson:** the aio-resistance-checker's phrasing-based proxy under-predicted risk for "how much X for an event" queries specifically — these read as task-completion but Google treats them as informational enough to fully answer inline. Tent Size Calculator (the #1 pick) was NOT re-tested this round — do this next, it's the flagship and shouldn't ship on an unverified AIO assumption. Suggested queries: "tent size calculator", "how big a tent do I need for 100 guests".

### Task B (SERP ownership check) — confirms original reject, closed

Concrete: calculator.net + Quikrete (real concrete brand) both top 4. Gravel: calculator.net + omnicalculator.com both present. Home-improvement cluster's owned-mega classification is now live-verified, not just reasoning-only. **No further action — don't reopen this.**

### Antigravity independent pass — one good finding, one discard

**Keep:** a dev/visual-tool cluster this pipeline never mined (competitor list was calculator/converter aggregators, not dev-tool hubs): PX-to-REM Converter, CSS Box Shadow Generator, Flexbox Layout Visualizer, WCAG Color Contrast Checker, Regex Tester, Markdown-to-HTML, Slugify/URL Sanitizer. These overlap partially with tools already in the shortlist (Word Counter, Case Converter, Diff Checker, Binary/Hex/Base64 Toolkit already scored deep+low-risk here) but add real breadth if a secondary/dev-tool cluster ever gets built alongside the event hub.

**Discard:** the "Public Revenue Precedents" section (Indie Hackers $1,200-3,500/mo, Show HN $400-800/mo, calculator.net "$50,000+/month"). Zero source links or post citations despite the prompt explicitly requesting them, despite the agent's own log showing it searched indiehackers.com and news.ycombinator.com. This reads as synthesized-then-presented-as-sourced, not found data. Do not factor these numbers into any planning.

### Revised event-cluster risk picture

| Candidate | Status after round 2 |
|---|---|
| Tent Size Calculator | Still top pick — **needs the AIO manual check before final commit** |
| Party/Event Budget Planner | **Confirmed safest** — clean AIO, build with confidence |
| Guest Count Estimator | Unaffected directly, but re-test on exact target phrasing recommended |
| Drink/Alcohol Quantity Calculator | **Downgraded** — reposition around what the AIO can't do (multi-type inventory, shopping list, cost total) rather than the basic "how much alcohol" math, or deprioritize below the top 3 |
| Food/Catering Quantity Calculator | Already flagged medium, now confirmed — same repositioning treatment as alcohol |
| Multi-Dimension Unit Converter | **Downgraded to high risk**, hard kill on the generic phrasing — deprioritize |

## Round 3 — the flagship failed, and it reveals a pattern the pipeline missed

**"tent size calculator" live-checked: AI Overview renders in full.** Space-guidelines-per-person table, common-tent-sizes-and-capacities table, sourced from the exact same 4 rental-company lead-gen sites the SERP-gap agent already found — and it closes with "If you can tell me your number of guests, the type of seating... I can calculate the exact tent dimensions you need." Google's AI Overview did not just summarize this tool. It became this tool.

**Score across all manual checks this session: 5 of 6 queries triggered an AI Overview** (food, guest-invite-count, alcohol, box-dimensions, tent-size). Only Party Budget Planner came back clean.

**Why the aio-resistance-checker's phrasing-based proxy missed this:** it classified "task-completion" phrasing (X calculator, online X) as low-risk based on Ahrefs' general finding that transactional queries resist AI Overviews. That holds when the "task" requires the tool to run in the user's browser (upload a file, process live input, render a visual). It does NOT hold when the "task" is actually just *plug a number into a public formula and read a table* — which is exactly what tent size, alcohol quantity, food quantity, and guest-count-from-capacity all are. Google's AI can do simple formula+lookup-table math inline just as well as a web tool can, and increasingly does. Party Budget Planner survived specifically because budgeting has real free variables (income, priorities, vendor quotes already gotten) that don't reduce to one canonical inline answer — it can't be fully pre-computed.

**Revised selection heuristic, going forward:** the real dividing line isn't task vs. informational phrasing — it's **"can Google compute the entire answer from a public formula and a guest-count input" vs. "does this genuinely require processing something the user supplies that Google can't see (their own text, code, image, or a stateful multi-step interaction)."** Formula-and-lookup-table calculators are now AI-Overview-replaceable almost by construction. Interactive/stateful tools (drag-and-drop, paste-your-own-text/code, upload-a-file, save/export state) are not.

**Re-ranking the surviving candidates under this lens:**

| Candidate | Formula-only (AIO-vulnerable) or Interactive (resistant)? | Status |
|---|---|---|
| Tent Size Calculator | Formula-only — confirmed AIO-replaced | **Demoted from flagship.** Still buildable as a companion/internal-link page for the cost-cluster (round-2 keyword logic still holds), but cannot be the traffic driver it was assumed to be |
| Drink/Alcohol Calculator | Formula-only — confirmed AIO-hit | Already deprioritized, this confirms it further |
| Food/Catering Calculator | Formula-only — confirmed AIO-hit | Same |
| Multi-Dimension Converter | Formula-only — confirmed AIO-hit | Already killed |
| Guest Count Estimator | Formula-only (guest × response-rate) — untested directly but same shape as the failed ones, high suspicion | Needs a live check before building, expect it to fail the same way |
| **Party/Event Budget Planner** | **Interactive/stateful** (multi-category running total, personal inputs, no single canonical answer) — confirmed clean | **New flagship candidate** |
| Wedding/Event Seating Chart Planner | Interactive/stateful (drag-and-drop, save/export) — not directly testable via AIO the way a formula tool is, structurally resistant by the same logic that saved Budget Planner | Previously deprioritized for build complexity (gap score 2, complex drag-and-drop build) — worth reconsidering now that its AIO-immunity is more valuable than first weighted |
| Binary/Hex/Base64/URL Toolkit, dev-tool cluster (Antigravity find) | Interactive — requires user-supplied text/code, Google can't pre-answer without the user's actual input | Structurally resistant by the same logic, no synergy with eventrentalcosts.com though |

## Round 4 — Guest Count Estimator confirmed dead, pattern closed

Both "wedding guest calculator" and "how many guests will RSVP calculator" render full AI Overviews — attendance-rate multipliers (0.80 local / 0.60 travel / 0.45 destination), table-count math, and the same closing pattern as tent size: "tell me your invite count and I can calculate your expected guest count... right now." Same mechanism, same result.

**Final tally: 3 of 3 formula-only event calculators tested (tent size, guest count, alcohol/food) died to AI Overview. 1 of 1 stateful/interactive tool tested (budget planner) survived clean.** The heuristic from Round 3 is now confirmed, not hypothesized.

## LOCKED build order

1. **Party/Event Budget Planner** — flagship. Clean AIO, Easy KD, structurally resistant (multi-category running total, no single canonical answer).
2. **Tent Size Calculator** — demoted from flagship, still built. Real synergy with eventrentalcosts.com's higher-volume "tent rental cost" cluster (round-2 keyword data), cheap/fast build (pure-client-side, deep content already confirmed via scrape). Job is internal linking and topical depth, not standalone SEO traffic.
3. **Wedding/Event Seating Chart Planner** — promoted from "reconsider" to committed #3. Structurally AIO-immune by the same logic that saved Budget Planner (drag-and-drop, stateful, exportable — nothing for Google to pre-compute). Higher build complexity (flagged in feasibility scoring) but that cost is now worth paying given the demonstrated failure mode of everything simpler.
4. **Binary/Hex/Base64/URL Toolkit** — fast, cheap, structurally resistant (requires actual user-supplied text), zero synergy with eventrentalcosts.com but diversifies the hub beyond a single failure mode and has real dev-community backlink value.
5. — reassess after 1-4 ship, using real GSC data from the live pages rather than more pre-launch research.

Guest Count Estimator and Cost-Per-Guest/RSVP-Rate (already flagged shallow/bundle-only) are not standalone builds — fold any surviving value into Budget Planner or Seating Chart Planner as a feature, not a route.

## Next steps once you've done the manual checks

1. Decide subdomain vs. new domain for the hub (see "open decision" above)
2. If new domain: Instant Domain Search shortlist, themed around
   event/party planning
3. Build order: Tent Size Calculator first (unanimous top pick), then
   Party Budget Planner + Guest Count Estimator (bundle Cost-Per-Guest and
   RSVP-Rate as features inside these two rather than separate pages)
4. GSC/Ahrefs seed list for the surviving candidates once domain is live
