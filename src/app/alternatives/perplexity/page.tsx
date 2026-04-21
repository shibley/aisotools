import Link from "next/link";
import type { Metadata } from "next";

const year = 2026;

export const metadata: Metadata = {
  title: `Best Perplexity Alternatives (${year}) — Top 10 AI Search Engines | AISO Tools`,
  description: `Looking for Perplexity AI alternatives? Compare the 10 best AI search engines and answer engines with features, pricing, and pros & cons in ${year}.`,
  alternates: {
    canonical: "https://aisotools.com/alternatives/perplexity",
  },
  openGraph: {
    title: `Best Perplexity Alternatives (${year}) — Top 10 AI Search Engines`,
    description: `Compare the 10 best Perplexity alternatives for AI-powered research, web search, and agentic discovery.`,
    url: "https://aisotools.com/alternatives/perplexity",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Perplexity Alternatives (${year})`,
    description: `Top 10 Perplexity alternatives for AI search and real-time information retrieval.`,
  },
};

const alternatives = [
  {
    rank: 1,
    name: "Genspark",
    slug: "genspark",
    url: "https://genspark.ai",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (limited). Pro plans available",
    tagline: "Agentic AI search that builds custom 'SparkPages'",
    description:
      "Genspark is the most direct evolution of the AI search pattern. While Perplexity provides a list of sources and a summary, Genspark creates a comprehensive, structured 'SparkPage'—a mini-wiki tailored to your query. It uses multiple AI agents to verify facts and organize data, making it superior for deep research into complex topics.",
    features: [
      "Custom SparkPages (Auto-generated mini-wikis)",
      "Multi-agent verification for accuracy",
      "Real-time web indexing",
      "Deep dive research mode",
      "Clean, ad-free reading experience",
      "Direct source attribution",
    ],
    whySwitchReasons: [
      "Better for synthesizing information into a structured document rather than a chat thread",
      "More aggressive agentic research that digs deeper into secondary sources",
      "Avoids the 'chat fatigue' of scrolling through long conversation histories",
    ],
    bestFor: "Power researchers and students who need a structured report rather than just a quick answer.",
    compareUrl: "/compare/perplexity-vs-genspark",
  },
  {
    rank: 2,
    name: "Phind",
    slug: "phind",
    url: "https://phind.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free. Pro $20/mo",
    tagline: "The AI search engine optimized for developers",
    description:
      "Phind takes the Perplexity model and optimizes it specifically for technical queries. It understands code better, searches documentation more effectively, and provides answers that are immediately actionable for engineers. If you're using Perplexity to debug code or learn a new library, Phind is a significantly more precise tool.",
    features: [
      "Deep integration with technical documentation",
      "Code-aware search and synthesis",
      "High-precision technical answers",
      "Web-enabled LLM for latest API changes",
      "Developer-centric UI with code blocks",
      "Fast iterative querying",
    ],
    whySwitchReasons: [
      "Far superior for coding, API research, and technical troubleshooting",
      "Less 'fluff' in answers; focuses on technical correctness",
      "Better understanding of software architectural patterns",
    ],
    bestFor: "Software engineers, DevOps professionals, and anyone doing technical research.",
    compareUrl: "/compare/perplexity-vs-phind",
  },
  {
    rank: 3,
    name: "You.com",
    slug: "you",
    url: "https://you.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free. Pro $19/mo",
    tagline: "Customizable AI agents and personalized search",
    description:
      "You.com was one of the first to pioneer AI search. Its primary advantage over Perplexity is customization. You can build your own AI agents for specific tasks, customize the search experience, and switch between different LLM backends easily. It feels more like a productivity suite than a simple search box.",
    features: [
      "Custom AI Agents for specific workflows",
      "Choice of multiple LLM models",
      "Integrated productivity tools",
      "Personalized search rankings",
      "Private search mode",
      "Web-to-answer synthesis",
    ],
    whySwitchReasons: [
      "Need for a personalized search experience that learns your preferences",
      "Ability to switch between different LLMs for the same query",
      "Integration of custom agents to automate repetitive search tasks",
    ],
    bestFor: "Users who want a highly personalized, customizable AI search hub.",
    compareUrl: "/compare/perplexity-vs-you",
  },
  {
    rank: 4,
    name: "Arc Search",
    slug: "arc-search",
    url: "https://arc.net",
    pricing: "Free",
    pricingColor: "bg-green-500/10 text-green-400",
    freeTier: true,
    startingPrice: "Free",
    tagline: "The 'Browse for Me' experience on mobile",
    description:
      "Arc Search isn't a standalone site; it's a browser. Its 'Browse for Me' feature is the closest mobile experience to Perplexity. Instead of giving you a list of links, it reads the top results and builds a custom webpage on the fly that answers your question. It's designed for the 'on-the-go' search a user does on a phone.",
    features: [
      "Instant 'Browse for Me' page generation",
      "Deep integration with mobile OS",
      "Clean, distraction-free synthesis",
      "Fast, minimalist interface",
      "Automatic tab organization",
      "Zero-click information retrieval",
    ],
    whySwitchReasons: [
      "Best mobile-first experience for AI search",
      "Faster than opening a browser and typing into a search site",
      "Creates a beautiful, readable summary without needing to navigate to multiple sites",
    ],
    bestFor: "Mobile users who want answers instantly without browsing multiple tabs.",
    compareUrl: "/compare/perplexity-vs-arc-search",
  },
  {
    rank: 5,
    name: "Google Search (Gemini)",
    slug: "google-gemini",
    url: "https://google.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free. Gemini Advanced $20/mo",
    tagline: "The world's most powerful index with AI Overviews",
    description:
      "Google is the incumbent. With AI Overviews (SGE), Google now provides Perplexity-style summaries at the top of search results. While it lacks the 'chat-first' research feel of Perplexity, it has an unbeatable index of the web, real-time local data (Maps, Flights), and seamless integration with the Google ecosystem.",
    features: [
      "Unmatched web indexing and crawling",
      "AI Overviews for instant synthesis",
      "Deep integration with Google Maps and Workspace",
      "Real-time local and transactional data",
      "Multimodal capabilities (Lens, Voice)",
      "Global language support",
    ],
    whySwitchReasons: [
      "Need for hyper-local information or real-time commercial data (shopping, flights)",
      "Preference for the most comprehensive web index available",
      "Integration with other Google services (Gmail, Docs, Calendar)",
    ],
    bestFor: "General purpose search, local discovery, and users heavily invested in the Google ecosystem.",
    compareUrl: "/compare/perplexity-vs-google",
  },
  {
    rank: 6,
    name: "ChatGPT",
    slug: "chatgpt",
    url: "https://chat.openai.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free. Plus $20/mo",
    tagline: "Advanced reasoning and multi-step research",
    description:
      "ChatGPT offers a more robust ecosystem than Perplexity, including GPT-5's advanced reasoning and a massive library of Custom GPTs. While Perplexity is a search engine first, ChatGPT is a reasoning engine that can search the web to supplement its vast knowledge base.",
    features: [
      "Multi-step research across many sources",
      "Custom GPTs for specialized search workflows",
      "Canvas mode for research document creation",
      "SOTA reasoning (GPT-5)",
      "Integrated DALL-E 3 for visual research",
      "Voice-first interaction mode",
    ],
    whySwitchReasons: [
      "Need deeper analytical reasoning and multi-step synthesis",
      "Want to use specialized Custom GPTs for research",
      "Prefer a tool that can create and edit documents (Canvas) while searching",
    ],
    bestFor: "Deep research, complex technical synthesis, and iterative document creation.",
    compareUrl: "/compare/chatgpt-vs-perplexity",
  },
  {
    rank: 7,
    name: "Brave Search",
    slug: "brave-search",
    url: "https://search.brave.com",
    pricing: "Free",
    pricingColor: "bg-green-500/10 text-green-400",
    freeTier: true,
    startingPrice: "Free",
    tagline: "Privacy-first AI search with an independent index",
    description:
      "Brave Search is the gold standard for those who want Perplexity-like summaries without the tracking. It uses its own independent search index rather than relying on Google or Bing, ensuring a truly unbiased and private AI search experience.",
    features: [
      "100% privacy (no tracking or data collection)",
      "Independent search index (not Google/Bing)",
      "Fast, ad-free AI summaries",
      "No account required to use AI features",
      "Brave Browser native integration",
      "Lightweight and fast interface",
    ],
    whySwitchReasons: [
      "Priority on privacy and avoiding data collection",
      "Want an independent search index to avoid 'filter bubbles'",
      "Need a fast, free alternative that doesn't require a login",
    ],
    bestFor: "Privacy-conscious users and those seeking a fast, free, ad-free search experience.",
    compareUrl: "/compare/perplexity-vs-brave",
  },
  {
    rank: 8,
    name: "Microsoft Copilot",
    slug: "microsoft-copilot",
    url: "https://copilot.microsoft.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free. Pro $20/mo",
    tagline: "Enterprise-grade search with Microsoft 365 integration",
    description:
      "Copilot combines the power of GPT-5 with the Bing search index. Its main advantage over Perplexity is the deep integration with the Windows OS and Microsoft 365 suite, making it the best choice for corporate environments and enterprise research.",
    features: [
      "Native integration with Windows and Edge",
      "Direct access to Microsoft 365 data (Docs, Email)",
      "Enterprise-grade security and compliance",
      "Bing Search integration for real-time data",
      "Built-in DALL-E 3 image generation",
      "Professional document synthesis",
    ],
    whySwitchReasons: [
      "Deeply embedded in the Microsoft/Office ecosystem",
      "Requirement for enterprise-level security and SSO",
      "Prefer a tool integrated directly into the OS and browser",
    ],
    bestFor: "Enterprise users and those heavily embedded in the Microsoft ecosystem.",
    compareUrl: "/compare/perplexity-vs-copilot",
  },
  {
    rank: 9,
    name: "Exa",
    slug: "exa",
    url: "https://exa.ai",
    pricing: "Paid",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: false,
    startingPrice: "Starter $30/mo",
    tagline: "Semantic search engine for discovery and patterns",
    description:
      "Exa is a fundamentally different kind of search. While Perplexity finds answers, Exa finds content. It uses a semantic neural index to find pages that are 'similar' in meaning to a query, making it a powerful tool for discovery and finding hidden gems on the web.",
    features: [
      "Neural search based on semantic meaning",
      "URL similarity (find pages like this one)",
      "Real-time web crawling and indexing",
      "Powerful API for AI agent developers",
      "Discovery-focused interface",
      "High-precision filtering for quality sources",
    ],
    whySwitchReasons: [
      "Need to find similar content/sources rather than just a summary",
      "Building AI agents that require high-quality semantic data",
      "Looking for serendipity and discovery over direct Q&A",
    ],
    bestFor: "Content researchers, trend hunters, and developers building AI search apps.",
    compareUrl: "/compare/perplexity-vs-exa",
  },
  {
    rank: 10,
    name: "Perplexica",
    slug: "perplexica",
    url: "https://github.com/ItzCodename/Perplexica",
    pricing: "Free",
    pricingColor: "bg-green-500/10 text-green-400",
    freeTier: true,
    startingPrice: "Free (Self-hosted)",
    tagline: "The open-source, self-hosted Perplexity alternative",
    description:
      "Perplexica is the leading open-source alternative for those who want total control over their search data. By self-hosting Perplexica, you can use local models via Ollama or your own API keys, ensuring that your research history and queries never leave your own hardware.",
    features: [
      "100% open-source (MIT License)",
      "Local LLM support via Ollama",
      "Total data privacy and control",
      "Self-hosted via Docker",
      "Customizable search agents",
      "No subscription fees (pay only for API/Compute)",
    ],
    whySwitchReasons: [
      "Maximum privacy advocates who refuse cloud-based search",
      "Developers who want to experiment with different local models",
      "Users who want a completely free, non-commercial search tool",
    ],
    bestFor: "Developers, self-hosting enthusiasts, and maximum privacy advocates.",
    compareUrl: "/compare/perplexity-vs-perplexica",
  },
];

const faqs = [
  {
    question: "What is the best free alternative to Perplexity AI?",
    answer:
      "Genspark and Arc Search provide the best free experiences. Genspark is superior for deep research due to its 'SparkPages', while Arc Search is the fastest way to get AI-synthesized answers on a mobile device. Brave Search is also a top choice for those prioritizing privacy.",
  },
  {
    question: "Is Genspark better than Perplexity?",
    answer:
      "It depends on the goal. Perplexity is better for a conversational 'back-and-forth' to refine an answer. Genspark is better for 'one-shot' deep research because it builds a structured, wiki-like page instead of just a chat response, making the information easier to digest and save.",
  },
  {
    question: "Which AI search engine is best for coding?",
    answer:
      "Phind is the clear winner for coding. While Perplexity is good, Phind is specifically optimized for developers, meaning it searches technical documentation more accurately and provides code snippets that are more likely to be correct and up-to-date.",
  },
  {
    question: "How does Arc Search differ from Perplexity?",
    answer:
      "Perplexity is a destination website/app where you go to research. Arc Search is a browser that performs the research for you as part of the browsing experience. Arc's 'Browse for Me' feature essentially does what Perplexity does but presents it as a temporary webpage.",
  },
  {
    question: "Does Google Gemini replace the need for Perplexity?",
    answer:
      "For many, yes. Google's AI Overviews provide the same core value—a synthesized answer with citations. However, Perplexity's 'Pro' mode (with the ability to switch models like Claude 3.5 or GPT-4o) and its focus on a clean research thread still make it a more powerful tool for power users.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Best Perplexity Alternatives (${year})`,
    description: `Top 10 alternatives to Perplexity AI for AI search, answer engines, and research.`,
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
      { "@type": "ListItem", position: 3, name: "Perplexity Alternatives", item: "https://aisotools.com/alternatives/perplexity" },
    ],
  },
];

export default function PerplexityAlternativesPage() {
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
          <span className="text-gray-300">Perplexity Alternatives</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-xl bg-blue-600/20 flex items-center justify-center text-2xl font-bold text-blue-400 mx-auto mb-6">
            P
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Best Perplexity Alternatives in {year}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Compare the {alternatives.length} best alternatives to Perplexity AI for agentic search, real-time research, and AI-powered answer engines.
          </p>
          <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">
            <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
              Perplexity: Freemium
            </span>
            <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
              🔍 AI Search
            </span>
          </div>
        </div>

        {/* Why Switch */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Why Look for Perplexity Alternatives?</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Perplexity changed how we search the web by synthesizing answers with citations. However, depending on whether you need specialized technical accuracy, a structured research report, or a seamless mobile experience, other AI search engines might serve you better.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { reason: "📄 Structured Reports", detail: "Perplexity is a chat thread. For those who want a structured 'wiki-style' page as a result, Genspark is a superior alternative." },
              { reason: "💻 Developer Precision", detail: "For technical queries and coding, general AI search can hallucinate. Phind is specifically optimized for the developer workflow." },
              { reason: "📱 Mobile Efficiency", detail: "Opening a browser and a search site takes time. Arc Search's 'Browse for Me' builds the answer page instantly on mobile." },
              { reason: "⚙️ Personalization & Control", detail: "Perplexity is a standardized experience. You.com allows you to build custom agents and choose your specific LLM backends." },
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
          <h2 className="text-2xl font-bold mb-6">Quick Comparison: Perplexity vs Alternatives</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-800/50 text-left">
                  <th className="p-4 font-medium text-gray-400">#</th>
                  <th className="p-4 font-medium text-gray-400">Tool</th>
                  <th className="p-4 font-medium text-gray-400">Pricing</th>
                  <th className="p-4 font-medium text-gray-400">Free Tier?</th>
                  <th className="p-4 font-medium text-gray-400">Key Differentiator</th>
                </tr>
              </thead>
              <tbody >
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
          <h2 className="text-2xl font-bold mb-6">Detailed Look at Each Perplexity Alternative</h2>
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

                <div className="bg-gradient-to-r from-blue-600/5 to-purple-600/5 border border-blue-500/10 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-blue-400 mb-2">Why choose {alt.name} over Perplexity?</h4>
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

        {/* Decision Framework */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Which Perplexity Alternative Should You Choose?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">For Deep Research & Reasoning</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  <span><strong className="text-gray-300">ChatGPT:</strong> Best for multi-step reasoning and GPT-5 capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  <span><strong className="text-gray-300">Genspark:</strong> Unbeatable for building structured, wiki-style research reports</span>
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
                  <span><strong className="text-gray-300">Arc Search:</strong> The fastest AI-synthesized answers on mobile</span>
                </li>
              </ul>
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

        {/* Cross-links */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Learn More</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/tool/perplexity" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">📋 Perplexity Review</h3>
              <p className="text-gray-400 text-sm">Full review with features, pros & cons</p>
            </Link>
            <Link href="/tool/genspark" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">✨ Genspark</h3>
              <p className="text-gray-400 text-sm">Agentic AI search and SparkPages</p>
            </Link>
            <Link href="/tool/phind" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">💻 Phind</h3>
              <p className="text-gray-400 text-sm">AI search optimized for developers</p>
            </Link>
            <Link href="/compare/perplexity-vs-genspark" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">⚖️ Perplexity vs Genspark</h3>
              <p className="text-gray-400 text-sm">Head-to-head comparison</p>
            </Link>
            <Link href="/category/search" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">🔍 AI Search Tools</h3>
              <p className="text-gray-400 text-sm">Browse all AI search and answer engines</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
