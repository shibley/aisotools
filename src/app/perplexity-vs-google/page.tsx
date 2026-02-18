import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perplexity vs Google: Which Search Tool is Better in 2026?",
  description:
    "Complete comparison of Perplexity AI vs Google Search. Compare answer quality, source citations, speed, AI features, Pro benefits, and accuracy to choose the best search tool.",
  keywords: [
    "Perplexity vs Google",
    "Perplexity AI vs Google",
    "AI search vs Google",
    "best search engine",
    "Perplexity search",
    "AI-powered search",
  ],
  openGraph: {
    title: "Perplexity vs Google: Best Search Engine 2026 Comparison",
    description:
      "In-depth comparison of Perplexity AI vs Google Search. Compare answer quality, citations, speed, and features to find the best search experience.",
    url: "https://aisotools.com/perplexity-vs-google",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/perplexity-vs-google",
  },
};

interface ComparisonCategory {
  name: string;
  perplexity: {
    rating: number;
    description: string;
    pros: string[];
    cons: string[];
  };
  google: {
    rating: number;
    description: string;
    pros: string[];
    cons: string[];
  };
  winner: "perplexity" | "google" | "tie";
}

const categories: ComparisonCategory[] = [
  {
    name: "Answer Quality & Accuracy",
    perplexity: {
      rating: 9.0,
      description: "Provides synthesized, concise answers with AI reasoning. Excellent at understanding complex questions and providing nuanced responses.",
      pros: [
        "Well-synthesized answers",
        "Understands context and nuance",
        "Good at complex queries",
        "Conversational follow-ups",
      ],
      cons: [
        "Occasionally misses details",
        "Can be overconfident",
      ],
    },
    google: {
      rating: 8.5,
      description: "Provides direct snippets, knowledge panels, and diverse results. Generally accurate with extensive fact-checking and authoritative sources.",
      pros: [
        "Highly accurate snippets",
        "Knowledge Graph integration",
        "Authoritative sources",
        "Extensive verification",
      ],
      cons: [
        "Less synthesized answers",
        "Requires more user interpretation",
      ],
    },
    winner: "perplexity",
  },
  {
    name: "Source Citations & Transparency",
    perplexity: {
      rating: 9.5,
      description: "Inline citations for every claim with numbered references. Click any number to see the exact source. Best-in-class transparency.",
      pros: [
        "Inline numbered citations",
        "Direct source links",
        "Transparent sourcing",
        "Easy verification",
      ],
      cons: [
        "Sometimes cites less authoritative sources",
      ],
    },
    google: {
      rating: 7.5,
      description: "Shows sources through search results but no direct citation of claims. AI Overviews often lack clear source attribution.",
      pros: [
        "Shows result sources",
        "Highlights featured snippets",
        "Domain authority visible",
      ],
      cons: [
        "No inline citations",
        "AI Overviews lack transparency",
        "Hard to verify specific claims",
      ],
    },
    winner: "perplexity",
  },
  {
    name: "Speed & Performance",
    perplexity: {
      rating: 8.5,
      description: "Fast AI-generated responses (2-5 seconds). Pro mode is slower but more thorough. Generally quick for most queries.",
      pros: [
        "Quick responses (2-5s)",
        "Clean, fast interface",
        "Minimal loading time",
      ],
      cons: [
        "Pro mode slower",
        "Deep research takes longer",
      ],
    },
    google: {
      rating: 9.5,
      description: "Instant results with decades of optimization. Blazing fast for simple queries, instant autocomplete, and cached results.",
      pros: [
        "Instant results",
        "Highly optimized",
        "Cached content loads fast",
        "Best autocomplete",
      ],
      cons: [
        "AI Overviews add delay",
      ],
    },
    winner: "google",
  },
  {
    name: "Research & Deep Dive Capabilities",
    perplexity: {
      rating: 9.5,
      description: "Excellent for research with follow-up questions, thread history, and collections. Pro mode searches 300+ sources for comprehensive answers.",
      pros: [
        "Perfect for research",
        "Thread-based conversations",
        "Collections for organization",
        "Pro mode deep searches",
      ],
      cons: [
        "Pro searches limited per day",
      ],
    },
    google: {
      rating: 8.0,
      description: "Good for research through diverse results and Scholar integration, but requires manual synthesis across multiple pages.",
      pros: [
        "Vast result diversity",
        "Google Scholar available",
        "Advanced search operators",
        "Books and patents search",
      ],
      cons: [
        "Manual synthesis required",
        "No conversation thread",
        "Scattered information",
      ],
    },
    winner: "perplexity",
  },
  {
    name: "User Experience & Interface",
    perplexity: {
      rating: 9.0,
      description: "Clean, minimal interface focused on answers. Conversational flow makes research intuitive. No ads or clutter.",
      pros: [
        "Clean, ad-free interface",
        "Conversational UX",
        "Easy to use",
        "Focus mode available",
      ],
      cons: [
        "Less familiar than Google",
        "Fewer customization options",
      ],
    },
    google: {
      rating: 7.5,
      description: "Familiar interface but increasingly cluttered with ads, AI Overviews, People Also Ask, and various result types.",
      pros: [
        "Familiar to everyone",
        "Many customization options",
        "Rich result types",
      ],
      cons: [
        "Ad clutter",
        "Overwhelming results",
        "AI Overviews sometimes intrusive",
      ],
    },
    winner: "perplexity",
  },
  {
    name: "Pricing & Value",
    perplexity: {
      rating: 9.0,
      description: "Free tier is excellent. Pro $20/mo adds unlimited Pro searches (300+ sources), file uploads, and API access. Great value.",
      pros: [
        "Generous free tier",
        "Pro only $20/mo",
        "No ads ever",
        "API access on Pro",
      ],
      cons: [
        "Pro searches limited on free tier",
      ],
    },
    google: {
      rating: 10.0,
      description: "Completely free for all users with no limits. Ad-supported but no subscription required. Unbeatable for free access.",
      pros: [
        "Completely free",
        "No usage limits",
        "No subscription needed",
      ],
      cons: [
        "Ad-supported",
        "Premium features in Google One",
      ],
    },
    winner: "google",
  },
  {
    name: "Specialized Search (Images, News, Shopping)",
    perplexity: {
      rating: 7.0,
      description: "Basic image and news search available. Focus modes for different content types. Limited compared to Google's specialized searches.",
      pros: [
        "Focus modes (Academic, Writing, etc.)",
        "Image search with analysis",
        "News integration",
      ],
      cons: [
        "Limited image search",
        "No shopping search",
        "Fewer specialized features",
      ],
    },
    google: {
      rating: 9.5,
      description: "Industry-leading image, news, shopping, maps, and specialized searches. Decades of refinement in every category.",
      pros: [
        "Best image search",
        "Excellent news aggregation",
        "Shopping comparison",
        "Maps, Flights, Hotels, etc.",
      ],
      cons: [
        "Each requires separate navigation",
      ],
    },
    winner: "google",
  },
  {
    name: "Real-Time & Current Information",
    perplexity: {
      rating: 9.0,
      description: "Excellent at finding and synthesizing current information. Always searches the live web, no cached results. Great for breaking news.",
      pros: [
        "Always live web search",
        "Excellent for current events",
        "No stale cached results",
        "Good at breaking news",
      ],
      cons: [
        "Sometimes cites unreliable sources",
      ],
    },
    google: {
      rating: 9.5,
      description: "Industry-leading real-time indexing with news aggregation, trending topics, and freshness ranking. Unmatched for current events.",
      pros: [
        "Real-time indexing",
        "News aggregation",
        "Trending topics",
        "Date filters",
      ],
      cons: [
        "Cached results can be outdated",
      ],
    },
    winner: "google",
  },
];

const useCases = [
  {
    title: "Academic Research & Deep Dives",
    winner: "Perplexity",
    description: "Perplexity's citations, follow-up questions, collections, and Pro mode make it perfect for research papers and thorough investigation.",
  },
  {
    title: "Quick Factual Lookups",
    winner: "Google",
    description: "Google's instant results, knowledge panels, and snippets are unbeatable for quick facts, definitions, and simple queries.",
  },
  {
    title: "Shopping & Product Research",
    winner: "Google",
    description: "Google Shopping, reviews, price comparison, and shopping graph make it far superior for e-commerce and product discovery.",
  },
  {
    title: "Complex Question Answering",
    winner: "Perplexity",
    description: "Perplexity excels at understanding nuanced questions and providing synthesized answers with proper citations.",
  },
  {
    title: "Local & Map Searches",
    winner: "Google",
    description: "Google Maps integration, business listings, reviews, and local search make Google the obvious choice for location-based queries.",
  },
  {
    title: "Ad-Free Research Experience",
    winner: "Perplexity",
    description: "No ads, no clutter, just clean answers with sources. Perfect for focused work and distraction-free research.",
  },
];

export default function PerplexityVsGooglePage() {
  const perplexityScore = categories.reduce((sum, cat) => sum + cat.perplexity.rating, 0) / categories.length;
  const googleScore = categories.reduce((sum, cat) => sum + cat.google.rating, 0) / categories.length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-white">
          Home
        </Link>
        <span className="mx-2">›</span>
        <Link href="/category/search-engines" className="hover:text-white">
          Search Engines
        </Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Perplexity vs Google</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Perplexity vs Google: Which Search Experience Wins in 2026?
        </h1>
        <p className="text-xl text-gray-400 max-w-4xl">
          Comprehensive comparison of Perplexity AI and Google Search. We compare answer quality, source
          citations, speed, research capabilities, Pro features, and specialized searches to help you
          choose the best search tool for your needs.
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
            Updated February 2026
          </span>
          <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
            9,900 monthly searches
          </span>
          <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm">
            8 Categories Compared
          </span>
        </div>
      </header>

      {/* Quick Verdict */}
      <section className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">⚡ Quick Verdict</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-bold">Perplexity</h3>
              <span className="text-2xl font-bold text-blue-400">{perplexityScore.toFixed(1)}/10</span>
            </div>
            <p className="text-gray-400 mb-4">
              Best for research, complex questions, and anyone wanting direct answers with transparent
              citations. The ad-free, conversational interface makes research dramatically faster.
            </p>
            <div className="text-sm text-gray-500">
              <strong className="text-green-400">Choose if:</strong> You want direct answers, transparent
              citations, research tools, or an ad-free experience.
            </div>
          </div>
          <div className="bg-gray-900/50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-bold">Google</h3>
              <span className="text-2xl font-bold text-purple-400">{googleScore.toFixed(1)}/10</span>
            </div>
            <p className="text-gray-400 mb-4">
              Best for specialized searches (shopping, maps, images), quick facts, and real-time information.
              Completely free with unmatched breadth and depth of features.
            </p>
            <div className="text-sm text-gray-500">
              <strong className="text-green-400">Choose if:</strong> You want shopping/maps, instant speed,
              specialized searches, or a free, familiar search experience.
            </div>
          </div>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Quick Comparison</h2>
        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">Feature</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Perplexity</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Google</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr>
                <td className="px-6 py-4 font-medium">Pricing</td>
                <td className="px-6 py-4 text-sm text-gray-400">Free, Pro $20/mo</td>
                <td className="px-6 py-4 text-sm text-gray-400">Completely free</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Answer Format</td>
                <td className="px-6 py-4 text-sm text-gray-400">AI-synthesized answers</td>
                <td className="px-6 py-4 text-sm text-gray-400">Links + snippets + AI Overviews</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Citations</td>
                <td className="px-6 py-4 text-sm">
                  <span className="text-green-400">★★★★★</span>
                  <span className="text-xs text-gray-500 ml-2">9.5/10</span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <span className="text-green-400">★★★★</span>
                  <span className="text-gray-600">★</span>
                  <span className="text-xs text-gray-500 ml-2">7.5/10</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Speed</td>
                <td className="px-6 py-4 text-sm text-gray-400">Fast (2-5 seconds)</td>
                <td className="px-6 py-4 text-sm text-gray-400">Instant</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Research Tools</td>
                <td className="px-6 py-4 text-sm text-gray-400">✅ Threads, Collections, Follow-ups</td>
                <td className="px-6 py-4 text-sm text-gray-400">⚠️ Manual synthesis needed</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Ads</td>
                <td className="px-6 py-4 text-sm text-gray-400">❌ None</td>
                <td className="px-6 py-4 text-sm text-gray-400">✅ Ads present</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Shopping/Maps</td>
                <td className="px-6 py-4 text-sm text-gray-400">❌ Not available</td>
                <td className="px-6 py-4 text-sm text-gray-400">✅ Best-in-class</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Best For</td>
                <td className="px-6 py-4 text-sm text-gray-400">Research, complex queries, citations</td>
                <td className="px-6 py-4 text-sm text-gray-400">Speed, shopping, maps, specialized</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed Comparison */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Detailed Category-by-Category Comparison</h2>
        <div className="space-y-8">
          {categories.map((category, index) => (
            <article
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-xl p-8"
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl font-bold">{category.name}</h3>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  category.winner === "perplexity"
                    ? "bg-blue-600/20 text-blue-400"
                    : category.winner === "google"
                    ? "bg-purple-600/20 text-purple-400"
                    : "bg-gray-700/50 text-gray-400"
                }`}>
                  {category.winner === "perplexity" ? "🏆 Perplexity" : category.winner === "google" ? "🏆 Google" : "🤝 Tie"}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Perplexity */}
                <div className="border border-blue-500/20 rounded-lg p-6 bg-blue-600/5">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-semibold text-blue-400">Perplexity</h4>
                    <span className="text-xl font-bold text-blue-400">{category.perplexity.rating}/10</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{category.perplexity.description}</p>
                  
                  <div className="mb-4">
                    <h5 className="text-xs font-semibold text-gray-500 uppercase mb-2">Strengths</h5>
                    <ul className="space-y-1">
                      {category.perplexity.pros.map((pro, i) => (
                        <li key={i} className="text-sm text-gray-400 flex items-start">
                          <span className="text-green-400 mr-2">✓</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-xs font-semibold text-gray-500 uppercase mb-2">Weaknesses</h5>
                    <ul className="space-y-1">
                      {category.perplexity.cons.map((con, i) => (
                        <li key={i} className="text-sm text-gray-400 flex items-start">
                          <span className="text-red-400 mr-2">✗</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Google */}
                <div className="border border-purple-500/20 rounded-lg p-6 bg-purple-600/5">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-semibold text-purple-400">Google</h4>
                    <span className="text-xl font-bold text-purple-400">{category.google.rating}/10</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{category.google.description}</p>
                  
                  <div className="mb-4">
                    <h5 className="text-xs font-semibold text-gray-500 uppercase mb-2">Strengths</h5>
                    <ul className="space-y-1">
                      {category.google.pros.map((pro, i) => (
                        <li key={i} className="text-sm text-gray-400 flex items-start">
                          <span className="text-green-400 mr-2">✓</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-xs font-semibold text-gray-500 uppercase mb-2">Weaknesses</h5>
                    <ul className="space-y-1">
                      {category.google.cons.map((con, i) => (
                        <li key={i} className="text-sm text-gray-400 flex items-start">
                          <span className="text-red-400 mr-2">✗</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Which Should You Choose? Use Case Guide</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold">{useCase.title}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 ml-2 ${
                  useCase.winner === "Perplexity"
                    ? "bg-blue-600/20 text-blue-400"
                    : "bg-purple-600/20 text-purple-400"
                }`}>
                  {useCase.winner}
                </span>
              </div>
              <p className="text-gray-400 text-sm">{useCase.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Is Perplexity better than Google?</h3>
            <p className="text-gray-400">
              For research and complex questions requiring synthesized answers with citations, Perplexity is
              superior. Google is better for quick facts, shopping, maps, images, and specialized searches.
              Most users benefit from using both: Perplexity for research and deep dives, Google for everything
              else.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Can Perplexity replace Google?</h3>
            <p className="text-gray-400">
              Not entirely. Perplexity excels at answering questions and research but lacks Google's shopping,
              maps, local search, and image search capabilities. Many users use Perplexity as their primary
              search for questions and research, while keeping Google for specialized needs like shopping and
              navigation.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Is Perplexity Pro worth $20/month?</h3>
            <p className="text-gray-400">
              For researchers, students, and knowledge workers, yes. Pro unlocks unlimited Pro searches (300+
              sources per query), file uploads, API access, and priority support. The free tier is generous,
              but heavy researchers will benefit from Pro's depth and speed.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Which is more accurate: Perplexity or Google?</h3>
            <p className="text-gray-400">
              Both are generally accurate. Google's snippets come from authoritative sources with extensive
              verification. Perplexity synthesizes answers from multiple sources, which can occasionally introduce
              interpretation errors. For factual accuracy, check both - Google for authoritative sources,
              Perplexity for synthesized understanding with transparent citations.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Does Perplexity have ads?</h3>
            <p className="text-gray-400">
              No, Perplexity is completely ad-free on both free and Pro tiers. This is one of its major
              advantages over Google, providing a clean, distraction-free search experience focused purely
              on delivering answers.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Which is faster: Perplexity or Google?</h3>
            <p className="text-gray-400">
              Google is faster for simple queries (instant results). Perplexity takes 2-5 seconds to generate
              AI-synthesized answers, which is still fast but not instant. However, for research requiring
              visiting multiple pages, Perplexity's single synthesized answer often saves more total time.
            </p>
          </div>
        </div>
      </section>

      {/* Related Comparisons */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Related Comparisons</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link
            href="/claude-vs-gpt5"
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition"
          >
            <h3 className="font-semibold mb-2">Claude vs GPT-5</h3>
            <p className="text-sm text-gray-400">Compare AI language models</p>
          </Link>
          <Link
            href="/jasper-vs-chatgpt"
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition"
          >
            <h3 className="font-semibold mb-2">Jasper vs ChatGPT</h3>
            <p className="text-sm text-gray-400">Compare AI writing tools</p>
          </Link>
          <Link
            href="/chatgpt-alternatives"
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition"
          >
            <h3 className="font-semibold mb-2">ChatGPT Alternatives</h3>
            <p className="text-sm text-gray-400">Explore 15+ AI chatbots</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Explore More AI Search Tools</h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Discover more AI-powered search engines and research assistants beyond Perplexity and Google.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/category/search-engines"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Browse Search Tools
          </Link>
          <Link
            href="/"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            All AI Tools →
          </Link>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is Perplexity better than Google?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For research and complex questions requiring synthesized answers with citations, Perplexity is superior. Google is better for quick facts, shopping, maps, images, and specialized searches. Most users benefit from using both: Perplexity for research and deep dives, Google for everything else."
                }
              },
              {
                "@type": "Question",
                "name": "Can Perplexity replace Google?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Not entirely. Perplexity excels at answering questions and research but lacks Google's shopping, maps, local search, and image search capabilities. Many users use Perplexity as their primary search for questions and research, while keeping Google for specialized needs."
                }
              },
              {
                "@type": "Question",
                "name": "Is Perplexity Pro worth $20/month?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For researchers, students, and knowledge workers, yes. Pro unlocks unlimited Pro searches (300+ sources per query), file uploads, API access, and priority support. The free tier is generous, but heavy researchers will benefit from Pro's depth and speed."
                }
              }
            ]
          }),
        }}
      />
    </div>
  );
}
