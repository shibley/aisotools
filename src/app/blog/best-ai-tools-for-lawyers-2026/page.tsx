import { tools } from "@/data/tools";
import { getAffiliateUrl } from "@/data/affiliate-links";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Tools for Lawyers in 2026: Legal Research, Drafting & More",
  description:
    "Discover the best AI tools for lawyers in 2026. From legal research with Westlaw AI to contract drafting with Harvey and Clio, find AI assistants that save billable hours.",
  keywords: [
    "best ai tools for lawyers",
    "ai tools for lawyers",
    "ai legal research",
    "ai contract drafting",
    "legal ai tools",
    "ai for attorneys",
    "harvey ai",
    "clio ai",
  ],
  openGraph: {
    title: "Best AI Tools for Lawyers in 2026",
    description: "The ultimate guide to AI tools for lawyers. Compare Harvey, Clio, Westlaw AI, and more.",
    url: "https://aisotools.com/blog/best-ai-tools-for-lawyers-2026",
    type: "article",
  },
  alternates: { canonical: "https://aisotools.com/blog/best-ai-tools-for-lawyers-2026" },
};

interface LegalAITool {
  name: string;
  slug: string;
  description: string;
  pricing: string;
  pricingDetails: string;
  strengths: string[];
  bestFor: string;
  freeFeatures: string[];
  rating: number;
}

interface LegalToolCategory {
  category: string;
  icon: string;
  description: string;
  tools: LegalAITool[];
}

const toolCategories: LegalToolCategory[] = [
  {
    category: "Legal Research",
    icon: "🔍",
    description: "AI-powered platforms that surface relevant cases, statutes, and regulations faster than traditional methods",
    tools: [
      {
        name: "Westlaw AI",
        slug: "westlaw",
        description: "Thomson Reuters' AI-enhanced legal research platform. Natural language search understands legal concepts — not just keywords — and surfaces the most relevant cases with AI-curated headnotes.",
        pricing: "Paid (Subscription)",
        pricingDetails: "Enterprise pricing; typically bundled with Westlaw subscriptions",
        strengths: [
          "Natural language legal research queries",
          "AI-curated headnotes and key passages",
          "Citator with treatment analysis",
          "West Key Number System with AI enhancement",
          "Secondary source integration",
          "WestSearch Plus AI layer",
        ],
        bestFor: "Law firms and in-house counsel needing comprehensive case law research",
        freeFeatures: ["Trial access available", "Basic public records"],
        rating: 4.7,
      },
      {
        name: "Lexis+ AI",
        slug: "lexis-plus-ai",
        description: "LexisNexis' generative AI assistant built into Lexis+. Ask complex legal questions in plain English and get cited answers with links to source documents and Shepard's integration.",
        pricing: "Paid (Subscription)",
        pricingDetails: "Included with Lexis+ subscription; enterprise pricing",
        strengths: [
          "Generative AI answers with full citations",
          "Shepard's citation service integration",
          "Broad secondary sources library",
          "Jurisdiction-specific filtering",
          "Draft summaries of briefs and opinions",
          "Integrated into existing Lexis workflow",
        ],
        bestFor: "Legal researchers who need AI that cites sources and integrates with Lexis",
        freeFeatures: ["Limited free trial", "Basic public document access"],
        rating: 4.6,
      },
      {
        name: "Perplexity",
        slug: "perplexity",
        description: "AI search engine that cites sources in real time. Lawyers use it for quick background research, regulatory lookups, and staying current on legal news with full citations.",
        pricing: "Freemium",
        pricingDetails: "Free tier, Pro $20/mo",
        strengths: [
          "Every answer includes cited sources",
          "Real-time web access for current legal news",
          "Jurisdiction-specific regulatory research",
          "Quick background on unfamiliar practice areas",
          "No hallucinations on cited facts",
          "Fast pre-research orientation",
        ],
        bestFor: "Quick background research, regulatory lookups, current developments in law",
        freeFeatures: ["Unlimited questions", "Source citations", "Basic web search"],
        rating: 4.5,
      },
    ],
  },
  {
    category: "Contract Drafting & Review",
    icon: "📋",
    description: "AI tools that accelerate contract creation, identify risk clauses, and ensure consistency across documents",
    tools: [
      {
        name: "Harvey AI",
        slug: "harvey-ai",
        description: "Enterprise AI platform built specifically for law firms. Harvey drafts contracts, answers legal questions, summarizes documents, and assists with due diligence — used by Am Law 100 firms.",
        pricing: "Paid (Enterprise)",
        pricingDetails: "Enterprise pricing; deployed via firm partnerships",
        strengths: [
          "Purpose-built for legal professionals",
          "Contract drafting in the firm's house style",
          "Due diligence document review at scale",
          "Matter-specific AI trained on firm precedents",
          "Trusted by Allen & Overy, Linklaters, Am Law 100",
          "Integrates with existing document management",
        ],
        bestFor: "Large law firms and in-house teams needing enterprise-grade AI for transactions",
        freeFeatures: ["Demo available", "Pilot programs for qualifying firms"],
        rating: 4.8,
      },
      {
        name: "Claude",
        slug: "claude",
        description: "Anthropic's AI assistant with a 200K token context window — large enough to review entire agreements. Used by lawyers for contract redlining, clause comparison, memo drafts, and deposition prep.",
        pricing: "Freemium",
        pricingDetails: "Free tier, Pro $20/mo, Team $30/mo per user",
        strengths: [
          "200K context window handles full agreements",
          "Careful, nuanced legal writing style",
          "Contract redlining and comparison",
          "Legal memo and brief drafting assistance",
          "Excellent at spotting ambiguous language",
          "No training on user inputs (privacy)",
        ],
        bestFor: "Solo attorneys and small firms needing AI drafting help without enterprise pricing",
        freeFeatures: ["Claude Sonnet access", "File uploads", "Projects feature"],
        rating: 4.7,
      },
      {
        name: "ContractPodAi",
        slug: "contractpodai",
        description: "AI-powered contract lifecycle management platform. Extracts key terms, flags risk clauses, tracks obligations, and provides contract analytics across your entire portfolio.",
        pricing: "Paid (Enterprise)",
        pricingDetails: "Enterprise pricing based on contract volume",
        strengths: [
          "Automated contract data extraction",
          "Risk clause identification and flagging",
          "Obligation tracking and deadline alerts",
          "Contract portfolio analytics",
          "NDA, MSA, and SaaS agreement templates",
          "Integration with Salesforce, DocuSign",
        ],
        bestFor: "In-house legal teams managing high contract volumes and needing obligation tracking",
        freeFeatures: ["Demo available", "ROI calculator"],
        rating: 4.4,
      },
    ],
  },
  {
    category: "E-Discovery & Document Review",
    icon: "📁",
    description: "AI tools that dramatically reduce the time and cost of document review in litigation",
    tools: [
      {
        name: "Relativity",
        slug: "relativity",
        description: "The industry-standard e-discovery platform with AI-powered document review. Active learning models learn from reviewer decisions to prioritize the most relevant documents.",
        pricing: "Paid (Enterprise)",
        pricingDetails: "Per-GB processing fees + hosting; enterprise licensing",
        strengths: [
          "Active learning predictive coding",
          "AI categorization of millions of documents",
          "Near-duplicate and email thread detection",
          "Privilege review AI",
          "Language translation for international matters",
          "Analytics dashboard for review insights",
        ],
        bestFor: "Litigation support teams handling large document sets in complex matters",
        freeFeatures: ["RelativityOne trial", "Community resources"],
        rating: 4.6,
      },
      {
        name: "Logikcull",
        slug: "logikcull",
        description: "Cloud-based e-discovery platform for smaller firms. Upload documents, AI auto-tags and organizes them, then review with intelligent filtering. No IT setup required.",
        pricing: "Paid",
        pricingDetails: "Starting at $250/month; pay-as-you-go options",
        strengths: [
          "Fast upload and processing (drag-and-drop)",
          "AI auto-tagging and organization",
          "Built-in deduplication",
          "Simple privilege log generation",
          "No vendor involvement needed",
          "Transparent per-GB pricing",
        ],
        bestFor: "Small to mid-size law firms handling litigation without dedicated e-discovery staff",
        freeFeatures: ["Free trial with upload credit", "Self-service onboarding"],
        rating: 4.4,
      },
    ],
  },
  {
    category: "Practice Management & Productivity",
    icon: "⚖️",
    description: "AI-enhanced tools for billing, case management, and client communication",
    tools: [
      {
        name: "Clio",
        slug: "clio",
        description: "The leading law practice management platform with integrated AI. Clio Duo uses AI to summarize case notes, draft client emails, suggest next steps, and automate time entry from documents.",
        pricing: "Paid",
        pricingDetails: "Starter $39/mo, Boutique $79/mo, Elite $139/mo per user",
        strengths: [
          "AI-powered time entry from emails and notes",
          "Client intake automation with AI forms",
          "Document automation and template library",
          "AI case summaries and next steps",
          "Integrated billing and trust accounting",
          "Client portal for secure communication",
        ],
        bestFor: "Small and mid-size law firms wanting an all-in-one practice management platform with AI",
        freeFeatures: ["7-day free trial", "Free client portal access"],
        rating: 4.6,
      },
      {
        name: "ChatGPT",
        slug: "chatgpt",
        description: "Versatile AI assistant used by lawyers for drafting demand letters, summarizing depositions, creating client FAQs, researching unfamiliar practice areas, and generating first drafts.",
        pricing: "Freemium",
        pricingDetails: "Free (GPT-4o mini), Plus $20/mo, Team $30/mo",
        strengths: [
          "Fast first drafts of demand letters and memos",
          "Deposition and transcript summaries",
          "Client intake FAQ creation",
          "Settlement negotiation prep documents",
          "Jury instruction plain-language explanations",
          "Cross-jurisdiction research starting points",
        ],
        bestFor: "Any attorney needing a general-purpose AI for drafting, research, and client communication",
        freeFeatures: ["GPT-4o mini access", "File uploads", "Web search"],
        rating: 4.5,
      },
      {
        name: "Otter.ai",
        slug: "otter-ai",
        description: "AI transcription for client meetings, depositions, and hearings. Otter automatically transcribes, identifies speakers, and creates searchable notes with action items.",
        pricing: "Freemium",
        pricingDetails: "Free (300 min/mo), Pro $8.33/mo, Business $20/mo",
        strengths: [
          "Automatic transcription of client meetings",
          "Speaker identification",
          "Searchable meeting notes",
          "Action item extraction",
          "Zoom, Teams, Google Meet integration",
          "Export to Word for deposition summaries",
        ],
        bestFor: "Client intake meetings, internal case discussions, deposition prep, and hearing notes",
        freeFeatures: ["300 minutes/month", "Speaker ID", "Basic search", "Zoom integration"],
        rating: 4.4,
      },
    ],
  },
];

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.3;
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-lg">
          {i < fullStars ? "⭐" : i === fullStars && hasHalf ? "⭐" : "☆"}
        </span>
      ))}
      <span className="ml-1 text-sm font-medium text-gray-600">{rating}/5</span>
    </div>
  );
}

export default function BestAIToolsForLawyers2026() {
  const totalTools = toolCategories.reduce((sum, cat) => sum + cat.tools.length, 0);

  return (
    <article className="mx-auto max-w-4xl px-4 py-8">
      <header className="mb-12">
        <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span>→</span>
          <span>AI Tools for Lawyers</span>
        </div>
        <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
          Best AI Tools for Lawyers in 2026
        </h1>
        <p className="mb-6 text-xl leading-relaxed text-gray-600">
          {totalTools} AI tools transforming legal practice — from AI-powered legal research and contract drafting to e-discovery and practice management. Save hours per matter without compromising accuracy.
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          <span>📅 Updated May 2026</span>
          <span>•</span>
          <span>⏱️ 16 min read</span>
          <span>•</span>
          <span>⚖️ {totalTools} tools reviewed</span>
        </div>
      </header>

      <section className="mb-12 rounded-lg bg-blue-50 p-6">
        <h2 className="mb-3 text-2xl font-bold text-gray-900">Why AI Is Reshaping Legal Practice in 2026</h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          Law firms using AI report <strong>30-50% reductions in time spent on legal research</strong> and contract review. Am Law 100 firms have deployed Harvey, Clio Duo, and Westlaw AI at scale — and solo practitioners are using ChatGPT and Claude to compete with larger firms.
        </p>
        <p className="leading-relaxed text-gray-700">
          The critical distinction: AI in law is about <strong>acceleration, not replacement</strong>. AI handles first drafts, document review prioritization, and research starting points. Lawyers apply judgment, strategy, and client counsel. Firms that master this balance are billing more hours in less time.
        </p>
      </section>

      <nav className="mb-12 rounded-lg border border-gray-200 bg-gray-50 p-6">
        <h2 className="mb-4 text-lg font-bold text-gray-900">Jump to Category</h2>
        <div className="grid gap-2 sm:grid-cols-2">
          {toolCategories.map((cat) => (
            <a
              key={cat.category}
              href={`#${cat.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="flex items-center gap-2 rounded-md p-2 text-sm transition-colors hover:bg-white hover:shadow-sm"
            >
              <span>{cat.icon}</span>
              <span className="text-blue-600 hover:underline">{cat.category}</span>
              <span className="text-gray-400">({cat.tools.length})</span>
            </a>
          ))}
        </div>
      </nav>

      {toolCategories.map((category, catIndex) => (
        <section
          key={category.category}
          id={category.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
          className="mb-16"
        >
          <div className="mb-8">
            <h2 className="mb-2 text-3xl font-bold text-gray-900">
              <span className="mr-2">{category.icon}</span>
              {category.category}
            </h2>
            <p className="text-lg text-gray-600">{category.description}</p>
          </div>
          <div className="space-y-8">
            {category.tools.map((tool, toolIndex) => {
              const globalIndex =
                toolCategories.slice(0, catIndex).reduce((sum, c) => sum + c.tools.length, 0) + toolIndex + 1;
              const toolData = tools.find(
                (t) => t.slug === tool.slug || t.name.toLowerCase() === tool.name.toLowerCase()
              );
              const affiliateUrl = getAffiliateUrl(tool.slug) || toolData?.affiliateUrl;
              const toolUrl = toolData ? `/tool/${toolData.slug}` : `/tools?q=${encodeURIComponent(tool.name)}`;
              return (
                <div key={tool.name} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="mb-1 flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">{globalIndex}</span>
                        <h3 className="text-2xl font-bold text-gray-900">
                          <Link href={toolUrl} className="hover:text-blue-600">{tool.name}</Link>
                        </h3>
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
                      <ul className="space-y-1">
                        {tool.strengths.map((s) => (
                          <li key={s} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="mt-0.5 text-green-500">✓</span>{s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">Free Features</h4>
                      <ul className="space-y-1">
                        {tool.freeFeatures.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="mt-0.5 text-blue-500">★</span>{f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 border-t border-gray-100 pt-4">
                    <span className="text-sm text-gray-500"><strong>Best for:</strong> {tool.bestFor}</span>
                    <div className="ml-auto flex gap-2">
                      {affiliateUrl && (
                        <a href={affiliateUrl} target="_blank" rel="noopener noreferrer sponsored"
                          className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
                          Try {tool.name} →
                        </a>
                      )}
                      <Link href={toolUrl} className="inline-flex items-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
                        Full Review
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}

      <section className="mb-12 rounded-lg bg-amber-50 p-6">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">AI Tool Stacks by Practice Area</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-white p-5">
            <h3 className="mb-3 text-lg font-bold text-gray-900">⚖️ Litigation</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Research:</strong> Westlaw AI + Perplexity</li>
              <li><strong>Discovery:</strong> Relativity or Logikcull</li>
              <li><strong>Transcription:</strong> Otter.ai</li>
              <li><strong>Drafting:</strong> Claude (briefs, motions)</li>
            </ul>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-5">
            <h3 className="mb-3 text-lg font-bold text-gray-900">📝 Transactional / M&A</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Contracts:</strong> Harvey AI + ContractPodAi</li>
              <li><strong>Research:</strong> Lexis+ AI</li>
              <li><strong>Drafting:</strong> Claude (200K context)</li>
              <li><strong>Management:</strong> Clio</li>
            </ul>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-5">
            <h3 className="mb-3 text-lg font-bold text-gray-900">🏢 Solo / Small Firm</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Research:</strong> Perplexity (free) + ChatGPT</li>
              <li><strong>Drafting:</strong> Claude $20/mo</li>
              <li><strong>Practice Mgmt:</strong> Clio $39/mo</li>
              <li><strong>Meetings:</strong> Otter.ai (free tier)</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">💰 Total: ~$60/mo for a powerful AI stack</p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-5">
            <h3 className="mb-3 text-lg font-bold text-gray-900">🏛️ In-House Counsel</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Contracts:</strong> ContractPodAi</li>
              <li><strong>Research:</strong> Lexis+ AI</li>
              <li><strong>General AI:</strong> Harvey AI or Claude Team</li>
              <li><strong>Management:</strong> Clio or enterprise CLM</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">Is it ethical for lawyers to use AI?</h3>
            <p className="leading-relaxed text-gray-700">
              Yes, with appropriate supervision. Bar associations across the US have issued guidance (not bans) on AI use. The key obligations are competence (understanding AI outputs), confidentiality (using secure platforms), and supervision (reviewing all AI work product). AI output is a starting point, not a final work product.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">What are the main risks of using AI in legal practice?</h3>
            <p className="leading-relaxed text-gray-700">
              The main risks are hallucinations (AI fabricating citations — always verify), confidentiality breaches (using public AI tools with client data), and over-reliance without review. Mitigate by using legal-specific platforms for sensitive matters and always verifying citations in primary sources.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">Can AI replace legal research assistants?</h3>
            <p className="leading-relaxed text-gray-700">
              AI can perform the mechanical aspects of research faster than a junior associate — finding cases, summarizing holdings, checking citations. However, strategic research, spotting novel arguments, and evaluating source authority still requires attorney judgment. AI augments research capacity without replacing the attorney's analytical role.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">Which AI tool is best for solo attorneys on a budget?</h3>
            <p className="leading-relaxed text-gray-700">
              Start with <strong>Claude</strong> ($20/mo) for drafting and document review, <strong>Perplexity</strong> (free) for research starting points, and <strong>Otter.ai</strong> (free tier) for meeting transcription. Add Clio ($39/mo) for practice management once billing consistently. This covers 80% of AI needs for most solo practices.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
        <h2 className="mb-4 text-3xl font-bold">Work Smarter in Your Practice</h2>
        <p className="mb-6 text-lg leading-relaxed text-blue-50">
          The firms winning in 2026 use AI to do more high-value work per attorney hour — not to cut staff, but to expand capacity. Start with one tool that addresses your biggest time drain and build from there.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/tools" className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-colors hover:bg-gray-100">
            Explore All AI Tools →
          </Link>
          <Link href="/blog/best-ai-tools-for-project-managers-2026" className="inline-flex items-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-blue-600">
            AI for Project Managers →
          </Link>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        headline: "Best AI Tools for Lawyers in 2026: Legal Research, Drafting & More",
        description: "Comprehensive guide to the best AI tools for lawyers including Harvey, Westlaw AI, Lexis+ AI, Clio, and more.",
        author: { "@type": "Organization", name: "AISOTools" },
        publisher: { "@type": "Organization", name: "AISOTools", logo: { "@type": "ImageObject", url: "https://aisotools.com/logo.png" } },
        datePublished: "2026-05-05", dateModified: "2026-05-05",
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://aisotools.com/blog/best-ai-tools-for-lawyers-2026" },
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Is it ethical for lawyers to use AI?",
            acceptedAnswer: { "@type": "Answer", text: "Yes, with appropriate supervision. Bar associations have issued guidance emphasizing competence, confidentiality, and supervision of AI outputs." } },
          { "@type": "Question", name: "Which AI tool is best for solo attorneys on a budget?",
            acceptedAnswer: { "@type": "Answer", text: "Claude ($20/mo) for drafting, Perplexity (free) for research, and Otter.ai (free) for transcription covers 80% of AI needs for under $30/mo." } },
        ],
      })}} />
    </article>
  );
}
