import { tools } from "@/data/tools";
import { categories } from "@/data/categories";
import { getEnrichment } from "@/data/enrichment";
import { monitoredApis } from "@/data/monitored-apis";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import NewsletterBanner from "@/components/NewsletterBanner";

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
    </div>
  );
}
