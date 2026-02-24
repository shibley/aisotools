import { tools } from "@/data/tools";
import { categories } from "@/data/categories";
import { getAllComparisonPairs, getComparisonsByCategory } from "@/lib/comparisons";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare AI Tools — Side-by-Side Comparisons | AISO Tools",
  description:
    "Compare 280+ AI tools side by side. Feature-by-feature comparisons, pricing breakdowns, and expert recommendations across chatbots, coding, image generation, video, audio, and more.",
  alternates: {
    canonical: "https://aisotools.com/compare",
  },
  openGraph: {
    title: "Compare AI Tools — Side-by-Side Comparisons | AISO Tools",
    description:
      "Compare the best AI tools side by side. ChatGPT vs Claude, Midjourney vs DALL-E, Cursor vs GitHub Copilot, and 350+ more detailed comparisons.",
    url: "https://aisotools.com/compare",
  },
};

// Highlight the most popular / high-traffic comparisons
const popularSlugs = [
  "chatgpt-vs-claude",
  "chatgpt-vs-gemini",
  "cursor-vs-github-copilot",
  "dall-e-vs-midjourney",
  "jasper-vs-copy-ai",
  "runway-vs-pika",
  "elevenlabs-vs-murf-ai",
  "synthesia-vs-heygen",
  "suno-vs-udio",
  "perplexity-vs-you-com",
  "figma-ai-vs-framer-ai",
];

export default function ComparePage() {
  const allPairs = getAllComparisonPairs();
  const byCategory = getComparisonsByCategory();
  const totalPairs = allPairs.length;

  // Popular comparisons (resolve names)
  const popular = popularSlugs
    .map((slug) => {
      const [a, b] = slug.split("-vs-");
      const tA = tools.find((t) => t.slug === a);
      const tB = tools.find((t) => t.slug === b);
      if (!tA || !tB) return null;
      return { slug, label: `${tA.name} vs ${tB.name}`, toolA: tA, toolB: tB };
    })
    .filter(Boolean) as { slug: string; label: string; toolA: typeof tools[0]; toolB: typeof tools[0] }[];

  // Sort categories by number of comparisons (descending)
  const sortedCategories = Object.entries(byCategory).sort(
    ([, a], [, b]) => b.length - a.length
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-white transition">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Compare AI Tools</span>
      </nav>

      <h1 className="text-4xl font-bold mb-4">Compare AI Tools</h1>
      <p className="text-xl text-gray-400 mb-3">
        Side-by-side comparisons to help you pick the right AI tool. Features,
        pricing, pros &amp; cons — all in one place.
      </p>
      <p className="text-gray-500 mb-10">
        Browse <strong className="text-gray-300">{totalPairs}+</strong> detailed
        comparisons across {sortedCategories.length} categories.
      </p>

      {/* Popular Comparisons */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">🔥 Popular Comparisons</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {popular.map((comp) => (
            <Link
              key={comp.slug}
              href={`/compare/${comp.slug}`}
              className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition group"
            >
              <span className="font-medium group-hover:text-blue-400 transition block mb-1">
                {comp.label}
              </span>
              <span className="text-gray-500 text-xs">
                {comp.toolA.pricing} vs {comp.toolB.pricing} · {comp.toolA.features.length} vs {comp.toolB.features.length} features
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* All Comparisons by Category */}
      {sortedCategories.map(([catSlug, comparisons]) => {
        const cat = categories.find((c) => c.slug === catSlug);
        const icon = cat?.icon || "🔧";
        const name = cat?.name || catSlug;

        return (
          <section key={catSlug} className="mb-10" id={catSlug}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{icon}</span>
              <h2 className="text-xl font-bold">{name}</h2>
              <span className="text-gray-500 text-sm">({comparisons.length} comparisons)</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {comparisons.map(({ pair, toolA, toolB }) => {
                const slug = `${pair.slugA}-vs-${pair.slugB}`;
                return (
                  <Link
                    key={slug}
                    href={`/compare/${slug}`}
                    className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition group flex items-center justify-between"
                  >
                    <span className="text-sm font-medium group-hover:text-blue-400 transition">
                      {toolA.name} vs {toolB.name}
                    </span>
                    <span className="text-gray-600 group-hover:text-gray-400 transition">→</span>
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}

      {/* Category quick-jump */}
      <section className="mt-12 bg-gray-900 border border-gray-800 rounded-xl p-6">
        <h2 className="text-lg font-bold mb-4">Browse by Category</h2>
        <div className="flex flex-wrap gap-2">
          {sortedCategories.map(([catSlug, comparisons]) => {
            const cat = categories.find((c) => c.slug === catSlug);
            return (
              <a
                key={catSlug}
                href={`#${catSlug}`}
                className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1.5 rounded-full text-sm transition"
              >
                {cat?.icon} {cat?.name || catSlug} ({comparisons.length})
              </a>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-10 bg-gray-900 border border-gray-800 rounded-xl p-8 text-center">
        <h2 className="text-xl font-bold mb-3">Can&apos;t find the comparison you need?</h2>
        <p className="text-gray-400 mb-4">
          Explore our full directory of AI tools or check out pricing breakdowns.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/directory"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Browse All Tools
          </Link>
          <Link
            href="/pricing/tools"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            💰 Pricing Directory
          </Link>
        </div>
      </section>
    </div>
  );
}
