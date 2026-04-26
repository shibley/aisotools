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
  "activecampaign": {
    url: "https://try.activecampaign.com/vw1jw6s8z6qi",
    program: "PartnerStack",
    commission: "30% recurring for up to 12 months",
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
    url: "https://get.murf.ai/kveyd98v1qu6",
    program: "PartnerStack",
    commission: "20% per commission",
    status: "active",
  },
  "quillbot": {
    url: "",
    program: "PartnerStack",
    commission: "10-20% based on plan length",
    status: "applied",
  },
  "adcreative": {
    url: "https://free-trial.adcreative.ai/yh4dtwq3dst0",
    program: "PartnerStack",
    commission: "30% revenue sharing",
    status: "active",
  },
  "gamma": {
    url: "https://try.gamma.app/iu7k55m0qa0c",
    program: "PartnerStack",
    commission: "30% first year",
    status: "active",
  },
  "consensus": {
    url: "https://get.consensus.app/rjusyyxmi02p",
    program: "PartnerStack",
    commission: "30% first 12 months (~$36/signup)",
    status: "active",
  },
  "buffer": {
    url: "https://join.buffer.com/shibley-api-status-check",
    program: "dub.co/Buffer",
    commission: "25% per sale for 1 year",
    status: "active",
  },
  "1password": {
    url: "https://1password.partnerlinks.io/6t8opdyq764m",
    program: "PartnerStack",
    commission: "25% first year",
    status: "active",
  },
  "optery": {
    url: "https://get.optery.com/jm6y39t1u70x",
    program: "PartnerStack",
    commission: "30% for first 12 months",
    status: "active",
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

  "canva-ai": {
    url: "", // Apply via canva.com/affiliates (Impact.com) — 25-80% commission
    program: "Impact.com (Canva Affiliate)",
    commission: "25-80% on Canva Pro upgrades, 30-day cookie",
    status: "pending",
  },
  "adobe-firefly": {
    url: "", // Apply via impact.com (Adobe Affiliate) — 85% first month, 8.33% recurring
    program: "Impact.com (Adobe)",
    commission: "85% first month sub, then 8.33%/mo recurring",
    status: "pending",
  },
  "semrush": {
    url: "", // semrush.com/partner — use existing semrush-ai link as template
    program: "Impact.com (BeRush / SEMrush affiliate)",
    commission: "$200 per new sale, $10 per trial",
    status: "pending",
  },
  "jasper": {
    url: "", // jasper.ai/affiliates via Impact.com — $0.50 trial + 25% first year
    program: "Impact.com (Jasper)",
    commission: "$0.50/trial, 25% first 12 months (up to $6K/yr per referral)",
    status: "pending",
  },
  "opus-clip": {
    url: "", // Apply at partners.opus.pro — video repurposing niche
    program: "Opus Clip Direct",
    commission: "20% recurring for 12 months",
    status: "pending",
  },
  "veed-io": {
    url: "", // Apply via ShareASale or veed.io affiliate page
    program: "ShareASale / VEED Direct",
    commission: "TBD — popular video editor, high conversion",
    status: "pending",
  },

  // ── No public affiliate program ──────────
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
