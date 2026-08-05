# Monetization Scores — 134 Candidates

Role: monetization-analyst. Input: `01-opportunity-candidates.md`. Hard rule applied first (YMYL auto-reject, including safety-critical, checked row-by-row even though upstream mining claims to have excluded YMYL topics at source). Surviving candidates scored on commercial intent, advertiser-category proxy, and eventrentalcosts.com synergy. Reasoning-first for all 134; live Firecrawl search/scrape used to validate ~24 ambiguous or high-stakes candidates (event-planning cluster, home-improvement affiliate rates, writing/career-tool affiliate ecosystems, electrical-safety classification, PDF/image SaaS business models, Amazon-affiliate adjacent shopping tools). Firecrawl was intermittently rate-limited (shared quota with parallel pipeline agents) — searches that failed were not retried indefinitely; those rows rely on category-level reasoning plus the successful searches for adjacent candidates in the same niche.

## Hard-rule YMYL screen — 3 additional rejections caught downstream of source filtering

Upstream mining excluded the obvious finance/health/legal/tax/salary categories. Re-checking all 134 rows for tangential safety-critical matches surfaced three the category labels didn't flag:

- **Voltage Drop Calculator** (row in Electronics) — confirmed via search: this is explicitly an NEC (National Electrical Code) wire-sizing/circuit-safety tool used by "electricians and engineers" (Southwire, apps aimed at licensed trades) to size conductors so they don't overheat. Getting it wrong is a fire/shock risk. **REJECTED-YMYL (safety-critical).**
- **Wire Size Calculator** (Electronics) — same NEC ampacity/safety-margin category as above, same competitor set. **REJECTED-YMYL (safety-critical).**
- **Stair Calculator (rise/run/stringer)** (Construction) — stair rise/run ratios are governed by residential building code specifically because wrong ratios cause falls; this is prescriptive "build it this way to be safe" output, not a materials-quantity estimate like the other construction calculators. **REJECTED-YMYL (safety-critical).**

Two more were evaluated and *not* rejected, but flagged here for visibility since they sit close to the line:
- **Resistor Color Code Calculator** / **Ohm's Law Calculator** — kept as PASS. These are descriptive/reference and basic-physics tools (decode a color band; V=IR), not prescriptive installation-safety advice the way wire sizing is. Scored low regardless (niche hobbyist audience, low CPC).
- **Radiation Activity Converter (Curie/Becquerel)** — kept as PASS. It's a generic scientific unit converter with no dose/exposure/treatment framing (unlike a medical radiation-dosing calculator, which would be rejected). Scored 1/5 anyway — near-zero commercial audience regardless of YMYL status.

No finance/health/legal/tax/salary candidates were found to have slipped through category mislabeling — the source file's exclusion-at-source appears to have worked for that set. The gap was specifically in the "safety-critical, even tangentially" clause, which the category labels ("Electronics," "Construction") gave no hint of.

## Full scoring table

| Candidate | YMYL status | Commercial intent | Advertiser demand signal | Monetization score 1-5 | Synergy with eventrentalcosts.com? |
|---|---|---|---|---|---|
| Roman Numeral Converter | PASS | Low — pure reference/education query, no shopping adjacency | None found — generic display-ads only | 1 | No |
| Typography Unit Converter (twip/pica/point/pixel) | PASS | Very low — dev/print-design niche lookup | None — no dedicated ad vertical | 1 | No |
| Shoe Size Conversion | PASS | Moderate-high — "shoe size" sits directly next to footwear shopping intent | Strong — footwear e-commerce affiliate widely available (Amazon Associates, brand affiliate programs) | 4 | No |
| Data Transfer Unit Converter | PASS | Low — dev/IT niche | None | 1 | No |
| Illumination Converter | PASS | Very low — lighting-engineer niche | None | 1 | No |
| Permeability Converter | PASS | Very low — materials-science niche | None | 1 | No |
| Heat Transfer Coefficient Converter | PASS | Very low — engineering niche | None | 1 | No |
| Radiation Activity Converter (Curie/Becquerel) | PASS (see note above — kept, not medical dosing) | Very low — scientific/nuclear-industry niche, no purchase decision attached | None | 1 | No |
| Binary/Hex/Base64/URL Encode-Decode Toolkit | PASS | Low — developer utility, high ad-blocker usage in this audience | Weak — some dev-tool/cloud-hosting display ads, low CTR | 2 | No |
| Wire Gauge (AWG/SWG) to mm Converter | PASS — dimension-only conversion, not an ampacity/safety calc | Low-moderate — electronics hobbyist, mild wire/cable Amazon-affiliate adjacency | Weak-moderate | 2 | No |
| Cooking Measurement Converter | PASS | Moderate — cooking audience adjacent to kitchenware/recipe affiliate | Moderate — Amazon kitchenware affiliate | 3 | No |
| Day of the Week Calculator | PASS | Very low — pure reference | None | 1 | No |
| Day Counter / Days Between Dates | PASS | Low — utility/reference | None | 2 | No — but note: "days until my event" is a natural countdown use case; not tagged upstream, worth a light cross-link if built |
| Time Zone Calculator | PASS | Low — utility, weak travel-booking adjacency | Weak | 2 | No |
| Month Counter | PASS | Low — utility | None | 1 | No |
| Unix Timestamp / Epoch Converter | PASS | Low — developer tool | None | 1 | No |
| Anniversary Calculator (wedding/relationship/work) | PASS | High — anniversary queries convert directly to gift-shopping intent (jewelry, flowers, experiences) | Strong — gift/jewelry/flower-delivery affiliate ecosystem is large and well-established | 4 | **Yes** (tagged upstream; also a natural gift-shopping/event cross-link) |
| Working Days / Business Days Calculator | PASS | Low-moderate — B2B/HR/project-management audience | Weak — some SaaS display ads | 2 | No |
| Years Between Two Dates Calculator | PASS | Low | None | 1 | No |
| "How Old Was I On This Date" Calculator | PASS | Low — novelty | None | 1 | No |
| Online Clock / Stopwatch / Timer Bundle | PASS | Low-moderate — generic but high repeat-visit utility | Weak | 2 | No |
| Word Counter | PASS | Moderate — confirmed via search: sits directly in the Grammarly/writing-tool funnel | Confirmed — Grammarly runs a two-tier affiliate program; broader grammar-checker affiliate market exists (affiliateprogramdb.com lists several, 25%+ commissions) | 3 | No |
| Case Converter (upper/lower/sentence/title) | PASS | Moderate — same writing-tool audience as Word Counter | Confirmed — same Grammarly/writing-tool ecosystem | 3 | No |
| Title Case Converter (AP/Chicago/MLA-specific) | PASS | Low-moderate — narrower academic/journalism niche | Weak-moderate, same ecosystem, smaller volume | 2 | No |
| Cool/Fancy Text Generators (bold, zalgo, bubble, etc.) | PASS | Low-moderate — social-media/gaming bio-decoration audience, viral traffic potential | Weak — low CPC, some Canva/social-tool adjacency | 2 | No |
| Text Diff Checker | PASS | Low — developer utility | None | 1 | No |
| JSON Validator / Formatter | PASS | Low — developer utility | None | 1 | No |
| JS/CSS Minifier | PASS | Low — developer utility | None | 1 | No |
| Whitespace Remover / Cleaner | PASS | Very low — thin single-purpose utility | None | 1 | No |
| Reading Time Calculator | PASS | Low-moderate — blogger/content-marketer audience | Weak, same writing-tool-adjacent ecosystem | 2 | No |
| Word Synonym Finder Ranked by Popularity | PASS | Low-moderate — writer/fanfic niche, unmet demand = good SEO gap but thin commerce | Weak | 2 | No |
| Grammatical Case / Word-Form Identifier (language learner) | PASS | Low — niche language-learner audience | Weak — language-course affiliate (Duolingo, italki) tangential | 2 | No |
| Furigana Reading Generator (Japanese) | PASS | Low — niche Japanese-learner audience | Weak — JLPT/course affiliate tangential | 2 | No |
| AO3-style / Platform-Specific Word Counter | PASS | Very low — fanfiction hobbyist community, ad-averse | None | 1 | No |
| LaTeX to Word (.docx) Converter | PASS | Low-moderate — academic/professional audience | Weak-moderate — Overleaf/EndNote/Grammarly adjacency | 2 | No |
| Scrolling Screenshot to Single Long Image Stitcher | PASS | Low — dev/support-ticket utility | None | 1 | No |
| Random Number Generator | PASS | Low — generic utility | None | 1 | No |
| Number Picker Wheel (spin-to-pick) | PASS | Low-moderate — novelty/decision tool, raffle/giveaway adjacency | Weak | 2 | No |
| Dice Roller (standard + custom-sided) | PASS | Low-moderate — tabletop-gaming audience | Weak-moderate — Amazon dice/game-set affiliate | 2 | No |
| Dice Roller with Modifiers (RPG notation) | PASS | Low-moderate — TTRPG hobbyist niche, high engagement | Weak-moderate — D&D/tabletop gear affiliate (Amazon, DriveThruRPG) | 2 | No |
| Liar's Dice Roller (party game) | PASS | Very low — extremely niche | None | 1 | No — but plausible unlisted cross-link: party-game tool for hosts, worth flagging to eventrentalcosts.com's games/party-supply angle |
| Coin Flip Simulator | PASS | Low — generic decision tool | None | 1 | No |
| Coin Flip Decision Maker (best-of-X) | PASS | Low — niche variant | None | 1 | No |
| Random Password Generator | PASS | Moderate — security-conscious audience overlaps password-manager shoppers | Moderate — password managers (1Password, NordPass, Bitwarden, Dashlane) commonly run affiliate programs | 3 | No |
| Random Team Generator/Picker | PASS | Low-moderate — classroom/office/sports audience | Weak | 2 | No — plausible unlisted cross-link: splitting guests into teams for party games |
| Random List Shuffler/Randomizer | PASS | Low | None | 1 | No |
| Random Item Picker | PASS | Low | None | 1 | No |
| Random Wheel / Wheel of Names (topic presets) | PASS | Low-moderate — classroom/party-game presets (dares, would-you-rather) drive decent viral traffic | Weak | 2 | No — but the party-preset variants (dares, drinking-game style) are a plausible unlisted cross-link worth a look |
| QR Code Generator | PASS | Moderate — business/marketing audience but dominated by free giants (Canva bundles QR free) | Moderate — business-software adjacency, but hard to out-compete bundled free tools | 3 | No |
| WiFi QR Code Generator | PASS | Low-moderate — narrow niche | Weak | 2 | No — plausible unlisted cross-link: hosts commonly print WiFi QR codes for wedding/party guests, worth a look |
| Event/App-Download QR Code Generator | PASS | Low-moderate | Weak | 2 | **Yes** (tagged upstream) |
| Custom QR Code with Logo/Colors | PASS | Moderate — business-marketing audience, higher intent than generic QR | Moderate | 3 | No |
| Lenny Face / Text Emoticon Generator | PASS | Very low — pure novelty | None | 1 | No |
| Emoji Cheat Sheet / Emoji List by Category | PASS | Low — high-volume reference, no commerce attached | None | 1 | No |
| DPS (Damage Per Second) Calculator for Games | PASS | Low — gaming niche | Weak — gaming ad networks (Ezoic/Mediavine) accept but low CPC | 2 | No |
| CPS Test (Click Speed Test) | PASS | Low-moderate — very high viral/search volume offsets low per-visit value | Weak — gaming-peripheral affiliate adjacency (mice/keyboards) possible | 2 | No |
| Reaction Time Test | PASS | Low-moderate — similar profile to CPS Test | Weak, same adjacency | 2 | No |
| Online Scoreboard (tally counter for games/sports) | PASS | Low-moderate — sports/games/events audience | Weak | 2 | No — plausible unlisted cross-link: party-game/tournament scoreboard for event hosts |
| Online Click Counter / Tally Counter | PASS | Low — generic utility | None | 1 | No |
| Background Remover | PASS | Moderate-high — remove.bg's paid-subscription model ($8-80/mo) proves strong willingness-to-pay; free ad-supported alternative has real audience (confirmed: competitors like bgclear.ai already run this exact ad-supported model) | Moderate — e-commerce/design-tool adjacency, display ads + design-software affiliate (Canva) | 4 | No |
| Reverse Image Search Tool | PASS | Moderate — "consistently top-ranking" per source note; generic low-CPC utility but volume compensates | Weak-moderate | 3 | No |
| Image Resize Tool | PASS | Low-moderate — generic utility | Weak | 2 | No |
| Image Compress Tool | PASS | Low-moderate — web-dev/e-commerce-seller adjacency | Weak-moderate | 2 | No |
| HEIC to JPG Converter | PASS | High — confirmed by source note (iPhone photo compatibility is a frequent, urgent, high-intent need) | Moderate — photo-printing/cloud-storage adjacency | 4 | No |
| WebP to JPG/PNG Converter (and reverse) | PASS | Moderate — web-dev/e-commerce-seller audience | Weak-moderate | 2 | No |
| Batch Image File-Size Reducer (exact target size) | PASS | Moderate — real-estate/application-portal/prosumer audience with a specific unmet need | Moderate | 3 | No |
| Image EXIF Viewer / EXIF Remover | PASS | Low-moderate — privacy-conscious audience | Weak | 2 | No |
| Image Watermark Adder | PASS | Moderate — photographer/small-business audience | Moderate — photography gear/software affiliate | 3 | No |
| Photo Collage Maker | PASS | Moderate — gift/print adjacency | Moderate — print-service affiliate (Shutterfly-type) | 3 | No — plausible unlisted cross-link: event/party photo-booth collage prints |
| Seamless Pattern Generator (auto-tile, plaid, polka dot, holiday) | PASS | Low — niche designer/print-on-demand audience | Weak — Printify/Redbubble adjacency | 2 | No |
| Posterize Picture Tool | PASS | Very low — niche design-effect tool | None | 1 | No |
| PDF Merge Tool | PASS | Moderate — confirmed: ad-supported model is proven viable (PDF24 monetizes purely via ads; iLovePDF/Smallpdf run freemium) | Moderate — office/business software display ads | 3 | No |
| PDF Split Tool | PASS | Moderate — same ecosystem as PDF Merge | Moderate | 3 | No |
| PDF Compress Tool | PASS | Moderate — same ecosystem | Moderate | 3 | No |
| PDF to JPG / JPG to PDF | PASS | Moderate — same ecosystem | Moderate | 3 | No |
| PDF Page Numbers / Watermark Adder | PASS | Low-moderate — narrower feature-level need | Weak-moderate | 2 | No |
| PDF Page-by-Page File Size Splitter (Etsy 20MB cap) | PASS | Moderate — specific online-seller pain point (Etsy/print-on-demand) | Moderate — online-seller tool adjacency (Printify, Canva) | 3 | No |
| Webpage/Doc-to-PDF One-Click Converter | PASS | Low-moderate — generic office utility | Weak-moderate | 2 | No |
| Audio Format Converter (MP3/WAV/M4A/FLAC) | PASS | Low-moderate — generic utility | Weak | 2 | No |
| Video Trim/Merge/Split/Compress/to-GIF Toolkit | PASS | Moderate — content-creator audience | Moderate — video-editing-software affiliate (Adobe, Envato, CapCut) | 3 | No |
| Hash Generator Toolkit (MD5/SHA/CRC32/bcrypt/argon2) | PASS | Low — developer/security niche | None | 1 | No |
| Zip/Unzip File Tool (browser-based) | PASS | Low — generic utility | None | 1 | No |
| RGB to Hex/HSL/HSV/CMYK Color Converter | PASS | Low-moderate — designer/developer audience | Weak | 2 | No |
| Color Picker Tool | PASS | Low-moderate — designer/developer audience | Weak | 2 | No |
| Color Wheel / Color Scheme Generator | PASS | Low-moderate — design audience | Weak | 2 | No — plausible unlisted cross-link: wedding/event color-palette planning is a real search pattern ("wedding color scheme generator") |
| HTML Color Codes Reference | PASS | Low — pure reference table | None | 1 | No |
| Online Screen Ruler (actual-size measurement) | PASS | Low — confirmed via search: purely generic one-off utility, no dedicated advertiser vertical found among 5+ competitor sites | None-weak | 2 | No |
| Actual-Size Device Comparison Tool (phone/watch/earbuds) | PASS | Moderate — sits at the point of gadget-purchase decision | Moderate — Amazon device affiliate, high intent | 3 | No |
| Protractor / Angle Measurement Tool | PASS | Low — niche utility | None | 1 | No |
| GPS Distance Calculator | PASS | Low-moderate — travel-adjacent | Weak | 2 | No |
| My Coordinates (current GPS lookup) | PASS | Low — generic utility | None | 1 | No |
| Multi-Dimension Unit Converter (L×W×H) | PASS | Low-moderate — shipping/moving/furniture-shopping adjacency | Weak-moderate — Amazon/Wayfair affiliate potential | 2 | No |
| Screen Size / Aspect Ratio Calculator | PASS | Moderate — TV/monitor purchase-decision adjacency | Moderate-strong — Amazon/Best Buy electronics affiliate | 3 | No |
| Camera Field of View Calculator | PASS | Moderate — photography-gear shopping adjacency | Moderate — B&H/Amazon camera affiliate | 3 | No |
| RAM Latency Calculator | PASS | Moderate — PC-building audience actively shopping for RAM | Moderate — Amazon/Newegg component affiliate | 3 | No |
| Streaming Bitrate Calculator | PASS | Low-moderate — streamer/content-creator audience | Weak-moderate — streaming-gear/software affiliate | 2 | No |
| Video File Size Calculator (by format) | PASS | Low-moderate | Weak-moderate — cloud-storage affiliate adjacency | 2 | No |
| Download Time / Data Transfer Calculator | PASS | Moderate — ISP/broadband-comparison adjacency is a real ad vertical | Moderate | 3 | No |
| Moon Phase Calculator | PASS | Low-moderate — novelty/astrology audience | Weak — telescope/astrology-app affiliate | 2 | No |
| Antipode Calculator (opposite point on Earth) | PASS | Very low — novelty | None | 1 | No |
| Great Circle Calculator (shortest path around globe) | PASS | Low — aviation/travel niche | Weak | 1 | No |
| Fabric Calculator (yardage needed) | PASS | Moderate — confirmed real affiliate ecosystem (FlexOffers lists a JOANN affiliate program, 0.8-16% commission), though the category is in flux after JOANN's store closures/bankruptcy reorganization | Moderate | 3 | No |
| Price Per Unit Calculator (best value comparison) | PASS | Moderate-high — confirmed: multiple Chrome extensions doing exactly this monetize via Amazon Associates tags today | Strong — proven, working Amazon-affiliate precedent | 4 | No |
| Concrete Calculator | PASS | High — confirmed: Lowe's affiliate pays up to 20%, Home Depot up to 8% on décor; DIYers researching concrete volume are pre-purchase | Strong | 4 | No |
| Sand Calculator | PASS | Moderate-high — same ecosystem as Concrete, smaller search volume | Moderate-strong | 3 | No |
| Asphalt Calculator | PASS | Moderate — driveway/paving contractor-lead adjacency | Moderate | 3 | No |
| Topsoil Calculator | PASS | Moderate — gardening/landscaping retail adjacency | Moderate | 3 | No |
| Mulch Calculator | PASS | Moderate-high — high seasonal search volume, gardening retail affiliate | Strong | 4 | No |
| Gravel Calculator | PASS | Moderate-high — same ecosystem as Concrete | Strong | 4 | No |
| Pallet Calculator (boxes per pallet) | PASS | Moderate — B2B logistics/packaging-supplier audience | Moderate | 3 | No |
| RAID Calculator (storage capacity/speed/cost) | PASS | Moderate — IT/prosumer NAS-shopping audience | Moderate — Synology/WD/Amazon storage affiliate | 3 | No |
| Resistor Color Code Calculator | PASS (reference tool, not prescriptive safety advice — see note) | Low-moderate — hobbyist electronics reference | Weak — Amazon component-kit affiliate | 2 | No |
| Ohm's Law Calculator | PASS (basic-physics reference, not installation-safety advice — see note) | Low — educational/hobbyist | Weak | 2 | No |
| Voltage Drop Calculator | **REJECTED-YMYL (safety-critical)** | — | — | — | — |
| Wire Size Calculator | **REJECTED-YMYL (safety-critical)** | — | — | — | — |
| Stair Calculator (rise/run/stringer) | **REJECTED-YMYL (safety-critical)** | — | — | — | — |
| Roofing Calculator | PASS | High — roofing/home-services lead-gen is one of the most valuable contractor-lead verticals online (Angi/HomeAdvisor/Thumbtack pay premium CPL for roofing leads) | Strong | 4 | No |
| Tile Calculator | PASS | Moderate-high — home-improvement ecosystem | Moderate-strong | 3 | No |
| Fuel Cost / Gas Mileage (MPG) Calculator | PASS | Moderate — benign day-to-day cost utility, not personal-finance advice; mild auto-parts/EV adjacency | Moderate | 3 | No |
| Speaker Enclosure Cut-List Calculator | PASS | Low-moderate — confirmed real but tiny hobbyist ecosystem (Parts Express sells kits via its own Amazon storefront) | Weak-moderate — small audience but high purchase intent | 2 | No |
| Tent Size Calculator (guests → sq ft needed) | PASS | Very high — confirmed: every competitor found is a rental company's own lead-gen calculator with live per-day pricing ($100-1,750+/tent) attached | Very strong — this IS the eventrentalcosts.com core vertical | 5 | **Yes** (tagged upstream; this is the single best-aligned candidate in the whole list) |
| Guest Count Estimator (RSVP attendance from invitations) | PASS | Moderate-high — confirmed wedding-planning content ecosystem monetizes this heavily (theknot.com etc.) | Moderate-strong — wedding-vendor affiliate (Lovebird pays up to $29/couple referred) | 4 | **Yes** (tagged upstream) |
| Party/Event Budget Planner | PASS | Moderate-high — budget-allocation tool naturally leads into vendor-category referrals (catering, rental, decor) | Moderate-strong | 4 | **Yes** (tagged upstream) |
| Drink/Alcohol Quantity Calculator for Events | PASS | High — confirmed real, active commercial ecosystem (ReserveBar acquired Minibar Delivery; Drizly/Saucey compete for this exact use case) | Strong | 4 | **Yes** (tagged upstream) |
| Food/Catering Quantity Calculator (per-guest portions) | PASS | High — confirmed: major sites (TheKnot, regional caterers) run detailed per-person pricing content around exactly this query | Strong | 4 | **Yes** (tagged upstream) |
| Wedding/Event Seating Chart Planner (drag-and-drop) | PASS | Moderate — real demand confirmed, but competitive set (SeatPlan.io, Canva, WeddingWire) monetizes via freemium/one-time-payment SaaS rather than pure display ads; also carries the feasibility risk already flagged upstream for a static build | Moderate | 3 | **Yes** (tagged upstream) |
| RSVP Attendance Rate Estimator (standalone) | PASS | Moderate — niche but real wedding-planning sub-tool, standalone-gap confirmed | Moderate | 3 | **Yes** (tagged upstream) |
| Cost-Per-Guest Calculator | PASS | Moderate — event-budget ecosystem, same advertiser adjacency as Party Budget Planner | Moderate | 3 | **Yes** (tagged upstream) |
| Event Guest List / RSVP Tracker (simple spreadsheet-style) | PASS | Moderate — same ecosystem, but competes directly with free bundled tools inside WeddingWire/TheKnot platforms | Moderate | 3 | **Yes** (tagged upstream) |
| Visual/Circle Countdown Timer for Classrooms | PASS | Low-moderate — education-supplies audience | Weak-moderate — Amazon teacher-store affiliate | 2 | No |
| Remote-Controlled Presenter Countdown Timer | PASS | Moderate — conference/event/AV audience | Moderate — presentation-remote/AV-gear affiliate | 3 | **Yes** (tagged upstream) |
| Minecraft Skin Slim/Classic Model Converter | PASS | Low-moderate — huge audience but young demographic keeps CPC low | Weak — gaming ad networks (Ezoic/Mediavine) accept, low rates | 2 | No |
| Recipe Auto-Scaler (scale ingredients by servings) | PASS | Moderate — cooking/baking audience, kitchenware/meal-kit adjacency | Moderate | 3 | No |
| ATS Resume Format Checker (non-scoring) | PASS | High — confirmed real, active career-services commercial ecosystem (Jobscan, MyPerfectResume, SkillSyncer, ResyMatch all compete here); explicit high-trust unmet demand per source notes | Strong — resume-builder affiliate programs (Resume.io, Zety, LiveCareer-type) plus career-services/job-board CPC | 4 | No |

## Summary

**YMYL rejections: 3**, all safety-critical (none finance/health/legal/tax/salary — upstream filtering held for those categories):
1. Voltage Drop Calculator — electrical-safety/fire-risk (NEC wire-sizing tool)
2. Wire Size Calculator — electrical-safety/fire-risk (same NEC ampacity category)
3. Stair Calculator (rise/run/stringer) — structural/fall-safety, building-code-governed dimensions

These three are the ones the user should specifically review — they weren't caught by the source file's category labels ("Electronics," "Construction") and only surfaced on a manual tangential-safety read. Two adjacent candidates (Resistor Color Code Calculator, Ohm's Law Calculator) were evaluated against the same bar and kept as PASS since they're descriptive/reference rather than prescriptive installation-safety advice — flagged in the notes above in case the user wants a stricter line.

**Scored high (4-5/5) on monetization: 15 candidates**
- 5/5: Tent Size Calculator
- 4/5: Shoe Size Conversion, Anniversary Calculator, Background Remover, HEIC to JPG Converter, Price Per Unit Calculator, Concrete Calculator, Mulch Calculator, Gravel Calculator, Roofing Calculator, Guest Count Estimator, Party/Event Budget Planner, Drink/Alcohol Quantity Calculator, Food/Catering Quantity Calculator, ATS Resume Format Checker

Pattern: the top scores cluster in three advertiser-rich verticals — (1) event/wedding planning, where competitors are single-vendor lead-gen tools rather than neutral hubs (the gap the source file already flagged), (2) home-improvement/construction materials, backed by confirmed Home Depot (8%) and Lowe's (20%) affiliate rates plus a lucrative contractor-lead-gen market, and (3) a few standalone candidates with unusually strong, confirmed affiliate ecosystems of their own (ATS resume checker → career services; background remover → proven SaaS willingness-to-pay; price-per-unit → live Amazon-affiliate precedent already operating as browser extensions).

**Synergy-candidate standouts (eventrentalcosts.com cross-link):**
All 12 candidates tagged "yes" upstream are confirmed here as genuinely strong synergy fits, not just label carryover — Tent Size Calculator, Guest Count Estimator, Party/Event Budget Planner, Drink/Alcohol Quantity Calculator, Food/Catering Quantity Calculator, Wedding/Event Seating Chart Planner, RSVP Attendance Rate Estimator, Cost-Per-Guest Calculator, Event Guest List/RSVP Tracker, Anniversary Calculator, Event/App-Download QR Code Generator, Remote-Controlled Presenter Countdown Timer. Of these, **Tent Size Calculator is the standout** — it scored 5/5 because it isn't just synergistic, it's the exact same product category eventrentalcosts.com already covers, with confirmed real per-day rental pricing ($100-1,750+) as the natural cross-link content. Guest Count Estimator, Party/Event Budget Planner, Drink/Alcohol Quantity Calculator, and Food/Catering Quantity Calculator form a tight second tier — all 4/5, all directly feed into "how many/how much do I need to rent or buy for my event," which is a one-click cross-link away from an event-rental cost lookup.

Beyond the upstream-tagged 12, this pass surfaced several **unlisted but plausible cross-link candidates** worth a second look, none strong enough to warrant retagging but worth noting: Day Counter/Days Between Dates (event countdown use case), Color Wheel/Scheme Generator ("wedding color scheme" is a real search pattern), WiFi QR Code Generator (commonly printed for wedding/party guest WiFi access), Photo Collage Maker (event/photo-booth prints), Random Team Generator and Online Scoreboard (party-game use cases), and Liar's Dice Roller / party-preset variants of the Random Wheel (party-game supply angle). None of these were built with events in mind, but a host planning a party is a plausible secondary audience for all of them.
