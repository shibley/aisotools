/**
 * Centralized affiliate link configuration for AISO Tools.
 * 
 * Add affiliate URLs here and they'll automatically be applied
 * to matching tools across all data files via the getAffiliateUrl() helper.
 * 
 * This is easier to maintain than editing individual tool entries
 * across 8+ batch files.
 */

export const AFFILIATE_LINKS: Record<string, {
  url: string;
  program: string; // Which affiliate network/program
  commission: string; // Commission structure
  status: 'active' | 'pending' | 'applied';
}> = {
  // ═══════════════════════════════════════════
  // ACTIVE — Verified working affiliate links
  // ═══════════════════════════════════════════

  "elevenlabs": {
    url: "https://try.elevenlabs.io/7j98rr4eeebw",
    program: "PartnerStack",
    commission: "22% for first 12 months",
    status: "active",
  },
  "semrush-ai": {
    url: "https://semrush.sjv.io/oNREJo",
    program: "Impact/ShareASale",
    commission: "$200 per sale, $10 per trial",
    status: "active",
  },

  // ═══════════════════════════════════════════
  // PENDING — Applied, awaiting approval
  // ═══════════════════════════════════════════

  // PartnerStack applications (Mar 26, 2026)
  "descript": {
    url: "", // Will be assigned on approval
    program: "PartnerStack",
    commission: "$25 per conversion",
    status: "applied",
  },
  "murf-ai": {
    url: "",
    program: "PartnerStack",
    commission: "20% per commission",
    status: "applied",
  },
  "quillbot": {
    url: "",
    program: "PartnerStack",
    commission: "10-20% based on plan length",
    status: "applied",
  },
  "adcreative": {
    url: "",
    program: "PartnerStack",
    commission: "30% + $2000 rewards",
    status: "applied",
  },
  "gamma": {
    url: "",
    program: "PartnerStack",
    commission: "30% first year",
    status: "applied",
  },
  "consensus": {
    url: "",
    program: "PartnerStack",
    commission: "30% first 12 months (~$36/signup)",
    status: "applied",
  },
  "hume-ai": {
    url: "",
    program: "PartnerStack",
    commission: "25% first 12 months",
    status: "applied",
  },
  "pinecone": {
    url: "",
    program: "PartnerStack",
    commission: "10% first year",
    status: "applied",
  },
  "runpod": {
    url: "",
    program: "PartnerStack",
    commission: "10% for 6 months",
    status: "applied",
  },
  "writesonic": {
    url: "",
    program: "Writesonic Direct (Rewardful)",
    commission: "30% recurring",
    status: "applied",
  },

  // ═══════════════════════════════════════════
  // TO APPLY — Programs identified, not yet applied
  // ═══════════════════════════════════════════

  "grammarly": {
    url: "", // Apply via Impact.com: grammarly.com/affiliates
    program: "Impact.com",
    commission: "High CPA + activation bonus, 90-day cookie, 20-30% conversion",
    status: "pending",
  },
  "surfer-seo": {
    url: "", // Apply at surferseo.com/affiliate-program/
    program: "Surfer Direct",
    commission: "75-125% CPA on monthly, 15-25% on yearly (tiered)",
    status: "pending",
  },
  "copy-ai": {
    url: "", // Check PartnerStack marketplace
    program: "PartnerStack (likely)",
    commission: "TBD — need to confirm",
    status: "pending",
  },

  // ── No public affiliate program ──────────
  // Jasper — No public affiliate program found
  // Synthesia — No partner page found
  // Notion — Not accepting new affiliates
  // Cursor — No affiliate program found
  // Midjourney — No affiliate program
  // ChatGPT/OpenAI — No affiliate program
  // Runway — No affiliate program found
  // Perplexity — No affiliate program found
};

/**
 * Get the affiliate URL for a tool slug, or null if none exists.
 * Only returns URLs for active programs (not pending/applied).
 */
export function getAffiliateUrl(slug: string): string | null {
  const entry = AFFILIATE_LINKS[slug];
  if (entry && entry.status === 'active' && entry.url) {
    return entry.url;
  }
  return null;
}

/**
 * Check if a tool has any affiliate program (active or pending).
 */
export function hasAffiliateProgram(slug: string): boolean {
  return slug in AFFILIATE_LINKS;
}
