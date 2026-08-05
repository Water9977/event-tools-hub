# Handoff: Event Tools project → for the agent working in eventrentalcosts.com

This file is written for a fresh Claude session with zero prior context on
this project — specifically the session running in
`E:\Claude\Workspaces\Niche Directory` (the eventrentalcosts.com codebase).
If you're reading this, the user pointed you at this folder
(`E:\Claude\Workspaces\Tool 1`) so you can read the actual code, not just
this summary. Read this first for orientation, then the code for ground
truth — this doc explains *why* things are shaped the way they are, which
the code alone won't tell you.

## What this project is, in one paragraph

A companion site to eventrentalcosts.com: free, browser-based calculators
and planners for event/party planning (currently a wedding/event budget
planner and a tent-size calculator, more planned). It exists because a
multi-agent research pass found that the event-planning tool niche is the
one micro-tool category that both (a) scores well on SEO/monetization
fundamentals and (b) directly compounds eventrentalcosts.com's existing
authority instead of starting a new domain from zero. Full research trail
is in `research/` in this folder if you want the receipts — 134 candidate
tools were scored across SERP gap, AI Overview risk, monetization/YMYL
safety, and build feasibility before landing on this niche.

## Why this exists as a *separate* project instead of new pages on your site

This was a deliberate decision, not an oversight — read this before
assuming the two codebases should be merged.

**Your site (`Niche Directory/website`) is plain hand-written CSS, no
framework.** This project uses **Tailwind v4**. If you copy any of this
project's `.astro` files directly into your `src/pages/`, every
`class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"`-style class does
nothing — Tailwind isn't installed in your project, those utility classes
have no corresponding CSS. The page would render structurally but visually
broken (no grid, no spacing, no colors from the utility classes).

**The fix is not "add Tailwind to your project"** — that's real
scope-creep risk on a working, deployed site for a project that doesn't
need it elsewhere. **The recommended integration is cross-linking, not a
code merge**: this project deploys as its own site (see "Deployment plan"
below), and "integration" means adding a handful of `<a>` links between
the two sites — from your tent-rental-cost content pointing at the tent
size calculator, and vice versa. No shared framework, no dependency
overlap, nothing fragile. When each tool goes live, exact copy-paste
snippet text will be provided for you to drop into `Header.astro`,
`Footer.astro`, or specific content pages — not files to merge.

## Deployment plan — where does this actually end up

**Not deployed anywhere yet.** Everything so far is local, unpublished,
no domain purchased, no Cloudflare Pages project created.

**Still an open decision** (flagged in this project's own `TODO.md`,
not silently resolved): subdomain of your domain
(`tools.eventrentalcosts.com`, zero extra cost, some inherited authority)
vs. a fully separate new domain (~$10-12/yr, cleaner brand independence).
Currently *defaulting* to subdomain based on keyword research (the tent
calculator's real SEO value comes from linking into your higher-volume
"tent rental cost" keyword cluster, not standing alone), but this hasn't
been explicitly confirmed by the user yet. If you're asked to help with
DNS/Cloudflare setup for a `tools.` subdomain pointing at a separate
Cloudflare Pages project, that's this decision resolving to "subdomain."

Either way: **separate Cloudflare Pages project**, separate deploy, own
build pipeline. Not a route inside your existing Pages project.

## Stack (this project only — different from yours in places)

- **Astro 7.1.6** (yours is Astro 5.x — different major version, FYI if
  you're ever comparing APIs/behavior between the two)
- **Tailwind CSS v4**, CSS-first config (`@theme`/`@theme inline` in
  `src/styles/global.css`, no `tailwind.config.js`)
- **`@astrojs/cloudflare` adapter**, `output: 'static'` explicitly set —
  every tool is 100% client-side JS, zero server/API cost, matches your
  project's own static-hosting-only philosophy even though the CSS
  approach differs
- **`@astrojs/sitemap`** integration (auto-discovers from actual build
  output — same category of tool your project uses, different major
  version of the ecosystem)
- **`@tailwindcss/typography`** for the long-form guide content on each
  tool page
- **Playwright** (dev dependency) for OG image generation — literally
  copied your project's own `scripts/og-image.mjs` pattern almost
  verbatim, including the "don't bake in stats that go stale" lesson from
  your script's own comment
- No database, no API routes beyond one build-time-generated `llms.txt.ts`
  endpoint (same pattern as your `src/pages/llms.txt.ts` — copied that
  fix too, for the same reason: a static llms.txt drifts as pages get
  added, yours already learned this the hard way once)

## Design system — deliberately matched to your site, not a new brand

`DESIGN.md` in this folder's root was built by reading **your actual
source CSS** (`Niche Directory/website/src/styles/global.css`,
`Header.astro`, `Footer.astro`, etc.) directly — not by re-scraping your
live site and guessing. A live-page scrape was also done as a
cross-check and it got two things wrong (said your font was literally
"Roboto" when it's a system-font stack with Roboto as one fallback; said
border-radius was `0px` when your real values are 6/10/16px) — worth
knowing if you ever need to re-verify design tokens from a scrape instead
of the repo, that automated extraction isn't fully reliable.

Palette matches yours exactly in light mode: warm off-white bg
(`#fbfaf8`), terracotta primary (`#b5502f`), deep green accent
(`#2f6b5e`), your exact border-radius scale (6/10/16px), your exact font
stack. **This project also has a dark mode** (yours doesn't) — built as a
brand-consistent warm-dark variant (same hue families, adjusted for
dark-background contrast), not a generic slate palette, so it doesn't
read as a different product at night. User explicitly asked to keep dark
mode ("include dark mode too if its the need").

### Two real CSS bugs found and fixed — worth knowing even for your project

These aren't Tailwind-specific; they're general Astro + CSS behavior that
could bite your project too if it ever grows scoped `<style>` blocks
combined with any global class relying on cascade layers, or dark-mode-
style runtime theme swapping:

1. **Astro compiles each component's scoped `<style>` block to plain,
   unlayered CSS.** Per the CSS Cascade Layers spec, unlayered CSS always
   beats layered CSS (`@layer ...`) regardless of specificity or source
   order. This project initially wrapped shared component classes
   (`.card`, `.btn`, etc.) in `@layer components` — which made them
   silently lose to Astro's own scoped component styles on any element
   with a `data-astro-cid-*` attribute (i.e. basically every element on
   the site). Fixed by not using `@layer` for shared classes at all —
   which, worth noting, matches what your project's `global.css` already
   does (no `@layer` wrapping there either — you didn't hit this bug
   because you never introduced the layer in the first place).
2. **`transition: <property>` on a property whose value comes from a
   `:root`-level custom property (a CSS variable used for theming) can
   fail to re-trigger correctly** when the variable changes via a class
   toggle on an ancestor rather than a direct style change on the
   transitioning element. Confirmed via testing (not just theory): a
   dark-mode toggle left one card's border-color stuck on the pre-toggle
   value, reproducibly, only in one direction. Fix was removing the
   transition — an instant color change on toggle/hover is fine UX. Your
   project's CSS also has no transitions on its hover color changes,
   which is why you wouldn't hit this either — but if you ever add one
   to a property backed by a custom property, this is the failure mode
   to know about.

## What's built and verified so far

Both live-tested against the real built static output (`dist/client/` —
note: **not** `dist/` directly, the Cloudflare adapter nests static
output under `client/` even in `output: 'static'` mode, second real bug
found and documented in this project's `TODO.md`), not just source code:

1. **Party & Event Budget Planner** (`/party-budget-planner/`) — event-
   type presets (wedding/birthday/corporate/casual), live category
   editing, over/under-budget math, localStorage persistence. Wedding
   preset percentages cited from The Knot's real-couples survey data
   (stated explicitly in-page); other presets labeled as general
   heuristics, not fabricated data.
2. **Tent Size Calculator** (`/tent-size-calculator/`) — guest count +
   seating style + extras (buffet/bar/DJ/dance floor) → square footage →
   nearest standard tent size. **This tool's job is specifically to link
   to your `/tent-rental-cost/` guide** — it has a dedicated callout box
   doing exactly that already in the markup (`src/pages/tent-size-calculator.astro`,
   search for `eventrentalcosts.com/tent-rental-cost`). Its own head
   term ("tent size calculator") was found to be fully answered by
   Google's AI Overview during research — verified live, not assumed —
   so it isn't expected to drive its own significant search traffic;
   its value is the internal link into your higher-volume cluster plus
   general topical depth.
3. **Wedding/Event Seating Chart Planner** (`/seating-chart-planner/`) —
   guest list + tables + click-to-assign seating (drag-and-drop layered on
   top for desktop). No cross-link to your site on this one — it's not
   tied to your rental-pricing content the way the tent calculator is.

Check `TODO.md`'s "Build order" section for the live status of tool #4
and beyond by the time you're reading this — this doc won't stay updated
in real time as the project progresses past this point.

## SEO approach

The user has their own SEO audit skill
(`E:\Claude\Claude Skills\seo-s\SKILL.md`), written for Next.js/Vercel.
Read it, then read `TODO.md`'s "SEO methodology applied" section in this
project for exactly which of its bug classes do and don't apply to a
static Astro/Cloudflare site (most of the Next.js-specific ones
structurally don't apply here — no client/server component metadata
split exists in Astro the way it does in Next's App Router). Real gaps
that skill's process did catch and fix here: a missing `og:image` (was
never wired since the site was first scaffolded), meta descriptions that
were over the 150-160 char truncation-risk threshold on two pages.

One Cloudflare-specific risk flagged for launch day, relevant to your
project too if you haven't already checked it: **Cloudflare zones ship
with "Managed robots.txt" (AI Crawl Control) ON by default**, which
prepends Disallow rules for AI crawlers (GPTBot, ClaudeBot,
Google-Extended) that can override whatever's actually in the repo's
`robots.txt` file. This is a dashboard toggle, invisible from code —
worth checking on your project's Cloudflare zone too if it hasn't been
checked.

## Files worth reading directly, in priority order

1. `TODO.md` — current, flat status of everything (what's done, what's
   deferred and why, known gotchas)
2. `architecture.md` — full narrative history of every session's work,
   decisions, and root-caused bugs, in date order
3. `DESIGN.md` — the design system, sourced from your actual code
4. `research/00-MASTER-SHORTLIST.md` — the tool-selection research and
   why AI Overview risk reshaped the build order mid-research
5. The actual `.astro` source files for the two live tools, if you want
   to see the real implementation

## What NOT to do with this codebase

- Don't copy `.astro` files directly into your project — see "Why this
  exists as a separate project" above.
- Don't add Tailwind to your project to "unify" the two — that's a much
  bigger, riskier change to a working deployed site than this project
  needs from you.
- Don't assume subdomain vs. new-domain is decided — it isn't yet, check
  `TODO.md`'s "Decisions needed" section for current status.
