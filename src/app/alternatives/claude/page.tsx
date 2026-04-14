import Link from "next/link";
import type { Metadata } from "next";

const year = 2026;

export const metadata: Metadata = {
  title: `Best Claude Alternatives (${year}) — Top 5 AI Chatbots | AISO Tools`,
  description: `Looking for Claude alternatives? Compare the 5 best AI assistants and LLMs with features, pricing, and pros & cons in ${year}.`,
  alternates: {
    canonical: "https://aisotools.com/alternatives/claude",
  },
  openGraph: {
    title: `Best Claude Alternatives (${year}) — Top 5 AI Chatbots`,
    description: `Compare the 5 best Claude alternatives for coding, writing, research, and general AI assistance.`,
    url: "https://aisotools.com/alternatives/claude",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Claude Alternatives (${year})`,
    description: `Top 5 Claude alternatives for conversational AI and LLM tasks.`,
  },
};

const alternatives = [
  {
    rank: 1,
    name: "ChatGPT",
    slug: "chatgpt",
    url: "https://chat.openai.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free. Plus $20/mo",
    tagline: "The most versatile AI ecosystem in the world",
    description:
      "ChatGPT is the primary alternative to Claude. While Claude is often preferred for its nuance and writing style, ChatGPT offers a more robust ecosystem, including built-in image generation (DALL-E 3), a vast library of Custom GPTs, and generally faster iterations on new features. It is the best choice for users who want an all-in-one AI powerhouse.",
    features: [
      "Integrated DALL-E 3 image generation",
      "Custom GPTs for specialized workflows",
      "Advanced Voice Mode for natural conversation",
      "Strong general-purpose reasoning and coding",
      "Extensive plugin and integration ecosystem",
      "Fast and reliable mobile application",
    ],
    whySwitchReasons: [
      "Need a built-in image generator without switching tools",
      "Want to use community-made specialized GPTs",
      "Prefer a more 'direct' and less cautious tone in responses",
      "Need a more mature mobile app experience",
    ],
    bestFor: "General users who want a versatile, feature-rich AI assistant with image capabilities.",
    compareUrl: "/compare/chatgpt-vs-claude",
  },
  {
    rank: 2,
    name: "Gemini",
    slug: "gemini",
    url: "https://gemini.google.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free. Advanced $20/mo",
    tagline: "Google's multimodal AI with deep ecosystem integration",
    description:
      "Gemini is the best alternative for those who live in Google Workspace. While Claude has a massive context window, Gemini Pro's 2M token window is even larger, and its native integration with Gmail, Docs, and Drive allows it to process your personal data with a level of seamlessness Claude cannot match.",
    features: [
      "Deep Google Workspace (Gmail, Docs, Drive) integration",
      "Industry-leading 2M token context window in Pro",
      "Native multimodal processing of video and audio",
      "Direct access to real-time Google Search data",
      "Seamless transition across Google devices",
      "Fast performance on Android",
    ],
    whySwitchReasons: [
      "Need to summarize 100+ emails or a massive Google Drive folder",
      "Requirement for a truly multimodal AI that 'sees' video natively",
      "Deeply invested in the Google ecosystem for productivity",
      "Need a context window even larger than Claude's",
    ],
    bestFor: "Power users of Google Workspace and those dealing with extreme-scale context.",
    compareUrl: "/compare/chatgpt-vs-gemini",
  },
  {
    rank: 3,
    name: "Perplexity",
    slug: "perplexity",
    url: "https://perplexity.ai",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free. Pro $20/mo",
    tagline: "The AI answer engine for verified, real-time research",
    description:
      "Claude is a master of reasoning, but Perplexity is a master of discovery. Perplexity doesn't just 'know' things; it searches the live web and provides a cited summary. If you find yourself double-checking Claude's facts, Perplexity is the ideal alternative because it provides the source for every single claim.",
    features: [
      "Real-time web browsing with instant citations",
      "Transparent source attribution for every answer",
      "Pro mode for complex, multi-step research agents",
      "Ability to toggle between different LLM backends",
      "Clean, source-first user interface",
      "Collections for structured knowledge gathering",
    ],
    whySwitchReasons: [
      "Need absolute factual accuracy with verifiable sources",
      "Doing professional research that requires a bibliography",
      "Tired of AI hallucinations; need real-time web data",
      "Want to compare answers from different models in one UI",
    ],
    bestFor: "Researchers, journalists, and students who prioritize accuracy and citations over creative prose.",
    compareUrl: "/compare/perplexity-vs-claude",
  },
  {
    rank: 4,
    name: "Grok",
    slug: "grok",
    url: "https://x.ai",
    pricing: "Paid",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: false,
    startingPrice: "X Premium subscription required",
    tagline: "The real-time AI with unfiltered access to X",
    description:
      "Grok is the anti-Claude. Where Claude is careful, nuanced, and cautious, Grok is designed to be edgy, unfiltered, and real-time. Its primary advantage is direct, low-latency access to the X (Twitter) data stream, making it the best alternative for tracking breaking news and public sentiment.",
    features: [
      "Real-time access to X's global data stream",
      "Less restrictive safety filters (Fun Mode)",
      "Instant synthesis of trending topics and news",
      "Direct integration with the X social graph",
      "Unfiltered, witty, and often sarcastic personality",
      "Fast updates on breaking global events",
    ],
    whySwitchReasons: [
      "Need to know what is happening on social media *right now*",
      "Find Claude's safety guardrails too restrictive or 'preachy'",
      "Looking for an AI with a more bold and rebellious personality",
      "Focus on news, trends, and real-time public discourse",
    ],
    bestFor: "News junkies, social media managers, and users who prefer an unfiltered AI experience.",
    compareUrl: "/compare/chatgpt-vs-grok",
  },
  {
    rank: 5,
    name: "DeepSeek",
    slug: "deepseek",
    url: "https://deepseek.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free. Low-cost API",
    tagline: "The technical powerhouse for coding and mathematics",
    description:
      "Claude is excellent at coding, but DeepSeek is a specialized tool for the technical elite. It is highly optimized for mathematics and programming, often matching or beating larger models on technical benchmarks. For developers who need a high-performance, low-cost alternative to Claude for heavy lifting, DeepSeek is the answer.",
    features: [
      "SOTA performance in coding and math benchmarks",
      "Extremely efficient and fast inference speeds",
      "Deep support for a wide array of programming languages",
      "Strong open-weights heritage and transparency",
      "Competitive API pricing for high-volume tasks",
      "Highly concise and technical response style",
    ],
    whySwitchReasons: [
      "Need an AI specifically tuned for complex algorithmic coding",
      "Looking for a high-performance alternative that is cheaper via API",
      "Preference for a model with a focus on technical reasoning over prose",
      "Working on heavy mathematical or data science projects",
    ],
    bestFor: "Software engineers, data scientists, and mathematicians.",
    compareUrl: "/compare/deepseek-vs-claude",
  },
];

const faqs = [
  {
    question: "What is the best free alternative to Claude?",
    answer:
      "ChatGPT and Gemini both offer powerful free tiers. ChatGPT is better for general versatility and image generation, while Gemini is superior if you use Google Workspace. For research, Perplexity's free tier is the best for getting cited answers.",
  },
  {
    question: "Is ChatGPT better than Claude for coding?",
    answer:
      "It depends on the task. Claude is often praised for its nuanced understanding of complex architectures and better reasoning. However, ChatGPT's ecosystem and faster iterations on new features make it very competitive. For pure technical benchmarks and low-cost API use, DeepSeek is often the strongest alternative.",
  },
  {
    question: "Which AI has a larger context window than Claude?",
    answer:
      "While Claude's 200K context window is industry-leading, Google's Gemini Pro offers an even larger window, supporting up to 2 million tokens in some versions, making it the go-to for analyzing massive datasets or entire libraries of documentation.",
  },
  {
    question: "Why switch from Claude to Perplexity?",
    answer:
      "The main reason is verification. Claude is an LLM that can hallucinate facts. Perplexity is an answer engine that searches the live web and provides citations for every claim, making it far more reliable for factual research.",
  },
  {
    question: "Is Grok a good alternative for professional writing?",
    answer:
      "Generally, no. Claude is the gold standard for professional, nuanced writing. Grok is designed for real-time trends and a more 'edgy' personality, which is great for social media but less suited for formal reports or creative prose.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Best Claude Alternatives (${year})`,
    description: `Top 5 alternatives to Claude for AI chat, writing, and coding.`,
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
      { "@type": "ListItem", position: 3, name: "Claude Alternatives", item: "https://aisotools.com/alternatives/claude" },
    ],
  },
];

export default function ClaudeAlternativesPage() {
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
          <span className="text-gray-300">Claude Alternatives</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-xl bg-blue-600/20 flex items-center justify-center text-2xl font-bold text-blue-400 mx-auto mb-6">
            C
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Best Claude Alternatives in {year}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Compare the {alternatives.length} best alternatives to Claude for high-quality reasoning, nuanced writing, and productivity.
          </p>
          <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">
            <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
              Claude: Freemium
            </span>
            <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
              💬 AI Chatbots
            </span>
          </div>
        </div>

        {/* Why Switch */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Why Look for Claude Alternatives?</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Claude is widely regarded as the best for nuance, reasoning, and human-like prose. However, depending on your specific needs—whether it&apos;s real-time search, an integrated ecosystem, or an unfiltered personality—there are other LLMs that might serve your workflow better.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { reason: "🛠️ Ecosystem & Tools", detail: "Claude is great at text, but lacks a built-in image generator or a vast library of community-made plugins like ChatGPT." },
              { reason: "🔍 Real-Time Verification", detail: "Claude can hallucinate. Perplexity provides a cited, source-backed approach to AI search that is essential for factual research." },
              { reason: "🌐 Google Integration", detail: "If your productivity is tied to Google Workspace, Gemini's native integration with Drive and Gmail is a game-changer." },
              { reason: "⚡ Breaking News", detail: "Claude is a thinker, not a news reporter. Grok's real-time X integration makes it significantly faster for tracking current events." },
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
          <h2 className="text-2xl font-bold mb-6">Quick Comparison: Claude vs Alternatives</h2>
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
          <h2 className="text-2xl font-bold mb-6">Detailed Look at Each Claude Alternative</h2>
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
                  <h4 className="font-semibold text-blue-400 mb-2">Why choose {alt.name} over Claude?</h4>
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
            <Link href="/tool/claude" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">📋 Claude Review</h3>
              <p className="text-gray-400 text-sm">Full review with features, pros & cons</p>
            </Link>
            <Link href="/tool/chatgpt" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">✍️ ChatGPT</h3>
              <p className="text-gray-400 text-sm">The most versatile AI assistant</p>
            </Link>
            <Link href="/tool/perplexity" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">🔍 Perplexity</h3>
              <p className="text-gray-400 text-sm">Real-time search with citations</p>
            </Link>
            <Link href="/compare/chatgpt-vs-claude" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">⚖️ ChatGPT vs Claude</h3>
              <p className="text-gray-400 text-sm">The battle of the two biggest LLMs</p>
            </Link>
            <Link href="/category/chatbots" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">💬 AI Chatbots</h3>
              <p className="text-gray-400 text-sm">Browse all AI chat and assistant tools</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
