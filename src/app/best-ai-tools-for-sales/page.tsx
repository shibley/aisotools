import { tools } from "@/data/tools";
import { getAffiliateUrl } from "@/data/affiliate-links";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Sales Tools 2026: 12 Tools to Close More Deals",
  description:
    "Compare the best AI sales tools for 2026. From conversation intelligence to AI email outreach, lead scoring, and CRM copilots. Find tools that help sales teams close more deals faster.",
  keywords: [
    "best AI sales tools",
    "AI for sales",
    "AI sales assistant",
    "AI lead scoring",
    "AI sales software",
    "conversation intelligence",
    "AI email outreach",
    "sales automation AI",
  ],
  openGraph: {
    title: "Best AI Sales Tools 2026: 12 Tools to Close More Deals",
    description:
      "Expert guide to AI tools for sales teams. Conversation intelligence, lead scoring, email outreach, and CRM copilots that drive revenue.",
    url: "https://aisotools.com/best-ai-tools-for-sales",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/best-ai-tools-for-sales",
  },
};

interface SalesTool {
  name: string;
  slug: string;
  category: string;
  description: string;
  pricing: string;
  pricingDetails: string;
  keyFeatures: string[];
  pros: string[];
  cons: string[];
  bestFor: string;
  rating: number;
  salesImpact: string;
}

const salesTools: SalesTool[] = [
  {
    name: "HubSpot Sales Hub AI",
    slug: "hubspot-ai",
    category: "CRM & Pipeline",
    description: "AI features embedded across HubSpot's Sales Hub — predictive lead scoring, AI email writing, deal forecasting, conversation intelligence, and automated follow-up sequences. The go-to for SMB and mid-market sales teams.",
    pricing: "Freemium",
    pricingDetails: "Free CRM with basic AI. Starter $45/mo, Pro $450/mo, Enterprise $1,200/mo",
    keyFeatures: ["Predictive lead scoring", "AI email writer", "Deal forecasting", "Conversation intelligence", "Automated sequences", "Meeting scheduler"],
    pros: ["AI deeply integrated into CRM workflow", "Free tier includes basic AI features", "Predictive scoring improves lead prioritization", "Largest app marketplace for integrations"],
    cons: ["Advanced AI only on expensive Pro/Enterprise", "Can feel bloated for small teams", "Data migration from other CRMs is painful"],
    bestFor: "Mid-market sales teams wanting CRM-native AI across the full pipeline",
    rating: 4.3,
    salesImpact: "Improves lead conversion by 15-25% through AI-powered scoring",
  },
  {
    name: "Salesforce Einstein",
    slug: "salesforce-einstein",
    category: "CRM & Pipeline",
    description: "Enterprise-grade AI layer for Salesforce — predictive lead and opportunity scoring, AI-generated emails, conversation intelligence, revenue forecasting, and automated data capture. The standard for Fortune 500 sales teams.",
    pricing: "Paid",
    pricingDetails: "Einstein AI included in some plans. Add-on starts at $50/user/mo",
    keyFeatures: ["Einstein Lead Scoring", "Opportunity Insights", "AI email generation", "Revenue Intelligence", "Conversation intelligence", "Activity capture"],
    pros: ["Most powerful enterprise sales AI available", "Deep CRM integration with complete data context", "Conversation intelligence coaches reps", "Scales to thousands of users"],
    cons: ["Requires Salesforce commitment ($150-300/user/mo base)", "Complex administration", "ROI depends on clean Salesforce data", "Einstein add-on pricing on top of base license"],
    bestFor: "Enterprise sales organizations (100+ reps) on Salesforce",
    rating: 4.3,
    salesImpact: "Increases forecast accuracy by 20-35% and rep productivity by 25%",
  },
  {
    name: "Gong",
    slug: "gong",
    category: "Conversation Intelligence",
    description: "The leading conversation intelligence platform — records, transcribes, and analyzes sales calls and meetings to reveal what top performers do differently. Gong's AI identifies winning behaviors, deal risks, and coaching opportunities across every customer interaction.",
    pricing: "Paid",
    pricingDetails: "Custom pricing — typically $100-150/user/mo. Annual contracts required",
    keyFeatures: ["Call recording & transcription", "Deal intelligence", "Coaching insights", "Market intelligence", "Pipeline analytics", "Team performance dashboards"],
    pros: ["Best-in-class conversation intelligence", "Deal risk identification saves revenue", "Coaching insights backed by data", "Market intelligence from aggregated conversations"],
    cons: ["Expensive — $100-150/user/mo", "Annual contracts only", "Requires consistent adoption across team", "Privacy concerns with recording"],
    bestFor: "B2B sales teams with 10+ reps wanting data-driven coaching and deal intelligence",
    rating: 4.6,
    salesImpact: "Increases win rates by 20-30% and reduces new rep ramp time by 40%",
  },
  {
    name: "Fireflies.ai",
    slug: "fireflies-ai",
    category: "Conversation Intelligence",
    description: "AI meeting recorder and conversation intelligence tool that captures, transcribes, and analyzes sales conversations across Zoom, Teams, Meet, and phone. More affordable alternative to Gong with strong CRM integration.",
    pricing: "Freemium",
    pricingDetails: "Free tier limited. Pro $18/user/mo, Business $29/user/mo, Enterprise $39/user/mo",
    keyFeatures: ["Auto-join meetings", "AI transcription", "Topic tracking", "CRM auto-logging", "Sentiment analysis", "Conversation analytics"],
    pros: ["80% cheaper than Gong for similar features", "Easy setup — auto-joins within minutes", "Good CRM integration (Salesforce, HubSpot)", "Generous free tier to evaluate"],
    cons: ["Less advanced analytics than Gong", "Transcription accuracy below enterprise-grade", "Deal intelligence less mature", "Customer support can be slow"],
    bestFor: "SMB sales teams wanting conversation intelligence at a fraction of Gong's price",
    rating: 4.1,
    salesImpact: "Improves coaching efficiency by 40% and saves 5 hours/rep/week on admin",
  },
  {
    name: "Apollo.io",
    slug: "apollo",
    category: "Prospecting & Outreach",
    description: "AI-powered sales intelligence and outreach platform with 275M+ contact database. Apollo combines prospect finding, email verification, AI email writing, and multi-channel sequences — making it a complete prospecting toolkit.",
    pricing: "Freemium",
    pricingDetails: "Free tier: 10K records/mo. Basic $49/user/mo, Pro $79/user/mo, Organization $119/user/mo",
    keyFeatures: ["275M+ contact database", "AI email writer", "Multi-channel sequences", "Email verification", "Intent data", "CRM sync"],
    pros: ["Massive prospect database at affordable pricing", "AI email writing saves hours on outreach", "Multi-channel sequences (email, LinkedIn, calls)", "Free tier generous enough to evaluate"],
    cons: ["Data accuracy varies by industry/geo", "Email deliverability requires warming", "Can overwhelm with too many contacts", "Some contacts outdated"],
    bestFor: "SDR teams and founders doing outbound prospecting at scale",
    rating: 4.3,
    salesImpact: "Increases qualified meetings booked by 50-100% through AI-targeted outreach",
  },
  {
    name: "Lavender AI",
    slug: "lavender-ai",
    category: "Email Coaching",
    description: "AI email coach that scores your sales emails in real-time and suggests improvements. Lavender analyzes tone, length, personalization, and readability — then rewrites sections to maximize reply rates. Used by SDR teams to improve cold email performance.",
    pricing: "Freemium",
    pricingDetails: "Free: 5 emails/mo. Starter $29/mo, Team $49/user/mo",
    keyFeatures: ["Real-time email scoring", "AI rewrite suggestions", "Personalization tips", "Reply rate prediction", "Team analytics", "Gmail/Outlook integration"],
    pros: ["Measurably improves reply rates (2-3x)", "Real-time coaching while writing", "Team analytics identify coaching opportunities", "Easy browser extension setup"],
    cons: ["Only useful for email-heavy roles", "Free tier extremely limited", "Suggestions can feel repetitive over time", "Less value for experienced email writers"],
    bestFor: "SDR teams wanting to improve cold email reply rates",
    rating: 4.2,
    salesImpact: "Increases email reply rates by 2-3x through AI-powered coaching",
  },
  {
    name: "Superhuman",
    slug: "superhuman-email",
    category: "Email Productivity",
    description: "AI-powered email client that helps sales professionals process email 2x faster. AI auto-triages inbox, drafts personalized replies, and summarizes long email threads — letting sellers spend more time selling and less time in inbox.",
    pricing: "Paid",
    pricingDetails: "Starter $25/mo, Business $35/mo per user",
    keyFeatures: ["AI auto-triage", "One-click AI replies", "Thread summarization", "Send scheduling", "Read receipts", "Keyboard shortcuts"],
    pros: ["Genuinely cuts email time in half", "AI auto-triage handles inbox overwhelm", "Read receipts useful for sales follow-up", "Beautiful, fast interface"],
    cons: ["$25-35/mo premium for email", "Gmail and Outlook only", "Learning curve for keyboard shortcuts"],
    bestFor: "Account executives and sales leaders managing high email volume",
    rating: 4.5,
    salesImpact: "Saves 4+ hours/week on email — time redirected to selling activities",
  },
  {
    name: "Clay",
    slug: "clay",
    category: "Data Enrichment",
    description: "AI-powered data enrichment and automation platform that combines 75+ data providers to build comprehensive prospect profiles. Clay automates research that would take SDRs hours — finding emails, enriching company data, and personalizing outreach at scale.",
    pricing: "Paid",
    pricingDetails: "Starter $149/mo, Explorer $349/mo, Pro $800/mo, Enterprise custom",
    keyFeatures: ["75+ data provider integrations", "AI research agent", "Waterfall enrichment", "Outreach personalization", "CRM integration", "Custom table workflows"],
    pros: ["Best data enrichment tool available — 75+ sources", "AI writes personalized emails from enriched data", "Waterfall approach maximizes data coverage", "Replaces multiple point tools"],
    cons: ["Expensive — starts at $149/mo", "Steep learning curve", "Credit-based pricing burns fast", "Overkill for small teams"],
    bestFor: "Growth teams and SDR orgs building sophisticated outbound motions",
    rating: 4.4,
    salesImpact: "Reduces prospect research time by 90% and improves email personalization quality",
  },
  {
    name: "Clari",
    slug: "clari",
    category: "Revenue Intelligence",
    description: "AI-powered revenue intelligence platform that provides complete pipeline visibility, AI-driven forecasting, and deal inspection. Clari captures signals across emails, meetings, and CRM to predict which deals will close and which are at risk.",
    pricing: "Paid",
    pricingDetails: "Custom pricing — typically $60-100/user/mo for enterprise",
    keyFeatures: ["AI revenue forecasting", "Pipeline inspection", "Deal risk scoring", "Activity intelligence", "Mutual action plans", "Revenue analytics"],
    pros: ["Most accurate AI revenue forecasting available", "Pipeline inspection catches at-risk deals early", "Activity intelligence doesn't rely on rep data entry", "Board-ready revenue reports"],
    cons: ["Enterprise-only pricing and sales process", "Requires CRM integration for full value", "Implementation can take 2-4 weeks", "ROI takes a quarter to prove out"],
    bestFor: "VP Sales and CROs needing accurate forecasting and pipeline management",
    rating: 4.4,
    salesImpact: "Improves forecast accuracy by 30-50% and reduces pipeline leakage by 20%",
  },
  {
    name: "Outreach",
    slug: "outreach",
    category: "Sales Engagement",
    description: "AI-powered sales engagement platform for multi-channel prospecting sequences. Outreach uses AI to optimize send times, suggest next-best actions, and prioritize accounts — making sales engagement data-driven rather than gut-driven.",
    pricing: "Paid",
    pricingDetails: "Custom pricing — typically $100-130/user/mo. Annual contracts",
    keyFeatures: ["Multi-channel sequences", "AI send-time optimization", "Account prioritization", "A/B testing", "Deal intelligence", "Team coaching"],
    pros: ["Most mature sales engagement platform", "AI optimizes every touchpoint", "Strong analytics for sequence optimization", "Large integration ecosystem"],
    cons: ["Expensive for SMBs", "Complex setup and administration", "Can feel bloated with features", "Annual contracts only"],
    bestFor: "Sales teams with 20+ reps running structured outbound programs",
    rating: 4.3,
    salesImpact: "Increases meetings booked by 30-50% through AI-optimized sequences",
  },
  {
    name: "ChatGPT",
    slug: "chatgpt",
    category: "General Sales AI",
    description: "OpenAI's AI assistant used by sales professionals for research, email drafting, proposal writing, objection handling prep, and competitive analysis. Not purpose-built for sales but versatile enough to augment every part of the sales workflow.",
    pricing: "Freemium",
    pricingDetails: "Free tier. Plus $20/mo, Team $25/user/mo, Enterprise custom",
    keyFeatures: ["Prospect research", "Email drafting", "Proposal writing", "Competitive analysis", "Meeting prep", "Custom GPTs"],
    pros: ["Most versatile AI — useful across all sales activities", "Custom GPTs automate repetitive research tasks", "Free tier sufficient for many use cases", "Handles data analysis and reporting"],
    cons: ["Not purpose-built for sales workflows", "No CRM integration", "Requires manual copy-paste for most tasks", "Can hallucinate company information"],
    bestFor: "Individual sellers wanting a general-purpose AI assistant",
    rating: 4.5,
    salesImpact: "Saves 5-10 hours/week on research, writing, and meeting preparation",
  },
  {
    name: "Regie.ai",
    slug: "regie-ai",
    category: "Content & Outreach",
    description: "AI platform that generates personalized sales content — emails, LinkedIn messages, call scripts, and sequences — trained on your company's messaging and top-performing content. Regie.ai automates the creative side of outbound.",
    pricing: "Paid",
    pricingDetails: "Custom pricing — typically $50-100/user/mo",
    keyFeatures: ["AI email sequences", "LinkedIn message generation", "Call script creation", "Content library", "Brand voice training", "A/B testing"],
    pros: ["Purpose-built for sales messaging", "Learns from your top-performing content", "Multi-channel content generation", "Saves SDRs hours on personalization"],
    cons: ["Newer platform — less proven than alternatives", "Pricing opaque until sales call", "Quality depends on training data quality", "Limited integration ecosystem"],
    bestFor: "SDR teams wanting AI-generated personalized outreach at scale",
    rating: 4.1,
    salesImpact: "Reduces time-to-personalize by 80% and improves reply rates by 30-50%",
  },
];

function getRatingColor(rating: number): string {
  if (rating >= 4.5) return "text-green-400";
  if (rating >= 4.0) return "text-blue-400";
  return "text-yellow-400";
}

function getToolUrl(slug: string): string {
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) return "#";
  return getAffiliateUrl(tool.slug) || tool.url;
}

export default function BestAISalesToolsPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <section className="relative py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/30 to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400 ring-1 ring-emerald-500/20">
            💰 Updated April 2026
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Best AI Sales Tools in 2026
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            AI tools that help sales teams prospect smarter, sell faster, and close more deals. 
            From conversation intelligence to AI email coaching — ranked by real sales impact.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16">
        <div className="space-y-10">
          {salesTools.map((tool, index) => (
            <article key={tool.slug} id={tool.slug} className="scroll-mt-24">
              <div className="rounded-xl bg-gray-900/50 p-6 ring-1 ring-gray-800 transition hover:ring-gray-700">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-1 flex items-center gap-3">
                      <span className="text-sm text-gray-500">#{index + 1}</span>
                      <h3 className="text-2xl font-bold">{tool.name}</h3>
                      <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs text-emerald-400 ring-1 ring-emerald-500/20">
                        {tool.category}
                      </span>
                    </div>
                    <p className="text-gray-400">{tool.description}</p>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${getRatingColor(tool.rating)}`}>{tool.rating}</div>
                    <div className="text-xs text-gray-500">/ 5.0</div>
                  </div>
                </div>

                <div className="mb-4 rounded-lg bg-emerald-500/5 p-3 ring-1 ring-emerald-500/20">
                  <p className="text-sm text-emerald-400">📈 Sales Impact: {tool.salesImpact}</p>
                </div>

                <div className="mb-4">
                  <span className="text-sm text-gray-400">Pricing: </span>
                  <span className="text-sm text-gray-300">{tool.pricingDetails}</span>
                </div>

                <div className="mb-4">
                  <h4 className="mb-2 text-sm font-semibold text-gray-300">Key Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {tool.keyFeatures.map((f) => (
                      <span key={f} className="rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300">{f}</span>
                    ))}
                  </div>
                </div>

                <div className="mb-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-green-400">✅ Strengths</h4>
                    <ul className="space-y-1 text-sm text-gray-300">
                      {tool.pros.map((p) => (<li key={p}>• {p}</li>))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-red-400">⚠️ Limitations</h4>
                    <ul className="space-y-1 text-sm text-gray-300">
                      {tool.cons.map((c) => (<li key={c}>• {c}</li>))}
                    </ul>
                  </div>
                </div>

                <p className="mb-4 text-sm text-gray-400">
                  <strong className="text-gray-300">Best for:</strong> {tool.bestFor}
                </p>

                <div className="flex gap-3">
                  <a href={getToolUrl(tool.slug)} target="_blank" rel="noopener noreferrer"
                    className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-500">
                    Try {tool.name} →
                  </a>
                  <Link href={`/tool/${tool.slug}`}
                    className="rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-gray-300 transition hover:bg-gray-700">
                    Full Review
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16">
        <h2 className="mb-6 text-2xl font-bold">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="group rounded-xl bg-gray-900/50 p-4 ring-1 ring-gray-800">
            <summary className="cursor-pointer font-medium">What are the best AI tools for sales teams?</summary>
            <p className="mt-3 text-gray-400">The best AI sales tools in 2026 include Gong for conversation intelligence, HubSpot AI for CRM-native intelligence, Apollo.io for prospecting, Clay for data enrichment, and Lavender for email coaching. The right tool depends on your team size, sales motion, and biggest bottleneck.</p>
          </details>
          <details className="group rounded-xl bg-gray-900/50 p-4 ring-1 ring-gray-800">
            <summary className="cursor-pointer font-medium">How does AI improve sales performance?</summary>
            <p className="mt-3 text-gray-400">AI improves sales performance in several key ways: conversation intelligence reveals winning behaviors (20-30% win rate increase), AI lead scoring prioritizes the right prospects (15-25% conversion improvement), AI email tools increase reply rates (2-3x), and revenue intelligence improves forecast accuracy (30-50%). Most sales teams see ROI within the first quarter.</p>
          </details>
          <details className="group rounded-xl bg-gray-900/50 p-4 ring-1 ring-gray-800">
            <summary className="cursor-pointer font-medium">What is the cheapest AI sales tool?</summary>
            <p className="mt-3 text-gray-400">The most affordable AI sales tools include ChatGPT (free tier or $20/mo), Apollo.io (free tier for 10K records), Fireflies.ai (free tier for transcription), and HubSpot (free CRM with basic AI). These provide significant value without enterprise pricing. For teams on a budget, combining ChatGPT + Apollo + Fireflies gives 80% of the value at 10% of the cost of enterprise stacks.</p>
          </details>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16">
        <h2 className="mb-4 text-lg font-semibold text-gray-400">Related Guides</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/best-ai-tools-for-business" className="rounded-lg bg-gray-800 px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Best AI for Business →</Link>
          <Link href="/best-ai-tools-for-marketing" className="rounded-lg bg-gray-800 px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Best AI Marketing Tools →</Link>
          <Link href="/best-ai-writing-tools" className="rounded-lg bg-gray-800 px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Best AI Writing Tools →</Link>
          <Link href="/best-ai-tools-for-productivity" className="rounded-lg bg-gray-800 px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Best AI Productivity Tools →</Link>
        </div>
      </section>
    </div>
  );
}
