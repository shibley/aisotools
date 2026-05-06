import { tools } from "@/data/tools";
import { getAffiliateUrl } from "@/data/affiliate-links";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Tools for HR Professionals in 2026: Hiring, Onboarding & More",
  description: "Discover the best AI tools for HR professionals in 2026. From AI recruiting with Greenhouse to performance management with Lattice, find tools that save time and improve people operations.",
  keywords: ["best ai tools for hr", "ai tools for human resources", "ai recruiting tools", "ai hr software", "hr ai tools 2026"],
  openGraph: {
    title: "Best AI Tools for HR Professionals in 2026",
    description: "The ultimate guide to AI tools for HR. Compare Greenhouse, Lattice, Workday AI, and more.",
    url: "https://aisotools.com/blog/best-ai-tools-for-hr-professionals-2026",
    type: "article",
  },
  alternates: { canonical: "https://aisotools.com/blog/best-ai-tools-for-hr-professionals-2026" },
};

interface HRTool {
  name: string; slug: string; description: string; pricing: string;
  pricingDetails: string; strengths: string[]; bestFor: string; freeFeatures: string[]; rating: number;
}
interface HRCategory { category: string; icon: string; description: string; tools: HRTool[]; }

const toolCategories: HRCategory[] = [
  {
    category: "Recruiting & Talent Acquisition",
    icon: "🎯",
    description: "AI tools that automate sourcing, screen candidates faster, and reduce bias in hiring",
    tools: [
      {
        name: "Greenhouse",
        slug: "greenhouse",
        description: "Leading ATS with AI-powered candidate scoring, automated outreach, and structured interview kits. Greenhouse's AI de-duplicates candidates and suggests best-fit matches from your pipeline.",
        pricing: "Paid (Enterprise)",
        pricingDetails: "Custom pricing based on company size",
        strengths: ["AI candidate scoring and ranking", "Structured interview kits for consistency", "Diversity and inclusion reporting", "Automated rejection emails", "Integration with 450+ HR tools", "Pipeline analytics"],
        bestFor: "Mid-to-large companies doing high-volume recruiting with structured processes",
        freeFeatures: ["Demo available", "ROI calculator"],
        rating: 4.6,
      },
      {
        name: "ChatGPT",
        slug: "chatgpt",
        description: "HR professionals use ChatGPT to write job descriptions, interview questions, offer letters, and rejection emails in minutes. Saves 2-3 hours per open role on documentation alone.",
        pricing: "Freemium",
        pricingDetails: "Free tier, Plus $20/mo, Team $30/mo",
        strengths: ["Job description writing (inclusive language)", "Interview question banks by role", "Offer letter and rejection email drafts", "Onboarding checklist creation", "Policy document drafting", "Employee handbook sections"],
        bestFor: "Any HR professional needing faster drafts of recruiting and HR documents",
        freeFeatures: ["GPT-4o mini access", "Unlimited questions", "File uploads"],
        rating: 4.7,
      },
      {
        name: "Notion AI",
        slug: "notion-ai",
        description: "AI writing assistant built into Notion. HR teams use it to build structured job descriptions, maintain employee handbooks, create onboarding wikis, and organize talent pipelines.",
        pricing: "Freemium + AI add-on",
        pricingDetails: "Notion free tier, AI add-on $8/mo per member",
        strengths: ["AI-assisted job description creation", "Onboarding documentation", "HR wiki and handbook management", "Meeting notes and summaries", "Interview feedback templates", "Works where your team already works"],
        bestFor: "HR teams already using Notion for documentation and knowledge management",
        freeFeatures: ["Basic Notion workspace", "Limited AI generations"],
        rating: 4.5,
      },
    ],
  },
  {
    category: "Performance Management",
    icon: "📊",
    description: "AI-enhanced tools for goal setting, reviews, and employee development",
    tools: [
      {
        name: "Lattice",
        slug: "lattice",
        description: "People management platform with AI that helps write performance review talking points, summarize 360 feedback themes, and identify flight-risk employees from engagement signals.",
        pricing: "Paid",
        pricingDetails: "From $11/person/mo for Performance; AI features on higher tiers",
        strengths: ["AI-generated review talking points", "360 feedback theme summarization", "Engagement survey analysis", "Flight risk early warning signals", "OKR alignment tracking", "Compensation benchmarking"],
        bestFor: "Mid-size companies running structured performance review cycles and engagement programs",
        freeFeatures: ["14-day trial", "Template library"],
        rating: 4.5,
      },
      {
        name: "Claude",
        slug: "claude",
        description: "Used by HR professionals to write thoughtful, specific performance reviews, manager talking points, PIP documentation, and sensitive employee communication that requires nuance.",
        pricing: "Freemium",
        pricingDetails: "Free tier, Pro $20/mo",
        strengths: ["Nuanced performance review writing", "PIP documentation drafting", "Sensitive termination communication", "Manager training materials", "HR policy explanations (plain language)", "Compensation conversation scripts"],
        bestFor: "HR business partners writing sensitive employee documentation and communications",
        freeFeatures: ["Claude Sonnet access", "File uploads", "Projects"],
        rating: 4.7,
      },
    ],
  },
  {
    category: "Employee Experience & Engagement",
    icon: "❤️",
    description: "AI tools that help measure, understand, and improve how employees feel about their work",
    tools: [
      {
        name: "Culture Amp",
        slug: "culture-amp",
        description: "Employee experience platform with AI-powered sentiment analysis of survey responses. Identifies key themes in open text, flags manager effectiveness issues, and benchmarks against 6,500+ companies.",
        pricing: "Paid",
        pricingDetails: "Custom pricing based on company size",
        strengths: ["AI sentiment analysis of open-text responses", "Manager effectiveness scoring", "Benchmark comparisons (6,500+ companies)", "Action planning recommendations", "Predictive flight risk scores", "Science-backed survey design"],
        bestFor: "Companies that run regular engagement surveys and want AI to surface actionable insights",
        freeFeatures: ["Demo available", "Industry benchmark report"],
        rating: 4.6,
      },
      {
        name: "Otter.ai",
        slug: "otter-ai",
        description: "AI meeting transcription for all-hands meetings, 1:1s, exit interviews, and HR investigations. Creates searchable records with speaker identification and automatic summaries.",
        pricing: "Freemium",
        pricingDetails: "Free (300 min/mo), Pro $8.33/mo",
        strengths: ["Exit interview transcription and analysis", "All-hands meeting summaries", "1:1 coaching note capture", "HR investigation documentation", "Speaker identification", "Action item extraction"],
        bestFor: "HR teams that need documented records of interviews, investigations, and meetings",
        freeFeatures: ["300 minutes/month", "Speaker ID", "Zoom integration"],
        rating: 4.4,
      },
    ],
  },
  {
    category: "HR Operations & Compliance",
    icon: "📋",
    description: "AI tools that streamline HR admin, onboarding, and policy compliance",
    tools: [
      {
        name: "Workday AI",
        slug: "workday",
        description: "Enterprise HCM platform with embedded AI for payroll anomaly detection, skills gap analysis, attrition prediction, and automated compliance reporting across jurisdictions.",
        pricing: "Paid (Enterprise)",
        pricingDetails: "Enterprise licensing; custom pricing",
        strengths: ["Payroll anomaly and error detection", "Skills gap identification", "Attrition prediction models", "Automated compliance reporting", "Succession planning AI", "Benefits enrollment optimization"],
        bestFor: "Large enterprises needing integrated HRIS, payroll, and AI analytics in one platform",
        freeFeatures: ["Demo available", "ROI calculator"],
        rating: 4.5,
      },
      {
        name: "Rippling",
        slug: "rippling",
        description: "All-in-one HR, IT, and payroll platform with AI automation for onboarding workflows, equipment provisioning, and compliance training assignment based on role and location.",
        pricing: "Paid",
        pricingDetails: "From $8/person/mo + platform fee",
        strengths: ["Automated onboarding workflows", "IT provisioning tied to HR events", "Location-based compliance training assignment", "Benefits management", "Payroll automation", "Employee self-service portal"],
        bestFor: "Fast-growing companies that need HR, IT, and payroll automation in one system",
        freeFeatures: ["Demo available", "ROI calculator"],
        rating: 4.6,
      },
    ],
  },
];

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.3;
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-lg">{i < fullStars ? "⭐" : i === fullStars && hasHalf ? "⭐" : "☆"}</span>
      ))}
      <span className="ml-1 text-sm font-medium text-gray-600">{rating}/5</span>
    </div>
  );
}

export default function BestAIToolsForHR2026() {
  const totalTools = toolCategories.reduce((sum, cat) => sum + cat.tools.length, 0);
  return (
    <article className="mx-auto max-w-4xl px-4 py-8">
      <header className="mb-12">
        <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span>→</span>
          <span>AI Tools for HR Professionals</span>
        </div>
        <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
          Best AI Tools for HR Professionals in 2026
        </h1>
        <p className="mb-6 text-xl leading-relaxed text-gray-600">
          {totalTools} AI tools transforming human resources — from AI-powered recruiting and performance management to employee engagement and HR operations.
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          <span>📅 Updated May 2026</span><span>•</span>
          <span>⏱️ 15 min read</span><span>•</span>
          <span>👥 {totalTools} tools reviewed</span>
        </div>
      </header>

      <section className="mb-12 rounded-lg bg-green-50 p-6">
        <h2 className="mb-3 text-2xl font-bold text-gray-900">How AI Is Changing HR in 2026</h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          HR teams using AI are reducing time-to-hire by <strong>40%</strong> and cutting administrative work by <strong>3-5 hours per week</strong>. The most impactful use cases: AI-assisted job description writing, automated candidate screening, and AI that surfaces themes in engagement survey open text that would take weeks to manually analyze.
        </p>
        <p className="leading-relaxed text-gray-700">
          The HR professionals winning in 2026 use AI to handle the mechanical work (drafting, screening, scheduling) so they can focus on the human work: building culture, developing leaders, and navigating complex people situations.
        </p>
      </section>

      <nav className="mb-12 rounded-lg border border-gray-200 bg-gray-50 p-6">
        <h2 className="mb-4 text-lg font-bold text-gray-900">Jump to Category</h2>
        <div className="grid gap-2 sm:grid-cols-2">
          {toolCategories.map((cat) => (
            <a key={cat.category} href={`#${cat.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="flex items-center gap-2 rounded-md p-2 text-sm transition-colors hover:bg-white hover:shadow-sm">
              <span>{cat.icon}</span>
              <span className="text-blue-600 hover:underline">{cat.category}</span>
              <span className="text-gray-400">({cat.tools.length})</span>
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
                        <h3 className="text-2xl font-bold text-gray-900">
                          <Link href={toolUrl} className="hover:text-blue-600">{tool.name}</Link>
                        </h3>
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
                      <ul className="space-y-1">{tool.freeFeatures.map((f) => <li key={f} className="flex items-start gap-2 text-sm text-gray-700"><span className="mt-0.5 text-blue-500">★</span>{f}</li>)}</ul>
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
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">How can AI reduce bias in hiring?</h3>
            <p className="leading-relaxed text-gray-700">AI can help reduce bias by standardizing job descriptions (removing gendered language), creating structured interview kits with consistent scoring, and screening based on skills-based criteria rather than subjective impressions. However, AI trained on historical data can perpetuate biases — always audit AI hiring tools for disparate impact across protected groups.</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">What HR tasks are best suited for AI?</h3>
            <p className="leading-relaxed text-gray-700">AI excels at document drafting (job descriptions, offer letters, policies), data analysis (engagement survey themes, attrition patterns), workflow automation (onboarding checklists, compliance training assignment), and candidate screening. Tasks requiring empathy, judgment, and complex relationship management remain best handled by human HR professionals.</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">What free AI tools are useful for HR?</h3>
            <p className="leading-relaxed text-gray-700">ChatGPT's free tier handles job description writing, interview question generation, and policy drafts. Otter.ai's free tier (300 min/month) covers meeting and interview transcription. These two free tools alone can save HR professionals 3-5 hours per week on documentation.</p>
          </div>
        </div>
      </section>

      <section className="rounded-lg bg-gradient-to-r from-green-600 to-teal-600 p-8 text-white">
        <h2 className="mb-4 text-3xl font-bold">Build a People-First HR Tech Stack</h2>
        <p className="mb-6 text-lg leading-relaxed text-green-50">AI handles the administrative burden so you can focus on what matters — developing people and building culture.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/tools" className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-green-600 transition-colors hover:bg-gray-100">Explore All AI Tools →</Link>
          <Link href="/blog/best-ai-tools-for-recruiters-2026" className="inline-flex items-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-green-600">AI for Recruiters →</Link>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        headline: "Best AI Tools for HR Professionals in 2026",
        description: "Guide to AI tools for HR including Greenhouse, Lattice, Culture Amp, Workday AI, and more.",
        author: { "@type": "Organization", name: "AISOTools" },
        publisher: { "@type": "Organization", name: "AISOTools", logo: { "@type": "ImageObject", url: "https://aisotools.com/logo.png" } },
        datePublished: "2026-05-05", dateModified: "2026-05-05",
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://aisotools.com/blog/best-ai-tools-for-hr-professionals-2026" },
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "How can AI reduce bias in hiring?", acceptedAnswer: { "@type": "Answer", text: "AI helps by standardizing job descriptions, creating structured interview kits, and screening on skills-based criteria. Always audit AI tools for disparate impact." } },
          { "@type": "Question", name: "What free AI tools are useful for HR?", acceptedAnswer: { "@type": "Answer", text: "ChatGPT free tier for document drafting and Otter.ai free (300 min/mo) for transcription can save 3-5 hours per week." } },
        ],
      })}} />
    </article>
  );
}
