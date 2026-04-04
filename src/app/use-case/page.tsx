import { useCases } from "@/data/use-cases";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Tools by Use Case | AISO Tools",
  description:
    "Discover the best AI tools organized by use case — writing, coding, video, design, marketing, data analysis, and more. Find the perfect AI tool for your specific task.",
  keywords: [
    "ai tools by use case",
    "best ai tools for",
    "ai tools for writing",
    "ai tools for coding",
    "ai tools for design",
    "ai tools for video",
  ],
  alternates: {
    canonical: "https://aisotools.com/use-case",
  },
  openGraph: {
    title: "AI Tools by Use Case | AISO Tools",
    description:
      "Find the perfect AI tool for your specific task. Browse 14+ use cases including writing, coding, video, design, marketing, and more.",
    url: "https://aisotools.com/use-case",
    type: "website",
  },
};

function generateJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AI Tools by Use Case",
    description:
      "Discover the best AI tools organized by use case — writing, coding, video, design, marketing, data analysis, and more.",
    url: "https://aisotools.com/use-case",
    mainEntity: useCases.map((uc) => ({
      "@type": "Thing",
      name: uc.name,
      url: `https://aisotools.com/use-case/${uc.slug}`,
      description: uc.description,
    })),
  };
}

export default function UseCasePage() {
  const jsonLd = generateJsonLd();

  // Group use cases by category for organization
  const categories = [
    {
      title: "Content & Creative",
      useCases: useCases.filter((uc) =>
        ["writing", "video-editing", "image-generation", "music-production", "design"].includes(uc.slug)
      ),
    },
    {
      title: "Development & Technical",
      useCases: useCases.filter((uc) =>
        ["coding", "automation", "3d-modeling", "data-analysis"].includes(uc.slug)
      ),
    },
    {
      title: "Business & Growth",
      useCases: useCases.filter((uc) =>
        ["marketing", "business", "customer-support"].includes(uc.slug)
      ),
    },
    {
      title: "Learning & Research",
      useCases: useCases.filter((uc) =>
        ["education", "research", "productivity"].includes(uc.slug)
      ),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            AI Tools by Use Case
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find the perfect AI tool for your specific task. Browse {useCases.length}+ use cases with curated
            recommendations for writing, coding, design, marketing, and more.
          </p>
        </header>

        {/* Categorized use cases */}
        {categories.map((category) => (
          <section key={category.title} className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {category.title}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {category.useCases.map((uc) => (
                <Link
                  key={uc.slug}
                  href={`/use-case/${uc.slug}`}
                  className="group bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-500 transition-all"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {uc.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                    {uc.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {uc.description}
                  </p>
                  <span className="inline-block mt-3 text-sm text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                    Explore →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {/* All use cases grid */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Quick Access to All {useCases.length} Use Cases
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {useCases.map((uc) => (
              <Link
                key={uc.slug}
                href={`/use-case/${uc.slug}`}
                className="bg-gray-50 dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-3 text-center transition-colors"
              >
                <span className="text-xl block mb-1">{uc.icon}</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {uc.name}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Info section */}
        <section className="mt-20 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 p-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            How to Use This Guide
          </h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="font-bold text-blue-600">1.</span>
              <span>Choose a use case that matches your needs</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-blue-600">2.</span>
              <span>
                Browse tools curated for that specific purpose, with details on pricing and features
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-blue-600">3.</span>
              <span>Click on any tool to see full details, comparisons, and alternatives</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-blue-600">4.</span>
              <span>Visit the tool's website to try it for free or purchase a plan</span>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
