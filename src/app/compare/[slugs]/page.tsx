import { tools, type Tool } from "@/data/tools";
import { categories } from "@/data/categories";
import { getEnrichment } from "@/data/enrichment";
import { getAllComparisonPairs, getComparisonPairsForTool } from "@/lib/comparisons";
import {
  parsePricingDetails,
  hasFreeTier,
  getPricingSummary,
  getPricingTypeLabel,
  type PricingTier,
} from "@/lib/pricing-parser";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slugs: string }>;
}

// ---------------------------------------------------------------------------
// Static generation
// ---------------------------------------------------------------------------

export async function generateStaticParams() {
  return getAllComparisonPairs().map((p) => ({
    slugs: `${p.slugA}-vs-${p.slugB}`,
  }));
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slugs } = await params;
  const [slugA, slugB] = slugs.split("-vs-");
  const toolA = tools.find((t) => t.slug === slugA);
  const toolB = tools.find((t) => t.slug === slugB);
  if (!toolA || !toolB) return {};

  const title = `${toolA.name} vs ${toolB.name} (2026): Features, Pricing & Comparison | AISO Tools`;
  const description = `Compare ${toolA.name} vs ${toolB.name} side by side. Detailed feature comparison, pricing breakdown, pros & cons, and which tool is better for your needs in 2026.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://aisotools.com/compare/${slugs}`,
    },
    openGraph: {
      title,
      description,
      url: `https://aisotools.com/compare/${slugs}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${toolA.name} vs ${toolB.name} — Detailed Comparison 2026`,
      description,
    },
  };
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getVerdict(a: Tool, b: Tool, tiersA: PricingTier[], tiersB: PricingTier[]) {
  const freeA = hasFreeTier(a.pricing, a.pricingDetails);
  const freeB = hasFreeTier(b.pricing, b.pricingDetails);
  const featCountA = a.features.length;
  const featCountB = b.features.length;

  const cheapestPrice = (tiers: PricingTier[]) => {
    const paid = tiers.filter(
      (t) => t.price !== "$0" && t.price !== "Free" && t.price !== "Custom" && t.price !== "Variable" && t.price !== "See website"
    );
    if (paid.length === 0) return Infinity;
    return parseFloat(paid[0].price.replace(/[^0-9.]/g, "")) || Infinity;
  };

  const priceA = cheapestPrice(tiersA);
  const priceB = cheapestPrice(tiersB);

  const chooseA: string[] = [];
  const chooseB: string[] = [];

  if (freeA && !freeB) {
    chooseA.push("You want a free tier to get started without commitment");
  } else if (freeB && !freeA) {
    chooseB.push("You want a free tier to get started without commitment");
  }

  if (priceA < priceB && priceA !== Infinity) {
    chooseA.push(`You want more affordable paid plans (from $${priceA}/mo)`);
  } else if (priceB < priceA && priceB !== Infinity) {
    chooseB.push(`You want more affordable paid plans (from $${priceB}/mo)`);
  }

  if (featCountA > featCountB) {
    chooseA.push(`You need a broader feature set (${featCountA} features vs ${featCountB})`);
  } else if (featCountB > featCountA) {
    chooseB.push(`You need a broader feature set (${featCountB} features vs ${featCountA})`);
  }

  // Add feature-based reasons
  const uniqueA = a.features.filter((f) => !b.features.some((bf) => bf.toLowerCase() === f.toLowerCase()));
  const uniqueB = b.features.filter((f) => !a.features.some((af) => af.toLowerCase() === f.toLowerCase()));

  if (uniqueA.length > 0) {
    chooseA.push(`You need ${uniqueA.slice(0, 2).join(" or ").toLowerCase()}`);
  }
  if (uniqueB.length > 0) {
    chooseB.push(`You need ${uniqueB.slice(0, 2).join(" or ").toLowerCase()}`);
  }

  // Category-specific recommendations
  if (a.category !== b.category) {
    chooseA.push(`Your primary focus is ${getCategoryLabel(a.category).toLowerCase()}`);
    chooseB.push(`Your primary focus is ${getCategoryLabel(b.category).toLowerCase()}`);
  }

  // Fallbacks
  if (chooseA.length === 0) chooseA.push(`You prefer ${a.name}'s approach and ecosystem`);
  if (chooseB.length === 0) chooseB.push(`You prefer ${b.name}'s approach and ecosystem`);

  return { chooseA, chooseB };
}

function getCategoryLabel(slug: string): string {
  return categories.find((c) => c.slug === slug)?.name || slug;
}

function getCategoryIcon(slug: string): string {
  return categories.find((c) => c.slug === slug)?.icon || "🔧";
}

function generateFAQs(a: Tool, b: Tool, tiersA: PricingTier[], tiersB: PricingTier[]) {
  const freeA = hasFreeTier(a.pricing, a.pricingDetails);
  const freeB = hasFreeTier(b.pricing, b.pricingDetails);
  const catA = getCategoryLabel(a.category);

  const cheaperTool = () => {
    const getMin = (tiers: PricingTier[]) => {
      const paid = tiers.filter(
        (t) => t.price !== "$0" && t.price !== "Free" && t.price !== "Custom" && t.price !== "Variable" && t.price !== "See website"
      );
      if (paid.length === 0) return null;
      return { price: paid[0].price, period: paid[0].period };
    };
    const minA = getMin(tiersA);
    const minB = getMin(tiersB);
    if (!minA && !minB) return "Both tools have similar pricing structures";
    if (!minA) return `${a.name} doesn't have standard paid plans, while ${b.name} starts at ${minB!.price}${minB!.period}`;
    if (!minB) return `${b.name} doesn't have standard paid plans, while ${a.name} starts at ${minA.price}${minA.period}`;
    const numA = parseFloat(minA.price.replace(/[^0-9.]/g, ""));
    const numB = parseFloat(minB.price.replace(/[^0-9.]/g, ""));
    if (numA < numB) return `${a.name} is cheaper, starting at ${minA.price}${minA.period} compared to ${b.name}'s ${minB.price}${minB.period}`;
    if (numB < numA) return `${b.name} is cheaper, starting at ${minB.price}${minB.period} compared to ${a.name}'s ${minA.price}${minA.period}`;
    return `Both tools are similarly priced, starting at ${minA.price}${minA.period}`;
  };

  const mainDiff = () => {
    if (a.category !== b.category) {
      return `${a.name} is primarily a ${catA.toLowerCase()} tool focused on ${a.shortDescription.toLowerCase()}, while ${b.name} focuses on ${getCategoryLabel(b.category).toLowerCase()} with ${b.shortDescription.toLowerCase()}. They serve different primary use cases despite being alternatives.`;
    }
    return `While both are ${catA.toLowerCase()} tools, ${a.name} emphasizes ${a.features[0]?.toLowerCase() || "its core capabilities"}, whereas ${b.name} is known for ${b.features[0]?.toLowerCase() || "its unique approach"}. The best choice depends on your specific workflow and feature priorities.`;
  };

  return [
    {
      question: `Is ${a.name} better than ${b.name}?`,
      answer: `It depends on your needs. ${a.name} offers ${a.features.length} key features including ${a.features.slice(0, 2).join(" and ")}, while ${b.name} provides ${b.features.length} features including ${b.features.slice(0, 2).join(" and ")}. ${a.name} uses a ${a.pricing} model${freeA ? " with a free tier" : ""}, while ${b.name} is ${b.pricing}${freeB ? " with free access available" : ""}. Choose based on which features and pricing model align with your requirements.`,
    },
    {
      question: `Is ${a.name} cheaper than ${b.name}?`,
      answer: cheaperTool() + `. ${freeA && freeB ? "Both tools offer free tiers, so you can try each before committing." : freeA ? `${a.name} offers a free tier, making it easier to get started.` : freeB ? `${b.name} offers a free tier, making it easier to get started.` : "Neither tool offers a completely free tier."} Always check the official websites for the most current pricing.`,
    },
    {
      question: `Can I use ${a.name} and ${b.name} together?`,
      answer: `Yes, many users combine ${a.name} and ${b.name} in their workflow. ${a.name} excels at ${a.features[0]?.toLowerCase() || "certain tasks"}, while ${b.name} shines with ${b.features[0]?.toLowerCase() || "complementary capabilities"}. Using both allows you to leverage the strengths of each tool, though this means managing two subscriptions${freeA || freeB ? " — though free tiers can help manage costs" : ""}.`,
    },
    {
      question: `What's the main difference between ${a.name} and ${b.name}?`,
      answer: mainDiff(),
    },
  ];
}

function generateStructuredData(a: Tool, b: Tool, tiersA: PricingTier[], tiersB: PricingTier[], slugs: string) {
  const faqs = generateFAQs(a, b, tiersA, tiersB);

  const makeProductSchema = (tool: Tool, tiers: PricingTier[]) => {
    const offers = tiers
      .filter((t) => t.price !== "Custom" && t.price !== "Contact Sales" && t.price !== "Variable" && t.price !== "See website")
      .map((tier) => {
        const priceNum = parseFloat(tier.price.replace(/[^0-9.]/g, "")) || 0;
        return {
          "@type": "Offer",
          name: tier.name,
          price: priceNum.toString(),
          priceCurrency: "USD",
        };
      });

    return {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: tool.name,
      description: tool.description,
      url: tool.url,
      applicationCategory: "WebApplication",
      operatingSystem: "Web",
      offers: offers.length > 0 ? offers : undefined,
    };
  };

  return [
    makeProductSchema(a, tiersA),
    makeProductSchema(b, tiersB),
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://aisotools.com" },
        { "@type": "ListItem", position: 2, name: "Compare", item: "https://aisotools.com/compare" },
        {
          "@type": "ListItem",
          position: 3,
          name: `${a.name} vs ${b.name}`,
          item: `https://aisotools.com/compare/${slugs}`,
        },
      ],
    },
  ];
}

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default async function ComparisonPage({ params }: Props) {
  const { slugs } = await params;
  const [slugA, slugB] = slugs.split("-vs-");
  const toolA = tools.find((t) => t.slug === slugA);
  const toolB = tools.find((t) => t.slug === slugB);

  if (!toolA || !toolB) notFound();

  const enrichA = getEnrichment(toolA.slug);
  const enrichB = getEnrichment(toolB.slug);
  const tiersA = parsePricingDetails(toolA.pricingDetails);
  const tiersB = parsePricingDetails(toolB.pricingDetails);
  const freeA = hasFreeTier(toolA.pricing, toolA.pricingDetails);
  const freeB = hasFreeTier(toolB.pricing, toolB.pricingDetails);
  const summaryA = getPricingSummary(toolA.pricing, toolA.pricingDetails);
  const summaryB = getPricingSummary(toolB.pricing, toolB.pricingDetails);
  const typeA = getPricingTypeLabel(toolA.pricing);
  const typeB = getPricingTypeLabel(toolB.pricing);
  const catA = categories.find((c) => c.slug === toolA.category);
  const catB = categories.find((c) => c.slug === toolB.category);
  const verdict = getVerdict(toolA, toolB, tiersA, tiersB);
  const faqs = generateFAQs(toolA, toolB, tiersA, tiersB);
  const schemas = generateStructuredData(toolA, toolB, tiersA, tiersB, slugs);

  // Feature analysis
  const allFeatures = [...new Set([...toolA.features, ...toolB.features])];
  const uniqueToA = toolA.features.filter(
    (f) => !toolB.features.some((bf) => bf.toLowerCase() === f.toLowerCase())
  );
  const uniqueToB = toolB.features.filter(
    (f) => !toolA.features.some((af) => af.toLowerCase() === f.toLowerCase())
  );
  const sharedFeatures = toolA.features.filter((f) =>
    toolB.features.some((bf) => bf.toLowerCase() === f.toLowerCase())
  );

  // Related comparisons
  const relatedA = getComparisonPairsForTool(toolA.slug)
    .filter((p) => `${p.slugA}-vs-${p.slugB}` !== slugs)
    .slice(0, 4);
  const relatedB = getComparisonPairsForTool(toolB.slug)
    .filter((p) => `${p.slugA}-vs-${p.slugB}` !== slugs)
    .slice(0, 4);
  const relatedComparisons = [...relatedA, ...relatedB]
    .filter((p, i, arr) => arr.findIndex((x) => `${x.slugA}-vs-${x.slugB}` === `${p.slugA}-vs-${p.slugB}`) === i)
    .slice(0, 6);

  // Category context: other tools in the same category
  const sameCatTools = tools
    .filter(
      (t) =>
        (t.category === toolA.category || t.category === toolB.category) &&
        t.slug !== toolA.slug &&
        t.slug !== toolB.slug
    )
    .slice(0, 6);

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/compare" className="hover:text-white transition">Compare</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-300">{toolA.name} vs {toolB.name}</span>
        </nav>

        {/* ============================================================ */}
        {/* 1. HERO */}
        {/* ============================================================ */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="flex flex-col items-center">
              {enrichA?.logoUrl ? (
                <img src={enrichA.logoUrl} alt={`${toolA.name} logo`} className="w-16 h-16 rounded-xl object-contain bg-gray-800 p-2" />
              ) : (
                <div className="w-16 h-16 rounded-xl bg-blue-600/20 flex items-center justify-center text-2xl font-bold text-blue-400">
                  {toolA.name.charAt(0)}
                </div>
              )}
              <span className="text-sm text-blue-400 font-medium mt-2">{toolA.name}</span>
            </div>
            <span className="text-3xl font-bold text-gray-600">vs</span>
            <div className="flex flex-col items-center">
              {enrichB?.logoUrl ? (
                <img src={enrichB.logoUrl} alt={`${toolB.name} logo`} className="w-16 h-16 rounded-xl object-contain bg-gray-800 p-2" />
              ) : (
                <div className="w-16 h-16 rounded-xl bg-purple-600/20 flex items-center justify-center text-2xl font-bold text-purple-400">
                  {toolB.name.charAt(0)}
                </div>
              )}
              <span className="text-sm text-purple-400 font-medium mt-2">{toolB.name}</span>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {toolA.name} vs {toolB.name}: Which is Better in 2026?
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive comparison of {toolA.name} and {toolB.name} covering features, pricing,
            use cases, and which tool is the right choice for your needs.
          </p>
        </div>

        {/* ============================================================ */}
        {/* 2. QUICK VERDICT BOX */}
        {/* ============================================================ */}
        <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-8 mb-10">
          <h2 className="text-2xl font-bold mb-4">⚡ Quick Verdict</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-blue-400 mb-2">Choose {toolA.name} if:</h3>
              <ul className="space-y-2">
                {verdict.chooseA.map((reason, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-blue-400 mt-0.5 flex-shrink-0">→</span>
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-purple-400 mb-2">Choose {toolB.name} if:</h3>
              <ul className="space-y-2">
                {verdict.chooseB.map((reason, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-purple-400 mt-0.5 flex-shrink-0">→</span>
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3. AT-A-GLANCE COMPARISON TABLE */}
        {/* ============================================================ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">{toolA.name} vs {toolB.name}: At a Glance</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-800/50">
              <div className="p-4 text-sm text-gray-500 font-medium">Attribute</div>
              <div className="p-4 text-center font-semibold text-blue-400">{toolA.name}</div>
              <div className="p-4 text-center font-semibold text-purple-400">{toolB.name}</div>
            </div>

            <Row label="Pricing Model">
              <Badge color="blue">{typeA.label}</Badge>
              <Badge color="purple">{typeB.label}</Badge>
            </Row>

            <Row label="Starting Price">
              <span className="text-sm text-gray-300">{summaryA}</span>
              <span className="text-sm text-gray-300">{summaryB}</span>
            </Row>

            <Row label="Free Tier">
              <span className={`text-sm ${freeA ? "text-green-400" : "text-gray-500"}`}>{freeA ? "✓ Yes" : "✗ No"}</span>
              <span className={`text-sm ${freeB ? "text-green-400" : "text-gray-500"}`}>{freeB ? "✓ Yes" : "✗ No"}</span>
            </Row>

            <Row label="Category">
              <span className="text-sm text-gray-300">{catA?.name || toolA.category}</span>
              <span className="text-sm text-gray-300">{catB?.name || toolB.category}</span>
            </Row>

            <Row label="Features Count">
              <span className="text-sm text-gray-300">{toolA.features.length} features</span>
              <span className="text-sm text-gray-300">{toolB.features.length} features</span>
            </Row>

            <Row label="Shared Features">
              <span className="text-sm text-gray-300 col-span-2">{sharedFeatures.length} features in common</span>
              <></>
            </Row>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 4. DETAILED PRICING COMPARISON */}
        {/* ============================================================ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Pricing Comparison: {toolA.name} vs {toolB.name}
          </h2>
          <p className="text-gray-400 mb-6">
            Understanding the pricing differences between {toolA.name} and {toolB.name} is crucial
            for making the right choice. Here&apos;s how their plans compare side by side.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Tool A Pricing */}
            <div className="bg-gray-900 border border-blue-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">{toolA.name} Pricing</h3>
              {tiersA.length > 0 ? (
                <div className="space-y-3">
                  {tiersA.map((tier, i) => (
                    <div key={i} className="flex items-center justify-between border-b border-gray-800 pb-2 last:border-0">
                      <span className="text-gray-300 text-sm">{tier.name}</span>
                      <span className="text-sm font-medium">
                        {tier.price}
                        {tier.period && <span className="text-gray-500 text-xs ml-1">{tier.period}</span>}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">{toolA.pricingDetails || "See website for pricing"}</p>
              )}
              <Link
                href={`/pricing/${toolA.slug}`}
                className="inline-block mt-4 text-blue-400 hover:text-blue-300 text-sm font-medium"
              >
                View full {toolA.name} pricing →
              </Link>
            </div>

            {/* Tool B Pricing */}
            <div className="bg-gray-900 border border-purple-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-purple-400 mb-4">{toolB.name} Pricing</h3>
              {tiersB.length > 0 ? (
                <div className="space-y-3">
                  {tiersB.map((tier, i) => (
                    <div key={i} className="flex items-center justify-between border-b border-gray-800 pb-2 last:border-0">
                      <span className="text-gray-300 text-sm">{tier.name}</span>
                      <span className="text-sm font-medium">
                        {tier.price}
                        {tier.period && <span className="text-gray-500 text-xs ml-1">{tier.period}</span>}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">{toolB.pricingDetails || "See website for pricing"}</p>
              )}
              <Link
                href={`/pricing/${toolB.slug}`}
                className="inline-block mt-4 text-purple-400 hover:text-purple-300 text-sm font-medium"
              >
                View full {toolB.name} pricing →
              </Link>
            </div>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <p className="text-gray-400 text-sm">
              <strong className="text-gray-300">💡 Pricing takeaway:</strong>{" "}
              {freeA && freeB
                ? `Both ${toolA.name} and ${toolB.name} offer free tiers, making it easy to try before you buy. `
                : freeA
                ? `${toolA.name} has an edge with a free tier, letting you start without commitment. `
                : freeB
                ? `${toolB.name} has an edge with a free tier, letting you start without commitment. `
                : `Neither tool offers a free tier — you'll need to commit to a paid plan. `}
              {toolA.pricingDetails && toolB.pricingDetails
                ? `Compare the specific plans to find the best value for your use case.`
                : `Visit each tool's website for the latest pricing details.`}
            </p>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 5. FEATURE-BY-FEATURE COMPARISON */}
        {/* ============================================================ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Feature-by-Feature Comparison
          </h2>
          <p className="text-gray-400 mb-6">
            Here&apos;s how every feature from {toolA.name} and {toolB.name} stacks up.
            {sharedFeatures.length > 0 && ` They share ${sharedFeatures.length} features in common.`}
          </p>
          <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
            <div className="grid grid-cols-[1fr_80px_80px] sm:grid-cols-[1fr_100px_100px] bg-gray-800/50">
              <div className="p-4 text-sm text-gray-500 font-medium">Feature</div>
              <div className="p-4 text-center text-sm font-semibold text-blue-400">{toolA.name}</div>
              <div className="p-4 text-center text-sm font-semibold text-purple-400">{toolB.name}</div>
            </div>
            {allFeatures.map((feature, i) => {
              const inA = toolA.features.some((f) => f.toLowerCase() === feature.toLowerCase());
              const inB = toolB.features.some((f) => f.toLowerCase() === feature.toLowerCase());
              return (
                <div key={i} className="grid grid-cols-[1fr_80px_80px] sm:grid-cols-[1fr_100px_100px] border-t border-gray-800">
                  <div className="p-4 text-sm text-gray-300">{feature}</div>
                  <div className="p-4 text-center">
                    {inA ? <span className="text-green-400">✓</span> : <span className="text-gray-600">✗</span>}
                  </div>
                  <div className="p-4 text-center">
                    {inB ? <span className="text-green-400">✓</span> : <span className="text-gray-600">✗</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ============================================================ */}
        {/* 6. UNIQUE FEATURES SECTIONS */}
        {/* ============================================================ */}
        {(uniqueToA.length > 0 || uniqueToB.length > 0) && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">What Makes Each Tool Unique</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {uniqueToA.length > 0 && (
                <div className="bg-gray-900 border border-blue-500/20 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-400 mb-3">
                    🔵 Unique to {toolA.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Features available in {toolA.name} but not in {toolB.name}:
                  </p>
                  <ul className="space-y-2">
                    {uniqueToA.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-blue-400 mt-0.5 flex-shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {uniqueToB.length > 0 && (
                <div className="bg-gray-900 border border-purple-500/20 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-3">
                    🟣 Unique to {toolB.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Features available in {toolB.name} but not in {toolA.name}:
                  </p>
                  <ul className="space-y-2">
                    {uniqueToB.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-purple-400 mt-0.5 flex-shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* 7. USE CASE RECOMMENDATIONS */}
        {/* ============================================================ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">
            Use Case Recommendations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                <span className="text-blue-400">Best for:</span> {toolA.name}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{toolA.description}</p>
              <h4 className="text-sm font-semibold text-gray-300 mb-2">Ideal use cases:</h4>
              <ul className="space-y-2">
                {toolA.features.slice(0, 4).map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">•</span>
                    Teams or individuals who need {f.toLowerCase()}
                  </li>
                ))}
                {toolA.tags.slice(0, 2).map((tag, i) => (
                  <li key={`tag-${i}`} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">•</span>
                    Anyone focused on {tag} workflows
                  </li>
                ))}
              </ul>
              <a
                href={toolA.affiliateUrl || toolA.url}
                target="_blank"
                rel={`noopener noreferrer${toolA.affiliateUrl ? " sponsored" : ""}`}
                className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition"
              >
                Try {toolA.name} →
              </a>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                <span className="text-purple-400">Best for:</span> {toolB.name}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{toolB.description}</p>
              <h4 className="text-sm font-semibold text-gray-300 mb-2">Ideal use cases:</h4>
              <ul className="space-y-2">
                {toolB.features.slice(0, 4).map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">•</span>
                    Teams or individuals who need {f.toLowerCase()}
                  </li>
                ))}
                {toolB.tags.slice(0, 2).map((tag, i) => (
                  <li key={`tag-${i}`} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">•</span>
                    Anyone focused on {tag} workflows
                  </li>
                ))}
              </ul>
              <a
                href={toolB.affiliateUrl || toolB.url}
                target="_blank"
                rel={`noopener noreferrer${toolB.affiliateUrl ? " sponsored" : ""}`}
                className="inline-block mt-4 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition"
              >
                Try {toolB.name} →
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 8. CATEGORY CONTEXT */}
        {/* ============================================================ */}
        {sameCatTools.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">
              {getCategoryIcon(toolA.category)} Other{" "}
              {catA?.name || toolA.category} Tools to Consider
            </h2>
            <p className="text-gray-400 mb-6">
              {toolA.name} and {toolB.name} aren&apos;t the only options.
              Here are other popular tools in the same space:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sameCatTools.map((t) => (
                <Link
                  key={t.slug}
                  href={`/tool/${t.slug}`}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-gray-700 transition"
                >
                  <h3 className="font-semibold mb-1">{t.name}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{t.shortDescription}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      t.pricing === "free" || t.pricing === "open-source"
                        ? "bg-green-500/10 text-green-400"
                        : t.pricing === "freemium"
                        ? "bg-blue-500/10 text-blue-400"
                        : "bg-orange-500/10 text-orange-400"
                    }`}>
                      {t.pricing}
                    </span>
                    <span className="text-gray-600 text-xs">{t.features.length} features</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* 9. FAQ SECTION */}
        {/* ============================================================ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* 10. CROSS-LINKS */}
        {/* ============================================================ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Learn More</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <Link
              href={`/tool/${toolA.slug}`}
              className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition"
            >
              <h3 className="font-semibold mb-1">📋 {toolA.name} Review</h3>
              <p className="text-gray-400 text-sm">Full review with features, pros & cons</p>
            </Link>
            <Link
              href={`/tool/${toolB.slug}`}
              className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-purple-500/50 transition"
            >
              <h3 className="font-semibold mb-1">📋 {toolB.name} Review</h3>
              <p className="text-gray-400 text-sm">Full review with features, pros & cons</p>
            </Link>
            <Link
              href={`/pricing/${toolA.slug}`}
              className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition"
            >
              <h3 className="font-semibold mb-1">💰 {toolA.name} Pricing</h3>
              <p className="text-gray-400 text-sm">Detailed pricing breakdown & plans</p>
            </Link>
            <Link
              href={`/pricing/${toolB.slug}`}
              className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-purple-500/50 transition"
            >
              <h3 className="font-semibold mb-1">💰 {toolB.name} Pricing</h3>
              <p className="text-gray-400 text-sm">Detailed pricing breakdown & plans</p>
            </Link>
          </div>

          {/* Related Comparisons */}
          {relatedComparisons.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Related Comparisons</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {relatedComparisons.map((pair) => {
                  const tA = tools.find((t) => t.slug === pair.slugA);
                  const tB = tools.find((t) => t.slug === pair.slugB);
                  if (!tA || !tB) return null;
                  return (
                    <Link
                      key={`${pair.slugA}-vs-${pair.slugB}`}
                      href={`/compare/${pair.slugA}-vs-${pair.slugB}`}
                      className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition group"
                    >
                      <span className="text-sm font-medium group-hover:text-blue-400 transition">
                        {tA.name} vs {tB.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </section>
      </div>
    </>
  );
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  const childArray = Array.isArray(children) ? children : [children];
  return (
    <div className="grid grid-cols-3 border-t border-gray-800">
      <div className="p-4 text-sm text-gray-400">{label}</div>
      <div className="p-4 text-center">{childArray[0]}</div>
      <div className="p-4 text-center">{childArray[1]}</div>
    </div>
  );
}

function Badge({ children, color }: { children: React.ReactNode; color: "blue" | "purple" }) {
  const cls = color === "blue"
    ? "bg-blue-500/10 text-blue-400"
    : "bg-purple-500/10 text-purple-400";
  return (
    <span className={`${cls} px-2 py-0.5 rounded-full text-xs`}>{children}</span>
  );
}
