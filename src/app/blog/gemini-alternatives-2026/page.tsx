import Link from "next/link";
import type { Metadata } from "next";
import { getAffiliateUrl } from "@/data/affiliate-links";

export const metadata: Metadata = {
  title: "Best Google Gemini Alternatives in 2026 (Free & Paid)",
  description:
    "The best Google Gemini alternatives in 2026 — ChatGPT, Claude, Copilot, Perplexity, DeepSeek, Grok, and more. Compared on quality, pricing, and use cases.",
  keywords: [
    "gemini alternatives",
    "google gemini alternatives",
    "alternatives to google gemini",
    "best gemini alternative",
    "gemini ai alternative",
    "google gemini alternative free",
    "replace google gemini",
    "gemini vs chatgpt vs claude",
  ],
  openGraph: {
    title: "Best Google Gemini Alternatives in 2026 (Free & Paid)",
    description:
      "Not happy with Google Gemini? These 9 Gemini alternatives offer better writing quality, privacy, coding help, or research tools — many for free.",
    url: "https://aisotools.com/blog/gemini-alternatives-2026",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/blog/gemini-alternatives-2026",
  },
};

interface GeminiAlternative {
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

const alternatives: GeminiAlternative[] = [
  {
    rank: 1,
    name: "Claude",
    slug: "claude",
    tagline: "Best Gemini alternative for writing quality and long documents",
    freeTier: "Unlimited Claude Sonnet 3.7 (rate-limited)",
    paidFrom: "$20/mo Pro",
    bestFor: "Writing, long documents, nuanced reasoning, coding",
    strengths: [
      "Superior writing quality — more nuanced and human-like than Gemini",
      "200K context window for very long documents",
      "Better at following complex, multi-step instructions",
      "More creative for fiction, storytelling, and brand voice work",
      "Anthropic's Constitutional AI makes it more thoughtful and careful",
    ],
    limitations: [
      "No native Google Workspace integration (Gemini's key advantage)",
      "Free tier rate limits are stricter than Gemini's",
      "No real-time web search on free tier",
    ],
    badge: "Best Overall",
    requiresSignup: true,
  },
  {
    rank: 2,
    name: "ChatGPT",
    slug: "chatgpt",
    tagline: "Most feature-rich Gemini alternative — plugins, images, voice",
    freeTier: "Unlimited GPT-4o mini, limited GPT-4o",
    paidFrom: "$20/mo Plus",
    bestFor: "General tasks, image generation, custom GPTs, voice mode",
    strengths: [
      "Massive plugin and GPT ecosystem (1,000+ custom apps)",
      "DALL-E 3 image generation on free tier",
      "Voice mode on mobile — speaks and listens",
      "Code interpreter for data analysis and charts",
      "Most widely supported by third-party integrations",
    ],
    limitations: [
      "Free tier uses GPT-4o mini, not full GPT-4o",
      "Context window shorter than Gemini (128K vs 1M)",
      "More expensive than Gemini Advanced ($20 vs $19.99/mo)",
    ],
    badge: "Most Popular",
    requiresSignup: true,
  },
  {
    rank: 3,
    name: "Microsoft Copilot",
    slug: "microsoft-copilot",
    tagline: "Free GPT-4o alternative with real-time web search — no account",
    freeTier: "Unlimited GPT-4o via Copilot (no account needed)",
    paidFrom: "$20/mo Pro",
    bestFor: "Research with citations, Windows users, no-login AI",
    strengths: [
      "Powered by GPT-4o — Gemini-level quality, completely free",
      "Real-time Bing search with cited sources",
      "No account required — just go to copilot.microsoft.com",
      "Built into Windows 11, Edge browser, and Microsoft 365",
      "Free DALL-E 3 image generation",
    ],
    limitations: [
      "Less creative on open-ended tasks vs Claude or Gemini",
      "More conservative content filtering",
      "Microsoft 365 integration less seamless than Google Workspace + Gemini",
    ],
    badge: "No Signup Needed",
    requiresSignup: false,
  },
  {
    rank: 4,
    name: "Perplexity",
    slug: "perplexity",
    tagline: "Best Gemini alternative for research — every answer cited",
    freeTier: "Unlimited searches, 5 Pro queries/day",
    paidFrom: "$20/mo Pro",
    bestFor: "Research, fact-checking, current events, academic queries",
    strengths: [
      "Every answer includes numbered source citations (better than Gemini)",
      "Real-time web search — more current than Gemini's knowledge",
      "Academic mode searches PubMed, arXiv, and journals",
      "Pro mode uses Claude Sonnet or GPT-4o for drafting",
      "Consistently more reliable for time-sensitive research",
    ],
    limitations: [
      "Not ideal for creative writing or conversational tasks",
      "Pro search capped at 5/day on free tier",
      "Less capable at document analysis vs Gemini's long context",
    ],
    badge: "Best for Research",
    requiresSignup: true,
  },
  {
    rank: 5,
    name: "DeepSeek",
    slug: "deepseek",
    tagline: "Best free Gemini alternative for coding and hard reasoning",
    freeTier: "Unlimited DeepSeek-V3 + R1 reasoning (web)",
    paidFrom: "API only",
    bestFor: "Coding, math, complex reasoning, chain-of-thought problems",
    strengths: [
      "DeepSeek-R1 shows full reasoning chain — great for debugging",
      "Rivals GPT-4o on coding benchmarks, completely free",
      "Transparent thinking process is genuinely useful",
      "API is extremely cheap for developers",
      "V3 handles long documents well",
    ],
    limitations: [
      "Data privacy concerns — Chinese-owned company",
      "Web UI less polished than Gemini",
      "Rate limits during peak hours",
    ],
    badge: "Best for Coding",
    requiresSignup: true,
  },
  {
    rank: 6,
    name: "Grok",
    slug: "grok",
    tagline: "Real-time X/Twitter data — unique capability Gemini doesn't have",
    freeTier: "Limited access via X (requires X account)",
    paidFrom: "$8/mo X Premium",
    bestFor: "Social media analysis, trending topics, uncensored responses",
    strengths: [
      "Real-time X (Twitter) data — completely unique capability",
      "Less content restrictions than Google's Gemini",
      "Grok 3 is highly capable on reasoning tasks",
      "Great for tracking social trends, viral content, market sentiment",
    ],
    limitations: [
      "Requires X (Twitter) account to use",
      "Free daily query limits are low",
      "No Google Workspace equivalent integrations",
    ],
    requiresSignup: true,
  },
  {
    rank: 7,
    name: "Mistral Chat",
    slug: "mistral",
    tagline: "Privacy-focused European Gemini alternative — GDPR compliant",
    freeTier: "Unlimited Le Chat (Mistral Large 2, no stated limits)",
    paidFrom: "$14.99/mo Pro",
    bestFor: "Privacy-conscious users, GDPR compliance, multilingual tasks",
    strengths: [
      "European company — GDPR compliant, no Google data jurisdiction",
      "Mistral Large 2 is genuinely competitive with Gemini on quality",
      "Strong multilingual support (French, German, Spanish, Italian)",
      "Canvas/artifact mode for document editing",
      "Fast response times, clean interface",
    ],
    limitations: [
      "No Google Workspace integration",
      "Smaller ecosystem and fewer third-party integrations",
      "Less capable on multimodal tasks (images, video) vs Gemini",
    ],
    badge: "Best for Privacy",
    requiresSignup: true,
  },
  {
    rank: 8,
    name: "Meta AI",
    slug: "meta-ai",
    tagline: "Completely free Gemini alternative — no subscription, ever",
    freeTier: "Completely free, unlimited, built into WhatsApp/Instagram",
    paidFrom: "Free (ad-supported)",
    bestFor: "Zero-cost AI, social media tasks, mobile users",
    strengths: [
      "Completely free — no subscription, no daily limits",
      "Works directly inside WhatsApp, Instagram, Facebook",
      "Llama 3.1 405B model is genuinely capable",
      "Image generation included (Imagine tool)",
      "Real-time web search enabled",
    ],
    limitations: [
      "Less capable than Gemini on complex reasoning tasks",
      "Privacy concerns — Meta trains on interactions",
      "No Google Workspace equivalent",
    ],
    badge: "Completely Free",
    requiresSignup: false,
  },
  {
    rank: 9,
    name: "You.com",
    slug: "you-com",
    tagline: "AI-powered search engine — the privacy-first Google + Gemini hybrid",
    freeTier: "Unlimited searches with AI summaries",
    paidFrom: "$20/mo Pro",
    bestFor: "Privacy-focused search, research with citations, AI + search combined",
    strengths: [
      "Combines web search with AI generation in one interface",
      "YouWrite, YouCode, YouArt — specialized modes for each task",
      "Privacy-first positioning (less data collection than Google)",
      "Summarizes results from multiple sources with citations",
      "Free tier is genuinely useful for daily research",
    ],
    limitations: [
      "Less capable on pure reasoning vs Gemini or Claude",
      "Interface is more complex than a simple chatbot",
      "Smaller model roster than major AI labs",
    ],
    requiresSignup: true,
  },
];

const useCaseTable = [
  {
    useCase: "Writing quality (essays, long-form)",
    winner: "Claude",
    why: "More nuanced, human-like output than Gemini",
  },
  {
    useCase: "Research with citations",
    winner: "Perplexity",
    why: "Every answer sourced — more reliable than Gemini's search",
  },
  {
    useCase: "Coding & debugging",
    winner: "DeepSeek",
    why: "Shows full reasoning chain, rivals GPT-4o for free",
  },
  {
    useCase: "Google Workspace integration",
    winner: "Stay with Gemini",
    why: "No alternative matches Gemini's native Docs/Sheets/Gmail integration",
  },
  {
    useCase: "No account required",
    winner: "Microsoft Copilot",
    why: "GPT-4o quality, zero friction, no signup",
  },
  {
    useCase: "Privacy & GDPR compliance",
    winner: "Mistral Chat",
    why: "European company, GDPR compliant",
  },
  {
    useCase: "Social media & trending topics",
    winner: "Grok",
    why: "Real-time X/Twitter data — unique capability",
  },
  {
    useCase: "Zero cost (no subscription ever)",
    winner: "Meta AI",
    why: "Free forever, WhatsApp/Instagram integration",
  },
];

export default function GeminiAlternativesPage() {
  const year = 2026;

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-950 border-b border-gray-800 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-500/20 text-blue-400 text-xs font-medium px-2.5 py-1 rounded-full">
              AI Chatbots
            </span>
            <span className="bg-purple-500/20 text-purple-400 text-xs font-medium px-2.5 py-1 rounded-full">
              Alternatives Guide
            </span>
            <span className="bg-gray-800 text-gray-400 text-xs font-medium px-2.5 py-1 rounded-full">
              Updated April {year}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Google Gemini Alternatives in {year}
          </h1>
          <p className="text-xl text-gray-400 mb-6 max-w-3xl">
            Google Gemini is powerful — especially if you live in Google
            Workspace. But it falls behind on writing quality, privacy, and
            specialized research. These {alternatives.length} Gemini alternatives
            are worth switching to for specific use cases.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>✓ {alternatives.length} alternatives compared</span>
            <span>✓ Free options included</span>
            <span>✓ Use-case breakdown</span>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Quick Answer */}
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 mb-12">
          <h2 className="font-bold text-blue-400 text-sm uppercase tracking-wider mb-3">
            Quick Answer
          </h2>
          <p className="text-gray-300 mb-4">
            The best Gemini alternative depends on why you want to switch:
          </p>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <span className="text-white font-medium">Better writing quality:</span>{" "}
              Claude — more nuanced, human-like prose than Gemini
            </li>
            <li>
              <span className="text-white font-medium">Better research citations:</span>{" "}
              Perplexity — every answer sourced and linked
            </li>
            <li>
              <span className="text-white font-medium">Better coding:</span>{" "}
              DeepSeek R1 — shows reasoning chain, free
            </li>
            <li>
              <span className="text-white font-medium">No Google data:</span>{" "}
              Mistral Chat — European, GDPR compliant
            </li>
            <li>
              <span className="text-white font-medium">No signup required:</span>{" "}
              Microsoft Copilot — GPT-4o quality, zero friction
            </li>
          </ul>
        </div>

        {/* Why Switch from Gemini */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Why Switch from Google Gemini?
          </h2>
          <p className="text-gray-300 mb-4">
            Gemini has one huge advantage: deep Google Workspace integration. If
            you use Gmail, Docs, Sheets, or Drive daily, Gemini&apos;s native
            integration is genuinely valuable. No other AI assistant comes close
            to what Gemini can do inside your existing Google workflow.
          </p>
          <p className="text-gray-300 mb-4">
            But Gemini has real weaknesses. Writing quality — especially for
            nuanced prose, character voice, and long-form content — lags behind
            Claude. Research reliability varies; Gemini can hallucinate more
            than Perplexity&apos;s citation-based approach. For privacy-conscious
            users, giving Google access to all conversations alongside all your
            other Google data is a legitimate concern.
          </p>
          <p className="text-gray-300">
            The right Gemini alternative depends entirely on what you use
            Gemini for. Here&apos;s the honest breakdown.
          </p>
        </section>

        {/* When to Stay with Gemini */}
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 mb-12">
          <h2 className="font-semibold text-amber-400 mb-3">
            When to Stay with Gemini (Genuinely)
          </h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              ✓ You use Google Docs, Sheets, or Gmail heavily — Gemini&apos;s
              native integration beats all alternatives
            </li>
            <li>
              ✓ You need 1M+ token context window for free — Gemini is the only
              AI with 1M tokens free
            </li>
            <li>
              ✓ You&apos;re on Android — Gemini is deeply integrated into Android
              Assistant and Pixel phones
            </li>
            <li>
              ✓ Multimodal tasks — Gemini handles images, audio, and video natively
              on the free tier
            </li>
          </ul>
        </div>

        {/* Alternatives List */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            Top {alternatives.length} Google Gemini Alternatives Ranked
          </h2>
          <div className="space-y-8">
            {alternatives.map((alt) => (
              <div
                key={alt.slug}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition"
              >
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
                      <p className="text-gray-400 text-sm mt-0.5">
                        {alt.tagline}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg px-4 py-2.5 mb-4 text-sm">
                  <span className="text-blue-400 font-medium">Free tier: </span>
                  <span className="text-gray-300">{alt.freeTier}</span>
                  {alt.paidFrom && (
                    <span className="text-gray-500 ml-2">
                      · Paid from {alt.paidFrom}
                    </span>
                  )}
                </div>

                <p className="text-gray-400 text-sm mb-4">
                  <span className="text-gray-300 font-medium">Best for:</span>{" "}
                  {alt.bestFor}
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-semibold text-green-400 mb-2">
                      ✓ Strengths
                    </h4>
                    <ul className="space-y-1">
                      {alt.strengths.map((s, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-300 flex gap-2"
                        >
                          <span className="text-green-500 flex-shrink-0">•</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-red-400 mb-2">
                      ✗ Limitations
                    </h4>
                    <ul className="space-y-1">
                      {alt.limitations.map((l, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-300 flex gap-2"
                        >
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
                        className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
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
          <h2 className="text-2xl font-bold mb-6">
            Best Gemini Alternative by Use Case
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">
                    Use Case
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">
                    Best Option
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">
                    Why
                  </th>
                </tr>
              </thead>
              <tbody>
                {useCaseTable.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-800/50 hover:bg-gray-900/50 transition"
                  >
                    <td className="py-3 px-4 text-sm text-gray-300">
                      {row.useCase}
                    </td>
                    <td className="py-3 px-4 text-sm font-medium text-blue-400">
                      {row.winner}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-400">
                      {row.why}
                    </td>
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
                q: "What is the best Google Gemini alternative?",
                a: "Claude is the best overall Gemini alternative for writing quality and long-document tasks — it produces more nuanced prose and has a 200K context window. For research with citations, Perplexity is better than Gemini. For coding, DeepSeek R1 often outperforms both. If you need no signup, Microsoft Copilot offers GPT-4o quality for free with no account required.",
              },
              {
                q: "Is Claude better than Google Gemini?",
                a: "Claude and Gemini excel at different things. Claude consistently outperforms Gemini on writing quality, nuanced reasoning, and following complex instructions. Gemini has advantages in Google Workspace integration, a 1M token context window (vs Claude's 200K), multimodal capabilities, and Android/Pixel integration. For pure writing quality, Claude wins. For Google ecosystem integration, Gemini wins.",
              },
              {
                q: "What free Gemini alternatives exist?",
                a: "Several strong free alternatives exist: Claude's free tier (Sonnet 3.7, rate-limited), Microsoft Copilot (GPT-4o, no account required), Perplexity (unlimited searches, 5 Pro/day), DeepSeek (unlimited R1 + V3), Meta AI (completely free, in WhatsApp/Instagram), and Mistral Le Chat (unlimited Mistral Large 2). All of these are competitive with Gemini's free tier for most tasks.",
              },
              {
                q: "Is there a Gemini alternative with better privacy?",
                a: "Yes. Mistral Chat (mistral.ai) is GDPR-compliant and operated by a European company with stricter data protection requirements than Google. Venice AI offers no-logging private inference. Microsoft Copilot also separates your Copilot data from other Microsoft services. All are better privacy choices than Gemini for users concerned about Google's data practices.",
              },
              {
                q: "Does any Gemini alternative have a 1M token context window?",
                a: "Not for free. Gemini's 1M token context window on the free tier is unique — no other major AI offers this for free. Claude Pro offers 200K tokens ($20/mo), GPT-4o offers 128K tokens ($20/mo). If you need to analyze very long documents, PDFs, or entire codebases, Gemini free is actually the best option despite its other limitations.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-gray-900 border border-gray-800 rounded-xl p-5"
              >
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
              headline: `Best Google Gemini Alternatives in ${year}`,
              description:
                "The best Google Gemini alternatives in 2026 — Claude, ChatGPT, Copilot, Perplexity, DeepSeek, and more. Compared on quality, pricing, and use cases.",
              datePublished: "2026-04-29",
              dateModified: "2026-04-29",
              author: { "@type": "Organization", name: "AISO Tools" },
              publisher: {
                "@type": "Organization",
                name: "AISO Tools",
                url: "https://aisotools.com",
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://aisotools.com/blog/gemini-alternatives-2026",
              },
              FAQPage: {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is the best Google Gemini alternative?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Claude is the best overall Gemini alternative for writing quality. Perplexity is better for research citations. DeepSeek R1 is better for coding. Microsoft Copilot is the best no-signup option.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is Claude better than Google Gemini?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Claude produces better writing quality and follows complex instructions more precisely. Gemini wins on Google Workspace integration, 1M token context, and multimodal capabilities. Choose based on your primary use case.",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Compare All AI Assistants
          </h2>
          <p className="text-gray-400 mb-6">
            Browse 800+ AI tools with detailed pricing, features, and
            alternatives. Find the right Gemini alternative for your workflow.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/alternatives/gemini"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-medium transition text-sm"
            >
              All Gemini Alternatives
            </Link>
            <Link
              href="/compare/gemini-vs-claude"
              className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-3 rounded-lg font-medium transition text-sm"
            >
              Gemini vs Claude →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
