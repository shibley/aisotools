import Link from "next/link";
import type { Metadata } from "next";
import { getAffiliateUrl } from "@/data/affiliate-links";

export const metadata: Metadata = {
  title: "Best AI Tools for Therapists & Counselors in 2026",
  description:
    "The 8 best AI tools for therapists, counselors, and mental health professionals in 2026. Reduce admin time, improve session notes, stay current on evidence-based treatments, and grow your practice.",
  keywords: [
    "best ai tools for therapists",
    "ai for therapists",
    "ai for counselors",
    "ai mental health tools 2026",
    "ai therapy notes software",
    "ai for psychologists",
    "ai practice management therapy",
    "ai clinical notes therapist",
    "therapy documentation ai",
    "ai for private practice therapists",
  ],
  openGraph: {
    title: "Best AI Tools for Therapists & Counselors in 2026",
    description:
      "Reduce documentation time by 60%, grow your practice, and deliver better care. The 8 AI tools every therapist should know in 2026.",
    url: "https://aisotools.com/blog/best-ai-tools-for-therapists-2026",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/blog/best-ai-tools-for-therapists-2026",
  },
};

interface TherapyTool {
  name: string;
  slug: string;
  description: string;
  pricing: string;
  pricingDetails: string;
  strengths: string[];
  bestFor: string;
  rating: number;
  useCase: string;
}

const therapyTools: TherapyTool[] = [
  {
    name: "Upheal",
    slug: "upheal",
    description:
      "Upheal is the leading AI-powered therapy session assistant built specifically for mental health professionals. It listens to your therapy sessions (with client consent) and auto-generates structured progress notes, treatment plan updates, and assessment summaries. Upheal understands clinical language — CBT techniques, presenting problems, behavioral observations, risk assessments — and formats notes to insurance and EHR standards. Used by 30,000+ therapists in private practice and group settings.",
    pricing: "Paid",
    pricingDetails: "Solo $49/mo. Group $39/therapist/mo. Enterprise custom.",
    strengths: [
      "AI generates progress notes from session transcripts",
      "HIPAA-compliant with client consent management",
      "Understands CBT, DBT, psychodynamic, and other modalities",
      "Risk assessment flags and safety planning documentation",
      "Integrates with SimplePractice, TherapyNotes, and Jane",
      "Saves 2-3 hours of documentation per week per therapist",
    ],
    bestFor: "Private practice therapists and group practices using SimplePractice or TherapyNotes",
    rating: 4.7,
    useCase: "Session Notes & Documentation",
  },
  {
    name: "Blueprint (by Therapy Brands)",
    slug: "blueprint-therapy",
    description:
      "Blueprint is the comprehensive AI-powered EHR and practice management platform for therapists. Its AI drafts progress notes, treatment plans, and intake documents from session summaries. Blueprint also includes outcome measurement tools (PHQ-9, GAD-7, PCL-5) with AI-generated trend analysis that shows clients their progress visually. The 2026 version includes AI-powered treatment plan generation based on presenting diagnosis and evidence-based interventions.",
    pricing: "Paid",
    pricingDetails: "Starting $19/mo solo. Group pricing available.",
    strengths: [
      "Full EHR + AI documentation in one platform",
      "Automated outcome measurement with progress tracking",
      "AI-generated treatment plans by diagnosis and modality",
      "Insurance billing and claim submission automation",
      "Client portal with digital intake and session prep",
      "HIPAA-compliant telehealth integration",
    ],
    bestFor: "Therapists wanting an all-in-one EHR with built-in AI",
    rating: 4.5,
    useCase: "EHR & Practice Management",
  },
  {
    name: "ChatGPT (Clinical Tools)",
    slug: "chatgpt",
    description:
      "For therapists, ChatGPT is invaluable for generating psychoeducational handouts, writing client homework assignments, drafting clinical letters, and researching treatment interventions. Ask it to 'create a CBT thought record worksheet for anxiety', 'write a psychoeducation sheet on sleep hygiene for a client with insomnia', or 'what are evidence-based interventions for complex trauma in adults'. Always verify clinical content against authoritative sources and customize to each client.",
    pricing: "Freemium",
    pricingDetails: "Free tier. Plus $20/mo, Team $25/user/mo",
    strengths: [
      "Psychoeducation handout creation by diagnosis",
      "Homework assignment and worksheet generation",
      "Clinical letter drafting (letters to physicians, schools)",
      "Intervention research and treatment modality summaries",
      "Case conceptualization frameworks (CBT, ACT, EMDR, IFS)",
      "Supervision note outlines and peer consultation prep",
    ],
    bestFor: "All therapists for clinical resources and administrative writing",
    rating: 4.5,
    useCase: "Clinical Resources & Writing",
  },
  {
    name: "Woebot Health (Clinical)",
    slug: "woebot",
    description:
      "Woebot Health is an FDA Breakthrough Device-designated AI mental health companion that therapists can prescribe as a between-session support tool for clients. Clients interact with Woebot daily for mood tracking, CBT-based exercises, and crisis resource access between weekly sessions. For therapists, Woebot provides session-level insights showing client mood trends, engagement patterns, and skill practice between appointments — bridging the therapy hour gap.",
    pricing: "Paid",
    pricingDetails: "Enterprise/health system licensing. Individual pricing varies.",
    strengths: [
      "FDA Breakthrough Device for mental health support",
      "Evidence-based CBT, DBT, and mindfulness exercises",
      "Daily mood tracking with therapist dashboard visibility",
      "Crisis resource navigation and safety planning",
      "Between-session skill practice and psychoeducation",
      "Engagement analytics for treatment planning",
    ],
    bestFor: "Therapists with moderate-high caseloads wanting between-session client support",
    rating: 4.3,
    useCase: "Between-Session Client Support",
  },
  {
    name: "Perplexity AI",
    slug: "perplexity",
    description:
      "For evidence-based practice, Perplexity AI is a therapist's fastest research tool. Query 'current evidence for EMDR in complex PTSD 2025', 'DBT vs CBT for borderline personality disorder outcomes', or 'what are the latest APA guidelines for treating OCD' and get sourced answers from peer-reviewed literature in seconds. The Pro version accesses real-time research, making it invaluable for staying current on evolving treatment guidelines and new modality evidence.",
    pricing: "Freemium",
    pricingDetails: "Free tier. Pro $20/mo with unlimited advanced searches",
    strengths: [
      "Evidence-based treatment research with citations",
      "Current clinical guideline lookups (APA, SAMHSA, NICE)",
      "Diagnosis differential research with DSM-5-TR accuracy",
      "Real-time access to recent meta-analyses and RCTs",
      "Natural language queries ('best therapy for social anxiety')",
      "Faster than PubMed for clinical practice questions",
    ],
    bestFor: "All therapists for evidence-based practice and CPD research",
    rating: 4.6,
    useCase: "Evidence-Based Research",
  },
  {
    name: "Otter.ai",
    slug: "otter-ai",
    description:
      "Otter.ai provides real-time transcription of therapy sessions that therapists use as the raw material for their own notes. Unlike Upheal (which auto-generates structured notes), Otter gives therapists the full transcript to reference when writing their own notes in their clinical style. With client consent, therapists record sessions and use the searchable transcript to pull direct quotes, verify session content, and ensure accurate documentation. The $16.99/mo Business plan includes team sharing for group practices.",
    pricing: "Freemium",
    pricingDetails: "Free (300 min/mo). Pro $16.99/mo. Business $30/user/mo.",
    strengths: [
      "Real-time transcription with speaker identification",
      "Searchable session transcripts for accurate documentation",
      "AI meeting summaries and action item extraction",
      "Works on Zoom, Teams, and in-person (via mobile)",
      "Shareable transcripts for supervision review",
      "More affordable than purpose-built therapy AI tools",
    ],
    bestFor: "Therapists who prefer writing their own notes but want transcription support",
    rating: 4.4,
    useCase: "Session Transcription",
  },
  {
    name: "Canva (Therapy Resources)",
    slug: "canva",
    description:
      "Canva's AI tools have become essential for therapists creating client-facing materials. Use Canva AI to generate professional psychoeducation worksheets, CBT exercise handouts, mood tracking charts, group therapy materials, and waiting room posters. The AI design assistant creates branded, professional materials from text descriptions — no design skills needed. With Magic Write, generate the copy and Canva formats it automatically. Therapists in private practice use it to create intake packets, consent forms, and practice branding.",
    pricing: "Freemium",
    pricingDetails: "Free tier. Canva Pro $12.99/mo with full AI features",
    strengths: [
      "AI-generated therapy worksheets and psychoeducation materials",
      "CBT thought records, mood charts, and coping skills cards",
      "Professional practice branding and intake materials",
      "Magic Write generates clinical copy in Canva templates",
      "Group therapy activity materials and visual aids",
      "HIPAA-safe (no client data stored in designs)",
    ],
    bestFor: "Therapists creating client materials, group leaders, and private practice owners",
    rating: 4.5,
    useCase: "Client Materials & Practice Resources",
  },
  {
    name: "Notion AI",
    slug: "notion-ai",
    description:
      "For the business side of a therapy practice, Notion AI is invaluable. Build a searchable library of clinical resources, treatment protocols, and case notes outlines. Use AI to draft practice policies, consent forms, and intake procedures. Create supervision note frameworks, track continuing education hours, and organize referral networks. For group practice owners, Notion AI helps with staff onboarding materials, training documentation, and administrative SOPs.",
    pricing: "Freemium",
    pricingDetails: "Free for personal. Plus $10/mo. Business $18/mo. AI $10/member/mo add-on.",
    strengths: [
      "Searchable clinical resource library",
      "Practice policy and consent form drafting",
      "Supervision tracking and CPD organization",
      "Group practice SOPs and training materials",
      "Referral network database with AI-powered search",
      "Treatment protocol templates by modality",
    ],
    bestFor: "Private practice owners, group practice managers, and clinical supervisors",
    rating: 4.5,
    useCase: "Practice Management & Knowledge Base",
  },
];

const faqs = [
  {
    question: "Are AI therapy documentation tools HIPAA compliant?",
    answer:
      "Purpose-built therapy AI tools like Upheal and Blueprint are designed for HIPAA compliance with Business Associate Agreements (BAAs), end-to-end encryption, and access controls. General AI tools like ChatGPT and Canva should NEVER be used with identifying client information — use them only for templates, generic resources, and administrative writing without client data.",
  },
  {
    question: "Do clients need to consent to AI session recording?",
    answer:
      "Yes, always. Informed consent for AI-assisted documentation is required ethically and legally. This includes clearly explaining what the tool records, how data is stored, who can access it, and how long it's retained. Most states require explicit written consent for any session recording. Update your consent forms to include AI documentation tools before using them.",
  },
  {
    question: "What's the best AI tool for therapy progress notes?",
    answer:
      "Upheal is the top-rated purpose-built tool for therapy progress notes — it understands clinical modalities and formats notes for insurance and EHR standards. Blueprint is best if you also need EHR and billing management. If you prefer writing your own notes but want transcription support, Otter.ai is a more affordable option at $16.99/mo.",
  },
  {
    question: "Can AI help with therapy treatment plan writing?",
    answer:
      "Yes — Blueprint and Upheal both generate evidence-based treatment plan frameworks based on presenting diagnosis and therapeutic modality. ChatGPT can generate treatment plan drafts from case summaries, though these require careful clinical review. Always personalize AI-generated treatment plans to each client's specific history, goals, and circumstances.",
  },
];

export default function BestAIToolsForTherapists() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-4 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
        <span>/</span>
        <span>Mental Health</span>
      </nav>

      <header className="mb-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Best AI Tools for Therapists &amp; Counselors in 2026
        </h1>
        <p className="text-xl leading-relaxed text-gray-600">
          Therapists spend <strong>up to 30% of their working hours on documentation</strong> — progress notes, treatment plans, and administrative paperwork. AI tools designed for mental health professionals can cut that in half while improving note quality, clinical accuracy, and practice sustainability.
        </p>
        <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
          <span>Updated April 2026</span>
          <span>•</span>
          <span>13 min read</span>
        </div>
      </header>

      <section className="mb-12 rounded-lg border border-purple-200 bg-purple-50 p-6">
        <h2 className="mb-4 text-xl font-bold text-purple-900">⚡ Quick Picks</h2>
        <ul className="space-y-2 text-purple-800">
          <li><strong>Best for session notes:</strong> <Link href="/tool/upheal" className="underline">Upheal</Link> — purpose-built AI for therapy documentation</li>
          <li><strong>Best all-in-one EHR:</strong> <Link href="/tool/blueprint-therapy" className="underline">Blueprint</Link> — EHR + AI notes + billing</li>
          <li><strong>Best for between-session support:</strong> <Link href="/tool/woebot" className="underline">Woebot Health</Link> — prescribable AI companion</li>
          <li><strong>Best for clinical resources:</strong> <Link href="/tool/chatgpt" className="underline">ChatGPT</Link> — worksheets, handouts, letters</li>
          <li><strong>Best for evidence research:</strong> <Link href="/tool/perplexity" className="underline">Perplexity AI</Link> — cited clinical literature</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-3xl font-bold text-gray-900">Why Therapists Need AI in 2026</h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          Therapist burnout is at record levels — a 2025 APA survey found <strong>68% of mental health professionals report significant burnout</strong>, with documentation burden cited as the top contributing factor. The 50-minute therapy hour often requires 20-30 minutes of post-session charting. For a 30-client caseload, that&apos;s 10+ hours per week on paperwork alone.
        </p>
        <p className="mb-4 leading-relaxed text-gray-700">
          AI documentation tools like Upheal are giving therapists back those hours — not to see more clients (unless they choose to), but to have a sustainable career, better work-life balance, and more mental energy for the clinical work they trained for.
        </p>
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm text-amber-800">
            <strong>Ethics note:</strong> Never enter client names, identifying information, or session content into general AI tools (ChatGPT, Gemini, etc.). Use HIPAA-compliant tools for anything involving client data.
          </p>
        </div>
      </section>

      <section className="space-y-12">
        <h2 className="text-3xl font-bold text-gray-900">The 8 Best AI Tools for Therapists</h2>
        {therapyTools.map((tool, i) => (
          <div key={tool.slug} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4">
              <div className="mb-1 inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
                {tool.useCase}
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {i + 1}. {tool.name}
              </h3>
              <div className="mt-1 flex items-center gap-3 text-sm text-gray-500">
                <span>⭐ {tool.rating}/5</span>
                <span>•</span>
                <span>{tool.pricing}</span>
              </div>
            </div>

            <p className="mb-4 leading-relaxed text-gray-700">{tool.description}</p>

            <div className="mb-4">
              <h4 className="mb-2 font-semibold text-gray-900">Key Strengths:</h4>
              <ul className="grid gap-1 sm:grid-cols-2">
                {tool.strengths.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-green-500">✓</span> {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-4 border-t border-gray-100 pt-4 text-sm">
              <span className="text-gray-500">💰 {tool.pricingDetails}</span>
              <span className="text-gray-500">🎯 {tool.bestFor}</span>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              {getAffiliateUrl(tool.slug) && (
                <a
                  href={getAffiliateUrl(tool.slug)!}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
                >
                  Try {tool.name} →
                </a>
              )}
              <Link
                href={`/tool/${tool.slug}`}
                className="inline-flex items-center rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700"
              >
                View {tool.name} →
              </Link>
              <Link
                href={`/alternatives/${tool.slug}`}
                className="inline-flex items-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Alternatives
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className="my-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">AI Tools by Therapy Setting</h2>
        <div className="space-y-4">
          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="mb-1 font-semibold text-gray-900">🏠 Private Practice Solo Therapist</h3>
            <p className="text-gray-700"><strong>Upheal</strong> for notes + <strong>Canva</strong> for client materials + <strong>Perplexity</strong> for research. Total: ~$70/mo for significant time savings on a 20-client caseload.</p>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="mb-1 font-semibold text-gray-900">🏢 Group Practice / CMHC</h3>
            <p className="text-gray-700"><strong>Blueprint</strong> for the full practice stack (EHR + AI + billing), <strong>Woebot</strong> for higher-acuity clients needing between-session support, <strong>ChatGPT</strong> for resource development.</p>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="mb-1 font-semibold text-gray-900">🎓 Trainee / Early Career Therapist</h3>
            <p className="text-gray-700"><strong>ChatGPT</strong> (free) for case conceptualization practice and resource generation, <strong>Perplexity</strong> (free) for evidence-based research, <strong>Otter.ai</strong> (free tier) for supervision session transcripts.</p>
          </div>
        </div>
      </section>

      <section className="my-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">{faq.question}</h3>
              <p className="leading-relaxed text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white">
        <h2 className="mb-4 text-3xl font-bold">The Bottom Line for Therapists</h2>
        <p className="mb-6 text-lg leading-relaxed text-purple-50">
          Start with <strong>Upheal</strong> for session documentation — it delivers immediate ROI by cutting charting time in half. Add <strong>Perplexity</strong> for evidence-based research and <strong>ChatGPT</strong> for resource creation. That&apos;s a $70-90/mo investment that saves 8-12 hours per week, prevents burnout, and lets you actually enjoy the clinical work you trained years to do.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/tools" className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-purple-600 transition-colors hover:bg-gray-100">
            Explore All AI Tools →
          </Link>
          <Link href="/blog/best-ai-tools-for-doctors-2026" className="inline-flex items-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-purple-600">
            AI for Doctors →
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Best AI Tools for Therapists & Counselors in 2026",
            description: "Guide to the 8 best AI tools for therapists and counselors in 2026, covering session documentation, EHR management, client resources, and evidence-based research.",
            author: { "@type": "Organization", name: "AISO Tools" },
            publisher: { "@type": "Organization", name: "AISO Tools", url: "https://aisotools.com" },
            datePublished: "2026-04-25",
            dateModified: "2026-04-25",
            url: "https://aisotools.com/blog/best-ai-tools-for-therapists-2026",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />
    </main>
  );
}
