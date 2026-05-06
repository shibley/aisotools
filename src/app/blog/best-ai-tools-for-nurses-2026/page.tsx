import { tools } from "@/data/tools";
import { getAffiliateUrl } from "@/data/affiliate-links";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Tools for Nurses in 2026: Documentation, Learning & Care",
  description: "Discover the best AI tools for nurses in 2026. From AI clinical documentation to medical education — reduce charting time, study smarter, and improve patient communication.",
  keywords: ["best ai tools for nurses", "ai tools for nurses", "ai clinical documentation", "ai nursing tools 2026", "ai for healthcare nursing"],
  openGraph: {
    title: "Best AI Tools for Nurses in 2026",
    description: "Guide to AI tools for nurses. Compare AI documentation tools, medical reference apps, and education platforms.",
    url: "https://aisotools.com/blog/best-ai-tools-for-nurses-2026",
    type: "article",
  },
  alternates: { canonical: "https://aisotools.com/blog/best-ai-tools-for-nurses-2026" },
};

const toolCategories = [
  {
    category: "Clinical Documentation",
    icon: "📋",
    description: "AI tools that reduce charting time and improve documentation accuracy",
    tools: [
      { name: "Nuance DAX", slug: "nuance-dax", description: "Microsoft's AI clinical documentation tool (Dragon Ambient eXperience). Listens to patient encounters and automatically generates clinical notes, reducing documentation time by up to 50% and reducing after-hours charting.", pricing: "Paid (Enterprise)", pricingDetails: "Enterprise licensing through health systems; contact for pricing", strengths: ["Real-time ambient note capture", "EHR integration (Epic, Cerner, etc.)", "50% reduction in documentation time", "Clinical accuracy review workflow", "Specialty-specific templates", "Reduces after-shift charting burden"], bestFor: "Nurses and clinicians in health systems using Epic, Cerner, or other major EHRs", freeFeatures: ["Demo available", "Pilot program for qualifying health systems"], rating: 4.7 },
      { name: "ChatGPT", slug: "chatgpt", description: "Nurses use ChatGPT for drafting patient education materials, care plan components, shift handoff documentation, and professional communication — with important caveats about never inputting patient-identifiable information.", pricing: "Freemium", pricingDetails: "Free tier, Plus $20/mo", strengths: ["Patient education materials in plain language", "Discharge instruction drafting", "Shift handoff note structure", "Clinical concept explanations", "Policy and protocol summaries", "Professional email drafting"], bestFor: "Creating patient education content and professional nursing documentation (de-identified)", freeFeatures: ["GPT-4o mini", "Unlimited use", "File uploads"], rating: 4.5 },
    ],
  },
  {
    category: "Clinical Reference & Decision Support",
    icon: "🏥",
    description: "AI-enhanced reference tools for medication information, drug interactions, and clinical decision support",
    tools: [
      { name: "Epocrates", slug: "epocrates", description: "Clinical decision support app used by over 1 million healthcare providers. Provides drug information, interaction checking, dosing calculators, and clinical guidelines — now enhanced with AI for faster natural language queries.", pricing: "Freemium", pricingDetails: "Free basic, Plus $16.99/mo with AI features", strengths: ["Drug dosing and interaction checks", "Natural language clinical queries", "Dosing calculators (renal adjustment, peds)", "Clinical practice guidelines", "ICD-10 coding assistance", "Offline access for low-signal areas"], bestFor: "Bedside clinical reference for medication verification, dosing, and interaction checking", freeFeatures: ["Basic drug database", "Interaction checker", "Pill ID tool"], rating: 4.6 },
      { name: "Perplexity", slug: "perplexity", description: "AI search with citations for clinical evidence questions, nursing research, and evidence-based practice queries. Useful for quickly finding the evidence behind clinical decisions with source links.", pricing: "Freemium", pricingDetails: "Free, Pro $20/mo", strengths: ["Evidence-based practice research", "Clinical guideline summaries with sources", "Nursing research topic exploration", "Continuing education research", "Policy and regulation lookups", "Quick clinical question answers"], bestFor: "Evidence-based practice research and continuing education outside the clinical setting", freeFeatures: ["Unlimited queries", "Source citations", "Web access"], rating: 4.4 },
    ],
  },
  {
    category: "Nursing Education & NCLEX Prep",
    icon: "📚",
    description: "AI tools that help nursing students pass NCLEX and support continuing education",
    tools: [
      { name: "Claude", slug: "claude", description: "Nursing students and educators use Claude to create NCLEX-style practice questions, explain complex pathophysiology, build study guides for pharmacology, and create mnemonics for clinical concepts.", pricing: "Freemium", pricingDetails: "Free tier, Pro $20/mo", strengths: ["NCLEX-style question generation by topic", "Pathophysiology explanations with clinical application", "Drug class mnemonics", "Care plan templates and examples", "Nursing theory summaries", "Critical thinking scenario development"], bestFor: "Nursing students studying for NCLEX and nurses building CEU educational materials", freeFeatures: ["Claude Sonnet access", "Long context for complex topics", "Projects for study organization"], rating: 4.7 },
      { name: "Osmosis", slug: "osmosis", description: "Medical education platform with AI-enhanced content for nursing students. Visual learning approach with illustrated concepts, spaced repetition flashcards, and NCLEX prep questions targeting nursing-specific content.", pricing: "Freemium", pricingDetails: "Free basic, Prime $35/mo, institutional plans", strengths: ["Visual concept illustrations", "Spaced repetition learning system", "NCLEX-targeted practice questions", "Video explanations of complex concepts", "Clinical reasoning case studies", "Pharmacology and pathophysiology focus"], bestFor: "Nursing students who learn visually and need NCLEX prep aligned with current exam format", freeFeatures: ["Basic video library", "Limited flashcards", "Some practice questions"], rating: 4.5 },
    ],
  },
  {
    category: "Patient Communication & Education",
    icon: "💬",
    description: "AI tools that improve patient understanding and support nurse-patient communication",
    tools: [
      { name: "Grammarly", slug: "grammarly", description: "Used by nurses for patient-facing written communication — discharge instructions, care materials, and professional emails. Ensures documents are readable, clear, and at appropriate reading levels for patients.", pricing: "Freemium", pricingDetails: "Free tier, Premium $12/mo", strengths: ["Reading level adjustment for patient materials", "Clarity and simplicity improvements", "Tone adjustment (professional vs. warm)", "Grammar and spelling for professional documents", "Browser extension for EHR-adjacent tools", "Accessibility improvements"], bestFor: "Nurses writing patient education materials, discharge instructions, and professional communications", freeFeatures: ["Grammar checking", "Basic clarity suggestions", "Browser extension"], rating: 4.4 },
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

export default function BestAIToolsForNurses2026() {
  const totalTools = toolCategories.reduce((sum, cat) => sum + cat.tools.length, 0);
  return (
    <article className="mx-auto max-w-4xl px-4 py-8">
      <header className="mb-12">
        <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/blog" className="hover:text-blue-600">Blog</Link><span>→</span><span>AI Tools for Nurses</span>
        </div>
        <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">Best AI Tools for Nurses in 2026</h1>
        <p className="mb-6 text-xl leading-relaxed text-gray-600">{totalTools} AI tools that reduce documentation burden, improve clinical decision-making, and support nursing education — so nurses can focus more on patients.</p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          <span>📅 Updated May 2026</span><span>•</span><span>⏱️ 14 min read</span><span>•</span><span>🏥 {totalTools} tools reviewed</span>
        </div>
      </header>
      <section className="mb-12 rounded-lg bg-blue-50 p-6">
        <h2 className="mb-3 text-2xl font-bold text-gray-900">AI and Nursing: Reducing Burden, Not Replacing Care</h2>
        <p className="mb-4 leading-relaxed text-gray-700">Nurses spend <strong>up to 49% of their time on documentation</strong> rather than direct patient care. AI tools like Nuance DAX are reducing that burden — health systems using ambient AI documentation report nurses spending <strong>more time at the bedside</strong> and experiencing lower burnout rates.</p>
        <p className="leading-relaxed text-gray-700">Critical note: AI in clinical settings must be used with caution. <strong>Never input patient-identifiable information into public AI tools</strong> (ChatGPT, Claude, etc.). Use these for de-identified educational and administrative tasks only. System-approved AI tools (Nuance DAX, Epocrates) are designed for HIPAA-compliant clinical use.</p>
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
      <section className="mb-12 rounded-lg bg-red-50 p-6">
        <h2 className="mb-3 text-2xl font-bold text-gray-900">⚠️ AI Privacy and HIPAA Reminders for Nurses</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2"><span className="text-red-500 font-bold">•</span> Never input patient names, DOBs, MRNs, or other PHI into public AI tools (ChatGPT, Claude, Perplexity)</li>
          <li className="flex items-start gap-2"><span className="text-red-500 font-bold">•</span> Only use AI documentation tools that your health system has approved and that are HIPAA-compliant</li>
          <li className="flex items-start gap-2"><span className="text-red-500 font-bold">•</span> Always verify AI-generated clinical information against authoritative clinical references</li>
          <li className="flex items-start gap-2"><span className="text-red-500 font-bold">•</span> AI is a decision support tool — clinical judgment always takes precedence</li>
        </ul>
      </section>
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-5">
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">Is it safe for nurses to use AI tools?</h3>
            <p className="leading-relaxed text-gray-700">With appropriate safeguards, yes. The key rules: never input patient-identifiable information into non-approved AI tools, always verify clinical information against authoritative sources, and use AI as support for — not a replacement for — clinical judgment. System-approved tools like Nuance DAX are designed for HIPAA-compliant clinical use.</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">Can AI help with NCLEX preparation?</h3>
            <p className="leading-relaxed text-gray-700">Yes, significantly. Claude and ChatGPT can generate unlimited NCLEX-style practice questions, explain why answers are correct or incorrect, and create study guides for any topic. Osmosis provides structured nursing education content. Combined with official NCLEX review materials, AI tools can dramatically accelerate exam preparation.</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">What is the most useful free AI tool for nurses?</h3>
            <p className="leading-relaxed text-gray-700">For nursing students, Claude's free tier is invaluable for NCLEX prep and concept explanation. For practicing nurses, Epocrates' free version provides critical clinical reference and drug interaction checking. ChatGPT free tier works well for de-identified educational and documentation tasks.</p>
          </div>
        </div>
      </section>
      <section className="rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 p-8 text-white">
        <h2 className="mb-4 text-3xl font-bold">More Time for What Matters Most</h2>
        <p className="mb-6 text-lg leading-relaxed text-blue-50">AI handles documentation and research so nurses can spend more time on patient care — the work only humans can do.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/tools" className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-colors hover:bg-gray-100">Explore All AI Tools →</Link>
          <Link href="/blog/best-ai-tools-for-healthcare-professionals-2026" className="inline-flex items-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-blue-600">AI for Healthcare →</Link>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Best AI Tools for Nurses in 2026", description: "Guide to AI tools for nurses including Nuance DAX, Epocrates, Claude, and Osmosis.", author: { "@type": "Organization", name: "AISOTools" }, publisher: { "@type": "Organization", name: "AISOTools", logo: { "@type": "ImageObject", url: "https://aisotools.com/logo.png" } }, datePublished: "2026-05-05", dateModified: "2026-05-05", mainEntityOfPage: { "@type": "WebPage", "@id": "https://aisotools.com/blog/best-ai-tools-for-nurses-2026" } })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "Is it safe for nurses to use AI tools?", acceptedAnswer: { "@type": "Answer", text: "Yes with safeguards: never input PHI into non-approved tools, verify clinical info in authoritative sources, and use AI as decision support not replacement for clinical judgment." } }, { "@type": "Question", name: "Can AI help with NCLEX preparation?", acceptedAnswer: { "@type": "Answer", text: "Yes significantly. Claude and ChatGPT generate unlimited NCLEX-style practice questions, explain rationales, and create custom study guides for any nursing topic." } }] })}} />
    </article>
  );
}
