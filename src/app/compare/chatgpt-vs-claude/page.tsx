import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChatGPT vs Claude (2026): Which AI Assistant Is Better? | AISO Tools",
  description:
    "ChatGPT vs Claude — an honest 2026 comparison covering reasoning, writing, coding, context windows, pricing, and which AI wins for your use case.",
  alternates: {
    canonical: "https://aisotools.com/compare/chatgpt-vs-claude",
  },
  openGraph: {
    title: "ChatGPT vs Claude (2026): Deep Comparison",
    description:
      "Side-by-side comparison of ChatGPT and Claude: reasoning quality, writing, coding, context window, plugins, pricing, and who should use each.",
    url: "https://aisotools.com/compare/chatgpt-vs-claude",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatGPT vs Claude — 2026 Deep Comparison",
    description: "The two most popular AI assistants, compared honestly.",
  },
};

const comparisonRows = [
  { attribute: "Developer", chatgpt: "OpenAI", claude: "Anthropic" },
  { attribute: "Latest Model", chatgpt: "GPT-4o / o3", claude: "Claude 3.7 Sonnet / Opus" },
  { attribute: "Context Window", chatgpt: "128K tokens", claude: "200K tokens (largest)" },
  { attribute: "Image Generation", chatgpt: "✓ DALL-E 3 built-in", claude: "Limited (not built-in)" },
  { attribute: "Web Browsing", chatgpt: "✓ Always-on (GPT-4o)", claude: "✓ Claude.ai Pro (limited)" },
  { attribute: "Code Interpreter", chatgpt: "✓ Advanced Data Analysis", claude: "✓ Code execution in Artifacts" },
  { attribute: "Plugins / Tools", chatgpt: "✓ GPTs marketplace, 100s of tools", claude: "✓ MCP ecosystem (growing)" },
  { attribute: "Writing Quality", chatgpt: "Excellent", claude: "✓ Best-in-class natural prose" },
  { attribute: "Coding Ability", chatgpt: "✓ Excellent (o3, GPT-4o)", claude: "✓ Excellent (Sonnet 3.7)" },
  { attribute: "Safety / Refusals", chatgpt: "Moderate guardrails", claude: "More conservative by design" },
  { attribute: "Free Tier", chatgpt: "Yes (GPT-4o limited)", claude: "Yes (limited daily usage)" },
  { attribute: "Pro Pricing", chatgpt: "$20/mo (Plus)", claude: "$20/mo (Pro)" },
  { attribute: "API", chatgpt: "✓ OpenAI API (industry standard)", claude: "✓ Anthropic API" },
  { attribute: "Voice Mode", chatgpt: "✓ Advanced Voice (Plus/Pro)", claude: "Limited (not native)" },
  { attribute: "Best For", chatgpt: "Multimodal tasks, plugins, voice", claude: "Long docs, writing, reasoning" },
];

const chatgptStrengths = [
  {
    title: "Largest ecosystem of plugins and GPTs",
    detail:
      "ChatGPT's GPT Store has thousands of custom GPTs for every imaginable task. Combined with the Actions framework and integrations like Zapier, Notion, and Google Drive, it's the most connected AI platform available.",
  },
  {
    title: "Best-in-class image generation with DALL-E 3",
    detail:
      "ChatGPT Plus/Pro users get DALL-E 3 directly in chat, making it the best all-in-one choice if you need both text and image generation in a single tool. Claude cannot generate images natively.",
  },
  {
    title: "Advanced Voice Mode for natural conversation",
    detail:
      "ChatGPT's Advanced Voice Mode supports real-time, interrupt-capable conversation with emotion detection. It's the closest AI experience to a genuine voice assistant. Claude doesn't have a comparable voice feature.",
  },
  {
    title: "OpenAI o3 for deep reasoning tasks",
    detail:
      "OpenAI's o-series reasoning models (o3, o4-mini) are purpose-built for math, science, and multi-step logical problems. If you need deep reasoning for STEM tasks, o3 leads the field.",
  },
];

const claudeStrengths = [
  {
    title: "200K context window — process entire books or codebases",
    detail:
      "Claude can hold 200K tokens of context, compared to ChatGPT's 128K. That means uploading a 400-page PDF, an entire codebase, or lengthy legal documents and having Claude reason across all of it at once. Critical for long-document work.",
  },
  {
    title: "Best natural writing quality of any AI",
    detail:
      "Claude's prose quality is consistently rated higher than ChatGPT for blog posts, essays, marketing copy, and creative work. It writes more like a thoughtful human and less like an AI, avoids repetitive phrasing, and handles tone instructions with more nuance.",
  },
  {
    title: "More reliable instruction-following",
    detail:
      "Claude is less likely to go off-script on complex, multi-part instructions. When you give Claude detailed formatting or behavioral constraints, it adheres to them more consistently than GPT-4o in head-to-head tests.",
  },
  {
    title: "Projects for long-running context",
    detail:
      "Claude's Projects feature gives persistent context across conversations — you can upload documents, set persistent instructions, and have Claude remember details across sessions. Ideal for ongoing work like research, editing, or client projects.",
  },
];

const faqs = [
  {
    question: "Is Claude or ChatGPT better at writing?",
    answer:
      "Claude generally produces higher-quality, more natural writing. Most benchmarks and user comparisons give Claude the edge for long-form content, nuanced prose, and creative writing. ChatGPT is still excellent but tends toward more formulaic outputs. For marketing copy, essays, and blog posts, Claude is usually preferred by professional writers.",
  },
  {
    question: "Which is better for coding — Claude or ChatGPT?",
    answer:
      "Both are excellent coders. Claude 3.7 Sonnet and GPT-4o are roughly equal on general coding tasks. For agentic coding (long autonomous tasks, refactoring large codebases), Claude has an edge due to its larger context window. For debugging and explaining code step-by-step, both perform similarly. OpenAI's o3 is better for competitive programming and mathematical coding problems.",
  },
  {
    question: "Does Claude have image generation?",
    answer:
      "No — Claude cannot generate images natively. Claude is a text-only AI assistant (with vision for analyzing images). If you need image generation, ChatGPT Plus includes DALL-E 3 built-in. For Claude users who need image generation, the typical workaround is using Midjourney or Adobe Firefly separately.",
  },
  {
    question: "Is ChatGPT better than Claude for research?",
    answer:
      "ChatGPT has an edge for real-time web research since GPT-4o always has web access, while Claude's web browsing is limited to Claude.ai Pro and more selective. For analyzing research you already have (papers, reports, documents), Claude wins due to its longer context window. For finding and citing current sources, ChatGPT or Perplexity are better choices.",
  },
  {
    question: "Which has a better free tier — Claude or ChatGPT?",
    answer:
      "ChatGPT's free tier is more generous: you get access to GPT-4o (with limits), web browsing, and DALL-E. Claude's free tier gives access to Claude 3.5 Sonnet with usage limits that reset daily. Both are useful free tiers. If you need just text tasks, Claude free is competitive. If you want multimodal (images, voice) in the free tier, ChatGPT wins.",
  },
  {
    question: "Should I use ChatGPT or Claude for everyday tasks?",
    answer:
      "It depends on your workflow. ChatGPT is better if you want an all-in-one: images, voice, plugins, browsing in one place. Claude is better if you work heavily with long documents, want the highest writing quality, or need detailed instruction-following. Most power users end up using both: Claude for deep text work, ChatGPT for tasks requiring voice, images, or plugins.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ChatGPT",
    description: "OpenAI's AI assistant powered by GPT-4o and o3, with multimodal capabilities including image generation and voice.",
    url: "https://chatgpt.com",
    applicationCategory: "WebApplication",
    offers: [
      { "@type": "Offer", name: "Free", price: "0", priceCurrency: "USD" },
      { "@type": "Offer", name: "Plus", price: "20", priceCurrency: "USD" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Claude",
    description: "Anthropic's AI assistant known for nuanced writing, 200K context window, and strong reasoning.",
    url: "https://claude.ai",
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
      { "@type": "ListItem", position: 3, name: "ChatGPT vs Claude", item: "https://aisotools.com/compare/chatgpt-vs-claude" },
    ],
  },
];

export default function ChatGPTVsClaudePage() {
  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/compare" className="hover:text-white transition">Compare</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-300">ChatGPT vs Claude</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-xl bg-green-600/20 flex items-center justify-center text-2xl font-bold text-green-400">
                G
              </div>
              <span className="text-sm text-green-400 font-medium mt-2">ChatGPT</span>
            </div>
            <span className="text-3xl font-bold text-gray-600">vs</span>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-xl bg-blue-600/20 flex items-center justify-center text-2xl font-bold text-blue-400">
                C
              </div>
              <span className="text-sm text-blue-400 font-medium mt-2">Claude</span>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            ChatGPT vs Claude: Which AI Assistant Is Better in 2026?
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The two most popular AI assistants, compared head-to-head. We cover writing quality, coding ability, context windows, plugins, pricing, and which tool wins for your specific use case.
          </p>
        </div>

        {/* Core Distinction */}
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-bold mb-3">🔑 The Key Distinction First</h2>
          <p className="text-gray-300 leading-relaxed">
            <strong className="text-green-400">ChatGPT</strong> is the most versatile all-in-one AI: multimodal (text, images, voice), the largest plugin ecosystem, and OpenAI's o3 reasoning model for deep STEM problems. <strong className="text-blue-400">Claude</strong> is the best-in-class AI for long-document work, natural writing quality, and precise instruction-following — with a 200K token context window that ChatGPT can't match.
          </p>
          <p className="text-gray-400 mt-3 text-sm">
            These two tools are closer than ever in 2026. Most power users end up using both for different tasks rather than picking one exclusively.
          </p>
        </div>

        {/* Quick Verdict */}
        <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 border border-green-500/20 rounded-xl p-8 mb-10">
          <h2 className="text-2xl font-bold mb-4">⚡ Quick Verdict</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-green-400 mb-3">Choose ChatGPT if:</h3>
              <ul className="space-y-2">
                {[
                  "You need image generation built into your AI workflow",
                  "You want voice mode for hands-free conversations",
                  "You rely on plugins or custom GPTs for automation",
                  "You need the best reasoning model (o3) for math/STEM",
                  "You want real-time web browsing always available",
                ].map((reason, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">→</span>
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-blue-400 mb-3">Choose Claude if:</h3>
              <ul className="space-y-2">
                {[
                  "You work with long documents, PDFs, or large codebases",
                  "Writing quality is critical — essays, copy, creative content",
                  "You need consistent instruction-following on complex tasks",
                  "You want Projects with persistent context across sessions",
                  "You're doing deep analysis that requires 200K+ tokens",
                ].map((reason, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-blue-400 mt-0.5 flex-shrink-0">→</span>
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* At a Glance */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">ChatGPT vs Claude: At a Glance</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-x-auto">
            <div className="grid grid-cols-3 bg-gray-800/50">
              <div className="p-4 text-sm text-gray-500 font-medium">Attribute</div>
              <div className="p-4 text-center font-semibold text-green-400">ChatGPT</div>
              <div className="p-4 text-center font-semibold text-blue-400">Claude</div>
            </div>
            {comparisonRows.map((row, i) => (
              <div key={i} className="grid grid-cols-3 border-t border-gray-800">
                <div className="p-4 text-sm text-gray-400">{row.attribute}</div>
                <div className="p-4 text-center text-sm text-gray-300">{row.chatgpt}</div>
                <div className="p-4 text-center text-sm text-gray-300">{row.claude}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Deep Dives */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">What Makes Each Tool Unique</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 border border-green-500/20 rounded-xl p-6">
              <h3 className="font-semibold text-green-400 mb-4">🟢 Where ChatGPT Wins</h3>
              <div className="space-y-4">
                {chatgptStrengths.map((item, i) => (
                  <div key={i} className="text-sm">
                    <p className="font-medium text-gray-200 mb-1">{item.title}</p>
                    <p className="text-gray-400 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
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
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Pricing Comparison</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 border border-green-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-400 mb-4">ChatGPT Pricing</h3>
              <div className="space-y-3">
                {[
                  { tier: "Free", price: "$0/mo", note: "GPT-4o access (limited), DALL-E, web browsing" },
                  { tier: "Plus", price: "$20/mo", note: "Higher limits, GPT-4o, o3-mini, Advanced Voice, DALL-E" },
                  { tier: "Pro", price: "$200/mo", note: "Unlimited access, o3, o1 pro, extended thinking" },
                  { tier: "Team", price: "$25/user/mo", note: "Shared workspace, admin, higher limits" },
                  { tier: "Enterprise", price: "Custom", note: "SSO, compliance, custom fine-tuning" },
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
            <div className="bg-gray-900 border border-blue-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">Claude Pricing</h3>
              <div className="space-y-3">
                {[
                  { tier: "Free", price: "$0/mo", note: "Claude 3.5 Sonnet, limited daily usage" },
                  { tier: "Pro", price: "$20/mo", note: "5× more usage, Projects, priority access, Claude 3 Opus" },
                  { tier: "Team", price: "$25/user/mo", note: "Shared Projects, admin controls, priority access" },
                  { tier: "Enterprise", price: "Custom", note: "SSO, expanded context, custom fine-tuning, compliance" },
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
                <span className="text-green-400">Best for:</span> ChatGPT
              </h3>
              <ul className="space-y-2 mb-4">
                {[
                  "Designers needing AI images + text in one place",
                  "Students wanting voice Q&A and homework help",
                  "Developers using GPT-4o or o3 via API",
                  "Power users building custom GPTs or automations",
                  "Anyone who wants an AI that does everything (text + images + voice)",
                ].map((use, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">•</span>
                    {use}
                  </li>
                ))}
              </ul>
              <a
                href="https://chatgpt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition"
              >
                Try ChatGPT →
              </a>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                <span className="text-blue-400">Best for:</span> Claude
              </h3>
              <ul className="space-y-2 mb-4">
                {[
                  "Writers, editors, and content marketers needing top prose quality",
                  "Lawyers and consultants processing long documents",
                  "Developers with large codebases to analyze",
                  "Researchers synthesizing lengthy reports or papers",
                  "Teams using Projects for persistent collaborative context",
                ].map((use, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-blue-400 mt-0.5 flex-shrink-0">•</span>
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

        {/* Related */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Related Comparisons</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/compare/chatgpt-vs-gemini" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-green-500/50 transition">
              <h3 className="font-semibold mb-1">⚖️ ChatGPT vs Gemini</h3>
              <p className="text-gray-400 text-sm">OpenAI vs Google AI assistant</p>
            </Link>
            <Link href="/compare/claude-vs-perplexity" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">⚖️ Claude vs Perplexity</h3>
              <p className="text-gray-400 text-sm">AI assistant vs AI search</p>
            </Link>
            <Link href="/alternatives/chatgpt" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-green-500/50 transition">
              <h3 className="font-semibold mb-1">🔄 ChatGPT Alternatives</h3>
              <p className="text-gray-400 text-sm">Best alternatives to ChatGPT</p>
            </Link>
            <Link href="/alternatives/claude" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">🔄 Claude Alternatives</h3>
              <p className="text-gray-400 text-sm">Best alternatives to Claude</p>
            </Link>
            <Link href="/tool/chatgpt" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-green-500/50 transition">
              <h3 className="font-semibold mb-1">📋 ChatGPT Review</h3>
              <p className="text-gray-400 text-sm">Full review with pros &amp; cons</p>
            </Link>
            <Link href="/tool/claude" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">📋 Claude Review</h3>
              <p className="text-gray-400 text-sm">Full review with pros &amp; cons</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
