import { tools } from "@/data/tools";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slugs: string }>;
}

const comparisons = [
  ["chatgpt", "claude"],
  ["midjourney", "dall-e-3"],
  ["cursor", "github-copilot"],
  ["runway", "pika"],
  ["jasper", "copy-ai"],
  ["elevenlabs", "murf-ai"],
  ["notion-ai", "taskade"],
  ["gemini", "chatgpt"],
  ["stable-diffusion", "leonardo-ai"],
  ["surfer-seo", "semrush-ai"],
  ["perplexity", "you-com"],
  ["synthesia", "heygen"],
  ["suno", "udio"],
  ["figma-ai", "framer-ai"],
  ["make-com", "zapier-ai"],
];

export async function generateStaticParams() {
  return comparisons.map(([a, b]) => ({ slugs: `${a}-vs-${b}` }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slugs } = await params;
  const [slugA, slugB] = slugs.split("-vs-");
  const toolA = tools.find((t) => t.slug === slugA);
  const toolB = tools.find((t) => t.slug === slugB);

  if (!toolA || !toolB) return {};

  return {
    title: `${toolA.name} vs ${toolB.name} (2026) — Which Is Better?`,
    description: `Compare ${toolA.name} and ${toolB.name} side by side. Features, pricing, pros & cons to help you choose the best AI tool.`,
    openGraph: {
      title: `${toolA.name} vs ${toolB.name} — AISO Tools Comparison`,
      description: `Detailed comparison of ${toolA.name} and ${toolB.name}. Find the right AI tool for your needs.`,
    },
  };
}

export default async function ComparisonPage({ params }: Props) {
  const { slugs } = await params;
  const [slugA, slugB] = slugs.split("-vs-");
  const toolA = tools.find((t) => t.slug === slugA);
  const toolB = tools.find((t) => t.slug === slugB);

  if (!toolA || !toolB) notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-white">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/compare" className="hover:text-white">Compare</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">{toolA.name} vs {toolB.name}</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold mb-3">
        {toolA.name} vs {toolB.name}
      </h1>
      <p className="text-gray-400 text-lg mb-10">
        A detailed comparison to help you choose between {toolA.name} and {toolB.name}.
      </p>

      {/* Quick Compare Table */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden mb-10">
        <div className="grid grid-cols-3 bg-gray-800/50">
          <div className="p-4 text-sm text-gray-500 font-medium">Feature</div>
          <div className="p-4 text-center font-semibold text-blue-400">{toolA.name}</div>
          <div className="p-4 text-center font-semibold text-purple-400">{toolB.name}</div>
        </div>

        {/* Pricing */}
        <div className="grid grid-cols-3 border-t border-gray-800">
          <div className="p-4 text-sm text-gray-400">Pricing</div>
          <div className="p-4 text-center text-sm text-gray-300">{toolA.pricingDetails || toolA.pricing}</div>
          <div className="p-4 text-center text-sm text-gray-300">{toolB.pricingDetails || toolB.pricing}</div>
        </div>

        {/* Model */}
        <div className="grid grid-cols-3 border-t border-gray-800">
          <div className="p-4 text-sm text-gray-400">Pricing Model</div>
          <div className="p-4 text-center">
            <span className="bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-full text-xs">{toolA.pricing}</span>
          </div>
          <div className="p-4 text-center">
            <span className="bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded-full text-xs">{toolB.pricing}</span>
          </div>
        </div>

        {/* Category */}
        <div className="grid grid-cols-3 border-t border-gray-800">
          <div className="p-4 text-sm text-gray-400">Category</div>
          <div className="p-4 text-center text-sm text-gray-300">{toolA.category}</div>
          <div className="p-4 text-center text-sm text-gray-300">{toolB.category}</div>
        </div>

        {/* Features count */}
        <div className="grid grid-cols-3 border-t border-gray-800">
          <div className="p-4 text-sm text-gray-400">Key Features</div>
          <div className="p-4 text-center text-sm text-gray-300">{toolA.features.length} features</div>
          <div className="p-4 text-center text-sm text-gray-300">{toolB.features.length} features</div>
        </div>
      </div>

      {/* Features Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-400">{toolA.name}</h2>
          <p className="text-gray-400 text-sm mb-4">{toolA.description}</p>
          <h3 className="font-semibold mb-3">Key Features</h3>
          <ul className="space-y-2">
            {toolA.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-gray-300">{f}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <a
              href={toolA.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition"
            >
              Try {toolA.name} →
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-400">{toolB.name}</h2>
          <p className="text-gray-400 text-sm mb-4">{toolB.description}</p>
          <h3 className="font-semibold mb-3">Key Features</h3>
          <ul className="space-y-2">
            {toolB.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-gray-300">{f}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <a
              href={toolB.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition"
            >
              Try {toolB.name} →
            </a>
          </div>
        </div>
      </div>

      {/* Verdict */}
      <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-8 mb-10">
        <h2 className="text-2xl font-bold mb-3">🏆 The Verdict</h2>
        <p className="text-gray-300">
          Both {toolA.name} and {toolB.name} are excellent tools in the{" "}
          {toolA.category} space. {toolA.name} stands out with{" "}
          {toolA.features[0]?.toLowerCase()}, while {toolB.name} excels at{" "}
          {toolB.features[0]?.toLowerCase()}. The best choice depends on your
          specific needs, budget, and workflow preferences.
        </p>
      </div>

      {/* Cross-links */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href={`/tool/${toolA.slug}`}
          className="flex-1 bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition text-center"
        >
          Read full {toolA.name} review →
        </Link>
        <Link
          href={`/tool/${toolB.slug}`}
          className="flex-1 bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-purple-500/50 transition text-center"
        >
          Read full {toolB.name} review →
        </Link>
      </div>
    </div>
  );
}
