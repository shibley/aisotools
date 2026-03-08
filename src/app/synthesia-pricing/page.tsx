import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Synthesia Pricing 2026: Plans, Costs & What You Actually Pay",
  description:
    "Complete Synthesia pricing guide for 2026. Compare Free ($0), Starter ($29/mo), Creator ($89/mo), and Enterprise plans. Real costs, features, and honest analysis of AI video generation pricing.",
  keywords: [
    "synthesia pricing",
    "synthesia cost",
    "synthesia plans",
    "how much does synthesia cost",
    "synthesia pricing 2026",
    "synthesia starter pricing",
    "synthesia creator pricing",
    "synthesia enterprise pricing",
    "ai video pricing",
  ],
  openGraph: {
    title: "Synthesia Pricing 2026: Plans, Costs & What You Actually Pay",
    description:
      "Transparent breakdown of Synthesia pricing, plans, features, and real costs. AI video generation from free to enterprise. Updated March 2026.",
    url: "https://aisotools.com/synthesia-pricing",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/synthesia-pricing",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does Synthesia cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Synthesia costs $29/month for the Starter plan ($18/month billed annually) and $89/month for the Creator plan ($67/month billed annually). The Free plan is $0 with 10 minutes of video per month. Enterprise pricing is custom based on your needs.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between Synthesia Starter and Creator plans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Starter gives you 120 minutes/year (10 min/month), 125+ AI avatars, 3 personal avatars, and 1 editor + 3 guests. Creator provides 360 minutes/year (30 min/month), 180+ AI avatars, 5 personal avatars, more media library access, and 1 editor + 5 guests. Both include voice cloning, AI video assistant, and 160+ languages.",
      },
    },
    {
      "@type": "Question",
      name: "Does Synthesia offer a free plan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Synthesia offers a permanent free Basic plan with 10 minutes of video per month, 9 AI avatars, 160+ languages, and basic features. Videos will have a Synthesia watermark. You can create free AI videos at synthesia.io/create-free-ai-video.",
      },
    },
    {
      "@type": "Question",
      name: "How does Synthesia's video minute system work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Video minutes are calculated by the length of generated videos. If you create a 59-second video on the Starter plan, you have 9:01 minutes left for that month. Only new content is counted—if you edit an existing 1-minute video and change 3 seconds, only 3 seconds are deducted. Unused minutes don't roll over.",
      },
    },
    {
      "@type": "Question",
      name: "Can I create custom avatars with Synthesia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Starter includes 3 personal avatars, Creator includes 5, and Enterprise includes unlimited personal avatars. Studio Express-1 avatars (professional studio-quality) cost an additional $1,000/year and take up to 10 days to process. Voice cloning is included with personal avatars.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I exceed my video minutes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you exceed your limit, your usage will be capped until your plan renews. To get more video minutes immediately, you can upgrade to a higher plan (Creator or Enterprise). Enterprise plans have unlimited video minutes.",
      },
    },
    {
      "@type": "Question",
      name: "Is Synthesia pricing monthly or annual?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Synthesia offers both monthly and annual billing for Starter and Creator plans. Annual billing saves 28-38%: Starter is $29/month ($348/year) or $18/month ($216/year annual), Creator is $89/month ($1,068/year) or $67/month ($804/year annual). Enterprise is billed annually only.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel Synthesia at any time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can cancel Synthesia at any time through your account settings. Monthly subscriptions stop at the end of the current billing period. Annual plans are non-refundable but you retain access until the end of your paid period.",
      },
    },
  ],
};

export default function SynthesiaPricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">
              Synthesia Pricing
            </span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Synthesia Pricing 2026: Plans, Costs & What You Actually Pay
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Complete breakdown of Synthesia's AI video generation pricing. From free to enterprise, here's what you'll actually pay and what you get.
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
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Verified Pricing
              </span>
            </div>
          </header>

          {/* Quick Pricing Summary */}
          <section className="mb-16 bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="bg-blue-100 text-blue-700 w-10 h-10 rounded-lg flex items-center justify-center text-lg">
                💰
              </span>
              Synthesia Pricing at a Glance
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                <div className="text-gray-600 font-medium mb-2">Free</div>
                <div className="text-3xl font-bold text-gray-900 mb-4">
                  $0
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>10 min/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>9 AI avatars</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>160+ languages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-0.5">⚠</span>
                    <span>Watermark</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                <div className="text-blue-700 font-semibold mb-2">Starter</div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  $29<span className="text-lg text-gray-600">/mo</span>
                </div>
                <div className="text-sm text-gray-600 mb-4">$18/mo annual</div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>120 min/year</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>125+ avatars</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>3 personal avatars</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>No watermark</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border-2 border-purple-300 shadow-md">
                <div className="text-purple-700 font-bold mb-2 flex items-center gap-2">
                  Creator
                  <span className="bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">
                    Popular
                  </span>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  $89<span className="text-lg text-gray-600">/mo</span>
                </div>
                <div className="text-sm text-gray-600 mb-4">$67/mo annual</div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>360 min/year</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>180+ avatars</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>5 personal avatars</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Getty Images</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 text-white rounded-xl p-6 border-2 border-gray-700">
                <div className="text-gray-300 font-medium mb-2">
                  Enterprise
                </div>
                <div className="text-3xl font-bold mb-4">Custom</div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span>Unlimited video</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span>240+ avatars</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span>Unlimited avatars</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span>SSO, API, CSM</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 border-2 border-blue-200 rounded-xl">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <p className="text-gray-900 font-semibold mb-1">
                    Save 28-38% with annual billing
                  </p>
                  <p className="text-gray-700 text-sm">
                    Starter annual ($216/year) vs monthly ($348/year) saves
                    $132. Creator annual ($804/year) vs monthly ($1,068/year)
                    saves $264. Annual plans include custom avatar creation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Complete Plans Breakdown */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="bg-purple-100 text-purple-700 w-10 h-10 rounded-lg flex items-center justify-center text-lg">
                📋
              </span>
              Complete Plans Breakdown
            </h2>

            <div className="space-y-8">
              {/* Free Plan */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Free Plan
                    </h3>
                    <p className="text-gray-600">
                      Perfect for testing AI video generation
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-gray-900">$0</div>
                    <div className="text-sm text-gray-500">Forever free</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      What's Included:
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>10 minutes of video per month</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>9 AI avatars</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>160+ languages & voices</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>60+ pre-designed templates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>Basic media library (Pexels + Soundstripe)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>AI Video Assistant (script generation)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>MP4 downloads (Full HD 1080p)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Limitations:
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-0.5">⚠</span>
                        <span>Synthesia watermark on all videos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-0.5">⚠</span>
                        <span>1 editor only (no team collaboration)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-0.5">⚠</span>
                        <span>AI chat support only</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-0.5">⚠</span>
                        <span>No personal avatar creation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-0.5">⚠</span>
                        <span>No voice cloning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-0.5">⚠</span>
                        <span>No API access</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-700">
                    <strong>Best for:</strong> Testing Synthesia's quality,
                    creating quick demo videos, or occasional personal use where
                    watermarks are acceptable.
                  </p>
                </div>
              </div>

              {/* Starter Plan */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-blue-200">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Starter Plan
                    </h3>
                    <p className="text-gray-600">
                      For individuals creating short-form videos
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-gray-900">
                      $29<span className="text-xl text-gray-600">/mo</span>
                    </div>
                    <div className="text-sm text-blue-600 font-medium">
                      $18/mo billed annually ($216/year)
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Everything in Free, plus:
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>
                          120 minutes of video per year (10 min/month average)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>125+ AI avatars (vs 9 on Free)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>
                          3 personal avatars (custom digital twins with your
                          face)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>Voice cloning (with personal avatars)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>No watermark</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>1 editor + 3 guest users (for feedback)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>Dialogue (multiple avatars in one scene)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>Commenting & workspaces</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>Avatar Builder (customize avatar clothing)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>Brand Kits (apply company styling)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>Image/video uploads</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>AI Screen Recorder (Chrome extension)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>PowerPoint import</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>Regular customer support</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Add-Ons:
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700 mb-6">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">+</span>
                        <span>
                          Studio Express-1 avatar: $1,000/year (annual plans
                          only, 10-day processing)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">+</span>
                        <span>
                          Veo 3.1 / Sora 2 Integration: 48 credits per
                          8-second clip
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">+</span>
                        <span>
                          Customizable Avatars: 96 credits per action b-roll
                        </span>
                      </li>
                    </ul>

                    <h4 className="font-semibold text-gray-900 mb-3">
                      Not Included:
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-gray-400 mt-0.5">✗</span>
                        <span>Live collaboration (Enterprise only)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-400 mt-0.5">✗</span>
                        <span>Bulk personalization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-400 mt-0.5">✗</span>
                        <span>API access (360 min/year limit)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-400 mt-0.5">✗</span>
                        <span>Priority support</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-sm text-gray-700">
                    <strong>Best for:</strong> Freelancers, content creators,
                    or small business owners creating 1-2 videos per week for
                    social media, training, or marketing.
                  </p>
                </div>
              </div>

              {/* Creator Plan */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl shadow-xl p-8 border-2 border-purple-300">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">
                        Creator Plan
                      </h3>
                      <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                        Most Popular
                      </span>
                    </div>
                    <p className="text-gray-600">
                      For serious creators and small teams
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-gray-900">
                      $89<span className="text-xl text-gray-600">/mo</span>
                    </div>
                    <div className="text-sm text-purple-600 font-medium">
                      $67/mo billed annually ($804/year)
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Everything in Starter, plus:
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>
                          360 minutes of video per year (30 min/month average)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>180+ AI avatars (vs 125+ on Starter)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>5 personal avatars (vs 3 on Starter)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>1 editor + 5 guest users (vs 3 on Starter)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>
                          Getty Images + Pexels (premium stock media vs Pexels
                          only)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>Icons8 library access</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>Interactive CTAs & branching paths</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>Interactive quizzes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>Multilingual video player</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>SCORM export (for LMS integration)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>Smart updates (embedded videos auto-update)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>Priority customer support</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Also Includes:
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700 mb-6">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>1-Click Translation (multiple languages)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>
                          AI Dubbing with lip sync (deducted from video minutes)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>Custom fonts upload</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>Auto-generated closed captions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>Voiceover uploads</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>Branded share page with CTA</span>
                      </li>
                    </ul>

                    <h4 className="font-semibold text-gray-900 mb-3">
                      Add-Ons:
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">+</span>
                        <span>
                          Studio Express-1 avatar: $1,000/year (annual only)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">+</span>
                        <span>
                          API access: 360 min/year included, additional usage
                          available as paid add-on
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <p className="text-sm text-gray-700">
                    <strong>Best for:</strong> Marketing teams, agencies,
                    training departments, or anyone creating 3-4+ videos per
                    week who needs professional features like interactive CTAs,
                    SCORM export, and Getty Images access.
                  </p>
                </div>

                <div className="mt-4 bg-purple-100 p-4 rounded-lg border border-purple-300">
                  <p className="text-sm text-gray-900">
                    <strong>💰 Value Analysis:</strong> Creator costs $60/month
                    more than Starter but gives you 3× the video minutes (360
                    vs 120), 2 more personal avatars, Getty Images, interactive
                    features, and SCORM export. If you create 2+ videos/week,
                    the cost-per-video is lower.
                  </p>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-gray-900 text-white rounded-xl shadow-xl p-8 border-2 border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      Enterprise Plan
                    </h3>
                    <p className="text-gray-300">
                      For large teams with advanced needs
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold">Custom</div>
                    <div className="text-sm text-gray-400">
                      Contact sales for pricing
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold mb-3">
                      Everything in Creator, plus:
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-0.5">✓</span>
                        <span>Unlimited video minutes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-0.5">✓</span>
                        <span>240+ AI avatars (vs 180+ on Creator)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-0.5">✓</span>
                        <span>
                          Unlimited personal avatars (subject to fair use)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-0.5">✓</span>
                        <span>Custom number of editors & guests</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-0.5">✓</span>
                        <span>Live collaboration (real-time team editing)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-0.5">✓</span>
                        <span>
                          Avatar Builder with logo (Enterprise-only feature)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-0.5">✓</span>
                        <span>Branded templates (custom-designed by team)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-0.5">✓</span>
                        <span>Bulk personalization (hundreds of videos)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Enterprise Features:</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-0.5">✓</span>
                        <span>
                          AI Dubbing with lip sync (paid add-on, contact sales)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-0.5">✓</span>
                        <span>Full API access (unlimited usage add-on)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-0.5">✓</span>
                        <span>SAML/SSO authentication</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-0.5">✓</span>
                        <span>Dedicated Customer Success Manager</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-0.5">✓</span>
                        <span>Priority content moderation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-0.5">✓</span>
                        <span>Custom contract terms & billing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-0.5">✓</span>
                        <span>Advanced governance & permissions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-0.5">✓</span>
                        <span>Annual billing only</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                  <p className="text-sm text-gray-300">
                    <strong>Best for:</strong> Large enterprises (100+
                    employees), L&D teams creating extensive training content,
                    agencies managing multiple clients, or organizations
                    requiring SSO, unlimited API access, and dedicated support.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Understanding Video Minutes */}
          <section className="mb-16 bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="bg-green-100 text-green-700 w-10 h-10 rounded-lg flex items-center justify-center text-lg">
                ⏱️
              </span>
              Understanding Video Minutes (The #1 Gotcha)
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How Video Minutes Work
                </h3>
                <p className="text-gray-700 mb-4">
                  Video minutes are calculated by the length of your{" "}
                  <strong>generated</strong> videos, not the time you spend
                  editing. The counting system is second-precise:
                </p>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-4">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Examples:
                  </h4>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-mono">→</span>
                      <span>
                        <strong>Starter plan (10 min/month):</strong> If you
                        create a 59-second video, you have 9:01 minutes left for
                        the month.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-mono">→</span>
                      <span>
                        <strong>10 videos at 1:00 each:</strong> Uses all 10
                        minutes.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-mono">→</span>
                      <span>
                        <strong>1 video at 10:00:</strong> Uses all 10 minutes.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-mono">→</span>
                      <span>
                        <strong>20 videos at 0:30 each:</strong> Uses all 10
                        minutes.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Smart Minute Counting: Only New Content Charged
                </h3>
                <p className="text-gray-700 mb-4">
                  Synthesia only counts <strong>new</strong> video seconds when
                  you regenerate:
                </p>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Example:</h4>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-green-600">✓</span>
                      <span>
                        You generate a 1-minute video → <strong>60 seconds used</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600">✓</span>
                      <span>
                        You edit 3 seconds of that video and regenerate → Only{" "}
                        <strong>3 seconds used</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600">✓</span>
                      <span>
                        Total: 63 seconds used, not 120 seconds
                      </span>
                    </li>
                  </ul>
                </div>

                <p className="text-sm text-gray-600 italic">
                  Note: Video minutes are only consumed when you generate a
                  video. Drafts and using the "play" preview do not count.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Annual vs Monthly: How Minutes are Distributed
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-100 border-b-2 border-gray-300">
                      <tr>
                        <th className="text-left p-3 font-semibold">Plan</th>
                        <th className="text-left p-3 font-semibold">
                          Monthly Billing
                        </th>
                        <th className="text-left p-3 font-semibold">
                          Annual Billing
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="p-3 font-medium">Free</td>
                        <td className="p-3">10 min/month (rolling)</td>
                        <td className="p-3 text-gray-500">—</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3 font-medium">Starter</td>
                        <td className="p-3">10 min/month (rolling)</td>
                        <td className="p-3">
                          <strong>120 min/year</strong> (all upfront)
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3 font-medium">Creator</td>
                        <td className="p-3">30 min/month (rolling)</td>
                        <td className="p-3">
                          <strong>360 min/year</strong> (all upfront)
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3 font-medium">Enterprise</td>
                        <td className="p-3 text-gray-500">N/A</td>
                        <td className="p-3">
                          <strong>Unlimited</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <p className="text-sm text-gray-700">
                    <strong>⚠️ Important:</strong> On annual plans, you receive
                    all minutes upfront (120 or 360) at the start of your
                    billing year. Unused minutes <strong>do not</strong> roll
                    over to the next year. Monthly plans give you the same
                    monthly allotment that refreshes each month.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What Happens When You Run Out?
                </h3>

                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <p className="text-gray-700 mb-3">
                    If you exceed your video minute limit:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">1.</span>
                      <span>
                        <strong>Your usage is capped</strong> — you cannot
                        generate more videos until your plan renews
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">2.</span>
                      <span>
                        <strong>To get immediate access:</strong> Upgrade to a
                        higher plan (Starter → Creator → Enterprise)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">3.</span>
                      <span>
                        <strong>No "top-up" option:</strong> Synthesia does not
                        offer pay-per-minute overages — you must upgrade
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Real-World Cost Scenarios */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="bg-yellow-100 text-yellow-700 w-10 h-10 rounded-lg flex items-center justify-center text-lg">
                💵
              </span>
              Real-World Cost Scenarios
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Scenario 1 */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Freelance Content Creator
                </h3>
                <div className="space-y-3 text-sm text-gray-700 mb-6">
                  <p>
                    <strong>Use case:</strong> Creating 1-2 short social media
                    videos per week (30-60 seconds each)
                  </p>
                  <p>
                    <strong>Monthly usage:</strong> ~8 videos × 45 seconds = 6
                    minutes/month
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Free plan:</span>
                      <span className="font-semibold text-gray-900">
                        $0/month
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Starter (monthly):</span>
                      <span className="font-semibold text-gray-900">
                        $29/month
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Starter (annual):</span>
                      <span className="font-semibold text-green-600">
                        $18/month ($216/year)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                  <p className="text-sm text-gray-700">
                    <strong>Best choice:</strong> Start with Free if watermarks
                    are okay. Otherwise, Starter annual saves $132/year vs
                    monthly.
                  </p>
                </div>
              </div>

              {/* Scenario 2 */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Marketing Team (5 People)
                </h3>
                <div className="space-y-3 text-sm text-gray-700 mb-6">
                  <p>
                    <strong>Use case:</strong> Creating 2-3 product demo and
                    explainer videos per week (2-3 minutes each)
                  </p>
                  <p>
                    <strong>Monthly usage:</strong> ~10 videos × 2.5 minutes =
                    25 minutes/month
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Creator (monthly):</span>
                      <span className="font-semibold text-gray-900">
                        $89/month
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Creator (annual):</span>
                      <span className="font-semibold text-green-600">
                        $67/month ($804/year)
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mt-2">
                      30 min/month capacity, 5 guest seats for team feedback
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                  <p className="text-sm text-gray-700">
                    <strong>Best choice:</strong> Creator annual at $67/month
                    ($804/year). Provides adequate capacity with room for growth
                    + Getty Images.
                  </p>
                </div>
              </div>

              {/* Scenario 3 */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Training Department (15 People)
                </h3>
                <div className="space-y-3 text-sm text-gray-700 mb-6">
                  <p>
                    <strong>Use case:</strong> Creating employee onboarding and
                    compliance training (10-15 videos/month, 5-10 min each)
                  </p>
                  <p>
                    <strong>Monthly usage:</strong> ~12 videos × 7 minutes = 84
                    minutes/month (1,000+ min/year)
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Creator (annual):</span>
                      <span className="font-semibold text-red-600">
                        Not enough (360 min/year)
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Enterprise:</span>
                      <span className="font-semibold text-gray-900">
                        Custom (est. $6K-15K/year)
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mt-2">
                      Unlimited minutes, SCORM export, SSO, dedicated CSM
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                  <p className="text-sm text-gray-700">
                    <strong>Best choice:</strong> Enterprise for unlimited
                    minutes, team collaboration, and LMS integration. ROI
                    justified by replacing traditional video production costs.
                  </p>
                </div>
              </div>

              {/* Scenario 4 */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Agency Managing Multiple Clients
                </h3>
                <div className="space-y-3 text-sm text-gray-700 mb-6">
                  <p>
                    <strong>Use case:</strong> Creating video content for 8-10
                    clients (5-10 videos/client/month, various lengths)
                  </p>
                  <p>
                    <strong>Monthly usage:</strong> ~50-80 videos/month, highly
                    variable length (2,000+ min/year)
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Enterprise:</span>
                      <span className="font-semibold text-gray-900">
                        Custom (est. $12K-30K/year)
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mt-2">
                      Unlimited minutes, bulk personalization, API access,
                      multiple custom avatars, white-label options
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                  <p className="text-sm text-gray-700">
                    <strong>Best choice:</strong> Enterprise with API access for
                    automation. Bulk personalization enables client-specific
                    content at scale. Price per client: $1K-3K/year.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
              <p className="text-gray-900 font-semibold mb-2">
                💡 Cost Comparison to Traditional Video
              </p>
              <p className="text-sm text-gray-700">
                Traditional video production costs $1,000-$10,000 per finished
                minute. Even at Creator pricing ($67/month annual), producing 30
                minutes/month would cost $0-$67 total vs $30,000-$300,000 with a
                traditional production team. Synthesia pays for itself after
                creating just 1-2 professional videos.
              </p>
            </div>
          </section>

          {/* Hidden Costs */}
          <section className="mb-16 bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="bg-red-100 text-red-700 w-10 h-10 rounded-lg flex items-center justify-center text-lg">
                ⚠️
              </span>
              Hidden Costs & Gotchas
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  1. Studio Express-1 Avatars Cost Extra
                </h3>
                <p className="text-gray-700 mb-2">
                  High-quality studio avatars (professional lighting, multiple
                  outfits) cost <strong>$1,000/year</strong> on top of your
                  plan.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 ml-4 list-disc">
                  <li>Only available on annual plans (Starter, Creator)</li>
                  <li>Takes up to 10 days to process</li>
                  <li>Enterprise has this as a negotiable add-on</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  2. Credits for AI-Generated B-Roll
                </h3>
                <p className="text-gray-700 mb-2">
                  Veo 3.1/Sora 2 integration and customizable avatars use a
                  credit system:
                </p>
                <ul className="text-sm text-gray-600 space-y-1 ml-4 list-disc">
                  <li>
                    <strong>48 credits</strong> per 8-second Veo/Sora clip
                  </li>
                  <li>
                    <strong>96 credits</strong> per customizable avatar action
                  </li>
                  <li>
                    Credits are not included in base plans — you'll need to
                    purchase them separately
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  3. Video Minutes Don't Roll Over
                </h3>
                <p className="text-gray-700 mb-2">
                  Unlike some tools, unused minutes <strong>expire</strong> at
                  the end of your billing period.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 ml-4 list-disc">
                  <li>
                    Annual plans: 120 or 360 minutes given upfront, expires
                    after 1 year
                  </li>
                  <li>Monthly plans: Unused minutes lost at month-end</li>
                  <li>
                    Plan accordingly — batch video creation if you have a
                    variable schedule
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  4. API Access Has Usage Limits
                </h3>
                <p className="text-gray-700 mb-2">
                  Starter and Creator plans include limited API access:
                </p>
                <ul className="text-sm text-gray-600 space-y-1 ml-4 list-disc">
                  <li>
                    Starter: Up to 360 minutes/year via API (deducted from plan
                    limit)
                  </li>
                  <li>
                    Creator: 360 minutes/year included, additional usage as paid
                    add-on
                  </li>
                  <li>Enterprise: Unlimited API usage available as add-on</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  5. AI Dubbing with Lip Sync is a Paid Add-On
                </h3>
                <p className="text-gray-700 mb-2">
                  While 1-click translation is included, AI dubbing with lip
                  sync costs extra:
                </p>
                <ul className="text-sm text-gray-600 space-y-1 ml-4 list-disc">
                  <li>
                    On Starter/Creator: Deducted from your video minute limits
                  </li>
                  <li>On Enterprise: Paid add-on (contact sales for pricing)</li>
                  <li>
                    Translates into 130+ languages while keeping the speaker's
                    voice
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  6. Annual Plans Are Non-Refundable
                </h3>
                <p className="text-gray-700 mb-2">
                  Once you commit to an annual plan, there are no refunds —
                  choose carefully.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 ml-4 list-disc">
                  <li>
                    You can cancel anytime, but you retain access until the end
                    of your paid period
                  </li>
                  <li>Test with the Free plan or monthly billing first</li>
                  <li>
                    Annual savings (28-38%) can justify the commitment for
                    serious users
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Synthesia vs Competitors */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="bg-indigo-100 text-indigo-700 w-10 h-10 rounded-lg flex items-center justify-center text-lg">
                ⚖️
              </span>
              Synthesia vs Competitors
            </h2>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-100 border-b-2 border-gray-300">
                  <tr>
                    <th className="text-left p-3 font-semibold">Tool</th>
                    <th className="text-left p-3 font-semibold">Starting Price</th>
                    <th className="text-left p-3 font-semibold">AI Avatars</th>
                    <th className="text-left p-3 font-semibold">Video Limits</th>
                    <th className="text-left p-3 font-semibold">Languages</th>
                    <th className="text-left p-3 font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 font-semibold text-purple-700">
                      Synthesia
                    </td>
                    <td className="p-3">
                      <div>$29/mo</div>
                      <div className="text-xs text-gray-500">($18/mo annual)</div>
                    </td>
                    <td className="p-3">125+ (Starter)</td>
                    <td className="p-3">
                      <div>120 min/year</div>
                      <div className="text-xs text-gray-500">(~10/month)</div>
                    </td>
                    <td className="p-3">160+</td>
                    <td className="p-3 text-xs">
                      Professional teams, training, marketing
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 font-medium">HeyGen</td>
                    <td className="p-3">
                      <div>$24/mo</div>
                      <div className="text-xs text-gray-500">
                        ($19.20/mo annual)
                      </div>
                    </td>
                    <td className="p-3">700+ stock</td>
                    <td className="p-3">
                      <div>120 min/year</div>
                      <div className="text-xs text-gray-500">
                        (similar to Synthesia)
                      </div>
                    </td>
                    <td className="p-3">175+</td>
                    <td className="p-3 text-xs">
                      Cost-conscious creators, more avatars
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 font-medium">Colossyan</td>
                    <td className="p-3">
                      <div>$28/mo</div>
                      <div className="text-xs text-gray-500">(annual billing)</div>
                    </td>
                    <td className="p-3">200+</td>
                    <td className="p-3">
                      <div>Varies by plan</div>
                      <div className="text-xs text-gray-500">
                        (more structured)
                      </div>
                    </td>
                    <td className="p-3">70+</td>
                    <td className="p-3 text-xs">
                      L&D teams, slide-based training
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 font-medium">Descript</td>
                    <td className="p-3">
                      <div>$24/mo</div>
                      <div className="text-xs text-gray-500">
                        (Creator plan annual)
                      </div>
                    </td>
                    <td className="p-3">Overdub (voice only)</td>
                    <td className="p-3">
                      <div>Unlimited</div>
                      <div className="text-xs text-gray-500">
                        (10 hrs transcription)
                      </div>
                    </td>
                    <td className="p-3">23 transcription</td>
                    <td className="p-3 text-xs">
                      Podcasters, video editors, screen recording
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 font-medium">Runway ML</td>
                    <td className="p-3">
                      <div>$12/mo</div>
                      <div className="text-xs text-gray-500">(Standard annual)</div>
                    </td>
                    <td className="p-3">No avatars</td>
                    <td className="p-3">
                      <div>625 credits/mo</div>
                      <div className="text-xs text-gray-500">
                        (~125 sec Gen-3)
                      </div>
                    </td>
                    <td className="p-3">N/A</td>
                    <td className="p-3 text-xs">
                      Creative AI video generation, effects
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 font-medium">VEED.io</td>
                    <td className="p-3">
                      <div>$18/mo</div>
                      <div className="text-xs text-gray-500">(Basic annual)</div>
                    </td>
                    <td className="p-3">AI avatars add-on</td>
                    <td className="p-3">
                      <div>Unlimited exports</div>
                      <div className="text-xs text-gray-500">(720p)</div>
                    </td>
                    <td className="p-3">125+ subtitles</td>
                    <td className="p-3 text-xs">
                      Video editing + AI features hybrid
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  Why Choose Synthesia
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span>→</span>
                    <span>
                      <strong>Most realistic avatars:</strong> 92% viewer rating
                      for realism (industry surveys)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>→</span>
                    <span>
                      <strong>Enterprise-ready:</strong> SSO, API, dedicated
                      support, unlimited minutes
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>→</span>
                    <span>
                      <strong>SCORM export:</strong> Direct LMS integration for
                      training teams
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>→</span>
                    <span>
                      <strong>160+ languages:</strong> Most comprehensive
                      language support
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>→</span>
                    <span>
                      <strong>Trusted by 50,000+ companies:</strong> Proven at
                      scale
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-blue-600">💡</span>
                  Consider Alternatives If...
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span>→</span>
                    <span>
                      <strong>Budget &lt; $30/month:</strong> HeyGen ($24/mo) or
                      VEED ($18/mo) offer lower entry points
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>→</span>
                    <span>
                      <strong>Need unlimited video:</strong> Descript or VEED
                      for editing-heavy workflows
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>→</span>
                    <span>
                      <strong>Want more avatar variety:</strong> HeyGen has 700+
                      stock avatars
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>→</span>
                    <span>
                      <strong>Podcast/screen recording focus:</strong> Descript
                      excels at transcription + editing
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>→</span>
                    <span>
                      <strong>Creative AI generation:</strong> Runway ML for
                      text-to-video effects
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Decision Framework */}
          <section className="mb-16 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl shadow-lg p-8 border-2 border-purple-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="bg-purple-600 text-white w-10 h-10 rounded-lg flex items-center justify-center text-lg">
                🎯
              </span>
              Which Synthesia Plan Should You Choose?
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Choose Free if:
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>
                      You're testing AI video quality before committing
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>
                      You create &lt;10 minutes of video per month
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Watermarks are acceptable for your use case</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>
                      Personal projects or internal demos only
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 border-2 border-blue-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Choose Starter if:
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>
                      You create 1-2 short videos per week (&lt;10 min/month)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>
                      You're a freelancer, solopreneur, or small business owner
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>
                      You want your own custom avatar with voice cloning
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>
                      Social media, blog, or basic marketing content
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>
                      Budget: ~$18-29/month is reasonable
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 border-2 border-purple-400 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  Choose Creator if:
                  <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                    Recommended
                  </span>
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>
                      You create 3-4+ videos per week (20-30 min/month)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>
                      You're a marketing team, agency, or content production team
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>
                      You need premium stock media (Getty Images)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>
                      Interactive features (CTAs, quizzes, branching) are
                      valuable
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>
                      SCORM export for LMS/training platforms
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>
                      Budget: ~$67-89/month delivers strong ROI
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 text-white rounded-lg p-6 border-2 border-gray-700">
                <h3 className="text-xl font-bold mb-3">
                  Choose Enterprise if:
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>
                      You need <strong>unlimited video minutes</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>
                      Large team (10+ people) needs real-time collaboration
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>
                      SSO/SAML authentication is required
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>
                      Bulk personalization (100s of customized videos)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>
                      API automation for workflows
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>
                      Dedicated CSM and priority support
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>
                      Budget: $10K-30K+/year justified by replacing traditional
                      video
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-yellow-50 p-6 rounded-xl border-2 border-yellow-200">
              <p className="text-gray-900 font-semibold mb-2">
                💡 Pro Tip: Start Small, Scale Up
              </p>
              <p className="text-sm text-gray-700">
                Most users start with Starter (monthly) to test workflows, then
                upgrade to Creator (annual) after validating ROI. Enterprise
                makes sense when video minutes become unpredictable or you need
                API/SSO features. Annual billing saves 28-38% — switch after
                you're confident in monthly usage.
              </p>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-16 bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="bg-blue-100 text-blue-700 w-10 h-10 rounded-lg flex items-center justify-center text-lg">
                ❓
              </span>
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqSchema.mainEntity.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 last:border-0 pb-6 last:pb-0"
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

          {/* Final Verdict */}
          <section className="mb-16 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl shadow-xl p-8 border-2 border-green-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="bg-green-600 text-white w-10 h-10 rounded-lg flex items-center justify-center text-lg">
                ✅
              </span>
              Final Verdict: Is Synthesia Worth It?
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Synthesia is worth it if:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>
                      You create <strong>2+ videos per week</strong> and the
                      time savings justify $18-89/month
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>
                      You value <strong>realistic AI avatars</strong> over
                      stock footage or traditional filming
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>
                      <strong>Multilingual content</strong> (160+ languages) is
                      a core need
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>
                      You're replacing <strong>$1K-10K/video</strong>{" "}
                      traditional production costs
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>
                      Enterprise features (SSO, API, SCORM) are required
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Consider alternatives if:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">→</span>
                    <span>
                      You create <strong>&lt;5 videos per month</strong> and
                      watermarks are okay (Free plan works)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">→</span>
                    <span>
                      Your budget is <strong>&lt;$25/month</strong> (try HeyGen
                      at $24/mo or VEED at $18/mo)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">→</span>
                    <span>
                      You need <strong>unlimited video output</strong> on a
                      budget (Descript, VEED)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">→</span>
                    <span>
                      Creative AI generation (text-to-video effects) is your
                      focus (Runway ML)
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-100 p-6 rounded-lg border-2 border-green-300">
                <p className="text-gray-900 font-semibold text-lg mb-3">
                  💰 Bottom Line: Exceptional ROI for the Right Use Case
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  At <strong>$67/month</strong> (Creator annual), Synthesia pays
                  for itself after creating just 1-2 professional videos. The
                  time savings (10-20 hours/video avoided), realistic avatars
                  (92% viewer approval), and multilingual support make it the
                  gold standard for AI video generation.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Start with Free to test quality, upgrade to Starter if
                  watermarks are a problem, then scale to Creator when volume
                  justifies the investment. Enterprise makes sense for teams
                  creating 50+ videos/month or needing SSO/API.
                </p>
              </div>
            </div>
          </section>

          {/* Related Links */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Related Pricing Guides
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href="/chatgpt-plus-pricing"
                className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  ChatGPT Plus Pricing
                </h3>
                <p className="text-sm text-gray-600">
                  Complete guide to ChatGPT pricing & plans
                </p>
              </Link>
              <Link
                href="/jasper-ai-pricing"
                className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  Jasper AI Pricing
                </h3>
                <p className="text-sm text-gray-600">
                  Pro vs Business plans compared
                </p>
              </Link>
              <Link
                href="/grammarly-pricing"
                className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  Grammarly Pricing
                </h3>
                <p className="text-sm text-gray-600">
                  Premium, Business & Enterprise costs
                </p>
              </Link>
              <Link
                href="/"
                className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  All AI Tools
                </h3>
                <p className="text-sm text-gray-600">
                  Browse 200+ AI tools directory
                </p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Try Synthesia?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Start with the free plan or try a paid plan with annual savings.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.synthesia.io/create-free-ai-video"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Create Free AI Video →
              </a>
              <a
                href="https://www.synthesia.io/book-a-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors border-2 border-white"
              >
                Book Enterprise Demo
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
