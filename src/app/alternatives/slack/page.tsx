import Link from "next/link";
import type { Metadata } from "next";

const year = 2026;

export const metadata: Metadata = {
  title: `Best Slack Alternatives (${year}) — Top 10 Team Communication Tools | AISO Tools`,
  description: `Looking for Slack alternatives? Compare the 10 best team messaging and communication tools with pricing, pros & cons, and which fits your team in ${year}.`,
  alternates: {
    canonical: "https://aisotools.com/alternatives/slack",
  },
  openGraph: {
    title: `Best Slack Alternatives (${year}) — Top 10 Team Communication Tools`,
    description: `Compare the 10 best Slack alternatives for team messaging, async communication, and collaboration.`,
    url: "https://aisotools.com/alternatives/slack",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Slack Alternatives (${year})`,
    description: `Top 10 Slack alternatives for team communication and messaging.`,
  },
};

const alternatives = [
  {
    rank: 1,
    name: "Microsoft Teams",
    slug: "microsoft-teams",
    url: "https://microsoft.com/microsoft-teams",
    pricing: "Free / Included with M365",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (limited). Included in M365 Business Basic ($6/user/mo)",
    tagline: "The enterprise standard — included in Microsoft 365 at no extra cost",
    description:
      "Microsoft Teams is the most used team communication platform globally, largely because it ships free with Microsoft 365 — the productivity suite already paying for in most enterprises. Beyond messaging, Teams includes meeting scheduling, video calls, file storage (SharePoint/OneDrive), and deep Office app integration (collaborative Word, Excel, and PowerPoint editing from within a channel). For organizations already on Microsoft 365, the decision to use Teams over Slack often comes down to avoiding the incremental Slack cost.",
    features: [
      "Included free with Microsoft 365 subscriptions",
      "Channels, threads, and direct messaging",
      "Integrated video meetings with Copilot AI summaries",
      "SharePoint file storage and co-authoring",
      "Phone system (calling plans and PSTN)",
      "Enterprise compliance: SOC 2, ISO 27001, HIPAA",
    ],
    whySwitchReasons: [
      "Slack costs $7.25-12.50/user/month — Teams is free if your org already pays for Microsoft 365",
      "Office app integration means Word/Excel files open directly in Teams for collaborative editing",
      "Enterprise compliance features (HIPAA, government cloud) are available in Teams before Slack",
    ],
    bestFor: "Organizations already paying for Microsoft 365 who want to avoid an additional Slack subscription cost.",
    compareUrl: "/compare/slack-vs-teams",
  },
  {
    rank: 2,
    name: "Discord",
    slug: "discord",
    url: "https://discord.com",
    pricing: "Free / Paid",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (servers). Nitro $9.99/mo per user",
    tagline: "Voice-first platform expanding into team workspaces and communities",
    description:
      "Discord originated as a gaming communication platform but has evolved into a serious team collaboration tool, particularly for developer communities, startups, and creator-economy companies. Its persistent voice channels (no 'joining' a meeting — you're always in the channel) reduce meeting friction. Stage channels work for town halls. Forum channels organize async discussions by topic. For teams that want a lightweight, always-on voice presence alongside text channels, Discord's free tier is remarkably capable.",
    features: [
      "Persistent voice channels (always-on, no meeting join required)",
      "Forum channels for organized async topic discussion",
      "Stage channels for town halls and announcements",
      "Server boosts and Nitro for enhanced file sharing",
      "Screen sharing and Go Live for presentations",
      "Threads, reactions, and rich embeds",
    ],
    whySwitchReasons: [
      "Slack requires scheduling calls — Discord's persistent voice channels let you 'sit together' passively",
      "Free tier has no message history limits unlike Slack's 90-day limit on free",
      "Communities (developer teams, open-source projects) already live on Discord — meet them there",
    ],
    bestFor: "Developer teams, startups, and community-focused companies who want always-on voice presence and free unlimited message history.",
    compareUrl: "/compare/slack-vs-discord",
  },
  {
    rank: 3,
    name: "Google Chat",
    slug: "google-chat",
    url: "https://workspace.google.com/products/chat",
    pricing: "Free / Included with Workspace",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (basic). Included in Google Workspace Business Starter ($6/user/mo)",
    tagline: "Slack alternative included with Google Workspace at no extra cost",
    description:
      "Google Chat (formerly Hangouts Chat) is the communication layer built into Google Workspace, meaning organizations on Gmail and Google Drive already have it. Spaces (channels) integrate directly with Google Meet for video and Google Drive for file sharing. While its feature set trails Slack in terms of third-party integrations and notification customization, the zero incremental cost for Google Workspace users and seamless Calendar/Meet integration make it the path of least resistance for Google-native orgs.",
    features: [
      "Included with Google Workspace at no extra cost",
      "Spaces (channels) with message threading",
      "Google Drive file sharing and preview in chat",
      "Google Meet video calling from any conversation",
      "Google Calendar integration for meeting scheduling",
      "AI search across Drive files from Chat",
    ],
    whySwitchReasons: [
      "Google Workspace organizations pay nothing extra for Chat vs. $7-12/user/month for Slack",
      "Drive file sharing is native — share a Google Doc in Chat and collaborators can edit without leaving the conversation",
      "Calendar and Meet integration means scheduling and joining calls requires zero context switching",
    ],
    bestFor: "Organizations running on Google Workspace (Gmail, Drive, Calendar) who want to avoid the Slack add-on cost.",
    compareUrl: "/compare/slack-vs-google-chat",
  },
  {
    rank: 4,
    name: "Twist",
    slug: "twist",
    url: "https://twist.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (1 month history). Unlimited $7/user/mo",
    tagline: "Async-first team messaging — threads, not channels",
    description:
      "Twist is built by the team behind Todoist with a radical premise: work communication should be default-async. Every conversation in Twist is a thread, not a real-time channel — there's no pressure to respond immediately, no notification anxiety, and the default state isn't 'what did I miss while offline.' For remote teams across time zones who want to reduce meeting load and Slack FOMO, Twist's thread-first model creates a calmer, more thoughtful communication rhythm.",
    features: [
      "Thread-first conversations (no real-time channel pressure)",
      "Turn-off notifications by default",
      "Channels grouped by team or project",
      "Message history controlled by retention policy",
      "Simple file sharing and link previews",
      "Digest mode for async reading sessions",
    ],
    whySwitchReasons: [
      "Slack's real-time nature creates FOMO and notification overload — Twist defaults to async with no implicit urgency",
      "Thread-only model means every conversation has context — no 'what's this about?' from scrolling past messages",
      "Globally distributed teams appreciate the explicit async design philosophy",
    ],
    bestFor: "Remote-first, async-first teams distributed across time zones who want to reduce meeting culture and real-time communication pressure.",
    compareUrl: "/compare/slack-vs-twist",
  },
  {
    rank: 5,
    name: "Mattermost",
    slug: "mattermost",
    url: "https://mattermost.com",
    pricing: "Free / Open Source",
    pricingColor: "bg-green-500/10 text-green-400",
    freeTier: true,
    startingPrice: "Free (self-hosted). Professional $10/user/mo (cloud)",
    tagline: "Open-source Slack clone — self-hosted with full data control",
    description:
      "Mattermost is the open-source alternative for organizations that can't store communications on a US-based cloud server — government, defense, healthcare, and financial services teams with strict data residency requirements. It looks and works almost identically to Slack: channels, DMs, threads, file sharing, reactions, and a bot/webhook ecosystem. The self-hosted Community Edition is free forever. For teams on FedRAMP, ITAR, or GDPR compliance regimes, Mattermost provides a Slack-equivalent experience within their own infrastructure.",
    features: [
      "Self-hosted on your own infrastructure (Docker, Kubernetes)",
      "Channels, DMs, threads, and bots — Slack-like UX",
      "End-to-end encryption option",
      "FedRAMP High authorized (US Government edition)",
      "Playbooks for incident response workflows",
      "On-premise Active Directory / LDAP integration",
    ],
    whySwitchReasons: [
      "Slack stores your data on US servers — Mattermost self-hosts on your infrastructure in any jurisdiction",
      "Government and defense orgs with FedRAMP or ITAR requirements need Mattermost's certified edition",
      "Community Edition is permanently free for unlimited users — no per-seat cost ever",
    ],
    bestFor: "Government, defense, healthcare, and financial services organizations with data residency requirements or air-gapped infrastructure.",
    compareUrl: "/compare/slack-vs-mattermost",
  },
  {
    rank: 6,
    name: "Lark",
    slug: "lark",
    url: "https://larksuite.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (up to 50 users). Pro $12/user/mo",
    tagline: "ByteDance's all-in-one workspace — messaging, docs, meetings, and calendar",
    description:
      "Lark (Feishu in China) is ByteDance's enterprise productivity suite — a single platform combining team messaging, collaborative docs, video meetings, calendar, approval workflows, and an OKR/project system. For startups and scale-ups looking to consolidate Slack + Notion + Google Meet + Asana into one tool, Lark's free tier includes all of these features for up to 50 users. Its collaborative docs feel like Notion inside the chat, and its meeting summaries with AI highlights reduce follow-up overhead.",
    features: [
      "All-in-one: messaging + docs + video + calendar + OKRs",
      "Collaborative docs native in channels (no attachment friction)",
      "AI meeting summaries and transcript search",
      "Approval flows and automation built in",
      "Attendance and schedule management",
      "Free for 50 users with 200GB storage",
    ],
    whySwitchReasons: [
      "Slack requires separate subscriptions for Notion, Zoom, and Asana — Lark replaces all four",
      "Free tier (50 users, 200GB) is dramatically more generous than Slack's 90-day message history limit",
      "AI meeting summaries and OKR tracking are built in, not add-ons",
    ],
    bestFor: "Startups and scale-ups (up to 50 users) who want to consolidate team communication, docs, and project management into one free platform.",
    compareUrl: "/compare/slack-vs-lark",
  },
  {
    rank: 7,
    name: "Rocket.Chat",
    slug: "rocket-chat",
    url: "https://rocket.chat",
    pricing: "Free / Open Source",
    pricingColor: "bg-green-500/10 text-green-400",
    freeTier: true,
    startingPrice: "Free (self-hosted Community). Pro $7/user/mo (cloud)",
    tagline: "Open-source team chat with omnichannel customer messaging",
    description:
      "Rocket.Chat is a self-hosted Slack alternative with an additional omnichannel layer — it can handle external customer communications (live chat, WhatsApp, Instagram DMs, email) in the same platform as internal team messaging. For companies running customer support alongside internal communication, Rocket.Chat's unified inbox means support agents see team messages and customer queries in one interface. The Community Edition is free and includes unlimited messages, channels, and users.",
    features: [
      "Self-hosted open-source (Docker, Kubernetes)",
      "Omnichannel: team chat + live chat + WhatsApp + email",
      "End-to-end encrypted channels and DMs",
      "Bot framework with Hubot, Botpress, Rasa integration",
      "Video conferencing via Jitsi integration",
      "LDAP and Active Directory authentication",
    ],
    whySwitchReasons: [
      "Slack is internal-only — Rocket.Chat handles customer live chat and social messaging in the same platform",
      "Community Edition is completely free for unlimited users and unlimited message history",
      "E2E encrypted channels meet compliance requirements that Slack cannot satisfy without expensive add-ons",
    ],
    bestFor: "Companies that want to unify internal team communication with external customer support channels in one self-hosted platform.",
    compareUrl: "/compare/slack-vs-rocket-chat",
  },
  {
    rank: 8,
    name: "Pumble",
    slug: "pumble",
    url: "https://pumble.com",
    pricing: "Free",
    pricingColor: "bg-green-500/10 text-green-400",
    freeTier: true,
    startingPrice: "Free (unlimited users and history). Pro $2.49/user/mo",
    tagline: "Free Slack alternative with unlimited message history",
    description:
      "Pumble is the most direct free Slack replacement — channels, DMs, threads, file sharing, and video calls with unlimited users and unlimited message history on the free plan. Slack's 90-day message history limit frustrates small teams who need to reference older conversations. Pumble removes this barrier entirely. For teams of 2-100 who are tired of losing Slack history but can't justify the subscription cost, Pumble delivers the core Slack experience at zero cost.",
    features: [
      "Unlimited message history on free plan",
      "Unlimited users on free plan",
      "Channels, DMs, and threads",
      "File sharing (up to 5GB on free)",
      "Audio and video calls",
      "Guest access for external collaborators",
    ],
    whySwitchReasons: [
      "Slack free limits message history to 90 days — Pumble stores unlimited history free",
      "Slack free limits to 10 integrations — most teams need more",
      "For cost-sensitive teams and startups, Pumble's free tier eliminates the Slack line item entirely",
    ],
    bestFor: "Small teams and startups who want the Slack experience with unlimited message history at zero cost.",
    compareUrl: "/compare/slack-vs-pumble",
  },
  {
    rank: 9,
    name: "Chanty",
    slug: "chanty",
    url: "https://chanty.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (up to 5 users). Business $4/user/mo",
    tagline: "Simple team messaging with built-in task management",
    description:
      "Chanty combines team messaging with a lightweight built-in task manager — turn any message into a task with a single click. For small teams using Slack as an informal task assignment system (sending 'can you handle this?' messages), Chanty formalizes that pattern with actual task tracking. The interface is clean, the mobile app is well-rated, and the Business plan at $4/user/month is significantly cheaper than Slack.",
    features: [
      "Turn any message into a task with one click",
      "Kanban task board built into the platform",
      "Audio and video calls (up to 5 people)",
      "File sharing with in-app preview",
      "Screen sharing during calls",
      "Unlimited message history on paid plans",
    ],
    whySwitchReasons: [
      "Teams using Slack for informal task assignment can formalize it with Chanty's one-click message-to-task",
      "Business plan ($4/user) is half the price of Slack Pro ($7.25/user)",
      "Simpler interface reduces the learning curve for less technical team members",
    ],
    bestFor: "Small teams (under 50 people) who want team chat with lightweight built-in task management at a lower price than Slack.",
    compareUrl: "/compare/slack-vs-chanty",
  },
  {
    rank: 10,
    name: "Flock",
    slug: "flock",
    url: "https://flock.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (unlimited users). Pro $4.50/user/mo",
    tagline: "Affordable team messaging with polls, reminders, and built-in video",
    description:
      "Flock positions itself as the cost-effective Slack alternative for SMBs, with built-in features that Slack charges extra for: video calls, screen sharing, to-do lists, polls, and team reminders all included in the base plan. Its Channels include thread replies and the Pro plan's $4.50/user price is substantially below Slack's. For budget-conscious SMBs who want team messaging without adding separate Zoom and polling subscriptions, Flock consolidates effectively.",
    features: [
      "Video calls and screen sharing built in",
      "Polls and surveys without third-party integrations",
      "Team reminders and to-do lists",
      "Channels with message threading",
      "Note-sharing and shared to-dos",
      "Google Drive, Asana, GitHub integrations",
    ],
    whySwitchReasons: [
      "Pro plan ($4.50/user) includes video calls, polls, and reminders that cost extra in Slack",
      "SMBs on tight budgets save $3+/user/month vs. Slack Pro while keeping core features",
      "Built-in polling eliminates the need for separate tools like Polly or Slido",
    ],
    bestFor: "Budget-conscious SMBs who want team messaging with video, polls, and reminders included without per-feature add-ons.",
    compareUrl: "/compare/slack-vs-flock",
  },
];

const faqs = [
  {
    question: "What is the best free Slack alternative?",
    answer:
      "Pumble offers the most generous free tier — unlimited users, unlimited message history, channels, DMs, and video calls at zero cost. Discord is a strong free alternative with persistent voice channels and unlimited history. Google Chat and Microsoft Teams are free if your organization already subscribes to Google Workspace or Microsoft 365 respectively. Mattermost and Rocket.Chat are free when self-hosted.",
  },
  {
    question: "Why do teams switch from Slack?",
    answer:
      "The most common reasons are cost ($7.25-$12.50/user/month adds up for larger teams), Slack's 90-day message history limit on free plans, notification overload in busy workspaces, and the cost of integrations. Teams on Microsoft 365 or Google Workspace often realize they already have Teams or Chat included and don't need a separate Slack subscription. Remote-first teams sometimes switch to async-native tools like Twist to reduce communication pressure.",
  },
  {
    question: "Is Microsoft Teams better than Slack?",
    answer:
      "For Microsoft 365 organizations, Teams wins on cost (included in the subscription), Office app integration (collaborative editing inside channels), and compliance features (HIPAA, FedRAMP). Slack wins on user experience (better search, sidebar organization, more intuitive interface), third-party integrations (7,000+ apps vs. Teams' smaller catalog), and developer tooling. For consumer-software-adjacent companies and startups, Slack is generally preferred; for enterprise Microsoft shops, Teams is the default.",
  },
  {
    question: "What is the most secure alternative to Slack?",
    answer:
      "Mattermost (self-hosted) provides the highest security — your data never leaves your infrastructure, and the FedRAMP-authorized version is used by US government agencies. Rocket.Chat also self-hosts with end-to-end encryption. For cloud-based options, Microsoft Teams has the most mature enterprise compliance certifications (ISO 27001, SOC 2, HIPAA, FedRAMP). All of these exceed Slack's standard cloud offering for regulated-industry use cases.",
  },
  {
    question: "Does Slack have a free plan worth using?",
    answer:
      "Slack's free plan is usable for very small teams, but it's deliberately limited: message history is cut to 90 days, integrations are capped at 10, audio/video calls are limited to 1-on-1, and workflows are restricted. Teams of 5+ doing real work typically hit these limits quickly. For teams that need Slack's UX at zero cost, Pumble or Discord are better free options.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Best Slack Alternatives (${year})`,
    description: `Top 10 alternatives to Slack for team communication and messaging.`,
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
      { "@type": "ListItem", position: 3, name: "Slack Alternatives", item: "https://aisotools.com/alternatives/slack" },
    ],
  },
];

export default function SlackAlternativesPage() {
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
          <span className="text-gray-300">Slack Alternatives</span>
        </nav>

        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-xl bg-purple-600/20 flex items-center justify-center text-2xl font-bold text-purple-400 mx-auto mb-6">
            S
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Best Slack Alternatives in {year}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Compare the {alternatives.length} best alternatives to Slack for team messaging, async communication, and business collaboration.
          </p>
          <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">
            <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
              Slack: Free (limited) → $12.50/user/mo
            </span>
            <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
              💬 Team Communication
            </span>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Why Look for Slack Alternatives?</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Slack redefined team communication, but its per-user pricing, 90-day message history limit on free plans, and notification overload have driven many teams to explore alternatives. Organizations already paying for Microsoft 365 or Google Workspace have equivalent tools included at no extra cost. Remote-first teams seek async-native tools. Regulated industries need self-hosted data control.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { reason: "💰 Pricing at Scale", detail: "Slack Pro costs $7.25/user/month — a team of 50 pays $4,350/year just for messaging. Microsoft Teams and Google Chat deliver comparable features at zero incremental cost for M365/Workspace subscribers." },
              { reason: "📜 90-Day History Limit", detail: "Slack's free plan deletes message history after 90 days. Teams lose institutional knowledge and searchable context from earlier conversations. Pumble and Discord offer unlimited free history." },
              { reason: "🔔 Notification Overload", detail: "Slack's real-time default creates always-on pressure. Teams in multiple channels face constant context switching and notification anxiety — async-first tools like Twist eliminate this by design." },
              { reason: "🔒 Data Sovereignty", detail: "Slack stores all data on US-based Salesforce servers. Regulated industries and international teams with GDPR or data residency requirements need self-hosted alternatives like Mattermost or Rocket.Chat." },
            ].map((item, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="font-semibold text-lg mb-2">{item.reason}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Quick Comparison: Slack vs Alternatives</h2>
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
          <h2 className="text-2xl font-bold mb-6">Detailed Look at Each Slack Alternative</h2>
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
                    <h4 className="font-semibold text-sm text-gray-300 mb-3 uppercase tracking-wide">Why Switch from Slack?</h4>
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
          <h2 className="text-2xl font-bold mb-6">Which Slack Alternative Should You Choose?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "For Microsoft 365 Orgs", items: [{ name: "Microsoft Teams", detail: "Free with your existing M365 subscription, Office app integration, enterprise compliance" }] },
              { title: "For Google Workspace Orgs", items: [{ name: "Google Chat", detail: "Free with Workspace, native Drive/Meet/Calendar integration" }] },
              { title: "For Data Sovereignty", items: [{ name: "Mattermost", detail: "FedRAMP-certified, self-hosted, government-grade security" }, { name: "Rocket.Chat", detail: "E2E encrypted, omnichannel, free Community Edition" }] },
              { title: "For Cost-Conscious Teams", items: [{ name: "Pumble", detail: "Free: unlimited users + unlimited message history" }, { name: "Flock", detail: "$4.50/user with video, polls, and reminders included" }] },
              { title: "For Async-First Remote Teams", items: [{ name: "Twist", detail: "Thread-first design eliminates real-time FOMO and notification overload" }] },
              { title: "For Developer Communities", items: [{ name: "Discord", detail: "Persistent voice channels, unlimited free history, meets devs where they already are" }] },
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
            <Link href="/alternatives/otter-ai" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-purple-500/50 transition">
              <h3 className="font-semibold mb-1">🎙️ Otter.ai Alternatives</h3>
              <p className="text-gray-400 text-sm">Best AI meeting note-takers</p>
            </Link>
            <Link href="/best-ai-collaboration-tools-2026" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-purple-500/50 transition">
              <h3 className="font-semibold mb-1">🤝 AI Collaboration Tools</h3>
              <p className="text-gray-400 text-sm">Best AI tools for team collaboration</p>
            </Link>
            <Link href="/alternatives/zoom" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-purple-500/50 transition">
              <h3 className="font-semibold mb-1">📹 Zoom Alternatives</h3>
              <p className="text-gray-400 text-sm">Best video conferencing tools compared</p>
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
