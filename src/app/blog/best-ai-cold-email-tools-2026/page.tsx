import { getAffiliateUrl } from "@/data/affiliate-links";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Cold Email Tools in 2026: Write Personalized Outreach at Scale",
  description:
    "Compare the best AI cold email tools in 2026. Automate personalized cold outreach, improve reply rates, and book more meetings with AI-powered email sequencing.",
  keywords: [
    "best ai cold email tool",
    "ai cold email writer",
    "ai cold email",
    "cold email ai",
    "ai email outreach",
    "ai for cold email",
    "cold email automation ai",
    "best cold email software 2026",
    "ai email personalization",
  ],
  openGraph: {
    title: "Best AI Cold Email Tools in 2026: Write Personalized Outreach at Scale",
    description:
      "The top AI cold email tools compared — Smartlead, Instantly, Apollo, Lemlist, and more. Automate personalized outreach and book more meetings.",
    url: "https://aisotools.com/blog/best-ai-cold-email-tools-2026",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/blog/best-ai-cold-email-tools-2026",
  },
};

interface ColdEmailTool {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  pricing: string;
  pricingDetails: string;
  bestFor: string;
  aiFeatures: string[];
  pros: string[];
  cons: string[];
  freeOption: string;
  rating: number;
}

const coldEmailTools: ColdEmailTool[] = [
  {
    name: "Smartlead",
    slug: "smartlead",
    tagline: "Best AI cold email tool for scale (unlimited sending accounts)",
    description:
      "Smartlead is built for agencies and sales teams that send at high volume. Its AI-powered warm-up system automatically builds sender reputation across unlimited email accounts. AI generates personalized email variants, rotates sending accounts to avoid spam filters, and optimizes send times based on recipient behavior patterns.",
    pricing: "Paid",
    pricingDetails: "Basic $39/mo, Pro $94/mo, Custom from $174/mo",
    bestFor: "Agencies and enterprise teams sending cold email at scale",
    aiFeatures: [
      "AI email warm-up on unlimited accounts",
      "AI personalization at scale from LinkedIn/company data",
      "AI-powered send time optimization",
      "Spam score checker before sending",
      "AI subject line A/B testing",
    ],
    pros: [
      "Unlimited email sending accounts (no per-account fees)",
      "Best deliverability in the market (inbox-first AI warm-up)",
      "White-label option for agencies",
      "API for custom integrations",
      "Detailed deliverability analytics",
    ],
    cons: [
      "Steeper learning curve than simpler tools",
      "No built-in lead database (need Apollo/Clay for prospects)",
      "Higher starting price than Instantly",
    ],
    freeOption: "14-day free trial; no permanent free tier",
    rating: 4.7,
  },
  {
    name: "Instantly",
    slug: "instantly",
    tagline: "Best AI cold email tool for beginners and solo founders",
    description:
      "Instantly combines AI email writing with unlimited sending accounts and automated warm-up — packaged in the most user-friendly interface of any cold email tool. The B2B lead database (160M+ contacts) means you can source leads and send from a single platform. Ideal for founders doing outreach themselves.",
    pricing: "Paid",
    pricingDetails: "Growth $37/mo, Hypergrowth $97/mo, Enterprise custom",
    bestFor: "Solo founders, SDRs, and small teams new to cold email",
    aiFeatures: [
      "AI email writer with prompt templates",
      "AI personalization from prospect data",
      "Automated inbox warm-up",
      "AI subject line suggestions",
      "AI reply detection and categorization",
    ],
    pros: [
      "Easiest UI in the category",
      "Unlimited email accounts on all plans",
      "Built-in B2B lead database (160M+ contacts)",
      "AI reply categorization (interested/not interested/OOO)",
      "CRM integration (HubSpot, Salesforce, Pipedrive)",
    ],
    cons: [
      "Lead database quality varies by industry",
      "Less advanced customization than Smartlead",
      "AI email writing less powerful than dedicated writing tools",
    ],
    freeOption: "14-day free trial; no permanent free tier",
    rating: 4.6,
  },
  {
    name: "Apollo",
    slug: "apollo",
    tagline: "Best all-in-one: AI cold email + prospect database",
    description:
      "Apollo combines a 275M+ contact database with AI email sequencing. Find your ICP, enrich with phone/LinkedIn data, and launch automated sequences — all in one platform. Apollo AI writes personalized emails based on prospect LinkedIn, company news, and job title, making personalization genuinely scalable.",
    pricing: "Freemium",
    pricingDetails: "Free (limited), Basic $59/mo, Professional $99/mo",
    bestFor: "Sales teams that need both prospect database AND email automation",
    aiFeatures: [
      "AI email writing from prospect profile data",
      "AI ICP (Ideal Customer Profile) identification",
      "AI contact enrichment and data completion",
      "AI-powered sequence optimization",
      "Intent data signals for better timing",
    ],
    pros: [
      "275M+ verified contact database (no separate list needed)",
      "Phone number and LinkedIn data included",
      "Free tier with 50 email credits/mo",
      "Native CRM (or integrates with major CRMs)",
      "Intent signals show who's actively buying",
    ],
    cons: [
      "Free tier very limited for serious outreach",
      "Data quality occasionally outdated",
      "Email deliverability tools less advanced than Smartlead/Instantly",
    ],
    freeOption: "Free: 50 email credits, 5 phone credits, 10 sequences/month",
    rating: 4.5,
  },
  {
    name: "Lemlist",
    slug: "lemlist",
    tagline: "Best AI cold email for personalized video and image outreach",
    description:
      "Lemlist pioneered personalized image and video thumbnails in cold email — and now adds AI to create personalized email text, LinkedIn touchpoints, and cold call steps in multichannel sequences. If your industry responds to high-touch, personalized outreach over pure volume, Lemlist's creative personalization stands out.",
    pricing: "Paid",
    pricingDetails: "Email Outreach $59/mo, Sales Engagement $99/mo",
    bestFor: "B2B sellers who want personalized image/video in cold email",
    aiFeatures: [
      "AI personalized email writing",
      "AI-generated personalized images (company logo, name in image)",
      "AI multichannel sequence builder",
      "AI reply analysis and follow-up suggestions",
      "AI email warm-up",
    ],
    pros: [
      "Unique personalized image/video in emails (higher engagement)",
      "Multichannel: email + LinkedIn + phone in one sequence",
      "B2B lead database (450M+ contacts) built in",
      "Warm-up network via Lemlist community",
      "Split testing at every step",
    ],
    cons: [
      "Higher price than pure cold email tools",
      "Personalized image feature has learning curve",
      "Video in email has limited client support",
    ],
    freeOption: "14-day free trial; no permanent free tier",
    rating: 4.4,
  },
  {
    name: "Clay",
    slug: "clay",
    tagline: "Best AI for hyper-personalized cold email at scale",
    description:
      "Clay is a data enrichment and AI email personalization platform — not a sending tool, but the most powerful layer for making cold emails feel 1-to-1 at scale. It pulls data from 75+ sources (LinkedIn, Apollo, Clearbit, news APIs) and uses AI to write genuinely personalized first lines for each prospect. Pair with Smartlead or Instantly for sending.",
    pricing: "Freemium",
    pricingDetails: "Free (100 credits/mo), Starter $149/mo, Explorer $349/mo",
    bestFor: "Advanced marketers and agencies needing the deepest AI personalization",
    aiFeatures: [
      "AI email writing from 75+ data sources",
      "AI research agent per prospect (visits website, reads news)",
      "AI ICP scoring and lead qualification",
      "AI enrichment of partial contact data",
      "Waterfall enrichment (tries multiple sources)",
    ],
    pros: [
      "Deepest AI personalization available (not just name/company)",
      "Pulls from 75+ data sources simultaneously",
      "AI agents research each prospect's actual situation",
      "Integrates with all major sending platforms",
      "Free tier (100 credits) for testing",
    ],
    cons: [
      "Requires separate sending tool (Smartlead, Instantly, etc.)",
      "Complex setup — not for beginners",
      "Credits-based pricing can get expensive at volume",
    ],
    freeOption: "Free: 100 credits/month (~10-20 enriched contacts)",
    rating: 4.6,
  },
  {
    name: "ChatGPT",
    slug: "chatgpt",
    tagline: "Best AI for writing cold email templates and sequences",
    description:
      "While not a cold email platform, ChatGPT is the fastest way to generate cold email frameworks, subject line variants, follow-up sequences, and objection responses. Use it to draft 10 subject line variations, create persona-specific templates, or refine existing emails for clarity and persuasion.",
    pricing: "Freemium",
    pricingDetails: "Free (GPT-4o mini), Plus $20/mo (GPT-4o)",
    bestFor: "Anyone who wants to write better cold emails manually",
    aiFeatures: [
      "Generate 10+ cold email variants from a single brief",
      "Subject line A/B test generation",
      "Follow-up sequence drafting",
      "Personalization framework creation",
      "Objection-handling email responses",
    ],
    pros: [
      "Free tier handles most cold email writing tasks",
      "Generates high-volume subject line and body variations instantly",
      "Ask for industry-specific examples and tones",
      "No platform lock-in — copy to any sending tool",
      "Best for one-time writing vs. automated sequences",
    ],
    cons: [
      "No sending, sequencing, or deliverability features",
      "Requires manual copy-paste to your email tool",
      "Not a replacement for dedicated cold email platforms",
    ],
    freeOption: "Fully functional free tier for writing tasks",
    rating: 4.5,
  },
];

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.3;
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-lg">
          {i < fullStars ? "⭐" : i === fullStars && hasHalf ? "⭐" : "☆"}
        </span>
      ))}
      <span className="ml-1 text-sm font-medium text-gray-600">
        {rating}/5
      </span>
    </div>
  );
}

export default function BestAIColdEmailTools2026() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-8">
      {/* Hero */}
      <header className="mb-12">
        <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/blog" className="hover:text-blue-600">
            Blog
          </Link>
          <span>→</span>
          <span>Best AI Cold Email Tools</span>
        </div>
        <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
          Best AI Cold Email Tools in 2026
        </h1>
        <p className="mb-6 text-xl leading-relaxed text-gray-600">
          Send personalized cold outreach at scale with AI. {coldEmailTools.length}{" "}
          tools compared — from AI email writers to full outreach automation
          platforms.
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          <span>📅 Updated May 2026</span>
          <span>•</span>
          <span>⏱️ 10 min read</span>
          <span>•</span>
          <span>📧 {coldEmailTools.length} tools reviewed</span>
        </div>
      </header>

      {/* Quick picker */}
      <section className="mb-12 rounded-lg bg-blue-50 p-6">
        <h2 className="mb-4 text-xl font-bold text-gray-900">
          Which AI Cold Email Tool Is Right for You?
        </h2>
        <div className="space-y-3">
          <div className="rounded-lg bg-white p-3">
            <p className="text-sm font-semibold text-gray-900">Solo founder / first outreach campaign</p>
            <p className="text-sm text-gray-600">→ <strong>Instantly</strong> (easiest UI + built-in leads)</p>
          </div>
          <div className="rounded-lg bg-white p-3">
            <p className="text-sm font-semibold text-gray-900">Agency sending high volume for clients</p>
            <p className="text-sm text-gray-600">→ <strong>Smartlead</strong> (unlimited accounts, white-label)</p>
          </div>
          <div className="rounded-lg bg-white p-3">
            <p className="text-sm font-semibold text-gray-900">Need leads + email platform in one tool</p>
            <p className="text-sm text-gray-600">→ <strong>Apollo</strong> (275M contacts + sequences)</p>
          </div>
          <div className="rounded-lg bg-white p-3">
            <p className="text-sm font-semibold text-gray-900">High-touch B2B with personalized video/images</p>
            <p className="text-sm text-gray-600">→ <strong>Lemlist</strong> (unique personalization features)</p>
          </div>
          <div className="rounded-lg bg-white p-3">
            <p className="text-sm font-semibold text-gray-900">Maximum AI personalization for existing list</p>
            <p className="text-sm text-gray-600">→ <strong>Clay</strong> (75+ data sources, pair with Smartlead)</p>
          </div>
          <div className="rounded-lg bg-white p-3">
            <p className="text-sm font-semibold text-gray-900">Just need better email copy (not a platform)</p>
            <p className="text-sm text-gray-600">→ <strong>ChatGPT</strong> (free, generate unlimited variants)</p>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="mb-16 space-y-10">
        <h2 className="text-3xl font-bold text-gray-900">
          AI Cold Email Tools Reviewed
        </h2>
        {coldEmailTools.map((tool, index) => {
          const affiliateUrl = getAffiliateUrl(tool.slug);
          const toolUrl = `/tool/${tool.slug}`;

          return (
            <div
              key={tool.name}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="mb-1 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        <Link href={toolUrl} className="hover:text-blue-600">
                          {tool.name}
                        </Link>
                      </h3>
                      <p className="text-sm font-medium text-blue-600">{tool.tagline}</p>
                    </div>
                  </div>
                  <StarRating rating={tool.rating} />
                </div>
                <div className="text-right">
                  <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                    {tool.pricing}
                  </span>
                  <p className="mt-1 text-xs text-gray-500">{tool.pricingDetails}</p>
                </div>
              </div>

              <p className="mb-4 leading-relaxed text-gray-700">{tool.description}</p>

              <div className="mb-4">
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
                  AI Features
                </h4>
                <ul className="grid gap-1 sm:grid-cols-2">
                  {tool.aiFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="mt-0.5 text-blue-500">🤖</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
                    Pros
                  </h4>
                  <ul className="space-y-1">
                    {tool.pros.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-0.5 text-green-500">✓</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
                    Cons
                  </h4>
                  <ul className="space-y-1">
                    {tool.cons.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-0.5 text-red-400">✗</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 border-t border-gray-100 pt-4">
                <div className="flex-1">
                  <p className="text-sm text-gray-500">
                    <strong>Best for:</strong> {tool.bestFor}
                  </p>
                  <p className="mt-1 text-xs text-blue-600">🆓 {tool.freeOption}</p>
                </div>
                <div className="flex gap-2">
                  {affiliateUrl && (
                    <a
                      href={affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                    >
                      Try {tool.name} →
                    </a>
                  )}
                  <Link
                    href={toolUrl}
                    className="inline-flex items-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                  >
                    Full Review
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Cold email tips */}
      <section className="mb-12 rounded-lg bg-gray-50 p-6">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          AI Cold Email Best Practices
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            <strong>1. Lead with a specific observation.</strong> The best AI-personalized
            first lines reference something specific about the prospect — a recent
            funding round, a blog post they published, a job change. Generic "I noticed
            you work at [company]" doesn't cut through. Use Clay or Lemlist AI to pull
            real signals.
          </p>
          <p>
            <strong>2. One CTA per email.</strong> AI can generate compelling copy but
            can't fix a confused email. Keep it to one ask: a 15-minute call, a specific
            question, or a yes/no. Multiple CTAs kill reply rates.
          </p>
          <p>
            <strong>3. Warm up before blasting.</strong> Any new email account needs
            2–4 weeks of AI warm-up before large campaigns. Smartlead and Instantly
            automate this — skip it and your domain lands in spam.
          </p>
          <p>
            <strong>4. Test subject lines relentlessly.</strong> The subject line
            determines if your email gets opened. Use ChatGPT to generate 10 variants,
            A/B test with your platform, and double down on winners.
          </p>
          <p>
            <strong>5. Follow up more than feels comfortable.</strong> Most replies come
            on email 3-5 in a sequence. The AI-optimized follow-up sequence should
            add value, not just "just checking in."
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              Is AI cold email legal?
            </h3>
            <p className="leading-relaxed text-gray-700">
              Cold email is legal in most countries with proper compliance. In the
              US, CAN-SPAM requires a physical address, unsubscribe option, and
              honest subject lines. In Europe, GDPR requires legitimate interest
              for B2B prospecting. Always include an easy opt-out, never use
              deceptive subject lines, and target businesses rather than
              consumers for cleaner compliance.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              What's a good reply rate for AI cold email?
            </h3>
            <p className="leading-relaxed text-gray-700">
              Industry benchmarks: <strong>3-5% reply rate</strong> is decent,
              <strong>5-10% is strong</strong>, and anything above 10% is
              exceptional. AI personalization typically lifts reply rates by 2-4x
              compared to generic templates. The highest performers combine
              laser-targeted ICPs, ultra-specific personalization, and sharp CTAs.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              How does AI personalize cold emails?
            </h3>
            <p className="leading-relaxed text-gray-700">
              Modern AI cold email tools pull data from LinkedIn profiles, company
              websites, news articles, job postings, and funding databases —
              then generate unique first lines for each prospect. Clay is the most
              advanced: it runs an AI research agent per prospect that visits their
              website, reads recent press, and crafts a personalized opening based
              on their actual situation.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              How many cold emails can I send per day?
            </h3>
            <p className="leading-relaxed text-gray-700">
              Per email account, best practice is <strong>30-50 emails/day</strong>{" "}
              for new accounts and up to 100-150 for warmed-up accounts. The key
              advantage of tools like Smartlead and Instantly is using{" "}
              <em>multiple sending accounts</em> — 10 warmed accounts = 500-1,500
              emails/day safely. More accounts, not more volume per account.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
        <h2 className="mb-4 text-3xl font-bold">Start Your AI Cold Email Campaign</h2>
        <p className="mb-6 text-lg leading-relaxed text-blue-50">
          For most teams: start with <strong>Apollo</strong> (free tier for leads
          + sequences) or <strong>Instantly</strong> (easiest all-in-one). When you
          scale past 1K emails/day, upgrade to <strong>Smartlead</strong> for
          deliverability.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/blog/best-ai-email-tools-2026"
            className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-colors hover:bg-gray-100"
          >
            Best AI Email Tools →
          </Link>
          <Link
            href="/blog/best-ai-tools-for-sales-professionals-2026"
            className="inline-flex items-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-blue-600"
          >
            Best AI Tools for Sales →
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Best AI Cold Email Tools in 2026: Write Personalized Outreach at Scale",
            description:
              "Compare the best AI cold email tools including Smartlead, Instantly, Apollo, Lemlist, Clay, and more for personalized outreach automation.",
            author: { "@type": "Organization", name: "AISOTools" },
            publisher: {
              "@type": "Organization",
              name: "AISOTools",
              logo: { "@type": "ImageObject", url: "https://aisotools.com/logo.png" },
            },
            datePublished: "2026-05-01",
            dateModified: "2026-05-01",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://aisotools.com/blog/best-ai-cold-email-tools-2026",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is AI cold email legal?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cold email is legal in most countries with proper compliance. CAN-SPAM in the US requires a physical address, unsubscribe option, and honest subject lines. Always include an easy opt-out.",
                },
              },
              {
                "@type": "Question",
                name: "What's a good reply rate for AI cold email?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "3-5% reply rate is decent, 5-10% is strong, and above 10% is exceptional. AI personalization typically lifts reply rates by 2-4x compared to generic templates.",
                },
              },
              {
                "@type": "Question",
                name: "How does AI personalize cold emails?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "AI cold email tools pull data from LinkedIn profiles, company websites, news articles, and funding databases to generate unique first lines for each prospect.",
                },
              },
              {
                "@type": "Question",
                name: "How many cold emails can I send per day?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Best practice is 30-50 emails/day per account for new accounts and up to 150 for warmed-up accounts. Use multiple sending accounts (10 accounts = 500-1,500 emails/day safely).",
                },
              },
            ],
          }),
        }}
      />
    </article>
  );
}
