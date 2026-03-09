import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ElevenLabs Pricing 2026: Complete Guide to Plans & Costs",
  description:
    "Complete ElevenLabs pricing guide for 2026. Compare Free, Starter ($5/mo), Creator ($11/mo), Pro ($99/mo), Scale, and Business plans. Character credits, voice cloning, and overage costs explained.",
  keywords: [
    "elevenlabs pricing",
    "elevenlabs cost",
    "how much does elevenlabs cost",
    "elevenlabs plans",
    "elevenlabs starter pricing",
    "elevenlabs creator pricing",
    "elevenlabs pro pricing",
    "elevenlabs pricing 2026",
    "elevenlabs credits",
    "text to speech pricing",
  ],
  openGraph: {
    title: "ElevenLabs Pricing 2026: Complete Guide to Plans & Costs",
    description:
      "Transparent breakdown of ElevenLabs pricing, character credits, voice cloning costs, and overage rates. Updated March 2026.",
    url: "https://aisotools.com/elevenlabs-pricing",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/elevenlabs-pricing",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does ElevenLabs cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ElevenLabs offers a free plan with 10,000 characters per month. Paid plans start at $5/month (Starter with 30,000 characters), $11/month (Creator with 100,000 characters), $99/month (Pro with 500,000 characters), $330/month (Scale with 2M characters), and $1,320/month (Business with 11M characters). Enterprise pricing is custom.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between Flash and Multilingual models?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Flash is optimized for speed with sub-second latency and uses fewer credits (double the characters), ideal for chatbots and real-time applications. Multilingual v2 offers higher quality audio (192 kbps), supports 29+ languages with expressive tone and emotion, better for creative content like podcasts and YouTube videos.",
      },
    },
    {
      "@type": "Question",
      name: "How do ElevenLabs character credits work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For Multilingual models, 1 text character = 1 credit. For Flash models, pricing is discounted at 0.5-1 credit per character depending on the model. Credits reset monthly and don't roll over. If you exceed your plan's quota, overage rates apply: $0.30/1k chars on Creator, $0.24/1k on Pro, $0.18/1k on Scale, and $0.12/1k on Business.",
      },
    },
    {
      "@type": "Question",
      name: "Does ElevenLabs offer a free plan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, ElevenLabs offers a permanent free plan with 10,000 Multilingual characters or 20,000 Flash characters per month, 128 kbps audio quality, basic TTS and dubbing features, 3 custom voices, 3 projects, and 2 concurrent requests. However, commercial use is forbidden and attribution is required.",
      },
    },
    {
      "@type": "Question",
      name: "Can I clone my voice with ElevenLabs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Instant voice cloning is available on all paid plans (Starter and above). Professional Voice Cloning (PVC) with higher quality requires Creator plan or higher. Creator, Pro, and Scale plans include 1 PVC slot, while Business includes 3 PVC slots.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I exceed my monthly character limit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On paid plans (Creator and above), you'll be charged overage fees per 1,000 characters: Creator $0.30, Pro $0.24, Scale $0.18, Business $0.12. The higher your plan tier, the lower your per-unit overage cost. On Free and Starter plans, you cannot exceed your quota without upgrading.",
      },
    },
    {
      "@type": "Question",
      name: "Is ElevenLabs good for commercial use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all paid plans (Starter and above) include commercial usage rights, meaning you can use generated audio in YouTube videos, podcasts, audiobooks, client projects, and more without attribution. The Free plan does not allow commercial use.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel ElevenLabs anytime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can cancel your ElevenLabs subscription at any time through your account settings. You'll retain access for the remainder of your current billing period. Monthly subscriptions can be canceled before the next billing date.",
      },
    },
  ],
};

export default function ElevenLabsPricingPage() {
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
              ElevenLabs Pricing
            </span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              ElevenLabs Pricing 2026: Complete Guide to Plans & Costs
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Complete breakdown of ElevenLabs pricing, character credits,
              voice cloning costs, and what you'll actually pay. From free to
              enterprise.
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
                Leading AI voice platform
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
                  <strong>Free:</strong> $0 — 10k Multilingual or 20k Flash
                  characters/month. No commercial use, attribution required.
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
                  <strong>Starter:</strong> $5/month — 30k/60k chars, instant
                  voice cloning, commercial use.
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
                  <strong>Creator (Most Popular):</strong> $11/month — 100k/200k
                  chars, professional voice cloning, 192 kbps audio, $0.30/1k
                  overage.
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
                  <strong>Pro:</strong> $99/month — 500k/1M chars, 10
                  concurrent requests, $0.24/1k overage.
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
                  <strong>Scale & Business:</strong> $330-1,320/month — 2M-11M
                  chars, multi-seat, lower overage rates.
                </span>
              </li>
            </ul>
          </section>

          {/* Table of Contents */}
          <nav className="bg-white border border-gray-200 rounded-lg p-6 mb-12">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Table of Contents
            </h2>
            <ol className="space-y-2 text-gray-700">
              <li>
                <a href="#plans" className="hover:text-blue-600">
                  1. ElevenLabs Pricing Plans Overview
                </a>
              </li>
              <li>
                <a href="#how-credits-work" className="hover:text-blue-600">
                  2. How Character Credits Work
                </a>
              </li>
              <li>
                <a href="#models" className="hover:text-blue-600">
                  3. Flash vs Multilingual Models
                </a>
              </li>
              <li>
                <a href="#free" className="hover:text-blue-600">
                  4. Free Plan ($0)
                </a>
              </li>
              <li>
                <a href="#starter" className="hover:text-blue-600">
                  5. Starter Plan ($5/month)
                </a>
              </li>
              <li>
                <a href="#creator" className="hover:text-blue-600">
                  6. Creator Plan ($11/month)
                </a>
              </li>
              <li>
                <a href="#pro" className="hover:text-blue-600">
                  7. Pro Plan ($99/month)
                </a>
              </li>
              <li>
                <a href="#scale" className="hover:text-blue-600">
                  8. Scale Plan ($330/month)
                </a>
              </li>
              <li>
                <a href="#business" className="hover:text-blue-600">
                  9. Business Plan ($1,320/month)
                </a>
              </li>
              <li>
                <a href="#enterprise" className="hover:text-blue-600">
                  10. Enterprise Plan (Custom)
                </a>
              </li>
              <li>
                <a href="#comparison" className="hover:text-blue-600">
                  11. Plan Comparison Table
                </a>
              </li>
              <li>
                <a href="#overages" className="hover:text-blue-600">
                  12. Overage Costs & How They Work
                </a>
              </li>
              <li>
                <a href="#real-costs" className="hover:text-blue-600">
                  13. What You'll Actually Pay
                </a>
              </li>
              <li>
                <a href="#decision-guide" className="hover:text-blue-600">
                  14. Which Plan Should You Choose?
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-blue-600">
                  15. Frequently Asked Questions
                </a>
              </li>
            </ol>
          </nav>

          {/* 1. ElevenLabs Pricing Plans Overview */}
          <section id="plans" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              1. ElevenLabs Pricing Plans Overview
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              ElevenLabs uses a credit-based pricing model with six main tiers
              designed for everyone from hobbyists to large enterprises:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 bg-white border border-gray-200 rounded-lg">
                <div className="mb-3 sm:mb-0">
                  <div className="font-bold text-lg text-gray-900">Free</div>
                  <div className="text-sm text-gray-600">
                    10k Multilingual / 20k Flash chars
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-900">$0</div>
                  <div className="text-sm text-gray-600">Forever free</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 bg-white border border-gray-200 rounded-lg">
                <div className="mb-3 sm:mb-0">
                  <div className="font-bold text-lg text-gray-900">Starter</div>
                  <div className="text-sm text-gray-600">
                    30k Multilingual / 60k Flash chars
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-900">$5</div>
                  <div className="text-sm text-gray-600">per month</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 bg-blue-50 border-2 border-blue-600 rounded-lg relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
                <div className="mb-3 sm:mb-0">
                  <div className="font-bold text-lg text-gray-900">Creator</div>
                  <div className="text-sm text-gray-600">
                    100k Multilingual / 200k Flash chars
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-900">$11</div>
                  <div className="text-sm text-gray-600">per month (50% off first month)</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 bg-white border border-gray-200 rounded-lg">
                <div className="mb-3 sm:mb-0">
                  <div className="font-bold text-lg text-gray-900">Pro</div>
                  <div className="text-sm text-gray-600">
                    500k Multilingual / 1M Flash chars
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-900">$99</div>
                  <div className="text-sm text-gray-600">per month</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 bg-white border border-gray-200 rounded-lg">
                <div className="mb-3 sm:mb-0">
                  <div className="font-bold text-lg text-gray-900">Scale</div>
                  <div className="text-sm text-gray-600">
                    2M Multilingual / 4M Flash chars
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-900">$330</div>
                  <div className="text-sm text-gray-600">per month (3 seats)</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 bg-white border border-gray-200 rounded-lg">
                <div className="mb-3 sm:mb-0">
                  <div className="font-bold text-lg text-gray-900">Business</div>
                  <div className="text-sm text-gray-600">
                    11M Multilingual / 22M Flash chars
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-900">$1,320</div>
                  <div className="text-sm text-gray-600">per month (15+ seats)</div>
                </div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-gray-900">Key takeaway:</strong>{" "}
              ElevenLabs pricing scales with usage. The Creator plan at
              $11/month offers the best value for most content creators,
              offering professional voice cloning and high-quality audio. Higher
              tiers unlock larger quotas and lower overage rates.
            </p>
          </section>

          {/* 2. How Character Credits Work */}
          <section id="how-credits-work" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              2. How Character Credits Work
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              ElevenLabs bills by "character credits" — not by audio duration.
              Here's what you need to know:
            </p>
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Credit System Basics
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
                    <strong>For Multilingual models:</strong> 1 text character =
                    1 credit (simple 1:1 ratio)
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
                    <strong>For Flash models:</strong> Discounted pricing at
                    0.5-1 credit per character (up to 2× more characters)
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
                    <strong>Credits reset monthly</strong> — Unused credits
                    don't roll over to the next billing period
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
                    <strong>Text length matters:</strong> "Hello world" (11
                    chars) = 11 credits on Multilingual
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
                    <strong>Spaces and punctuation count</strong> — Everything
                    in your text input uses credits
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Pro Tip: Estimate Your Usage
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Roughly 1,000 characters = 1-2 minutes of audio (depending on
                voice speed). A 2,000-word blog post ≈ 10,000 characters.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • <strong>100k characters</strong> = 100 short-form videos
                  (1-2 min each)
                </li>
                <li>
                  • <strong>500k characters</strong> = 10-15 long-form YouTube
                  videos (10-20 min)
                </li>
                <li>
                  • <strong>2M characters</strong> = 40-50 podcast episodes
                  (30-60 min)
                </li>
              </ul>
            </div>
          </section>

          {/* 3. Flash vs Multilingual Models */}
          <section id="models" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              3. Flash vs Multilingual Models
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              ElevenLabs offers two types of TTS models with different
              performance and pricing characteristics:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 text-blue-600 rounded-lg p-2">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Flash Model
                  </h3>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-gray-700">
                      <strong>Sub-second latency</strong> — Perfect for
                      real-time apps
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-gray-700">
                      <strong>Double the characters</strong> — 0.5-1 credit per
                      character
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-gray-700">
                      <strong>128 kbps audio</strong> — Moderate quality
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">~</span>
                    <span className="text-gray-700">
                      Less expressive tone — Minimal emotion
                    </span>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="font-semibold text-gray-900 mb-2">
                    Ideal for:
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Chatbots and voice agents</li>
                    <li>• Real-time conversational AI</li>
                    <li>• Quick output previews</li>
                    <li>• Budget-conscious projects</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border-2 border-purple-300 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-100 text-purple-600 rounded-lg p-2">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Multilingual v2
                  </h3>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-gray-700">
                      <strong>Highest quality</strong> — 192 kbps, stereo
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-gray-700">
                      <strong>29+ languages</strong> — Full accent support
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-gray-700">
                      <strong>Expressive & emotional</strong> — Natural pacing
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">~</span>
                    <span className="text-gray-700">
                      Slower generation — More compute-intensive
                    </span>
                  </div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="font-semibold text-gray-900 mb-2">
                    Ideal for:
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• YouTube videos and podcasts</li>
                    <li>• Audiobooks and narration</li>
                    <li>• Multilingual dubbing</li>
                    <li>• Professional creative content</li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-gray-900">Bottom line:</strong> Use Flash
              for drafts and real-time apps where speed matters. Use
              Multilingual for final renders where quality and emotion are
              critical. You can toggle between models anytime.
            </p>
          </section>

          {/* 4. Free Plan */}
          <section id="free" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              4. Free Plan ($0)
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              ElevenLabs' free plan lets you explore the platform without a
              credit card, but with significant limitations.
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
                    <strong>10,000 characters/month (Multilingual)</strong> — Or
                    20,000 characters using Flash models
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
                    <strong>Text-to-Speech access</strong> — All standard voice
                    library
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
                    <strong>Speech-to-Text</strong> — 2.5 hours via API, 12
                    minutes via UI
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
                    <strong>3 custom voices</strong> — Design your own voice
                    profiles
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
                    <strong>3 projects</strong> — Basic project organization
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
                    <strong>2 concurrent requests</strong> — Generate up to 2
                    audio files simultaneously
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
                    <strong>128 kbps audio quality</strong> — Standard quality
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Critical Limitations
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  ❌ <strong>No commercial use</strong> — Cannot use audio in
                  commercial projects
                </li>
                <li>
                  ❌ <strong>Attribution required</strong> — Must credit
                  ElevenLabs in your work
                </li>
                <li>❌ <strong>No voice cloning</strong> — Can't clone voices</li>
                <li>
                  ❌ <strong>Low audio quality</strong> — 128 kbps only (vs 192
                  kbps Premium)
                </li>
                <li>
                  ❌ <strong>Limited concurrency</strong> — Only 2 requests at a
                  time
                </li>
              </ul>
            </div>
          </section>

          {/* 5. Starter Plan */}
          <section id="starter" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              5. Starter Plan ($5/month)
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The Starter plan is designed for hobbyists creating personal
              projects with AI audio.
            </p>
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    $5
                    <span className="text-xl font-normal text-gray-600">
                      /month
                    </span>
                  </div>
                  <div className="text-gray-600">Billed monthly</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">
                    30k / 60k
                  </div>
                  <div className="text-sm text-gray-600">
                    Multilingual / Flash chars
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Everything in Free, plus:
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
                    <strong>Commercial license</strong> — Use audio in your
                    projects without attribution
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
                    <strong>Instant voice cloning</strong> — Clone voices from
                    audio samples
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
                    <strong>Automated dubbing</strong> — Multilingual audio
                    translation
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
                    <strong>Dubbing Studio</strong> — Advanced dubbing editor
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
                    <strong>3 concurrent requests</strong> — Up from 2 on Free
                  </span>
                </li>
              </ul>
            </div>
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-gray-900">Who it's for:</strong> Starter
              is perfect for hobbyists creating small projects — social media
              clips, prototype apps, or casual content. At $5/month it's an
              affordable entry point to commercial voice cloning.
            </p>
          </section>

          {/* 6. Creator Plan */}
          <section id="creator" className="mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-300 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                6. Creator Plan ($11/month)
              </h2>
            </div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The Creator plan is ElevenLabs' sweet spot for serious content
              creators producing premium audio for global audiences.
            </p>
            <div className="bg-white border-2 border-blue-300 rounded-lg p-6 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    $11
                    <span className="text-xl font-normal text-gray-600">
                      /month
                    </span>
                  </div>
                  <div className="text-green-600 font-semibold">
                    50% off first month ($5.50)
                  </div>
                  <div className="text-gray-600 mt-1">Billed monthly</div>
                </div>
                <div className="text-right mt-4 sm:mt-0">
                  <div className="text-2xl font-bold text-blue-600">
                    100k / 200k
                  </div>
                  <div className="text-sm text-gray-600">
                    Multilingual / Flash chars
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Everything in Starter, plus:
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
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
                        <strong>Professional Voice Cloning (1 PVC)</strong> —
                        Higher quality voice clones
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
                        <strong>192 kbps high-quality audio</strong> — Up from
                        128 kbps (50% better quality)
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
                        <strong>Overage billing</strong> — $0.30/1k characters
                        beyond quota
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
                        <strong>5 concurrent requests</strong> — Generate
                        multiple files in parallel
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
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
                        <strong>Conversational AI (250 minutes)</strong> —
                        Interactive voice dialogues
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
                        <strong>Voice tools (100 min)</strong> — Voice changer,
                        voice isolator
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
                        <strong>Dubbing (50 min)</strong> — Multilingual content
                        translation
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
                        <strong>Sound effects (500 generations)</strong> —
                        Text-to-sound FX
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-gray-900">Why it's the sweet spot:</strong>{" "}
              Creator offers the best price-per-character ratio for most users.
              100k characters is enough for ~100 short-form videos or 10-15
              long-form YouTube videos per month. The jump to 192 kbps audio
              quality is noticeable and professional.
            </p>
          </section>

          {/* 7. Pro Plan */}
          <section id="pro" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              7. Pro Plan ($99/month)
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The Pro plan is designed for professional creators ramping up
              their content production with significantly higher quotas.
            </p>
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    $99
                    <span className="text-xl font-normal text-gray-600">
                      /month
                    </span>
                  </div>
                  <div className="text-gray-600">Billed monthly</div>
                </div>
                <div className="text-right mt-4 sm:mt-0">
                  <div className="text-2xl font-bold text-blue-600">
                    500k / 1M
                  </div>
                  <div className="text-sm text-gray-600">
                    Multilingual / Flash chars
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Everything in Creator, plus:
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
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
                        <strong>5x more characters</strong> — 500k Multilingual
                        or 1M Flash
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
                        <strong>Lower overage rate</strong> — $0.24/1k
                        characters (20% cheaper)
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
                        <strong>10 concurrent requests</strong> — Double the
                        parallel generation
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
                        <strong>PCM audio output</strong> — 44.1kHz uncompressed
                        audio via API
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
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
                        <strong>Conversational AI (1,100 min)</strong> — 4.4×
                        more than Creator
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
                        <strong>Voice tools (500 min)</strong> — 5× more than
                        Creator
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
                        <strong>Dubbing (250 min)</strong> — 5× more than
                        Creator
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
                        <strong>Sound effects (2,500 gen)</strong> — 5× more
                        than Creator
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-gray-900">When to upgrade:</strong> Pro
              makes sense when you're consistently hitting Creator limits or
              need higher concurrency for batch production. The lower overage
              rate ($0.24 vs $0.30) saves money if you regularly exceed quotas.
            </p>
          </section>

          {/* 8. Scale Plan */}
          <section id="scale" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              8. Scale Plan ($330/month)
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The Scale plan unlocks multi-seat access for small teams working
              on large-scale content projects.
            </p>
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    $330
                    <span className="text-xl font-normal text-gray-600">
                      /month
                    </span>
                  </div>
                  <div className="text-gray-600">Billed monthly • 3 seats</div>
                </div>
                <div className="text-right mt-4 sm:mt-0">
                  <div className="text-2xl font-bold text-blue-600">
                    2M / 4M
                  </div>
                  <div className="text-sm text-gray-600">
                    Multilingual / Flash chars
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Everything in Pro, plus:
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
                    <strong>4× more characters</strong> — 2M Multilingual or 4M
                    Flash
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
                    <strong>3 seats included</strong> — Team collaboration with
                    shared credits
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
                    <strong>Lower overage rate</strong> — $0.18/1k characters
                    (25% cheaper than Pro)
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
                    <strong>15 concurrent requests</strong> — Highest
                    parallelization for batch jobs
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
                    <strong>Conversational AI (3,600 min)</strong> — For
                    AI-powered customer support
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
                    <strong>Voice tools & dubbing (2,000 / 1,000 min)</strong> —
                    Professional-grade quotas
                  </span>
                </li>
              </ul>
            </div>
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-gray-900">Who it's for:</strong> Scale is
              ideal for agencies, podcasting studios, or content teams producing
              30-50 high-quality episodes per month. The 3-seat model allows
              collaboration while sharing a larger credit pool.
            </p>
          </section>

          {/* 9. Business Plan */}
          <section id="business" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              9. Business Plan ($1,320/month)
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The Business plan is designed for large teams and enterprises
              requiring massive scale, SLAs, and advanced governance.
            </p>
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    $1,320
                    <span className="text-xl font-normal text-gray-600">
                      /month
                    </span>
                  </div>
                  <div className="text-gray-600">Billed monthly • 15+ seats</div>
                </div>
                <div className="text-right mt-4 sm:mt-0">
                  <div className="text-2xl font-bold text-blue-600">
                    11M / 22M
                  </div>
                  <div className="text-sm text-gray-600">
                    Multilingual / Flash chars
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Everything in Scale, plus:
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
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
                        <strong>11M characters</strong> — 5.5× more than Scale
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
                        <strong>15+ seats</strong> — Large team collaboration
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
                        <strong>Lowest overage rate</strong> — $0.12/1k
                        characters (60% cheaper than Creator)
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
                        <strong>3 Professional Voice Clones</strong> — More
                        high-quality custom voices
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
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
                        <strong>SLAs & guaranteed uptime</strong> — Enterprise
                        reliability
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
                        <strong>Priority support</strong> — Dedicated support
                        team
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
                        <strong>Conversational AI (13,750 min)</strong> — For
                        high-volume AI agents
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
                        <strong>Massive quotas across all features</strong> —
                        11k voice tool min, 5.5k dubbing min
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-gray-900">Who it's for:</strong> Business
              is designed for media companies, large agencies, e-learning
              platforms, or any organization producing hundreds of hours of
              audio content monthly with enterprise-grade support requirements.
            </p>
          </section>

          {/* 10. Enterprise Plan */}
          <section id="enterprise" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              10. Enterprise Plan (Custom Pricing)
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              ElevenLabs Enterprise is fully customizable for organizations with
              unique requirements around compliance, infrastructure, and scale.
            </p>
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-300 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Enterprise Features
              </h3>
              <ul className="space-y-3 text-gray-700 mb-6">
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
                    <strong>Custom character quotas</strong> — Negotiated based
                    on your usage
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
                    <strong>HIPAA compliance</strong> — For healthcare and
                    sensitive data
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
                    <strong>SAML SSO</strong> — Integrate with Okta, Azure AD,
                    OneLogin
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
                    <strong>Dedicated infrastructure</strong> — Custom hosting,
                    data residency
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
                    <strong>Dedicated account manager</strong> — Strategic
                    planning and onboarding
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
                    <strong>Custom integrations</strong> — Bespoke API
                    implementation support
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
                    <strong>Custom voice development</strong> — Unlimited
                    professional voice clones
                  </span>
                </li>
              </ul>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">Pricing:</strong> Enterprise
                  pricing is fully customized based on your usage, compliance
                  requirements, and support needs. Contact ElevenLabs sales for a
                  quote.
                </p>
              </div>
            </div>
          </section>

          {/* 11. Plan Comparison Table */}
          <section id="comparison" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              11. Plan Comparison Table
            </h2>
            <div className="overflow-x-auto">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6 rounded-r-lg">
                <p className="text-gray-700">
                  <strong>⚠️ Note:</strong> Tables don't display well in
                  Telegram. For the full comparison table, visit{" "}
                  <Link
                    href="/elevenlabs-pricing"
                    className="text-blue-600 hover:underline"
                  >
                    aisotools.com/elevenlabs-pricing
                  </Link>
                </p>
              </div>
            </div>
          </section>

          {/* 12. Overage Costs & How They Work */}
          <section id="overages" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              12. Overage Costs & How They Work
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              On Creator, Pro, Scale, and Business plans, if you exceed your
              monthly character quota, you'll be charged overage fees. Here's the
              breakdown:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center p-4 bg-white border border-gray-200 rounded-lg">
                <div className="font-semibold text-gray-900">
                  Creator Plan Overages
                </div>
                <div className="text-2xl font-bold text-gray-900">$0.30</div>
                <div className="text-sm text-gray-600">per 1,000 characters</div>
              </div>
              <div className="flex justify-between items-center p-4 bg-white border border-gray-200 rounded-lg">
                <div className="font-semibold text-gray-900">
                  Pro Plan Overages
                </div>
                <div className="text-2xl font-bold text-gray-900">$0.24</div>
                <div className="text-sm text-gray-600">per 1,000 characters</div>
              </div>
              <div className="flex justify-between items-center p-4 bg-white border border-gray-200 rounded-lg">
                <div className="font-semibold text-gray-900">
                  Scale Plan Overages
                </div>
                <div className="text-2xl font-bold text-gray-900">$0.18</div>
                <div className="text-sm text-gray-600">per 1,000 characters</div>
              </div>
              <div className="flex justify-between items-center p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
                <div className="font-semibold text-gray-900">
                  Business Plan Overages
                </div>
                <div className="text-2xl font-bold text-gray-900">$0.12</div>
                <div className="text-sm text-gray-600">per 1,000 characters</div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                How Overages Work
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
                    <strong>Automatic billing:</strong> You're charged at the end
                    of your billing period for any characters used beyond your
                    quota
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
                    <strong>No hard limits:</strong> You can exceed your quota as
                    long as you have a payment method on file
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
                    <strong>Tiered savings:</strong> Higher plans have lower
                    overage rates, rewarding scale
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
                    <strong>When to upgrade:</strong> If you're hitting 30-50% in
                    overages regularly, upgrading saves money
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* 13. What You'll Actually Pay */}
          <section id="real-costs" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              13. What You'll Actually Pay: Real-World Scenarios
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Let's break down what different types of users will actually spend
              per year with ElevenLabs:
            </p>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Scenario 1: Freelance Voiceover Artist
                </h3>
                <p className="text-gray-700 mb-4">
                  Creates 3-5 short social media clips per week (~15-20k
                  characters/month).
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">
                      Recommended Plan:
                    </span>
                    <span className="text-blue-600 font-bold">Starter</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Monthly cost:</span>
                    <span className="font-bold text-gray-900">$5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Annual cost:</span>
                    <span className="font-bold text-gray-900">$60/year</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Scenario 2: YouTuber (10-20 min videos weekly)
                </h3>
                <p className="text-gray-700 mb-4">
                  Produces 3-4 long-form videos per month with voiceovers
                  (~80-100k characters/month).
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">
                      Recommended Plan:
                    </span>
                    <span className="text-blue-600 font-bold">Creator</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Monthly cost:</span>
                    <span className="font-bold text-gray-900">$11</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Annual cost:</span>
                    <span className="font-bold text-gray-900">$132/year</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Scenario 3: Podcast Studio (3-4 episodes/week)
                </h3>
                <p className="text-gray-700 mb-4">
                  Produces 12-16 podcast episodes per month (30-60 min each,
                  ~400-600k characters/month).
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">
                      Recommended Plan:
                    </span>
                    <span className="text-blue-600 font-bold">Pro</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Monthly cost:</span>
                    <span className="font-bold text-gray-900">$99 + $24-48 overages</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Annual cost:</span>
                    <span className="font-bold text-gray-900">~$1,476/year</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Scenario 4: E-Learning Platform (100+ courses)
                </h3>
                <p className="text-gray-700 mb-4">
                  Generates narration for hundreds of lessons monthly (~3-5M
                  characters/month).
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">
                      Recommended Plan:
                    </span>
                    <span className="text-blue-600 font-bold">Scale or Business</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Monthly cost:</span>
                    <span className="font-bold text-gray-900">$330-1,320</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Annual cost:</span>
                    <span className="font-bold text-gray-900">$3,960-15,840/year</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 14. Which Plan Should You Choose? */}
          <section id="decision-guide" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              14. Which Plan Should You Choose?
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Choosing the right ElevenLabs plan depends on your usage patterns
              and quality needs. Here's a quick decision framework:
            </p>
            <div className="space-y-4">
              <div className="bg-white border-l-4 border-gray-400 p-5 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-2">
                  Choose Free if:
                </h3>
                <ul className="space-y-1 text-gray-700">
                  <li>• You're testing the platform or evaluating features</li>
                  <li>
                    • You only need 10-20k characters per month (a few short
                    clips)
                  </li>
                  <li>• You're okay with attribution and no commercial use</li>
                </ul>
              </div>

              <div className="bg-white border-l-4 border-green-500 p-5 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-2">
                  Choose Starter if:
                </h3>
                <ul className="space-y-1 text-gray-700">
                  <li>
                    • You're a hobbyist or freelancer creating personal projects
                  </li>
                  <li>• You need commercial rights for small-scale work</li>
                  <li>
                    • You want instant voice cloning on a budget ($5/month)
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-2">
                  Choose Creator if:
                </h3>
                <ul className="space-y-1 text-gray-700">
                  <li>
                    • You're a content creator producing YouTube videos, podcasts,
                    or audiobooks
                  </li>
                  <li>
                    • You need high-quality audio (192 kbps) and professional
                    voice cloning
                  </li>
                  <li>
                    • You generate 100-200k characters per month (~100 short
                    videos or 10-15 long videos)
                  </li>
                  <li>
                    • This is ElevenLabs' most popular plan for good reason — best
                    value per character
                  </li>
                </ul>
              </div>

              <div className="bg-white border-l-4 border-purple-500 p-5 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-2">Choose Pro if:</h3>
                <ul className="space-y-1 text-gray-700">
                  <li>
                    • You're a professional creator with weekly content schedules
                  </li>
                  <li>
                    • You need 500k-1M characters per month (50+ videos or 20+
                    podcast episodes)
                  </li>
                  <li>
                    • You want lower overage rates and higher concurrency (10
                    simultaneous requests)
                  </li>
                </ul>
              </div>

              <div className="bg-white border-l-4 border-orange-500 p-5 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-2">
                  Choose Scale if:
                </h3>
                <ul className="space-y-1 text-gray-700">
                  <li>• You're a small team (3 people) working on large projects</li>
                  <li>
                    • You need 2M+ characters per month (agencies, studios)
                  </li>
                  <li>• You want shared credits across team members</li>
                </ul>
              </div>

              <div className="bg-white border-l-4 border-red-500 p-5 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-2">
                  Choose Business if:
                </h3>
                <ul className="space-y-1 text-gray-700">
                  <li>• You're a large team (15+ people) with massive scale needs</li>
                  <li>• You require SLAs, priority support, and lowest overage rates</li>
                  <li>• You need 11M+ characters per month (enterprise media production)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 15. FAQs */}
          <section id="faqs" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              15. Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How much does ElevenLabs cost?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  ElevenLabs offers a free plan with 10,000 characters per month.
                  Paid plans start at $5/month (Starter with 30,000 characters),
                  $11/month (Creator with 100,000 characters), $99/month (Pro
                  with 500,000 characters), $330/month (Scale with 2M
                  characters), and $1,320/month (Business with 11M characters).
                  Enterprise pricing is custom.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What's the difference between Flash and Multilingual models?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Flash is optimized for speed with sub-second latency and uses
                  fewer credits (double the characters), ideal for chatbots and
                  real-time applications. Multilingual v2 offers higher quality
                  audio (192 kbps), supports 29+ languages with expressive tone
                  and emotion, better for creative content like podcasts and
                  YouTube videos.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How do ElevenLabs character credits work?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  For Multilingual models, 1 text character = 1 credit. For Flash
                  models, pricing is discounted at 0.5-1 credit per character
                  depending on the model. Credits reset monthly and don't roll
                  over. If you exceed your plan's quota, overage rates apply:
                  $0.30/1k chars on Creator, $0.24/1k on Pro, $0.18/1k on Scale,
                  and $0.12/1k on Business.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Does ElevenLabs offer a free plan?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, ElevenLabs offers a permanent free plan with 10,000
                  Multilingual characters or 20,000 Flash characters per month,
                  128 kbps audio quality, basic TTS and dubbing features, 3
                  custom voices, 3 projects, and 2 concurrent requests. However,
                  commercial use is forbidden and attribution is required.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Can I clone my voice with ElevenLabs?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes. Instant voice cloning is available on all paid plans
                  (Starter and above). Professional Voice Cloning (PVC) with
                  higher quality requires Creator plan or higher. Creator, Pro,
                  and Scale plans include 1 PVC slot, while Business includes 3
                  PVC slots.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What happens if I exceed my monthly character limit?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  On paid plans (Creator and above), you'll be charged overage
                  fees per 1,000 characters: Creator $0.30, Pro $0.24, Scale
                  $0.18, Business $0.12. The higher your plan tier, the lower
                  your per-unit overage cost. On Free and Starter plans, you
                  cannot exceed your quota without upgrading.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Is ElevenLabs good for commercial use?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, all paid plans (Starter and above) include commercial usage
                  rights, meaning you can use generated audio in YouTube videos,
                  podcasts, audiobooks, client projects, and more without
                  attribution. The Free plan does not allow commercial use.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Can I cancel ElevenLabs anytime?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, you can cancel your ElevenLabs subscription at any time
                  through your account settings. You'll retain access for the
                  remainder of your current billing period. Monthly subscriptions
                  can be canceled before the next billing date.
                </p>
              </div>
            </div>
          </section>

          {/* CTA & Related Links */}
          <section className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started with ElevenLabs?
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Start with the free plan to explore the platform, then upgrade to
              Creator for professional-quality voice generation. 50% off your
              first month!
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://elevenlabs.io/pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                View ElevenLabs Plans →
              </a>
              <Link
                href="/directory"
                className="bg-white hover:bg-gray-50 text-gray-900 font-semibold px-6 py-3 rounded-lg border-2 border-gray-300 transition-colors"
              >
                Browse More AI Tools
              </Link>
            </div>
          </section>

          {/* Related Links */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Related Pricing Guides
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/synthesia-pricing"
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  Synthesia Pricing 2026
                </h3>
                <p className="text-sm text-gray-600">
                  AI video generation with avatars — pricing, plans, and credits
                </p>
              </Link>
              <Link
                href="/runway-ml-pricing"
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  Runway ML Pricing 2026
                </h3>
                <p className="text-sm text-gray-600">
                  AI video editing and Gen-4 — pricing, credits, and plans
                </p>
              </Link>
              <Link
                href="/chatgpt-plus-pricing"
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  ChatGPT Plus Pricing 2026
                </h3>
                <p className="text-sm text-gray-600">
                  OpenAI's ChatGPT plans — Free, Plus, Team, Enterprise
                </p>
              </Link>
              <Link
                href="/directory"
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  Browse All AI Tools
                </h3>
                <p className="text-sm text-gray-600">
                  3,700+ AI tools with pricing, features, and reviews
                </p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
