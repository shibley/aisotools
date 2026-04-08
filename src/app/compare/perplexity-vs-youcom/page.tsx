import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perplexity vs You.com (2026): Which AI Search Engine Is Better? | AISO Tools",
  description:
    "Perplexity vs You.com — a deep comparison of both AI search engines. Features, pricing, source quality, use cases, and which is the better choice in 2026.",
  alternates: {
    canonical: "https://aisotools.com/compare/perplexity-vs-youcom",
  },
  openGraph: {
    title: "Perplexity vs You.com (2026): Which AI Search Engine Wins?",
    description:
      "Side-by-side comparison of Perplexity and You.com: features, pricing, search quality, and who should use each.",
    url: "https://aisotools.com/compare/perplexity-vs-youcom",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Perplexity vs You.com — 2026 Comparison",
    description: "Which AI search engine is better for research and daily use?",
  },
};

const perplexityFeatures = [
  "Real-time web search with citations",
  "Source-cited answers on every query",
  "Collections for organized research",
  "File and image upload analysis",
  "Follow-up questions in thread",
  "Perplexity Spaces (collaborative research)",
  "Sonar API for developers",
  "Pro Search with advanced reasoning",
];

const youcomFeatures = [
  "AI chat search with web results",
  "Code mode (optimized for developer queries)",
  "Writing mode (AI-assisted content creation)",
  "Research mode (deep dive reports)",
  "Multi-model support (GPT-4o, Claude 3.5)",
  "Source citations on results",
  "Apps integrations (custom AI apps)",
  "Privacy-focused (no tracking ads)",
];

const comparisonRows = [
  {
    attribute: "Primary Focus",
    perplexity: "Research-first AI search",
    youcom: "Multi-mode AI search (code, writing, research)",
  },
  {
    attribute: "Pricing Model",
    perplexity: "Freemium",
    youcom: "Freemium",
  },
  {
    attribute: "Free Tier",
    perplexity: "Yes — unlimited basic searches",
    youcom: "Yes — unlimited searches",
  },
  {
    attribute: "Paid Plan",
    perplexity: "$20/mo (Pro)",
    youcom: "$20/mo (YouPro)",
  },
  {
    attribute: "Source Citations",
    perplexity: "✓ Every answer cited",
    youcom: "✓ Cited sources available",
  },
  {
    attribute: "Code Search Mode",
    perplexity: "Limited",
    youcom: "✓ Dedicated Code mode",
  },
  {
    attribute: "Multi-model AI",
    perplexity: "Perplexity models + GPT-4o (Pro)",
    youcom: "GPT-4o, Claude 3.5, Gemini (Pro)",
  },
  {
    attribute: "Privacy",
    perplexity: "Standard (ad-supported on free)",
    youcom: "No ads, privacy-first by design",
  },
  {
    attribute: "API Access",
    perplexity: "✓ Sonar API available",
    youcom: "Limited API access",
  },
  {
    attribute: "Best For",
    perplexity: "Researchers, students, fact-checking",
    youcom: "Developers, multi-mode power users",
  },
];

const faqs = [
  {
    question: "Is Perplexity better than You.com?",
    answer:
      "Perplexity is generally considered better for research and general knowledge queries — its answers are more consistently cited, its source quality is higher, and its Pro Search mode adds deeper reasoning. You.com is better if you want multiple specialized modes (code, writing, research) in one interface or if privacy is a top concern. For most users, Perplexity is the stronger daily driver.",
  },
  {
    question: "Is You.com free?",
    answer:
      "Yes — You.com has a generous free tier with unlimited searches, access to its AI chat, and basic versions of its code, writing, and research modes. YouPro at $20/mo unlocks GPT-4o, Claude 3.5 Sonnet, and priority results. Perplexity also has a free tier, though Pro Search (with more powerful reasoning) requires the $20/mo Pro plan.",
  },
  {
    question: "Does You.com have better privacy than Perplexity?",
    answer:
      "Yes — You.com is designed around privacy with no advertising and explicit commitments not to sell user data. Perplexity's free tier is ad-supported, meaning some data is used for ad targeting. If privacy is your primary concern, You.com has a clear advantage. Both offer paid plans that reduce data collection.",
  },
  {
    question: "Can You.com replace Google Search?",
    answer:
      "For AI-augmented queries (research questions, code help, writing assistance), You.com can replace much of your Google usage. For commodity searches (local businesses, maps, image search, shopping), Google still leads. Perplexity makes a stronger claim to replacing Google for research queries since its citation model is closer to academic search than a typical search engine.",
  },
  {
    question: "Which AI search engine is best for developers?",
    answer:
      "You.com has the edge for developers thanks to its dedicated Code mode, which is specifically optimized for programming queries, documentation lookup, and code generation. It also offers GitHub integration and will surface Stack Overflow answers prominently. Perplexity is excellent for general research but doesn't have a developer-specific mode.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Perplexity",
    description: "AI-powered search engine that provides direct answers with cited sources.",
    url: "https://perplexity.ai",
    applicationCategory: "WebApplication",
    offers: [
      { "@type": "Offer", name: "Free", price: "0", priceCurrency: "USD" },
      { "@type": "Offer", name: "Pro", price: "20", priceCurrency: "USD" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "You.com",
    description: "AI search engine with personalized results and specialized modes for code, writing, and research.",
    url: "https://you.com",
    applicationCategory: "WebApplication",
    offers: [
      { "@type": "Offer", name: "Free", price: "0", priceCurrency: "USD" },
      { "@type": "Offer", name: "YouPro", price: "20", priceCurrency: "USD" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
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
        name: "Perplexity vs You.com",
        item: "https://aisotools.com/compare/perplexity-vs-youcom",
      },
    ],
  },
];

export default function PerplexityVsYoucomPage() {
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
          <span className="text-gray-300">Perplexity vs You.com</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-xl bg-blue-600/20 flex items-center justify-center text-2xl font-bold text-blue-400">
                P
              </div>
              <span className="text-sm text-blue-400 font-medium mt-2">Perplexity</span>
            </div>
            <span className="text-3xl font-bold text-gray-600">vs</span>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-xl bg-purple-600/20 flex items-center justify-center text-2xl font-bold text-purple-400">
                Y
              </div>
              <span className="text-sm text-purple-400 font-medium mt-2">You.com</span>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Perplexity vs You.com: Which AI Search Engine Is Better in 2026?
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A detailed comparison of Perplexity and You.com — covering search quality, AI capabilities, pricing, privacy, and which is the right choice for researchers, developers, and everyday users.
          </p>
        </div>

        {/* Quick Verdict */}
        <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-8 mb-10">
          <h2 className="text-2xl font-bold mb-4">⚡ Quick Verdict</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-blue-400 mb-3">Choose Perplexity if:</h3>
              <ul className="space-y-2">
                {[
                  "You do research, fact-checking, or academic work regularly",
                  "You want every answer cited with clickable sources",
                  "You need the Sonar API to integrate AI search into apps",
                  "You want a single best-in-class AI search experience",
                  "You use Pro Search for complex, multi-step research queries",
                ].map((reason, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-blue-400 mt-0.5 flex-shrink-0">→</span>
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-purple-400 mb-3">Choose You.com if:</h3>
              <ul className="space-y-2">
                {[
                  "You're a developer who wants a dedicated Code mode",
                  "Privacy is a priority — You.com has no ads, no tracking",
                  "You want multi-model access (GPT-4o, Claude, Gemini) in one place",
                  "You need writing assistance alongside search in one tool",
                  "You want to try different AI modes for different query types",
                ].map((reason, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-purple-400 mt-0.5 flex-shrink-0">→</span>
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* At a Glance Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Perplexity vs You.com: At a Glance</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-x-auto">
            <div className="grid grid-cols-3 bg-gray-800/50">
              <div className="p-4 text-sm text-gray-500 font-medium">Attribute</div>
              <div className="p-4 text-center font-semibold text-blue-400">Perplexity</div>
              <div className="p-4 text-center font-semibold text-purple-400">You.com</div>
            </div>
            {comparisonRows.map((row, i) => (
              <div key={i} className="grid grid-cols-3 border-t border-gray-800">
                <div className="p-4 text-sm text-gray-400">{row.attribute}</div>
                <div className="p-4 text-center text-sm text-gray-300">{row.perplexity}</div>
                <div className="p-4 text-center text-sm text-gray-300">{row.youcom}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Pricing Comparison</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 border border-blue-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">Perplexity Pricing</h3>
              <div className="space-y-3">
                {[
                  { tier: "Free", price: "$0/mo", note: "Unlimited basic searches, limited Pro searches" },
                  { tier: "Pro", price: "$20/mo", note: "Unlimited Pro searches, file uploads, API credits" },
                  { tier: "Enterprise Pro", price: "$40/user/mo", note: "Team features, SSO, admin controls" },
                ].map((tier, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-gray-800 pb-2 last:border-0">
                    <div>
                      <span className="text-gray-300 text-sm font-medium">{tier.tier}</span>
                      <p className="text-gray-500 text-xs">{tier.note}</p>
                    </div>
                    <span className="text-sm font-medium">{tier.price}</span>
                  </div>
                ))}
              </div>
              <Link href="/tool/perplexity" className="inline-block mt-4 text-blue-400 hover:text-blue-300 text-sm font-medium">
                View full Perplexity review →
              </Link>
            </div>

            <div className="bg-gray-900 border border-purple-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-purple-400 mb-4">You.com Pricing</h3>
              <div className="space-y-3">
                {[
                  { tier: "Free", price: "$0/mo", note: "Unlimited searches, basic AI modes" },
                  { tier: "YouPro", price: "$20/mo", note: "GPT-4o, Claude 3.5, priority results, no ads" },
                  { tier: "Teams", price: "Custom", note: "Enterprise features, admin dashboard" },
                ].map((tier, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-gray-800 pb-2 last:border-0">
                    <div>
                      <span className="text-gray-300 text-sm font-medium">{tier.tier}</span>
                      <p className="text-gray-500 text-xs">{tier.note}</p>
                    </div>
                    <span className="text-sm font-medium">{tier.price}</span>
                  </div>
                ))}
              </div>
              <Link href="/tool/you-com" className="inline-block mt-4 text-purple-400 hover:text-purple-300 text-sm font-medium">
                View full You.com review →
              </Link>
            </div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 mt-4">
            <p className="text-gray-400 text-sm">
              <strong className="text-gray-300">💡 Pricing takeaway:</strong> Both tools are priced identically at $20/mo for their premium tier. The free tiers are comparable — unlimited searches on both. Perplexity's free tier includes some Pro searches, while You.com's free tier includes basic versions of all modes. At parity on price, the decision comes down to features and use case.
            </p>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Feature-by-Feature Comparison</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 border border-blue-500/20 rounded-xl p-6">
              <h3 className="font-semibold text-blue-400 mb-4">🔵 Perplexity Features</h3>
              <ul className="space-y-2">
                {perplexityFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <span className="text-blue-400 mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-900 border border-purple-500/20 rounded-xl p-6">
              <h3 className="font-semibold text-purple-400 mb-4">🟣 You.com Features</h3>
              <ul className="space-y-2">
                {youcomFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <span className="text-purple-400 mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Unique Strengths */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">What Makes Each Tool Unique</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 border border-blue-500/20 rounded-xl p-6">
              <h3 className="font-semibold text-blue-400 mb-3">🔵 Perplexity's Edge</h3>
              <ul className="space-y-3">
                {[
                  { feature: "Citation consistency", detail: "Every single answer includes numbered citations. You can click through to verify any claim — crucial for research." },
                  { feature: "Sonar API", detail: "A developer-grade API lets you build Perplexity-powered search into your own applications. You.com's API access is limited." },
                  { feature: "Spaces", detail: "Collaborative research spaces let teams share and build on search sessions together — unique to Perplexity Pro." },
                  { feature: "Pro Search mode", detail: "Uses advanced reasoning to break down complex queries into sub-questions before synthesizing an answer." },
                ].map((item, i) => (
                  <li key={i} className="text-sm">
                    <span className="text-blue-400 font-medium">{item.feature}: </span>
                    <span className="text-gray-300">{item.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-900 border border-purple-500/20 rounded-xl p-6">
              <h3 className="font-semibold text-purple-400 mb-3">🟣 You.com's Edge</h3>
              <ul className="space-y-3">
                {[
                  { feature: "Code mode", detail: "Specialized for developers — pulls from GitHub, Stack Overflow, and coding docs. Perplexity doesn't have a comparable mode." },
                  { feature: "Multi-model choice", detail: "YouPro lets you switch between GPT-4o, Claude 3.5 Sonnet, and Gemini in the same interface. Perplexity is more opinionated about its model stack." },
                  { feature: "Privacy-first", detail: "No ads, no data selling — built around user privacy from day one. Perplexity's free tier serves ads." },
                  { feature: "Writing mode", detail: "AI-assisted writing mode helps draft content alongside research, not just answer questions." },
                ].map((item, i) => (
                  <li key={i} className="text-sm">
                    <span className="text-purple-400 font-medium">{item.feature}: </span>
                    <span className="text-gray-300">{item.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Use Case Recs */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Use Case Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                <span className="text-blue-400">Best for:</span> Perplexity
              </h3>
              <ul className="space-y-2 mb-4">
                {[
                  "Students and researchers who need verified, sourced answers",
                  "Journalists fact-checking claims with citation trails",
                  "Business analysts doing competitive or market research",
                  "Developers building search-augmented applications via Sonar API",
                  "Anyone replacing Google for non-navigational searches",
                ].map((use, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">•</span>
                    {use}
                  </li>
                ))}
              </ul>
              <a
                href="https://perplexity.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition"
              >
                Try Perplexity →
              </a>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                <span className="text-purple-400">Best for:</span> You.com
              </h3>
              <ul className="space-y-2 mb-4">
                {[
                  "Developers who want AI-powered code and documentation search",
                  "Privacy-conscious users who want no-ads AI search",
                  "Power users who want to choose between multiple AI models",
                  "Content creators who want writing assistance alongside search",
                  "Teams that want a single tool for search + writing + code",
                ].map((use, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">•</span>
                    {use}
                  </li>
                ))}
              </ul>
              <a
                href="https://you.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition"
              >
                Try You.com →
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Links */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Related Comparisons</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/compare/claude-vs-perplexity" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">⚖️ Claude vs Perplexity</h3>
              <p className="text-gray-400 text-sm">Chatbot vs AI search — which wins?</p>
            </Link>
            <Link href="/compare/deepseek-vs-perplexity" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">⚖️ DeepSeek vs Perplexity</h3>
              <p className="text-gray-400 text-sm">Open-source model vs AI search</p>
            </Link>
            <Link href="/alternatives/perplexity" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">🔄 Perplexity Alternatives</h3>
              <p className="text-gray-400 text-sm">All alternatives to Perplexity</p>
            </Link>
            <Link href="/tool/perplexity" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">📋 Perplexity Review</h3>
              <p className="text-gray-400 text-sm">Full review with pros & cons</p>
            </Link>
            <Link href="/tool/you-com" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">📋 You.com Review</h3>
              <p className="text-gray-400 text-sm">Full review with pros & cons</p>
            </Link>
            <Link href="/category/search" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">🔍 AI Search Tools</h3>
              <p className="text-gray-400 text-sm">Browse all AI search engines</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
