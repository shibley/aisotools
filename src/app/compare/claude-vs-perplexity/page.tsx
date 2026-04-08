import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claude vs Perplexity (2026): Which AI Tool Is Better for Research? | AISO Tools",
  description:
    "Claude vs Perplexity — a deep comparison for researchers, writers, and professionals. Features, use cases, pricing, and which tool wins for different tasks in 2026.",
  alternates: {
    canonical: "https://aisotools.com/compare/claude-vs-perplexity",
  },
  openGraph: {
    title: "Claude vs Perplexity (2026): Deep Comparison",
    description:
      "Side-by-side comparison of Claude and Perplexity: reasoning quality, source citations, pricing, and which is better for research vs. conversation.",
    url: "https://aisotools.com/compare/claude-vs-perplexity",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude vs Perplexity — 2026 Deep Comparison",
    description: "AI assistant vs AI search engine — which is better for your work?",
  },
};

const comparisonRows = [
  {
    attribute: "Type",
    claude: "AI assistant / chatbot",
    perplexity: "AI search engine",
  },
  {
    attribute: "Real-time Web Access",
    claude: "Limited (Claude.ai web search on Pro)",
    perplexity: "✓ Always real-time web search",
  },
  {
    attribute: "Source Citations",
    claude: "Partial (web search mode only)",
    perplexity: "✓ Every answer cited",
  },
  {
    attribute: "Context Window",
    claude: "200K tokens (largest available)",
    perplexity: "Standard LLM context",
  },
  {
    attribute: "Document Analysis",
    claude: "✓ Deep (200K context, artifacts)",
    perplexity: "Basic file upload",
  },
  {
    attribute: "Code Generation",
    claude: "✓ Excellent (Artifacts, code runner)",
    perplexity: "Adequate for simple tasks",
  },
  {
    attribute: "Creative Writing",
    claude: "✓ Best-in-class",
    perplexity: "Limited",
  },
  {
    attribute: "Free Tier",
    claude: "Yes (limited)",
    perplexity: "Yes (unlimited basic)",
  },
  {
    attribute: "Pro Pricing",
    claude: "$20/mo (Pro), $25/user/mo (Team)",
    perplexity: "$20/mo (Pro)",
  },
  {
    attribute: "API Access",
    claude: "✓ Anthropic API (usage-based)",
    perplexity: "✓ Sonar API",
  },
  {
    attribute: "Best For",
    claude: "Writing, reasoning, coding, documents",
    perplexity: "Research, fact-finding, news",
  },
];

const claudeStrengths = [
  {
    title: "200K context window — analyze entire books",
    detail: "Claude can process entire codebases, lengthy legal documents, research papers, or books in a single conversation. No AI search engine comes close to this capability for deep document work.",
  },
  {
    title: "Nuanced reasoning and instruction-following",
    detail: "Claude excels at multi-step reasoning, complex analysis, and precisely following detailed instructions. It's more reliable than most models for tasks requiring careful logical thinking.",
  },
  {
    title: "Best-in-class writing quality",
    detail: "For drafting, editing, and polishing content — blog posts, reports, emails, creative fiction — Claude consistently produces the most human-quality writing of any AI assistant.",
  },
  {
    title: "Artifacts for interactive output",
    detail: "Claude creates shareable artifacts (code, documents, visualizations) that you can interact with directly in the chat interface — a unique workflow feature.",
  },
];

const perplexityStrengths = [
  {
    title: "Always up-to-date with real-time web data",
    detail: "Every Perplexity answer draws from live web searches. Claude's training has a knowledge cutoff and web access is limited to Claude.ai Pro subscribers — Perplexity is better for anything time-sensitive.",
  },
  {
    title: "Consistent citation on every answer",
    detail: "Perplexity cites sources inline on every response. This is essential for academic research, journalism, and any work where source verification matters. Claude doesn't cite by default.",
  },
  {
    title: "Better for discovery and news monitoring",
    detail: "Perplexity's real-time indexing makes it ideal for tracking developments, monitoring competitors, or researching breaking topics. Claude's training data has a cutoff date.",
  },
  {
    title: "Perplexity Spaces for team research",
    detail: "Collaborative research spaces let teams share and iterate on research sessions together, building a searchable knowledge base. Claude doesn't have a comparable team research feature.",
  },
];

const faqs = [
  {
    question: "Should I use Claude or Perplexity for research?",
    answer:
      "It depends on what type of research. For verifiable, current-events research where you need cited sources and real-time data, use Perplexity. For deep analysis of documents you already have, long-form synthesis, or nuanced reasoning about complex topics, use Claude. Many researchers use both: Perplexity to gather sources, Claude to analyze and synthesize them.",
  },
  {
    question: "Is Claude better than Perplexity for writing?",
    answer:
      "Yes — Claude is significantly better for writing tasks. It produces more natural, high-quality prose, handles tone and style instructions well, and can work with long documents via its 200K context window. Perplexity is designed for answering questions, not for extended writing or creative work.",
  },
  {
    question: "Can Claude browse the internet?",
    answer:
      "Claude.ai (the consumer product) offers web search on Pro and Team plans. However, it's more selective than Perplexity — Perplexity always searches the web for every query, while Claude uses its training knowledge by default and only searches when you explicitly ask or it determines a search is needed. For guaranteed real-time web access, Perplexity is more reliable.",
  },
  {
    question: "Is Claude or Perplexity better for coding?",
    answer:
      "Claude is better for coding. Claude 3.5 Sonnet and Claude 3 Opus rank among the top models for code generation, debugging, and explanation. Claude's Artifacts feature lets you view and interact with code outputs directly. Perplexity can answer coding questions and find Stack Overflow answers, but it's not a substitute for Claude's deep code generation capabilities.",
  },
  {
    question: "Which is cheaper — Claude or Perplexity?",
    answer:
      "Both are $20/mo for their individual Pro/premium tier. Claude's free tier is more limited (rate-limited conversations), while Perplexity's free tier offers unlimited basic searches. For developers using APIs, compare costs directly: Anthropic's Claude API is usage-based (cost per token), while Perplexity's Sonar API is priced per request plus token. At high volume, costs vary significantly by use case.",
  },
  {
    question: "Can I use Claude and Perplexity together?",
    answer:
      "Absolutely — many professionals use both in a complementary workflow. A common pattern: use Perplexity to research a topic and gather sources, then paste the key findings into Claude for deep analysis, synthesis, or turning into a polished document. This gets you the best of both: Perplexity's real-time retrieval and Claude's superior reasoning and writing.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Claude",
    description: "Anthropic's AI assistant known for nuanced, thoughtful responses and strong reasoning.",
    url: "https://claude.ai",
    applicationCategory: "WebApplication",
    offers: [
      { "@type": "Offer", name: "Free", price: "0", priceCurrency: "USD" },
      { "@type": "Offer", name: "Pro", price: "20", priceCurrency: "USD" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Perplexity",
    description: "AI-powered search engine that provides direct answers with cited sources.",
    url: "https://perplexity.ai",
    applicationCategory: "WebApplication",
    offers: [
      { "@type": "Offer", name: "Free", price: "0", priceCurrency: "USD" },
      { "@type": "Offer", name: "Pro", price: "20", priceCurrency: "USD" },
    ],
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
      { "@type": "ListItem", position: 2, name: "Compare", item: "https://aisotools.com/compare" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Claude vs Perplexity",
        item: "https://aisotools.com/compare/claude-vs-perplexity",
      },
    ],
  },
];

export default function ClaudeVsPerplexityPage() {
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
          <Link href="/compare" className="hover:text-white transition">Compare</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-300">Claude vs Perplexity</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-xl bg-blue-600/20 flex items-center justify-center text-2xl font-bold text-blue-400">
                C
              </div>
              <span className="text-sm text-blue-400 font-medium mt-2">Claude</span>
            </div>
            <span className="text-3xl font-bold text-gray-600">vs</span>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-xl bg-purple-600/20 flex items-center justify-center text-2xl font-bold text-purple-400">
                P
              </div>
              <span className="text-sm text-purple-400 font-medium mt-2">Perplexity</span>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Claude vs Perplexity: Which Is Better for Research in 2026?
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            An honest, in-depth comparison of Claude (AI assistant) and Perplexity (AI search engine). We cover research quality, writing capabilities, pricing, and exactly who should use each tool.
          </p>
        </div>

        {/* The Core Distinction */}
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-bold mb-3">🔑 The Key Distinction First</h2>
          <p className="text-gray-300 leading-relaxed">
            Claude and Perplexity are fundamentally different tools solving different problems. <strong className="text-blue-400">Claude</strong> is an AI assistant built for reasoning, writing, coding, and analysis — it works from training knowledge and uploaded documents. <strong className="text-purple-400">Perplexity</strong> is an AI search engine built for real-time, sourced research — it always searches the web and cites every answer.
          </p>
          <p className="text-gray-400 mt-3 text-sm">
            Comparing them is a bit like comparing a brilliant analyst (Claude) to a research librarian with internet access (Perplexity). You probably need both.
          </p>
        </div>

        {/* Quick Verdict */}
        <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-8 mb-10">
          <h2 className="text-2xl font-bold mb-4">⚡ Quick Verdict</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-blue-400 mb-3">Choose Claude if:</h3>
              <ul className="space-y-2">
                {[
                  "You need to analyze long documents, PDFs, or codebases",
                  "Writing quality matters — emails, reports, creative content",
                  "You're writing or debugging code",
                  "You have complex multi-step reasoning tasks",
                  "You need an AI that can follow precise, detailed instructions",
                ].map((reason, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-blue-400 mt-0.5 flex-shrink-0">→</span>
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-purple-400 mb-3">Choose Perplexity if:</h3>
              <ul className="space-y-2">
                {[
                  "You need current, real-time information on any topic",
                  "Source citations and verifiability matter for your work",
                  "You're doing market research or competitive intelligence",
                  "You want to replace Google for research-type queries",
                  "You're monitoring news or tracking recent developments",
                ].map((reason, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-purple-400 mt-0.5 flex-shrink-0">→</span>
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* At a Glance */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Claude vs Perplexity: At a Glance</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-x-auto">
            <div className="grid grid-cols-3 bg-gray-800/50">
              <div className="p-4 text-sm text-gray-500 font-medium">Attribute</div>
              <div className="p-4 text-center font-semibold text-blue-400">Claude</div>
              <div className="p-4 text-center font-semibold text-purple-400">Perplexity</div>
            </div>
            {comparisonRows.map((row, i) => (
              <div key={i} className="grid grid-cols-3 border-t border-gray-800">
                <div className="p-4 text-sm text-gray-400">{row.attribute}</div>
                <div className="p-4 text-center text-sm text-gray-300">{row.claude}</div>
                <div className="p-4 text-center text-sm text-gray-300">{row.perplexity}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Deep Dives */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">What Makes Each Tool Unique</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 border border-blue-500/20 rounded-xl p-6">
              <h3 className="font-semibold text-blue-400 mb-4">🔵 Where Claude Wins</h3>
              <div className="space-y-4">
                {claudeStrengths.map((item, i) => (
                  <div key={i} className="text-sm">
                    <p className="font-medium text-gray-200 mb-1">{item.title}</p>
                    <p className="text-gray-400 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-900 border border-purple-500/20 rounded-xl p-6">
              <h3 className="font-semibold text-purple-400 mb-4">🟣 Where Perplexity Wins</h3>
              <div className="space-y-4">
                {perplexityStrengths.map((item, i) => (
                  <div key={i} className="text-sm">
                    <p className="font-medium text-gray-200 mb-1">{item.title}</p>
                    <p className="text-gray-400 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Pricing Comparison</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 border border-blue-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">Claude Pricing</h3>
              <div className="space-y-3">
                {[
                  { tier: "Free", price: "$0/mo", note: "Limited daily conversations, Claude 3 Haiku" },
                  { tier: "Pro", price: "$20/mo", note: "Priority access, more usage, Claude 3.5 Sonnet & Opus" },
                  { tier: "Team", price: "$25/user/mo", note: "Shared Projects, admin controls, priority access" },
                  { tier: "Enterprise", price: "Custom", note: "SSO, expanded context, custom fine-tuning" },
                ].map((tier, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-gray-800 pb-2 last:border-0">
                    <div>
                      <span className="text-gray-300 text-sm font-medium">{tier.tier}</span>
                      <p className="text-gray-500 text-xs">{tier.note}</p>
                    </div>
                    <span className="text-sm font-medium">{tier.price}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-900 border border-purple-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-purple-400 mb-4">Perplexity Pricing</h3>
              <div className="space-y-3">
                {[
                  { tier: "Free", price: "$0/mo", note: "Unlimited basic searches, limited Pro searches" },
                  { tier: "Pro", price: "$20/mo", note: "Unlimited Pro Search, file uploads, API credits included" },
                  { tier: "Enterprise Pro", price: "$40/user/mo", note: "Team Spaces, SSO, admin, priority support" },
                ].map((tier, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-gray-800 pb-2 last:border-0">
                    <div>
                      <span className="text-gray-300 text-sm font-medium">{tier.tier}</span>
                      <p className="text-gray-500 text-xs">{tier.note}</p>
                    </div>
                    <span className="text-sm font-medium">{tier.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Use Case Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                <span className="text-blue-400">Best for:</span> Claude
              </h3>
              <ul className="space-y-2 mb-4">
                {[
                  "Writers, editors, and content marketers",
                  "Software developers and engineers",
                  "Lawyers and consultants analyzing documents",
                  "Researchers processing long papers or reports",
                  "Anyone building AI-powered applications (via API)",
                ].map((use, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">•</span>
                    {use}
                  </li>
                ))}
              </ul>
              <a
                href="https://claude.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition"
              >
                Try Claude →
              </a>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                <span className="text-purple-400">Best for:</span> Perplexity
              </h3>
              <ul className="space-y-2 mb-4">
                {[
                  "Students, journalists, and researchers",
                  "Business analysts doing market research",
                  "Anyone tracking news or current events",
                  "Competitive intelligence work",
                  "Replacing Google for non-navigational queries",
                ].map((use, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">•</span>
                    {use}
                  </li>
                ))}
              </ul>
              <a
                href="https://perplexity.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition"
              >
                Try Perplexity →
              </a>
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

        {/* Related Links */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Related Comparisons</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/compare/deepseek-vs-perplexity" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">⚖️ DeepSeek vs Perplexity</h3>
              <p className="text-gray-400 text-sm">Open-source model vs AI search</p>
            </Link>
            <Link href="/compare/perplexity-vs-youcom" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">⚖️ Perplexity vs You.com</h3>
              <p className="text-gray-400 text-sm">AI search engine comparison</p>
            </Link>
            <Link href="/alternatives/perplexity" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">🔄 Perplexity Alternatives</h3>
              <p className="text-gray-400 text-sm">All alternatives to Perplexity</p>
            </Link>
            <Link href="/tool/claude" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">📋 Claude Review</h3>
              <p className="text-gray-400 text-sm">Full review with pros & cons</p>
            </Link>
            <Link href="/tool/perplexity" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">📋 Perplexity Review</h3>
              <p className="text-gray-400 text-sm">Full review with pros & cons</p>
            </Link>
            <Link href="/alternatives/claude" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">🔄 Claude Alternatives</h3>
              <p className="text-gray-400 text-sm">Best alternatives to Claude</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
