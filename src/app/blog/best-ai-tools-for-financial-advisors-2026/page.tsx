import { tools } from "@/data/tools";
import { getAffiliateUrl } from "@/data/affiliate-links";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Tools for Financial Advisors in 2026: Grow Your Practice",
  description: "Discover the best AI tools for financial advisors in 2026. From AI research with Bloomberg to client communication with Redtail CRM — serve more clients in less time.",
  keywords: ["best ai tools for financial advisors", "ai tools for financial advisors", "ai financial planning tools", "ai for wealth management", "financial advisor ai 2026"],
  openGraph: {
    title: "Best AI Tools for Financial Advisors in 2026",
    description: "Guide to AI tools for financial advisors. Compare Morningstar AI, Redtail, Holistiplan, and more.",
    url: "https://aisotools.com/blog/best-ai-tools-for-financial-advisors-2026",
    type: "article",
  },
  alternates: { canonical: "https://aisotools.com/blog/best-ai-tools-for-financial-advisors-2026" },
};

const toolCategories = [
  {
    category: "Research & Investment Analysis",
    icon: "📈",
    description: "AI tools that accelerate investment research, market analysis, and portfolio insights",
    tools: [
      { name: "Morningstar Direct AI", slug: "morningstar", description: "Morningstar's institutional research platform with AI-powered screening, analysis, and report generation. Ask natural language questions about fund performance, factor exposures, and portfolio attribution.", pricing: "Paid (Enterprise)", pricingDetails: "Enterprise pricing; contact for quote", strengths: ["Natural language fund and stock queries", "AI portfolio attribution analysis", "Peer comparison automation", "Market commentary generation", "ESG analysis and scoring", "Client-ready report generation"], bestFor: "RIAs and wealth managers doing deep investment due diligence and performance reporting", freeFeatures: ["Morningstar free tools (basic)", "Free articles and ratings"], rating: 4.6 },
      { name: "Perplexity", slug: "perplexity", description: "Financial advisors use Perplexity for quick market research, economic data lookups, regulatory changes, and client-ready summaries of complex financial topics — all with cited sources.", pricing: "Freemium", pricingDetails: "Free, Pro $20/mo", strengths: ["Cited answers for financial research", "Economic indicator summaries", "Regulatory update tracking", "Tax law change research", "Estate planning scenario research", "Client FAQ drafting"], bestFor: "Quick research on economic trends, regulatory changes, and financial planning topics", freeFeatures: ["Unlimited queries", "Source citations", "Web access"], rating: 4.5 },
      { name: "ChatGPT", slug: "chatgpt", description: "Financial advisors use ChatGPT to explain complex financial concepts in plain language for clients, generate meeting prep materials, write financial planning scenarios, and draft educational content.", pricing: "Freemium", pricingDetails: "Free tier, Plus $20/mo", strengths: ["Plain-language explanations for clients", "Financial planning scenario generation", "Meeting agenda and prep materials", "Retirement projection narrative writing", "Investment thesis documentation", "Client FAQ content"], bestFor: "Creating client-facing educational content and preparing for client meetings", freeFeatures: ["GPT-4o mini", "Unlimited use", "File uploads"], rating: 4.5 },
    ],
  },
  {
    category: "Client Communication & CRM",
    icon: "💼",
    description: "AI-enhanced platforms for managing client relationships and communications",
    tools: [
      { name: "Redtail CRM", slug: "redtail-crm", description: "The most popular CRM for financial advisors with AI-assisted workflow automation, task management, and client communication tracking. Integrates with most advisor tech stacks.", pricing: "Paid", pricingDetails: "$99/mo per database (up to 15 users)", strengths: ["Advisor-specific workflow automation", "Compliance-ready communication logging", "Integration with 100+ advisor tools", "AI-assisted meeting prep notes", "Household account grouping", "Birthday and review date reminders"], bestFor: "Independent advisors and RIAs who need a compliance-ready CRM built for financial services", freeFeatures: ["30-day free trial", "Demo available"], rating: 4.5 },
      { name: "Claude", slug: "claude", description: "Financial advisors use Claude for drafting personalized client letters, estate planning summaries, investment policy statements, and sensitive financial communications that require nuance and professionalism.", pricing: "Freemium", pricingDetails: "Free tier, Pro $20/mo", strengths: ["Client letter drafting (market commentary, reviews)", "Investment policy statement writing", "Estate planning summary documents", "Retirement income plan narratives", "Beneficiary change communication", "Sensitive financial situation communication"], bestFor: "Writing high-quality, personalized client communications and financial plan documents", freeFeatures: ["Claude Sonnet access", "Projects for client templates", "File uploads"], rating: 4.7 },
    ],
  },
  {
    category: "Financial Planning Tools",
    icon: "📋",
    description: "AI-enhanced tools for retirement planning, tax analysis, and comprehensive financial plans",
    tools: [
      { name: "Holistiplan", slug: "holistiplan", description: "AI-powered tax planning platform that analyzes client tax returns in seconds and generates a prioritized list of planning opportunities — Roth conversions, harvesting windows, bracket management, and more.", pricing: "Paid", pricingDetails: "$600/yr per advisor, firm pricing available", strengths: ["Tax return analysis in 90 seconds", "Roth conversion opportunity identification", "Tax bracket management recommendations", "Loss harvesting window alerts", "RMD planning analysis", "Client-ready tax planning report"], bestFor: "Financial advisors who want to deliver proactive tax planning without spending hours analyzing returns", freeFeatures: ["14-day free trial", "Demo available"], rating: 4.7 },
      { name: "Otter.ai", slug: "otter-ai", description: "AI meeting transcription for client meetings, discovery calls, and annual reviews. Creates compliant meeting notes with speaker identification and action items — essential for FINRA recordkeeping.", pricing: "Freemium", pricingDetails: "Free (300 min/mo), Pro $8.33/mo, Business $20/mo", strengths: ["Automatic client meeting transcription", "Speaker identification", "Action item extraction", "Compliant meeting notes for FINRA purposes", "Zoom, Teams integration", "Searchable meeting archive"], bestFor: "Advisors who need compliant meeting documentation and efficient note-taking for client meetings", freeFeatures: ["300 minutes/month", "Speaker ID", "Zoom integration"], rating: 4.4 },
    ],
  },
  {
    category: "Marketing & Business Development",
    icon: "📊",
    description: "AI tools that help advisors attract clients and grow their practice",
    tools: [
      { name: "Jasper", slug: "jasper", description: "AI content platform used by financial advisors to write compliant newsletters, LinkedIn posts, website content, and email campaigns — while maintaining a consistent professional voice.", pricing: "Paid", pricingDetails: "Creator $39/mo, Pro $59/mo", strengths: ["Compliant financial content templates", "Newsletter generation", "LinkedIn thought leadership posts", "Email campaign drafting", "Website copy (services, about, bio)", "Brand voice consistency"], bestFor: "Advisors building a content marketing presence and growing their practice through educational content", freeFeatures: ["7-day free trial"], rating: 4.4 },
    ],
  },
];

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.3;
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => <span key={i} className="text-lg">{i < fullStars ? "⭐" : i === fullStars && hasHalf ? "⭐" : "☆"}</span>)}
      <span className="ml-1 text-sm font-medium text-gray-600">{rating}/5</span>
    </div>
  );
}

export default function BestAIToolsForFinancialAdvisors2026() {
  const totalTools = toolCategories.reduce((sum, cat) => sum + cat.tools.length, 0);
  return (
    <article className="mx-auto max-w-4xl px-4 py-8">
      <header className="mb-12">
        <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/blog" className="hover:text-blue-600">Blog</Link><span>→</span><span>AI Tools for Financial Advisors</span>
        </div>
        <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">Best AI Tools for Financial Advisors in 2026</h1>
        <p className="mb-6 text-xl leading-relaxed text-gray-600">{totalTools} AI tools helping financial advisors serve more clients, deliver deeper analysis, and grow their practice without growing their team.</p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          <span>📅 Updated May 2026</span><span>•</span><span>⏱️ 15 min read</span><span>•</span><span>💰 {totalTools} tools reviewed</span>
        </div>
      </header>
      <section className="mb-12 rounded-lg bg-green-50 p-6">
        <h2 className="mb-3 text-2xl font-bold text-gray-900">How AI Is Changing Financial Advisory in 2026</h2>
        <p className="mb-4 leading-relaxed text-gray-700">Financial advisors using AI report spending <strong>3-5 fewer hours per week on administrative tasks</strong> — meeting prep, documentation, research, and client communication. That's 150-250 hours per year redirected to revenue-generating activities.</p>
        <p className="leading-relaxed text-gray-700">The most impactful use cases: AI-powered tax analysis (Holistiplan identifies Roth conversion opportunities in 90 seconds), AI meeting transcription (Otter.ai creates compliant meeting notes automatically), and AI writing assistants for personalized client communications at scale.</p>
      </section>
      <nav className="mb-12 rounded-lg border border-gray-200 bg-gray-50 p-6">
        <h2 className="mb-4 text-lg font-bold text-gray-900">Jump to Category</h2>
        <div className="grid gap-2 sm:grid-cols-2">
          {toolCategories.map((cat) => (
            <a key={cat.category} href={`#${cat.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="flex items-center gap-2 rounded-md p-2 text-sm transition-colors hover:bg-white hover:shadow-sm">
              <span>{cat.icon}</span><span className="text-blue-600 hover:underline">{cat.category}</span><span className="text-gray-400">({cat.tools.length})</span>
            </a>
          ))}
        </div>
      </nav>
      {toolCategories.map((category, catIndex) => (
        <section key={category.category} id={category.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")} className="mb-16">
          <div className="mb-8">
            <h2 className="mb-2 text-3xl font-bold text-gray-900"><span className="mr-2">{category.icon}</span>{category.category}</h2>
            <p className="text-lg text-gray-600">{category.description}</p>
          </div>
          <div className="space-y-8">
            {category.tools.map((tool, toolIndex) => {
              const globalIndex = toolCategories.slice(0, catIndex).reduce((sum, c) => sum + c.tools.length, 0) + toolIndex + 1;
              const toolData = tools.find((t) => t.slug === tool.slug || t.name.toLowerCase() === tool.name.toLowerCase());
              const affiliateUrl = getAffiliateUrl(tool.slug) || toolData?.affiliateUrl;
              const toolUrl = toolData ? `/tool/${toolData.slug}` : `/tools?q=${encodeURIComponent(tool.name)}`;
              return (
                <div key={tool.name} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="mb-1 flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">{globalIndex}</span>
                        <h3 className="text-2xl font-bold text-gray-900"><Link href={toolUrl} className="hover:text-blue-600">{tool.name}</Link></h3>
                      </div>
                      <StarRating rating={tool.rating} />
                    </div>
                    <div className="text-right">
                      <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">{tool.pricing}</span>
                      <p className="mt-1 text-xs text-gray-500">{tool.pricingDetails}</p>
                    </div>
                  </div>
                  <p className="mb-4 leading-relaxed text-gray-700">{tool.description}</p>
                  <div className="mb-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">Key Strengths</h4>
                      <ul className="space-y-1">{tool.strengths.map((s) => <li key={s} className="flex items-start gap-2 text-sm text-gray-700"><span className="mt-0.5 text-green-500">✓</span>{s}</li>)}</ul>
                    </div>
                    <div>
                      <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">Free Features</h4>
                      <ul className="space-y-1">{tool.freeFeatures.map((f: string) => <li key={f} className="flex items-start gap-2 text-sm text-gray-700"><span className="mt-0.5 text-blue-500">★</span>{f}</li>)}</ul>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 border-t border-gray-100 pt-4">
                    <span className="text-sm text-gray-500"><strong>Best for:</strong> {tool.bestFor}</span>
                    <div className="ml-auto flex gap-2">
                      {affiliateUrl && <a href={affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">Try {tool.name} →</a>}
                      <Link href={toolUrl} className="inline-flex items-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">Full Review</Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-5">
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">Is it compliant for financial advisors to use AI?</h3>
            <p className="leading-relaxed text-gray-700">Yes, with appropriate oversight. The key compliance considerations: never use AI to provide personalized investment advice without advisor review, ensure client data stays within compliant platforms, maintain records of AI-assisted communications as required by FINRA/SEC, and always review AI outputs before sharing with clients.</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">What AI tasks save financial advisors the most time?</h3>
            <p className="leading-relaxed text-gray-700">Meeting transcription and note-taking (Otter.ai saves 30-45 min per meeting), tax return analysis (Holistiplan reduces 2-hour analysis to 90 seconds), client email drafting (Claude saves 20-30 min per complex email), and meeting prep summaries (ChatGPT). Combined, these can save 5-10 hours per week.</p>
          </div>
        </div>
      </section>
      <section className="rounded-lg bg-gradient-to-r from-green-600 to-blue-600 p-8 text-white">
        <h2 className="mb-4 text-3xl font-bold">Serve More Clients Without Burning Out</h2>
        <p className="mb-6 text-lg leading-relaxed text-green-50">The best advisors in 2026 use AI to spend more time on high-value relationship work and less time on admin.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/tools" className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-green-600 transition-colors hover:bg-gray-100">Explore All AI Tools →</Link>
          <Link href="/blog/best-ai-tools-for-small-business-2026" className="inline-flex items-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-green-600">AI for Small Business →</Link>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Best AI Tools for Financial Advisors in 2026", description: "Guide to AI tools for financial advisors including Holistiplan, Redtail, Claude, and more.", author: { "@type": "Organization", name: "AISOTools" }, publisher: { "@type": "Organization", name: "AISOTools", logo: { "@type": "ImageObject", url: "https://aisotools.com/logo.png" } }, datePublished: "2026-05-05", dateModified: "2026-05-05", mainEntityOfPage: { "@type": "WebPage", "@id": "https://aisotools.com/blog/best-ai-tools-for-financial-advisors-2026" } })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "Is it compliant for financial advisors to use AI?", acceptedAnswer: { "@type": "Answer", text: "Yes with oversight. Never use AI for personalized investment advice without review, keep client data in compliant platforms, and maintain AI communication records." } }] })}} />
    </article>
  );
}
