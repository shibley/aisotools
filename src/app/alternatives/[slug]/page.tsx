import { tools, type Tool } from "@/data/tools";
import { categories } from "@/data/categories";
import { getEnrichment } from "@/data/enrichment";
import { monitoredApis } from "@/data/monitored-apis";
import {
  getAlternativesForTool,
  getToolsWithAlternatives,
  getToolsThatListAsAlternative,
  sortAlternativesByRelevance,
} from "@/lib/alternatives";
import {
  parsePricingDetails,
  hasFreeTier,
  getPricingSummary,
  getPricingTypeLabel,
  type PricingTier,
} from "@/lib/pricing-parser";
import { getCompareSlug, comparisonExists } from "@/lib/comparisons";
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
  return getToolsWithAlternatives().map((tool) => ({ slug: tool.slug }));
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) return {};

  const alternatives = getAlternativesForTool(slug);
  const n = alternatives.length;
  const year = new Date().getFullYear();

  const title = `Best ${tool.name} Alternatives (${year}) — Top ${n} Competitors | AISO Tools`;
  const description = `Looking for ${tool.name} alternatives? Compare the ${n} best alternatives to ${tool.name} with features, pricing, and pros/cons.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://aisotools.com/alternatives/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://aisotools.com/alternatives/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Best ${tool.name} Alternatives (${year})`,
      description,
    },
  };
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getCategoryLabel(slug: string): string {
  return categories.find((c) => c.slug === slug)?.name || slug;
}

function getCategoryIcon(slug: string): string {
  return categories.find((c) => c.slug === slug)?.icon || "🔧";
}

function getPricingBadge(pricing: string) {
  const t = getPricingTypeLabel(pricing);
  const colorMap: Record<string, string> = {
    green: "bg-green-500/10 text-green-400",
    blue: "bg-blue-500/10 text-blue-400",
    orange: "bg-orange-500/10 text-orange-400",
    purple: "bg-purple-500/10 text-purple-400",
    gray: "bg-gray-500/10 text-gray-400",
  };
  return { label: t.label, className: colorMap[t.color] || colorMap.gray };
}

function getWhyChooseReason(main: Tool, alt: Tool): string {
  const reasons: string[] = [];
  const mainFree = hasFreeTier(main.pricing, main.pricingDetails);
  const altFree = hasFreeTier(alt.pricing, alt.pricingDetails);

  // Pricing advantages
  if (!mainFree && altFree) {
    reasons.push(
      `${alt.name} offers a free tier, making it accessible without upfront commitment`
    );
  }
  if (alt.pricing === "open-source") {
    reasons.push(
      `${alt.name} is open-source, giving you full control and customization`
    );
  }
  if (alt.pricing === "free" && main.pricing !== "free") {
    reasons.push(`${alt.name} is completely free to use`);
  }

  // Cheapest price comparison
  const mainTiers = parsePricingDetails(main.pricingDetails);
  const altTiers = parsePricingDetails(alt.pricingDetails);
  const getMinPrice = (tiers: PricingTier[]) => {
    const paid = tiers.filter(
      (t) =>
        t.price !== "$0" &&
        t.price !== "Free" &&
        t.price !== "Custom" &&
        t.price !== "Variable" &&
        t.price !== "See website" &&
        !t.price.startsWith("From")
    );
    if (paid.length === 0) return Infinity;
    return parseFloat(paid[0].price.replace(/[^0-9.]/g, "")) || Infinity;
  };
  const mainMin = getMinPrice(mainTiers);
  const altMin = getMinPrice(altTiers);
  if (altMin < mainMin && altMin !== Infinity) {
    reasons.push(
      `Paid plans start lower at $${altMin}/mo compared to ${main.name}'s $${mainMin}/mo`
    );
  }

  // Category difference
  if (alt.category !== main.category) {
    reasons.push(
      `${alt.name} brings a ${getCategoryLabel(alt.category).toLowerCase()} perspective, useful if you need cross-domain capabilities`
    );
  }

  // Unique features
  const uniqueFeatures = alt.features.filter(
    (f) =>
      !main.features.some((mf) => mf.toLowerCase() === f.toLowerCase())
  );
  if (uniqueFeatures.length > 0) {
    const highlighted = uniqueFeatures.slice(0, 2);
    reasons.push(
      `Offers unique capabilities like ${highlighted.join(" and ").toLowerCase()}`
    );
  }

  // Feature overlap
  const shared = alt.features.filter((f) =>
    main.features.some((mf) => mf.toLowerCase() === f.toLowerCase())
  );
  if (shared.length > 0 && shared.length >= main.features.length * 0.5) {
    reasons.push(
      `Covers most of ${main.name}'s core features while adding its own strengths`
    );
  }

  if (reasons.length === 0) {
    reasons.push(
      `${alt.name} provides a different approach to ${getCategoryLabel(main.category).toLowerCase()} that may better suit your workflow`
    );
  }

  return reasons.slice(0, 3).join(". ") + ".";
}

function getKeyDifferentiator(alt: Tool, main: Tool): string {
  if (alt.pricing === "open-source") return "Open-source & self-hostable";
  if (alt.pricing === "free") return "Completely free";

  const uniqueFeatures = alt.features.filter(
    (f) =>
      !main.features.some((mf) => mf.toLowerCase() === f.toLowerCase())
  );
  if (uniqueFeatures.length > 0) return uniqueFeatures[0];

  if (alt.category !== main.category)
    return `${getCategoryLabel(alt.category)} focus`;

  return alt.features[0] || alt.shortDescription.slice(0, 40);
}

function generateFAQs(
  tool: Tool,
  alternatives: Tool[]
): { question: string; answer: string }[] {
  const year = new Date().getFullYear();
  const freeAlts = alternatives.filter((a) =>
    hasFreeTier(a.pricing, a.pricingDetails)
  );
  const cheapAlts = alternatives
    .map((a) => {
      const tiers = parsePricingDetails(a.pricingDetails);
      const paid = tiers.filter(
        (t) =>
          t.price !== "$0" &&
          t.price !== "Free" &&
          t.price !== "Custom" &&
          t.price !== "Variable" &&
          t.price !== "See website" &&
          !t.price.startsWith("From")
      );
      const min =
        paid.length > 0
          ? parseFloat(paid[0].price.replace(/[^0-9.]/g, ""))
          : Infinity;
      return { tool: a, price: min };
    })
    .filter((x) => x.price !== Infinity)
    .sort((a, b) => a.price - b.price);

  const topAlt = alternatives[0];

  const faqs: { question: string; answer: string }[] = [];

  // 1. Best free alternative
  faqs.push({
    question: `What is the best free alternative to ${tool.name}?`,
    answer:
      freeAlts.length > 0
        ? `The best free alternatives to ${tool.name} include ${freeAlts
            .slice(0, 3)
            .map((a) => a.name)
            .join(", ")}. ${
            freeAlts[0].pricing === "open-source"
              ? `${freeAlts[0].name} is open-source and completely free to use.`
              : freeAlts[0].pricing === "free"
              ? `${freeAlts[0].name} is entirely free with no paid plans.`
              : `${freeAlts[0].name} offers a generous free tier that covers basic usage.`
          }`
        : `Among the alternatives listed, most require a paid plan. However, many offer free trials or limited free tiers. Check each tool's pricing page for current free options.`,
  });

  // 2. Cheaper alternative
  faqs.push({
    question: `Is there a cheaper alternative to ${tool.name}?`,
    answer:
      cheapAlts.length > 0
        ? `Yes. ${cheapAlts[0].tool.name} starts at $${cheapAlts[0].price}/mo, making it ${
            cheapAlts.length > 1
              ? `one of the most affordable options. Other budget-friendly alternatives include ${cheapAlts
                  .slice(1, 3)
                  .map((x) => `${x.tool.name} ($${x.price}/mo)`)
                  .join(" and ")}.`
              : "an affordable choice."
          }`
        : `Pricing varies across alternatives. ${
            freeAlts.length > 0
              ? `${freeAlts[0].name} offers a free tier that may cover your needs.`
              : "Check each tool's website for current pricing."
          }`,
  });

  // 3. Biggest competitor
  faqs.push({
    question: `What is ${tool.name}'s biggest competitor?`,
    answer: topAlt
      ? `${topAlt.name} is widely considered ${tool.name}'s top competitor. ${topAlt.shortDescription}. Both tools operate in the ${getCategoryLabel(tool.category).toLowerCase()} space, but ${topAlt.name} differentiates itself with features like ${topAlt.features
          .slice(0, 2)
          .join(" and ")
          .toLowerCase()}.`
      : `${tool.name} competes with several tools in the ${getCategoryLabel(tool.category).toLowerCase()} space.`,
  });

  // 4. Switching
  faqs.push({
    question: `Can I switch from ${tool.name} to ${topAlt ? topAlt.name : "an alternative"}?`,
    answer: `Yes, switching from ${tool.name} to ${
      topAlt ? topAlt.name : "an alternative"
    } is generally straightforward. Most ${getCategoryLabel(
      tool.category
    ).toLowerCase()} tools allow you to export your data or start fresh. ${
      freeAlts.length > 0
        ? `Start with a free tier on ${freeAlts[0].name} to test the waters before fully committing.`
        : `Many alternatives offer trial periods so you can evaluate them before committing.`
    } Consider running both tools in parallel during a transition period to ensure the new tool meets your needs.`,
  });

  // 5. Extra: How many alternatives
  faqs.push({
    question: `How many alternatives to ${tool.name} are there?`,
    answer: `We've reviewed ${alternatives.length} direct alternatives to ${tool.name} in ${year}. These range across pricing models (${
      freeAlts.length > 0 ? "free, " : ""
    }freemium, and paid) and cover various approaches to ${getCategoryLabel(tool.category).toLowerCase()}. The best choice depends on your specific requirements, budget, and workflow preferences.`,
  });

  return faqs;
}

function generateStructuredData(
  tool: Tool,
  alternatives: Tool[],
  faqs: { question: string; answer: string }[]
) {
  const year = new Date().getFullYear();

  const schemas = [
    // ItemList schema
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: `Best ${tool.name} Alternatives (${year})`,
      description: `Top ${alternatives.length} alternatives to ${tool.name} compared by features, pricing, and capabilities.`,
      numberOfItems: alternatives.length,
      itemListElement: alternatives.map((alt, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: alt.name,
        url: `https://aisotools.com/tool/${alt.slug}`,
        description: alt.shortDescription,
      })),
    },
    // FAQPage schema
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
    // BreadcrumbList schema
    {
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
          name: "Alternatives",
          item: "https://aisotools.com/alternatives",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: `${tool.name} Alternatives`,
          item: `https://aisotools.com/alternatives/${tool.slug}`,
        },
      ],
    },
  ];

  return schemas;
}

function getWhyLookForAlternatives(tool: Tool): string {
  const cat = getCategoryLabel(tool.category).toLowerCase();
  const isPaid = tool.pricing === "paid";
  const isFreemium = tool.pricing === "freemium";

  const reasons: string[] = [];

  if (isPaid) {
    reasons.push(
      `${tool.name} is a paid tool, and not everyone's budget accommodates its pricing long-term`
    );
  } else if (isFreemium) {
    reasons.push(
      `While ${tool.name} offers a free tier, its more powerful features are locked behind paid plans that may not fit every budget`
    );
  }

  reasons.push(
    `different ${cat} workflows call for different strengths — some teams need deeper integrations, others prioritize speed or privacy`
  );
  reasons.push(
    `exploring alternatives helps you benchmark ${tool.name} against the competition and ensure you're using the best tool for your specific needs`
  );

  return reasons.join(". ") + ".";
}

function getWhySwitchReasons(tool: Tool): { reason: string; detail: string }[] {
  const cat = getCategoryLabel(tool.category).toLowerCase();
  const isPaid = tool.pricing === "paid";
  const isFreemium = tool.pricing === "freemium";
  const reasons: { reason: string; detail: string }[] = [];

  if (isPaid || isFreemium) {
    reasons.push({
      reason: "💰 Pricing doesn't match your usage",
      detail: `${tool.name}'s pricing may not align with how your team actually uses it. If you're paying for features you rarely touch, a more focused (and often cheaper) alternative could save you hundreds per year without sacrificing what matters.`,
    });
  }

  reasons.push({
    reason: "🔧 Missing features you need",
    detail: `No single ${cat} tool covers every workflow perfectly. If ${tool.name} lacks a specific integration, feature, or workflow you need, competitors may have built exactly that as their differentiator.`,
  });

  reasons.push({
    reason: "🚀 Performance or reliability concerns",
    detail: `If ${tool.name} has been slow, unreliable, or has had breaking changes that disrupted your workflow, switching to a more stable alternative can save your team significant frustration and lost productivity.`,
  });

  reasons.push({
    reason: "🔒 Privacy or compliance requirements",
    detail: `Your data handling requirements may have changed — whether it's GDPR, SOC 2, HIPAA, or internal policies. Some alternatives offer self-hosting, on-premise deployment, or stricter data residency controls that ${tool.name} may not provide.`,
  });

  reasons.push({
    reason: "👥 Better team collaboration",
    detail: `As teams grow, collaboration needs evolve. If ${tool.name}'s sharing, permissions, or real-time collaboration features don't keep up with your team size, alternatives designed for larger teams may be a better fit.`,
  });

  return reasons;
}

function getHowToChooseGuide(tool: Tool): string[] {
  const cat = getCategoryLabel(tool.category).toLowerCase();
  return [
    `Define your must-have features — list the ${cat} capabilities you use daily and verify each alternative covers them.`,
    `Evaluate pricing honestly — factor in team size, usage volume, and whether a free tier is sufficient or you'll inevitably upgrade.`,
    `Test before committing — most tools offer free tiers or trials. Run a two-week pilot with your actual workflow before migrating.`,
    `Consider the ecosystem — check integrations with your existing tools (Slack, GitHub, Google Workspace, etc.) and whether APIs are available for custom workflows.`,
    `Read recent user reviews — the ${cat} space evolves fast. A tool that lagged a year ago may have leapfrogged competitors since.`,
  ];
}

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default async function AlternativesPage({ params }: Props) {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) notFound();

  const rawAlternatives = getAlternativesForTool(slug);
  if (rawAlternatives.length === 0) notFound();

  const alternatives = sortAlternativesByRelevance(tool, rawAlternatives);
  const enrichment = getEnrichment(tool.slug);
  const category = categories.find((c) => c.slug === tool.category);
  const mainPricingBadge = getPricingBadge(tool.pricing);
  const year = new Date().getFullYear();

  // Reverse lookup: tools that list THIS tool as an alternative but aren't already in the list
  const reverseAlts = getToolsThatListAsAlternative(slug).filter(
    (t) => !alternatives.some((a) => a.slug === t.slug)
  );

  const faqs = generateFAQs(tool, alternatives);
  const schemas = generateStructuredData(tool, alternatives, faqs);

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
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <span className="mx-2">›</span>
          <Link href="/alternatives" className="hover:text-white transition">
            Alternatives
          </Link>
          <span className="mx-2">›</span>
          <span className="text-gray-300">{tool.name} Alternatives</span>
        </nav>

        {/* ============================================================ */}
        {/* 1. HERO */}
        {/* ============================================================ */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            {enrichment?.logoUrl ? (
              <img
                src={enrichment.logoUrl}
                alt={`${tool.name} logo`}
                className="w-16 h-16 rounded-xl object-contain bg-gray-800 p-2"
              />
            ) : (
              <div className="w-16 h-16 rounded-xl bg-blue-600/20 flex items-center justify-center text-2xl font-bold text-blue-400">
                {tool.name.charAt(0)}
              </div>
            )}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Best {tool.name} Alternatives in {year}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Compare the top {alternatives.length} alternatives to {tool.name}.
            Find the right {getCategoryLabel(tool.category).toLowerCase()} tool
            for your needs with detailed feature and pricing comparisons.
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${mainPricingBadge.className}`}
            >
              {tool.name}: {mainPricingBadge.label}
            </span>
            {category && (
              <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
                {category.icon} {category.name}
              </span>
            )}
          </div>
          {tool.affiliateUrl && (
            <div className="mt-4">
              <a
                href={tool.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition"
              >
                Still prefer {tool.name}? Try it here →
              </a>
            </div>
          )}
        </div>

        {/* ============================================================ */}
        {/* 2. WHY LOOK FOR ALTERNATIVES */}
        {/* ============================================================ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Why Look for {tool.name} Alternatives?
          </h2>
          <p className="text-gray-400 leading-relaxed">
            {getWhyLookForAlternatives(tool)} Whether you&apos;re looking for
            better pricing, specific features, or simply want to compare
            options, here are the {alternatives.length} best alternatives to{" "}
            {tool.name} in {year}.
          </p>
        </section>

        {/* ============================================================ */}
        {/* 2b. WHY SWITCH FROM [TOOL] */}
        {/* ============================================================ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Why Switch from {tool.name}?
          </h2>
          <p className="text-gray-400 mb-6">
            Thinking about moving away from {tool.name}? Here are the most common
            reasons teams make the switch — and what to look for in a replacement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {getWhySwitchReasons(tool).map((item, i) => (
              <div
                key={i}
                className="bg-gray-900 border border-gray-800 rounded-xl p-5"
              >
                <h3 className="font-semibold text-lg mb-2">{item.reason}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* 3. QUICK COMPARISON TABLE */}
        {/* ============================================================ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">
            Quick Comparison: {tool.name} vs Alternatives
          </h2>
          <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-800/50 text-left">
                  <th className="p-4 font-medium text-gray-400">#</th>
                  <th className="p-4 font-medium text-gray-400">Tool</th>
                  <th className="p-4 font-medium text-gray-400">Pricing</th>
                  <th className="p-4 font-medium text-gray-400">Free Tier?</th>
                  <th className="p-4 font-medium text-gray-400">
                    Key Differentiator
                  </th>
                  <th className="p-4 font-medium text-gray-400">Category</th>
                </tr>
              </thead>
              <tbody>
                {alternatives.map((alt, i) => {
                  const badge = getPricingBadge(alt.pricing);
                  const isFree = hasFreeTier(alt.pricing, alt.pricingDetails);
                  return (
                    <tr
                      key={alt.slug}
                      className="border-t border-gray-800 hover:bg-gray-800/30 transition"
                    >
                      <td className="p-4 text-gray-500">{i + 1}</td>
                      <td className="p-4">
                        <Link
                          href={`#${alt.slug}`}
                          className="font-medium text-white hover:text-blue-400 transition"
                        >
                          {alt.name}
                        </Link>
                      </td>
                      <td className="p-4">
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs font-medium ${badge.className}`}
                        >
                          {badge.label}
                        </span>
                      </td>
                      <td className="p-4">
                        <span
                          className={
                            isFree ? "text-green-400" : "text-gray-500"
                          }
                        >
                          {isFree ? "✓ Yes" : "✗ No"}
                        </span>
                      </td>
                      <td className="p-4 text-gray-400 max-w-xs truncate">
                        {getKeyDifferentiator(alt, tool)}
                      </td>
                      <td className="p-4 text-gray-400">
                        {getCategoryIcon(alt.category)}{" "}
                        {getCategoryLabel(alt.category)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 4. DETAILED ALTERNATIVE CARDS */}
        {/* ============================================================ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">
            Detailed Look at Each {tool.name} Alternative
          </h2>
          <div className="space-y-8">
            {alternatives.map((alt, i) => {
              const altEnrich = getEnrichment(alt.slug);
              const altBadge = getPricingBadge(alt.pricing);
              const altTiers = parsePricingDetails(alt.pricingDetails);
              const altSummary = getPricingSummary(alt.pricing, alt.pricingDetails);
              const altIsFree = hasFreeTier(alt.pricing, alt.pricingDetails);
              const compareSlug = getCompareSlug(tool.slug, alt.slug);

              return (
                <div
                  key={alt.slug}
                  id={alt.slug}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-6 sm:p-8 scroll-mt-20"
                >
                  {/* Card header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0">
                      {altEnrich?.logoUrl ? (
                        <img
                          src={altEnrich.logoUrl}
                          alt={`${alt.name} logo`}
                          className="w-12 h-12 rounded-xl object-contain bg-gray-800 p-1"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center text-xl font-bold text-blue-400">
                          {alt.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl font-bold">{`${i + 1}. ${alt.name}`}</h3>
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${altBadge.className}`}
                        >
                          {altBadge.label}
                        </span>
                        {altIsFree && alt.pricing !== "free" && (
                          <span className="bg-green-500/10 text-green-400 px-2 py-0.5 rounded-full text-xs font-medium">
                            Free tier
                          </span>
                        )}
                      </div>
                      <p className="text-gray-400 mt-1">
                        {alt.shortDescription}
                      </p>
                    </div>
                  </div>

                  {/* Why choose */}
                  <div className="bg-gradient-to-r from-blue-600/5 to-purple-600/5 border border-blue-500/10 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-blue-400 mb-2">
                      Why choose {alt.name} over {tool.name}?
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {getWhyChooseReason(tool, alt)}
                    </p>
                  </div>

                  {/* Features & Pricing side by side */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Key Features */}
                    <div>
                      <h4 className="font-semibold text-gray-300 mb-3">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {alt.features.slice(0, 6).map((feature) => {
                          const isUnique = !tool.features.some(
                            (f) =>
                              f.toLowerCase() === feature.toLowerCase()
                          );
                          return (
                            <li
                              key={feature}
                              className="flex items-start gap-2 text-sm"
                            >
                              <span
                                className={`mt-0.5 flex-shrink-0 ${
                                  isUnique
                                    ? "text-yellow-400"
                                    : "text-green-400"
                                }`}
                              >
                                {isUnique ? "★" : "✓"}
                              </span>
                              <span className="text-gray-300">
                                {feature}
                                {isUnique && (
                                  <span className="text-yellow-400/60 text-xs ml-1">
                                    (unique)
                                  </span>
                                )}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    {/* Pricing */}
                    <div>
                      <h4 className="font-semibold text-gray-300 mb-3">
                        Pricing
                      </h4>
                      {altTiers.length > 0 ? (
                        <div className="space-y-2">
                          {altTiers.slice(0, 4).map((tier, ti) => (
                            <div
                              key={ti}
                              className="flex items-center justify-between border-b border-gray-800 pb-2 last:border-0"
                            >
                              <span className="text-gray-300 text-sm">
                                {tier.name}
                              </span>
                              <span className="text-sm font-medium">
                                {tier.price}
                                {tier.period && (
                                  <span className="text-gray-500 text-xs ml-1">
                                    {tier.period}
                                  </span>
                                )}
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-500 text-sm">{altSummary}</p>
                      )}
                    </div>
                  </div>

                  {/* Action links */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-800">
                    {alt.affiliateUrl && (
                      <a
                        href={alt.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                      >
                        Try {alt.name} →
                      </a>
                    )}
                    <Link
                      href={`/tool/${alt.slug}`}
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium transition"
                    >
                      📋 Full Review →
                    </Link>
                    <Link
                      href={`/pricing/${alt.slug}`}
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium transition"
                    >
                      💰 Pricing Details →
                    </Link>
                    <Link
                      href={`/compare/${compareSlug}`}
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium transition"
                    >
                      ⚖️ {tool.name} vs {alt.name} →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ============================================================ */}
        {/* 5. ALSO CONSIDER (reverse lookup) */}
        {/* ============================================================ */}
        {reverseAlts.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Also Consider</h2>
            <p className="text-gray-400 mb-6">
              These tools list {tool.name} as an alternative, meaning they
              compete in overlapping areas:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {reverseAlts.slice(0, 6).map((alt) => {
                const altBadge = getPricingBadge(alt.pricing);
                return (
                  <Link
                    key={alt.slug}
                    href={`/tool/${alt.slug}`}
                    className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition"
                  >
                    <h3 className="font-semibold mb-1">{alt.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">
                      {alt.shortDescription}
                    </p>
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${altBadge.className}`}
                    >
                      {altBadge.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* 6. HOW TO CHOOSE */}
        {/* ============================================================ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            How to Choose the Right {tool.name} Alternative
          </h2>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <ol className="space-y-4">
              {getHowToChooseGuide(tool).map((tip, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="bg-blue-600/20 text-blue-400 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {tip}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 7. FAQ SECTION */}
        {/* ============================================================ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-gray-900 border border-gray-800 rounded-xl p-5"
              >
                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* 8. CROSS-LINKS */}
        {/* ============================================================ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Learn More</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href={`/tool/${tool.slug}`}
              className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition"
            >
              <h3 className="font-semibold mb-1">📋 {tool.name} Review</h3>
              <p className="text-gray-400 text-sm">
                Full review with features, pros & cons
              </p>
            </Link>
            <Link
              href={`/pricing/${tool.slug}`}
              className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition"
            >
              <h3 className="font-semibold mb-1">💰 {tool.name} Pricing</h3>
              <p className="text-gray-400 text-sm">
                Detailed pricing plans and comparison
              </p>
            </Link>
            {category && (
              <Link
                href={`/category/${category.slug}`}
                className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition"
              >
                <h3 className="font-semibold mb-1">
                  {category.icon} {category.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  Browse all {category.name.toLowerCase()} tools
                </p>
              </Link>
            )}
            {alternatives.slice(0, 3).map((alt) => (
              <Link
                key={alt.slug}
                href={`/compare/${getCompareSlug(tool.slug, alt.slug)}`}
                className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition"
              >
                <h3 className="font-semibold mb-1">
                  ⚖️ {tool.name} vs {alt.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  Head-to-head comparison
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Status link — only for tools monitored on ASC */}
        {monitoredApis.has(tool.slug) && (
          <section className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-2">
              Is {tool.name} down right now?
            </h2>
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
    </>
  );
}
