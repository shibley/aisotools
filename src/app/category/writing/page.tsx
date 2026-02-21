import { tools } from "@/data/tools";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Writing Tools (2026) — Content Creation, Copywriting & SEO",
  description:
    "Discover the best AI writing tools for content creation, copywriting, SEO writing, and more. Compare ChatGPT, Claude, Jasper, Copy.ai, Grammarly, and top AI writing assistants.",
  keywords: [
    "ai writing tools",
    "ai content creation",
    "ai copywriting",
    "ai seo writing",
    "ai text generator",
    "ai writing assistant",
    "best ai writer",
  ],
  openGraph: {
    title: "Best AI Writing Tools (2026) — Content Creation, Copywriting & SEO",
    description:
      "Compare the best AI writing tools for content creation, copywriting, SEO, and blogging. In-depth reviews and comparisons.",
    url: "https://aisotools.com/category/writing",
    type: "website",
  },
  alternates: {
    canonical: "https://aisotools.com/category/writing",
  },
};

interface FeaturedTool {
  name: string;
  slug: string;
  description: string;
  pricing: string;
  bestFor: string;
  features: string[];
}

const featuredWritingTools: FeaturedTool[] = [
  {
    name: "ChatGPT",
    slug: "chatgpt",
    description: "OpenAI's versatile AI assistant excels at all forms of writing, from creative storytelling to technical documentation.",
    pricing: "Freemium ($20/mo Plus)",
    bestFor: "General-purpose writing, creative content, brainstorming",
    features: ["All content types", "Custom GPTs", "Plugins", "Voice input"],
  },
  {
    name: "Claude",
    slug: "claude",
    description: "Anthropic's AI known for nuanced, thoughtful long-form writing with exceptional reasoning and style matching.",
    pricing: "Freemium ($20/mo Pro)",
    bestFor: "Long-form content, articles, nuanced writing",
    features: ["200K+ context", "Document analysis", "Projects", "Style matching"],
  },
  {
    name: "Jasper",
    slug: "jasper",
    description: "Purpose-built AI writing platform for marketing teams with brand voice customization and templates.",
    pricing: "Paid ($49/mo Creator)",
    bestFor: "Marketing copy, brand content, teams",
    features: ["50+ templates", "Brand voice", "SEO mode", "Team workspace"],
  },
  {
    name: "Copy.ai",
    slug: "copy-ai",
    description: "AI copywriting tool optimized for short-form content, social media posts, and marketing materials.",
    pricing: "Freemium ($49/mo Pro)",
    bestFor: "Short-form content, social media, ad copy",
    features: ["90+ templates", "Social tools", "Email campaigns", "Free tier"],
  },
  {
    name: "Grammarly",
    slug: "grammarly",
    description: "Industry-leading AI writing assistant focused on grammar, clarity, tone, and plagiarism detection.",
    pricing: "Freemium ($12/mo Premium)",
    bestFor: "Editing, proofreading, grammar checking",
    features: ["Grammar check", "Tone detector", "Plagiarism check", "Integrations"],
  },
  {
    name: "Surfer SEO",
    slug: "surfer",
    description: "Data-driven SEO content creation tool with AI writing and real-time optimization scoring.",
    pricing: "Paid ($89/mo Essential)",
    bestFor: "SEO content, blog posts, ranking on Google",
    features: ["Content editor", "SEO score", "SERP analyzer", "Keyword research"],
  },
];

const useCases = [
  {
    title: "Content Marketing",
    icon: "📝",
    description: "Create blog posts, articles, whitepapers, and thought leadership content at scale. AI writing tools help maintain consistent quality while dramatically increasing output.",
    tools: ["ChatGPT", "Claude", "Jasper", "Surfer SEO"],
  },
  {
    title: "Copywriting & Ads",
    icon: "🎯",
    description: "Generate compelling ad copy, landing page text, email campaigns, and conversion-focused content. Perfect for A/B testing multiple variations quickly.",
    tools: ["Copy.ai", "Jasper", "Anyword", "Writesonic"],
  },
  {
    title: "SEO & Blogging",
    icon: "🔍",
    description: "Write search-optimized content that ranks. AI tools help with keyword integration, meta descriptions, and content structure while maintaining readability.",
    tools: ["Surfer SEO", "Writesonic", "ChatGPT", "Frase"],
  },
  {
    title: "Editing & Proofreading",
    icon: "✏️",
    description: "Improve grammar, clarity, tone, and readability. AI editing tools catch errors humans miss and suggest style improvements.",
    tools: ["Grammarly", "ProWritingAid", "Hemingway", "QuillBot"],
  },
  {
    title: "Email Writing",
    icon: "📧",
    description: "Draft professional emails, cold outreach sequences, newsletters, and follow-ups. Save hours on routine business communication.",
    tools: ["ChatGPT", "Copy.ai", "Lavender", "Flowrite"],
  },
  {
    title: "Social Media",
    icon: "📱",
    description: "Create engaging posts, captions, threads, and hashtags for all platforms. Maintain consistent brand voice across channels.",
    tools: ["Copy.ai", "Jasper", "ChatGPT", "Lately"],
  },
];

const comparisonPosts = [
  { title: "Best AI Writing Tools Comparison 2026", slug: "/blog/best-ai-writing-tools-comparison-2026" },
  { title: "Jasper vs Copy.ai: Which Is Better?", slug: "/blog/jasper-vs-copy-ai" },
  { title: "ChatGPT vs Claude: Head-to-Head", slug: "/blog/chatgpt-vs-claude" },
  { title: "ChatGPT vs Claude vs Gemini", slug: "/blog/chatgpt-vs-claude-vs-gemini" },
  { title: "Grammarly Alternatives", slug: "/grammarly-alternatives" },
  { title: "Notion AI Alternatives", slug: "/notion-ai-alternatives" },
];

const faqs = [
  {
    question: "What is the best AI writing tool in 2026?",
    answer: "The best AI writing tool depends on your use case. ChatGPT is the most versatile for general writing. Claude excels at long-form, nuanced content. Jasper is built for marketing teams. Grammarly leads for editing and grammar. For SEO content, Surfer SEO is unmatched with data-driven optimization.",
  },
  {
    question: "Are there free AI writing tools?",
    answer: "Yes! ChatGPT, Claude, and Grammarly all offer free tiers. Copy.ai has a generous free plan. Rytr provides 10,000 characters/month free. For basic writing assistance, these free options work well, though paid plans unlock better models and fewer restrictions.",
  },
  {
    question: "Can AI writing tools replace human writers?",
    answer: "AI writing tools are best used as assistants, not replacements. They excel at drafting, brainstorming, editing, and speeding up the writing process. However, human creativity, strategic thinking, fact-checking, brand understanding, and final editing remain essential for quality content.",
  },
  {
    question: "Which AI tool is best for SEO content?",
    answer: "Surfer SEO is the leading AI tool for SEO-focused content, with real-time optimization scoring and SERP analysis. Writesonic offers SEO features at a lower price. ChatGPT and Claude can write SEO content with proper prompting but lack built-in optimization tools.",
  },
  {
    question: "How much do AI writing tools cost?",
    answer: "Pricing varies widely. Free tiers exist for many tools. Most premium AI writing assistants cost $10-20/month for individuals (ChatGPT Plus, Claude Pro, Grammarly Premium). Professional tools like Jasper ($49-69/mo) and Surfer SEO ($89+/mo) offer more specialized features.",
  },
  {
    question: "What's the difference between ChatGPT and dedicated writing tools like Jasper?",
    answer: "ChatGPT is a general-purpose AI that can write anything with proper prompting. Jasper and similar tools are purpose-built for marketing, with pre-made templates, brand voice settings, team collaboration, and workflow features. Jasper costs more but saves time for marketing teams.",
  },
];

export default function WritingCategoryPage() {
  // Get tools in the writing category
  const writingTools = tools.filter((t) => t.category === "writing");
  const sponsoredTools = writingTools.filter((t) => t.sponsored);
  const regularTools = writingTools.filter((t) => !t.sponsored);
  const toolsBySlug = new Map(tools.map((t) => [t.slug, t]));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-white">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/directory" className="hover:text-white">Categories</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">AI Writing Tools</span>
      </nav>

      {/* Hero Section */}
      <header className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-5xl">✍️</span>
          <h1 className="text-4xl md:text-5xl font-bold">AI Writing Tools</h1>
        </div>
        <p className="text-xl text-gray-400 max-w-4xl leading-relaxed mb-6">
          Discover the best AI writing tools for content creation, copywriting, SEO writing, and more. 
          Whether you're crafting blog posts, marketing copy, emails, or creative stories, AI writing 
          assistants can help you write better content faster.
        </p>

        {/* Extended Description (200+ words) */}
        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-gray-400 leading-relaxed">
            The AI writing tools landscape has evolved dramatically, offering solutions for every type 
            of writer and use case. From general-purpose assistants like ChatGPT and Claude that can 
            tackle any writing task, to specialized platforms like Jasper for marketing teams and 
            Surfer SEO for search-optimized content, there's an AI writing tool designed for your 
            specific needs.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Modern AI writers go far beyond simple text generation. They help with brainstorming ideas, 
            outlining structure, drafting content, editing for clarity and tone, optimizing for SEO, 
            and maintaining brand consistency across all your communications. Many integrate directly 
            into your existing workflows—browser extensions, Google Docs add-ons, Notion integrations, 
            and standalone apps that work wherever you write.
          </p>
          <p className="text-gray-400 leading-relaxed">
            The key to success with AI writing tools is understanding their strengths. Use them for 
            first drafts, overcoming writer's block, generating variations, and handling repetitive 
            writing tasks. Combine their speed with human creativity, fact-checking, and strategic 
            thinking for the best results. Whether you're a solo blogger, content marketer, enterprise 
            team, or professional author, the right AI writing assistant can transform your productivity 
            while maintaining—and often improving—the quality of your output.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
            Content Creation
          </span>
          <span className="bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium">
            Copywriting
          </span>
          <span className="bg-green-600/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium">
            SEO Writing
          </span>
          <span className="bg-orange-600/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium">
            Blog Writing
          </span>
          <span className="bg-pink-600/20 text-pink-400 px-4 py-2 rounded-full text-sm font-medium">
            Email Writing
          </span>
          <span className="bg-cyan-600/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium">
            Social Media
          </span>
        </div>
      </header>

      {/* Featured Tools Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Featured AI Writing Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredWritingTools.map((tool) => {
            const toolData = toolsBySlug.get(tool.slug);
            return (
              <div
                key={tool.slug}
                className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/30 rounded-xl p-6 hover:border-blue-500/50 transition"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold">{tool.name}</h3>
                  <span className="text-xs bg-yellow-500/10 text-yellow-400 px-2 py-0.5 rounded-full">
                    Featured
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{tool.description}</p>
                <div className="mb-4">
                  <span className="text-xs text-gray-500">Best for:</span>
                  <p className="text-sm text-gray-300">{tool.bestFor}</p>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {tool.features.slice(0, 3).map((feature) => (
                    <span key={feature} className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-400">{tool.pricing}</span>
                  {toolData ? (
                    <Link
                      href={`/tool/${tool.slug}`}
                      className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded transition"
                    >
                      View Tool →
                    </Link>
                  ) : (
                    <span className="text-xs text-gray-600">Coming soon</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Use Cases for AI Writing Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase) => (
            <div key={useCase.title} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{useCase.icon}</span>
                <h3 className="text-lg font-semibold">{useCase.title}</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">{useCase.description}</p>
              <div className="flex flex-wrap gap-2">
                {useCase.tools.map((tool) => (
                  <span key={tool} className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Writing Tools */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">
          All Writing & Content Tools ({writingTools.length})
        </h2>
        
        {/* Sponsored Tools */}
        {sponsoredTools.length > 0 && (
          <div className="mb-8">
            <h3 className="text-sm text-gray-500 mb-3 uppercase tracking-wide">⭐ Sponsored</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sponsoredTools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tool/${tool.slug}`}
                  className="bg-gradient-to-br from-yellow-600/10 to-orange-600/10 border border-yellow-500/30 rounded-xl p-6 hover:border-yellow-500/50 transition"
                >
                  <h3 className="text-lg font-semibold mb-2">{tool.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{tool.shortDescription}</p>
                  <span className="text-xs bg-gray-800 text-gray-500 px-2 py-0.5 rounded-full">{tool.pricing}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Regular Tools */}
        {regularTools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tool/${tool.slug}`}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition group"
              >
                <h3 className="text-lg font-semibold group-hover:text-blue-400 transition mb-2">
                  {tool.name}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{tool.shortDescription}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-gray-800 text-gray-500 px-2 py-0.5 rounded-full">{tool.pricing}</span>
                  <div className="flex gap-1">
                    {tool.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs text-gray-600">{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-12 text-center">
            <p className="text-gray-400 mb-4">More writing tools coming soon!</p>
            <Link
              href="/submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Submit a Tool →
            </Link>
          </div>
        )}
      </section>

      {/* Comparison Posts */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Comparisons & Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {comparisonPosts.map((post) => (
            <Link
              key={post.slug}
              href={post.slug}
              className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-blue-500/50 transition flex items-center gap-3"
            >
              <span className="text-2xl">📊</span>
              <span className="text-gray-300 hover:text-white">{post.title}</span>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/ai-writing-tools"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            View all AI writing comparisons →
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Find Your Perfect AI Writing Tool</h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Compare features, pricing, and use cases to discover the AI writing assistant that 
          fits your workflow and budget.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/ai-writing-tools"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Compare Writing Tools
          </Link>
          <Link
            href="/category/chatbots"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            AI Chatbots →
          </Link>
        </div>
      </section>
    </div>
  );
}
