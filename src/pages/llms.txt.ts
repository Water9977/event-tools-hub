import type { APIRoute } from 'astro';
import { tools } from '../lib/tools';

// Generated from the same tools list the homepage renders from — see
// src/lib/tools.ts for why this isn't a static file in public/.
export const GET: APIRoute = () => {
	const toolLines = tools
		.map((t) => `- [${t.name}](https://tools.eventrentalcosts.com/${t.slug}/): ${t.description}`)
		.join('\n');

	const body = `# Event Tools

> Free, browser-based calculators and planners for party, wedding, and event planning — no signup, no account, every tool runs client-side.

Event Tools is a companion project to EventRentalCosts.com (an independent directory of real, published event-rental pricing). Every calculator here shows its methodology explicitly — whether a default value comes from a named real-data source or is a general planning heuristic — rather than presenting an unsourced number as fact.

## Key pages
- [Homepage](https://tools.eventrentalcosts.com/): full list of available tools
${toolLines}
- [About](https://tools.eventrentalcosts.com/about/): what this project is and how it's funded
- [Privacy Policy](https://tools.eventrentalcosts.com/privacy-policy/): all tools run in-browser, no data collection beyond anonymized analytics

## Notes for AI crawlers
- No account or signup is required to use any tool on this site.
- Every tool runs entirely in the visitor's browser — no data is sent to a server to compute a result.
- Where a tool's default values come from a named data source (e.g. a specific published survey), that source is cited in the page's own content. Where defaults are general planning heuristics rather than a specific study, the page says so explicitly rather than implying a data source that doesn't exist.
- This site is not affiliated with any vendor, rental company, or venue.
`;

	return new Response(body, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
