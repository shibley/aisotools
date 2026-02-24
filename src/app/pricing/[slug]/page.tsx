import { tools, type Tool } from "@/data/tools";
import { categories } from "@/data/categories";
import { getEnrichment } from "@/data/enrichment";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  parsePricingDetails,
  getPricingSummary,
  hasFreeTier,
  getPricingTypeLabel,
  type PricingTier,
} from "@/lib/pricing-parser";

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

  const isFree = hasFreeTier(tool.pricing, tool.pricingDetails);
  const freeText = isFree ? " & Free Options" : "";
  const year = new Date().getFullYear();

  return {
    title: `${tool.name} Pricing ${year}: Plans, Costs${freeText}`,
    description: `${tool.name} pricing plans and costs for ${year}. ${tool.pricingDetails || `${tool.pricing} pricing model.`} Compare features, free options, and alternatives.`,
    alternates: {
      canonical: `https://aisotools.com/pricing/${tool.slug}`,
    },
    openGraph: {
      title: `${tool.name} Pricing ${year} — Plans & Costs | AISO Tools`,
      description: `Complete ${tool.name} pricing breakdown. ${tool.pricingDetails || ""}`,
      url: `https://aisotools.com/pricing/${tool.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${tool.name} Pricing ${year} — Plans & Costs`,
      description: `${tool.name} pricing plans, features, and alternatives compared.`,
    },
  };
}

function generateFAQs(tool: Tool, tiers: PricingTier[]) {
  const isFree = hasFreeTier(tool.pricing, tool.pricingDetails);
  const year = new Date().getFullYear();
  const paidTiers = tiers.filter(
    (t) => t.price !== "$0" && t.price !== "Free" && t.price !== "Custom"
  );
  const cheapest = paidTiers[0];

  const faqs: { question: string; answer: string }[] = [];

  // Is it free?
  faqs.push({
    question: `Is ${tool.name} free to use?`,
    answer: isFree
      ? `Yes, ${tool.name} offers a free ${tool.pricing === "open-source" ? "open-source version" : "tier"} that you can use without paying. ${paidTiers.length > 0 ? `Paid plans starting at ${cheapest?.price}${cheapest?.period} unlock additional features and higher usage limits.` : "The free version includes core functionality."}`
      : `${tool.name} is a paid tool${cheapest ? ` with plans starting at ${cheapest.price}${cheapest.period}` : ""}. There is no free tier available, though some paid plans may include a trial period.`,
  });

  // How much does it cost?
  if (tool.pricingDetails) {
    faqs.push({
      question: `How much does ${tool.name} cost in ${year}?`,
      answer: `As of ${year}, ${tool.name} pricing is: ${tool.pricingDetails}. Pricing may vary based on billing cycle (monthly vs annual) and region. Visit the official ${tool.name} website for the most current pricing.`,
    });
  }

  // What's the cheapest plan?
  if (cheapest) {
    faqs.push({
      question: `What is the cheapest ${tool.name} plan?`,
      answer: isFree
        ? `The cheapest option is the free tier. If you need premium features, the most affordable paid plan is ${cheapest.name} at ${cheapest.price}${cheapest.period}.`
        : `The most affordable ${tool.name} plan is ${cheapest.name} at ${cheapest.price}${cheapest.period}.`,
    });
  }

  // Enterprise pricing
  const hasEnterprise = tiers.some(
    (t) =>
      t.name.toLowerCase().includes("enterprise") ||
      t.price === "Custom" ||
      t.price === "Contact Sales"
  );
  if (hasEnterprise) {
    faqs.push({
      question: `Does ${tool.name} offer enterprise pricing?`,
      answer: `Yes, ${tool.name} offers custom enterprise pricing with features like dedicated support, custom integrations, enhanced security, and volume discounts. Contact their sales team for a personalized quote.`,
    });
  }

  // Alternatives
  if (tool.alternatives && tool.alternatives.length > 0) {
    const altNames = tool.alternatives
      .map((slug) => tools.find((t) => t.slug === slug)?.name)
      .filter(Boolean)
      .slice(0, 3);
    if (altNames.length > 0) {
      faqs.push({
        question: `What are the best alternatives to ${tool.name}?`,
        answer: `Popular alternatives to ${tool.name} include ${altNames.join(", ")}. Each offers different features and pricing structures. Compare them on AISO Tools to find the best fit for your needs and budget.`,
      });
    }
  }

  // Worth it?
  faqs.push({
    question: `Is ${tool.name} worth the price?`,
    answer: `${tool.name} is well-regarded in the ${tool.category} space, offering features like ${tool.features.slice(0, 3).join(", ")}. Whether it's worth the investment depends on your specific needs, usage volume, and budget. ${isFree ? "The free tier lets you try it before committing to a paid plan." : "Consider starting with a trial if available to evaluate the platform."}`,
  });

  return faqs;
}

function generateStructuredData(tool: Tool, tiers: PricingTier[]) {
  const year = new Date().getFullYear();
  const isFree = hasFreeTier(tool.pricing, tool.pricingDetails);
  const faqs = generateFAQs(tool, tiers);

  const offers = tiers
    .filter((t) => t.price !== "Custom" && t.price !== "Contact Sales" && t.price !== "Variable" && t.price !== "See website")
    .map((tier) => {
      const priceNum = parseFloat(tier.price.replace(/[^0-9.]/g, "")) || 0;
      return {
        "@type": "Offer",
        name: tier.name,
        price: priceNum.toString(),
        priceCurrency: "USD",
        ...(tier.period.includes("year")
          ? { billingDuration: "P1Y" }
          : tier.period.includes("month")
          ? { billingDuration: "P1M" }
          : {}),
      };
    });

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: tool.name,
      description: tool.description,
      url: tool.url,
      applicationCategory: "WebApplication",
      operatingSystem: "Web",
      offers: offers.length > 0 ? offers : undefined,
      aggregateRating: tool.rating
        ? {
            "@type": "AggregateRating",
            ratingValue: tool.rating,
            reviewCount: tool.reviewCount || 1,
          }
        : undefined,
    },
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
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://aisotools.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name:
            categories.find((c) => c.slug === tool.category)?.name ||
            tool.category,
          item: `https://aisotools.com/category/${tool.category}`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: tool.name,
          item: `https://aisotools.com/tool/${tool.slug}`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Pricing",
          item: `https://aisotools.com/pricing/${tool.slug}`,
        },
      ],
    },
  ];

  return schemas;
}

function PricingCard({ tier, toolName }: { tier: PricingTier; toolName: string }) {
  const borderClass = tier.highlight
    ? "border-blue-500/50 bg-gradient-to-b from-blue-500/5 to-transparent"
    : "border-gray-800";

  return (
    <div
      className={`relative rounded-xl border ${borderClass} p-6 flex flex-col`}
    >
      {tier.highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-lg font-semibold mb-2">{tier.name}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold">{tier.price}</span>
        {tier.period && (
          <span className="text-gray-400 text-sm ml-1">{tier.period}</span>
        )}
      </div>
      {tier.note && (
        <p className="text-gray-500 text-xs mb-3">{tier.note}</p>
      )}
      {tier.features.length > 0 && (
        <ul className="space-y-2 mt-auto">
          {tier.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
              {f}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default async function ToolPricingPage({ params }: Props) {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) notFound();

  const category = categories.find((c) => c.slug === tool.category);
  const enrichment = getEnrichment(tool.slug);
  const tiers = parsePricingDetails(tool.pricingDetails);
  const isFree = hasFreeTier(tool.pricing, tool.pricingDetails);
  const pricingType = getPricingTypeLabel(tool.pricing);
  const pricingSummary = getPricingSummary(tool.pricing, tool.pricingDetails);
  const faqs = generateFAQs(tool, tiers);
  const schemas = generateStructuredData(tool, tiers);
  const year = new Date().getFullYear();

  const alternatives = tool.alternatives
    ?.map((altSlug) => tools.find((t) => t.slug === altSlug))
    .filter(Boolean) as Tool[] | undefined;

  // Build comparison slugs for alternatives
  const comparisonLinks = (alternatives || []).map((alt) => {
    const sorted = [tool.slug, alt.slug].sort();
    return {
      tool: alt,
      compareUrl: `/compare/${sorted[0]}-vs-${sorted[1]}`,
    };
  });

  // Distribute features across tiers for the feature-tier matrix
  const featureMatrix = generateFeatureMatrix(tool.features, tiers);

  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
          {category && (
            <>
              <Link
                href={`/category/${category.slug}`}
                className="hover:text-white transition"
              >
                {category.name}
              </Link>
              <span className="mx-2">›</span>
            </>
          )}
          <Link href={`/tool/${tool.slug}`} className="hover:text-white transition">
            {tool.name}
          </Link>
          <span className="mx-2">›</span>
          <span className="text-gray-300">Pricing</span>
        </nav>

        {/* Hero */}
        <div className="mb-10">
          <div className="flex items-start gap-4 mb-4">
            {enrichment?.logoUrl && (
              <img
                src={enrichment.logoUrl}
                alt={`${tool.name} logo`}
                className="w-14 h-14 rounded-xl object-contain bg-gray-800 p-1.5 flex-shrink-0"
                loading="lazy"
              />
            )}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold">
                {tool.name} Pricing {year}
              </h1>
              <p className="text-xl text-gray-400 mt-2">
                Complete pricing guide for {tool.name} — plans, costs, and{" "}
                {isFree ? "free options" : "features compared"}.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-4">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                pricingType.color === "green"
                  ? "bg-green-500/10 text-green-400"
                  : pricingType.color === "blue"
                  ? "bg-blue-500/10 text-blue-400"
                  : pricingType.color === "orange"
                  ? "bg-orange-500/10 text-orange-400"
                  : pricingType.color === "purple"
                  ? "bg-purple-500/10 text-purple-400"
                  : "bg-gray-500/10 text-gray-400"
              }`}
            >
              {pricingType.label}
            </span>
            <span className="text-gray-500 text-sm">{pricingSummary}</span>
            <span className="text-gray-600 text-xs">
              Updated {lastUpdated}
            </span>
          </div>
        </div>

        {/* Pricing Overview Box */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-semibold mb-3">
            💰 {tool.name} Pricing Overview
          </h2>
          <p className="text-gray-300 leading-relaxed">
            {tool.name} uses a <strong>{pricingType.label.toLowerCase()}</strong> pricing model.{" "}
            {pricingType.description}.{" "}
            {tool.pricingDetails
              ? `Current pricing: ${tool.pricingDetails}.`
              : ""}{" "}
            {tool.name} is a popular{" "}
            {category?.name?.toLowerCase() || tool.category} tool known for{" "}
            {tool.shortDescription.toLowerCase()}.{" "}
            {isFree
              ? `You can get started with ${tool.name} for free and upgrade to a paid plan as your needs grow.`
              : `${tool.name} requires a paid subscription to access its features.`}
          </p>
        </div>

        {/* Pricing Cards */}
        {tiers.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">
              {tool.name} Plans & Pricing
            </h2>
            <div
              className={`grid gap-6 ${
                tiers.length === 1
                  ? "grid-cols-1 max-w-md"
                  : tiers.length === 2
                  ? "grid-cols-1 sm:grid-cols-2"
                  : tiers.length === 3
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
              }`}
            >
              {tiers.map((tier, i) => (
                <PricingCard key={i} tier={tier} toolName={tool.name} />
              ))}
            </div>

            <p className="text-gray-500 text-xs mt-4">
              * Pricing information is based on publicly available data and may
              not reflect current promotions, annual discounts, or regional
              pricing. Visit the{" "}
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-400 hover:text-blue-300"
              >
                official {tool.name} website
              </a>{" "}
              for the latest pricing.
            </p>
          </section>
        )}

        {/* Is [Tool] Free? */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Is {tool.name} Free?
          </h2>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            {isFree ? (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-green-400 font-semibold text-lg">
                    Yes, {tool.name} offers a free{" "}
                    {tool.pricing === "open-source" ? "open-source version" : "plan"}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {tool.pricing === "open-source" ? (
                    <>
                      {tool.name} is open-source software that you can use,
                      modify, and self-host completely for free. This makes it
                      an excellent choice for developers and organizations who
                      want full control over their deployment. Some managed
                      hosting or cloud-based versions may have associated costs.
                    </>
                  ) : tool.pricing === "free" ? (
                    <>
                      {tool.name} is completely free to use. There are no
                      hidden costs, no premium tiers, and no paywalls.
                      Everything the tool offers is available at no charge,
                      making it accessible to individuals, students, and
                      organizations of all sizes.
                    </>
                  ) : (
                    <>
                      {tool.name} offers a free tier that lets you try the
                      platform without any payment. The free plan typically
                      includes core features with usage limits.{" "}
                      {tiers.filter((t) => t.price !== "$0").length > 0
                        ? `For power users, paid plans unlock additional features, higher limits, and priority support.`
                        : ""}
                    </>
                  )}
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-orange-400 text-xl">✗</span>
                  <span className="text-orange-400 font-semibold text-lg">
                    No, {tool.name} requires a paid subscription
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {tool.name} does not currently offer a free plan. All users
                  need a paid subscription to access the platform.{" "}
                  {tiers.length > 0 && tiers[0].price !== "Custom"
                    ? `Plans start at ${tiers[0].price}${tiers[0].period}. `
                    : ""}
                  However, {tool.name} may offer a free trial or money-back
                  guarantee — check their website for current promotions. If
                  you&apos;re looking for a free alternative, explore the
                  alternatives section below.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Feature Comparison Matrix */}
        {tool.features.length > 0 && tiers.length > 1 && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">
              {tool.name} Feature Comparison
            </h2>
            <p className="text-gray-400 mb-6">
              Here&apos;s how {tool.name}&apos;s key features are typically
              distributed across pricing tiers. Feature availability is
              estimated based on common SaaS patterns — check the official site
              for exact tier details.
            </p>
            <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-800/50">
                    <th className="text-left p-4 text-gray-400 font-medium">
                      Feature
                    </th>
                    {tiers.map((tier, i) => (
                      <th
                        key={i}
                        className={`p-4 text-center font-medium ${
                          tier.highlight ? "text-blue-400" : "text-gray-400"
                        }`}
                      >
                        {tier.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {featureMatrix.map((row, i) => (
                    <tr key={i} className="border-t border-gray-800">
                      <td className="p-4 text-gray-300">{row.feature}</td>
                      {row.availability.map((avail, j) => (
                        <td key={j} className="p-4 text-center">
                          {avail === "full" ? (
                            <span className="text-green-400">✓</span>
                          ) : avail === "limited" ? (
                            <span className="text-yellow-400">◐</span>
                          ) : (
                            <span className="text-gray-600">—</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 text-xs mt-3">
              ✓ = Full access · ◐ = Limited · — = Not available. Feature
              availability is estimated and may vary.
            </p>
          </section>
        )}

        {/* Is [Tool] Worth It? */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Is {tool.name} Worth It?
          </h2>
          <div className="bg-gradient-to-r from-blue-600/5 to-purple-600/5 border border-blue-500/20 rounded-xl p-6">
            <p className="text-gray-300 leading-relaxed mb-4">
              {tool.name} is a{" "}
              {tool.pricing === "free" || tool.pricing === "open-source"
                ? "free"
                : tool.pricing === "freemium"
                ? "freemium"
                : "premium"}{" "}
              {category?.name?.toLowerCase() || tool.category} tool that
              offers {tool.features.length} key features including{" "}
              {tool.features.slice(0, 3).join(", ")}.{" "}
              {tool.description}
            </p>

            <h3 className="font-semibold text-lg mb-3">
              ✅ {tool.name} is a good choice if you need:
            </h3>
            <ul className="space-y-2 mb-5">
              {tool.features.slice(0, 5).map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-gray-300"
                >
                  <span className="text-green-400 mt-1 flex-shrink-0">•</span>
                  {feature}
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-lg mb-3">
              💡 Value Assessment
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {isFree ? (
                <>
                  With a free tier available, {tool.name} is an easy
                  recommendation for anyone looking to try{" "}
                  {category?.name?.toLowerCase() || tool.category} tools without
                  financial commitment. The paid plans offer good value for
                  power users who need the additional features and higher usage
                  limits.
                </>
              ) : (
                <>
                  As a paid tool, {tool.name} justifies its price through
                  professional-grade features and reliability. If you regularly
                  need {tool.features[0]?.toLowerCase() || "its capabilities"},
                  the investment can pay for itself through time savings and
                  improved output quality.
                </>
              )}
            </p>
          </div>
        </section>

        {/* Key Features Detail */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            {tool.name} Key Features
          </h2>
          <p className="text-gray-400 mb-6">
            {tool.name} comes packed with features that make it a strong contender
            in the {category?.name?.toLowerCase() || tool.category} space.
            Here&apos;s what you get:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tool.features.map((feature, i) => (
              <div
                key={feature}
                className="flex items-start gap-3 bg-gray-900 border border-gray-800 rounded-lg p-4"
              >
                <span className="text-blue-400 font-bold text-lg mt-0.5 flex-shrink-0">
                  {i + 1}.
                </span>
                <div>
                  <span className="text-gray-200 font-medium">{feature}</span>
                  <p className="text-gray-500 text-sm mt-1">
                    {generateFeatureDescription(feature, tool.name, isFree)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Alternatives Section */}
        {alternatives && alternatives.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">
              {tool.name} Alternatives & Their Pricing
            </h2>
            <p className="text-gray-400 mb-6">
              Considering alternatives to {tool.name}? Here&apos;s how competing
              tools compare on pricing:
            </p>
            <div className="space-y-4">
              {alternatives.map((alt) => {
                const altSummary = getPricingSummary(
                  alt.pricing,
                  alt.pricingDetails
                );
                const altType = getPricingTypeLabel(alt.pricing);
                return (
                  <div
                    key={alt.slug}
                    className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-semibold text-lg">{alt.name}</h3>
                          <span
                            className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                              altType.color === "green"
                                ? "bg-green-500/10 text-green-400"
                                : altType.color === "blue"
                                ? "bg-blue-500/10 text-blue-400"
                                : altType.color === "orange"
                                ? "bg-orange-500/10 text-orange-400"
                                : altType.color === "purple"
                                ? "bg-purple-500/10 text-purple-400"
                                : "bg-gray-500/10 text-gray-400"
                            }`}
                          >
                            {altType.label}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm">
                          {alt.shortDescription}
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                          Pricing: {alt.pricingDetails || altSummary}
                        </p>
                      </div>
                      <div className="flex gap-2 flex-shrink-0">
                        <Link
                          href={`/pricing/${alt.slug}`}
                          className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                        >
                          View Pricing
                        </Link>
                        <Link
                          href={`/compare/${[tool.slug, alt.slug].sort().join("-vs-")}`}
                          className="bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 px-4 py-2 rounded-lg text-sm font-medium transition"
                        >
                          Compare
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* CTA Box */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-white font-semibold text-lg">
                Ready to try {tool.name}?
              </p>
              <p className="text-gray-400 text-sm">
                Visit the official website for the latest pricing and to get started.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Visit {tool.name} →
              </a>
              <Link
                href={`/tool/${tool.slug}`}
                className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Full Review
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
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

        {/* Internal Links */}
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
            <Link
              href="/pricing/tools"
              className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition"
            >
              <h3 className="font-semibold mb-1">💰 All AI Tool Pricing</h3>
              <p className="text-gray-400 text-sm">
                Browse pricing for 280+ AI tools
              </p>
            </Link>
          </div>
        </section>

        {/* Status link */}
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
      </div>
    </>
  );
}

/**
 * Generate a feature-tier matrix for the comparison table.
 * Uses heuristics: free tiers get basic features, higher tiers get all.
 */
function generateFeatureMatrix(
  features: string[],
  tiers: PricingTier[]
): { feature: string; availability: ("full" | "limited" | "none")[] }[] {
  if (tiers.length === 0) return [];

  return features.map((feature, featureIdx) => {
    const availability = tiers.map((tier, tierIdx) => {
      // Free tier: first few features limited, rest not available
      if (tier.price === "$0" || tier.price === "Free") {
        if (featureIdx < Math.ceil(features.length * 0.4)) return "limited" as const;
        if (featureIdx < Math.ceil(features.length * 0.6)) return "none" as const;
        return "none" as const;
      }
      // Enterprise/Custom: everything full
      if (
        tier.price === "Custom" ||
        tier.price === "Contact Sales" ||
        tier.name.toLowerCase().includes("enterprise")
      ) {
        return "full" as const;
      }
      // Middle tiers: scale based on position
      const tierPosition = tierIdx / (tiers.length - 1 || 1);
      const featurePosition = featureIdx / (features.length - 1 || 1);
      if (featurePosition <= tierPosition + 0.3) return "full" as const;
      if (featurePosition <= tierPosition + 0.6) return "limited" as const;
      return "none" as const;
    });

    return { feature, availability };
  });
}

/**
 * Generate a brief description for a feature.
 */
function generateFeatureDescription(
  feature: string,
  toolName: string,
  isFree: boolean
): string {
  const lower = feature.toLowerCase();

  if (lower.includes("ai") || lower.includes("generation") || lower.includes("generate"))
    return `Powered by advanced AI models, ${toolName} delivers intelligent ${lower.includes("code") ? "code" : lower.includes("image") ? "image" : "content"} generation capabilities.`;
  if (lower.includes("api"))
    return `Integrate ${toolName} into your own applications and workflows via the API.`;
  if (lower.includes("collaboration") || lower.includes("team"))
    return `Work together with your team in real-time with built-in collaboration features.`;
  if (lower.includes("custom") || lower.includes("personali"))
    return `Customize ${toolName} to match your specific needs and preferences.`;
  if (lower.includes("search") || lower.includes("browse"))
    return `Search and browse capabilities help you find what you need quickly.`;
  if (lower.includes("upload") || lower.includes("file") || lower.includes("document"))
    return `Upload and process files directly within ${toolName} for seamless workflows.`;
  if (lower.includes("voice") || lower.includes("speech") || lower.includes("audio"))
    return `Audio and voice features enhance the way you interact with ${toolName}.`;
  if (lower.includes("template"))
    return `Pre-built templates help you get started quickly and maintain consistency.`;
  if (lower.includes("analytics") || lower.includes("insight"))
    return `Data-driven insights help you understand performance and make better decisions.`;
  if (lower.includes("integration") || lower.includes("connect"))
    return `Connect with your existing tools and services for a unified workflow.`;

  return `${isFree ? "Available in the free plan with limits — " : ""}${feature} helps you work more efficiently with ${toolName}.`;
}
