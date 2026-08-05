// Single source of truth for the tool list. Both the homepage and llms.txt
// (src/pages/llms.txt.ts) read from this — a hardcoded list in two places
// is exactly how the sibling eventrentalcosts.com project's llms.txt
// silently drifted out of sync with its actual metro pages (twice).
export interface Tool {
	slug: string;
	name: string;
	description: string;
	teaser: string;
}

export const tools: Tool[] = [
	{
		slug: 'party-budget-planner',
		name: 'Party & Event Budget Planner',
		description:
			'Get a category-by-category budget split for a wedding, birthday, or corporate event — backed by real spending data, adjustable to your own quotes.',
		teaser: 'Wedding split backed by real data',
	},
	{
		slug: 'tent-size-calculator',
		name: 'Tent Size Calculator',
		description:
			'Figure out what tent size you need based on guest count and seating style — seated dinner, cocktail reception, theater, or conference setup.',
		teaser: 'Guest count to tent size, instantly',
	},
	{
		slug: 'seating-chart-planner',
		name: 'Wedding & Event Seating Chart Planner',
		description:
			'Build a seating chart by adding guests and tables, then assigning who sits where — with capacity limits, autosave, and a printable export.',
		teaser: 'Drag, drop, done — no spreadsheet',
	},
];
