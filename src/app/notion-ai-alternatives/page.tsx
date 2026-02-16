import { tools } from "@/data/tools";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notion AI Alternatives: Best AI Productivity Tools 2026",
  description:
    "Discover the best Notion AI alternatives including Mem, Taskade, Coda AI, Slite, Craft, and more. Compare features, pricing, and find the perfect AI-powered productivity workspace for your workflow.",
  keywords: [
    "Notion AI alternatives",
    "best AI productivity tools",
    "AI workspace",
    "Mem vs Notion",
    "Coda AI",
    "smart note-taking apps",
  ],
  openGraph: {
    title: "Notion AI Alternatives: Best AI Productivity Tools 2026",
    description:
      "Compare the best Notion AI alternatives. In-depth reviews of Mem, Taskade, Coda, Slite, Craft, Obsidian, and more AI productivity platforms.",
    url: "https://aisotools.com/notion-ai-alternatives",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/notion-ai-alternatives",
  },
};

interface ProductivityToolComparison {
  name: string;
  slug: string;
  description: string;
  pricing: string;
  pricingDetails: string;
  strengths: string[];
  weaknesses: string[];
  bestFor: string;
  features: string[];
}

const productivityTools: ProductivityToolComparison[] = [
  {
    name: "Mem",
    slug: "mem",
    description: "AI-native workspace that auto-organizes notes using machine learning, eliminating manual tagging and folder structures.",
    pricing: "Freemium",
    pricingDetails: "Free tier, Mem+ $14.99/mo",
    strengths: [
      "Auto-organization with AI",
      "No folders or tags needed",
      "Smart search and connections",
      "Clean, distraction-free interface",
      "Fast and lightweight",
      "Knowledge graph visualization",
    ],
    weaknesses: [
      "Limited integrations",
      "No databases like Notion",
      "Smaller feature set",
    ],
    bestFor: "Personal knowledge management, researchers, note-takers prioritizing simplicity",
    features: ["AI auto-organization", "Smart search", "Knowledge graph", "Templates", "Mobile apps"],
  },
  {
    name: "Taskade",
    slug: "taskade",
    description: "All-in-one collaboration platform with AI agents, project management, and real-time team workspace.",
    pricing: "Freemium",
    pricingDetails: "Free tier, Pro $8/mo, Business $16/mo, Ultimate $19/mo",
    strengths: [
      "AI agents and automation",
      "Real-time collaboration",
      "Affordable pricing",
      "Multiple view modes (list, board, calendar)",
      "Video chat built-in",
      "Custom AI workflows",
    ],
    weaknesses: [
      "Less polish than Notion",
      "Smaller template library",
      "Learning curve for AI features",
    ],
    bestFor: "Remote teams, project management, AI-powered workflows, budget-conscious teams",
    features: ["AI agents", "Real-time collab", "Multiple views", "Video chat", "Automation"],
  },
  {
    name: "Coda",
    slug: "coda",
    description: "Powerful doc-app hybrid with AI, databases, and automation that combines documents, spreadsheets, and apps.",
    pricing: "Freemium",
    pricingDetails: "Free tier, Pro $12/doc maker/mo, Team $36/doc maker/mo, Enterprise custom",
    strengths: [
      "Powerful formulas and automation",
      "Coda AI integration",
      "Packs for app integrations",
      "Tables and databases",
      "Advanced customization",
      "API access",
    ],
    weaknesses: [
      "Steeper learning curve",
      "Pricing can get expensive",
      "More complex than needed for simple use",
    ],
    bestFor: "Power users, teams needing custom workflows, database-heavy work",
    features: ["Coda AI", "Tables & databases", "Packs", "Automation", "Formulas", "API"],
  },
  {
    name: "Slite",
    slug: "slite",
    description: "Team knowledge base with AI search and verification, designed for quick documentation and team wikis.",
    pricing: "Freemium",
    pricingDetails: "Free tier (50 docs), Standard $10/user/mo, Premium $15/user/mo",
    strengths: [
      "AI-powered search",
      "Doc verification system",
      "Clean, fast interface",
      "Great for team wikis",
      "Slack integration",
      "Ask feature (AI Q&A)",
    ],
    weaknesses: [
      "Limited to documentation",
      "No databases or complex tables",
      "Fewer features than Notion",
    ],
    bestFor: "Team documentation, knowledge bases, company wikis, onboarding",
    features: ["AI search", "Doc verification", "Templates", "Slack integration", "Ask (AI Q&A)"],
  },
  {
    name: "Craft",
    slug: "craft",
    description: "Beautiful document editor with AI features, focused on design-conscious individuals and small teams.",
    pricing: "Freemium",
    pricingDetails: "Free tier, Pro $10/mo, Business $20/user/mo",
    strengths: [
      "Stunning visual design",
      "Excellent typography",
      "AI writing assistant",
      "Native Apple apps",
      "Daily notes feature",
      "Beautiful sharing/publishing",
    ],
    weaknesses: [
      "Limited databases",
      "Best on Apple platforms",
      "Fewer power features than Notion",
    ],
    bestFor: "Individual creators, writers, design-focused teams, Apple users",
    features: ["AI assistant", "Beautiful templates", "Daily notes", "Native apps", "Publishing"],
  },
  {
    name: "Obsidian + AI Plugins",
    slug: "obsidian",
    description: "Local-first markdown note-taking app with community AI plugins for privacy-focused knowledge management.",
    pricing: "Freemium",
    pricingDetails: "Free personal, Sync $8/mo, Commercial $50/user/year",
    strengths: [
      "Complete data ownership",
      "Local-first architecture",
      "Powerful linking system",
      "Extensible with plugins",
      "Markdown-based",
      "Graph view for connections",
    ],
    weaknesses: [
      "Steeper learning curve",
      "Requires plugin setup for AI",
      "No built-in collaboration",
    ],
    bestFor: "Privacy advocates, developers, researchers, local-first workflows",
    features: ["Graph view", "Backlinks", "Community plugins", "Local storage", "Markdown"],
  },
  {
    name: "Reflect",
    slug: "reflect",
    description: "Networked note-taking app with AI features, end-to-end encryption, and backlinking for connected thinking.",
    pricing: "Paid",
    pricingDetails: "$10/mo",
    strengths: [
      "End-to-end encryption",
      "AI-powered features",
      "Networked note-taking",
      "Calendar integration",
      "Beautiful design",
      "Fast performance",
    ],
    weaknesses: [
      "No free tier",
      "Individual-focused (limited team features)",
      "Smaller feature set than Notion",
    ],
    bestFor: "Individuals prioritizing privacy, daily journaling, personal knowledge management",
    features: ["AI features", "Backlinks", "Encryption", "Calendar integration", "Daily notes"],
  },
  {
    name: "ClickUp",
    slug: "clickup",
    description: "All-in-one project management platform with ClickUp AI for task automation and productivity.",
    pricing: "Freemium",
    pricingDetails: "Free tier, Unlimited $7/user/mo, Business $12/user/mo, Enterprise custom",
    strengths: [
      "Comprehensive project management",
      "ClickUp AI for automation",
      "Multiple views (15+)",
      "Time tracking",
      "Goals and OKRs",
      "Extensive integrations",
    ],
    weaknesses: [
      "Can be overwhelming",
      "Steeper learning curve",
      "AI features cost extra",
    ],
    bestFor: "Project management, large teams, agencies, comprehensive workflows",
    features: ["ClickUp AI", "Multiple views", "Time tracking", "Goals", "Automation", "Docs"],
  },
  {
    name: "Capacities",
    slug: "capacities",
    description: "Object-based note-taking with AI that organizes information by type (people, projects, books, etc.).",
    pricing: "Freemium",
    pricingDetails: "Free tier, Pro $12/mo, Team $20/user/mo",
    strengths: [
      "Object-based organization",
      "AI auto-tagging",
      "Beautiful design",
      "Flexible structure",
      "Daily notes",
      "Graph view",
    ],
    weaknesses: [
      "Different mental model",
      "Smaller community",
      "Learning curve for object types",
    ],
    bestFor: "Knowledge workers, researchers, structured thinking, personal CRM",
    features: ["Object types", "AI tagging", "Graph view", "Daily notes", "Templates"],
  },
  {
    name: "Anytype",
    slug: "anytype",
    description: "Privacy-first, local-first workspace with encryption and P2P sync as an open-source Notion alternative.",
    pricing: "Free",
    pricingDetails: "Completely free and open-source",
    strengths: [
      "Completely free",
      "Open-source",
      "End-to-end encryption",
      "Local-first architecture",
      "P2P synchronization",
      "Data ownership",
    ],
    weaknesses: [
      "Still in development",
      "No AI features yet",
      "Smaller feature set",
    ],
    bestFor: "Privacy advocates, open-source enthusiasts, local-first workflows",
    features: ["Encryption", "Local-first", "Open-source", "P2P sync", "Blocks"],
  },
  {
    name: "Scrintal",
    slug: "scrintal",
    description: "Visual workspace combining mind mapping with note-taking and AI for spatial organization of ideas.",
    pricing: "Freemium",
    pricingDetails: "Free tier, Personal $9.99/mo, Pro $19.99/mo",
    strengths: [
      "Visual canvas approach",
      "Mind mapping + notes",
      "AI writing assistant",
      "Spatial organization",
      "Great for brainstorming",
      "Intuitive interface",
    ],
    weaknesses: [
      "Less suited for linear work",
      "Smaller community",
      "Limited integrations",
    ],
    bestFor: "Visual thinkers, brainstorming, research, creative projects",
    features: ["Visual canvas", "Mind maps", "AI assistant", "Backlinks", "Templates"],
  },
  {
    name: "Notion",
    slug: "notion",
    description: "The all-in-one workspace combining docs, wikis, databases, and projects with powerful Notion AI integration.",
    pricing: "Freemium",
    pricingDetails: "Free tier, Plus $10/user/mo, Business $18/user/mo, Enterprise custom, AI $10/user/mo",
    strengths: [
      "Most comprehensive feature set",
      "Largest template library",
      "Powerful databases and relations",
      "Notion AI for writing & automation",
      "Strong community and resources",
      "Excellent integrations",
    ],
    weaknesses: [
      "Can be slow with large workspaces",
      "AI costs extra ($10/user/mo)",
      "Steep learning curve for advanced features",
    ],
    bestFor: "Teams, project management, wikis, comprehensive workflows, database work",
    features: ["Notion AI", "Databases", "Templates", "Wikis", "Projects", "Integrations"],
  },
];

export default function NotionAIAlternativesPage() {
  // Get actual tool data where available
  const toolsBySlug = new Map(tools.map((t) => [t.slug, t]));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-white">
          Home
        </Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Notion AI Alternatives</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Notion AI Alternatives: Best AI Productivity Tools 2026
        </h1>
        <p className="text-xl text-gray-400 max-w-4xl">
          Looking for Notion AI alternatives? Compare the best AI-powered productivity platforms including Mem,
          Taskade, Coda, Slite, Craft, Obsidian, and more. Find the perfect workspace for note-taking, project
          management, knowledge bases, or team collaboration with intelligent features.
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
            Updated February 2026
          </span>
          <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
            12 Productivity Tools Compared
          </span>
        </div>
      </header>

      {/* Quick Navigation */}
      <section className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-12">
        <h2 className="text-lg font-semibold mb-3">Quick Navigation</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-sm">
          {productivityTools.map((tool) => (
            <a
              key={tool.slug}
              href={`#${tool.slug}`}
              className="text-blue-400 hover:text-blue-300 transition"
            >
              {tool.name}
            </a>
          ))}
        </div>
      </section>

      {/* Introduction */}
      <section className="prose prose-invert max-w-none mb-16">
        <h2 className="text-3xl font-bold mb-4">Why Look for Notion AI Alternatives?</h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          While Notion dominates the productivity space with its all-in-one approach and AI features, it's not
          the only option—and depending on your workflow and priorities, you might find better alternatives.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          Mem offers AI-native organization without folders. Obsidian provides complete data ownership with
          local-first architecture. Taskade delivers affordable AI agents and collaboration. Coda excels at
          custom workflows and automation. And options like Craft focus on beautiful design while Anytype
          champions privacy and open-source principles.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed">
          This guide compares 12 top Notion AI alternatives across features, pricing, AI capabilities, and
          ideal use cases to help you find the right productivity platform.
        </p>
      </section>

      {/* Comparison Table */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Quick Comparison Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-gray-900 border border-gray-800 rounded-xl">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Productivity Tool</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Pricing</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Best For</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Key Feature</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {productivityTools.map((tool) => (
                <tr key={tool.slug} className="hover:bg-gray-800/50 transition">
                  <td className="px-4 py-3">
                    <a href={`#${tool.slug}`} className="font-medium text-blue-400 hover:text-blue-300">
                      {tool.name}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-400">{tool.pricing}</td>
                  <td className="px-4 py-3 text-sm text-gray-400">{tool.bestFor.split(",")[0]}</td>
                  <td className="px-4 py-3 text-sm text-gray-400">{tool.strengths[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed Reviews */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Detailed Notion AI Alternatives Reviews</h2>
        <div className="space-y-12">
          {productivityTools.map((tool, index) => {
            const toolData = toolsBySlug.get(tool.slug);
            return (
              <article
                key={tool.slug}
                id={tool.slug}
                className="bg-gray-900 border border-gray-800 rounded-xl p-8 scroll-mt-24"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      {index + 1}. {tool.name}
                    </h3>
                    <p className="text-gray-400">{tool.description}</p>
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

      {/* Use Case Guide */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Which Notion AI Alternative Should You Choose?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Personal Knowledge Management</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Mem:</strong> AI auto-organization, no folders needed</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Obsidian:</strong> Complete data ownership, powerful linking</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Reflect:</strong> Encrypted, networked note-taking</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Team Collaboration</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Taskade:</strong> Real-time collab, AI agents, affordable</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Notion:</strong> Most comprehensive, proven for teams</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Slite:</strong> Fast, focused team documentation</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Privacy & Data Ownership</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Obsidian:</strong> Local-first, complete control</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Anytype:</strong> Open-source, encrypted, P2P sync</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Reflect:</strong> End-to-end encryption</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Project Management</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>ClickUp:</strong> Comprehensive PM, 15+ views, AI features</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Taskade:</strong> Lightweight, AI agents, multiple views</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Notion:</strong> Flexible databases and workflows</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Budget-Conscious Users</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Anytype:</strong> Completely free and open-source</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Taskade:</strong> $8/mo with AI agents included</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Obsidian:</strong> Free for personal use</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Visual Thinkers</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Scrintal:</strong> Visual canvas + mind mapping</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Capacities:</strong> Object-based visual organization</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Obsidian:</strong> Graph view for connections</span>
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
            <h3 className="text-lg font-semibold mb-2">Is there a completely free Notion alternative?</h3>
            <p className="text-gray-400">
              Yes! Anytype is completely free and open-source with encryption. Obsidian is free for personal
              use. Notion itself has a generous free tier. Taskade, Mem, Slite, and Craft all offer capable
              free tiers, though with limitations compared to paid plans.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Which is better for privacy: Obsidian or Notion?</h3>
            <p className="text-gray-400">
              Obsidian is vastly superior for privacy with its local-first architecture—your data never leaves
              your device unless you opt for paid sync. Notion stores everything in the cloud. For maximum
              privacy, choose Obsidian, Anytype (encrypted P2P), or Reflect (end-to-end encrypted).
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">What's the best Notion alternative for teams?</h3>
            <p className="text-gray-400">
              For affordable team collaboration, Taskade ($8/user/mo) offers real-time features and AI agents.
              For comprehensive project management, ClickUp provides more views and features. For simple team
              wikis, Slite is fast and focused. Notion remains the most feature-complete option if budget allows.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Do I need to pay extra for AI features?</h3>
            <p className="text-gray-400">
              It depends! Notion charges an additional $10/user/mo for Notion AI. Taskade includes AI agents
              in all paid plans. Mem's AI features are included in Mem+. ClickUp AI costs extra. Coda AI is
              included. Always check if AI is bundled or requires a separate subscription.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Can I migrate from Notion to these alternatives?</h3>
            <p className="text-gray-400">
              Most tools offer Notion import capabilities, though quality varies. Obsidian can import via
              community plugins. Anytype supports Notion imports. Taskade and ClickUp have import tools.
              Complex databases with relations may not transfer perfectly—test with a small workspace first
              before committing to migration.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Explore More AI Tools</h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Discover hundreds of AI tools across all categories—from chatbots to video generators and
          design platforms.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Browse All Tools
          </Link>
          <Link
            href="/category/productivity"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            More Productivity Tools →
          </Link>
        </div>
      </section>
    </div>
  );
}
