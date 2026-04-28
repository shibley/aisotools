import Link from "next/link";
import type { Metadata } from "next";

const year = 2026;

export const metadata: Metadata = {
  title: `Best Trello Alternatives (${year}) — Top 10 Project Management Tools | AISO Tools`,
  description: `Looking for Trello alternatives? Compare the 10 best kanban and project management tools with pricing, pros & cons, and which fits your team in ${year}.`,
  alternates: {
    canonical: "https://aisotools.com/alternatives/trello",
  },
  openGraph: {
    title: `Best Trello Alternatives (${year}) — Top 10 Project Management Tools`,
    description: `Compare the 10 best Trello alternatives for kanban boards and project management.`,
    url: "https://aisotools.com/alternatives/trello",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Trello Alternatives (${year})`,
    description: `Top 10 Trello alternatives for project management and kanban workflows.`,
  },
};

const alternatives = [
  {
    rank: 1,
    name: "Linear",
    slug: "linear",
    url: "https://linear.app",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (250 issues). Basic $8/user/mo",
    tagline: "Keyboard-first project management built for engineering teams",
    description:
      "Linear is the spiritual successor to Trello for engineering teams — blazing fast, keyboard-driven, and designed specifically for software development workflows. Where Trello offers generic kanban, Linear has cycles (sprints), triage workflows, GitHub PR linking, roadmaps, and sub-issues built in from day one. Its UI renders instantly on any device, making it the fastest issue tracker available. Teams that migrate from Trello to Linear typically never go back.",
    features: [
      "Keyboard-first navigation (fastest UI in project management)",
      "Cycles (sprints) with automated scope and velocity tracking",
      "GitHub/GitLab PR and branch creation from issues",
      "Sub-issues and parent-child hierarchy",
      "Roadmaps and initiative grouping",
      "Analytics: lead time, cycle time, throughput",
    ],
    whySwitchReasons: [
      "Trello is generic kanban — Linear has sprint cycles, velocity tracking, and GitHub PR linking built in",
      "Keyboard navigation means zero friction: create, assign, and move issues without touching the mouse",
      "Linear's performance is instant — no Trello-style lag when boards get large",
    ],
    bestFor: "Engineering and product teams who need purpose-built project management with sprint tracking and GitHub integration.",
    compareUrl: "/compare/trello-vs-linear",
  },
  {
    rank: 2,
    name: "Asana",
    slug: "asana",
    url: "https://asana.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (up to 10 members). Starter $13.49/user/mo",
    tagline: "Cross-functional work management with timelines and goals",
    description:
      "Asana is what growing teams reach for when Trello's simple boards can't handle cross-team dependencies, deadlines, and portfolio-level visibility. Its Timeline view (Gantt-style) shows project schedules and dependencies visually. Goals connect team tasks to company OKRs. Workflow automations trigger task assignments, status updates, and Slack messages when conditions are met. For marketing, operations, and cross-functional teams managing multiple concurrent projects, Asana scales where Trello doesn't.",
    features: [
      "Timeline (Gantt chart) with dependency tracking",
      "Goals and OKR alignment from tasks to company objectives",
      "Rules (workflow automation) for task routing",
      "Portfolios for multi-project executive visibility",
      "Forms for intake and request management",
      "150+ integrations (Slack, Salesforce, Jira, etc.)",
    ],
    whySwitchReasons: [
      "Trello has no timeline — Asana shows project schedules, dependencies, and critical path in Gantt view",
      "Portfolio view lets managers see status across 10+ projects simultaneously — impossible in Trello",
      "Workflow rules automate task routing based on conditions (e.g., assign to designer when stage = 'Review')",
    ],
    bestFor: "Marketing, operations, and cross-functional teams managing multi-project portfolios with deadlines and dependencies.",
    compareUrl: "/compare/trello-vs-asana",
  },
  {
    rank: 3,
    name: "ClickUp",
    slug: "clickup",
    url: "https://clickup.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (unlimited users). Unlimited $7/user/mo",
    tagline: "All-in-one workspace with 15+ views and built-in docs",
    description:
      "ClickUp is the most feature-dense project management tool available — 15+ views (Kanban, List, Gantt, Calendar, Mind Map, Whiteboard, Sprint), native docs, goals, CRM, time tracking, and AI writing built in. If Trello feels too limited and Asana feels expensive, ClickUp's free tier includes unlimited tasks with most features enabled. The tradeoff is complexity — ClickUp requires configuration to reach its potential and can overwhelm smaller teams.",
    features: [
      "15+ views: Board, List, Gantt, Calendar, Workload, Mind Map",
      "Native Docs (replace Notion within ClickUp)",
      "Sprints with burndown charts and velocity",
      "Custom Fields for any data type",
      "Time tracking and resource management",
      "ClickUp AI for task summaries and writing",
    ],
    whySwitchReasons: [
      "Trello is boards-only — ClickUp adds Gantt, Calendar, Sprint, and Workload views on the same tasks",
      "Free tier includes unlimited users and most features — Trello limits free users to 10 per workspace",
      "Built-in time tracking and resource workload replace separate tools",
    ],
    bestFor: "Teams who want maximum features for minimum cost, especially those combining project management with documentation needs.",
    compareUrl: "/compare/trello-vs-clickup",
  },
  {
    rank: 4,
    name: "Monday.com",
    slug: "monday-com",
    url: "https://monday.com",
    pricing: "Paid",
    pricingColor: "bg-orange-500/10 text-orange-400",
    freeTier: false,
    startingPrice: "$9/seat/mo (minimum 3 seats)",
    tagline: "Visual work OS for teams that need dashboards and automation",
    description:
      "Monday.com bills itself as a 'Work OS' — a flexible platform where each team configures their workspace around their specific workflow. Its column-based board system can represent any business process: CRM pipelines, marketing campaigns, recruitment funnels, or IT ticketing. Dashboards pull live data across all boards into executive views. The automation center (200+ templates) triggers notifications, assigns tasks, and moves items based on date or status conditions.",
    features: [
      "Flexible board columns (status, date, person, formula, etc.)",
      "Dashboards with live cross-board KPI widgets",
      "200+ automation recipes (no code required)",
      "CRM, Marketing, Dev, and HR specific templates",
      "Time tracking and workload heatmaps",
      "Enterprise-grade admin controls and compliance",
    ],
    whySwitchReasons: [
      "Trello's rigid card structure doesn't adapt to non-software workflows — Monday's column types handle any business process",
      "Dashboard widgets pull live data across multiple boards — Trello has no portfolio-level visibility",
      "Pre-built automation recipes handle routine notifications, assignments, and status changes without code",
    ],
    bestFor: "Non-technical teams in marketing, HR, sales, and operations who need a flexible workflow platform with strong automation.",
    compareUrl: "/compare/trello-vs-monday",
  },
  {
    rank: 5,
    name: "Jira",
    slug: "jira",
    url: "https://atlassian.com/software/jira",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (up to 10 users). Standard $7.16/user/mo",
    tagline: "The industry standard for software development project management",
    description:
      "Jira is where engineering teams graduate to when Trello's simplicity becomes a limitation. Advanced workflows with mandatory transitions, custom issue types (epic, story, task, sub-task), sprint planning with velocity charts, release management, and the widest integration ecosystem in the industry. Jira's learning curve is steep and it can feel bureaucratic for small teams, but for software development at scale — especially in regulated industries — it's the gold standard.",
    features: [
      "Advanced workflow with mandatory field transitions",
      "Epic → Story → Task hierarchy",
      "Sprint planning with velocity and burndown charts",
      "Release management and version tracking",
      "3,000+ marketplace apps for extension",
      "Confluence native integration for documentation",
    ],
    whySwitchReasons: [
      "Trello has no issue hierarchy — Jira's Epic→Story→Task structure organizes large development work",
      "Sprint velocity tracking and burndown charts give engineering managers real metrics",
      "Marketplace (3,000+ apps) includes specialized integrations that Trello Power-Ups can't match",
    ],
    bestFor: "Software engineering teams at medium to large companies who need mature sprint management, reporting, and compliance features.",
    compareUrl: "/compare/trello-vs-jira",
  },
  {
    rank: 6,
    name: "Basecamp",
    slug: "basecamp",
    url: "https://basecamp.com",
    pricing: "Paid",
    pricingColor: "bg-orange-500/10 text-orange-400",
    freeTier: false,
    startingPrice: "$15/user/mo (Basecamp). Flat $299/mo (Business, unlimited users)",
    tagline: "Project management with async-first communication built in",
    description:
      "Basecamp combines project management with async-first team communication — message boards, campfires (chat), to-dos, schedules, and file storage in a single project container. Its philosophy rejects the notification overload of Slack + Trello — everything lives in the project, accessible when team members are ready. The $299/month flat rate for unlimited users makes it dramatically cheaper than per-seat tools for larger teams.",
    features: [
      "Message boards for async team communication",
      "To-do lists with assignments and due dates",
      "Campfire (light chat) within each project",
      "Schedule with visual calendar overlay",
      "Automatic check-ins (async stand-ups)",
      "Client-facing access and private teams",
    ],
    whySwitchReasons: [
      "Trello requires Slack separately — Basecamp has async messaging built into every project",
      "Flat $299/mo for unlimited users beats per-seat pricing for teams of 30+",
      "Automatic check-ins replace daily standups with async written updates",
    ],
    bestFor: "Agencies, consultancies, and remote teams who want project management with async communication without juggling Slack + Trello.",
    compareUrl: "/compare/trello-vs-basecamp",
  },
  {
    rank: 7,
    name: "Notion",
    slug: "notion",
    url: "https://notion.so",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (personal). Plus $12/user/mo",
    tagline: "All-in-one workspace combining docs, databases, and boards",
    description:
      "Notion's database-as-board feature is a full Trello replacement with superpowers: each card can contain rich docs, linked databases, and custom properties. The board view is one of six ways to view the same data (table, list, gallery, calendar, timeline). For teams using Notion for documentation who want to consolidate tools, adding project tracking inside Notion eliminates the Trello subscription. The tradeoff is performance — Notion boards slow at scale compared to dedicated tools.",
    features: [
      "Board view (kanban) as one of 6 database views",
      "Rich card content (docs, embeds, linked databases)",
      "Custom properties (status, date, select, formula, etc.)",
      "Relations and rollups between databases",
      "Templates marketplace with 1,000+ project templates",
      "AI writing and summarization on any page",
    ],
    whySwitchReasons: [
      "Trello cards are limited — Notion cards contain full pages with embedded databases and docs",
      "Teams already on Notion can replace Trello boards without adding a new tool subscription",
      "Database relations link project tasks to a client CRM, content calendar, or bug tracker simultaneously",
    ],
    bestFor: "Teams already using Notion for docs who want to consolidate project management into their existing workspace.",
    compareUrl: "/alternatives/notion",
  },
  {
    rank: 8,
    name: "Plane",
    slug: "plane",
    url: "https://plane.so",
    pricing: "Free / Open Source",
    pricingColor: "bg-green-500/10 text-green-400",
    freeTier: true,
    startingPrice: "Free (cloud). Self-hosted: free forever",
    tagline: "Open-source Jira/Trello alternative with self-hosting option",
    description:
      "Plane is the open-source project management tool for teams who want Jira's feature depth without vendor lock-in or per-seat pricing. It supports issues with custom states, priorities, labels, cycles (sprints), modules (epics), and a roadmap view — all self-hostable on your infrastructure. The cloud version's free tier is generous, and the Community Edition is production-ready for most teams. For development teams switching from Jira or Trello who want full data control, Plane is the most complete open-source option.",
    features: [
      "Issues with states, priorities, labels, assignees",
      "Cycles (sprints) with burndown tracking",
      "Modules (epics) for feature grouping",
      "Roadmap view with dependency tracking",
      "Self-hosted Community Edition (Docker)",
      "GitHub and Slack integrations",
    ],
    whySwitchReasons: [
      "Trello and Jira are SaaS-only — Plane self-hosts on your infrastructure with full data ownership",
      "Community Edition is free forever with no user or feature limits",
      "Issue hierarchy (Module → Cycle → Issue) matches Jira's Epic → Sprint → Issue without the enterprise pricing",
    ],
    bestFor: "Development teams who want Jira-equivalent features with self-hosting capability and zero per-seat cost.",
    compareUrl: "/compare/trello-vs-plane",
  },
  {
    rank: 9,
    name: "Height",
    slug: "height",
    url: "https://height.app",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (up to 5 users). Basic $6.99/user/mo",
    tagline: "AI-native project management that auto-fills and organizes tasks",
    description:
      "Height is built from the ground up with AI as a core primitive, not a bolt-on. Its AI can automatically write task descriptions from a title, suggest subtasks based on the parent task, break epics into stories, and triage incoming requests to the right team. The interface feels like Trello's simplicity with Linear's speed — and the AI layer reduces the administrative burden of project management so engineers spend time building instead of updating tickets.",
    features: [
      "AI task description writer from title",
      "AI subtask and story breakdown suggestions",
      "Automatic triage and assignment suggestions",
      "Spreadsheet, board, calendar, and Gantt views",
      "Threaded comments with @mentions",
      "GitHub PR and branch linking",
    ],
    whySwitchReasons: [
      "Trello requires manually writing every task detail — Height's AI drafts descriptions from just a task title",
      "AI subtask breakdown turns an epic into a sprint backlog in seconds",
      "Automatic triage routes incoming requests to the right team without manual sorting",
    ],
    bestFor: "Product and engineering teams who want AI-assisted task management to reduce project management overhead.",
    compareUrl: "/compare/trello-vs-height",
  },
  {
    rank: 10,
    name: "GitHub Projects",
    slug: "github-projects",
    url: "https://github.com/features/issues",
    pricing: "Free",
    pricingColor: "bg-green-500/10 text-green-400",
    freeTier: true,
    startingPrice: "Free (included with GitHub)",
    tagline: "Native GitHub project management — kanban, roadmap, and table views on issues",
    description:
      "GitHub Projects v2 is a significant upgrade from the original — kanban boards, roadmap/timeline views, custom fields, and automated workflows all living inside GitHub where your code already lives. For open-source projects and development teams that are GitHub-native, using Projects eliminates the Trello subscription entirely. Issues, PRs, and project tracking live in one place. The limitation is that it's developer-centric — there's no Gantt dependency tracking or resource management for non-technical teams.",
    features: [
      "Kanban, roadmap, and table views on GitHub Issues",
      "Custom fields (single select, iteration, number, date)",
      "Automated workflows (auto-assign, status from PR state)",
      "Cross-repository project boards",
      "Built-in PR and branch connection to issues",
      "Free for public repos and included with GitHub plans",
    ],
    whySwitchReasons: [
      "Teams already on GitHub get a full project board free — no need to pay for Trello separately",
      "Issues and project boards are the same data — no sync, no duplication, no tool switching",
      "PR status automatically updates issue/project status without manual updates",
    ],
    bestFor: "Developer teams who want project management without leaving GitHub, especially open-source projects and GitHub-native workflows.",
    compareUrl: "/compare/trello-vs-github-projects",
  },
];

const faqs = [
  {
    question: "What is the best free Trello alternative?",
    answer:
      "For engineering teams, Linear's free plan (up to 250 issues) and GitHub Projects (included with GitHub) are the strongest free Trello alternatives. For non-technical teams, ClickUp's free tier is extremely generous — unlimited users and most features. Plane's Community Edition is free forever when self-hosted. Asana and Monday.com have limited free tiers but require paid plans for most team use cases.",
  },
  {
    question: "Is Trello still worth using in 2026?",
    answer:
      "Trello remains excellent for simple personal task management and small teams with straightforward kanban workflows. For teams that need sprint planning, dependencies, cross-project visibility, or GitHub integration, Trello's limitations become frustrating. Atlassian has been gradually shifting resources toward Jira, so Trello's feature development has slowed compared to newer competitors like Linear and Height.",
  },
  {
    question: "Which Trello alternative is best for engineering teams?",
    answer:
      "Linear is the top choice for most engineering teams — it's keyboard-first, has native sprint cycles and velocity tracking, GitHub PR linking, and renders instantly. Jira is better for large enterprise teams with complex compliance requirements. GitHub Projects is a strong option if your team is entirely GitHub-native. For teams wanting open-source self-hosting, Plane offers Jira-like depth at zero cost.",
  },
  {
    question: "How does Trello compare to Asana?",
    answer:
      "Trello is simpler and better for small teams with visual kanban workflows. Asana is better for larger, cross-functional teams with timelines (Gantt), dependency tracking, OKR alignment, and portfolio management. Trello's free tier is limited to 10 collaborators per workspace and 10 boards — Asana's free tier supports unlimited tasks for up to 10 members. For teams that have outgrown simple boards, Asana's structured approach provides more control.",
  },
  {
    question: "Can I migrate from Trello to another tool easily?",
    answer:
      "Most Trello alternatives support direct Trello import via the Trello JSON export. Linear, ClickUp, Asana, and Monday.com all offer Trello import that preserves boards, lists, cards, labels, and attachments. The most reliable migration path is to export your Trello data as JSON, then use the destination tool's import wizard. Custom Power-Up configurations don't migrate — you'll need to rebuild automations in the new tool.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Best Trello Alternatives (${year})`,
    description: `Top 10 alternatives to Trello for project management and kanban workflows.`,
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
      { "@type": "ListItem", position: 3, name: "Trello Alternatives", item: "https://aisotools.com/alternatives/trello" },
    ],
  },
];

export default function TrelloAlternativesPage() {
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
          <span className="text-gray-300">Trello Alternatives</span>
        </nav>

        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-xl bg-purple-600/20 flex items-center justify-center text-2xl font-bold text-purple-400 mx-auto mb-6">
            T
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Best Trello Alternatives in {year}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Compare the {alternatives.length} best alternatives to Trello for project management, kanban boards, and team collaboration.
          </p>
          <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">
            <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
              Trello: Free → $10/user/mo
            </span>
            <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
              📋 Project Management
            </span>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Why Look for Trello Alternatives?</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Trello popularized kanban boards for teams and remains intuitive for simple workflows. But as teams grow, they hit its ceiling: no sub-tasks, no Gantt timelines, no sprint management, no cross-board dependencies, and a free tier that limits to 10 collaborators and 10 boards. Teams that need to manage complex projects with deadlines, dependencies, or engineering workflows consistently outgrow Trello.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { reason: "🌲 No Issue Hierarchy", detail: "Trello has no sub-tasks or epic → story → task hierarchy. Engineering teams can't break large features into individual tickets within Trello's flat card structure." },
              { reason: "📅 No Timeline View", detail: "Trello boards show no project schedule. There's no Gantt, no dependency tracking, and no way to see if your deadline is at risk — you need Power-Ups that cost extra." },
              { reason: "🔢 Free Tier Limits", detail: "Trello's free tier caps workspaces at 10 collaborators and limits Power-Ups to 1 per board. Teams of 11+ or needing automation must upgrade to paid plans." },
              { reason: "🤖 Limited Automation", detail: "Butler (Trello's automation) requires paid plans for meaningful automations. Competitors like ClickUp and Monday.com include powerful automations in their free tiers." },
            ].map((item, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="font-semibold text-lg mb-2">{item.reason}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Quick Comparison: Trello vs Alternatives</h2>
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
          <h2 className="text-2xl font-bold mb-6">Detailed Look at Each Trello Alternative</h2>
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
                    <h4 className="font-semibold text-sm text-gray-300 mb-3 uppercase tracking-wide">Why Switch from Trello?</h4>
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
          <h2 className="text-2xl font-bold mb-6">Which Trello Alternative Should You Choose?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "For Engineering Teams", items: [{ name: "Linear", detail: "Keyboard-first, sprint cycles, GitHub native — the best Trello replacement for developers" }, { name: "GitHub Projects", detail: "Free, built into GitHub, no extra tool to manage" }] },
              { title: "For Cross-Functional Teams", items: [{ name: "Asana", detail: "Timeline, dependencies, OKR alignment for marketing and ops" }, { name: "Monday.com", detail: "Flexible columns and automation for any business workflow" }] },
              { title: "For Budget-Conscious Teams", items: [{ name: "ClickUp", detail: "Most features in the free tier, unlimited users and tasks" }, { name: "Plane", detail: "Free self-hosted open-source with Jira-equivalent features" }] },
              { title: "For Async-First Remote Teams", items: [{ name: "Basecamp", detail: "Project management + async messaging, flat $299/mo for unlimited users" }, { name: "Notion", detail: "Boards within your existing docs workspace — no extra tool" }] },
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
            <Link href="/best-ai-productivity-tools-2026" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-purple-500/50 transition">
              <h3 className="font-semibold mb-1">⚡ AI Productivity Tools</h3>
              <p className="text-gray-400 text-sm">Top AI tools to boost your workflow</p>
            </Link>
            <Link href="/tool/linear" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-purple-500/50 transition">
              <h3 className="font-semibold mb-1">⚡ Linear</h3>
              <p className="text-gray-400 text-sm">Purpose-built project management for engineers</p>
            </Link>
            <Link href="/tool/clickup" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-purple-500/50 transition">
              <h3 className="font-semibold mb-1">🔵 ClickUp</h3>
              <p className="text-gray-400 text-sm">All-in-one project management workspace</p>
            </Link>
            <Link href="/tool/asana" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-purple-500/50 transition">
              <h3 className="font-semibold mb-1">🎯 Asana</h3>
              <p className="text-gray-400 text-sm">Cross-functional work management</p>
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
