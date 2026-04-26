import Link from "next/link";
import type { Metadata } from "next";
import { getAffiliateUrl } from "@/data/affiliate-links";

export const metadata: Metadata = {
  title: "Best AI Tools for Software Engineers in 2026: Code Faster, Ship Better",
  description:
    "The 8 best AI tools for software engineers in 2026. From AI code completion and PR reviews to incident management and API testing — reduce debugging time by 60% and ship cleaner code.",
  keywords: [
    "best ai tools for software engineers",
    "ai tools for engineers 2026",
    "ai coding tools",
    "best ai coding assistant",
    "ai for software development",
    "ai code review tools",
    "github copilot alternatives",
    "ai debugging tools",
    "best ai tools for developers",
    "ai pair programmer",
  ],
  openGraph: {
    title: "Best AI Tools for Software Engineers in 2026: Code Faster, Ship Better",
    description:
      "The definitive guide to AI tools transforming software engineering in 2026. Compare GitHub Copilot, Cursor, Claude Code, Sentry AI, and more for coding, debugging, and shipping.",
    url: "https://aisotools.com/blog/best-ai-tools-for-engineers-2026",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/blog/best-ai-tools-for-engineers-2026",
  },
};

interface EngineerTool {
  name: string;
  slug: string;
  description: string;
  pricing: string;
  pricingDetails: string;
  strengths: string[];
  bestFor: string;
  rating: number;
  useCase: string;
}

const engineerTools: EngineerTool[] = [
  {
    name: "Cursor",
    slug: "cursor",
    description:
      "Cursor is the AI-native code editor that has become the go-to IDE for engineers who want more than autocomplete. Built on VS Code, it adds a full AI pair programmer that understands your entire codebase. Ask it to refactor functions, explain complex logic, write tests from scratch, or generate entire features from plain English descriptions. The Agent mode handles multi-file edits autonomously — you describe the task, Cursor does the work across dozens of files. Over 100,000 professional engineers use it daily.",
    pricing: "Freemium",
    pricingDetails: "Free tier (2,000 completions). Pro $20/mo, Business $40/user/mo",
    strengths: [
      "Codebase-aware AI that reads your entire repo for context",
      "Agent mode for autonomous multi-file changes",
      "Natural language → code generation for features",
      "Inline refactoring and code explanation",
      "Built-in chat for architectural questions",
      "VS Code extension compatibility",
    ],
    bestFor: "Engineers who want an AI pair programmer in their primary editor",
    rating: 4.8,
    useCase: "AI Code Editor",
  },
  {
    name: "GitHub Copilot",
    slug: "github-copilot",
    description:
      "GitHub Copilot remains the most widely adopted AI coding tool in 2026, with over 1.3 million developers using it. Copilot's inline suggestions, chat interface, and Copilot Workspace (for multi-file tasks) integrate seamlessly into VS Code, JetBrains, and Neovim. Its strength is breadth — it works across every language, framework, and project type without configuration. The enterprise version adds security scanning and codebase indexing for large teams.",
    pricing: "Paid",
    pricingDetails: "Individual $10/mo, Business $19/user/mo, Enterprise $39/user/mo",
    strengths: [
      "Native integration with VS Code, JetBrains, and Neovim",
      "Multi-line intelligent autocomplete across all languages",
      "Copilot Chat for codebase Q&A and debugging",
      "Security vulnerability scanning on suggestions",
      "GitHub Actions integration for CI/CD automation",
      "Enterprise codebase context indexing",
    ],
    bestFor: "Teams already in the GitHub ecosystem wanting plug-and-play AI",
    rating: 4.6,
    useCase: "AI Code Completion",
  },
  {
    name: "Claude",
    slug: "claude",
    description:
      "For complex coding challenges — architectural decisions, security audits, large-scale refactors — Claude (Anthropic) is the go-to AI. Its 200K token context window lets you paste entire codebases for deep analysis. Engineers use Claude to review pull requests for logic errors, design API contracts, audit code for security vulnerabilities, write technical documentation, and explain legacy systems written in unfamiliar languages. Claude Code (CLI tool) brings this power directly into the terminal.",
    pricing: "Freemium",
    pricingDetails: "Free tier. Pro $20/mo, Team $25/user/mo",
    strengths: [
      "200K token context — paste entire codebases for analysis",
      "Deep code review catching subtle logic errors",
      "Security vulnerability identification in code",
      "Legacy codebase explanation and documentation",
      "API and system design consultation",
      "Claude Code CLI for terminal-native workflows",
    ],
    bestFor: "Complex architectural decisions, security reviews, and large refactors",
    rating: 4.7,
    useCase: "AI Architecture & Code Review",
  },
  {
    name: "Sentry",
    slug: "sentry",
    description:
      "Sentry's AI capabilities in 2026 have transformed error monitoring from a reactive tool into a proactive debugging assistant. Sentry AI automatically groups errors, identifies root causes, and suggests code fixes — often writing the exact patch that resolves the issue. When a production error fires, Sentry AI traces it through your stack, links to the responsible commit, and presents a fix in minutes. This is the closest engineers have come to automated debugging in production.",
    pricing: "Freemium",
    pricingDetails: "Free (5K errors/mo). Team $26/mo, Business $80/mo",
    strengths: [
      "AI root cause analysis linking errors to specific commits",
      "Automated fix suggestions for common error patterns",
      "Stack trace analysis with contextual debugging hints",
      "Performance regression detection and alerting",
      "Session replay for reproducing user-reported bugs",
      "Integrates with GitHub, Jira, Linear, Slack",
    ],
    bestFor: "Engineers responsible for production reliability and bug resolution",
    rating: 4.5,
    useCase: "AI Error Monitoring & Debugging",
  },
  {
    name: "Linear",
    slug: "linear",
    description:
      "Linear's AI features turn the fastest issue tracker into an intelligent engineering companion. Linear AI auto-writes issue titles and descriptions from brief notes, suggests the right team and priority based on your project context, and generates weekly engineering summaries. For engineers tired of writing ticket descriptions at 6pm, Linear AI handles the overhead — you describe the bug or feature in one sentence, AI turns it into a properly formatted issue with acceptance criteria.",
    pricing: "Freemium",
    pricingDetails: "Free (250 issues). Basic $8/user/mo, Business $16/user/mo",
    strengths: [
      "AI-generated issue descriptions and acceptance criteria",
      "Smart triage: auto-assigns team, priority, and cycle",
      "Weekly engineering summaries for standups",
      "Natural language search across all project history",
      "Git integration: auto-links PRs and commits to issues",
      "Fastest UI of any project management tool",
    ],
    bestFor: "Engineering teams wanting AI-assisted project management without overhead",
    rating: 4.6,
    useCase: "AI-Powered Project Management",
  },
  {
    name: "Postman",
    slug: "postman",
    description:
      "Postman's AI assistant — Postbot — has made API development dramatically faster. Postbot writes test scripts from plain English descriptions, generates API documentation from collections, creates mock servers from spec files, and debugs failing requests by analyzing request/response patterns. For backend engineers building or consuming APIs, Postbot eliminates the boilerplate: 'write tests that check for 200 status and that user ID is a string' becomes working code in seconds.",
    pricing: "Freemium",
    pricingDetails: "Free (3 collections). Basic $14/user/mo, Professional $29/user/mo",
    strengths: [
      "Postbot: natural language → API test scripts",
      "Auto-generates documentation from API collections",
      "Mock server creation from OpenAPI specs",
      "AI request debugging with pattern analysis",
      "Automated test coverage suggestions",
      "API monitoring with anomaly detection",
    ],
    bestFor: "Backend engineers building, testing, and documenting APIs",
    rating: 4.4,
    useCase: "API Development & Testing",
  },
  {
    name: "Codeium",
    slug: "codeium",
    description:
      "Codeium is the free GitHub Copilot alternative that enterprise engineers are adopting at scale. Unlike Copilot, Codeium offers a permanently free plan with unlimited completions and supports self-hosted deployment — critical for teams with data privacy requirements. Its context engine understands your entire codebase, not just the open file. The enterprise plan allows organizations to train Codeium on their proprietary codebases for team-specific suggestions.",
    pricing: "Freemium",
    pricingDetails: "Free (unlimited). Teams $12/user/mo, Enterprise custom",
    strengths: [
      "Free unlimited completions — no usage caps",
      "Self-hosted deployment for data privacy compliance",
      "Enterprise codebase training on proprietary code",
      "Supports 70+ programming languages",
      "Multi-line completion with codebase context",
      "Chat interface for code generation and Q&A",
    ],
    bestFor: "Engineers or teams who need a Copilot alternative without usage limits",
    rating: 4.3,
    useCase: "Free AI Code Completion",
  },
  {
    name: "Tabnine",
    slug: "tabnine",
    description:
      "Tabnine differentiates from other AI coding tools by running AI models locally — no code leaves your machine. For engineers at regulated companies (fintech, healthcare, defense) where sending code to external APIs is prohibited, Tabnine is the compliance-safe alternative. The local model runs on CPU and still provides useful completions, while the cloud model delivers quality comparable to Copilot. Enterprise deployments can train Tabnine on internal code repositories.",
    pricing: "Freemium",
    pricingDetails: "Free (basic). Pro $12/user/mo, Enterprise custom",
    strengths: [
      "Local model option: zero code sent to external servers",
      "Compliance-safe for HIPAA, SOC 2, GDPR environments",
      "Enterprise training on internal code repositories",
      "IDE plugins for VS Code, JetBrains, Eclipse, Vim",
      "Team-level code pattern learning",
      "Works fully offline with local models",
    ],
    bestFor: "Engineers at regulated companies with strict data privacy requirements",
    rating: 4.2,
    useCase: "Privacy-Safe AI Coding",
  },
];

export default function BestAIToolsForEngineers() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero */}
      <header className="mb-12">
        <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span>/</span>
          <span>Software Engineering</span>
        </div>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Best AI Tools for Software Engineers in 2026
        </h1>
        <p className="text-xl leading-relaxed text-gray-600">
          The best engineers in 2026 aren&apos;t working harder — they&apos;re working with AI. <strong>AI coding tools reduce boilerplate by 55% and cut debugging time by half</strong>. These are the 8 AI tools every software engineer should have in their stack.
        </p>
        <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
          <span>Updated April 2026</span>
          <span>•</span>
          <span>12 min read</span>
        </div>
      </header>

      {/* Quick Picks */}
      <section className="mb-12 rounded-lg border border-blue-200 bg-blue-50 p-6">
        <h2 className="mb-4 text-xl font-bold text-blue-900">⚡ Quick Picks</h2>
        <ul className="space-y-2 text-blue-800">
          <li><strong>Best AI editor:</strong> <Link href="/tool/cursor" className="underline">Cursor</Link> — full codebase awareness + agent mode</li>
          <li><strong>Best for teams:</strong> <Link href="/tool/github-copilot" className="underline">GitHub Copilot</Link> — widest IDE support, enterprise features</li>
          <li><strong>Best for complex problems:</strong> <Link href="/tool/claude" className="underline">Claude</Link> — 200K context, deep code analysis</li>
          <li><strong>Best for debugging:</strong> <Link href="/tool/sentry" className="underline">Sentry AI</Link> — root cause + auto-generated fixes</li>
          <li><strong>Best free option:</strong> <Link href="/tool/codeium" className="underline">Codeium</Link> — unlimited completions, forever free</li>
        </ul>
      </section>

      {/* Intro */}
      <section className="mb-12">
        <h2 className="mb-4 text-3xl font-bold text-gray-900">Why AI Is Non-Negotiable for Engineers in 2026</h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          A 2026 GitHub survey found that engineers using AI coding tools complete tasks <strong>55% faster</strong> on average. The gap between AI-augmented and non-augmented developers is widening every quarter — on code output, test coverage, and documentation quality.
        </p>
        <p className="mb-4 leading-relaxed text-gray-700">
          But the ROI isn&apos;t just in autocomplete. The real leverage is in the entire engineering loop: AI editors write the code, AI debugging tools find the bugs, AI project management tools reduce ticket overhead, and AI code review catches security issues before they ship. Engineers who instrument this full loop are shipping 2-3x more than those who haven&apos;t.
        </p>
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm text-amber-800">
            <strong>Note:</strong> This guide focuses on working software engineers. If you&apos;re building AI-native apps or working with ML pipelines, see our guides to <Link href="/blog/best-ai-tools-for-data-scientists-2026" className="text-blue-600 hover:underline">Best AI Tools for Data Scientists</Link> and <Link href="/blog/best-ai-agent-frameworks-2026" className="text-blue-600 hover:underline">Best AI Agent Frameworks</Link>.
          </p>
        </div>
      </section>

      {/* Tools */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold text-gray-900">The 8 Best AI Tools for Software Engineers</h2>
        {engineerTools.map((tool, i) => (
          <div key={tool.slug} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <div className="mb-1 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                  {tool.useCase}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {i + 1}. {tool.name}
                </h3>
                <div className="mt-1 flex items-center gap-3 text-sm text-gray-500">
                  <span>⭐ {tool.rating}/5</span>
                  <span>•</span>
                  <span>{tool.pricing}</span>
                </div>
              </div>
            </div>

            <p className="mb-4 leading-relaxed text-gray-700">{tool.description}</p>

            <div className="mb-4">
              <h4 className="mb-2 font-semibold text-gray-900">Key Strengths:</h4>
              <ul className="grid gap-1 sm:grid-cols-2">
                {tool.strengths.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-green-500">✓</span> {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-4 border-t border-gray-100 pt-4 text-sm">
              <span className="text-gray-500">💰 {tool.pricingDetails}</span>
              <span className="text-gray-500">🎯 {tool.bestFor}</span>
            </div>

            <div className="mt-4 flex gap-3">
              {getAffiliateUrl(tool.slug) && (
                <a
                  href={getAffiliateUrl(tool.slug)!}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
                >
                  Try {tool.name} →
                </a>
              )}
              <Link
                href={`/tool/${tool.slug}`}
                className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                Full Review →
              </Link>
              <Link
                href={`/alternatives/${tool.slug}`}
                className="inline-flex items-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Alternatives
              </Link>
              <Link
                href={`/pricing/${tool.slug}`}
                className="inline-flex items-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Pricing
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Comparison Table */}
      <section className="my-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Engineering AI Tools Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200 bg-gray-50">
                <th className="px-4 py-3 text-left font-semibold">Tool</th>
                <th className="px-4 py-3 text-left font-semibold">Best For</th>
                <th className="px-4 py-3 text-left font-semibold">Pricing</th>
                <th className="px-4 py-3 text-center font-semibold">Rating</th>
              </tr>
            </thead>
            <tbody>
              {engineerTools.map((tool) => (
                <tr key={tool.slug} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">
                    <Link href={`/tool/${tool.slug}`} className="text-blue-600 hover:underline">{tool.name}</Link>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{tool.useCase}</td>
                  <td className="px-4 py-3 text-gray-600">{tool.pricing}</td>
                  <td className="px-4 py-3 text-center">{tool.rating}/5</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* How to Choose */}
      <section className="my-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">How to Build Your Engineering AI Stack</h2>
        <p className="mb-6 leading-relaxed text-gray-700">
          Don&apos;t add all 8 at once. Start with the tool that addresses your biggest daily friction:
        </p>
        <div className="space-y-4">
          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="mb-1 font-semibold text-gray-900">⌨️ Want to write code faster?</h3>
            <p className="text-gray-700">Start with <Link href="/tool/cursor" className="text-blue-600 hover:underline">Cursor</Link> (best AI editor) or <Link href="/tool/github-copilot" className="text-blue-600 hover:underline">GitHub Copilot</Link> (if you&apos;re team-mandated on VS Code). Both will cut boilerplate time by 50%+.</p>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="mb-1 font-semibold text-gray-900">🐛 Spending too long debugging production issues?</h3>
            <p className="text-gray-700"><Link href="/tool/sentry" className="text-blue-600 hover:underline">Sentry AI</Link> turns error monitoring into automated debugging. Root cause in minutes, not hours.</p>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="mb-1 font-semibold text-gray-900">🏗️ Need deep architectural review?</h3>
            <p className="text-gray-700"><Link href="/tool/claude" className="text-blue-600 hover:underline">Claude</Link> with its 200K context is unmatched for pasting entire codebases and asking architectural questions. Use alongside Cursor, not instead of it.</p>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="mb-1 font-semibold text-gray-900">🔒 At a regulated company with data privacy requirements?</h3>
            <p className="text-gray-700"><Link href="/tool/tabnine" className="text-blue-600 hover:underline">Tabnine</Link> runs locally — zero code leaves your machine. Compliance-safe for HIPAA, SOC 2, and GDPR environments.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="my-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">Cursor vs GitHub Copilot — which should I use?</h3>
            <p className="leading-relaxed text-gray-700">Cursor wins on raw power: it understands your entire codebase, handles multi-file edits, and its Agent mode is more capable than Copilot Workspace. Copilot wins on integration: if your team uses VS Code exclusively and has GitHub Enterprise, Copilot is the lower-friction option. Most individual engineers who try Cursor don&apos;t go back.</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">Is it safe to use AI coding tools with proprietary code?</h3>
            <p className="leading-relaxed text-gray-700">It depends on the tool. GitHub Copilot Business and Enterprise have data privacy agreements. Cursor doesn&apos;t train on your code by default. For maximum privacy, <Link href="/tool/tabnine" className="text-blue-600 hover:underline">Tabnine</Link> or self-hosted Codeium are the safest options. Always check your company&apos;s acceptable use policy before pasting proprietary code into any AI tool.</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">Will AI replace software engineers?</h3>
            <p className="leading-relaxed text-gray-700">AI is replacing the routine parts of engineering — boilerplate code, test writing, documentation. It&apos;s not replacing judgment: system design, code review for correctness, architectural decisions, and debugging novel problems still require human engineers. The engineers most at risk are those writing simple CRUD code without growing into design and architecture. The safest engineers are those using AI to amplify their judgment.</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">What&apos;s the best free AI coding tool?</h3>
            <p className="leading-relaxed text-gray-700"><Link href="/tool/codeium" className="text-blue-600 hover:underline">Codeium</Link> offers the best free plan with truly unlimited completions and no credit card required. GitHub Copilot has a free tier limited to 2,000 completions per month. ChatGPT Free is also useful for one-off coding questions and code explanation.</p>
          </div>
        </div>
      </section>

      {/* Verdict */}
      <section className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
        <h2 className="mb-4 text-3xl font-bold">The Engineering AI Stack for 2026</h2>
        <p className="mb-6 text-lg leading-relaxed text-blue-50">
          The optimal stack: <strong>Cursor</strong> as your daily editor, <strong>Claude</strong> for architectural reviews and complex refactors, <strong>Sentry AI</strong> for production debugging, and <strong>Linear</strong> for project management. That combination alone saves 15-20 hours per week on an average engineering workflow — time you can put toward the high-leverage work only humans can do.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/category/coding" className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-colors hover:bg-gray-100">
            Browse All Coding AI Tools →
          </Link>
          <Link href="/compare/cursor-vs-github-copilot" className="inline-flex items-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-blue-600">
            Cursor vs Copilot Deep Dive →
          </Link>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Best AI Tools for Software Engineers in 2026: Code Faster, Ship Better",
            description: "Comprehensive guide to the 8 best AI tools for software engineers in 2026.",
            author: { "@type": "Organization", name: "AISOTools" },
            publisher: { "@type": "Organization", name: "AISOTools", logo: { "@type": "ImageObject", url: "https://aisotools.com/logo.png" } },
            datePublished: "2026-04-24",
            dateModified: "2026-04-24",
            mainEntityOfPage: { "@type": "WebPage", "@id": "https://aisotools.com/blog/best-ai-tools-for-engineers-2026" },
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
              { "@type": "Question", name: "Cursor vs GitHub Copilot — which should I use?", acceptedAnswer: { "@type": "Answer", text: "Cursor wins on raw power with full codebase awareness and Agent mode. Copilot wins on integration for VS Code/GitHub Enterprise teams. Most individual engineers who try Cursor don't go back." } },
              { "@type": "Question", name: "Is it safe to use AI coding tools with proprietary code?", acceptedAnswer: { "@type": "Answer", text: "Copilot Business/Enterprise and Cursor have privacy agreements. For maximum safety, Tabnine runs fully local. Always check your company's acceptable use policy." } },
              { "@type": "Question", name: "Will AI replace software engineers?", acceptedAnswer: { "@type": "Answer", text: "AI replaces routine boilerplate and test writing, not system design, architecture, and debugging novel problems. Engineers who grow into design and architecture are safest." } },
              { "@type": "Question", name: "What's the best free AI coding tool?", acceptedAnswer: { "@type": "Answer", text: "Codeium offers unlimited completions free forever. GitHub Copilot's free tier is 2,000 completions/month. ChatGPT Free is useful for one-off coding questions." } },
            ],
          }),
        }}
      />
    </article>
  );
}
