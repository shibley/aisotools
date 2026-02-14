import { categories } from "@/data/categories";
import { tools } from "@/data/tools";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return {};

  return {
    title: `Best AI ${category.name} Tools (2026) — Free & Paid`,
    description: `Discover the best AI tools for ${category.name.toLowerCase()}. Compare ${category.subcategories.slice(0, 3).join(", ")} tools and more. Updated daily.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const categoryTools = tools.filter((t) => t.category === slug);
  const sponsoredTools = categoryTools.filter((t) => t.sponsored);
  const regularTools = categoryTools.filter((t) => !t.sponsored);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-white">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/category" className="hover:text-white">Categories</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">{category.name}</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl">{category.icon}</span>
          <h1 className="text-4xl font-bold">Best AI {category.name} Tools</h1>
        </div>
        <p className="text-xl text-gray-400 max-w-3xl">{category.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {category.subcategories.map((sub) => (
            <span
              key={sub}
              className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm hover:bg-gray-700 cursor-pointer transition"
            >
              {sub}
            </span>
          ))}
        </div>
      </div>

      {/* Sponsored */}
      {sponsoredTools.length > 0 && (
        <section className="mb-10">
          <h2 className="text-sm text-gray-500 mb-3 uppercase tracking-wide">⭐ Featured</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsoredTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tool/${tool.slug}`}
                className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/30 rounded-xl p-6 hover:border-blue-500/50 transition"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold">{tool.name}</h3>
                  <span className="text-xs bg-yellow-500/10 text-yellow-400 px-2 py-0.5 rounded-full">Featured</span>
                </div>
                <p className="text-gray-400 text-sm mb-3">{tool.shortDescription}</p>
                <span className="text-xs bg-gray-800 text-gray-500 px-2 py-0.5 rounded-full">{tool.pricing}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* All Tools */}
      <section>
        <h2 className="text-2xl font-bold mb-6">
          All {category.name} Tools ({categoryTools.length})
        </h2>
        {categoryTools.length === 0 ? (
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-12 text-center">
            <p className="text-gray-400 mb-4">No tools listed in this category yet.</p>
            <Link
              href="/submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Submit the first tool →
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tool/${tool.slug}`}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition group"
              >
                <h3 className="text-lg font-semibold group-hover:text-blue-400 transition mb-2">
                  {tool.name}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{tool.shortDescription}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-gray-800 text-gray-500 px-2 py-0.5 rounded-full">{tool.pricing}</span>
                  <div className="flex gap-1">
                    {tool.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs text-gray-600">{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
