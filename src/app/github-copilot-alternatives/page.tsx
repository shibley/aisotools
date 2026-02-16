import { tools } from "@/data/tools";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GitHub Copilot Alternatives: Best AI Coding Assistants in 2026",
  description:
    "Discover the best GitHub Copilot alternatives including Cursor, Windsurf, Codeium, Tabnine, Amazon CodeWhisperer, and more. Compare features, IDE support, and pricing.",
  keywords: [
    "GitHub Copilot alternatives",
    "best AI coding assistants",
    "AI code completion",
    "Cursor IDE",
    "Codeium",
    "free AI coding tools",
  ],
  openGraph: {
    title: "GitHub Copilot Alternatives: Best AI Coding Assistants in 2026",
    description:
      "Compare the best GitHub Copilot alternatives. In-depth reviews of Cursor, Windsurf, Codeium, Tabnine, and 6 more AI coding assistants.",
    url: "https://aisotools.com/github-copilot-alternatives",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/github-copilot-alternatives",
  },
};

interface CodingAssistantComparison {
  name: string;
  slug: string;
  description: string;
  pricing: string;
  pricingDetails: string;
  strengths: string[];
  weaknesses: string[];
  bestFor: string;
  features: string[];
  ideSupport: string;
  languages: string;
}

const assistants: CodingAssistantComparison[] = [
  {
    name: "Cursor",
    slug: "cursor",
    description: "AI-first code editor forked from VS Code with deep GPT-4 integration and codebase understanding.",
    pricing: "Freemium",
    pricingDetails: "Free tier (2000 completions/mo), Pro $20/mo",
    strengths: [
      "Native AI-first editor design",
      "Excellent codebase context understanding",
      "GPT-4 integration",
      "Chat with your entire codebase",
      "VS Code compatibility",
      "Fast and responsive",
    ],
    weaknesses: [
      "Separate editor (not a plugin)",
      "Smaller ecosystem than VS Code",
      "Relatively new with evolving features",
      "Free tier limits can be restrictive",
    ],
    bestFor: "Developers wanting AI-first experience, full-stack development, complex codebases",
    features: ["Codebase chat", "GPT-4", "Inline editing", "Multi-file edits", "Terminal integration"],
    ideSupport: "Standalone editor (VS Code fork)",
    languages: "All major languages (Python, JavaScript, TypeScript, Go, Rust, etc.)",
  },
  {
    name: "Windsurf",
    slug: "windsurf",
    description: "Codeium's new AI-native IDE with agentic coding capabilities and deep codebase understanding.",
    pricing: "Freemium",
    pricingDetails: "Free tier, Pro $15/mo",
    strengths: [
      "Agentic AI capabilities",
      "Excellent context awareness",
      "Built by Codeium team",
      "Fast autocomplete",
      "Good free tier",
      "Multi-file editing",
    ],
    weaknesses: [
      "Very new (launched late 2024)",
      "Smaller community",
      "Separate IDE learning curve",
      "Limited third-party extensions",
    ],
    bestFor: "Developers wanting cutting-edge agentic AI, complex refactoring, new projects",
    features: ["Agentic coding", "Codebase understanding", "Multi-file edits", "Terminal AI", "Flow state mode"],
    ideSupport: "Standalone IDE",
    languages: "70+ languages including Python, JavaScript, TypeScript, Java, C++, Go",
  },
  {
    name: "Codeium",
    slug: "codeium",
    description: "Free AI code completion tool with support for 70+ languages and all major IDEs.",
    pricing: "Freemium",
    pricingDetails: "Free for individuals, Teams $12/user/mo, Enterprise custom",
    strengths: [
      "Completely free for individuals",
      "70+ language support",
      "Works in all major IDEs",
      "Fast autocomplete",
      "No usage limits on free tier",
      "Privacy-focused",
    ],
    weaknesses: [
      "Less sophisticated than GPT-4 based tools",
      "Chat feature limited vs competitors",
      "Fewer advanced features",
    ],
    bestFor: "Budget-conscious developers, students, open-source projects, polyglot developers",
    features: ["Autocomplete", "Chat", "70+ languages", "All major IDEs", "Unlimited free tier"],
    ideSupport: "VS Code, JetBrains, Vim/Neovim, Visual Studio, Jupyter, and more",
    languages: "70+ including Python, JavaScript, TypeScript, Java, C++, Go, Rust, PHP",
  },
  {
    name: "Tabnine",
    slug: "tabnine",
    description: "Privacy-focused AI code assistant with on-premise deployment options and team customization.",
    pricing: "Freemium",
    pricingDetails: "Free tier, Pro $12/mo, Enterprise custom",
    strengths: [
      "Privacy-focused (can run locally)",
      "On-premise deployment available",
      "Team-trained models",
      "Good IDE integration",
      "Compliance-friendly for enterprises",
    ],
    weaknesses: [
      "Free tier is limited",
      "Less powerful than GPT-4 alternatives",
      "Can be slower than competitors",
      "Chat feature requires paid tier",
    ],
    bestFor: "Enterprise teams, privacy-sensitive projects, regulated industries, on-premise needs",
    features: ["Local/cloud deployment", "Team learning", "Privacy controls", "All major IDEs", "Compliance ready"],
    ideSupport: "VS Code, JetBrains, Visual Studio, Vim, Eclipse, and more",
    languages: "30+ languages including all major ones",
  },
  {
    name: "Amazon CodeWhisperer (Q Developer)",
    slug: "amazon-codewhisperer",
    description: "Amazon's AI coding assistant with deep AWS integration and security scanning, now part of Amazon Q.",
    pricing: "Freemium",
    pricingDetails: "Free tier, Professional $19/user/mo",
    strengths: [
      "Free tier includes security scanning",
      "Excellent AWS integration",
      "Reference tracking",
      "Security vulnerability detection",
      "Good for AWS developers",
    ],
    weaknesses: [
      "Less powerful for non-AWS code",
      "Smaller training dataset than competitors",
      "Limited IDE support",
      "Amazon ecosystem lock-in",
    ],
    bestFor: "AWS developers, cloud-native applications, teams prioritizing security scanning",
    features: ["Security scanning", "AWS integration", "Reference tracking", "CLI integration", "Vulnerability detection"],
    ideSupport: "VS Code, JetBrains, AWS Cloud9, AWS Lambda console",
    languages: "Python, JavaScript, TypeScript, Java, C#, Go, Rust, PHP, Ruby, Kotlin, SQL",
  },
  {
    name: "Replit AI",
    slug: "replit-ai",
    description: "AI assistant built into Replit's collaborative online IDE with deployment and hosting capabilities.",
    pricing: "Freemium",
    pricingDetails: "Free tier, Replit Core $15/mo, Replit Pro $25/mo",
    strengths: [
      "Integrated with full development environment",
      "Collaborative coding features",
      "One-click deployment",
      "Great for learning and prototyping",
      "Web-based (no setup required)",
    ],
    weaknesses: [
      "Locked to Replit platform",
      "Less powerful than dedicated AI tools",
      "Limited for large projects",
      "Requires internet connection",
    ],
    bestFor: "Students, educators, rapid prototyping, collaborative projects, web development",
    features: ["Ghostwriter AI", "Collaborative editing", "Deployment", "Hosting", "Multiplayer coding"],
    ideSupport: "Replit online IDE only",
    languages: "50+ languages supported in Replit",
  },
  {
    name: "Sourcegraph Cody",
    slug: "cody",
    description: "AI coding assistant with deep codebase understanding using Sourcegraph's code intelligence platform.",
    pricing: "Freemium",
    pricingDetails: "Free tier, Pro $9/mo, Enterprise custom",
    strengths: [
      "Excellent codebase context",
      "Code search integration",
      "Multiple LLM support",
      "Good for large codebases",
      "Affordable pricing",
    ],
    weaknesses: [
      "Requires Sourcegraph understanding",
      "Smaller user base",
      "Limited IDE support vs competitors",
      "Newer with evolving features",
    ],
    bestFor: "Large monorepos, teams using Sourcegraph, codebase exploration, refactoring",
    features: ["Codebase understanding", "Code search", "Multiple LLMs", "Chat", "Autocomplete"],
    ideSupport: "VS Code, JetBrains, Neovim",
    languages: "All languages Sourcegraph supports",
  },
  {
    name: "Supermaven",
    slug: "supermaven",
    description: "Fast AI code completion with 300,000 token context window for understanding large codebases.",
    pricing: "Freemium",
    pricingDetails: "Free tier, Pro $10/mo",
    strengths: [
      "Massive 300K token context",
      "Extremely fast completions",
      "Affordable pricing",
      "Good codebase understanding",
      "Low latency",
    ],
    weaknesses: [
      "Newer tool with smaller community",
      "Limited IDE support",
      "Fewer features than full-featured alternatives",
      "Chat feature still developing",
    ],
    bestFor: "Large codebases requiring extensive context, speed-focused developers",
    features: ["300K context window", "Fast autocomplete", "Low latency", "Codebase awareness"],
    ideSupport: "VS Code, JetBrains",
    languages: "Major programming languages",
  },
  {
    name: "Continue",
    slug: "continue",
    description: "Open-source AI code assistant that lets you use any LLM (GPT-4, Claude, local models) in your IDE.",
    pricing: "Free (open-source)",
    pricingDetails: "Free and open-source, bring your own API key",
    strengths: [
      "Completely open-source",
      "Use any LLM (GPT-4, Claude, local models)",
      "Full customization",
      "Privacy-focused",
      "Active development",
      "No vendor lock-in",
    ],
    weaknesses: [
      "Requires API key setup",
      "Less polished than commercial products",
      "API costs separate",
      "More technical setup required",
    ],
    bestFor: "Developers wanting control, open-source advocates, custom LLM users, privacy needs",
    features: ["Multiple LLMs", "Local model support", "Open-source", "Customizable", "Autocomplete & chat"],
    ideSupport: "VS Code, JetBrains",
    languages: "All languages supported by chosen LLM",
  },
  {
    name: "GitHub Copilot",
    slug: "github-copilot",
    description: "Microsoft's AI pair programmer powered by OpenAI Codex, the original mainstream AI coding assistant.",
    pricing: "Paid",
    pricingDetails: "Individual $10/mo, Business $19/user/mo, Enterprise $39/user/mo",
    strengths: [
      "Most widely used and tested",
      "Excellent autocomplete",
      "Strong community support",
      "Good documentation",
      "GitHub integration",
      "Regular updates",
    ],
    weaknesses: [
      "No free tier",
      "Limited context window vs newer tools",
      "Basic chat compared to Cursor/Windsurf",
      "Privacy concerns for some organizations",
    ],
    bestFor: "Professional developers, teams already on GitHub, established workflows, stability",
    features: ["Autocomplete", "Chat", "CLI integration", "Pull request summaries", "GitHub integration"],
    ideSupport: "VS Code, JetBrains, Neovim, Visual Studio",
    languages: "Dozens of languages, best for Python, JavaScript, TypeScript, Ruby, Go",
  },
];

export default function GitHubCopilotAlternativesPage() {
  const toolsBySlug = new Map(tools.map((t) => [t.slug, t]));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-white">
          Home
        </Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">GitHub Copilot Alternatives</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          GitHub Copilot Alternatives: Best AI Coding Assistants in 2026
        </h1>
        <p className="text-xl text-gray-400 max-w-4xl">
          Looking for GitHub Copilot alternatives? Compare the best AI coding assistants including
          Cursor, Windsurf, Codeium, Tabnine, Amazon CodeWhisperer, and more. Find the perfect tool
          for your development workflow, IDE, and budget.
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
            Updated February 2026
          </span>
          <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
            10 AI Coding Assistants Compared
          </span>
        </div>
      </header>

      {/* Quick Navigation */}
      <section className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-12">
        <h2 className="text-lg font-semibold mb-3">Quick Navigation</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 text-sm">
          {assistants.slice(0, 9).map((assistant) => (
            <a
              key={assistant.slug}
              href={`#${assistant.slug}`}
              className="text-blue-400 hover:text-blue-300 transition"
            >
              {assistant.name}
            </a>
          ))}
        </div>
      </section>

      {/* Introduction */}
      <section className="prose prose-invert max-w-none mb-16">
        <h2 className="text-3xl font-bold mb-4">Why Look for GitHub Copilot Alternatives?</h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          GitHub Copilot pioneered AI-assisted coding, but the landscape has evolved dramatically.
          New tools offer better context understanding, more powerful models, free tiers, and
          specialized features that make Copilot look dated in comparison.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          Cursor and Windsurf provide AI-first editing experiences with codebase-wide understanding.
          Codeium offers unlimited free usage for individuals. Continue lets you use any LLM
          including Claude and local models. Amazon CodeWhisperer includes security scanning.
          Tabnine offers on-premise deployment for privacy-sensitive organizations.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed">
          This guide compares 10 top GitHub Copilot alternatives across features, IDE support,
          pricing, and ideal use cases to help you find the right AI coding assistant.
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
                <th className="px-4 py-3 text-left text-sm font-semibold">Pricing</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">IDE Support</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {assistants.map((assistant) => (
                <tr key={assistant.slug} className="hover:bg-gray-800/50 transition">
                  <td className="px-4 py-3">
                    <a href={`#${assistant.slug}`} className="font-medium text-blue-400 hover:text-blue-300">
                      {assistant.name}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-400">{assistant.pricing}</td>
                  <td className="px-4 py-3 text-sm text-gray-400">{assistant.ideSupport.split(",")[0]}</td>
                  <td className="px-4 py-3 text-sm text-gray-400">{assistant.bestFor.split(",")[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed Reviews */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Detailed GitHub Copilot Alternatives Reviews</h2>
        <div className="space-y-12">
          {assistants.map((assistant, index) => {
            const toolData = toolsBySlug.get(assistant.slug);
            return (
              <article
                key={assistant.slug}
                id={assistant.slug}
                className="bg-gray-900 border border-gray-800 rounded-xl p-8 scroll-mt-24"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      {index + 1}. {assistant.name}
                    </h3>
                    <p className="text-gray-400">{assistant.description}</p>
                  </div>
                  {toolData && (
                    <Link
                      href={`/tool/${assistant.slug}`}
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
                    <p className="text-gray-400 text-sm mb-1">{assistant.pricing}</p>
                    <p className="text-gray-500 text-xs">{assistant.pricingDetails}</p>
                  </div>

                  {/* Languages */}
                  <div>
                    <h4 className="font-semibold text-gray-300 mb-2">💻 Language Support</h4>
                    <p className="text-gray-400 text-sm">{assistant.languages}</p>
                  </div>
                </div>

                {/* IDE Support */}
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-300 mb-2">🔧 IDE Support</h4>
                  <p className="text-gray-400 text-sm">{assistant.ideSupport}</p>
                </div>

                {/* Best For */}
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-300 mb-2">🎯 Best For</h4>
                  <p className="text-gray-400 text-sm">{assistant.bestFor}</p>
                </div>

                {/* Strengths */}
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-300 mb-3">✅ Strengths</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {assistant.strengths.map((strength, i) => (
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
                    {assistant.weaknesses.map((weakness, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start">
                        <span className="text-red-400 mr-2 mt-0.5">•</span>
                        {weakness}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features */}
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-300 mb-3">⚡ Key Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {assistant.features.map((feature, i) => (
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

      {/* Use Case Guide */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Which AI Coding Assistant Should You Choose?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Free/Budget Users</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Codeium:</strong> Completely free for individuals</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Continue:</strong> Open-source, bring your own API</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>CodeWhisperer:</strong> Free tier with security scanning</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Advanced AI Features</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Cursor:</strong> Best AI-first editing experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Windsurf:</strong> Cutting-edge agentic capabilities</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Supermaven:</strong> Massive 300K context window</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Enterprise & Privacy</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Tabnine:</strong> On-premise deployment, privacy-first</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Continue:</strong> Full control with local models</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>GitHub Copilot:</strong> Enterprise tier with policies</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For AWS Developers</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>CodeWhisperer:</strong> Deep AWS integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Cursor:</strong> General-purpose with AWS support</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Large Codebases</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Supermaven:</strong> 300K token context</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Cody:</strong> Sourcegraph integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Cursor:</strong> Excellent codebase understanding</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Students & Learning</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Replit AI:</strong> Integrated learning environment</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Codeium:</strong> Free for students</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>GitHub Copilot:</strong> Free for verified students</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Feature Comparison</h2>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-gray-800 pb-3">
              <span className="font-medium">Autocomplete</span>
              <span className="text-gray-400 text-sm">All tools provide AI autocomplete</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-800 pb-3">
              <span className="font-medium">Chat Interface</span>
              <span className="text-gray-400 text-sm">All except Supermaven (in development)</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-800 pb-3">
              <span className="font-medium">Codebase Understanding</span>
              <span className="text-gray-400 text-sm">Cursor, Windsurf, Supermaven, Cody (strong)</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-800 pb-3">
              <span className="font-medium">Multi-file Editing</span>
              <span className="text-gray-400 text-sm">Cursor, Windsurf, Cody</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-800 pb-3">
              <span className="font-medium">Security Scanning</span>
              <span className="text-gray-400 text-sm">CodeWhisperer (included free)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Custom LLM Support</span>
              <span className="text-gray-400 text-sm">Continue (any LLM), Cody (multiple)</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Is there a free alternative to GitHub Copilot?</h3>
            <p className="text-gray-400">
              Yes! Codeium is completely free for individuals with no usage limits. Continue is
              open-source (you bring your own API key). Amazon CodeWhisperer has a generous free
              tier. Students can get GitHub Copilot free through GitHub Education.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Which is better: Cursor or GitHub Copilot?</h3>
            <p className="text-gray-400">
              Cursor is generally considered more advanced with better codebase understanding,
              GPT-4 integration, and AI-first design. GitHub Copilot is more stable and widely
              adopted. Many developers switching to Cursor report significant productivity gains,
              especially for complex codebases.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Can AI coding assistants work offline?</h3>
            <p className="text-gray-400">
              Tabnine offers local model deployment that works offline. Continue supports local
              models like Code Llama that run on your machine. Most tools (Copilot, Cursor, Codeium)
              require internet connection as they use cloud-based models.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Do AI coding assistants support my IDE?</h3>
            <p className="text-gray-400">
              Most tools support VS Code and JetBrains IDEs. Cursor and Windsurf are standalone
              editors. Codeium has the broadest IDE support including Vim, Visual Studio, and
              Jupyter. Check the specific tool's documentation for your IDE.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Are AI coding assistants worth the cost?</h3>
            <p className="text-gray-400">
              Most developers report 20-30% productivity gains, making even $20/mo subscriptions
              worthwhile. Start with free options (Codeium, CodeWhisperer free tier) to test the
              value, then upgrade if beneficial. Many companies provide subscriptions for developers.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Explore More AI Tools</h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Discover hundreds of AI tools across all categories — from chatbots to image generators
          and SEO tools.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Browse All Tools
          </Link>
          <Link
            href="/chatgpt-alternatives"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            AI Chatbots →
          </Link>
        </div>
      </section>
    </div>
  );
}
