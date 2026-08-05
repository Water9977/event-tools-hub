# TODO

## Decisions needed
- [ ] Subdomain (`tools.eventrentalcosts.com`) vs new standalone domain — defaulting to **subdomain** per round-2 keyword research (tent-size tool's real value is compounding the existing higher-volume "tent rental cost" cluster, not standing alone). Proceeding on this default; say so if you want the new-domain path instead — cheaply reversible at this stage, nothing built yet locks it in.

## Build order (locked in research/00-MASTER-SHORTLIST.md)
- [x] 1. Party/Event Budget Planner — flagship. Built and verified live (real browser test, not just build success): 4 event-type presets, live editable categories, over/under-budget indicator, localStorage persistence confirmed across reload, dark mode confirmed bidirectional, mobile viewport confirmed no horizontal overflow, all nav routes confirmed 200, unknown routes confirmed 404. Wedding preset percentages sourced from The Knot's real-couples survey data (cited in-page); other 3 presets are labeled as general heuristics, not fabricated data.
- [ ] 2. Tent Size Calculator — companion page, links into existing eventrentalcosts.com cost-cluster. AI-Overview-replaced on its own head term, built for internal linking/topical depth, not standalone traffic
- [ ] 3. Wedding/Event Seating Chart Planner — structurally AIO-immune (drag-and-drop, stateful, exportable). Higher build complexity, worth it given how the simpler formula tools died
- [ ] 4. Binary/Hex/Base64/URL Toolkit — fast, cheap, structurally resistant (needs real user-supplied text), diversifies hub outside the event-only failure mode

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
- [ ] Homepage — still the Astro scaffold placeholder, needs real tool-listing content once more tools exist (was going to wire it after tool #1, doing it next)

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
