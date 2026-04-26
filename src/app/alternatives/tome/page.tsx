import Link from "next/link";
import type { Metadata } from "next";

const year = 2026;

export const metadata: Metadata = {
  title: `Best Tome Alternatives (${year}) — Top 10 AI Presentation Tools | AISO Tools`,
  description: `Looking for Tome alternatives? Compare the 10 best AI presentation makers with features, pricing, and pros & cons in ${year}. Find the best AI slide deck generator.`,
  alternates: {
    canonical: "https://aisotools.com/alternatives/tome",
  },
  openGraph: {
    title: `Best Tome Alternatives (${year}) — Top 10 AI Presentation Tools`,
    description: `Compare the 10 best Tome alternatives for AI-generated presentations, pitch decks, and visual storytelling in ${year}.`,
    url: "https://aisotools.com/alternatives/tome",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Tome Alternatives (${year})`,
    description: `Top 10 Tome alternatives for AI presentation generation and slide deck creation.`,
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
    startingPrice: "Free (400 AI credits). Plus $10/mo",
    tagline: "AI presentation generator with instant full decks from a prompt",
    description:
      "Gamma is the most direct Tome competitor and arguably the fastest AI presentation generator available. Type a topic and Gamma produces a complete, professionally designed deck in under 60 seconds — handling layout, imagery, and color schemes automatically. Unlike Tome's narrative-forward format, Gamma outputs traditional slide-based presentations that import cleanly to PowerPoint or Google Slides. For teams needing production-ready decks quickly, Gamma's output quality surpasses Tome's.",
    features: [
      "Full deck generation from a single prompt",
      "Export to PowerPoint and PDF",
      "AI image generation per slide",
      "Customizable themes and brand kits",
      "One-click to edit any generated content",
      "Analytics on viewer engagement",
    ],
    whySwitchReasons: [
      "Tome uses a scrolling narrative format — Gamma produces standard slides compatible with PowerPoint",
      "Gamma's export to .pptx makes it practical for corporate settings where Tome's format doesn't work",
      "Faster generation and higher output quality on first draft for traditional presentations",
    ],
    bestFor: "Teams and professionals who need AI-generated presentations that work in standard slide formats.",
    compareUrl: "/compare/tome-vs-gamma",
  },
  {
    rank: 2,
    name: "Beautiful.ai",
    slug: "beautiful-ai",
    url: "https://beautiful.ai",
    pricing: "Paid",
    pricingColor: "bg-orange-500/10 text-orange-400",
    freeTier: false,
    startingPrice: "$12/mo (billed annually)",
    tagline: "Smart slides that auto-format as you add content",
    description:
      "Beautiful.ai takes a different AI approach than Tome — instead of generating content from scratch, it makes existing content look professional automatically. Add a bullet point, and the slide reformats. Add an image, and the layout adjusts. It's AI as design assistant rather than AI as content author. For executives and professionals who know what they want to say but need polished slides, Beautiful.ai eliminates the design work entirely.",
    features: [
      "Smart slide templates that auto-format",
      "200+ pre-designed slide types",
      "Real-time brand kit enforcement",
      "AI presenter notes generation",
      "Collaborative editing with version history",
      "Company-wide template management",
    ],
    whySwitchReasons: [
      "Tome generates narrative-style pages — Beautiful.ai enforces brand standards across every slide",
      "Smart templates prevent off-brand layouts without design review cycles",
      "Better for companies where brand consistency matters more than AI-generated narrative",
    ],
    bestFor: "Corporate teams, agencies, and professionals who need brand-consistent slide presentations with professional polish.",
    compareUrl: "/alternatives/beautiful-ai",
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
    tagline: "Collaborative presentation software built for modern teams",
    description:
      "Pitch is what Figma is to design — a modern, collaborative presentation tool built from the ground up for teams rather than individual creators. Real-time multiplayer editing, project organization, and a presentation library management system make it the best choice for companies producing high volumes of presentations. Its AI features focus on generating content and speaker notes rather than replacing the design workflow entirely.",
    features: [
      "Real-time multiplayer presentation editing",
      "AI content generation for slides and notes",
      "Presentation analytics and engagement tracking",
      "Video recording embedded in presentations",
      "Custom fonts, colors, and brand kits",
      "Workspace library for company templates",
    ],
    whySwitchReasons: [
      "Tome is single-author — Pitch was built for teams collaborating on presentations simultaneously",
      "Workspace library keeps everyone using consistent, approved templates",
      "Analytics show which slides resonate with viewers for ongoing improvement",
    ],
    bestFor: "Marketing teams, agencies, and companies producing high volumes of presentations who need team workflows.",
    compareUrl: "/compare/tome-vs-pitch",
  },
  {
    rank: 4,
    name: "Canva AI Presentations",
    slug: "canva",
    url: "https://canva.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free. Pro $15/mo",
    tagline: "AI design platform with Magic Presentations and extensive templates",
    description:
      "Canva's Magic Presentations feature uses AI to generate complete decks from prompts, putting it in direct competition with Tome. But Canva's real advantage is breadth — the same tool generates social posts, videos, PDFs, and web graphics alongside presentations. Magic Design selects from 600,000+ templates and maintains brand consistency across all assets. For teams using Canva already, it's the natural AI presentation upgrade.",
    features: [
      "Magic Presentations: AI deck generation from prompts",
      "600,000+ presentation templates",
      "Magic Design AI for instant visual layouts",
      "Brand Kit with logos, fonts, and colors",
      "Presenter View with AI speaker notes",
      "One tool for all marketing assets (social, video, print)",
    ],
    whySwitchReasons: [
      "Tome is presentations-only — Canva covers your entire visual content stack in one platform",
      "Existing Canva Pro teams can use AI presentations without adding another subscription",
      "600K+ templates give more starting points than any dedicated presentation tool",
    ],
    bestFor: "Marketing teams, small businesses, and anyone already using Canva who wants AI presentation generation.",
    compareUrl: "/alternatives/canva",
  },
  {
    rank: 5,
    name: "Decktopus",
    slug: "decktopus",
    url: "https://decktopus.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (3 decks). AI Basic $14.99/mo",
    tagline: "AI deck builder with customizable question-based generation",
    description:
      "Decktopus positions itself as the AI presentation tool for business professionals who present frequently but aren't designers. Its AI generation is driven by a questionnaire — you answer a few questions about your audience, purpose, and key points, and it builds a structured deck around your answers. The result is more tailored to your specific use case than Tome's open-ended narrative generation.",
    features: [
      "Question-based AI deck generation",
      "AI speaker notes per slide",
      "Presentation sharing with analytics",
      "AI image selection and generation",
      "Custom branding and white-label options",
      "Form embedding within presentations",
    ],
    whySwitchReasons: [
      "Tome requires you to write the narrative — Decktopus extracts it from your answers with structured questions",
      "Speaker notes are auto-generated per slide, reducing prep time significantly",
      "White-label options make it better for agencies reselling presentations to clients",
    ],
    bestFor: "Consultants, coaches, and agency teams who create similar presentation types repeatedly for different clients.",
    compareUrl: "/compare/tome-vs-decktopus",
  },
  {
    rank: 6,
    name: "SlidesAI",
    slug: "slidesai",
    url: "https://slidesai.io",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (3 presentations). Basic $10/mo",
    tagline: "Google Slides AI plugin for instant presentation generation",
    description:
      "SlidesAI solves the problem for teams locked into Google Workspace — it's a Google Slides add-on that generates full presentations from text, topic, or document input, directly inside the tool you already use. No new software to learn, no export friction, no format mismatch. Paste in your research or meeting notes, and SlidesAI structures them into a complete slide deck within your existing Google Drive.",
    features: [
      "Google Slides native add-on (works in-place)",
      "Text-to-presentation generation",
      "50+ presentation themes",
      "AI-generated speaker notes",
      "Image suggestions from Unsplash library",
      "Multi-language slide generation",
    ],
    whySwitchReasons: [
      "Tome requires switching to a new app — SlidesAI works directly inside Google Slides",
      "Generated decks stay in Google Drive with existing sharing and permissions",
      "No format conversion needed — output is native Google Slides, not an export",
    ],
    bestFor: "Google Workspace users and teams who want AI presentation generation without leaving their existing workflow.",
    compareUrl: "/compare/tome-vs-slidesai",
  },
  {
    rank: 7,
    name: "Slidebean",
    slug: "slidebean",
    url: "https://slidebean.com",
    pricing: "Paid",
    pricingColor: "bg-orange-500/10 text-orange-400",
    freeTier: false,
    startingPrice: "$9/mo (annual). All-in-one $149/mo",
    tagline: "AI pitch deck builder with fundraising templates and investor analytics",
    description:
      "Slidebean is specifically engineered for startup fundraising — its templates are based on actual successful pitch decks (Airbnb, Buffer, Sequoia framework), and its AI generates structure and content tuned for investor presentations. The paid tiers include pitch deck review services and investor tracking features that go beyond what any other AI presentation tool offers for early-stage founders.",
    features: [
      "Fundraising-optimized pitch deck templates",
      "AI content generation from startup data",
      "Investor presentation analytics (who viewed, when)",
      "Pitch deck review and feedback service",
      "Financial projection templates",
      "CRM for investor relationship tracking",
    ],
    whySwitchReasons: [
      "Tome has no startup-specific content intelligence — Slidebean's AI understands fundraising narrative structure",
      "Investor analytics show which slides investors re-read, informing how to strengthen the deck",
      "Pitch review service provides expert feedback that no AI-only tool offers",
    ],
    bestFor: "Startup founders and early-stage companies preparing investor pitch decks and tracking fundraising conversations.",
    compareUrl: "/compare/tome-vs-slidebean",
  },
  {
    rank: 8,
    name: "MagicSlides",
    slug: "magicslides",
    url: "https://magicslides.app",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (5 presentations). Basic $6.70/mo",
    tagline: "Fast AI presentation generator from text or YouTube URLs",
    description:
      "MagicSlides wins on simplicity and speed — paste in any text, a YouTube URL, or a PDF, and it generates a complete Google Slides or PowerPoint presentation in under 30 seconds. No account setup friction, no design decisions to make. For educators, students, and quick meeting decks, it's the fastest path from raw content to a usable presentation. The YouTube-to-slides feature is uniquely useful for summarizing video content.",
    features: [
      "Generate from text, URL, PDF, or YouTube video",
      "Google Slides and PowerPoint export",
      "30-second generation time",
      "AI-selected images per slide",
      "Custom theme color selection",
      "Free Chrome extension",
    ],
    whySwitchReasons: [
      "Tome requires meaningful input — MagicSlides works from any existing content source including YouTube",
      "Google Slides output means no format conversion and works with existing workflows",
      "Free Chrome extension makes quick presentations accessible without switching tools",
    ],
    bestFor: "Students, educators, and professionals who need fast presentations from existing content (documents, videos, research).",
    compareUrl: "/compare/tome-vs-magicslides",
  },
  {
    rank: 9,
    name: "Presentations.AI",
    slug: "presentations-ai",
    url: "https://presentations.ai",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (limited). Pro $12/mo",
    tagline: "AI presentation generator with design intelligence and theme adaptation",
    description:
      "Presentations.AI offers a more design-forward approach to AI slides compared to Tome's narrative focus. Its AI not only generates content but applies design intelligence — selecting color palettes, typography, and layout combinations that work together visually. The result is presentations that look custom-designed rather than template-applied, with less manual adjustment required.",
    features: [
      "AI design intelligence for colors and typography",
      "Prompt-based full deck generation",
      "Smart image placement and sizing",
      "Export to PowerPoint and PDF",
      "AI outline generation before building slides",
      "Brand kit for consistent styling",
    ],
    whySwitchReasons: [
      "Tome outputs a fixed visual format — Presentations.AI adapts design to your brand colors and preferences",
      "Design intelligence produces more visually diverse output than template-based generators",
      "Outline-first approach gives more control over structure before committing to visuals",
    ],
    bestFor: "Design-conscious professionals and marketers who want AI-generated presentations that don't look template-generated.",
    compareUrl: "/compare/tome-vs-presentations-ai",
  },
  {
    rank: 10,
    name: "Prezi",
    slug: "prezi",
    url: "https://prezi.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (limited). Plus $7/mo",
    tagline: "Non-linear presentations with spatial storytelling and AI assist",
    description:
      "Prezi is the original non-linear presentation format and has added AI features over the years to compete with tools like Tome. Its spatial storytelling model — where ideas exist on a canvas rather than sequential slides — creates presentations that feel dynamic and memorable. Prezi AI can now generate spatial layouts from text prompts. For sales demos and keynotes where you need to respond to audience direction, Prezi's non-linear format is uniquely useful.",
    features: [
      "Spatial canvas (non-linear) presentation format",
      "AI-assisted layout generation from prompts",
      "Zoom and pan navigation between ideas",
      "Live presentation analytics",
      "Collaborative editing",
      "Video integration within canvas",
    ],
    whySwitchReasons: [
      "Tome's scroll format can feel passive — Prezi's zooming creates a sense of exploration that re-engages audiences",
      "Non-linear navigation lets presenters jump between sections based on audience questions",
      "Spatial layouts work better for demonstrating systems and relationships than sequential slides",
    ],
    bestFor: "Sales presenters, conference speakers, and educators who need engaging, non-linear visual storytelling.",
    compareUrl: "/compare/tome-vs-prezi",
  },
];

const faqs = [
  {
    question: "What is the best free alternative to Tome?",
    answer:
      "Gamma is the strongest free Tome alternative — its free tier includes 400 AI generation credits which is enough for 10-20 full presentations. Canva's free plan also includes AI presentation generation with access to thousands of templates. For Google Workspace users, SlidesAI has a free tier for up to 3 presentations per month. MagicSlides is also free for 5 presentations and works directly in Google Slides or PowerPoint.",
  },
  {
    question: "Is Tome good for professional presentations?",
    answer:
      "Tome works well for narrative-driven content like investor updates, product announcements, and thought leadership pieces. Its scrolling format is distinctive and looks polished. However, it's not ideal for traditional corporate presentations, board decks, or any context where you need to export to PowerPoint or Google Slides — for those use cases, Gamma, Beautiful.ai, or Pitch are better choices.",
  },
  {
    question: "Which AI presentation tool is best for startup pitch decks?",
    answer:
      "Slidebean is purpose-built for startup fundraising — its templates are based on successful real pitch decks (Airbnb, Buffer) and its AI understands investor presentation structure. It also offers investor analytics and a pitch review service. For AI-generated decks specifically, Gamma produces the most investor-ready output in standard slide format. Tome's scrolling format typically doesn't work for traditional VC pitches.",
  },
  {
    question: "Can AI really generate a complete presentation automatically?",
    answer:
      "Yes — tools like Gamma, MagicSlides, and Decktopus can produce complete 10-15 slide presentations in under 60 seconds from a text prompt. The quality varies: Gamma typically produces the most polished first drafts, while others require more editing. In all cases, plan to review and customize the AI output — the AI handles structure and design while you refine messaging and accuracy.",
  },
  {
    question: "What is Tome best used for?",
    answer:
      "Tome excels at narrative-driven presentations where the scrolling format enhances the story: product announcements, company updates, thought leadership essays, and portfolio presentations. It's less effective for traditional slide-by-slide presentations expected in corporate or investor contexts. If your presentation needs to be sent as a PowerPoint or presented in a standard meeting context, Gamma or Canva are more practical choices.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Best Tome Alternatives (${year})`,
    description: `Top 10 alternatives to Tome for AI-generated presentations, pitch decks, and visual storytelling.`,
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
      { "@type": "ListItem", position: 3, name: "Tome Alternatives", item: "https://aisotools.com/alternatives/tome" },
    ],
  },
];

export default function TomeAlternativesPage() {
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
          <span className="text-gray-300">Tome Alternatives</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-xl bg-indigo-600/20 flex items-center justify-center text-2xl font-bold text-indigo-400 mx-auto mb-6">
            T
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Best Tome Alternatives in {year}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Compare the {alternatives.length} best alternatives to Tome for AI-generated presentations, pitch decks, and visual storytelling.
          </p>
          <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">
            <span className="bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full text-sm font-medium">
              Tome: Freemium ($20/mo Pro)
            </span>
            <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
              📊 AI Presentations
            </span>
          </div>
        </div>

        {/* Why Switch */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Why Look for Tome Alternatives?</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Tome pioneered AI-first visual storytelling with its distinctive scrolling format. However, its non-traditional layout doesn't work in corporate contexts that expect PowerPoint or Google Slides exports, collaboration features are limited compared to dedicated presentation tools, and the scrolling format can feel passive for live presentations. Depending on your use case — investor pitches, team collaboration, or quick AI generation — one of these alternatives will serve you better.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { reason: "📤 No PowerPoint Export", detail: "Tome's scrolling format can't be exported to .pptx — a dealbreaker for enterprise contexts. Gamma, Canva, and SlidesAI all export to native PowerPoint and Google Slides formats." },
              { reason: "👥 Limited Collaboration", detail: "Tome's collaboration features are basic compared to Pitch or Canva. Teams creating multiple presentations benefit from workspace libraries, version history, and real-time multiplayer editing." },
              { reason: "🎯 Format Mismatch", detail: "Tome's scrolling narrative format is distinctive but doesn't fit traditional presentation contexts. Board meetings, investor pitches, and sales demos typically expect slide-by-slide progression." },
              { reason: "💡 Content vs. Design", detail: "Tome focuses on narrative generation. Tools like Beautiful.ai and Gamma have stronger design intelligence — producing visually polished output that requires less manual adjustment." },
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
          <h2 className="text-2xl font-bold mb-6">Quick Comparison: Tome vs Alternatives</h2>
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
                      <Link href={`#${alt.slug}`} className="font-medium text-white hover:text-indigo-400 transition">
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
          <h2 className="text-2xl font-bold mb-6">Detailed Look at Each Tome Alternative</h2>
          <div className="space-y-8">
            {alternatives.map((alt) => (
              <div key={alt.slug} id={alt.slug} className="bg-gray-900 border border-gray-800 rounded-xl p-6 sm:p-8 scroll-mt-20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/20 flex items-center justify-center text-xl font-bold text-indigo-400 flex-shrink-0">
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
                          <span className="text-indigo-400 mt-0.5 flex-shrink-0">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-300 mb-3 uppercase tracking-wide">Why Switch from Tome?</h4>
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
                      className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition flex-shrink-0"
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
          <h2 className="text-2xl font-bold mb-6">Which Tome Alternative Should You Choose?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">For Traditional Slide Decks</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">→</span>
                  <span><strong className="text-gray-300">Gamma:</strong> Best AI generation for standard PowerPoint-compatible slides</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">→</span>
                  <span><strong className="text-gray-300">Beautiful.ai:</strong> Smart formatting with corporate brand enforcement</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">For Startup Pitch Decks</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">→</span>
                  <span><strong className="text-gray-300">Slidebean:</strong> Fundraising templates + investor analytics + review service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">→</span>
                  <span><strong className="text-gray-300">Gamma:</strong> Clean AI generation in standard slide format investors expect</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">For Google Workspace Teams</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">→</span>
                  <span><strong className="text-gray-300">SlidesAI:</strong> Works directly inside Google Slides — no app switching</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">→</span>
                  <span><strong className="text-gray-300">MagicSlides:</strong> Generate from any content (URLs, PDFs, YouTube) to Slides</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">For Marketing & Design Teams</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">→</span>
                  <span><strong className="text-gray-300">Canva AI:</strong> Presentations plus the entire visual content stack in one tool</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">→</span>
                  <span><strong className="text-gray-300">Pitch:</strong> Team collaboration, workspace libraries, and presentation analytics</span>
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
            <Link href="/alternatives/gamma" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-indigo-500/50 transition">
              <h3 className="font-semibold mb-1">⚡ Gamma Alternatives</h3>
              <p className="text-gray-400 text-sm">Compare Gamma with other AI presentation tools</p>
            </Link>
            <Link href="/alternatives/beautiful-ai" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-indigo-500/50 transition">
              <h3 className="font-semibold mb-1">✨ Beautiful.ai Alternatives</h3>
              <p className="text-gray-400 text-sm">Smart presentation tools compared</p>
            </Link>
            <Link href="/alternatives/canva" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-indigo-500/50 transition">
              <h3 className="font-semibold mb-1">🎨 Canva Alternatives</h3>
              <p className="text-gray-400 text-sm">Best Canva competitors for visual design</p>
            </Link>
            <Link href="/tool/gamma" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-indigo-500/50 transition">
              <h3 className="font-semibold mb-1">🎯 Gamma</h3>
              <p className="text-gray-400 text-sm">Full profile: AI deck generator</p>
            </Link>
            <Link href="/ai-design-tools" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-indigo-500/50 transition">
              <h3 className="font-semibold mb-1">🖌️ AI Design Tools</h3>
              <p className="text-gray-400 text-sm">Browse all AI design and presentation tools</p>
            </Link>
            <Link href="/alternatives" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-indigo-500/50 transition">
              <h3 className="font-semibold mb-1">🔄 All Alternatives</h3>
              <p className="text-gray-400 text-sm">Browse alternatives for 280+ AI tools</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
