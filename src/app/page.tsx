import { categories } from "@/data/categories";
import { tools } from "@/data/tools";
import Link from "next/link";

export default function Home() {
  const featuredTools = tools.filter((t) => t.featured);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Find the{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Best AI Tools
              </span>{" "}
              for Any Task
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Discover {tools.length}+ curated AI tools across {categories.length} categories.
              Updated daily. Find the perfect AI tool in seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="relative flex-1 max-w-lg">
                <input
                  type="text"
                  placeholder="Search AI tools... (e.g., 'video generator', 'code assistant')"
                  className="w-full bg-gray-800/80 border border-gray-700 rounded-xl px-5 py-4 text-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">🔍</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {["ChatGPT alternatives", "AI writing tools", "AI image generators", "AI coding assistants", "Free AI tools"].map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-700 cursor-pointer transition"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">⭐ Featured Tools</h2>
          <Link href="/category" className="text-blue-400 hover:text-blue-300 text-sm">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tool/${tool.slug}`}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 hover:bg-gray-900/80 transition group"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold group-hover:text-blue-400 transition">
                    {tool.name}
                  </h3>
                  <span className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded-full">
                    {tool.pricing}
                  </span>
                </div>
                {tool.sponsored && (
                  <span className="text-xs bg-yellow-500/10 text-yellow-400 px-2 py-0.5 rounded-full">
                    Sponsored
                  </span>
                )}
              </div>
              <p className="text-gray-400 text-sm mb-4">{tool.shortDescription}</p>
              <div className="flex flex-wrap gap-1">
                {tool.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-800 text-gray-500 px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">📂 Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition group text-center"
            >
              <span className="text-3xl mb-2 block">{cat.icon}</span>
              <h3 className="font-semibold group-hover:text-blue-400 transition">
                {cat.name}
              </h3>
              <p className="text-gray-500 text-xs mt-1">
                {cat.subcategories.length} subcategories
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
              href="/pricing"
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
