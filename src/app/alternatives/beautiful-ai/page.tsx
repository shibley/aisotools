import Link from "next/link";
import type { Metadata } from "next";

const year = 2026;

export const metadata: Metadata = {
  title: `Best Beautiful.ai Alternatives (${year}) — Top 10 AI Presentation Tools | AISO Tools`,
  description: `Looking for Beautiful.ai alternatives? Compare the 10 best AI presentation and slide deck tools with smart formatting, pricing, and pros & cons in ${year}.`,
  alternates: {
    canonical: "https://aisotools.com/alternatives/beautiful-ai",
  },
  openGraph: {
    title: `Best Beautiful.ai Alternatives (${year}) — Top 10 AI Presentation Tools`,
    description: `Compare the 10 best Beautiful.ai alternatives for AI-powered presentations, smart slides, and visual storytelling in ${year}.`,
    url: "https://aisotools.com/alternatives/beautiful-ai",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Beautiful.ai Alternatives (${year})`,
    description: `Top 10 Beautiful.ai alternatives for smart AI-powered presentation creation.`,
  },
};

const alternatives = [
  {
    rank: 1,
    name: "Gamma",
    slug: "gamma",
    url: "https://gamma.app",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (400 credits). Plus $10/mo",
    tagline: "AI-first deck generator that builds complete presentations from a prompt",
    description:
      "Gamma is the strongest Beautiful.ai alternative for AI generation speed. While Beautiful.ai's AI makes your manually-created slides look professional, Gamma creates the entire deck from a single text prompt — outline, layout, imagery, and design all auto-generated in under a minute. For teams prioritizing speed of creation over control, Gamma produces first drafts that require far less manual work than Beautiful.ai's template-based approach.",
    features: [
      "Complete deck generation from one prompt",
      "AI image generation per slide",
      "Export to PowerPoint (.pptx) and PDF",
      "Custom themes with brand colors",
      "Viewer analytics and engagement tracking",
      "Web-hosted presentations with shareable links",
    ],
    whySwitchReasons: [
      "Beautiful.ai requires you to add content — Gamma generates content and design simultaneously from a prompt",
      "Faster first draft: 60 seconds vs. manually building slides even with smart templates",
      "Free tier includes 400 AI credits, enough for 10-20 complete decks without paying",
    ],
    bestFor: "Individuals and teams who want the fastest path from idea to complete AI-generated presentation.",
    compareUrl: "/compare/beautiful-ai-vs-gamma",
  },
  {
    rank: 2,
    name: "Canva AI Presentations",
    slug: "canva",
    url: "https://canva.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free. Pro $15/mo",
    tagline: "Magic Presentations with the largest template library available",
    description:
      "Canva's Magic Presentations feature generates complete slide decks from prompts, putting it in direct competition with Beautiful.ai. But Canva's real advantage is scale — 600,000+ presentation templates, a built-in image library, video and animation support, and one tool that handles all your marketing assets. Teams using Beautiful.ai for presentations but Canva for everything else can consolidate into a single subscription.",
    features: [
      "Magic Presentations: full deck from prompt",
      "600,000+ presentation templates",
      "Magic Design AI for instant visual layouts",
      "Brand Kit with logos, fonts, and colors",
      "Animation and video within slides",
      "Presenter Mode with speaker notes",
    ],
    whySwitchReasons: [
      "Beautiful.ai is presentations-only — Canva covers your entire visual content stack",
      "Free tier is genuinely useful vs. Beautiful.ai's $12/mo minimum",
      "600K+ templates offer more variety than Beautiful.ai's curated smart template library",
    ],
    bestFor: "Marketing teams and small businesses who want an all-in-one visual content tool rather than a dedicated presentation app.",
    compareUrl: "/alternatives/canva",
  },
  {
    rank: 3,
    name: "Pitch",
    slug: "pitch",
    url: "https://pitch.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free. Pro $22/mo per user",
    tagline: "Real-time collaborative presentations with team workspace and AI assist",
    description:
      "Pitch is the modern presentation tool built for teams who create presentations collaboratively and frequently. Where Beautiful.ai is primarily a solo creation tool with some sharing features, Pitch was designed from the ground up for multiplayer creation — real-time editing, workspace template libraries, and presentation analytics built in. Its AI helps generate slide content and speaker notes, complementing rather than replacing the design workflow.",
    features: [
      "Real-time multiplayer editing",
      "Workspace template library for teams",
      "AI content generation per slide",
      "Presentation analytics and viewer data",
      "Video recording embedded in slides",
      "Custom brand kits with centralized control",
    ],
    whySwitchReasons: [
      "Beautiful.ai lacks team workspace management — Pitch has a proper library for company-wide templates",
      "Real-time collaboration is genuinely better than Beautiful.ai's shared editing",
      "Analytics show viewer engagement with every slide, not just total views",
    ],
    bestFor: "Marketing teams, agencies, and companies creating many presentations who need team workflows and version control.",
    compareUrl: "/compare/beautiful-ai-vs-pitch",
  },
  {
    rank: 4,
    name: "Tome",
    slug: "tome",
    url: "https://tome.app",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free. Pro $20/mo",
    tagline: "AI-first visual storytelling with scrolling narrative format",
    description:
      "Tome takes the opposite design philosophy from Beautiful.ai — it uses AI to generate narrative-driven, scrolling presentations rather than traditional slide layouts. Where Beautiful.ai makes your slides look professional, Tome's AI writes the narrative and selects a flowing visual format. For external-facing content like investor updates, product announcements, and thought leadership, Tome's format is more distinctive and memorable than standard slides.",
    features: [
      "AI narrative generation from prompts",
      "Scrolling visual storytelling format",
      "Embedded media, data, and live content",
      "AI image generation within pages",
      "Analytics and viewer engagement data",
      "Custom themes and branding",
    ],
    whySwitchReasons: [
      "Beautiful.ai enforces structure through templates — Tome builds structure through AI narrative",
      "Tome's scrolling format stands out vs. the sea of identical Beautiful.ai presentations",
      "Better for external-facing storytelling than corporate internal slides",
    ],
    bestFor: "Founders, marketing leaders, and storytellers who want presentations that feel like designed editorial, not slides.",
    compareUrl: "/alternatives/tome",
  },
  {
    rank: 5,
    name: "Presentations.AI",
    slug: "presentations-ai",
    url: "https://presentations.ai",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free. Pro $12/mo",
    tagline: "AI design intelligence with adaptive color, typography, and layout",
    description:
      "Presentations.AI is the closest to Beautiful.ai in philosophy — it applies design intelligence to make slides look great automatically. The difference is generation-first: instead of starting with templates that auto-adjust, Presentations.AI generates the entire deck from a prompt and then applies design intelligence. The result is presentations that look custom-designed rather than template-generated, with color palettes and typography that actually work together.",
    features: [
      "Prompt-based full deck generation with design intelligence",
      "Adaptive color palette and typography selection",
      "Smart image placement and sizing",
      "Export to PowerPoint and PDF",
      "AI outline generation before building",
      "Brand kit for consistent visual identity",
    ],
    whySwitchReasons: [
      "Beautiful.ai's smart templates require you to know what to say — Presentations.AI generates both content and design",
      "Design intelligence produces visually diverse output vs. Beautiful.ai's consistent but recognizable template look",
      "Outline-first workflow gives more control over narrative structure before committing to visuals",
    ],
    bestFor: "Design-conscious professionals who want AI-generated decks that don't look like template output.",
    compareUrl: "/compare/beautiful-ai-vs-presentations-ai",
  },
  {
    rank: 6,
    name: "Visme",
    slug: "visme",
    url: "https://visme.co",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (limited). Starter $29/mo",
    tagline: "Visual content suite with AI presentations, infographics, and reports",
    description:
      "Visme expands beyond presentations to cover the full visual content spectrum: infographics, interactive reports, social media graphics, video, and branded documents — all with AI generation support. For teams communicating data and insights (not just slides), Visme's infographic and data visualization capabilities are significantly stronger than Beautiful.ai's. Its AI Presentation Maker generates full decks from prompts with branded styling.",
    features: [
      "AI Presentation Maker from prompts",
      "Infographic and data visualization tools",
      "Interactive content with clickable elements",
      "Brand Kit with full design system",
      "50M+ photos and graphics library",
      "Analytics on all published content",
    ],
    whySwitchReasons: [
      "Beautiful.ai is slides-only — Visme generates infographics, reports, and social assets alongside presentations",
      "Data visualization is significantly more powerful for teams presenting metrics and research",
      "Interactive elements (clickable hotspots, animated charts) are not available in Beautiful.ai",
    ],
    bestFor: "Marketing teams, analysts, and educators who create data-heavy visual content beyond just slide presentations.",
    compareUrl: "/compare/beautiful-ai-vs-visme",
  },
  {
    rank: 7,
    name: "Google Slides + Gemini",
    slug: "gemini",
    url: "https://workspace.google.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free. Workspace $12/mo per user",
    tagline: "Native AI presentation generation inside Google Slides",
    description:
      "Google's Gemini integration in Google Slides adds AI generation directly inside the tool hundreds of millions of people already use. Gemini can generate presentation outlines, draft slide content, create images, and build complete decks from prompts — without leaving Google Drive. For teams already on Google Workspace, this is the zero-friction path to AI presentation generation without paying for Beautiful.ai.",
    features: [
      "AI presentation generation inside Google Slides",
      "Gemini integration across all Workspace apps",
      "Native Google Drive sharing and permissions",
      "Unlimited revision history",
      "Real-time collaboration built-in",
      "200+ Google Slides templates",
    ],
    whySwitchReasons: [
      "No new tool to learn — AI generation inside the Slides you already use daily",
      "Google Drive sharing and permissions eliminate the export/import friction",
      "Free for Google Workspace users vs. Beautiful.ai's separate $12/mo subscription",
    ],
    bestFor: "Google Workspace users who want AI presentation generation without leaving their existing tools.",
    compareUrl: "/alternatives/gemini",
  },
  {
    rank: 8,
    name: "PowerPoint Copilot",
    slug: "microsoft-copilot",
    url: "https://microsoft.com/copilot",
    pricing: "Paid",
    pricingColor: "bg-orange-500/10 text-orange-400",
    freeTier: false,
    startingPrice: "Microsoft 365 $6/mo + Copilot $30/mo",
    tagline: "AI presentation generation inside Microsoft PowerPoint",
    description:
      "Microsoft Copilot in PowerPoint brings AI generation to the world's most widely used presentation software. Tell Copilot your topic and it generates a complete presentation with slides, speaker notes, and images — directly in PowerPoint with access to your organization's SharePoint content for company-specific context. For enterprises locked into Microsoft 365, Copilot eliminates the need for Beautiful.ai entirely.",
    features: [
      "Full presentation generation from text prompts",
      "Access to organizational SharePoint content",
      "DALL-E image generation per slide",
      "Speaker notes generation",
      "Presentation summarization and revision",
      "Enterprise-grade security and compliance",
    ],
    whySwitchReasons: [
      "Enterprise Microsoft 365 teams avoid a separate tool subscription entirely",
      "Organizational content awareness makes generated slides company-specific, not generic",
      "PowerPoint compatibility is absolute — no export/import, no format issues",
    ],
    bestFor: "Enterprise Microsoft 365 users and teams where PowerPoint is the standard presentation format.",
    compareUrl: "/compare/beautiful-ai-vs-copilot",
  },
  {
    rank: 9,
    name: "Decktopus",
    slug: "decktopus",
    url: "https://decktopus.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (3 decks). AI Basic $14.99/mo",
    tagline: "Question-driven AI deck builder for consultants and coaches",
    description:
      "Decktopus generates presentations through a structured questionnaire rather than an open-ended prompt. You answer questions about your audience, goal, and key points, and the AI assembles a tailored deck. This guided approach produces more purposeful presentations than Beautiful.ai's design-first approach, making it particularly effective for professionals who create similar presentation types repeatedly (sales, consulting, coaching).",
    features: [
      "Questionnaire-driven generation for targeted output",
      "Automatic speaker notes per slide",
      "Presentation sharing with engagement analytics",
      "AI image selection and generation",
      "Custom branding and white-label options",
      "Form embedding within presentations",
    ],
    whySwitchReasons: [
      "Beautiful.ai needs you to already have content — Decktopus extracts it through structured questions",
      "Auto-generated speaker notes reduce preparation time for frequent presenters",
      "White-label options make it better for agencies who present to clients regularly",
    ],
    bestFor: "Consultants, coaches, and sales teams who create the same types of presentations repeatedly for different audiences.",
    compareUrl: "/compare/beautiful-ai-vs-decktopus",
  },
  {
    rank: 10,
    name: "Slidebean",
    slug: "slidebean",
    url: "https://slidebean.com",
    pricing: "Paid",
    pricingColor: "bg-orange-500/10 text-orange-400",
    freeTier: false,
    startingPrice: "$9/mo (annual). All-in-one $149/mo",
    tagline: "AI pitch deck generator built for startup fundraising",
    description:
      "Slidebean is laser-focused on one use case Beautiful.ai doesn't specialize in: startup pitch decks. Its AI generates investor presentations based on successful real-world formats (Airbnb, Sequoia, Buffer), and its premium plans include human pitch deck review and investor analytics. For early-stage founders, the combination of AI generation and expert review is unmatched by any other tool including Beautiful.ai.",
    features: [
      "Fundraising-optimized pitch deck templates",
      "AI generation tuned for investor narratives",
      "Investor analytics (views, time per slide)",
      "Expert pitch deck review service",
      "Financial slide templates",
      "Investor CRM for fundraising tracking",
    ],
    whySwitchReasons: [
      "Beautiful.ai has no startup-specific intelligence — Slidebean's AI understands what investors want to see",
      "Investor analytics reveal which slides need strengthening based on real viewing behavior",
      "Expert review service provides strategic feedback that AI alone cannot provide",
    ],
    bestFor: "Startup founders preparing Series A/B pitch decks and tracking investor pipeline.",
    compareUrl: "/compare/beautiful-ai-vs-slidebean",
  },
];

const faqs = [
  {
    question: "What is the best free alternative to Beautiful.ai?",
    answer:
      "Canva and Gamma are the strongest free Beautiful.ai alternatives. Canva's free plan includes thousands of presentation templates and basic AI generation. Gamma's free tier gives 400 AI credits for full deck generation — enough for 10-20 complete presentations. For Google Workspace users, Google Slides with Gemini AI is also effectively free with an existing workspace subscription.",
  },
  {
    question: "Is Beautiful.ai worth the price?",
    answer:
      "Beautiful.ai's $12/mo makes it one of the more expensive basic presentation tools. The smart templates genuinely save time on slide formatting and enforce visual consistency — valuable for professionals who present regularly and need polished output without a designer. However, for teams wanting AI content generation (not just smart formatting), Gamma or Canva AI offer more AI capability at similar or lower prices.",
  },
  {
    question: "What is the difference between Beautiful.ai and Gamma?",
    answer:
      "Beautiful.ai is a smart template tool — it auto-formats slides as you add content, but you still provide all the content. Gamma is a generative AI tool — it creates both content and design from a text prompt. Beautiful.ai gives you more control over what's on each slide; Gamma gives you a complete first draft much faster. Both export to standard formats, though Gamma's export to .pptx is more versatile.",
  },
  {
    question: "Which Beautiful.ai alternative is best for teams?",
    answer:
      "Pitch is specifically built for teams creating presentations collaboratively. It offers real-time multiplayer editing, a team workspace template library, presentation analytics, and stronger version control than Beautiful.ai. For larger enterprises, the Microsoft Copilot in PowerPoint keeps teams in their existing tools while adding AI generation.",
  },
  {
    question: "Can I use AI to automatically design my slides?",
    answer:
      "Yes — this is exactly what Beautiful.ai and its alternatives do. Gamma generates complete presentations from a text prompt including design. Beautiful.ai's smart templates auto-format as you type. Presentations.AI applies design intelligence to layout, color, and typography. Canva's Magic Design selects matching templates automatically. For the fastest fully-automated result, Gamma's one-prompt approach is typically the most impressive.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Best Beautiful.ai Alternatives (${year})`,
    description: `Top 10 alternatives to Beautiful.ai for AI-powered presentations, smart slides, and visual storytelling.`,
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
      { "@type": "ListItem", position: 3, name: "Beautiful.ai Alternatives", item: "https://aisotools.com/alternatives/beautiful-ai" },
    ],
  },
];

export default function BeautifulAiAlternativesPage() {
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
          <span className="text-gray-300">Beautiful.ai Alternatives</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-xl bg-pink-600/20 flex items-center justify-center text-2xl font-bold text-pink-400 mx-auto mb-6">
            B
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Best Beautiful.ai Alternatives in {year}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Compare the {alternatives.length} best alternatives to Beautiful.ai for AI-powered presentations, smart slide formatting, and visual storytelling.
          </p>
          <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">
            <span className="bg-pink-500/10 text-pink-400 px-3 py-1 rounded-full text-sm font-medium">
              Beautiful.ai: $12/mo (no free tier)
            </span>
            <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
              📊 AI Presentation Tool
            </span>
          </div>
        </div>

        {/* Why Switch */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Why Look for Beautiful.ai Alternatives?</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Beautiful.ai's smart templates are genuinely useful — they auto-format slides as you add content and enforce visual consistency. However, it has no free tier, limited AI content generation compared to newer tools, and a recognizable "Beautiful.ai look" that many teams find generic over time. For teams wanting AI to generate content (not just format it), or those needing deeper collaboration features, these alternatives offer more value.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { reason: "🆓 No Free Tier", detail: "Beautiful.ai requires $12/mo with no free option — you can't test it meaningfully before paying. Gamma, Canva, and Pitch all have genuinely useful free tiers that let you evaluate before committing." },
              { reason: "🤖 Limited AI Generation", detail: "Beautiful.ai formats content you provide — it doesn't generate content from prompts. Gamma and Presentations.AI write the narrative and create the design simultaneously from a single text input." },
              { reason: "👥 Team Collaboration", detail: "Beautiful.ai's team features are basic. Pitch and Canva have proper workspace libraries, real-time multiplayer, and template management systems built for teams creating multiple presentations weekly." },
              { reason: "🎨 Template Recognition", detail: "Heavy Beautiful.ai users notice the templates starting to look similar. Gamma and Presentations.AI produce more visually diverse output without the 'Beautiful.ai template' look." },
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
          <h2 className="text-2xl font-bold mb-6">Quick Comparison: Beautiful.ai vs Alternatives</h2>
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
                      <Link href={`#${alt.slug}`} className="font-medium text-white hover:text-pink-400 transition">
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
          <h2 className="text-2xl font-bold mb-6">Detailed Look at Each Beautiful.ai Alternative</h2>
          <div className="space-y-8">
            {alternatives.map((alt) => (
              <div key={alt.slug} id={alt.slug} className="bg-gray-900 border border-gray-800 rounded-xl p-6 sm:p-8 scroll-mt-20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-pink-600/20 flex items-center justify-center text-xl font-bold text-pink-400 flex-shrink-0">
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
                          <span className="text-pink-400 mt-0.5 flex-shrink-0">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-300 mb-3 uppercase tracking-wide">Why Switch from Beautiful.ai?</h4>
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
                      className="bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition flex-shrink-0"
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
          <h2 className="text-2xl font-bold mb-6">Which Beautiful.ai Alternative Should You Choose?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">For AI Content Generation</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">→</span>
                  <span><strong className="text-gray-300">Gamma:</strong> Full deck from a single prompt in 60 seconds</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">→</span>
                  <span><strong className="text-gray-300">Presentations.AI:</strong> AI design intelligence with adaptive typography</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">For Teams & Collaboration</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">→</span>
                  <span><strong className="text-gray-300">Pitch:</strong> Real-time multiplayer + workspace template library</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">→</span>
                  <span><strong className="text-gray-300">Canva AI:</strong> All-in-one visual stack + team collaboration</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">For Microsoft / Google Users</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">→</span>
                  <span><strong className="text-gray-300">PowerPoint Copilot:</strong> AI generation inside PowerPoint for M365 teams</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">→</span>
                  <span><strong className="text-gray-300">Google Slides + Gemini:</strong> AI in Slides, free for Workspace users</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">For Startup Founders</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">→</span>
                  <span><strong className="text-gray-300">Slidebean:</strong> Investor-ready pitch deck templates + review service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">→</span>
                  <span><strong className="text-gray-300">Tome:</strong> Distinctive scrolling format for external investor updates</span>
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
            <Link href="/alternatives/gamma" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-pink-500/50 transition">
              <h3 className="font-semibold mb-1">⚡ Gamma Alternatives</h3>
              <p className="text-gray-400 text-sm">Compare Gamma with other AI presentation tools</p>
            </Link>
            <Link href="/alternatives/tome" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-pink-500/50 transition">
              <h3 className="font-semibold mb-1">📖 Tome Alternatives</h3>
              <p className="text-gray-400 text-sm">Best alternatives to Tome for AI presentations</p>
            </Link>
            <Link href="/alternatives/canva" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-pink-500/50 transition">
              <h3 className="font-semibold mb-1">🎨 Canva Alternatives</h3>
              <p className="text-gray-400 text-sm">Best competitors to Canva for visual design</p>
            </Link>
            <Link href="/tool/gamma" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-pink-500/50 transition">
              <h3 className="font-semibold mb-1">🎯 Gamma</h3>
              <p className="text-gray-400 text-sm">Full profile: fastest AI presentation generator</p>
            </Link>
            <Link href="/ai-design-tools" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-pink-500/50 transition">
              <h3 className="font-semibold mb-1">🖌️ AI Design Tools</h3>
              <p className="text-gray-400 text-sm">Browse all AI design and presentation tools</p>
            </Link>
            <Link href="/alternatives" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-pink-500/50 transition">
              <h3 className="font-semibold mb-1">🔄 All Alternatives</h3>
              <p className="text-gray-400 text-sm">Browse alternatives for 280+ AI tools</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
