import { tools } from "@/data/tools";
import { getAffiliateUrl } from "@/data/affiliate-links";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Tools for Lawyers 2026: 10 Legal AI Platforms Reviewed",
  description:
    "Compare the best AI tools for lawyers and legal professionals in 2026. From contract review (Harvey AI, Spellbook) to legal research (CoCounsel, Westlaw AI) and consumer legal help (DoNotPay).",
  keywords: [
    "best AI law tools",
    "AI for lawyers",
    "legal AI tools",
    "AI contract review",
    "AI legal research",
    "AI for legal professionals",
    "legal tech AI",
    "AI law software",
  ],
  openGraph: {
    title: "Best AI Tools for Lawyers 2026: 10 Legal AI Platforms Reviewed",
    description:
      "Expert guide to AI tools for legal professionals. Contract review, legal research, due diligence, and compliance tools ranked by real-world impact.",
    url: "https://aisotools.com/best-ai-law-tools",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/best-ai-law-tools",
  },
};

interface LegalTool {
  name: string;
  slug: string;
  category: string;
  description: string;
  pricing: string;
  pricingDetails: string;
  keyFeatures: string[];
  pros: string[];
  cons: string[];
  bestFor: string;
  rating: number;
  legalImpact: string;
}

const legalTools: LegalTool[] = [
  {
    name: "Harvey AI",
    slug: "harvey-ai",
    category: "General Legal AI",
    description: "AI legal work platform built specifically for law firms and legal departments. Harvey uses a custom-trained LLM to handle contract analysis, legal research, due diligence, regulatory compliance, and document drafting. Trusted by elite firms including Allen & Overy and backed by OpenAI.",
    pricing: "Paid",
    pricingDetails: "Enterprise — typically $100-200/user/mo. Contact for pricing",
    keyFeatures: ["Custom legal LLM", "Contract review", "Legal research", "Due diligence", "Regulatory compliance", "Document drafting"],
    pros: ["Purpose-built legal AI — not a chatbot with a legal skin", "Trusted by top-tier global law firms", "Understands legal nuance and jurisdiction specifics", "Backed by OpenAI with cutting-edge model access"],
    cons: ["Enterprise-only — not accessible to solo practitioners", "Requires firm-level implementation and IT setup", "Limited public documentation about capabilities", "Pricing opaque until sales process"],
    bestFor: "Large law firms (Am Law 200) handling complex corporate and transactional work",
    rating: 4.5,
    legalImpact: "Reduces legal research time by 60-80% and contract review by 40-50%",
  },
  {
    name: "CoCounsel (by Thomson Reuters)",
    slug: "casetext",
    category: "Legal Research",
    description: "AI legal research assistant built by Casetext (acquired by Thomson Reuters). CoCounsel uses GPT-4 to search case law, analyze contracts, review documents, and generate legal memos. The first AI assistant certified for legal research by a major legal publisher.",
    pricing: "Paid",
    pricingDetails: "Included in Westlaw Precision plans. Standalone starts ~$100/user/mo",
    keyFeatures: ["Case law research", "Contract analysis", "Document review", "Legal memo generation", "Deposition prep", "Timeline creation"],
    pros: ["Backed by Thomson Reuters' legal database", "Certified accuracy for legal research", "Reduces document review time dramatically", "Integrates with Westlaw for comprehensive research"],
    cons: ["Requires Westlaw subscription for full power", "Expensive for solo/small firms", "AI answers need attorney verification", "Limited non-US jurisdiction coverage"],
    bestFor: "Litigation and research-heavy practices needing AI-powered case law analysis",
    rating: 4.4,
    legalImpact: "Cuts legal research time by 50-70% while improving research comprehensiveness",
  },
  {
    name: "Spellbook",
    slug: "spellbook",
    category: "Contract Drafting",
    description: "AI contract drafting assistant that works inside Microsoft Word. Spellbook reviews contracts, suggests clauses, identifies missing provisions, and generates language based on deal context — trained on billions of data points from real legal agreements.",
    pricing: "Paid",
    pricingDetails: "Contact for pricing — typically $200-500/user/mo for law firms",
    keyFeatures: ["Microsoft Word integration", "Clause suggestion engine", "Missing provision detection", "Context-aware drafting", "Precedent library", "Risk identification"],
    pros: ["Works inside Word — zero workflow disruption", "Trained on real legal agreements for accuracy", "Missing provision detection catches costly oversights", "Clause suggestions accelerate drafting significantly"],
    cons: ["Word-only — no Google Docs or web version", "Premium pricing limits solo practitioner access", "Requires training to maximize value", "Enterprise sales process"],
    bestFor: "Transactional lawyers drafting and reviewing contracts daily",
    rating: 4.3,
    legalImpact: "Reduces contract drafting time by 30-50% and catches 20% more missing provisions",
  },
  {
    name: "Claude (Anthropic)",
    slug: "claude",
    category: "General-Purpose Legal AI",
    description: "While not law-specific, Claude's 200K context window makes it the most popular general-purpose AI for legal work. Lawyers use Claude to analyze entire contracts, summarize depositions, review lengthy documents, and draft correspondence — all in one conversation.",
    pricing: "Freemium",
    pricingDetails: "Free tier. Pro $20/mo, Team $25/user/mo, Enterprise custom",
    keyFeatures: ["200K context window", "Long document analysis", "Careful reasoning", "Privacy-focused", "Multi-document comparison", "Drafting assistance"],
    pros: ["200K context fits entire contracts and depositions", "More careful and less likely to hallucinate", "Affordable for solo and small firm use", "Strong privacy commitments"],
    cons: ["Not trained specifically on legal data", "No case law database access", "Needs careful prompting for legal tasks", "Can't replace legal research tools"],
    bestFor: "Solo practitioners and small firms wanting capable AI without specialized legal tool pricing",
    rating: 4.5,
    legalImpact: "Saves 10-15 hours/week on document review and drafting for solo practitioners",
  },
  {
    name: "Lexis+ AI",
    slug: "lexisnexis-ai",
    category: "Legal Research",
    description: "LexisNexis's AI legal assistant powered by large language models with access to the comprehensive Lexis database. Provides conversational legal research, document summarization, and drafting — all grounded in authoritative legal sources.",
    pricing: "Paid",
    pricingDetails: "Included in Lexis+ subscriptions. Plans from $75-200+/user/mo",
    keyFeatures: ["Conversational legal research", "Lexis database grounding", "Citation verification", "Document summarization", "Brief analysis", "Practice area specialization"],
    pros: ["Grounded in authoritative Lexis legal database", "AI hallucination risk reduced by source verification", "Deep practice area knowledge", "Integrates with existing Lexis workflows"],
    cons: ["Requires Lexis subscription", "Expensive for small practices", "AI features still being expanded", "US-centric coverage"],
    bestFor: "Firms already on LexisNexis wanting AI-enhanced legal research",
    rating: 4.2,
    legalImpact: "Reduces research time by 40-60% with source-verified citations",
  },
  {
    name: "DoNotPay",
    slug: "donotpay",
    category: "Consumer Legal",
    description: "AI-powered consumer legal assistant that helps individuals fight fees, cancel subscriptions, dispute charges, and handle small legal matters without a lawyer. Automates legal letters, appeals tickets, and negotiates bills.",
    pricing: "Paid",
    pricingDetails: "$36/year for unlimited access to all services",
    keyFeatures: ["Auto-generated legal letters", "Parking ticket appeals", "Subscription cancellation", "Bill negotiation", "Fee disputes", "Small claims filing"],
    pros: ["Incredibly affordable — $3/month for legal help", "Genuinely useful for routine legal tasks", "Subscription cancellation feature is excellent", "Democratizes access to legal recourse"],
    cons: ["Limited to simple legal matters only", "Faced legal issues for overpromising capabilities", "Can't replace attorney advice for complex matters", "Success rates vary by jurisdiction"],
    bestFor: "Consumers wanting to fight fees, cancel subscriptions, and handle simple legal tasks",
    rating: 3.9,
    legalImpact: "Saves consumers $500-2,000/year in disputed fees and unwanted subscriptions",
  },
  {
    name: "Ironclad AI",
    slug: "ironclad",
    category: "Contract Lifecycle",
    description: "AI-powered contract lifecycle management platform that automates the entire contract process — from creation and negotiation to execution and obligation tracking. Ironclad's AI assists with playbook-guided negotiation, clause extraction, and contract analytics.",
    pricing: "Paid",
    pricingDetails: "Custom pricing. Enterprise starts around $50K/year for teams",
    keyFeatures: ["Contract creation workflows", "AI-assisted negotiation", "Clause extraction", "Obligation tracking", "Contract analytics", "E-signature integration"],
    pros: ["End-to-end contract lifecycle management", "Playbook-guided negotiation reduces risk", "Strong analytics on contract portfolio", "Integrates with Salesforce, Slack, etc."],
    cons: ["Enterprise pricing — not for small firms", "Complex implementation (weeks to months)", "Requires organizational change management", "Overkill for firms with low contract volume"],
    bestFor: "In-house legal teams at companies processing 500+ contracts/year",
    rating: 4.3,
    legalImpact: "Reduces contract turnaround time by 50% and errors by 30%",
  },
  {
    name: "EvenUp",
    slug: "evenup",
    category: "Personal Injury",
    description: "AI platform specifically for personal injury attorneys that automates demand letter generation. EvenUp analyzes medical records, treatment histories, and case details to generate comprehensive demand packages — work that typically takes paralegals days.",
    pricing: "Paid",
    pricingDetails: "Per-demand pricing — typically $500-1,500 per demand package",
    keyFeatures: ["Medical record analysis", "Demand letter generation", "Treatment timeline creation", "Damages calculation", "Case valuation", "Supporting document assembly"],
    pros: ["Saves 10-20 hours per demand letter", "Consistent quality across all demands", "Comprehensive medical record analysis", "Proven to increase settlement values"],
    cons: ["Only useful for personal injury", "Per-demand pricing adds up", "AI recommendations need attorney review", "Limited to US jurisdictions"],
    bestFor: "Personal injury law firms wanting to scale demand letter production",
    rating: 4.3,
    legalImpact: "Increases demand letter output by 5x and raises settlement values by 10-30%",
  },
  {
    name: "Relativity (RelativityOne)",
    slug: "relativity",
    category: "eDiscovery",
    description: "Leading AI-powered eDiscovery platform for document review in litigation and investigations. Relativity's AI continuously learns from reviewer decisions to prioritize the most relevant documents, dramatically reducing the volume humans need to review.",
    pricing: "Paid",
    pricingDetails: "Usage-based — typically $18-30/GB/mo. Enterprise contracts available",
    keyFeatures: ["AI-assisted document review", "Predictive coding", "Active learning", "Concept clustering", "Privilege detection", "Production automation"],
    pros: ["Industry standard for eDiscovery", "AI reduces document review by 50-90%", "Active learning improves accuracy over time", "Massive scale — handles millions of documents"],
    cons: ["Complex setup and administration", "Expensive for large data volumes", "Requires trained review teams", "Learning curve for AI features"],
    bestFor: "Litigation teams handling document-intensive cases and investigations",
    rating: 4.4,
    legalImpact: "Reduces document review costs by 50-80% while improving accuracy",
  },
  {
    name: "ChatGPT for Legal",
    slug: "chatgpt",
    category: "General-Purpose Legal AI",
    description: "OpenAI's ChatGPT has become a daily tool for many lawyers — used for drafting emails, summarizing documents, explaining legal concepts, brainstorming arguments, and initial research. Custom GPTs allow firms to create specialized legal assistants.",
    pricing: "Freemium",
    pricingDetails: "Free tier. Plus $20/mo, Team $25/user/mo, Enterprise custom",
    keyFeatures: ["Versatile legal drafting", "Document summarization", "Legal concept explanation", "Custom GPTs for law", "Research assistance", "Multi-language support"],
    pros: ["Most versatile and accessible AI for legal work", "Custom GPTs create specialized legal assistants", "Free tier useful for basic tasks", "Enterprise plan meets security requirements"],
    cons: ["Not trained on legal databases", "Can hallucinate citations (critical risk!)", "No Westlaw or Lexis integration", "Requires careful verification of all output"],
    bestFor: "Lawyers wanting a general-purpose AI assistant for everyday legal tasks",
    rating: 4.4,
    legalImpact: "Saves lawyers 5-10 hours/week on drafting, research prep, and routine tasks",
  },
];

function getRatingColor(rating: number): string {
  if (rating >= 4.5) return "text-green-400";
  if (rating >= 4.0) return "text-blue-400";
  return "text-yellow-400";
}

function getToolUrl(slug: string): string {
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) return "#";
  return getAffiliateUrl(tool.slug) || tool.url;
}

export default function BestAILawToolsPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <section className="relative py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/30 to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-1.5 text-sm text-amber-400 ring-1 ring-amber-500/20">
            ⚖️ Updated April 2026
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Best AI Tools for Lawyers in 2026
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            AI is transforming legal practice. From contract review and legal research to eDiscovery and demand letters — 
            these tools help lawyers work faster without compromising quality. Ranked by real impact on legal workflows.
          </p>
        </div>
      </section>

      {/* Warning Banner */}
      <section className="mx-auto max-w-4xl px-4 pb-8">
        <div className="rounded-xl bg-amber-500/5 p-4 ring-1 ring-amber-500/20">
          <p className="text-sm text-amber-400">
            ⚠️ <strong>Important:</strong> AI tools should augment, not replace, legal judgment. All AI outputs require attorney review. 
            Courts have sanctioned lawyers for submitting AI-generated citations without verification. Always verify before filing.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16">
        <div className="space-y-10">
          {legalTools.map((tool, index) => (
            <article key={tool.slug} id={tool.slug} className="scroll-mt-24">
              <div className="rounded-xl bg-gray-900/50 p-6 ring-1 ring-gray-800 transition hover:ring-gray-700">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-1 flex items-center gap-3">
                      <span className="text-sm text-gray-500">#{index + 1}</span>
                      <h3 className="text-2xl font-bold">{tool.name}</h3>
                      <span className="rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs text-amber-400 ring-1 ring-amber-500/20">
                        {tool.category}
                      </span>
                    </div>
                    <p className="text-gray-400">{tool.description}</p>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${getRatingColor(tool.rating)}`}>{tool.rating}</div>
                    <div className="text-xs text-gray-500">/ 5.0</div>
                  </div>
                </div>

                <div className="mb-4 rounded-lg bg-amber-500/5 p-3 ring-1 ring-amber-500/20">
                  <p className="text-sm text-amber-400">⚖️ Impact: {tool.legalImpact}</p>
                </div>

                <div className="mb-4">
                  <span className="text-sm text-gray-400">Pricing: </span>
                  <span className="text-sm text-gray-300">{tool.pricingDetails}</span>
                </div>

                <div className="mb-4">
                  <h4 className="mb-2 text-sm font-semibold text-gray-300">Key Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {tool.keyFeatures.map((f) => (
                      <span key={f} className="rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300">{f}</span>
                    ))}
                  </div>
                </div>

                <div className="mb-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-green-400">✅ Strengths</h4>
                    <ul className="space-y-1 text-sm text-gray-300">
                      {tool.pros.map((p) => (<li key={p}>• {p}</li>))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-red-400">⚠️ Limitations</h4>
                    <ul className="space-y-1 text-sm text-gray-300">
                      {tool.cons.map((c) => (<li key={c}>• {c}</li>))}
                    </ul>
                  </div>
                </div>

                <p className="mb-4 text-sm text-gray-400">
                  <strong className="text-gray-300">Best for:</strong> {tool.bestFor}
                </p>

                <div className="flex gap-3">
                  <a href={getToolUrl(tool.slug)} target="_blank" rel="noopener noreferrer"
                    className="rounded-lg bg-amber-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-amber-500">
                    Try {tool.name} →
                  </a>
                  <Link href={`/tool/${tool.slug}`}
                    className="rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-gray-300 transition hover:bg-gray-700">
                    Full Review
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16">
        <h2 className="mb-6 text-2xl font-bold">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="group rounded-xl bg-gray-900/50 p-4 ring-1 ring-gray-800">
            <summary className="cursor-pointer font-medium">What are the best AI tools for lawyers?</summary>
            <p className="mt-3 text-gray-400">The best AI tools for lawyers in 2026 are Harvey AI for general legal work, CoCounsel (Casetext) for legal research, Spellbook for contract drafting, Claude for document analysis, and Relativity for eDiscovery. Solo practitioners often get the most value from Claude or ChatGPT Enterprise given their versatility and lower price point.</p>
          </details>
          <details className="group rounded-xl bg-gray-900/50 p-4 ring-1 ring-gray-800">
            <summary className="cursor-pointer font-medium">Is AI safe to use in legal practice?</summary>
            <p className="mt-3 text-gray-400">AI is safe when used properly as an augmentation tool, not a replacement for legal judgment. Key safety practices: always verify AI-generated citations, use purpose-built legal AI (Harvey, CoCounsel) over general chatbots for research, never submit AI output without review, and maintain client confidentiality by using enterprise-grade tools with proper data handling agreements.</p>
          </details>
          <details className="group rounded-xl bg-gray-900/50 p-4 ring-1 ring-gray-800">
            <summary className="cursor-pointer font-medium">How much do legal AI tools cost?</summary>
            <p className="mt-3 text-gray-400">Legal AI costs range widely: Claude Pro ($20/mo) and ChatGPT ($20/mo) for general-purpose use, specialized tools like Spellbook ($200-500/user/mo) and Harvey ($100-200/user/mo) for firms, and enterprise platforms like Relativity ($18-30/GB/mo). For solo practitioners, Claude at $20/mo offers the best value. For firms, Harvey or CoCounsel provide the highest ROI despite premium pricing.</p>
          </details>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16">
        <h2 className="mb-4 text-lg font-semibold text-gray-400">Related Guides</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/best-ai-tools-for-business" className="rounded-lg bg-gray-800 px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Best AI for Business →</Link>
          <Link href="/best-ai-writing-tools" className="rounded-lg bg-gray-800 px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Best AI Writing Tools →</Link>
          <Link href="/best-ai-tools-for-researchers" className="rounded-lg bg-gray-800 px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Best AI for Researchers →</Link>
          <Link href="/best-ai-tools-for-productivity" className="rounded-lg bg-gray-800 px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Best AI Productivity Tools →</Link>
        </div>
      </section>
    </div>
  );
}
