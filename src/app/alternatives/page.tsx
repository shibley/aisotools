import { tools } from "@/data/tools";
import { categories } from "@/data/categories";
import { getToolsWithAlternatives } from "@/lib/alternatives";
import { hasFreeTier } from "@/lib/pricing-parser";
import Link from "next/link";
import type { Metadata } from "next";

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

const year = new Date().getFullYear();

export const metadata: Metadata = {
  title: `AI Tool Alternatives Directory (${year}) — Find the Best Alternative | AISO Tools`,
  description: `Browse alternatives for 280+ AI tools. Compare features, pricing, and find the perfect replacement for ChatGPT, Midjourney, GitHub Copilot, and more.`,
  alternates: {
    canonical: "https://aisotools.com/alternatives",
  },
  openGraph: {
    title: `AI Tool Alternatives Directory (${year}) | AISO Tools`,
    description:
      "Find the best alternative to any AI tool. 280+ tools compared with features, pricing, and head-to-head matchups.",
    url: "https://aisotools.com/alternatives",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `AI Tool Alternatives Directory (${year})`,
    description:
      "Compare alternatives for 280+ AI tools — features, pricing, and more.",
  },
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function AlternativesHubPage() {
  const toolsWithAlts = getToolsWithAlternatives();

  // Group by category
  const grouped: Record<
    string,
    { slug: string; name: string; icon: string; tools: typeof toolsWithAlts }
  > = {};

  for (const tool of toolsWithAlts) {
    if (!grouped[tool.category]) {
      const cat = categories.find((c) => c.slug === tool.category);
      grouped[tool.category] = {
        slug: tool.category,
        name: cat?.name || tool.category,
        icon: cat?.icon || "🔧",
        tools: [],
      };
    }
    grouped[tool.category].tools.push(tool);
  }

  // Sort categories by number of tools (descending)
  const sortedCategories = Object.values(grouped).sort(
    (a, b) => b.tools.length - a.tools.length
  );

  // Featured tools — the most popular ones for the hero section
  const featuredSlugs = [
    "chatgpt",
    "midjourney",
    "github-copilot",
    "canva-ai",
    "grammarly",
    "notion-ai",
    "dall-e",
    "synthesia",
    "jasper",
    "cursor",
    "perplexity",
    "claude",
  ];
  const featuredTools = featuredSlugs
    .map((s) => tools.find((t) => t.slug === s))
    .filter(Boolean) as typeof tools;

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: `AI Tool Alternatives Directory (${year})`,
      description: `Browse alternatives for ${toolsWithAlts.length}+ AI tools grouped by category.`,
      url: "https://aisotools.com/alternatives",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://aisotools.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Alternatives",
          item: "https://aisotools.com/alternatives",
        },
      ],
    },
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <span className="mx-2">›</span>
          <span className="text-gray-300">Alternatives</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            AI Tool Alternatives Directory
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Find the best alternative to any AI tool.{" "}
            {toolsWithAlts.length}+ tools compared with features, pricing, and
            head-to-head matchups.
          </p>
        </div>

        {/* Featured Alternatives */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6">🔥 Popular Alternatives</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredTools.map((tool) => {
              const altCount = tool.alternatives?.length || 0;
              const isFree = hasFreeTier(tool.pricing, tool.pricingDetails);
              return (
                <Link
                  key={tool.slug}
                  href={`/alternatives/${tool.slug}`}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-sm font-bold text-blue-400">
                      {tool.name.charAt(0)}
                    </div>
                    <h3 className="font-semibold group-hover:text-blue-400 transition">
                      {tool.name} Alternatives
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">
                    {tool.shortDescription}
                  </p>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-full">
                      {altCount} alternatives
                    </span>
                    {isFree && (
                      <span className="bg-green-500/10 text-green-400 px-2 py-0.5 rounded-full">
                        Free options
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* All Alternatives by Category */}
        <section>
          <h2 className="text-2xl font-bold mb-6">
            All Alternatives by Category
          </h2>
          <div className="space-y-10">
            {sortedCategories.map((group) => (
              <div key={group.slug}>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span>{group.icon}</span>
                  <span>{group.name}</span>
                  <span className="text-gray-500 text-sm font-normal ml-2">
                    ({group.tools.length} tools)
                  </span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                  {group.tools
                    .sort((a, b) => {
                      // Sort featured/sponsored first, then by name
                      if (a.featured !== b.featured)
                        return a.featured ? -1 : 1;
                      return a.name.localeCompare(b.name);
                    })
                    .map((tool) => (
                      <Link
                        key={tool.slug}
                        href={`/alternatives/${tool.slug}`}
                        className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-blue-500/50 transition group"
                      >
                        <h4 className="font-medium text-sm group-hover:text-blue-400 transition">
                          {tool.name} Alternatives
                        </h4>
                        <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                          <span>
                            {tool.alternatives?.length || 0} alternatives
                          </span>
                          <span>·</span>
                          <span className="capitalize">{tool.pricing}</span>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SEO content */}
        <section className="mt-14 border-t border-gray-800 pt-10">
          <h2 className="text-2xl font-bold mb-4">
            Finding the Right AI Tool Alternative
          </h2>
          <div className="prose prose-invert max-w-none text-gray-400 space-y-4 text-sm leading-relaxed">
            <p>
              The AI tool landscape is evolving at breakneck speed. New tools
              launch weekly, existing ones add features, and pricing models
              shift. What was the best option six months ago may not be today.
              That&apos;s why comparing alternatives regularly is essential.
            </p>
            <p>
              Our alternatives directory covers {toolsWithAlts.length}+ AI
              tools across {sortedCategories.length} categories — from chatbots
              and image generators to coding assistants and marketing
              automation. Each alternatives page includes a detailed comparison
              table, feature breakdowns, pricing analysis, and genuine &quot;Why
              choose X over Y?&quot; insights to help you make an informed
              decision.
            </p>
            <p>
              Whether you&apos;re looking for a free alternative to a paid
              tool, an open-source option you can self-host, or simply a
              competitor that better fits your workflow, you&apos;ll find it
              here. Use our{" "}
              <Link href="/compare" className="text-blue-400 hover:text-blue-300">
                comparison tool
              </Link>{" "}
              for head-to-head matchups, or browse{" "}
              <Link href="/pricing/tools" className="text-blue-400 hover:text-blue-300">
                pricing pages
              </Link>{" "}
              for detailed cost breakdowns.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
