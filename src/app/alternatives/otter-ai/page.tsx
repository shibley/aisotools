import Link from "next/link";
import type { Metadata } from "next";

const year = 2026;

export const metadata: Metadata = {
  title: `Best Otter.ai Alternatives (${year}) — Top 10 AI Meeting Notetakers | AISO Tools`,
  description: `Looking for Otter.ai alternatives? Compare the 10 best AI meeting notetakers and transcription tools with features, pricing, and pros & cons in ${year}.`,
  alternates: {
    canonical: "https://aisotools.com/alternatives/otter-ai",
  },
  openGraph: {
    title: `Best Otter.ai Alternatives (${year}) — Top 10 AI Meeting Notetakers`,
    description: `Compare the 10 best Otter.ai alternatives for AI meeting transcription, smart summaries, and automated notes.`,
    url: "https://aisotools.com/alternatives/otter-ai",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Otter.ai Alternatives (${year})`,
    description: `Top 10 Otter.ai alternatives for AI meeting transcription and automated notetaking.`,
  },
};

const alternatives = [
  {
    rank: 1,
    name: "Fireflies.ai",
    slug: "fireflies-ai",
    url: "https://fireflies.ai",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (limited). Pro $18/mo",
    tagline: "AI meeting assistant with CRM sync and action items",
    description:
      "Fireflies.ai is the most direct upgrade from Otter.ai for teams. Where Otter focuses on transcription accuracy, Fireflies bets on workflow automation — automatically syncing meeting notes to Salesforce, HubSpot, and Slack, extracting action items, and building a searchable meeting intelligence database. For sales and operations teams, it transforms meeting data into business intelligence.",
    features: [
      "Automatic CRM sync (Salesforce, HubSpot, Pipedrive)",
      "AI-generated action items and task extraction",
      "Full-text searchable meeting archive",
      "Topic trackers and custom vocabulary",
      "Slack, Asana, and Notion integrations",
      "Meeting analytics dashboard",
    ],
    whySwitchReasons: [
      "Otter.ai lacks deep CRM integrations — Fireflies connects directly to your sales stack",
      "Better action item extraction turns transcripts into actual tasks",
      "Topic trackers let you monitor specific themes across all your meetings",
    ],
    bestFor: "Sales teams, customer success, and ops who need meeting data to flow into their existing tools.",
    compareUrl: "/compare/otter-ai-vs-fireflies",
  },
  {
    rank: 2,
    name: "Fathom",
    slug: "fathom",
    url: "https://fathom.video",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (unlimited). Team $19/mo per user",
    tagline: "Free unlimited AI meeting notes for Zoom and Google Meet",
    description:
      "Fathom is the most compelling free alternative to Otter.ai — it offers unlimited meeting recordings and AI summaries at no cost for individual users. Built specifically around the Zoom and Google Meet experience, Fathom lets you highlight moments live during the call and generates instant, clean summaries the second the meeting ends. The free tier is genuinely useful, not a trial.",
    features: [
      "Unlimited free recordings and AI summaries",
      "Live call highlighting ('clip this moment')",
      "Instant post-meeting summary generation",
      "Zoom and Google Meet native integration",
      "One-click share to Slack or email",
      "Ask-Fathom AI chat about past meetings",
    ],
    whySwitchReasons: [
      "Otter.ai's free tier is capped at 300 minutes/month — Fathom is unlimited",
      "Summaries are ready the instant the call ends, not minutes later",
      "Live highlighting is a workflow differentiator for fast-moving discussions",
    ],
    bestFor: "Individual contributors, freelancers, and anyone who wants professional AI meeting notes without a paid plan.",
    compareUrl: "/compare/otter-ai-vs-fathom",
  },
  {
    rank: 3,
    name: "tl;dv",
    slug: "tldv",
    url: "https://tldv.io",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (limited). Pro $29/mo",
    tagline: "AI meeting recorder with timestamped clips and coaching",
    description:
      "tl;dv ('Too Long; Didn't View') is purpose-built for teams that want to share knowledge from meetings without forcing everyone to rewatch a full recording. Its clip-and-share workflow lets you cut the 2 most important minutes from a 60-minute call and send them directly to stakeholders. The AI coaching layer makes it standout for managers who want to improve sales conversations.",
    features: [
      "Timestamped clip creation and sharing",
      "Multi-meeting AI summaries across recordings",
      "Sales call coaching and objection tracking",
      "CRM auto-fill from meeting content",
      "Speaker identification and diarization",
      "Chrome extension for Zoom, Google Meet, Teams",
    ],
    whySwitchReasons: [
      "Otter.ai is transcript-centric — tl;dv is video-first with rich clip sharing",
      "Multi-meeting summaries surface patterns across dozens of calls at once",
      "The coaching features make it the better tool for revenue teams",
    ],
    bestFor: "Sales managers, account executives, and product teams doing lots of user interviews.",
    compareUrl: "/compare/otter-ai-vs-tldv",
  },
  {
    rank: 4,
    name: "Tactiq",
    slug: "tactiq",
    url: "https://tactiq.io",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (5 transcripts/mo). Pro $12/mo",
    tagline: "Lightweight Chrome extension for real-time live captions",
    description:
      "Tactiq takes a different architectural approach than Otter.ai — it's a Chrome extension that reads the live captions already generated by Google Meet, Zoom, or Teams, rather than processing audio independently. This makes it faster, lighter, and less intrusive for participants. The AI prompt library lets you ask custom questions about the transcript immediately after the call.",
    features: [
      "Zero audio processing — reads native meeting captions",
      "Custom AI prompt library (15+ templates)",
      "Real-time transcript displayed alongside the meeting",
      "Google Docs, Notion, and Slack export",
      "Keyword highlighting during live meetings",
      "No meeting bot required — invisible to participants",
    ],
    whySwitchReasons: [
      "No recording bot joining the call — less invasive for external client meetings",
      "Works without audio permissions since it reads existing captions",
      "Custom AI prompts let you get exactly the output format you need",
    ],
    bestFor: "Privacy-conscious users, consultants with external clients, and anyone who finds meeting bots awkward.",
    compareUrl: "/compare/otter-ai-vs-tactiq",
  },
  {
    rank: 5,
    name: "Grain",
    slug: "grain",
    url: "https://grain.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free. Starter $19/mo",
    tagline: "AI meeting notes with video highlights for user research",
    description:
      "Grain is the tool of choice for UX researchers and product teams who need to share evidence from user interviews. Where Otter.ai outputs text, Grain lets you tag moments, create video highlight reels, and build shareable insight libraries from user research calls. The AI generates call summaries, but the real value is organizing video evidence into a searchable research repository.",
    features: [
      "Video highlight reel creation from key moments",
      "User research insight libraries",
      "AI call summaries and transcripts",
      "Note templates for structured user interviews",
      "Team workspace for sharing research clips",
      "Zoom and Google Meet integration",
    ],
    whySwitchReasons: [
      "Otter.ai is pure text — Grain preserves the emotional tone and body language in video",
      "Research libraries let product teams accumulate institutional knowledge",
      "Highlight reels make it possible to share evidence, not just summaries, with leadership",
    ],
    bestFor: "UX researchers, product managers, and design teams who run regular user interviews.",
    compareUrl: "/compare/otter-ai-vs-grain",
  },
  {
    rank: 6,
    name: "MeetGeek",
    slug: "meetgeek",
    url: "https://meetgeek.ai",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (5 hrs/mo). Basic $19/mo",
    tagline: "AI meeting analytics with performance scoring",
    description:
      "MeetGeek goes beyond transcription to provide meeting performance analytics — tracking talk-time ratios, engagement scores, and trend analysis across your team's meetings. It automatically joins meetings from your calendar, generates structured templates (sales call, 1-on-1, sprint review), and scores meeting effectiveness over time.",
    features: [
      "Meeting performance scoring and analytics",
      "Talk-time analysis and engagement tracking",
      "Automated calendar integration and bot joining",
      "Structured templates for common meeting types",
      "Trend reports across multiple meetings",
      "2,000+ app integrations via Zapier",
    ],
    whySwitchReasons: [
      "Otter.ai provides transcripts — MeetGeek tells you if your meetings are actually effective",
      "Performance analytics help managers coach teams based on real data",
      "Meeting templates enforce structure and consistency across recurring calls",
    ],
    bestFor: "Team leads, managers, and operations professionals focused on meeting ROI and team productivity.",
    compareUrl: "/compare/otter-ai-vs-meetgeek",
  },
  {
    rank: 7,
    name: "Notta",
    slug: "notta",
    url: "https://notta.ai",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (120 min/mo). Pro $14.99/mo",
    tagline: "Multilingual AI transcription in 58+ languages",
    description:
      "Notta is the strongest Otter.ai alternative for international teams and non-English speakers. It transcribes audio in 58+ languages and offers real-time translation between them — so a Spanish speaker and an English speaker can see the same meeting in their preferred language simultaneously. The audio file import is also superior, supporting most audio and video formats.",
    features: [
      "58+ language transcription with real-time translation",
      "Cross-language simultaneous translation",
      "Broad audio/video import (MP3, MP4, WAV, etc.)",
      "Meeting recording via built-in bot",
      "AI summary in multiple languages",
      "Export to Word, PDF, SRT subtitle format",
    ],
    whySwitchReasons: [
      "Otter.ai is effectively English-only — Notta handles 58+ languages natively",
      "Real-time translation enables multinational teams to collaborate without language barriers",
      "Better file import handles recordings from any source, not just live meetings",
    ],
    bestFor: "Global teams, multilingual companies, and researchers working with non-English audio content.",
    compareUrl: "/compare/otter-ai-vs-notta",
  },
  {
    rank: 8,
    name: "Read.ai",
    slug: "read-ai",
    url: "https://read.ai",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free. Pro $19.75/mo",
    tagline: "Meeting analytics with sentiment and engagement scoring",
    description:
      "Read.ai positions itself as the 'meeting intelligence platform' — it doesn't just transcribe, it analyzes participant engagement, sentiment, talk-time, and pace in real-time. It creates a meeting score and report for every call, which makes it particularly powerful for coaching salespeople or running more inclusive team meetings.",
    features: [
      "Real-time engagement and sentiment analysis",
      "Per-participant talk-time and pace metrics",
      "Meeting score with improvement suggestions",
      "AI-generated meeting report with highlights",
      "Async follow-up with meeting replay",
      "Integration with Zoom, Teams, Google Meet",
    ],
    whySwitchReasons: [
      "Otter.ai captures what was said — Read.ai captures how people were engaging",
      "Sentiment analysis surfaces who's confused or frustrated before the meeting ends",
      "Meeting scoring gives quantitative feedback to improve how your team runs calls",
    ],
    bestFor: "Sales coaches, HR professionals, and team leads who run high-stakes calls where engagement matters.",
    compareUrl: "/compare/otter-ai-vs-read-ai",
  },
  {
    rank: 9,
    name: "Krisp",
    slug: "krisp",
    url: "https://krisp.ai",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (60 min/day noise cancel). Pro $16/mo",
    tagline: "AI noise cancellation + meeting notes in one",
    description:
      "Krisp started as the best AI noise-cancellation tool and evolved into a meeting notes platform. If you work from a noisy environment — a co-working space, a home with kids, an open office — Krisp's real-time noise removal for both your mic and your speakers is unmatched. The meeting notes layer is a natural extension that's now genuinely competitive.",
    features: [
      "Industry-leading bidirectional AI noise cancellation",
      "Meeting transcription and AI summaries",
      "Background voice removal",
      "Works as a virtual microphone on any platform",
      "Meeting notes shared to Slack and Notion",
      "Accent localization feature",
    ],
    whySwitchReasons: [
      "Otter.ai does nothing to improve audio quality — Krisp removes noise before transcription starts",
      "Cleaner audio means significantly better transcription accuracy",
      "Two tools (noise cancel + notes) replaced by one subscription",
    ],
    bestFor: "Remote workers in noisy environments who want both call quality and accurate meeting notes.",
    compareUrl: "/compare/otter-ai-vs-krisp",
  },
  {
    rank: 10,
    name: "Laxis",
    slug: "laxis",
    url: "https://laxis.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (300 min/mo). Basic $16.99/mo",
    tagline: "AI meeting notes built for revenue teams and CRM sync",
    description:
      "Laxis is purpose-built for sales and business development teams, with a specific focus on turning meeting conversations into CRM-ready data. It extracts next steps, buyer objections, pain points, and deal-relevant context, then pushes them directly into your CRM. For anyone doing discovery calls or demos, it's a significant step up from Otter.ai's generic transcription approach.",
    features: [
      "Automated CRM data extraction and sync",
      "Pain point and objection categorization",
      "Custom question templates for sales calls",
      "Meeting intelligence dashboard",
      "Multi-speaker diarization",
      "Salesforce, HubSpot, Pipedrive integration",
    ],
    whySwitchReasons: [
      "Otter.ai requires manual note-taking from transcripts into CRM — Laxis automates this",
      "Pre-built sales call templates capture structured data consistently across reps",
      "Objection tracking builds a searchable database of common buyer concerns",
    ],
    bestFor: "SDRs, AEs, and revenue operations teams running structured sales discovery calls.",
    compareUrl: "/compare/otter-ai-vs-laxis",
  },
];

const faqs = [
  {
    question: "What is the best free alternative to Otter.ai?",
    answer:
      "Fathom is the strongest free Otter.ai alternative — it offers unlimited meeting recordings and AI summaries at no cost for individuals. While Otter.ai's free tier caps at 300 minutes per month, Fathom has no recording limit. Fireflies.ai and Tactiq also have useful free tiers for lighter use.",
  },
  {
    question: "Is Fireflies.ai better than Otter.ai?",
    answer:
      "For teams, yes. Fireflies.ai has deeper workflow integrations (CRM sync, task extraction, Slack/Notion/Asana) and a more powerful meeting intelligence layer. Otter.ai's advantage is its real-time transcription accuracy and its collaborative transcription features — it's better for in-person meetings and general transcription use cases beyond just video calls.",
  },
  {
    question: "Which AI meeting notetaker works best without a bot joining the call?",
    answer:
      "Tactiq is the best choice if you don't want a bot in your meetings. It works as a Chrome extension that reads the live captions already generated by Google Meet, Zoom, or Teams — no audio recording, no bot participant, invisible to everyone on the call. This makes it ideal for external client meetings where a recording bot would seem intrusive.",
  },
  {
    question: "Can any Otter.ai alternative transcribe in multiple languages?",
    answer:
      "Notta is the clear winner for multilingual transcription — it supports 58+ languages with real-time cross-language translation. This means a Spanish speaker and an English speaker can see the same meeting transcribed in their preferred language simultaneously. Otter.ai is effectively limited to English.",
  },
  {
    question: "Which tool is best for sales teams?",
    answer:
      "Fireflies.ai, tl;dv, and Laxis are all purpose-built for revenue teams. Fireflies wins on CRM integration breadth (Salesforce, HubSpot, Pipedrive). tl;dv wins on coaching features and video clip sharing. Laxis wins on structured CRM data extraction from discovery calls. The right choice depends on whether your priority is integration depth, coaching, or structured data capture.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Best Otter.ai Alternatives (${year})`,
    description: `Top 10 alternatives to Otter.ai for AI meeting transcription, notetaking, and meeting intelligence.`,
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
      { "@type": "ListItem", position: 3, name: "Otter.ai Alternatives", item: "https://aisotools.com/alternatives/otter-ai" },
    ],
  },
];

export default function OtterAiAlternativesPage() {
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
          <span className="text-gray-300">Otter.ai Alternatives</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-xl bg-blue-600/20 flex items-center justify-center text-2xl font-bold text-blue-400 mx-auto mb-6">
            O
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Best Otter.ai Alternatives in {year}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Compare the {alternatives.length} best alternatives to Otter.ai for AI meeting transcription, automated notetaking, and meeting intelligence.
          </p>
          <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">
            <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
              Otter.ai: Freemium
            </span>
            <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
              🎙️ AI Meeting Notes
            </span>
          </div>
        </div>

        {/* Why Switch */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Why Look for Otter.ai Alternatives?</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Otter.ai pioneered AI meeting transcription and still has excellent real-time accuracy. However, its free tier caps out quickly, CRM integrations are limited on lower plans, and it's primarily English-focused. Depending on whether you need workflow automation, unlimited free recording, multilingual support, or meeting analytics, one of these alternatives will serve you better.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { reason: "🆓 Free Tier Limits", detail: "Otter.ai's free plan caps at 300 minutes/month. Fathom offers unlimited free recordings with no monthly cap at all." },
              { reason: "🔗 CRM Integrations", detail: "Otter.ai's CRM sync requires higher-tier plans. Fireflies.ai and Laxis push meeting data directly to Salesforce and HubSpot on more accessible plans." },
              { reason: "🌍 Language Support", detail: "Otter.ai is effectively English-only. Notta handles 58+ languages with real-time cross-language translation for global teams." },
              { reason: "📊 Meeting Analytics", detail: "Otter.ai is transcription-first with no engagement analytics. MeetGeek and Read.ai score every meeting and track team performance over time." },
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
          <h2 className="text-2xl font-bold mb-6">Quick Comparison: Otter.ai vs Alternatives</h2>
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
          <h2 className="text-2xl font-bold mb-6">Detailed Look at Each Otter.ai Alternative</h2>
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
                    <p className="text-gray-500 text-sm mt-1">{alt.tagline}</p>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed mb-6">{alt.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-300 mb-3 uppercase tracking-wide">Key Features</h4>
                    <ul className="space-y-2">
                      {alt.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-blue-400 mt-0.5 flex-shrink-0">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-300 mb-3 uppercase tracking-wide">Why Switch from Otter.ai?</h4>
                    <ul className="space-y-2">
                      {alt.whySwitchReasons.map((r, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-orange-400 mt-0.5 flex-shrink-0">→</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 flex-wrap pt-4 border-t border-gray-800">
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wide">Best For</span>
                    <p className="text-sm text-gray-300 mt-0.5">{alt.bestFor}</p>
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <div className="text-right">
                      <span className="text-xs text-gray-500">Starting price</span>
                      <p className="text-sm font-medium text-white">{alt.startingPrice}</p>
                    </div>
                    <a
                      href={alt.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition flex-shrink-0"
                    >
                      Try {alt.name} →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommendation Matrix */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Which Otter.ai Alternative Should You Choose?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">For Maximum Free Value</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  <span><strong className="text-gray-300">Fathom:</strong> Unlimited free recordings — the only notetaker that is genuinely free for individuals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  <span><strong className="text-gray-300">Tactiq:</strong> Free Chrome extension with no bot, no audio processing required</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">For Sales & Revenue Teams</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  <span><strong className="text-gray-300">Fireflies.ai:</strong> Best CRM integration breadth and action item extraction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  <span><strong className="text-gray-300">Laxis:</strong> Best structured data capture for discovery calls and demos</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">For Global & Multilingual Teams</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  <span><strong className="text-gray-300">Notta:</strong> 58+ languages with real-time cross-language translation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  <span><strong className="text-gray-300">tl;dv:</strong> Strong multilingual support with video-first workflow</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">For Research & Product Teams</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  <span><strong className="text-gray-300">Grain:</strong> Video highlight reels and research insight libraries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  <span><strong className="text-gray-300">Read.ai:</strong> Engagement analytics and sentiment analysis for better interviews</span>
                </li>
              </ul>
            </div>
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
            <Link href="/tool/fireflies-ai" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">🔥 Fireflies.ai</h3>
              <p className="text-gray-400 text-sm">AI meeting notes with CRM sync and action items</p>
            </Link>
            <Link href="/tool/fathom" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">✨ Fathom</h3>
              <p className="text-gray-400 text-sm">Free unlimited AI meeting notes for Zoom and Meet</p>
            </Link>
            <Link href="/tool/tldv" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">🎬 tl;dv</h3>
              <p className="text-gray-400 text-sm">Video clips and AI coaching for sales teams</p>
            </Link>
            <Link href="/compare/otter-ai-vs-fireflies" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">⚖️ Otter.ai vs Fireflies</h3>
              <p className="text-gray-400 text-sm">Head-to-head comparison</p>
            </Link>
            <Link href="/category/meeting-tools" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">🎙️ AI Meeting Tools</h3>
              <p className="text-gray-400 text-sm">Browse all AI notetakers and transcription tools</p>
            </Link>
            <Link href="/ai-productivity-tools" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">⚡ AI Productivity Tools</h3>
              <p className="text-gray-400 text-sm">Best AI tools to boost your workflow</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
