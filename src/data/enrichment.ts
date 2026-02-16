import enrichedData from "../../data/enriched-tools.json";

interface EnrichedMeta {
  title?: string;
  description?: string;
  ogImage?: string;
  favicon?: string;
}

interface EnrichedTool {
  slug: string;
  name: string;
  url: string;
  scrapedAt: string;
  websiteStatus: string;
  meta: EnrichedMeta;
  pricingTiers: { name: string; price: string; features: string[] }[];
  features: string[];
  errors: string[];
  redirectUrl?: string;
}

type EnrichedDataMap = Record<string, EnrichedTool>;

const enrichment = enrichedData as EnrichedDataMap;

/**
 * Get enrichment data for a tool by slug.
 * Returns useful fields only (skips garbage features from scraping).
 */
export function getEnrichment(slug: string) {
  const data = enrichment[slug];
  if (!data) return null;

  return {
    // Logo: prefer favicon (usually cleaner), fall back to ogImage
    logoUrl: data.meta?.favicon || data.meta?.ogImage || null,
    // Screenshot: ogImage is usually a good hero/preview
    screenshotUrl: data.meta?.ogImage || null,
    // Website status
    websiteStatus: data.websiteStatus || "active",
    // Last verified date
    lastVerified: data.scrapedAt ? data.scrapedAt.split("T")[0] : null,
    // Pricing tiers (only if they look real — skip if names contain CSS/HTML)
    pricingTiers: data.pricingTiers?.filter(
      (t) =>
        t.name &&
        t.price &&
        !t.name.includes("css-") &&
        !t.name.includes(".builder") &&
        t.name.length < 50 &&
        t.price.length < 50
    ) || [],
    // Real redirect URL if different from original
    redirectUrl: data.redirectUrl || null,
  };
}

/**
 * Get all enrichment data as a map (slug -> enrichment).
 * Useful for batch operations.
 */
export function getAllEnrichments() {
  const result: Record<string, ReturnType<typeof getEnrichment>> = {};
  for (const slug of Object.keys(enrichment)) {
    result[slug] = getEnrichment(slug);
  }
  return result;
}

/**
 * Check if a tool has enrichment data available.
 */
export function hasEnrichment(slug: string): boolean {
  return slug in enrichment;
}
