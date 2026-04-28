import Link from "next/link";
import type { Metadata } from "next";

const year = 2026;

export const metadata: Metadata = {
  title: `Best Notion Alternatives (${year}) — Top 10 Workspace & Notes Tools | AISO Tools`,
  description: `Looking for Notion alternatives? Compare the 10 best note-taking, wiki, and productivity workspace tools with pricing, pros & cons, and which fits your workflow in ${year}.`,
  alternates: {
    canonical: "https://aisotools.com/alternatives/notion",
  },
  openGraph: {
    title: `Best Notion Alternatives (${year}) — Top 10 Workspace & Notes Tools`,
    description: `Compare the 10 best Notion alternatives for notes, docs, wikis, and team productivity.`,
    url: "https://aisotools.com/alternatives/notion",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Notion Alternatives (${year})`,
    description: `Top 10 Notion alternatives for notes, wikis, and team workspaces.`,
  },
};

const alternatives = [
  {
    rank: 1,
    name: "Obsidian",
    slug: "obsidian",
    url: "https://obsidian.md",
    pricing: "Free / Paid",
    pricingColor: "bg-green-500/10 text-green-400",
    freeTier: true,
    startingPrice: "Free (local). Sync $4/mo, Publish $8/mo",
    tagline: "Local-first PKM with bidirectional links and a graph view",
    description:
      "Obsidian takes the opposite philosophy from Notion: your notes live as plain Markdown files on your device, never locked in a proprietary database. Its bidirectional linking (backlinks) and graph visualization reveal connections between ideas that Notion's hierarchical structure hides. For knowledge workers, researchers, and writers who want a permanent second brain they truly own, Obsidian is the anti-Notion — offline by default, infinitely customizable via plugins, and exportable to any format.",
    features: [
      "Local Markdown files — you own all your data",
      "Bidirectional links and automatic backlinks panel",
      "Graph view visualization of note connections",
      "1,000+ community plugins (Kanban, calendar, tasks, etc.)",
      "Dataview plugin for database-like queries on notes",
      "Works fully offline by default",
    ],
    whySwitchReasons: [
      "Notion stores your data in their cloud — Obsidian files live on your hard drive and export to any format",
      "Bidirectional links reveal unexpected connections between ideas that flat hierarchies obscure",
      "Plugin ecosystem (Dataview, Kanban, Tasks) replicates Notion's databases and boards inside Obsidian",
    ],
    bestFor: "Researchers, writers, and knowledge workers who want a permanent, locally-owned second brain with rich interlinking.",
    compareUrl: "/compare/notion-vs-obsidian",
  },
  {
    rank: 2,
    name: "Coda",
    slug: "coda",
    url: "https://coda.io",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (up to 1,000 rows). Pro $10/mo per maker",
    tagline: "Docs + spreadsheets + apps in one — more powerful databases than Notion",
    description:
      "Coda positions itself as 'the doc that replaces everything' — a single canvas where documents, spreadsheets, and custom apps coexist. Its formula language is more powerful than Notion's and closer to a spreadsheet (referencing tables across pages, building calculated fields, automations triggered by table changes). For operations teams, project managers, and startups who want Notion's flexibility but need their database logic to actually compute, Coda's formula engine is a step up.",
    features: [
      "Spreadsheet-grade formula language across databases",
      "Buttons and automations triggered by data changes",
      "Packs (integrations) for Slack, Jira, GitHub, Salesforce",
      "Cross-table references and relational formulas",
      "Document embedding and publishing",
      "Row-level permissions and user-specific views",
    ],
    whySwitchReasons: [
      "Notion's formula language is limited — Coda's formula engine can compute across tables like a real spreadsheet",
      "Automations in Coda trigger when table data changes (e.g., send Slack message when status = 'Done')",
      "Operations teams use Coda to build internal tools that would require a developer in Notion",
    ],
    bestFor: "Operations teams, project managers, and startups who need the flexibility of a doc but the power of a relational database with automations.",
    compareUrl: "/compare/notion-vs-coda",
  },
  {
    rank: 3,
    name: "Confluence",
    slug: "confluence",
    url: "https://atlassian.com/software/confluence",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (up to 10 users). Standard $5.16/user/mo",
    tagline: "Atlassian's team wiki — built for engineering and product documentation",
    description:
      "Confluence is where engineering and product teams document architecture, runbooks, sprint plans, and RFCs. Its depth of integration with Jira makes it the natural choice for Atlassian-native teams — Jira issues embed in Confluence pages, sprint reviews link to boards, and project documentation stays in sync with actual tickets. While Notion offers a cleaner editor experience, Confluence's 15-year head start means its template library, admin controls, and compliance certifications (SOC 2, GDPR) are mature.",
    features: [
      "Native Jira integration (embed issues, link sprints)",
      "Page tree with hierarchical space organization",
      "Macros for dynamic content (Jira queries, diagrams)",
      "Advanced permissions and space-level access control",
      "Audit logs and compliance (SOC 2, ISO 27001)",
      "1,000+ marketplace apps for extension",
    ],
    whySwitchReasons: [
      "Notion doesn't integrate with Jira — Confluence pages and Jira issues are natively linked",
      "Enterprise compliance (SOC 2, ISO 27001, GDPR) is certified in Confluence, not Notion",
      "Page-level permissions and audit logs meet enterprise security requirements that Notion struggles with",
    ],
    bestFor: "Engineering teams, product managers, and IT organizations already using Jira who need a deeply integrated documentation platform.",
    compareUrl: "/compare/notion-vs-confluence",
  },
  {
    rank: 4,
    name: "Logseq",
    slug: "logseq",
    url: "https://logseq.com",
    pricing: "Free / Open Source",
    pricingColor: "bg-green-500/10 text-green-400",
    freeTier: true,
    startingPrice: "Free (open-source). Cloud sync coming",
    tagline: "Open-source outliner PKM with bidirectional links — privacy-first",
    description:
      "Logseq is the open-source answer to both Notion and Obsidian — a local-first, outliner-based PKM tool where everything is a block you can reference and link from anywhere. Unlike Obsidian's document metaphor, Logseq's daily journal page model makes it natural for daily notes, task capture, and incremental knowledge building. Its whiteboard view (similar to Muse) adds spatial thinking. Because it stores everything as local plain-text files, there's zero vendor lock-in.",
    features: [
      "Daily journal as primary capture mechanism",
      "Block-level bidirectional references",
      "Query language for dynamic table-like views",
      "Whiteboard view for spatial thinking",
      "Open-source and local-first (no vendor lock-in)",
      "PDF annotation and highlights linked to notes",
    ],
    whySwitchReasons: [
      "Notion has proprietary data storage — Logseq files are plain Markdown/Org-mode on your drive",
      "Block-level referencing (not just page-level) creates more granular knowledge connections",
      "Daily journal model captures tasks and notes chronologically, building a natural searchable log",
    ],
    bestFor: "Researchers, students, and privacy-conscious knowledge workers who want local-first PKM with powerful block-level linking.",
    compareUrl: "/compare/notion-vs-logseq",
  },
  {
    rank: 5,
    name: "Slite",
    slug: "slite",
    url: "https://slite.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (limited). Standard $8/user/mo",
    tagline: "AI-first team wiki built for async remote teams",
    description:
      "Slite was built for remote-first teams who need a fast, searchable wiki — not a feature-heavy workspace. Its AI layer (Ask Slite) can answer questions by searching your documentation and surfacing relevant pages, reducing the 'where do I find this?' Slack messages. The editor is deliberately simpler than Notion — fewer block types, faster page creation, and a cleaner hierarchy that scales for teams of 10-500 without becoming a documentation labyrinth.",
    features: [
      "Ask Slite AI — answers questions from your docs",
      "Channels (like team folders) for organized knowledge",
      "Document verification (mark pages as up-to-date)",
      "Real-time collaboration with comments",
      "Slack and Notion import tools",
      "Guest access for external collaborators",
    ],
    whySwitchReasons: [
      "Notion's flexibility creates documentation chaos at scale — Slite's structure keeps knowledge organized",
      "Ask Slite AI answers questions from your docs, reducing Slack noise from 'where is X?' messages",
      "Document verification flags stale pages, solving the outdated-wiki problem that kills team trust",
    ],
    bestFor: "Remote-first teams of 10-200 who want a maintainable team wiki where AI can answer questions from existing documentation.",
    compareUrl: "/compare/notion-vs-slite",
  },
  {
    rank: 6,
    name: "Craft",
    slug: "craft",
    url: "https://craft.do",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (1 space). Pro $5/mo",
    tagline: "Beautiful native Mac and iOS notes app with block-based editing",
    description:
      "Craft is what Notion would be if Apple designed it. A native Mac, iPad, and iPhone app with GPU-rendered animations, beautiful typography, and a block-based editor that feels genuinely fast. Its Deep Links feature lets you link to any block in any document — useful for cross-referencing without the PKM overhead of Obsidian. For Apple-ecosystem users who want beautiful, fast note-taking that syncs via iCloud, Craft is the most polished alternative to Notion.",
    features: [
      "Native Mac/iOS app with GPU rendering (fast, offline)",
      "Beautiful typography and document styling",
      "Deep Links to any block in any document",
      "Shareable public pages with custom URLs",
      "AI writing assistant for rewriting and summarizing",
      "iCloud sync with end-to-end encryption option",
    ],
    whySwitchReasons: [
      "Notion is a web app — Craft is native Mac/iOS with the performance and feel that Apple users expect",
      "iCloud sync with E2E encryption keeps notes private, unlike Notion's server-based storage",
      "Document styling and typography make Craft notes beautiful enough to share as standalone documents",
    ],
    bestFor: "Apple ecosystem users who want beautiful, fast note-taking with block-based editing and iCloud sync.",
    compareUrl: "/compare/notion-vs-craft",
  },
  {
    rank: 7,
    name: "Slab",
    slug: "slab",
    url: "https://slab.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (up to 10 users). Startup $6.67/user/mo",
    tagline: "Team knowledge base optimized for search and documentation quality",
    description:
      "Slab focuses on one problem: making team documentation findable and trustworthy. Its Unified Search searches across Slab AND connected tools (Notion, GitHub, Jira, Confluence, Slack) from a single interface — so you don't need to know which tool contains the answer. Topics (curated knowledge bundles) and post verification (outdated flagging) solve the two biggest wiki problems: discoverability and staleness.",
    features: [
      "Unified Search across Slab + 50+ connected tools",
      "Topics for curated knowledge bundles",
      "Post verification with expiry dates",
      "Slack /slab search command",
      "Analytics (most-read pages, search queries that found nothing)",
      "AI writing tools for documentation improvement",
    ],
    whySwitchReasons: [
      "Notion search only finds Notion content — Slab's unified search finds answers across all your tools",
      "Topics create curated 'start here' guides that onboard new hires without hunting through nested pages",
      "Post verification with expiry dates means your team actually trusts the documentation",
    ],
    bestFor: "Growing teams (20-500 people) who need documentation that stays trustworthy and searchable as the organization scales.",
    compareUrl: "/compare/notion-vs-slab",
  },
  {
    rank: 8,
    name: "Nuclino",
    slug: "nuclino",
    url: "https://nuclino.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (50 items). Starter $6/user/mo",
    tagline: "Minimal team wiki with graph view and real-time collaboration",
    description:
      "Nuclino offers the cleanliness of a simple wiki with Notion-style blocks and an optional graph view showing how pages connect. Its real-time collaboration is fast, the interface has no learning curve, and the graph view helps new team members understand how knowledge areas relate. Nuclino doesn't try to replace project management tools — it stays focused on documentation — which means it does that job better than Notion's multi-tool sprawl.",
    features: [
      "Graph view of connected wiki pages",
      "Real-time collaboration with instant sync",
      "List, board, and table views for items",
      "Full revision history with diff view",
      "Search with instant results",
      "Lightweight project management (boards)",
    ],
    whySwitchReasons: [
      "Notion's flexibility creates confusion — Nuclino's simple structure means your team actually uses it",
      "Graph view helps new hires see how company knowledge is organized before diving in",
      "Instant real-time sync means no 'who's editing this?' conflicts",
    ],
    bestFor: "Small to medium teams (5-100 people) who want a clean, fast wiki without Notion's feature complexity.",
    compareUrl: "/compare/notion-vs-nuclino",
  },
  {
    rank: 9,
    name: "Tana",
    slug: "tana",
    url: "https://tana.inc",
    pricing: "Free (beta)",
    pricingColor: "bg-green-500/10 text-green-400",
    freeTier: true,
    startingPrice: "Free (currently in beta)",
    tagline: "Next-gen PKM with supertags and structured AI workflows",
    description:
      "Tana is built by former Roam Research contributors and represents the next evolution of the outliner-based PKM. Its core innovation is Supertags — custom node types with structured fields (like Notion's databases, but on any node, anywhere in your outline). This makes Tana a flexible typed knowledge graph: tag a meeting note as a 'Meeting' type and get structured fields (date, attendees, action items) automatically. AI commands run inline within the outline.",
    features: [
      "Supertags — typed nodes with structured fields anywhere",
      "Inline AI commands (summarize, extract, generate) within outlines",
      "Search nodes by type across your entire workspace",
      "Daily pages with contextual carry-forward",
      "Collaboration with shared workspaces",
      "Command palette for rapid navigation",
    ],
    whySwitchReasons: [
      "Notion databases are separate from docs — Tana's supertags add structure to any node in your outline",
      "Inline AI commands run against your actual notes, not a separate AI assistant",
      "Next-gen knowledge graph architecture connects information in ways that Notion's page hierarchy cannot",
    ],
    bestFor: "Power users, researchers, and founders who want the most advanced PKM available and don't mind a steep learning curve.",
    compareUrl: "/compare/notion-vs-tana",
  },
  {
    rank: 10,
    name: "Linear",
    slug: "linear",
    url: "https://linear.app",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (up to 250 issues). Basic $8/user/mo",
    tagline: "Purpose-built project management for engineering teams",
    description:
      "Linear isn't a notes tool — it's a replacement for the parts of Notion that engineering teams use for project tracking. If your team is using Notion databases to manage sprints, bugs, and roadmaps, Linear is purpose-built for that workflow with dramatically better performance. Keyboard-first navigation, sub-issue hierarchies, cycle management, and deep GitHub integration make Linear the preferred project tool for engineering teams who outgrew Notion's database performance at scale.",
    features: [
      "Keyboard-first issue management (fastest UI in the category)",
      "Cycles (sprints) with automated scope tracking",
      "GitHub/GitLab PR linking and branch creation from issues",
      "Roadmaps with project milestones",
      "Initiatives for cross-team planning",
      "Analytics on cycle throughput and lead time",
    ],
    whySwitchReasons: [
      "Notion databases slow down at scale (1,000+ rows) — Linear handles tens of thousands of issues instantly",
      "GitHub PR linking ties code to issues automatically — Notion has no native code repository awareness",
      "Cycles with velocity tracking replace manual Notion sprint boards with actual engineering metrics",
    ],
    bestFor: "Engineering teams who've been using Notion databases for project management and want purpose-built tooling.",
    compareUrl: "/compare/notion-vs-linear",
  },
];

const faqs = [
  {
    question: "What is the best free Notion alternative?",
    answer:
      "For team wikis, Confluence (free up to 10 users) and Nuclino (free up to 50 items) offer comparable wiki functionality at no cost. For personal knowledge management, Obsidian and Logseq are both free and open-source. Tana is currently free in beta. For those specifically wanting a Notion-like workspace experience, Coda's free tier supports basic tables and docs without a row limit on views.",
  },
  {
    question: "Why do people switch from Notion?",
    answer:
      "The most common reasons are performance (Notion's database views slow down at scale), data ownership (your data is in Notion's proprietary format, not portable plain text), feature complexity (Notion tries to be everything, making it overwhelming), and pricing (the AI add-on is an additional $10/user/month). Teams also switch when they realize different parts of the team need different tools — engineers need Linear, writers need Obsidian, and customer success needs Confluence.",
  },
  {
    question: "Which Notion alternative is best for engineers?",
    answer:
      "Linear is the best Notion alternative for engineering project management — keyboards-first, GitHub-native, and purpose-built for sprints and bug tracking. For documentation, Confluence integrates natively with Jira. For personal engineering notes and research, Obsidian with Dataview plugin offers database-like querying on plain Markdown files.",
  },
  {
    question: "Is Obsidian better than Notion for notes?",
    answer:
      "It depends on your priority. Obsidian stores notes as local Markdown files you own permanently — great for long-term knowledge building. Notion is collaborative-first with better database and sharing features. Obsidian has a steeper learning curve but scales better for personal knowledge management. Notion is better for team wikis and structured project tracking. Many knowledge workers use both: Obsidian for personal thinking, Notion for team collaboration.",
  },
  {
    question: "Can I migrate my Notion data to another tool?",
    answer:
      "Notion exports all data as Markdown + CSV, which makes migration to Obsidian, Logseq, or Craft straightforward for notes. Databases export as CSV that can import to Coda or Airtable. The main loss in migration is Notion's database relationships — those need manual reconstruction in other tools. Tools like Notionback and Notion2Obsidian automate the conversion for common targets.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Best Notion Alternatives (${year})`,
    description: `Top 10 alternatives to Notion for notes, team wikis, and productivity workspaces.`,
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
      { "@type": "ListItem", position: 3, name: "Notion Alternatives", item: "https://aisotools.com/alternatives/notion" },
    ],
  },
];

export default function NotionAlternativesPage() {
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
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/alternatives" className="hover:text-white transition">Alternatives</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-300">Notion Alternatives</span>
        </nav>

        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-xl bg-purple-600/20 flex items-center justify-center text-2xl font-bold text-purple-400 mx-auto mb-6">
            N
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Best Notion Alternatives in {year}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Compare the {alternatives.length} best alternatives to Notion for notes, wikis, databases, and team workspaces.
          </p>
          <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">
            <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
              Notion: Free → $16/user/mo
            </span>
            <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
              📝 Notes & Wikis
            </span>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Why Look for Notion Alternatives?</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Notion became the default productivity workspace for millions — but its try-to-be-everything approach creates real friction at scale. Database performance degrades with large datasets, the AI add-on costs an extra $10/user/month, personal notes are stored in Notion's proprietary cloud, and the free tier limits prevent solo users from building a long-term knowledge base. Depending on your primary use case, a more focused alternative often serves you better.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { reason: "🐢 Performance at Scale", detail: "Notion databases slow significantly with 1,000+ rows. Teams tracking engineering issues, customer records, or large project databases hit these limits fast — purpose-built tools like Linear or Coda handle scale better." },
              { reason: "🔒 Data Portability", detail: "Notion stores your data in a proprietary format with cloud servers. Obsidian and Logseq store plain Markdown files on your device — permanently portable to any tool, zero vendor lock-in." },
              { reason: "💰 AI Add-On Cost", detail: "Notion AI costs an additional $10/user/month on top of base plans. For teams of 20, that's $2,400/year just for AI. Many alternatives include AI in their base pricing." },
              { reason: "🧩 Feature Overload", detail: "Notion's infinite flexibility becomes a liability — every team invents a different structure, docs get orphaned, and new hires can't navigate. Purpose-built wikis (Slab, Slite) enforce structure that scales." },
            ].map((item, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="font-semibold text-lg mb-2">{item.reason}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Quick Comparison: Notion vs Alternatives</h2>
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
              <tbody>
                {alternatives.map((alt) => (
                  <tr key={alt.slug} className="border-t border-gray-800 hover:bg-gray-800/30 transition">
                    <td className="p-4 text-gray-500">{alt.rank}</td>
                    <td className="p-4">
                      <Link href={`#${alt.slug}`} className="font-medium text-white hover:text-purple-400 transition">
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

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Detailed Look at Each Notion Alternative</h2>
          <div className="space-y-8">
            {alternatives.map((alt) => (
              <div key={alt.slug} id={alt.slug} className="bg-gray-900 border border-gray-800 rounded-xl p-6 sm:p-8 scroll-mt-20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center text-xl font-bold text-purple-400 flex-shrink-0">
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
                    <p className="text-gray-500 text-sm mt-1">{alt.tagline}</p>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed mb-6">{alt.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-300 mb-3 uppercase tracking-wide">Key Features</h4>
                    <ul className="space-y-2">
                      {alt.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-purple-400 mt-0.5 flex-shrink-0">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-300 mb-3 uppercase tracking-wide">Why Switch from Notion?</h4>
                    <ul className="space-y-2">
                      {alt.whySwitchReasons.map((r, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-orange-400 mt-0.5 flex-shrink-0">→</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 flex-wrap pt-4 border-t border-gray-800">
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wide">Best For</span>
                    <p className="text-sm text-gray-300 mt-0.5">{alt.bestFor}</p>
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <div className="text-right">
                      <span className="text-xs text-gray-500">Starting price</span>
                      <p className="text-sm font-medium text-white">{alt.startingPrice}</p>
                    </div>
                    <a
                      href={alt.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition flex-shrink-0"
                    >
                      Try {alt.name} →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Which Notion Alternative Should You Choose?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "For Personal Knowledge", items: [{ name: "Obsidian", detail: "Local Markdown, bidirectional links, graph view — the premier personal PKM" }, { name: "Logseq", detail: "Open-source, daily journal, block-level references" }] },
              { title: "For Engineering Teams", items: [{ name: "Linear", detail: "Purpose-built project tracking with GitHub native integration" }, { name: "Confluence", detail: "Deep Jira integration, enterprise compliance" }] },
              { title: "For Team Wikis", items: [{ name: "Slab", detail: "Unified search across all tools, topic curation, trust scores" }, { name: "Slite", detail: "AI question-answering, simple structure for async teams" }] },
              { title: "For Databases & Operations", items: [{ name: "Coda", detail: "Spreadsheet-grade formulas, automations, cross-table references" }, { name: "Nuclino", detail: "Fast, minimal wiki with graph view" }] },
            ].map((section, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
                <ul className="space-y-2 text-gray-400">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start">
                      <span className="text-purple-400 mr-2">→</span>
                      <span><strong className="text-gray-300">{item.name}:</strong> {item.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

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

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Explore More</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/alternatives/notion-ai" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-purple-500/50 transition">
              <h3 className="font-semibold mb-1">🤖 Notion AI Alternatives</h3>
              <p className="text-gray-400 text-sm">Best AI writing assistants compared</p>
            </Link>
            <Link href="/best-ai-productivity-tools-2026" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-purple-500/50 transition">
              <h3 className="font-semibold mb-1">⚡ AI Productivity Tools</h3>
              <p className="text-gray-400 text-sm">Top AI tools to boost your workflow</p>
            </Link>
            <Link href="/tool/obsidian" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-purple-500/50 transition">
              <h3 className="font-semibold mb-1">💎 Obsidian</h3>
              <p className="text-gray-400 text-sm">Local-first knowledge management</p>
            </Link>
            <Link href="/tool/coda" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-purple-500/50 transition">
              <h3 className="font-semibold mb-1">📊 Coda</h3>
              <p className="text-gray-400 text-sm">Docs + spreadsheets + apps in one</p>
            </Link>
            <Link href="/alternatives/otter-ai" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-purple-500/50 transition">
              <h3 className="font-semibold mb-1">🎙️ Otter.ai Alternatives</h3>
              <p className="text-gray-400 text-sm">Best AI meeting note-takers</p>
            </Link>
            <Link href="/alternatives" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-purple-500/50 transition">
              <h3 className="font-semibold mb-1">🔄 All Alternatives</h3>
              <p className="text-gray-400 text-sm">Browse alternatives for 280+ AI tools</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
