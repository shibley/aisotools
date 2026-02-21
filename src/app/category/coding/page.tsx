import { tools } from "@/data/tools";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Coding Assistants (2026) — Code Completion, Debugging & Documentation",
  description:
    "Discover the best AI coding assistants for code completion, debugging, and documentation. Compare GitHub Copilot, Cursor, Claude, Codeium, and top AI developer tools.",
  keywords: [
    "ai coding assistant",
    "ai code completion",
    "ai programming tool",
    "github copilot alternatives",
    "ai debugging tool",
    "ai code generator",
    "ai developer tools",
  ],
  openGraph: {
    title: "Best AI Coding Assistants (2026) — Code Completion, Debugging & Documentation",
    description:
      "Compare the best AI coding assistants for developers. In-depth reviews of GitHub Copilot, Cursor, Claude, and top AI programming tools.",
    url: "https://aisotools.com/category/coding",
    type: "website",
  },
  alternates: {
    canonical: "https://aisotools.com/category/coding",
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

const featuredCodingTools: FeaturedTool[] = [
  {
    name: "GitHub Copilot",
    slug: "github-copilot",
    description: "The original AI pair programmer from GitHub/OpenAI, deeply integrated with VS Code and offering real-time code suggestions.",
    pricing: "Paid ($10/mo Individual)",
    bestFor: "VS Code users, general development, enterprise teams",
    features: ["Code completion", "Chat", "VS Code integration", "Enterprise ready"],
  },
  {
    name: "Cursor",
    slug: "cursor",
    description: "AI-first code editor built on VS Code foundation with powerful codebase understanding and multi-file editing capabilities.",
    pricing: "Freemium ($20/mo Pro)",
    bestFor: "AI-native development, codebase refactoring, full projects",
    features: ["Codebase chat", "Multi-file edits", "Tab completion", "Composer"],
  },
  {
    name: "Claude",
    slug: "claude",
    description: "Anthropic's AI assistant with exceptional code reasoning, 200K context for large codebases, and artifacts for instant previews.",
    pricing: "Freemium ($20/mo Pro)",
    bestFor: "Complex code analysis, architecture, learning, explanations",
    features: ["200K context", "Code artifacts", "Deep reasoning", "Multi-language"],
  },
  {
    name: "Codeium",
    slug: "codeium",
    description: "Free AI code completion with IDE support rivaling Copilot. Offers unlimited completions with excellent multi-language support.",
    pricing: "Free (Teams $12/user/mo)",
    bestFor: "Budget-conscious developers, students, IDE diversity",
    features: ["Free tier", "70+ languages", "IDE plugins", "Chat"],
  },
  {
    name: "Windsurf",
    slug: "windsurf",
    description: "Codeium's AI-first IDE (formerly Cursor competitor) with deep codebase awareness and agentic coding capabilities.",
    pricing: "Freemium ($15/mo Pro)",
    bestFor: "Agentic coding, project-wide changes, AI-first workflow",
    features: ["Cascade flows", "Codebase aware", "Agentic mode", "Free tier"],
  },
  {
    name: "Tabnine",
    slug: "tabnine",
    description: "AI code assistant focused on privacy and customization, with on-premise deployment options for enterprise security needs.",
    pricing: "Freemium ($12/mo Pro)",
    bestFor: "Privacy-focused teams, enterprise, custom training",
    features: ["On-premise option", "Private code", "Custom training", "IDE support"],
  },
];

const useCases = [
  {
    title: "Code Completion & Generation",
    icon: "⚡",
    description: "Get intelligent code suggestions as you type, from single lines to entire functions. AI understands context and suggests relevant completions instantly.",
    tools: ["GitHub Copilot", "Cursor", "Codeium", "Tabnine"],
  },
  {
    title: "Debugging & Error Fixing",
    icon: "🐛",
    description: "Identify bugs, understand error messages, and get fix suggestions. AI can analyze stack traces and suggest solutions based on code context.",
    tools: ["Claude", "ChatGPT", "Cursor", "GitHub Copilot"],
  },
  {
    title: "Code Review & Refactoring",
    icon: "🔍",
    description: "Get AI-powered code reviews, identify potential issues, and refactor code for better performance, readability, and maintainability.",
    tools: ["Claude", "Cursor", "GitHub Copilot", "Sourcegraph Cody"],
  },
  {
    title: "Documentation Generation",
    icon: "📝",
    description: "Auto-generate documentation, comments, README files, and API docs from your code. Keep documentation in sync with implementation.",
    tools: ["Claude", "ChatGPT", "Mintlify", "Cursor"],
  },
  {
    title: "Learning & Explanations",
    icon: "📚",
    description: "Understand unfamiliar codebases, learn new languages and frameworks, and get explanations of complex algorithms and patterns.",
    tools: ["Claude", "ChatGPT", "Phind", "Perplexity"],
  },
  {
    title: "Testing & QA",
    icon: "✅",
    description: "Generate unit tests, integration tests, and test cases. AI understands your code to create meaningful test coverage.",
    tools: ["Claude", "GitHub Copilot", "Cursor", "Codium AI"],
  },
];

const comparisonPosts = [
  { title: "Best AI Coding Tools 2026", slug: "/blog/best-ai-coding-tools-2026" },
  { title: "GitHub Copilot vs Cursor vs Codeium", slug: "/blog/github-copilot-vs-cursor-vs-codeium" },
  { title: "Cursor vs GitHub Copilot", slug: "/cursor-vs-github-copilot" },
  { title: "GitHub Copilot Alternatives", slug: "/github-copilot-alternatives" },
  { title: "Best AI Tools for Developers", slug: "/best-ai-tools-for-developers" },
  { title: "ChatGPT vs Claude for Coding", slug: "/blog/chatgpt-vs-claude" },
];

const faqs = [
  {
    question: "What is the best AI coding assistant in 2026?",
    answer: "The best choice depends on your workflow. GitHub Copilot is the industry standard with excellent VS Code integration. Cursor offers the best AI-native IDE experience with codebase understanding. Claude excels at complex reasoning and explaining code. Codeium provides the best free option. For enterprise privacy needs, Tabnine offers on-premise deployment.",
  },
  {
    question: "Is GitHub Copilot worth $10/month?",
    answer: "For most professional developers, yes. Studies show Copilot can increase coding speed by 30-50% for routine tasks. It's especially valuable for boilerplate code, unfamiliar languages, and API usage. However, free alternatives like Codeium offer 80-90% of the value for individual developers on a budget.",
  },
  {
    question: "Should I use Cursor or VS Code with Copilot?",
    answer: "Cursor offers deeper AI integration with features like multi-file editing, codebase chat, and Composer for complex changes. VS Code + Copilot is better if you rely heavily on specific VS Code extensions or prefer a more traditional workflow. Cursor is built on VS Code so most extensions still work. Try Cursor's free tier to decide.",
  },
  {
    question: "Can AI coding assistants replace developers?",
    answer: "No—AI coding tools are assistants, not replacements. They excel at generating boilerplate, suggesting completions, explaining code, and accelerating routine tasks. However, they make mistakes, hallucinate APIs, and can't understand business requirements or make architectural decisions. Human oversight, code review, and testing remain essential.",
  },
  {
    question: "Which AI is best for debugging code?",
    answer: "Claude is often preferred for debugging complex issues due to its strong reasoning and large context window for analyzing full codebases. ChatGPT is excellent for common errors and quick fixes. GitHub Copilot Chat works well within VS Code for contextual debugging. For web development, browser dev tools + AI chat is a powerful combo.",
  },
  {
    question: "Are free AI coding tools good enough?",
    answer: "Yes! Codeium offers excellent free code completion rivaling Copilot. Claude and ChatGPT free tiers provide strong code assistance. Windsurf has a generous free tier. For hobbyists, students, and developers on a budget, free tools are absolutely sufficient. Paid tiers add faster responses, more usage, and premium features.",
  },
];

export default function CodingCategoryPage() {
  // Get tools in the coding category
  const codingTools = tools.filter((t) => t.category === "coding");
  const sponsoredTools = codingTools.filter((t) => t.sponsored);
  const regularTools = codingTools.filter((t) => !t.sponsored);
  const toolsBySlug = new Map(tools.map((t) => [t.slug, t]));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-white">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/directory" className="hover:text-white">Categories</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">AI Coding Assistants</span>
      </nav>

      {/* Hero Section */}
      <header className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-5xl">💻</span>
          <h1 className="text-4xl md:text-5xl font-bold">AI Coding Assistants</h1>
        </div>
        <p className="text-xl text-gray-400 max-w-4xl leading-relaxed mb-6">
          Supercharge your development workflow with AI coding assistants. From code completion 
          and debugging to documentation and code review—AI tools help you write better code faster.
        </p>

        {/* Extended Description (200+ words) */}
        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-gray-400 leading-relaxed">
            AI coding assistants have transformed software development, becoming essential tools 
            for developers of all skill levels. What started with basic autocomplete has evolved 
            into intelligent pair programmers that understand your entire codebase, reason about 
            complex problems, and generate production-ready code across hundreds of programming 
            languages and frameworks.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Modern AI coding tools come in several forms. Inline assistants like GitHub Copilot 
            and Codeium integrate directly into your IDE, offering real-time suggestions as you 
            type. AI-first editors like Cursor and Windsurf reimagine the entire development 
            experience with AI at the center. Chat-based tools like Claude and ChatGPT excel at 
            explaining code, debugging complex issues, and helping with architecture decisions.
          </p>
          <p className="text-gray-400 leading-relaxed">
            The productivity gains are substantial—studies suggest 30-50% faster completion of 
            routine coding tasks. But the benefits go beyond speed. AI assistants help developers 
            learn new languages and frameworks, catch bugs before they ship, maintain code quality 
            through automated review, and generate comprehensive documentation. Whether you're a 
            junior developer accelerating your learning or a senior engineer automating tedious 
            tasks, AI coding tools have something to offer. The key is finding the right tool for 
            your workflow, team size, and security requirements.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <span className="bg-green-600/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium">
            Code Generation
          </span>
          <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
            Code Review
          </span>
          <span className="bg-red-600/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium">
            Debugging
          </span>
          <span className="bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium">
            Documentation
          </span>
          <span className="bg-orange-600/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium">
            Testing
          </span>
          <span className="bg-cyan-600/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium">
            DevOps
          </span>
        </div>
      </header>

      {/* Featured Tools Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Featured AI Coding Assistants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCodingTools.map((tool) => {
            const toolData = toolsBySlug.get(tool.slug);
            return (
              <div
                key={tool.slug}
                className="bg-gradient-to-br from-green-600/10 to-blue-600/10 border border-green-500/30 rounded-xl p-6 hover:border-green-500/50 transition"
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
                  <span className="text-sm text-green-400">{tool.pricing}</span>
                  {toolData ? (
                    <Link
                      href={`/tool/${tool.slug}`}
                      className="text-sm text-white bg-green-600 hover:bg-green-700 px-3 py-1 rounded transition"
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
        <h2 className="text-3xl font-bold mb-6">Use Cases for AI Coding Assistants</h2>
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
                  <span key={tool} className="text-xs bg-green-600/20 text-green-400 px-2 py-1 rounded">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Coding Tools */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">
          All Coding & Development Tools ({codingTools.length})
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
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-green-500/50 transition group"
              >
                <h3 className="text-lg font-semibold group-hover:text-green-400 transition mb-2">
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
            <p className="text-gray-400 mb-4">More coding tools coming soon!</p>
            <Link
              href="/submit"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition"
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
              className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-green-500/50 transition flex items-center gap-3"
            >
              <span className="text-2xl">🔧</span>
              <span className="text-gray-300 hover:text-white">{post.title}</span>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/ai-coding-tools"
            className="text-green-400 hover:text-green-300 transition"
          >
            View all AI coding tool comparisons →
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
      <section className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/20 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Level Up Your Development Workflow</h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Compare features, pricing, and IDE support to find the perfect AI coding assistant for 
          your development needs.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/ai-coding-tools"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Compare Coding Tools
          </Link>
          <Link
            href="/category/productivity"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            AI Productivity Tools →
          </Link>
        </div>
      </section>
    </div>
  );
}
