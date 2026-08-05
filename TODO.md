# TODO

## Decisions needed
- [ ] Subdomain (`tools.eventrentalcosts.com`) vs new standalone domain — defaulting to **subdomain** per round-2 keyword research (tent-size tool's real value is compounding the existing higher-volume "tent rental cost" cluster, not standing alone). Proceeding on this default; say so if you want the new-domain path instead — cheaply reversible at this stage, nothing built yet locks it in.

## Build order (locked in research/00-MASTER-SHORTLIST.md)
- [x] 1. Party/Event Budget Planner — flagship. Built and verified live (real browser test, not just build success): 4 event-type presets, live editable categories, over/under-budget indicator, localStorage persistence confirmed across reload, dark mode confirmed bidirectional, mobile viewport confirmed no horizontal overflow, all nav routes confirmed 200, unknown routes confirmed 404. Wedding preset percentages sourced from The Knot's real-couples survey data (cited in-page); other 3 presets are labeled as general heuristics, not fabricated data.
- [x] 2. Tent Size Calculator — built and verified live. Guest count + seating style + extras (buffet/bar/DJ/dance floor) → sq ft needed → nearest standard tent size + next-size-up suggestion. Direct link to eventrentalcosts.com's `/tent-rental-cost/` guide (its actual SEO job per the locked plan, since it's AI-Overview-replaced on its own head term). Full dedicated SEO treatment applied per the user's `seo-s` skill — see "SEO methodology applied" section below.
- [x] 3. Wedding/Event Seating Chart Planner — built and verified live. Guest list (bulk-add supported) + tables (name/capacity/shape) + click-to-assign seating (drag-and-drop layered on top for desktop). Capacity enforcement confirmed (rejects over-capacity assignment), unseat/remove-table confirmed (correctly returns guests to pool), localStorage persistence confirmed across real reload, .txt export confirmed running without error, dark mode + mobile (375px, no overflow) confirmed. Content covers round-vs-rectangular tradeoffs, head/sweetheart table placement, family-conflict seating, why singles tables are out of favor, kids' seating — general planning heuristics, labeled as such, not attributed to a fabricated study.
- [x] 4. Binary/Hex/Base64/URL Toolkit — built and verified live. Live multi-format encode (type once, see Base64/URL/Hex/Binary simultaneously) + single-format decode with per-format error handling. All 4 encodings hand-verified correct against known values ("Hello, world!" → `SGVsbG8sIHdvcmxkIQ==` etc). All 4 decode round-trips confirmed, plus error cases (odd-length hex, invalid Base64) confirmed to fail cleanly with readable messages, not crash. Dark mode, mobile, canonical/title/H1/og-image/sitemap/llms.txt/JSON-LD all confirmed via the same checklist as tools 2-3. One thing NOT fully verifiable in this sandbox: `navigator.clipboard.writeText` fails here with "Document is not focused" (a headless-automation limitation, confirmed by testing the API directly) — code path is correct and fails safely, but the actual copy-to-clipboard UX couldn't be confirmed working end-to-end the way the math/decode logic could. Real user clicks have real document focus, so this shouldn't affect production, but flagging the limit on what was actually confirmed rather than claiming full coverage.

## Build order status: all 4 planned tools shipped
Every tool from the locked research plan (`research/00-MASTER-SHORTLIST.md`) is now built and verified. Next step is either deployment (domain decision above is the blocker) or a 5th tool if the user wants to keep expanding before deploying — no default assumption made here, ask.

## Per-tool checklist (from CompileFuture playbook, adapted)
For each tool above:
- [ ] Astro route + component
- [ ] 1200+ word original guide content (not padding — AdSense low-value-content rejection is real, confirmed via Apr 2026 forum thread)
- [ ] FAQ section with JSON-LD schema
- [ ] Mobile responsive, dark mode
- [ ] Internal link to/from eventrentalcosts.com where synergy applies
- [ ] Deployed to Cloudflare Pages, verified live (not just "pushed")

## Site-wide (do once, before or alongside tool #1)
- [x] Astro project init (v7.1.6) + Tailwind 4 (class-based dark mode via `@custom-variant`) + Cloudflare adapter (`output: 'static'`) + sitemap integration
- [x] Design pass to match `DESIGN.md` — done, verified live (computed-style checks, not just visual trust). Kept dark mode per your call ("include dark mode too if its the need") — light mode matches the sibling site's palette exactly (verified: bg `#fbfaf8`, card `#ffffff`, border `#e4ded4`, primary `#b5502f`, all confirmed via `getComputedStyle`), dark mode uses a brand-consistent warm-dark variant, not generic slate.
- [x] Privacy Policy, Terms, About, Contact pages (AdSense requirement) — real content, not filler. Contact page uses the account owner's real email; swap to a dedicated address if preferred.
- [x] 404 page (custom, noindex) — verified live, unknown routes correctly return 404 via the custom page
- [x] robots.txt (static, with explicit AI-crawler allow blocks) + sitemap-index.xml (via @astrojs/sitemap, auto-generated at build)
- [ ] `_headers` noindex rule for the `*.pages.dev` preview domain — can't be written correctly until the real Cloudflare Pages project name/URL exists post-first-deploy
- [ ] Google Analytics
- [ ] Google Search Console + Bing Webmaster Tools submission on launch day
- [x] Homepage — real tool-listing grid, reads from `src/lib/tools.ts` (single source of truth, also feeds `llms.txt`)
- [x] `og:image`/`twitter:image` — was completely missing from `Layout.astro` until the `seo-s` skill audit caught it. Generated via Playwright (`scripts/og-image.mjs`, same approach as eventrentalcosts.com's own script), 1200x630, no stats baked in (learned from the sibling project's own postmortem — a stats-bearing OG image silently goes stale).
- [x] `llms.txt` — build-time generated (`src/pages/llms.txt.ts`), not a static file, for the same reason the sibling project switched: a static file drifts every time a tool gets added. Reads from the same `tools.ts` list as the homepage.

## SEO methodology applied (user's `seo-s` skill, adapted from Next.js/Vercel to Astro/Cloudflare)

The skill is written for Next.js App Router + Vercel. Most of its bug classes don't exist in this stack — worth stating explicitly rather than silently skipping:
- **Canonical tag bugs (the skill's #1 issue)**: don't apply here at all. The Next.js bug is specifically that client components can't export `metadata` and silently inherit the root layout's canonical. Astro has no client/server component split for page metadata — every `.astro` page computes its own canonical via `Layout.astro`'s shared `new URL(Astro.url.pathname, Astro.site)`, always self-referencing, always present. Verified live on the new tool page anyway rather than assuming: confirmed self-referencing.
- **Title template stacking**: doesn't apply — titles here are hand-written full strings per page (not a `template: '%s | Brand'` pattern), so no double-brand-name risk.
- **Caching/Cache-Control concerns**: mostly don't apply — this is a 100% static site, no per-request auth/cookie reads that would kill CDN caching the way the skill describes for Next.js Server Components.

What DID apply and got fixed:
- **`og:image` was completely missing** from `Layout.astro` — real gap the skill's audit caught, not previously noticed. Fixed site-wide (see Site-wide section above).
- **Meta description length**: both Budget Planner (205 chars) and Tent Size Calculator's first draft (178 chars) were over the skill's 150-160 truncation-risk target. Trimmed both to ~148 chars, verified via `wc -c` against the live rendered output, not just the source string.
- **`llms.txt`**: net-new per the skill's own "zero risk, add it" priority — built-time-generated rather than static, see above.
- **robots.txt**: already matched the skill's AI-crawler-allowlist recommendation from session 2, before this skill was read — no change needed, but re-verified live.
- **Sitemap**: `@astrojs/sitemap` auto-discovers from actual build output (unlike Next's `next-sitemap`, which the skill warns can silently miss server-data-fetching routes) — structurally immune to the skill's "silent coverage gap" warning. Verified live anyway: all 7 real routes present, no self-reference, no private/redirecting URLs.
- **Structured data**: FAQPage JSON-LD parse-validated on both tools via live `JSON.parse()` against the rendered page, not just eyeballed.
- **H1 count**: verified exactly 1 per page via live `grep -c` against rendered HTML, not assumed from markup.
- **Soft-404 handling**: re-confirmed real 404 status (not just custom-page content) via `curl -s -o /dev/null -w "%{http_code}"` against the live static build.

**Cloudflare-specific risk the skill flags for a different platform (Vercel bot-management) but applies here too, differently**: Cloudflare zones ship with "Managed robots.txt" (AI Crawl Control) ON by default, which PREPENDS Disallow rules for GPTBot/ClaudeBot/Google-Extended that override the ones in this repo's `robots.txt` — this is a dashboard setting, invisible from code, and can't be checked until the site is actually deployed to a real Cloudflare Pages project. Flagged for the launch-day checklist, not fixable now.

## Known CSS gotcha (read before adding more shared component classes)
`.card`/`.btn`/`.field`/`.badge*` in `global.css` are deliberately NOT wrapped in `@layer components`. Astro compiles each component's scoped `<style>` block to plain unlayered CSS, and unlayered CSS always beats layered CSS regardless of specificity (CSS Cascade Layers spec) — wrapping shared classes in `@layer` made `.card`'s border-color silently lose to Astro's scoped styles on any element with a `data-astro-cid-*` attribute. Root-caused via testing (an inline-style element resolved the same CSS variable correctly; the layered class version on a scoped element didn't), not guessed. Keep new shared classes unlayered too, matching the sibling site's actual proven CSS.

**Related gotcha:** don't put `transition: <property>` on an element where that property's value comes from a `:root`/`:root.dark`-level CSS custom property (i.e. any of the theme colors). Confirmed via testing: toggling dark mode left `.tool-card`'s `border-color` stuck at the pre-toggle value when a hover `transition: border-color` was declared — even outside any hover interaction, even with a 300ms wait before checking. Removing the transition fixed it immediately, in both directions. The sibling site's CSS has no transitions on its hover color changes either — matches proven precedent, not just a workaround.

## Known environment quirk (read before running `npm run dev` in this project)
`npm run dev` (wrangler/Miniflare's local Cloudflare simulation via `@astrojs/cloudflare`) fails repeatedly in this sandbox — it tries to reach `workers.cloudflare.com` to simulate the `cf` request object, that fetch fails (DNS/timeout), and unlike `npm run build` (clean fallback), dev mode cascades this into 500s on every request. Confirmed via [cloudflare/workers-sdk#3460](https://github.com/cloudflare/workers-sdk/issues/3460) — known issue, not a bug in this project's code. **Workaround: build first (`npm run build`), then serve the real static output with `npx serve dist/client -l <port>`** (note: `dist/client`, not `dist` — the Cloudflare adapter nests static output under `client/` even in `output: 'static'` mode) — this is also a more accurate test of production behavior since Cloudflare Pages serves `dist/client`'s contents directly, no Workers runtime involved for a purely static site.

## Deferred, on purpose
- [ ] Guest Count Estimator, Cost-Per-Guest, RSVP-Rate as standalone routes — all confirmed/suspected AI-Overview-replaceable on their own. Fold into Budget Planner or Seating Chart as features if they add value, not separate pages.
- [ ] Drink/Alcohol Calculator, Food/Catering Calculator — deprioritized (Medium KD + confirmed AIO hit for alcohol; confirmed AIO hit for food). Revisit only with a genuinely different angle (shopping-list export, multi-type inventory) the AI Overview can't replicate.
- [ ] Dev-tool cluster (CSS box-shadow generator etc., Antigravity's find) — better raw search volume than event tools, but zero synergy with eventrentalcosts.com. Not started; candidate for a second cluster after the event hub is live and generating real GSC data.
- [ ] Google AdSense application — wait for 10+ daily users, per the playbook's own threshold. Applying at zero traffic risks a rejection on record.

## Dev-tooling hygiene (not urgent, not shipped to production)
- [ ] `npm audit`: 5 vulnerabilities (4 moderate, 1 high) in `undici`, transitive via wrangler/miniflare/@astrojs/cloudflare's dev-time tooling. Not in the production static build, not a runtime risk to the deployed site. Fix requires a breaking wrangler major bump (`npm audit fix --force` → wrangler 4.35.0) — didn't do this reactively, revisit deliberately when there's time to verify the adapter still works after the bump.

## AdSense hard constraints (do not violate)
- No finance/health/legal/insurance/tax/medical/salary tools, ever — confirmed permanent-rejection pattern from Google's own AdSense forum
- Every tool page needs genuine 1200+ word content, not keyword padding
