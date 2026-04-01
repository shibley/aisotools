import { tools } from "@/data/tools";
import { getAffiliateUrl } from "@/data/affiliate-links";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Otter.ai Alternatives: 10 Best Meeting Transcription Tools 2026",
  description:
    "Discover the best Otter.ai alternatives including Fireflies, Notta, Fathom, MeetGeek, and more. Compare features, pricing, and find the perfect AI transcription tool for your meetings.",
  keywords: [
    "Otter.ai alternatives",
    "best meeting transcription tools",
    "AI note taker",
    "meeting notes software",
    "Fireflies vs Otter",
    "free transcription tools",
  ],
  openGraph: {
    title: "Otter.ai Alternatives: 10 Best Meeting Transcription Tools 2026",
    description:
      "Compare the best Otter.ai alternatives. In-depth reviews of Fireflies, Notta, Fathom, MeetGeek, and 6 more AI meeting transcription tools.",
    url: "https://aisotools.com/otter-ai-alternatives",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/otter-ai-alternatives",
  },
};

interface MeetingToolComparison {
  name: string;
  slug: string;
  description: string;
  pricing: string;
  pricingDetails: string;
  strengths: string[];
  weaknesses: string[];
  bestFor: string;
  features: string[];
}

const meetingTools: MeetingToolComparison[] = [
  {
    name: "Fireflies.ai",
    slug: "fireflies-ai",
    description: "AI meeting assistant that auto-joins calls, records, transcribes, and generates searchable summaries with 100+ language support.",
    pricing: "Freemium",
    pricingDetails: "Free (unlimited transcription, 800 min storage), Pro $10/user/mo, Business $19/user/mo, Enterprise custom",
    strengths: [
      "Auto-join for Zoom, Meet, Teams",
      "Unlimited transcription on free tier",
      "100+ languages supported",
      "Searchable conversation intelligence",
      "CRM integrations (Salesforce, HubSpot)",
      "Topic tracking and analytics",
    ],
    weaknesses: [
      "Storage limits on free tier (800 min)",
      "Can feel intrusive joining automatically",
      "Mobile app limited functionality",
    ],
    bestFor: "Sales teams, customer success, high-volume meeting workflows",
    features: ["Auto-join", "CRM sync", "Topic tracking", "100+ languages", "API access"],
  },
  {
    name: "Notta",
    slug: "notta",
    description: "Real-time transcription and meeting notes with speaker identification, summaries, and multi-device support.",
    pricing: "Freemium",
    pricingDetails: "Free (120 min/mo transcription), Pro $8.99/user/mo, Business $14.99/user/mo",
    strengths: [
      "Real-time transcription accuracy (98.86%)",
      "Works across web, mobile, Chrome extension",
      "Speaker identification",
      "Automatic summary generation",
      "Export to Notion, Google Docs, Slack",
      "Live interview transcription",
    ],
    weaknesses: [
      "Free tier only 120 min/month",
      "Limited integrations vs competitors",
      "No automated meeting bot",
    ],
    bestFor: "Journalists, researchers, interviewers, podcasters",
    features: ["Real-time transcription", "Speaker ID", "Mobile app", "Export integrations", "Live sharing"],
  },
  {
    name: "Fathom",
    slug: "fathom",
    description: "Free AI meeting assistant for Zoom with instant summaries, highlights, and action items—no credit card required.",
    pricing: "Free",
    pricingDetails: "100% free for Zoom, Google Meet, Microsoft Teams (unlimited meetings)",
    strengths: [
      "Completely free forever (no limits)",
      "Instant AI summaries after calls",
      "Highlights & action items",
      "CRM sync (Salesforce, HubSpot, Close)",
      "Team collaboration features",
      "Privacy-focused (GDPR compliant)",
    ],
    weaknesses: [
      "Zoom-only for full features (Meet/Teams limited)",
      "No mobile app",
      "Fewer languages than competitors",
    ],
    bestFor: "Zoom-heavy teams, budget-conscious users, sales professionals",
    features: ["Free forever", "AI summaries", "CRM sync", "Highlights", "Team sharing"],
  },
  {
    name: "MeetGeek",
    slug: "meetgeek",
    description: "AI meeting automation platform with recording, transcription, and auto-extracted action items and insights.",
    pricing: "Freemium",
    pricingDetails: "Free (5 hours storage), Basic $15/user/mo, Pro $29/user/mo, Business custom",
    strengths: [
      "Automatic action item extraction",
      "Meeting templates for recurring calls",
      "Team performance analytics",
      "Repository for all meetings",
      "Custom summaries by meeting type",
      "Detailed engagement metrics",
    ],
    weaknesses: [
      "Free tier very limited (5 hours)",
      "Steeper learning curve",
      "Higher pricing for pro features",
    ],
    bestFor: "Teams with recurring meeting types, managers tracking performance",
    features: ["Auto action items", "Meeting templates", "Analytics", "Repository", "Custom summaries"],
  },
  {
    name: "Tactiq",
    slug: "tactiq",
    description: "Chrome extension for live meeting transcription with AI-generated summaries and action items—works entirely in browser.",
    pricing: "Freemium",
    pricingDetails: "Free (10 transcripts/mo), Pro $8/mo, Premium $16/mo",
    strengths: [
      "Lightweight Chrome extension",
      "Works offline (browser-based)",
      "OpenAI GPT integration",
      "Custom AI prompts",
      "Speaker-tagged transcripts",
      "Simple, non-intrusive",
    ],
    weaknesses: [
      "Chrome-only (no native apps)",
      "Free tier only 10 meetings/month",
      "Doesn't auto-join meetings",
    ],
    bestFor: "Individual contributors, privacy-conscious users, Chrome users",
    features: ["Chrome extension", "GPT integration", "Custom prompts", "Speaker tags", "No bot required"],
  },
  {
    name: "Grain",
    slug: "grain",
    description: "Video-first meeting recorder with AI notes, clips, and coaching insights for customer-facing teams.",
    pricing: "Freemium",
    pricingDetails: "Free (limited), Basic $15/user/mo, Pro $39/user/mo, Business custom",
    strengths: [
      "Video clip creation from meetings",
      "Call coaching & deal tracking",
      "Highlight reels for onboarding",
      "Customer interaction analytics",
      "Slack integration for sharing clips",
      "Revenue intelligence features",
    ],
    weaknesses: [
      "Expensive for full features",
      "Overkill for basic transcription needs",
      "Focused on sales use cases",
    ],
    bestFor: "Sales teams, customer success, revenue operations, coaching",
    features: ["Video clips", "Coaching insights", "Deal tracking", "Highlight reels", "Revenue analytics"],
  },
  {
    name: "Sembly AI",
    slug: "sembly-ai",
    description: "Professional meeting assistant with attendance tracking, sentiment analysis, and compliance-grade transcription.",
    pricing: "Freemium",
    pricingDetails: "Personal (free), Professional $10/user/mo, Team $20/user/mo, Enterprise custom",
    strengths: [
      "Attendance tracking",
      "Sentiment analysis",
      "Compliance & security focused",
      "Multi-language transcription",
      "Task management integration",
      "Meeting insights dashboard",
    ],
    weaknesses: [
      "Interface can feel cluttered",
      "Free tier limited features",
      "Occasional transcription errors",
    ],
    bestFor: "Enterprise teams, compliance-heavy industries, formal meetings",
    features: ["Attendance tracking", "Sentiment analysis", "Compliance", "Task integration", "Insights dashboard"],
  },
  {
    name: "Avoma",
    slug: "avoma",
    description: "End-to-end meeting lifecycle platform combining scheduling, recording, transcription, and revenue intelligence.",
    pricing: "Paid",
    pricingDetails: "Starter $19/user/mo, Plus $49/user/mo, Business $79/user/mo, Enterprise custom",
    strengths: [
      "Full meeting lifecycle coverage",
      "Revenue intelligence & forecasting",
      "Conversation intelligence",
      "Automated scheduling",
      "Deal collaboration features",
      "Advanced analytics & reporting",
    ],
    weaknesses: [
      "No free tier",
      "Expensive for small teams",
      "Complex feature set",
    ],
    bestFor: "Revenue teams, enterprise sales, customer success leadership",
    features: ["Full lifecycle", "Revenue intelligence", "Scheduling", "Forecasting", "Analytics"],
  },
  {
    name: "Rewatch",
    slug: "rewatch",
    description: "Collaborative video hub for async meetings with searchable transcripts, playlists, and knowledge base functionality.",
    pricing: "Paid",
    pricingDetails: "Standard $16.25/user/mo, Pro $29.17/user/mo (annual pricing)",
    strengths: [
      "Async-first video collaboration",
      "Video playlists & channels",
      "Company knowledge base",
      "Screen recording built-in",
      "Searchable video library",
      "Slack/Microsoft Teams integration",
    ],
    weaknesses: [
      "No free tier",
      "Not designed for live meetings",
      "Higher price point",
    ],
    bestFor: "Remote-first teams, async communication, internal knowledge sharing",
    features: ["Async video hub", "Playlists", "Knowledge base", "Screen recording", "Search"],
  },
  {
    name: "Otter.ai",
    slug: "otter-ai",
    description: "The original AI meeting transcription tool with live transcripts, speaker identification, and collaborative note-taking.",
    pricing: "Freemium",
    pricingDetails: "Basic (free, 300 min/mo), Pro $8.33/mo, Business $20/user/mo, Enterprise custom",
    strengths: [
      "Pioneer in AI transcription",
      "Excellent live transcription accuracy",
      "Collaborative editing & highlighting",
      "Mobile apps (iOS/Android)",
      "OtterPilot auto-join for meetings",
      "Integration with Zoom, Meet, Teams",
    ],
    weaknesses: [
      "Free tier limited to 300 min/month",
      "Privacy concerns (cloud storage)",
      "Can be expensive at scale ($20/user)",
    ],
    bestFor: "General meeting transcription, established workflows, mobile recording",
    features: ["Live transcription", "OtterPilot", "Collaborative notes", "Mobile apps", "Speaker ID"],
  },
];

export default function OtterAIAlternativesPage() {
  // Get actual tool data where available
  const toolsBySlug = new Map(tools.map((t) => [t.slug, t]));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-white">
          Home
        </Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Otter.ai Alternatives</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Otter.ai Alternatives: 10 Best Meeting Transcription Tools 2026
        </h1>
        <p className="text-xl text-gray-400 max-w-4xl">
          Looking for Otter.ai alternatives? Compare the best AI meeting transcription tools including
          Fireflies, Notta, Fathom, MeetGeek, and more. Find the perfect solution for recording,
          transcribing, and summarizing your meetings—whether you need free options, better integrations,
          or specialized features for sales and customer success.
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
            Updated April 2026
          </span>
          <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
            10 Meeting Tools Compared
          </span>
        </div>
      </header>

      {/* Quick Navigation */}
      <section className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-12">
        <h2 className="text-lg font-semibold mb-3">Quick Navigation</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 text-sm">
          {meetingTools.map((tool) => (
            <a
              key={tool.slug}
              href={`#${tool.slug}`}
              className="text-blue-400 hover:text-blue-300 transition"
            >
              {tool.name}
            </a>
          ))}
        </div>
      </section>

      {/* Introduction */}
      <section className="prose prose-invert max-w-none mb-16">
        <h2 className="text-3xl font-bold mb-4">Why Look for Otter.ai Alternatives?</h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          Otter.ai pioneered AI meeting transcription and remains a solid choice—but it's not the only
          option, and depending on your workflow, it might not be the best fit.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          Fireflies.ai offers unlimited transcription on the free tier with better team collaboration.
          Fathom is completely free forever for Zoom users. Notta excels at real-time transcription for
          interviews and podcasts. MeetGeek provides powerful meeting analytics for performance tracking.
          And Tactiq offers a lightweight Chrome extension with full offline functionality.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed">
          This guide compares 10 top Otter.ai alternatives across features, pricing, strengths, and ideal
          use cases to help you find the right meeting transcription tool.
        </p>
      </section>

      {/* Comparison Table */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Quick Comparison Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-gray-900 border border-gray-800 rounded-xl">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Meeting Tool</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Pricing</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Best For</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Key Feature</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {meetingTools.map((tool) => (
                <tr key={tool.slug} className="hover:bg-gray-800/50 transition">
                  <td className="px-4 py-3">
                    <a href={`#${tool.slug}`} className="font-medium text-blue-400 hover:text-blue-300">
                      {tool.name}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-400">{tool.pricing}</td>
                  <td className="px-4 py-3 text-sm text-gray-400">{tool.bestFor.split(",")[0]}</td>
                  <td className="px-4 py-3 text-sm text-gray-400">{tool.strengths[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed Reviews */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Detailed Otter.ai Alternatives Reviews</h2>
        <div className="space-y-12">
          {meetingTools.map((tool, index) => {
            const toolData = toolsBySlug.get(tool.slug);
            return (
              <article
                key={tool.slug}
                id={tool.slug}
                className="bg-gray-900 border border-gray-800 rounded-xl p-8 scroll-mt-24"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      {index + 1}. {tool.name}
                    </h3>
                    <p className="text-gray-400">{tool.description}</p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    {(() => {
                      const affUrl = getAffiliateUrl(tool.slug) || toolData?.affiliateUrl;
                      return affUrl ? (
                        <a
                          href={affUrl}
                          target="_blank"
                          rel="noopener noreferrer sponsored"
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                        >
                          Try {tool.name} →
                        </a>
                      ) : null;
                    })()}
                    {toolData && (
                      <Link
                        href={`/tool/${tool.slug}`}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                      >
                        View Tool →
                      </Link>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  {/* Pricing */}
                  <div>
                    <h4 className="font-semibold text-gray-300 mb-2">💰 Pricing</h4>
                    <p className="text-gray-400 text-sm mb-1">{tool.pricing}</p>
                    <p className="text-gray-500 text-xs">{tool.pricingDetails}</p>
                  </div>

                  {/* Best For */}
                  <div>
                    <h4 className="font-semibold text-gray-300 mb-2">🎯 Best For</h4>
                    <p className="text-gray-400 text-sm">{tool.bestFor}</p>
                  </div>
                </div>

                {/* Strengths */}
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-300 mb-3">✅ Strengths</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {tool.strengths.map((strength, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start">
                        <span className="text-green-400 mr-2 mt-0.5">•</span>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Weaknesses */}
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-300 mb-3">⚠️ Weaknesses</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {tool.weaknesses.map((weakness, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start">
                        <span className="text-red-400 mr-2 mt-0.5">•</span>
                        {weakness}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features */}
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-300 mb-3">🔧 Key Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {tool.features.map((feature, i) => (
                      <span
                        key={i}
                        className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Use Case Guide */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Which Otter.ai Alternative Should You Choose?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Sales Teams</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Fireflies.ai:</strong> CRM sync, conversation intelligence</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Grain:</strong> Video clips, coaching insights</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Avoma:</strong> Full revenue intelligence platform</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Budget-Conscious Teams</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Fathom:</strong> 100% free forever (Zoom)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Fireflies.ai:</strong> Unlimited transcription on free tier</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Tactiq:</strong> Lightweight, $8/mo for unlimited</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Interviews & Research</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Notta:</strong> Real-time accuracy, mobile friendly</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Otter.ai:</strong> Collaborative note-taking</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Tactiq:</strong> Offline capability, privacy-focused</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Customer Success Teams</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Fireflies.ai:</strong> Cross-meeting search, topic tracking</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>MeetGeek:</strong> Performance analytics, templates</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Grain:</strong> Customer interaction insights</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Remote-First Companies</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Rewatch:</strong> Async video hub, knowledge base</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Fireflies.ai:</strong> Searchable meeting library</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>MeetGeek:</strong> Meeting repository</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Individual Contributors</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Tactiq:</strong> Simple Chrome extension, GPT integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Fathom:</strong> Free, instant summaries</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Notta:</strong> Affordable, mobile-friendly</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Is there a completely free Otter.ai alternative?</h3>
            <p className="text-gray-400">
              Yes! Fathom is 100% free forever for Zoom users with no limits on meetings or storage. Fireflies.ai
              offers unlimited transcription on its free tier (with 800 minutes of storage). For basic needs,
              both provide excellent free alternatives to Otter.ai's limited free tier (300 min/month).
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Which is better: Fireflies or Otter.ai?</h3>
            <p className="text-gray-400">
              Fireflies.ai is better for sales and customer success teams needing CRM integration, unlimited
              transcription, and conversation intelligence. Otter.ai excels at collaborative note-taking,
              mobile recording, and has slightly better live transcription accuracy. For individual use,
              Otter.ai. For team workflows and integrations, Fireflies.ai.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">What's the best meeting transcription tool for Zoom?</h3>
            <p className="text-gray-400">
              Fathom is the best choice for Zoom-heavy teams—it's completely free, integrates natively with Zoom,
              and provides instant AI summaries and action items. For teams using multiple platforms (Zoom, Meet,
              Teams), Fireflies.ai or Otter.ai offer better cross-platform support.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Can I use these tools offline?</h3>
            <p className="text-gray-400">
              Tactiq works offline in your browser as a Chrome extension, processing transcription locally.
              However, most AI meeting assistants (Otter.ai, Fireflies, Notta) require internet connection
              for real-time transcription and AI processing. For offline recording, use Otter.ai's mobile
              app or Notta's mobile app, which can record offline and upload later.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Which tool is best for sales call analysis?</h3>
            <p className="text-gray-400">
              Grain and Avoma are purpose-built for sales with features like deal tracking, coaching insights,
              and revenue intelligence. Fireflies.ai offers excellent CRM integration at a lower price point.
              For video-based coaching, Grain's clip functionality is unmatched. For comprehensive revenue
              operations, Avoma provides the full package.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Do these tools support languages other than English?</h3>
            <p className="text-gray-400">
              Fireflies.ai supports 100+ languages. Notta supports 58 languages. Sembly AI offers multi-language
              transcription. Otter.ai primarily focuses on English but supports Spanish. For non-English meetings,
              Fireflies.ai and Notta are the best options.
            </p>
          </div>
        </div>
      </section>

      {/* Related Reading */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">📚 Related Reading</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/blog/best-ai-productivity-tools-2026" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/40 transition group">
            <h3 className="font-semibold group-hover:text-blue-400 transition mb-2">Best AI Productivity Tools 2026</h3>
            <p className="text-gray-500 text-sm">Discover AI tools that automate workflows and boost efficiency.</p>
          </Link>
          <Link href="/chatgpt-vs-claude" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/40 transition group">
            <h3 className="font-semibold group-hover:text-blue-400 transition mb-2">ChatGPT vs Claude</h3>
            <p className="text-gray-500 text-sm">Compare AI assistants for summarization and analysis.</p>
          </Link>
          <Link href="/notion-ai-alternatives" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/40 transition group">
            <h3 className="font-semibold group-hover:text-blue-400 transition mb-2">Notion AI Alternatives</h3>
            <p className="text-gray-500 text-sm">Explore AI-powered note-taking and knowledge management tools.</p>
          </Link>
        </div>
        <div className="flex flex-wrap gap-3 mt-6">
          <span className="text-gray-500 text-sm">Related alternatives:</span>
          <Link href="/chatgpt-alternatives" className="text-blue-400 hover:text-blue-300 text-sm">ChatGPT Alternatives</Link>
          <span className="text-gray-700">·</span>
          <Link href="/grammarly-alternatives" className="text-blue-400 hover:text-blue-300 text-sm">Grammarly Alternatives</Link>
          <span className="text-gray-700">·</span>
          <Link href="/canva-alternatives" className="text-blue-400 hover:text-blue-300 text-sm">Canva Alternatives</Link>
          <span className="text-gray-700">·</span>
          <Link href="/alternatives" className="text-blue-400 hover:text-blue-300 text-sm">All Alternatives →</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Explore More AI Tools</h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Discover hundreds of AI tools across all categories—from chatbots to video generators and
          productivity tools.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Browse All Tools
          </Link>
          <Link
            href="/category/productivity"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            More Productivity Tools →
          </Link>
        </div>
      </section>
    </div>
  );
}
