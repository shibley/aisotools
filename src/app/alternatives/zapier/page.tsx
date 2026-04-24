import Link from "next/link";
import type { Metadata } from "next";

const year = 2026;

export const metadata: Metadata = {
  title: `Best Zapier Alternatives (${year}) — Top 10 Workflow Automation Tools | AISO Tools`,
  description: `Looking for Zapier alternatives? Compare the 10 best workflow automation platforms — from free open-source options to AI-native tools that don't cap you on tasks.`,
  alternates: {
    canonical: "https://aisotools.com/alternatives/zapier",
  },
  openGraph: {
    title: `Best Zapier Alternatives (${year}) — Top 10 Workflow Automation Tools`,
    description: `Compare the top 10 alternatives to Zapier for workflow automation — cheaper, more powerful, and AI-native options compared.`,
    url: "https://aisotools.com/alternatives/zapier",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Zapier Alternatives (${year})`,
    description: `Top 10 Zapier alternatives for workflow automation — free, open-source, and AI-native options compared.`,
  },
};

const alternatives = [
  {
    rank: 1,
    name: "Make (Make.com)",
    slug: "make",
    url: "https://make.com",
    pricing: "Freemium",
    pricingColor: "bg-green-500/10 text-green-400",
    freeTier: true,
    startingPrice: "Free (1,000 ops/mo) / Core $9/mo",
    tagline: "The most powerful visual automation platform — more flexibility than Zapier at lower cost",
    description:
      "Make (formerly Integromat) is the most widely used Zapier alternative, and for good reason: it's cheaper, more powerful, and handles complex logic that Zapier struggles with. Where Zapier charges per task, Make charges per operation — and its visual canvas lets you build multi-step branching workflows, data transformations, and error handling that would require expensive Zapier add-ons. If you've ever felt Zapier is too limiting or too expensive, Make is the natural next step.",
    features: [
      "Visual canvas with drag-and-drop node-based editor",
      "1,000 free operations per month (vs Zapier's 100 tasks)",
      "Complex logic: routers, filters, aggregators, iterators",
      "Data transformation with Make's formula language",
      "2,000+ app integrations",
      "Real-time execution monitoring and error handling",
    ],
    whySwitchReasons: [
      "Zapier's task limits are too expensive at scale — Make is 3-5x cheaper per operation",
      "Need multi-step branching logic, data transformations, or conditional routing",
      "Want a visual overview of your entire automation, not a linear step list",
    ],
    bestFor: "Teams and power users who outgrew Zapier's task limits or need more complex workflow logic.",
    compareUrl: "/compare/zapier-vs-make",
  },
  {
    rank: 2,
    name: "n8n",
    slug: "n8n",
    url: "https://n8n.io",
    pricing: "Freemium",
    pricingColor: "bg-green-500/10 text-green-400",
    freeTier: true,
    startingPrice: "Free (self-hosted) / Cloud $24/mo",
    tagline: "Open-source automation with native AI nodes — Zapier but self-hostable and AI-first",
    description:
      "n8n is the automation tool built for the AI era. With native nodes for OpenAI, Anthropic, Hugging Face, and LangChain, it's become the go-to for teams building AI-powered pipelines — content automation, customer support triage, lead enrichment, and RAG workflows. Unlike Zapier, n8n can be self-hosted on your own infrastructure for free, making it ideal for privacy-conscious teams or those handling sensitive data. The cloud version starts at $24/mo with no per-execution pricing.",
    features: [
      "Native AI nodes: OpenAI, Claude, Gemini, Hugging Face, LangChain",
      "Self-hostable on any cloud — no data leaves your infrastructure",
      "400+ integrations with code-level customization at any node",
      "JavaScript and Python execution inside workflow nodes",
      "Free forever when self-hosted",
      "Fair-code license (open source with commercial protections)",
    ],
    whySwitchReasons: [
      "Building AI-powered automations that need GPT, Claude, or custom LLM calls",
      "Need to self-host to comply with data residency or privacy requirements",
      "Want to write code inside workflow nodes for logic Zapier can't handle",
    ],
    bestFor: "Developers, technical teams, and AI builders who need code-level control and AI-native integrations.",
    compareUrl: "/compare/zapier-vs-n8n",
  },
  {
    rank: 3,
    name: "Pipedream",
    slug: "pipedream",
    url: "https://pipedream.com",
    pricing: "Freemium",
    pricingColor: "bg-green-500/10 text-green-400",
    freeTier: true,
    startingPrice: "Free (limited) / Basic $29/mo",
    tagline: "Developer-first automation with full Node.js execution at every step",
    description:
      "Pipedream is the automation platform built by developers, for developers. Every step in a Pipedream workflow is a real Node.js (or Python) function with full npm package support — so you're never blocked by what a 'connector' can or can't do. It's event-driven, triggers on HTTP webhooks, schedules, app events, or email, and the free tier is generous enough for personal projects and side builds. If you regularly hit Zapier's limitations by needing custom code, Pipedream eliminates that friction entirely.",
    features: [
      "Full Node.js (and Python) execution at every workflow step",
      "npm package support — use any library in your automation",
      "Event-driven triggers: webhooks, schedules, email, app events",
      "10,000 free invocations per month on free plan",
      "500+ pre-built app integrations with source code you can edit",
      "Real-time inspector for debugging workflow executions",
    ],
    whySwitchReasons: [
      "Regularly hit Zapier's limitations and need to write custom code",
      "Want to use npm packages or write full functions, not just field mappings",
      "Build developer tools, APIs, or webhooks that need real code execution",
    ],
    bestFor: "Software developers and technical teams who want automation power equivalent to writing custom scripts.",
    compareUrl: "/compare/zapier-vs-pipedream",
  },
  {
    rank: 4,
    name: "Bardeen",
    slug: "bardeen",
    url: "https://bardeen.ai",
    pricing: "Freemium",
    pricingColor: "bg-green-500/10 text-green-400",
    freeTier: true,
    startingPrice: "Free / Pro $10/mo",
    tagline: "AI-powered browser automation — automate anything visible on screen",
    description:
      "Bardeen takes a fundamentally different approach to automation: instead of API-to-API connections, it automates your browser directly. That means it can interact with any website — even ones without APIs — by scraping, clicking, and filling forms like a human would. Its AI Suggestions feature can auto-build workflows based on what you're doing on screen. For sales teams scraping LinkedIn, researchers pulling data from niche sites, or anyone who needs to automate a workflow that involves a website with no API, Bardeen is the tool Zapier simply can't replicate.",
    features: [
      "Browser automation: works on any website without an API",
      "AI-powered workflow suggestions based on screen context",
      "Data scraping, form filling, and click automation",
      "Connects browser actions with 100+ cloud apps",
      "Runs in the background as a Chrome extension",
      "No-code builder with drag-and-drop playbooks",
    ],
    whySwitchReasons: [
      "Need to automate workflows on websites that don't have APIs",
      "Sales or recruiting workflows involving LinkedIn, CRMs, or manual data entry",
      "Want AI to suggest and build automations based on your browsing context",
    ],
    bestFor: "Sales teams, recruiters, and researchers who need to automate browser-based workflows without code.",
    compareUrl: "/compare/zapier-vs-bardeen",
  },
  {
    rank: 5,
    name: "Activepieces",
    slug: "activepieces",
    url: "https://activepieces.com",
    pricing: "Freemium",
    pricingColor: "bg-green-500/10 text-green-400",
    freeTier: true,
    startingPrice: "Free (self-hosted) / Cloud $50/mo",
    tagline: "Open-source Zapier with a clean UI and growing app library",
    description:
      "Activepieces is the fastest-growing open-source Zapier alternative, built with a clean, modern UI that's nearly as approachable as Zapier itself. Where n8n leans technical, Activepieces is designed for non-technical users who still want the privacy and cost benefits of self-hosting. The self-hosted version is free forever with unlimited automations. The cloud version is more expensive than competitors but comes with full support. Its app library is growing rapidly with AI pieces (OpenAI, Anthropic, Stability AI) integrated natively.",
    features: [
      "Clean, Zapier-like UI — easy for non-technical teams",
      "Self-hostable for free with unlimited automations",
      "Branching, loops, and conditional logic built-in",
      "Native AI pieces: OpenAI, Anthropic, Stability AI",
      "300+ integrations and growing via open-source community",
      "Piece builder SDK for custom integrations",
    ],
    whySwitchReasons: [
      "Want Zapier's simplicity without the per-task pricing",
      "Need to self-host for data privacy with a non-technical team",
      "Looking for an open-source automation tool with a modern, clean UI",
    ],
    bestFor: "Non-technical teams who want self-hosted automation without the complexity of n8n.",
    compareUrl: "/compare/zapier-vs-activepieces",
  },
  {
    rank: 6,
    name: "Microsoft Power Automate",
    slug: null,
    url: "https://powerautomate.microsoft.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (Microsoft 365) / Per-user $15/mo",
    tagline: "The best Zapier alternative if your team runs on Microsoft 365",
    description:
      "If your team lives in Microsoft 365 — Outlook, Teams, SharePoint, OneDrive, Excel — Power Automate is the automation tool you should be using instead of Zapier. It's deeply integrated with the Microsoft ecosystem with hundreds of native connectors, AI Builder capabilities for processing PDFs and forms, and a desktop automation feature (Power Automate Desktop) for automating local Windows applications. The cloud version is free for Microsoft 365 users within certain limits, making it significantly cheaper than Zapier for Microsoft-heavy teams.",
    features: [
      "Free for Microsoft 365 users — no extra subscription needed",
      "Deep integration with Outlook, Teams, SharePoint, and OneDrive",
      "AI Builder: process forms, extract invoice data, classify text",
      "Power Automate Desktop for local Windows app automation (RPA)",
      "900+ connectors including all major enterprise apps",
      "Works inside Teams as a bot and notification system",
    ],
    whySwitchReasons: [
      "Your team already uses Microsoft 365 — it's included in your subscription",
      "Need to automate SharePoint, Teams, or other Microsoft-specific workflows",
      "Want RPA (desktop automation) in addition to cloud integrations",
    ],
    bestFor: "Enterprise teams and organizations already running Microsoft 365 who want automation without additional spend.",
    compareUrl: null,
  },
  {
    rank: 7,
    name: "IFTTT",
    slug: null,
    url: "https://ifttt.com",
    pricing: "Freemium",
    pricingColor: "bg-green-500/10 text-green-400",
    freeTier: true,
    startingPrice: "Free (2 applets) / Pro $2.99/mo",
    tagline: "The simplest automation tool for personal workflows and smart home",
    description:
      "IFTTT (If This Then That) is the original consumer automation platform, built for personal use cases: connecting your smart home devices, syncing social media posts, getting weather notifications, and automating daily routines. It's not trying to compete with Zapier for business workflows — it's the easiest tool for casual automations involving IoT devices, social media platforms, and personal productivity. At $2.99/mo for Pro, it's also the cheapest paid automation tool by far, making it perfect for individuals who just need a few reliable triggers.",
    features: [
      "The simplest UI of any automation platform — no learning curve",
      "Best smart home and IoT device integrations (Alexa, Google Home, Philips Hue, Nest)",
      "900+ services including all major social platforms",
      "Pro plan at $2.99/mo — cheapest paid automation available",
      "Mobile app for on-the-go automation management",
      "Location triggers, time triggers, and device state triggers",
    ],
    whySwitchReasons: [
      "Personal automations for smart home, social media, or daily routines",
      "Price-sensitive — Pro at $2.99/mo is 6x cheaper than Zapier Starter",
      "IoT device integration that Zapier doesn't support as deeply",
    ],
    bestFor: "Individuals and hobbyists who want simple personal automations or smart home integrations.",
    compareUrl: null,
  },
  {
    rank: 8,
    name: "Pabbly Connect",
    slug: null,
    url: "https://pabbly.com/connect",
    pricing: "Paid",
    pricingColor: "bg-purple-500/10 text-purple-400",
    freeTier: false,
    startingPrice: "Standard $19/mo (unlimited automations)",
    tagline: "Unlimited automations for a flat monthly fee — no per-task pricing ever",
    description:
      "Pabbly Connect's core value proposition is simple: unlimited automations for a flat monthly fee, forever. No per-task pricing, no task limits, no usage caps — just a fixed monthly subscription. At $19/mo for the Standard plan, it's one of the most cost-effective alternatives for high-volume automations. The app library is smaller than Zapier's but covers all major apps. It also offers a one-time lifetime deal periodically on AppSumo, making it a favorite among bootstrapped founders who want to eliminate recurring SaaS costs.",
    features: [
      "Unlimited automation tasks — no per-task or per-operation pricing",
      "Flat monthly fee that doesn't scale with usage",
      "1,000+ app integrations",
      "Multi-step automations with filters and formatters",
      "Re-execution of failed tasks at no extra cost",
      "24/7 automation running with instant triggers",
    ],
    whySwitchReasons: [
      "Zapier's per-task pricing is unpredictable and scales badly",
      "Run high-volume automations (10K+ tasks/mo) that would cost hundreds on Zapier",
      "Want predictable monthly costs regardless of automation volume",
    ],
    bestFor: "High-volume automation users and small businesses who want predictable pricing without per-task surprises.",
    compareUrl: null,
  },
  {
    rank: 9,
    name: "Workato",
    slug: null,
    url: "https://workato.com",
    pricing: "Paid",
    pricingColor: "bg-red-500/10 text-red-400",
    freeTier: false,
    startingPrice: "Custom enterprise pricing",
    tagline: "Enterprise-grade iPaaS for complex business process automation",
    description:
      "Workato is to Zapier what Salesforce is to HubSpot — a heavyweight enterprise integration platform built for IT teams and operations leaders. With Gartner recognition, SOC 2 Type II compliance, advanced governance features, and support for complex ERP integrations (SAP, Oracle, Workday), Workato handles automation use cases that Zapier simply wasn't designed for. It's significantly more expensive but comes with dedicated support, custom SLAs, and enterprise security features. If you've outgrown Zapier at the organizational level, Workato is the step up.",
    features: [
      "Enterprise-grade security: SOC 2, HIPAA, GDPR compliant",
      "ERP and enterprise system integrations (SAP, Oracle, Workday)",
      "Advanced governance: audit logs, role-based access, version control",
      "AI-powered recipe suggestions and auto-mapping",
      "400,000+ pre-built automation templates (recipes)",
      "Dedicated CSM and professional services",
    ],
    whySwitchReasons: [
      "Need compliance certifications (SOC 2, HIPAA) for enterprise workflows",
      "Integrating with ERP systems like SAP or Oracle that Zapier doesn't support well",
      "Require audit trails, version control, and governance for automation workflows",
    ],
    bestFor: "Enterprise IT teams and operations leaders automating complex cross-department or ERP-connected workflows.",
    compareUrl: null,
  },
  {
    rank: 10,
    name: "Tray.io",
    slug: null,
    url: "https://tray.io",
    pricing: "Paid",
    pricingColor: "bg-purple-500/10 text-purple-400",
    freeTier: false,
    startingPrice: "Custom pricing",
    tagline: "Low-code automation for technical teams building customer-facing integrations",
    description:
      "Tray.io occupies a unique niche: it's designed for product and engineering teams who want to embed automation capabilities into their own products, not just internal workflows. Its Universal Automation Cloud allows SaaS companies to build customer-facing integrations directly into their products — think 'Connect your CRM' features inside your own app. It's also a strong enterprise automation platform in its own right, with a powerful low-code builder, advanced data handling, and a connector SDK. If you're building integrations for your customers (not just for your team), Tray is worth evaluating.",
    features: [
      "Universal Automation Cloud for embedded product integrations",
      "Powerful low-code editor with full data manipulation",
      "Custom connector SDK for building proprietary integrations",
      "Enterprise-grade: SSO, audit logs, RBAC, multi-tenancy",
      "Real-time and scheduled trigger support",
      "Advanced branching, looping, and error handling",
    ],
    whySwitchReasons: [
      "Building customer-facing integrations embedded inside your own SaaS product",
      "Need a low-code builder that technical teams can extend with custom connectors",
      "Enterprise requirements: multi-tenancy, SSO, and compliance",
    ],
    bestFor: "SaaS companies building embedded integration features for their customers, and enterprise technical teams.",
    compareUrl: null,
  },
];

const faqs = [
  {
    question: "Why are people looking for Zapier alternatives in 2026?",
    answer:
      "The main reasons are cost at scale (Zapier's 2,000 task/mo plan costs $49/mo, and high-volume users can spend hundreds), task limits on lower tiers, and the rise of AI-native automation tools like n8n that offer LLM integrations Zapier lacks. Make.com and n8n have also matured significantly, offering more powerful workflow logic at a fraction of Zapier's price.",
  },
  {
    question: "What is the best free alternative to Zapier?",
    answer:
      "For free alternatives: n8n is free forever when self-hosted with unlimited automations. Make.com's free plan includes 1,000 operations per month (10x Zapier's 100 tasks). Pipedream offers 10,000 free invocations. IFTTT's free plan covers 2 applets for personal use. If you can self-host, n8n gives you the most power at zero cost.",
  },
  {
    question: "Is Make (Make.com) better than Zapier?",
    answer:
      "For most use cases, yes — Make offers more operations per dollar, a more powerful visual workflow editor, better support for complex logic (branching, data transformation, error handling), and a larger free tier. The main advantage Zapier has is a slightly larger app integration library and a simpler interface for pure no-code users. If you hit Zapier's limits or need anything beyond simple linear workflows, Make is worth the switch.",
  },
  {
    question: "Is n8n really free?",
    answer:
      "n8n is free when self-hosted under its fair-code license. You can deploy it on any cloud (AWS, Google Cloud, DigitalOcean, Railway) or your own server with no per-execution fees and no automation limits. The cloud-hosted version starts at $24/mo. For personal use or small teams, self-hosting on a cheap VPS ($5-10/mo) makes n8n effectively free.",
  },
  {
    question: "What is the best Zapier alternative for AI workflows?",
    answer:
      "n8n is the clear leader for AI-powered automations in 2026. It has native nodes for OpenAI, Anthropic, Hugging Face, and LangChain, making it easy to build pipelines that process documents with GPT, route support tickets via Claude, or enrich leads with AI-generated data. Make.com has also added AI capabilities but n8n's code-level customization makes it more flexible for complex AI pipelines.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Best Zapier Alternatives (${year})`,
    description: `Top 10 alternatives to Zapier for workflow automation.`,
    numberOfItems: alternatives.length,
    itemListElement: alternatives.map((alt, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: alt.name,
      url: alt.slug ? `https://aisotools.com/tool/${alt.slug}` : alt.url,
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
      { "@type": "ListItem", position: 3, name: "Zapier Alternatives", item: "https://aisotools.com/alternatives/zapier" },
    ],
  },
];

export default function ZapierAlternativesPage() {
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
          <span className="text-gray-300">Zapier Alternatives</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-xl bg-orange-600/20 flex items-center justify-center text-2xl font-bold text-orange-400 mx-auto mb-6">
            ⚡
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Best Zapier Alternatives in {year}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Compare the {alternatives.length} best alternatives to Zapier — from free open-source platforms to AI-native automation tools that don&apos;t charge per task.
          </p>
          <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">
            <span className="bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-sm font-medium">
              Zapier: Task-Based Pricing
            </span>
            <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
              ⚙️ Workflow Automation
            </span>
          </div>
        </div>

        {/* Why Switch */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Why Look for Zapier Alternatives?</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Zapier pioneered no-code automation and still has the largest integration library. But in 2026, the landscape has shifted. Here&apos;s why teams are looking elsewhere:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { reason: "💸 Task-Based Pricing Scales Badly", detail: "Zapier charges per task. The Starter plan ($19.99/mo) gives you 750 tasks — a single moderately active automation can burn through that in days. High-volume teams easily spend $500-1,000+/mo on Zapier." },
              { reason: "🔒 Limited Free Tier", detail: "Zapier's free plan only includes 100 tasks per month — barely enough for testing. Make.com gives 1,000 operations free, and n8n/Activepieces are free forever when self-hosted." },
              { reason: "🤖 AI Integration Gaps", detail: "n8n and Make have native AI nodes for GPT, Claude, and LangChain. Zapier's AI features feel bolted on by comparison. For teams building AI-powered automations, Zapier lags behind." },
              { reason: "⚙️ Limited Complex Logic", detail: "Zapier is great for simple 'if this, then that' triggers. For multi-branch routing, data transformation, looping over lists, or complex error handling, competitors like Make and n8n are significantly more capable." },
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
          <h2 className="text-2xl font-bold mb-6">Quick Comparison: Zapier vs Alternatives</h2>
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
                  <tr key={alt.name} className="border-t border-gray-800 hover:bg-gray-800/30 transition">
                    <td className="p-4 text-gray-500">{alt.rank}</td>
                    <td className="p-4">
                      <Link href={`#alt-${alt.rank}`} className="font-medium text-white hover:text-blue-400 transition">
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
          <h2 className="text-2xl font-bold mb-6">Detailed Look at Each Zapier Alternative</h2>
          <div className="space-y-8">
            {alternatives.map((alt) => (
              <div key={alt.rank} id={`alt-${alt.rank}`} className="bg-gray-900 border border-gray-800 rounded-xl p-6 sm:p-8 scroll-mt-20">
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

                <div className="bg-gradient-to-r from-orange-600/5 to-red-600/5 border border-orange-500/10 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-orange-400 mb-2">Why choose {alt.name} over Zapier?</h4>
                  <ul className="space-y-1">
                    {alt.whySwitchReasons.map((reason, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-orange-400 mt-0.5 flex-shrink-0">→</span>
                        {reason}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
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
                    <div>
                      <h4 className="font-semibold text-gray-300 mb-2">Pricing</h4>
                      <p className="text-gray-300 text-sm">{alt.startingPrice}</p>
                    </div>
                    <div>
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
                  {alt.slug && (
                    <Link href={`/tool/${alt.slug}`} className="text-blue-400 hover:text-blue-300 text-sm font-medium transition">
                      📋 Full Review →
                    </Link>
                  )}
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
            <Link href="/tool/n8n" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">⚙️ n8n</h3>
              <p className="text-gray-400 text-sm">Open-source automation with native AI nodes</p>
            </Link>
            <Link href="/tool/make" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">🔄 Make</h3>
              <p className="text-gray-400 text-sm">Visual automation platform with powerful logic</p>
            </Link>
            <Link href="/tool/pipedream" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">💻 Pipedream</h3>
              <p className="text-gray-400 text-sm">Developer-first automation with Node.js execution</p>
            </Link>
            <Link href="/use-case/ai-for-social-media-automation" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">📱 AI for Social Media Automation</h3>
              <p className="text-gray-400 text-sm">Best AI tools for automating social media workflows</p>
            </Link>
            <Link href="/use-case/ai-for-customer-support-automation" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">🤖 AI for Customer Support</h3>
              <p className="text-gray-400 text-sm">Automate customer support with AI</p>
            </Link>
            <Link href="/alternatives/notion-ai" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">📝 Notion AI Alternatives</h3>
              <p className="text-gray-400 text-sm">Best alternatives to Notion AI for productivity</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
