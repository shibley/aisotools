import { tools } from "@/data/tools";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Writing Tools 2026: Top 12 AI Content & Copywriting Assistants",
  description:
    "Compare the best AI writing tools for 2026 including Jasper, Copy.ai, ChatGPT, Claude, and more. Find the perfect AI writing assistant for copywriting, long-form content, SEO, and academic work.",
  keywords: [
    "AI writing tools",
    "best AI writers",
    "AI copywriting",
    "AI content generator",
    "AI writing assistant",
    "Jasper AI",
    "Copy.ai",
  ],
  openGraph: {
    title: "Best AI Writing Tools 2026: Top 12 AI Content & Copywriting Assistants",
    description:
      "Compare top AI writing tools for copywriting, long-form content, SEO, and academic writing. Expert reviews, pricing, and feature comparisons.",
    url: "https://aisotools.com/best-ai-writing-tools",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/best-ai-writing-tools",
  },
};

interface WritingToolComparison {
  name: string;
  slug: string;
  description: string;
  category: string;
  pricing: string;
  pricingDetails: string;
  strengths: string[];
  weaknesses: string[];
  bestFor: string;
  features: string[];
  rating: number;
}

const writingTools: WritingToolComparison[] = [
  {
    name: "Jasper",
    slug: "jasper",
    description: "Enterprise-grade AI writing platform designed for marketing teams and professional content creators.",
    category: "Copywriting",
    pricing: "Paid",
    pricingDetails: "Creator $49/mo, Pro $69/mo, Business custom pricing",
    strengths: [
      "Brand voice training for consistent messaging",
      "50+ professional templates",
      "SEO mode with SurferSEO integration",
      "Team collaboration features",
      "Multi-language support (30+ languages)",
      "Chrome extension for writing anywhere",
    ],
    weaknesses: [
      "No free tier, only 7-day trial",
      "Higher price point than competitors",
      "Steeper learning curve",
    ],
    bestFor: "Marketing teams, agencies, enterprise content operations, brand-focused copywriting",
    features: ["Brand voice", "SEO mode", "Templates", "Team collaboration", "API", "Chrome extension"],
    rating: 4.5,
  },
  {
    name: "Copy.ai",
    slug: "copy-ai",
    description: "AI copywriting tool focused on sales and marketing content with workflow automation.",
    category: "Copywriting",
    pricing: "Freemium",
    pricingDetails: "Free tier, Pro $49/mo, Team $249/mo, Enterprise custom",
    strengths: [
      "90+ copywriting tools and templates",
      "Workflow automation for repetitive tasks",
      "Infobase for brand knowledge",
      "Strong for short-form copy",
      "User-friendly interface",
      "Team collaboration",
    ],
    weaknesses: [
      "Free tier is quite limited",
      "Less suitable for long-form content",
      "Can require editing for accuracy",
    ],
    bestFor: "Sales teams, digital marketers, social media managers, ad copywriting",
    features: ["90+ tools", "Workflows", "Infobase", "Brand voice", "Team features", "API"],
    rating: 4.3,
  },
  {
    name: "Writesonic",
    slug: "writesonic",
    description: "AI writing platform with built-in SEO optimization and fact-checking for blog content.",
    category: "Blog Writing",
    pricing: "Freemium",
    pricingDetails: "Free trial, Unlimited $20/mo, Business $19/user/mo, Enterprise custom",
    strengths: [
      "Real-time SEO optimization",
      "Fact-checked content with citations",
      "Competitive pricing",
      "Photosonic image generation included",
      "Chatsonic chatbot included",
      "WordPress integration",
    ],
    weaknesses: [
      "Quality can vary",
      "Free tier is very limited",
      "UI can feel cluttered",
    ],
    bestFor: "Bloggers, SEO content writers, small businesses, budget-conscious creators",
    features: ["SEO optimizer", "Fact-checking", "AI article writer", "Image generation", "Chatsonic", "Integrations"],
    rating: 4.2,
  },
  {
    name: "ChatGPT",
    slug: "chatgpt",
    description: "OpenAI's versatile AI assistant excellent for general-purpose writing, brainstorming, and editing.",
    category: "Long-form",
    pricing: "Freemium",
    pricingDetails: "Free tier, Plus $20/mo, Team $25/user/mo, Enterprise custom",
    strengths: [
      "Most versatile and flexible",
      "Strong for all writing types",
      "Custom GPTs for specialized tasks",
      "Large user community and resources",
      "Code generation included",
      "Generous free tier",
    ],
    weaknesses: [
      "No built-in SEO tools",
      "Requires clear prompting",
      "Free tier limited to GPT-3.5",
    ],
    bestFor: "General writing, creative content, brainstorming, editing, versatile content creation",
    features: ["GPT-4", "Custom GPTs", "Code interpreter", "DALL-E", "Plugins", "Vision"],
    rating: 4.7,
  },
  {
    name: "Claude",
    slug: "claude",
    description: "Anthropic's AI assistant known for thoughtful, nuanced writing and strong editing capabilities.",
    category: "Long-form",
    pricing: "Freemium",
    pricingDetails: "Free tier, Pro $20/mo, Team $25/user/mo, Enterprise custom",
    strengths: [
      "Superior for long-form content (200K+ context)",
      "Excellent editing and refinement",
      "Strong reasoning and analysis",
      "Artifacts feature for iterative writing",
      "Natural, thoughtful tone",
      "Great for complex instructions",
    ],
    weaknesses: [
      "No image generation",
      "No built-in SEO tools",
      "Slower on free tier",
    ],
    bestFor: "Long-form articles, research papers, thoughtful essays, editing, complex writing projects",
    features: ["200K context", "Artifacts", "Projects", "Document analysis", "Code generation", "Vision"],
    rating: 4.6,
  },
  {
    name: "Rytr",
    slug: "rytr",
    description: "Affordable AI writing tool with 40+ use cases and 30+ languages, ideal for budget users.",
    category: "Copywriting",
    pricing: "Freemium",
    pricingDetails: "Free 10K characters/mo, Saver $9/mo, Unlimited $29/mo",
    strengths: [
      "Very affordable pricing",
      "40+ use cases and templates",
      "30+ languages supported",
      "20+ tone options",
      "Built-in plagiarism checker",
      "Easy to use",
    ],
    weaknesses: [
      "Output quality below premium tools",
      "Limited features compared to high-end tools",
      "Smaller community",
    ],
    bestFor: "Budget-conscious creators, freelancers, small businesses, multi-language content",
    features: ["40+ use cases", "30+ languages", "Tone control", "Plagiarism checker", "Chrome extension", "Team features"],
    rating: 4.1,
  },
  {
    name: "Grammarly",
    slug: "grammarly",
    description: "AI-powered writing assistant focused on grammar, clarity, tone, and style improvements.",
    category: "Academic",
    pricing: "Freemium",
    pricingDetails: "Free tier, Premium $12/mo, Business $15/user/mo, Enterprise custom",
    strengths: [
      "Best-in-class grammar and spelling",
      "Tone detection and suggestions",
      "Works across all platforms",
      "Plagiarism checker (Premium)",
      "Excellent browser extension",
      "Trusted by millions",
    ],
    weaknesses: [
      "Not a content generator",
      "Premium required for advanced features",
      "Can be overly prescriptive",
    ],
    bestFor: "Editing, proofreading, grammar checking, professional communication, academic writing",
    features: ["Grammar check", "Tone detection", "Clarity", "Plagiarism", "Browser extension", "Desktop app"],
    rating: 4.6,
  },
  {
    name: "Notion AI",
    slug: "notion-ai",
    description: "AI writing features integrated directly into Notion workspace for seamless productivity.",
    category: "Long-form",
    pricing: "Paid",
    pricingDetails: "$10/user/mo add-on to Notion workspace",
    strengths: [
      "Seamless Notion integration",
      "Write, edit, and organize in one place",
      "Team collaboration built-in",
      "Knowledge base context",
      "Translation features",
      "Action item extraction",
    ],
    weaknesses: [
      "Requires Notion subscription",
      "Limited compared to standalone tools",
      "No SEO features",
    ],
    bestFor: "Notion users, team documentation, knowledge bases, collaborative writing",
    features: ["Notion integration", "Writing", "Summarization", "Translation", "Brainstorming", "Action items"],
    rating: 4.2,
  },
  {
    name: "Wordtune",
    slug: "wordtune",
    description: "AI writing companion that helps rewrite and refine your content with suggestions.",
    category: "Copywriting",
    pricing: "Freemium",
    pricingDetails: "Free tier, Premium $9.99/mo, Premium Plus $14.99/mo",
    strengths: [
      "Excellent rewriting suggestions",
      "Casual/formal tone switching",
      "Works inline while writing",
      "Sentence expansion/shortening",
      "Affordable pricing",
      "Chrome extension",
    ],
    weaknesses: [
      "Limited free tier",
      "Not for generating from scratch",
      "Fewer features than competitors",
    ],
    bestFor: "Editing existing content, improving clarity, tone adjustments, non-native speakers",
    features: ["Rewriting", "Tone switching", "Summarization", "Browser extension", "Sentence expansion", "Spices"],
    rating: 4.3,
  },
  {
    name: "QuillBot",
    slug: "quillbot",
    description: "AI paraphrasing and writing tool popular with students and academic writers.",
    category: "Academic",
    pricing: "Freemium",
    pricingDetails: "Free tier, Premium $8.33/mo (annual), $19.95/mo (monthly)",
    strengths: [
      "Best paraphrasing tool",
      "Multiple paraphrasing modes",
      "Grammar checker included",
      "Citation generator",
      "Plagiarism checker (Premium)",
      "Student-friendly pricing",
    ],
    weaknesses: [
      "Free tier is limited",
      "Not for original content creation",
      "Can feel mechanical",
    ],
    bestFor: "Students, academic writing, paraphrasing, research papers, avoiding plagiarism",
    features: ["Paraphrasing", "Grammar checker", "Summarizer", "Citation generator", "Plagiarism checker", "Translator"],
    rating: 4.2,
  },
  {
    name: "Sudowrite",
    slug: "sudowrite",
    description: "AI writing tool specifically designed for fiction writers and creative storytelling.",
    category: "Long-form",
    pricing: "Paid",
    pricingDetails: "Hobby $10/mo, Student $10/mo, Professional $25/mo, Max $100/mo",
    strengths: [
      "Purpose-built for fiction",
      "Story development tools",
      "Character and plot assistance",
      "Descriptive writing enhancement",
      "Brainstorming features",
      "Writer-focused interface",
    ],
    weaknesses: [
      "Niche use case (fiction only)",
      "More expensive at higher tiers",
      "Learning curve for features",
    ],
    bestFor: "Fiction writers, novelists, screenwriters, creative storytelling",
    features: ["Story engine", "Describe", "Write", "Brainstorm", "Rewrite", "Character development"],
    rating: 4.4,
  },
  {
    name: "Perplexity",
    slug: "perplexity",
    description: "AI-powered research tool excellent for researched writing with cited sources.",
    category: "SEO",
    pricing: "Freemium",
    pricingDetails: "Free tier, Pro $20/mo",
    strengths: [
      "Excellent research capabilities",
      "Cited sources for credibility",
      "Real-time web access",
      "Great for fact-checking",
      "Clean interface",
      "Collections for organizing research",
    ],
    weaknesses: [
      "Not designed for creative writing",
      "Limited content generation",
      "More research than writing tool",
    ],
    bestFor: "Research-heavy writing, fact-based content, journalism, SEO content with sources",
    features: ["Web search", "Citations", "Pro search", "Collections", "Follow-ups", "File upload"],
    rating: 4.5,
  },
];

export default function BestAIWritingToolsPage() {
  const toolsBySlug = new Map(tools.map((t) => [t.slug, t]));

  // Group by category
  const byCategory = writingTools.reduce((acc, tool) => {
    if (!acc[tool.category]) acc[tool.category] = [];
    acc[tool.category].push(tool);
    return acc;
  }, {} as Record<string, WritingToolComparison[]>);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-white">
          Home
        </Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Best AI Writing Tools</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Best AI Writing Tools 2026: Top 12 AI Content & Copywriting Assistants
        </h1>
        <p className="text-xl text-gray-400 max-w-4xl">
          Compare the best AI writing tools for 2026. Whether you need copywriting, long-form
          content, SEO optimization, or academic writing assistance, find the perfect AI writing
          assistant for your needs.
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
            Updated February 2026
          </span>
          <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
            12 Tools Reviewed
          </span>
        </div>
      </header>

      {/* Quick Navigation by Category */}
      <section className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-12">
        <h2 className="text-lg font-semibold mb-4">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {Object.keys(byCategory).map((cat) => (
            <a
              key={cat}
              href={`#${cat.toLowerCase().replace(/\s+/g, "-")}`}
              className="bg-gray-800 hover:bg-gray-700 rounded-lg p-3 transition text-center"
            >
              <div className="font-medium text-sm">{cat}</div>
              <div className="text-xs text-gray-500 mt-1">
                {byCategory[cat].length} {byCategory[cat].length === 1 ? "tool" : "tools"}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Introduction */}
      <section className="prose prose-invert max-w-none mb-16">
        <h2 className="text-3xl font-bold mb-4">What Are AI Writing Tools?</h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          AI writing tools use large language models (LLMs) to help you create, edit, and optimize
          written content. From generating marketing copy in seconds to refining academic papers,
          these tools have transformed the writing process for millions of creators, marketers, and
          professionals.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          The AI writing landscape in 2026 offers specialized tools for every use case:
          enterprise-grade platforms like Jasper for brand-consistent marketing, versatile
          assistants like ChatGPT and Claude for general writing, budget-friendly options like
          Rytr, and specialized tools like Grammarly for editing and Sudowrite for fiction.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed">
          This guide compares the top 12 AI writing tools across features, pricing, strengths, and
          ideal use cases to help you choose the right solution.
        </p>
      </section>

      {/* Comparison Table */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Quick Comparison Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-gray-900 border border-gray-800 rounded-xl">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Tool</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Category</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Pricing</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Rating</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {writingTools.map((tool) => (
                <tr key={tool.slug} className="hover:bg-gray-800/50 transition">
                  <td className="px-4 py-3">
                    <a
                      href={`#${tool.slug}`}
                      className="font-medium text-blue-400 hover:text-blue-300"
                    >
                      {tool.name}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-400">{tool.category}</td>
                  <td className="px-4 py-3 text-sm text-gray-400">{tool.pricing}</td>
                  <td className="px-4 py-3 text-sm">
                    <span className="text-yellow-400">★</span> {tool.rating}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-400">
                    {tool.bestFor.split(",")[0]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Tools by Category */}
      {Object.entries(byCategory).map(([category, categoryTools]) => (
        <section
          key={category}
          id={category.toLowerCase().replace(/\s+/g, "-")}
          className="mb-16 scroll-mt-24"
        >
          <h2 className="text-3xl font-bold mb-8">
            Best AI Tools for {category}
          </h2>
          <div className="space-y-12">
            {categoryTools.map((tool) => {
              const toolData = toolsBySlug.get(tool.slug);
              return (
                <article
                  key={tool.slug}
                  id={tool.slug}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-8 scroll-mt-24"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold">{tool.name}</h3>
                        <span className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-xs font-medium">
                          {tool.category}
                        </span>
                      </div>
                      <p className="text-gray-400">{tool.description}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="text-yellow-400 text-sm">
                          {"★".repeat(Math.floor(tool.rating))}
                          {"☆".repeat(5 - Math.floor(tool.rating))}
                        </div>
                        <span className="text-gray-500 text-sm">{tool.rating}/5</span>
                      </div>
                    </div>
                    {toolData && (
                      <Link
                        href={`/tool/${tool.slug}`}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition shrink-0"
                      >
                        View Tool →
                      </Link>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    {/* Pricing */}
                    <div>
                      <h4 className="font-semibold text-gray-300 mb-2">💰 Pricing</h4>
                      <p className="text-gray-400 text-sm mb-1">{tool.pricing}</p>
                      <p className="text-gray-500 text-xs">{tool.pricingDetails}</p>
                    </div>

                    {/* Best For */}
                    <div>
                      <h4 className="font-semibold text-gray-300 mb-2">🎯 Best For</h4>
                      <p className="text-gray-400 text-sm">{tool.bestFor}</p>
                    </div>
                  </div>

                  {/* Strengths */}
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-300 mb-3">✅ Strengths</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {tool.strengths.map((strength, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start">
                          <span className="text-green-400 mr-2 mt-0.5">•</span>
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Weaknesses */}
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-300 mb-3">⚠️ Weaknesses</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {tool.weaknesses.map((weakness, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start">
                          <span className="text-red-400 mr-2 mt-0.5">•</span>
                          {weakness}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features */}
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-300 mb-3">🔧 Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {tool.features.map((feature, i) => (
                        <span
                          key={i}
                          className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}

      {/* Use Case Guide */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Which AI Writing Tool Should You Choose?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Marketing & Copywriting</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>Jasper:</strong> Enterprise teams needing brand voice consistency
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>Copy.ai:</strong> Sales and marketing teams, workflow automation
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>Rytr:</strong> Budget-conscious marketers and freelancers
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Long-Form Content</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>Claude:</strong> Best for thoughtful, researched long-form articles
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>ChatGPT:</strong> Versatile for all content types, brainstorming
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>Sudowrite:</strong> Fiction writers and creative storytelling
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For SEO Content</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>Writesonic:</strong> Built-in SEO optimizer and real-time suggestions
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>Jasper:</strong> SurferSEO integration for enterprise SEO content
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>Perplexity:</strong> Research-heavy content with cited sources
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Academic & Professional Writing</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>Grammarly:</strong> Best-in-class grammar and editing
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>QuillBot:</strong> Paraphrasing, citation generation, plagiarism check
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>Claude:</strong> Research papers and thoughtful analysis
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Editing & Refinement</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>Grammarly:</strong> Comprehensive grammar and style checking
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>Wordtune:</strong> Rewriting and tone adjustment
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>Claude:</strong> Thoughtful editing and refinement
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Budget Users</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>Rytr:</strong> Most affordable at $9/mo (Saver plan)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>ChatGPT:</strong> Generous free tier with GPT-3.5
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>QuillBot:</strong> Student-friendly pricing at $8.33/mo
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">
              What is the best AI writing tool overall?
            </h3>
            <p className="text-gray-400">
              ChatGPT (rated 4.7/5) is the most versatile for general writing, while Claude
              (4.6/5) excels at long-form content. For marketing, Jasper leads at 4.5/5. The best
              tool depends on your specific use case — see our category recommendations above.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">
              Are there free AI writing tools?
            </h3>
            <p className="text-gray-400">
              Yes! ChatGPT and Claude offer generous free tiers. Grammarly has a free version for
              basic grammar checking. Copy.ai and Writesonic offer limited free trials. For budget
              options, Rytr starts at just $9/mo.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">
              Can AI writing tools help with SEO?
            </h3>
            <p className="text-gray-400">
              Writesonic has built-in real-time SEO optimization. Jasper integrates with SurferSEO.
              Perplexity provides cited research for authoritative content. However, SEO success
              requires more than just AI — you need keyword research, quality content, and good
              on-page optimization.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">
              Do AI writing tools plagiarize content?
            </h3>
            <p className="text-gray-400">
              Reputable AI writing tools generate original content, not copied text. However, you
              should always review and edit AI output. Tools like Grammarly, Rytr, and QuillBot
              include plagiarism checkers. Always fact-check AI-generated content and add your own
              expertise.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">
              Which AI writing tool is best for marketing teams?
            </h3>
            <p className="text-gray-400">
              Jasper is designed for enterprise marketing teams with brand voice training, SEO
              mode, and collaboration features. Copy.ai offers strong workflow automation for sales
              and marketing. Both integrate with popular marketing tools and support team
              workflows.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Explore More AI Tools</h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Discover hundreds more AI tools for coding, design, video generation, and more.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Browse All Tools
          </Link>
          <Link
            href="/category/writing"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            More Writing Tools →
          </Link>
        </div>
      </section>
    </div>
  );
}
