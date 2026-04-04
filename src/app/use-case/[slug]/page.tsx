import { tools, type Tool } from "@/data/tools";
import { useCases, type UseCase } from "@/data/use-cases";
import { getAffiliateUrl } from "@/data/affiliate-links";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Props {
  params: Promise<{ slug: string }>;
}

// ---------------------------------------------------------------------------
// Static generation
// ---------------------------------------------------------------------------

export async function generateStaticParams() {
  return useCases.map((uc) => ({ slug: uc.slug }));
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getToolsForUseCase(uc: UseCase): Tool[] {
  const catSet = new Set(uc.matchCategories.map((c) => c.toLowerCase()));
  const tagSet = new Set(uc.matchTags.map((t) => t.toLowerCase()));

  const matched = tools.filter((tool) => {
    // Match by category
    if (catSet.has(tool.category.toLowerCase())) return true;
    if (catSet.has(tool.subcategory.toLowerCase())) return true;
    // Match by tags
    if (tool.tags.some((tag) => tagSet.has(tag.toLowerCase()))) return true;
    return false;
  });

  // Sort: featured first, then by name
  return matched.sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return a.name.localeCompare(b.name);
  });
}

function getPricingBadge(pricing: string) {
  const colors: Record<string, string> = {
    free: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
    freemium:
      "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
    paid: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400",
    "open-source":
      "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
  };
  return colors[pricing] || colors.paid;
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const uc = useCases.find((u) => u.slug === slug);
  if (!uc) return {};

  const matchedTools = getToolsForUseCase(uc);
  const year = new Date().getFullYear();

  return {
    title: uc.title,
    description: uc.metaDescription,
    keywords: [
      `ai tools for ${uc.name.toLowerCase()}`,
      `best ai ${uc.name.toLowerCase()} tools`,
      `ai ${uc.name.toLowerCase()} tools ${year}`,
      `${uc.name.toLowerCase()} ai software`,
    ],
    alternates: {
      canonical: `https://aisotools.com/use-case/${slug}`,
    },
    openGraph: {
      title: uc.title,
      description: uc.metaDescription,
      url: `https://aisotools.com/use-case/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: uc.title,
      description: uc.metaDescription,
    },
  };
}

// ---------------------------------------------------------------------------
// JSON-LD structured data
// ---------------------------------------------------------------------------

function generateJsonLd(uc: UseCase, matchedTools: Tool[]) {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: uc.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: uc.title,
    description: uc.metaDescription,
    url: `https://aisotools.com/use-case/${uc.slug}`,
    numberOfItems: matchedTools.length,
    hasPart: matchedTools.slice(0, 20).map((tool) => ({
      "@type": "SoftwareApplication",
      name: tool.name,
      description: tool.shortDescription,
      url: `https://aisotools.com/tool/${tool.slug}`,
      applicationCategory: "WebApplication",
      offers: {
        "@type": "Offer",
        price: tool.pricing === "free" || tool.pricing === "open-source" ? "0" : undefined,
        priceCurrency: "USD",
      },
    })),
  };

  const breadcrumbLd = {
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
        name: "Use Cases",
        item: "https://aisotools.com/use-case",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: uc.name,
        item: `https://aisotools.com/use-case/${uc.slug}`,
      },
    ],
  };

  return [faqLd, collectionLd, breadcrumbLd];
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default async function UseCasePage({ params }: Props) {
  const { slug } = await params;
  const uc = useCases.find((u) => u.slug === slug);
  if (!uc) notFound();

  const matchedTools = getToolsForUseCase(uc);
  const jsonLdItems = generateJsonLd(uc, matchedTools);

  // Split tools: free/freemium vs paid
  const freeTools = matchedTools.filter(
    (t) => t.pricing === "free" || t.pricing === "freemium" || t.pricing === "open-source"
  );
  const paidTools = matchedTools.filter((t) => t.pricing === "paid");

  return (
    <>
      {jsonLdItems.map((ld, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      ))}

      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          <Link href="/" className="hover:text-gray-700 dark:hover:text-gray-200">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link
            href="/use-case"
            className="hover:text-gray-700 dark:hover:text-gray-200"
          >
            Use Cases
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 dark:text-white">{uc.name}</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{uc.icon}</span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {uc.title}
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
            {uc.intro}
          </p>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            {matchedTools.length} tools found • Last updated{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </p>
        </header>

        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {matchedTools.length}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Total Tools
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <div className="text-2xl font-bold text-green-600">
              {freeTools.length}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Free / Freemium
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <div className="text-2xl font-bold text-orange-600">
              {paidTools.length}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Paid Only
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <div className="text-2xl font-bold text-purple-600">
              {matchedTools.filter((t) => t.pricing === "open-source").length}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Open Source
            </div>
          </div>
        </div>

        {/* Tool grid */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            All {uc.name} Tools
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {matchedTools.map((tool, index) => {
              const visitUrl = getAffiliateUrl(tool.slug) || tool.affiliateUrl || tool.url;
              return (
                <div
                  key={tool.slug}
                  className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono text-gray-400">
                        #{index + 1}
                      </span>
                      <Link
                        href={`/tool/${tool.slug}`}
                        className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        {tool.name}
                      </Link>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium ${getPricingBadge(
                        tool.pricing
                      )}`}
                    >
                      {tool.pricing === "open-source"
                        ? "Open Source"
                        : tool.pricing.charAt(0).toUpperCase() +
                          tool.pricing.slice(1)}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {tool.shortDescription}
                  </p>

                  {tool.pricingDetails && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                      💰 {tool.pricingDetails}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {tool.features.slice(0, 3).map((f) => (
                      <span
                        key={f}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <Link
                      href={`/tool/${tool.slug}`}
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Details →
                    </Link>
                    {tool.alternatives && tool.alternatives.length > 0 && (
                      <Link
                        href={`/alternatives/${tool.slug}`}
                        className="text-gray-500 dark:text-gray-400 hover:underline"
                      >
                        Alternatives
                      </Link>
                    )}
                    <a
                      href={visitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto text-green-600 dark:text-green-400 hover:underline font-medium"
                    >
                      Visit ↗
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* FAQ section */}
        {uc.faqs.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {uc.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related use cases */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Explore More Use Cases
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {useCases
              .filter((u) => u.slug !== uc.slug)
              .slice(0, 8)
              .map((u) => (
                <Link
                  key={u.slug}
                  href={`/use-case/${u.slug}`}
                  className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:shadow-md transition-shadow text-center"
                >
                  <span className="text-2xl block mb-1">{u.icon}</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {u.name}
                  </span>
                </Link>
              ))}
          </div>
        </section>
      </main>
    </>
  );
}
