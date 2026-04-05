import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Cursor Alternatives in 2026: 8 Top AI Code Editors",
  description:
    "Looking for Cursor alternatives? Compare 8 top AI coding tools including Windsurf, Claude Code, GitHub Copilot, and Zed. Find the best AI code editor for your workflow.",
  keywords: [
    "Cursor alternatives",
    "best Cursor competitors",
    "AI code editors",
    "Windsurf vs Cursor",
    "free Cursor alternatives",
    "cursor ai alternatives",
    "cursor ide alternatives",
  ],
  openGraph: {
    title: "Best Cursor Alternatives in 2026: 8 Top AI Code Editors",
    description:
      "Comparing the 8 best Cursor alternatives with pricing, features, and IDE support. Whether you want free, open-source, or enterprise options.",
    url: "https://aisotools.com/cursor-alternatives",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/cursor-alternatives",
  },
};

interface CursorAlternative {
  name: string;
  slug: string;
  description: string;
  pricing: string;
  pricingComparison: string;
  strengths: string[];
  weaknesses: string[];
  vsCursor: string;
  bestFor: string;
  features: string[];
  ideSupport: string;
  privacy: string;
}

const alternatives: CursorAlternative[] = [
  {
    name: "Windsurf (Codeium)",
    slug: "windsurf",
    description:
      "Codeium's AI-first code editor with agentic Cascade mode — the most direct free competitor to Cursor.",
    pricing: "Freemium",
    pricingComparison: "FREE for individuals (vs Cursor $20/mo Pro). Teams $12/user/mo",
    strengths: [
      "Completely free for individual developers",
      "Agentic Cascade mode for multi-step coding tasks",
      "Fast autocomplete performance",
      "Privacy-focused — no code used for training",
      "Offline mode available",
      "No credit card required to start",
    ],
    weaknesses: [
      "Newer ecosystem, smaller extension library",
      "Less brand recognition than Cursor",
      "Fewer third-party integrations",
    ],
    vsCursor:
      "Free vs paid is the killer advantage. Cascade agentic mode competes directly with Cursor's Composer. Slightly less mature but rapidly closing the gap.",
    bestFor: "Individual developers, budget-conscious teams, privacy-first workflows",
    features: [
      "Cascade agentic mode",
      "Fast inline autocomplete",
      "Multi-file edits",
      "Offline mode",
      "70+ languages",
      "Chat interface",
    ],
    ideSupport: "Standalone editor (VS Code fork), VS Code extension, JetBrains IDEs, Vim/Neovim",
    privacy: "Excellent — privacy-first, no training on user code by default",
  },
  {
    name: "Claude Code",
    slug: "claude-code",
    description:
      "Anthropic's agentic CLI coding tool with 200K+ context and superior reasoning for complex engineering tasks.",
    pricing: "Usage-based",
    pricingComparison: "Usage-based via Anthropic API (~$20-60/mo for heavy use). Claude Pro $20/mo",
    strengths: [
      "200K+ token context window (vs Cursor's ~10K effective)",
      "Best-in-class reasoning for complex refactoring",
      "Agentic — runs terminal commands, edits files autonomously",
      "Excellent for large codebases",
      "No IDE lock-in — works in any terminal",
      "Can handle full project rewrites",
    ],
    weaknesses: [
      "No real-time autocomplete",
      "CLI-first UX (steeper learning curve)",
      "API costs can add up for heavy use",
      "Not a GUI editor",
    ],
    vsCursor:
      "Different paradigm: Claude Code is CLI-based agentic, Cursor is IDE-based. Claude Code wins on reasoning depth; Cursor wins on inline autocomplete UX.",
    bestFor: "Complex refactoring, agentic task automation, large codebases, backend engineers",
    features: [
      "Agentic file editing",
      "Terminal command execution",
      "Codebase-wide context",
      "Git integration",
      "Test generation",
      "Architecture review",
    ],
    ideSupport: "Any editor + terminal. VS Code integration available",
    privacy: "Excellent — Anthropic doesn't train on user data, strong enterprise privacy",
  },
  {
    name: "GitHub Copilot",
    slug: "github-copilot",
    description:
      "The original AI coding assistant, deeply integrated into GitHub's ecosystem with GPT-4 and Claude under the hood.",
    pricing: "Freemium",
    pricingComparison: "Free tier (limited). Pro $10/mo, Business $19/user/mo (vs Cursor $20/mo)",
    strengths: [
      "Deep GitHub and VS Code integration",
      "Native pull request review support",
      "Multi-model choice (GPT-4o, Claude, Gemini)",
      "GitHub Actions integration",
      "Copilot Workspace for full PR workflows",
      "Massive adoption — best community support",
    ],
    weaknesses: [
      "Not a standalone editor like Cursor",
      "Autocomplete can be less context-aware",
      "Privacy concerns for enterprise (data sent to GitHub)",
    ],
    vsCursor:
      "Copilot is a plugin, Cursor is an editor. Copilot wins on GitHub/PR workflow integration; Cursor wins on codebase-wide context and multi-file editing.",
    bestFor: "GitHub-centric teams, PR workflows, developers happy with VS Code",
    features: [
      "Inline autocomplete",
      "Copilot Chat",
      "PR review",
      "Copilot Workspace",
      "CLI support",
      "Multi-model",
    ],
    ideSupport: "VS Code, JetBrains, Visual Studio, Vim/Neovim, Xcode",
    privacy: "Moderate — enterprise options with data isolation available",
  },
  {
    name: "Continue.dev",
    slug: "continue",
    description:
      "Open-source AI code assistant that lets you bring your own model — including local models via Ollama.",
    pricing: "Free (BYOK)",
    pricingComparison: "FREE + your API costs (vs Cursor $20/mo flat). Can be $0 with local models",
    strengths: [
      "Fully open-source (Apache 2.0)",
      "Bring any model — GPT-4, Claude, Llama, Gemini",
      "Local models via Ollama (full privacy)",
      "Highly customizable context providers",
      "Active community development",
      "No subscription required",
    ],
    weaknesses: [
      "Requires API key or local model setup",
      "Less polished than Cursor's UI",
      "More configuration effort",
      "Community support vs enterprise SLA",
    ],
    vsCursor:
      "Total privacy and zero cost with local models. More flexible but less polished. Choose if you want control; choose Cursor if you want convenience.",
    bestFor:
      "Privacy-conscious devs, local-first setups, open-source advocates, custom model configs",
    features: [
      "Multi-model support",
      "Local models (Ollama)",
      "Custom context providers",
      "Tab autocomplete",
      "Slash commands",
      "Open-source",
    ],
    ideSupport: "VS Code, JetBrains IDEs (IntelliJ, PyCharm, etc.)",
    privacy: "Excellent — full control, local models possible, no forced data sharing",
  },
  {
    name: "Aider",
    slug: "aider",
    description:
      "Terminal-based AI pair programmer that edits code via git commits — great for large refactoring tasks.",
    pricing: "Free (BYOK)",
    pricingComparison: "FREE + API costs. Typically $5-20/mo for regular use",
    strengths: [
      "Git-native — every change is a commit",
      "Works with any LLM (GPT-4, Claude, Gemini, local)",
      "Handles large multi-file refactors well",
      "Supports 100+ languages",
      "Benchmark-leading on SWE-bench",
      "Fast and lightweight",
    ],
    weaknesses: [
      "Terminal-only UX (no GUI)",
      "Less intuitive for beginners",
      "No real-time autocomplete",
      "Requires API key setup",
    ],
    vsCursor:
      "Aider is CLI-only vs Cursor's GUI editor. Aider wins on git integration and refactoring heavy tasks; Cursor wins on day-to-day autocomplete and UX.",
    bestFor:
      "Refactoring large codebases, scripting/automation, terminal-native developers, git-first workflows",
    features: [
      "Git commit integration",
      "Multi-file editing",
      "Any LLM support",
      "100+ languages",
      "Voice coding mode",
      "Docker support",
    ],
    ideSupport: "Terminal-based. Works with any editor via file editing",
    privacy: "Excellent — you control model choice, local LLM support",
  },
  {
    name: "Cody (Sourcegraph)",
    slug: "sourcegraph-cody",
    description:
      "AI assistant with deep code graph intelligence — especially powerful for large monorepos and enterprise codebases.",
    pricing: "Freemium",
    pricingComparison: "Free tier, Pro $9/mo (cheaper than Cursor $20/mo), Enterprise $19/user/mo",
    strengths: [
      "Deep codebase intelligence via Sourcegraph code graph",
      "Multi-repository context awareness",
      "Model flexibility (Claude, GPT-4, Gemini)",
      "More affordable than Cursor for teams",
      "Enterprise-grade code search",
      "Excellent for monorepos",
    ],
    weaknesses: [
      "Best paired with full Sourcegraph setup",
      "Steeper learning curve",
      "Smaller community than Cursor",
    ],
    vsCursor:
      "Cody wins for large-scale codebases and monorepos. More affordable at team pricing. Cursor wins for solo developer UX and polish.",
    bestFor: "Enterprise teams, large monorepos, multi-repo codebases",
    features: [
      "Code graph context",
      "Multi-repo awareness",
      "Model selection",
      "Autocomplete",
      "Chat interface",
      "Code search",
    ],
    ideSupport: "VS Code, JetBrains IDEs, Emacs, Neovim",
    privacy: "Good — enterprise self-hosted available, data isolation options",
  },
  {
    name: "Tabnine",
    slug: "tabnine",
    description:
      "Enterprise AI code assistant with on-premise deployment and custom model training on your codebase.",
    pricing: "Freemium",
    pricingComparison: "Free tier, Pro $12/mo (vs Cursor $20/mo), Enterprise $39/user/mo",
    strengths: [
      "On-premise deployment (full data control)",
      "Custom model training on your private codebase",
      "SOC 2 Type II certified",
      "Zero data retention policies",
      "Mature product (10+ years)",
      "Regulatory compliance support",
    ],
    weaknesses: [
      "Less cutting-edge than Cursor's AI",
      "More focused on autocomplete than agentic tasks",
      "Enterprise pricing is high",
    ],
    vsCursor:
      "Tabnine wins on enterprise security and compliance. Cursor wins on AI capability and agentic features. Choose Tabnine for regulated industries.",
    bestFor: "Enterprise teams, regulated industries (finance, healthcare, legal), security-conscious orgs",
    features: [
      "Code completion",
      "On-premise option",
      "Custom model training",
      "Team collaboration",
      "Compliance tools",
      "Zero retention",
    ],
    ideSupport: "VS Code, JetBrains, Vim/Neovim, Sublime Text, Eclipse, Emacs",
    privacy: "Excellent — on-premise, SOC 2, zero retention, air-gapped options",
  },
  {
    name: "Zed",
    slug: "zed",
    description:
      "Ultra-fast GPU-accelerated code editor with built-in AI features — designed for speed above all else.",
    pricing: "Free",
    pricingComparison: "FREE (open-source). Zed AI features require account (free tier available)",
    strengths: [
      "Extremely fast — GPU-accelerated rendering",
      "Low memory footprint vs Cursor (Electron-based)",
      "Built-in multiplayer collaboration",
      "Native macOS feel",
      "Rust-based performance",
      "Free and open-source",
    ],
    weaknesses: [
      "Smaller extension ecosystem",
      "Less mature AI features than Cursor",
      "macOS primary (Linux in beta, Windows pending)",
      "Fewer language server configs",
    ],
    vsCursor:
      "Zed wins on raw performance and memory efficiency. Cursor wins on AI feature depth and extension ecosystem. Switch to Zed if Cursor feels slow.",
    bestFor:
      "Performance-obsessed devs, macOS native users, pair programming, minimalist setups",
    features: [
      "GPU-accelerated editor",
      "Multiplayer collaboration",
      "Built-in AI assistant",
      "LSP support",
      "Vim mode",
      "Open-source",
    ],
    ideSupport: "Standalone editor (macOS, Linux beta)",
    privacy: "Good — open-source, AI features are opt-in",
  },
];

const faqItems = [
  {
    question: "What is the best free alternative to Cursor?",
    answer:
      "Windsurf (by Codeium) is the best free Cursor alternative. It offers a similar AI-first editor experience with agentic Cascade mode, free for individual developers. Continue.dev is another free option if you want full open-source control and local model support.",
  },
  {
    question: "Is Windsurf better than Cursor?",
    answer:
      "Windsurf is free and competitive with Cursor for most use cases. Cursor has a more mature ecosystem and slightly more polished UX, but Windsurf's Cascade mode rivals Cursor's Composer. For most individual developers, Windsurf's free tier makes it worth trying before paying for Cursor Pro.",
  },
  {
    question: "Why do developers switch from Cursor?",
    answer:
      "Common reasons include cost (Cursor Pro is $20/mo), privacy concerns about code being sent to cloud, performance issues on older hardware (Electron-based), and wanting more model flexibility. Some developers switch to Continue.dev for local model support or Aider for git-native workflows.",
  },
  {
    question: "Can I use Claude Code instead of Cursor?",
    answer:
      "Claude Code is a strong Cursor alternative for complex engineering tasks but has a different UX — it's terminal/CLI-based rather than a GUI editor. It excels at large refactors and agentic workflows. Many developers use both: Cursor for real-time coding, Claude Code for complex refactoring sessions.",
  },
  {
    question: "What Cursor alternative is best for enterprise teams?",
    answer:
      "Tabnine is the top enterprise pick with on-premise deployment, SOC 2 certification, and zero data retention. Sourcegraph Cody is excellent for large monorepos and multi-repository codebases. GitHub Copilot Business ($19/user/mo) is popular for GitHub-centric teams.",
  },
  {
    question: "Is there an open-source alternative to Cursor?",
    answer:
      "Yes — Continue.dev is the leading open-source Cursor alternative. It's Apache 2.0 licensed, supports any LLM (including local models via Ollama), and works as a VS Code or JetBrains extension. Aider is another open-source option with a terminal-based workflow. Zed is open-source as an editor (with AI features).",
  },
];

function generateJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Cursor Alternatives in 2026: 8 Top AI Code Editors",
    description:
      "Compare the 8 best Cursor alternatives — Windsurf, Claude Code, GitHub Copilot, Continue.dev, Aider, Cody, Tabnine, and Zed. Pricing, features, and IDE support.",
    url: "https://aisotools.com/cursor-alternatives",
    author: {
      "@type": "Organization",
      name: "AISO Tools",
    },
    publisher: {
      "@type": "Organization",
      name: "AISO Tools",
      url: "https://aisotools.com",
    },
    dateModified: "2026-04-05",
    mainEntity: {
      "@type": "ItemList",
      name: "Best Cursor Alternatives",
      itemListElement: alternatives.map((alt, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: alt.name,
        description: alt.description,
        url: `https://aisotools.com/tool/${alt.slug}`,
      })),
    },
  };
}

function generateFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export default function CursorAlternativesPage() {
  const jsonLd = generateJsonLd();
  const faqJsonLd = generateFaqJsonLd();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-white">
          Home
        </Link>
        <span className="mx-2">›</span>
        <Link href="/alternatives" className="hover:text-white">
          Alternatives
        </Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Cursor Alternatives</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Best Cursor Alternatives in 2026
        </h1>
        <p className="text-xl text-gray-400 max-w-4xl">
          Cursor transformed AI-assisted coding — but it's not the only option. Whether you want
          something free, open-source, enterprise-ready, or with a different workflow, these 8
          Cursor alternatives are worth your attention.
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
            Updated April 2026
          </span>
          <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
            8 alternatives compared
          </span>
          <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
            10 min read
          </span>
        </div>
      </header>

      {/* Quick Summary Card */}
      <section className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold mb-3">⚡ Quick Pick Guide</h2>
        <ul className="space-y-2 text-gray-300">
          <li>
            <strong>Best free alternative:</strong>{" "}
            <Link href="/tool/windsurf" className="text-blue-400 hover:text-blue-300">
              Windsurf
            </Link>{" "}
            — similar editor experience, completely free for individuals
          </li>
          <li>
            <strong>Best for complex refactoring:</strong>{" "}
            <Link href="/tool/claude-code" className="text-blue-400 hover:text-blue-300">
              Claude Code
            </Link>{" "}
            — 200K context, agentic CLI, unmatched reasoning
          </li>
          <li>
            <strong>Best open-source:</strong>{" "}
            <Link href="/tool/continue" className="text-blue-400 hover:text-blue-300">
              Continue.dev
            </Link>{" "}
            — BYOK, local models, full privacy control
          </li>
          <li>
            <strong>Best for enterprise:</strong>{" "}
            <Link href="/tool/tabnine" className="text-blue-400 hover:text-blue-300">
              Tabnine
            </Link>{" "}
            — on-premise, SOC 2, zero data retention
          </li>
          <li>
            <strong>Best for GitHub users:</strong>{" "}
            <Link href="/tool/github-copilot" className="text-blue-400 hover:text-blue-300">
              GitHub Copilot
            </Link>{" "}
            — native PR review, multi-model, GitHub Actions
          </li>
          <li>
            <strong>Best for speed:</strong>{" "}
            <Link href="/tool/zed" className="text-blue-400 hover:text-blue-300">
              Zed
            </Link>{" "}
            — GPU-accelerated, minimal memory footprint
          </li>
        </ul>
      </section>

      {/* Why switch section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Why Look for Cursor Alternatives?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold mb-3 text-yellow-400">💰 Cost</h3>
            <p className="text-gray-400 text-sm">
              Cursor Pro is $20/month. For teams, that's $240/developer/year. Free alternatives like
              Windsurf and Continue.dev offer comparable features.
            </p>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold mb-3 text-yellow-400">🔒 Privacy</h3>
            <p className="text-gray-400 text-sm">
              Cursor sends code to cloud LLMs by default. For sensitive codebases, Continue.dev
              with local models (Ollama) or Tabnine's on-premise option are safer.
            </p>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold mb-3 text-yellow-400">⚡ Performance</h3>
            <p className="text-gray-400 text-sm">
              Cursor is built on Electron — resource-heavy on older machines. Zed is GPU-accelerated
              and uses a fraction of the memory. Aider is terminal-based with near-zero overhead.
            </p>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold mb-3 text-yellow-400">🔧 Workflow Fit</h3>
            <p className="text-gray-400 text-sm">
              Cursor is IDE-centric. Claude Code and Aider are terminal-native for agentic tasks.
              Copilot is better for GitHub PR workflows. Different tools fit different workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Cursor Alternatives at a Glance</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800 text-left">
                <th className="pb-3 pr-4 text-gray-400 font-medium">Tool</th>
                <th className="pb-3 pr-4 text-gray-400 font-medium">Starting Price</th>
                <th className="pb-3 pr-4 text-gray-400 font-medium">Type</th>
                <th className="pb-3 text-gray-400 font-medium">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {alternatives.map((alt) => (
                <tr key={alt.slug} className="hover:bg-gray-900/50 transition-colors">
                  <td className="py-3 pr-4 font-medium">
                    <Link
                      href={`/tool/${alt.slug}`}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      {alt.name}
                    </Link>
                  </td>
                  <td className="py-3 pr-4 text-gray-400">{alt.pricing}</td>
                  <td className="py-3 pr-4 text-gray-400">{alt.ideSupport.split(",")[0]}</td>
                  <td className="py-3 text-gray-400">{alt.bestFor.split(",")[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Individual Cards */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">
          The 8 Best Cursor Alternatives — Detailed Breakdown
        </h2>
        <div className="space-y-8">
          {alternatives.map((alt, index) => (
            <div
              key={alt.slug}
              className="bg-gray-900 rounded-2xl border border-gray-800 p-8 hover:border-gray-700 transition-colors"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-2xl font-bold text-gray-500">#{index + 1}</span>
                    <h3 className="text-2xl font-bold">
                      <Link
                        href={`/tool/${alt.slug}`}
                        className="hover:text-blue-400 transition-colors"
                      >
                        {alt.name}
                      </Link>
                    </h3>
                  </div>
                  <p className="text-gray-400">{alt.description}</p>
                </div>
                <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium ml-4 flex-shrink-0">
                  {alt.pricing}
                </span>
              </div>

              {/* Pricing comparison */}
              <div className="bg-gray-800/50 rounded-lg p-3 mb-6 text-sm text-gray-300">
                <span className="text-gray-500">💰 Pricing: </span>
                {alt.pricingComparison}
              </div>

              {/* Pros/Cons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-green-400 mb-3">✅ Strengths</h4>
                  <ul className="space-y-1.5">
                    {alt.strengths.map((s) => (
                      <li key={s} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-green-500 mt-0.5 flex-shrink-0">+</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-400 mb-3">⚠️ Weaknesses</h4>
                  <ul className="space-y-1.5">
                    {alt.weaknesses.map((w) => (
                      <li key={w} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-red-500 mt-0.5 flex-shrink-0">−</span>
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* vs Cursor */}
              <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-blue-400 mb-1 text-sm">
                  {alt.name} vs Cursor
                </h4>
                <p className="text-gray-300 text-sm">{alt.vsCursor}</p>
              </div>

              {/* Meta details */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-500 text-xs uppercase tracking-wide block mb-1">
                    Best For
                  </span>
                  <span className="text-gray-300">{alt.bestFor}</span>
                </div>
                <div>
                  <span className="text-gray-500 text-xs uppercase tracking-wide block mb-1">
                    IDE Support
                  </span>
                  <span className="text-gray-300">{alt.ideSupport}</span>
                </div>
                <div>
                  <span className="text-gray-500 text-xs uppercase tracking-wide block mb-1">
                    Privacy
                  </span>
                  <span className="text-gray-300">{alt.privacy}</span>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6 flex gap-3">
                <Link
                  href={`/tool/${alt.slug}`}
                  className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Full {alt.name} Review →
                </Link>
                {alt.name === "GitHub Copilot" && (
                  <Link
                    href="/github-copilot-alternatives"
                    className="border border-gray-700 hover:border-gray-600 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    GitHub Copilot Alternatives
                  </Link>
                )}
                {alt.name === "Windsurf (Codeium)" && (
                  <Link
                    href="/cursor-vs-windsurf"
                    className="border border-gray-700 hover:border-gray-600 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Cursor vs Windsurf →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqItems.map((item) => (
            <div key={item.question} className="border-b border-gray-800 pb-6">
              <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
              <p className="text-gray-400">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
        <h2 className="text-2xl font-bold mb-3">
          Still comparing AI coding tools?
        </h2>
        <p className="text-gray-400 mb-6">
          Browse our full directory of {" "}
          <Link href="/category/coding" className="text-blue-400 hover:text-blue-300">
            AI coding tools
          </Link>{" "}
          or compare specific pairs:
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/cursor-vs-windsurf"
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Cursor vs Windsurf
          </Link>
          <Link
            href="/claude-code-vs-cursor"
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Claude Code vs Cursor
          </Link>
          <Link
            href="/cursor-vs-github-copilot"
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Cursor vs GitHub Copilot
          </Link>
          <Link
            href="/github-copilot-alternatives"
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Copilot Alternatives
          </Link>
          <Link
            href="/alternatives"
            className="border border-gray-600 hover:border-gray-500 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            All Alternatives →
          </Link>
        </div>
      </section>
    </div>
  );
}
