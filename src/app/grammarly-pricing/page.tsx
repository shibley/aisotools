import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grammarly Pricing 2026: Premium, Business & Enterprise Costs",
  description:
    "Complete Grammarly pricing guide for 2026. Compare Free, Premium ($12-30/mo), Business ($25-30/user/mo), and Enterprise plans. Real costs, features, and honest analysis.",
  keywords: [
    "grammarly pricing",
    "grammarly premium pricing",
    "grammarly business pricing",
    "grammarly cost",
    "how much is grammarly",
    "grammarly plans",
    "grammarly pricing 2026",
    "grammarly premium cost",
    "grammarly enterprise pricing",
  ],
  openGraph: {
    title: "Grammarly Pricing 2026: Premium, Business & Enterprise Costs",
    description:
      "Transparent breakdown of Grammarly pricing, plans, features, and real costs. Updated March 2026.",
    url: "https://aisotools.com/grammarly-pricing",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/grammarly-pricing",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does Grammarly Premium cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Grammarly Premium costs $30/month billed monthly, $12/month billed annually ($144/year), or $15/month billed quarterly ($45/quarter). The annual plan saves 60% compared to monthly billing.",
      },
    },
    {
      "@type": "Question",
      name: "Is Grammarly Premium worth it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Grammarly Premium is worth it if you write frequently—emails, reports, articles, or academic work. The clarity improvements, tone adjustments, and vocabulary suggestions save 15-30 minutes daily for active writers. At $12/month annually, it's one of the most affordable AI writing tools. However, if you only write occasionally, the free version may suffice.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between Grammarly Free and Premium?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Grammarly Free offers basic grammar, spelling, and punctuation checks. Premium adds: tone detection, clarity suggestions, vocabulary enhancements, formality level adjustments, plagiarism detection (100B pages), style guide enforcement, full-sentence rewrites, and unlimited premium suggestions. Premium catches 3-5x more issues than Free.",
      },
    },
    {
      "@type": "Question",
      name: "How much is Grammarly Business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Grammarly Business costs $25/user/month billed annually (3-9 members) or $30/user/month billed quarterly. For 10+ members, pricing starts at $15/user/month annually. Enterprise plans with custom pricing are available for larger teams requiring SSO, dedicated support, and advanced governance.",
      },
    },
    {
      "@type": "Question",
      name: "Does Grammarly offer a free trial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Grammarly offers a permanent free version with basic features (no trial needed). For Premium, you can get a 7-day free trial by signing up for a paid plan—cancel before the trial ends to avoid charges. Business plans typically include a 14-day trial for teams.",
      },
    },
    {
      "@type": "Question",
      name: "Can I share my Grammarly Premium account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, Grammarly Premium is licensed for individual use only. Sharing an account violates their Terms of Service and can result in account suspension. For teams, use Grammarly Business, which provides individual accounts for each member with centralized billing and management.",
      },
    },
    {
      "@type": "Question",
      name: "Does Grammarly work with Microsoft Word and Google Docs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Grammarly integrates with Microsoft Word (desktop add-in), Google Docs (browser extension), Microsoft Edge, Chrome, Safari, Firefox, and mobile apps (iOS/Android). It also works in Gmail, LinkedIn, Slack, Notion, and 500,000+ websites and apps via browser extension.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel Grammarly Premium anytime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can cancel Grammarly Premium at any time through your account settings. Monthly subscriptions can be canceled before the next billing date. Annual and quarterly plans are non-refundable after the 7-day trial period ends, but you retain access for the remainder of your billing period.",
      },
    },
  ],
};

export default function GrammarlyPricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">
              Grammarly Pricing
            </span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Grammarly Pricing 2026: Premium, Business & Enterprise Costs
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Complete breakdown of Grammarly's pricing, plans, features, and
              what you'll actually pay. From free to enterprise.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                Updated March 2026
              </span>
              <span className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                500M+ users worldwide
              </span>
            </div>
          </header>

          {/* Quick Summary */}
          <section className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Quick Summary
            </h2>
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  <strong>Free:</strong> $0 — Basic grammar, spelling, and
                  punctuation checks. Good for casual writing.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  <strong>Premium:</strong> $12/month (annual) or $30/month
                  (monthly) — Advanced grammar, tone, clarity, plagiarism
                  detection.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  <strong>Business:</strong> $25/user/month (annual, 3-9
                  members) — Team management, brand style guides, analytics.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  <strong>Enterprise:</strong> Custom pricing — SSO, advanced
                  governance, dedicated support, 100+ users.
                </span>
              </li>
            </ul>
          </section>

          {/* Compare Alternatives CTA */}
          <section className="mb-12 p-6 bg-gradient-to-r from-green-50 to-purple-50 rounded-lg border-2 border-green-200">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🔍</div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-3">
                  Not sure if Grammarly is right for you?
                </h2>
                <p className="text-gray-700 mb-4">
                  Compare Grammarly with other AI writing tools before you commit.
                  See side-by-side feature breakdowns, pricing differences, and
                  which tool fits your workflow best.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Link
                    href="/grammarly-alternatives"
                    className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg border-2 border-green-300 hover:border-green-500 hover:shadow-md transition-all"
                  >
                    <span className="text-xl">✍️</span>
                    <div>
                      <div className="font-semibold text-green-700">
                        Grammarly Alternatives
                      </div>
                      <div className="text-sm text-gray-600">
                        12 tools compared
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="/grammarly-vs-quillbot"
                    className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg border-2 border-purple-300 hover:border-purple-500 hover:shadow-md transition-all"
                  >
                    <span className="text-xl">📝</span>
                    <div>
                      <div className="font-semibold text-purple-700">
                        Grammarly vs QuillBot
                      </div>
                      <div className="text-sm text-gray-600">
                        Full comparison
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Table of Contents */}
          <nav className="bg-white border border-gray-200 rounded-lg p-6 mb-12">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Table of Contents
            </h2>
            <ol className="space-y-2 text-gray-700">
              <li>
                <a href="#plans" className="hover:text-blue-600">
                  1. Grammarly Pricing Plans Overview
                </a>
              </li>
              <li>
                <a href="#free" className="hover:text-blue-600">
                  2. Free Plan ($0)
                </a>
              </li>
              <li>
                <a href="#premium" className="hover:text-blue-600">
                  3. Premium Plan ($12-30/month)
                </a>
              </li>
              <li>
                <a href="#business" className="hover:text-blue-600">
                  4. Business Plan ($25-30/user/month)
                </a>
              </li>
              <li>
                <a href="#enterprise" className="hover:text-blue-600">
                  5. Enterprise Plan (Custom Pricing)
                </a>
              </li>
              <li>
                <a href="#comparison" className="hover:text-blue-600">
                  6. Plan Comparison Table
                </a>
              </li>
              <li>
                <a href="#real-costs" className="hover:text-blue-600">
                  7. What You'll Actually Pay
                </a>
              </li>
              <li>
                <a href="#hidden-costs" className="hover:text-blue-600">
                  8. Hidden Costs & Gotchas
                </a>
              </li>
              <li>
                <a href="#vs-competitors" className="hover:text-blue-600">
                  9. Grammarly vs Competitors
                </a>
              </li>
              <li>
                <a href="#free-vs-premium" className="hover:text-blue-600">
                  10. Free vs Premium: Is It Worth It?
                </a>
              </li>
              <li>
                <a href="#decision-guide" className="hover:text-blue-600">
                  11. Which Plan Should You Choose?
                </a>
              </li>
              <li>
                <a href="#saving-money" className="hover:text-blue-600">
                  12. How to Save Money
                </a>
              </li>
              <li>
                <a href="#trial" className="hover:text-blue-600">
                  13. Free Trial & Refund Policy
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-blue-600">
                  14. Frequently Asked Questions
                </a>
              </li>
            </ol>
          </nav>

          {/* 1. Grammarly Pricing Plans Overview */}
          <section id="plans" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              1. Grammarly Pricing Plans Overview
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Grammarly offers four pricing tiers designed for individuals,
              professionals, teams, and enterprises:
            </p>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Plan
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Monthly Cost
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Annual Cost
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Best For
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      Free
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                      $0
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                      $0
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Casual writers, students
                    </td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      Premium
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                      $30
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                      $144 ($12/mo)
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Professional writers, bloggers
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      Business
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                      $25-30/user
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                      $300-360/user/yr
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Teams 3-99 members
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      Enterprise
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                      Custom
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                      Custom
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      100+ users, SSO, compliance
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-gray-900">Key takeaway:</strong>{" "}
              Grammarly's annual Premium plan at $144/year ($12/month) offers
              60% savings compared to monthly billing. Business pricing scales
              with team size, and Enterprise requires custom quotes for
              organizations needing advanced governance and SSO.
            </p>
          </section>

          {/* 2. Free Plan */}
          <section id="free" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              2. Free Plan ($0)
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Grammarly's free plan provides basic writing assistance without
              requiring a credit card or subscription.
            </p>
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What You Get
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <strong>Grammar and spelling checks</strong> — Catches basic
                    errors in real-time
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <strong>Punctuation corrections</strong> — Comma splices,
                    run-ons, missing periods
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <strong>Conciseness suggestions</strong> — Remove wordy
                    phrases
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <strong>Tone detection</strong> — Basic insights into how
                    your writing sounds
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <strong>Browser extension</strong> — Works in Gmail, Docs,
                    LinkedIn, Slack, 500K+ sites
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What You Don't Get
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>❌ Advanced grammar and style suggestions</li>
                <li>❌ Clarity improvements and sentence rewrites</li>
                <li>❌ Vocabulary enhancements</li>
                <li>❌ Plagiarism detection</li>
                <li>❌ Formality level adjustments</li>
                <li>❌ Word choice improvements</li>
              </ul>
            </div>
          </section>

          {/* 3. Premium Plan */}
          <section id="premium" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              3. Premium Plan ($12-30/month)
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Grammarly Premium unlocks advanced writing assistance, tone
              adjustments, and plagiarism detection. The pricing varies
              significantly by billing cycle:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <div className="text-sm font-semibold text-gray-500 uppercase mb-2">
                  Monthly
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-4">
                  $30
                  <span className="text-lg font-normal text-gray-600">
                    /month
                  </span>
                </div>
                <div className="text-gray-700 mb-4">
                  Billed monthly at $30
                </div>
                <div className="text-sm text-gray-600">Cancel anytime</div>
              </div>
              <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
                <div className="text-sm font-semibold text-gray-500 uppercase mb-2">
                  Quarterly
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-4">
                  $20
                  <span className="text-lg font-normal text-gray-600">
                    /month
                  </span>
                </div>
                <div className="text-gray-700 mb-4">Billed quarterly at $60</div>
                <div className="text-sm text-green-600 font-medium">
                  Save 33%
                </div>
              </div>
              <div className="bg-blue-50 border-2 border-blue-600 rounded-lg p-6 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  BEST VALUE
                </div>
                <div className="text-sm font-semibold text-blue-600 uppercase mb-2">
                  Annual
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-4">
                  $12
                  <span className="text-lg font-normal text-gray-600">
                    /month
                  </span>
                </div>
                <div className="text-gray-700 mb-4">Billed annually at $144</div>
                <div className="text-sm text-green-600 font-medium">
                  Save 60%
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Premium Features
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Advanced Writing Feedback
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>Clarity improvements</strong> — Rewrite
                        confusing sentences
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>Tone adjustments</strong> — Match your
                        audience (formal, friendly, confident)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>Vocabulary enhancement</strong> — Suggest
                        stronger, more precise words
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>Full-sentence rewrites</strong> — One-click
                        sentence improvements
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Additional Tools
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>Plagiarism detection</strong> — Check against
                        100 billion web pages
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>Formality level</strong> — Adjust tone from
                        casual to formal
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>Word choice improvements</strong> — Context-aware
                        synonym suggestions
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>Unlimited premium suggestions</strong> — No
                        caps on advanced checks
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-gray-900">Bottom line:</strong> If you
              write more than a few times per week, the annual Premium plan at
              $144/year ($12/month) is one of the best values in AI writing
              tools. Premium catches 3-5× more issues than the free version.
            </p>
          </section>

          {/* 4. Business Plan */}
          <section id="business" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              4. Business Plan ($25-30/user/month)
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Grammarly Business is designed for teams that need centralized
              management, brand consistency, and analytics.
            </p>
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Pricing by Team Size
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-gray-900">
                      3-9 members
                    </div>
                    <div className="text-sm text-gray-600">
                      Annual billing only
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">
                      $25/user/mo
                    </div>
                    <div className="text-sm text-gray-600">$300/user/year</div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-gray-900">
                      3-9 members
                    </div>
                    <div className="text-sm text-gray-600">
                      Quarterly billing
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">
                      $30/user/mo
                    </div>
                    <div className="text-sm text-gray-600">$90/user/quarter</div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                  <div>
                    <div className="font-semibold text-gray-900">
                      10-99 members
                    </div>
                    <div className="text-sm text-gray-600">Volume discount</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">
                      $15-20/user/mo
                    </div>
                    <div className="text-sm text-gray-600">
                      Contact sales for exact pricing
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Business Features
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Everything in Premium, plus:
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>Style guides</strong> — Enforce brand voice
                        and terminology
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>Snippets library</strong> — Share approved
                        content templates
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>Team analytics</strong> — Track usage,
                        engagement, writing quality
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>Centralized billing</strong> — One invoice
                        for all seats
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Admin & Management
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>Admin dashboard</strong> — Manage users and
                        permissions
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>Role-based access</strong> — Member, admin,
                        and billing roles
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>SAML SSO (10+ seats)</strong> — Secure
                        single sign-on
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>Priority support</strong> — Email and chat
                        with faster response times
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-gray-900">When to upgrade:</strong>{" "}
              Business makes sense when you have 3+ people writing under the
              same brand voice. The style guide alone saves hours of editing
              time and ensures consistency across all communication.
            </p>
          </section>

          {/* 5. Enterprise Plan */}
          <section id="enterprise" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              5. Enterprise Plan (Custom Pricing)
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Grammarly Enterprise is designed for large organizations (100+
              users) requiring advanced security, compliance, and governance.
            </p>
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Enterprise Features
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Everything in Business, plus:
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>SAML SSO</strong> — Integrate with Okta, Azure
                        AD, OneLogin
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>Advanced data governance</strong> — Data
                        residency, encryption, retention policies
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>Compliance certifications</strong> — SOC 2
                        Type II, HIPAA, GDPR
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>Dedicated account manager</strong> —
                        Strategic planning and onboarding
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Advanced Capabilities
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>Custom integrations</strong> — API access,
                        Salesforce, Zendesk
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>Advanced analytics</strong> — Productivity
                        metrics, team benchmarks
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>Priority deployment support</strong> — White
                        glove onboarding
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>SLA guarantees</strong> — 99.95% uptime
                        commitment
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Estimated Enterprise Pricing
              </h3>
              <p className="text-gray-700 mb-4">
                Based on public information and competitor pricing, Grammarly
                Enterprise typically costs:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • <strong>100-500 users:</strong> $10-15/user/month
                  ($120K-$900K annually)
                </li>
                <li>
                  • <strong>500-1,000 users:</strong> $8-12/user/month
                  ($480K-$1.44M annually)
                </li>
                <li>
                  • <strong>1,000+ users:</strong> $6-10/user/month (volume
                  discounts)
                </li>
              </ul>
              <p className="text-gray-600 text-sm mt-4">
                Actual pricing depends on user count, contract length, and
                feature requirements. Contact Grammarly sales for a custom
                quote.
              </p>
            </div>
          </section>

          {/* 6. Plan Comparison Table */}
          <section id="comparison" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              6. Plan Comparison Table
            </h2>
            <div className="bg-white border border-gray-200 rounded-lg overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Feature
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Free
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider bg-blue-50">
                      Premium
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Business
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      Price
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 text-center">
                      $0
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 text-center bg-blue-50">
                      $12-30/mo
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 text-center">
                      $25-30/user
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 text-center">
                      Custom
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      Grammar & Spelling
                    </td>
                    <td className="px-6 py-4 text-center">✅</td>
                    <td className="px-6 py-4 text-center bg-blue-50">✅</td>
                    <td className="px-6 py-4 text-center">✅</td>
                    <td className="px-6 py-4 text-center">✅</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      Punctuation
                    </td>
                    <td className="px-6 py-4 text-center">✅</td>
                    <td className="px-6 py-4 text-center bg-blue-50">✅</td>
                    <td className="px-6 py-4 text-center">✅</td>
                    <td className="px-6 py-4 text-center">✅</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      Browser Extension
                    </td>
                    <td className="px-6 py-4 text-center">✅</td>
                    <td className="px-6 py-4 text-center bg-blue-50">✅</td>
                    <td className="px-6 py-4 text-center">✅</td>
                    <td className="px-6 py-4 text-center">✅</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      Clarity Suggestions
                    </td>
                    <td className="px-6 py-4 text-center">❌</td>
                    <td className="px-6 py-4 text-center bg-blue-50">✅</td>
                    <td className="px-6 py-4 text-center">✅</td>
                    <td className="px-6 py-4 text-center">✅</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      Tone Detection
                    </td>
                    <td className="px-6 py-4 text-center">Basic</td>
                    <td className="px-6 py-4 text-center bg-blue-50">
                      Advanced
                    </td>
                    <td className="px-6 py-4 text-center">Advanced</td>
                    <td className="px-6 py-4 text-center">Advanced</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      Vocabulary Enhancement
                    </td>
                    <td className="px-6 py-4 text-center">❌</td>
                    <td className="px-6 py-4 text-center bg-blue-50">✅</td>
                    <td className="px-6 py-4 text-center">✅</td>
                    <td className="px-6 py-4 text-center">✅</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      Full-Sentence Rewrites
                    </td>
                    <td className="px-6 py-4 text-center">❌</td>
                    <td className="px-6 py-4 text-center bg-blue-50">✅</td>
                    <td className="px-6 py-4 text-center">✅</td>
                    <td className="px-6 py-4 text-center">✅</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      Plagiarism Detection
                    </td>
                    <td className="px-6 py-4 text-center">❌</td>
                    <td className="px-6 py-4 text-center bg-blue-50">
                      100B pages
                    </td>
                    <td className="px-6 py-4 text-center">100B pages</td>
                    <td className="px-6 py-4 text-center">100B pages</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      Style Guide
                    </td>
                    <td className="px-6 py-4 text-center">❌</td>
                    <td className="px-6 py-4 text-center bg-blue-50">❌</td>
                    <td className="px-6 py-4 text-center">✅</td>
                    <td className="px-6 py-4 text-center">✅</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      Team Analytics
                    </td>
                    <td className="px-6 py-4 text-center">❌</td>
                    <td className="px-6 py-4 text-center bg-blue-50">❌</td>
                    <td className="px-6 py-4 text-center">✅</td>
                    <td className="px-6 py-4 text-center">✅</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      SAML SSO
                    </td>
                    <td className="px-6 py-4 text-center">❌</td>
                    <td className="px-6 py-4 text-center bg-blue-50">❌</td>
                    <td className="px-6 py-4 text-center">10+ seats</td>
                    <td className="px-6 py-4 text-center">✅</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      Dedicated Support
                    </td>
                    <td className="px-6 py-4 text-center">❌</td>
                    <td className="px-6 py-4 text-center bg-blue-50">❌</td>
                    <td className="px-6 py-4 text-center">❌</td>
                    <td className="px-6 py-4 text-center">✅</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 7. What You'll Actually Pay */}
          <section id="real-costs" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              7. What You'll Actually Pay (Real-World Scenarios)
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Here's what Grammarly costs for different use cases:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Freelance Writer
                </h3>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Premium (annual)</span>
                    <span className="font-semibold text-gray-900">
                      $144/year
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Per month</span>
                    <span>$12/month</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  <strong>ROI:</strong> If you write 20 hours/month, Grammarly
                  saves ~30 min/day in editing = 10 hours/month. At $50/hr,
                  that's $500/month value vs $12/month cost = 41× ROI.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  5-Person Marketing Team
                </h3>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-700">
                      Business (5 × $25/user/mo annual)
                    </span>
                    <span className="font-semibold text-gray-900">
                      $1,500/year
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Per month</span>
                    <span>$125/month</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  <strong>Why Business:</strong> Style guide ensures brand
                  consistency. Analytics show who needs writing help. Snippets
                  library saves 5+ hours/week.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  25-Person Startup
                </h3>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-700">
                      Business (25 × $15/user/mo annual)
                    </span>
                    <span className="font-semibold text-gray-900">
                      $4,500/year
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Per month</span>
                    <span>$375/month</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  <strong>Volume discount:</strong> 10+ seats get lower pricing
                  (~$15/user/month vs $25). Contact sales for exact quote.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  500-Employee Enterprise
                </h3>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-700">
                      Enterprise (~$10/user/mo estimate)
                    </span>
                    <span className="font-semibold text-gray-900">
                      ~$60K/year
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Per month</span>
                    <span>~$5,000/month</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  <strong>Why Enterprise:</strong> SAML SSO, HIPAA compliance,
                  dedicated account manager, advanced data governance, custom
                  integrations.
                </p>
              </div>
            </div>
          </section>

          {/* 8. Hidden Costs & Gotchas */}
          <section id="hidden-costs" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              8. Hidden Costs & Gotchas
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Grammarly is transparent about pricing, but here are a few things
              to watch for:
            </p>
            <div className="space-y-4">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  1. Annual Plans Are Non-Refundable
                </h3>
                <p className="text-gray-700">
                  After the 7-day trial ends, annual and quarterly plans are
                  <strong> non-refundable</strong>. If you cancel mid-year, you
                  won't get a prorated refund—though you retain access until
                  the end of your billing period. Monthly plans offer more
                  flexibility.
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  2. Account Sharing Violates Terms
                </h3>
                <p className="text-gray-700">
                  Grammarly Premium is licensed for <strong>individual use only</strong>.
                  Sharing credentials can result in account suspension. For
                  teams, you must purchase Business licenses.
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  3. Plagiarism Checks Aren't Unlimited
                </h3>
                <p className="text-gray-700">
                  While Premium includes plagiarism detection, there's a{" "}
                  <strong>fair-use limit</strong>. Grammarly doesn't publish
                  exact numbers, but excessive plagiarism checks may be
                  throttled. For high-volume academic or publishing use,
                  consider dedicated plagiarism tools like Turnitin or
                  Copyscape.
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  4. SSO Requires 10+ Seats
                </h3>
                <p className="text-gray-700">
                  SAML single sign-on is only available for Business teams with
                  <strong> 10 or more members</strong>. Smaller teams (3-9
                  users) must use email/password authentication.
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  5. No Mid-Tier Between Premium and Business
                </h3>
                <p className="text-gray-700">
                  If you need style guides or snippets but only have 1-2 users,
                  you're stuck paying $25-30/user/month (3-seat Business
                  minimum = $75-90/month) vs $12/month for Premium. There's no
                  "Premium Plus" tier for individuals needing advanced
                  features.
                </p>
              </div>
            </div>
          </section>

          {/* 9. Grammarly vs Competitors */}
          <section id="vs-competitors" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              9. Grammarly vs Competitors
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              How does Grammarly's pricing compare to other AI writing tools?
            </p>
            <div className="bg-white border border-gray-200 rounded-lg overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tool
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Free Plan
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Paid Plan
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Best For
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="bg-blue-50">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      Grammarly
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      ✅ Basic grammar & spelling
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      $12-30/mo (Premium)
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Everyday writing, emails, reports
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      ProWritingAid
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      ❌ 500 words/day limit
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      $10/mo or $120/year
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Authors, long-form content
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      QuillBot
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      ✅ Limited paraphrasing
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      $8.33/mo (annual)
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Students, paraphrasing, summaries
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      Wordtune
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      ✅ 10 rewrites/day
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      $9.99/mo (annual)
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Quick rewrites, tone shifts
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      Hemingway Editor
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      ✅ Web version free
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      $20 one-time (desktop app)
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Simplifying complex writing
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      ChatGPT Plus
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      ✅ GPT-4o mini
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      $20/mo
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Content generation, brainstorming
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-gray-700 leading-relaxed">
              <strong className="text-gray-900">Key differences:</strong>
            </p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>
                • <strong>Grammarly</strong> — Best all-around writing
                assistant with real-time feedback across 500K+ apps
              </li>
              <li>
                • <strong>ProWritingAid</strong> — Better for novelists and
                long-form content (style reports, pacing analysis)
              </li>
              <li>
                • <strong>QuillBot</strong> — Cheaper paraphrasing tool, but
                weaker grammar checks
              </li>
              <li>
                • <strong>ChatGPT Plus</strong> — More creative/generative, but
                requires manual prompting (no auto-correction)
              </li>
            </ul>
          </section>

          {/* 10. Free vs Premium: Is It Worth It? */}
          <section id="free-vs-premium" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              10. Free vs Premium: Is It Worth Upgrading?
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The million-dollar question: should you pay for Grammarly
              Premium?
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 border-2 border-green-600 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  ✅ Premium Is Worth It If You:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Write frequently (emails, reports, articles) — 5+ times
                      per week
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Need tone control for professional communication
                      (clients, executives)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Want to improve your writing quality (vocabulary,
                      clarity, conciseness)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Submit academic work or publish content (plagiarism
                      checks valuable)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Value time saved — Premium saves 15-30 min/day in editing
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  ❌ Stick with Free If You:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Only write occasionally (once or twice a week)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Basic grammar checks meet your needs (casual emails,
                      texts)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Already use another AI writing tool (ChatGPT, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Prefer manual editing over automated suggestions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Budget is tight (free version still very capable)</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-gray-800 leading-relaxed">
                <strong className="text-gray-900">Bottom line:</strong> If you
                write professionally (freelancer, marketer, content creator,
                student), Premium's $144/year is one of the best investments
                you can make. The clarity improvements and tone adjustments
                alone save hours per week. For casual writers, the free version
                is perfectly adequate.
              </p>
            </div>
          </section>

          {/* 11. Decision Guide */}
          <section id="decision-guide" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              11. Which Plan Should You Choose?
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Use this decision framework to pick the right Grammarly plan:
            </p>
            <div className="space-y-6">
              <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Choose Free If:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✅ You write casually (personal emails, social media)</li>
                  <li>✅ Basic grammar/spelling checks are enough</li>
                  <li>✅ You're testing Grammarly before committing</li>
                  <li>✅ Budget is $0</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-2 border-blue-600 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Choose Premium If:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✅ You write professionally (freelancer, blogger, student)</li>
                  <li>✅ You need tone control and clarity improvements</li>
                  <li>✅ You publish content or submit academic work</li>
                  <li>✅ You're a solo user (no team collaboration)</li>
                  <li>
                    ✅ Budget is $144/year ($12/month annual) or $30/month
                    monthly
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Choose Business If:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✅ You have a team (3-99 members)</li>
                  <li>✅ Brand consistency matters (style guides required)</li>
                  <li>✅ You need usage analytics and team insights</li>
                  <li>
                    ✅ Budget is $300-360/user/year ($25-30/user/month)
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Choose Enterprise If:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✅ You have 100+ users</li>
                  <li>✅ You require SAML SSO and advanced security</li>
                  <li>✅ Compliance is critical (HIPAA, GDPR, SOC 2)</li>
                  <li>✅ You need dedicated support and onboarding</li>
                  <li>✅ Budget is custom (contact sales for quote)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 12. Saving Money */}
          <section id="saving-money" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              12. How to Save Money on Grammarly
            </h2>
            <div className="space-y-4">
              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  1. Always Choose Annual Billing
                </h3>
                <p className="text-gray-700 mb-3">
                  Annual billing saves 60% on Premium ($144/year vs $360/year
                  monthly). Quarterly saves 33%.
                </p>
                <div className="text-sm text-gray-600">
                  Savings: <strong>$216/year</strong> (Premium annual vs
                  monthly)
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  2. Watch for Black Friday / Cyber Monday Sales
                </h3>
                <p className="text-gray-700 mb-3">
                  Grammarly typically offers 50-60% off Premium during November
                  sales (~$70-80/year vs $144 regular price).
                </p>
                <div className="text-sm text-gray-600">
                  Potential savings: <strong>$60-75/year</strong>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  3. Student Discounts
                </h3>
                <p className="text-gray-700 mb-3">
                  Grammarly occasionally offers student discounts (25-30% off)
                  through partnerships with student discount platforms like UNiDAYS.
                </p>
                <div className="text-sm text-gray-600">
                  Potential savings: <strong>~$40/year</strong>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  4. Ask for Volume Discounts (Business)
                </h3>
                <p className="text-gray-700 mb-3">
                  Teams with 10+ members can negotiate lower per-seat pricing
                  ($15-20/user/month vs $25-30 standard). Always ask sales for
                  a discount.
                </p>
                <div className="text-sm text-gray-600">
                  Potential savings:{" "}
                  <strong>$1,200-1,800/year (10-person team)</strong>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  5. Alternatives for Budget-Conscious Users
                </h3>
                <p className="text-gray-700 mb-3">
                  If Grammarly Premium is too expensive:
                </p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <strong>QuillBot Premium</strong> — $8.33/mo annually (paraphrasing + grammar)</li>
                  <li>• <strong>ProWritingAid</strong> — $10/mo or $120/year (better for long-form)</li>
                  <li>• <strong>Wordtune</strong> — $9.99/mo (rewriting + tone)</li>
                  <li>• <strong>LanguageTool</strong> — Free tier generous, Premium $5.99/mo</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 13. Trial & Refund */}
          <section id="trial" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              13. Free Trial & Refund Policy
            </h2>
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Free Trial Details
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <strong>Premium:</strong> 7-day free trial — full access to
                    all Premium features
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <strong>Business:</strong> 14-day free trial — test team
                    features and style guides
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Credit card required — automatically charged after trial
                    unless you cancel
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Cancel anytime during trial — no charges if you cancel
                    before trial ends
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Refund Policy
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  ⚠️ <strong>7-day window:</strong> Refunds available only
                  within 7 days of purchase
                </li>
                <li>
                  ⚠️ <strong>Annual/quarterly plans:</strong> Non-refundable
                  after 7 days
                </li>
                <li>
                  ✅ <strong>Monthly plans:</strong> Cancel anytime, no future
                  charges (but no prorated refund)
                </li>
                <li>
                  ✅ <strong>Access retained:</strong> You keep access until the
                  end of your billing period even after canceling
                </li>
              </ul>
            </div>
          </section>

          {/* 14. FAQs */}
          <section id="faqs" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              14. Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.name}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Improve Your Writing?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Start with Grammarly Free. Upgrade to Premium when you're ready
              for advanced features.
            </p>
            <a
              href="https://www.grammarly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </a>
            <p className="mt-4 text-sm opacity-75">
              7-day free trial • No credit card required for Free plan
            </p>
          </section>

          {/* Related Links */}
          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Related AI Tools
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link
                href="/chatgpt-plus-pricing"
                className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-600 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  ChatGPT Plus Pricing
                </h3>
                <p className="text-sm text-gray-600">
                  Complete breakdown of ChatGPT's plans and costs
                </p>
              </Link>
              <Link
                href="/notion-ai-pricing"
                className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-600 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  Notion AI Pricing
                </h3>
                <p className="text-sm text-gray-600">
                  Notion AI plans, features, and what you'll actually pay
                </p>
              </Link>
              <Link
                href="/jasper-ai-pricing"
                className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-600 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  Jasper AI Pricing
                </h3>
                <p className="text-sm text-gray-600">
                  Jasper Pro, Business, and Enterprise pricing guide
                </p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
