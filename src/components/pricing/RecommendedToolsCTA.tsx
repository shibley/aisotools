/**
 * RecommendedToolsCTA — Monetization component for pricing pages.
 * 
 * Shows on pricing pages for tools WITHOUT affiliate programs.
 * Promotes complementary tools that DO have active affiliate programs.
 * 
 * Used to capture ChatGPT/AI traffic that lands on non-monetized pricing pages
 * (Runway, CapCut, D-ID, etc.) and route them to tools we CAN earn from.
 */

import Link from "next/link";

interface RecommendedTool {
  name: string;
  slug: string;
  tagline: string;
  category: string;
  pricing: string;
  affiliateUrl: string;
  benefit: string; // Why this complements the current tool
}

// Active affiliate tools only (pulled from affiliate-links.ts)
const AFFILIATE_TOOLS: RecommendedTool[] = [
  {
    name: "ElevenLabs",
    slug: "elevenlabs",
    tagline: "Ultra-realistic AI voiceovers",
    category: "audio",
    pricing: "Free tier, $5/mo+",
    affiliateUrl: "https://try.elevenlabs.io/7j98rr4eeebw",
    benefit: "Add professional narration to your videos",
  },
  {
    name: "Murf.ai",
    slug: "murf-ai",
    tagline: "Studio-quality AI voices",
    category: "audio",
    pricing: "Free tier, $19/mo+",
    affiliateUrl: "https://get.murf.ai/kveyd98v1qu6",
    benefit: "Create voiceovers in 120+ voices",
  },
  {
    name: "AdCreative.ai",
    slug: "adcreative",
    tagline: "AI-powered ad creatives",
    category: "marketing",
    pricing: "$29/mo+",
    affiliateUrl: "https://free-trial.adcreative.ai/yh4dtwq3dst0",
    benefit: "Generate marketing visuals in seconds",
  },
  {
    name: "Gamma",
    slug: "gamma",
    tagline: "AI presentation builder",
    category: "productivity",
    pricing: "Free tier, $10/mo+",
    affiliateUrl: "https://try.gamma.app/iu7k55m0qa0c",
    benefit: "Turn ideas into polished decks instantly",
  },
  {
    name: "SEMrush",
    slug: "semrush-ai",
    tagline: "All-in-one SEO toolkit",
    category: "marketing",
    pricing: "$129.95/mo+",
    affiliateUrl: "https://semrush.sjv.io/oNREJo",
    benefit: "Optimize content for maximum reach",
  },
  {
    name: "ActiveCampaign",
    slug: "activecampaign",
    tagline: "Marketing automation platform",
    category: "marketing",
    pricing: "$29/mo+",
    affiliateUrl: "https://try.activecampaign.com/vw1jw6s8z6qi",
    benefit: "Automate email campaigns and nurture leads",
  },
];

interface Props {
  currentToolCategory: string; // e.g., "video", "writing", "design"
  currentToolName: string;
}

export function RecommendedToolsCTA({ currentToolCategory, currentToolName }: Props) {
  // Filter tools to show relevant ones based on category
  const relevantTools = getRelevantTools(currentToolCategory);

  return (
    <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/30 rounded-xl p-6 mb-10">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">💡</span>
        <h2 className="text-xl font-semibold">
          Complete Your {getCategoryLabel(currentToolCategory)} Stack
        </h2>
      </div>
      <p className="text-gray-400 text-sm mb-5">
        {currentToolName} users also rely on these tools to enhance their workflow:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {relevantTools.map((tool) => (
          <a
            key={tool.slug}
            href={tool.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 hover:border-purple-500/50 hover:bg-gray-900/70 transition group"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-semibold text-white group-hover:text-purple-400 transition">
                {tool.name}
              </h3>
              <span className="px-2 py-0.5 rounded text-xs font-medium bg-purple-500/10 text-purple-400 flex-shrink-0">
                Try Free
              </span>
            </div>
            <p className="text-gray-400 text-xs mb-2">
              {tool.tagline}
            </p>
            <p className="text-gray-500 text-xs mb-3">
              {tool.benefit}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 text-xs">{tool.pricing}</span>
              <span className="text-purple-400 text-xs font-medium group-hover:text-purple-300 transition">
                Learn more →
              </span>
            </div>
          </a>
        ))}
      </div>
      <p className="text-gray-600 text-xs mt-4">
        💰 <strong>Affiliate disclosure:</strong> We may earn a commission if you sign up through these links at no extra cost to you.
      </p>
    </div>
  );
}

/**
 * Get relevant tools based on current tool category.
 * Prioritize complementary tools over same-category tools.
 */
function getRelevantTools(category: string): RecommendedTool[] {
  const categoryMap: Record<string, string[]> = {
    video: ["audio", "marketing", "productivity"], // Video creators need voiceovers, marketing, presentations
    writing: ["marketing", "productivity", "audio"], // Writers need SEO, organization, narration
    design: ["marketing", "productivity", "audio"], // Designers need marketing, presentations, voiceovers
    marketing: ["audio", "productivity", "marketing"], // Marketers need voiceovers, automation, presentations
    productivity: ["marketing", "audio", "productivity"], // Productivity users need automation, voiceovers
    audio: ["video", "marketing", "productivity"], // Audio creators need video, marketing, automation
    code: ["productivity", "marketing", "audio"], // Developers need organization, marketing, documentation
    default: ["audio", "marketing", "productivity"], // Fallback: most universal tools
  };

  const preferredCategories = categoryMap[category] || categoryMap.default;

  // Return tools in order of preference, max 3
  const tools: RecommendedTool[] = [];
  for (const cat of preferredCategories) {
    const catTools = AFFILIATE_TOOLS.filter((t) => t.category === cat);
    tools.push(...catTools);
    if (tools.length >= 3) break;
  }

  // If we still don't have 3, fill with remaining tools
  if (tools.length < 3) {
    const remaining = AFFILIATE_TOOLS.filter((t) => !tools.includes(t));
    tools.push(...remaining.slice(0, 3 - tools.length));
  }

  return tools.slice(0, 3);
}

function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    video: "Video Production",
    writing: "Writing",
    design: "Design",
    marketing: "Marketing",
    productivity: "Productivity",
    audio: "Audio Production",
    code: "Development",
  };
  return labels[category] || "AI Tool";
}
