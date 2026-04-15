import Link from "next/link";
import type { Metadata } from "next";

const year = 2026;

export const metadata: Metadata = {
  title: `Best Jasper AI Alternatives (${year}) — Top 12 AI Writing Tools | AISO Tools`,
  description: `Looking for Jasper AI alternatives? Compare the 12 best AI writing assistants and copy tools with features, pricing, and pros & cons in ${year}.`,
  alternates: {
    canonical: "https://aisotools.com/alternatives/jasper",
  },
  openGraph: {
    title: `Best Jasper AI Alternatives (${year}) — Top 12 AI Writing Tools`,
    description: `Compare the best Jasper alternatives for copywriting, SEO, and content creation.`,
    url: "https://aisotools.com/alternatives/jasper",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Jasper AI Alternatives (${year})`,
    description: `Top 12 Jasper AI alternatives for professional AI writing.`,
  },
};

const alternatives = [
  {
    rank: 1,
    name: "ChatGPT",
    slug: "chatgpt",
    url: "https://chatgpt.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free. Plus $20/mo",
    tagline: "The most versatile AI writing and reasoning engine",
    description:
      "OpenAI's conversational AI is the most flexible alternative to Jasper. While Jasper provides templates, ChatGPT offers raw power and versatility. With GPT-4o, it handles complex long-form content, brainstorming, and technical writing with ease. If you are comfortable with prompt engineering, it can replace almost everything Jasper does at a lower price point.",
    features: [
      "SOTA reasoning and creative writing",
      "Custom GPTs for brand-specific workflows",
      "Integrated DALL-E 3 image generation",
      "Advanced data analysis and web browsing",
      "Massive community of prompt templates",
      "Highly generative and flexible output",
    ],
    whySwitchReasons: [
      "Maximum flexibility and versatility",
      "Significant cost savings ($20/mo vs $49+)",
      "Better at complex, non-template based reasoning",
    ],
    bestFor: "Writers who want total control and don't need pre-built marketing templates.",
    compareUrl: "/compare/jasper-vs-chatgpt",
  },
  {
    rank: 2,
    name: "Claude",
    slug: "claude",
    url: "https://claude.ai",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free. Pro $20/mo",
    tagline: "Nuanced, human-like writing and deep analysis",
    description:
      "Claude, by Anthropic, is widely regarded as the best alternative for those who find AI writing too 'robotic'. It excels at maintaining a consistent, natural tone and has a massive context window that allows it to analyze entire brand guidelines or long manuscripts in a single prompt.",
    features: [
      "Exceptional human-like prose and nuance",
      "200K+ token context window",
      "Artifacts for real-time content collaboration",
      "Strong adherence to complex style guides",
      "Highly analytical and less prone to 'fluff'",
      "Superior editing and refinement capabilities",
    ],
    whySwitchReasons: [
      "Need writing that feels less like 'AI' and more human",
      "Need to process massive documents (books, reports)",
      "Preference for a more thoughtful, nuanced writing style",
    ],
    bestFor: "Content strategists, editors, and novelists who value quality over quantity.",
    compareUrl: "/compare/jasper-vs-claude",
  },
  {
    rank: 3,
    name: "Copy.ai",
    slug: "copy-ai",
    url: "https://copy.ai",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free. Pro $49/mo",
    tagline: "Enterprise-grade copywriting and workflow automation",
    description:
      "Copy.ai is Jasper's most direct competitor. It provides a similar template-driven experience but focuses more on 'OS' for GTM teams. It includes brand voice training, a knowledge base (Infobase), and powerful automation workflows that can turn a single brief into an entire marketing campaign.",
    features: [
      "90+ specialized copywriting templates",
      "Brand Voice and Infobase for consistency",
      "Workflow automation for repetitive tasks",
      "Seamless team collaboration and approval",
      "Strong focus on sales and marketing copy",
      "Multi-language support for global campaigns",
    ],
    whySwitchReasons: [
      "Need a direct Jasper alternative with a similar feature set",
      "Looking for better workflow automation (AI-driven tasks)",
      "Scaling marketing content across a large team",
    ],
    bestFor: "Marketing and sales teams who need high-volume, brand-consistent copy.",
    compareUrl: "/compare/jasper-vs-copy-ai",
  },
  {
    rank: 4,
    name: "Writesonic",
    slug: "writesonic",
    url: "https://writesonic.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free trial. Plans from $19/mo",
    tagline: "AI writing optimized for search and visibility",
    description:
      "Writesonic has evolved from a simple writer into an AI SEO powerhouse. It integrates real-time search data and AI-era SEO tracking, making it the best choice for bloggers and marketers whose primary goal is to rank on Google and other AI search engines.",
    features: [
      "AI-driven SEO optimization and tracking",
      "Real-time search-integrated content generation",
      "Brand monitoring across AI search engines",
      "Competitive intelligence features",
      "Fast, high-quality blog post generation",
      "Affordable entry-level pricing",
    ],
    whySwitchReasons: [
      "Primary goal is SEO and organic traffic growth",
      "Need an AI that understands current search trends",
      "Looking for a more affordable professional writer",
    ],
    bestFor: "SEO specialists and bloggers focusing on search visibility.",
    compareUrl: "/compare/jasper-vs-writesonic",
  },
  {
    rank: 5,
    name: "Rytr",
    slug: "rytr",
    url: "https://rytr.me",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free. Saver $9/mo",
    tagline: "The most affordable professional AI writer",
    description:
      "Rytr is the 'budget king' of AI writing. It provides a clean, simple interface with over 40 use cases and 30+ languages. While it lacks Jasper's enterprise complexity, it delivers 90% of the value for a fraction of the cost, making it perfect for solo entrepreneurs.",
    features: [
      "Extremely affordable pricing ($9/mo)",
      "40+ use cases covering all marketing needs",
      "30+ languages and 20+ custom tones",
      "Built-in plagiarism checker",
      "Simple, distraction-free UI",
      "Quick-start templates for social media",
    ],
    whySwitchReasons: [
      "Jasper is too expensive for a solo business",
      "Need a simple, no-fuss AI writer for basic copy",
      "Need a writer that supports a wide range of languages",
    ],
    bestFor: "Freelancers, solo-preneurs, and small business owners on a budget.",
    compareUrl: "/compare/jasper-vs-rytr",
  },
  {
    rank: 6,
    name: "HyperWrite",
    slug: "hyperwrite",
    url: "https://hyperwriteai.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free. Premium $19.99/mo",
    tagline: "A personal AI writing assistant that lives in your browser",
    description:
      "HyperWrite focuses on the 'assistant' experience. Rather than a standalone dashboard, it works everywhere you write via a powerful browser extension. Its TypeAhead feature completes your thoughts in real-time, making it feel more like a co-pilot than a generator.",
    features: [
      "Real-time TypeAhead autocomplete",
      "AutoWrite for instant full-draft generation",
      "Deeply integrated browser extension",
      "Personal AI that learns your writing style",
      "Flexible summarization and rewriting tools",
      "Seamlessly works across any website or app",
    ],
    whySwitchReasons: [
      "Hate switching between tabs and dashboards",
      "Want AI suggestions while typing in Gmail or LinkedIn",
      "Prefer a tool that assists your writing rather than replacing it",
    ],
    bestFor: "Individual writers who want an invisible, omnipresent AI co-pilot.",
    compareUrl: "/compare/jasper-vs-hyperwrite",
  },
  {
    rank: 7,
    name: "Sudowrite",
    slug: "sudowrite",
    url: "https://sudowrite.com",
    pricing: "Paid",
    pricingColor: "bg-purple-500/10 text-purple-400",
    freeTier: false,
    startingPrice: "Hobby $10/mo",
    tagline: "The gold standard for AI-powered fiction writing",
    description:
      "Sudowrite is for those who find Jasper too focused on 'marketing'. It is built specifically for novelists and screenwriters, with tools for world-building, character development, and plot structure. It understands narrative arcs in a way that marketing tools simply cannot.",
    features: [
      "Story Engine for complex plot development",
      "Character and world-building sensory tools",
      "Deep understanding of narrative structure",
      "Expand, rewrite, and describe functions",
      "Collaborative story-planning tools",
      "Specialized for creative prose and storytelling",
    ],
    whySwitchReasons: [
      "Writing a book or screenplay, not a sales page",
      "Need help with creative world-building and plot beats",
      "Jasper's marketing focus is irrelevant to your work",
    ],
    bestFor: "Novelists, screenwriters, and creative writers.",
    compareUrl: "/compare/jasper-vs-sudowrite",
  },
  {
    rank: 8,
    name: "Wordtune",
    slug: "wordtune",
    url: "https://wordtune.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free. Plus $9.99/mo",
    tagline: "AI rewriting for maximum clarity and impact",
    description:
      "Wordtune is not a content generator but a content refiner. It is the best alternative for those who have the ideas but struggle with the phrasing. It offers multiple ways to rephrase a single sentence, allowing you to tweak the tone and impact perfectly.",
    features: [
      "Best-in-class AI rewriting and paraphrasing",
      "Multiple tone options (casual, formal, professional)",
      "Smart expand and shorten tools",
      "Real-time suggestions as you write",
      "Lightweight browser extension",
      "Focus on clarity, brevity, and impact",
    ],
    whySwitchReasons: [
      "You have the drafts but need them to sound 'better'",
      "Want to refine tone without rewriting from scratch",
      "Need a tool that improves writing instead of generating it",
    ],
    bestFor: "Professionals who need to polish emails, reports, and articles.",
    compareUrl: "/compare/jasper-vs-wordtune",
  },
  {
    rank: 9,
    name: "QuillBot",
    slug: "quillbot",
    url: "https://quillbot.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free. Premium $8.33/mo (annual)",
    tagline: "The ultimate AI paraphraser and grammar tool",
    description:
      "QuillBot excels at taking existing text and transforming it. It is a powerhouse for academic and research writing, offering a combination of paraphrasing, grammar checking, and plagiarism detection that ensures your content is original and polished.",
    features: [
      "Sophisticated paraphrasing modes",
      "Integrated grammar and spell checker",
      "High-accuracy plagiarism detector",
      "AI-powered summarizer for long articles",
      "Citation generator for academic work",
      "Extremely affordable premium tier",
    ],
    whySwitchReasons: [
      "Need to rewrite content to avoid plagiarism",
      "Focus on academic or research-heavy writing",
      "Need a combination of paraphrasing and grammar tools",
    ],
    bestFor: "Students, researchers, and academic writers.",
    compareUrl: "/compare/jasper-vs-quillbot",
  },
  {
    rank: 10,
    name: "Grammarly",
    slug: "grammarly",
    url: "https://grammarly.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free. Premium $12/mo",
    tagline: "The world's most trusted AI writing assistant",
    description:
      "Grammarly is the essential companion for any writer. While Jasper creates the 'what', Grammarly perfects the 'how'. It provides real-time feedback on grammar, tone, and clarity, ensuring your professional communication is always error-free.",
    features: [
      "Industry-leading grammar and spell check",
      "Advanced tone detection and suggestions",
      "Plagiarism checker (Premium)",
      "Clarity and conciseness improvements",
      "Cross-platform integration (browser, desktop, mobile)",
      "Custom goals for different writing styles",
    ],
    whySwitchReasons: [
      "Want to ensure 100% error-free professional writing",
      "Need real-time feedback on tone and clarity",
      "Looking for a tool that polishes your writing automatically",
    ],
    bestFor: "Anyone who writes for a professional audience.",
    compareUrl: "/compare/jasper-vs-grammarly",
  },
  {
    rank: 11,
    name: "Notion AI",
    slug: "notion-ai",
    url: "https://notion.so",
    pricing: "Paid",
    pricingColor: "bg-purple-500/10 text-purple-400",
    freeTier: false,
    startingPrice: "$10/user/mo add-on",
    tagline: "Integrated AI within your workspace",
    description:
      "Notion AI is for those who want their writing tool and their knowledge base in the same place. It allows you to generate, summarize, and edit content directly within your Notion pages, eliminating the need to copy-paste between a writer and a doc.",
    features: [
      "Directly integrated into Notion workspace",
      "Summarize meeting notes and complex docs",
      "Extract action items from long texts",
      "Inline AI editing and brainstorming",
      "Translate content within the page",
      "Consistent formatting with Notion blocks",
    ],
    whySwitchReasons: [
      "You already use Notion for everything",
      "Hate context-switching between apps",
      "Want a simple AI add-on for your existing documents",
    ],
    bestFor: "Teams and individuals who live in the Notion ecosystem.",
    compareUrl: "/compare/jasper-vs-notion-ai",
  },
  {
    rank: 12,
    name: "Frase",
    slug: "frase",
    url: "https://frase.io",
    pricing: "Paid",
    pricingColor: "bg-purple-500/10 text-purple-400",
    freeTier: false,
    startingPrice: "Solo $15/mo",
    tagline: "AI content optimization for SEO dominance",
    description:
      "Frase is a specialized tool for SEO writers. It doesn't just write; it researches. By analyzing the top SERP results and extracting key questions, Frase helps you create content briefs and articles that are mathematically designed to rank on Google.",
    features: [
      "Automated SERP analysis and research",
      "Content brief generator from top competitors",
      "AI content scoring against search results",
      "Question extraction from 'People Also Ask'",
      "Integrated outline builder",
      "Built-in AI writing and optimization",
    ],
    whySwitchReasons: [
      "Your primary goal is ranking on page 1 of Google",
      "Need a tool that combines research + writing",
      "Looking for a data-driven approach to content creation",
    ],
    bestFor: "SEO agencies and professional content marketers.",
    compareUrl: "/compare/jasper-vs-frase",
  },
];

const faqs = [
  {
    question: "What is the best free alternative to Jasper AI?",
    answer:
      "The best free alternatives to Jasper include ChatGPT and Claude. ChatGPT offers the most versatility and raw power, while Claude provides a more human-like writing style. Both have generous free tiers that can handle most basic copywriting and content generation tasks without any cost.",
  },
  {
    question: "Is there a cheaper alternative to Jasper AI for solo creators?",
    answer:
      "Yes, Rytr is an exceptional budget-friendly alternative, starting at just $9/mo. For those who prefer a bit more power, ChatGPT Plus and Claude Pro both offer professional-grade AI for $20/mo, which is significantly cheaper than Jasper's starting professional plans.",
  },
  {
    question: "Which Jasper alternative is best for SEO and blogging?",
    answer:
      "Writesonic and Frase are the top choices for SEO. Writesonic focuses on real-time search data and visibility, while Frase is designed for deep SERP analysis and content optimization. Both provide better SEO-specific tools than Jasper's general templates.",
  },
  {
    question: "Can I use ChatGPT instead of Jasper for marketing?",
    answer:
      "Absolutely. While you lose Jasper's pre-built templates and brand voice manager, ChatGPT is more powerful. By using 'Custom Instructions' or creating your own 'Custom GPTs', you can replicate Jasper's brand voice and workflow at a lower price point.",
  },
  {
    question: "What is the best alternative for creative fiction writing?",
    answer:
      "Sudowrite is the clear winner for creative writing. Unlike Jasper, which is built for marketing, Sudowrite is designed specifically for novelists and screenwriters, offering tools for plot beats, sensory descriptions, and world-building.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Best Jasper AI Alternatives (${year})`,
    description: `Top 12 alternatives to Jasper AI for copywriting and content creation.`,
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
      { "@type": "ListItem", position: 3, name: "Jasper Alternatives", item: "https://aisotools.com/alternatives/jasper" },
    ],
  },
];

export default function JasperAlternativesPage() {
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
          <span className="text-gray-300">Jasper Alternatives</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-xl bg-orange-600/20 flex items-center justify-center text-2xl font-bold text-orange-400 mx-auto mb-6">
            J
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Best Jasper AI Alternatives in {year}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Compare the {alternatives.length} best alternatives to Jasper AI for professional copywriting, SEO content, and creative writing.
          </p>
          <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">
            <span className="bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-sm font-medium">
              Jasper: $49-69/mo
            </span>
            <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
              ✍️ AI Writing & Copywriting
            </span>
          </div>
        </div>

        {/* Why Switch */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Why Look for Jasper AI Alternatives?</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Jasper is a powerhouse for marketing teams, but it&apos;t always the right fit. Whether you find the pricing too steep for a solo creator, the writing style too formulaic, or you need specialized tools for SEO or fiction, there are alternatives that offer better value, more nuance, or deeper specialization.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { reason: "💰 Cost Efficiency", detail: "Jasper is expensive ($49+). Tools like Rytr or ChatGPT Plus offer professional-grade results for a fraction of the cost." },
              { reason: "✍️ Natural Prose", detail: "Some users find Jasper's templates too 'markety'. Claude provides a more human-like, nuanced writing style for high-end content." },
              { reason: "🔍 SEO Specialization", detail: "If ranking on Google is your primary goal, Writesonic and Frase provide deeper SERP analysis and optimization tools." },
              { reason: "🎨 Creative Freedom", detail: "Jasper is built for sales. Sudowrite is built for storytelling, offering narrative tools that Jasper simply doesn't have." },
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
          <h2 className="text-2xl font-bold mb-6">Quick Comparison: Jasper vs Alternatives</h2>
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
          <h2 className="text-2xl font-bold mb-6">Detailed Look at Each Jasper Alternative</h2>
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
                  <h4 className="font-semibold text-blue-400 mb-2">Why choose {alt.name} over Jasper?</h4>
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
            <Link href="/tool/jasper" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">📋 Jasper AI Review</h3>
              <p className="text-gray-400 text-sm">Full review with features, pros & cons</p>
            </Link>
            <Link href="/pricing/jasper" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">💰 Jasper Pricing</h3>
              <p className="text-gray-400 text-sm">Detailed pricing plans and comparison</p>
            </Link>
            <Link href="/category/writing" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">✍️ AI Writing Tools</h3>
              <p className="text-gray-400 text-sm">Browse all AI writing tools</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
