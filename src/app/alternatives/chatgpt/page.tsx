import Link from "next/link";
import type { Metadata } from "next";

const year = 2026;

export const metadata: Metadata = {
  title: `Best ChatGPT Alternatives (${year}) — Top 5 AI Chatbots | AISO Tools`,
  description: `Looking for ChatGPT alternatives? Compare the 5 best AI assistants and LLMs with features, pricing, and pros & cons in ${year}.`,
  alternates: {
    canonical: "https://aisotools.com/alternatives/chatgpt",
  },
  openGraph: {
    title: `Best ChatGPT Alternatives (${year}) — Top 5 AI Chatbots`,
    description: `Compare the 5 best ChatGPT alternatives for coding, writing, research, and general AI assistance.`,
    url: "https://aisotools.com/alternatives/chatgpt",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `Best ChatGPT Alternatives (${year})`,
    description: `Top 5 ChatGPT alternatives for conversational AI and LLM tasks.`,
  },
};

const alternatives = [
  {
    rank: 1,
    name: "Claude",
    slug: "claude",
    url: "https://claude.ai",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free. Pro $20/mo",
    tagline: "The gold standard for reasoning and nuanced writing",
    description:
      "Claude, developed by Anthropic, is the most direct competitor to ChatGPT in terms of quality. It is widely praised for its 'human-like' writing style, superior reasoning capabilities, and massive context window. If you find ChatGPT too robotic or prone to 'lazy' responses, Claude is the primary alternative for high-quality prose and complex analysis.",
    features: [
      "Massive 200K+ token context window",
      "Exceptional reasoning and nuance",
      "Artifacts for real-time code/content preview",
      "High-fidelity document analysis",
      "Stronger adherence to complex instructions",
      "Reduced hallucinations in long-form text",
    ],
    whySwitchReasons: [
      "Better for long-form writing and creative prose",
      "Ability to process entire books or codebases in one prompt",
      "More thoughtful, less formulaic responses than GPT-4",
    ],
    bestFor: "Writers, researchers, and analysts who need deep reasoning and high-quality writing.",
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
    tagline: "Google's multimodal powerhouse with ecosystem integration",
    description:
      "Gemini is Google's answer to ChatGPT. Its biggest advantage is its deep integration with the Google Workspace (Docs, Gmail, Drive). Because it's built by Google, it has native access to real-time information and a multimodal architecture that allows it to 'see' and 'hear' with incredible efficiency.",
    features: [
      "Native Google Workspace integration",
      "Huge context window (up to 2M tokens in Pro)",
      "Multimodal native processing (video, audio, text)",
      "Direct integration with Google Search",
      "Fast response times on mobile",
      "Seamless transition between Gemini and Google apps",
    ],
    whySwitchReasons: [
      "Need to analyze data directly from Google Drive or Gmail",
      "Requirement for an AI that can process hours of video in one go",
      "Preference for the Google ecosystem over OpenAI's",
    ],
    bestFor: "Users heavily invested in Google Workspace and those needing extreme context windows.",
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
    tagline: "The AI search engine for real-time, cited answers",
    description:
      "Perplexity is not a general-purpose chatbot like ChatGPT, but an 'answer engine'. While ChatGPT generates text based on training data, Perplexity searches the live web and provides a cited summary of the results. It is the best choice for anyone who values accuracy, verification, and real-time data over creative generation.",
    features: [
      "Real-time web searching with citations",
      "Transparent source attribution for every claim",
      "Pro mode for agentic, multi-step research",
      "Ability to switch between different LLM backends",
      "Clean, research-focused UI",
      "Collections for organized knowledge management",
    ],
    whySwitchReasons: [
      "Sick of ChatGPT hallucinations; need verified sources",
      "Doing academic or professional research that requires citations",
      "Need the most up-to-the-minute information from the web",
    ],
    bestFor: "Researchers, journalists, and students who need a source-backed answer engine.",
    compareUrl: "/compare/chatgpt-vs-perplexity",
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
    tagline: "The real-time AI with a rebellious streak",
    description:
      "Grok, created by xAI, differentiates itself through its real-time access to the X (formerly Twitter) data stream. This makes it the fastest AI for tracking breaking news, trending topics, and public sentiment. It also has a 'fun mode' that provides more edgy, unfiltered responses compared to the heavily censored nature of ChatGPT.",
    features: [
      "Real-time access to the X platform data stream",
      "Less restrictive safety filters (unfiltered mode)",
      "Fast synthesis of breaking global events",
      "Deep integration with X social graph",
      "Direct interaction with Elon Musk's AI vision",
      "Sarcastic and witty personality options",
    ],
    whySwitchReasons: [
      "Need to know what is happening *right now* on social media",
      "Frustrated by the 'corporate' and overly cautious tone of ChatGPT",
      "Looking for an AI with a more direct and less filtered personality",
    ],
    bestFor: "News junkies, X power users, and those who prefer an unfiltered AI experience.",
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
    startingPrice: "Free. Pay-as-you-go API",
    tagline: "The powerhouse for coding and mathematics",
    description:
      "DeepSeek has emerged as a formidable alternative for technical users. While ChatGPT is a generalist, DeepSeek is highly optimized for coding and mathematical reasoning. It often outperforms larger models in technical benchmarks while remaining significantly cheaper (or even free) for a wide range of users.",
    features: [
      "SOTA performance in coding benchmarks",
      "Advanced mathematical reasoning capabilities",
      "Highly efficient and fast inference",
      "Strong open-weights heritage",
      "Excellent support for multiple programming languages",
      "Competitive pricing for API access",
    ],
    whySwitchReasons: [
      "Need an AI that is specifically tuned for heavy coding and math",
      "Looking for a high-performance alternative to GPT-4 for technical tasks",
      "Preference for a model with a strong open-source foundation",
    ],
    bestFor: "Software engineers, mathematicians, and data scientists.",
    compareUrl: "/compare/chatgpt-vs-deepseek",
  },
];

const faqs = [
  {
    question: "What is the best free alternative to ChatGPT?",
    answer:
      "Claude and Gemini both offer excellent free tiers that rival ChatGPT's capabilities. Claude is generally better for writing and reasoning, while Gemini is superior for those integrated into the Google ecosystem. For search-focused tasks, Perplexity's free tier is the best option for cited answers.",
  },
  {
    question: "Is Claude better than ChatGPT for writing?",
    answer:
      "Many users find Claude's writing style to be more natural and less 'AI-like' than ChatGPT's. Claude tends to be better at following complex stylistic instructions and produces prose that feels more human, making it a preferred choice for creative writing and professional drafting.",
  },
  {
    question: "Which AI is best for real-time information?",
    answer:
      "Perplexity and Grok are the leaders here. Perplexity is best for structured research with web citations, while Grok is the absolute fastest for breaking news and trending events due to its direct integration with the X (Twitter) data stream.",
  },
  {
    question: "Can I use an alternative to ChatGPT for coding?",
    answer:
      "Yes. While ChatGPT is great, Claude (with Artifacts) and DeepSeek are often cited as superior for complex coding tasks. DeepSeek, in particular, is optimized for technical reasoning and often provides more concise and accurate code for specialized programming challenges.",
  },
  {
    question: "Why would I switch from ChatGPT to Gemini?",
    answer:
      "The primary reason is the Google ecosystem. If you want an AI that can summarize your emails, find a document in your Drive, and then export a draft directly to Google Docs, Gemini is the only tool that provides that seamless, integrated experience.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Best ChatGPT Alternatives (${year})`,
    description: `Top 5 alternatives to ChatGPT for AI chat, writing, and coding.`,
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
      { "@type": "ListItem", position: 3, name: "ChatGPT Alternatives", item: "https://aisotools.com/alternatives/chatgpt" },
    ],
  },
];

export default function ChatGPTAlternativesPage() {
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
          <span className="text-gray-300">ChatGPT Alternatives</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-xl bg-blue-600/20 flex items-center justify-center text-2xl font-bold text-blue-400 mx-auto mb-6">
            C
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Best ChatGPT Alternatives in {year}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Compare the {alternatives.length} best alternatives to ChatGPT for conversational AI, complex reasoning, and productivity.
          </p>
          <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">
            <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
              ChatGPT: Freemium
            </span>
            <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
              💬 AI Chatbots
            </span>
          </div>
        </div>

        {/* Why Switch */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Why Look for ChatGPT Alternatives?</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            ChatGPT is the most famous AI in the world, but it isn&apos;t always the best tool for every job. Whether you need more nuanced writing, real-time cited research, or a tool that is deeply integrated into your professional ecosystem, there is likely an alternative that fits your workflow better.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { reason: "✍️ Nuanced Writing", detail: "ChatGPT can sometimes feel formulaic or 'robotic'. Claude provides a more human-like writing style and better reasoning for creative prose." },
              { reason: "🔍 Fact-Checking & Research", detail: "ChatGPT can hallucinate facts. Perplexity provides real-time web search with direct citations for every claim it makes." },
              { reason: "📁 Ecosystem Integration", detail: "If your life is in Google Docs and Gmail, Gemini's native integration provides a level of productivity ChatGPT cannot match." },
              { reason: "⚡ Real-Time Trends", detail: "For breaking news and social trends, Grok's direct access to the X data stream makes it significantly faster than GPT-4." },
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
          <h2 className="text-2xl font-bold mb-6">Quick Comparison: ChatGPT vs Alternatives</h2>
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
          <h2 className="text-2xl font-bold mb-6">Detailed Look at Each ChatGPT Alternative</h2>
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
                  <h4 className="font-semibold text-blue-400 mb-2">Why choose {alt.name} over ChatGPT?</h4>
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
            <Link href="/tool/chatgpt" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">📋 ChatGPT Review</h3>
              <p className="text-gray-400 text-sm">Full review with features, pros & cons</p>
            </Link>
            <Link href="/tool/claude" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">✍️ Claude</h3>
              <p className="text-gray-400 text-sm">Top-tier reasoning and creative writing</p>
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
