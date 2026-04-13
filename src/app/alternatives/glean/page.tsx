import Link from "next/link";
import type { Metadata } from "next";

const year = 2026;

export const metadata: Metadata = {
  title: `Best Glean Alternatives (${year}) — Top 5 Enterprise AI Search Tools | AISO Tools`,
  description: `Looking for Glean alternatives? Compare the 5 best enterprise AI search and knowledge management tools — with features, pricing, and pros & cons.`,
  alternates: {
    canonical: "https://aisotools.com/alternatives/glean",
  },
  openGraph: {
    title: `Best Glean Alternatives (${year}) — Top Enterprise AI Search Tools`,
    description: `Compare the 5 best Glean alternatives for AI-powered workplace search and corporate knowledge management.`,
    url: "https://aisotools.com/alternatives/glean",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Glean Alternatives (${year})`,
    description: `Top 5 Glean alternatives for cross-app enterprise search and knowledge discovery.`,
  },
};

const alternatives = [
  {
    rank: 1,
    name: "Microsoft Copilot",
    slug: "microsoft-copilot",
    url: "https://microsoft.com/copilot",
    pricing: "Paid",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: false,
    startingPrice: "$20 - $30 /user/mo (M365 Business/Enterprise)",
    tagline: "The ultimate search and productivity layer for the Microsoft ecosystem",
    description:
      "Copilot is the most direct competitor for companies already locked into Microsoft 365. It indexes everything in Outlook, Teams, SharePoint, and OneDrive, providing a seamless 'search across the company' experience similar to Glean, but with deeper integration into the apps where work actually happens.",
    features: [
      "Deep M365 ecosystem integration",
      "Cross-app semantic search",
      "AI-powered document summarization",
      "Automatic meeting notes and action items",
      "Enterprise-grade security and compliance",
      "Graph-based knowledge retrieval",
    ],
    whySwitchReasons: [
      "Zero friction if you already use Teams, Outlook, and SharePoint",
      "Combined productivity (writing/editing) and search in one tool",
      "Seamless deployment via M365 admin center",
    ],
    bestFor: "Enterprises deeply integrated into the Microsoft ecosystem who want a unified AI assistant and search layer.",
    compareUrl: "/compare/glean-vs-microsoft-copilot",
  },
  {
    rank: 2,
    name: "Notion AI",
    slug: "notion-ai",
    url: "https://www.notion.so",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free. AI add-on $8-10/user/mo",
    tagline: "AI-powered workspace and centralized knowledge hub",
    description:
      "While Glean searches across *different* apps, Notion AI focuses on creating a single 'Source of Truth'. Q&A allows users to ask questions and get answers based on all the documents stored within Notion. It's the best alternative for companies that prefer centralization over fragmentation.",
    features: [
      "AI Q&A across all workspace pages",
      "Semantic search within documents",
      "AI-powered content generation and editing",
      "Customizable database structures",
      "Integrated task and project management",
      "Collaborative real-time editing",
    ],
    whySwitchReasons: [
      "Better for teams that want to move knowledge *into* one place rather than searching across 20 apps",
      "Significantly lower cost for smaller teams and startups",
      "Combines knowledge management with project execution (tasks/wikis)",
    ],
    bestFor: "Startups and mid-sized teams who prioritize a centralized wiki and a unified workspace over cross-platform indexing.",
    compareUrl: "/compare/glean-vs-notion-ai",
  },
  {
    rank: 3,
    name: "Guru",
    slug: "guru",
    url: "https://www.getguru.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free tier. Paid plans from $15/user/mo",
    tagline: "AI-powered knowledge management for fast-moving teams",
    description:
      "Guru excels at 'knowledge capture' and verification. Unlike a standard search engine, Guru focuses on ensuring the information found is accurate and up-to-date. Its AI assistant surfaces the right information in the flow of work (e.g., inside a browser or Slack) just like Glean.",
    features: [
      "AI-powered knowledge surfacing",
      "Verification workflows to prevent 'stale' info",
      "Browser extension for in-app knowledge access",
      "Slack and Microsoft Teams integrations",
      "Knowledge gap analysis",
      "Collections-based organization",
    ],
    whySwitchReasons: [
      "Superior at maintaining accuracy via human-verified content",
      "Better 'push' mechanism—surfaces info where you are working, not just when you search",
      "More focused on onboarding and enablement than just general search",
    ],
    bestFor: "Customer support, sales, and ops teams where accuracy of information is mission-critical.",
    compareUrl: "/compare/glean-vs-guru",
  },
  {
    rank: 4,
    name: "MindStudio",
    slug: "mindstudio",
    url: "https://mindstudio.ai",
    pricing: "Paid",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: false,
    startingPrice: "Custom enterprise pricing",
    tagline: "Build custom AI agents for enterprise knowledge",
    description:
      "MindStudio allows companies to build their own custom AI applications on top of their internal data. While Glean is a 'search tool', MindStudio lets you build a 'company brain' as a set of agents that can perform specific tasks based on your internal documentation.",
    features: [
      "Custom AI agent builder",
      "RAG (Retrieval-Augmented Generation) implementation",
      "Multi-model support (GPT-4, Claude, etc.)",
      "Enterprise data privacy and security",
      "Custom user interfaces for internal tools",
      "API-first architecture",
    ],
    whySwitchReasons: [
      "Allows you to build actual tools (e.g., an automated RFP responder) instead of just a search bar",
      "Greater control over the AI's behavior and the data it uses",
      "Ability to swap underlying LLM models without changing the app",
    ],
    bestFor: "Enterprises that want to move beyond search and into building custom AI-powered internal workflows.",
    compareUrl: "/compare/glean-vs-mindstudio",
  },
  {
    rank: 5,
    name: "Confluence AI",
    slug: "confluence",
    url: "https://www.atlassian.com/software/confluence",
    pricing: "Paid",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: false,
    startingPrice: "Free for 10 users. Paid from $6/user/mo",
    tagline: "The industry standard for corporate documentation and collaboration",
    description:
      "Atlassian's Confluence is where most enterprise knowledge lives. With its new AI capabilities, it can now summarize pages, generate content, and answer questions based on your internal wiki. It's the most 'traditional' alternative, focusing on the document itself.",
    features: [
      "Deep integration with Jira and Trello",
      "AI-powered page summaries",
      "Automated content generation",
      "Powerful permission and access controls",
      "Structured page hierarchies",
      "Extensive marketplace of plugins",
    ],
    whySwitchReasons: [
      "Unmatched integration with the Atlassian suite (Jira)",
      "Better for long-form, structured documentation and requirements",
      "Massive existing ecosystem of enterprise templates",
    ],
    bestFor: "Engineering and product teams already using Jira who need a robust, structured home for their documentation.",
    compareUrl: "/compare/glean-vs-confluence",
  },
];

const faqs = [
  {
    question: "What is the main difference between Glean and Notion AI?",
    answer:
      "Glean is a 'cross-app' search engine—it indexes your Slack, Jira, Google Drive, and Outlook to find information wherever it lives. Notion AI is a 'centralized' search—it's incredibly powerful, but it primarily searches the information that has been intentionally moved into Notion. Use Glean if your data is fragmented; use Notion if you want to centralize it.",
  },
  {
    question: "Is Microsoft Copilot a good alternative to Glean?",
    answer:
      "If your company is 100% on Microsoft 365, Copilot is an excellent alternative because it has native access to your entire M365 graph. However, Glean is often superior for 'hybrid' companies that use a mix of Google Workspace, Slack, and other third-party SaaS tools, as Glean's connectors are generally more flexible.",
  },
  {
    question: "Which tool is best for ensuring knowledge is accurate?",
    answer:
      "Guru is the strongest in this area. While Glean and Copilot find 'what exists', Guru provides a verification workflow where experts must 'verify' a piece of knowledge to keep it from becoming stale. This makes it better for high-stakes environments like Customer Support.",
  },
  {
    question: "How does MindStudio differ from a standard AI search?",
    answer:
      "A standard AI search (like Glean) gives you a link or a summary of a document. MindStudio lets you build a custom AI agent that *uses* that document to perform a job. For example, instead of searching for 'Company Travel Policy', you could build a 'Travel Assistant' agent that tells you exactly how much you can spend on a hotel in New York based on that policy.",
  },
  {
    question: "Does Confluence AI work across other apps?",
    answer:
      "Not natively in the way Glean does. Confluence AI is primarily focused on the content within the Confluence ecosystem (and some integration with Jira). It doesn't index your external emails or Slack messages unless those items are linked or imported into a Confluence page.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Best Glean Alternatives (${year})`,
    description: `Top 5 alternatives to Glean for enterprise AI search and corporate knowledge management.`,
    numberOfItems: alternatives.length,
    itemListElement: alternatives.map((alt, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: alt.name,
      url: `https://aisotools.com/tool/${alt.slug}`,
      description: alt.tagline,
    })),
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
      { "@type": "ListItem", position: 2, name: "Alternatives", item: "https://aisotools.com/alternatives" },
      { "@type": "ListItem", position: 3, name: "Glean Alternatives", item: "https://aisotools.com/alternatives/glean" },
    ],
  },
];

export default function GleanAlternativesPage() {
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
          <Link href="/alternatives" className="hover:text-white transition">Alternatives</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-300">Glean Alternatives</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-xl bg-blue-600/20 flex items-center justify-center text-2xl font-bold text-blue-400 mx-auto mb-6">
            G
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Best Glean Alternatives in {year}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stop losing documents in a sea of SaaS apps. Compare the {alternatives.length} best alternatives to Glean for enterprise AI search and corporate knowledge management.
          </p>
          <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">
            <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
              Glean: Paid (Enterprise)
            </span>
            <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
              🏢 Enterprise Search
            </span>
          </div>
        </div>

        {/* Why Switch */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Why Look for Glean Alternatives?</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Glean is the gold standard for cross-platform enterprise search. However, it comes with a high price tag and requires a significant IT lift to deploy. Depending on your organizational structure, you might find a better fit:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { reason: "💰 Cost & Accessibility", detail: "Glean is an enterprise-only product with no self-serve pricing. Startups or mid-sized teams may prefer the flexible pricing of Notion AI or Guru." },
              { reason: "🛠️ ecosystem Lock-in", detail: "If your company is 100% on Microsoft 365 or Atlassian, using Copilot or Confluence AI removes the need for a third-party 'connector' layer." },
              { reason: "🎯 Knowledge Accuracy", detail: "Search is only useful if the results are correct. Tools like Guru focus on 'verified' knowledge, whereas Glean indexes everything, including outdated drafts." },
              { reason: "🤖 From Search to Action", detail: "Search is the first step. Some teams want to move beyond finding documents to building AI agents that actually perform tasks using that data (e.g., MindStudio)." },
            ].map((item, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="font-semibold text-lg mb-2">{item.reason}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Comparison Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Quick Comparison: Glean vs Alternatives</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-800/50 text-left">
                  <th className="p-4 font-medium text-gray-400">#</th>
                  <th className="p-4 font-medium text-gray-400">Tool</th>
                  <th className="p-4 font-medium text-gray-400">Pricing</th>
                  <th className="p-4 font-medium text-gray-400">Free Tier?</th>
                  <th className="p-4 font-medium text-gray-400">Key Differentiator</th>
                </tr>
              </thead>
              <tbody >
                {alternatives.map((alt) => (
                  <tr key={alt.slug} className="border-t border-gray-800 hover:bg-gray-800/30 transition">
                    <td className="p-4 text-gray-500">{alt.rank}</td>
                    <td className="p-4">
                      <Link href={`#${alt.slug}`} className="font-medium text-white hover:text-blue-400 transition">
                        {alt.name}
                      </Link>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${alt.pricingColor}`}>
                        {alt.pricing}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={alt.freeTier ? "text-green-400" : "text-gray-500"}>
                        {alt.freeTier ? "✓ Yes" : "✗ No"}
                      </span>
                    </td>
                    <td className="p-4 text-gray-400 max-w-xs">{alt.tagline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed Cards */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Detailed Look at Each Glean Alternative</h2>
          <div className="space-y-8">
            {alternatives.map((alt) => (
              <div key={alt.slug} id={alt.slug} className="bg-gray-900 border border-gray-800 rounded-xl p-6 sm:p-8 scroll-mt-20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center text-xl font-bold text-blue-400 flex-shrink-0">
                    {alt.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-xl font-bold">{alt.rank}. {alt.name}</h3>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${alt.pricingColor}`}>
                        {alt.pricing}
                      </span>
                      {alt.freeTier && (
                        <span className="bg-green-500/10 text-green-400 px-2 py-0.5 rounded-full text-xs font-medium">
                          Free tier
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 mt-1">{alt.description}</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600/5 to-purple-600/5 border border-blue-500/10 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-blue-400 mb-2">Why choose {alt.name} over Glean?</h4>
                  <ul className="space-y-1">
                    {alt.whySwitchReasons.map((reason, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-blue-400 mt-0.5 flex-shrink-0">→</span>
                        {reason}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div >
                    <h4 className="font-semibold text-gray-300 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {alt.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-5">
                    <div >
                      <h4 className="font-semibold text-gray-300 mb-2">Pricing</h4>
                      <p className="text-gray-300 text-sm">{alt.startingPrice}</p>
                    </div>
                    <div >
                      <h4 className="font-semibold text-gray-300 mb-2">Best For</h4>
                      <p className="text-gray-400 text-sm">{alt.bestFor}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-800">
                  <a
                    href={alt.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                  >
                    Try {alt.name} →
                  </a>
                  <Link href={`/tool/${alt.slug}`} className="text-blue-400 hover:text-blue-300 text-sm font-medium transition">
                    📋 Full Review →
                  </Link>
                </div>
              </div>
            ))}
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

        {/* Cross-links */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Learn More</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/tool/glean" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">📋 Glean Review</h3>
              <p className="text-gray-400 text-sm">Full review with features, pros & cons</p>
            </Link>
            <Link href="/tool/notion-ai" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">📝 Notion AI</h3>
              <p className="text-gray-400 text-sm">Centralized AI knowledge management</p>
            </Link>
            <Link href="/compare/glean-vs-microsoft-copilot" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">⚖️ Glean vs Copilot</h3>
              <p className="text-gray-400 text-sm">The battle for the enterprise search crown</p>
            </Link>
            <Link href="/category/productivity" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">⚡ AI Productivity Tools</h3>
              <p className="text-gray-400 text-sm">Browse all tools to automate your workflow</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
