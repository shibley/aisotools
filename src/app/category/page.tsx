import { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/data/categories";
import { tools } from "@/data/tools";
import CategoryIcon from "@/components/CategoryIcon";

export const metadata: Metadata = {
  title: "AI Tool Categories | AISO Tools",
  description: `Browse ${categories.length} categories of AI tools. Find the best AI tools for writing, coding, image generation, marketing, and more.`,
  alternates: {
    canonical: "https://aisotools.com/category",
  },
};

export default function CategoriesPage() {
  // Count tools per category
  const toolCounts: Record<string, number> = {};
  for (const tool of tools) {
    const cat = tool.category;
    toolCounts[cat] = (toolCounts[cat] || 0) + 1;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
          Browse{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            AI Tool Categories
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Explore {tools.length}+ curated AI tools across {categories.length} categories.
          Find the perfect tool for any task.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => {
          const count = toolCounts[cat.slug] || toolCounts[cat.name] || 0;
          return (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition group"
            >
              <div className="flex items-start gap-4">
                <CategoryIcon slug={cat.slug} size={32} />
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg font-semibold group-hover:text-blue-400 transition mb-1">
                    {cat.name}
                  </h2>
                  <p className="text-sm text-gray-400 mb-3">{cat.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {cat.subcategories.slice(0, 4).map((sub) => (
                      <span
                        key={sub}
                        className="text-xs bg-gray-800 text-gray-500 px-2 py-0.5 rounded"
                      >
                        {sub}
                      </span>
                    ))}
                    {cat.subcategories.length > 4 && (
                      <span className="text-xs text-gray-600">
                        +{cat.subcategories.length - 4} more
                      </span>
                    )}
                  </div>
                  {count > 0 && (
                    <span className="text-xs text-blue-400">{count} tools →</span>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
