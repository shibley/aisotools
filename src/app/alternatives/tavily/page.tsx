import Link from "next/link";
import type { Metadata } from "next";

const year = 2026;

export const metadata: Metadata = {
  title: `Best Tavily Alternatives (${year}) — Top 7 AI Search APIs | AISO Tools`,
  description: `Looking for Tavily alternatives? Compare the 7 best Tavily alternatives for AI agents and RAG applications — with features, pricing, and pros & cons.`,
  alternates: {
    canonical: "https://aisotools.com/alternatives/tavily",
  },
  openGraph: {
    title: `Best Tavily Alternatives (${year}) — Top 7 AI Search APIs`,
    description: `Compare the 7 best alternatives to Tavily for AI agents and RAG. Features, pricing, and honest pros & cons.`,
    url: "https://aisotools.com/alternatives/tavily",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Tavily Alternatives (${year})`,
    description: `Compare the 7 best alternatives to Tavily for AI agents and RAG.`,
  },
};

const alternatives = [
  {
    rank: 1,
    name: "Exa AI",
    slug: "exa-ai",
    url: "https://exa.ai",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "$0 — 1K free searches/mo, then $5/1K",
    tagline: "Neural search built for AI apps",
    description:
      "Exa AI uses meaning-based (embedding) search rather than keyword matching, making it especially powerful for retrieval-augmented generation (RAG). Results are semantically relevant even without exact keyword matches — a major upgrade for LLM pipelines.",
    features: [
      "Semantic / meaning-based search",
      "Full-text content extraction",
      "Domain and date filtering",
      "Highlights endpoint (relevant snippets)",
      "Similar-document retrieval",
      "SDKs for Python and TypeScript",
    ],
    whySwitchReasons: [
      "Better semantic relevance for RAG compared to keyword-based APIs",
      "Highlights endpoint delivers exact passage snippets — no chunking needed",
      "Generous free tier (1K/mo) — ideal for prototyping",
    ],
    bestFor: "LLM developers who need high-relevance semantic search for RAG pipelines.",
    compareUrl: "/compare/exa-ai-vs-tavily",
  },
  {
    rank: 2,
    name: "Serper",
    slug: "serper",
    url: "https://serper.dev",
    pricing: "Paid",
    pricingColor: "bg-orange-500/10 text-orange-400",
    freeTier: false,
    startingPrice: "$50/mo for 50K searches",
    tagline: "Google SERP API with low latency",
    description:
      "Serper provides fast, structured access to Google search results including organic, news, images, and shopping results. It's the go-to choice when you need Google's index — not a proprietary corpus — in your AI pipeline.",
    features: [
      "Google organic results",
      "News, images, shopping, maps",
      "Knowledge graph data",
      "Answer boxes and snippets",
      "Low latency (avg <200ms)",
      "JSON structured output",
    ],
    whySwitchReasons: [
      "Taps into Google's full index — broader coverage than Tavily",
      "Sub-200ms latency for real-time agent tools",
      "Includes SERP features (answer boxes, knowledge graphs) Tavily doesn't expose",
    ],
    bestFor: "Agents that need Google results with structured SERP data quickly.",
    compareUrl: "/compare/serper-vs-tavily",
  },
  {
    rank: 3,
    name: "SerpAPI",
    slug: "serpapi",
    url: "https://serpapi.com",
    pricing: "Paid",
    pricingColor: "bg-orange-500/10 text-orange-400",
    freeTier: false,
    startingPrice: "$75/mo for 5K searches",
    tagline: "Multi-engine SERP scraping API",
    description:
      "SerpAPI has been the scraping-based SERP data industry standard for years. It supports 30+ search engines (Google, Bing, Yahoo, YouTube, Amazon) and is battle-tested for reliability at scale.",
    features: [
      "30+ search engines supported",
      "Google, Bing, Baidu, YouTube, Amazon",
      "SERP screenshots",
      "Async batch mode",
      "Residential proxies included",
      "Results parsing library",
    ],
    whySwitchReasons: [
      "Widest engine coverage — Bing, Baidu, YouTube, Amazon all in one API",
      "Battle-tested reliability with years of production use",
      "Great for competitive research and multi-engine data gathering",
    ],
    bestFor: "Teams needing search data from multiple engines, not just Google or web.",
    compareUrl: "/compare/serpapi-vs-tavily",
  },
  {
    rank: 4,
    name: "Brave Search API",
    slug: "brave-search-api",
    url: "https://api.search.brave.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free 2K/mo, then $3/1K",
    tagline: "Independent search index with privacy focus",
    description:
      "Brave Search is built on an independent web index (not a Google/Bing reseller). This makes it uniquely valuable for AI applications that need search results unbiased by the major platforms, with strong privacy guarantees.",
    features: [
      "Independent web index",
      "Privacy-first data handling",
      "AI-generated summaries",
      "News and web results",
      "Local search results",
      "No click-tracking",
    ],
    whySwitchReasons: [
      "Truly independent index — not just Google/Bing with a proxy",
      "Privacy-compliant — no user tracking data in results",
      "Affordable pricing with 2K free/mo for experimentation",
    ],
    bestFor: "Privacy-focused AI apps and agents needing an unbiased, independent index.",
    compareUrl: "/compare/brave-search-api-vs-tavily",
  },
  {
    rank: 5,
    name: "Perplexity API",
    slug: "perplexity",
    url: "https://perplexity.ai",
    pricing: "Paid",
    pricingColor: "bg-orange-500/10 text-orange-400",
    freeTier: false,
    startingPrice: "$20/mo Pro; API pricing per token",
    tagline: "Answer-first search API with citations",
    description:
      "Perplexity's API returns synthesized, LLM-generated answers with inline source citations — not just raw search results. For applications that need a ready-to-present answer rather than raw documents to chunk, this is a massive time-saver.",
    features: [
      "LLM-synthesized answers",
      "Inline source citations",
      "Real-time web data",
      "Sonar models via API",
      "Follow-up support",
      "Domain filtering",
    ],
    whySwitchReasons: [
      "Returns a pre-synthesized answer — skip the LLM call in your pipeline",
      "Built-in citations reduce hallucination risk in agent responses",
      "Sonar model specifically tuned for web-grounded answers",
    ],
    bestFor: "Apps needing answer-generation + citations in one API call (not raw results).",
    compareUrl: "/compare/perplexity-vs-tavily",
  },
  {
    rank: 6,
    name: "You.com API",
    slug: "you-com",
    url: "https://you.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free tier available; YouPro $20/mo",
    tagline: "AI search with multi-modal modes",
    description:
      "You.com's API offers access to its AI search including Research, Code, and Writing modes. Particularly strong for developer-focused use cases where AI-augmented code search is needed alongside standard web retrieval.",
    features: [
      "Web and AI search",
      "Code search mode",
      "Research mode",
      "Source citations",
      "Multi-model support (GPT-4, Claude)",
      "Personalization layer",
    ],
    whySwitchReasons: [
      "Code search mode excels for dev-focused AI agents",
      "Multiple AI modes in a single API endpoint",
      "Privacy-conscious — no advertising data layer",
    ],
    bestFor: "Developer tools and coding agents that need AI-augmented code + web search.",
    compareUrl: "/compare/tavily-vs-you-com",
  },
  {
    rank: 7,
    name: "Bing Search API",
    slug: "bing-search",
    url: "https://azure.microsoft.com/products/ai-services/bing-search",
    pricing: "Paid",
    pricingColor: "bg-orange-500/10 text-orange-400",
    freeTier: false,
    startingPrice: "$7/1K calls (S1 tier)",
    tagline: "Microsoft's enterprise-grade search API",
    description:
      "The Bing Search API offers access to Microsoft's full index via Azure. It's the enterprise choice when you need SLAs, Azure integration, and compliance coverage alongside web search for your AI application.",
    features: [
      "Bing web index (3B+ pages)",
      "News, image, video search",
      "Entity and knowledge data",
      "Spell check and autosuggest",
      "Azure integration",
      "Enterprise SLA",
    ],
    whySwitchReasons: [
      "Enterprise SLAs and Azure compliance — not available in Tavily",
      "Deep Azure integration for enterprise AI stacks",
      "Bing index is the second-largest after Google",
    ],
    bestFor: "Enterprise teams already on Azure who need SLA-backed search for AI agents.",
    compareUrl: "/compare/bing-search-vs-tavily",
  },
];

const faqs = [
  {
    question: "What is the best free alternative to Tavily?",
    answer:
      "Exa AI is the best free Tavily alternative, offering 1,000 free searches/month with its semantic search engine. Brave Search API also offers 2,000 free searches/month. Both are purpose-built for AI applications and RAG pipelines.",
  },
  {
    question: "Is Tavily the best search API for AI agents?",
    answer:
      "Tavily is optimized for AI agents with structured output and LLM-friendly results, but Exa AI offers better semantic relevance for RAG, and Serper/SerpAPI offer access to Google's full index. The best choice depends on whether you prioritize semantic search quality, Google index breadth, or cost.",
  },
  {
    question: "What's the cheapest Tavily alternative?",
    answer:
      "Brave Search API starts at $3/1K searches after a 2K/mo free tier, making it one of the most affordable options. Exa AI is also cost-competitive at $5/1K after 1K free/mo. Both are significantly cheaper than Tavily's Pro tier for high-volume use.",
  },
  {
    question: "Can I use Exa AI instead of Tavily for RAG?",
    answer:
      "Yes — Exa AI is arguably a better fit for RAG than Tavily. Its semantic (embedding-based) search finds relevant documents even without exact keyword matches, and the Highlights endpoint returns relevant passage snippets directly, reducing preprocessing work in your pipeline.",
  },
  {
    question: "Which Tavily alternative works best with LangChain or LlamaIndex?",
    answer:
      "Tavily has first-party LangChain and LlamaIndex integrations, but Exa AI and Serper also offer official LangChain tool wrappers. Brave Search API has community-maintained integrations. For the tightest LangChain integration out of the box, Serper and Exa AI are the strongest alternatives.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Best Tavily Alternatives (${year})`,
    description: `Top 7 alternatives to Tavily for AI agents and RAG applications.`,
    numberOfItems: alternatives.length,
    itemListElement: alternatives.map((alt, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: alt.name,
      url: `https://aisotools.com/tool/${alt.slug}`,
      description: alt.tagline,
    })),
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
      { "@type": "ListItem", position: 2, name: "Alternatives", item: "https://aisotools.com/alternatives" },
      { "@type": "ListItem", position: 3, name: "Tavily Alternatives", item: "https://aisotools.com/alternatives/tavily" },
    ],
  },
];

export default function TavilyAlternativesPage() {
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
          <Link href="/alternatives" className="hover:text-white transition">Alternatives</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-300">Tavily Alternatives</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-xl bg-blue-600/20 flex items-center justify-center text-2xl font-bold text-blue-400 mx-auto mb-6">
            T
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Best Tavily Alternatives in {year}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Compare the {alternatives.length} best alternatives to Tavily for AI agents, RAG pipelines, and developer search APIs. Find the right tool with detailed feature comparisons and honest pricing breakdowns.
          </p>
          <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">
            <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
              Tavily: Freemium
            </span>
            <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
              🔍 AI Search API
            </span>
          </div>
        </div>

        {/* Why Look for Alternatives */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Why Look for Tavily Alternatives?</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Tavily is an excellent search API purpose-built for AI agents and RAG — it handles real-time web search with LLM-friendly structured output. But it's not the only option, and depending on your requirements, alternatives may offer better value.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { reason: "💰 Cost at scale", detail: "Tavily's pricing can add up quickly at high query volumes. Several alternatives offer lower per-query costs or more generous free tiers." },
              { reason: "🌐 Index breadth", detail: "Tavily uses its own index. If you need Google's full 100B+ page corpus, APIs like Serper or SerpAPI give you access to it." },
              { reason: "🧠 Semantic search quality", detail: "For RAG applications where keyword matching falls short, Exa AI's embedding-based search delivers more semantically relevant results." },
              { reason: "🏢 Enterprise requirements", detail: "If you need SLAs, Azure/GCP compliance, or data residency guarantees, Bing Search API via Azure is designed for enterprise deployments." },
            ].map((item, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="font-semibold text-lg mb-2">{item.reason}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Comparison Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Quick Comparison: Tavily vs Alternatives</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-800/50 text-left">
                  <th className="p-4 font-medium text-gray-400">#</th>
                  <th className="p-4 font-medium text-gray-400">Tool</th>
                  <th className="p-4 font-medium text-gray-400">Pricing</th>
                  <th className="p-4 font-medium text-gray-400">Free Tier?</th>
                  <th className="p-4 font-medium text-gray-400">Best For</th>
                </tr>
              </thead>
              <tbody>
                {alternatives.map((alt) => (
                  <tr key={alt.slug} className="border-t border-gray-800 hover:bg-gray-800/30 transition">
                    <td className="p-4 text-gray-500">{alt.rank}</td>
                    <td className="p-4">
                      <Link href={`#${alt.slug}`} className="font-medium text-white hover:text-blue-400 transition">
                        {alt.name}
                      </Link>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${alt.pricingColor}`}>
                        {alt.pricing}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={alt.freeTier ? "text-green-400" : "text-gray-500"}>
                        {alt.freeTier ? "✓ Yes" : "✗ No"}
                      </span>
                    </td>
                    <td className="p-4 text-gray-400 max-w-xs">{alt.tagline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed Cards */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Detailed Look at Each Tavily Alternative</h2>
          <div className="space-y-8">
            {alternatives.map((alt) => (
              <div key={alt.slug} id={alt.slug} className="bg-gray-900 border border-gray-800 rounded-xl p-6 sm:p-8 scroll-mt-20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center text-xl font-bold text-blue-400 flex-shrink-0">
                    {alt.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-xl font-bold">{alt.rank}. {alt.name}</h3>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${alt.pricingColor}`}>
                        {alt.pricing}
                      </span>
                      {alt.freeTier && (
                        <span className="bg-green-500/10 text-green-400 px-2 py-0.5 rounded-full text-xs font-medium">
                          Free tier
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 mt-1">{alt.description}</p>
                  </div>
                </div>

                {/* Why choose */}
                <div className="bg-gradient-to-r from-blue-600/5 to-purple-600/5 border border-blue-500/10 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-blue-400 mb-2">Why choose {alt.name} over Tavily?</h4>
                  <ul className="space-y-1">
                    {alt.whySwitchReasons.map((reason, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-blue-400 mt-0.5 flex-shrink-0">→</span>
                        {reason}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-gray-300 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {alt.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing + Best For */}
                  <div className="space-y-5">
                    <div>
                      <h4 className="font-semibold text-gray-300 mb-2">Pricing</h4>
                      <p className="text-gray-300 text-sm">{alt.startingPrice}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-300 mb-2">Best For</h4>
                      <p className="text-gray-400 text-sm">{alt.bestFor}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-800">
                  <a
                    href={alt.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                  >
                    Try {alt.name} →
                  </a>
                  <Link href={`/tool/${alt.slug}`} className="text-blue-400 hover:text-blue-300 text-sm font-medium transition">
                    📋 Full Review →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to Choose */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">How to Choose the Right Tavily Alternative</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <ol className="space-y-4">
              {[
                "Define your primary use case — are you building an AI agent (use Tavily, Exa, or Serper), a research tool (Perplexity API), or an enterprise system (Bing Search API)?",
                "Check index requirements — if you need Google's full index, use Serper or SerpAPI. If semantic relevance matters more than coverage, use Exa AI.",
                "Estimate your query volume — calculate monthly API calls and compare per-query costs at your expected scale before committing to a plan.",
                "Test RAG quality directly — run your actual queries through at least 2–3 APIs and benchmark retrieval quality on your specific domain.",
                "Check framework integrations — if you use LangChain, LlamaIndex, or CrewAI, verify your chosen API has a supported tool wrapper to avoid extra boilerplate.",
              ].map((tip, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="bg-blue-600/20 text-blue-400 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-gray-300 text-sm leading-relaxed">{tip}</p>
                </li>
              ))}
            </ol>
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

        {/* Cross-links */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Learn More</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/tool/tavily" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">📋 Tavily Review</h3>
              <p className="text-gray-400 text-sm">Full review with features, pros & cons</p>
            </Link>
            <Link href="/tool/exa-ai" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">🧠 Exa AI</h3>
              <p className="text-gray-400 text-sm">Semantic search for AI applications</p>
            </Link>
            <Link href="/compare/exa-ai-vs-tavily" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">⚖️ Tavily vs Exa AI</h3>
              <p className="text-gray-400 text-sm">Head-to-head comparison</p>
            </Link>
            <Link href="/category/search" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">🔍 AI Search Tools</h3>
              <p className="text-gray-400 text-sm">Browse all AI search APIs</p>
            </Link>
            <Link href="/alternatives/perplexity" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">🔄 Perplexity Alternatives</h3>
              <p className="text-gray-400 text-sm">Best alternatives to Perplexity</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
