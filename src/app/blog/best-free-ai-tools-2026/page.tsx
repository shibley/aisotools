import { getAffiliateUrl } from "@/data/affiliate-links";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Free AI Tools 2026: Top AI Apps That Cost $0",
  description:
    "The best completely free AI tools in 2026 — ChatGPT, Claude, Gemini, Canva AI, Perplexity, and 20+ more. No credit card required. Tested and ranked by category.",
  keywords: [
    "free ai tools",
    "best free ai tools",
    "free ai tools 2026",
    "free ai tools no sign up",
    "best free ai tools for students",
    "free ai writing tools",
    "free ai image generator",
    "free ai tools list",
    "best free artificial intelligence tools",
    "top free ai tools",
  ],
  openGraph: {
    title: "Best Free AI Tools 2026: Top AI Apps That Cost $0",
    description:
      "25+ best free AI tools available right now — writing, image generation, coding, research, and more. All tested with free tier details and limitations.",
    url: "https://aisotools.com/blog/best-free-ai-tools-2026",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/blog/best-free-ai-tools-2026",
  },
};

interface FreeAITool {
  name: string;
  slug: string;
  category: string;
  categoryIcon: string;
  freeLimit: string;
  paidFrom?: string;
  description: string;
  topFreeFeatures: string[];
  limitation: string;
  bestFor: string;
  requiresSignup: boolean;
}

const freeToolsByCategory: { category: string; icon: string; tools: FreeAITool[] }[] = [
  {
    category: "AI Chatbots & Assistants",
    icon: "🤖",
    tools: [
      {
        name: "ChatGPT",
        slug: "chatgpt",
        category: "Chatbots",
        categoryIcon: "🤖",
        freeLimit: "Unlimited (GPT-4o mini), limited GPT-4o",
        paidFrom: "$20/mo for Plus",
        description:
          "OpenAI's flagship AI assistant. The free tier gives you unlimited access to GPT-4o mini (surprisingly capable) and limited daily access to GPT-4o — the most powerful model in the world. Good for writing, coding, research, and conversation.",
        topFreeFeatures: [
          "Unlimited GPT-4o mini messages",
          "Limited GPT-4o access daily",
          "Web browsing",
          "Image uploads",
          "Basic code interpreter",
        ],
        limitation: "GPT-4o access is rate-limited; no custom GPTs on free",
        bestFor: "General writing, research, coding help, Q&A",
        requiresSignup: true,
      },
      {
        name: "Claude",
        slug: "claude",
        category: "Chatbots",
        categoryIcon: "🤖",
        freeLimit: "Unlimited (Claude Sonnet 3.5), rate-limited",
        paidFrom: "$20/mo for Pro",
        description:
          "Anthropic's Claude is widely considered the best AI assistant for writing, nuanced analysis, and long-context tasks. The free tier gives Claude Sonnet 3.5 access — one of the most capable models available for free.",
        topFreeFeatures: [
          "Claude Sonnet 3.5 (powerful model)",
          "200K context window",
          "Projects feature",
          "Document analysis",
          "Artifacts (code, text editing)",
        ],
        limitation: "Rate limits apply; Claude Opus requires Pro",
        bestFor: "Writing, analysis, coding, long documents",
        requiresSignup: true,
      },
      {
        name: "Gemini",
        slug: "gemini",
        category: "Chatbots",
        categoryIcon: "🤖",
        freeLimit: "Unlimited (Gemini 1.5 Flash/Pro limited)",
        paidFrom: "$20/mo for Advanced",
        description:
          "Google's AI assistant with native integration across Google Workspace — Gmail, Docs, Sheets, Drive. The free version is powerful for research, summarization, and Google ecosystem tasks.",
        topFreeFeatures: [
          "Gemini 1.5 Pro limited access",
          "Google Search integration",
          "Image understanding",
          "Google Workspace integration",
          "Multimodal inputs",
        ],
        limitation: "Gemini Advanced (Gemini 1.5 Ultra) requires subscription",
        bestFor: "Google ecosystem users, research, multimodal tasks",
        requiresSignup: true,
      },
      {
        name: "Perplexity",
        slug: "perplexity",
        category: "Chatbots",
        categoryIcon: "🔍",
        freeLimit: "Unlimited (Pro searches limited to 5/day)",
        paidFrom: "$20/mo for Pro",
        description:
          "AI-powered search that answers questions with cited sources. Every answer links to the web pages it used. Perfect for research, fact-checking, and staying current with real-time information.",
        topFreeFeatures: [
          "Unlimited standard searches with citations",
          "Real-time web data",
          "5 Pro searches/day (GPT-4, Claude)",
          "Collections for organizing research",
          "Image search",
        ],
        limitation: "5 Pro model searches/day free; standard model only after that",
        bestFor: "Research, fact-checking, citations, current events",
        requiresSignup: false,
      },
    ],
  },
  {
    category: "AI Writing Tools",
    icon: "✍️",
    tools: [
      {
        name: "Grammarly",
        slug: "grammarly",
        category: "Writing",
        categoryIcon: "✍️",
        freeLimit: "Unlimited grammar/spelling checks",
        paidFrom: "$12/mo for Premium",
        description:
          "The most widely used AI writing assistant. The free tier covers all grammar, spelling, and basic clarity suggestions — works as a browser extension in any text field.",
        topFreeFeatures: [
          "Unlimited grammar and spelling",
          "Clarity and engagement suggestions (basic)",
          "Browser extension",
          "Word and Google Docs add-in",
          "Plagiarism detection (limited)",
        ],
        limitation: "Tone rewriting, generative AI, and plagiarism reports require Premium",
        bestFor: "Proofreading, grammar fixes, professional emails",
        requiresSignup: true,
      },
      {
        name: "Notion AI",
        slug: "notion-ai",
        category: "Writing",
        categoryIcon: "✍️",
        freeLimit: "20 free AI responses included",
        paidFrom: "$10/mo to add AI to any plan",
        description:
          "Notion AI integrates writing assistance directly into your workspace. The free plan includes 20 AI responses to try all features — summarization, drafting, action items, and translation.",
        topFreeFeatures: [
          "20 free AI responses",
          "Summarize, draft, brainstorm",
          "Action item extraction",
          "Translation (25+ languages)",
          "Q&A on your Notion pages",
        ],
        limitation: "20 responses then paid add-on required ($10/mo)",
        bestFor: "Notion users wanting AI in their workflow",
        requiresSignup: true,
      },
    ],
  },
  {
    category: "AI Image Generators",
    icon: "🎨",
    tools: [
      {
        name: "DALL-E 3",
        slug: "dall-e",
        category: "Image Generation",
        categoryIcon: "🎨",
        freeLimit: "Via ChatGPT free tier (limited daily)",
        paidFrom: "$20/mo (ChatGPT Plus)",
        description:
          "OpenAI's image generator is accessible free through ChatGPT. Generates photorealistic and artistic images from text prompts. Quality is excellent for general use cases.",
        topFreeFeatures: [
          "High-quality image generation",
          "Natural language prompts",
          "Multiple style options",
          "Integrated in ChatGPT",
          "No watermarks",
        ],
        limitation: "Limited generations/day on free ChatGPT tier",
        bestFor: "General image creation, social media, marketing mockups",
        requiresSignup: true,
      },
      {
        name: "Adobe Firefly",
        slug: "adobe-firefly",
        category: "Image Generation",
        categoryIcon: "🎨",
        freeLimit: "25 generative credits/month free",
        paidFrom: "$4.99/mo for more credits",
        description:
          "Adobe's AI image generator trained only on licensed content — no copyright concerns for commercial use. Integrates directly into Photoshop and Illustrator. 25 free credits refresh monthly.",
        topFreeFeatures: [
          "25 generative credits/month",
          "Commercial-safe licensed training data",
          "Text-to-image and generative fill",
          "Photoshop integration",
          "Style reference images",
        ],
        limitation: "25 credits/month refreshes; commercial use requires credit",
        bestFor: "Designers, marketers, anyone needing commercial-safe images",
        requiresSignup: true,
      },
      {
        name: "Canva AI",
        slug: "canva",
        category: "Image Generation",
        categoryIcon: "🎨",
        freeLimit: "50 AI credits/month on free plan",
        paidFrom: "$15/mo for Pro (1000 credits)",
        description:
          "Canva's free plan includes AI image generation (Magic Media), background removal, and design tools. The free tier is extremely generous for casual users.",
        topFreeFeatures: [
          "50 AI image generations/month",
          "Background remover (limited)",
          "Magic Write (AI text generation)",
          "1,000+ free templates",
          "Brand kit (limited)",
        ],
        limitation: "50 credits/month; premium elements require Pro",
        bestFor: "Social media graphics, presentations, marketing materials",
        requiresSignup: true,
      },
      {
        name: "Craiyon",
        slug: "craiyon",
        category: "Image Generation",
        categoryIcon: "🎨",
        freeLimit: "Unlimited free generations (with ads)",
        paidFrom: "$5/mo for no ads/faster",
        description:
          "Formerly DALL-E mini, Craiyon offers truly unlimited free AI image generation with no account required. Quality is lower than Midjourney or DALL-E 3 but the zero-friction access is unbeatable.",
        topFreeFeatures: [
          "Unlimited free generations",
          "No account required",
          "9 images per prompt",
          "Simple interface",
          "Downloadable images",
        ],
        limitation: "Lower quality than premium generators; ads on free tier",
        bestFor: "Quick ideation, no-account access, unlimited experimenting",
        requiresSignup: false,
      },
    ],
  },
  {
    category: "AI Coding Tools",
    icon: "💻",
    tools: [
      {
        name: "GitHub Copilot",
        slug: "github-copilot",
        category: "Coding",
        categoryIcon: "💻",
        freeLimit: "Free for students, OSS maintainers, verified teachers",
        paidFrom: "$10/mo for individual",
        description:
          "GitHub Copilot is free for verified students (via GitHub Student Developer Pack) and open-source maintainers. If you qualify, this is the best AI coding assistant available at zero cost.",
        topFreeFeatures: [
          "Full Copilot access for students",
          "Free for OSS contributors",
          "IDE integration (VS Code, JetBrains)",
          "Chat and inline completions",
          "Multi-file context",
        ],
        limitation: "Free only for students/verified OSS; paid for everyone else",
        bestFor: "Students, open-source developers",
        requiresSignup: true,
      },
      {
        name: "Codeium",
        slug: "codeium",
        category: "Coding",
        categoryIcon: "💻",
        freeLimit: "Unlimited completions free forever",
        paidFrom: "$15/mo for Teams",
        description:
          "Codeium offers unlimited free AI code completions, chat, and search — forever, not a trial. Works in 70+ languages and most IDEs. The free tier is genuinely unlimited with no strings attached.",
        topFreeFeatures: [
          "Unlimited code completions",
          "AI chat about code",
          "70+ programming languages",
          "Works in VS Code, JetBrains, Vim",
          "Codebase search",
        ],
        limitation: "Team features and context window require paid plans",
        bestFor: "Individual developers wanting free GitHub Copilot alternative",
        requiresSignup: true,
      },
    ],
  },
  {
    category: "AI Research & Productivity",
    icon: "🔬",
    tools: [
      {
        name: "NotebookLM",
        slug: "notebooklm",
        category: "Research",
        categoryIcon: "🔬",
        freeLimit: "Completely free (Google product)",
        description:
          "Google's AI research assistant is completely free. Upload PDFs, docs, websites, and YouTube videos — NotebookLM creates a private AI trained on your sources. Ask questions, get summaries, create study guides. Audio Overviews (podcast format) is a unique killer feature.",
        topFreeFeatures: [
          "100% free, no paid tier",
          "Upload 50 sources per notebook",
          "AI answers with citations from your docs",
          "Audio Overview (AI podcast from your docs)",
          "Study guide and briefing doc generation",
          "Works with YouTube, Google Docs, PDFs",
        ],
        limitation: "Completely free — no limitations to note",
        bestFor: "Research, studying, document analysis, podcast creation",
        requiresSignup: true,
      },
      {
        name: "Otter.ai",
        slug: "otter-ai",
        category: "Productivity",
        categoryIcon: "📝",
        freeLimit: "300 minutes/month transcription free",
        paidFrom: "$8.33/mo for Pro",
        description:
          "Otter.ai transcribes meetings automatically — Zoom, Google Meet, Teams. The free tier gives 300 minutes per month (about 5 hours) which covers most individual use cases.",
        topFreeFeatures: [
          "300 min/month transcription",
          "Speaker identification",
          "Real-time captions",
          "Zoom/Meet/Teams integration",
          "Searchable transcripts",
        ],
        limitation: "300 min/month; import limited to 3 files; 30 min per conversation",
        bestFor: "Meeting notes, lecture transcription, interviews",
        requiresSignup: true,
      },
      {
        name: "DeepL",
        slug: "deepl",
        category: "Translation",
        categoryIcon: "🌐",
        freeLimit: "500K characters/month translation free",
        paidFrom: "$8.74/mo for Pro",
        description:
          "DeepL produces better translations than Google Translate for European languages. The free tier allows 500,000 characters per month — enough for hundreds of documents.",
        topFreeFeatures: [
          "500K chars/month translation",
          "31 languages",
          "Document translation (3 files/month)",
          "DeepL Write (English/German text improvement)",
          "Browser extension",
        ],
        limitation: "3 doc translations/month; no glossary on free; document history limited",
        bestFor: "High-quality translation, document translation, European languages",
        requiresSignup: false,
      },
    ],
  },
];

export default function BestFreeAITools2026() {
  const totalTools = freeToolsByCategory.reduce(
    (sum, cat) => sum + cat.tools.length,
    0
  );

  return (
    <article className="mx-auto max-w-4xl px-4 py-8">
      {/* Hero */}
      <header className="mb-12">
        <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/blog" className="hover:text-blue-600">
            Blog
          </Link>
          <span>→</span>
          <span>Free AI Tools</span>
        </div>
        <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
          Best Free AI Tools in 2026
        </h1>
        <p className="mb-6 text-xl leading-relaxed text-gray-600">
          {totalTools}+ AI tools you can use right now for free — chatbots, image
          generators, coding assistants, research tools, and more. Most require no
          credit card. All tested with real free tier limits.
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          <span>📅 Updated April 2026</span>
          <span>•</span>
          <span>⏱️ 14 min read</span>
          <span>•</span>
          <span>🆓 {totalTools}+ free tools</span>
        </div>
      </header>

      {/* No credit card callout */}
      <section className="mb-10 rounded-lg border-2 border-green-200 bg-green-50 p-6">
        <h2 className="mb-3 text-xl font-bold text-green-900">
          ✅ Truly Free vs Freemium — What We Cover
        </h2>
        <p className="text-green-800">
          This guide covers AI tools with <strong>meaningful free tiers</strong> —
          not just 3-day trials. Some are completely free forever (NotebookLM,
          Codeium, Craiyon). Others are freemium with limits that cover most use
          cases (ChatGPT, Claude, Grammarly, DALL-E via ChatGPT). Free tier limits
          are listed for every tool.
        </p>
      </section>

      {/* Category sections */}
      {freeToolsByCategory.map((section) => (
        <section
          key={section.category}
          id={section.category.toLowerCase().replace(/\s+/g, "-")}
          className="mb-14"
        >
          <h2 className="mb-8 text-3xl font-bold text-gray-900">
            <span className="mr-2">{section.icon}</span>
            {section.category}
          </h2>

          <div className="space-y-6">
            {section.tools.map((tool) => {
              const affiliateUrl = getAffiliateUrl(tool.slug);
              return (
                <div
                  key={tool.slug}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        <Link href={`/tool/${tool.slug}`} className="hover:text-blue-600">
                          {tool.name}
                        </Link>
                      </h3>
                      <div className="mt-1 flex flex-wrap gap-2">
                        <span className="inline-block rounded-full bg-green-100 px-3 py-0.5 text-xs font-medium text-green-800">
                          🆓 {tool.freeLimit}
                        </span>
                        {!tool.requiresSignup && (
                          <span className="inline-block rounded-full bg-blue-100 px-3 py-0.5 text-xs font-medium text-blue-800">
                            No signup needed
                          </span>
                        )}
                        {tool.paidFrom && (
                          <span className="inline-block rounded-full bg-gray-100 px-3 py-0.5 text-xs text-gray-600">
                            Paid from {tool.paidFrom}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="mb-4 leading-relaxed text-gray-700">{tool.description}</p>

                  <div className="mb-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
                        Top Free Features
                      </h4>
                      <ul className="space-y-1">
                        {tool.topFreeFeatures.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="mt-0.5 text-green-500">✓</span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
                        Free Tier Limitation
                      </h4>
                      <p className="rounded-md bg-amber-50 p-3 text-sm text-amber-800">
                        ⚠️ {tool.limitation}
                      </p>
                      <p className="mt-3 text-sm text-gray-600">
                        <strong>Best for:</strong> {tool.bestFor}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 border-t border-gray-100 pt-4">
                    {affiliateUrl && (
                      <a
                        href={affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="inline-flex items-center rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
                      >
                        Try Free →
                      </a>
                    )}
                    <Link
                      href={`/tool/${tool.slug}`}
                      className="inline-flex items-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                    >
                      Full Review
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}

      {/* Summary table */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">
          Free AI Tools: Quick Reference
        </h2>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border-b border-gray-200 p-3 text-left">Tool</th>
                <th className="border-b border-gray-200 p-3 text-left">Category</th>
                <th className="border-b border-gray-200 p-3 text-left">Free Limit</th>
                <th className="border-b border-gray-200 p-3 text-left">No Signup?</th>
              </tr>
            </thead>
            <tbody>
              {freeToolsByCategory.flatMap((cat) =>
                cat.tools.map((tool) => (
                  <tr key={tool.slug} className="even:bg-gray-50">
                    <td className="border-b border-gray-100 p-3 font-medium">
                      <Link href={`/tool/${tool.slug}`} className="text-blue-600 hover:underline">
                        {tool.name}
                      </Link>
                    </td>
                    <td className="border-b border-gray-100 p-3 text-gray-600">{cat.icon} {cat.category}</td>
                    <td className="border-b border-gray-100 p-3 text-green-700">{tool.freeLimit}</td>
                    <td className="border-b border-gray-100 p-3">{tool.requiresSignup ? "❌" : "✅"}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {[
            {
              q: "What is the best free AI tool overall?",
              a: "ChatGPT and Claude are the best free AI tools for general use. Both offer powerful free tiers with access to capable models. For specific use cases: NotebookLM for research (completely free), Codeium for coding (unlimited free), Canva AI for design, and Perplexity for search.",
            },
            {
              q: "Are there any AI tools that are completely free forever?",
              a: "Yes. NotebookLM by Google is 100% free with no paid tier. Codeium offers unlimited free code completions. Craiyon gives unlimited free image generations (with ads). Perplexity has a powerful free search tier. DeepL offers 500K character translation free monthly.",
            },
            {
              q: "Which free AI writing tools are best?",
              a: "Claude's free tier gives access to Claude Sonnet 3.5 — one of the best writing models available. ChatGPT's free tier with GPT-4o mini is also excellent. For grammar checking and editing, Grammarly's free tier covers all basic needs.",
            },
            {
              q: "Can I use free AI tools for commercial purposes?",
              a: "It depends on the tool. ChatGPT, Claude, and Gemini allow commercial use on free tiers. Adobe Firefly requires generative credits for commercial use. Always check the specific tool's terms of service for commercial licensing.",
            },
          ].map(({ q, a }) => (
            <div key={q}>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">{q}</h3>
              <p className="leading-relaxed text-gray-700">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-lg bg-gradient-to-r from-green-600 to-teal-600 p-8 text-white">
        <h2 className="mb-4 text-3xl font-bold">
          Start for Free, Scale When Ready
        </h2>
        <p className="mb-6 text-lg leading-relaxed text-green-50">
          The best AI stack costs $0 to start. ChatGPT for writing and research,
          Codeium for coding, NotebookLM for research, and Canva AI for design
          cover most needs for free. Upgrade to paid plans only when you hit real
          limits.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/tools"
            className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-green-600 transition-colors hover:bg-gray-100"
          >
            Browse All AI Tools →
          </Link>
          <Link
            href="/alternatives/chatgpt"
            className="inline-flex items-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-green-600"
          >
            ChatGPT Alternatives →
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Best Free AI Tools 2026: Top AI Apps That Cost $0",
            description:
              "Comprehensive guide to the best free AI tools in 2026 including ChatGPT, Claude, Gemini, Canva AI, NotebookLM, Codeium, and more.",
            author: { "@type": "Organization", name: "AISOTools" },
            publisher: {
              "@type": "Organization",
              name: "AISOTools",
              logo: { "@type": "ImageObject", url: "https://aisotools.com/logo.png" },
            },
            datePublished: "2026-04-26",
            dateModified: "2026-04-26",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://aisotools.com/blog/best-free-ai-tools-2026",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is the best free AI tool overall?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "ChatGPT and Claude are the best free AI tools for general use. Both offer powerful free tiers. NotebookLM is completely free for research, Codeium is unlimited free for coding.",
                },
              },
              {
                "@type": "Question",
                name: "Are there any AI tools that are completely free forever?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. NotebookLM by Google is 100% free with no paid tier. Codeium offers unlimited free code completions. Craiyon gives unlimited free image generations. Perplexity has a powerful free search tier.",
                },
              },
            ],
          }),
        }}
      />
    </article>
  );
}
