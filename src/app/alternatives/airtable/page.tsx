import Link from "next/link";
import type { Metadata } from "next";

const year = 2026;

export const metadata: Metadata = {
  title: `Best Airtable Alternatives (${year}) — Top 10 No-Code Database Tools | AISO Tools`,
  description: `Looking for Airtable alternatives? Compare the 10 best no-code database, spreadsheet, and app builder tools with pricing, pros & cons, and which fits your needs in ${year}.`,
  alternates: {
    canonical: "https://aisotools.com/alternatives/airtable",
  },
  openGraph: {
    title: `Best Airtable Alternatives (${year}) — Top 10 No-Code Database Tools`,
    description: `Compare the 10 best Airtable alternatives for no-code databases, spreadsheets, and internal app building.`,
    url: "https://aisotools.com/alternatives/airtable",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Airtable Alternatives (${year})`,
    description: `Top 10 Airtable alternatives for no-code databases and spreadsheet management.`,
  },
};

const alternatives = [
  {
    rank: 1,
    name: "Notion",
    slug: "notion",
    url: "https://notion.so",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (personal). Plus $12/user/mo",
    tagline: "Docs + databases in one — Airtable-style tables inside your workspace",
    description:
      "Notion's database feature covers 80% of what teams use Airtable for — tables with custom properties, multiple views (table, board, gallery, calendar, timeline), filtering, sorting, and relational links between databases. For teams already using Notion for documentation, consolidating their Airtable use into Notion eliminates a subscription and keeps data in one place. The tradeoff: Notion's databases are slower than Airtable at large scale (10,000+ rows) and lack Airtable's automation depth.",
    features: [
      "Tables, boards, galleries, calendars, and timelines on the same data",
      "Relations and rollups between databases",
      "Custom properties (select, formula, relation, date, etc.)",
      "Views with filters, sorts, and group-by",
      "API for programmatic access",
      "AI for summarizing and generating database content",
    ],
    whySwitchReasons: [
      "Teams on Notion for docs can manage their Airtable data in the same workspace at no extra cost",
      "Relations between Notion databases replicate Airtable's linked records feature",
      "No per-seat cost for Notion databases — Airtable charges $20-54/user for advanced features",
    ],
    bestFor: "Teams already using Notion for documentation who want to consolidate databases without adding an Airtable subscription.",
    compareUrl: "/alternatives/notion",
  },
  {
    rank: 2,
    name: "Baserow",
    slug: "baserow",
    url: "https://baserow.io",
    pricing: "Free / Open Source",
    pricingColor: "bg-green-500/10 text-green-400",
    freeTier: true,
    startingPrice: "Free (self-hosted or cloud). Premium $5/user/mo",
    tagline: "Open-source Airtable alternative — self-hosted with no row limits",
    description:
      "Baserow is the most direct open-source Airtable replacement — a no-code database builder that looks and works like Airtable but self-hosts on your infrastructure with no row limits and no per-seat cost for the Community Edition. It supports the same field types as Airtable (text, number, date, single/multi select, file, link to table, formula), multiple views (grid, gallery, kanban, calendar), and team collaboration. For teams that need Airtable's UX with full data ownership, Baserow is the go-to.",
    features: [
      "Self-hosted open-source (Docker, single-click deploy)",
      "Same field types as Airtable (formula, link, file, etc.)",
      "Grid, gallery, kanban, calendar, and form views",
      "No row limits on self-hosted Community Edition",
      "REST API for every table automatically",
      "Role-based permissions at table and field level",
    ],
    whySwitchReasons: [
      "Airtable's pricing scales with rows and features — Baserow self-hosted is free with no limits",
      "Full data ownership: your database lives on your server, not Airtable's US-based cloud",
      "REST API generated automatically for every table, no additional setup needed",
    ],
    bestFor: "Teams who want Airtable's UX with complete data ownership, self-hosting capability, and no row-count pricing.",
    compareUrl: "/compare/airtable-vs-baserow",
  },
  {
    rank: 3,
    name: "NocoDB",
    slug: "nocodb",
    url: "https://nocodb.com",
    pricing: "Free / Open Source",
    pricingColor: "bg-green-500/10 text-green-400",
    freeTier: true,
    startingPrice: "Free (self-hosted). Team $10/user/mo (cloud)",
    tagline: "Turn any database into a smart spreadsheet — Airtable interface on your DB",
    description:
      "NocoDB takes a fundamentally different approach from other Airtable alternatives: instead of replacing your database, it wraps an Airtable-like interface around your existing PostgreSQL, MySQL, MariaDB, or SQLite database. This makes it the ideal tool for developer teams who have production data in SQL databases but want non-technical stakeholders to view and edit it through a spreadsheet interface. No data migration needed — connect to your existing DB and immediately get Airtable-style views.",
    features: [
      "Connects to existing PostgreSQL, MySQL, MariaDB, SQLite",
      "Airtable-like grid, gallery, kanban, calendar, and form views",
      "REST and GraphQL APIs auto-generated from your schema",
      "Role-based access control (viewer, commenter, editor, creator)",
      "AI field for data enrichment and automation",
      "Webhooks and automation triggers",
    ],
    whySwitchReasons: [
      "NocoDB wraps your existing database — no data migration or duplication from Airtable",
      "Non-technical teams can edit production database records through a familiar spreadsheet UI",
      "GraphQL and REST APIs are generated automatically, serving both internal apps and external integrations",
    ],
    bestFor: "Developer teams who want non-technical stakeholders to safely view and edit data in production SQL databases.",
    compareUrl: "/compare/airtable-vs-nocodb",
  },
  {
    rank: 4,
    name: "Coda",
    slug: "coda",
    url: "https://coda.io",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (up to 1,000 doc rows). Pro $10/mo per maker",
    tagline: "Docs + databases + apps — more formula power than Airtable",
    description:
      "Coda sits above both Airtable and Notion in formula power — its formula language references data across tables, supports conditional logic, and can be embedded in buttons and automations. For operations teams who've been building increasingly complex Airtable bases with automation and formula logic, Coda provides the same interface with a formula engine that scales better. Packs (integrations) sync live data from Salesforce, Jira, GitHub, and 50+ tools directly into Coda tables.",
    features: [
      "Cross-table formulas referencing any table in the doc",
      "Buttons that run formulas, send Slack messages, or modify rows",
      "Packs for live Salesforce, Jira, GitHub, HubSpot data",
      "Automations triggered by data changes",
      "Row-level permissions and user-specific views",
      "Publish docs as internal apps with access control",
    ],
    whySwitchReasons: [
      "Airtable formulas are column-only — Coda's formulas work across tables like a real programming language",
      "Buttons with actions reduce manual ops work (send an email, update a Jira ticket, notify Slack) without Zapier",
      "Live data Packs pull Salesforce/Jira data into Coda tables without manual CSV imports",
    ],
    bestFor: "Operations and RevOps teams building internal tools with complex automation logic that Airtable's formula engine can't handle.",
    compareUrl: "/compare/airtable-vs-coda",
  },
  {
    rank: 5,
    name: "SmartSuite",
    slug: "smartsuite",
    url: "https://smartsuite.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (limited). Team $10/user/mo",
    tagline: "Work management platform with Airtable-style databases and built-in workflows",
    description:
      "SmartSuite is a work management platform that combines Airtable-style databases with project management features — task assignments, dependencies, time tracking, and reporting built directly into records. Where Airtable is a database that teams bolt project management onto through workarounds, SmartSuite was designed to handle both in one. Its AI assistant can generate record content, summarize data, and build formula fields from natural language descriptions.",
    features: [
      "25+ field types including dependencies and time tracking",
      "Multiple views: grid, board, calendar, timeline, Gantt",
      "Built-in task management with subtasks",
      "AI field generator from natural language",
      "Advanced reporting with dashboard widgets",
      "Automations with 200+ app integrations",
    ],
    whySwitchReasons: [
      "Airtable requires workarounds for project management — SmartSuite has dependencies and milestones native",
      "AI field generator writes formulas from English descriptions without formula syntax knowledge",
      "Reporting dashboard shows live metrics across all databases without a separate BI tool",
    ],
    bestFor: "Teams wanting a unified work management and database platform where Airtable's separate app ecosystem creates friction.",
    compareUrl: "/compare/airtable-vs-smartsuite",
  },
  {
    rank: 6,
    name: "Grist",
    slug: "grist",
    url: "https://getgrist.com",
    pricing: "Free / Open Source",
    pricingColor: "bg-green-500/10 text-green-400",
    freeTier: true,
    startingPrice: "Free (self-hosted or cloud). Business $8/user/mo",
    tagline: "Open-source spreadsheet-database hybrid with Python formulas",
    description:
      "Grist combines the power of a relational database with the familiarity of a spreadsheet, and uniquely supports Python formulas in addition to standard spreadsheet syntax. This makes it particularly powerful for data-intensive workflows — financial models, scientific data management, and reporting. Like Baserow and NocoDB, Grist is open-source and self-hostable. Its widget system (charts, custom HTML, API widgets) turns database tables into data applications without code.",
    features: [
      "Python and Excel-style formulas in the same table",
      "Linked views (select row → filter another view)",
      "Custom widgets (charts, HTML, third-party embeds)",
      "Self-hosted open-source (Docker)",
      "Row-level access control",
      "Data versioning with snapshot history",
    ],
    whySwitchReasons: [
      "Airtable formulas are limited — Grist runs Python, enabling complex data transformations natively",
      "Linked views create interactive dashboards where selecting a record filters related tables",
      "Row-level access control lets different users see different rows of the same table",
    ],
    bestFor: "Data-intensive teams, researchers, and financial analysts who need spreadsheet formulas with relational database structure.",
    compareUrl: "/compare/airtable-vs-grist",
  },
  {
    rank: 7,
    name: "Google Sheets",
    slug: "google-sheets",
    url: "https://sheets.google.com",
    pricing: "Free",
    pricingColor: "bg-green-500/10 text-green-400",
    freeTier: true,
    startingPrice: "Free (included with Google account)",
    tagline: "The ubiquitous free spreadsheet with powerful formulas and sharing",
    description:
      "Google Sheets isn't a database — but for most of what teams use Airtable for (tracking records, sharing data with stakeholders, light formulas, import/export), Sheets works and costs nothing. Every Google account includes Sheets, making it the path of least resistance for small teams. Advanced users extend Sheets with AppScript for automation, and tools like Glide or AppSheet can turn Sheets into mobile apps. The limitation: no relational data, no Airtable-style views, and performance degrades significantly past 50,000 rows.",
    features: [
      "Free with any Google account",
      "Real-time collaboration with comments and history",
      "VLOOKUP, IMPORTRANGE, QUERY, and 500+ functions",
      "AppScript for custom automation (JavaScript)",
      "Form integration (Google Forms → Sheets)",
      "Glide/AppSheet integration to build mobile apps",
    ],
    whySwitchReasons: [
      "For basic data tracking and sharing, Sheets is free — Airtable's paid features go unused for simple use cases",
      "Every Google Workspace user already has Sheets — no onboarding, training, or subscription required",
      "QUERY function replicates filtered views for users comfortable with SQL-like syntax",
    ],
    bestFor: "Small teams with simple data tracking needs who want a free, familiar tool that every stakeholder already knows how to use.",
    compareUrl: "/compare/airtable-vs-google-sheets",
  },
  {
    rank: 8,
    name: "SeaTable",
    slug: "seatable",
    url: "https://seatable.io",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (up to 10,000 rows). Plus $7/user/mo",
    tagline: "GDPR-compliant Airtable alternative with self-hosting option",
    description:
      "SeaTable is a German-developed Airtable alternative designed with European data protection in mind — GDPR-compliant by architecture, with a self-hosted option and EU-based cloud servers. Its feature set mirrors Airtable: tables with custom field types, multiple views, web forms, automations, and JavaScript scripting. For European teams subject to GDPR data residency requirements, SeaTable provides Airtable functionality without US-based data transfer concerns.",
    features: [
      "EU-based cloud servers (GDPR compliant)",
      "Self-hosted option (Docker, on-premises)",
      "10+ field types including image, button, and formula",
      "Grid, gallery, kanban, calendar, and timeline views",
      "Web forms for data collection",
      "Python and JavaScript scripting for automation",
    ],
    whySwitchReasons: [
      "Airtable stores data on US servers — SeaTable's EU-based cloud satisfies GDPR data residency requirements",
      "Self-hosted deployment gives full data sovereignty for regulated European industries",
      "Python/JavaScript scripting enables complex automations beyond Airtable's no-code automation builder",
    ],
    bestFor: "European teams with GDPR data residency requirements who need Airtable functionality with compliant data storage.",
    compareUrl: "/compare/airtable-vs-seatable",
  },
  {
    rank: 9,
    name: "Retool",
    slug: "retool",
    url: "https://retool.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (up to 5 users). Team $10/user/mo",
    tagline: "Low-code internal tool builder on top of your existing databases",
    description:
      "Retool is not a spreadsheet — it's a low-code internal app builder that sits on top of whatever database you already use. Where Airtable is the database itself, Retool connects to PostgreSQL, MySQL, MongoDB, Salesforce, and 50+ data sources and provides drag-and-drop UI components (tables, forms, charts, buttons) to build internal tools. For developer teams who need non-technical operators to interact with production data through a safe, permissioned interface, Retool is the standard tool.",
    features: [
      "Connects to 50+ data sources (SQL, REST, Salesforce, etc.)",
      "Drag-and-drop UI builder with 100+ components",
      "Role-based permissions at app and component level",
      "Custom JavaScript for component logic",
      "Mobile app builder",
      "On-premise deployment option",
    ],
    whySwitchReasons: [
      "Airtable is the database — Retool wraps your existing production database with a safe UI for operators",
      "Non-technical teams can update production records without direct database access",
      "Custom permissions prevent accidental data modification — Airtable's permission model is coarser",
    ],
    bestFor: "Developer and engineering teams who need to give non-technical operators safe, permissioned access to production database records.",
    compareUrl: "/compare/airtable-vs-retool",
  },
  {
    rank: 10,
    name: "Monday.com",
    slug: "monday-com",
    url: "https://monday.com",
    pricing: "Paid",
    pricingColor: "bg-orange-500/10 text-orange-400",
    freeTier: false,
    startingPrice: "$9/seat/mo (minimum 3 seats)",
    tagline: "Flexible work OS with Airtable-style columns and automation",
    description:
      "Monday.com's column-based board system overlaps significantly with Airtable's field-based approach — both let you define custom data fields and view records in multiple layouts. Monday's differentiation is its project management depth: dependencies, workload views, timelines, and a pre-built template library for specific industries (marketing, HR, construction). For teams that want Airtable's structured data model with built-in project management features, Monday consolidates both needs.",
    features: [
      "Flexible column types (status, date, person, formula, etc.)",
      "Dependency tracking and critical path",
      "Workload views for resource management",
      "200+ industry-specific templates",
      "Dashboards with cross-board widgets",
      "200+ native integrations and automation",
    ],
    whySwitchReasons: [
      "Airtable requires Power-Ups for project management — Monday.com has Gantt, workload, and dependencies built in",
      "Template library for specific industries (marketing campaigns, recruitment, IT ticketing) reduces setup time",
      "Cross-board dashboards pull live KPIs across all projects without additional BI tools",
    ],
    bestFor: "Teams who want Airtable-style structured data with project management depth and industry-specific templates included.",
    compareUrl: "/compare/airtable-vs-monday",
  },
];

const faqs = [
  {
    question: "What is the best free Airtable alternative?",
    answer:
      "For self-hosted data ownership, Baserow (open-source) and NocoDB (open-source) are the best free Airtable alternatives with no row limits. Notion's free tier provides basic database functionality for personal use. Google Sheets is free for any use case and is familiar to everyone. For cloud alternatives with more features, Grist's free tier (self-hosted) or SmartSuite's free plan are worth evaluating.",
  },
  {
    question: "Why are teams leaving Airtable?",
    answer:
      "The most common drivers are pricing (Airtable charges per user AND per row tier — costs escalate fast), record limits on lower plans (Starter limits to 1,200 rows per base), slow performance on large datasets, and the realization that their use case doesn't need Airtable's unique features. Teams using Airtable for simple project tracking often find Notion or ClickUp equally capable at lower cost. Power users needing database control often move to NocoDB or Baserow for self-hosting.",
  },
  {
    question: "Which Airtable alternative is best for GDPR compliance?",
    answer:
      "SeaTable is purpose-built for GDPR with EU-based servers and a self-hosted option. Baserow and NocoDB self-host on your own EU infrastructure, giving complete data sovereignty. Notion and Coda are US-based cloud tools with GDPR compliance certifications, but data still resides on US servers — which may not satisfy strict data residency requirements in some European jurisdictions.",
  },
  {
    question: "Can I migrate my Airtable data to another tool?",
    answer:
      "Airtable exports data as CSV files per table. Most alternatives (Notion, Baserow, Google Sheets, Coda) import CSV directly. NocoDB can connect to your existing database — if you've already migrated Airtable CSV data to PostgreSQL, NocoDB wraps it with a familiar interface. The main migration friction is recreating views, automations, and formulas in the target tool — these don't export from Airtable.",
  },
  {
    question: "Is Notion a good Airtable replacement for databases?",
    answer:
      "Notion covers 80% of typical Airtable use cases — multiple views, custom properties, relations between databases, and filtering. The gaps are performance (Notion slows at 10,000+ rows vs. Airtable's handling of much larger datasets), automation depth (Notion's automations are simpler than Airtable's), and API rate limits. For teams with under 10,000 records per database and moderate automation needs, Notion is an excellent Airtable replacement that consolidates docs and data.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Best Airtable Alternatives (${year})`,
    description: `Top 10 alternatives to Airtable for no-code databases, spreadsheets, and internal tools.`,
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
      { "@type": "ListItem", position: 3, name: "Airtable Alternatives", item: "https://aisotools.com/alternatives/airtable" },
    ],
  },
];

export default function AirtableAlternativesPage() {
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
          <span className="text-gray-300">Airtable Alternatives</span>
        </nav>

        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-xl bg-purple-600/20 flex items-center justify-center text-2xl font-bold text-purple-400 mx-auto mb-6">
            A
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Best Airtable Alternatives in {year}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Compare the {alternatives.length} best alternatives to Airtable for no-code databases, spreadsheets, and internal app building.
          </p>
          <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">
            <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
              Airtable: Free → $20-54/user/mo
            </span>
            <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
              🗄️ No-Code Databases
            </span>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Why Look for Airtable Alternatives?</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Airtable pioneered the spreadsheet-database hybrid and remains powerful, but its pricing model — which charges per user AND per row tier — escalates quickly as teams grow. Row limits on lower plans (1,200 on Starter) force premature upgrades, and the Pro plan at $20/user/month adds up fast. Teams also increasingly want self-hosted options for GDPR compliance, or simpler tools for use cases that don't require Airtable's full feature set.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { reason: "💰 Row Limits + Per-Seat Pricing", detail: "Airtable Starter limits to 1,200 rows per base. Pro ($20/user/mo) allows 50,000 rows. Teams tracking large datasets pay premium pricing just to store their data." },
              { reason: "🔒 Data Sovereignty", detail: "Airtable stores all data on US-based cloud servers. European teams with GDPR data residency requirements, and security-conscious orgs, need self-hosted alternatives." },
              { reason: "📈 Performance at Scale", detail: "Airtable views can become slow and unresponsive with larger databases. Purpose-built database tools (NocoDB, Baserow) handle large datasets better." },
              { reason: "🔧 Automation Limitations", detail: "Airtable's automation triggers and actions are limited on lower plans. Coda's button-driven automations and Monday.com's no-code workflows offer more flexibility at comparable cost." },
            ].map((item, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="font-semibold text-lg mb-2">{item.reason}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Quick Comparison: Airtable vs Alternatives</h2>
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
          <h2 className="text-2xl font-bold mb-6">Detailed Look at Each Airtable Alternative</h2>
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
                    <h4 className="font-semibold text-sm text-gray-300 mb-3 uppercase tracking-wide">Why Switch from Airtable?</h4>
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
          <h2 className="text-2xl font-bold mb-6">Which Airtable Alternative Should You Choose?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "For Data Ownership / Self-Hosting", items: [{ name: "Baserow", detail: "Open-source Airtable clone, self-hosted, no row limits" }, { name: "NocoDB", detail: "Wrap your existing SQL database with Airtable-like views" }] },
              { title: "For GDPR / European Teams", items: [{ name: "SeaTable", detail: "EU servers, self-hosted option, GDPR-compliant architecture" }, { name: "Baserow (self-hosted EU)", detail: "Deploy on EU infrastructure for full data residency" }] },
              { title: "For Operations Teams", items: [{ name: "Coda", detail: "Formula power + buttons + automations for complex ops workflows" }, { name: "SmartSuite", detail: "AI-assisted databases with project management built in" }] },
              { title: "For Developer Teams", items: [{ name: "Retool", detail: "Build internal tools on top of existing production databases" }, { name: "Grist", detail: "Python formulas + linked views for data-intensive workflows" }] },
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
            <Link href="/alternatives/notion" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-purple-500/50 transition">
              <h3 className="font-semibold mb-1">📝 Notion Alternatives</h3>
              <p className="text-gray-400 text-sm">Best notes and wiki tools compared</p>
            </Link>
            <Link href="/alternatives/trello" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-purple-500/50 transition">
              <h3 className="font-semibold mb-1">📋 Trello Alternatives</h3>
              <p className="text-gray-400 text-sm">Best project management tools compared</p>
            </Link>
            <Link href="/best-ai-productivity-tools-2026" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-purple-500/50 transition">
              <h3 className="font-semibold mb-1">⚡ AI Productivity Tools</h3>
              <p className="text-gray-400 text-sm">Top AI tools to boost your workflow</p>
            </Link>
            <Link href="/tool/coda" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-purple-500/50 transition">
              <h3 className="font-semibold mb-1">📊 Coda</h3>
              <p className="text-gray-400 text-sm">Docs + databases + apps in one</p>
            </Link>
            <Link href="/alternatives/zapier" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-purple-500/50 transition">
              <h3 className="font-semibold mb-1">⚙️ Zapier Alternatives</h3>
              <p className="text-gray-400 text-sm">Best automation tools compared</p>
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
