import { tools } from "@/data/tools";
import { getAffiliateUrl } from "@/data/affiliate-links";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Tools for Copywriters in 2026: Write Faster, Convert More",
  description: "Discover the best AI tools for copywriters in 2026. From AI writing with Claude and Jasper to ad creative tools and SEO copy — write higher-converting copy in less time.",
  keywords: ["best ai tools for copywriters", "ai copywriting tools", "ai for copywriting", "ai ad copy generator", "copywriting ai tools 2026"],
  openGraph: {
    title: "Best AI Tools for Copywriters in 2026",
    description: "The ultimate guide to AI tools for copywriters. Compare Claude, Jasper, Copy.ai, and more.",
    url: "https://aisotools.com/blog/best-ai-tools-for-copywriters-2026",
    type: "article",
  },
  alternates: { canonical: "https://aisotools.com/blog/best-ai-tools-for-copywriters-2026" },
};

interface CopyTool { name: string; slug: string; description: string; pricing: string; pricingDetails: string; strengths: string[]; bestFor: string; freeFeatures: string[]; rating: number; }
interface CopyCategory { category: string; icon: string; description: string; tools: CopyTool[]; }

const toolCategories: CopyCategory[] = [
  {
    category: "Long-Form Copy & Content",
    icon: "✍️",
    description: "AI writing assistants for sales pages, email sequences, blog content, and long-form copy",
    tools: [
      {
        name: "Claude",
        slug: "claude",
        description: "The copywriter's secret weapon. Claude writes in nuanced, human-sounding voices and excels at long-form sales copy, email sequences, brand storytelling, and ad scripts. Best AI for tone consistency and avoiding generic outputs.",
        pricing: "Freemium",
        pricingDetails: "Free tier, Pro $20/mo, Team $30/mo",
        strengths: ["Most human-sounding AI writing", "Long-form sales page writing", "Email sequence drafting (5-7 email flows)", "Brand voice matching from examples", "Story-driven copywriting", "Avoids clichés better than competitors"],
        bestFor: "Copywriters who need nuanced, brand-voice-matched copy that doesn't sound like AI",
        freeFeatures: ["Claude Sonnet access", "Long context window", "Projects for brand voice storage"],
        rating: 4.8,
      },
      {
        name: "Jasper",
        slug: "jasper",
        description: "Enterprise AI writing platform purpose-built for marketing teams. Jasper's brand voice feature learns your company's tone, and its 50+ templates cover every copywriting use case — from Google Ads to white papers.",
        pricing: "Paid",
        pricingDetails: "Creator $39/mo, Pro $59/mo, Business custom",
        strengths: ["Brand voice learning and consistency", "50+ copywriting templates", "SEO mode with Surfer integration", "Team collaboration and approval workflows", "Campaign planning workspace", "Product description generator (bulk)"],
        bestFor: "In-house copywriters and agencies managing multiple brand voices with team workflows",
        freeFeatures: ["7-day free trial", "All templates access during trial"],
        rating: 4.5,
      },
      {
        name: "Copy.ai",
        slug: "copy-ai",
        description: "AI copywriting tool with a GTM (Go-to-Market) AI platform for sales and marketing teams. Excellent for outbound sequences, social copy, product descriptions, and conversion-focused short-form copy.",
        pricing: "Freemium",
        pricingDetails: "Free (2,000 words/mo), Pro $36/mo, Team $186/mo",
        strengths: ["GTM AI platform for sales + marketing alignment", "Outbound email sequence generation", "Product description bulk generation", "Social media copy across platforms", "Sales call talk tracks", "CRM integrations (Salesforce, HubSpot)"],
        bestFor: "Sales-focused copywriters writing outbound sequences, cold email, and GTM content",
        freeFeatures: ["2,000 words/month", "90+ templates", "Basic tools"],
        rating: 4.4,
      },
    ],
  },
  {
    category: "Ad Copy & Performance Marketing",
    icon: "📢",
    description: "AI tools specialized for paid advertising copy that converts",
    tools: [
      {
        name: "AdCreative.ai",
        slug: "adcreative-ai",
        description: "AI-powered ad creative platform that generates complete ad sets — headlines, body copy, and visuals — optimized for performance. Trained on top-performing ad creative data across industries.",
        pricing: "Paid",
        pricingDetails: "Starter $21/mo, Premium $141/mo, Ultimate $299/mo",
        strengths: ["Ad creative trained on performance data", "Complete ad sets (copy + visual) in one click", "A/B testing variation generation", "Platform-specific copy (Facebook, Google, LinkedIn)", "Performance score prediction", "Brand kit integration"],
        bestFor: "Performance marketers and copywriters who write paid advertising copy and need rapid iteration",
        freeFeatures: ["7-day free trial", "10 credits on signup"],
        rating: 4.5,
      },
      {
        name: "ChatGPT",
        slug: "chatgpt",
        description: "Copywriters use ChatGPT to generate dozens of headline variations, test different angles, write AIDA frameworks, create urgency-driven CTAs, and repurpose one piece of copy across multiple platforms.",
        pricing: "Freemium",
        pricingDetails: "Free tier, Plus $20/mo",
        strengths: ["Rapid headline and hook generation (50 variations in minutes)", "Framework-based copy (AIDA, PAS, BAB)", "CTA variation testing", "Platform repurposing (blog → email → social → ad)", "Objection-handling copy", "A/B test copy variants"],
        bestFor: "Copywriters who need rapid variation generation for testing and repurposing across channels",
        freeFeatures: ["GPT-4o mini", "Unlimited questions", "Custom instructions"],
        rating: 4.6,
      },
    ],
  },
  {
    category: "SEO & Content Optimization",
    icon: "🔍",
    description: "AI tools that combine copywriting with SEO to rank and convert",
    tools: [
      {
        name: "Surfer SEO",
        slug: "surfer-seo",
        description: "SEO content optimization platform with AI writing. Analyzes the top 10 ranking pages for your keyword and tells you exactly what to include — then AI writes copy optimized to rank. Jasper and Surfer integrate natively.",
        pricing: "Paid",
        pricingDetails: "Essential $89/mo, Scale $129/mo, Scale AI $219/mo",
        strengths: ["Content score vs. top competitors", "AI article outline generation from SERP data", "NLP keyword recommendations", "Content editor with real-time scoring", "Internal linking suggestions", "SERP analysis for topic coverage"],
        bestFor: "Copywriters writing blog and landing page content that needs to rank in Google",
        freeFeatures: ["Free Chrome extension", "Keyword research trial"],
        rating: 4.6,
      },
      {
        name: "Grammarly",
        slug: "grammarly",
        description: "Writing assistant that elevates copy quality — improving clarity, engagement, and tone. Grammarly Business learns your brand voice and ensures consistency across all team copy. Essential for polishing AI-generated first drafts.",
        pricing: "Freemium",
        pricingDetails: "Free tier, Premium $12/mo, Business $15/mo per user",
        strengths: ["Real-time grammar and clarity checks", "Tone adjustment for brand consistency", "Readability scoring", "Works in all writing environments (browser, Word, Google Docs)", "Plagiarism detection", "Brand voice guide (Business plan)"],
        bestFor: "Copywriters who need to polish AI drafts and ensure brand voice consistency across outputs",
        freeFeatures: ["Grammar checking", "Basic tone detection", "Browser extension"],
        rating: 4.5,
      },
    ],
  },
  {
    category: "Research & Brief Creation",
    icon: "🔎",
    description: "AI tools that help copywriters research topics, understand audiences, and build briefs faster",
    tools: [
      {
        name: "Perplexity",
        slug: "perplexity",
        description: "AI research tool copywriters use to understand product categories, find customer language (voice of customer), research competitors' messaging, and gather stats for persuasive copy — all with sources.",
        pricing: "Freemium",
        pricingDetails: "Free, Pro $20/mo",
        strengths: ["Customer language research with sources", "Competitor messaging analysis", "Statistic and data sourcing for copy", "Industry trend identification", "Audience pain point research", "Product category research"],
        bestFor: "Pre-writing research, understanding customer language, and gathering credibility-building data points",
        freeFeatures: ["Unlimited queries", "Source citations", "Pro search (2/day)"],
        rating: 4.5,
      },
    ],
  },
];

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.3;
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => <span key={i} className="text-lg">{i < fullStars ? "⭐" : i === fullStars && hasHalf ? "⭐" : "☆"}</span>)}
      <span className="ml-1 text-sm font-medium text-gray-600">{rating}/5</span>
    </div>
  );
}

export default function BestAIToolsForCopywriters2026() {
  const totalTools = toolCategories.reduce((sum, cat) => sum + cat.tools.length, 0);
  return (
    <article className="mx-auto max-w-4xl px-4 py-8">
      <header className="mb-12">
        <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/blog" className="hover:text-blue-600">Blog</Link><span>→</span><span>AI Tools for Copywriters</span>
        </div>
        <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">Best AI Tools for Copywriters in 2026</h1>
        <p className="mb-6 text-xl leading-relaxed text-gray-600">{totalTools} AI tools that make copywriters more productive — from sales pages and email sequences to ad copy and SEO content.</p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          <span>📅 Updated May 2026</span><span>•</span><span>⏱️ 14 min read</span><span>•</span><span>✍️ {totalTools} tools reviewed</span>
        </div>
      </header>
      <section className="mb-12 rounded-lg bg-orange-50 p-6">
        <h2 className="mb-3 text-2xl font-bold text-gray-900">How Smart Copywriters Use AI in 2026</h2>
        <p className="mb-4 leading-relaxed text-gray-700">The best copywriters aren't threatened by AI — they're using it to <strong>3-5x their output</strong>. AI handles first drafts, variation generation, and research. Copywriters handle strategy, voice, and the nuanced human understanding that makes copy convert.</p>
        <p className="leading-relaxed text-gray-700">The winning approach: use AI to generate 10 angles in 5 minutes, pick the best 2, refine with your expertise. You go from staring at a blank page to editing strong concepts — the part of copywriting that's actually skilled work.</p>
      </section>
      <nav className="mb-12 rounded-lg border border-gray-200 bg-gray-50 p-6">
        <h2 className="mb-4 text-lg font-bold text-gray-900">Jump to Category</h2>
        <div className="grid gap-2 sm:grid-cols-2">
          {toolCategories.map((cat) => (
            <a key={cat.category} href={`#${cat.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="flex items-center gap-2 rounded-md p-2 text-sm transition-colors hover:bg-white hover:shadow-sm">
              <span>{cat.icon}</span><span className="text-blue-600 hover:underline">{cat.category}</span><span className="text-gray-400">({cat.tools.length})</span>
            </a>
          ))}
        </div>
      </nav>
      {toolCategories.map((category, catIndex) => (
        <section key={category.category} id={category.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")} className="mb-16">
          <div className="mb-8">
            <h2 className="mb-2 text-3xl font-bold text-gray-900"><span className="mr-2">{category.icon}</span>{category.category}</h2>
            <p className="text-lg text-gray-600">{category.description}</p>
          </div>
          <div className="space-y-8">
            {category.tools.map((tool, toolIndex) => {
              const globalIndex = toolCategories.slice(0, catIndex).reduce((sum, c) => sum + c.tools.length, 0) + toolIndex + 1;
              const toolData = tools.find((t) => t.slug === tool.slug || t.name.toLowerCase() === tool.name.toLowerCase());
              const affiliateUrl = getAffiliateUrl(tool.slug) || toolData?.affiliateUrl;
              const toolUrl = toolData ? `/tool/${toolData.slug}` : `/tools?q=${encodeURIComponent(tool.name)}`;
              return (
                <div key={tool.name} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="mb-1 flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">{globalIndex}</span>
                        <h3 className="text-2xl font-bold text-gray-900"><Link href={toolUrl} className="hover:text-blue-600">{tool.name}</Link></h3>
                      </div>
                      <StarRating rating={tool.rating} />
                    </div>
                    <div className="text-right">
                      <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">{tool.pricing}</span>
                      <p className="mt-1 text-xs text-gray-500">{tool.pricingDetails}</p>
                    </div>
                  </div>
                  <p className="mb-4 leading-relaxed text-gray-700">{tool.description}</p>
                  <div className="mb-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">Key Strengths</h4>
                      <ul className="space-y-1">{tool.strengths.map((s) => <li key={s} className="flex items-start gap-2 text-sm text-gray-700"><span className="mt-0.5 text-green-500">✓</span>{s}</li>)}</ul>
                    </div>
                    <div>
                      <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">Free Features</h4>
                      <ul className="space-y-1">{tool.freeFeatures.map((f) => <li key={f} className="flex items-start gap-2 text-sm text-gray-700"><span className="mt-0.5 text-blue-500">★</span>{f}</li>)}</ul>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 border-t border-gray-100 pt-4">
                    <span className="text-sm text-gray-500"><strong>Best for:</strong> {tool.bestFor}</span>
                    <div className="ml-auto flex gap-2">
                      {affiliateUrl && <a href={affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">Try {tool.name} →</a>}
                      <Link href={toolUrl} className="inline-flex items-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">Full Review</Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-5">
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">Will AI replace copywriters?</h3>
            <p className="leading-relaxed text-gray-700">AI generates words, but copywriting is about understanding psychology, strategy, and persuasion. AI can write 10,000 words — it takes a copywriter to choose the 100 that convert. The copywriters most at risk are those writing generic commodity content; those with specialized expertise and strategic thinking will remain in demand.</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">What is the best AI for writing sales copy?</h3>
            <p className="leading-relaxed text-gray-700">Claude is the most human-sounding for long-form sales pages and email sequences. ChatGPT is fastest for generating multiple short-form variations to test. Jasper is best if you need consistent brand voice across a large team. Start with Claude for quality, ChatGPT for speed.</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">How do copywriters use AI without making copy sound robotic?</h3>
            <p className="leading-relaxed text-gray-700">The key is treating AI output as a first draft, not a final product. Give AI examples of your best-converting copy and ask it to write in that style. Then edit heavily — add specific customer language, cut generic phrases, inject personality and specificity. The final copy should sound nothing like raw AI output.</p>
          </div>
        </div>
      </section>
      <section className="rounded-lg bg-gradient-to-r from-orange-500 to-red-600 p-8 text-white">
        <h2 className="mb-4 text-3xl font-bold">Write Copy That Converts</h2>
        <p className="mb-6 text-lg leading-relaxed text-orange-50">AI handles the first draft. You handle the strategy and persuasion that turns readers into buyers.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/tools" className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-orange-600 transition-colors hover:bg-gray-100">Explore All AI Tools →</Link>
          <Link href="/blog/best-ai-writing-tools-comparison-2026" className="inline-flex items-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-orange-600">Best AI Writing Tools →</Link>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Best AI Tools for Copywriters in 2026", description: "Guide to AI copywriting tools including Claude, Jasper, Copy.ai, AdCreative.ai, and more.", author: { "@type": "Organization", name: "AISOTools" }, publisher: { "@type": "Organization", name: "AISOTools", logo: { "@type": "ImageObject", url: "https://aisotools.com/logo.png" } }, datePublished: "2026-05-05", dateModified: "2026-05-05", mainEntityOfPage: { "@type": "WebPage", "@id": "https://aisotools.com/blog/best-ai-tools-for-copywriters-2026" } })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "Will AI replace copywriters?", acceptedAnswer: { "@type": "Answer", text: "AI generates words, but copywriting requires psychology, strategy, and persuasion expertise that AI cannot replicate. Specialized copywriters with strategic thinking remain in high demand." } }, { "@type": "Question", name: "What is the best AI for writing sales copy?", acceptedAnswer: { "@type": "Answer", text: "Claude is best for human-sounding long-form sales pages. ChatGPT is fastest for multiple short-form variations. Jasper for brand voice consistency across teams." } }] })}} />
    </article>
  );
}
