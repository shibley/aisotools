import { tools } from "@/data/tools";
import { getAffiliateUrl } from "@/data/affiliate-links";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Interview Prep Tools in 2026: Practice, Prepare, Perform",
  description:
    "Discover the 8 best AI interview preparation tools in 2026. From AI mock interviews and real-time coaching to resume optimization and offer negotiation — tools that land you the job.",
  keywords: [
    "best ai interview prep tools",
    "ai mock interview",
    "ai interview practice",
    "ai interview preparation 2026",
    "ai job interview coach",
    "ai resume optimizer",
    "mock interview ai",
    "ai for job interviews",
    "interview prep ai",
    "ai behavioral interview practice",
  ],
  openGraph: {
    title: "Best AI Interview Prep Tools in 2026: Practice, Prepare, Perform",
    description:
      "The definitive guide to AI interview preparation tools in 2026. Compare AI mock interviewers, real-time coaches, resume optimizers, and behavioral practice tools.",
    url: "https://aisotools.com/blog/best-ai-interview-prep-tools-2026",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/blog/best-ai-interview-prep-tools-2026",
  },
};

interface InterviewTool {
  name: string;
  slug: string;
  category: string;
  description: string;
  pricing: string;
  pricingDetails: string;
  strengths: string[];
  bestFor: string;
  rating: number;
}

const interviewTools: InterviewTool[] = [
  {
    name: "ChatGPT",
    slug: "chatgpt",
    category: "AI Mock Interviewer",
    description:
      "ChatGPT is the most flexible AI interview preparation tool available — it can simulate any interview type (behavioral, technical, case study, panel), adapt to any industry, and play any interviewer persona you specify. Tell ChatGPT 'act as a Google engineering manager conducting a system design interview for a senior SWE role' and get a realistic, challenging practice session. The voice mode in the mobile app enables true spoken interview practice. After each answer, ask ChatGPT to score your response using the STAR method, identify weak points, and suggest stronger versions. For behavioral interview preparation, ChatGPT can generate 50 likely questions for any specific role and then drill you until your answers are polished.",
    pricing: "Freemium",
    pricingDetails: "Free (GPT-4o limited). Plus $20/mo for voice mode and full access.",
    strengths: [
      "Simulates any interview type — behavioral, technical, case study, system design",
      "Voice mode enables real spoken interview practice",
      "Scores answers with STAR method feedback",
      "Generates role-specific question banks for any company",
      "Plays multiple interviewer personas including hostile interviews",
    ],
    bestFor: "Job seekers who want flexible, customizable mock interview practice across any role or interview style",
    rating: 4.8,
  },
  {
    name: "Claude",
    slug: "claude",
    category: "Answer Coaching & Resume Review",
    description:
      "Claude excels at two critical interview prep tasks: refining your answers and improving your resume. For answer coaching, paste your draft behavioral answer and Claude will assess its clarity, specificity, and impact — suggesting concrete improvements without generic advice. Unlike ChatGPT which tends toward encouragement, Claude is more likely to identify actual weaknesses and suggest structural changes. For resume optimization, Claude analyzes your resume against a specific job description, identifies keyword gaps, rewrites bullet points for stronger impact, and flags ATS-unfriendly formatting. Claude's longer context window means it can review a full resume plus job description simultaneously for truly relevant feedback.",
    pricing: "Freemium",
    pricingDetails: "Free tier. Pro $20/mo, Team $25/user/mo.",
    strengths: [
      "Critically evaluates answer quality with specific improvement suggestions",
      "Resume optimization against specific job descriptions",
      "Identifies ATS keyword gaps in your application",
      "Rewrites bullet points for stronger quantified impact",
      "More honest about weaknesses than flattery-prone alternatives",
    ],
    bestFor: "Job seekers who want rigorous answer feedback and resume optimization tailored to specific job descriptions",
    rating: 4.7,
  },
  {
    name: "Perplexity",
    slug: "perplexity",
    category: "Company & Industry Research",
    description:
      "Thorough company research is one of the highest-leverage interview prep activities — and Perplexity makes it faster than any alternative. Ask Perplexity to research a company's recent news, products, culture, leadership team, financial performance, and strategic priorities, and get comprehensive, cited answers in minutes. For 'why do you want to work here' and 'where do you see this company in 5 years' questions, Perplexity's real-time information is critical — referencing a news article from last week signals genuine research. Deep Research can generate a 3-5 page company brief covering everything you need to know before the interview, including likely challenges and industry context.",
    pricing: "Freemium",
    pricingDetails: "Free tier. Pro $20/mo for Deep Research.",
    strengths: [
      "Real-time company research with cited, up-to-date information",
      "Deep Research generates comprehensive pre-interview company briefs",
      "Industry context and competitive landscape analysis",
      "Recent news, product launches, and leadership changes",
      "Identifies company challenges for 'how you can add value' framing",
    ],
    bestFor: "Job seekers who want thorough, cited company research before interviews to stand out with genuine preparation",
    rating: 4.6,
  },
  {
    name: "Notion AI",
    slug: "notion-ai",
    category: "Interview Preparation System",
    description:
      "Notion combined with Notion AI creates a comprehensive interview preparation system. Build a database of every behavioral question you've been asked or might be asked, linked to your STAR answers. Use Notion AI to generate additional questions you haven't thought of, expand thin answers with more specific details, and create company-specific preparation pages. The 'Interview Vault' approach — cataloging every strong story from your experience and mapping them to competency questions — is used by top performers who nail every interview. Notion AI can suggest which story best fits which question category and help you adapt the same story for different interview contexts.",
    pricing: "Freemium",
    pricingDetails: "Free (limited). Plus $12/user/mo, Business $18/user/mo. AI add-on included in paid plans.",
    strengths: [
      "Builds personal story vault linking experiences to competencies",
      "AI generates additional questions you haven't anticipated",
      "Company-specific prep pages for each interview",
      "Maps your best stories to multiple question types",
      "Tracks all interviews, outcomes, and lessons learned",
    ],
    bestFor: "Systematic job seekers who want to build a structured, reusable interview preparation system",
    rating: 4.4,
  },
  {
    name: "Grammarly",
    slug: "grammarly",
    category: "Written Communication Polish",
    description:
      "The interview process extends beyond spoken answers — cover letters, follow-up emails, LinkedIn messages, and application responses all shape recruiter and hiring manager impressions. Grammarly ensures every written touchpoint is polished and professional. The Business Communication goals feature calibrates suggestions for hiring context — formal, confident, clear. For non-native English speakers, Grammarly is particularly valuable: it catches subtle grammar errors that signal language proficiency issues to ATS systems and human reviewers. The real-time correction in LinkedIn messages, follow-up emails, and application portals means you're always presenting your strongest written communication.",
    pricing: "Freemium",
    pricingDetails: "Free (basic). Premium $12/mo (annual) with full suggestions.",
    strengths: [
      "Polishes cover letters, follow-up emails, and application responses",
      "Business Communication mode for professional tone calibration",
      "Real-time correction across all web platforms including LinkedIn",
      "Catches subtle grammar issues that affect ATS scoring",
      "Confidence and clarity improvements beyond grammar",
    ],
    bestFor: "Job seekers who want error-free written communication across all written touchpoints in the application process",
    rating: 4.5,
  },
  {
    name: "Otter AI",
    slug: "otter-ai",
    category: "Interview Recording & Review",
    description:
      "Otter AI enables a powerful interview review loop: record your mock interview practice sessions (with a friend, coach, or yourself), get automatic transcripts, and review your exact words rather than relying on memory. Hearing and reading what you actually said versus what you thought you said is revelatory — filler words, incomplete answers, and weak phrasing become obvious. After real interviews that allow note-taking, Otter transcribes your notes and questions asked for post-interview debriefs. The searchable transcript archive means your best answer formulations are always accessible to review before future interviews.",
    pricing: "Freemium",
    pricingDetails: "Free (300 min/mo). Pro $16.99/mo, Business $30/user/mo.",
    strengths: [
      "Records and transcribes mock interview practice sessions",
      "Review exact words said vs. intended for improvement",
      "Catches filler words, incomplete answers, and weak phrasing",
      "Transcribes notes and questions from real interviews for debriefs",
      "Searchable archive of your best answer formulations",
    ],
    bestFor: "Job seekers who want to record mock interviews for detailed self-review and track improvement over time",
    rating: 4.3,
  },
  {
    name: "Jasper AI",
    slug: "jasper",
    category: "Cover Letter & Application Writing",
    description:
      "Jasper AI's long-form content generation capabilities make it particularly effective for cover letters and longer application responses. Unlike ChatGPT which can produce generic output, Jasper's trained tone controls allow you to write in a professional voice that matches the company culture — startup casual vs. enterprise formal. For companies requiring essays on 'why this role' or 'what innovation means to you,' Jasper helps structure and develop your thinking into polished prose. The AI Document editor lets you iteratively refine cover letters with specific instructions — 'make this paragraph more specific to the company's AI strategy' — faster than prompt-chain approaches.",
    pricing: "Paid",
    pricingDetails: "Creator $49/mo, Pro $69/mo, Business custom.",
    strengths: [
      "Tone controls for culture-matched cover letters",
      "Long-form essay responses for application questions",
      "Document editor for iterative cover letter refinement",
      "Company-specific customization at scale",
      "Handles multiple application formats — essays, profiles, summaries",
    ],
    bestFor: "Job seekers applying to multiple positions who need to write compelling, customized cover letters efficiently",
    rating: 4.2,
  },
  {
    name: "Copy.ai",
    slug: "copyai",
    category: "LinkedIn Profile Optimization",
    description:
      "Copy.ai's templates and AI generation make LinkedIn profile optimization faster than manual rewriting. A strong LinkedIn profile is increasingly a pre-interview filter — recruiters and hiring managers review it before deciding whether to advance candidates. Copy.ai's LinkedIn templates help rewrite your headline, About section, and experience bullet points to be keyword-rich, achievement-focused, and compelling. The AI generates multiple versions of each section so you can choose the framing that best positions your background for the roles you're targeting. For professionals pivoting roles or industries, Copy.ai helps frame transferable skills in language that resonates with the target industry.",
    pricing: "Freemium",
    pricingDetails: "Free (limited). Starter $49/mo, Advanced $249/mo.",
    strengths: [
      "LinkedIn headline and About section optimization templates",
      "Achievement-focused bullet points for experience section",
      "Multiple version generation for A/B testing profile sections",
      "Industry-specific keyword optimization",
      "Career pivot framing for transferable skills",
    ],
    bestFor: "Job seekers who want to optimize their LinkedIn profile for recruiter visibility and targeted role positioning",
    rating: 4.2,
  },
];

const faqs = [
  {
    question: "What is the best AI tool for interview preparation in 2026?",
    answer:
      "The best AI interview prep tool depends on your biggest gap. For mock interview practice and Q&A drilling, ChatGPT's flexibility and voice mode make it the strongest all-around choice. For rigorous answer and resume feedback, Claude is more direct and detailed. For company research, Perplexity's real-time information is invaluable. Most job seekers benefit from using ChatGPT for practice, Claude for written feedback, and Perplexity for company research — covering the three biggest preparation areas.",
  },
  {
    question: "Can AI really prepare me for a technical coding interview?",
    answer:
      "Yes — ChatGPT and Claude can both conduct technical coding interviews. ChatGPT can pose LeetCode-style problems, evaluate your pseudocode or actual code, explain time/space complexity, and discuss alternative approaches. For system design interviews, it can play interviewer asking follow-up questions about scalability, trade-offs, and implementation details. For maximum effectiveness, use Claude to explain solutions you don't fully understand and ChatGPT for live practice sessions where you solve problems under pressure.",
  },
  {
    question: "How do I use AI to practice behavioral interview questions?",
    answer:
      "The most effective approach: (1) Ask ChatGPT to generate 30 likely behavioral questions for your target role. (2) For each question, write your STAR answer draft. (3) Paste your draft into Claude and ask 'score this behavioral answer for specificity, impact, and conciseness — what would you improve?' (4) Refine until Claude rates it highly. (5) Practice delivering the polished answer verbally using ChatGPT's voice mode. This systematic approach covers preparation, refinement, and delivery practice.",
  },
  {
    question: "Is it ethical to use AI during a live interview?",
    answer:
      "Using AI tools like interview assistance software during a live interview without the interviewer's knowledge raises ethical concerns and could disqualify you if discovered. Most companies prohibit real-time AI assistance during interviews. However, using AI extensively to prepare BEFORE the interview — practicing answers, researching the company, optimizing your resume — is completely standard and professional. The preparation is the value; the authentic answers in the interview should come from you.",
  },
  {
    question: "How far in advance should I start AI-assisted interview prep?",
    answer:
      "For a major opportunity at a target company, start 2-3 weeks out: Week 1 — research the company (Perplexity), identify 30 likely questions (ChatGPT), build your story vault (Notion AI). Week 2 — draft and refine answers (Claude), optimize resume for the specific role (Claude), polish LinkedIn profile (Copy.ai). Week 3 — daily mock interviews (ChatGPT voice mode), review recordings (Otter), address specific weaknesses. Final days — light review and confidence building. For urgent opportunities, 3-4 days of intensive AI-assisted prep covers 80% of this.",
  },
];

export default async function Page() {
  const toolData = interviewTools.map((it) => {
    const tool = tools.find((t) => t.slug === it.slug);
    return { ...it, url: tool ? getAffiliateUrl(it.slug) || tool.url : "#" };
  });

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/blog" className="hover:text-blue-400 transition">
              Blog
            </Link>
            <span>›</span>
            <span>Interview Prep</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Best AI Interview Prep Tools in 2026: Practice, Prepare, Perform
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            AI has transformed interview preparation — you can now practice with an infinitely patient mock interviewer, get rigorous feedback on your answers, research any company in minutes, and optimize every written touchpoint. Here are the 8 best AI tools for interview preparation in 2026.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
            <span>📅 Updated May 2026</span>
            <span>•</span>
            <span>⏱️ 11 min read</span>
            <span>•</span>
            <span>💼 {interviewTools.length} tools reviewed</span>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-10">
          <h2 className="font-semibold text-white mb-3">Quick Navigation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {interviewTools.map((tool, i) => (
              <a
                key={tool.slug}
                href={`#${tool.slug}`}
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm transition"
              >
                <span className="text-gray-600">{i + 1}.</span>
                <span className="font-medium">{tool.name}</span>
                <span className="text-gray-500">— {tool.category}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Overview */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">How AI is Changing Interview Preparation in 2026</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The job market has never been more competitive, and interview preparation has never been more powerful. AI tools now give every job seeker access to a personal interview coach, a thorough company researcher, and a rigorous editor — capabilities previously available only to executive-level candidates with dedicated career coaches.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {[
              { icon: "🎯", title: "Practice", desc: "Unlimited mock interviews on any question type (ChatGPT)" },
              { icon: "✍️", title: "Polish", desc: "Answer and resume feedback that builds real skills (Claude)" },
              { icon: "🔍", title: "Research", desc: "Deep company intelligence in minutes (Perplexity)" },
            ].map((item) => (
              <div key={item.title} className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                <span className="text-2xl block mb-2">{item.icon}</span>
                <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tools */}
        <div className="space-y-12 mb-12">
          {toolData.map((tool, index) => {
            const fullTool = tools.find((t) => t.slug === tool.slug);
            return (
              <section
                key={tool.slug}
                id={tool.slug}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-8"
              >
                <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl font-bold text-gray-600">#{index + 1}</span>
                      <h2 className="text-2xl font-bold">{tool.name}</h2>
                      <span className="text-xs bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-full">
                        {tool.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          className={i < Math.floor(tool.rating) ? "text-yellow-400" : "text-gray-700"}
                        >
                          ★
                        </span>
                      ))}
                      <span className="text-sm text-gray-400">{tool.rating}/5</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium ${
                        tool.pricing === "Free"
                          ? "bg-green-500/10 text-green-400 border border-green-500/20"
                          : tool.pricing === "Freemium"
                          ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                          : "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                      }`}
                    >
                      {tool.pricing}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">{tool.pricingDetails}</p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-5">{tool.description}</p>

                <div className="mb-5">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                    Key Strengths for Interview Prep
                  </h3>
                  <ul className="space-y-2">
                    {tool.strengths.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500">Best for:</span>
                    <span className="text-blue-400">{tool.bestFor}</span>
                  </div>
                  <div className="flex gap-3">
                    {fullTool && (
                      <Link
                        href={`/tool/${tool.slug}`}
                        className="text-sm text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 px-4 py-2 rounded-lg transition"
                      >
                        Full Review →
                      </Link>
                    )}
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                    >
                      Try {tool.name} →
                    </a>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">AI Interview Prep Tools: Quick Comparison</h2>
          <div className="overflow-x-auto">
            <div className="min-w-[640px]">
              <div className="grid grid-cols-4 gap-px bg-gray-800 rounded-xl overflow-hidden text-sm">
                <div className="bg-gray-900 p-3 font-semibold text-gray-400">Tool</div>
                <div className="bg-gray-900 p-3 font-semibold text-gray-400">Primary Use</div>
                <div className="bg-gray-900 p-3 font-semibold text-gray-400">Pricing</div>
                <div className="bg-gray-900 p-3 font-semibold text-gray-400">Rating</div>
                {interviewTools.map((tool) => (
                  <>
                    <div key={`${tool.slug}-name`} className="bg-gray-950 p-3 text-white font-medium">
                      {tool.name}
                    </div>
                    <div key={`${tool.slug}-use`} className="bg-gray-950 p-3 text-gray-400">
                      {tool.category}
                    </div>
                    <div key={`${tool.slug}-price`} className="bg-gray-950 p-3 text-gray-400">
                      {tool.pricing}
                    </div>
                    <div key={`${tool.slug}-rating`} className="bg-gray-950 p-3 text-yellow-400">
                      {"★".repeat(Math.floor(tool.rating))} {tool.rating}
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-8 bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">The AI Interview Prep Stack We Recommend</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            For most job seekers, we recommend:{" "}
            <Link href="/tool/chatgpt" className="text-blue-400 hover:text-blue-300">
              ChatGPT
            </Link>{" "}
            for mock interview practice and question drilling,{" "}
            <Link href="/tool/claude" className="text-blue-400 hover:text-blue-300">
              Claude
            </Link>{" "}
            for rigorous answer feedback and resume optimization,{" "}
            <Link href="/tool/perplexity" className="text-blue-400 hover:text-blue-300">
              Perplexity
            </Link>{" "}
            for company research, and{" "}
            <Link href="/tool/notion-ai" className="text-blue-400 hover:text-blue-300">
              Notion AI
            </Link>{" "}
            for building your story vault. This covers practice, feedback, research, and organization.
          </p>
          <p className="text-gray-400 text-sm">
            All four have free tiers — start your 3-week prep today.
          </p>
        </section>

        {/* Related Posts */}
        <section>
          <h2 className="text-xl font-bold mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                href: "/blog/best-ai-resume-builders-2026",
                title: "Best AI Resume Builders 2026",
                desc: "AI tools for creating ATS-optimized resumes",
              },
              {
                href: "/blog/best-ai-tools-for-students-2026",
                title: "Best AI Tools for Students",
                desc: "AI for academic success and career launch",
              },
              {
                href: "/blog/best-ai-tools-for-recruiters-2026",
                title: "Best AI Tools for Recruiters",
                desc: "The hiring manager perspective on AI",
              },
              {
                href: "/blog/best-ai-tools-for-writers-2026",
                title: "Best AI Writing Tools 2026",
                desc: "AI tools for cover letters and professional writing",
              },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="bg-gray-900 border border-gray-800 hover:border-blue-500/50 rounded-xl p-4 transition"
              >
                <h3 className="font-semibold text-white mb-1">{post.title}</h3>
                <p className="text-sm text-gray-400">{post.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Best AI Interview Prep Tools in 2026: Practice, Prepare, Perform",
            description:
              "Comprehensive guide to the 8 best AI interview preparation tools in 2026, covering mock interview practice, answer coaching, company research, and resume optimization.",
            author: { "@type": "Organization", name: "AISO Tools" },
            publisher: {
              "@type": "Organization",
              name: "AISO Tools",
              url: "https://aisotools.com",
            },
            datePublished: "2026-05-04",
            dateModified: "2026-05-04",
            url: "https://aisotools.com/blog/best-ai-interview-prep-tools-2026",
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
