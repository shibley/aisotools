import Link from "next/link";
import type { Metadata } from "next";
import { getAffiliateUrl } from "@/data/affiliate-links";

export const metadata: Metadata = {
  title: "Best Free Claude AI Alternatives in 2026 (Tested & Ranked)",
  description:
    "The best free Claude AI alternatives in 2026 — ChatGPT, Gemini, Copilot, DeepSeek, Perplexity, and more. Tested on free tiers with honest comparisons.",
  keywords: [
    "claude ai alternatives",
    "free claude alternatives",
    "claude alternative free",
    "best claude alternative 2026",
    "claude ai free alternative",
    "alternatives to claude ai",
    "claude anthropic alternatives",
    "free ai like claude",
  ],
  openGraph: {
    title: "Best Free Claude AI Alternatives in 2026 (Tested & Ranked)",
    description:
      "10+ free Claude alternatives compared — ChatGPT, Gemini, Copilot, DeepSeek, and more. Find the best free AI for writing, coding, and research.",
    url: "https://aisotools.com/blog/free-claude-alternatives-2026",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/blog/free-claude-alternatives-2026",
  },
};

interface FreeAlternative {
  rank: number;
  name: string;
  slug: string;
  tagline: string;
  freeTier: string;
  paidFrom?: string;
  bestFor: string;
  strengths: string[];
  limitations: string[];
  requiresSignup: boolean;
  badge?: string;
}

const alternatives: FreeAlternative[] = [
  {
    rank: 1,
    name: "ChatGPT",
    slug: "chatgpt",
    tagline: "Most popular Claude alternative — GPT-4o mini free, GPT-4o limited",
    freeTier: "Unlimited GPT-4o mini, limited GPT-4o messages daily",
    paidFrom: "$20/mo Plus",
    bestFor: "General tasks, plugins, image generation, GPT Store access",
    strengths: [
      "Massive ecosystem — 1,000+ custom GPTs and plugins",
      "DALL-E 3 image generation on free tier (limited)",
      "Strong coding with code interpreter",
      "Voice mode on mobile (free)",
      "Widest third-party integrations",
    ],
    limitations: [
      "Free tier uses GPT-4o mini, not the full GPT-4o",
      "Rate limits hit faster than Claude's free tier",
      "Context window shorter than Claude (128K vs 200K)",
    ],
    requiresSignup: true,
    badge: "Most Popular",
  },
  {
    rank: 2,
    name: "Google Gemini",
    slug: "gemini",
    tagline: "Best free Claude alternative for long documents and Google users",
    freeTier: "Unlimited Gemini 1.5 Flash, limited Gemini 2.0 Pro",
    paidFrom: "$19.99/mo Advanced",
    bestFor: "Long documents (1M context), multimodal tasks, Google Workspace",
    strengths: [
      "1M token context window — the longest of any free AI",
      "Deep integration with Gmail, Docs, Drive, YouTube",
      "Handles images, audio, and video natively",
      "Real-time Google Search integration",
      "Gemini 2.0 Flash rivals Claude on speed and quality",
    ],
    limitations: [
      "Gemini 2.0 Pro capped on free tier",
      "Writing quality below Claude for nuanced prose",
      "Advanced Workspace features require paid plan",
    ],
    requiresSignup: true,
    badge: "1M Context Window",
  },
  {
    rank: 3,
    name: "Microsoft Copilot",
    slug: "microsoft-copilot",
    tagline: "Free GPT-4o access — no account required",
    freeTier: "Unlimited GPT-4o via Copilot (no account needed)",
    paidFrom: "$20/mo Pro",
    bestFor: "Research with web citations, Office 365 users, no-login AI",
    strengths: [
      "Powered by GPT-4o — Claude-level quality, free",
      "Real-time Bing search with cited sources",
      "No account required to start chatting",
      "Free DALL-E 3 image generation",
      "Built into Windows 11 and Edge browser",
    ],
    limitations: [
      "Context window shorter than Claude",
      "More conservative on creative/edgy content",
      "Conversation length limited per session",
    ],
    requiresSignup: false,
    badge: "No Signup Needed",
  },
  {
    rank: 4,
    name: "DeepSeek",
    slug: "deepseek",
    tagline: "Best free Claude alternative for coding and reasoning",
    freeTier: "Unlimited DeepSeek-V3 + R1 reasoning model (web chat)",
    paidFrom: "API only (very cheap per token)",
    bestFor: "Coding, math, complex reasoning, chain-of-thought problems",
    strengths: [
      "DeepSeek-R1 shows full reasoning chain (better than Claude for hard problems)",
      "Rivals GPT-4o on coding benchmarks — completely free",
      "V3 model is one of the most capable open models available",
      "API free tier for developers experimenting",
      "Transparent thinking process is genuinely useful for debugging",
    ],
    limitations: [
      "Data privacy concerns (Chinese-owned, data may be stored in China)",
      "Web UI less polished than Claude",
      "Rate limits during peak hours",
    ],
    requiresSignup: true,
    badge: "Best for Coding",
  },
  {
    rank: 5,
    name: "Perplexity",
    slug: "perplexity",
    tagline: "Best free Claude alternative for research with citations",
    freeTier: "Unlimited searches, 5 Pro queries/day (uses Claude/GPT)",
    paidFrom: "$20/mo Pro",
    bestFor: "Research, fact-checking, current events, cited answers",
    strengths: [
      "Every answer includes numbered source citations",
      "Real-time web search — current information always",
      "Academic mode searches PubMed, arXiv, and journals",
      "Follow-up questions maintain research context",
      "Pro mode actually uses Claude Sonnet or GPT-4o (5 queries/day free)",
    ],
    limitations: [
      "Not ideal for creative writing or document editing",
      "Pro searches capped at 5/day on free tier",
      "Less conversational than Claude",
    ],
    requiresSignup: true,
  },
  {
    rank: 6,
    name: "Grok",
    slug: "grok",
    tagline: "Free Claude alternative with real-time X/Twitter data",
    freeTier: "Limited daily access via X (requires X account)",
    paidFrom: "$8/mo X Premium",
    bestFor: "Social media analysis, trending topics, less filtered responses",
    strengths: [
      "Real-time X (Twitter) data — unique to Grok",
      "Less content restrictions than Claude",
      "Grok 3 is highly capable on reasoning tasks",
      "Unique for tracking social media trends and viral content",
    ],
    limitations: [
      "Requires X (Twitter) account",
      "Free daily query limits are low",
      "Less capable at long-form writing vs Claude",
    ],
    requiresSignup: true,
  },
  {
    rank: 7,
    name: "Meta AI",
    slug: "meta-ai",
    tagline: "Completely free Claude alternative built into WhatsApp and Instagram",
    freeTier: "Completely free, unlimited usage, no account needed on Meta platforms",
    paidFrom: "Free (ad-supported)",
    bestFor: "Quick questions, integrated social media use, zero-cost AI",
    strengths: [
      "Zero cost — no subscription, ever",
      "Works directly inside WhatsApp, Instagram, Facebook",
      "Llama 3.1 405B powering responses",
      "Image generation included (Meta's Imagine tool)",
      "Real-time web search enabled",
    ],
    limitations: [
      "Less capable than Claude on complex tasks",
      "Privacy concerns (Meta trains on interactions)",
      "Standalone app less polished than claude.ai",
    ],
    requiresSignup: false,
    badge: "Completely Free",
  },
  {
    rank: 8,
    name: "Mistral Chat",
    slug: "mistral",
    tagline: "Privacy-focused Claude alternative from European AI leader",
    freeTier: "Unlimited Le Chat (Mistral Small/Medium, no rate limits stated)",
    paidFrom: "$14.99/mo Pro",
    bestFor: "Privacy-conscious users, EU/GDPR compliance, multilingual tasks",
    strengths: [
      "European company — GDPR compliant, no US data jurisdiction",
      "Mistral Large 2 available on free tier",
      "Strong multilingual support (French, German, Spanish, Italian)",
      "Artifact/canvas mode for document editing",
      "Very fast response times",
    ],
    limitations: [
      "Smaller ecosystem than Claude or ChatGPT",
      "Less capable on highly nuanced creative writing",
      "Fewer integrations and plugins",
    ],
    requiresSignup: true,
  },
  {
    rank: 9,
    name: "Poe",
    slug: "poe",
    tagline: "Try Claude, ChatGPT, Gemini in one interface — free",
    freeTier: "Daily message credits for premium models; unlimited Claude-instant and other free bots",
    paidFrom: "$19.99/mo",
    bestFor: "Model comparison, sampling multiple AI responses, custom bots",
    strengths: [
      "Access to Claude, ChatGPT, Gemini, Mistral in one app",
      "Free credits for premium models daily",
      "Create custom AI bots with any model",
      "Mobile app with clean interface",
      "Good for testing which model works best for your task",
    ],
    limitations: [
      "Daily cap on Claude/GPT-4o messages without subscription",
      "Adds latency vs direct API access",
      "Not a daily driver without Pro plan",
    ],
    requiresSignup: true,
  },
  {
    rank: 10,
    name: "Venice AI",
    slug: "venice-ai",
    tagline: "Privacy-first Claude alternative — fully private, no data logging",
    freeTier: "Limited daily messages (private, on-device inference)",
    paidFrom: "$8/mo Pro",
    bestFor: "Privacy-critical tasks, confidential documents, no-logging required",
    strengths: [
      "No conversation logging — private by design",
      "Runs open models (Llama, Mistral) privately",
      "Image generation included",
      "No data used for training",
      "Good for sensitive business documents",
    ],
    limitations: [
      "Less capable than Claude on complex tasks",
      "Free tier message limits are strict",
      "Smaller model roster",
    ],
    requiresSignup: true,
  },
];

const useCaseTable = [
  { useCase: "Writing & long-form content", winner: "ChatGPT or stay with Claude", why: "Both match Claude on quality; ChatGPT has more plugins" },
  { useCase: "Long document analysis (1M+ tokens)", winner: "Google Gemini", why: "Only free AI with 1M token context window" },
  { useCase: "Research with citations", winner: "Perplexity", why: "Every answer sourced and linked" },
  { useCase: "Coding & debugging", winner: "DeepSeek", why: "Shows reasoning chain, rivals GPT-4o free" },
  { useCase: "No account/signup", winner: "Microsoft Copilot", why: "GPT-4o quality, zero friction" },
  { useCase: "Privacy & GDPR", winner: "Mistral Chat", why: "European company, GDPR compliant" },
  { useCase: "Real-time news & X/Twitter", winner: "Grok", why: "Direct X data feed" },
  { useCase: "Zero-cost AI (no subscription ever)", winner: "Meta AI", why: "Free forever, WhatsApp/Instagram integration" },
];

export default function FreeClaudeAlternativesPage() {
  const year = 2026;

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-950 border-b border-gray-800 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-green-500/20 text-green-400 text-xs font-medium px-2.5 py-1 rounded-full">Free Tools</span>
            <span className="bg-purple-500/20 text-purple-400 text-xs font-medium px-2.5 py-1 rounded-full">AI Assistants</span>
            <span className="bg-gray-800 text-gray-400 text-xs font-medium px-2.5 py-1 rounded-full">Updated April {year}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Free Claude AI Alternatives in {year}
          </h1>
          <p className="text-xl text-gray-400 mb-6 max-w-3xl">
            Claude&apos;s free tier is genuinely good — but rate limits bite. These 10 free alternatives match or beat Claude for specific tasks, all without a subscription.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>✓ All tested on free tier</span>
            <span>✓ Honest comparisons</span>
            <span>✓ {alternatives.length} alternatives ranked</span>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Quick Answer Box */}
        <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6 mb-12">
          <h2 className="font-bold text-purple-400 text-sm uppercase tracking-wider mb-3">Quick Answer</h2>
          <p className="text-gray-300 mb-4">
            The best free Claude alternative depends on what you use Claude for:
          </p>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><span className="text-white font-medium">Best overall (similar to Claude):</span> ChatGPT free or Microsoft Copilot (both GPT-4o powered)</li>
            <li><span className="text-white font-medium">Longer context than Claude (free):</span> Google Gemini — 1M token context window</li>
            <li><span className="text-white font-medium">Best for coding:</span> DeepSeek — shows reasoning chain, matches GPT-4o benchmarks</li>
            <li><span className="text-white font-medium">Best for research:</span> Perplexity — every answer cited with sources</li>
            <li><span className="text-white font-medium">No account needed:</span> Microsoft Copilot — GPT-4o quality, zero friction</li>
          </ul>
        </div>

        {/* Why Look Beyond Claude Free */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Look Beyond Claude&apos;s Free Tier?</h2>
          <p className="text-gray-300 mb-4">
            Claude&apos;s free tier is one of the best in the industry — Anthropic gives you Sonnet 3.7, genuinely one of the world&apos;s best AI models, for free. But the rate limits are real. Heavy daily users hit the cap regularly, and you lose access to Claude Pro features like extended thinking, priority access, and higher usage limits.
          </p>
          <p className="text-gray-300 mb-4">
            Meanwhile, competitors are doing the same thing — giving away top-tier models to capture users. Microsoft Copilot gives you GPT-4o free. Google Gemini gives you a 1M context window free. DeepSeek gives you R1 reasoning free.
          </p>
          <p className="text-gray-300">
            In {year}, you don&apos;t need to pay for AI for most tasks. Here are the best free Claude alternatives — ranked by how well they replace specific Claude use cases.
          </p>
        </section>

        {/* What Claude is Good At */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">What Claude Does Best (And What to Use Instead)</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { strength: "Long-form writing", alternative: "ChatGPT or Gemini", note: "Both match Claude for prose quality" },
              { strength: "200K context window", alternative: "Google Gemini (1M tokens free)", note: "Gemini actually wins on context length" },
              { strength: "Coding assistance", alternative: "DeepSeek (R1 reasoning, free)", note: "Better for complex debugging with reasoning chain" },
              { strength: "Research & analysis", alternative: "Perplexity (cited sources)", note: "Perplexity adds source links Claude lacks" },
              { strength: "Document Q&A", alternative: "ChatGPT (file upload, free)", note: "ChatGPT file uploads work on free tier" },
              { strength: "Privacy & safety", alternative: "Mistral Chat or Venice AI", note: "GDPR-compliant, no-log options" },
            ].map((item, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                <div className="text-sm font-medium text-gray-300 mb-1">{item.strength}</div>
                <div className="text-purple-400 font-semibold text-sm mb-1">→ {item.alternative}</div>
                <div className="text-gray-500 text-xs">{item.note}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Alternatives List */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Top {alternatives.length} Free Claude AI Alternatives Ranked</h2>
          <div className="space-y-8">
            {alternatives.map((alt) => (
              <div key={alt.slug} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="bg-gray-800 text-gray-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {alt.rank}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl font-bold">{alt.name}</h3>
                        {alt.badge && (
                          <span className="bg-amber-500/20 text-amber-400 text-xs font-medium px-2 py-0.5 rounded-full">
                            {alt.badge}
                          </span>
                        )}
                        {!alt.requiresSignup && (
                          <span className="bg-green-500/20 text-green-400 text-xs font-medium px-2 py-0.5 rounded-full">
                            No Signup
                          </span>
                        )}
                      </div>
                      <p className="text-gray-400 text-sm mt-0.5">{alt.tagline}</p>
                    </div>
                  </div>
                </div>

                {/* Free Tier Highlight */}
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-2.5 mb-4 text-sm">
                  <span className="text-green-400 font-medium">Free tier: </span>
                  <span className="text-gray-300">{alt.freeTier}</span>
                  {alt.paidFrom && (
                    <span className="text-gray-500 ml-2">· Paid from {alt.paidFrom}</span>
                  )}
                </div>

                <p className="text-gray-400 text-sm mb-4">
                  <span className="text-gray-300 font-medium">Best for:</span> {alt.bestFor}
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-semibold text-green-400 mb-2">✓ Strengths</h4>
                    <ul className="space-y-1">
                      {alt.strengths.map((s, i) => (
                        <li key={i} className="text-sm text-gray-300 flex gap-2">
                          <span className="text-green-500 flex-shrink-0">•</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-red-400 mb-2">✗ Limitations</h4>
                    <ul className="space-y-1">
                      {alt.limitations.map((l, i) => (
                        <li key={i} className="text-sm text-gray-300 flex gap-2">
                          <span className="text-red-500 flex-shrink-0">•</span>
                          {l}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-3 flex-wrap items-center">
                  {(() => {
                    const affiliateUrl = getAffiliateUrl(alt.slug);
                    return affiliateUrl ? (
                      <a
                        href={affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="inline-flex items-center rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-700"
                      >
                        Try {alt.name} →
                      </a>
                    ) : null;
                  })()}
                  <Link
                    href={`/tool/${alt.slug}`}
                    className="text-sm text-blue-400 hover:text-blue-300 transition"
                  >
                    View tool details →
                  </Link>
                  <Link
                    href={`/alternatives/${alt.slug}`}
                    className="text-sm text-gray-500 hover:text-gray-400 transition"
                  >
                    More {alt.name} alternatives →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Case Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Best Free Claude Alternative by Use Case</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Use Case</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Best Free Option</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Why</th>
                </tr>
              </thead>
              <tbody>
                {useCaseTable.map((row, i) => (
                  <tr key={i} className="border-b border-gray-800/50 hover:bg-gray-900/50 transition">
                    <td className="py-3 px-4 text-sm text-gray-300">{row.useCase}</td>
                    <td className="py-3 px-4 text-sm font-medium text-purple-400">{row.winner}</td>
                    <td className="py-3 px-4 text-sm text-gray-400">{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "What is the best free alternative to Claude AI?",
                a: "For general tasks similar to Claude, Microsoft Copilot (powered by GPT-4o) is the best free alternative — no signup required. For writing specifically, ChatGPT's free tier with GPT-4o mini is a close competitor. For research with citations, Perplexity is better than Claude on the free tier. For coding, DeepSeek's free R1 reasoning model often outperforms Claude on complex problems."
              },
              {
                q: "Can I get a longer context window than Claude for free?",
                a: "Yes. Google Gemini's free tier offers a 1 million token context window — 5x larger than Claude's 200K free tier. If you need to analyze very long documents (entire codebases, lengthy PDFs, extensive research papers), Gemini free actually beats Claude Pro on context length."
              },
              {
                q: "Is there a Claude alternative that doesn't require an account?",
                a: "Yes. Microsoft Copilot (copilot.microsoft.com) runs GPT-4o with no login or account required. Meta AI on the web also works without a Meta account for basic queries. These are the only major AI assistants with no-signup access."
              },
              {
                q: "What free AI is most similar to Claude for writing?",
                a: "ChatGPT (using GPT-4o) is the closest to Claude for writing quality. Both models produce high-quality, nuanced prose. For long-form writing with a larger context, Google Gemini is also excellent. Mistral Le Chat is a strong alternative for users who prefer a European, privacy-focused option."
              },
              {
                q: "Is Claude better than ChatGPT for free?",
                a: "Both are very competitive on their free tiers. Claude gives you Sonnet 3.7 (a premium model) for free, while ChatGPT gives you GPT-4o mini with occasional GPT-4o access. For writing and nuanced reasoning, Claude's free tier often wins. For coding and tool use, ChatGPT's ecosystem (plugins, GPTs, code interpreter) has an edge. The best choice depends on your specific use case."
              },
            ].map((faq, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Best Free Claude AI Alternatives in 2026",
              "description": "The best free Claude AI alternatives in 2026 — ChatGPT, Gemini, Copilot, DeepSeek, Perplexity, and more. Tested on free tiers.",
              "datePublished": "2026-04-28",
              "dateModified": "2026-04-28",
              "author": { "@type": "Organization", "name": "AISO Tools" },
              "publisher": { "@type": "Organization", "name": "AISO Tools", "url": "https://aisotools.com" },
              "mainEntityOfPage": { "@type": "WebPage", "@id": "https://aisotools.com/blog/free-claude-alternatives-2026" },
              "FAQPage": {
                "@type": "FAQPage",
                "mainEntity": [
                  { "@type": "Question", "name": "What is the best free alternative to Claude AI?", "acceptedAnswer": { "@type": "Answer", "text": "Microsoft Copilot (GPT-4o, no signup required) is the best free Claude alternative for general use. For research, Perplexity is better. For coding, DeepSeek R1 often outperforms Claude." } },
                  { "@type": "Question", "name": "Can I get a longer context window than Claude for free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Google Gemini's free tier offers a 1 million token context window — 5x larger than Claude's 200K free tier." } },
                ]
              }
            })
          }}
        />

        {/* CTA */}
        <section className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Compare All AI Assistants</h2>
          <p className="text-gray-400 mb-6">
            Browse 800+ AI tools with detailed pricing, features, and alternatives. Find the right Claude alternative for your workflow.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/alternatives/claude" className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-lg font-medium transition text-sm">
              All Claude Alternatives
            </Link>
            <Link href="/category/chatbots" className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-3 rounded-lg font-medium transition text-sm">
              Browse AI Chatbots
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
