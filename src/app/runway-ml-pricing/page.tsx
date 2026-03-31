import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Runway ML Pricing 2026: Plans, Costs & What You Actually Pay",
  description:
    "Complete Runway ML pricing guide for 2026. Compare Free ($0), Standard ($12/mo), Pro ($28/mo), and Unlimited ($76/mo) plans. Real costs, credit system explained, and honest analysis.",
  keywords: [
    "runway ml pricing",
    "runway pricing",
    "runway cost",
    "runway ml cost",
    "how much does runway cost",
    "runway ai pricing",
    "runway ml plans",
    "runway credits",
  ],
  openGraph: {
    title: "Runway ML Pricing 2026: Plans, Costs & What You Actually Pay",
    description:
      "Transparent breakdown of Runway ML pricing, plans, features, and real costs. AI video generation from free to enterprise. Updated March 2026.",
    url: "https://aisotools.com/runway-ml-pricing",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/runway-ml-pricing",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does Runway ML cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Runway ML costs between $0 and $95 per month. The Free plan includes 125 one-time credits. Standard is $12/month (annual) with 625 monthly credits. Pro is $28/month (annual) with 2,250 credits. Unlimited is $76/month (annual) with 2,250 credits plus unlimited Explore Mode generations.",
      },
    },
    {
      "@type": "Question",
      name: "How do Runway credits work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Credits are Runway's internal currency. Every generation deducts credits based on the model and duration. Gen-4 Turbo costs 5 credits/second, Gen-4 Video costs 12 credits/second, and Veo 3 with audio costs 40 credits/second. Monthly credits expire on your billing date, but purchased credits never expire.",
      },
    },
    {
      "@type": "Question",
      name: "Do Runway credits roll over?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, monthly plan credits do not roll over. They reset on your billing date each month. Use them or lose them. However, separately purchased credit top-ups do not expire as long as your account remains active.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between Runway Standard and Pro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard gives you 625 credits/month with 100GB storage and up to 5 editors. Pro provides 2,250 credits/month (3.6× more), 500GB storage, up to 10 editors, and Custom Voices for Lip Sync and Text to Speech. Standard is $12/mo (annual), Pro is $28/mo (annual).",
      },
    },
    {
      "@type": "Question",
      name: "Is Runway Unlimited really unlimited?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Partially. The Unlimited plan provides unlimited generations through Explore Mode for supported models (Gen-4.5, Gen-4, Gen-4 Turbo, Aleph, Act-Two). However, Veo 3 and Gemini 3 Pro still require credits. Explore Mode uses a relaxed rate with lower queue priority.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use Runway videos commercially?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Runway grants commercial use rights on all plan tiers, including the Free plan. You retain ownership of all generated content and no attribution is required. However, Free plan outputs carry a watermark.",
      },
    },
    {
      "@type": "Question",
      name: "How many credits for a 10-second video?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the model. Gen-4 Turbo: 50 credits (5 credits/second). Gen-4 Video: 120 credits (12 credits/second). Gen-4.5: 120 credits. Veo 3 with audio: 400 credits (40 credits/second). Adding 4K upscaling costs an additional 20 credits (2 credits/second).",
      },
    },
    {
      "@type": "Question",
      name: "Can I buy extra Runway credits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, on Standard, Pro, and Unlimited plans. The minimum purchase is 1,000 credits through the Plans & Billing section. Purchased credits never expire as long as your account remains active.",
      },
    },
  ],
};

export default function RunwayPricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Runway ML Pricing 2026: Plans, Costs & What You Actually Pay
          </h1>
          <p className="text-xl text-gray-600">
            Complete guide to Runway AI pricing, credit system, and real-world
            costs. Updated March 2026.
          </p>
        </header>

        {/* Quick Summary */}
        <section className="mb-12 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
          <h2 className="text-2xl font-bold mb-4">TL;DR</h2>
          <ul className="space-y-2">
            <li>
              <strong>Free:</strong> $0 with 125 one-time credits (good for
              testing only)
            </li>
            <li>
              <strong>Standard:</strong> $12/mo annual (625 credits/month) —
              best entry point
            </li>
            <li>
              <strong>Pro:</strong> $28/mo annual (2,250 credits/month) — for
              weekly output
            </li>
            <li>
              <strong>Unlimited:</strong> $76/mo annual (2,250 credits + Explore
              Mode) — for daily creators
            </li>
            <li>
              <strong>Enterprise:</strong> Custom pricing with SSO, compliance,
              analytics
            </li>
          </ul>
          <p className="mt-4 text-gray-700">
            <strong>Real cost depends on:</strong> Which AI models you use, how
            many seconds you render, and whether you understand the credit
            system (explained below).
          </p>
        </section>

        {/* Compare Alternatives CTA */}
        <section className="mb-12 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border-2 border-purple-200">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🔍</div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-3">
                Not sure if Runway is right for you?
              </h2>
              <p className="text-gray-700 mb-4">
                Compare Runway with other AI video tools before you commit.
                See side-by-side feature breakdowns, pricing differences, and
                which tool fits your workflow best.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link
                  href="/runway-alternatives"
                  className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg border-2 border-purple-300 hover:border-purple-500 hover:shadow-md transition-all"
                >
                  <span className="text-xl">⚡</span>
                  <div>
                    <div className="font-semibold text-purple-700">
                      Runway Alternatives
                    </div>
                    <div className="text-sm text-gray-600">
                      12 tools compared
                    </div>
                  </div>
                </Link>
                <Link
                  href="/sora-vs-runway"
                  className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg border-2 border-blue-300 hover:border-blue-500 hover:shadow-md transition-all"
                >
                  <span className="text-xl">🎬</span>
                  <div>
                    <div className="font-semibold text-blue-700">
                      Sora vs Runway
                    </div>
                    <div className="text-sm text-gray-600">
                      Full comparison
                    </div>
                  </div>
                </Link>
                <Link
                  href="/kling-vs-runway"
                  className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg border-2 border-green-300 hover:border-green-500 hover:shadow-md transition-all"
                >
                  <span className="text-xl">💰</span>
                  <div>
                    <div className="font-semibold text-green-700">
                      Kling vs Runway
                    </div>
                    <div className="text-sm text-gray-600">
                      Budget alternative
                    </div>
                  </div>
                </Link>
                <Link
                  href="/midjourney-vs-runway"
                  className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg border-2 border-pink-300 hover:border-pink-500 hover:shadow-md transition-all"
                >
                  <span className="text-xl">🎨</span>
                  <div>
                    <div className="font-semibold text-pink-700">
                      Midjourney vs Runway
                    </div>
                    <div className="text-sm text-gray-600">
                      Image vs video
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <nav className="mb-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
          <ul className="space-y-2">
            <li>
              <a href="#plans" className="text-blue-600 hover:underline">
                Runway ML Plans & Pricing Compared
              </a>
            </li>
            <li>
              <a href="#credits" className="text-blue-600 hover:underline">
                How Runway Credits Work
              </a>
            </li>
            <li>
              <a href="#credit-rates" className="text-blue-600 hover:underline">
                Credit Rates by Model (2026)
              </a>
            </li>
            <li>
              <a href="#calculator" className="text-blue-600 hover:underline">
                Real Cost Calculator
              </a>
            </li>
            <li>
              <a href="#free" className="text-blue-600 hover:underline">
                Free Plan Review
              </a>
            </li>
            <li>
              <a href="#standard" className="text-blue-600 hover:underline">
                Standard Plan Review
              </a>
            </li>
            <li>
              <a href="#pro" className="text-blue-600 hover:underline">
                Pro Plan Review
              </a>
            </li>
            <li>
              <a href="#unlimited" className="text-blue-600 hover:underline">
                Unlimited Plan Review
              </a>
            </li>
            <li>
              <a href="#enterprise" className="text-blue-600 hover:underline">
                Enterprise Plan Review
              </a>
            </li>
            <li>
              <a href="#hidden-costs" className="text-blue-600 hover:underline">
                Hidden Costs & Gotchas
              </a>
            </li>
            <li>
              <a href="#comparison" className="text-blue-600 hover:underline">
                Runway vs Alternatives
              </a>
            </li>
            <li>
              <a href="#how-to-choose" className="text-blue-600 hover:underline">
                How to Choose the Right Plan
              </a>
            </li>
            <li>
              <a href="#faq" className="text-blue-600 hover:underline">
                Frequently Asked Questions
              </a>
            </li>
          </ul>
        </nav>

        {/* Plans Comparison */}
        <section id="plans" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            Runway ML Plans and Pricing Compared
          </h2>
          <p className="mb-6">
            Runway uses a credit-based pricing model with five tiers. Here's
            the complete breakdown of every plan side-by-side:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left">Feature</th>
                  <th className="border p-3 text-left">Free</th>
                  <th className="border p-3 text-left">Standard</th>
                  <th className="border p-3 text-left">Pro</th>
                  <th className="border p-3 text-left">Unlimited</th>
                  <th className="border p-3 text-left">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-semibold">Monthly Price</td>
                  <td className="border p-3">$0</td>
                  <td className="border p-3">$15/user</td>
                  <td className="border p-3">$35/user</td>
                  <td className="border p-3">$95/user</td>
                  <td className="border p-3">Custom</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3 font-semibold">
                    Annual Price (20% off)
                  </td>
                  <td className="border p-3">$0</td>
                  <td className="border p-3">
                    <strong>$12/user/mo</strong>
                    <br />
                    <span className="text-sm text-gray-600">
                      ($144 billed annually)
                    </span>
                  </td>
                  <td className="border p-3">
                    <strong>$28/user/mo</strong>
                    <br />
                    <span className="text-sm text-gray-600">
                      ($336 billed annually)
                    </span>
                  </td>
                  <td className="border p-3">
                    <strong>$76/user/mo</strong>
                    <br />
                    <span className="text-sm text-gray-600">
                      ($912 billed annually)
                    </span>
                  </td>
                  <td className="border p-3">Custom</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Monthly Credits</td>
                  <td className="border p-3">125 (one-time)</td>
                  <td className="border p-3">625</td>
                  <td className="border p-3">2,250</td>
                  <td className="border p-3">2,250 + Explore</td>
                  <td className="border p-3">Custom</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3 font-semibold">Asset Storage</td>
                  <td className="border p-3">5 GB</td>
                  <td className="border p-3">100 GB</td>
                  <td className="border p-3">500 GB</td>
                  <td className="border p-3">500 GB</td>
                  <td className="border p-3">Custom</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Max Editors</td>
                  <td className="border p-3">1</td>
                  <td className="border p-3">5</td>
                  <td className="border p-3">10</td>
                  <td className="border p-3">10</td>
                  <td className="border p-3">Scalable</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3 font-semibold">
                    Watermark Removal
                  </td>
                  <td className="border p-3">❌</td>
                  <td className="border p-3">✅</td>
                  <td className="border p-3">✅</td>
                  <td className="border p-3">✅</td>
                  <td className="border p-3">✅</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Gen-4 Video</td>
                  <td className="border p-3">❌</td>
                  <td className="border p-3">✅</td>
                  <td className="border p-3">✅</td>
                  <td className="border p-3">✅</td>
                  <td className="border p-3">✅</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3 font-semibold">Gen-4.5</td>
                  <td className="border p-3">❌</td>
                  <td className="border p-3">✅</td>
                  <td className="border p-3">✅</td>
                  <td className="border p-3">✅</td>
                  <td className="border p-3">✅</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Custom Voices</td>
                  <td className="border p-3">❌</td>
                  <td className="border p-3">❌</td>
                  <td className="border p-3">✅</td>
                  <td className="border p-3">✅</td>
                  <td className="border p-3">✅</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3 font-semibold">Explore Mode</td>
                  <td className="border p-3">❌</td>
                  <td className="border p-3">❌</td>
                  <td className="border p-3">❌</td>
                  <td className="border p-3">✅ Unlimited</td>
                  <td className="border p-3">✅ Configurable</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Buy More Credits</td>
                  <td className="border p-3">❌</td>
                  <td className="border p-3">✅</td>
                  <td className="border p-3">✅</td>
                  <td className="border p-3">✅</td>
                  <td className="border p-3">✅</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3 font-semibold">
                    Video Editor Projects
                  </td>
                  <td className="border p-3">3</td>
                  <td className="border p-3">Unlimited</td>
                  <td className="border p-3">Unlimited</td>
                  <td className="border p-3">Unlimited</td>
                  <td className="border p-3">Unlimited</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">SSO</td>
                  <td className="border p-3">❌</td>
                  <td className="border p-3">❌</td>
                  <td className="border p-3">❌</td>
                  <td className="border p-3">❌</td>
                  <td className="border p-3">✅</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3 font-semibold">Support</td>
                  <td className="border p-3">Community</td>
                  <td className="border p-3">Dashboard</td>
                  <td className="border p-3">Dashboard</td>
                  <td className="border p-3">Dashboard</td>
                  <td className="border p-3">Priority</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-6 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
            <h3 className="font-bold mb-2">⚠️ Important Note on Pricing</h3>
            <p className="mb-2">
              <strong>Annual billing saves 20%</strong> — all prices quoted
              below are for annual plans unless otherwise noted.
            </p>
            <p>
              <strong>Credits are shared across workspace editors</strong> —
              adding more editors to your plan does NOT add more credits. A Pro
              plan with 10 editors shares the same 2,250 monthly credits among
              all of them.
            </p>
          </div>
        </section>

        {/* How Credits Work */}
        <section id="credits" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            How Runway Credits Work (The Core System)
          </h2>
          <p className="mb-4">
            Runway's credit system is the core mechanism that determines your
            actual cost. Every generation — video, image, audio, or
            post-processing — deducts credits from your monthly allotment.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">What Credits Pay For</h3>
          <p className="mb-4">Credits cover every generative action:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Video generation</strong> — charged per second of output
              (rates vary by model)
            </li>
            <li>
              <strong>Image generation</strong> — charged per image (rates vary
              by model and resolution)
            </li>
            <li>
              <strong>Audio generation</strong> — Text to Speech, Text to SFX,
              Voice Dubbing, Speech to Speech
            </li>
            <li>
              <strong>Post-processing</strong> — 4K upscaling, background
              removal, inpainting, stitching, audio extraction
            </li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Credits Included by Plan
          </h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left">Plan</th>
                  <th className="border p-3 text-left">Monthly Credits</th>
                  <th className="border p-3 text-left">Rollover?</th>
                  <th className="border p-3 text-left">Expiry</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">Free</td>
                  <td className="border p-3">125 (one-time)</td>
                  <td className="border p-3">N/A</td>
                  <td className="border p-3">
                    Never (while account active)
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">Standard</td>
                  <td className="border p-3">625/month</td>
                  <td className="border p-3">❌ No</td>
                  <td className="border p-3">Expire on billing date</td>
                </tr>
                <tr>
                  <td className="border p-3">Pro</td>
                  <td className="border p-3">2,250/month</td>
                  <td className="border p-3">❌ No</td>
                  <td className="border p-3">Expire on billing date</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">Unlimited</td>
                  <td className="border p-3">2,250/month</td>
                  <td className="border p-3">❌ No</td>
                  <td className="border p-3">Expire on billing date</td>
                </tr>
                <tr>
                  <td className="border p-3">Enterprise</td>
                  <td className="border p-3">Custom</td>
                  <td className="border p-3">Custom</td>
                  <td className="border p-3">Custom</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-6 bg-red-50 rounded-lg border-l-4 border-red-500 mb-6">
            <h3 className="font-bold mb-2">
              🚨 Critical Rule: Monthly Credits Do Not Roll Over
            </h3>
            <p className="mb-2">
              <strong>Monthly plan credits expire on your billing date</strong>{" "}
              and do not roll over to the next month. Use them or lose them.
            </p>
            <p>
              However, <strong>purchased credits</strong> (credit top-ups) do
              not expire as long as your account remains active — making them a
              safety net for overflow months.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Buying More Credits
          </h3>
          <p className="mb-4">
            Standard, Pro, and Unlimited subscribers can purchase additional
            credits through the Plans & Billing page in their dashboard. The{" "}
            <strong>minimum purchase is 1,000 credits</strong>, and purchased
            credits never expire.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Workspace Credit Sharing (Teams Take Note)
          </h3>
          <p className="mb-4">
            This is the part that changes the math for teams:{" "}
            <strong>
              credits are shared across the workspace, not allocated per seat
            </strong>
            .
          </p>
          <p className="mb-4">
            If you're on the Pro plan with 2,250 credits/month and you have 4
            editors in your workspace, all 4 editors draw from the same
            2,250-credit pool. This means:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Adding editors doesn't add credits</strong> — it splits
              them
            </li>
            <li>
              One heavy user can burn through the entire team's allotment
            </li>
            <li>
              Teams should monitor usage and consider buying additional credits
              as a buffer
            </li>
          </ul>
        </section>

        {/* Credit Rates */}
        <section id="credit-rates" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            Credit Rates in 2026: Cost Per Second
          </h2>
          <p className="mb-6">
            This is where Runway ML pricing gets real. The tables below show
            exactly what each model and tool costs:
          </p>

          <h3 className="text-2xl font-bold mb-4">
            Video Generation Credit Rates (Per Second)
          </h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left">Model</th>
                  <th className="border p-3 text-left">Credits per Second</th>
                  <th className="border p-3 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">Gen-4.5 (Text to Video)</td>
                  <td className="border p-3">
                    <strong>12 credits/sec</strong>
                  </td>
                  <td className="border p-3">
                    Highest quality text-to-video
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">Gen-4 Aleph (Video Editing)</td>
                  <td className="border p-3">
                    <strong>15 credits/sec</strong>
                  </td>
                  <td className="border p-3">
                    Most expensive per-second rate
                  </td>
                </tr>
                <tr>
                  <td className="border p-3">Gen-4 Video (Image to Video)</td>
                  <td className="border p-3">
                    <strong>12 credits/sec</strong>
                  </td>
                  <td className="border p-3">Standard quality, full control</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">Gen-4 Video Turbo</td>
                  <td className="border p-3">
                    <strong>5 credits/sec</strong>
                  </td>
                  <td className="border p-3">Fast, lower cost</td>
                </tr>
                <tr>
                  <td className="border p-3">Gen-3 Alpha</td>
                  <td className="border p-3">
                    <strong>10 credits/sec</strong>
                  </td>
                  <td className="border p-3">Legacy model</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">Gen-3 Alpha Turbo</td>
                  <td className="border p-3">
                    <strong>5 credits/sec</strong>
                  </td>
                  <td className="border p-3">Legacy fast model</td>
                </tr>
                <tr>
                  <td className="border p-3">Act-Two (Performance Capture)</td>
                  <td className="border p-3">
                    <strong>5 credits/sec</strong>
                  </td>
                  <td className="border p-3">Minimum 3 seconds</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">Veo 3 or 3.1 (with audio)</td>
                  <td className="border p-3">
                    <strong>40 credits/sec</strong>
                  </td>
                  <td className="border p-3">Premium; audio included</td>
                </tr>
                <tr>
                  <td className="border p-3">Veo 3.1 (no audio)</td>
                  <td className="border p-3">
                    <strong>20 credits/sec</strong>
                  </td>
                  <td className="border p-3">Veo without audio track</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold mb-4">
            Image Generation Credit Rates (Per Image)
          </h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left">Model</th>
                  <th className="border p-3 text-left">Credits per Image</th>
                  <th className="border p-3 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">Gen-4 Image (1080p)</td>
                  <td className="border p-3">
                    <strong>8 credits</strong>
                  </td>
                  <td className="border p-3">High resolution</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">Gen-4 Image (720p)</td>
                  <td className="border p-3">
                    <strong>5 credits</strong>
                  </td>
                  <td className="border p-3">Standard resolution</td>
                </tr>
                <tr>
                  <td className="border p-3">Gen-4 Image Turbo</td>
                  <td className="border p-3">
                    <strong>2 credits</strong>
                  </td>
                  <td className="border p-3">Fast, budget option</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">Gemini 3 Pro (1K/2K)</td>
                  <td className="border p-3">
                    <strong>20 credits</strong>
                  </td>
                  <td className="border p-3">High-detail</td>
                </tr>
                <tr>
                  <td className="border p-3">Gemini 3 Pro (4K)</td>
                  <td className="border p-3">
                    <strong>40 credits</strong>
                  </td>
                  <td className="border p-3">Premium resolution</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">Flash 2.5</td>
                  <td className="border p-3">
                    <strong>5 credits</strong>
                  </td>
                  <td className="border p-3">Quick generation</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold mb-4">
            Audio & Voice Credit Rates
          </h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left">Tool</th>
                  <th className="border p-3 text-left">Credit Cost</th>
                  <th className="border p-3 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">Text to Speech</td>
                  <td className="border p-3">
                    <strong>1 credit / 50 characters</strong>
                  </td>
                  <td className="border p-3">
                    Custom Voices available on Pro+
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">Text to SFX</td>
                  <td className="border p-3">
                    <strong>1 credit / 6 seconds</strong>
                  </td>
                  <td className="border p-3">Sound effects generation</td>
                </tr>
                <tr>
                  <td className="border p-3">Voice Dubbing</td>
                  <td className="border p-3">
                    <strong>1 credit / 2 seconds</strong>
                  </td>
                  <td className="border p-3">
                    Highest audio per-second cost
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">Voice Isolation</td>
                  <td className="border p-3">
                    <strong>1 credit / 6 seconds</strong>
                  </td>
                  <td className="border p-3">Extract vocals from audio</td>
                </tr>
                <tr>
                  <td className="border p-3">Speech to Speech</td>
                  <td className="border p-3">
                    <strong>1 credit / 3 seconds</strong>
                  </td>
                  <td className="border p-3">Voice transformation</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold mb-4">
            Post-Processing & Editing Credit Rates
          </h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left">Tool</th>
                  <th className="border p-3 text-left">Credit Cost</th>
                  <th className="border p-3 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">Upscale to 4K</td>
                  <td className="border p-3">
                    <strong>2 credits / second</strong>
                  </td>
                  <td className="border p-3">
                    Adds on top of generation cost
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">Stitch Video</td>
                  <td className="border p-3">
                    <strong>1 credit / 20 seconds</strong>
                  </td>
                  <td className="border p-3">Minimum 1 credit</td>
                </tr>
                <tr>
                  <td className="border p-3">Add Audio</td>
                  <td className="border p-3">
                    <strong>1 credit / 20 seconds</strong>
                  </td>
                  <td className="border p-3">Minimum 1 credit</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">Extract Audio</td>
                  <td className="border p-3">
                    <strong>1 credit / 20 seconds</strong>
                  </td>
                  <td className="border p-3">Minimum 1 credit</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-6 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
            <h3 className="font-bold mb-2">⚠️ Watch These Expensive Models</h3>
            <ul className="space-y-2">
              <li>
                <strong>Veo 3 with audio at 40 credits/second</strong> is 8×
                more expensive than Gen-4 Video Turbo. A 10-second Veo 3 clip
                burns 400 credits — nearly your entire Standard plan allotment.
              </li>
              <li>
                <strong>Gen-4 Aleph at 15 credits/second</strong> is the most
                expensive video model. A 10-second edit costs 150 credits.
              </li>
              <li>
                <strong>Voice Dubbing at 1 credit per 2 seconds</strong> is the
                most expensive audio tool — a 60-second dub costs 30 credits.
              </li>
              <li>
                <strong>Gemini 3 Pro 4K images at 40 credits each</strong> are
                the priciest image option.
              </li>
              <li>
                <strong>4K upscaling at 2 credits/second</strong> adds a
                significant surcharge on top of generation costs.
              </li>
            </ul>
          </div>
        </section>

        {/* Real Cost Calculator */}
        <section id="calculator" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            Real Cost Calculator: What You'll Spend Per Clip
          </h2>

          <h3 className="text-2xl font-bold mb-4">Example Costs</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left">Scenario</th>
                  <th className="border p-3 text-left">Model</th>
                  <th className="border p-3 text-left">Duration</th>
                  <th className="border p-3 text-left">Base Credits</th>
                  <th className="border p-3 text-left">+ 4K Upscale</th>
                  <th className="border p-3 text-left">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">Quick social clip</td>
                  <td className="border p-3">Gen-4 Video Turbo</td>
                  <td className="border p-3">5 sec</td>
                  <td className="border p-3">25</td>
                  <td className="border p-3">+10</td>
                  <td className="border p-3">
                    <strong>35 credits</strong>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">Standard clip</td>
                  <td className="border p-3">Gen-4 Video</td>
                  <td className="border p-3">5 sec</td>
                  <td className="border p-3">60</td>
                  <td className="border p-3">+10</td>
                  <td className="border p-3">
                    <strong>70 credits</strong>
                  </td>
                </tr>
                <tr>
                  <td className="border p-3">Hero content</td>
                  <td className="border p-3">Gen-4.5</td>
                  <td className="border p-3">10 sec</td>
                  <td className="border p-3">120</td>
                  <td className="border p-3">+20</td>
                  <td className="border p-3">
                    <strong>140 credits</strong>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">Turbo batch</td>
                  <td className="border p-3">Gen-4 Video Turbo</td>
                  <td className="border p-3">10 sec</td>
                  <td className="border p-3">50</td>
                  <td className="border p-3">+20</td>
                  <td className="border p-3">
                    <strong>70 credits</strong>
                  </td>
                </tr>
                <tr>
                  <td className="border p-3">Full edit pass</td>
                  <td className="border p-3">Gen-4 Aleph</td>
                  <td className="border p-3">10 sec</td>
                  <td className="border p-3">150</td>
                  <td className="border p-3">+20</td>
                  <td className="border p-3">
                    <strong>170 credits</strong>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">Premium video</td>
                  <td className="border p-3">Veo 3 (with audio)</td>
                  <td className="border p-3">10 sec</td>
                  <td className="border p-3">400</td>
                  <td className="border p-3">+20</td>
                  <td className="border p-3">
                    <strong>420 credits</strong>
                  </td>
                </tr>
                <tr>
                  <td className="border p-3">Performance clip</td>
                  <td className="border p-3">Act-Two</td>
                  <td className="border p-3">5 sec (min 3s)</td>
                  <td className="border p-3">25</td>
                  <td className="border p-3">+10</td>
                  <td className="border p-3">
                    <strong>35 credits</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            How Many Clips Can You Make Per Month?
          </h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left">Plan</th>
                  <th className="border p-3 text-left">Credits</th>
                  <th className="border p-3 text-left">
                    Gen-4 Turbo 5s clips
                  </th>
                  <th className="border p-3 text-left">Gen-4 10s clips</th>
                  <th className="border p-3 text-left">Gen-4.5 10s clips</th>
                  <th className="border p-3 text-left">
                    Veo 3 (audio) 10s clips
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">Standard</td>
                  <td className="border p-3">625</td>
                  <td className="border p-3">25 clips</td>
                  <td className="border p-3">5 clips</td>
                  <td className="border p-3">5 clips</td>
                  <td className="border p-3">1 clip</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">Pro</td>
                  <td className="border p-3">2,250</td>
                  <td className="border p-3">90 clips</td>
                  <td className="border p-3">18 clips</td>
                  <td className="border p-3">18 clips</td>
                  <td className="border p-3">5 clips</td>
                </tr>
                <tr>
                  <td className="border p-3">Unlimited</td>
                  <td className="border p-3">2,250 + Explore</td>
                  <td className="border p-3">
                    90+ (unlimited via Explore)
                  </td>
                  <td className="border p-3">
                    18+ (unlimited via Explore)
                  </td>
                  <td className="border p-3">
                    18+ (unlimited via Explore)
                  </td>
                  <td className="border p-3">Credits only (no Explore)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-bold mb-2">💡 Pro Tip: Account for Iterations</h3>
            <p className="mb-2">
              <strong>Most users need 3-5 generations per "keeper"</strong> to
              get the desired result. Multiply your per-clip cost by your hit
              rate.
            </p>
            <p>
              For example, if you need 3 iterations per final clip on Gen-4.5
              (120 credits), that's 360 credits per finished deliverable — not
              120.
            </p>
          </div>
        </section>

        {/* Free Plan */}
        <section id="free" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Free Plan — Best for Testing</h2>
          <p className="mb-4">
            <strong>Price:</strong> $0
          </p>
          <p className="mb-4">
            <strong>Best for:</strong> First-time users exploring AI
            video/image generation. Students and hobbyists evaluating whether
            Runway fits their workflow.
          </p>
          <p className="mb-4">
            <strong>Not for:</strong> Anyone who needs watermark-free output,
            Gen-4 Video models, or more than a handful of generations.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">What You Get</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>125 one-time credits (they never expire)</li>
            <li>
              Gen-4 Turbo (Image to Video), Gen-4 Image, Gemini, Flash, Text to
              Speech
            </li>
            <li>5 GB storage, 3 video editor projects</li>
            <li>720p max export with watermark</li>
          </ul>

          <p className="mb-4">
            <strong>Expected output:</strong> Roughly 5 clips at 5 seconds each
            using Gen-4 Video Turbo, or ~15-25 images. That's it — these are
            one-time credits with no monthly refresh.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">
            Hidden Limits / Gotchas
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              No access to Gen-4 Video (standard), Gen-4.5, Aleph, Act-Two, or
              Veo models
            </li>
            <li>Watermark on all exports — not suitable for client delivery</li>
            <li>Cannot purchase additional credits</li>
          </ul>

          <p className="mb-4">
            <strong>Upgrade trigger:</strong> You liked what you saw and need
            watermark-free output or access to Gen-4 Video.
          </p>
        </section>

        {/* Standard Plan */}
        <section id="standard" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            Standard Plan — Light Creators, Small Teams
          </h2>
          <p className="mb-4">
            <strong>Price:</strong> $12/month (annual) or $15/month (monthly)
          </p>
          <p className="mb-4">
            <strong>Best for:</strong> Solo creators publishing 2-4 polished
            clips per month. Small teams (up to 5 editors) doing occasional
            AI-assisted content.
          </p>
          <p className="mb-4">
            <strong>Not for:</strong> Anyone producing daily content or relying
            heavily on premium models like Veo 3.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">What You Get</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>625 credits/month (refreshed on billing date)</li>
            <li>
              All video models including Gen-4, Gen-4.5, Gen-4 Aleph, Veo,
              Act-Two
            </li>
            <li>Watermark removal on all models</li>
            <li>Upscale resolution available</li>
            <li>100 GB storage, 5 editors, unlimited projects</li>
            <li>Ability to run Workflows and purchase additional credits</li>
          </ul>

          <p className="mb-4">
            <strong>Expected output:</strong> ~25 clips at 5 seconds via Gen-4
            Turbo, or ~5 clips at 10 seconds via Gen-4.5. Realistically, with
            iterations and rerolls, plan for 8-15 finished clips.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">
            Hidden Limits / Gotchas
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              625 credits can vanish quickly if you use Veo 3 (400 credits for
              one 10-second clip)
            </li>
            <li>
              Credits shared across all workspace editors — 5 editors splitting
              625 credits is tight
            </li>
            <li>No Custom Voices for Lip Sync or Text to Speech</li>
          </ul>

          <p className="mb-4">
            <strong>Upgrade trigger:</strong> You consistently burn through
            credits before your billing date, or you need Custom Voices.
          </p>
        </section>

        {/* Pro Plan */}
        <section id="pro" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            Pro Plan — Weekly Output, Freelancers
          </h2>
          <p className="mb-4">
            <strong>Price:</strong> $28/month (annual) or $35/month (monthly)
          </p>
          <p className="mb-4">
            <strong>Best for:</strong> Freelancers delivering AI video to
            clients weekly. YouTube creators producing regular content.
            Professionals who need Custom Voice capabilities.
          </p>
          <p className="mb-4">
            <strong>Not for:</strong> Users who primarily need volume over
            quality (Unlimited's Explore Mode is better for that).
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">What You Get</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>2,250 credits/month</li>
            <li>
              Everything in Standard, plus Custom Voices for Lip Sync and Text
              to Speech
            </li>
            <li>500 GB storage, up to 10 editors</li>
          </ul>

          <p className="mb-4">
            <strong>Expected output:</strong> ~90 clips at 5 seconds via Gen-4
            Turbo, or ~18 clips at 10 seconds via Gen-4.5. With a practical 3:1
            iteration ratio, budget for 25-35 polished deliverables per month.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">
            Hidden Limits / Gotchas
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Still no Explore Mode — every generation costs credits</li>
            <li>
              10 editors sharing 2,250 credits means ~225 credits per person if
              split evenly
            </li>
            <li>Custom Voices are powerful but still consume TTS credits</li>
          </ul>

          <p className="mb-4">
            <strong>Upgrade trigger:</strong> You're iterating heavily (concept
            art, storyboarding) and burning credits before finals, or you want
            unlimited generation access for creative exploration.
          </p>
        </section>

        {/* Unlimited Plan */}
        <section id="unlimited" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            Unlimited Plan — Iteration-Heavy Workflows; Explore Mode
          </h2>
          <p className="mb-4">
            <strong>Price:</strong> $76/month (annual) or $95/month (monthly)
          </p>
          <p className="mb-4">
            <strong>Best for:</strong> TikTok/Reels creators publishing daily.
            Studios and creators who iterate heavily. Anyone who wants to
            experiment without watching a credit counter.
          </p>
          <p className="mb-4">
            <strong>Not for:</strong> Users who only need Veo 3 or Gemini 3 Pro
            (these are not included in Explore Mode).
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">What You Get</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>2,250 credits/month (same as Pro) plus Explore Mode</li>
            <li>
              Explore Mode provides unlimited generations of Aleph, Gen-4.5,
              Gen-4 Turbo, Gen-4 (Image and Video), Act-Two, and Gen-3 Alpha
              Turbo — at a relaxed rate
            </li>
            <li>Everything from Pro, including Custom Voices</li>
            <li>500 GB storage, 10 editors</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-6">
            Explore Mode Explained
          </h3>
          <p className="mb-4">
            Explore Mode lets you generate unlimited video and images using
            supported models without spending credits. The tradeoff is a
            "relaxed rate" — meaning lower queue priority and potentially longer
            wait times compared to credit-based (priority) generations.
          </p>
          <p className="mb-4">Think of it as:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Credits Mode</strong> = priority queue, instant-ish
              rendering, credits deducted
            </li>
            <li>
              <strong>Explore Mode</strong> = relaxed queue, variable wait
              times, no credit cost
            </li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-6">
            When to Use Explore Mode vs. Credits
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Use Explore Mode</strong> for iteration, concept
              development, drafts, and experimentation
            </li>
            <li>
              <strong>Use Credits Mode</strong> for final renders, client
              deliverables, and time-sensitive production
            </li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-6">
            Hidden Limits / Gotchas
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              Explore Mode does not cover Veo 3, Veo 3.1, or Gemini 3 Pro —
              those still require credits
            </li>
            <li>
              "Relaxed rate" means unpredictable wait times during peak hours
            </li>
            <li>The 2,250 monthly credits still don't roll over</li>
            <li>
              At $76-$95/month, this is a significant commitment — make sure
              you'll use the volume
            </li>
          </ul>

          <p className="mb-4">
            <strong>Upgrade trigger:</strong> You need SLA guarantees, SSO,
            workspace analytics, or compliance requirements → Enterprise.
          </p>
        </section>

        {/* Enterprise Plan */}
        <section id="enterprise" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            Enterprise — Security, SSO, Analytics, Compliance
          </h2>
          <p className="mb-4">
            <strong>Price:</strong> Custom (contact sales)
          </p>
          <p className="mb-4">
            <strong>Best for:</strong> Agencies, production studios, and
            organizations that need IT controls, security compliance, and scale.
          </p>
          <p className="mb-4">
            <strong>Not for:</strong> Individual creators or small teams
            (overkill on compliance; Standard or Pro covers you).
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">What You Get</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>All Pro plan features</li>
            <li>SSO (single sign-on)</li>
            <li>Custom credit amounts (negotiable)</li>
            <li>Configurable organization and team spaces</li>
            <li>Advanced security and compliance</li>
            <li>
              Enterprise-wide onboarding and ongoing success program
            </li>
            <li>Priority support</li>
            <li>Integration with internal tools</li>
            <li>Workspace Analytics</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-6">
            Hidden Limits / Gotchas
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Requires a sales conversation — no self-serve sign-up</li>
            <li>Pricing is entirely custom and contract-based</li>
            <li>Typically requires annual commitments</li>
          </ul>
        </section>

        {/* Hidden Costs */}
        <section id="hidden-costs" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            Hidden Costs and Gotchas Most People Miss
          </h2>
          <ul className="list-disc pl-6 mb-6 space-y-3">
            <li>
              <strong>Credits don't roll over.</strong> Your monthly credit
              allotment expires on your billing date — no exceptions. Only
              purchased credits carry forward.
            </li>
            <li>
              <strong>Shared credits across workspace editors.</strong> This is
              the #1 gotcha for teams. Adding a 5th editor to your Standard
              plan doesn't add 625 credits — it spreads the same 625 across 5
              people.
            </li>
            <li>
              <strong>Explore Mode exclusions.</strong> Explore Mode covers
              Gen-4.5, Gen-4, Gen-4 Turbo, Aleph, Act-Two, and Gen-3 Alpha Turbo
              — but not Veo 3, Veo 3.1, or Gemini 3 Pro. Premium models still
              cost credits even on Unlimited.
            </li>
            <li>
              <strong>Post-processing adds up.</strong> 4K upscaling costs 2
              credits/second on top of generation. A 10-second clip that cost
              120 credits to generate costs an additional 20 credits to upscale
              — a 17% surcharge.
            </li>
            <li>
              <strong>Audio and voice costs are easy to miss.</strong> Voice
              Dubbing at 1 credit per 2 seconds is the most expensive audio
              tool. A 2-minute dub costs 60 credits.
            </li>
            <li>
              <strong>API credits are separate.</strong> If you use both the web
              app and the API, you need separate credit budgets. There's no
              transfer between them.
            </li>
            <li>
              <strong>Auto-renewal is on by default.</strong> Subscriptions
              auto-renew at the then-current rate unless you cancel before the
              renewal date.
            </li>
            <li>
              <strong>Minimum credit purchase is 1,000.</strong> You can't buy a
              small top-up of 100 credits. The minimum purchase acts as a floor
              for supplementary spending.
            </li>
          </ul>
        </section>

        {/* Comparison */}
        <section id="comparison" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            Runway ML vs Alternatives (2026)
          </h2>
          <p className="mb-6">
            How does Runway AI pricing compare to competing AI video and
            creative platforms?
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left">Platform</th>
                  <th className="border p-3 text-left">Pricing Model</th>
                  <th className="border p-3 text-left">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">Runway</td>
                  <td className="border p-3">Monthly credits + Explore Mode</td>
                  <td className="border p-3">
                    Full-featured AI video suite (Gen-4.5, Aleph, Veo)
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">Pika</td>
                  <td className="border p-3">Credits-based</td>
                  <td className="border p-3">Quick social video generation</td>
                </tr>
                <tr>
                  <td className="border p-3">Kling AI</td>
                  <td className="border p-3">Credits/subscription</td>
                  <td className="border p-3">Budget AI video generation</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">Luma Dream Machine</td>
                  <td className="border p-3">Credits-based</td>
                  <td className="border p-3">Realistic motion, physics-aware</td>
                </tr>
                <tr>
                  <td className="border p-3">Kaiber</td>
                  <td className="border p-3">Subscription</td>
                  <td className="border p-3">Music video and artistic styles</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">Adobe Firefly Video</td>
                  <td className="border p-3">Included in Creative Cloud</td>
                  <td className="border p-3">Adobe ecosystem integration</td>
                </tr>
                <tr>
                  <td className="border p-3">CapCut (AI features)</td>
                  <td className="border p-3">Freemium</td>
                  <td className="border p-3">
                    AI-assisted editing, not generation
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">VEED</td>
                  <td className="border p-3">Subscription</td>
                  <td className="border p-3">AI video editing and subtitles</td>
                </tr>
                <tr>
                  <td className="border p-3">Descript</td>
                  <td className="border p-3">Subscription</td>
                  <td className="border p-3">
                    AI video editing, transcription
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">
                    <Link
                      href="/synthesia-pricing"
                      className="text-blue-600 hover:underline"
                    >
                      Synthesia
                    </Link>
                  </td>
                  <td className="border p-3">Subscription</td>
                  <td className="border p-3">AI avatar video, not generative</td>
                </tr>
                <tr>
                  <td className="border p-3">Midjourney</td>
                  <td className="border p-3">Subscription</td>
                  <td className="border p-3">Image generation (no video)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-4">
            <strong>Runway's unique advantages:</strong> Model breadth (Gen-4.5,
            Aleph, Act-Two, Veo integration), Explore Mode for unlimited
            iteration, and end-to-end video editing capabilities within the same
            platform.
          </p>
        </section>

        {/* How to Choose */}
        <section id="how-to-choose" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            How to Choose the Right Plan
          </h2>

          <h3 className="text-2xl font-bold mb-4">Decision Tree</h3>
          <div className="space-y-4 mb-8">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="font-bold mb-2">
                "I just want to try Runway"
              </p>
              <p>
                → Choose <strong>Free</strong>. Use your 125 credits to test
                Gen-4 Turbo and image generation.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="font-bold mb-2">
                "I need watermark-free output and access to all video models"
              </p>
              <p>
                → Choose <strong>Standard ($12/mo annual)</strong>. This is the
                minimum viable plan for professional output.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="font-bold mb-2">
                "I deliver AI video to clients regularly (weekly+)"
              </p>
              <p>
                → Choose <strong>Pro ($28/mo annual)</strong>. 2,250
                credits/month handles ~25 polished deliverables. Add purchased
                credits for overflow months.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="font-bold mb-2">
                "I iterate constantly and don't want to worry about credit
                counts"
              </p>
              <p>
                → Choose <strong>Unlimited ($76/mo annual)</strong>. Explore
                Mode gives you unlimited drafts; use credits for finals.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="font-bold mb-2">
                "I need SSO, compliance, analytics, or 10+ editors"
              </p>
              <p>
                → Choose <strong>Enterprise</strong>. Contact Runway sales for
                custom pricing.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">Persona Recommendations</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>TikTok / Reels Creator:</strong> Go Unlimited. You need
              high volume (daily posting) and heavy iteration. Explore Mode lets
              you generate dozens of concepts without cost anxiety.
            </li>
            <li>
              <strong>YouTube Creator:</strong> Start with Pro. Weekly output of
              2-4 polished clips per video fits within 2,250 credits. Upgrade to
              Unlimited if you start incorporating AI video into every episode.
            </li>
            <li>
              <strong>E-Commerce Brand:</strong> Standard or Pro depending on
              catalog size. If you're generating product-adjacent videos for
              ads, Standard covers 10-20 clips/month.
            </li>
            <li>
              <strong>Agency:</strong> Enterprise for multi-client workspaces,
              SSO, and compliance. Alternatively, run separate Pro workspaces
              per client to keep credit pools isolated.
            </li>
            <li>
              <strong>Film / Animation Studio:</strong> Unlimited for creative
              development + purchased credit top-ups for final renders. Consider
              Enterprise if you need SLA guarantees.
            </li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2">
                How much does Runway ML cost?
              </h3>
              <p>
                Runway ML costs between $0 and $95 per month. The Free plan
                includes 125 one-time credits. Standard is $12/month (annual)
                with 625 monthly credits. Pro is $28/month (annual) with 2,250
                credits. Unlimited is $76/month (annual) with 2,250 credits plus
                unlimited Explore Mode generations.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">
                How do Runway credits work?
              </h3>
              <p>
                Credits are Runway's internal currency. Every generation deducts
                credits based on the model and duration. Gen-4 Turbo costs 5
                credits/second, Gen-4 Video costs 12 credits/second, and Veo 3
                with audio costs 40 credits/second. Monthly credits expire on
                your billing date, but purchased credits never expire.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">
                Do Runway credits roll over?
              </h3>
              <p>
                No, monthly plan credits do not roll over. They reset on your
                billing date each month. Use them or lose them. However,
                separately purchased credit top-ups do not expire as long as
                your account remains active.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">
                What's the difference between Runway Standard and Pro?
              </h3>
              <p>
                Standard gives you 625 credits/month with 100GB storage and up
                to 5 editors. Pro provides 2,250 credits/month (3.6× more),
                500GB storage, up to 10 editors, and Custom Voices for Lip Sync
                and Text to Speech. Standard is $12/mo (annual), Pro is $28/mo
                (annual).
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">
                Is Runway Unlimited really unlimited?
              </h3>
              <p>
                Partially. The Unlimited plan provides unlimited generations
                through Explore Mode for supported models (Gen-4.5, Gen-4, Gen-4
                Turbo, Aleph, Act-Two). However, Veo 3 and Gemini 3 Pro still
                require credits. Explore Mode uses a relaxed rate with lower
                queue priority.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">
                Can I use Runway videos commercially?
              </h3>
              <p>
                Yes. Runway grants commercial use rights on all plan tiers,
                including the Free plan. You retain ownership of all generated
                content and no attribution is required. However, Free plan
                outputs carry a watermark.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">
                How many credits for a 10-second video?
              </h3>
              <p>
                It depends on the model. Gen-4 Turbo: 50 credits (5
                credits/second). Gen-4 Video: 120 credits (12 credits/second).
                Gen-4.5: 120 credits. Veo 3 with audio: 400 credits (40
                credits/second). Adding 4K upscaling costs an additional 20
                credits (2 credits/second).
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">
                Can I buy extra Runway credits?
              </h3>
              <p>
                Yes, on Standard, Pro, and Unlimited plans. The minimum purchase
                is 1,000 credits through the Plans & Billing section. Purchased
                credits never expire as long as your account remains active.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Try Runway ML?</h2>
          <p className="mb-6 text-lg">
            Start with the Free plan (125 credits) to explore AI video
            generation. Upgrade to Standard ($12/mo) when you're ready for
            professional, watermark-free output.
          </p>
          <a
            href="https://runwayml.com/pricing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            View Runway Pricing →
          </a>
        </section>

        {/* Related Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Related AI Tool Pricing Guides</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/synthesia-pricing"
                className="text-blue-600 hover:underline"
              >
                Synthesia Pricing 2026: AI Avatar Video Plans & Costs
              </Link>
            </li>
            <li>
              <Link
                href="/midjourney-pricing"
                className="text-blue-600 hover:underline"
              >
                Midjourney Pricing 2026: Plans, Costs & What You Pay
              </Link>
            </li>
            <li>
              <Link
                href="/chatgpt-plus-pricing"
                className="text-blue-600 hover:underline"
              >
                ChatGPT Plus Pricing 2026: Plans, Team & Enterprise Costs
              </Link>
            </li>
            <li>
              <Link
                href="/grammarly-pricing"
                className="text-blue-600 hover:underline"
              >
                Grammarly Pricing 2026: Premium, Business & Enterprise Costs
              </Link>
            </li>
            <li>
              <Link href="/" className="text-blue-600 hover:underline">
                Browse All AI Tools →
              </Link>
            </li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="text-sm text-gray-600 border-t pt-6">
          <p className="mb-2">
            <strong>Last updated:</strong> March 8, 2026
          </p>
          <p className="mb-2">
            All pricing information sourced from{" "}
            <a
              href="https://runwayml.com/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Runway's official pricing page
            </a>{" "}
            and verified through multiple third-party sources. Credit rates
            verified against Runway Help Center documentation.
          </p>
          <p>
            Part of the{" "}
            <Link href="/" className="text-blue-600 hover:underline">
              AISO Tools
            </Link>{" "}
            AI pricing transparency series.
          </p>
        </footer>
      </article>
    </>
  );
}
