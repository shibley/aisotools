import { tools, type Tool } from '@/data/tools';

export interface ComparisonPair {
  slugA: string;
  slugB: string;
}

export function getAllComparisonPairs(): ComparisonPair[] {
  const pairs = new Set<string>();
  const result: ComparisonPair[] = [];

  for (const tool of tools) {
    if (!tool.alternatives?.length) continue;
    for (const altSlug of tool.alternatives) {
      const alt = tools.find(t => t.slug === altSlug);
      if (!alt) continue;
      // Alphabetical order for consistent URLs
      const [a, b] = [tool.slug, altSlug].sort();
      const key = `${a}-vs-${b}`;
      if (!pairs.has(key)) {
        pairs.add(key);
        result.push({ slugA: a, slugB: b });
      }
    }
  }
  return result;
}

/** Get all comparison pairs involving a specific tool slug */
export function getComparisonPairsForTool(slug: string): ComparisonPair[] {
  return getAllComparisonPairs().filter(p => p.slugA === slug || p.slugB === slug);
}

/** Get the canonical comparison slug for two tools (alphabetical order) */
export function getCompareSlug(slugA: string, slugB: string): string {
  const [a, b] = [slugA, slugB].sort();
  return `${a}-vs-${b}`;
}

/** Check if a comparison pair exists */
export function comparisonExists(slugA: string, slugB: string): boolean {
  const slug = getCompareSlug(slugA, slugB);
  return getAllComparisonPairs().some(p => `${p.slugA}-vs-${p.slugB}` === slug);
}

/** Get comparisons grouped by category */
export function getComparisonsByCategory(): Record<string, { pair: ComparisonPair; toolA: Tool; toolB: Tool }[]> {
  const allPairs = getAllComparisonPairs();
  const grouped: Record<string, { pair: ComparisonPair; toolA: Tool; toolB: Tool }[]> = {};

  for (const pair of allPairs) {
    const toolA = tools.find(t => t.slug === pair.slugA);
    const toolB = tools.find(t => t.slug === pair.slugB);
    if (!toolA || !toolB) continue;

    // Use the category of toolA (or the shared category if same)
    const category = toolA.category === toolB.category ? toolA.category : toolA.category;
    if (!grouped[category]) grouped[category] = [];
    grouped[category].push({ pair, toolA, toolB });
  }

  return grouped;
}
