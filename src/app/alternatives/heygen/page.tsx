import Link from "next/link";
import type { Metadata } from "next";

const year = 2026;

export const metadata: Metadata = {
  title: `Best HeyGen Alternatives (${year}) — Top 5 AI Video & Avatar Tools | AISO Tools`,
  description: `Looking for HeyGen alternatives? Compare the 5 best AI video generation and spokesperson tools with features, pricing, and pros & cons in ${year}.`,
  alternates: {
    canonical: "https://aisotools.com/alternatives/heygen",
  },
  openGraph: {
    title: `Best HeyGen Alternatives (${year}) — Top 5 AI Video Tools`,
    description: `Compare the 5 best HeyGen alternatives for AI-powered spokespeople, video translation, and avatar generation.`,
    url: "https://aisotools.com/alternatives/heygen",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `Best HeyGen Alternatives (${year})`,
    description: `Top 5 HeyGen alternatives for AI video generation and virtual avatars.`,
  },
};

const alternatives = [
  {
    rank: 1,
    name: "Synthesia",
    slug: "synthesia",
    url: "https://synthesia.io",
    pricing: "Paid",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: false,
    startingPrice: "Starter $22/mo, Creator $67/mo",
    tagline: "The corporate standard for AI video avatars",
    description:
      "Synthesia is HeyGen's most direct competitor. It focuses on high-quality, professional AI avatars for corporate training and internal communications. While HeyGen often feels more 'creative' and agile, Synthesia is the established choice for enterprise-grade scale and reliability.",
    features: [
      "140+ diverse AI avatars",
      "120+ languages and accents",
      "Custom avatar creation",
      "Enterprise-grade security",
      "Collaborative video editing",
      "API for automated video generation",
    ],
    whySwitchReasons: [
      "More established enterprise support and security compliance",
      "Slightly more natural lip-sync in professional corporate settings",
      "Better tools for large-scale internal training deployments",
    ],
    bestFor: "Large corporations and L&D teams creating professional training videos at scale.",
    compareUrl: "/compare/heygen-vs-synthesia",
  },
  {
    rank: 2,
    name: "Runway",
    slug: "runway",
    url: "https://runwayml.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (limited). Standard $12/mo, Pro $28/mo",
    tagline: "Next-gen AI video creativity and Gen-3 alpha",
    description:
      "Runway is less about 'spokespeople' and more about 'cinema'. With Gen-3 Alpha, Runway allows users to create stunning, photorealistic video from text and images. If HeyGen is for presentations, Runway is for commercials, short films, and high-end visual effects.",
    features: [
      "Text-to-video and Image-to-video",
      "Advanced motion control (Director Mode)",
      "In-painting and object removal",
      "Custom AI model training",
      "Cinematic lighting and camera controls",
      "Fast iterative generation",
    ],
    whySwitchReasons: [
      "Far more creative control over the visual style and environment",
      "Not limited to avatars — can generate any scene, object, or landscape",
      "Best-in-class for artistic and cinematic AI video",
    ],
    bestFor: "Creative directors, filmmakers, and marketers who need visually stunning AI video, not just a talking head.",
    compareUrl: "/compare/heygen-vs-runway",
  },
  {
    rank: 3,
    name: "Sora",
    slug: "sora",
    url: "https://openai.com/sora",
    pricing: "Waitlist",
    pricingColor: "bg-orange-500/10 text-orange-400",
    freeTier: false,
    startingPrice: "TBA",
    tagline: "OpenAI's photorealistic world simulator",
    description:
      "Sora represents the next leap in AI video. While HeyGen focuses on the utility of communication, Sora focuses on the simulation of reality. It can generate complex scenes with multiple characters and consistent motion over long durations (up to a minute).",
    features: [
      "Extreme photorealism and physics simulation",
      "Consistent characters across different shots",
      "Complex camera movements",
      "High-resolution output",
      "Long-form AI video (60 seconds)",
      "Deep understanding of 3D space",
    ],
    whySwitchReasons: [
      "Unmatched realism that makes AI video indistinguishable from real footage",
      "Capable of complex storytelling that avatars cannot achieve",
      "Directly from the creators of GPT-4 and DALL-E 3",
    ],
    bestFor: "High-end production houses and storytellers who need the absolute peak of AI realism.",
    compareUrl: "/compare/heygen-vs-sora",
  },
  {
    rank: 4,
    name: "Descript",
    slug: "descript",
    url: "https://descript.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free. Creator $12/mo, Pro $24/mo",
    tagline: "AI-powered video editing via text",
    description:
      "Descript is an 'editing-first' tool. Instead of focusing on generating avatars, it uses AI to make editing video as easy as editing a Word document. Its 'Overdub' feature allows you to create a digital clone of your own voice to fix mistakes in your recording without re-recording.",
    features: [
      "Text-based video editing",
      "AI voice cloning (Overdub)",
      "Automatic transcription and captions",
      "Studio Sound (AI noise removal)",
      "Screen recording and integration",
      "Easy social media clipping",
    ],
    whySwitchReasons: [
      "Far superior for editing existing footage vs generating new avatars",
      "The most efficient workflow for podcasters and YouTubers",
      "Powerful voice cloning that feels more integrated into the editing process",
    ],
    bestFor: "Content creators, podcasters, and YouTubers who record their own content but want AI to speed up the editing.",
    compareUrl: "/compare/heygen-vs-descript",
  },
  {
    rank: 5,
    name: "Veo",
    slug: "veo",
    url: "https://deepmind.google/technologies/veo/",
    pricing: "Waitlist",
    pricingColor: "bg-orange-500/10 text-orange-400",
    freeTier: false,
    startingPrice: "TBA",
    tagline: "Google's cinematic AI video generation",
    description:
      "Veo is Google's answer to Sora and Runway. It leverages Google's massive compute and data to produce high-quality 1080p video. Like Sora, it's designed for creative expression rather than spokesperson utility, offering a high degree of control over cinematic styles.",
    features: [
      "High-definition 1080p video",
      "Advanced understanding of cinematic terminology",
      "Consistent character and environment rendering",
      "Integration with Google's AI ecosystem",
      "Long-form video generation",
      "Precise prompt adherence",
    ],
    whySwitchReasons: [
      "Deep integration with other Google AI tools",
      "Strong cinematic control and high-resolution output",
      "Likely to be the most accessible high-end video AI for Google Workspace users",
    ],
    bestFor: "Creative professionals who prefer the Google ecosystem and need high-resolution cinematic video.",
    compareUrl: "/compare/heygen-vs-veo",
  },
];

const faqs = [
  {
    question: "What is the best free alternative to HeyGen?",
    answer:
      "Runway and Descript both offer generous free tiers. Runway is best for creative AI video generation, while Descript is best for those who record their own video and want AI-powered editing tools. Most high-end avatar tools like Synthesia are strictly paid, though some offer limited free trials.",
  },
  {
    question: "Is Synthesia better than HeyGen?",
    answer:
      "It depends on your needs. Synthesia is generally seen as the 'enterprise' choice—more stable, better for large-scale corporate training, and highly secure. HeyGen is often seen as more 'innovative' and agile, with better features for video translation and a more user-friendly approach for creators.",
  },
  {
    question: "How does Runway differ from HeyGen?",
    answer:
      "They serve different purposes. HeyGen is a 'Spokesperson' tool—it creates a person talking to the camera. Runway is a 'Cinematic' tool—it creates scenes, environments, and artistic visuals. You use HeyGen for a presentation; you use Runway for a movie trailer.",
  },
  {
    question: "Can I use Descript for AI avatars?",
    answer:
      "Descript doesn't do full-body AI avatars like HeyGen. Instead, it does 'AI Voice Cloning' via Overdub. You record yourself, and Descript creates a clone of your voice so you can type in new words to fix your audio. It's an editing tool, not a generation tool.",
  },
  {
    question: "When will Sora be available?",
    answer:
      "Sora is currently in a limited testing phase with a small group of visual artists and designers. OpenAI has not yet announced a general public release date, but it is expected to be a major competitor to both Runway and HeyGen in the near future.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Best HeyGen Alternatives (${year})`,
    description: `Top 5 alternatives to HeyGen for AI video generation, spokespeople, and avatars.`,
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
      { "@type": "ListItem", position: 3, name: "HeyGen Alternatives", item: "https://aisotools.com/alternatives/heygen" },
    ],
  },
];

export default function HeyGenAlternativesPage() {
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
          <span className="text-gray-300">HeyGen Alternatives</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-xl bg-blue-600/20 flex items-center justify-center text-2xl font-bold text-blue-400 mx-auto mb-6">
            H
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Best HeyGen Alternatives in {year}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Compare the {alternatives.length} best alternatives to HeyGen for AI-powered spokespeople, video translation, and realistic virtual avatars.
          </p>
          <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">
            <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
              HeyGen: Freemium
            </span>
            <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
              🎥 AI Video
            </span>
          </div>
        </div>

        {/* Why Switch */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Why Look for HeyGen Alternatives?</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            HeyGen is a powerhouse for creating AI spokespeople and translating videos. However, depending on whether you need corporate stability, cinematic artistry, or a better editing workflow, other tools might be a better fit. Here are the most common reasons:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { reason: "🏢 Enterprise Stability", detail: "For massive corporate deployments with strict security and reliability needs, Synthesia is often the safer, more established choice." },
              { reason: "🎨 Cinematic Creativity", detail: "HeyGen is for 'talking heads'. For photorealistic scenes, artistic visuals, and complex cinematography, Runway or Sora are vastly superior." },
              { reason: "✂️ Editing-First Workflow", detail: "If you already have footage and just want to fix a few words or add captions, Descript's text-based editing is far more efficient than generating a new avatar." },
              { reason: "💰 Budget Constraints", detail: "High-quality AI video is expensive. For those on a budget, Runway's free tier or Descript's freemium model offer a more accessible entry point." },
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
          <h2 className="text-2xl font-bold mb-6">Quick Comparison: HeyGen vs Alternatives</h2>
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
              <tbody >
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
          <h2 className="text-2xl font-bold mb-6">Detailed Look at Each HeyGen Alternative</h2>
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
                  <h4 className="font-semibold text-blue-400 mb-2">Why choose {alt.name} over HeyGen?</h4>
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
            <Link href="/tool/heygen" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">📋 HeyGen Review</h3>
              <p className="text-gray-400 text-sm">Full review with features, pros & cons</p>
            </Link>
            <Link href="/tool/synthesia" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">🎥 Synthesia</h3>
              <p className="text-gray-400 text-sm">Enterprise-grade AI avatars</p>
            </Link>
            <Link href="/tool/runway" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">🎨 Runway</h3>
              <p className="text-gray-400 text-sm">Cinematic AI video generation</p>
            </Link>
            <Link href="/compare/heygen-vs-synthesia" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">⚖️ HeyGen vs Synthesia</h3>
              <p className="text-gray-400 text-sm">Head-to-head comparison</p>
            </Link>
            <Link href="/category/video" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">🎬 AI Video Tools</h3>
              <p className="text-gray-400 text-sm">Browse all AI video and avatar tools</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
