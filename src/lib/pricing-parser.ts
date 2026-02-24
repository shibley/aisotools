/**
 * Pricing Parser — converts pricingDetails strings into structured tier data.
 *
 * Handles formats like:
 *   "Free tier available. Plus $20/mo, Team $25/user/mo, Enterprise custom"
 *   "Basic $10/mo, Standard $30/mo, Pro $60/mo, Mega $120/mo"
 *   "Free to use"
 *   "Pay-as-you-go $0.006/sec. Pro plans from $99/mo"
 *   "$10/user/mo add-on to Notion workspace plans"
 *   "Included in ChatGPT Plus $20/mo. API $0.04-$0.12 per image"
 */

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  highlight: boolean;
  features: string[];
  note?: string;
}

/**
 * Parse a pricingDetails string into structured tier objects.
 */
export function parsePricingDetails(details: string | undefined): PricingTier[] {
  if (!details || details.trim() === "") return [];

  const tiers: PricingTier[] = [];
  const normalised = details.trim();

  // Split on common delimiters: periods, semicolons, commas (but not commas inside prices)
  // First split on ". " and "; " for major sections
  const majorParts = normalised.split(/\.\s+|;\s+/).filter(Boolean);

  for (const part of majorParts) {
    // Each major part may contain comma-separated tiers
    const subParts = splitOnCommas(part);

    for (const sub of subParts) {
      const tier = parseSingleTier(sub.trim());
      if (tier) {
        tiers.push(tier);
      }
    }
  }

  // If no tiers were parsed, create a single generic one
  if (tiers.length === 0) {
    tiers.push({
      name: "Plan",
      price: normalised,
      period: "",
      highlight: false,
      features: [],
    });
  }

  // Set highlight on the first paid non-enterprise tier (the "recommended" plan)
  const firstPaidIdx = tiers.findIndex(
    (t) =>
      t.price !== "$0" &&
      t.price !== "Free" &&
      t.price !== "Custom" &&
      t.price !== "Contact Sales" &&
      !t.name.toLowerCase().includes("enterprise")
  );
  if (firstPaidIdx >= 0) {
    tiers[firstPaidIdx].highlight = true;
  }

  return tiers;
}

/**
 * Split a string on commas, but not commas inside price ranges like "$0.04-$0.12"
 */
function splitOnCommas(str: string): string[] {
  const parts: string[] = [];
  let current = "";
  let i = 0;

  while (i < str.length) {
    if (str[i] === "," && i + 1 < str.length && str[i + 1] === " ") {
      // Check if this is separating tiers (next part should start with a name or $)
      const rest = str.slice(i + 2).trim();
      if (rest.match(/^[A-Z$]/)) {
        parts.push(current.trim());
        current = "";
        i += 2;
        continue;
      }
    }
    current += str[i];
    i++;
  }
  if (current.trim()) {
    parts.push(current.trim());
  }
  return parts;
}

/**
 * Parse a single tier description like "Pro $20/mo" or "Free tier available"
 */
function parseSingleTier(text: string): PricingTier | null {
  if (!text) return null;

  const lower = text.toLowerCase().trim();

  // --- FREE patterns ---
  if (
    lower.match(/^free\b/) ||
    lower.match(/^open[\s-]?source/) ||
    lower === "free to use" ||
    lower === "free to run locally" ||
    lower.match(/^free via\b/)
  ) {
    return {
      name: "Free",
      price: "$0",
      period: "forever",
      highlight: false,
      features: [],
      note: extractNote(text, /^(free\s*(tier|plan|version)?\s*(available|included)?)/i),
    };
  }

  // --- Enterprise / Custom patterns ---
  if (
    lower.match(/enterprise[\s-]*(only|custom)?/) &&
    !lower.match(/\$\d/)
  ) {
    return {
      name: "Enterprise",
      price: "Custom",
      period: "",
      highlight: false,
      features: [],
      note: text.replace(/enterprise[\s-]*(only)?[\s-]*/i, "").trim() || undefined,
    };
  }

  if (
    lower === "custom pricing" ||
    lower === "contact sales" ||
    lower.match(/^custom\s/)
  ) {
    return {
      name: "Enterprise",
      price: "Custom",
      period: "",
      highlight: false,
      features: [],
    };
  }

  // --- Priced tiers: look for $ amounts ---
  const priceMatch = text.match(
    /^(.+?)\s*\$(\d+(?:[.,]\d+)?(?:\s*-\s*\$?\d+(?:[.,]\d+)?)?)\s*(.*)$/
  );

  if (priceMatch) {
    const name = cleanName(priceMatch[1]);
    const price = `$${priceMatch[2]}`;
    const rest = priceMatch[3];
    const period = extractPeriod(rest);
    const note = extractPriceNote(rest, period);

    return {
      name: name || inferName(price),
      price,
      period,
      highlight: false,
      features: [],
      note: note || undefined,
    };
  }

  // --- Patterns like "$10/user/mo add-on to ..." (price first) ---
  const priceFirstMatch = text.match(
    /^\$(\d+(?:[.,]\d+)?(?:\s*-\s*\$?\d+(?:[.,]\d+)?)?)\s*(.*)$/
  );

  if (priceFirstMatch) {
    const price = `$${priceFirstMatch[1]}`;
    const rest = priceFirstMatch[2];
    const period = extractPeriod(rest);
    const note = extractPriceNote(rest, period);

    return {
      name: inferName(price),
      price,
      period,
      highlight: false,
      features: [],
      note: note || undefined,
    };
  }

  // --- "from $X/mo" patterns ---
  const fromMatch = text.match(
    /^(.+?)\s*from\s*\$(\d+(?:[.,]\d+)?)\s*(.*)$/i
  );

  if (fromMatch) {
    const name = cleanName(fromMatch[1]);
    const price = `From $${fromMatch[2]}`;
    const rest = fromMatch[3];
    const period = extractPeriod(rest);

    return {
      name: name || "Standard",
      price,
      period,
      highlight: false,
      features: [],
    };
  }

  // --- "Included in X" patterns ---
  if (lower.startsWith("included in")) {
    const inclMatch = text.match(/included in\s+(.+?)\s+\$(\d+(?:[.,]\d+)?)\s*(.*)/i);
    if (inclMatch) {
      return {
        name: cleanName(inclMatch[1]),
        price: `$${inclMatch[2]}`,
        period: extractPeriod(inclMatch[3]),
        highlight: false,
        features: [],
        note: "Included with subscription",
      };
    }
  }

  // --- "Pay-as-you-go" patterns ---
  if (lower.match(/pay[\s-]*as[\s-]*you[\s-]*go/)) {
    const payMatch = text.match(/\$(\d+(?:[.,]\d+)?)\s*(.*)/);
    if (payMatch) {
      return {
        name: "Pay-as-you-go",
        price: `$${payMatch[1]}`,
        period: extractPeriod(payMatch[2]) || "/unit",
        highlight: false,
        features: [],
      };
    }
    return {
      name: "Pay-as-you-go",
      price: "Variable",
      period: "",
      highlight: false,
      features: [],
    };
  }

  // --- "API $X per Y" patterns ---
  if (lower.startsWith("api ")) {
    const apiMatch = text.match(/API\s+\$(\d+(?:[.,]\d+)?(?:\s*-\s*\$?\d+(?:[.,]\d+)?)?)\s*(.*)/i);
    if (apiMatch) {
      return {
        name: "API",
        price: `$${apiMatch[1]}`,
        period: extractPeriod(apiMatch[2]) || "/request",
        highlight: false,
        features: [],
      };
    }
  }

  // --- "Business tier $99+/mo" patterns ---
  const businessMatch = text.match(
    /^(.+?)\s*tier\s*\$(\d+(?:[.,]\d+)?)\+?\s*(.*)$/i
  );
  if (businessMatch) {
    return {
      name: cleanName(businessMatch[1]),
      price: `$${businessMatch[2]}+`,
      period: extractPeriod(businessMatch[3]),
      highlight: false,
      features: [],
    };
  }

  // --- Fallback: if there's a $ somewhere, try to extract ---
  const fallbackPrice = text.match(/\$(\d+(?:[.,]\d+)?)/);
  if (fallbackPrice) {
    const nameBeforePrice = text.slice(0, text.indexOf("$")).trim();
    const afterPrice = text.slice(text.indexOf("$") + fallbackPrice[0].length).trim();
    return {
      name: cleanName(nameBeforePrice) || "Plan",
      price: `$${fallbackPrice[1]}`,
      period: extractPeriod(afterPrice),
      highlight: false,
      features: [],
    };
  }

  // If it's something like "Subscription $19.99/mo, $199.99/yr" that didn't match above
  if (lower.match(/subscription|premium|pro|plus|starter|basic|standard/)) {
    return {
      name: cleanName(text),
      price: "See website",
      period: "",
      highlight: false,
      features: [],
    };
  }

  return null;
}

/**
 * Extract the billing period from text.
 */
function extractPeriod(text: string): string {
  if (!text) return "/month";

  const t = text.toLowerCase().trim();

  // Per user per month
  if (t.match(/^\/user\/mo/)) return "/user/month";
  if (t.match(/^per\s+user\s*\/\s*mo/)) return "/user/month";
  if (t.match(/^\/user\/month/)) return "/user/month";

  // Per month
  if (t.match(/^\/mo\b/) || t.match(/^per\s+month/)) return "/month";
  if (t.match(/^\/month/)) return "/month";

  // Per year
  if (t.match(/^\/yr\b/) || t.match(/^\/year/) || t.match(/^per\s+year/)) return "/year";

  // Per unit pricing (API)
  if (t.match(/^\/image/)) return "/image";
  if (t.match(/^\/sec/)) return "/second";
  if (t.match(/^per\s+image/)) return "/image";
  if (t.match(/^\/1k\s+token/i)) return "/1K tokens";
  if (t.match(/^per\s+1k\s+token/i)) return "/1K tokens";

  // "annual" keyword
  if (t.match(/annual/)) return "/year";

  return "/month";
}

/**
 * Extract a note from pricing text (the part after the core info).
 */
function extractNote(text: string, stripPattern: RegExp): string | undefined {
  const cleaned = text.replace(stripPattern, "").trim();
  if (cleaned && cleaned.length > 3) return cleaned;
  return undefined;
}

/**
 * Extract note from after the period text.
 */
function extractPriceNote(rest: string, period: string): string | null {
  if (!rest) return null;
  // Remove the period indicator and see what's left
  let note = rest
    .replace(/^\/mo\b/, "")
    .replace(/^\/month/, "")
    .replace(/^\/yr\b/, "")
    .replace(/^\/year/, "")
    .replace(/^\/user\/mo\b/, "")
    .replace(/^\/user\/month/, "")
    .replace(/^per\s+month/, "")
    .replace(/^per\s+year/, "")
    .replace(/^annual\b/, "")
    .trim();

  // Remove leading "with" for notes like "with GPT-4 Turbo"
  if (note.startsWith("with ")) {
    return note;
  }

  if (note.length > 3) return note;
  return null;
}

/**
 * Clean up a tier name.
 */
function cleanName(name: string): string {
  return name
    .replace(/[\s-]+$/, "")
    .replace(/^[\s-]+/, "")
    .replace(/\s*plans?\s*$/i, "")
    .replace(/\s*tier\s*$/i, "")
    .replace(/\s*pricing\s*$/i, "")
    .replace(/,\s*$/, "")
    .trim();
}

/**
 * Infer a tier name from its price.
 */
function inferName(price: string): string {
  const num = parseFloat(price.replace(/[^0-9.]/g, ""));
  if (isNaN(num)) return "Plan";
  if (num === 0) return "Free";
  if (num < 15) return "Starter";
  if (num < 30) return "Standard";
  if (num < 60) return "Pro";
  if (num < 150) return "Business";
  return "Enterprise";
}

/**
 * Get a human-readable pricing summary for a tool.
 */
export function getPricingSummary(
  pricing: string,
  pricingDetails?: string
): string {
  if (pricing === "free" || pricing === "open-source") {
    return "Free to use";
  }

  if (!pricingDetails) {
    return pricing === "freemium" ? "Free tier available, paid plans available" : "Paid plans available";
  }

  // Find the cheapest paid price
  const tiers = parsePricingDetails(pricingDetails);
  const paidTiers = tiers.filter(
    (t) => t.price !== "$0" && t.price !== "Free" && t.price !== "Custom" && t.price !== "Variable" && t.price !== "See website"
  );

  if (paidTiers.length > 0) {
    const cheapest = paidTiers[0];
    const hasFree = tiers.some((t) => t.price === "$0");
    if (hasFree) {
      return `Free plan + paid from ${cheapest.price}${cheapest.period}`;
    }
    return `Starting at ${cheapest.price}${cheapest.period}`;
  }

  return pricingDetails;
}

/**
 * Determine if a tool has a free option.
 */
export function hasFreeTier(pricing: string, pricingDetails?: string): boolean {
  if (pricing === "free" || pricing === "open-source") return true;
  if (pricing === "freemium") return true;
  if (!pricingDetails) return false;

  const lower = pricingDetails.toLowerCase();
  return (
    lower.includes("free") ||
    lower.includes("open source") ||
    lower.includes("open-source")
  );
}

/**
 * Get the pricing type label with a more descriptive name.
 */
export function getPricingTypeLabel(pricing: string): {
  label: string;
  description: string;
  color: string;
} {
  switch (pricing) {
    case "free":
      return {
        label: "Free",
        description: "Completely free to use with no paid plans",
        color: "green",
      };
    case "freemium":
      return {
        label: "Freemium",
        description: "Free tier available with optional paid upgrades",
        color: "blue",
      };
    case "paid":
      return {
        label: "Paid",
        description: "Requires a paid subscription or one-time purchase",
        color: "orange",
      };
    case "open-source":
      return {
        label: "Open Source",
        description: "Free and open-source software you can self-host",
        color: "purple",
      };
    default:
      return {
        label: pricing,
        description: "Pricing varies",
        color: "gray",
      };
  }
}
