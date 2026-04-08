import Link from "next/link";
import type { Metadata } from "next";

const year = 2026;

export const metadata: Metadata = {
  title: `Best Clockwise Alternatives (${year}) — Top 7 AI Scheduling Tools | AISO Tools`,
  description: `Looking for Clockwise alternatives? Compare the 7 best AI calendar and scheduling alternatives with features, pricing, and who each is best for in ${year}.`,
  alternates: {
    canonical: "https://aisotools.com/alternatives/clockwise",
  },
  openGraph: {
    title: `Best Clockwise Alternatives (${year}) — Top 7 AI Calendar Tools`,
    description: `Compare the 7 best Clockwise alternatives for AI-powered calendar optimization and meeting scheduling.`,
    url: "https://aisotools.com/alternatives/clockwise",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Clockwise Alternatives (${year})`,
    description: `Top 7 Clockwise alternatives for AI scheduling and calendar management.`,
  },
};

const alternatives = [
  {
    rank: 1,
    name: "Reclaim AI",
    slug: "reclaim-ai",
    url: "https://reclaim.ai",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free tier. Starter $8/mo, Business $12/mo",
    tagline: "Smart calendar habits and task scheduling",
    description:
      "Reclaim AI is Clockwise's closest competitor, offering AI-powered scheduling that automatically blocks time for tasks, meetings, habits, and focus work. Its task integration with Asana, Linear, and Todoist sets it apart for productivity-focused teams.",
    features: [
      "AI habit scheduling (workouts, lunch, breaks)",
      "Task auto-scheduling from project tools",
      "Smart 1:1 meeting optimization",
      "Buffer time protection",
      "Slack status sync",
      "Asana, Linear, Todoist integrations",
    ],
    whySwitchReasons: [
      "Habit tracking builds recurring focus blocks automatically — Clockwise doesn't do this",
      "Deeper task tool integrations (Asana, Linear, Jira, Todoist) vs Clockwise's calendar-only approach",
      "More affordable — free tier plus plans starting at $8/mo vs Clockwise's $6.75/user/mo",
    ],
    bestFor: "Individuals and small teams who want AI to schedule both tasks and meetings around their personal habits.",
    compareUrl: "/compare/clockwise-vs-reclaim-ai",
  },
  {
    rank: 2,
    name: "Motion",
    slug: "motion",
    url: "https://usemotion.com",
    pricing: "Paid",
    pricingColor: "bg-orange-500/10 text-orange-400",
    freeTier: false,
    startingPrice: "Individual $34/mo, Team $20/user/mo",
    tagline: "AI task manager that builds your daily schedule",
    description:
      "Motion is a fully autonomous AI scheduler that takes your task list and builds an optimal daily schedule — automatically rescheduling when things run over or new priorities emerge. It's a more opinionated (and powerful) approach than Clockwise.",
    features: [
      "Fully automated daily schedule generation",
      "Task priority and deadline management",
      "Meeting scheduling assistant",
      "Auto-rescheduling when plans change",
      "Project management built-in",
      "Team coordination and workload balancing",
    ],
    whySwitchReasons: [
      "Fully autonomous scheduling — tells you what to do next, not just what to protect",
      "Built-in project manager eliminates the need for a separate task tool",
      "Auto-rescheduling adapts your day in real-time when priorities change",
    ],
    bestFor: "Busy professionals who want an AI that actively manages their daily schedule, not just optimizes their calendar.",
    compareUrl: "/compare/clockwise-vs-motion",
  },
  {
    rank: 3,
    name: "Calendly",
    slug: "calendly",
    url: "https://calendly.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free. Standard $10/user/mo, Teams $16/user/mo",
    tagline: "Meeting scheduling pages and booking links",
    description:
      "Calendly is the world's most popular meeting scheduling tool — a fundamentally different approach than Clockwise. Instead of optimizing your internal calendar, Calendly makes it easy for external people to book time with you via shareable links.",
    features: [
      "Booking links for external scheduling",
      "Calendar availability sync",
      "Meeting type management",
      "Team round-robin scheduling",
      "Zoom/Google Meet auto-create",
      "Routing forms for lead qualification",
    ],
    whySwitchReasons: [
      "Best tool for external scheduling — Clockwise focuses on internal calendar optimization",
      "Free tier supports unlimited 1:1 meetings — no Clockwise equivalent",
      "Routing forms qualify inbound leads before booking — unique Calendly capability",
    ],
    bestFor: "Anyone who regularly schedules meetings with external contacts — sales, recruiting, consulting, client work.",
    compareUrl: "/compare/calendly-vs-clockwise",
  },
  {
    rank: 4,
    name: "Cal.com",
    slug: "cal-ai",
    url: "https://cal.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (self-hosted or cloud). Teams $12/seat/mo",
    tagline: "Open-source Calendly alternative with AI",
    description:
      "Cal.com is the open-source scheduling alternative to Calendly (and by extension Clockwise) that offers self-hosting, full data control, and a growing AI scheduling assistant. For privacy-conscious teams or those with custom deployment needs.",
    features: [
      "Open-source and self-hostable",
      "AI scheduling assistant (Cal.ai)",
      "Unlimited event types on free tier",
      "Round-robin and collective events",
      "Workflows and automated reminders",
      "API for custom integrations",
    ],
    whySwitchReasons: [
      "Open-source and self-hostable — full data control that neither Clockwise nor Calendly offer",
      "Free cloud tier has no usage limits unlike Clockwise",
      "Cal.ai handles natural language scheduling via email or chat",
    ],
    bestFor: "Privacy-first teams, developers wanting self-hosted scheduling, and budget-conscious organizations.",
    compareUrl: "/compare/cal-ai-vs-clockwise",
  },
  {
    rank: 5,
    name: "SavvyCal",
    slug: "savvycal",
    url: "https://savvycal.com",
    pricing: "Paid",
    pricingColor: "bg-orange-500/10 text-orange-400",
    freeTier: false,
    startingPrice: "Basic $12/mo, Full $20/mo",
    tagline: "Scheduling that respects both sides' time",
    description:
      "SavvyCal is designed around the philosophy that scheduling should work for both the organizer AND the invitee. Its overlay scheduling lets invitees view their own calendar while booking, dramatically reducing no-shows and awkward time zone mistakes.",
    features: [
      "Overlay scheduling for invitees",
      "Personal links with full calendar overlay",
      "Time zone auto-detection",
      "Ranked availability slots",
      "Team scheduling links",
      "Notion and Zapier integrations",
    ],
    whySwitchReasons: [
      "Overlay calendar for invitees dramatically reduces scheduling errors — unique feature vs Clockwise",
      "Respectful UX that doesn't make invitees puzzle over time zones",
      "Popular among indie makers and consultants for its human-first design",
    ],
    bestFor: "Consultants, coaches, and freelancers who want scheduling links that are genuinely pleasant for their clients.",
    compareUrl: "/compare/clockwise-vs-savvycal",
  },
  {
    rank: 6,
    name: "Otter.ai",
    slug: "otter-ai",
    url: "https://otter.ai",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free tier. Pro $16.99/mo, Business $30/user/mo",
    tagline: "AI meeting notes and conversation intelligence",
    description:
      "Otter.ai takes a different approach to calendar AI — instead of optimizing scheduling, it captures and summarizes what happens in meetings. AI-generated meeting notes, action items, and conversation summaries make your meetings more productive.",
    features: [
      "Real-time AI transcription",
      "AI meeting summaries and action items",
      "Google Meet, Zoom, Teams integration",
      "Searchable meeting archive",
      "Speaker identification",
      "AI chatbot over your meeting notes",
    ],
    whySwitchReasons: [
      "Focuses on meeting productivity (what happens in meetings) vs Clockwise (when meetings happen)",
      "AI-generated action items save manual follow-up work post-meeting",
      "Generous free tier — 300 monthly AI minutes before upgrading",
    ],
    bestFor: "Teams who want to reduce meeting overhead and automatically capture decisions and action items.",
    compareUrl: "/compare/clockwise-vs-otter-ai",
  },
  {
    rank: 7,
    name: "Fantastical",
    slug: "fantastical",
    url: "https://flexibits.com/fantastical",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free basic. Premium $4.75/mo",
    tagline: "Natural language calendar for Apple users",
    description:
      "Fantastical is the premium calendar app for macOS and iOS, offering natural language event creation, intelligent scheduling suggestions, and a beautiful interface. Not AI-optimization like Clockwise, but a dramatically better calendar experience.",
    features: [
      "Natural language event creation",
      "Beautiful native macOS/iOS design",
      "Meeting proposal links",
      "Task management integration",
      "Weather and travel time integration",
      "Zoom and Microsoft Teams integration",
    ],
    whySwitchReasons: [
      "Natural language parsing — \"Lunch with Sarah next Tuesday at noon at Tartine\" creates the event instantly",
      "Apple-native design is vastly better than Google Calendar's web interface",
      "Affordable premium tier at $4.75/mo — no per-seat team pricing",
    ],
    bestFor: "Apple ecosystem users who want a premium calendar experience with smart input, not AI optimization.",
    compareUrl: "/compare/clockwise-vs-fantastical",
  },
];

const faqs = [
  {
    question: "What is the best free alternative to Clockwise?",
    answer:
      "Reclaim AI offers the most comparable free tier to Clockwise — it automatically schedules tasks, habits, and focus time like Clockwise does, but includes habit tracking. Cal.com and Calendly also offer generous free tiers, though they focus on external scheduling (booking links) rather than calendar optimization.",
  },
  {
    question: "What's the difference between Clockwise and Reclaim AI?",
    answer:
      "Both Clockwise and Reclaim AI optimize your calendar for focus time and efficient scheduling. The key difference: Reclaim AI integrates with task tools (Asana, Linear, Todoist) and adds habit scheduling (regular blocks for workouts, lunch, deep work). Clockwise is more focused on team-level scheduling optimization and meeting conflict resolution. Both integrate with Google Calendar.",
  },
  {
    question: "Is Motion better than Clockwise?",
    answer:
      "Motion takes a more aggressive approach than Clockwise. Clockwise optimizes and suggests; Motion takes over and autonomously manages your schedule. Motion is better if you want AI to dictate your day; Clockwise is better if you want to stay in control while getting smart suggestions. Motion also includes project management; Clockwise is calendar-only.",
  },
  {
    question: "Does Clockwise work with Outlook or just Google Calendar?",
    answer:
      "Clockwise primarily supports Google Calendar and Microsoft 365/Outlook. If your team uses Google Workspace exclusively, Clockwise has deeper integration. For Outlook-heavy organizations, Reclaim AI or Motion may offer better integration. Cal.com is the most flexible option with broad calendar compatibility.",
  },
  {
    question: "Is there a cheaper alternative to Clockwise for individuals?",
    answer:
      "Yes — Reclaim AI's free tier offers similar smart scheduling capabilities for individuals. If you just need external meeting scheduling (not internal calendar optimization), Calendly's free tier and Cal.com's free cloud tier are both excellent and genuinely $0.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Best Clockwise Alternatives (${year})`,
    description: `Top 7 alternatives to Clockwise for AI calendar optimization and meeting scheduling.`,
    numberOfItems: alternatives.length,
    itemListElement: alternatives.map((alt, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: alt.name,
      url: `https://aisotools.com/tool/${alt.slug}`,
      description: alt.tagline,
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://aisotools.com" },
      { "@type": "ListItem", position: 2, name: "Alternatives", item: "https://aisotools.com/alternatives" },
      { "@type": "ListItem", position: 3, name: "Clockwise Alternatives", item: "https://aisotools.com/alternatives/clockwise" },
    ],
  },
];

export default function ClockwiseAlternativesPage() {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/alternatives" className="hover:text-white transition">Alternatives</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-300">Clockwise Alternatives</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-xl bg-blue-600/20 flex items-center justify-center text-2xl font-bold text-blue-400 mx-auto mb-6">
            C
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Best Clockwise Alternatives in {year}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Compare the {alternatives.length} best alternatives to Clockwise for AI-powered calendar optimization, meeting scheduling, and focus time management.
          </p>
          <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">
            <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
              Clockwise: Freemium
            </span>
            <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
              📅 AI Scheduling
            </span>
          </div>
        </div>

        {/* Why Switch */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Why Switch from Clockwise?</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Clockwise is excellent at protecting focus time and optimizing team meeting schedules. But teams often look for alternatives due to pricing, missing features, or different approaches to scheduling. Here are the most common reasons:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { reason: "🔧 Missing task integration", detail: "Clockwise optimizes calendar blocks but doesn't integrate with task managers. Reclaim AI and Motion bring your task list directly into scheduling." },
              { reason: "👥 External scheduling needs", detail: "Clockwise optimizes internal team calendars. For booking external meetings with clients or recruits, Calendly or Cal.com are better purpose-built solutions." },
              { reason: "💰 Team pricing", detail: "Clockwise Teams at $6.75/user/mo adds up for larger organizations. Reclaim AI's business plan at $12/mo covers individuals; Motion's team plan is $20/user/mo but includes project management." },
              { reason: "🤖 More autonomous AI", detail: "Clockwise makes smart suggestions. If you want AI to fully own your daily schedule without requiring input, Motion is more autonomous." },
            ].map((item, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="font-semibold text-lg mb-2">{item.reason}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Comparison Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Quick Comparison: Clockwise vs Alternatives</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-800/50 text-left">
                  <th className="p-4 font-medium text-gray-400">#</th>
                  <th className="p-4 font-medium text-gray-400">Tool</th>
                  <th className="p-4 font-medium text-gray-400">Pricing</th>
                  <th className="p-4 font-medium text-gray-400">Free Tier?</th>
                  <th className="p-4 font-medium text-gray-400">Key Differentiator</th>
                </tr>
              </thead>
              <tbody>
                {alternatives.map((alt) => (
                  <tr key={alt.slug} className="border-t border-gray-800 hover:bg-gray-800/30 transition">
                    <td className="p-4 text-gray-500">{alt.rank}</td>
                    <td className="p-4">
                      <Link href={`#${alt.slug}`} className="font-medium text-white hover:text-blue-400 transition">
                        {alt.name}
                      </Link>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${alt.pricingColor}`}>
                        {alt.pricing}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={alt.freeTier ? "text-green-400" : "text-gray-500"}>
                        {alt.freeTier ? "✓ Yes" : "✗ No"}
                      </span>
                    </td>
                    <td className="p-4 text-gray-400 max-w-xs">{alt.tagline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed Cards */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Detailed Look at Each Clockwise Alternative</h2>
          <div className="space-y-8">
            {alternatives.map((alt) => (
              <div key={alt.slug} id={alt.slug} className="bg-gray-900 border border-gray-800 rounded-xl p-6 sm:p-8 scroll-mt-20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center text-xl font-bold text-blue-400 flex-shrink-0">
                    {alt.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-xl font-bold">{alt.rank}. {alt.name}</h3>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${alt.pricingColor}`}>
                        {alt.pricing}
                      </span>
                      {alt.freeTier && (
                        <span className="bg-green-500/10 text-green-400 px-2 py-0.5 rounded-full text-xs font-medium">
                          Free tier
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 mt-1">{alt.description}</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600/5 to-purple-600/5 border border-blue-500/10 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-blue-400 mb-2">Why choose {alt.name} over Clockwise?</h4>
                  <ul className="space-y-1">
                    {alt.whySwitchReasons.map((reason, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-blue-400 mt-0.5 flex-shrink-0">→</span>
                        {reason}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-300 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {alt.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-5">
                    <div>
                      <h4 className="font-semibold text-gray-300 mb-2">Pricing</h4>
                      <p className="text-gray-300 text-sm">{alt.startingPrice}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-300 mb-2">Best For</h4>
                      <p className="text-gray-400 text-sm">{alt.bestFor}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-800">
                  <a
                    href={alt.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                  >
                    Try {alt.name} →
                  </a>
                  <Link href={`/tool/${alt.slug}`} className="text-blue-400 hover:text-blue-300 text-sm font-medium transition">
                    📋 Full Review →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cross-links */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Learn More</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/tool/clockwise" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">📋 Clockwise Review</h3>
              <p className="text-gray-400 text-sm">Full review with features, pros & cons</p>
            </Link>
            <Link href="/tool/reclaim-ai" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">⏰ Reclaim AI</h3>
              <p className="text-gray-400 text-sm">AI calendar habits and task scheduling</p>
            </Link>
            <Link href="/tool/motion" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">🚀 Motion</h3>
              <p className="text-gray-400 text-sm">Autonomous AI daily schedule builder</p>
            </Link>
            <Link href="/compare/calendly-vs-clockwise" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">⚖️ Clockwise vs Calendly</h3>
              <p className="text-gray-400 text-sm">Head-to-head comparison</p>
            </Link>
            <Link href="/category/productivity" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">⚡ AI Productivity Tools</h3>
              <p className="text-gray-400 text-sm">Browse all productivity and scheduling tools</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
