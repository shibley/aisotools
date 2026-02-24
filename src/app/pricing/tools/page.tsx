import { tools } from "@/data/tools";
import { categories } from "@/data/categories";
import Link from "next/link";
import type { Metadata } from "next";
import { getPricingSummary, getPricingTypeLabel, hasFreeTier } from "@/lib/pricing-parser";

const year = new Date().getFullYear();

export const metadata: Metadata = {
  title: `AI Tool Pricing Guide ${year}: Compare 280+ Tools`,
  description: `Compare pricing for 280+ AI tools across writing, coding, design, marketing, and more. Find free AI tools, compare plans, and discover the best value in ${year}.`,
  alternates: {
    canonical: "https://aisotools.com/pricing/tools",
  },
  openGraph: {
    title: `AI Tool Pricing Comparison ${year} | AISO Tools`,
    description: `Browse and compare pricing for 280+ AI tools. Free plans, paid subscriptions, and enterprise options all in one place.`,
    url: "https://aisotools.com/pricing/tools",
    type: "website",
  },
};

export default function PricingHubPage() {
  // Group tools by category
  const toolsByCategory = new Map<string, typeof tools>();
  for (const tool of tools) {
    const existing = toolsByCategory.get(tool.category) || [];
    existing.push(tool);
    toolsByCategory.set(tool.category, existing);
  }

  // Pricing stats
  const freeTools = tools.filter((t) => hasFreeTier(t.pricing, t.pricingDetails));
  const paidOnlyTools = tools.filter((t) => t.pricing === "paid");
  const openSourceTools = tools.filter((t) => t.pricing === "open-source");
  const freemiumTools = tools.filter((t) => t.pricing === "freemium");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `AI Tool Pricing Guide ${year}`,
    description: `Compare pricing for 280+ AI tools`,
    url: "https://aisotools.com/pricing/tools",
    numberOfItems: tools.length,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <span className="mx-2">›</span>
          <span className="text-gray-300">AI Tool Pricing</span>
        </nav>

        {/* Hero */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            AI Tool Pricing Guide {year}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Compare pricing plans for {tools.length}+ AI tools across{" "}
            {categories.length} categories. Find free options, compare costs,
            and pick the right tool for your budget.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-white">{tools.length}</div>
            <div className="text-gray-400 text-sm">Total Tools</div>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-green-400">
              {freeTools.length}
            </div>
            <div className="text-gray-400 text-sm">Free Options</div>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-blue-400">
              {freemiumTools.length}
            </div>
            <div className="text-gray-400 text-sm">Freemium</div>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-purple-400">
              {openSourceTools.length}
            </div>
            <div className="text-gray-400 text-sm">Open Source</div>
          </div>
        </div>

        {/* Quick Filter Links */}
        <div className="flex flex-wrap gap-2 mb-10">
          <span className="text-gray-400 text-sm py-2">Filter by pricing:</span>
          <a href="#free" className="bg-green-500/10 text-green-400 px-3 py-1.5 rounded-full text-sm hover:bg-green-500/20 transition">
            Free ({freeTools.filter(t => t.pricing === "free").length})
          </a>
          <a href="#freemium" className="bg-blue-500/10 text-blue-400 px-3 py-1.5 rounded-full text-sm hover:bg-blue-500/20 transition">
            Freemium ({freemiumTools.length})
          </a>
          <a href="#paid" className="bg-orange-500/10 text-orange-400 px-3 py-1.5 rounded-full text-sm hover:bg-orange-500/20 transition">
            Paid ({paidOnlyTools.length})
          </a>
          <a href="#open-source" className="bg-purple-500/10 text-purple-400 px-3 py-1.5 rounded-full text-sm hover:bg-purple-500/20 transition">
            Open Source ({openSourceTools.length})
          </a>
        </div>

        {/* Tools by Category */}
        {categories.map((category) => {
          const catTools = toolsByCategory.get(category.slug);
          if (!catTools || catTools.length === 0) return null;

          return (
            <section key={category.slug} className="mb-12" id={category.slug}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <div>
                  <h2 className="text-2xl font-bold">{category.name}</h2>
                  <p className="text-gray-500 text-sm">
                    {catTools.length} tools ·{" "}
                    {catTools.filter((t) => hasFreeTier(t.pricing, t.pricingDetails)).length}{" "}
                    with free options
                  </p>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
                <div className="hidden sm:grid grid-cols-12 bg-gray-800/50 p-4 text-sm font-medium text-gray-400">
                  <div className="col-span-4">Tool</div>
                  <div className="col-span-2 text-center">Type</div>
                  <div className="col-span-4">Pricing</div>
                  <div className="col-span-2 text-center">Details</div>
                </div>
                {catTools.map((tool, i) => {
                  const type = getPricingTypeLabel(tool.pricing);
                  const summary = getPricingSummary(
                    tool.pricing,
                    tool.pricingDetails
                  );
                  return (
                    <div
                      key={tool.slug}
                      className={`grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-0 p-4 items-center ${
                        i > 0 ? "border-t border-gray-800" : ""
                      } hover:bg-gray-800/30 transition`}
                    >
                      <div className="sm:col-span-4">
                        <Link
                          href={`/pricing/${tool.slug}`}
                          className="font-medium text-white hover:text-blue-400 transition"
                        >
                          {tool.name}
                        </Link>
                        <p className="text-gray-500 text-xs mt-0.5 sm:hidden">
                          {tool.shortDescription}
                        </p>
                      </div>
                      <div className="sm:col-span-2 sm:text-center">
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                            type.color === "green"
                              ? "bg-green-500/10 text-green-400"
                              : type.color === "blue"
                              ? "bg-blue-500/10 text-blue-400"
                              : type.color === "orange"
                              ? "bg-orange-500/10 text-orange-400"
                              : type.color === "purple"
                              ? "bg-purple-500/10 text-purple-400"
                              : "bg-gray-500/10 text-gray-400"
                          }`}
                        >
                          {type.label}
                        </span>
                      </div>
                      <div className="sm:col-span-4 text-sm text-gray-400">
                        {tool.pricingDetails || summary}
                      </div>
                      <div className="sm:col-span-2 sm:text-center">
                        <Link
                          href={`/pricing/${tool.slug}`}
                          className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                        >
                          Details →
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Can&apos;t find what you&apos;re looking for?
          </h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            We&apos;re constantly adding new AI tools and updating pricing info.
            Submit a tool or check back soon.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Submit a Tool
            </Link>
            <Link
              href="/compare"
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Compare Tools
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
