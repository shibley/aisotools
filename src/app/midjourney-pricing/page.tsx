import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Midjourney Pricing 2026: Plans, Costs & What You Actually Pay",
  description:
    "Complete Midjourney pricing guide for 2026. Compare Basic ($10/mo), Standard ($30/mo), Pro ($60/mo), and Mega ($120/mo) plans. Includes fast hours, relax mode, stealth mode, and hidden costs.",
  keywords: [
    "midjourney pricing",
    "midjourney cost",
    "how much is midjourney",
    "midjourney subscription",
    "midjourney plans",
    "midjourney pricing 2026",
    "midjourney monthly cost",
  ],
  openGraph: {
    title: "Midjourney Pricing 2026: Plans, Costs & What You Actually Pay",
    description:
      "Transparent breakdown of Midjourney pricing, plans, fast hours, relax mode, and real costs. Updated February 2026.",
    url: "https://aisotools.com/midjourney-pricing",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/midjourney-pricing",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does Midjourney cost per month?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Midjourney offers four subscription tiers: Basic at $10/month (3.3 fast hours), Standard at $30/month (15 fast hours), Pro at $60/month (30 fast hours), and Mega at $120/month (60 fast hours). Annual plans save 20%. All paid plans include unlimited relax mode (slower generation).",
      },
    },
    {
      "@type": "Question",
      name: "Is there a free trial for Midjourney?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Midjourney discontinued free trials in March 2023 due to abuse. All users now need a paid subscription to generate images. However, you can view community creations on midjourney.com without an account.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between fast mode and relax mode?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fast mode generates images in 30-60 seconds using dedicated GPU time. Relax mode is slower (2-10 minutes) because you share GPU resources with other users, but it's unlimited on all paid plans. Basic plan users cannot use relax mode.",
      },
    },
    {
      "@type": "Question",
      name: "Can I buy extra fast hours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Once you exhaust your monthly fast hours, you can purchase additional fast GPU time at $4 per hour. This applies to all subscription tiers.",
      },
    },
    {
      "@type": "Question",
      name: "What is stealth mode and how much does it cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stealth mode makes your image generations private (not visible in the public gallery). It's available on Pro and Mega plans for an additional $20/month. Basic and Standard users cannot access stealth mode, even as an add-on.",
      },
    },
    {
      "@type": "Question",
      name: "Do I own the images I create with Midjourney?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, paid subscribers own the images they generate and can use them commercially. Free trial users (when available) have limited commercial rights. Always check the current Terms of Service for the most up-to-date licensing.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel my Midjourney subscription anytime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Monthly subscriptions can be cancelled anytime and you'll retain access until the end of your billing period. Annual subscriptions are non-refundable but won't auto-renew if you cancel.",
      },
    },
    {
      "@type": "Question",
      name: "Which Midjourney plan should I choose?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Choose Basic ($10/mo) if you're casual or just starting. Standard ($30/mo) is best for regular users who can tolerate relax mode delays. Pro ($60/mo) is ideal for professionals who need fast generation and stealth mode. Mega ($120/mo) is for power users generating 60+ hours monthly.",
      },
    },
  ],
};

export default function MidjourneyPricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span className="mx-2">›</span>
          <Link href="/directory" className="hover:text-white">
            Directory
          </Link>
          <span className="mx-2">›</span>
          <Link href="/midjourney" className="hover:text-white">
            Midjourney
          </Link>
          <span className="mx-2">›</span>
          <span className="text-gray-300">Pricing</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Midjourney Pricing 2026: Plans, Costs & What You Actually Pay
          </h1>
          <p className="text-xl text-gray-400 max-w-4xl">
            A transparent breakdown of Midjourney&apos;s subscription plans, fast hours, relax mode,
            stealth mode, and the real costs of using the most popular AI image generator. No
            marketing fluff — just the numbers you need to decide.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
              Updated February 2026
            </span>
            <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
              9 min read
            </span>
          </div>
        </header>

        {/* Quick Answer */}
        <section className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/20 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-3">💰 Quick Pricing Summary</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong>Basic:</strong> $10/mo (3.3 fast hours, no relax mode). <strong>Standard:</strong>{" "}
            $30/mo (15 fast hours + unlimited relax mode). <strong>Pro:</strong> $60/mo (30 fast hours
            + unlimited relax mode + stealth option). <strong>Mega:</strong> $120/mo (60 fast hours +
            unlimited relax mode + stealth option).
          </p>
          <p className="text-gray-400">
            Annual plans save 20%. Extra fast hours: $4/hour. Stealth mode: +$20/mo (Pro/Mega only).
            No free trial.
          </p>
        </section>

        {/* Compare Alternatives CTA */}
        <section className="mb-12 p-6 bg-gradient-to-r from-pink-900/20 to-purple-900/20 rounded-lg border-2 border-pink-500/30">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🔍</div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-3">
                Not sure if Midjourney is right for you?
              </h2>
              <p className="text-gray-300 mb-4">
                Compare Midjourney with other AI image generators before you commit.
                See side-by-side feature breakdowns, pricing differences, and
                which tool fits your workflow best.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link
                  href="/midjourney-vs-runway"
                  className="flex items-center gap-2 px-4 py-3 bg-gray-800 rounded-lg border-2 border-purple-500/30 hover:border-purple-500 hover:shadow-md transition-all"
                >
                  <span className="text-xl">🎬</span>
                  <div>
                    <div className="font-semibold text-purple-400">
                      Midjourney vs Runway
                    </div>
                    <div className="text-sm text-gray-400">
                      Image vs video
                    </div>
                  </div>
                </Link>
                <Link
                  href="/dall-e-alternatives"
                  className="flex items-center gap-2 px-4 py-3 bg-gray-800 rounded-lg border-2 border-pink-500/30 hover:border-pink-500 hover:shadow-md transition-all"
                >
                  <span className="text-xl">🎨</span>
                  <div>
                    <div className="font-semibold text-pink-400">
                      DALL-E Alternatives
                    </div>
                    <div className="text-sm text-gray-400">
                      Midjourney included
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Midjourney Subscription Plans Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-900 border border-gray-800 rounded-xl">
              <thead className="bg-gray-800">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-green-400">
                    Basic
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-blue-400">
                    Standard
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-purple-400">
                    Pro
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-pink-400">
                    Mega
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr className="hover:bg-gray-800/50">
                  <td className="px-6 py-4 font-medium">Monthly Price</td>
                  <td className="px-6 py-4 text-center text-lg font-bold text-green-400">$10</td>
                  <td className="px-6 py-4 text-center text-lg font-bold text-blue-400">$30</td>
                  <td className="px-6 py-4 text-center text-lg font-bold text-purple-400">$60</td>
                  <td className="px-6 py-4 text-center text-lg font-bold text-pink-400">$120</td>
                </tr>
                <tr className="hover:bg-gray-800/50">
                  <td className="px-6 py-4 font-medium">Annual Price</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-400">
                    $96/yr
                    <br />
                    <span className="text-xs text-gray-500">($8/mo)</span>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-400">
                    $288/yr
                    <br />
                    <span className="text-xs text-gray-500">($24/mo)</span>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-400">
                    $576/yr
                    <br />
                    <span className="text-xs text-gray-500">($48/mo)</span>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-400">
                    $1,152/yr
                    <br />
                    <span className="text-xs text-gray-500">($96/mo)</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-800/50">
                  <td className="px-6 py-4 font-medium">Fast GPU Hours</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-400">
                    3.3 hrs/mo
                    <br />
                    <span className="text-xs text-gray-500">(~200 images)</span>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-400">
                    15 hrs/mo
                    <br />
                    <span className="text-xs text-gray-500">(~900 images)</span>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-400">
                    30 hrs/mo
                    <br />
                    <span className="text-xs text-gray-500">(~1,800 images)</span>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-400">
                    60 hrs/mo
                    <br />
                    <span className="text-xs text-gray-500">(~3,600 images)</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-800/50">
                  <td className="px-6 py-4 font-medium">Relax Mode</td>
                  <td className="px-6 py-4 text-center text-sm text-red-400">❌ No</td>
                  <td className="px-6 py-4 text-center text-sm text-green-400">✅ Unlimited</td>
                  <td className="px-6 py-4 text-center text-sm text-green-400">✅ Unlimited</td>
                  <td className="px-6 py-4 text-center text-sm text-green-400">✅ Unlimited</td>
                </tr>
                <tr className="hover:bg-gray-800/50">
                  <td className="px-6 py-4 font-medium">Stealth Mode</td>
                  <td className="px-6 py-4 text-center text-sm text-red-400">❌ No</td>
                  <td className="px-6 py-4 text-center text-sm text-red-400">❌ No</td>
                  <td className="px-6 py-4 text-center text-sm text-yellow-400">
                    +$20/mo
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-yellow-400">
                    +$20/mo
                  </td>
                </tr>
                <tr className="hover:bg-gray-800/50">
                  <td className="px-6 py-4 font-medium">Concurrent Jobs</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-400">3</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-400">3</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-400">12 fast, 3 relax</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-400">12 fast, 3 relax</td>
                </tr>
                <tr className="hover:bg-gray-800/50">
                  <td className="px-6 py-4 font-medium">Commercial Use</td>
                  <td className="px-6 py-4 text-center text-sm text-green-400">✅ Yes</td>
                  <td className="px-6 py-4 text-center text-sm text-green-400">✅ Yes</td>
                  <td className="px-6 py-4 text-center text-sm text-green-400">✅ Yes</td>
                  <td className="px-6 py-4 text-center text-sm text-green-400">✅ Yes</td>
                </tr>
                <tr className="hover:bg-gray-800/50">
                  <td className="px-6 py-4 font-medium">Extra Fast Hours</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-400" colSpan={4}>
                    $4/hour (available on all plans)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Pricing as of February 2026. Visit{" "}
            <a
              href="https://docs.midjourney.com/docs/plans"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Midjourney&apos;s official pricing page
            </a>{" "}
            for the most current information.
          </p>
        </section>

        {/* Plan Details */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Understanding Each Plan</h2>

          <div className="space-y-8">
            {/* Basic Plan */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-green-400 mb-3">Basic Plan — $10/month</h3>
              <p className="text-gray-400 mb-4">
                The entry-level plan for casual users or those just getting started with Midjourney.
              </p>
              <div className="space-y-2">
                <p className="text-gray-300">
                  <strong>What you get:</strong>
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                  <li>3.3 fast GPU hours per month (~200 images in fast mode)</li>
                  <li>General commercial use rights</li>
                  <li>Access to member gallery</li>
                  <li>3 concurrent fast jobs</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  <strong>What you don&apos;t get:</strong>
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                  <li>No relax mode (you&apos;re limited to 3.3 fast hours only)</li>
                  <li>No stealth mode option</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  <strong>Best for:</strong> Hobbyists, students, or users creating 5-10 images per
                  day. Once your fast hours run out, you must purchase more ($4/hour) or wait until
                  next month.
                </p>
              </div>
            </div>

            {/* Standard Plan */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-3">Standard Plan — $30/month</h3>
              <p className="text-gray-400 mb-4">
                The most popular plan, offering the best balance of fast generation and unlimited
                relax mode.
              </p>
              <div className="space-y-2">
                <p className="text-gray-300">
                  <strong>What you get:</strong>
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                  <li>15 fast GPU hours per month (~900 images)</li>
                  <li>
                    <strong>Unlimited relax mode</strong> (slower generations, but no cap)
                  </li>
                  <li>General commercial use rights</li>
                  <li>3 concurrent fast jobs</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  <strong>What you don&apos;t get:</strong>
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                  <li>No stealth mode option</li>
                  <li>Lower concurrent job limit (3 vs 12 on Pro/Mega)</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  <strong>Best for:</strong> Regular users who can tolerate 2-10 minute wait times in
                  relax mode. Perfect if you create 30-50 images daily and aren&apos;t in a rush.
                </p>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-purple-400 mb-3">Pro Plan — $60/month</h3>
              <p className="text-gray-400 mb-4">
                The professional tier for creators who need fast generation, privacy options, and
                higher throughput.
              </p>
              <div className="space-y-2">
                <p className="text-gray-300">
                  <strong>What you get:</strong>
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                  <li>30 fast GPU hours per month (~1,800 images)</li>
                  <li>Unlimited relax mode</li>
                  <li>
                    <strong>Stealth mode available</strong> (+$20/mo to make creations private)
                  </li>
                  <li>12 concurrent fast jobs, 3 concurrent relax jobs</li>
                  <li>General commercial use rights</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  <strong>Best for:</strong> Professional artists, designers, content creators, and
                  agencies who need high-speed generation, want their work private, or are creating
                  60+ images daily.
                </p>
              </div>
            </div>

            {/* Mega Plan */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-pink-400 mb-3">Mega Plan — $120/month</h3>
              <p className="text-gray-400 mb-4">
                The power-user plan for studios, teams, or individuals who generate images at scale.
              </p>
              <div className="space-y-2">
                <p className="text-gray-300">
                  <strong>What you get:</strong>
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                  <li>60 fast GPU hours per month (~3,600 images)</li>
                  <li>Unlimited relax mode</li>
                  <li>Stealth mode available (+$20/mo)</li>
                  <li>12 concurrent fast jobs, 3 concurrent relax jobs</li>
                  <li>General commercial use rights</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  <strong>Best for:</strong> High-volume users, design studios, agencies, or
                  production workflows that need 100+ images daily. If you&apos;re consistently buying
                  extra fast hours on Pro, Mega is more cost-effective.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fast vs Relax Mode */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Fast Mode vs Relax Mode: What&apos;s the Difference?</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-green-400 mb-3">⚡ Fast Mode</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <strong>Speed:</strong> 30-60 seconds per image
                  </li>
                  <li>
                    <strong>GPU allocation:</strong> Dedicated GPU time
                  </li>
                  <li>
                    <strong>Usage:</strong> Counted against your monthly fast hours
                  </li>
                  <li>
                    <strong>Cost:</strong> Included in subscription; $4/hour when you run out
                  </li>
                  <li>
                    <strong>When to use:</strong> Client work, time-sensitive projects, when you need
                    results immediately
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-3">🐢 Relax Mode</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <strong>Speed:</strong> 2-10 minutes per image (varies by queue)
                  </li>
                  <li>
                    <strong>GPU allocation:</strong> Shared GPU pool with other users
                  </li>
                  <li>
                    <strong>Usage:</strong> Unlimited (Standard, Pro, Mega only)
                  </li>
                  <li>
                    <strong>Cost:</strong> Free (included in Standard+)
                  </li>
                  <li>
                    <strong>When to use:</strong> Personal projects, experimentation, bulk generation
                    when speed isn&apos;t critical
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-gray-400 mt-6">
              <strong>Pro tip:</strong> Most Standard users rely heavily on relax mode for
              experimentation and only use fast mode for final versions or urgent work. This stretches
              your 15 fast hours much further.
            </p>
          </div>
        </section>

        {/* Stealth Mode */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Stealth Mode: Privacy Add-On</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
            <p className="text-gray-400 mb-4">
              By default, all Midjourney images appear in the public gallery and community feed.
              Stealth mode makes your generations private.
            </p>
            <div className="space-y-3 text-gray-400">
              <p>
                <strong>Who can use it:</strong> Pro and Mega subscribers only (not available on
                Basic or Standard, even as an add-on)
              </p>
              <p>
                <strong>Cost:</strong> +$20/month on top of your Pro or Mega subscription
              </p>
              <p>
                <strong>What it does:</strong>
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Your image generations don&apos;t appear in the public gallery</li>
                <li>Other users can&apos;t see your prompts or images</li>
                <li>You can still share images manually if you choose</li>
                <li>Images created in Discord still appear in that Discord channel</li>
              </ul>
              <p className="mt-4">
                <strong>Who needs it:</strong> Professional artists working on unreleased projects,
                agencies creating client work, anyone working on confidential or commercially
                sensitive imagery.
              </p>
              <p>
                <strong>Example costs:</strong>
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Pro + Stealth = $60 + $20 = $80/month</li>
                <li>Mega + Stealth = $120 + $20 = $140/month</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Hidden Costs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Hidden Costs & Extras</h2>
          <div className="space-y-6">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-2">Extra Fast Hours: $4/hour</h3>
              <p className="text-gray-400">
                When you exhaust your monthly fast hours, you can purchase additional GPU time at
                $4/hour. This applies to all tiers. If you&apos;re consistently buying 5+ extra hours
                monthly, upgrading to the next tier is usually more cost-effective.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-2">No Free Trial (Anymore)</h3>
              <p className="text-gray-400">
                Midjourney discontinued free trials in March 2023 after detecting widespread abuse.
                All new users must now subscribe to a paid plan. There is no way to test the service
                for free.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-2">Discord Nitro (Optional)</h3>
              <p className="text-gray-400">
                Midjourney runs primarily through Discord. While Discord is free, some users opt for
                Discord Nitro ($9.99/mo) to upload larger reference images or use higher-quality
                screen sharing. This is optional and not required to use Midjourney.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-2">Annual Billing (20% Savings)</h3>
              <p className="text-gray-400">
                All plans offer annual billing at a 20% discount. However, annual subscriptions are
                non-refundable. If you&apos;re new to Midjourney, start with monthly billing until
                you&apos;re confident you&apos;ll use it long-term.
              </p>
            </div>
          </div>
        </section>

        {/* Real-World Cost Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Real-World Cost Examples</h2>
          <div className="space-y-6">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-3">
                Scenario 1: Hobbyist (10 images/day)
              </h3>
              <p className="text-gray-400 mb-2">
                <strong>Usage:</strong> 300 images/month, mostly experimenting
              </p>
              <p className="text-gray-400 mb-2">
                <strong>Recommended plan:</strong> Basic ($10/mo)
              </p>
              <p className="text-gray-400">
                <strong>Why:</strong> 300 images fit comfortably in the 3.3 fast hours (~200 images).
                For extra generations, wait until next month or purchase 1-2 extra hours ($4-8).
                Total cost: $10-18/month.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-3">
                Scenario 2: Content Creator (50 images/day)
              </h3>
              <p className="text-gray-400 mb-2">
                <strong>Usage:</strong> 1,500 images/month, need variety
              </p>
              <p className="text-gray-400 mb-2">
                <strong>Recommended plan:</strong> Standard ($30/mo)
              </p>
              <p className="text-gray-400">
                <strong>Why:</strong> Use fast mode for final picks (15 hours = ~900 images). Use
                unlimited relax mode for drafts and experimentation. Total cost: $30/month.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-3">
                Scenario 3: Design Agency (100+ images/day, need privacy)
              </h3>
              <p className="text-gray-400 mb-2">
                <strong>Usage:</strong> 3,000+ images/month, client confidentiality required
              </p>
              <p className="text-gray-400 mb-2">
                <strong>Recommended plan:</strong> Pro + Stealth ($80/mo)
              </p>
              <p className="text-gray-400">
                <strong>Why:</strong> 30 fast hours covers high-priority work. Relax mode for
                exploration. Stealth mode keeps client projects private. Total cost: $80/month.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-3">
                Scenario 4: Production Studio (200+ images/day)
              </h3>
              <p className="text-gray-400 mb-2">
                <strong>Usage:</strong> 6,000+ images/month, high-volume workflows
              </p>
              <p className="text-gray-400 mb-2">
                <strong>Recommended plan:</strong> Mega + Stealth ($140/mo)
              </p>
              <p className="text-gray-400">
                <strong>Why:</strong> 60 fast hours prevents constant extra-hour purchases. 12
                concurrent jobs speed up batch generation. Stealth protects proprietary work. Total
                cost: $140/month.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison vs Competitors */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Midjourney Pricing vs Competitors</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-900 border border-gray-800 rounded-xl">
              <thead className="bg-gray-800">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Service</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Entry Plan</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Mid-Tier Plan</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Free Trial</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr className="hover:bg-gray-800/50">
                  <td className="px-6 py-4 font-medium">Midjourney</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-400">
                    $10/mo
                    <br />
                    <span className="text-xs text-gray-500">(3.3 fast hours)</span>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-400">
                    $30/mo
                    <br />
                    <span className="text-xs text-gray-500">(15 fast hrs + unlimited relax)</span>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-red-400">❌ No</td>
                </tr>
                <tr className="hover:bg-gray-800/50">
                  <td className="px-6 py-4 font-medium">
                    <Link href="/dall-e-alternatives" className="text-blue-400 hover:underline">
                      DALL·E 3
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-400">
                    $20/mo
                    <br />
                    <span className="text-xs text-gray-500">(ChatGPT Plus)</span>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-400">
                    $200/mo
                    <br />
                    <span className="text-xs text-gray-500">(ChatGPT Team)</span>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-yellow-400">
                    Free tier (Bing, limited)
                  </td>
                </tr>
                <tr className="hover:bg-gray-800/50">
                  <td className="px-6 py-4 font-medium">Stable Diffusion (web)</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-400">
                    Free
                    <br />
                    <span className="text-xs text-gray-500">(self-host)</span>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-400">
                    $10-30/mo
                    <br />
                    <span className="text-xs text-gray-500">(DreamStudio credits)</span>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-green-400">✅ Free credits</td>
                </tr>
                <tr className="hover:bg-gray-800/50">
                  <td className="px-6 py-4 font-medium">
                    <Link href="/best-ai-image-generators-2026" className="text-blue-400 hover:underline">
                      Firefly (Adobe)
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-400">
                    Free
                    <br />
                    <span className="text-xs text-gray-500">(25 credits/mo)</span>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-400">
                    $4.99/mo
                    <br />
                    <span className="text-xs text-gray-500">(100 credits)</span>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-green-400">✅ Free tier</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Looking for alternatives?{" "}
            <Link href="/midjourney-alternatives" className="text-blue-400 hover:underline">
              Compare Midjourney to other AI image generators
            </Link>
            .
          </p>
        </section>

        {/* Which Plan Should You Choose */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Which Midjourney Plan Should You Choose?</h2>
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-green-400 mb-2">
                  Choose Basic ($10/mo) if:
                </h3>
                <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                  <li>You&apos;re just starting with AI image generation</li>
                  <li>You create &lt;10 images per day</li>
                  <li>You don&apos;t mind waiting until next month when fast hours run out</li>
                  <li>You&apos;re a hobbyist, student, or casual user</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-2">
                  Choose Standard ($30/mo) if:
                </h3>
                <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                  <li>You create 20-50+ images per day</li>
                  <li>You can tolerate 2-10 minute wait times in relax mode</li>
                  <li>You want unlimited generation capability without paying per hour</li>
                  <li>
                    You&apos;re a content creator, marketer, or freelancer building a portfolio
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">
                  Choose Pro ($60/mo) if:
                </h3>
                <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                  <li>You need privacy/stealth mode (+$20/mo extra)</li>
                  <li>You create 60-100+ images daily and need them fast</li>
                  <li>You run 12 concurrent jobs frequently (batch generation)</li>
                  <li>You&apos;re a professional artist, designer, or working with clients</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-pink-400 mb-2">
                  Choose Mega ($120/mo) if:
                </h3>
                <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                  <li>You create 100-200+ images daily</li>
                  <li>You were consistently buying 10+ extra fast hours on Pro</li>
                  <li>You run a design studio, agency, or production workflow</li>
                  <li>You need maximum throughput and never want to wait</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-400 mt-6">
              <strong>Not sure?</strong> Start with Standard ($30/mo). It&apos;s the sweet spot for
              most users — enough fast hours for critical work, unlimited relax mode for
              experimentation. You can always upgrade or downgrade monthly.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-2">
                How much does Midjourney cost per month?
              </h3>
              <p className="text-gray-400">
                Midjourney offers four subscription tiers: Basic at $10/month (3.3 fast hours),
                Standard at $30/month (15 fast hours), Pro at $60/month (30 fast hours), and Mega at
                $120/month (60 fast hours). Annual plans save 20%. All paid plans include unlimited
                relax mode (slower generation).
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-2">
                Is there a free trial for Midjourney?
              </h3>
              <p className="text-gray-400">
                Midjourney discontinued free trials in March 2023 due to abuse. All users now need a
                paid subscription to generate images. However, you can view community creations on
                midjourney.com without an account.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-2">
                What is the difference between fast mode and relax mode?
              </h3>
              <p className="text-gray-400">
                Fast mode generates images in 30-60 seconds using dedicated GPU time. Relax mode is
                slower (2-10 minutes) because you share GPU resources with other users, but it&apos;s
                unlimited on all paid plans. Basic plan users cannot use relax mode.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-2">
                Can I buy extra fast hours?
              </h3>
              <p className="text-gray-400">
                Yes. Once you exhaust your monthly fast hours, you can purchase additional fast GPU
                time at $4 per hour. This applies to all subscription tiers.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-2">
                What is stealth mode and how much does it cost?
              </h3>
              <p className="text-gray-400">
                Stealth mode makes your image generations private (not visible in the public
                gallery). It&apos;s available on Pro and Mega plans for an additional $20/month. Basic
                and Standard users cannot access stealth mode, even as an add-on.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-2">
                Do I own the images I create with Midjourney?
              </h3>
              <p className="text-gray-400">
                Yes, paid subscribers own the images they generate and can use them commercially. Free
                trial users (when available) have limited commercial rights. Always check the current
                Terms of Service for the most up-to-date licensing.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-2">
                Can I cancel my Midjourney subscription anytime?
              </h3>
              <p className="text-gray-400">
                Yes. Monthly subscriptions can be cancelled anytime and you&apos;ll retain access until
                the end of your billing period. Annual subscriptions are non-refundable but won&apos;t
                auto-renew if you cancel.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-2">
                Which Midjourney plan should I choose?
              </h3>
              <p className="text-gray-400">
                Choose Basic ($10/mo) if you&apos;re casual or just starting. Standard ($30/mo) is best
                for regular users who can tolerate relax mode delays. Pro ($60/mo) is ideal for
                professionals who need fast generation and stealth mode. Mega ($120/mo) is for power
                users generating 60+ hours monthly.
              </p>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Related Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/midjourney-alternatives"
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-2">
                15 Midjourney Alternatives in 2026
              </h3>
              <p className="text-gray-400 text-sm">
                Compare pricing, features, and capabilities of DALL·E, Stable Diffusion, Firefly, and
                other AI image generators.
              </p>
            </Link>

            <Link
              href="/best-ai-image-generators-2026"
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-2">
                Best AI Image Generators 2026
              </h3>
              <p className="text-gray-400 text-sm">
                Ranked comparison of Midjourney, DALL·E 3, Stable Diffusion, Firefly, and 20+ other
                tools.
              </p>
            </Link>

            <Link
              href="/dall-e-alternatives"
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-2">DALL·E 3 Alternatives</h3>
              <p className="text-gray-400 text-sm">
                Explore alternatives to OpenAI&apos;s DALL·E 3, including pricing and feature
                breakdowns.
              </p>
            </Link>

            <Link
              href="/chatgpt-vs-gemini"
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-2">ChatGPT vs Gemini</h3>
              <p className="text-gray-400 text-sm">
                Compare pricing, features, and capabilities of ChatGPT and Google Gemini.
              </p>
            </Link>

            <Link
              href="/midjourney-vs-dall-e"
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-2">Midjourney vs DALL·E</h3>
              <p className="text-gray-400 text-sm">
                Head-to-head comparison: which AI image generator is better for your use case?
              </p>
            </Link>

            <Link
              href="/directory"
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-2">AI Tools Directory</h3>
              <p className="text-gray-400 text-sm">
                Browse 200+ AI tools across categories: image generation, writing, coding, video, and
                more.
              </p>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to Start Creating?</h2>
          <p className="text-gray-400 mb-6">
            Visit Midjourney&apos;s official website to sign up and start generating AI images today.
          </p>
          <a
            href="https://midjourney.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Get Started with Midjourney →
          </a>
          <p className="text-sm text-gray-500 mt-4">
            No free trial. Subscriptions start at $10/month.
          </p>
        </section>
      </div>
    </>
  );
}
