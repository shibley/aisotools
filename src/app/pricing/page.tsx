import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing — Featured Listings & Advertising",
  description:
    "Get your AI tool featured on AISO Tools. Boost visibility with premium placements and category sponsorships.",
};

const plans = [
  {
    name: "Free Listing",
    price: "$0",
    period: "forever",
    description: "Get listed in our directory at no cost",
    features: [
      "Basic tool page with description",
      "Category placement",
      "Link to your website",
      "Tags and pricing info",
    ],
    cta: "Submit Free",
    ctaLink: "/submit",
    highlighted: false,
  },
  {
    name: "Featured",
    price: "$99",
    period: "/month",
    description: "Maximum visibility for your AI tool",
    features: [
      "Everything in Free, plus:",
      "⭐ Featured badge on listing",
      "📍 Top placement in category",
      "📊 Click & view analytics",
      "🧭 Comparison page inclusion",
      "🔗 Dofollow backlink",
      "💬 Priority support",
    ],
    cta: "Get Featured",
    ctaLink: "mailto:hello@aisotools.com?subject=AISO Featured Listing",
    highlighted: true,
  },
  {
    name: "Category Sponsor",
    price: "$299",
    period: "/month",
    description: "Own the top of an entire category",
    features: [
      "Everything in Featured, plus:",
      "🏆 Hero placement on category page",
      "🎯 Exclusive — 1 sponsor per category",
      "🧠 Dedicated review article",
      "📈 Detailed traffic & conversion analytics",
      "🖼️ Custom banner/description",
      "📞 Monthly strategy call",
    ],
    cta: "Become Sponsor",
    ctaLink: "mailto:hello@aisotools.com?subject=AISO Category Sponsorship",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Get Your Tool in Front of{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Thousands
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          AI builders, marketers, and developers discover tools on AISO every day.
          Put your tool where they&apos;re looking.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {[
          { stat: "340+", label: "AI Tools Listed" },
          { stat: "18", label: "Categories" },
          { stat: "300+", label: "Pages Indexed" },
          { stat: "100%", label: "Dofollow Backlinks" },
        ].map((item) => (
          <div key={item.label} className="text-center p-4 bg-gray-900/50 rounded-xl border border-gray-800">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{item.stat}</div>
            <div className="text-sm text-gray-400 mt-1">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl p-8 ${
              plan.highlighted
                ? "bg-gradient-to-b from-blue-600/20 to-purple-600/10 border-2 border-blue-500/50 relative"
                : "bg-gray-900 border border-gray-800"
            }`}
          >
            {plan.highlighted && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                Most Popular
              </div>
            )}
            <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
            <div className="mb-4">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="text-gray-400">{plan.period}</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href={plan.ctaLink}
              className={`block text-center py-3 rounded-lg font-medium transition ${
                plan.highlighted
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-gray-800 hover:bg-gray-700 text-white"
              }`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>

      {/* Why Advertise */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {[
          {
            icon: "🎯",
            title: "Targeted Audience",
            desc: "Our visitors are actively searching for AI tools — they have intent and budget. No wasted impressions.",
          },
          {
            icon: "📈",
            title: "SEO Backlink",
            desc: "Every featured listing includes a permanent dofollow backlink from our DA-growing domain. Real SEO value.",
          },
          {
            icon: "⚡",
            title: "Instant Visibility",
            desc: "Go live in hours, not weeks. Featured tools get top placement in their category immediately.",
          },
        ].map((item) => (
          <div key={item.title} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <div className="text-2xl mb-3">{item.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "How quickly will my tool be listed?",
              a: "Free listings are reviewed within 24 hours. Featured and Sponsored listings go live within 2 hours of payment.",
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. All paid plans are month-to-month with no long-term commitment. Cancel anytime from your dashboard.",
            },
            {
              q: "What analytics do I get?",
              a: "Featured and Sponsored listings include detailed analytics: page views, click-throughs to your site, and category ranking.",
            },
            {
              q: "Is the backlink dofollow?",
              a: "Yes. All Featured and Sponsored listings include a dofollow backlink to your website, which helps with SEO.",
            },
            {
              q: "Can I update my listing?",
              a: "Yes. You can request changes to your listing at any time by emailing us. Featured/Sponsored customers get priority updates.",
            },
          ].map((item) => (
            <div key={item.q} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
              <p className="text-gray-400">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <p className="text-gray-400 mb-4">
          Questions? Want a custom package?
        </p>
        <a
          href="mailto:hello@aisotools.com?subject=AISO Tools Custom Package"
          className="text-blue-400 hover:text-blue-300 font-medium"
        >
          Contact us at hello@aisotools.com →
        </a>
      </div>
    </div>
  );
}
