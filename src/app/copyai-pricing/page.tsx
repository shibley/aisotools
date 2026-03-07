import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Copy.ai Pricing 2026: Plans, Costs & What You Actually Pay",
  description:
    "Complete Copy.ai pricing guide for 2026. Compare Free, Chat ($29/mo), Growth ($1K/mo), and Enterprise plans. Real costs, workflow credits explained, and honest analysis.",
  keywords: [
    "copy.ai pricing",
    "copyai pricing",
    "copy.ai cost",
    "how much does copy.ai cost",
    "copy.ai plans",
    "copy.ai pricing 2026",
    "copyai cost",
    "copy.ai subscription",
  ],
  openGraph: {
    title: "Copy.ai Pricing 2026: Plans, Costs & What You Actually Pay",
    description:
      "Transparent breakdown of Copy.ai pricing, plans, features, and real costs. Updated March 2026.",
    url: "https://aisotools.com/copyai-pricing",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/copyai-pricing",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does Copy.ai cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Copy.ai offers multiple pricing tiers: Free ($0, 2,000 words/month), Chat ($29/month or $24/month annually, 5 seats), Growth ($1,000/month, 75 seats + 20K workflow credits), Expansion ($2,000/month, 150 seats + 45K workflow credits), Scale ($3,000/month, 200 seats + 75K workflow credits), and custom Enterprise pricing.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a free plan for Copy.ai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Copy.ai offers a Free plan with 2,000 words per month and 200 workflow credits for first-time users. You get access to Chat, Infobase, and basic features. No credit card required to start.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between Copy.ai Chat and Growth plans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chat ($29/month) is for small teams with 5 seats and unlimited chat words but no workflow credits. Growth ($1,000/month) is for businesses scaling with AI, offering 75 seats and 20,000 workflow credits per month for automation. The 35x price jump reflects the addition of workflow automation capabilities.",
      },
    },
    {
      "@type": "Question",
      name: "Can I buy additional workflow credits without upgrading?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, one of the biggest frustrations users report is that you cannot purchase additional workflow credits without upgrading to a higher tier. If you need more credits, you must move from Growth ($1K/mo) to Expansion ($2K/mo) or higher.",
      },
    },
    {
      "@type": "Question",
      name: "Does Copy.ai offer annual discounts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the Chat plan offers 20% savings when billed annually ($24/month vs $29/month). Growth, Expansion, and Scale plans are billed annually by default at $12,000, $24,000, and $36,000 per year respectively.",
      },
    },
    {
      "@type": "Question",
      name: "What are workflow credits in Copy.ai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Workflow credits represent computational power needed to execute AI-powered workflows—automated sequences that combine research, content generation, and tool integrations. Each workflow run consumes credits based on complexity. Growth gets 20K credits/month, Expansion 45K, Scale 75K.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel Copy.ai anytime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can upgrade or downgrade plans at any time. Upgrades are prorated for the current month. Downgrades are credited on next month's bill. The Chat plan can be canceled monthly, while higher tiers are typically annual commitments.",
      },
    },
    {
      "@type": "Question",
      name: "Is Copy.ai worth it for freelancers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For freelancers, the Chat plan at $29/month (or $24 annually) can be worth it if you regularly create marketing copy, social posts, or client content. You get unlimited chat generation with access to ChatGPT, Claude, and Gemini models. The Free plan is good for testing, but the 2,000-word monthly limit fills quickly.",
      },
    },
  ],
};

export default function CopyAIPricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">
              Copy.ai Pricing 2026: Plans, Costs & What You Actually Pay
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Transparent breakdown of Copy.ai pricing, from the free plan to
              enterprise. Real costs, workflow credits explained, and the hidden
              gap between Chat and Growth tiers.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.copy.ai/prices"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                View Official Pricing
              </a>
              <Link
                href="/"
                className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition"
              >
                Browse AI Tools
              </Link>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12 max-w-4xl">
          {/* Table of Contents */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-12 rounded-r-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              📋 Quick Navigation
            </h2>
            <ul className="space-y-2 text-blue-700">
              <li>
                <a href="#overview" className="hover:underline">
                  → Copy.ai Pricing Overview
                </a>
              </li>
              <li>
                <a href="#plans" className="hover:underline">
                  → All Plans Breakdown
                </a>
              </li>
              <li>
                <a href="#credits" className="hover:underline">
                  → Workflow Credits Explained
                </a>
              </li>
              <li>
                <a href="#hidden-costs" className="hover:underline">
                  → Hidden Costs & Limitations
                </a>
              </li>
              <li>
                <a href="#scenarios" className="hover:underline">
                  → Real-World Cost Scenarios
                </a>
              </li>
              <li>
                <a href="#comparison" className="hover:underline">
                  → Copy.ai vs Competitors
                </a>
              </li>
              <li>
                <a href="#decision" className="hover:underline">
                  → Which Plan Should You Choose?
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:underline">
                  → Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Pricing Overview */}
          <section id="overview" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Copy.ai Pricing Overview (March 2026)
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Copy.ai offers six pricing tiers ranging from <strong>$0 to
              $3,000+/month</strong>, designed for individuals through
              Fortune 500 enterprises. The platform focuses on AI-powered
              copywriting and workflow automation.
            </p>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-orange-500 p-6 mb-8 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ⚠️ The Pricing Gap Problem
              </h3>
              <p className="text-gray-800 mb-3">
                Copy.ai has a <strong>massive $971/month jump</strong> from the
                Chat plan ($29/mo) to Growth ($1,000/mo). If you outgrow the
                Chat plan but don't need 75 seats, you're stuck.
              </p>
              <p className="text-gray-800">
                <strong>You cannot buy additional workflow credits</strong>{" "}
                without upgrading. This is users' #1 complaint per Capterra
                reviews.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                At a Glance
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <div>
                    <div className="font-semibold text-gray-900">Free</div>
                    <div className="text-sm text-gray-600">
                      2,000 words/month
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">$0</div>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <div>
                    <div className="font-semibold text-gray-900">Chat</div>
                    <div className="text-sm text-gray-600">5 seats, unlimited chat</div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    $29<span className="text-base font-normal text-gray-600">/mo</span>
                  </div>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <div>
                    <div className="font-semibold text-gray-900">Growth</div>
                    <div className="text-sm text-gray-600">
                      75 seats, 20K credits/mo
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    $1,000<span className="text-base font-normal text-gray-600">/mo</span>
                  </div>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <div>
                    <div className="font-semibold text-gray-900">Expansion</div>
                    <div className="text-sm text-gray-600">
                      150 seats, 45K credits/mo
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    $2,000<span className="text-base font-normal text-gray-600">/mo</span>
                  </div>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <div>
                    <div className="font-semibold text-gray-900">Scale</div>
                    <div className="text-sm text-gray-600">
                      200 seats, 75K credits/mo
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    $3,000<span className="text-base font-normal text-gray-600">/mo</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <div>
                    <div className="font-semibold text-gray-900">Enterprise</div>
                    <div className="text-sm text-gray-600">Custom seats & credits</div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">Custom</div>
                </div>
              </div>
            </div>
          </section>

          {/* All Plans Breakdown */}
          <section id="plans" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Complete Plans Breakdown
            </h2>

            {/* Free Plan */}
            <div className="bg-white border border-gray-300 rounded-lg p-8 mb-8 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Free Plan
                  </h3>
                  <p className="text-gray-600">For testing and light use</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-gray-900">$0</div>
                  <div className="text-sm text-gray-600">forever</div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-gray-900 mb-4">
                  What's Included:
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>2,000 words per month</strong> — fills fast with
                      blog drafts
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>200 workflow credits</strong> (first-time users only)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>Access to Chat</strong> with AI models
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>Infobase</strong> for brand context
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>No credit card required</strong> to start
                    </span>
                  </li>
                </ul>

                <div className="mt-6 bg-gray-50 border border-gray-200 rounded p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Reality check:</strong> 2,000 words = 2-3 blog post
                    drafts or ~100 social media posts. Good for testing, but
                    you'll hit the limit within days if actively using it.
                  </p>
                </div>
              </div>
            </div>

            {/* Chat Plan */}
            <div className="bg-white border-2 border-blue-500 rounded-lg p-8 mb-8 shadow-lg relative">
              <div className="absolute -top-4 left-6 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                MOST POPULAR FOR FREELANCERS
              </div>
              <div className="flex justify-between items-start mb-6 mt-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Chat Plan
                  </h3>
                  <p className="text-gray-600">
                    For small teams starting with AI
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-gray-900">$29</div>
                  <div className="text-sm text-gray-600">per month</div>
                  <div className="text-sm text-blue-600 font-semibold mt-1">
                    $24/mo annually
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-gray-900 mb-4">
                  What's Included:
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>5 user seats</strong> — share with your team
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>Unlimited words in Chat</strong> — no word count
                      limits
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>Unlimited Chat projects</strong>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>Access to OpenAI, Anthropic, and Gemini
                      models</strong> — ChatGPT, Claude, and Gemini in one place
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">✗</span>
                    <span>
                      <strong>No workflow credits</strong> — automation features
                      locked
                    </span>
                  </li>
                </ul>

                <div className="mt-6 bg-blue-50 border border-blue-200 rounded p-4">
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Best for:</strong> Freelancers, content creators,
                    and small teams (≤5 people) who need unlimited chat-based
                    content generation without workflow automation.
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>Annual savings:</strong> Pay $288/year instead of
                    $348 (save $60, 17% discount).
                  </p>
                </div>
              </div>
            </div>

            {/* Growth Plan */}
            <div className="bg-white border border-gray-300 rounded-lg p-8 mb-8 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Growth Plan
                  </h3>
                  <p className="text-gray-600">
                    For businesses scaling with AI automation
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-gray-900">$1,000</div>
                  <div className="text-sm text-gray-600">per month</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Billed $12,000/year
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-gray-900 mb-4">
                  What's Included:
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>75 user seats</strong>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>Unlimited words in Chat</strong>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>20,000 workflow credits per month</strong> —
                      automation unlocked
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>Custom AI workflows</strong> — codify business
                      processes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>Integrations with GTM systems</strong>
                    </span>
                  </li>
                </ul>

                <div className="mt-6 bg-yellow-50 border border-yellow-300 rounded p-4">
                  <p className="text-sm text-gray-700">
                    <strong>The gap problem:</strong> This is a 35x price jump
                    from Chat ($29/mo). If you have a 10-person team that needs
                    light automation, you're forced to pay for 75 seats and
                    20,000 credits you might not use.
                  </p>
                </div>
              </div>
            </div>

            {/* Expansion Plan */}
            <div className="bg-white border border-gray-300 rounded-lg p-8 mb-8 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Expansion Plan
                  </h3>
                  <p className="text-gray-600">
                    For enterprises expanding AI automations
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-gray-900">$2,000</div>
                  <div className="text-sm text-gray-600">per month</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Billed $24,000/year
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-gray-900 mb-4">
                  What's Included:
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>150 user seats</strong>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>Unlimited words in Chat</strong>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>45,000 workflow credits per month</strong> — 2.25x
                      Growth tier
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>Everything in Growth</strong> plus more capacity
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Scale Plan */}
            <div className="bg-white border border-gray-300 rounded-lg p-8 mb-8 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Scale Plan
                  </h3>
                  <p className="text-gray-600">
                    For organizations deploying AI at scale
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-gray-900">$3,000</div>
                  <div className="text-sm text-gray-600">per month</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Billed $36,000/year
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-gray-900 mb-4">
                  What's Included:
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>200 user seats</strong>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>Unlimited words in Chat</strong>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>75,000 workflow credits per month</strong> —
                      maximum automation capacity
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>Everything in Expansion</strong> plus maximum
                      scale
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-300 rounded-lg p-8 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Enterprise Plan
                  </h3>
                  <p className="text-gray-600">
                    For Fortune 500 organizations with custom needs
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-gray-900">Custom</div>
                  <div className="text-sm text-gray-600">pricing</div>
                </div>
              </div>

              <div className="border-t border-purple-200 pt-6">
                <h4 className="font-semibold text-gray-900 mb-4">
                  What's Included:
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>Unlimited user seats</strong>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>Custom workflow credits</strong> — usage-based
                      pricing available
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>Guided onboarding</strong> with AI experts
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>API access</strong> for custom integrations
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>Dedicated account management</strong>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>Security & compliance reviews</strong>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>Custom SLAs</strong>
                    </span>
                  </li>
                </ul>

                <div className="mt-6 bg-white border border-purple-200 rounded p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Typical pricing range:</strong> $50,000-$500,000+
                    per year depending on seats, credits, and support level.
                    Copy.ai works with Fortune 500 companies generating $2.6M+
                    in cost savings.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Workflow Credits Explained */}
          <section id="credits" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What Are Workflow Credits? (And Why They Matter)
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              Workflow credits are Copy.ai's unit of computational power for
              running <strong>AI-powered workflows</strong> — automated
              sequences that combine research, content generation, and tool
              integrations.
            </p>

            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                How Workflow Credits Work
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1 text-xl">1.</span>
                  <div>
                    <strong>Each workflow run consumes credits</strong> based on
                    complexity — more steps = more credits used
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1 text-xl">2.</span>
                  <div>
                    <strong>Credits reset monthly</strong> — unused credits
                    don't roll over
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1 text-xl">3.</span>
                  <div>
                    <strong>You can see credit cost per run</strong> in the side
                    panel after execution
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1 text-xl">4.</span>
                  <div>
                    <strong>Cannot buy additional credits without
                    upgrading</strong> — this is the frustration point
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Example Workflow Credit Usage
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>Simple content generation:</strong> 10-50 credits per
                  run
                </li>
                <li>
                  <strong>Internet research + content:</strong> 100-300 credits
                  per run
                </li>
                <li>
                  <strong>Complex multi-step automation:</strong> 500-1,000+
                  credits per run
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">
                With 20,000 credits on Growth, you could run ~200 research
                workflows or ~2,000 simple content generations per month.
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                ⚠️ The No-Additional-Credits Problem
              </h3>
              <p className="text-gray-700 mb-3">
                If you're on Growth (20K credits/month) and burn through your
                credits mid-month, your only option is to upgrade to Expansion
                ($2K/mo, 45K credits).
              </p>
              <p className="text-gray-700">
                <strong>There's no $1,200 option to just buy 5K more
                credits.</strong> This forces many mid-sized teams into
                overpriced tiers.
              </p>
            </div>
          </section>

          {/* Hidden Costs */}
          <section id="hidden-costs" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Hidden Costs & Limitations
            </h2>

            <div className="space-y-6">
              <div className="bg-white border border-red-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-red-700 mb-3">
                  1. No Mid-Tier Option
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>The problem:</strong> You jump from $29/month (5
                  seats, no automation) to $1,000/month (75 seats + 20K
                  credits).
                </p>
                <p className="text-gray-700">
                  <strong>Who it hurts:</strong> 10-30 person teams that need
                  automation but not 75 seats. You're forced to overpay.
                </p>
              </div>

              <div className="bg-white border border-red-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-red-700 mb-3">
                  2. Cannot Purchase Additional Credits
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>The problem:</strong> If you run out of workflow
                  credits, your only option is to upgrade to the next tier.
                </p>
                <p className="text-gray-700">
                  <strong>Competitor comparison:</strong> Jasper AI and
                  Writesonic allow credit top-ups. Copy.ai does not.
                </p>
              </div>

              <div className="bg-white border border-orange-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-orange-700 mb-3">
                  3. Annual Billing Required for Higher Tiers
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Growth, Expansion, and Scale</strong> require annual
                  commitments ($12K-$36K upfront).
                </p>
                <p className="text-gray-700">
                  <strong>Cash flow impact:</strong> $12,000 annual payment vs
                  $1,000 monthly can strain budgets.
                </p>
              </div>

              <div className="bg-white border border-orange-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-orange-700 mb-3">
                  4. Credits Don't Roll Over
                </h3>
                <p className="text-gray-700">
                  Unused workflow credits expire monthly. If you use 10K out of
                  20K credits, you lose the remaining 10K. No carryover, no
                  refunds.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-700 mb-3">
                  5. Free Plan Limits Fill Quickly
                </h3>
                <p className="text-gray-700 mb-2">
                  2,000 words per month sounds reasonable, but it's roughly:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>2-3 blog post drafts (800-1,000 words each)</li>
                  <li>~100 social media posts</li>
                  <li>10-15 email sequences</li>
                </ul>
                <p className="text-gray-700 mt-2">
                  You'll hit this cap within days of active use.
                </p>
              </div>
            </div>
          </section>

          {/* Real-World Scenarios */}
          <section id="scenarios" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Real-World Cost Scenarios
            </h2>

            <div className="space-y-6">
              {/* Scenario 1 */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Scenario 1: Solo Freelance Content Creator
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>Team size:</strong> 1 person
                  </p>
                  <p>
                    <strong>Use case:</strong> Blog posts, social media, client
                    emails
                  </p>
                  <p>
                    <strong>Best plan:</strong> Chat ($29/month or $24/month
                    annually)
                  </p>
                  <p>
                    <strong>Annual cost:</strong> $288/year (annual billing)
                  </p>
                  <p className="pt-2 border-t border-blue-200 mt-4">
                    <strong>Why it works:</strong> Unlimited chat generation
                    with ChatGPT, Claude, and Gemini. No need for workflows.
                    Saves $60/year vs monthly billing.
                  </p>
                </div>
              </div>

              {/* Scenario 2 */}
              <div className="bg-gradient-to-r from-green-50 to-teal-50 border-l-4 border-green-500 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Scenario 2: 5-Person Marketing Agency
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>Team size:</strong> 5 people
                  </p>
                  <p>
                    <strong>Use case:</strong> Client campaigns, blog content,
                    ad copy
                  </p>
                  <p>
                    <strong>Best plan:</strong> Chat ($29/month or $24/month
                    annually)
                  </p>
                  <p>
                    <strong>Annual cost:</strong> $288/year
                  </p>
                  <p>
                    <strong>Cost per seat:</strong> $4.80/month/person
                  </p>
                  <p className="pt-2 border-t border-green-200 mt-4">
                    <strong>Why it works:</strong> Fits perfectly within the
                    5-seat Chat limit. Each team member gets unlimited chat
                    access. Upgrading to Growth ($1K/mo) makes no sense—you'd
                    pay 41x more for features you don't need.
                  </p>
                </div>
              </div>

              {/* Scenario 3 */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Scenario 3: 15-Person SaaS Startup (The Gap Problem)
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>Team size:</strong> 15 people
                  </p>
                  <p>
                    <strong>Use case:</strong> Sales enablement, product
                    descriptions, light automation
                  </p>
                  <p>
                    <strong>Best plan:</strong> Stuck between Chat and Growth
                  </p>
                  <p>
                    <strong>Annual cost:</strong> $12,000/year (Growth) — but
                    you only need 15 seats, not 75
                  </p>
                  <p className="pt-2 border-t border-yellow-200 mt-4">
                    <strong>The problem:</strong> Chat maxes out at 5 seats.
                    Growth gives you 75 seats + 20K credits, but you're paying
                    for 60 unused seats. There's no $400-500/month option for
                    15-20 seats with 5K-10K credits.
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    <strong>Alternative:</strong> Consider Jasper Business or
                    Writesonic, which offer more flexible mid-tier pricing.
                  </p>
                </div>
              </div>

              {/* Scenario 4 */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Scenario 4: Enterprise (100+ Users)
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>Team size:</strong> 100+ people across sales,
                    marketing, customer success
                  </p>
                  <p>
                    <strong>Use case:</strong> Personalized outreach at scale,
                    sales collateral, partner enablement
                  </p>
                  <p>
                    <strong>Best plan:</strong> Enterprise (custom pricing)
                  </p>
                  <p>
                    <strong>Annual cost:</strong> $50,000-$500,000+ depending on
                    seats and credits
                  </p>
                  <p className="pt-2 border-t border-purple-200 mt-4">
                    <strong>Why it works:</strong> API access, guided
                    onboarding, custom integrations. Copy.ai case study: Fortune
                    500 company achieved $2.6M in cost savings using workflows
                    for $650M partner sales channel.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Comparison Table */}
          <section id="comparison" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Copy.ai vs Competitors
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 border-b">
                      Tool
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 border-b">
                      Starting Price
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 border-b">
                      Best For
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 border-b">
                      Key Advantage
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 border-b">
                      Key Limitation
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-blue-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Copy.ai
                    </td>
                    <td className="px-6 py-4 text-gray-700">$29/mo (Chat)</td>
                    <td className="px-6 py-4 text-gray-700">
                      Workflow automation, small teams
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Access to ChatGPT, Claude, Gemini in one tool
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Massive pricing gap ($29 → $1,000/mo)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      <Link
                        href="/jasper-ai-pricing"
                        className="text-blue-600 hover:underline"
                      >
                        Jasper AI
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-gray-700">$59/mo (Pro)</td>
                    <td className="px-6 py-4 text-gray-700">
                      Brand consistency, marketing teams
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Strong brand voice, 50+ templates, image generation
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      More expensive, steeper learning curve
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Writesonic
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      $19/mo (Unlimited)
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      SEO content, article writing
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Best value, real-time data, SEO optimization
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Less polished UI, fewer integrations
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      <Link
                        href="/chatgpt-plus-pricing"
                        className="text-blue-600 hover:underline"
                      >
                        ChatGPT Plus
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-gray-700">$20/mo</td>
                    <td className="px-6 py-4 text-gray-700">
                      General purpose, research
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Latest OpenAI models, image generation (DALL-E)
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      No marketing templates, no team collaboration
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Grammarly Business
                    </td>
                    <td className="px-6 py-4 text-gray-700">$12/mo/user</td>
                    <td className="px-6 py-4 text-gray-700">
                      Editing, tone consistency
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Best-in-class editing, real-time suggestions
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Not a content generator, focuses on editing
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Rytr
                    </td>
                    <td className="px-6 py-4 text-gray-700">$9/mo (Saver)</td>
                    <td className="px-6 py-4 text-gray-700">
                      Budget-conscious users
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Cheapest option, 40+ templates
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Lower content quality, basic features
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mt-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                💡 How to Choose
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Pick Copy.ai if:</strong> You need workflow automation
                  AND your team size fits cleanly into 5 (Chat) or 75+ (Growth)
                  seats
                </li>
                <li>
                  <strong>Pick Jasper AI if:</strong> Brand consistency and
                  image generation matter more than price
                </li>
                <li>
                  <strong>Pick Writesonic if:</strong> You want the best
                  value for SEO content with real-time data
                </li>
                <li>
                  <strong>Pick ChatGPT Plus if:</strong> You just need a
                  general-purpose AI without marketing features
                </li>
              </ul>
            </div>
          </section>

          {/* Decision Guide */}
          <section id="decision" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Which Copy.ai Plan Should You Choose?
            </h2>

            <div className="space-y-6">
              <div className="bg-white border-l-4 border-green-500 rounded-r-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Choose Free if:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>
                      You're testing Copy.ai for the first time
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>
                      You write fewer than 3 blog posts per month
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>
                      You just need light social media captions
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-l-4 border-blue-500 rounded-r-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Choose Chat ($29/mo) if:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>
                      You're a solo freelancer or have ≤5 team members
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>
                      You create regular content (blogs, emails, social media)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>
                      You don't need workflow automation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>
                      You want access to ChatGPT, Claude, and Gemini in one tool
                    </span>
                  </li>
                </ul>
                <p className="text-sm text-blue-600 mt-4 font-semibold">
                  💡 This is the best value for most freelancers and small
                  agencies.
                </p>
              </div>

              <div className="bg-white border-l-4 border-purple-500 rounded-r-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Choose Growth ($1,000/mo) if:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    <span>
                      You have 50-75 team members who need AI access
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    <span>
                      You need workflow automation for sales or marketing
                      processes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    <span>
                      You have the budget for $12K annual commitment
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    <span>
                      You've outgrown Chat's 5-seat limit
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-l-4 border-orange-500 rounded-r-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Choose Expansion or Scale if:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span>
                      You're burning through 20K workflow credits/month on
                      Growth
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span>
                      You have 100-200 team members
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span>
                      You're running large-scale content operations
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 rounded-r-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Choose Enterprise if:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">✓</span>
                    <span>
                      You're a Fortune 500 company or have 200+ employees
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">✓</span>
                    <span>
                      You need API access for custom integrations
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">✓</span>
                    <span>
                      You require guided onboarding and dedicated support
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">✓</span>
                    <span>
                      You have strict security and compliance requirements
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mt-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                🚨 The 6-30 Seat Gap
              </h3>
              <p className="text-gray-700 mb-3">
                If you have <strong>6-30 team members</strong>, Copy.ai doesn't
                have a good option:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>
                  • Chat maxes out at 5 seats ($29/mo)
                </li>
                <li>
                  • Growth starts at 75 seats ($1,000/mo)
                </li>
              </ul>
              <p className="text-gray-700">
                <strong>Consider alternatives:</strong>{" "}
                <Link href="/jasper-ai-pricing" className="text-blue-600 hover:underline">
                  Jasper Business
                </Link>{" "}
                (custom pricing for any team size) or Writesonic (flexible
                seat-based pricing).
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  How much does Copy.ai cost?
                </h3>
                <p className="text-gray-700">
                  Copy.ai offers multiple pricing tiers: Free ($0, 2,000
                  words/month), Chat ($29/month or $24/month annually, 5 seats),
                  Growth ($1,000/month, 75 seats + 20K workflow credits),
                  Expansion ($2,000/month, 150 seats + 45K workflow credits),
                  Scale ($3,000/month, 200 seats + 75K workflow credits), and
                  custom Enterprise pricing.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Is there a free plan for Copy.ai?
                </h3>
                <p className="text-gray-700">
                  Yes, Copy.ai offers a Free plan with 2,000 words per month
                  and 200 workflow credits for first-time users. You get access
                  to Chat, Infobase, and basic features. No credit card required
                  to start.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  What's the difference between Copy.ai Chat and Growth plans?
                </h3>
                <p className="text-gray-700">
                  Chat ($29/month) is for small teams with 5 seats and unlimited
                  chat words but no workflow credits. Growth ($1,000/month) is
                  for businesses scaling with AI, offering 75 seats and 20,000
                  workflow credits per month for automation. The 35x price jump
                  reflects the addition of workflow automation capabilities.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Can I buy additional workflow credits without upgrading?
                </h3>
                <p className="text-gray-700">
                  No, one of the biggest frustrations users report is that you
                  cannot purchase additional workflow credits without upgrading
                  to a higher tier. If you need more credits, you must move from
                  Growth ($1K/mo) to Expansion ($2K/mo) or higher.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Does Copy.ai offer annual discounts?
                </h3>
                <p className="text-gray-700">
                  Yes, the Chat plan offers 20% savings when billed annually
                  ($24/month vs $29/month). Growth, Expansion, and Scale plans
                  are billed annually by default at $12,000, $24,000, and
                  $36,000 per year respectively.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  What are workflow credits in Copy.ai?
                </h3>
                <p className="text-gray-700">
                  Workflow credits represent computational power needed to
                  execute AI-powered workflows—automated sequences that combine
                  research, content generation, and tool integrations. Each
                  workflow run consumes credits based on complexity. Growth gets
                  20K credits/month, Expansion 45K, Scale 75K.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Can I cancel Copy.ai anytime?
                </h3>
                <p className="text-gray-700">
                  Yes, you can upgrade or downgrade plans at any time. Upgrades
                  are prorated for the current month. Downgrades are credited on
                  next month's bill. The Chat plan can be canceled monthly,
                  while higher tiers are typically annual commitments.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Is Copy.ai worth it for freelancers?
                </h3>
                <p className="text-gray-700">
                  For freelancers, the Chat plan at $29/month (or $24 annually)
                  can be worth it if you regularly create marketing copy, social
                  posts, or client content. You get unlimited chat generation
                  with access to ChatGPT, Claude, and Gemini models. The Free
                  plan is good for testing, but the 2,000-word monthly limit
                  fills quickly.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Try Copy.ai?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start with the free plan or jump to Chat for unlimited generation
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://www.copy.ai/prices"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition text-lg"
              >
                View All Plans →
              </a>
              <Link
                href="/"
                className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 transition text-lg border-2 border-white"
              >
                Browse More AI Tools
              </Link>
            </div>
          </section>

          {/* Related Links */}
          <section className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Related AI Tool Pricing Guides
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/chatgpt-plus-pricing"
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ChatGPT Plus Pricing 2026
                </h3>
                <p className="text-gray-600 text-sm">
                  Complete breakdown of ChatGPT Plus, Team, and Enterprise
                  pricing
                </p>
              </Link>
              <Link
                href="/jasper-ai-pricing"
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Jasper AI Pricing 2026
                </h3>
                <p className="text-gray-600 text-sm">
                  Pro and Business plan costs for AI content creation
                </p>
              </Link>
              <Link
                href="/notion-ai-pricing"
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Notion AI Pricing 2026
                </h3>
                <p className="text-gray-600 text-sm">
                  Notion AI bundled pricing and plan comparison
                </p>
              </Link>
              <Link
                href="/"
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Browse All AI Tools
                </h3>
                <p className="text-gray-600 text-sm">
                  Discover 200+ AI tools with comparisons and pricing
                </p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
