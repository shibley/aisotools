import { categories } from "@/data/categories";
import { tools } from "@/data/tools";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import HomeToolTabs from "@/components/HomeToolTabs";
import CategoryIcon from "@/components/CategoryIcon";
import NewsletterInline from "@/components/NewsletterInline";
import ToolLogo from "@/components/ToolLogo";

const TRENDING_SLUGS = ["chatgpt", "midjourney", "claude", "cursor", "perplexity", "deepseek"];

export default function Home() {
  const featuredTools = tools.filter((t) => t.featured || t.sponsored);
  const toolCount = tools.length;
  const categoryCount = categories.length;

  const categoryLabels = categories.reduce<Record<string, string>>((acc, category) => {
    acc[category.slug] = category.name;
    return acc;
  }, {});

  const trendingTools = TRENDING_SLUGS
    .map((slug) => tools.find((t) => t.slug === slug))
    .filter(Boolean);

  const recentlyAdded = tools.slice(-6).reverse();

  const categoryToolCounts = tools.reduce<Record<string, number>>((acc, tool) => {
    acc[tool.category] = (acc[tool.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-visible">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),_transparent_55%),radial-gradient(circle_at_20%_20%,_rgba(168,85,247,0.12),_transparent_40%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6">
              Find the{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Best AI Tools
              </span>{" "}
              for Any Task
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 mb-6">
              Curated, fast, and trusted. Discover the right AI tool in seconds.
            </p>
            <div className="mb-6 text-sm sm:text-base text-gray-300 font-medium">
              {toolCount}+ AI tools across {categoryCount} categories
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-2">
              <SearchBar />
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {[
                { label: "ChatGPT alternatives", href: "/chatgpt-alternatives" },
                { label: "AI writing tools", href: "/category/writing" },
                { label: "AI image generators", href: "/category/image-generation" },
                { label: "AI coding assistants", href: "/category/coding" },
                { label: "Free AI tools", href: "/best-free-ai-tools" },
              ].map((tag) => (
                <Link
                  key={tag.label}
                  href={tag.href}
                  className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-700 hover:text-white transition"
                >
                  {tag.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trending This Week */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">🔥 Trending This Week</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {trendingTools.map((tool) => tool && (
            <Link
              key={tool.slug}
              href={`/tool/${tool.slug}`}
              className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition group"
            >
              <div className="flex items-start gap-3 mb-3">
                <ToolLogo name={tool.name} url={tool.url} logoUrl={tool.logoUrl} size={36} />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold group-hover:text-blue-400 transition">{tool.name}</h3>
                  <p className="text-gray-400 text-sm mt-1 line-clamp-2">{tool.shortDescription}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-full">
                  {categoryLabels[tool.category] || tool.category}
                </span>
                <span className="text-xs bg-gray-800 text-gray-500 px-2 py-0.5 rounded-full">
                  {tool.pricing}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Recently Added */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">🆕 Recently Added</h2>
          <Link href="/category" className="text-blue-400 hover:text-blue-300 text-sm">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentlyAdded.map((tool) => tool && (
            <Link
              key={tool.slug}
              href={`/tool/${tool.slug}`}
              className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition group"
            >
              <div className="flex items-start gap-3 mb-3">
                <ToolLogo name={tool.name} url={tool.url} logoUrl={tool.logoUrl} size={36} />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold group-hover:text-blue-400 transition">{tool.name}</h3>
                  <p className="text-gray-400 text-sm mt-1 line-clamp-2">{tool.shortDescription}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-full">
                  {categoryLabels[tool.category] || tool.category}
                </span>
                <span className="text-xs bg-gray-800 text-gray-500 px-2 py-0.5 rounded-full">
                  {tool.pricing}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Tool Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold">Explore AI Tools</h2>
            <p className="text-gray-400 mt-2">
              Hand-picked tools with clear pricing, categories, and fast comparisons.
            </p>
          </div>
          <Link href="/category" className="text-blue-400 hover:text-blue-300 text-sm">
            View all →
          </Link>
        </div>
        <HomeToolTabs tools={tools} featuredTools={featuredTools} categoryLabels={categoryLabels} />
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-2xl border border-gray-800 bg-gradient-to-r from-gray-900 via-gray-900 to-gray-950 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold">Get the best new AI tools in your inbox weekly</h2>
            <p className="text-gray-400 mt-2">
              One concise email with fresh launches, trending picks, and featured standouts.
            </p>
          </div>
          <NewsletterInline />
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">📂 Browse by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition group text-center"
            >
              <div className="mb-2 flex justify-center">
                <CategoryIcon slug={cat.slug} size={28} />
              </div>
              <h3 className="font-semibold group-hover:text-blue-400 transition">
                {cat.name}
              </h3>
              <p className="text-gray-500 text-xs mt-1">
                {categoryToolCounts[cat.slug] || 0} tools
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Built an AI tool?</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Get your AI tool in front of thousands of developers, marketers, and creators.
            Free to submit. Featured listings available for maximum visibility.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Submit Your Tool (Free)
            </Link>
            <Link
              href="/advertise"
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Get Featured ⭐
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
