import { tools } from "@/data/tools";
import { getAffiliateUrl } from "@/data/affiliate-links";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perplexity AI Alternatives: 10 Best AI Search Engines in 2026",
  description:
    "Looking for alternatives to Perplexity AI? Compare the top 10 AI-powered search engines including ChatGPT, Gemini, Claude, You.com, Brave Search, and more. Find the perfect AI search engine for your needs.",
  keywords: [
    "perplexity alternatives",
    "perplexity ai alternatives",
    "ai search engines",
    "alternatives to perplexity",
    "chatgpt vs perplexity",
    "ai answer engines",
    "best ai search",
    "perplexity competitors",
  ],
  openGraph: {
    title: "Perplexity AI Alternatives: 10 Best AI Search Engines in 2026",
    description:
      "Compare the top 10 AI-powered search engines: ChatGPT, Gemini, Claude, You.com, Brave Search, and more.",
    url: "https://aisotools.com/perplexity-alternatives",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/perplexity-alternatives",
  },
};

interface SearchEngineComparison {
  name: string;
  slug: string;
  description: string;
  pricing: string;
  pricingDetails: string;
  strengths: string[];
  weaknesses: string[];
  bestFor: string;
  features: string[];
}

const searchEngines: SearchEngineComparison[] = [
  {
    name: "ChatGPT",
    slug: "chatgpt",
    description: "OpenAI's flagship AI with GPT-5, offering advanced multi-step reasoning and deep research capabilities.",
    pricing: "Freemium",
    pricingDetails: "Free tier, Plus $20/mo (GPT-5 + unlimited search), Team $25/user/mo",
    strengths: [
      "Most advanced reasoning (GPT-5)",
      "Multi-step research across 10+ sources",
      "Huge context window (1M+ tokens)",
      "Custom GPTs for specialized search",
      "Canvas mode for research documents",
    ],
    weaknesses: [
      "Search is secondary to conversation",
      "No transparent source citations like Perplexity",
      "Free tier limited to older models",
      "Usage caps on Plus plan",
    ],
    bestFor: "Deep research, multi-step reasoning, and complex technical synthesis",
    features: ["GPT-5 access", "Web search integration", "Canvas mode", "Custom GPTs", "Multimodal queries"],
  },
  {
    name: "Google Gemini",
    slug: "gemini",
    description: "Google's multimodal AI assistant with the most current web index and deep Workspace integration.",
    pricing: "Freemium",
    pricingDetails: "Free tier, Advanced $19.99/mo (Gemini 3 Pro + Google One 2TB)",
    strengths: [
      "Best multimodal capabilities (image/video/audio)",
      "Largest context window (2M tokens)",
      "Native Google Search and Workspace integration",
      "Real-time web indexing",
      "Excellent YouTube research",
    ],
    weaknesses: [
      "Less focused on academic research than Perplexity",
      "Privacy concerns with Google data collection",
      "Conversational focus over citation focus",
      "Free tier usage caps",
    ],
    bestFor: "Multimodal queries, Google ecosystem users, and real-time web information",
    features: ["2M token window", "Google Workspace integration", "Native multimodal input", "Real-time Google Search", "YouTube integration"],
  },
  {
    name: "Claude",
    slug: "claude",
    description: "Anthropic's AI known for exceptional analysis depth, nuance, and long-document processing.",
    pricing: "Freemium",
    pricingDetails: "Free tier, Pro $20/mo (Claude 4 + 200K context + priority access)",
    strengths: [
      "Best-in-class analysis and nuance",
      "200K context window for long documents",
      "Strong ethical reasoning",
      "Artifacts for structured research output",
      "High-quality writing and synthesis",
    ],
    weaknesses: [
      "Search integration less developed than Perplexity",
      "Smaller integration ecosystem",
      "Free tier limits are quite strict",
      "No multimodal on free tier",
    ],
    bestFor: "Long document analysis, academic research, and nuanced analytical tasks",
    features: ["Claude 4", "200K context window", "Artifacts", "Anthropic Search", "PDF analysis"],
  },
  {
    name: "You.com",
    slug: "you-com",
    description: "A versatile AI search engine that allows users to switch between multiple top-tier models.",
    pricing: "Freemium",
    pricingDetails: "Free tier (10 searches/day), Pro $15/mo (unlimited + GPT-5 + Claude 4)",
    strengths: [
      "Cheapest premium AI search ($15/mo)",
      "Multi-model choice (GPT-5, Claude 4, Gemini 3 Pro)",
      "Traditional search + AI answers side-by-side",
      "Built-in image generation",
      "Strong research mode",
    ],
    weaknesses: [
      "Interface less polished than Perplexity",
      "Smaller user base",
      "Free tier is very limited",
      "Search quality sometimes below Google/Perplexity",
    ],
    bestFor: "Budget-conscious power users and multi-model experimentation",
    features: ["Multi-model toggle", "Traditional Search side-by-side", "Research mode", "Image generation", "Code mode"],
  },
  {
    name: "Brave Search",
    slug: "brave-search",
    description: "The gold standard for privacy-focused AI search with an independent index and no tracking.",
    pricing: "Free",
    pricingDetails: "Completely free",
    strengths: [
      "100% free with no account required",
      "Maximum privacy (no tracking, no ads)",
      "Independent search index (not Google/Bing)",
      "Fast and clean interface",
      "No data collection",
    ],
    weaknesses: [
      "AI answers less sophisticated than Perplexity Pro",
      "Smaller search index than Google",
      "Lacks advanced multimodal features",
      "AI integration still evolving",
    ],
    bestFor: "Privacy-conscious users and those seeking a fast, free, ad-free search experience",
    features: ["Independent index", "Zero tracking", "AI answer summaries", "No account needed", "Brave Browser integration"],
  },
  {
    name: "Microsoft Copilot",
    slug: "microsoft-copilot",
    description: "An enterprise-grade AI search integrated deeply into Windows, Edge, and Microsoft 365.",
    pricing: "Freemium",
    pricingDetails: "Free tier, Pro $20/mo, Microsoft 365 Copilot $30/user/mo",
    strengths: [
      "Deep Microsoft 365 ecosystem integration",
      "Enterprise security and compliance",
      "GPT-5 with Bing search integration",
      "DALL-E 3 image generation included",
      "Native Windows and Edge integration",
    ],
    weaknesses: [
      "Requires Microsoft account for most features",
      "Search quality can be inconsistent",
      "Free tier has usage limits",
      "Less research-centric than Perplexity",
    ],
    bestFor: "Enterprise users and those heavily embedded in the Microsoft ecosystem",
    features: ["Microsoft 365 integration", "Bing Search", "DALL-E 3", "Enterprise SSO", "Windows integration"],
  },
  {
    name: "Phind",
    slug: "phind",
    description: "A specialized AI search engine purpose-built for software developers and technical research.",
    pricing: "Freemium",
    pricingDetails: "Free tier (limited), Pro $15/mo (unlimited + GPT-5)",
    strengths: [
      "Optimized for code search and technical docs",
      "GitHub and Stack Overflow integration",
      "Excellent context for programming languages",
      "VS Code extension available",
      "Fast, developer-centric UX",
    ],
    weaknesses: [
      "Very narrow use case (mostly for devs)",
      "Limited utility for general-purpose search",
      "Free tier has query limits",
      "Smaller general knowledge base than ChatGPT",
    ],
    bestFor: "Software developers, coding questions, and technical documentation search",
    features: ["Code-optimized search", "GitHub integration", "VS Code Extension", "Technical doc indexing", "GPT-5 support"],
  },
  {
    name: "Exa",
    slug: "exa",
    description: "A semantic search engine designed for discovery and finding similar content rather than just answers.",
    pricing: "Paid",
    pricingDetails: "Starter $30/mo (1K searches), Pro $100/mo, Scale $250/mo",
    strengths: [
      "Best for discovery and serendipity",
      "Finds similar content to any URL",
      "Semantic meaning search (not just keywords)",
      "Real-time web crawling",
      "Powerful API for developers",
    ],
    weaknesses: [
      "API-only focus (no traditional consumer web UI)",
      "Expensive compared to other alternatives",
      "Requires technical setup for full power",
      "Not designed for simple Q&A",
    ],
    bestFor: "Content researchers, trend hunters, and developers building AI search apps",
    features: ["Semantic search", "URL similarity", "Trend discovery", "Developer API", "Real-time crawling"],
  },
  {
    name: "Perplexica",
    slug: "perplexica",
    description: "The leading open-source alternative to Perplexity that can be self-hosted for total privacy.",
    pricing: "Free",
    pricingDetails: "Free (self-hosted; pay for API if not using local models)",
    strengths: [
      "100% free and open-source (MIT license)",
      "Complete data privacy and control",
      "Supports local models (Ollama, Llama, Mistral)",
      "Fully customizable infrastructure",
      "Can work completely offline",
    ],
    weaknesses: [
      "Requires technical setup (Docker, APIs)",
      "No managed cloud option",
      "Local models are generally weaker than GPT-5/Claude 4",
      "User responsible for maintenance",
    ],
    bestFor: "Developers, self-hosting enthusiasts, and maximum privacy advocates",
    features: ["Self-hosted Docker", "Local LLM support", "Open-source", "Total data control", "Customizable UI"],
  },
  {
    name: "Komo.ai",
    slug: "komo-ai",
    description: "A ultra-minimalist AI search experience focused on speed and zero distractions.",
    pricing: "Free",
    pricingDetails: "Completely free",
    strengths: [
      "Fastest interface with zero clutter",
      "No account required to start",
      "Instant AI-generated answers",
      "Highly mobile-optimized",
      "Privacy-focused and lightweight",
    ],
    weaknesses: [
      "Lacks advanced features (images, voice, etc.)",
      "No conversation history",
      "Smaller knowledge base than giants",
      "No advanced research modes",
    ],
    bestFor: "Users who want a fast, distraction-free, and account-free search experience",
    features: ["Minimalist UI", "Instant answers", "No account required", "Mobile optimized", "Zero-clutter design"],
  },
];

export default function PerplexityAlternativesPage() {
  const toolsBySlug = new Map(tools.map((t) => [t.slug, t]));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-white">
          Home
        </Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Perplexity Alternatives</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Perplexity AI Alternatives: 10 Best AI Search Engines in 2026
        </h1>
        <p className="text-xl text-gray-400 max-w-4xl">
          Looking for alternatives to Perplexity AI? Compare the top 10 AI-powered search engines including ChatGPT, Gemini, Claude, You.com, Brave Search, and more. Find the perfect AI search engine for your specific needs.
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
            Updated April 2026
          </span>
          <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
            10 AI Search Engines Compared
          </span>
        </div>
      </header>

      {/* Quick Navigation */}
      <section className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-12">
        <h2 className="text-lg font-semibold mb-3">Quick Navigation</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 text-sm">
          {searchEngines.slice(0, 10).map((engine) => (
            <a
              key={engine.slug}
              href={`#${engine.slug}`}
              className="text-blue-400 hover:text-blue-300 transition"
            >
              {engine.name}
            </a>
          ))}
        </div>
      </section>

      {/* Introduction */}
      <section className="prose prose-invert max-w-none mb-16">
        <h2 className="text-3xl font-bold mb-4">Why Look for Perplexity Alternatives?</h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          Perplexity AI has redefined the search experience by combining LLM reasoning with real-time web citations. However, as the AI landscape evolves in 2026, other tools have emerged that excel in specific areas where Perplexity may fall short.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          Whether you need the raw reasoning power of GPT-5 for deep academic research, the multimodal capabilities of Gemini for video and image analysis, or the total privacy of a self-hosted Perplexica instance, there is likely a better tool for your specific workflow.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed">
          This guide compares 10 top Perplexity alternatives across features, pricing, strengths, and ideal use cases to help you find the right AI answer engine.
        </p>
      </section>

      {/* Comparison Table */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Quick Comparison Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-gray-900 border border-gray-800 rounded-xl">
            <thead className="bg-gray-800">
              <tr className="text-left">
                <th className="px-4 py-3 text-sm font-semibold">Search Engine</th>
                <th className="px-4 py-3 text-sm font-semibold">Pricing</th>
                <th className="px-4 py-3 text-sm font-semibold">Best For</th>
                <th className="px-4 py-3 text-sm font-semibold">Key Strength</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {searchEngines.map((engine) => (
                <tr key={engine.slug} className="hover:bg-gray-800/50 transition">
                  <td className="px-4 py-3">
                    <a href={`#${engine.slug}`} className="font-medium text-blue-400 hover:text-blue-300">
                      {engine.name}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-400">{engine.pricing}</td>
                  <td className="px-4 py-3 text-sm text-gray-400">{engine.bestFor.split(",")[0]}</td>
                  <td className="px-4 py-3 text-sm text-gray-400">{engine.strengths[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed Reviews */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Detailed Perplexity Alternatives Reviews</h2>
        <div className="space-y-12">
          {searchEngines.map((engine, index) => {
            const toolData = toolsBySlug.get(engine.slug);
            return (
              <article
                key={engine.slug}
                id={engine.slug}
                className="bg-gray-900 border border-gray-800 rounded-xl p-8 scroll-mt-24"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      {index + 1}. {engine.name}
                    </h3>
                    <p className="text-gray-400">{engine.description}</p>
                  </div>
                  {toolData && (
                    <Link
                      href={`/tool/${engine.slug}`}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition shrink-0"
                    >
                      View Tool →
                    </Link>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-semibold text-gray-300 mb-2">💰 Pricing</h4>
                    <p className="text-gray-400 text-sm mb-1">{engine.pricing}</p>
                    <p className="text-gray-500 text-xs">{engine.pricingDetails}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-300 mb-2">🎯 Best For</h4>
                    <p className="text-gray-400 text-sm">{engine.bestFor}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-gray-300 mb-3">✅ Strengths</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {engine.strengths.map((strength, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start">
                        <span className="text-green-400 mr-2 mt-0.5">•</span>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-gray-300 mb-3">⚠️ Weaknesses</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {engine.weaknesses.map((weakness, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start">
                        <span className="text-red-400 mr-2 mt-0.5">•</span>
                        {weakness}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-gray-300 mb-3">🔧 Key Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {engine.features.map((feature, i) => (
                      <span
                        key={i}
                        className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Decision Framework */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Which Perplexity Alternative Should You Choose?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Deep Research & Reasoning</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong className="text-gray-300">ChatGPT:</strong> Best for multi-step reasoning and GPT-5 capabilities</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong className="text-gray-300">Claude:</strong> Unbeatable for long-document analysis and analytical nuance</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Multimodal & Ecosystems</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong className="text-gray-300">Google Gemini:</strong> Best for images, video, and Google Workspace integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong className="text-gray-300">Microsoft Copilot:</strong> Seamless for Windows, Edge, and Enterprise users</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Privacy & Open Source</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong className="text-gray-300">Brave Search:</strong> 100% free, ad-free, and zero tracking</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong className="text-gray-300">Perplexica:</strong> Total control via self-hosting and local LLMs</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Specialized Workflows</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong className="text-gray-300">Phind:</strong> Purpose-built for developers and technical documentation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong className="text-gray-300">Exa:</strong> Best for semantic discovery and finding similar content</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong className="text-gray-300">Komo.ai:</strong> Minimalist, fast, and account-free search</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">What are the best alternatives to Perplexity AI?</h3>
            <p className="text-gray-400">
              The best alternatives in 2026 depend on your needs: ChatGPT for deep reasoning, Google Gemini for multimodal queries, Claude for analysis, Brave Search for privacy, and Phind for developers.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Is there a free alternative to Perplexity Pro?</h3>
            <p className="text-gray-400">
              Yes. Brave Search is completely free and privacy-focused. Perplexica is a free, open-source alternative you can self-host. Many others like Gemini and ChatGPT offer powerful free tiers.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Which alternative is best for research?</h3>
            <p className="text-gray-400">
              For deep multi-step research, ChatGPT with GPT-5 is exceptional. For analyzing long-form papers or books, Claude's 200K context window makes it the top choice.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Can I self-host a Perplexity alternative?</h3>
            <p className="text-gray-400">
              Yes, Perplexica is specifically designed for this. It allows you to use local models via Ollama or connect to various APIs while keeping your data on your own hardware.
            </p>
          </div>
        </div>
      </section>

      {/* Related Reading */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">📚 Related Reading</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/perplexity-pro-pricing" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/40 transition group">
            <h3 className="font-semibold group-hover:text-blue-400 transition mb-2">Perplexity Pro Pricing Guide</h3>
            <p className="text-gray-500 text-sm">Detailed breakdown of Perplexity Pro costs and value for money.</p>
          </Link>
          <Link href="/chatgpt-plus-pricing" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/40 transition group">
            <h3 className="font-semibold group-hover:text-blue-400 transition mb-2">ChatGPT Plus Pricing</h3>
            <p className="text-gray-500 text-sm">Is GPT-5 worth the $20/mo? Comparison of free vs paid tiers.</p>
          </Link>
          <Link href="/alternatives" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/40 transition group">
            <h3 className="font-semibold group-hover:text-blue-400 transition mb-2">Explore All AI Alternatives</h3>
            <p className="text-gray-500 text-sm">Browse our full directory of alternatives for the world&apos;s top AI tools.</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Explore More AI Tools</h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Discover thousands of AI tools across all categories — from search engines to video generators and coding assistants.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Browse All Tools
          </Link>
          <Link
            href="/category/chatbots"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            More Search Tools →
          </Link>
        </div>
      </section>
    </div>
  );
}
