import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perplexity Pro Pricing 2026: Complete Guide to Plans & Costs",
  description:
    "Complete Perplexity Pro pricing guide for 2026. Compare Free, Pro ($20/mo), Enterprise Pro ($40/seat), and Enterprise Max ($325/seat) plans. AI search, research queries, and model access explained.",
  keywords: [
    "perplexity pro pricing",
    "perplexity cost",
    "how much does perplexity cost",
    "perplexity plans",
    "perplexity ai pricing",
    "perplexity enterprise pricing",
    "perplexity pro cost",
    "perplexity pricing 2026",
    "perplexity vs chatgpt pricing",
    "ai search pricing",
  ],
  openGraph: {
    title: "Perplexity Pro Pricing 2026: Complete Guide to Plans & Costs",
    description:
      "Transparent breakdown of Perplexity Pro pricing, research queries, model access, and enterprise features. Updated March 2026.",
    url: "https://aisotools.com/perplexity-pro-pricing",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/perplexity-pro-pricing",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does Perplexity Pro cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Perplexity Pro costs $20 per month or $200 per year (17% savings). Students with SheerID verification get Education Pro for $10/month. Enterprise Pro starts at $40/seat/month ($400 annually), and Enterprise Max is $325/seat/month ($3,250 annually).",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between Perplexity Pro and Enterprise Pro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pro is for individuals ($20/mo) with unlimited concise/Pro queries, 20 research queries/day, and 50 Labs queries/month. Enterprise Pro ($40/seat/mo) adds team collaboration, 500 research queries/day, SSO/SCIM, role-based permissions, SOC 2 compliance, and organizational file repositories with 15,000 file limit vs 50 on Pro.",
      },
    },
    {
      "@type": "Question",
      name: "How do Perplexity research queries work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Research queries use multi-step reasoning to synthesize information from 10+ sources with deep citations. Pro includes 20/day, Enterprise Pro includes 500/day, and Enterprise Max includes unlimited. Research queries reset daily and provide higher-quality answers than standard concise/Pro queries.",
      },
    },
    {
      "@type": "Question",
      name: "Does Perplexity offer a free plan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Perplexity offers a free plan with limited queries per day, basic AI models, and standard search capabilities. Free users don't get research queries, Labs access, video generation, or file uploads. Heavy users quickly hit rate limits and need Pro.",
      },
    },
    {
      "@type": "Question",
      name: "Can I choose which AI models Perplexity uses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Pro and Enterprise subscribers can choose from GPT-5, Claude 4.5 Sonnet, Gemini, and other models for their queries. Enterprise Max adds access to advanced models like o3-pro and Opus 4.1 Thinking. Free users get standard models only.",
      },
    },
    {
      "@type": "Question",
      name: "What are Perplexity Labs queries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Labs queries give access to experimental features and newer models before they reach general availability. Pro includes 50 Labs queries/month, Enterprise Pro includes 50/month, and Enterprise Max includes unlimited. Labs features vary over time.",
      },
    },
    {
      "@type": "Question",
      name: "Is Perplexity Pro worth it compared to ChatGPT Plus?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Perplexity Pro ($20/mo) and ChatGPT Plus ($20/mo) are the same price, but serve different use cases. Perplexity excels at research with real-time web access, citations, and multi-step reasoning queries. ChatGPT Plus is better for creative writing, coding, and extended conversation. Many users subscribe to both.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel Perplexity Pro anytime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can cancel your Perplexity Pro subscription anytime through your account settings. You'll retain access for the remainder of your current billing period. Monthly subscriptions can be canceled before the next billing date, and annual subscriptions are non-refundable but remain active until expiration.",
      },
    },
  ],
};

export default function PerplexityProPricing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 text-sm font-medium mb-4 inline-block"
          >
            ← Back to AISO Tools
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Perplexity Pro Pricing 2026: Complete Guide to Plans &amp; Costs
          </h1>
          <p className="text-xl text-gray-600">
            Updated March 2026 — Transparent breakdown of Perplexity Pro pricing, research queries, model access, and enterprise features.
          </p>
        </div>

        {/* TL;DR */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3">TL;DR</h2>
          <ul className="space-y-2 text-gray-800">
            <li>
              <strong>Free:</strong> Limited queries/day, basic models, no research queries
            </li>
            <li>
              <strong>Pro ($20/mo or $200/yr):</strong> Unlimited queries, 20 research queries/day, 50 Labs queries/month, 3 video generations, file uploads (50 files), 5-user collaboration
            </li>
            <li>
              <strong>Enterprise Pro ($40/seat/mo or $400/yr):</strong> All Pro features + 500 research queries/day, unlimited teammates, SSO/SCIM, 15,000 file limit, SOC 2, data retention, audit logging (50+ seats)
            </li>
            <li>
              <strong>Enterprise Max ($325/seat/mo or $3,250/yr):</strong> All Enterprise Pro features + unlimited research/Labs queries, o3-pro + Opus 4.1 Thinking access, 15 videos/month with audio, 15,000 files per Space + 10K user repository
            </li>
            <li>
              <strong>Education Pro ($10/mo):</strong> 50% off Pro with SheerID student/educator verification
            </li>
            <li>
              <strong>Best value:</strong> Pro at $200/year (saves $40), Enterprise Pro at $400/year (saves $80/seat)
            </li>
          </ul>
        </div>

        {/* Quick Comparison Table */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Quick Pricing Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Plan
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Monthly Price
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Annual Price
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Research Queries
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Best For
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    Free
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">$0</td>
                  <td className="px-6 py-4 text-sm text-gray-600">$0</td>
                  <td className="px-6 py-4 text-sm text-gray-600">None</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Casual testing
                  </td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    Pro
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">$20</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    $200 (save $40)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">20/day</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Individuals, researchers
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    Education Pro
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">$10</td>
                  <td className="px-6 py-4 text-sm text-gray-600">N/A</td>
                  <td className="px-6 py-4 text-sm text-gray-600">20/day</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Students, educators
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    Enterprise Pro
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    $40/seat
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    $400/seat (save $80)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">500/day</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Teams 5-50+ users
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    Enterprise Max
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    $325/seat
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    $3,250/seat (save $650)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Unlimited
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Power users, research teams
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Free Plan */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Free Plan ($0)
          </h2>
          <p className="text-gray-700 mb-4">
            Perplexity's free tier targets casual users who want to test conversational AI search without financial commitment. You'll get basic question-answering capabilities with real-time web access and citations, but expect heavy rate limiting during peak hours.
          </p>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              What's Included:
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Limited queries per day (throttled during high traffic)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Standard AI models (no GPT-5/Claude 4.5/o3)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Real-time web access with citations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Basic conversational search</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✗</span>
                <span>No research queries (multi-step reasoning)</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✗</span>
                <span>No Labs access (experimental features)</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✗</span>
                <span>No file/photo uploads</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✗</span>
                <span>No video generation</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✗</span>
                <span>No model selection</span>
              </li>
            </ul>
          </div>
          <p className="text-gray-700 mt-4">
            <strong>When to use Free:</strong> You're testing Perplexity for the first time, or need occasional quick searches. Heavy users will quickly hit rate limits and need Pro.
          </p>
        </div>

        {/* Pro Plan */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Perplexity Pro ($20/month or $200/year)
          </h2>
          <p className="text-gray-700 mb-4">
            Perplexity Pro is the sweet spot for individual researchers, students, professionals, and power users who need unlimited queries with access to the latest AI models. At $20/month (or $200/year for 17% savings), you get unlimited concise and Pro queries, daily research queries, Labs access, and file upload capabilities.
          </p>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              What's Included:
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Unlimited concise and Pro queries</strong> (no daily limits)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>20 research queries per day</strong> (multi-step reasoning with 10+ sources)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>50 Labs queries per month</strong> (experimental features, new models)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>3 video generations per month</strong> (no audio)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>File and photo uploads</strong> (50 files per space, max 50 MB each)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Collaboration with up to 5 users</strong> per private space</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Model selection:</strong> GPT-5, Claude 4.5 Sonnet, Gemini, and more</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>10x citation density</strong> in answers</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Extended access to research, image generation, Labs</span>
              </li>
            </ul>
          </div>
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Real-World Value Example
            </h3>
            <p className="text-gray-700">
              A market researcher using Perplexity Pro for competitive intelligence runs 15 research queries per day (450/month), synthesizing data from 10+ sources per query. Doing this manually with traditional search would take 20-30 hours/month. At $20/mo, Pro costs $0.04 per research query — a fraction of the time saved.
            </p>
          </div>
          <p className="text-gray-700 mt-4">
            <strong>When to choose Pro:</strong> You're a student, researcher, writer, consultant, or professional who relies on deep research daily. The 20 research queries/day limit handles most individual use cases. Teams need Enterprise Pro.
          </p>
        </div>

        {/* Education Pro */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Education Pro ($10/month)
          </h2>
          <p className="text-gray-700 mb-4">
            Students and educators with SheerID verification get Perplexity Pro at 50% off — just $10/month for all Pro features. This includes unlimited queries, 20 research queries/day, model selection, Labs access, and file uploads.
          </p>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Eligibility:
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Current students at accredited institutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Educators and faculty</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Requires SheerID verification (one-time process)</span>
              </li>
            </ul>
          </div>
          <p className="text-gray-700 mt-4">
            <strong>When to choose Education Pro:</strong> You're a student or educator who qualifies for academic pricing. This is the best value in the entire Perplexity lineup — $10/mo for the same features as $20/mo Pro.
          </p>
        </div>

        {/* Enterprise Pro */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Perplexity Enterprise Pro ($40/seat/month or $400/year)
          </h2>
          <p className="text-gray-700 mb-4">
            Enterprise Pro is built for teams conducting everyday research who need secure, collaborative, and scalable access to AI-powered search. At $40/seat/month (or $400/year for 17% savings), this plan includes all Pro features plus team collaboration, SSO/SCIM, SOC 2 compliance, and dramatically higher query limits.
          </p>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              What's Included (Beyond Pro):
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>500 research queries per day per user</strong> (25x more than Pro)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>50 Labs queries per month</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>5 video generations per month</strong> (no audio)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Unlimited teammates</strong> in private Spaces (vs 5 on Pro)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Up to 15,000 file uploads</strong> (500 per Space, 500 org repository, 5,000 user repository)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Answers from files and productivity apps</strong> (Notion, Google Drive, Slack, etc.)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Single Sign-On (SSO)</strong> and SCIM provisioning</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Role-based user management and permissions</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Data retention and audit logging</strong> (requires minimum 50 seats)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>SOC 2 Type II compliance</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>No training on customer data</strong> (privacy guarantee)</span>
              </li>
            </ul>
          </div>
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Real-World Value Example
            </h3>
            <p className="text-gray-700">
              A 10-person consulting firm spends $4,000/year on Enterprise Pro ($400/seat × 10). Each consultant runs ~50 research queries/day (1,500/month). Manual research would cost 50+ hours/month per person (500 hours total). At $100/hour average billable rate, Pro saves $50,000/month in research time — a 150x ROI.
            </p>
          </div>
          <p className="text-gray-700 mt-4">
            <strong>When to choose Enterprise Pro:</strong> You're a team of 5-50+ users needing collaborative research, SSO/SCIM integration, compliance requirements (SOC 2), or organizational file repositories. The 500 research queries/day limit handles heavy team usage.
          </p>
        </div>

        {/* Enterprise Max */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Perplexity Enterprise Max ($325/seat/month or $3,250/year)
          </h2>
          <p className="text-gray-700 mb-4">
            Enterprise Max is the highest tier, built for power users tackling highly complex research with unlimited query volumes and access to the most advanced AI models. At $325/seat/month (or $3,250/year for 17% savings), this plan includes all Enterprise Pro features plus unlimited research/Labs queries, advanced models like o3-pro and Opus 4.1 Thinking, and enhanced video generation.
          </p>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              What's Included (Beyond Enterprise Pro):
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Unlimited Labs and research queries</strong> (no daily limits)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Advanced AI models:</strong> o3-pro and Opus 4.1 Thinking</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>15 high-quality videos per month with audio</strong> (vs 5 without audio on Enterprise Pro)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Greater file upload limits:</strong> 5,000 files per Space, 10,000 files in user repository</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Comet Max assistant</strong> for advanced interaction</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Organization-wide data insights and logs</strong> (no 50-seat minimum)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>SOC 2 Type II compliance and no training on user data</span>
              </li>
            </ul>
          </div>
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Real-World Value Example
            </h3>
            <p className="text-gray-700">
              A 5-person research lab running 200+ deep research queries per day (100K+ per year) needs Enterprise Max at $16,250/year (5 seats × $3,250). The unlimited research queries handle their intensive workload without throttling. Comparable manual research with junior analysts ($60K/year salary) would cost $300K+ annually — saving $280K/year.
            </p>
          </div>
          <p className="text-gray-700 mt-4">
            <strong>When to choose Enterprise Max:</strong> You're a research team, investment firm, or consultancy running 50+ research queries/day per user, needing the most advanced models (o3-pro, Opus 4.1 Thinking), or requiring organization-wide data insights without 50-seat minimums. This is for power users only.
          </p>
        </div>

        {/* Hidden Costs */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Hidden Costs &amp; Gotchas
          </h2>
          <div className="space-y-4">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Research Query Limits
              </h3>
              <p className="text-gray-700">
                Pro caps at 20 research queries/day, Enterprise Pro at 500/day. If you need more, you must upgrade to Enterprise Max ($325/seat/mo) for unlimited. No option to buy additional research queries on lower tiers.
              </p>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                File Upload Limits
              </h3>
              <p className="text-gray-700">
                Pro caps at 50 files per space (50 MB each), Enterprise Pro at 15,000 total files, Enterprise Max at 15,000 per Space + 10K user repository. Heavy document users hit limits fast and need enterprise tiers.
              </p>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Video Generation Caps
              </h3>
              <p className="text-gray-700">
                Pro: 3 videos/month (no audio), Enterprise Pro: 5 videos/month (no audio), Enterprise Max: 15 videos/month (with audio). No option to purchase additional video generations — you must upgrade.
              </p>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Advanced Model Access
              </h3>
              <p className="text-gray-700">
                o3-pro and Opus 4.1 Thinking are exclusive to Enterprise Max. Pro and Enterprise Pro users cannot access these models even if willing to pay extra.
              </p>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Annual Plans Non-Refundable
              </h3>
              <p className="text-gray-700">
                Annual subscriptions ($200/yr Pro, $400/yr Enterprise Pro, $3,250/yr Enterprise Max) are non-refundable. If you cancel, you retain access until expiration but lose the remaining value.
              </p>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                SOC 2 Compliance Features
              </h3>
              <p className="text-gray-700">
                Data retention and audit logging on Enterprise Pro require a minimum of 50 seats. Smaller teams (5-49 seats) pay Enterprise Pro pricing but don't get these features. Enterprise Max removes this restriction.
              </p>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                API Costs Separate
              </h3>
              <p className="text-gray-700">
                Perplexity API pricing is separate from subscription plans. API costs range from $5/1K requests (Search API) to $0.409 per complex Deep Research query with reasoning. Heavy API users can spend $1,000s/month on top of subscriptions.
              </p>
            </div>
          </div>
        </div>

        {/* Real-World Cost Scenarios */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Real-World Cost Scenarios
          </h2>

          <div className="space-y-6">
            {/* Scenario 1 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Scenario 1: Graduate Student
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Use case:</strong> Literature reviews, thesis research, 10-15 research queries/day
                </p>
                <p>
                  <strong>Recommended plan:</strong> Education Pro ($10/mo)
                </p>
                <p>
                  <strong>Annual cost:</strong> $120/year
                </p>
                <p className="text-sm text-gray-600">
                  Education Pro handles the 20/day research query limit easily. The model selection (GPT-5, Claude 4.5) provides high-quality synthesis for academic research. File uploads support PDF paper analysis.
                </p>
              </div>
            </div>

            {/* Scenario 2 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Scenario 2: Freelance Consultant
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Use case:</strong> Client research, market analysis, competitive intelligence, 15-20 research queries/day
                </p>
                <p>
                  <strong>Recommended plan:</strong> Pro ($20/mo or $200/yr)
                </p>
                <p>
                  <strong>Annual cost:</strong> $200/year (annual billing)
                </p>
                <p className="text-sm text-gray-600">
                  Pro's 20 research queries/day perfectly matches heavy solo usage. The $200/year price (17% savings vs monthly) is tax-deductible as a business expense. Unlimited concise queries handle quick fact-checking.
                </p>
              </div>
            </div>

            {/* Scenario 3 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Scenario 3: 10-Person Marketing Agency
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Use case:</strong> Competitor research, trend monitoring, client reporting, 30-50 research queries/day per user, needs SSO
                </p>
                <p>
                  <strong>Recommended plan:</strong> Enterprise Pro ($40/seat/mo or $400/yr)
                </p>
                <p>
                  <strong>Annual cost:</strong> $48,000/year (10 seats × $400/mo × 12) or $4,000/year (annual billing)
                </p>
                <p className="text-sm text-gray-600">
                  Enterprise Pro's 500 research queries/day handles heavy team usage with room to spare. SSO/SCIM integrates with Google Workspace. Shared Spaces enable collaboration on client research. SOC 2 compliance meets enterprise client requirements (with 50+ seats).
                </p>
              </div>
            </div>

            {/* Scenario 4 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Scenario 4: 5-Person Research Lab
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Use case:</strong> Academic research, 100+ research queries/day per user, needs o3-pro and Opus 4.1 Thinking for complex reasoning
                </p>
                <p>
                  <strong>Recommended plan:</strong> Enterprise Max ($325/seat/mo or $3,250/yr)
                </p>
                <p>
                  <strong>Annual cost:</strong> $19,500/year (5 seats × $325/mo × 12) or $16,250/year (annual billing)
                </p>
                <p className="text-sm text-gray-600">
                  Only Enterprise Max offers unlimited research queries to handle 100+ queries/day per user. Access to o3-pro and Opus 4.1 Thinking provides the highest-quality reasoning for complex academic questions. 10,000-file user repository supports massive literature review projects.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* vs Competitors */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Perplexity vs Competitors
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Product
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Pricing
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Research Focus
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Web Access
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Best For
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-blue-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    Perplexity Pro
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    $20/mo
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Excellent (20 research queries/day)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Real-time with citations
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Research, fact-checking
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    ChatGPT Plus
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    $20/mo
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Good (GPT-5 with browsing)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Real-time (GPT-5 only)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Writing, coding, conversation
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    Claude Pro
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    $20/mo
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Excellent (long context)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Limited (no real-time)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Writing, analysis, coding
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    Gemini Advanced
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    $20/mo (Google One AI Premium)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Good (search integration)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Real-time with Google Search
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Google Workspace users
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    You.com Pro
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    $15/mo
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Good (multi-model)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Real-time with citations
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Budget-conscious researchers
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Key Differentiators
            </h3>
            <p className="text-gray-700 mb-2">
              <strong>Perplexity excels at:</strong> Research-focused queries with deep citations (10x citation density), multi-step reasoning (research queries), real-time web access across all queries, transparent source attribution, file upload analysis.
            </p>
            <p className="text-gray-700 mb-2">
              <strong>ChatGPT Plus excels at:</strong> Creative writing, coding assistance, extended conversation, custom GPTs, voice interaction, image generation (DALL-E).
            </p>
            <p className="text-gray-700">
              <strong>Many users subscribe to both</strong> — Perplexity for research and fact-checking, ChatGPT Plus for writing and coding. The use cases overlap minimally.
            </p>
          </div>
        </div>

        {/* Decision Framework */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Which Plan Should You Choose?
          </h2>
          <div className="space-y-4">
            <div className="bg-white border-l-4 border-blue-500 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Choose Free if:
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>You're testing Perplexity for the first time</li>
                <li>You need occasional quick searches (5-10 queries/day max)</li>
                <li>You don't need research queries or advanced models</li>
                <li>You're okay with rate limiting during peak hours</li>
              </ul>
            </div>

            <div className="bg-white border-l-4 border-green-500 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Choose Pro ($20/mo) if:
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>You're an individual researcher, student, writer, or consultant</li>
                <li>You run 10-20 research queries/day (most individuals)</li>
                <li>You need model selection (GPT-5, Claude 4.5, Gemini)</li>
                <li>You want file upload capabilities (50 files/space)</li>
                <li>You collaborate with 1-5 teammates occasionally</li>
              </ul>
              <p className="text-sm text-gray-600 mt-2 italic">
                <strong>Pro tip:</strong> Pay annually ($200/yr) to save $40/year (17% savings).
              </p>
            </div>

            <div className="bg-white border-l-4 border-green-500 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Choose Education Pro ($10/mo) if:
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>You're a student or educator at an accredited institution</li>
                <li>You can verify eligibility through SheerID</li>
                <li>You want all Pro features at 50% off</li>
              </ul>
              <p className="text-sm text-gray-600 mt-2 italic">
                <strong>Best value:</strong> This is the single best deal in Perplexity's lineup if you qualify.
              </p>
            </div>

            <div className="bg-white border-l-4 border-purple-500 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Choose Enterprise Pro ($40/seat/mo) if:
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>You're a team of 5-50+ users needing collaborative research</li>
                <li>You run 30-500 research queries/day per user</li>
                <li>You need SSO/SCIM integration with Google Workspace, Okta, etc.</li>
                <li>You require SOC 2 compliance for enterprise clients</li>
                <li>You need organizational file repositories (15,000 files)</li>
                <li>You want role-based permissions and audit logging (50+ seats)</li>
              </ul>
              <p className="text-sm text-gray-600 mt-2 italic">
                <strong>Pro tip:</strong> Pay annually ($400/seat/yr) to save $80/seat/year per user.
              </p>
            </div>

            <div className="bg-white border-l-4 border-red-500 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Choose Enterprise Max ($325/seat/mo) if:
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>You run 50-500+ research queries/day per user (unlimited needed)</li>
                <li>You need access to o3-pro and Opus 4.1 Thinking (most advanced models)</li>
                <li>You're a research lab, investment firm, or consultancy with intensive query volume</li>
                <li>You need organization-wide data insights without 50-seat minimums</li>
                <li>You want high-quality video generation with audio (15/month)</li>
              </ul>
              <p className="text-sm text-gray-600 mt-2 italic">
                <strong>Warning:</strong> This is expensive ($3,900/year per user). Only worth it for power users who genuinely need unlimited queries and advanced models.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Bottom Line
          </h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              <strong>For most individuals:</strong> Perplexity Pro at $20/mo (or $200/yr) is the sweet spot. You get unlimited queries, 20 research queries/day, model selection, and file uploads — everything needed for serious research work. Students and educators should grab Education Pro at $10/mo for 50% savings.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>For teams:</strong> Enterprise Pro at $40/seat/mo ($400/yr) adds team collaboration, 500 research queries/day, SSO/SCIM, and SOC 2 compliance. The 25x increase in research query limits justifies the 2x price for heavy team usage.
            </p>
            <p className="text-gray-700">
              <strong>For power users only:</strong> Enterprise Max at $325/seat/mo ($3,250/yr) is justified only if you genuinely need unlimited research queries (50+ per day consistently), access to o3-pro/Opus 4.1 Thinking, or organization-wide data insights. Most teams don't need this tier.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How much does Perplexity Pro cost?
              </h3>
              <p className="text-gray-700">
                Perplexity Pro costs <strong>$20 per month or $200 per year</strong> (17% savings). Students and educators with SheerID verification get Education Pro for <strong>$10/month</strong>. Enterprise Pro starts at <strong>$40/seat/month</strong> ($400 annually), and Enterprise Max is <strong>$325/seat/month</strong> ($3,250 annually).
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What's the difference between Perplexity Pro and Enterprise Pro?
              </h3>
              <p className="text-gray-700">
                Pro is for individuals ($20/mo) with unlimited concise/Pro queries, <strong>20 research queries/day</strong>, and 50 Labs queries/month. Enterprise Pro ($40/seat/mo) adds team collaboration, <strong>500 research queries/day</strong>, SSO/SCIM, role-based permissions, SOC 2 compliance, and organizational file repositories with <strong>15,000 file limit</strong> vs 50 on Pro.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How do Perplexity research queries work?
              </h3>
              <p className="text-gray-700">
                Research queries use multi-step reasoning to synthesize information from 10+ sources with deep citations. Pro includes <strong>20/day</strong>, Enterprise Pro includes <strong>500/day</strong>, and Enterprise Max includes <strong>unlimited</strong>. Research queries reset daily and provide higher-quality answers than standard concise/Pro queries.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Does Perplexity offer a free plan?
              </h3>
              <p className="text-gray-700">
                Yes, Perplexity offers a free plan with limited queries per day, basic AI models, and standard search capabilities. Free users don't get research queries, Labs access, video generation, or file uploads. Heavy users quickly hit rate limits and need Pro.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I choose which AI models Perplexity uses?
              </h3>
              <p className="text-gray-700">
                Yes, Pro and Enterprise subscribers can choose from <strong>GPT-5, Claude 4.5 Sonnet, Gemini</strong>, and other models for their queries. Enterprise Max adds access to advanced models like <strong>o3-pro and Opus 4.1 Thinking</strong>. Free users get standard models only.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What are Perplexity Labs queries?
              </h3>
              <p className="text-gray-700">
                Labs queries give access to experimental features and newer models before they reach general availability. Pro includes <strong>50 Labs queries/month</strong>, Enterprise Pro includes <strong>50/month</strong>, and Enterprise Max includes <strong>unlimited</strong>. Labs features vary over time.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is Perplexity Pro worth it compared to ChatGPT Plus?
              </h3>
              <p className="text-gray-700">
                Perplexity Pro ($20/mo) and ChatGPT Plus ($20/mo) are the same price, but serve different use cases. <strong>Perplexity excels at research</strong> with real-time web access, citations, and multi-step reasoning queries. <strong>ChatGPT Plus is better for creative writing, coding, and extended conversation.</strong> Many users subscribe to both.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I cancel Perplexity Pro anytime?
              </h3>
              <p className="text-gray-700">
                Yes, you can cancel your Perplexity Pro subscription anytime through your account settings. You'll retain access for the remainder of your current billing period. Monthly subscriptions can be canceled before the next billing date, and annual subscriptions are <strong>non-refundable</strong> but remain active until expiration.
              </p>
            </div>
          </div>
        </div>

        {/* Related Links */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Related AI Pricing Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/chatgpt-plus-pricing"
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-blue-600 mb-2">
                ChatGPT Plus Pricing 2026 →
              </h3>
              <p className="text-sm text-gray-600">
                Complete guide to ChatGPT Plus, Team, and Enterprise pricing
              </p>
            </Link>
            <Link
              href="/jasper-ai-pricing"
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-blue-600 mb-2">
                Jasper AI Pricing 2026 →
              </h3>
              <p className="text-sm text-gray-600">
                Pro vs Business pricing for AI writing tool
              </p>
            </Link>
            <Link
              href="/grammarly-pricing"
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-blue-600 mb-2">
                Grammarly Pricing 2026 →
              </h3>
              <p className="text-sm text-gray-600">
                Free, Premium, Business, and Enterprise plans explained
              </p>
            </Link>
            <Link
              href="/"
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-blue-600 mb-2">
                Browse All AI Tools →
              </h3>
              <p className="text-sm text-gray-600">
                3,700+ AI tools directory with pricing and comparisons
              </p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Upgrade Your Research?
          </h2>
          <p className="text-blue-100 mb-6">
            Try Perplexity Pro free for 7 days. Unlimited queries, 20 research queries/day, and access to GPT-5, Claude 4.5, and Gemini.
          </p>
          <a
            href="https://www.perplexity.ai/pro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Start Free Trial →
          </a>
        </div>
      </div>
    </div>
  );
}
