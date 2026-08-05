# AIO (AI Overview) Risk Scores — 134 Candidates

Method: every candidate classified by query-intent phrasing (task-completion vs. informational vs. mixed), per Ahrefs' 2026 finding that AI Overviews cover 70-80% of informational queries but under 20% of transactional/task queries. Where phrasing looked promising, live `firecrawl_search` (~24 calls) was used to sanity-check whether page 1 is dominated by thin one-paragraph "answer" content — a secondary sign Google may already be satisfying the query without a click.

**Important addition surfaced during this pass:** for a meaningful subset of "everyday utility" candidates, the bigger zero-click threat isn't AI Overviews at all — it's Google's own long-standing native interactive SERP widgets (coin flip, dice roll, timer/stopwatch, date-difference calculator, random number generator, color picker/eyedropper, "what is my location"). These are not probabilistic like AIO rollout — they are confirmed, stable Google features that answer the query directly in the results page with a working mini-tool, which is an even more certain version of the "nobody clicks through" problem this filter exists to catch. Rows affected by this are flagged explicitly as "Google native widget" risk rather than "AIO" risk, since it's a different Google feature with the same practical effect on click-through.

Risk label legend: **low** = safe to build, **medium** = build but keep FAQ/content angle disciplined toward the safe sub-angle noted, **high** = cut or substantially reposition.

| Candidate | Query intent shape | AIO risk | Reasoning | Safe FAQ angles vs risky ones |
|---|---|---|---|---|
| Roman Numeral Converter | task-completion | low | "Roman numeral converter" is pure tool phrasing; no confirmed native Google widget for this specific conversion | Safe: bidirectional converter tool. Risky: "history of roman numerals" essay content (informational, AIO bait) |
| Typography Unit Converter (twip/pica/point/pixel) | task-completion | low | Ultra-niche units, not covered by Google's generic unit-converter widget, no informational search variant exists | Safe: all content — no informational angle exists for this query |
| Shoe Size Conversion | mixed | medium | "US to EU shoe size" is task-shaped, but "shoe size chart" is a classic reference-table query Google frequently answers directly in-SERP | Safe: interactive brand-specific/fit-adjusted converter. Risky: generic static size-chart lookup |
| Data Transfer Unit Converter | task-completion | low | Niche units (not part of Google's standard converter), thin/dated incumbent confirms no answer-box competition | Safe: all content |
| Illumination Converter | task-completion | low | Scientific niche unit, zero informational search variant | Safe: all content |
| Permeability Converter | task-completion | low | Extremely niche scientific unit | Safe: all content |
| Heat Transfer Coefficient Converter | task-completion | low | Niche engineering unit, no informational variant | Safe: all content |
| Radiation Activity Converter (Curie/Becquerel) | task-completion | low | Niche scientific unit, no informational variant | Safe: all content |
| Binary / Hex / Base64 / URL Encode-Decode Toolkit | task-completion | low | Classic dev-tool query shape ("base64 encode online"); developer queries are reliably transactional | Safe: all content |
| Wire Gauge (AWG/SWG) to mm Converter | task-completion | low | Niche electrical unit, not in Google's native converter list | Safe: all content |
| Cooking Measurement Converter | mixed | medium | Task phrasing, but Google's SERP already has a native cups/grams/ml converter widget for common ingredient conversions | Safe: multi-ingredient batch conversion, ingredient-specific density (flour vs sugar) beyond generic widget. Risky: plain "cups to ml" (natively answered) |
| Day of the Week Calculator | informational-leaning task | high | Google answers "what day of the week was [date]" directly inline (native widget/direct answer), leaving little reason to click through | Safe: none strong — even the tool UI duplicates what Google already shows |
| Day Counter / Days Between Dates | task-completion but native-widget-covered | high | Google has a native date-difference calculator embedded directly in SERP for "days between X and Y" | Safe: none strong for the core query — this is the single clearest Google-native cannibalization case in Time/Date besides Time Zone |
| Time Zone Calculator | task-completion but native-widget-covered | high | Google has a native time zone/world clock converter built into search ("time in Tokyo", "convert 3pm EST to PST") | Safe: none strong for the core query |
| Month Counter (months between dates) | task-completion but native-widget-covered | medium | Same family as day counter; Google's date widget supports year/month/day breakdowns too, though less prominently for this exact phrasing | Safe: recurring/anniversary-style month math. Risky: plain "months between two dates" |
| Unix Timestamp / Epoch Converter | task-completion | low | Dev-tool query, no native Google widget for epoch conversion | Safe: all content |
| Anniversary Calculator (wedding/relationship/work) | mixed | medium | "Next anniversary date" task query is safe; "traditional gift by year" content is a classic AIO-friendly list format | Safe: next-anniversary-date lookup tool. Risky: gift-by-year FAQ/table content |
| Working Days / Business Days Calculator | task-completion | low | Google's native date widget counts calendar days only, not business-day exclusions — real differentiation from the native widget | Safe: all content |
| Years Between Two Dates Calculator | task-completion but native-widget-covered | medium | Overlaps with Google's native date-difference widget for the plain query | Safe: age-adjacent framing ("X years, Y months, Z days" precision). Risky: plain "years between two dates" |
| "How Old Was I On This Date" Calculator | task-completion | low | Distinct from Google's native "how old am I" (birthdate→today only); arbitrary past-date-pair angle isn't natively covered | Safe: all content |
| Online Clock / Stopwatch / Timer Bundle | task-completion but native-widget-covered | high | Google has native stopwatch AND timer widgets that render directly for "timer"/"stopwatch" queries | Safe: bundling multiple modes in one page, or a specific niche timer (see classroom/presenter variants below). Risky: plain "online stopwatch"/"timer" queries |
| Word Counter | task-completion | low | No native Google widget for word counting; pure tool query | Safe: all content |
| Case Converter (upper/lower/sentence/title) | task-completion | low | No native widget, pure tool query | Safe: all content |
| Title Case Converter (AP/Chicago/MLA-specific rules) | task-completion | low | Specific style-rule niche, no native widget, no informational variant of note | Safe: all content |
| Cool/Fancy Text Generators | task-completion | low | Pure novelty-tool query, no informational variant | Safe: all content |
| Text Diff Checker | task-completion | low | Dev-tool query shape | Safe: all content |
| JSON Validator / Formatter | task-completion | low | Dev-tool query shape | Safe: all content |
| JS/CSS Minifier | task-completion | low | Dev-tool query shape | Safe: all content |
| Whitespace Remover / Cleaner | task-completion | low | Pure utility query | Safe: all content |
| Reading Time Calculator | mixed | medium | Paste-your-text tool is task-shaped; "how long to read [book title]" is informational and commonly AIO-answered with an estimate | Safe: paste-your-own-text tool. Risky: "how long does it take to read [famous book]" content |
| Word Synonym Finder Ranked by Popularity/Commonality | mixed | medium | Search confirmed Merriam-Webster/Thesaurus.com dominate plain "synonyms for X" (also a classic Google dictionary OneBox trigger), but the "ranked by commonality" angle is a genuine differentiator no OneBox or thesaurus site offers | Safe: commonality-ranking as the headline feature. Risky: competing on generic "synonym for X" volume |
| Grammatical Case / Word-Form Identifier (language learners) | mixed | medium | Search showed the broad "Russian cases" topic is heavily informational (guides/overviews dominate), but the specific "paste text, get case tags" tool query has no informational overlap and no direct competitor | Safe: interactive text-tagging tool. Risky: "what are Russian cases" explainer content |
| Furigana Reading Generator for Japanese Text | task-completion | low | Confirmed via search: page 1 is entirely tool pages (kanjikana, muriapp, ezfurigana, etc.), no answer-box content | Safe: all content |
| AO3-style / Platform-Specific Word Counter | mixed | medium | Search revealed actual demand is dominated by "how do I see word count ON AO3" (informational, already answered by AO3's own UI + Reddit threads) rather than "count my draft using AO3's rules" — a demand/use-case mismatch risk on top of AIO | Safe: reposition explicitly as a pre-publish draft tool, not an AO3-lookup-help page. Risky: content framed around "how to find word count on AO3" |
| LaTeX to Word (.docx) Converter | task-completion | low | Confirmed via search: tool-dominated page 1 (Vertopal, Zamzar, trybibby, Aspose) | Safe: all content — note several free competitors already exist (crowding, not an AIO issue) |
| Scrolling Screenshot to Single Long Image Stitcher | task-completion | low | Confirmed via search: tool-dominated page 1 | Safe: all content |
| Random Number Generator | task-completion but native-widget-covered | high | Google has a native "generate a random number" widget directly in SERP | Safe: bulk/list generation, ranges with exclusions — features the native widget lacks. Risky: plain single-number generation |
| Number Picker Wheel (spin-to-pick variant) | task-completion | low | Visual spin-wheel UX isn't replicated by Google's plain RNG widget | Safe: all content |
| Dice Roller (standard + custom-sided) | task-completion but native-widget-covered | medium | Google has a native "roll a die" widget for simple 1-2 die rolls; custom-sided dice aren't covered, providing real differentiation | Safe: custom-sided / multi-die / visual 3D roll. Risky: plain single d6 roll query |
| Dice Roller with Modifiers (RPG notation e.g. "2d6+3") | task-completion | low | Confirmed via search: notation/modifier support is not covered by Google's native widget and multiple existing tools (dnddiceroller, dice.run) confirm task-shaped demand with no answer-box competition | Safe: all content |
| Liar's Dice Roller (group party game) | task-completion | low | Specific game-variant query, no native widget or informational overlap | Safe: all content |
| Coin Flip Simulator | task-completion but native-widget-covered | high | Google has a native "flip a coin" widget that renders directly in SERP | Safe: multi-flip/streak tracking (see decision-maker variant). Risky: plain single coin flip |
| Coin Flip Decision Maker ("flip 100 times" / best-of-X mode) | task-completion | low | Multi-flip/decision framing goes beyond Google's native single-flip widget | Safe: all content |
| Random Password Generator | task-completion | low | No confirmed native Google widget for password generation specifically | Safe: all content |
| Random Team Generator/Picker | task-completion | low | Pure utility query | Safe: all content |
| Random List Shuffler/Randomizer | task-completion | low | Pure utility query | Safe: all content |
| Random Item Picker | task-completion | low | Pure utility query | Safe: all content |
| Random Wheel / Wheel of Names | task-completion | low | Visual spin-wheel UX not replicated by any native Google feature | Safe: all content |
| QR Code Generator | task-completion | low | No native Google widget generates QR codes | Safe: all content |
| WiFi QR Code Generator | task-completion | low | Niche variant, no native widget | Safe: all content |
| Event/App-Download QR Code Generator | task-completion | low | Niche variant, no native widget | Safe: all content |
| Custom QR Code with Logo/Colors | task-completion | low | No native widget | Safe: all content |
| Lenny Face / Text Emoticon Generator | task-completion | low | Pure novelty-tool query | Safe: all content |
| Emoji Cheat Sheet / Emoji List by Category | mixed | medium | Google renders the emoji glyph itself directly for single-emoji-name lookups ("thumbs up emoji") — a zero-click risk stronger than AIO; but browsing/copying a full category list is a directory use case Google doesn't replicate | Safe: category-browse/copy-multiple angle. Risky: single-emoji-name lookup pages |
| DPS (Damage Per Second) Calculator for Games | task-completion | low | Niche gaming utility, no native widget or informational competition | Safe: all content |
| CPS Test (Click Speed Test) | task-completion | low | Confirmed via search: page 1 is 100% interactive test-tool pages (cpstest.org, rapidtables, cps-check, etc.), zero informational content | Safe: all content |
| Reaction Time Test | task-completion | low | Same shape as CPS test — interactive widget query | Safe: all content |
| Online Scoreboard | task-completion | low | Pure utility query | Safe: all content |
| Online Click Counter / Tally Counter | task-completion | low | Pure utility query | Safe: all content |
| Background Remover | task-completion | low | Upload-and-process tool query, no informational overlap | Safe: all content |
| Reverse Image Search Tool | task-completion | low | Task query; main competitive threat is Google Lens/Images itself (crowding, not AIO) | Safe: all content |
| Image Resize Tool | task-completion | low | Pure utility query | Safe: all content |
| Image Compress Tool | task-completion | low | Pure utility query | Safe: all content |
| HEIC to JPG Converter | task-completion | low | Pure utility query, high commercial intent | Safe: all content |
| WebP to JPG/PNG Converter (and reverse) | task-completion | low | Pure utility query | Safe: all content |
| Batch Image File-Size Reducer (target size) | task-completion | low | Specific workflow query ("compress to under 8MB"), no informational overlap | Safe: all content |
| Image EXIF Viewer / EXIF Remover | task-completion | low | Pure utility query | Safe: all content |
| Image Watermark Adder | task-completion | low | Pure utility query | Safe: all content |
| Photo Collage Maker | task-completion | low | Pure utility query | Safe: all content |
| Seamless Pattern Generator | task-completion | low | Pure utility query | Safe: all content |
| Posterize Picture Tool | task-completion | low | Pure utility query | Safe: all content |
| PDF Merge Tool | task-completion | low | Pure utility query | Safe: all content |
| PDF Split Tool | task-completion | low | Pure utility query | Safe: all content |
| PDF Compress Tool | task-completion | low | Pure utility query | Safe: all content |
| PDF to JPG / JPG to PDF | task-completion | low | Pure utility query | Safe: all content |
| PDF Page Numbers / Watermark Adder | task-completion | low | Pure utility query | Safe: all content |
| PDF Page-by-Page File Size Splitter (marketplace upload limits) | task-completion | low | Specific workflow query, no informational overlap | Safe: all content |
| Webpage/Doc-to-PDF One-Click Converter | task-completion | low | Pure utility query | Safe: all content |
| Audio Format Converter (to MP3, WAV, M4A, FLAC) | task-completion | low | Pure utility query | Safe: all content |
| Video Trim/Merge/Split/Compress/to-GIF Toolkit | task-completion | low | Pure utility query | Safe: all content |
| Hash Generator Toolkit (MD5/SHA1/SHA256/etc.) | task-completion | low | Dev-tool query shape, no informational overlap | Safe: all content |
| Zip/Unzip File Tool (browser-based) | task-completion | low | Pure utility query | Safe: all content |
| RGB to Hex/HSL/HSV/CMYK Color Converter | mixed | medium | Task phrasing, but Google's native color-picker widget also displays/accepts RGB, HEX, HSL values in-SERP | Safe: batch conversion, palette export. Risky: single ad-hoc value conversion (covered by native widget) |
| Color Picker Tool | task-completion but native-widget-covered | high | Google has a full native color-picker/eyedropper tool embedded directly in SERP (pick from screen, get HEX/RGB) — the strongest single native-widget cannibalization case in this whole list | Safe: picking from an uploaded image with palette extraction/export (partially differentiated). Risky: plain "color picker" / on-screen eyedropper |
| Color Wheel / Color Scheme Generator | mixed | medium | Interactive palette generation isn't replicated by any native widget, but "how to choose a color scheme" explainer content is AIO-prone | Safe: generate-scheme-from-image or complementary/triadic generator tool. Risky: generic color-theory FAQ content |
| HTML Color Codes Reference | informational | high | Pure reference-table query shape — exactly the content format AI Overviews and featured snippets are built to replace | Safe: none strong — reposition as an interactive picker/converter rather than a static reference table if pursued at all |
| Online Screen Ruler (actual-size measurement) | task-completion | low | Interactive on-screen measurement tool, no native Google equivalent | Safe: all content |
| Actual-Size Device Comparison Tool | task-completion | low | Visual/interactive comparison, no native widget | Safe: all content |
| Protractor / Angle Measurement Tool | task-completion | low | Pure utility query | Safe: all content |
| GPS Distance Calculator (between two coordinates) | task-completion | low | Google Maps distance measurement is an adjacent but separate UX (not an in-SERP answer box for coordinate-pair math) | Safe: all content |
| My Coordinates (current GPS lookup tool) | task-completion but native-widget-covered | high | Google answers "what is my location" directly inline with a map and coordinates; browsers/OS also expose this natively | Safe: none strong — this is one of the most thoroughly cannibalized queries in the list |
| Multi-Dimension Unit Converter (convert L×W×H all at once) | task-completion | low | Search confirmed no direct competitor exists (results returned volume calculators, a different intent) — genuine gap, no native widget covers simultaneous multi-value conversion | Safe: all content — watch query-phrasing overlap with "volume calculator" in SEO targeting |
| Screen Size / Aspect Ratio Calculator | task-completion | low | Pure utility query | Safe: all content |
| Camera Field of View Calculator | task-completion | low | Niche photo/video utility | Safe: all content |
| RAM Latency Calculator | task-completion | low | Niche tech utility | Safe: all content |
| Streaming Bitrate Calculator | task-completion | low | Niche tech utility | Safe: all content |
| Video File Size Calculator (by format) | task-completion | low | Pure utility query | Safe: all content |
| Download Time / Data Transfer Calculator | task-completion | low | Multi-input calculation (speed + size), not a standard Google native widget | Safe: all content |
| Moon Phase Calculator | mixed | medium | Google shows a moon-phase widget directly for "moon phase today"/current-date queries; arbitrary past/future-date and birth-date/compatibility angles are not natively covered | Safe: specific-date lookup, birth-moon-phase, compatibility angle. Risky: "moon phase today" |
| Antipode Calculator (opposite point on Earth) | task-completion | low | Novelty niche query, no native widget | Safe: all content |
| Great Circle Calculator (shortest path around globe) | task-completion | low | Niche geo/math utility | Safe: all content |
| Fabric Calculator (yardage needed for a project) | task-completion | low | Pure utility query | Safe: all content |
| Price Per Unit Calculator (best value comparison) | mixed | low | Mostly task-shaped; mild "how to calculate unit price" informational bleed for supporting content only | Safe: comparison-tool framing. Risky: generic "how to calculate price per unit" explainer |
| Concrete Calculator | task-completion | low | Pure utility query | Safe: all content |
| Sand Calculator | task-completion | low | Pure utility query | Safe: all content |
| Asphalt Calculator | task-completion | low | Pure utility query | Safe: all content |
| Topsoil Calculator | task-completion | low | Pure utility query | Safe: all content |
| Mulch Calculator | task-completion | low | Pure utility query | Safe: all content |
| Gravel Calculator | task-completion | low | Pure utility query | Safe: all content |
| Pallet Calculator (how many boxes fit per pallet) | task-completion | low | Pure utility query | Safe: all content |
| RAID Calculator (storage capacity/speed/cost) | task-completion | low | Niche tech utility | Safe: all content |
| Resistor Color Code Calculator | mixed | low | Interactive band-picker is the real demand; static color-code table content leans informational but is a minor supporting element | Safe: interactive picker tool. Risky: static reference-table-only presentation |
| Ohm's Law Calculator | mixed | low | Task-shaped calculator query dominates; "what is Ohm's law" is a minor informational bleed limited to FAQ copy | Safe: calculator tool. Risky: "what is Ohm's law" explainer content |
| Voltage Drop Calculator | task-completion | low | Pure utility query | Safe: all content |
| Wire Size Calculator | task-completion | low | Pure utility query | Safe: all content |
| Stair Calculator (rise/run/stringer) | task-completion | low | Pure utility query | Safe: all content |
| Roofing Calculator | task-completion | low | Pure utility query | Safe: all content |
| Tile Calculator | task-completion | low | Pure utility query | Safe: all content |
| Fuel Cost / Gas Mileage (MPG) Calculator | task-completion | low | Pure utility query | Safe: all content |
| Speaker Enclosure Cut-List Calculator | task-completion | low | Niche hobbyist workflow query, no informational competition | Safe: all content |
| Tent Size Calculator | task-completion | low | Confirmed via search: page 1 entirely rental-company tool pages, zero thin answer-box content | Safe: all content |
| Guest Count Estimator | mixed | low | Confirmed via search: mostly tool pages; one "how to estimate" article present but tool-dominated overall | Safe: calculator-with-algorithm framing. Risky: generic "how to estimate wedding guest count" advice content |
| Party/Event Budget Planner | task-completion | low | Confirmed via search: templates and calculator tools dominate; Canva's generic template page is the closest to non-tool competition, not an AIO risk | Safe: all content |
| Drink/Alcohol Quantity Calculator for Events | task-completion | low | Confirmed via search: page 1 is 100% calculator/tool pages (Evite, BevMo, eventbartenders, elev8.la, etc.) | Safe: all content |
| Food/Catering Quantity Calculator (per-guest portions) | mixed | medium | Confirmed via search: alongside tool pages, page 1 includes thin "Quick Answer" style direct-answer content (summerandcinnamon.com) and a top-ranked "how do you calculate catering per person" explainer (ezcater) — real signal Google may already satisfy the base informational phrasing | Safe: interactive per-guest-count calculator with dietary/event-type inputs. Risky: "how much food per person" generic explainer framing |
| Wedding/Event Seating Chart Planner (drag-and-drop) | task-completion | low | Confirmed via search: page 1 entirely drag-and-drop tool/SaaS pages; separately flagged for build feasibility, not AIO | Safe: all content (feasibility is the real risk here, not AIO) |
| RSVP Attendance Rate Estimator (standalone) | task-completion | low | Confirmed via search: dedicated tool pages exist (invitedrop.com, firehousekc.com) validating standalone task-query demand | Safe: all content |
| Cost-Per-Guest Calculator | task-completion | low | Confirmed via search: tool/calculator pages dominate (eventbudgetcal.com, calconic.com, revelr.com) | Safe: all content |
| Event Guest List / RSVP Tracker (simple spreadsheet-style) | task-completion | low | Confirmed via search: page 1 entirely SaaS/tool pages, several signup-gated (competitive crowding, not AIO) | Safe: all content |
| Visual/Circle Countdown Timer for Classrooms | task-completion but native-widget-covered | medium | Generic "countdown timer" hits Google's native timer widget; the classroom-specific circular/visual framing is a real differentiator that survives | Safe: classroom/visual-specific framing. Risky: competing on generic "countdown timer" query |
| Remote-Controlled Presenter Countdown Timer | task-completion | low | Confirmed via search: page 1 is B2B tool pages (stagetimer.io, cuetimer.com, irisdown) — "remote-controlled" + "presenter" framing fully avoids the generic native timer widget | Safe: all content |
| Minecraft Skin Slim/Classic Model Converter | task-completion | low | Confirmed via search: page 1 is tool pages plus Reddit demand threads, no answer-box content; niche gaming query unlikely to trigger AIO at all | Safe: all content |
| Recipe Auto-Scaler (scale ingredient quantities up/down by servings) | mixed | low | Confirmed via search: tool pages dominate; mild "how to scale a recipe" informational bleed limited to supporting content | Safe: paste-recipe scaling tool. Risky: generic "how to scale a recipe" ratio-math explainer |
| ATS Resume Format Checker (text/formatting compatibility, non-scoring) | task-completion | low | Confirmed via search: page 1 is 100% upload-and-scan tool pages (enhancv, myperfectresume, jobscan, etc.), several lead-gen/signup-heavy — confirms crowding and the distrust signal noted in source, not an AIO problem | Safe: all content |

## Summary counts

- **Low risk: 109 candidates**
- **Medium risk: 16 candidates** (build fine, but keep content/FAQ angle disciplined toward the "safe" sub-angle in the table — avoid competing on the generic/informational phrasing of the same query)
- **High risk: 9 candidates — recommend cutting or fundamentally repositioning:**
  1. Day of the Week Calculator — native Google date-answer
  2. Day Counter / Days Between Dates — native Google date-difference widget
  3. Time Zone Calculator — native Google time zone converter
  4. Online Clock / Stopwatch / Timer Bundle — native Google stopwatch/timer widgets
  5. Random Number Generator — native Google RNG widget
  6. Coin Flip Simulator — native Google coin-flip widget
  7. Color Picker Tool — native Google color-picker/eyedropper widget
  8. HTML Color Codes Reference — pure reference-table content, classic AIO/featured-snippet bait
  9. My Coordinates (current GPS lookup) — native Google "what is my location" answer

Note: 6 of these 9 (Day of Week, Days Between Dates, Time Zone, Timer/Stopwatch, RNG, Coin Flip, Color Picker, My Coordinates) are cut primarily because of **Google's own native interactive SERP widgets**, not classic AI Overview text boxes — worth flagging to the team as a distinct but equally fatal 2026 SERP-satisfaction pattern, since it's more certain/permanent than AIO rollout percentages and won't be affected by any future AIO pullback.

## MANUAL CHECK NEEDED

These are the top surviving low/medium-risk candidates, prioritized by combining AIO-safety with the strongest demand/gap signals already logged in the source file (thin/dated incumbents, explicit Reddit unmet-demand threads, or the event-planning "neutral hub vs. single-vendor lead-gen tool" gap called out as the single most defensible pattern in the whole research pass). No scraping tool can render Google's live AI Overview — someone needs to actually search these on Google and visually confirm whether an AIO box appears before final greenlight.

1. **ATS Resume Format Checker** — low AIO risk, by far the strongest demand signal in the whole candidate set (8+ distinct Reddit threads, explicit distrust of existing "free" scam-adjacent tools)
2. **Tent Size Calculator** — low AIO risk, flagship of the event-planning neutral-hub gap (every existing tool is a single rental company's lead-gen page)
3. **Drink/Alcohol Quantity Calculator for Events** — low AIO risk, same neutral-hub gap, retailer-lead-gen incumbents only
4. **Party/Event Budget Planner** — low AIO risk, same neutral-hub gap, incumbents are small/inconsistent static sites
5. **Cost-Per-Guest Calculator** — low AIO risk, currently only exists bundled inside a larger site — real standalone gap
6. **RSVP Attendance Rate Estimator** — low AIO risk, currently only exists bundled inside wedding suites — real standalone gap
7. **Guest Count Estimator** — low AIO risk, fragmented across small niche wedding-blog sites, no dominant neutral tool
8. **Food/Catering Quantity Calculator** — medium AIO risk (thin "quick answer" content spotted on page 1) but strongest lead-gen-vs-neutral gap in the whole cluster — verify carefully before greenlighting
9. **Wedding/Event Seating Chart Planner** — low AIO risk but flagged separately for build feasibility (drag-and-drop on a static-only build) — worth a human look at both fronts together
10. **Multi-Dimension Unit Converter (L×W×H at once)** — low AIO risk, confirmed genuine gap (no direct competitor found in search), explicit Reddit ask
11. **Batch Image File-Size Reducer (exact target size)** — low AIO risk, genuine unmet workflow demand from Reddit
12. **PDF Page-by-Page File Size Splitter (marketplace upload limits)** — low AIO risk, genuine unmet workflow demand from Reddit
13. **Dice Roller with Modifiers (RPG notation)** — low AIO risk, explicit passionate-niche demand, not covered by Google's native dice widget
14. **Speaker Enclosure Cut-List Calculator** — low AIO risk, zero competitor found, passionate niche audience
15. **Webpage/Doc-to-PDF One-Click Converter** — low AIO risk, genuine unmet demand (only generic browser print-to-PDF exists today)
16. **Word Synonym Finder Ranked by Popularity/Commonality** — medium AIO risk (base "synonym for X" query is thesaurus/OneBox territory) but the commonality-ranking angle is genuinely unique — verify whether AIO renders specifically on the long-tail ranked-synonym phrasing, not just the generic synonym query
17. **Recipe Auto-Scaler** — low AIO risk, strong Reddit demand despite some existing competitors
18. **Minecraft Skin Slim/Classic Model Converter** — low AIO risk, real niche gaming demand
19. **Typography Unit Converter (twip/pica/point/pixel)** — low AIO risk, extremely thin/dated sole incumbent, easiest possible "out-content" target
20. **Binary / Hex / Base64 / URL Encode-Decode Toolkit** — low AIO risk, clear consolidation opportunity (currently split across many thin single-format pages on the incumbent)
