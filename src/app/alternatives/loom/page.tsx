import Link from "next/link";
import type { Metadata } from "next";

const year = 2026;

export const metadata: Metadata = {
  title: `Best Loom Alternatives (${year}) — Top 10 AI Video Messaging Tools | AISO Tools`,
  description: `Looking for Loom alternatives? Compare the 10 best async video messaging and screen recording tools with AI features, pricing, and pros & cons in ${year}.`,
  alternates: {
    canonical: "https://aisotools.com/alternatives/loom",
  },
  openGraph: {
    title: `Best Loom Alternatives (${year}) — Top 10 AI Video Messaging Tools`,
    description: `Compare the 10 best Loom alternatives for async video messaging, screen recording, and AI-powered video communication.`,
    url: "https://aisotools.com/alternatives/loom",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Loom Alternatives (${year})`,
    description: `Top 10 Loom alternatives for async video messaging and AI screen recording.`,
  },
};

const alternatives = [
  {
    rank: 1,
    name: "Vidyard",
    slug: "vidyard",
    url: "https://vidyard.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (25 videos). Pro $29/mo",
    tagline: "AI video messaging built for sales and business teams",
    description:
      "Vidyard is the most direct Loom alternative for sales professionals and B2B teams. While Loom excels at internal async communication, Vidyard is engineered for outbound video — personalized sales prospecting videos, video email, and detailed viewer analytics that show exactly who watched your video and for how long. Its AI script assistant generates personalized video intros from prospect data, and the AI-powered captions work across 12 languages.",
    features: [
      "AI video script generator from prospect data",
      "Per-viewer analytics with watch-time heatmaps",
      "CRM integration (Salesforce, HubSpot, Outreach)",
      "Personalized video landing pages",
      "12-language AI captions",
      "CTAs and forms embedded in video player",
    ],
    whySwitchReasons: [
      "Loom analytics show total views — Vidyard shows exactly who watched, when, and which parts",
      "AI personalization turns one video into hundreds of customized versions for outbound",
      "Native CRM sync automatically logs video opens and views to contact records",
    ],
    bestFor: "Sales reps, SDRs, and account executives who want video to accelerate deals.",
    compareUrl: "/compare/loom-vs-vidyard",
  },
  {
    rank: 2,
    name: "Veed.io",
    slug: "veed-io",
    url: "https://veed.io",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (watermark). Basic $18/mo",
    tagline: "AI video recorder and editor with auto-subtitles and translation",
    description:
      "Veed.io is what you get when you want Loom-style screen recording with professional editing capabilities baked in. After you record, Veed's AI can auto-subtitle your video in 100+ languages, remove background noise, clean up filler words, and apply visual enhancements — all in the browser without any software download. For teams shipping polished internal content or product demos, Veed removes the editing step entirely.",
    features: [
      "AI auto-subtitles in 100+ languages",
      "Filler word removal and AI transcript editing",
      "Background noise removal",
      "Brand kit with fonts, colors, and logos",
      "AI avatar presenter generation",
      "Screen + webcam simultaneous recording",
    ],
    whySwitchReasons: [
      "Loom's editing is basic (trim only) — Veed adds professional editing without leaving the browser",
      "Auto-subtitles in 100+ languages make content globally accessible",
      "AI avatars let you create presentation videos without recording yourself",
    ],
    bestFor: "Marketing teams, content creators, and product teams who want polished async video without a video editor.",
    compareUrl: "/compare/loom-vs-veed",
  },
  {
    rank: 3,
    name: "Tella",
    slug: "tella",
    url: "https://tella.tv",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (limited). Pro $19/mo",
    tagline: "Beautiful async video with teleprompter and custom scenes",
    description:
      "Tella positions itself as the 'Loom for creators' — it prioritizes visual polish over raw recording speed. Its multi-scene recording lets you combine screen shares, slides, and talking-head clips into a single cohesive video without editing. The built-in teleprompter solves the biggest pain point with async video (stumbling over words), and custom backgrounds make every video look studio-quality regardless of your home setup.",
    features: [
      "Multi-scene recording (screen + slides + face cam in one take)",
      "Built-in teleprompter for scripted delivery",
      "Custom video backgrounds and overlays",
      "AI captions and transcript",
      "Branded video pages with custom domains",
      "Viewer engagement analytics",
    ],
    whySwitchReasons: [
      "Loom captures what's on screen — Tella crafts a narrative with multiple scenes in one recording session",
      "Teleprompter eliminates the stumbling and re-recording that slows async video creation",
      "Custom domains and branded pages make external-facing videos look professional",
    ],
    bestFor: "Founders, creators, and consultants who want async video to reflect their brand quality.",
    compareUrl: "/compare/loom-vs-tella",
  },
  {
    rank: 4,
    name: "Scribe",
    slug: "scribe",
    url: "https://scribehow.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (basic). Pro $23/mo per user",
    tagline: "Auto-generate step-by-step documentation from screen recordings",
    description:
      "Scribe takes a fundamentally different approach to screen recording: instead of producing a video, it watches you complete a workflow and automatically generates a written step-by-step guide with annotated screenshots. For process documentation, onboarding guides, and SOPs, Scribe produces the final deliverable in seconds rather than requiring editing. The result is text that can be searched, updated, and embedded anywhere.",
    features: [
      "Auto-generates step-by-step guides from screen actions",
      "Annotated screenshots automatically captured",
      "One-click export to PDF, Notion, Confluence, or HTML",
      "AI-generated titles and descriptions for each step",
      "Sensitive data redaction",
      "Browser extension with zero friction recording",
    ],
    whySwitchReasons: [
      "Loom videos can't be updated without re-recording — Scribe guides are editable text that stay current",
      "Step-by-step guides are faster to consume than watching a video for specific steps",
      "No video hosting costs — documentation lives as text in your existing knowledge base",
    ],
    bestFor: "Operations teams, customer success, and anyone creating process documentation or employee onboarding materials.",
    compareUrl: "/compare/loom-vs-scribe",
  },
  {
    rank: 5,
    name: "Claap",
    slug: "claap",
    url: "https://claap.io",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (10 clips). Starter $10/mo per user",
    tagline: "Collaborative async video with threaded comments and AI summaries",
    description:
      "Claap is built specifically for product and engineering teams who need async video to replace synchronous meetings. Its killer feature is threaded, timestamped video comments — colleagues can leave feedback directly on specific moments in the video, creating a structured async discussion that's tied to the content rather than scattered across Slack. The AI layer summarizes video discussions and extracts action items automatically.",
    features: [
      "Timestamped threaded comments on video",
      "AI meeting summary and action item extraction",
      "Task creation from video comments",
      "Screen + webcam recording with chapter markers",
      "Meeting recording with auto-transcription",
      "Linear and Jira integration for task sync",
    ],
    whySwitchReasons: [
      "Loom comments are flat — Claap's threaded timestamps create structured async conversations",
      "Action items extracted from video discussions reduce meeting follow-up overhead",
      "Linear/Jira integration turns video feedback into trackable engineering tasks",
    ],
    bestFor: "Product managers, engineering teams, and design reviewers who want structured async feedback loops.",
    compareUrl: "/compare/loom-vs-claap",
  },
  {
    rank: 6,
    name: "Riverside.fm",
    slug: "riverside",
    url: "https://riverside.fm",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (2 hrs). Standard $15/mo",
    tagline: "Studio-quality recording with AI transcription and clip generation",
    description:
      "Riverside excels where Loom falls short: recording quality and post-production. While Loom records compressed video, Riverside captures separate local tracks for each participant at up to 4K/48kHz, resulting in studio-quality output even over unreliable internet connections. Its AI then transcribes the recording, lets you edit by deleting text, and automatically clips the best moments for social sharing.",
    features: [
      "4K video recording per participant (local track capture)",
      "AI transcription with text-based video editing",
      "Automatic social clip generation",
      "Guest recording without downloads",
      "AI show notes and chapter generation",
      "Magic Clips for short-form content repurposing",
    ],
    whySwitchReasons: [
      "Loom compresses video — Riverside captures uncompressed local tracks for broadcast quality",
      "Text-based editing (delete words to cut video) is faster than timeline editing",
      "Magic Clips automatically identifies highlight moments for LinkedIn and social",
    ],
    bestFor: "Podcasters, content creators, and marketers who need professional-quality recordings and automated repurposing.",
    compareUrl: "/compare/loom-vs-riverside",
  },
  {
    rank: 7,
    name: "Descript",
    slug: "descript",
    url: "https://descript.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (1 hr transcription). Hobbyist $24/mo",
    tagline: "AI video editor with overdub voice cloning and transcript editing",
    description:
      "Descript turns video editing from a timeline skill into a document editing skill. Once you've recorded (screen capture, webcam, or any uploaded file), Descript transcribes everything and lets you edit the video by editing the text. Its Overdub feature creates a voice clone so you can fix mistakes by typing — the AI speaks the correction in your voice. For teams producing polished async content or tutorials, it eliminates the need for a dedicated video editor.",
    features: [
      "Text-based video editing (delete text = delete video)",
      "Overdub AI voice cloning for mistake correction",
      "Filler word and silence removal with one click",
      "Screen recording with editing built-in",
      "Podcast and video collaboration with team comments",
      "AI-generated captions, chapters, and social clips",
    ],
    whySwitchReasons: [
      "Loom is record-only — Descript lets you edit, polish, and perfect every async video you create",
      "Overdub voice cloning means you never have to re-record for small corrections again",
      "Filler word removal turns rambling recordings into tight, professional content instantly",
    ],
    bestFor: "Content teams, product educators, and anyone producing polished async tutorials, demos, or training materials.",
    compareUrl: "/compare/loom-vs-descript",
  },
  {
    rank: 8,
    name: "ScreenPal",
    slug: "screenpal",
    url: "https://screenpal.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (15 min). Solo $4/mo",
    tagline: "Affordable screen recorder with AI captions and cloud hosting",
    description:
      "ScreenPal (formerly Screencast-O-Matic) is the most affordable Loom alternative for individuals and small teams who need reliable screen recording and cloud hosting without paying for premium features they'll never use. At $4/month, it includes unlimited recording, AI captions, basic trimming, and a hosting library — everything 80% of users actually need from Loom at a fraction of the cost.",
    features: [
      "Unlimited recording time",
      "AI captions and transcript",
      "Basic trimming and annotation",
      "Cloud hosting with custom branding",
      "Password-protected sharing",
      "LMS and Google Classroom integration",
    ],
    whySwitchReasons: [
      "Loom charges $12.50/user/month — ScreenPal is $4/month for the same core functionality",
      "LMS integrations make it ideal for educators vs. Loom's business focus",
      "No per-user pricing for small teams makes cost predictable as teams grow",
    ],
    bestFor: "Educators, solo creators, and budget-conscious individuals who need reliable screen recording and sharing.",
    compareUrl: "/compare/loom-vs-screenpal",
  },
  {
    rank: 9,
    name: "Loom AI (upgraded)",
    slug: "loom",
    url: "https://loom.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (25 videos). Business $12.50/mo per user",
    tagline: "The original — now with AI summaries, auto-chapters, and tasks",
    description:
      "Worth noting: Loom itself has evolved significantly since Atlassian's acquisition. Loom AI now auto-generates summaries, titles, and chapter markers for every recording. It identifies tasks from video discussions and creates Jira tickets automatically. If your main concern is the feature gaps that existed in older Loom, the current version may already address them before you switch.",
    features: [
      "AI video summaries and auto-titles",
      "Automatic chapter generation",
      "AI task detection and Jira integration",
      "Transcript-based search across all videos",
      "Native Atlassian integration (Confluence, Trello)",
      "Team Workspaces with admin controls",
    ],
    whySwitchReasons: [
      "If you're on an older plan, the AI features require upgrading to Loom Business",
      "Per-user pricing gets expensive for large teams vs. alternatives with flat-rate plans",
      "Atlassian acquisition means roadmap is now tied to enterprise Atlassian priorities",
    ],
    bestFor: "Teams already in the Atlassian ecosystem (Jira, Confluence, Trello) who want seamless native integration.",
    compareUrl: "/tool/loom",
  },
  {
    rank: 10,
    name: "mmhmm",
    slug: "mmhmm",
    url: "https://mmhmm.app",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (limited). Personal $9.99/mo",
    tagline: "Virtual stage for presentations with interactive backgrounds",
    description:
      "mmhmm is the most visually differentiated Loom alternative — it treats every video recording as a live presentation with virtual stage effects, dynamic slide overlays, and custom scenes. Instead of a floating camera bubble, you can appear in front of your content, shrink yourself to a corner while your screen takes center stage, or teleport between presenter scenes. Particularly popular for external-facing demos and all-hands recordings.",
    features: [
      "Virtual stage effects and interactive scenes",
      "Slide presentation overlay with presenter in frame",
      "Custom virtual backgrounds and rooms",
      "Live streaming to Zoom, Meet, Teams",
      "AI backgrounds and scene transitions",
      "Speaker notes visible in recording mode",
    ],
    whySwitchReasons: [
      "Loom's presenter bubble is static — mmhmm treats the presenter as part of the content layout",
      "Virtual stage effects create a polished, broadcast-quality feel without a studio",
      "Works as a live webcam layer for Zoom calls AND as an async recording tool in one",
    ],
    bestFor: "Presenters, evangelists, and team leads who want async video to feel like a polished broadcast, not a screen recording.",
    compareUrl: "/compare/loom-vs-mmhmm",
  },
];

const faqs = [
  {
    question: "What is the best free alternative to Loom?",
    answer:
      "Vidyard and Tella both offer strong free tiers. Vidyard's free plan includes 25 video hosting slots with basic analytics — ideal for sales teams. Tella's free plan allows recording with the core multi-scene features. For teams prioritizing editing over analytics, Veed.io is also free with its core features (though adds a watermark). For pure screen recording volume without limits, ScreenPal's free tier allows 15-minute recordings.",
  },
  {
    question: "Is Loom being discontinued after the Atlassian acquisition?",
    answer:
      "No — Atlassian acquired Loom in October 2023 for $975M and continues to operate it as a standalone product. The main change is deeper integration with Atlassian's ecosystem (Jira, Confluence, Trello). Loom AI features (summaries, chapters, task detection) were rolled out post-acquisition. Some users report concern that the roadmap is shifting toward enterprise Atlassian customers, which has driven interest in alternatives.",
  },
  {
    question: "Which Loom alternative is best for sales teams?",
    answer:
      "Vidyard is the clear winner for sales. Its per-viewer analytics show exactly who watched, when, and which parts of your video they replayed — intelligence Loom doesn't provide. The AI personalization layer can generate custom intros from prospect data, and native CRM integrations push watch data directly to Salesforce and HubSpot. For one-to-many video sequences, BombBomb is also worth evaluating.",
  },
  {
    question: "Can I use any of these tools to edit recorded videos?",
    answer:
      "Yes — Descript and Veed.io are the strongest editors among Loom alternatives. Descript's text-based editing is uniquely powerful: you delete words from the transcript and the video is cut accordingly, making editing feel like document editing rather than timeline scrubbing. Veed.io offers a more traditional browser-based editor with auto-subtitle generation. Loom itself only supports basic trimming.",
  },
  {
    question: "Which alternative works best for remote teams?",
    answer:
      "Claap is purpose-built for remote team async communication, with timestamped threaded comments, action item extraction, and Jira/Linear integration. For engineering and product teams, it replaces synchronous review meetings with structured async video discussions. For broader team communications, Loom's upgraded AI features (Atlassian version) compete well if your team already uses Jira and Confluence.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Best Loom Alternatives (${year})`,
    description: `Top 10 alternatives to Loom for async video messaging, screen recording, and AI-powered video communication.`,
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
      { "@type": "ListItem", position: 3, name: "Loom Alternatives", item: "https://aisotools.com/alternatives/loom" },
    ],
  },
];

export default function LoomAlternativesPage() {
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
          <span className="text-gray-300">Loom Alternatives</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-xl bg-purple-600/20 flex items-center justify-center text-2xl font-bold text-purple-400 mx-auto mb-6">
            L
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Best Loom Alternatives in {year}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Compare the {alternatives.length} best alternatives to Loom for async video messaging, screen recording, and AI-powered video communication.
          </p>
          <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">
            <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
              Loom: Freemium ($12.50/user/mo)
            </span>
            <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
              📹 Async Video Messaging
            </span>
          </div>
        </div>

        {/* Why Switch */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Why Look for Loom Alternatives?</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Loom pioneered async video messaging and remains the most recognized tool in the category. However, the Atlassian acquisition has shifted the product roadmap toward enterprise Atlassian customers, per-user pricing adds up quickly for growing teams, and editing capabilities remain limited to basic trimming. Depending on your priority — sales analytics, video editing, documentation, or budget — one of these alternatives will serve you better.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { reason: "💰 Per-User Pricing", detail: "Loom Business costs $12.50/user/month, which compounds fast for larger teams. Tools like ScreenPal ($4/mo flat) or Tella offer the same core functionality at a fraction of the cost." },
              { reason: "✂️ Limited Editing", detail: "Loom only supports basic trim. Descript and Veed.io offer full text-based editing, filler word removal, AI captions, and professional polish — all without leaving the browser." },
              { reason: "📊 Analytics Depth", detail: "Loom shows total view counts. Vidyard shows per-viewer watch data, heatmaps, and rewatch behavior — essential intelligence for sales and outbound video." },
              { reason: "🏢 Atlassian Roadmap Shift", detail: "Post-acquisition, Loom's roadmap prioritizes Jira/Confluence integration. Teams not in the Atlassian ecosystem are seeing less relevant feature investment." },
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
          <h2 className="text-2xl font-bold mb-6">Quick Comparison: Loom vs Alternatives</h2>
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
                      <Link href={`#${alt.slug}`} className="font-medium text-white hover:text-purple-400 transition">
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
          <h2 className="text-2xl font-bold mb-6">Detailed Look at Each Loom Alternative</h2>
          <div className="space-y-8">
            {alternatives.map((alt) => (
              <div key={alt.slug} id={alt.slug} className="bg-gray-900 border border-gray-800 rounded-xl p-6 sm:p-8 scroll-mt-20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center text-xl font-bold text-purple-400 flex-shrink-0">
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
                          <span className="text-purple-400 mt-0.5 flex-shrink-0">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-300 mb-3 uppercase tracking-wide">Why Switch from Loom?</h4>
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
                      className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition flex-shrink-0"
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
          <h2 className="text-2xl font-bold mb-6">Which Loom Alternative Should You Choose?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">For Sales Teams</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">→</span>
                  <span><strong className="text-gray-300">Vidyard:</strong> Per-viewer analytics, CRM sync, AI personalization for outbound</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">→</span>
                  <span><strong className="text-gray-300">Tella:</strong> Polished brand videos for external prospects and demos</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">For Product & Engineering</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">→</span>
                  <span><strong className="text-gray-300">Claap:</strong> Timestamped video comments and Jira/Linear task creation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">→</span>
                  <span><strong className="text-gray-300">Loom (upgraded):</strong> Atlassian ecosystem native for Jira/Confluence teams</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">For Content Creators</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">→</span>
                  <span><strong className="text-gray-300">Descript:</strong> Text-based editing, voice cloning, filler word removal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">→</span>
                  <span><strong className="text-gray-300">Riverside:</strong> 4K local recording + AI clips for repurposing</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">For Budget-Conscious Teams</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">→</span>
                  <span><strong className="text-gray-300">ScreenPal:</strong> $4/mo for unlimited recording — 3x cheaper than Loom</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">→</span>
                  <span><strong className="text-gray-300">Veed.io:</strong> Free tier with professional editing and auto-subtitles</span>
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
          <h2 className="text-2xl font-bold mb-4">Explore More</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/tool/vidyard" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-purple-500/50 transition">
              <h3 className="font-semibold mb-1">🎥 Vidyard</h3>
              <p className="text-gray-400 text-sm">AI video messaging built for sales teams</p>
            </Link>
            <Link href="/tool/descript" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-purple-500/50 transition">
              <h3 className="font-semibold mb-1">✂️ Descript</h3>
              <p className="text-gray-400 text-sm">Text-based video editing with AI voice cloning</p>
            </Link>
            <Link href="/tool/tella" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-purple-500/50 transition">
              <h3 className="font-semibold mb-1">✨ Tella</h3>
              <p className="text-gray-400 text-sm">Beautiful async video with teleprompter and scenes</p>
            </Link>
            <Link href="/alternatives/otter-ai" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-purple-500/50 transition">
              <h3 className="font-semibold mb-1">🎙️ Otter.ai Alternatives</h3>
              <p className="text-gray-400 text-sm">Best AI meeting notetakers compared</p>
            </Link>
            <Link href="/ai-productivity-tools" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-purple-500/50 transition">
              <h3 className="font-semibold mb-1">⚡ AI Productivity Tools</h3>
              <p className="text-gray-400 text-sm">Best AI tools to boost your workflow</p>
            </Link>
            <Link href="/alternatives" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-purple-500/50 transition">
              <h3 className="font-semibold mb-1">🔄 All Alternatives</h3>
              <p className="text-gray-400 text-sm">Browse alternatives for 280+ AI tools</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
