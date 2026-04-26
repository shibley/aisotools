import Link from "next/link";
import type { Metadata } from "next";
import { getAffiliateUrl } from "@/data/affiliate-links";

export const metadata: Metadata = {
  title: "Best AI Tools for Lawyers & Legal Professionals in 2026",
  description:
    "Discover the best AI tools for lawyers in 2026. From AI legal research with Harvey and Casetext to contract review, document drafting, and client intake automation — reduce billable time on admin and focus on what matters.",
  keywords: [
    "best ai tools for lawyers",
    "ai tools for legal professionals",
    "ai legal research tools",
    "ai for law firms",
    "legal ai software 2026",
    "ai contract review",
    "harvey ai",
    "casetext ai",
    "ai legal assistant",
    "best ai for attorneys",
  ],
  openGraph: {
    title: "Best AI Tools for Lawyers & Legal Professionals in 2026",
    description:
      "The ultimate guide to AI tools transforming legal practice. Compare Harvey, Casetext, Spellbook, Clio Duo, and more for legal research, contract review, document drafting, and client intake.",
    url: "https://aisotools.com/blog/best-ai-tools-for-lawyers-2026",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/blog/best-ai-tools-for-lawyers-2026",
  },
};

interface LegalToolCategory {
  category: string;
  icon: string;
  description: string;
  tools: LegalAITool[];
}

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
  timeSaved?: string;
}

const toolCategories: LegalToolCategory[] = [
  {
    category: "Legal Research & Case Analysis",
    icon: "⚖️",
    description:
      "AI-powered research tools that find relevant case law, statutes, and regulations in seconds — replacing hours of manual Westlaw browsing",
    tools: [
      {
        name: "Casetext CoCounsel",
        slug: "casetext",
        description:
          "One of the most mature AI legal research assistants, now backed by Thomson Reuters. CoCounsel can review documents, search case law, draft memos, and prepare deposition questions — all with citations lawyers can verify. Handles complex multi-part research queries that traditional keyword search can't.",
        pricing: "Paid",
        pricingDetails: "Starting ~$100–150/month per user",
        strengths: [
          "Trained on legal data — understands jurisdiction and precedent",
          "Cites every answer with verifiable sources",
          "Document review: finds relevant passages across hundreds of exhibits",
          "Deposition prep: generates topic-based question sets from case files",
          "Contract analysis: flags unusual clauses and missing provisions",
          "Thomson Reuters backing adds editorial quality control",
        ],
        bestFor: "Litigation attorneys, corporate counsel, document-heavy practices",
        freeFeatures: ["Free trial available"],
        rating: 4.7,
        timeSaved: "5–10 hours/week on research and document review",
      },
      {
        name: "Westlaw AI (Precision)",
        slug: "westlaw",
        description:
          "Thomson Reuters' AI-enhanced Westlaw integrates natural language research into the most trusted legal database in the US. Ask in plain English and get case law, statutes, and secondary sources with editorial headnotes — the gold standard with an AI layer.",
        pricing: "Paid",
        pricingDetails: "Subscription-based; typically $300–600+/mo per user",
        strengths: [
          "Access to the most comprehensive legal database",
          "AI Precision: natural language queries, not just keywords",
          "WestSearch Plus for quick answers with citations",
          "KeyCite integration for validity checks",
          "Trusted by BigLaw and federal judiciary",
          "Advanced filtering by jurisdiction and date",
        ],
        bestFor: "BigLaw, court practices, attorneys needing the deepest database coverage",
        freeFeatures: ["Law school access may be available"],
        rating: 4.6,
        timeSaved: "4–8 hours/week on legal research",
      },
      {
        name: "Lexis+ AI",
        slug: "lexisplus",
        description:
          "LexisNexis' answer to AI-enhanced research — Lexis+ AI answers legal questions in conversational language, cites its sources, and integrates with Shepard's for citation validation. Particularly strong for regulatory and compliance research.",
        pricing: "Paid",
        pricingDetails: "Subscription-based; competitive with Westlaw tiers",
        strengths: [
          "Conversational legal research with citations",
          "Shepard's integration for validity checks",
          "Strong regulatory and compliance coverage",
          "Brief analysis and drafting assistance",
          "International law coverage",
          "Practice area libraries for niche specializations",
        ],
        bestFor: "Regulatory attorneys, compliance, international law practices",
        freeFeatures: ["Free trial for law firms"],
        rating: 4.5,
        timeSaved: "4–7 hours/week on regulatory research",
      },
      {
        name: "Harvey AI",
        slug: "harvey-ai",
        description:
          "The buzzy AI legal assistant backed by OpenAI. Harvey is purpose-built for law — legal research, due diligence, contract analysis, regulatory mapping, and litigation strategy. Used by Allen & Overy, PwC Legal, and other elite firms. Currently invitation/enterprise only.",
        pricing: "Enterprise",
        pricingDetails: "Custom enterprise pricing (typically 6-figure annual contracts)",
        strengths: [
          "Purpose-built for law on top of GPT-4 class models",
          "Multi-jurisdictional regulatory analysis",
          "M&A due diligence acceleration",
          "Litigation strategy memos",
          "Custom knowledge bases per firm/practice",
          "Backed by OpenAI — frontier model access",
        ],
        bestFor: "BigLaw, elite boutiques, legal ops teams at Fortune 500 companies",
        freeFeatures: ["Demo available by request"],
        rating: 4.8,
        timeSaved: "10–20 hours/week on complex research tasks",
      },
    ],
  },
  {
    category: "Contract Drafting & Review",
    icon: "📄",
    description:
      "AI tools that draft contracts from scratch, review for missing clauses, flag non-standard language, and accelerate negotiation cycles",
    tools: [
      {
        name: "Spellbook",
        slug: "spellbook",
        description:
          "A Microsoft Word add-in powered by GPT-4 that drafts and reviews contracts directly inside Word. Suggest clauses, identify risky language, and generate negotiation positions — without leaving the document you're already working in.",
        pricing: "Paid",
        pricingDetails: "~$99–149/month per user",
        strengths: [
          "Works inside Microsoft Word (no workflow change)",
          "Drafts entire contract sections from plain-language instructions",
          "Flags aggressive or unusual clauses vs. market standard",
          "Generates alternative negotiation positions",
          "Trained on millions of commercial contracts",
          "Fast — reviews a 50-page contract in minutes",
        ],
        bestFor: "Transactional attorneys, in-house counsel, M&A and commercial practices",
        freeFeatures: ["Free trial (limited reviews)"],
        rating: 4.6,
        timeSaved: "3–6 hours/deal on contract review",
      },
      {
        name: "Ironclad AI",
        slug: "ironclad",
        description:
          "Enterprise contract lifecycle management (CLM) with embedded AI. Ironclad automates contract creation from templates, flags deviations from playbooks during review, and provides analytics on negotiated terms across all your contracts.",
        pricing: "Enterprise",
        pricingDetails: "Custom pricing; typically $500+/month",
        strengths: [
          "End-to-end CLM (create, negotiate, sign, store, analyze)",
          "AI redlining vs. standard playbook positions",
          "Analytics: what terms do counterparties push back on?",
          "Approval workflows and audit trails",
          "Integrates with Salesforce, Slack, Docusign",
          "Used by Mastercard, L'Oréal, Glassdoor",
        ],
        bestFor: "In-house legal teams, high-volume commercial contracting, legal ops",
        freeFeatures: ["Demo available"],
        rating: 4.5,
        timeSaved: "50–70% reduction in contract cycle time",
      },
      {
        name: "Claude (Anthropic)",
        slug: "claude",
        description:
          "Anthropic's Claude handles 200K-token context windows — meaning it can read and analyze entire contracts, NDAs, or lease agreements in one pass. Exceptional at nuanced legal language, identifying ambiguities, and drafting clean redlines in a professional tone.",
        pricing: "Freemium",
        pricingDetails: "Free tier; Pro $20/mo; Team $25/user/mo",
        strengths: [
          "200K token context = reads entire contracts in one pass",
          "Identifies ambiguous language and suggests precise alternatives",
          "Drafts redlines in professional legal tone",
          "Excellent at explaining complex clauses in plain English for clients",
          "Projects feature for ongoing contract file management",
          "No hallucinations on factual contract text (reads your doc)",
        ],
        bestFor: "Solo attorneys, small firms, in-house teams without dedicated CLM software",
        freeFeatures: ["Free tier (limited messages)", "Document uploads", "Projects"],
        rating: 4.7,
        timeSaved: "2–4 hours/contract on first-pass review",
      },
    ],
  },
  {
    category: "Document Drafting & Legal Writing",
    icon: "✍️",
    description:
      "AI tools that draft motions, briefs, memos, demand letters, and client communications — reducing first-draft time from hours to minutes",
    tools: [
      {
        name: "ChatGPT",
        slug: "chatgpt",
        description:
          "The Swiss Army knife for legal drafting. Use ChatGPT to draft demand letters, legal memos, client update emails, settlement agreements, and more. With custom instructions set to 'you are a licensed attorney drafting for a law firm,' the output quality is excellent for first drafts.",
        pricing: "Freemium",
        pricingDetails: "Free tier; Plus $20/mo; Team $25/user/mo",
        strengths: [
          "Drafts demand letters, cease-and-desist letters, and legal notices",
          "Summarizes depositions and discovery documents",
          "Converts legalese to plain-English client updates",
          "Brainstorms legal arguments from factual scenarios",
          "Custom GPT builder for firm-specific templates",
          "Drafts engagement letters and retainer agreements",
        ],
        bestFor:
          "All attorneys — best for drafting, summarizing, and client communication tasks",
        freeFeatures: [
          "Free tier with GPT-4o mini",
          "File uploads",
          "Web browsing for legal news",
          "DALL-E for legal presentations",
        ],
        rating: 4.5,
        timeSaved: "2–5 hours/week on drafting and communication",
      },
      {
        name: "Grammarly Business",
        slug: "grammarly",
        description:
          "AI writing polish for legal professionals. Ensures briefs, motions, and client emails are error-free with the right tone — critical when submitting to federal courts or corresponding with sophisticated clients. The 'formal' tone setting is perfectly calibrated for legal writing.",
        pricing: "Freemium",
        pricingDetails: "Free tier; Premium $12/mo; Business $15/user/mo",
        strengths: [
          "Catches grammar errors in court submissions",
          "Tone adjustment: formal for court, approachable for clients",
          "Clarity suggestions reduce wordiness in briefs",
          "Works in Word, Outlook, Google Docs, and web browsers",
          "Plagiarism detection for academic submissions",
          "Style guide enforcement for firm-wide consistency",
        ],
        bestFor:
          "All attorneys — polish for court filings, client emails, and marketing content",
        freeFeatures: [
          "Basic grammar and spelling",
          "Browser extension",
          "Tone detector",
          "Word and email integration",
        ],
        rating: 4.5,
        timeSaved: "30–60 min/day on editing and proofreading",
      },
      {
        name: "EvenUp AI",
        slug: "evenup-ai",
        description:
          "Specialized AI for personal injury demand letters. EvenUp analyzes medical records, police reports, and case facts to draft fully documented demand letters with damages calculations — cutting demand letter prep from days to hours for PI firms.",
        pricing: "Paid",
        pricingDetails: "Per-case pricing; contact for rates",
        strengths: [
          "Analyzes medical records and builds damages summaries",
          "Drafts demand letters with full medical chronology",
          "Calculates economic damages from wage records",
          "Integrates pain and suffering narrative from case facts",
          "Reduces demand letter prep from 8+ hours to ~1 hour",
          "Used by leading PI firms across the US",
        ],
        bestFor: "Personal injury attorneys, mass tort firms, insurance defense counsel",
        freeFeatures: ["Demo available"],
        rating: 4.7,
        timeSaved: "7–10 hours/case on demand letter preparation",
      },
    ],
  },
  {
    category: "Client Intake & Practice Management",
    icon: "👤",
    description:
      "AI tools that automate client intake, streamline scheduling, manage matters, and improve the overall client experience",
    tools: [
      {
        name: "Clio Duo",
        slug: "clio",
        description:
          "Clio's built-in AI assistant embedded directly in the most popular legal practice management platform. Duo surfaces insights from your matters, summarizes communications, drafts client updates, and helps track billing — all inside the software you already use.",
        pricing: "Paid",
        pricingDetails: "Clio Manage from $49/mo/user; Duo included in higher tiers",
        strengths: [
          "AI embedded in leading legal practice management software",
          "Summarizes client matter history in seconds",
          "Suggests billing entries from time records",
          "Drafts client status update emails",
          "Document insights from matter files",
          "Tracks deadlines and sends smart reminders",
        ],
        bestFor: "Small to mid-size law firms already on Clio or evaluating practice management",
        freeFeatures: ["Clio free trial (30 days)", "Free Clio for Clients app"],
        rating: 4.5,
        timeSaved: "3–5 hours/week on matter management and billing",
      },
      {
        name: "Lawmatics",
        slug: "lawmatics",
        description:
          "AI-powered legal CRM and client intake platform. Lawmatics automates follow-up emails, schedules consultations, tracks leads, and converts prospects to clients — so you never lose a lead because you were in court.",
        pricing: "Paid",
        pricingDetails: "From ~$99/mo; scales with firm size",
        strengths: [
          "Automated intake forms and lead capture",
          "AI-driven email follow-up sequences for prospects",
          "Consultation scheduling without email back-and-forth",
          "Conflict-of-interest checks",
          "Pipeline dashboard for business development",
          "Integrates with Clio, MyCase, and others",
        ],
        bestFor: "Consumer-facing practices (family, PI, criminal defense, estate planning)",
        freeFeatures: ["Demo available; no public free tier"],
        rating: 4.4,
        timeSaved: "5–8 hours/week on intake and client follow-up",
      },
      {
        name: "Otter.ai",
        slug: "otter-ai",
        description:
          "AI transcription for client consultations, depositions, and team meetings. Otter transcribes calls in real time, identifies speakers, extracts action items, and makes conversations searchable — never miss a client instruction again.",
        pricing: "Freemium",
        pricingDetails: "Free (600 min/mo); Pro $16.99/mo; Business $30/mo",
        strengths: [
          "Real-time transcription for client calls and Zoom meetings",
          "Speaker identification (attorney vs. client)",
          "Action item extraction from consultation recordings",
          "Searchable transcript archive",
          "Zoom, Google Meet, and Microsoft Teams integration",
          "Export to Word for client file notes",
        ],
        bestFor: "Solo attorneys, small firms, any attorney doing remote client consultations",
        freeFeatures: [
          "600 minutes/month",
          "Basic transcription",
          "Zoom integration",
          "Mobile app",
        ],
        rating: 4.4,
        timeSaved: "1–2 hours/week on consultation notes",
      },
    ],
  },
];

const faqs = [
  {
    question: "Is it ethical for lawyers to use AI tools?",
    answer:
      "Yes, with appropriate oversight. Bar associations in the US (including New York, California, and Florida) have issued guidance confirming attorneys may use AI tools, provided they maintain competence, supervise AI output, protect client confidentiality, and avoid billing clients for time saved by AI. Always verify AI-generated legal research with primary sources.",
  },
  {
    question: "Can AI tools replace legal research databases like Westlaw or Lexis?",
    answer:
      "Not yet. General-purpose AI tools like ChatGPT can hallucinate case citations and should never be used as a primary research source. Purpose-built tools like Casetext CoCounsel and Westlaw AI Precision are trained on verified legal databases and cite verifiable sources — these are the safe options for legal research.",
  },
  {
    question: "What is Harvey AI and how do I get access?",
    answer:
      "Harvey is an enterprise AI platform purpose-built for law firms, backed by OpenAI. It offers legal research, due diligence, contract analysis, and regulatory mapping. Harvey is invitation/enterprise-only — contact them directly for a demo. It's primarily used by BigLaw and Fortune 500 in-house teams.",
  },
  {
    question: "Are AI tools safe for client confidentiality?",
    answer:
      "This depends on the tool. Enterprise tools like Harvey, Casetext, and Ironclad offer data processing agreements (DPAs) and client data segregation. Consumer tools (ChatGPT free, Bard) may use your input for model training — check the terms before uploading client documents. Use enterprise/API versions or tools with explicit attorney-client privilege protections.",
  },
  {
    question: "What AI tools work best for solo and small firm attorneys?",
    answer:
      "For small firms: Claude or ChatGPT (document drafting/review), Clio Duo (practice management), Otter.ai (meeting notes), Spellbook (contract review in Word), and Lawmatics (client intake automation). These are cost-effective and don't require enterprise contracts.",
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
      <span className="ml-1 text-sm font-medium text-gray-600">
        {rating}/5
      </span>
    </div>
  );
}

export default function BestAIToolsForLawyers2026() {
  const totalTools = toolCategories.reduce(
    (sum, cat) => sum + cat.tools.length,
    0
  );

  return (
    <article className="mx-auto max-w-4xl px-4 py-8">
      {/* Hero */}
      <header className="mb-12">
        <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/blog" className="hover:text-blue-600">
            Blog
          </Link>
          <span>→</span>
          <span>AI Tools for Lawyers</span>
        </div>
        <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
          Best AI Tools for Lawyers &amp; Legal Professionals in 2026
        </h1>
        <p className="mb-6 text-xl leading-relaxed text-gray-600">
          {totalTools} AI tools that are transforming legal practice — from
          AI-powered legal research to contract review, demand letter drafting,
          and automated client intake. Cut admin time, bill more hours on
          high-value work.
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          <span>📅 Updated April 2026</span>
          <span>•</span>
          <span>⏱️ 18 min read</span>
          <span>•</span>
          <span>⚖️ {totalTools} tools reviewed</span>
        </div>
      </header>

      {/* Why AI for Legal */}
      <section className="mb-12 rounded-lg bg-indigo-50 p-6">
        <h2 className="mb-3 text-2xl font-bold text-gray-900">
          Why Attorneys Need AI Tools in 2026
        </h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          The average attorney spends <strong>40–60% of their billable day</strong> on
          tasks AI can handle in minutes — legal research, document review, first-draft
          briefs, and client updates. That's not just inefficient; it's revenue left on
          the table.
        </p>
        <p className="mb-4 leading-relaxed text-gray-700">
          Firms using AI legal tools report cutting document review time by{" "}
          <strong>60–80%</strong> and reducing contract turnaround from weeks to
          days. The Cravath-to-solo math is the same: AI lets one attorney do
          the output of two, or deliver faster work that retains premium rates.
        </p>
        <p className="leading-relaxed text-gray-700">
          The ABA, state bars, and courts are now issuing AI guidance — not bans.
          The question isn't <em>whether</em> to use AI, but <em>which tools</em>{" "}
          fit your practice. Here are the {totalTools} that matter most in 2026.
        </p>
      </section>

      {/* Quick Navigation */}
      <nav className="mb-12 rounded-lg border border-gray-200 bg-gray-50 p-6">
        <h2 className="mb-4 text-lg font-bold text-gray-900">
          Jump to Category
        </h2>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-2">
          {toolCategories.map((cat) => (
            <a
              key={cat.category}
              href={`#${cat.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="flex items-center gap-2 rounded-md p-2 text-sm transition-colors hover:bg-white hover:shadow-sm"
            >
              <span>{cat.icon}</span>
              <span className="text-indigo-600 hover:underline">
                {cat.category}
              </span>
              <span className="text-gray-400">({cat.tools.length})</span>
            </a>
          ))}
        </div>
      </nav>

      {/* Tool Categories */}
      {toolCategories.map((category) => (
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
            {category.tools.map((tool, toolIndex) => (
              <div
                key={tool.name}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-gray-900">
                        {toolIndex === 0 ? "🏆 " : ""}
                        {tool.name}
                      </h3>
                      <span className="rounded-full bg-gray-100 px-3 py-0.5 text-xs font-medium text-gray-600">
                        {tool.pricing}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{tool.pricingDetails}</p>
                  </div>
                  <StarRating rating={tool.rating} />
                </div>

                <p className="mb-4 leading-relaxed text-gray-700">{tool.description}</p>

                {tool.timeSaved && (
                  <div className="mb-4 rounded-lg bg-green-50 px-4 py-2 text-sm font-medium text-green-800">
                    ⏱️ Time saved: {tool.timeSaved}
                  </div>
                )}

                <div className="mb-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
                      Key Strengths
                    </h4>
                    <ul className="space-y-1">
                      {tool.strengths.map((strength) => (
                        <li key={strength} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="mt-0.5 text-green-500">✓</span>
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="mb-4">
                      <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
                        Best For
                      </h4>
                      <p className="text-sm text-gray-700">{tool.bestFor}</p>
                    </div>
                    {tool.freeFeatures.length > 0 && (
                      <div>
                        <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
                          Free Features
                        </h4>
                        <ul className="space-y-1">
                          {tool.freeFeatures.map((feature) => (
                            <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                              <span className="mt-0.5 text-blue-500">→</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-4 border-t pt-4 flex items-center gap-4">
                  {getAffiliateUrl(tool.slug) && (
                    <a
                      href={getAffiliateUrl(tool.slug)!}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="text-sm font-medium text-green-600 hover:text-green-800"
                    >
                      Try {tool.name} →
                    </a>
                  )}
                  <Link
                    href={`/tool/${tool.slug}`}
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-800"
                  >
                    View {tool.name} profile →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Comparison Table */}
      <section className="mb-16">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Quick Comparison: Which Tool Is Right for You?</h2>
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Practice Area</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Best AI Tool</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Primary Use</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Starting Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { area: "BigLaw / M&A", tool: "Harvey AI", use: "Research, due diligence, contracts", price: "Enterprise" },
                  { area: "Litigation", tool: "Casetext CoCounsel", use: "Case law research, doc review", price: "$100–150/mo" },
                  { area: "Corporate / Transactional", tool: "Spellbook + Ironclad", use: "Contract drafting and review", price: "$99–500+/mo" },
                  { area: "Personal Injury", tool: "EvenUp AI", use: "Demand letters, damages calculation", price: "Per-case" },
                  { area: "Solo / Small Firm", tool: "Claude + Clio Duo", use: "Drafting, practice management", price: "$20–49/mo" },
                  { area: "Family / Consumer", tool: "Lawmatics + ChatGPT", use: "Intake automation, drafting", price: "$99+/mo" },
                ].map((row) => (
                  <tr key={row.area} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">{row.area}</td>
                    <td className="px-4 py-3 text-indigo-600 font-medium">{row.tool}</td>
                    <td className="px-4 py-3 text-gray-600">{row.use}</td>
                    <td className="px-4 py-3 text-gray-600">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">{faq.question}</h3>
              <p className="leading-relaxed text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mb-16 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 p-8 text-center">
        <h2 className="mb-3 text-2xl font-bold text-gray-900">
          Explore All AI Tools by Category
        </h2>
        <p className="mb-6 text-gray-600">
          Browse 800+ AI tools across writing, coding, research, design, and more.
          Compare pricing, alternatives, and find the right tool for your practice.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/tools"
            className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700 transition"
          >
            Browse All AI Tools →
          </Link>
          <Link
            href="/blog"
            className="rounded-lg border border-indigo-300 px-6 py-3 font-semibold text-indigo-700 hover:bg-indigo-50 transition"
          >
            More AI Guides
          </Link>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </article>
  );
}
