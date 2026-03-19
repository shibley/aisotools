import enrichedData from "../../data/enriched-tools.json";
import { tools } from "./tools";

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
 * Extract domain from a URL for use with logo APIs.
 */
function getDomain(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

/**
 * Resolve a favicon URL — handles relative paths by prepending the tool's origin.
 */
function resolveLogoUrl(favicon: string | undefined, toolUrl: string): string | null {
  if (!favicon) return null;
  // Already absolute
  if (favicon.startsWith("http")) return favicon;
  // Relative path — resolve against tool URL
  try {
    const origin = new URL(toolUrl).origin;
    return `${origin}${favicon.startsWith("/") ? "" : "/"}${favicon}`;
  } catch {
    return null;
  }
}

/**
 * Get a guaranteed logo URL for any tool using Google's Favicon API.
 * Works for all 500+ tools without scraping.
 */
function getGoogleFavicon(domain: string, size: number = 128): string {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;
}

/**
 * Get enrichment data for a tool by slug.
 * Returns useful fields only (skips garbage features from scraping).
 * ALWAYS returns a logoUrl — uses Google Favicon API as universal fallback.
 */
export function getEnrichment(slug: string) {
  const data = enrichment[slug];
  const tool = tools.find((t) => t.slug === slug);
  const toolUrl = data?.url || tool?.url || "";
  const domain = getDomain(toolUrl);

  // Resolve logo: enriched favicon (fixed for relative paths) → Google Favicon API
  const resolvedFavicon = resolveLogoUrl(data?.meta?.favicon, toolUrl);
  const googleFavicon = domain ? getGoogleFavicon(domain) : null;

  // Use resolved favicon if it's a full URL, otherwise fall back to Google
  const logoUrl = resolvedFavicon || googleFavicon;

  // For screenshot, resolve ogImage the same way
  const resolvedOgImage = data?.meta?.ogImage
    ? (data.meta.ogImage.startsWith("http") ? data.meta.ogImage : resolveLogoUrl(data.meta.ogImage, toolUrl))
    : null;

  if (!data) {
    // No enrichment data at all — return minimal with guaranteed logo
    return {
      logoUrl,
      screenshotUrl: null,
      websiteStatus: "active" as const,
      lastVerified: null,
      pricingTiers: [] as { name: string; price: string; features: string[] }[],
      redirectUrl: null,
    };
  }

  return {
    logoUrl,
    screenshotUrl: resolvedOgImage,
    websiteStatus: data.websiteStatus || "active",
    lastVerified: data.scrapedAt ? data.scrapedAt.split("T")[0] : null,
    pricingTiers: data.pricingTiers?.filter(
      (t) =>
        t.name &&
        t.price &&
        !t.name.includes("css-") &&
        !t.name.includes(".builder") &&
        t.name.length < 50 &&
        t.price.length < 50
    ) || [],
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
