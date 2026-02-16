import { tools } from "@/data/tools";
import { categories } from "@/data/categories";
import { getEnrichment } from "@/data/enrichment";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

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
            <div className="flex items-center gap-3 mt-3">
              <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                {tool.pricing}
              </span>
              {tool.pricingDetails && (
                <span className="text-gray-500 text-sm">{tool.pricingDetails}</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm">Visit {tool.name}</p>
            <p className="text-gray-500 text-xs">{tool.url}</p>
          </div>
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Try {tool.name} →
          </a>
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

      {/* Alternatives */}
      {alternatives && alternatives.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Alternatives to {tool.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {alternatives.map((alt) => alt && (
              <Link
                key={alt.slug}
                href={`/tool/${alt.slug}`}
                className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition"
              >
                <h3 className="font-semibold mb-1">{alt.name}</h3>
                <p className="text-gray-400 text-sm">{alt.shortDescription}</p>
                <span className="text-xs bg-gray-800 text-gray-500 px-2 py-0.5 rounded-full mt-2 inline-block">
                  {alt.pricing}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Status link */}
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
    </div>
  );
}
