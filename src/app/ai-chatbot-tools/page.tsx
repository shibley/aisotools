import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Chatbots 2026 — Top 10 Compared (Free Tiers, Features)",
  description:
    "Compare the 10 best AI chatbots of 2026: ChatGPT, Claude, Gemini, Perplexity, Copilot, Grok, and more. Side-by-side comparison of free tiers, context windows, capabilities, and best use cases.",
  keywords: [
    "best AI chatbots",
    "AI chatbot comparison",
    "best AI chatbot 2026",
    "ChatGPT vs Claude vs Gemini",
    "AI chatbot tools",
    "free AI chatbot",
    "AI assistant comparison",
    "Perplexity vs ChatGPT",
    "Claude AI chatbot",
    "Grok AI",
  ],
  openGraph: {
    title: "Best AI Chatbots 2026 — Top 10 Compared",
    description:
      "Side-by-side comparison of the 10 best AI chatbots: free tiers, context windows, specialties, and which to choose.",
    url: "https://aisotools.com/ai-chatbot-tools",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/ai-chatbot-tools",
  },
};

interface Chatbot {
  name: string;
  slug?: string;
  tagline: string;
  maker: string;
  model: string;
  description: string;
  freeTier: string;
  paidTier: string;
  contextWindow: string;
  specialties: string[];
  weaknesses: string[];
  bestFor: string;
  url: string;
  highlight?: boolean;
  badge?: string;
}

const chatbots: Chatbot[] = [
  {
    name: "ChatGPT",
    slug: "chatgpt",
    tagline: "The most popular AI chatbot in the world",
    maker: "OpenAI",
    model: "GPT-4o (paid) / GPT-4o mini (free)",
    description:
      "ChatGPT remains the most widely used AI chatbot with the largest ecosystem of plugins, GPTs, and integrations. Its free tier with GPT-4o mini handles most everyday tasks, while Plus unlocks GPT-4o with vision, voice, image generation, and web browsing.",
    freeTier: "Unlimited messages with GPT-4o mini. Limited GPT-4o messages. No plugins.",
    paidTier: "$20/mo (Plus) · $25/seat/mo (Team) · Custom (Enterprise)",
    contextWindow: "128K tokens (GPT-4o)",
    specialties: ["Versatile all-rounder", "Largest plugin/GPT ecosystem", "Voice mode", "Vision", "DALL-E 3 image generation", "Code interpreter"],
    weaknesses: ["Free tier limited to mini model", "No real-time web on free", "Hallucinations with facts"],
    bestFor: "Most users who want a versatile, well-supported AI assistant",
    url: "https://chat.openai.com",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Claude",
    slug: "claude",
    tagline: "Best for long documents and nuanced reasoning",
    maker: "Anthropic",
    model: "Claude 3.5 Sonnet / Claude 3.5 Haiku",
    description:
      "Claude by Anthropic is renowned for its nuanced reasoning, safety-focused design, and exceptional long-document handling. Its 200K token context window lets it read and analyze entire codebases, legal documents, and books in one session. Projects feature maintains context across conversations.",
    freeTier: "Access to Claude 3.5 Sonnet with daily message limits. No Projects on free.",
    paidTier: "$20/mo (Pro) · $25/seat/mo (Team) · Custom (Enterprise)",
    contextWindow: "200K tokens",
    specialties: ["Longest context window", "Best for documents & analysis", "Superior code reasoning", "Nuanced writing", "Projects for persistent context"],
    weaknesses: ["Rate limits on free tier", "No image generation", "No real-time web browsing"],
    bestFor: "Long document analysis, complex reasoning, academic research, coding",
    url: "https://claude.ai",
    highlight: true,
    badge: "Best Reasoning",
  },
  {
    name: "Gemini",
    slug: "gemini",
    tagline: "Google's multimodal AI with real-time search",
    maker: "Google DeepMind",
    model: "Gemini 1.5 Pro / Gemini Flash",
    description:
      "Google Gemini offers the most generous free tier of any major AI chatbot — full access to Gemini Pro with real-time Google Search integration, 1M token context, and deep integration with Google Workspace (Gmail, Docs, Drive). Essential for Google users.",
    freeTier: "Full Gemini Pro access, unlimited messages, real-time search, Workspace integration.",
    paidTier: "$20/mo (Advanced, via Google One) · $30/seat/mo (Workspace Business)",
    contextWindow: "1M tokens (Gemini 1.5 Pro)",
    specialties: ["Best free tier of any major chatbot", "Real-time Google Search", "1M token context (Advanced)", "Google Workspace integration", "Multimodal (images, video, audio)"],
    weaknesses: ["Advanced features need Google One", "Less strong coding vs Claude/ChatGPT", "Privacy concerns with Google"],
    bestFor: "Google Workspace users, research with web access, free comprehensive AI",
    url: "https://gemini.google.com",
    highlight: true,
  },
  {
    name: "Perplexity",
    slug: "perplexity",
    tagline: "AI search engine with cited sources",
    maker: "Perplexity AI",
    model: "Multiple (GPT-4o, Claude, Sonar)",
    description:
      "Perplexity isn't a traditional chatbot — it's an AI-powered search engine that answers questions with cited sources from the web. Every answer includes references you can verify, making it the most trustworthy option for factual research.",
    freeTier: "Unlimited searches with citations. Limited Pro searches (with GPT-4o/Claude).",
    paidTier: "$20/mo (Pro) · API access available",
    contextWindow: "Varies by model",
    specialties: ["Always cites sources", "Real-time web search", "Factual accuracy", "Academic and research focus", "Collections for organizing research"],
    weaknesses: ["Not great for creative tasks", "No persistent memory/context", "Pro searches limited on free tier"],
    bestFor: "Research, fact-checking, finding up-to-date information with sources",
    url: "https://perplexity.ai",
    highlight: true,
  },
  {
    name: "Microsoft Copilot",
    slug: "microsoft-copilot",
    tagline: "GPT-4 for free with Microsoft integration",
    maker: "Microsoft / OpenAI",
    model: "GPT-4o + DALL-E 3",
    description:
      "Microsoft Copilot gives you GPT-4o capabilities for free through Bing, with real-time web access, DALL-E 3 image generation, and deep integration with Microsoft 365. The best option if you're already in the Microsoft ecosystem.",
    freeTier: "Unlimited GPT-4o access, DALL-E 3 image generation (150 boosts/day), web search.",
    paidTier: "$20/mo (Pro) · Included with Microsoft 365 plans",
    contextWindow: "128K tokens",
    specialties: ["Free GPT-4o access", "DALL-E 3 image generation for free", "Real-time Bing web search", "Microsoft 365 integration", "Designer for image editing"],
    weaknesses: ["Microsoft account required", "Safety filters can be overly restrictive", "Best features need Microsoft 365"],
    bestFor: "Microsoft 365 users, anyone wanting free GPT-4 quality access",
    url: "https://copilot.microsoft.com",
  },
  {
    name: "Grok",
    slug: "grok",
    tagline: "xAI's real-time AI with X/Twitter access",
    maker: "xAI (Elon Musk)",
    model: "Grok-2",
    description:
      "Grok by xAI has unique access to real-time X (Twitter) data and takes a less restrictive approach to content compared to competitors. Grok 2 significantly improved its capabilities and is now competitive with GPT-4 class models.",
    freeTier: "Limited access for X users. Full access requires X Premium subscription.",
    paidTier: "$8/mo (X Premium) · $16/mo (X Premium+) · API access",
    contextWindow: "128K tokens",
    specialties: ["Real-time X/Twitter data", "Less content restrictions", "Fun personality", "Real-time news", "Aurora image generation"],
    weaknesses: ["Requires X Premium subscription for full access", "Privacy concerns with Elon Musk ownership", "Smaller ecosystem than ChatGPT"],
    bestFor: "X/Twitter power users, real-time news and social media analysis",
    url: "https://grok.com",
  },
  {
    name: "Pi",
    slug: "pi-ai",
    tagline: "Empathetic AI for personal conversations",
    maker: "Inflection AI",
    model: "Inflection-2.5",
    description:
      "Pi by Inflection AI takes a different approach — it's optimized for personal, empathetic conversation rather than task completion. It asks follow-up questions, remembers your preferences, and is designed for ongoing personal interaction rather than one-off queries.",
    freeTier: "Completely free — unlimited messages, voice chat, no restrictions.",
    paidTier: "Currently no paid tier",
    contextWindow: "Conversation-level",
    specialties: ["Empathetic personal conversation", "Free voice chat", "Remembers preferences across sessions", "No usage limits", "Supportive and encouraging tone"],
    weaknesses: ["Not designed for technical tasks", "Poor at coding or data analysis", "Limited integrations"],
    bestFor: "Personal conversations, emotional support, journaling, life advice",
    url: "https://pi.ai",
  },
  {
    name: "Poe",
    slug: "poe",
    tagline: "Platform to access all major AI models",
    maker: "Quora",
    model: "Multiple (GPT-4o, Claude, Gemini, Llama, etc.)",
    description:
      "Poe is a unique platform that gives you access to dozens of AI models — ChatGPT, Claude, Gemini, Llama, Mistral, and more — from a single interface. Build custom chatbots, share them, and try different models side by side.",
    freeTier: "Limited daily messages across models. Access to some free models unlimited.",
    paidTier: "$20/mo (Pro) — unlimited access to premium models",
    contextWindow: "Varies by model",
    specialties: ["Access to 20+ AI models in one place", "Build and share custom chatbots", "Compare models side by side", "Llama and open-source models", "Bot sharing community"],
    weaknesses: ["Daily limits on free tier", "Not the best interface for any single model", "Expensive for heavy use"],
    bestFor: "Users who want to explore and compare multiple AI models",
    url: "https://poe.com",
  },
  {
    name: "HuggingChat",
    slug: "huggingchat",
    tagline: "Free and open-source AI chatbot",
    maker: "Hugging Face",
    model: "Multiple open-source (Llama, Mixtral, Zephyr)",
    description:
      "HuggingChat from Hugging Face gives you free, unlimited access to multiple open-source AI models including Meta Llama, Mixtral, and others. No account required, no limits, and fully transparent about which models are running.",
    freeTier: "Completely free — unlimited messages, multiple models, no account needed.",
    paidTier: "Free (Hugging Face infrastructure) · Pro for API access",
    contextWindow: "Varies by model (typically 32K–128K)",
    specialties: ["Completely free with no limits", "Open-source and transparent", "Multiple model options", "No account required", "Privacy-focused"],
    weaknesses: ["Lower quality than GPT-4 or Claude", "Slower response times", "Less polished UX"],
    bestFor: "Privacy-conscious users, developers exploring open-source models, budget users",
    url: "https://huggingface.co/chat",
  },
  {
    name: "Mistral Le Chat",
    slug: "mistral-le-chat",
    tagline: "European AI chatbot with strong reasoning",
    maker: "Mistral AI",
    model: "Mistral Large / Mistral Small",
    description:
      "Mistral Le Chat is the consumer interface for Mistral AI — Europe's leading AI startup. Mistral Large competes with GPT-4 on reasoning benchmarks, and Le Chat offers a clean, fast interface with web search. A strong privacy-focused alternative to US-based AI.",
    freeTier: "Generous free tier with Mistral Small and some Large access. Web search included.",
    paidTier: "$14.99/mo (Pro) with full Large model access and higher limits",
    contextWindow: "128K tokens",
    specialties: ["Strong reasoning and coding", "European data privacy", "Fast response times", "Web search included", "Multilingual strength (especially European languages)"],
    weaknesses: ["Smaller ecosystem than OpenAI/Anthropic", "Less multimodal than competitors", "Fewer integrations"],
    bestFor: "European users, privacy-conscious professionals, multilingual tasks",
    url: "https://chat.mistral.ai",
  },
];

const comparisonTable = [
  { name: "ChatGPT", freeTier: "Limited GPT-4o + unlimited mini", context: "128K", webSearch: "✓ (paid)", imageGen: "✓ (paid)", voice: "✓", bestFor: "All-purpose" },
  { name: "Claude", freeTier: "Limited Claude 3.5 Sonnet", context: "200K", webSearch: "✗", imageGen: "✗", voice: "✗", bestFor: "Analysis & docs" },
  { name: "Gemini", freeTier: "Unlimited Gemini Pro", context: "1M+", webSearch: "✓ (free)", imageGen: "Limited", voice: "✓", bestFor: "Google users" },
  { name: "Perplexity", freeTier: "Unlimited basic searches", context: "Varies", webSearch: "✓ (free)", imageGen: "✗", voice: "✗", bestFor: "Research" },
  { name: "Copilot", freeTier: "Unlimited GPT-4o", context: "128K", webSearch: "✓ (free)", imageGen: "✓ (free)", voice: "✓", bestFor: "Microsoft users" },
  { name: "Grok", freeTier: "Limited (X Premium needed)", context: "128K", webSearch: "✓ (X data)", imageGen: "✓", voice: "✗", bestFor: "X/Twitter users" },
  { name: "Pi", freeTier: "Unlimited, fully free", context: "Conv.", webSearch: "✗", imageGen: "✗", voice: "✓ (free)", bestFor: "Personal chat" },
  { name: "Poe", freeTier: "Daily limits on premium", context: "Varies", webSearch: "✓ (some)", imageGen: "✓ (some)", voice: "✗", bestFor: "Model explorer" },
  { name: "HuggingChat", freeTier: "Unlimited, no account needed", context: "32K–128K", webSearch: "✓", imageGen: "✗", voice: "✗", bestFor: "Open-source fans" },
  { name: "Mistral Le Chat", freeTier: "Generous free tier", context: "128K", webSearch: "✓ (free)", imageGen: "✗", voice: "✗", bestFor: "European users" },
];

const faqs = [
  {
    question: "What is the best AI chatbot in 2026?",
    answer:
      "There's no single 'best' chatbot — it depends on your needs. ChatGPT is the most versatile all-rounder with the largest ecosystem. Claude is best for long documents and nuanced reasoning. Gemini offers the most generous free tier with real-time web access. Perplexity is best for research with cited sources. Microsoft Copilot gives free GPT-4 quality with image generation. Most power users use 2–3 chatbots for different tasks.",
  },
  {
    question: "Which AI chatbot has the best free tier?",
    answer:
      "Google Gemini offers the most generous free tier — full Gemini Pro access with unlimited messages, real-time web search, and Google Workspace integration. Microsoft Copilot is a close second with free GPT-4o access and DALL-E 3 image generation. HuggingChat and Pi are completely free with no limits. ChatGPT's free tier is competitive but limited to GPT-4o mini.",
  },
  {
    question: "ChatGPT vs Claude — which is better?",
    answer:
      "Both are excellent but have different strengths. ChatGPT has a larger ecosystem (plugins, custom GPTs), image generation via DALL-E 3, and voice mode. Claude excels at nuanced reasoning, long document analysis (200K context), and producing more thoughtful, nuanced writing. Many professionals use both: ChatGPT for quick tasks and creative work, Claude for analysis and long-form writing.",
  },
  {
    question: "Which AI chatbot is best for coding?",
    answer:
      "For conversational AI coding help, Claude is generally ranked highest for code reasoning and explanation. ChatGPT with GPT-4o is close behind. For integrated coding tools in your IDE, GitHub Copilot, Cursor, or Codeium are better choices. Perplexity is great for finding coding documentation and solutions with citations.",
  },
  {
    question: "Are AI chatbots safe to use?",
    answer:
      "Major AI chatbots from reputable companies (OpenAI, Anthropic, Google, Microsoft) are generally safe to use. Main safety considerations: avoid sharing highly sensitive personal information, financial details, or passwords. Outputs can contain errors — always verify important information. For enterprise use, check each company's data processing and privacy policies, as most train on user data by default (often opt-out available).",
  },
  {
    question: "What's the difference between AI chatbots and AI search engines like Perplexity?",
    answer:
      "Traditional AI chatbots (ChatGPT, Claude) generate responses from training data and may have knowledge cutoffs. AI search engines (Perplexity, Bing/Copilot) retrieve real-time information from the web and cite sources, making them more accurate for current events and factual queries. Many chatbots now offer optional web search, blurring the distinction.",
  },
];

export default function AIChatbotToolsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                headline: "Best AI Chatbots 2026 — Top 10 Compared",
                description:
                  "Side-by-side comparison of the 10 best AI chatbots: ChatGPT, Claude, Gemini, Perplexity, Copilot, Grok, Pi, Poe, HuggingChat, and Mistral Le Chat.",
                author: { "@type": "Organization", name: "AISO Tools" },
                publisher: { "@type": "Organization", name: "AISO Tools", url: "https://aisotools.com" },
                datePublished: "2026-01-01",
                dateModified: "2026-02-01",
                url: "https://aisotools.com/ai-chatbot-tools",
              },
              {
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: { "@type": "Answer", text: faq.answer },
                })),
              },
            ],
          }),
        }}
      />

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-white">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/directory" className="hover:text-white">AI Tools</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Best AI Chatbots 2026</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Best AI Chatbots 2026 — Top 10 Compared
        </h1>
        <p className="text-xl text-gray-400 max-w-4xl">
          Comprehensive comparison of the 10 best AI chatbots in 2026. Compare free tiers, context
          windows, capabilities, web access, image generation, and specialties to find the right AI
          assistant for your needs.
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
            💬 Chatbot Comparison
          </span>
          <span className="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm font-medium">
            📈 33,100 searches/mo
          </span>
          <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
            Updated February 2026
          </span>
          <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
            10 Chatbots Compared
          </span>
        </div>
      </header>

      {/* Intro */}
      <section className="prose prose-invert max-w-none mb-12">
        <h2 className="text-3xl font-bold mb-4">The AI Chatbot Landscape in 2026</h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          The AI chatbot market has never been more competitive or more capable. ChatGPT, Claude, and
          Gemini now offer GPT-4 class intelligence, and several offer powerful free tiers that were
          unimaginable just two years ago.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          Choosing the right chatbot comes down to your specific use case: research with citations,
          long document analysis, creative writing, coding, or just an always-available personal assistant.
          This guide helps you pick the right tool — or combination — for your needs.
        </p>
      </section>

      {/* Quick Comparison Table */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">AI Chatbot Comparison Table 2026</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-gray-900 border border-gray-800 rounded-xl text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Chatbot</th>
                <th className="px-4 py-3 text-left font-semibold">Free Tier</th>
                <th className="px-4 py-3 text-left font-semibold">Context</th>
                <th className="px-4 py-3 text-center font-semibold">Web Search</th>
                <th className="px-4 py-3 text-center font-semibold">Image Gen</th>
                <th className="px-4 py-3 text-center font-semibold">Voice</th>
                <th className="px-4 py-3 text-left font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {comparisonTable.map((item, i) => (
                <tr key={i} className="hover:bg-gray-800/50 transition">
                  <td className="px-4 py-3 font-medium">{item.name}</td>
                  <td className="px-4 py-3 text-gray-400 text-xs">{item.freeTier}</td>
                  <td className="px-4 py-3 text-gray-400">{item.context}</td>
                  <td className="px-4 py-3 text-center">{item.webSearch}</td>
                  <td className="px-4 py-3 text-center">{item.imageGen}</td>
                  <td className="px-4 py-3 text-center">{item.voice}</td>
                  <td className="px-4 py-3 text-gray-400 text-xs">{item.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Individual Chatbot Reviews */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">In-Depth AI Chatbot Reviews</h2>
        <div className="space-y-8">
          {chatbots.map((bot, index) => (
            <article
              key={bot.name}
              id={bot.slug || bot.name.toLowerCase().replace(/\s+/g, "-")}
              className={`bg-gray-900 border rounded-xl p-6 md:p-8 scroll-mt-24 ${
                bot.highlight ? "border-blue-500/30 ring-1 ring-blue-500/20" : "border-gray-800"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-gray-600">#{index + 1}</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-bold">{bot.name}</h3>
                      {bot.badge && (
                        <span className="bg-blue-600/20 text-blue-400 text-xs px-2 py-1 rounded-full font-medium">
                          {bot.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm">by {bot.maker} · Model: {bot.model}</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-blue-400 font-medium mb-3">{bot.tagline}</p>
              <p className="text-gray-400 mb-6 leading-relaxed">{bot.description}</p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <span className="text-xs font-semibold text-green-400 uppercase tracking-wide">🆓 Free Tier</span>
                  <p className="text-sm text-gray-300 mt-2">{bot.freeTier}</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">💳 Paid Plans</span>
                  <p className="text-sm text-gray-300 mt-2">{bot.paidTier}</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">📏 Context Window</span>
                  <p className="text-sm text-gray-300 mt-2">{bot.contextWindow}</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-wide">🎯 Best For</span>
                  <p className="text-sm text-gray-300 mt-2">{bot.bestFor}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="text-sm font-semibold text-green-400 mb-2">✓ Strengths</h4>
                  <ul className="space-y-1">
                    {bot.specialties.map((s, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-green-400 mt-0.5 shrink-0">+</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-red-400 mb-2">✗ Weaknesses</h4>
                  <ul className="space-y-1">
                    {bot.weaknesses.map((w, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-red-400 mt-0.5 shrink-0">−</span>
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={bot.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center px-4 py-2 rounded-lg text-sm font-medium transition"
                >
                  Try {bot.name} Free →
                </a>
                {bot.slug && (
                  <Link
                    href={`/tool/${bot.slug}`}
                    className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                  >
                    Full Review
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* How to Choose */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Which AI Chatbot Should You Choose?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Choose ChatGPT if you need:</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><span className="text-blue-400">→</span> The most versatile, all-purpose AI assistant</li>
              <li className="flex items-center gap-2"><span className="text-blue-400">→</span> Image generation (DALL-E 3)</li>
              <li className="flex items-center gap-2"><span className="text-blue-400">→</span> Voice conversation mode</li>
              <li className="flex items-center gap-2"><span className="text-blue-400">→</span> Custom GPTs and a large plugin ecosystem</li>
            </ul>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Choose Claude if you need:</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><span className="text-purple-400">→</span> Analyzing long documents or codebases</li>
              <li className="flex items-center gap-2"><span className="text-purple-400">→</span> Nuanced reasoning and thoughtful writing</li>
              <li className="flex items-center gap-2"><span className="text-purple-400">→</span> Complex coding tasks and architecture review</li>
              <li className="flex items-center gap-2"><span className="text-purple-400">→</span> 200K context for massive context needs</li>
            </ul>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Choose Gemini if you need:</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><span className="text-green-400">→</span> The best free tier with no daily limits</li>
              <li className="flex items-center gap-2"><span className="text-green-400">→</span> Real-time web access for free</li>
              <li className="flex items-center gap-2"><span className="text-green-400">→</span> Deep Google Workspace integration</li>
              <li className="flex items-center gap-2"><span className="text-green-400">→</span> 1M+ token context (Advanced plan)</li>
            </ul>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Choose Perplexity if you need:</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><span className="text-orange-400">→</span> Factual research with cited sources</li>
              <li className="flex items-center gap-2"><span className="text-orange-400">→</span> Up-to-date information on current events</li>
              <li className="flex items-center gap-2"><span className="text-orange-400">→</span> Verify information before citing it</li>
              <li className="flex items-center gap-2"><span className="text-orange-400">→</span> Academic research and literature discovery</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
              <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA + Cross-links */}
      <section className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/20 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Explore More AI Tool Categories</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Looking beyond chatbots? Explore our other AI tool guides for developers, marketers, students, and more.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/best-free-ai-tools" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-medium transition">
            Best Free AI Tools →
          </Link>
          <Link href="/best-ai-tools-for-developers" className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-3 rounded-lg font-medium transition">
            AI for Developers →
          </Link>
          <Link href="/best-ai-tools-for-marketing" className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-3 rounded-lg font-medium transition">
            AI for Marketing →
          </Link>
          <Link href="/best-ai-tools-for-students" className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-3 rounded-lg font-medium transition">
            AI for Students →
          </Link>
          <Link href="/best-ai-video-tools" className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-3 rounded-lg font-medium transition">
            AI Video Tools →
          </Link>
        </div>
      </section>
    </div>
  );
}
