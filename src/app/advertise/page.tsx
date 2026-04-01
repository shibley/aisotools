"use client";

import Link from "next/link";
import { tools } from "@/data/tools";
import { categories } from "@/data/categories";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const plans = [
  {
    name: "Basic",
    key: "basic",
    price: "$49",
    priceNote: "one-time",
    description: "Stand out from the crowd",
    highlight: false,
    features: [
      "\"Featured\" badge on your listing",
      "Priority placement in category page",
      "Dofollow backlink to your site",
      "SEO-optimized listing",
      "Listed within 24 hours",
    ],
    cta: "Get Basic",
  },
  {
    name: "Pro",
    key: "pro",
    price: "$149",
    priceNote: "one-time",
    description: "Maximum category visibility",
    highlight: true,
    features: [
      "Everything in Basic, plus:",
      "Top of category page placement",
      "Comparison page priority",
      "Prominent \"Sponsored\" badge",
      "Analytics report",
      "Featured in category sidebar",
    ],
    cta: "Get Pro",
  },
  {
    name: "Premium",
    key: "premium",
    price: "$299",
    priceNote: "one-time",
    description: "The full spotlight treatment",
    highlight: false,
    features: [
      "Everything in Pro, plus:",
      "Homepage featured section",
      "Dedicated review article",
      "Top placement across all categories",
      "Social media mention",
      "Custom badge/label on listing",
      "Direct support channel",
    ],
    cta: "Get Premium",
  },
];

const stats = [
  { value: `${tools.length}+`, label: "AI Tools Listed" },
  { value: "5,000+", label: "Monthly Visitors" },
  { value: "186%", label: "Traffic Growth (MoM)" },
  { value: `${categories.length}`, label: "Categories" },
];

function CheckoutButton({
  plan,
  highlight,
  label,
  initialToolName,
}: {
  plan: string;
  highlight: boolean;
  label: string;
  initialToolName?: string;
}) {
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [toolName, setToolName] = useState(initialToolName || "");
  const [toolUrl, setToolUrl] = useState("");
  const [email, setEmail] = useState("");

  async function handleCheckout(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan, toolName, toolUrl, email }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || "Something went wrong. Please try again.");
        setLoading(false);
      }
    } catch {
      alert("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  if (!showForm) {
    return (
      <button
        onClick={() => setShowForm(true)}
        className={`block w-full text-center py-3 rounded-xl font-semibold transition cursor-pointer ${
          highlight
            ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/25"
            : "bg-gray-800 hover:bg-gray-700 text-white"
        }`}
      >
        {label}
      </button>
    );
  }

  return (
    <form onSubmit={handleCheckout} className="space-y-3">
      <input
        type="text"
        required
        placeholder="Tool name"
        value={toolName}
        onChange={(e) => setToolName(e.target.value)}
        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500"
      />
      <input
        type="url"
        required
        placeholder="https://yourtool.com"
        value={toolUrl}
        onChange={(e) => setToolUrl(e.target.value)}
        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500"
      />
      <input
        type="email"
        required
        placeholder="you@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        disabled={loading}
        className={`block w-full text-center py-3 rounded-xl font-semibold transition ${
          highlight
            ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/25"
            : "bg-gray-800 hover:bg-gray-700 text-white"
        } ${loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
      >
        {loading ? "Redirecting to Stripe..." : `Pay & ${label}`}
      </button>
    </form>
  );
}

export default function AdvertisePage() {
  return (
    <Suspense>
      <AdvertiseContent />
    </Suspense>
  );
}

function AdvertiseContent() {
  const searchParams = useSearchParams();
  const toolSlug = searchParams.get("tool") || "";
  const prefillTool = tools.find((t) => t.slug === toolSlug);
  const prefillToolName = prefillTool?.name || "";

  return (
    <div>
      {/* Claim Banner */}
      {prefillTool && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="bg-blue-600/10 border border-blue-500/20 rounded-xl px-6 py-4 flex items-center gap-3">
            <span className="text-xl">✨</span>
            <p className="text-gray-300 text-sm">
              Claiming the listing for <strong className="text-white">{prefillTool.name}</strong>? Choose a plan below to get featured placement, a dofollow backlink, and a sponsored badge.
            </p>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/15 to-amber-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-blue-400 text-sm font-medium">📣 Featured Listings</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Get Your AI Tool{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
                in Front of Thousands
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              AISO Tools is one of the fastest-growing AI tool directories with{" "}
              <strong className="text-white">{tools.length}+ curated tools</strong>,{" "}
              <strong className="text-white">5,000+ monthly visitors</strong>, and traffic from{" "}
              <strong className="text-white">ChatGPT, Google, and Perplexity</strong> — developers,
              marketers, and creators actively searching for AI solutions.
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40"
            >
              Get Featured Today
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-gray-900/80 border border-gray-800 rounded-xl p-6 text-center backdrop-blur-sm"
            >
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Traffic Sources */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-center mb-6">Where Our Visitors Come From</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { source: "ChatGPT", detail: "#1 referrer", icon: "🤖" },
              { source: "Google", detail: "Organic search", icon: "🔍" },
              { source: "Perplexity", detail: "AI search", icon: "⚡" },
              { source: "Direct", detail: "Returning users", icon: "🔁" },
            ].map((item) => (
              <div key={item.source} className="flex flex-col items-center gap-1">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-white font-medium">{item.source}</span>
                <span className="text-gray-500 text-xs">{item.detail}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            AI platforms are actively recommending tools listed on AISO Tools to their users.
          </p>
        </div>
      </section>

      {/* Why Advertise */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Advertise on AISO Tools?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Your ideal customers are already here — actively comparing AI tools and ready to try new ones.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "🎯",
              title: "Targeted AI Audience",
              description:
                "Every visitor is specifically looking for AI tools. No wasted impressions — just high-intent traffic from developers, marketers, and business owners.",
            },
            {
              icon: "📈",
              title: "Growing Organic Traffic",
              description:
                "100% organic, SEO-driven traffic that compounds over time. Your featured listing benefits from our growing domain authority and content library.",
            },
            {
              icon: "🔗",
              title: "Permanent SEO Value",
              description:
                "Every listing includes a dofollow backlink. Your featured placement gives you premium link equity from a relevant, authoritative AI directory.",
            },
            {
              icon: "⚡",
              title: "Instant Credibility",
              description:
                "A \"Featured\" badge signals trust and quality to potential users. Stand out from hundreds of other tools in your category.",
            },
            {
              icon: "📊",
              title: "Comparison Page Presence",
              description:
                "Featured tools get priority placement in our popular comparison pages — where users are actively deciding between tools.",
            },
            {
              icon: "💰",
              title: "One-Time Investment",
              description:
                "No recurring fees or subscriptions. Pay once and your featured listing stays active. Simple, transparent, no surprises.",
            },
          ].map((benefit) => (
            <div
              key={benefit.title}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition"
            >
              <div className="text-3xl mb-3">{benefit.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="pricing">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            One-time payment. No subscriptions. No hidden fees. Pay once, get featured permanently.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition ${
                plan.highlight
                  ? "bg-gradient-to-b from-blue-600/15 to-purple-600/10 border-2 border-blue-500/40 shadow-lg shadow-blue-500/10"
                  : "bg-gray-900 border border-gray-800 hover:border-gray-700"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-gray-500 text-sm">{plan.description}</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500 text-sm ml-1">{plan.priceNote}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <CheckoutButton
                plan={plan.key}
                highlight={plan.highlight}
                label={plan.cta}
                initialToolName={prefillToolName}
              />
              <p className="text-center text-gray-600 text-xs mt-3">
                <a
                  href={`mailto:shibley@apistatuscheck.com?subject=${encodeURIComponent(`${plan.name} Featured Listing — AISO Tools`)}&body=${encodeURIComponent(`Hi,\n\nI'm interested in the ${plan.name} plan (${plan.price}) for a featured listing on AISO Tools.\n\nTool Name: \nTool URL: \n\nThanks!`)}`}
                  className="hover:text-gray-400 transition"
                >
                  Prefer email? Contact us directly →
                </a>
              </p>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-500 text-sm mt-8">
          All plans are one-time payments. No subscriptions. No setup fees.
          Need a custom plan?{" "}
          <a
            href="mailto:shibley@apistatuscheck.com?subject=Custom%20Featured%20Listing%20—%20AISO%20Tools"
            className="text-blue-400 hover:text-blue-300"
          >
            Let&apos;s talk →
          </a>
        </p>
      </section>

      {/* What You Get Preview */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">See the Difference</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Featured tools immediately stand out from standard listings.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Standard Card */}
          <div>
            <p className="text-gray-500 text-sm mb-3 text-center uppercase tracking-wide">Standard Listing</p>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">Your AI Tool</h3>
              <p className="text-gray-400 text-sm mb-3">A short description of what your tool does.</p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-gray-800 text-gray-500 px-2 py-0.5 rounded-full">freemium</span>
                <div className="flex gap-1">
                  <span className="text-xs text-gray-600">ai</span>
                  <span className="text-xs text-gray-600">tool</span>
                </div>
              </div>
            </div>
          </div>
          {/* Featured Card */}
          <div>
            <p className="text-blue-400 text-sm mb-3 text-center uppercase tracking-wide font-medium">⭐ Featured Listing</p>
            <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border-2 border-blue-500/30 rounded-xl p-6 shadow-lg shadow-blue-500/5 relative">
              <div className="absolute -top-2.5 right-4">
                <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  ⭐ Featured
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-blue-100">Your AI Tool</h3>
              <p className="text-gray-300 text-sm mb-3">A short description of what your tool does.</p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-full border border-blue-500/20">freemium</span>
                <div className="flex gap-1">
                  <span className="text-xs text-gray-400">ai</span>
                  <span className="text-xs text-gray-400">tool</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "How quickly will my tool be featured?",
              a: "Within 24 hours of payment. We'll set up your featured listing, add the badge, and position your tool at the top of the relevant category pages.",
            },
            {
              q: "Is this a one-time payment or subscription?",
              a: "One-time payment. You pay once and your featured listing stays active. No recurring charges, no surprises.",
            },
            {
              q: "What's included in the dedicated review (Premium)?",
              a: "A professionally written, SEO-optimized review article (800-1200 words) published on our blog. Includes screenshots, feature breakdown, pricing analysis, and comparison with alternatives.",
            },
            {
              q: "Do I get a dofollow backlink?",
              a: "Yes! All plans include a permanent dofollow backlink to your site, which provides real SEO value from a relevant AI tools directory.",
            },
            {
              q: "My tool is already listed. Can I upgrade to featured?",
              a: "Yes! If your tool is already in our directory, you can upgrade to any featured plan. Your existing listing will be enhanced with featured placement and badges.",
            },
            {
              q: "Can I pay via invoice or bank transfer?",
              a: "For custom payment arrangements, email us at shibley@apistatuscheck.com and we'll work something out.",
            },
          ].map((faq) => (
            <div key={faq.q} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-8">
        <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/15 to-amber-500/10 border border-blue-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get More Eyes on Your AI Tool?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
              Join the growing list of AI tools reaching their target audience through AISO Tools.
              One-time payment — no subscriptions, no contracts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition shadow-lg shadow-blue-600/25"
              >
                🚀 Get Featured Now
              </a>
              <Link
                href="/submit"
                className="inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-xl font-semibold transition"
              >
                Or Submit Free →
              </Link>
            </div>
            <p className="text-gray-500 text-sm mt-6">
              Prefer email?{" "}
              <a href="mailto:shibley@apistatuscheck.com" className="text-blue-400 hover:text-blue-300">
                shibley@apistatuscheck.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
