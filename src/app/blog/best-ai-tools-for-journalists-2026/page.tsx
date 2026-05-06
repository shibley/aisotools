import { tools } from "@/data/tools";
import { getAffiliateUrl } from "@/data/affiliate-links";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Tools for Journalists in 2026: Research, Write & Verify Faster",
  description: "Discover the best AI tools for journalists in 2026. From AI research with Perplexity to transcription with Otter.ai and writing with Claude — report faster without sacrificing accuracy.",
  keywords: ["best ai tools for journalists", "ai tools for journalism", "ai journalism tools 2026", "ai newsroom tools", "ai fact checking tools"],
  openGraph: {
    title: "Best AI Tools for Journalists in 2026",
    description: "Guide to AI tools for journalists. Compare Perplexity, Otter.ai, Claude, and more.",
    url: "https://aisotools.com/blog/best-ai-tools-for-journalists-2026",
    type: "article",
  },
  alternates: { canonical: "https://aisotools.com/blog/best-ai-tools-for-journalists-2026" },
};

const toolCategories = [
  { category: "Research & Source Discovery", icon: "🔍", description: "AI tools that help journalists find sources, background information, and story angles faster", tools: [
    { name: "Perplexity", slug: "perplexity", description: "The journalist's research accelerator. Perplexity searches the web in real time and cites every source — essential for journalism where attribution matters. Use it to background sources, find related stories, research organizations, and understand complex topics quickly.", pricing: "Freemium", pricingDetails: "Free, Pro $20/mo", strengths: ["Every answer includes source citations", "Real-time web access for breaking news context", "Deep research mode (Pro) for comprehensive reports", "Source document analysis", "Organization and person background research", "Topic timeline construction"], bestFor: "Pre-interview research, background on sources, and understanding complex beats quickly", freeFeatures: ["Unlimited queries", "Source citations", "Web access"], rating: 4.7 },
    { name: "Claude", slug: "claude", description: "Journalists use Claude to analyze documents, summarize lengthy reports, identify patterns in large datasets, and prepare interview questions. Its 200K context window can process entire legal filings, government reports, or financial disclosures.", pricing: "Freemium", pricingDetails: "Free tier, Pro $20/mo", strengths: ["200K context — processes full legal filings and reports", "Document analysis and pattern identification", "Interview question preparation", "Data summary from complex documents", "Timeline construction from chronological events", "Quote selection from long transcripts"], bestFor: "Document-heavy investigative reporting, data analysis, and interview preparation", freeFeatures: ["Claude Sonnet access", "File uploads", "Long context"], rating: 4.8 },
  ]},
  { category: "Transcription & Audio", icon: "🎙️", description: "AI transcription tools for interviews, press conferences, and audio sources", tools: [
    { name: "Otter.ai", slug: "otter-ai", description: "AI transcription for journalist interviews, press briefings, and source calls. Identifies speakers, timestamps quotes, and creates searchable archives of all recorded conversations — essential for accurate direct quotes.", pricing: "Freemium", pricingDetails: "Free (300 min/mo), Pro $8.33/mo, Business $20/mo", strengths: ["Accurate speaker-identified transcripts", "Timestamped quotes for verification", "Searchable interview archive", "Real-time transcription during interviews", "Zoom, Teams, Google Meet integration", "Export to Word with timestamps"], bestFor: "Interview transcription, press briefing documentation, and maintaining accurate quote archives", freeFeatures: ["300 minutes/month", "Speaker identification", "Basic search"], rating: 4.6 },
    { name: "Whisper (OpenAI)", slug: "whisper", description: "Open-source AI transcription model that runs locally or via API. Excellent for transcribing audio files in 99 languages with high accuracy — useful for international reporting and archival audio research.", pricing: "Free (Open Source) / API Paid", pricingDetails: "Free to run locally, API $0.006/min", strengths: ["High accuracy across 99 languages", "Runs locally for sensitive sources", "No data sent to third parties", "Archival audio transcription", "Accent and dialect handling", "Batch processing of audio files"], bestFor: "Journalists handling sensitive sources, multilingual reporting, and archival audio research", freeFeatures: ["Full model open source", "Local deployment", "All languages"], rating: 4.5 },
  ]},
  { category: "Writing & Editing", icon: "✍️", description: "AI tools that accelerate writing while maintaining journalistic voice and standards", tools: [
    { name: "Grammarly", slug: "grammarly", description: "Writing assistant that catches grammar errors, improves clarity, and maintains consistent style. Used by journalists to polish stories quickly before deadlines — especially useful for catching passive voice, wordy constructions, and inconsistencies.", pricing: "Freemium", pricingDetails: "Free tier, Premium $12/mo, Business $15/mo", strengths: ["Real-time grammar and clarity checking", "Passive voice detection", "Readability scoring", "Consistency checking (hyphenation, capitalization)", "Works in all writing environments", "Tone suggestions"], bestFor: "Deadline-pressed journalists who need fast, reliable copy editing before submission", freeFeatures: ["Grammar checking", "Basic clarity", "Browser extension"], rating: 4.5 },
    { name: "ChatGPT", slug: "chatgpt", description: "Journalists use ChatGPT for story ideation, headline brainstorming, social media thread creation, explainer article structures, and turning complex data into accessible narratives. Never for fact generation.", pricing: "Freemium", pricingDetails: "Free tier, Plus $20/mo", strengths: ["Headline and lede variations", "Story angle brainstorming", "Social media thread writing from article", "Explainer structure creation", "Data visualization narrative writing", "FOIA request letter drafting"], bestFor: "Story ideation, structure planning, social media repurposing, and FOIA request writing", freeFeatures: ["GPT-4o mini", "Unlimited ideas", "File uploads"], rating: 4.5 },
  ]},
  { category: "Data Journalism & Verification", icon: "📊", description: "AI tools for data analysis, visualization, and source verification", tools: [
    { name: "Julius AI", slug: "julius-ai", description: "AI data analyst journalists use to analyze government datasets, election data, financial disclosures, and public records. Ask questions in plain English and get charts, statistics, and interpretations with reproducible code.", pricing: "Freemium", pricingDetails: "Free (10 msgs/mo), Basic $20/mo", strengths: ["Natural language analysis of public datasets", "Automatic chart generation from data", "Statistical pattern identification", "Campaign finance and public records analysis", "Census and demographic data analysis", "Python code export for reproducibility"], bestFor: "Data journalists who need to quickly analyze and visualize public datasets without advanced coding skills", freeFeatures: ["10 messages/month", "Basic analysis", "Chart generation"], rating: 4.5 },
  ]},
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

export default function BestAIToolsForJournalists2026() {
  const totalTools = toolCategories.reduce((sum, cat) => sum + cat.tools.length, 0);
  return (
    <article className="mx-auto max-w-4xl px-4 py-8">
      <header className="mb-12">
        <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/blog" className="hover:text-blue-600">Blog</Link><span>→</span><span>AI Tools for Journalists</span>
        </div>
        <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">Best AI Tools for Journalists in 2026</h1>
        <p className="mb-6 text-xl leading-relaxed text-gray-600">{totalTools} AI tools that make journalists faster and more thorough — from source research and transcription to data analysis and writing polish.</p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          <span>📅 Updated May 2026</span><span>•</span><span>⏱️ 14 min read</span><span>•</span><span>📰 {totalTools} tools reviewed</span>
        </div>
      </header>
      <section className="mb-12 rounded-lg bg-blue-50 p-6">
        <h2 className="mb-3 text-2xl font-bold text-gray-900">AI and Journalism: Acceleration, Not Replacement</h2>
        <p className="mb-4 leading-relaxed text-gray-700">The best journalists in 2026 use AI to handle research legwork and transcription so they can focus on what AI cannot do: source relationships, editorial judgment, on-the-ground reporting, and the human understanding that makes stories matter.</p>
        <p className="leading-relaxed text-gray-700"><strong>Important:</strong> AI tools should never be used to generate facts, quotes, or information for publication. Every AI-assisted output must be independently verified. Use AI for research, organization, and writing efficiency — never as a primary source.</p>
      </section>
      <nav className="mb-12 rounded-lg border border-gray-200 bg-gray-50 p-6">
        <h2 className="mb-4 text-lg font-bold text-gray-900">Jump to Category</h2>
        <div className="grid gap-2 sm:grid-cols-2">
          {toolCategories.map((cat) => <a key={cat.category} href={`#${cat.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="flex items-center gap-2 rounded-md p-2 text-sm transition-colors hover:bg-white hover:shadow-sm"><span>{cat.icon}</span><span className="text-blue-600 hover:underline">{cat.category}</span><span className="text-gray-400">({cat.tools.length})</span></a>)}
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
                      <ul className="space-y-1">{tool.strengths.map((s: string) => <li key={s} className="flex items-start gap-2 text-sm text-gray-700"><span className="mt-0.5 text-green-500">✓</span>{s}</li>)}</ul>
                    </div>
                    <div>
                      <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">Free Features</h4>
                      <ul className="space-y-1">{tool.freeFeatures.map((f: string) => <li key={f} className="flex items-start gap-2 text-sm text-gray-700"><span className="mt-0.5 text-blue-500">★</span>{f}</li>)}</ul>
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
            <h3 className="mb-2 text-xl font-semibold text-gray-900">Can AI write news articles?</h3>
            <p className="leading-relaxed text-gray-700">AI can draft structured content from data (earnings reports, sports scores, weather) — some outlets use AI for these commodity articles. For real journalism requiring reporting, source development, and editorial judgment, AI is a research and efficiency tool, not a reporter. Fabrication risk, source protection concerns, and accountability mean AI cannot replace journalists in meaningful coverage.</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">What AI tool is best for journalist transcription?</h3>
            <p className="leading-relaxed text-gray-700">Otter.ai is best for live interviews and convenience (integrates with Zoom, auto-identifies speakers). OpenAI's Whisper (via local deployment) is best for sensitive sources or multilingual reporting where you don't want audio going to third-party servers. Both produce accurate, timestamped transcripts suitable for quote verification.</p>
          </div>
        </div>
      </section>
      <section className="rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 p-8 text-white">
        <h2 className="mb-4 text-3xl font-bold">Investigate More, Transcribe Less</h2>
        <p className="mb-6 text-lg leading-relaxed text-gray-300">AI handles the research legwork so you can focus on the judgment, relationships, and storytelling that make great journalism.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/tools" className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-gray-800 transition-colors hover:bg-gray-100">Explore All AI Tools →</Link>
          <Link href="/blog/best-ai-writing-tools-comparison-2026" className="inline-flex items-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-gray-800">Best AI Writing Tools →</Link>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Best AI Tools for Journalists in 2026", description: "Guide to AI journalism tools including Perplexity, Claude, Otter.ai, and more.", author: { "@type": "Organization", name: "AISOTools" }, publisher: { "@type": "Organization", name: "AISOTools", logo: { "@type": "ImageObject", url: "https://aisotools.com/logo.png" } }, datePublished: "2026-05-05", dateModified: "2026-05-05", mainEntityOfPage: { "@type": "WebPage", "@id": "https://aisotools.com/blog/best-ai-tools-for-journalists-2026" } })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "Can AI write news articles?", acceptedAnswer: { "@type": "Answer", text: "AI can generate structured commodity content from data but cannot replace reporting, source development, and editorial judgment. AI is a research and efficiency tool for journalists, not a reporter." } }] })}} />
    </article>
  );
}
