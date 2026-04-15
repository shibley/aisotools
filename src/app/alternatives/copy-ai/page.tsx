import Link from "next/link";
import type { Metadata } from "next";

const year = 2026;

export const metadata: Metadata = {
  title: `Best Copy.ai Alternatives (${year}) — Top 5 AI Writing Tools | AISO Tools`,
  description: `Looking for Copy.ai alternatives? Compare the 5 best AI copywriting tools with features, pricing, and pros & cons in ${year}.`,
  alternates: {
    canonical: "https://aisotools.com/alternatives/copy-ai",
  },
  openGraph: {
    title: `Best Copy.ai Alternatives (${year}) — Top 5 AI Writing Tools`,
    description: `Compare the 5 best alternatives to Copy.ai for marketing copy, SEO blogs, and sales emails.`,
    url: "https://aisotools.com/alternatives/copy-ai",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Copy.ai Alternatives (${year})`,
    description: `Top 5 Copy.ai alternatives for marketers, entrepreneurs, and content creators.`,
  },
};

const alternatives = [
  {
    rank: 1,
    name: "Jasper",
    slug: "jasper",
    url: "https://jasper.ai",
    pricing: "Paid",
    pricingColor: "bg-orange-500/10 text-orange-400",
    freeTier: false,
    startingPrice: "Pro $39/mo",
    tagline: "The enterprise-grade AI content platform",
    description:
      "Jasper is the most direct competitor to Copy.ai and is widely considered the industry standard for marketing teams. While Copy.ai focuses on speed and templates, Jasper offers deeper brand-voice customization and a more robust content strategy workflow, making it ideal for companies that need consistent messaging across all channels.",
    features: [
      "Advanced Brand Voice training and memory",
      "Enterprise-level collaboration and approval workflows",
      "Integrated SEO optimization with Surfer SEO",
      "Campaign-level content generation (multi-channel)",
      "Sophisticated template library for every marketing angle",
      "Robust API for high-volume content production",
    ],
    whySwitchReasons: [
      "Need a tool that strictly adheres to a specific brand voice",
      "Working in a large team that requires approval workflows",
      "Want integrated SEO tools to ensure content actually ranks",
    ],
    bestFor: "Marketing agencies and mid-to-large sized companies requiring high-scale, on-brand content.",
    compareUrl: "/compare/copy-ai-vs-jasper",
  },
  {
    rank: 2,
    name: "Writesonic",
    slug: "writesonic",
    url: "https://writesonic.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free. Pro $15/mo",
    tagline: "The best AI for SEO-optimized long-form content",
    description:
      "Writesonic excels where Copy.ai sometimes struggles: long-form articles that actually rank on Google. With its AI Article Writer and deep integration with real-time search data, Writesonic is the go-to for bloggers and SEO specialists who need comprehensive, factual, and structured content without the heavy manual editing.",
    features: [
      "AI Article Writer 6.0 for high-ranking long-form posts",
      "Real-time Google Search grounding for factual accuracy",
      "ChatSonic: A conversational AI with live web access",
      "Landing page generator with high-converting frameworks",
      "Built-in plagiarism checker and SEO scoring",
      "Multi-language support for global content reach",
    ],
    whySwitchReasons: [
      "Focusing primarily on SEO and long-form blog growth",
      "Tired of generic AI outputs and need real-time web data",
      "Looking for a more affordable professional tier than Jasper",
    ],
    bestFor: "Bloggers, SEO specialists, and niche site owners.",
    compareUrl: "/compare/copy-ai-vs-writesonic",
  },
  {
    rank: 3,
    name: "Anyword",
    slug: "anyword",
    url: "https://anyword.com",
    pricing: "Paid",
    pricingColor: "bg-orange-500/10 text-orange-400",
    freeTier: false,
    startingPrice: "Starter $39/mo",
    tagline: "The data-driven AI for performance marketing",
    description:
      "Anyword differentiates itself by focusing on *performance*. Instead of just generating 'good' copy, Anyword uses a predictive performance score to tell you how likely a piece of copy is to convert. This makes it a powerhouse for ad copy (Facebook, Google) where every word affects the ROAS.",
    features: [
      "Predictive Performance Score for copy conversion",
      "Customer persona creation for targeted messaging",
      "Dynamic copy testing and optimization",
      "Data-backed suggestions to improve click-through rates",
      "Deep integration with ad platforms for real-time data",
      "Strong emphasis on conversion-centric frameworks",
    ],
    whySwitchReasons: [
      "Running paid ads and need to maximize conversion rates",
      "Want a tool that tells you WHY a piece of copy will work",
      "Need to create highly targeted copy for specific personas",
    ],
    bestFor: "Performance marketers, media buyers, and e-commerce growth hackers.",
    compareUrl: "/compare/copy-ai-vs-anyword",
  },
  {
    rank: 4,
    name: "Rytr",
    slug: "rytr",
    url: "https://rytr.me",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free. Paid $9/mo",
    tagline: "The most affordable AI writing assistant",
    description:
      "Rytr is the perfect entry point for those who find Copy.ai's pricing too steep or its feature set overwhelming. It provides a clean, intuitive interface and a wide array of templates for social media, emails, and blogs, all at a fraction of the cost of the 'big' AI writers.",
    features: [
      "Extremely low pricing for high-quality output",
      "Clean, distraction-free writing interface",
      "Wide variety of templates for diverse use cases",
      "Built-in AI image generator for accompanying visuals",
      "Easy-to-use tone selector for different audiences",
      "Fast generation speeds for short-form content",
    ],
    whySwitchReasons: [
      "Budget-conscious freelancer or small business owner",
      "Only need basic AI writing without the enterprise bloat",
      "Want a simple tool for quick social media captions",
    ],
    bestFor: "Freelancers, solopreneurs, and students.",
    compareUrl: "/compare/copy-ai-vs-rytr",
  },
  {
    rank: 5,
    name: "WordTune",
    slug: "wordtune",
    url: "https://wordtune.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free. Plus $9.99/mo",
    tagline: "The AI editor that perfects your existing writing",
    description:
      "Unlike Copy.ai, which focuses on generating content from scratch, WordTune is an 'AI rewriter.' It excels at taking your existing drafts and polishing them—changing the tone, shortening sentences, or making the prose more professional. It's a productivity tool for those who prefer to write their own first drafts.",
    features: [
      "Powerful 'Rewrite' functionality for every sentence",
      "Tone shifting (Formal, Casual, Confident, etc.)",
      "AI-powered summarizing and expanding of text",
      "Browser extension for seamless use across the web",
      "Deep understanding of context and nuance",
      "Collaborative editing tools for teams",
    ],
    whySwitchReasons: [
      "Prefer writing your own drafts and using AI for polishing",
      "Need to change the tone of existing professional emails",
      "Want a tool that helps you express yourself more clearly",
    ],
    bestFor: "Professionals, academics, and anyone who values precision and editing over generation.",
    compareUrl: "/compare/copy-ai-vs-wordtune",
  },
];

const faqs = [
  {
    question: "What is the best overall alternative to Copy.ai?",
    answer:
      "It depends on your goals. For enterprise-level brand consistency and scale, Jasper is the top choice. For SEO-driven long-form blogs, Writesonic is superior. If you're focused on high-conversion ad copy, Anyword is the most powerful tool.",
  },
  {
    question: "Is there a free alternative to Copy.ai?",
    answer:
      "Yes, Rytr and Writesonic both offer generous free tiers that allow you to generate a significant amount of content without an initial investment, making them great for those testing AI writing for the first time.",
  },
  {
    question: "Which AI writer is best for SEO?",
    answer:
      "Writesonic is generally considered the best for SEO because it integrates real-time search data and has dedicated tools for long-form article generation that are designed to rank on Google.",
  },
  {
    question: "How does Jasper differ from Copy.ai?",
    answer:
      "Jasper generally offers more advanced brand-voice training and enterprise workflows, whereas Copy.ai is often praised for its ease of use, speed, and intuitive template system for shorter marketing pieces.",
  },
  {
    question: "Can I use these tools for emails?",
    answer:
      "Absolutely. All five alternatives—Jasper, Writesonic, Anyword, Rytr, and WordTune—have specific templates or capabilities for drafting, optimizing, and polishing professional and marketing emails.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Best Copy.ai Alternatives (${year})`,
    description: `Top 5 alternatives to Copy.ai for AI copywriting and marketing content.`,
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
      { "@type": "ListItem", position: 3, name: "Copy.ai Alternatives", item: "https://aisotools.com/alternatives/copy-ai" },
    ],
  },
];

export default function CopyAIAlternativesPage() {
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
          <span className="text-gray-300">Copy.ai Alternatives</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-xl bg-blue-600/20 flex items-center justify-center text-2xl font-bold text-blue-400 mx-auto mb-6">
            C
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Best Copy.ai Alternatives in {year}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Compare the {alternatives.length} best alternatives to Copy.ai for copywriting, marketing, and SEO.
          </p>
          <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">
            <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
              Copy.ai: Freemium
            </span>
            <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
              ✍️ AI Writing Tools
            </span>
          </div>
        </div>

        {/* Why Switch */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Why Look for Copy.ai Alternatives?</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Copy.ai is an incredible tool for rapid drafting and template-based content. However, as your content needs evolve, you might find that you need more specialized capabilities—whether it's the brand-voice precision of an enterprise tool, the SEO depth of a long-form writer, or the conversion data of a performance-focused engine.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { reason: "🎯 Performance Data", detail: "Copy.ai tells you what looks good; tools like Anyword tell you what will actually convert using predictive scoring." },
              { reason: "📈 SEO Dominance", detail: "For bloggers, the real-time search grounding and long-form frameworks in Writesonic provide a significant ranking advantage." },
              { reason: "🏢 Enterprise Scaling", detail: "Jasper's brand-voice memory and approval workflows are essential for teams that cannot afford off-brand content." },
              { reason: "✍️ Precision Editing", detail: "If you prefer writing your own drafts and only need AI for polishing, a rewriter like WordTune is far more efficient." },
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
          <h2 className="text-2xl font-bold mb-6">Quick Comparison: Copy.ai vs Alternatives</h2>
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
          <h2 className="text-2xl font-bold mb-6">Detailed Look at Each Copy.ai Alternative</h2>
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
                  <h4 className="font-semibold text-blue-400 mb-2">Why choose {alt.name} over Copy.ai?</h4>
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
            <Link href="/tool/copy-ai" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">📋 Copy.ai Review</h3>
              <p className="text-gray-400 text-sm">Full review with features, pros & cons</p>
            </Link>
            <Link href="/tool/jasper" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">✨ Jasper</h3>
              <p className="text-gray-400 text-sm">The powerhouse for enterprise brand voice</p>
            </Link>
            <Link href="/tool/writesonic" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">🔍 Writesonic</h3>
              <p className="text-gray-400 text-sm">The best AI for SEO long-form articles</p>
            </Link>
            <Link href="/compare/copy-ai-vs-jasper" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">⚖️ Copy.ai vs Jasper</h3>
              <p className="text-gray-400 text-sm">Comparing the two biggest names in AI writing</p>
            </Link>
            <Link href="/category/writing-tools" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">✍️ AI Writing Tools</h3>
              <p className="text-gray-400 text-sm">Browse all content generation tools</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
