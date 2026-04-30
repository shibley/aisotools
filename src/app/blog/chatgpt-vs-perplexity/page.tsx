import Link from "next/link";
import type { Metadata } from "next";
import { getAffiliateUrl } from "@/data/affiliate-links";

export const metadata: Metadata = {
  title: "ChatGPT vs Perplexity AI (2026): Which Is Better for Search?",
  description:
    "ChatGPT vs Perplexity AI — a head-to-head comparison for 2026. We compare accuracy, sources, pricing, speed, and real-world use cases to help you pick the right AI assistant.",
  keywords: [
    "chatgpt vs perplexity",
    "perplexity vs chatgpt",
    "chatgpt or perplexity",
    "perplexity ai vs chatgpt 2026",
    "best ai search engine",
    "perplexity ai comparison",
    "chatgpt search vs perplexity",
    "ai search tool comparison",
  ],
  openGraph: {
    title: "ChatGPT vs Perplexity AI (2026): Which Is Better?",
    description:
      "Detailed comparison: ChatGPT vs Perplexity AI for search, research, writing, and coding. Pricing, accuracy, citations, and real test results.",
    url: "https://aisotools.com/blog/chatgpt-vs-perplexity",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/blog/chatgpt-vs-perplexity",
  },
};

const categories = [
  {
    name: "Web Search & Real-Time Info",
    winner: "Perplexity",
    chatgpt: {
      score: 7,
      notes:
        "ChatGPT Search (rolling out to all users) is good but secondary to Perplexity's core focus. Sources appear but citation quality varies.",
    },
    perplexity: {
      score: 9,
      notes:
        "Built for search from day one. Every answer cites numbered sources. Pro Search mode runs multiple web queries for complex questions. Real-time by default.",
    },
  },
  {
    name: "Writing & Long-Form Content",
    winner: "ChatGPT",
    chatgpt: {
      score: 9,
      notes:
        "GPT-4o excels at drafting blog posts, emails, reports, and creative writing. Custom GPTs and memory help maintain consistent voice across sessions.",
    },
    perplexity: {
      score: 6,
      notes:
        "Perplexity can write content but it's clearly secondary. Better for research memos than polished long-form output. Copilot mode helps but still trails ChatGPT.",
    },
  },
  {
    name: "Coding & Technical Help",
    winner: "ChatGPT",
    chatgpt: {
      score: 9,
      notes:
        "GPT-4o handles complex code well. Canvas mode for iterative coding. Code Interpreter for running Python. Best-in-class for debugging multi-file codebases.",
    },
    perplexity: {
      score: 6,
      notes:
        "Can explain code and find answers to technical questions via search. Less useful for generating or iterating on code without real-time execution.",
    },
  },
  {
    name: "Research & Fact-Checking",
    winner: "Perplexity",
    chatgpt: {
      score: 7,
      notes:
        "Deep Research mode (ChatGPT Pro) is powerful for long-horizon research. Regular ChatGPT can hallucinate on facts — always verify against sources.",
    },
    perplexity: {
      score: 9,
      notes:
        "Every claim is sourced and numbered. Perplexity Pages and Deep Research mode create multi-page research reports with full citations. Best for fact-checkable output.",
    },
  },
  {
    name: "Image Generation",
    winner: "ChatGPT",
    chatgpt: {
      score: 9,
      notes:
        "DALL-E 3 integrated natively. GPT-4o can also edit images and analyze uploaded photos. Best-in-class conversational image generation.",
    },
    perplexity: {
      score: 5,
      notes:
        "Perplexity Pro can generate images via SDXL/Playground. Less polished UX than ChatGPT — image generation is a secondary feature.",
    },
  },
  {
    name: "Free Plan Value",
    winner: "Perplexity",
    chatgpt: {
      score: 7,
      notes:
        "Free tier uses GPT-4o mini (good) with limited GPT-4o daily. No image generation on free. No memory on free tier.",
    },
    perplexity: {
      score: 8,
      notes:
        "Free tier gives unlimited basic searches and 5 Pro Searches/day. Accesses Claude, GPT-4o, and Gemini on Pro ($20/mo). Generous free tier for research tasks.",
    },
  },
  {
    name: "Conversational AI / Chatbot",
    winner: "ChatGPT",
    chatgpt: {
      score: 10,
      notes:
        "The gold standard for conversational AI. Memory, Custom GPTs, voice mode, file uploads, plugins — most complete assistant experience available.",
    },
    perplexity: {
      score: 7,
      notes:
        "Perplexity handles multi-turn conversations well within a research context. Less suited for open-ended chat, creative tasks, or personal assistance.",
    },
  },
];

const faqs = [
  {
    q: "Which is better: ChatGPT or Perplexity AI?",
    a: "It depends on your use case. Perplexity is better for research, fact-checking, and getting cited answers from the live web. ChatGPT is better for writing, coding, creative tasks, and general conversation. Most power users use both.",
  },
  {
    q: "Is Perplexity AI free?",
    a: "Yes — Perplexity has a free plan with unlimited basic searches and 5 Pro Searches per day. Pro plan is $20/month and unlocks unlimited Pro searches, access to GPT-4o/Claude models, and image generation.",
  },
  {
    q: "Does ChatGPT have internet access in 2026?",
    a: "Yes — ChatGPT Search is available to all users (free and paid). However, Perplexity still leads for real-time web research because it was built for search from the start and provides cleaner citations.",
  },
  {
    q: "Can Perplexity replace Google?",
    a: "For many informational queries, Perplexity is faster and more useful than Google because it synthesizes answers instead of just returning links. For e-commerce, local search, and navigational queries, Google still wins.",
  },
  {
    q: "Is Perplexity Pro worth it vs ChatGPT Plus?",
    a: "If research with citations is your primary use case, Perplexity Pro ($20/mo) is more specialized and arguably more useful for that task. ChatGPT Plus ($20/mo) is the better general-purpose upgrade — better writing, coding, image generation, voice mode, and more models.",
  },
  {
    q: "Can ChatGPT cite sources like Perplexity?",
    a: "ChatGPT Search does include source links, but citation quality and consistency don't match Perplexity's numbered inline citations. Perplexity was designed around sourcing — every claim maps to a numbered reference.",
  },
];

export default function ChatGPTvsPerplexity() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span>ChatGPT vs Perplexity</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ChatGPT vs Perplexity AI (2026): Which Should You Use?
          </h1>
          <p className="text-lg text-gray-300 mb-4">
            ChatGPT and Perplexity AI are two of the most-used AI tools in 2026 — but they&apos;re built for different jobs. ChatGPT is the best general-purpose AI assistant. Perplexity is the best AI search engine. Here&apos;s exactly when to use each.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-gray-400">
            <span>Updated: April 2026</span>
            <span>•</span>
            <span>7 categories compared</span>
            <span>•</span>
            <span>Both tools tested hands-on</span>
          </div>
        </div>

        {/* Verdict Banner */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <div className="bg-green-950 border border-green-800 rounded-xl p-5">
            <div className="text-sm text-green-400 font-semibold uppercase mb-2">Best for Research</div>
            <div className="text-2xl font-bold text-white mb-1">Perplexity AI</div>
            <p className="text-green-200 text-sm">
              Real-time web search with numbered citations on every answer. Best for fact-checking, current events, and research reports.
            </p>
            <Link
              href={getAffiliateUrl("perplexity") || "/tool/perplexity"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 bg-green-700 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Try Perplexity Free →
            </Link>
          </div>
          <div className="bg-blue-950 border border-blue-800 rounded-xl p-5">
            <div className="text-sm text-blue-400 font-semibold uppercase mb-2">Best for Everything Else</div>
            <div className="text-2xl font-bold text-white mb-1">ChatGPT</div>
            <p className="text-blue-200 text-sm">
              Best AI for writing, coding, image generation, voice, and general conversation. Most complete AI assistant available.
            </p>
            <Link
              href={getAffiliateUrl("chatgpt") || "/tool/chatgpt"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 bg-blue-700 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Try ChatGPT Free →
            </Link>
          </div>
        </div>

        {/* Category Breakdown */}
        <h2 className="text-2xl font-bold text-white mb-6">Category-by-Category Comparison</h2>
        <div className="space-y-6 mb-12">
          {categories.map((cat) => (
            <div key={cat.name} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">{cat.name}</h3>
                <span className="text-sm bg-yellow-900 text-yellow-300 px-3 py-1 rounded-full font-medium">
                  Winner: {cat.winner}
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-white">ChatGPT</span>
                    <span className="text-sm text-gray-300">{cat.chatgpt.score}/10</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-1.5 mb-3">
                    <div
                      className="bg-blue-500 h-1.5 rounded-full"
                      style={{ width: `${cat.chatgpt.score * 10}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-300">{cat.chatgpt.notes}</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-white">Perplexity AI</span>
                    <span className="text-sm text-gray-300">{cat.perplexity.score}/10</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-1.5 mb-3">
                    <div
                      className="bg-green-500 h-1.5 rounded-full"
                      style={{ width: `${cat.perplexity.score * 10}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-300">{cat.perplexity.notes}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Comparison */}
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 mb-12">
          <h2 className="text-xl font-bold text-white mb-4">Pricing Comparison</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-white mb-3">ChatGPT Plans</h3>
              <div className="space-y-2 text-sm">
                {[
                  { plan: "Free", price: "$0/mo", features: "GPT-4o mini + limited GPT-4o, DALL-E, ChatGPT Search" },
                  { plan: "Plus", price: "$20/mo", features: "Full GPT-4o, GPT-4o with image, voice, memory, Advanced Data Analysis" },
                  { plan: "Pro", price: "$200/mo", features: "o1 pro, deep research, extended thinking, all features unlimited" },
                  { plan: "Team", price: "$25/user/mo", features: "Plus features + team workspaces, shared GPTs, admin console" },
                ].map((p) => (
                  <div key={p.plan} className="bg-gray-800 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-white">{p.plan}</span>
                      <span className="text-blue-400 font-semibold">{p.price}</span>
                    </div>
                    <p className="text-gray-400 text-xs">{p.features}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">Perplexity Plans</h3>
              <div className="space-y-2 text-sm">
                {[
                  { plan: "Free", price: "$0/mo", features: "Unlimited basic searches, 5 Pro Searches/day, Perplexity models" },
                  { plan: "Pro", price: "$20/mo (or $200/yr)", features: "Unlimited Pro Searches, GPT-4o/Claude/Gemini, image gen, Perplexity Pages" },
                  { plan: "Enterprise", price: "Custom", features: "SSO, SOC 2, private deployment, dedicated support" },
                ].map((p) => (
                  <div key={p.plan} className="bg-gray-800 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-white">{p.plan}</span>
                      <span className="text-green-400 font-semibold">{p.price}</span>
                    </div>
                    <p className="text-gray-400 text-xs">{p.features}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Who Should Use What */}
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 mb-12">
          <h2 className="text-xl font-bold text-white mb-4">Who Should Use Which?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-blue-400 mb-3">Use ChatGPT if you…</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                {[
                  "Write content, emails, or marketing copy",
                  "Code or debug programs",
                  "Generate or edit images",
                  "Want a personal AI assistant with memory",
                  "Need voice conversations with AI",
                  "Run complex multi-step workflows",
                  "Use DALL-E, code interpreter, or file analysis",
                ].map((use) => (
                  <li key={use} className="flex gap-2">
                    <span className="text-blue-400">→</span>
                    <span>{use}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-green-400 mb-3">Use Perplexity if you…</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                {[
                  "Need current, real-time information",
                  "Fact-check claims and want sources",
                  "Research topics with cited evidence",
                  "Want to replace Google for informational queries",
                  "Need research memos with referenced data",
                  "Track breaking news and recent events",
                  "Use Spaces for shared research workflows",
                ].map((use) => (
                  <li key={use} className="flex gap-2">
                    <span className="text-green-400">→</span>
                    <span>{use}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: { "@type": "Answer", text: faq.a },
              })),
            }),
          }}
        />

        {/* Related posts */}
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-4">Related Comparisons</h2>
          <div className="grid gap-2">
            {[
              { href: "/blog/chatgpt-vs-claude", label: "ChatGPT vs Claude: Which AI is Better in 2026?" },
              { href: "/blog/perplexity-alternatives-2026", label: "Best Perplexity AI Alternatives in 2026" },
              { href: "/blog/chatgpt-vs-claude-vs-gemini", label: "ChatGPT vs Claude vs Gemini: Full Comparison" },
              { href: "/blog/perplexity-vs-chatgpt-vs-google", label: "Perplexity vs ChatGPT vs Google: AI Search Battle" },
              { href: "/compare/chatgpt-vs-perplexity", label: "Quick Compare: ChatGPT vs Perplexity" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                → {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
