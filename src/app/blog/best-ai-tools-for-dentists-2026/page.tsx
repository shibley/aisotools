import Link from "next/link";
import type { Metadata } from "next";
import { getAffiliateUrl } from "@/data/affiliate-links";

export const metadata: Metadata = {
  title: "Best AI Tools for Dentists in 2026 (Clinical & Practice Management)",
  description:
    "The best AI tools for dentists in 2026 — from AI X-ray analysis and treatment planning to patient communication and practice management. Grow your dental practice with AI.",
  keywords: [
    "best ai tools for dentists",
    "ai for dental practice",
    "dental ai tools 2026",
    "ai dentistry tools",
    "ai for dentists",
    "dental ai software",
    "ai x-ray analysis dentistry",
    "ai dental practice management",
    "best ai for dental offices",
    "artificial intelligence dentistry",
  ],
  openGraph: {
    title: "Best AI Tools for Dentists in 2026 (Clinical & Practice Management)",
    description:
      "From AI-powered X-ray analysis to automated patient reminders — the top AI tools helping dental practices work smarter and see more patients.",
    url: "https://aisotools.com/blog/best-ai-tools-for-dentists-2026",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/blog/best-ai-tools-for-dentists-2026",
  },
};

interface DentalTool {
  rank: number;
  name: string;
  slug: string;
  category: string;
  tagline: string;
  pricingNote: string;
  bestFor: string;
  strengths: string[];
  limitations: string[];
  badge?: string;
}

const tools: DentalTool[] = [
  {
    rank: 1,
    name: "Pearl AI",
    slug: "chatgpt",
    category: "AI X-Ray Analysis",
    tagline: "Best AI for dental radiograph analysis — catches findings you might miss",
    pricingNote: "Contact for pricing (practice-level subscription)",
    bestFor: "Radiographic analysis, finding detection, treatment documentation",
    strengths: [
      "FDA-cleared AI that analyzes X-rays in real-time and highlights potential pathology",
      "Detects caries, bone loss, calculus, and other conditions with clinical-grade accuracy",
      "Second opinion system: reduces missed findings and strengthens case presentations",
      "Automatically generates annotations and documentation for insurance claims",
      "Integrates with major dental practice management software",
    ],
    limitations: [
      "Enterprise pricing — not accessible for solo practitioners on tight budgets",
      "AI findings still require dentist review — not a replacement for clinical judgment",
      "Integration setup requires IT coordination with existing software",
    ],
    badge: "Best for Diagnostics",
  },
  {
    rank: 2,
    name: "Overjet",
    slug: "chatgpt",
    category: "AI Clinical Intelligence",
    tagline: "Best AI for treatment planning documentation and insurance pre-authorization",
    pricingNote: "Contact for pricing (DSO and group practice focus)",
    bestFor: "Multi-location practices, DSOs, high-volume insurance claim processing",
    strengths: [
      "AI measures bone levels, calculus, and lesions with quantitative precision",
      "Generates clinical narratives for insurance pre-authorization automatically",
      "Dental intelligence dashboard: tracks practice-wide clinical patterns and trends",
      "Reduces claim denials by providing objective AI measurements as evidence",
      "Designed for group practices — scales across multiple locations",
    ],
    limitations: [
      "Primarily aimed at DSOs — solo practice pricing model less clear",
      "Requires robust internet connection for cloud-based analysis",
      "AI measurements are diagnostic aids, not replacements for full clinical exam",
    ],
    badge: "Best for DSOs",
  },
  {
    rank: 3,
    name: "Weave",
    slug: "chatgpt",
    category: "Patient Communication",
    tagline: "Best AI for automating patient communication and reducing no-shows",
    pricingNote: "From ~$400/mo (varies by practice size)",
    bestFor: "Appointment reminders, patient recall, reviews, two-way texting",
    strengths: [
      "AI-powered appointment reminders via text, email, and phone — reduces no-shows 40%+",
      "Two-way texting: patients can confirm, reschedule, or ask questions via SMS",
      "Automated recall campaigns: AI identifies overdue patients and sends personalized outreach",
      "Google Review automation: prompts satisfied patients to leave reviews after visits",
      "Integrates with Dentrix, Eaglesoft, Open Dental, and major PMS systems",
    ],
    limitations: [
      "Monthly cost is significant for smaller practices",
      "Setup and training period required to get full value",
      "Phone system replacement adds complexity during transition",
    ],
    badge: "Best for Patient Retention",
  },
  {
    rank: 4,
    name: "ChatGPT",
    slug: "chatgpt",
    category: "General AI Assistant",
    tagline: "Best general-purpose AI for dental content, patient education, and admin",
    pricingNote: "Free (GPT-4o mini) · $20/mo Plus",
    bestFor: "Patient education materials, insurance appeal letters, treatment explanations, marketing copy",
    strengths: [
      "Draft patient-friendly treatment explanations in seconds (crown, root canal, implant)",
      "Write insurance appeal letters with clinical language — significantly faster than manual",
      "Create social media content: dental tips, oral hygiene reminders, before/after education",
      "Summarize complex dental literature for staff training without reading full papers",
      "Custom GPT: build a patient FAQ bot trained on your practice's specific protocols",
    ],
    limitations: [
      "Not trained specifically on dental data — verify clinical information independently",
      "Cannot access your practice management system or patient records",
      "Generated content needs review before sending to patients",
    ],
    badge: "Best for Content & Admin",
  },
  {
    rank: 5,
    name: "Otter.ai",
    slug: "otter-ai",
    category: "Clinical Transcription",
    tagline: "Best AI for transcribing clinical consultations and treatment conferences",
    pricingNote: "Free (300 min/month) · $17/mo Pro",
    bestFor: "Recording and transcribing patient consultations, staff meetings, CE seminars",
    strengths: [
      "Real-time transcription of patient conversations for accurate clinical notes",
      "Meeting summaries: automatically identifies action items from team meetings",
      "Speaker identification: distinguishes dentist, hygienist, and patient voices",
      "Searchable transcripts: find any past consultation or team discussion instantly",
      "Mobile app for chairside or post-visit dictation",
    ],
    limitations: [
      "Not HIPAA-certified by default — requires Business plan + BAA for patient data",
      "Medical/dental terminology accuracy varies — review transcripts before filing",
      "Not integrated with dental PMS — manual copy-paste to treatment notes required",
    ],
    badge: "Best for Transcription",
  },
  {
    rank: 6,
    name: "Jasper",
    slug: "jasper",
    category: "Dental Marketing",
    tagline: "Best AI for dental practice marketing campaigns and content creation",
    pricingNote: "From $49/mo Creator",
    bestFor: "Practice marketing, blog content, Google Ads copy, email newsletters",
    strengths: [
      "Brand voice training: learns your practice's tone for consistent marketing materials",
      "SEO content: creates blog posts targeting local dental keywords",
      "Ad copy for Google Ads, Facebook Ads — optimized for healthcare marketing",
      "Email newsletter content: monthly patient communication in minutes",
      "Multilingual support for practices serving diverse patient populations",
    ],
    limitations: [
      "Higher cost than ChatGPT for similar output quality",
      "Requires human editing for medical content accuracy and compliance",
      "Not specialized for dental — generic marketing AI applied to dentistry",
    ],
  },
  {
    rank: 7,
    name: "Canva",
    slug: "canva",
    category: "Patient Education Design",
    tagline: "Best AI for designing patient education materials and practice marketing visuals",
    pricingNote: "Free · $15/mo Pro",
    bestFor: "Patient handouts, oral hygiene guides, social media posts, waiting room displays",
    strengths: [
      "AI image generation for dental illustrations and educational visuals",
      "1,000+ dental and healthcare templates for patient education materials",
      "Presentation maker: create staff training or patient case presentation slides",
      "Magic Write: generate educational copy to accompany your designed materials",
      "Brand kit: consistent colors and fonts across all practice materials",
    ],
    limitations: [
      "AI-generated medical imagery needs accuracy review — not clinical-grade",
      "Design quality depends on template choice — some look generic",
      "Not a document management or practice management tool",
    ],
    badge: "Best for Design",
  },
  {
    rank: 8,
    name: "Claude",
    slug: "claude",
    category: "Clinical Writing",
    tagline: "Best AI for complex dental writing — treatment plans, grant applications, CE content",
    pricingNote: "Free · $20/mo Pro",
    bestFor: "Detailed treatment plan narratives, research summaries, CE content, clinical protocols",
    strengths: [
      "200K context window: paste entire dental literature articles for comprehensive summaries",
      "Nuanced clinical writing — better than ChatGPT for complex, multi-part documents",
      "Treatment plan narratives: detailed patient-facing explanations with appropriate caveats",
      "Insurance appeal letters with thorough clinical reasoning and supporting rationale",
      "Protocol documentation: format complex clinical procedures into clear staff guides",
    ],
    limitations: [
      "Like all general AI, dental-specific knowledge should be verified",
      "Not connected to practice management systems or patient records",
      "Free tier rate limits hit quickly for heavy daily use",
    ],
    badge: "Best for Complex Writing",
  },
];

const useCaseTable = [
  { area: "Radiograph Analysis", tools: ["Pearl AI", "Overjet"], tip: "AI-assisted X-ray reading catches pathology that fatigue or small screen size might cause you to miss. Pearl AI is best for solo/small practices; Overjet for DSOs." },
  { area: "Patient Communication", tools: ["Weave"], tip: "Automate your entire recall and reminder workflow. 40%+ reduction in no-shows for most practices that implement automated two-way texting." },
  { area: "Insurance & Documentation", tools: ["Overjet", "ChatGPT"], tip: "Overjet's AI measurements strengthen pre-authorization requests. ChatGPT drafts appeal letters for denied claims — faster than dictation or manual typing." },
  { area: "Patient Education", tools: ["ChatGPT", "Canva"], tip: "ChatGPT writes the explanation; Canva designs the handout. Combine both for professional patient education materials in under 20 minutes." },
  { area: "Practice Marketing", tools: ["Jasper", "ChatGPT", "Canva"], tip: "ChatGPT generates blog content targeting 'dentist near me' keywords. Canva designs social media graphics. Together they replace a part-time marketing coordinator." },
  { area: "Clinical Notes", tools: ["Otter.ai", "Claude"], tip: "Otter.ai transcribes chairside conversations (with HIPAA Business plan). Claude expands transcription bullets into full SOAP-format clinical notes." },
];

export default function BestAIToolsForDentistsPage() {
  const year = 2026;

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-950 border-b border-gray-800 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-cyan-500/20 text-cyan-400 text-xs font-medium px-2.5 py-1 rounded-full">
              Dentistry
            </span>
            <span className="bg-blue-500/20 text-blue-400 text-xs font-medium px-2.5 py-1 rounded-full">
              Professional AI Guide
            </span>
            <span className="bg-gray-800 text-gray-400 text-xs font-medium px-2.5 py-1 rounded-full">
              Updated May {year}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best AI Tools for Dentists in {year}
          </h1>
          <p className="text-xl text-gray-400 mb-6 max-w-3xl">
            AI is transforming dental practice — from FDA-cleared radiograph analysis that catches
            missed pathology, to patient communication tools that cut no-shows by 40%. These{" "}
            {tools.length} tools cover clinical, administrative, and marketing needs.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>✓ Clinical AI tools</span>
            <span>✓ Practice management AI</span>
            <span>✓ {tools.length} tools reviewed</span>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Quick Answer */}
        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-6 mb-12">
          <h2 className="font-bold text-cyan-400 text-sm uppercase tracking-wider mb-3">
            Quick Answer — Best AI by Dental Use Case
          </h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><span className="text-white font-medium">AI X-ray analysis:</span> Pearl AI (FDA-cleared, real-time pathology detection)</li>
            <li><span className="text-white font-medium">Reduce no-shows:</span> Weave (automated reminders + two-way texting)</li>
            <li><span className="text-white font-medium">Insurance appeals:</span> ChatGPT or Claude (drafts clinical narratives in minutes)</li>
            <li><span className="text-white font-medium">Patient education content:</span> ChatGPT + Canva (write + design handouts)</li>
            <li><span className="text-white font-medium">Clinical documentation:</span> Otter.ai (chairside transcription) + Claude (note expansion)</li>
          </ul>
        </div>

        {/* Tools List */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Top {tools.length} AI Tools for Dental Practices</h2>
          <div className="space-y-8">
            {tools.map((tool) => (
              <div
                key={`${tool.slug}-${tool.rank}`}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition"
              >
                <div className="flex items-start gap-3 mb-4">
                  <span className="bg-gray-800 text-gray-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {tool.rank}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-0.5">
                      <h3 className="text-xl font-bold">{tool.name}</h3>
                      {tool.badge && (
                        <span className="bg-cyan-500/20 text-cyan-400 text-xs font-medium px-2 py-0.5 rounded-full">
                          {tool.badge}
                        </span>
                      )}
                      <span className="bg-gray-800 text-gray-500 text-xs px-2 py-0.5 rounded-full">
                        {tool.category}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">{tool.tagline}</p>
                  </div>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg px-4 py-2.5 mb-4 text-sm">
                  <span className="text-blue-400 font-medium">Pricing: </span>
                  <span className="text-gray-300">{tool.pricingNote}</span>
                </div>

                <p className="text-gray-400 text-sm mb-4">
                  <span className="text-gray-300 font-medium">Best for:</span>{" "}
                  {tool.bestFor}
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-semibold text-green-400 mb-2">✓ Strengths</h4>
                    <ul className="space-y-1">
                      {tool.strengths.map((s, i) => (
                        <li key={i} className="text-sm text-gray-300 flex gap-2">
                          <span className="text-green-500 flex-shrink-0">•</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-red-400 mb-2">✗ Limitations</h4>
                    <ul className="space-y-1">
                      {tool.limitations.map((l, i) => (
                        <li key={i} className="text-sm text-gray-300 flex gap-2">
                          <span className="text-red-500 flex-shrink-0">•</span>
                          {l}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-3 flex-wrap items-center">
                  {(() => {
                    const affiliateUrl = getAffiliateUrl(tool.slug);
                    return affiliateUrl ? (
                      <a
                        href={affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                      >
                        Try {tool.name} →
                      </a>
                    ) : null;
                  })()}
                  <Link
                    href={`/tool/${tool.slug}`}
                    className="text-sm text-blue-400 hover:text-blue-300 transition"
                  >
                    View tool details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Case Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">AI Tools by Dental Practice Area</h2>
          <div className="space-y-3">
            {useCaseTable.map((row, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-semibold text-sm">{row.area}</h3>
                      {row.tools.map((t) => (
                        <span key={t} className="bg-cyan-500/20 text-cyan-400 text-xs px-2 py-0.5 rounded-full">{t}</span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-400">{row.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "Is AI safe to use for dental diagnosis?",
                a: "FDA-cleared AI tools like Pearl AI and Overjet are specifically designed as clinical decision support tools — they highlight potential findings for dentist review, not replace clinical judgment. These tools go through rigorous clinical validation before FDA clearance. General AI (ChatGPT, Claude) should never be used for clinical diagnosis — only for administrative tasks, content creation, and documentation drafting that is then reviewed by the dentist.",
              },
              {
                q: "Are AI tools HIPAA compliant for dental practices?",
                a: "Dedicated dental AI tools (Pearl AI, Overjet, Weave) are designed with HIPAA compliance in mind and offer Business Associate Agreements (BAAs). General AI tools like ChatGPT are HIPAA compliant only when using the Enterprise version with a signed BAA — the consumer versions are not. For Otter.ai, you need the Business plan to get a BAA. Always sign a BAA before using any AI tool with patient data.",
              },
              {
                q: "Can AI help with insurance pre-authorization for dental procedures?",
                a: "Yes — this is one of the most practical applications. Overjet's AI generates quantitative bone level measurements and condition severity scores that strengthen pre-authorization requests with objective evidence. ChatGPT or Claude can draft the narrative portion of pre-authorization letters from your clinical notes in minutes, significantly faster than writing from scratch. Practices report significant reduction in claim denials when AI-generated measurements accompany submissions.",
              },
              {
                q: "What AI tools can help attract more dental patients?",
                a: "Weave's automated Google Review prompting is the highest-ROI patient acquisition tool — more reviews improves local SEO ranking. ChatGPT can write blog posts targeting 'dentist near me [city]' and dental condition keywords. Canva AI creates professional social media content and patient education materials. Jasper handles ongoing email newsletter content. The combination of more reviews plus local SEO content typically generates measurable new patient growth within 3-6 months.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: `Best AI Tools for Dentists in ${year}`,
              description: "The best AI tools for dentists in 2026 — from FDA-cleared X-ray analysis to patient communication automation and practice marketing.",
              datePublished: "2026-05-06",
              dateModified: "2026-05-06",
              author: { "@type": "Organization", name: "AISO Tools" },
              publisher: { "@type": "Organization", name: "AISO Tools", url: "https://aisotools.com" },
              mainEntityOfPage: { "@type": "WebPage", "@id": "https://aisotools.com/blog/best-ai-tools-for-dentists-2026" },
              FAQPage: {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Is AI safe to use for dental diagnosis?",
                    acceptedAnswer: { "@type": "Answer", text: "FDA-cleared AI tools like Pearl AI are designed as clinical decision support — they highlight findings for dentist review, not replace judgment. General AI should only be used for administrative tasks, not clinical diagnosis." },
                  },
                  {
                    "@type": "Question",
                    name: "Are AI tools HIPAA compliant for dental practices?",
                    acceptedAnswer: { "@type": "Answer", text: "Dedicated dental AI tools offer BAAs. ChatGPT is HIPAA compliant only on Enterprise with signed BAA. Otter.ai requires Business plan for BAA. Always sign a BAA before using AI with patient data." },
                  },
                ],
              },
            }),
          }}
        />

        {/* CTA */}
        <section className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Browse All Healthcare AI Tools</h2>
          <p className="text-gray-400 mb-6">
            Compare 800+ AI tools including healthcare and medical AI — with pricing, features, and professional reviews.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/blog/best-ai-tools-for-healthcare-professionals-2026"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-3 rounded-lg font-medium transition text-sm"
            >
              AI for Healthcare →
            </Link>
            <Link
              href="/blog/best-ai-tools-for-doctors-2026"
              className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-3 rounded-lg font-medium transition text-sm"
            >
              AI for Doctors →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
