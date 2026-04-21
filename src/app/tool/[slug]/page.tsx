import { tools } from "@/data/tools";
import { categories } from "@/data/categories";
import { getEnrichment } from "@/data/enrichment";
import { monitoredApis } from "@/data/monitored-apis";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import NewsletterBanner from "@/components/NewsletterBanner";
import { RecommendedToolsCTA } from "@/components/pricing/RecommendedToolsCTA";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) return {};

  return {
    title: `${tool.name} — AI Tool Review & Alternatives`,
    description: `${tool.description.slice(0, 150)}. Compare pricing, features, and alternatives.`,
    openGraph: {
      title: `${tool.name} — AISO Tools`,
      description: tool.shortDescription,
    },
  };
}

// ---------------------------------------------------------------------------
// Star rating helper
// ---------------------------------------------------------------------------
function StarRating({ rating, reviewCount }: { rating: number; reviewCount: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: fullStars }).map((_, i) => (
          <span key={`full-${i}`} className="text-yellow-400 text-base">★</span>
        ))}
        {hasHalf && <span className="text-yellow-400 text-base">½</span>}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <span key={`empty-${i}`} className="text-gray-600 text-base">★</span>
        ))}
      </div>
      <span className="text-yellow-400 font-semibold text-sm">{rating.toFixed(1)}</span>
      <span className="text-gray-500 text-sm">({reviewCount.toLocaleString()} reviews)</span>
    </div>
  );
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) notFound();

  const category = categories.find((c) => c.slug === tool.category);
  const enrichment = getEnrichment(tool.slug);
  const alternatives = tool.alternatives
    ?.map((altSlug) => tools.find((t) => t.slug === altSlug))
    .filter(Boolean);

  const categoryToolCount = tools.filter((t) => t.category === tool.category).length;
  const totalToolCount = tools.length;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-white">Home</Link>
        <span className="mx-2">›</span>
        {category && (
          <>
            <Link href={`/category/${category.slug}`} className="hover:text-white">{category.name}</Link>
            <span className="mx-2">›</span>
          </>
        )}
        <span className="text-gray-300">{tool.name}</span>
      </nav>

      {/* Recommended Tools CTA */}
      <div className="mb-8">
        <RecommendedToolsCTA currentToolCategory={tool.category} currentToolName={tool.name} />
      </div>

      {/* Social Proof */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 mb-6">
        {category && (
          <span>
            Listed in{" "}
            <Link href={`/category/${category.slug}`} className="text-blue-400 hover:text-blue-300">
              {category.name}
            </Link>{" "}
            with {categoryToolCount - 1} other tools
          </span>
        )}
        <span className="hidden sm:inline">•</span>
        <span>Part of {totalToolCount}+ curated AI tools on AISO</span>
      </div>

      {/* Screenshot/Preview */}
      {enrichment?.screenshotUrl && (
        <div className="mb-8 rounded-xl overflow-hidden border border-gray-800">
          <img
            src={enrichment.screenshotUrl}
            alt={`${tool.name} preview`}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-start gap-4">
          {enrichment?.logoUrl && (
            <img
              src={enrichment.logoUrl}
              alt={`${tool.name} logo`}
              className="w-12 h-12 rounded-lg object-contain bg-gray-800 p-1 flex-shrink-0"
              loading="lazy"
            />
          )}
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-bold">{tool.name}</h1>
              {enrichment?.lastVerified && (
                <span className="bg-green-500/10 text-green-400 px-2 py-0.5 rounded-full text-xs font-medium">
                  ✓ Verified
                </span>
              )}
            </div>
            <p className="text-xl text-gray-400 mt-1">{tool.shortDescription}</p>
            {tool.rating && tool.reviewCount && (
              <div className="mt-2">
                <StarRating rating={tool.rating} reviewCount={tool.reviewCount} />
              </div>
            )}
            <div className="flex items-center gap-3 mt-3 flex-wrap">
              <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                {tool.pricing}
              </span>
              {tool.pricingDetails && (
                <span className="text-gray-500 text-sm">{tool.pricingDetails}</span>
              )}
              <Link href={`/pricing/${tool.slug}`} className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                View full pricing →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-gray-400 text-sm">Visit {tool.name}</p>
            <p className="text-gray-500 text-xs">{tool.url}</p>
          </div>
          <div className="flex gap-3">
            <Link
              href={`/pricing/${tool.slug}`}
              className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-3 rounded-lg font-medium transition text-sm"
            >
              💰 View Detailed Pricing →
            </Link>
            <a
              href={tool.affiliateUrl || tool.url}
              target="_blank"
              rel={`noopener noreferrer${tool.affiliateUrl ? " sponsored" : ""}`}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Try {tool.name} →
            </a>
          </div>
        </div>
      </div>

      {/* Description */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">About {tool.name}</h2>
        <p className="text-gray-300 leading-relaxed">{tool.description}</p>
      </section>

      {/* Features */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {tool.features.map((feature) => (
            <div key={feature} className="flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-lg p-3">
              <span className="text-green-400">✓</span>
              <span className="text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pros & Cons */}
      {(tool.pros?.length || tool.cons?.length) && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{tool.name} Pros &amp; Cons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tool.pros && tool.pros.length > 0 && (
              <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-5">
                <h3 className="font-semibold text-green-400 mb-3 flex items-center gap-2">
                  <span>✅</span> Pros
                </h3>
                <ul className="space-y-2">
                  {tool.pros.map((pro) => (
                    <li key={pro} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-green-400 mt-0.5 flex-shrink-0">+</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {tool.cons && tool.cons.length > 0 && (
              <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-5">
                <h3 className="font-semibold text-red-400 mb-3 flex items-center gap-2">
                  <span>⚠️</span> Cons
                </h3>
                <ul className="space-y-2">
                  {tool.cons.map((con) => (
                    <li key={con} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">−</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Best For */}
      {tool.bestFor && tool.bestFor.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Who Is {tool.name} Best For?</h2>
          <div className="flex flex-wrap gap-3">
            {tool.bestFor.map((audience) => (
              <div key={audience} className="flex items-center gap-2 bg-blue-500/5 border border-blue-500/20 rounded-lg px-4 py-2">
                <span className="text-blue-400">👤</span>
                <span className="text-sm text-gray-300">{audience}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Use Case Scenarios */}
      {tool.useCaseScenarios && tool.useCaseScenarios.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{tool.name} Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tool.useCaseScenarios.map((scenario) => (
              <div key={scenario.title} className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/30 transition">
                <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="text-blue-400">💡</span>
                  {scenario.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{scenario.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Tags */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Tags</h2>
        <div className="flex flex-wrap gap-2">
          {tool.tags.map((tag) => (
            <span key={tag} className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Claim Your Listing CTA */}
      <section className="mb-8">
        <div className="relative bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-600/5 border border-blue-500/20 rounded-xl p-6 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="flex items-start gap-4 relative">
            <span className="text-2xl flex-shrink-0 mt-0.5">🏷️</span>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-1">Is this your tool?</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Claim your listing to get a <span className="text-blue-400 font-medium">Featured badge</span>, edit your description, and stand out from competitors.
                All plans include a permanent dofollow backlink to your site.
              </p>
              <Link
                href={`/advertise?tool=${tool.slug}&ref=claim`}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition shadow-md shadow-blue-600/20 hover:shadow-blue-600/30"
              >
                Claim Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="mb-8">
        <NewsletterBanner categoryName={category?.name} />
      </section>

      {/* Alternatives */}
      {alternatives && alternatives.length > 0 && (
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Alternatives to {tool.name}</h2>
            <Link
              href={`/alternatives/${tool.slug}`}
              className="text-blue-400 hover:text-blue-300 text-sm font-medium transition"
            >
              View all {tool.name} alternatives →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {alternatives.map((alt) => alt && (
              <div
                key={alt.slug}
                className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition"
              >
                <Link href={`/tool/${alt.slug}`}>
                  <h3 className="font-semibold mb-1">{alt.name}</h3>
                  <p className="text-gray-400 text-sm">{alt.shortDescription}</p>
                </Link>
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-xs bg-gray-800 text-gray-500 px-2 py-0.5 rounded-full">
                    {alt.pricing}
                  </span>
                  <Link
                    href={`/compare/${[tool.slug, alt.slug].sort().join("-vs-")}`}
                    className="text-xs text-blue-400 hover:text-blue-300 font-medium"
                  >
                    Compare {tool.name} vs {alt.name} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Status link — only for tools monitored on ASC */}
      {monitoredApis.has(tool.slug) && (
        <section className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-2">Is {tool.name} down right now?</h2>
          <p className="text-gray-400 text-sm mb-3">
            Check real-time status and outage history on API Status Check.
          </p>
          <a
            href={`https://apistatuscheck.com/api/${tool.slug}`}
            target="_blank"
            rel="noopener"
            className="text-blue-400 hover:text-blue-300 text-sm font-medium"
          >
            Check {tool.name} Status →
          </a>
        </section>
      )}

      {/* Product/SoftwareApplication JSON-LD schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: tool.name,
            url: tool.url,
            applicationCategory: "WebApplication",
            description: tool.shortDescription,
            operatingSystem: "Web, iOS, Android",
            ...(tool.pricing === "free" ? { offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } } : tool.pricingDetails ? { offers: { "@type": "Offer", description: tool.pricingDetails, priceCurrency: "USD" } } : {}),
            ...(tool.rating && tool.reviewCount ? {
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: tool.rating.toFixed(1),
                reviewCount: tool.reviewCount,
                bestRating: "5",
                worstRating: "1",
              },
            } : {}),
          }),
        }}
      />

      {/* BreadcrumbList schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://aisotools.com" },
              ...(category ? [{ "@type": "ListItem", position: 2, name: category.name, item: `https://aisotools.com/category/${category.slug}` }] : []),
              { "@type": "ListItem", position: category ? 3 : 2, name: tool.name, item: `https://aisotools.com/tool/${tool.slug}` },
            ],
          }),
        }}
      />

      {/* FAQ schema — generated from common questions about the tool */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: `What is ${tool.name}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: tool.description,
                },
              },
              {
                "@type": "Question",
                name: `How much does ${tool.name} cost?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: tool.pricingDetails || `${tool.name} is ${tool.pricing}. Visit the tool's website for detailed pricing information.`,
                },
              },
              ...(alternatives && alternatives.length > 0 ? [{
                "@type": "Question",
                name: `What are the best alternatives to ${tool.name}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `The best alternatives to ${tool.name} include ${alternatives.slice(0, 5).map(a => a!.name).join(", ")}. Each offers unique features for different use cases.`,
                },
              }] : []),
            ],
          }),
        }}
      />
    </div>
  );
}
