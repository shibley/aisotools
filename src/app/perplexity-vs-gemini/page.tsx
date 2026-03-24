import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perplexity vs Gemini (2026): AI Search Engine vs Google Ecosystem Brain",
  description:
    "In-depth comparison of Perplexity vs Gemini in 2026. Compare pricing ($20/mo each), research quality, citation accuracy, Deep Research, multimodal capabilities, and which AI platform fits your workflow.",
  keywords: [
    "Perplexity vs Gemini",
    "Gemini vs Perplexity",
    "Perplexity comparison",
    "Gemini comparison",
    "best AI search tool 2026",
    "Perplexity or Gemini",
    "AI research tool comparison",
    "Perplexity Pro vs Gemini Advanced",
    "AI search engine comparison 2026",
    "Perplexity Deep Research vs Gemini Deep Research",
  ],
  openGraph: {
    title: "Perplexity vs Gemini (2026): AI Search Engine vs Google Ecosystem Brain",
    description:
      "Comprehensive comparison of Perplexity and Gemini. Pricing, research quality, citations, Deep Research, multimodal, API access, and which AI platform you should choose in 2026.",
    url: "https://aisotools.com/perplexity-vs-gemini",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/perplexity-vs-gemini",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Perplexity better than Gemini for research?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For web research with citations, Perplexity is clearly better. Every answer comes with inline source citations you can verify, and its multi-step research queries search 10+ sources per answer. Gemini's Deep Research is powerful for long-form investigations but takes 5-15 minutes per query and doesn't cite individual claims as granularly. For quick factual lookups and source-grounded answers, Perplexity wins. For deep analytical reports, Gemini's agentic approach produces more comprehensive results.",
      },
    },
    {
      "@type": "Question",
      name: "Which is cheaper — Perplexity or Gemini?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both cost $20/month for their primary paid tier (Perplexity Pro and Google AI Pro/Gemini Advanced). However, Gemini Advanced is often bundled with Google One AI Premium ($19.99/mo) which includes 2TB Google Drive storage, Gemini in Gmail/Docs/Sheets, and other Google Workspace AI features. For pure AI search, Perplexity Pro is better value. For Google ecosystem users, Gemini Advanced packs significantly more into the same price.",
      },
    },
    {
      "@type": "Question",
      name: "Which has better Deep Research — Perplexity or Gemini?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both offer Deep Research but they work differently. Perplexity's research queries are iterative multi-step searches that synthesize 10+ sources in real time (available 20/day on Pro). Gemini's Deep Research is an agentic feature that autonomously browses the web for 5-15 minutes, producing structured multi-page reports with organized findings. Gemini Deep Research is better for comprehensive investigations; Perplexity is better for quick, cited, conversational research.",
      },
    },
    {
      "@type": "Question",
      name: "Can Perplexity replace Google Search?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For many queries, yes. Perplexity combines search with AI synthesis — instead of 10 blue links, you get a direct answer with citations. It handles factual questions, product comparisons, how-to guides, and current events well. However, it struggles with hyperlocal queries (restaurants near me), visual shopping, Maps integration, and the deep web index that Google has built over 25+ years. Most users find Perplexity handles 60-80% of their search needs, keeping Google for the rest.",
      },
    },
    {
      "@type": "Question",
      name: "Which is better for coding — Perplexity or Gemini?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gemini is significantly better for coding. Gemini 2.5 Pro is one of the top coding models available, with deep integration into Google's developer tools (Android Studio, Colab, Firebase, Gemini CLI). It can generate, debug, and refactor complex code. Perplexity is primarily a search and research tool — while it can answer coding questions and find documentation, it doesn't offer a dedicated coding environment, code execution, or the same depth of code generation capabilities.",
      },
    },
    {
      "@type": "Question",
      name: "Does Perplexity use Gemini models?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Perplexity Pro subscribers can select Gemini models (along with GPT-5, Claude 4.5 Sonnet, and others) as the underlying reasoning model for their queries. This means you can get Gemini's intelligence combined with Perplexity's citation-first search interface. However, you don't get Gemini's ecosystem features (Workspace integration, Deep Research agent, multimodal analysis) through Perplexity.",
      },
    },
    {
      "@type": "Question",
      name: "Which has better multimodal capabilities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gemini wins decisively on multimodal. It natively understands images, video, audio, and code in a single model with a 1M token context window. You can upload hour-long videos, analyze images, process audio files, and mix modalities freely. Perplexity supports image uploads and can generate images, but its core strength is text-based web search and synthesis, not multimodal understanding.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use Perplexity and Gemini together?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, and this is actually an optimal strategy. Use Perplexity for quick factual research, source gathering, and current events (where citations matter). Use Gemini for deep analysis, coding, multimodal tasks, and anything that benefits from Google ecosystem integration. Many power users run both — Perplexity as their search replacement and Gemini as their general AI assistant. Combined cost is about $40/month.",
      },
    },
  ],
};

export default function PerplexityVsGeminiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <nav className="text-sm text-gray-500">
              <Link href="/" className="hover:text-blue-600">
                AISO Tools
              </Link>
              <span className="mx-2">/</span>
              <Link href="/compare" className="hover:text-blue-600">
                Compare
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">Perplexity vs Gemini</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="max-w-4xl mx-auto px-4 py-16">
            <div className="text-center">
              <p className="text-blue-300 text-sm font-medium mb-3 uppercase tracking-wide">
                AI Tool Comparison — Updated March 2026
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Perplexity vs Gemini
              </h1>
              <p className="text-xl text-blue-100 mb-4">
                AI Search Engine vs Google Ecosystem Brain
              </p>
              <p className="text-lg text-blue-200 max-w-2xl mx-auto">
                Perplexity rewired how we search — every answer comes with
                citations. Gemini rewired how we work — AI woven into Gmail,
                Docs, and a 1M token brain. Both cost $20/month. Here{`'`}s how
                to pick.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* TL;DR */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
            <h2 className="text-lg font-bold text-blue-900 mb-3">
              ⚡ TL;DR — The 30-Second Version
            </h2>
            <p className="text-blue-800 mb-3">
              <strong>Perplexity</strong> is the best AI search engine — every
              answer includes verifiable citations, and its research queries
              synthesize 10+ sources in seconds. Choose it if you value accuracy,
              source transparency, and replacing Google Search.
            </p>
            <p className="text-blue-800 mb-3">
              <strong>Gemini</strong> is Google{`'`}s AI brain — it understands
              images, video, and audio natively, has a 1M token context window,
              and lives inside Gmail, Docs, and Sheets. Choose it if you{`'`}re
              deep in the Google ecosystem or need a general-purpose AI
              assistant.
            </p>
            <p className="text-blue-800 font-medium">
              Best strategy? Use both. Perplexity for research and fact-checking,
              Gemini for everything else. ~$40/month for the full stack.
            </p>
          </div>

          {/* Feature Comparison Table */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Feature-by-Feature Comparison
          </h2>

          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse bg-white rounded-xl shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-4 font-semibold text-gray-700 w-1/3">
                    Feature
                  </th>
                  <th className="text-left p-4 font-semibold text-blue-700 w-1/3">
                    Perplexity
                  </th>
                  <th className="text-left p-4 font-semibold text-purple-700 w-1/3">
                    Gemini
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="p-4 font-medium text-gray-700">Company</td>
                  <td className="p-4 text-gray-600">Perplexity AI (startup, $9B+ valuation)</td>
                  <td className="p-4 text-gray-600">Google DeepMind (Alphabet)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-medium text-gray-700">Primary Strength</td>
                  <td className="p-4 text-gray-600">🔍 Cited web search &amp; research</td>
                  <td className="p-4 text-gray-600">🧠 General intelligence &amp; ecosystem</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-700">Free Tier</td>
                  <td className="p-4 text-gray-600">Yes — limited queries, basic search</td>
                  <td className="p-4 text-gray-600">Yes — Gemini 2.5 Flash, generous limits</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-medium text-gray-700">Pro Price</td>
                  <td className="p-4 text-gray-600">$20/mo ($200/yr)</td>
                  <td className="p-4 text-gray-600">$19.99/mo (Google AI Pro)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-700">Enterprise Price</td>
                  <td className="p-4 text-gray-600">$40/seat/mo (Enterprise Pro) — $325/seat/mo (Max)</td>
                  <td className="p-4 text-gray-600">$30/user/mo (Gemini Business) — custom Enterprise</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-medium text-gray-700">Source Citations</td>
                  <td className="p-4 text-green-700 font-medium">✅ Every answer, inline numbered</td>
                  <td className="p-4 text-gray-600">⚠️ Sometimes, not always inline</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-700">Deep Research</td>
                  <td className="p-4 text-gray-600">20 queries/day (Pro) — multi-step, real-time</td>
                  <td className="p-4 text-gray-600">Agentic — 5-15 min autonomous investigations</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-medium text-gray-700">AI Models Available</td>
                  <td className="p-4 text-gray-600">GPT-5, Claude 4.5, Gemini, Sonar (own model)</td>
                  <td className="p-4 text-gray-600">Gemini 2.5 Pro, 2.5 Flash, Imagen 4</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-700">Context Window</td>
                  <td className="p-4 text-gray-600">Varies by underlying model</td>
                  <td className="p-4 text-green-700 font-medium">1M tokens standard (Gemini 2.5 Pro)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-medium text-gray-700">Multimodal</td>
                  <td className="p-4 text-gray-600">Image upload, image gen (limited)</td>
                  <td className="p-4 text-green-700 font-medium">Native image, video, audio, code</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-700">Image Generation</td>
                  <td className="p-4 text-gray-600">Basic (DALL-E / Playground integration)</td>
                  <td className="p-4 text-green-700 font-medium">Imagen 4 (industry-leading photorealism)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-medium text-gray-700">Coding</td>
                  <td className="p-4 text-gray-600">Research-level (find docs, explain code)</td>
                  <td className="p-4 text-green-700 font-medium">Production-level (Gemini CLI, Colab, Android Studio)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-700">Workspace Integration</td>
                  <td className="p-4 text-gray-600">❌ None</td>
                  <td className="p-4 text-green-700 font-medium">✅ Gmail, Docs, Sheets, Slides, Drive</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-medium text-gray-700">Video Understanding</td>
                  <td className="p-4 text-gray-600">❌ Not supported</td>
                  <td className="p-4 text-green-700 font-medium">✅ Upload and analyze hour-long videos</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-700">Mobile App</td>
                  <td className="p-4 text-gray-600">iOS &amp; Android (excellent)</td>
                  <td className="p-4 text-gray-600">iOS &amp; Android (Google app built-in)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-medium text-gray-700">API Access</td>
                  <td className="p-4 text-gray-600">Sonar API ($1/1K queries)</td>
                  <td className="p-4 text-gray-600">Gemini API (Flash $0.15/M tokens, Pro $7/M)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-700">Spaces / Collections</td>
                  <td className="p-4 text-green-700 font-medium">✅ Collaborative research spaces</td>
                  <td className="p-4 text-gray-600">Gems (custom AI personas)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-medium text-gray-700">File Upload</td>
                  <td className="p-4 text-gray-600">50 files/space, 50 MB each (Pro)</td>
                  <td className="p-4 text-green-700 font-medium">Large files, 1M context processes them</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-700">Bundled Extras</td>
                  <td className="p-4 text-gray-600">$0 — just the search product</td>
                  <td className="p-4 text-green-700 font-medium">2TB Google Drive + Workspace AI features</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-medium text-gray-700">Best For</td>
                  <td className="p-4 text-gray-600">Researchers, journalists, analysts, fact-checkers</td>
                  <td className="p-4 text-gray-600">Google users, developers, general AI assistant</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pricing Deep Dive */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Pricing Deep Dive: The $20/Month Showdown
          </h2>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <p className="text-gray-700 mb-6">
              Both tools cost approximately $20/month for their premium tiers.
              But what you get for that $20 is dramatically different.
            </p>

            <h3 className="text-xl font-bold text-blue-800 mb-4">
              Perplexity Pro — $20/month
            </h3>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>20 Pro research queries/day (multi-step, 10+ sources per query)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Unlimited standard queries</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Model selection: GPT-5, Claude 4.5 Sonnet, Gemini, Sonar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>50 Labs queries/month (experimental features)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>3 video generations/month</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>5-user collaborative Spaces</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>50 file uploads per Space (50 MB each)</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-purple-800 mb-4">
              Gemini Advanced (Google AI Pro) — $19.99/month
            </h3>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span>Full Gemini 2.5 Pro access (best reasoning model)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span>1M token context window (process entire books/codebases)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span>Deep Research agent (autonomous multi-page reports)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span>Imagen 4 image generation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span>Gemini in Gmail, Docs, Sheets, Slides</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span>2 TB Google Drive storage (normally $10/mo alone)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span>Gems (custom AI personas for different tasks)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span>Native video/audio/image understanding</span>
              </li>
            </ul>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <p className="text-purple-800 text-sm">
                <strong>The Bundle Factor:</strong> Gemini Advanced includes
                Google One AI Premium ($19.99/mo) which bundles 2TB Drive
                storage + Workspace AI. If you{`'`}re already paying for Google
                One ($10/mo for 2TB), switching to AI Premium adds Gemini
                Advanced for effectively $10/month — half the price.
              </p>
            </div>
          </div>

          {/* Enterprise Pricing */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Enterprise Pricing: Scale Changes Everything
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left p-3 font-semibold text-gray-700">Tier</th>
                    <th className="text-left p-3 font-semibold text-blue-700">Perplexity</th>
                    <th className="text-left p-3 font-semibold text-purple-700">Gemini</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-3 font-medium">Team/Business</td>
                    <td className="p-3">$40/seat/mo (Enterprise Pro)</td>
                    <td className="p-3">$30/user/mo (Gemini Business)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Power Tier</td>
                    <td className="p-3">$325/seat/mo (Enterprise Max)</td>
                    <td className="p-3">$30/user/mo (Gemini Enterprise)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Key Features</td>
                    <td className="p-3">500 queries/day, SSO, SOC 2</td>
                    <td className="p-3">Unlimited AI, SSO, DLP, Vault</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">50-person team/year</td>
                    <td className="p-3">$24,000 (Pro) — $195,000 (Max)</td>
                    <td className="p-3">$18,000 (Business) — $18,000 (Enterprise)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-600 mt-4 text-sm">
              At enterprise scale, Gemini is dramatically cheaper — $30/user for
              unlimited AI in the entire Google Workspace suite. Perplexity
              Enterprise Max at $325/seat is 10x the cost but offers unlimited
              research queries, o3-pro/Opus 4.1 model access, and audio-enabled
              video generation that Gemini doesn{`'`}t match.
            </p>
          </div>

          {/* Research Quality */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Research Quality: The Core Battle
          </h2>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <p className="text-gray-700 mb-6">
              This is where these tools fundamentally diverge. Perplexity was
              built from the ground up as a search engine. Gemini was built as a
              general intelligence that also searches.
            </p>

            <h3 className="text-xl font-bold text-blue-800 mb-4">
              Perplexity: Search-First Architecture
            </h3>
            <div className="space-y-4 text-gray-700 mb-8">
              <p>
                Perplexity{`'`}s core innovation is real-time web search with
                inline citations. When you ask a question, it doesn{`'`}t just
                generate an answer — it searches the web, reads multiple
                sources, synthesizes findings, and numbers every source so you
                can verify any claim.
              </p>
              <p>
                Its <strong>Pro research queries</strong> go further: they
                perform multi-step reasoning, searching 10+ sources, asking
                follow-up questions to itself, and iterating until it has a
                complete answer. Think of it as a research assistant that checks
                its own work.
              </p>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-blue-800 font-medium mb-2">
                  Where Perplexity Excels at Research:
                </p>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• Factual questions where source verification matters</li>
                  <li>• Current events and breaking news (real-time index)</li>
                  <li>• Competitive research and market analysis</li>
                  <li>• Academic research with citation trails</li>
                  <li>• Quick lookups that would take 5+ Google searches</li>
                  <li>• Comparing products, services, or technical specs</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-bold text-purple-800 mb-4">
              Gemini: Intelligence-First Architecture
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Gemini approaches research differently. Instead of being a
                search engine enhanced with AI, it{`'`}s an AI model that can
                search when needed. Its <strong>Deep Research</strong> feature
                is an autonomous agent: you give it a topic, and it spends 5-15
                minutes browsing the web, reading dozens of sources, and
                producing a structured multi-page report.
              </p>
              <p>
                The tradeoff: Gemini Deep Research produces more comprehensive
                reports (often 2,000-5,000 words with organized sections), but
                it takes minutes instead of seconds, and its citations are less
                granular — you get a source list rather than inline per-claim
                citations.
              </p>
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-purple-800 font-medium mb-2">
                  Where Gemini Excels at Research:
                </p>
                <ul className="space-y-1 text-purple-700 text-sm">
                  <li>• Deep analytical reports (market landscapes, technical deep dives)</li>
                  <li>• Processing uploaded documents (1M context = entire books)</li>
                  <li>• Cross-referencing your Google Drive files with web data</li>
                  <li>• Visual research (analyzing images, charts, diagrams)</li>
                  <li>• Video analysis (summarize lectures, extract key points)</li>
                  <li>• Multi-document synthesis from your own files</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Citation Accuracy */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Citation Accuracy: The Trust Factor
            </h3>
            <p className="text-gray-700 mb-6">
              For researchers, journalists, and analysts, citation accuracy
              isn{`'`}t a nice-to-have — it{`'`}s the whole point.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-5">
                <h4 className="font-bold text-blue-800 mb-3">Perplexity Citations</h4>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>✅ Inline numbered citations [1][2][3]</li>
                  <li>✅ Every factual claim linked to source</li>
                  <li>✅ Click to verify any specific statement</li>
                  <li>✅ Source quality indicators</li>
                  <li>⚠️ Occasionally hallucinates source content</li>
                  <li>⚠️ Some Reddit/forum sources of questionable authority</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-lg p-5">
                <h4 className="font-bold text-purple-800 mb-3">Gemini Citations</h4>
                <ul className="space-y-2 text-sm text-purple-700">
                  <li>⚠️ Not always provided</li>
                  <li>⚠️ Source list at end rather than inline</li>
                  <li>✅ Deep Research reports include source lists</li>
                  <li>✅ Google Search integration for fact-checking</li>
                  <li>⚠️ More likely to synthesize without attribution</li>
                  <li>✅ Better at reasoning from first principles</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800 text-sm">
                <strong>Reality Check:</strong> Neither tool is 100% reliable
                with citations. Perplexity occasionally misattributes claims to
                sources that don{`'`}t actually say what{`'`}s claimed. Gemini
                sometimes presents information confidently without any source.
                For anything important, verify citations manually — regardless
                of which tool you use.
              </p>
            </div>
          </div>

          {/* Multimodal & Ecosystem */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Beyond Search: Multimodal &amp; Ecosystem
          </h2>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <p className="text-gray-700 mb-6">
              If you only need a search tool, stop here — Perplexity wins. But
              most people don{`'`}t just search. Here{`'`}s where Gemini{`'`}s
              broader capabilities create a different value proposition entirely.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Multimodal Intelligence (Gemini{`'`}s Decisive Win)
            </h3>
            <div className="space-y-3 text-gray-700 mb-8">
              <p>
                Gemini 2.5 Pro natively understands images, video, audio, and
                code within a single 1M-token context window. This isn{`'`}t a
                bolt-on feature — it{`'`}s the core architecture.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1 font-bold">📹</span>
                  <span>
                    <strong>Video:</strong> Upload an hour-long lecture and ask
                    questions about specific moments. Gemini understands visual
                    content, not just transcribed text.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1 font-bold">🖼️</span>
                  <span>
                    <strong>Images:</strong> Analyze charts, photos, screenshots,
                    diagrams, handwritten notes. Describe, extract data,
                    compare visual elements.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1 font-bold">🎵</span>
                  <span>
                    <strong>Audio:</strong> Process podcasts, meetings, voice
                    memos. Transcribe, summarize, extract action items.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1 font-bold">🎨</span>
                  <span>
                    <strong>Image Generation:</strong> Imagen 4 produces
                    industry-leading photorealistic images. Perplexity{`'`}s
                    image generation is basic by comparison.
                  </span>
                </li>
              </ul>
              <p className="text-sm text-gray-500 mt-3">
                Perplexity supports image uploads and can generate basic images,
                but it{`'`}s fundamentally a text-in, text-out tool. If your
                workflow involves non-text media, Gemini is the only choice.
              </p>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Google Workspace Integration (Gemini{`'`}s Ecosystem Moat)
            </h3>
            <div className="space-y-3 text-gray-700">
              <p>
                This is the feature Perplexity simply cannot match. With Gemini
                Advanced:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>
                    <strong>Gmail:</strong> {`"`}Summarize this email thread{`"`}
                    / {`"`}Draft a reply declining politely{`"`} / {`"`}Find all
                    emails from this sender about pricing{`"`}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>
                    <strong>Google Docs:</strong> {`"`}Rewrite this section
                    formally{`"`} / {`"`}Add a conclusion{`"`} / {`"`}Summarize
                    this 50-page document{`"`}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>
                    <strong>Google Sheets:</strong> {`"`}Create a formula for
                    this{`"`} / {`"`}Analyze this data and create a chart{`"`} /
                    {`"`}Clean up these 10K rows{`"`}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>
                    <strong>Google Drive:</strong> {`"`}Find the contract we
                    signed last quarter{`"`} / {`"`}Compare these two documents{`"`}
                  </span>
                </li>
              </ul>
              <p className="text-sm text-gray-500 mt-3">
                If you spend your workday in Google Workspace, Gemini Advanced
                is an AI assistant that already knows your files, emails, and
                calendar. Perplexity has no Workspace integration at all.
              </p>
            </div>
          </div>

          {/* Coding */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Coding Capabilities: Not Even Close
            </h3>
            <p className="text-gray-700 mb-4">
              Gemini 2.5 Pro is one of the strongest coding models available.
              It generates, debugs, refactors, and explains code at a
              professional level. It integrates with:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span><strong>Gemini CLI:</strong> Terminal-based coding assistant (like Claude Code)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span><strong>Android Studio:</strong> Native AI coding in Google{`'`}s IDE</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span><strong>Google Colab:</strong> AI-assisted data science notebooks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span><strong>Firebase:</strong> AI-assisted backend development</span>
              </li>
            </ul>
            <p className="text-gray-700">
              Perplexity can answer coding questions and find documentation, but
              it{`'`}s not a coding tool. If development is part of your
              workflow, this isn{`'`}t a contest.
            </p>
          </div>

          {/* Unique Features */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Features Only One Tool Has
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-blue-800 mb-4">
                🔵 Only in Perplexity
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong className="text-blue-700">Multi-Model Selection</strong>
                  <p className="text-sm text-gray-500 mt-1">
                    Choose GPT-5, Claude, Gemini, or Sonar as your reasoning
                    engine. Get the best of every AI through one interface.
                  </p>
                </li>
                <li>
                  <strong className="text-blue-700">Collaborative Spaces</strong>
                  <p className="text-sm text-gray-500 mt-1">
                    Share research with team members. Build a knowledge base
                    around a project. Upload files for group analysis.
                  </p>
                </li>
                <li>
                  <strong className="text-blue-700">Inline Source Verification</strong>
                  <p className="text-sm text-gray-500 mt-1">
                    Every numbered citation is clickable. No other tool makes
                    fact-checking this seamless.
                  </p>
                </li>
                <li>
                  <strong className="text-blue-700">Focus Modes</strong>
                  <p className="text-sm text-gray-500 mt-1">
                    Academic, Writing, Math, YouTube, Reddit — restrict search
                    to specific domains for targeted results.
                  </p>
                </li>
                <li>
                  <strong className="text-blue-700">Sonar API</strong>
                  <p className="text-sm text-gray-500 mt-1">
                    Build cited-search into your own applications. $1 per 1,000
                    queries — no other search API includes AI synthesis.
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-purple-800 mb-4">
                🟣 Only in Gemini
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong className="text-purple-700">1M Token Context Window</strong>
                  <p className="text-sm text-gray-500 mt-1">
                    Process entire codebases, books, or hours of transcripts in
                    a single conversation. No other consumer AI matches this.
                  </p>
                </li>
                <li>
                  <strong className="text-purple-700">Native Video Understanding</strong>
                  <p className="text-sm text-gray-500 mt-1">
                    Upload videos and ask questions about visual content —
                    not just transcribed audio, but what{`'`}s actually shown.
                  </p>
                </li>
                <li>
                  <strong className="text-purple-700">Workspace AI Integration</strong>
                  <p className="text-sm text-gray-500 mt-1">
                    AI baked into Gmail, Docs, Sheets, Slides, Drive. Your
                    assistant already has context from your work.
                  </p>
                </li>
                <li>
                  <strong className="text-purple-700">Gems (Custom AI Personas)</strong>
                  <p className="text-sm text-gray-500 mt-1">
                    Create specialized AI assistants for recurring tasks — a
                    coding reviewer, a writing editor, a research analyst.
                  </p>
                </li>
                <li>
                  <strong className="text-purple-700">Google Ecosystem Lock-in Advantages</strong>
                  <p className="text-sm text-gray-500 mt-1">
                    2TB Drive storage, Google Photos AI, travel planning with
                    Maps, shopping integration — the entire Google stack AI-enabled.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Hidden Costs */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Hidden Costs &amp; Gotchas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-blue-800 mb-4">
                Perplexity Gotchas
              </h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li>
                  <strong>Research query limits are firm.</strong> 20/day on Pro,
                  no way to buy more. Heavy researchers hit this ceiling daily.
                </li>
                <li>
                  <strong>Standard queries are less useful.</strong> Without Pro
                  mode, you get basic answers without deep multi-source
                  synthesis. The free tier is a significant downgrade.
                </li>
                <li>
                  <strong>No mid-tier option.</strong> $20/mo Pro to $40/seat/mo
                  Enterprise is a big jump with no middle ground.
                </li>
                <li>
                  <strong>Citation hallucination.</strong> Sometimes claims a
                  source says something it doesn{`'`}t. Trust but verify.
                </li>
                <li>
                  <strong>No workspace features.</strong> Pure search tool —
                  can{`'`}t draft in Docs, manage spreadsheets, or read your
                  email.
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-purple-800 mb-4">
                Gemini Gotchas
              </h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li>
                  <strong>Citations are inconsistent.</strong> Sometimes you get
                  sources, sometimes you don{`'`}t. No way to force inline
                  citations like Perplexity.
                </li>
                <li>
                  <strong>Deep Research is slow.</strong> 5-15 minutes per
                  investigation. Great for thorough reports, terrible for quick
                  questions.
                </li>
                <li>
                  <strong>Google lock-in.</strong> The best features require
                  Google Workspace. Microsoft 365 or Apple ecosystem users get
                  less value.
                </li>
                <li>
                  <strong>Overconfident responses.</strong> Gemini can present
                  speculation as fact, especially on ambiguous topics, without
                  flagging uncertainty.
                </li>
                <li>
                  <strong>Data privacy concerns.</strong> Google{`'`}s business
                  model is data-driven. Some users prefer Perplexity{`'`}s
                  narrower data footprint.
                </li>
              </ul>
            </div>
          </div>

          {/* Scenarios */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            6 Real-World Scenarios: Which Tool Wins?
          </h2>

          <div className="space-y-6 mb-12">
            {[
              {
                title: "📰 Journalist fact-checking a story",
                winner: "Perplexity",
                color: "blue",
                reason:
                  "Every claim needs a source. Perplexity's inline citations let you verify each fact in seconds. Gemini might give you a better narrative, but you can't trace where each claim came from.",
              },
              {
                title: "👨‍💻 Developer building a web app",
                winner: "Gemini",
                color: "purple",
                reason:
                  "Gemini 2.5 Pro generates production-quality code, integrates with Colab and Android Studio, and its 1M context window can process your entire codebase. Perplexity can help you find documentation, but it can't write code for you.",
              },
              {
                title: "📊 Marketing manager analyzing competitors",
                winner: "Perplexity",
                color: "blue",
                reason:
                  "Competitive research requires current data from multiple sources with citations. Perplexity's multi-step research queries synthesize competitor pricing, features, and positioning from fresh web sources. Gemini's Deep Research takes 10+ minutes per competitor.",
              },
              {
                title: "📧 Executive managing inbox & documents",
                winner: "Gemini",
                color: "purple",
                reason:
                  "Gemini lives inside Gmail, Docs, and Sheets. 'Summarize this email thread,' 'Draft a reply,' 'Analyze this spreadsheet' — all without leaving Google Workspace. Perplexity has zero email/document integration.",
              },
              {
                title: "🎓 Graduate student writing a thesis",
                winner: "Both ($40/mo)",
                color: "green",
                reason:
                  "Use Perplexity for literature review and source discovery (citations are critical). Use Gemini for analyzing PDFs, processing lecture videos (1M context window), and writing assistance. Together they cover every thesis workflow.",
              },
              {
                title: "🏢 Small business owner",
                winner: "Gemini",
                color: "purple",
                reason:
                  "The Google ecosystem bundle is unbeatable value: AI in your email, documents, and spreadsheets, plus 2TB storage. A business owner needs a general assistant more than a research tool. Perplexity is great if you also need market research.",
              },
            ].map((scenario, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">
                    {scenario.title}
                  </h3>
                  <span
                    className={`text-sm font-bold px-3 py-1 rounded-full ${
                      scenario.color === "blue"
                        ? "bg-blue-100 text-blue-700"
                        : scenario.color === "purple"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    → {scenario.winner}
                  </span>
                </div>
                <p className="text-gray-600">{scenario.reason}</p>
              </div>
            ))}
          </div>

          {/* Power Combo */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            The Power Combo: Use Both ($40/month)
          </h2>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-12">
            <p className="text-gray-700 mb-6">
              Here{`'`}s the not-so-secret truth: these tools are more
              complementary than competitive. The optimal workflow for power
              users is using both.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold text-blue-800 mb-2">
                  Use Perplexity For:
                </h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>🔍 Quick factual lookups (replaces Google Search)</li>
                  <li>📋 Source gathering with citations</li>
                  <li>📰 Current events and breaking news</li>
                  <li>🏪 Product/service comparisons</li>
                  <li>📊 Competitive research and market data</li>
                  <li>✅ Fact-checking any claim</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-purple-800 mb-2">
                  Use Gemini For:
                </h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>📧 Email drafting and management (Gmail)</li>
                  <li>📝 Document creation and editing (Docs)</li>
                  <li>📊 Data analysis and formulas (Sheets)</li>
                  <li>💻 Code generation and debugging</li>
                  <li>📹 Video/audio analysis (1M context)</li>
                  <li>🎨 Image generation (Imagen 4)</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4">
              <p className="text-gray-700 text-sm">
                <strong>Combined Monthly Cost:</strong> $40/month ($20
                Perplexity Pro + $19.99 Gemini Advanced). For context, that{`'`}s
                less than a single ChatGPT Pro subscription ($200/mo) and gives
                you best-in-class search + best-in-class ecosystem AI.
              </p>
            </div>
          </div>

          {/* Competitive Landscape */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Where They Fit in the AI Landscape (2026)
          </h2>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left p-3 font-semibold text-gray-700">Tool</th>
                    <th className="text-left p-3 font-semibold text-gray-700">Price</th>
                    <th className="text-left p-3 font-semibold text-gray-700">Best At</th>
                    <th className="text-left p-3 font-semibold text-gray-700">Weakness</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-blue-50">
                    <td className="p-3 font-medium">Perplexity Pro</td>
                    <td className="p-3">$20/mo</td>
                    <td className="p-3">Cited search, research</td>
                    <td className="p-3">No coding, no ecosystem</td>
                  </tr>
                  <tr className="bg-purple-50">
                    <td className="p-3 font-medium">Gemini Advanced</td>
                    <td className="p-3">$20/mo</td>
                    <td className="p-3">Multimodal, Workspace, coding</td>
                    <td className="p-3">Weak citations</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">ChatGPT Plus</td>
                    <td className="p-3">$20/mo</td>
                    <td className="p-3">Conversational AI, plugins</td>
                    <td className="p-3">Weaker search than Perplexity</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Claude Pro</td>
                    <td className="p-3">$20/mo</td>
                    <td className="p-3">Writing, analysis, reasoning</td>
                    <td className="p-3">No web search, no ecosystem</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">You.com</td>
                    <td className="p-3">$15/mo</td>
                    <td className="p-3">Budget AI search</td>
                    <td className="p-3">Less polished, smaller model selection</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Microsoft Copilot Pro</td>
                    <td className="p-3">$20/mo</td>
                    <td className="p-3">Microsoft 365 integration</td>
                    <td className="p-3">Bing search quality, weaker model</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mt-8 mb-4">
              4 Market Trends Shaping This Comparison
            </h3>
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-medium text-gray-900">
                  1. Search Is Becoming AI-Native
                </p>
                <p className="text-sm text-gray-600">
                  Google{`'`}s AI Overviews and Perplexity{`'`}s growth signal
                  the end of {`"`}10 blue links.{`"`} The question isn{`'`}t
                  whether AI search replaces traditional search — it{`'`}s
                  which AI search wins. Perplexity has the early lead in
                  dedicated AI search; Google has the distribution.
                </p>
              </div>
              <div>
                <p className="font-medium text-gray-900">
                  2. Ecosystem Lock-in Is the Real Moat
                </p>
                <p className="text-sm text-gray-600">
                  Gemini{`'`}s power isn{`'`}t the model — it{`'`}s Gmail +
                  Drive + Docs + Sheets + Photos + Maps. Perplexity is
                  a better search tool, but Google is a better platform.
                  Platform beats product in the long run.
                </p>
              </div>
              <div>
                <p className="font-medium text-gray-900">
                  3. Citations Are Becoming Table Stakes
                </p>
                <p className="text-sm text-gray-600">
                  ChatGPT added web search with citations. Gemini is improving
                  its citation game. Perplexity{`'`}s differentiator is being
                  commoditized — it needs to stay ahead on citation quality and
                  research depth to justify its existence.
                </p>
              </div>
              <div>
                <p className="font-medium text-gray-900">
                  4. The $20/Month Price War Is Unsustainable
                </p>
                <p className="text-sm text-gray-600">
                  Every major AI tool costs $20/month. This pricing uniformity
                  means differentiation shifts from price to features. Expect
                  bundling (Gemini + Workspace), vertical specialization
                  (Perplexity for research), or tiering (ChatGPT Pro at $200)
                  to break the stalemate.
                </p>
              </div>
            </div>
          </div>

          {/* Decision Framework */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Decision Framework: Which Should You Choose?
          </h2>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-bold text-gray-900">Choose Perplexity if:</p>
                <ul className="text-gray-600 text-sm mt-2 space-y-1">
                  <li>• You need verifiable sources for every claim</li>
                  <li>• Research and fact-checking are your primary use case</li>
                  <li>• You want to replace Google Search with something smarter</li>
                  <li>• You value multi-model access (GPT-5 + Claude + Gemini in one tool)</li>
                  <li>• You{`'`}re a journalist, analyst, academic, or content creator</li>
                  <li>• You don{`'`}t use Google Workspace heavily</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <p className="font-bold text-gray-900">Choose Gemini if:</p>
                <ul className="text-gray-600 text-sm mt-2 space-y-1">
                  <li>• You live in the Google ecosystem (Gmail, Docs, Drive)</li>
                  <li>• You need multimodal capabilities (video, audio, images)</li>
                  <li>• Coding is part of your workflow</li>
                  <li>• You want 1M token context for processing large documents</li>
                  <li>• The 2TB Drive storage bundle matters to you</li>
                  <li>• You want one general-purpose AI assistant, not a specialized tool</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <p className="font-bold text-gray-900">Choose both if:</p>
                <ul className="text-gray-600 text-sm mt-2 space-y-1">
                  <li>• You{`'`}re a knowledge worker who researches AND creates</li>
                  <li>• You need citations for research but also need Workspace AI</li>
                  <li>• $40/month is reasonable for your productivity gains</li>
                  <li>• You want best-in-class at both search AND general AI</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 mb-12">
            {jsonLd.mainEntity.map((faq, i) => (
              <details
                key={i}
                className="bg-white rounded-xl shadow-sm overflow-hidden group"
              >
                <summary className="p-6 cursor-pointer font-medium text-gray-900 hover:bg-gray-50 list-none flex items-center justify-between">
                  {faq.name}
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  {faq.acceptedAnswer.text}
                </div>
              </details>
            ))}
          </div>

          {/* Internal Links */}
          <div className="bg-gray-100 rounded-xl p-8 mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Related Comparisons &amp; Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link
                href="/perplexity-vs-chatgpt"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Perplexity vs ChatGPT →
              </Link>
              <Link
                href="/chatgpt-vs-gemini"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                ChatGPT vs Gemini →
              </Link>
              <Link
                href="/claude-vs-gemini"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Claude vs Gemini →
              </Link>
              <Link
                href="/perplexity-alternatives"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Perplexity Alternatives →
              </Link>
              <Link
                href="/perplexity-pro-pricing"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Perplexity Pro Pricing Guide →
              </Link>
              <Link
                href="/chatgpt-vs-claude"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                ChatGPT vs Claude →
              </Link>
              <Link
                href="/deepseek-vs-claude"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                DeepSeek vs Claude →
              </Link>
              <Link
                href="/"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Browse 3,700+ AI Tools →
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">
              Find the Right AI Tool for Your Workflow
            </h2>
            <p className="text-blue-100 mb-6 max-w-lg mx-auto">
              Compare 3,700+ AI tools across every category. Pricing, features,
              and honest comparisons — no fluff.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/compare"
                className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
              >
                Compare More Tools
              </Link>
              <Link
                href="/submit"
                className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition"
              >
                Submit Your Tool
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
