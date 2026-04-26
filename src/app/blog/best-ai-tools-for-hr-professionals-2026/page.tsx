import Link from "next/link";
import type { Metadata } from "next";
import { getAffiliateUrl } from "@/data/affiliate-links";

export const metadata: Metadata = {
  title: "Best AI Tools for HR Professionals in 2026",
  description:
    "Discover the best AI tools for HR professionals in 2026. From AI recruiting software and resume screening to employee engagement, onboarding automation, and performance management — save 10+ hours per week on HR tasks.",
  keywords: [
    "best ai tools for hr",
    "ai tools for human resources",
    "ai hr software 2026",
    "ai recruiting tools",
    "ai resume screening",
    "ai for employee engagement",
    "ai onboarding software",
    "best ai for hr professionals",
    "hr automation ai",
    "ai performance management",
  ],
  openGraph: {
    title: "Best AI Tools for HR Professionals in 2026",
    description:
      "The complete guide to AI tools transforming HR in 2026. Compare top solutions for recruiting, resume screening, onboarding, employee engagement, and performance management.",
    url: "https://aisotools.com/blog/best-ai-tools-for-hr-professionals-2026",
    type: "article",
  },
  alternates: {
    canonical:
      "https://aisotools.com/blog/best-ai-tools-for-hr-professionals-2026",
  },
};

interface HRTool {
  name: string;
  slug: string;
  url: string;
  category: string;
  description: string;
  pricing: string;
  strengths: string[];
  bestFor: string;
  rating: number;
}

const hrToolsByCategory: {
  category: string;
  icon: string;
  description: string;
  tools: HRTool[];
}[] = [
  {
    category: "AI Recruiting & Talent Acquisition",
    icon: "🎯",
    description:
      "AI-powered tools that streamline sourcing, screening, and hiring — helping HR teams fill roles faster with less manual work.",
    tools: [
      {
        name: "Workable",
        slug: "workable",
        url: "https://www.workable.com",
        category: "Recruiting",
        description:
          "End-to-end recruiting platform with AI candidate sourcing, resume parsing, and interview scheduling. Workable's AI actively surfaces passive candidates from LinkedIn, GitHub, and 400M+ profile database — without manual sourcing.",
        pricing: "Paid",
        strengths: [
          "AI candidate sourcing from 400M+ profiles",
          "Automated resume screening and ranking",
          "Structured interview kits with AI suggestions",
          "Offer letter automation",
          "Analytics dashboard for time-to-hire metrics",
        ],
        bestFor: "Mid-size companies hiring 20+ roles/year",
        rating: 4.6,
      },
      {
        name: "Greenhouse",
        slug: "greenhouse",
        url: "https://www.greenhouse.com",
        category: "Recruiting",
        description:
          "Enterprise ATS with AI-powered structured hiring workflows. Greenhouse's strength is standardized, bias-reduced evaluation — every candidate gets scored on the same criteria, making hiring decisions more defensible.",
        pricing: "Paid",
        strengths: [
          "Structured interview scorecards",
          "Bias-reduction features (anonymized reviews)",
          "AI job description optimization",
          "HRIS integrations (Workday, BambooHR, etc.)",
          "Detailed pipeline analytics",
        ],
        bestFor: "Enterprise HR teams prioritizing structured, equitable hiring",
        rating: 4.5,
      },
      {
        name: "Paradox (Olivia)",
        slug: "paradox",
        url: "https://www.paradox.ai",
        category: "Recruiting",
        description:
          "AI recruiting assistant 'Olivia' handles high-volume screening via conversational AI. Candidates apply through a chatbot that screens, schedules, and communicates — reducing recruiter workload by 80% for hourly and frontline roles.",
        pricing: "Paid",
        strengths: [
          "Conversational AI screens candidates 24/7",
          "Auto-schedules interviews without recruiter involvement",
          "Supports text, WhatsApp, and web",
          "Strong for high-volume / hourly hiring",
          "Integrates with major ATS platforms",
        ],
        bestFor: "Retail, healthcare, and hospitality HR teams doing high-volume hiring",
        rating: 4.4,
      },
    ],
  },
  {
    category: "AI Resume Screening & Candidate Assessment",
    icon: "📄",
    description:
      "Tools that read, score, and rank resumes automatically — cutting the time spent manually reviewing applications by up to 90%.",
    tools: [
      {
        name: "HireVue",
        slug: "hirevue",
        url: "https://www.hirevue.com",
        category: "Assessment",
        description:
          "Video interviewing platform with AI-based structured assessment. HireVue analyzes candidate responses (word choice, structure, relevance) against validated job benchmarks — not facial recognition as often misreported.",
        pricing: "Paid",
        strengths: [
          "On-demand video interviews (candidates record at their convenience)",
          "AI game-based cognitive and situational assessments",
          "Structured scoring against validated competency benchmarks",
          "Reduces time-to-interview from days to hours",
          "Strong compliance and bias audit features",
        ],
        bestFor: "Enterprise teams conducting thousands of early-stage screens",
        rating: 4.3,
      },
      {
        name: "Findem",
        slug: "findem",
        url: "https://www.findem.ai",
        category: "Sourcing",
        description:
          "Attribute-based talent intelligence platform. Instead of keyword searching resumes, Findem understands attributes (e.g., 'worked at a startup that grew 3x', 'managed 15+ engineers') to surface candidates keyword searches miss.",
        pricing: "Paid",
        strengths: [
          "Attribute-based search beyond keywords",
          "Diversity sourcing pipeline analytics",
          "Talent market insights (competitive benchmarking)",
          "CRM to nurture passive candidates",
          "Integrates with Workday, Greenhouse, Lever",
        ],
        bestFor: "Technical recruiting and diversity hiring programs",
        rating: 4.4,
      },
    ],
  },
  {
    category: "AI for Employee Onboarding",
    icon: "🚀",
    description:
      "AI tools that personalize, automate, and track new hire onboarding — turning a paperwork nightmare into a smooth, structured experience.",
    tools: [
      {
        name: "BambooHR",
        slug: "bamboohr",
        url: "https://www.bamboohr.com",
        category: "Onboarding",
        description:
          "Popular SMB HRIS with AI-powered onboarding workflows. BambooHR automates new hire paperwork (e-signatures, I-9, W-4), sends automated check-ins, and tracks 30/60/90-day onboarding milestones.",
        pricing: "Paid",
        strengths: [
          "Automated paperwork and e-signature workflows",
          "Pre-boarding portal before day 1",
          "Preboarding task assignments for IT, managers, and employees",
          "30/60/90-day check-in automation",
          "Turnover and retention analytics",
        ],
        bestFor: "SMBs (10-500 employees) wanting an all-in-one HR platform",
        rating: 4.5,
      },
      {
        name: "Rippling",
        slug: "rippling",
        url: "https://www.rippling.com",
        category: "Onboarding",
        description:
          "Unified HR + IT + finance platform with fully automated onboarding. Rippling sets up employee accounts across 500+ apps, ships company laptops, and runs payroll — all triggered by one new hire workflow.",
        pricing: "Paid",
        strengths: [
          "Auto-provisions software accounts (Google, Slack, Notion, etc.)",
          "Device management for laptops and phones",
          "Global onboarding for international hires",
          "AI workflow builder for complex if/then sequences",
          "Unified HR + payroll + IT management",
        ],
        bestFor:
          "Tech-forward companies wanting zero manual IT provisioning on day 1",
        rating: 4.7,
      },
    ],
  },
  {
    category: "AI for Employee Engagement & Retention",
    icon: "💬",
    description:
      "Tools that measure, predict, and improve employee satisfaction — using AI to surface flight risks before people submit resignation letters.",
    tools: [
      {
        name: "Leapsome",
        slug: "leapsome",
        url: "https://www.leapsome.com",
        category: "Engagement",
        description:
          "AI-powered performance and engagement platform. Leapsome's 'Instant Feedback' loops, pulse surveys, and AI goal-setting help HR teams close the gap between annual reviews and real-time performance data.",
        pricing: "Paid",
        strengths: [
          "AI goal recommendations and OKR templates",
          "Continuous feedback cycles (not just annual reviews)",
          "Pulse surveys with sentiment AI analysis",
          "Manager coaching suggestions based on team data",
          "Learning and development module integration",
        ],
        bestFor: "Mid-size companies building a continuous feedback culture",
        rating: 4.6,
      },
      {
        name: "Culture Amp",
        slug: "culture-amp",
        url: "https://www.cultureamp.com",
        category: "Engagement",
        description:
          "Employee experience platform trusted by 6,500+ companies. Culture Amp's AI benchmarks your engagement scores against 3,500+ companies and surfaces which specific drivers are strongest or weakest — so HR knows exactly where to focus.",
        pricing: "Paid",
        strengths: [
          "Engagement surveys with AI-driven insights",
          "Predictive exit risk scoring",
          "Manager effectiveness feedback",
          "Diversity, equity, and inclusion dashboards",
          "Benchmarks against 3,500+ company database",
        ],
        bestFor:
          "Companies prioritizing people data as a strategic HR function",
        rating: 4.7,
      },
      {
        name: "Lattice",
        slug: "lattice",
        url: "https://www.lattice.com",
        category: "Performance",
        description:
          "Performance management platform with AI writing assistance for reviews. Lattice's AI helps managers write better, more specific performance reviews and flags reviews that are too vague, gender-biased, or inconsistent.",
        pricing: "Paid",
        strengths: [
          "AI review writing assistance and bias detection",
          "Goal and OKR tracking with check-in cadences",
          "Compensation management module",
          "HRIS integration with BambooHR, Workday, etc.",
          "Real-time engagement pulse features",
        ],
        bestFor: "HR teams modernizing performance review cycles",
        rating: 4.5,
      },
    ],
  },
  {
    category: "AI HR Chatbots & Employee Self-Service",
    icon: "🤖",
    description:
      "AI assistants that answer employee questions 24/7 — reducing HR ticket volume by 30-60% by handling policy lookups, time-off requests, and benefits questions automatically.",
    tools: [
      {
        name: "Leena AI",
        slug: "leena-ai",
        url: "https://leena.ai",
        category: "HR Chatbot",
        description:
          "AI-powered HR helpdesk that resolves employee queries instantly. Leena integrates with your HRIS and policy documents to answer questions about PTO, benefits, payroll, and company policies — without a ticket.",
        pricing: "Paid",
        strengths: [
          "Integrates with ServiceNow, Workday, SAP, BambooHR",
          "Resolves 70%+ of HR tickets automatically",
          "Multilingual support for global teams",
          "Onboarding chatbot for new hire questions",
          "Analytics on most-asked HR questions",
        ],
        bestFor: "Enterprise HR teams drowning in repetitive employee queries",
        rating: 4.3,
      },
      {
        name: "ChatGPT (Enterprise)",
        slug: "chatgpt",
        url: "https://chat.openai.com",
        category: "General AI",
        description:
          "Many HR teams use ChatGPT Enterprise for drafting job descriptions, writing performance review templates, creating onboarding materials, and generating HR policy documentation — a versatile productivity tool across the entire HR function.",
        pricing: "Paid",
        strengths: [
          "Job description drafting and optimization",
          "Policy document creation and revision",
          "Interview question generation by role",
          "Performance review template building",
          "Training material creation",
        ],
        bestFor: "HR teams without a dedicated AI tool wanting quick productivity wins",
        rating: 4.6,
      },
    ],
  },
];

const faqs = [
  {
    question: "What is the best AI tool for HR professionals?",
    answer:
      "The best AI tool depends on your use case. For recruiting, Workable and Greenhouse are top picks. For employee engagement and retention, Culture Amp and Leapsome lead the market. For all-in-one HRIS with strong onboarding, Rippling is the gold standard for tech companies. If you're a small HR team, BambooHR offers the best value.",
  },
  {
    question: "Can AI replace HR professionals?",
    answer:
      "No — AI automates the administrative and analytical work, but HR's core value (managing complex employee situations, building culture, navigating sensitive conversations, strategic workforce planning) remains deeply human. AI handles resume screening and ticket routing so HR professionals can focus on higher-value work.",
  },
  {
    question: "How much time can AI save HR teams?",
    answer:
      "Studies from Workable, Rippling, and Paradox AI show HR teams using AI tools reduce time-to-hire by 25-50%, cut resume screening time by up to 90%, and reduce routine HR ticket volume by 30-70%. A 5-person HR team can often reclaim 15-25 hours per week from administrative tasks.",
  },
  {
    question: "Are AI HR tools biased in candidate screening?",
    answer:
      "This is a real concern — early AI hiring tools trained on biased historical data replicated those biases. Modern platforms like Greenhouse, HireVue, and Findem have addressed this with structured, validated assessment criteria, anonymization features, and third-party bias audits. Always ask vendors for their bias testing methodology.",
  },
  {
    question: "What AI tools help with HR compliance?",
    answer:
      "For HR compliance, Rippling automates I-9 verification and multi-state tax compliance. BambooHR tracks required documentation and certifications. Greenhouse includes EEO reporting. For ongoing compliance monitoring, tools like Mineral (formerly ThinkHR) use AI to alert HR teams to changing employment law requirements.",
  },
];

export default function BestAIToolsForHRPage() {
  const totalTools = hrToolsByCategory.reduce(
    (sum, cat) => sum + cat.tools.length,
    0
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best AI Tools for HR Professionals in 2026",
    description:
      "Discover the best AI tools for HR professionals in 2026 — from AI recruiting software to employee engagement, onboarding automation, and performance management.",
    datePublished: "2026-04-05",
    dateModified: "2026-04-05",
    author: {
      "@type": "Organization",
      name: "AISO Tools",
    },
    publisher: {
      "@type": "Organization",
      name: "AISO Tools",
      url: "https://aisotools.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="min-h-screen bg-gray-950 text-gray-100">
        {/* Hero */}
        <div className="bg-gradient-to-b from-gray-900 to-gray-950 border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <Link href="/blog" className="hover:text-gray-200 transition-colors">
                Blog
              </Link>
              <span>→</span>
              <span>HR & People Ops</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Updated April 2026
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Best AI Tools for HR Professionals in 2026
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              HR teams are under pressure to hire faster, retain better, and
              do more with fewer people. AI is changing every part of the HR
              function — from candidate sourcing to exit interviews. This guide
              covers the {totalTools} best AI tools for HR professionals in
              2026, organized by use case.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                📋 {totalTools} tools reviewed
              </span>
              <span className="flex items-center gap-1">
                ⏱ 16 min read
              </span>
              <span className="flex items-center gap-1">
                🗓 Last updated: April 2026
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-10">
          {/* Quick summary */}
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 mb-10">
            <h2 className="text-lg font-semibold text-white mb-4">
              ⚡ Quick Picks: Best AI HR Tools by Use Case
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              {[
                { use: "Best for Recruiting", tool: "Workable", reason: "AI sourcing from 400M+ profiles" },
                { use: "Best for Onboarding", tool: "Rippling", reason: "Auto-provisions accounts + ships laptops" },
                { use: "Best for Engagement", tool: "Culture Amp", reason: "Benchmarks vs 3,500+ companies" },
                { use: "Best for Performance Reviews", tool: "Lattice", reason: "AI bias detection in reviews" },
                { use: "Best HR Chatbot", tool: "Leena AI", reason: "Resolves 70%+ of tickets automatically" },
                { use: "Best for SMBs", tool: "BambooHR", reason: "All-in-one HRIS, easy to use" },
              ].map((pick) => (
                <div
                  key={pick.use}
                  className="flex items-start gap-3 p-3 bg-gray-800 rounded-lg"
                >
                  <div>
                    <div className="text-gray-400 text-xs">{pick.use}</div>
                    <div className="font-semibold text-white">{pick.tool}</div>
                    <div className="text-gray-400 text-xs mt-0.5">
                      {pick.reason}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why AI for HR */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">
              Why HR Teams Are Turning to AI in 2026
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                The average HR professional spends 57% of their time on
                administrative tasks — answering the same policy questions,
                reviewing the same types of resumes, scheduling interviews,
                and chasing signatures on paperwork. AI tools are eliminating
                most of this.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                According to McKinsey, HR automation could save organizations
                $1.4 trillion annually by 2030. More practically, companies
                using AI recruiting tools are filling roles 2-4x faster than
                their competitors — a massive advantage in tight talent markets.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 my-6">
                {[
                  { stat: "90%", label: "Reduction in resume screening time with AI tools (Workable data)" },
                  { stat: "25-50%", label: "Faster time-to-hire for companies using AI recruiting" },
                  { stat: "70%+", label: "HR support tickets resolved automatically by AI chatbots" },
                ].map((s) => (
                  <div
                    key={s.stat}
                    className="bg-blue-600/10 border border-blue-600/30 rounded-xl p-4 text-center"
                  >
                    <div className="text-3xl font-bold text-blue-400 mb-1">
                      {s.stat}
                    </div>
                    <div className="text-sm text-gray-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Tool categories */}
          {hrToolsByCategory.map((category) => (
            <section key={category.category} className="mb-12">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{category.icon}</span>
                <h2 className="text-2xl font-bold text-white">
                  {category.category}
                </h2>
              </div>
              <p className="text-gray-400 mb-6">{category.description}</p>

              <div className="space-y-6">
                {category.tools.map((tool) => (
                  <div
                    key={tool.slug}
                    className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {tool.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded">
                            {tool.category}
                          </span>
                          <span className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded">
                            {tool.pricing}
                          </span>
                          <span className="text-xs text-yellow-400">
                            ★ {tool.rating}
                          </span>
                        </div>
                      </div>
                      <a
                        href={getAffiliateUrl(tool.slug) || tool.url}
                        target="_blank"
                        rel={`noopener noreferrer${getAffiliateUrl(tool.slug) ? " sponsored" : ""}`}
                        className="shrink-0 text-sm bg-blue-600 hover:bg-blue-500 text-white px-4 py-1.5 rounded-lg transition-colors"
                      >
                        {getAffiliateUrl(tool.slug) ? `Try ${tool.name} →` : "Visit →"}
                      </a>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {tool.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                          Key Features
                        </div>
                        <ul className="space-y-1">
                          {tool.strengths.map((s) => (
                            <li
                              key={s}
                              className="flex items-start gap-2 text-sm text-gray-300"
                            >
                              <span className="text-green-500 mt-0.5 shrink-0">
                                ✓
                              </span>
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                          Best For
                        </div>
                        <p className="text-sm text-gray-300">{tool.bestFor}</p>

                        <div className="mt-4">
                          <Link
                            href={`/tool/${tool.slug}`}
                            className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            View full profile →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Comparison table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Quick Comparison: Top AI HR Tools
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">
                      Tool
                    </th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">
                      Best For
                    </th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">
                      Pricing
                    </th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">
                      Rating
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {hrToolsByCategory.flatMap((c) =>
                    c.tools.map((tool) => (
                      <tr
                        key={tool.slug}
                        className="border-b border-gray-800 hover:bg-gray-900 transition-colors"
                      >
                        <td className="py-3 px-4">
                          <Link
                            href={`/tool/${tool.slug}`}
                            className="font-medium text-white hover:text-blue-400 transition-colors"
                          >
                            {tool.name}
                          </Link>
                        </td>
                        <td className="py-3 px-4 text-gray-400">
                          {tool.category}
                        </td>
                        <td className="py-3 px-4 text-gray-400">
                          {tool.pricing}
                        </td>
                        <td className="py-3 px-4 text-yellow-400">
                          ★ {tool.rating}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>

          {/* How to choose */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              How to Choose the Right AI HR Tool
            </h2>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                With dozens of AI HR tools competing for budget, choosing the
                right one depends on your company size, biggest pain points, and
                existing tech stack. Here&apos;s a framework:
              </p>
              <div className="space-y-3">
                {[
                  {
                    step: "1. Identify your biggest time drain",
                    detail:
                      "Is it recruiting, onboarding, answering employee questions, or performance reviews? Start with a single solution for your worst bottleneck before expanding.",
                  },
                  {
                    step: "2. Check HRIS compatibility",
                    detail:
                      "Most AI HR tools need to connect to your existing HRIS (Workday, BambooHR, ADP). Verify native integrations before buying — custom API work is expensive.",
                  },
                  {
                    step: "3. Evaluate bias controls",
                    detail:
                      "For any recruiting or screening tool, ask for documentation of their bias testing methodology, EEO compliance approach, and audit trails.",
                  },
                  {
                    step: "4. Calculate ROI before buying",
                    detail:
                      "If a recruiter earns $75K and spends 30% of time on screenable tasks, that's $22.5K of automatable labor per year. A $500/mo tool pays back in 3 weeks.",
                  },
                  {
                    step: "5. Pilot before committing",
                    detail:
                      "Most top HR AI tools offer 14-30 day trials. Run a real recruiting cycle or engagement survey before signing an annual contract.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="bg-gray-900 border border-gray-800 rounded-lg p-4"
                  >
                    <div className="font-semibold text-white mb-1">
                      {item.step}
                    </div>
                    <div className="text-sm text-gray-400">{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="bg-gray-900 border border-gray-700 rounded-xl p-5"
                >
                  <h3 className="font-semibold text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Related reading */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-white mb-4">
              Related Reading
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  href: "/blog/best-ai-tools-for-small-business-2026",
                  title: "Best AI Tools for Small Business 2026",
                  desc: "AI tools for operations, marketing, and growth",
                },
                {
                  href: "/blog/best-ai-customer-service-tools-2026",
                  title: "Best AI Customer Service Tools 2026",
                  desc: "AI chatbots, ticket routing, and support automation",
                },
                {
                  href: "/blog/best-ai-writing-tools-comparison-2026",
                  title: "Best AI Writing Tools 2026",
                  desc: "For job descriptions, policy docs, and communications",
                },
                {
                  href: "/blog/best-ai-data-analysis-tools-2026",
                  title: "Best AI Data Analysis Tools 2026",
                  desc: "For HR analytics and workforce reporting",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block bg-gray-900 border border-gray-700 rounded-xl p-4 hover:border-gray-500 transition-colors group"
                >
                  <div className="font-medium text-white group-hover:text-blue-400 transition-colors">
                    {link.title}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{link.desc}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-600/30 rounded-xl p-6 text-center">
            <h2 className="text-xl font-bold text-white mb-2">
              Explore More AI Tools
            </h2>
            <p className="text-gray-400 text-sm mb-4">
              Browse {">"}2,000 AI tools across 50+ categories. Find the right
              tool for any use case.
            </p>
            <Link
              href="/directory"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-lg font-medium transition-colors"
            >
              Browse AI Tool Directory →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
