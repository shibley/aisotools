import { tools, type Tool } from "@/data/tools";

/**
 * Get the list of alternative tools for a given tool slug.
 */
export function getAlternativesForTool(slug: string): Tool[] {
  const tool = tools.find((t) => t.slug === slug);
  if (!tool?.alternatives?.length) return [];
  return tool.alternatives
    .map((altSlug) => tools.find((t) => t.slug === altSlug))
    .filter(Boolean) as Tool[];
}

/**
 * Get all tools that have at least one alternative listed.
 */
export function getToolsWithAlternatives(): Tool[] {
  return tools.filter((t) => t.alternatives && t.alternatives.length > 0);
}

/**
 * Reverse lookup: find tools that list the given slug as one of their alternatives.
 * Excludes tools already in the main tool's own alternatives list.
 */
export function getToolsThatListAsAlternative(slug: string): Tool[] {
  return tools.filter(
    (t) => t.alternatives?.includes(slug) && t.slug !== slug
  );
}

/**
 * Sort alternatives by relevance: same category first, then by feature overlap.
 */
export function sortAlternativesByRelevance(
  mainTool: Tool,
  alternatives: Tool[]
): Tool[] {
  return [...alternatives].sort((a, b) => {
    // Same category gets priority
    const aCat = a.category === mainTool.category ? 1 : 0;
    const bCat = b.category === mainTool.category ? 1 : 0;
    if (aCat !== bCat) return bCat - aCat;

    // Then sort by feature overlap count
    const aOverlap = a.features.filter((f) =>
      mainTool.features.some(
        (mf) => mf.toLowerCase() === f.toLowerCase()
      )
    ).length;
    const bOverlap = b.features.filter((f) =>
      mainTool.features.some(
        (mf) => mf.toLowerCase() === f.toLowerCase()
      )
    ).length;
    return bOverlap - aOverlap;
  });
}
