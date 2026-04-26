import Link from "next/link";
import type { Metadata } from "next";
import { getAffiliateUrl } from "@/data/affiliate-links";

export const metadata: Metadata = {
  title: "Best AI Resume Tools 2026: 10 AI Resume Builders & Optimizers Compared",
  description:
    "Compare the best AI tools for resume building, optimization, and job applications in 2026. From Teal and Kickresume to ChatGPT — find the right AI resume tool for your job search.",
  keywords: [
    "best AI tools for resume",
    "AI resume builder",
    "AI resume writer",
    "AI resume optimizer",
    "AI job application tools",
    "resume AI",
    "AI CV builder",
    "AI cover letter generator",
  ],
  openGraph: {
    title: "Best AI Resume Tools 2026: 10 AI Resume Builders & Optimizers Compared",
    description:
      "Expert comparison of AI resume tools. ATS optimization, AI writing, template design, and cover letter generation — tested and ranked for job seekers.",
    url: "https://aisotools.com/best-ai-tools-for-resume",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/best-ai-tools-for-resume",
  },
};

interface ResumeTool {
  name: string;
  slug: string;
  affiliateSlug?: string;
  website: string;
  category: string;
  description: string;
  pricing: string;
  pricingDetails: string;
  keyFeatures: string[];
  pros: string[];
  cons: string[];
  bestFor: string;
  rating: number;
}

const resumeTools: ResumeTool[] = [
  {
    name: "Teal",
    slug: "teal",
    website: "https://www.tealhq.com",
    category: "Resume Optimization",
    description: "AI-powered career platform that helps job seekers create ATS-optimized resumes tailored to specific job descriptions. Teal's AI analyzes job postings, identifies matching keywords, and suggests improvements to increase your chances of passing applicant tracking systems.",
    pricing: "Freemium",
    pricingDetails: "Free tier with basic features. Pro $29/mo or $9/week",
    keyFeatures: ["ATS resume scoring", "Job description matching", "AI bullet point writer", "Resume keyword optimization", "Job tracker", "LinkedIn profile analysis"],
    pros: ["Best job description-to-resume matching available", "ATS scoring shows exactly what to improve", "Free tier includes core resume building", "Job tracking keeps applications organized"],
    cons: ["Pro features needed for full AI writing", "Templates less polished than dedicated builders", "Can over-optimize for keywords at expense of readability", "US-focused job market optimizations"],
    bestFor: "Job seekers wanting to optimize their resume for specific job postings and ATS systems",
    rating: 4.4,
  },
  {
    name: "Kickresume",
    slug: "kickresume",
    website: "https://www.kickresume.com",
    category: "Resume Builder",
    description: "AI resume and cover letter builder with 40+ professional templates designed by typographers. Kickresume's AI writes bullet points, generates cover letters, and creates personal websites — making it the most complete AI-powered career document platform.",
    pricing: "Freemium",
    pricingDetails: "Free tier: 1 resume. Premium $19/mo or $70/year",
    keyFeatures: ["40+ ATS-friendly templates", "AI resume bullet writer", "AI cover letter generator", "Personal website builder", "LinkedIn import", "PDF export"],
    pros: ["Best-designed resume templates available", "AI bullet points genuinely well-written", "Cover letter generation saves hours", "Personal website builder is unique bonus"],
    cons: ["Only 1 free resume — upgrades needed for more", "AI can produce generic-sounding bullets", "Some templates not truly ATS-friendly despite claims", "Annual pricing pushed over monthly"],
    bestFor: "Job seekers wanting beautifully designed resumes with AI-written content",
    rating: 4.3,
  },
  {
    name: "Resume.io",
    slug: "resume-io",
    website: "https://resume.io",
    category: "Resume Builder",
    description: "Popular AI-enhanced resume builder used by 25+ million job seekers. Offers professional templates, AI suggestions for bullet points, and built-in formatting that ensures ATS compatibility. Simple, fast, and effective for most job seekers.",
    pricing: "Freemium",
    pricingDetails: "Free trial. 7-day trial $2.95, then $24.95/mo or $44.95/6mo",
    keyFeatures: ["Professional templates", "AI content suggestions", "ATS-friendly formatting", "Cover letter builder", "Multiple export formats", "Multi-language support"],
    pros: ["Clean, easy-to-use interface", "Templates consistently ATS-compatible", "25M+ users = battle-tested", "Multi-language support for international job seekers"],
    cons: ["Free trial very limited", "Pricing above average after trial", "AI suggestions less advanced than Teal or Kickresume", "Auto-renewal complaints from users"],
    bestFor: "Job seekers wanting a reliable, no-frills resume builder with professional templates",
    rating: 4.0,
  },
  {
    name: "Rezi",
    slug: "rezi",
    website: "https://www.rezi.ai",
    category: "ATS Optimization",
    description: "AI resume builder focused specifically on ATS optimization. Rezi's AI analyzes your resume against ATS parsing algorithms, identifies formatting issues, keyword gaps, and content weaknesses — then fixes them automatically. Also generates AI-written resumes from scratch based on job descriptions.",
    pricing: "Freemium",
    pricingDetails: "Free tier available. Pro $29/mo, Lifetime $129 one-time",
    keyFeatures: ["ATS analysis engine", "AI resume writer", "Keyword optimization", "Format compliance checker", "AI bullet point generator", "Resume scoring"],
    pros: ["Most thorough ATS analysis available", "Lifetime plan is exceptional value", "AI resume writer creates full resumes from scratch", "Format checker catches issues other tools miss"],
    cons: ["Templates less visually appealing", "Free tier quite restrictive", "UI can feel cluttered", "AI content sometimes needs editing"],
    bestFor: "Job seekers who've been rejected by ATS systems and need technical optimization",
    rating: 4.2,
  },
  {
    name: "ChatGPT",
    slug: "chatgpt",
    website: "https://chat.openai.com",
    category: "AI Writing",
    description: "While not a resume builder, ChatGPT is the most versatile AI tool for resume content writing. Use it to rewrite bullet points with stronger action verbs, tailor your resume to specific job descriptions, generate cover letters, and practice interview answers.",
    pricing: "Freemium",
    pricingDetails: "Free tier. Plus $20/mo for GPT-4 access",
    keyFeatures: ["Resume bullet rewriting", "Job description tailoring", "Cover letter generation", "Interview prep", "LinkedIn profile optimization", "Career advice"],
    pros: ["Most versatile AI for career content", "Free tier sufficient for resume writing", "Can role-play interviews for practice", "Handles any resume format or industry"],
    cons: ["No visual resume building — text only", "No ATS scoring or analysis", "Requires good prompting for best results", "Can hallucinate achievements if not careful"],
    bestFor: "Anyone wanting to improve their resume content and prepare for interviews with AI",
    rating: 4.5,
  },
  {
    name: "Jobscan",
    slug: "jobscan",
    website: "https://www.jobscan.co",
    category: "ATS Optimization",
    description: "AI-powered resume scanner that compares your resume against specific job descriptions to calculate a match score. Jobscan identifies missing keywords, formatting issues, and skill gaps — showing you exactly what to change to get past ATS filters.",
    pricing: "Freemium",
    pricingDetails: "Free: 5 scans/mo. Pro $49.95/mo or $16.58/mo billed quarterly",
    keyFeatures: ["Resume-to-job matching score", "Keyword comparison", "ATS formatting check", "Skills gap analysis", "LinkedIn optimization", "Cover letter scanner"],
    pros: ["Most detailed resume-to-job matching", "Shows exact keywords you're missing", "LinkedIn profile optimization included", "Proven to increase interview rates"],
    cons: ["Expensive for a single-purpose tool ($50/mo)", "Free tier only 5 scans", "Can lead to keyword stuffing if overused", "No resume building — analysis only"],
    bestFor: "Active job seekers applying to many positions who need to tailor each application",
    rating: 4.1,
  },
  {
    name: "Enhancv",
    slug: "enhancv",
    website: "https://enhancv.com",
    category: "Resume Builder",
    description: "Modern AI resume builder that combines beautiful design with AI content assistance. Enhancv offers unique resume sections (mini-projects, day-in-my-life, strengths chart) and AI-powered suggestions that help your resume stand out beyond standard templates.",
    pricing: "Freemium",
    pricingDetails: "Free tier: 1 resume. Pro $19.99/mo or $11.99/mo annually",
    keyFeatures: ["Modern design templates", "AI content suggestions", "Unique resume sections", "ATS-friendly formats", "Content analyzer", "Multi-format export"],
    pros: ["Most creative resume designs available", "Unique sections differentiate your resume", "AI suggestions tailored to your industry", "Good balance of design and ATS compatibility"],
    cons: ["Creative templates may not suit conservative industries", "Free tier very limited", "Some unique sections seen as gimmicky by recruiters", "Import from existing resume not always clean"],
    bestFor: "Creative professionals and career changers wanting their resume to stand out visually",
    rating: 4.2,
  },
  {
    name: "Novoresume",
    slug: "novoresume",
    website: "https://novoresume.com",
    category: "Resume Builder",
    description: "Clean, professional AI resume builder popular with European job seekers. Novoresume offers ATS-tested templates, content suggestions based on your profession, and real-time content optimization — all with an emphasis on clean, minimalist design.",
    pricing: "Freemium",
    pricingDetails: "Free tier: 1 resume. Premium $19.99/mo or $9.99/mo annually",
    keyFeatures: ["ATS-tested templates", "Profession-based content suggestions", "Real-time optimization tips", "Cover letter builder", "Clean minimalist designs", "European CV format support"],
    pros: ["Excellent for European/international job markets", "CV format support (not just US resume)", "Clean, professional templates", "Real-time optimization tips as you type"],
    cons: ["Limited free tier", "AI features less advanced than Teal or Kickresume", "Template variety smaller than competitors", "Some formatting issues on ATS parsing"],
    bestFor: "European job seekers and anyone preferring clean, minimalist resume designs",
    rating: 4.0,
  },
  {
    name: "Resumaker.ai",
    slug: "resumaker-ai",
    website: "https://resumaker.ai",
    category: "Quick Builder",
    description: "AI-powered resume generator that creates a complete resume in minutes from your LinkedIn profile or basic information. Resumaker uses AI to write professional bullet points, suggest skills, and format everything into clean, ATS-friendly templates automatically.",
    pricing: "Paid",
    pricingDetails: "$12.95/mo or $2.95 for 14-day access",
    keyFeatures: ["LinkedIn import", "AI auto-fill", "Professional templates", "One-click generation", "Cover letter builder", "Multiple download formats"],
    pros: ["Fastest way to create a resume from scratch", "LinkedIn import saves data entry time", "AI-written bullets surprisingly decent", "Very affordable pricing"],
    cons: ["Less customizable than full builders", "AI content can be generic", "Limited template selection", "Less control over formatting details"],
    bestFor: "People who need a professional resume quickly and don't want to spend hours building one",
    rating: 3.8,
  },
  {
    name: "Zety",
    slug: "zety",
    website: "https://zety.com",
    category: "Resume Builder",
    description: "One of the most popular resume builders with AI-powered content suggestions and 20+ professional templates. Zety walks you through the resume creation process step-by-step with industry-specific tips and pre-written bullet points you can customize.",
    pricing: "Paid",
    pricingDetails: "4-week access $2.70/week ($23.80). Recurring $23.80/4-weeks after",
    keyFeatures: ["20+ professional templates", "Step-by-step wizard", "Pre-written content suggestions", "Industry-specific tips", "Cover letter builder", "Resume check score"],
    pros: ["Excellent step-by-step guided experience", "Pre-written bullets categorized by industry", "Templates are clean and professional", "Resume check feature identifies weaknesses"],
    cons: ["Pricing structure intentionally confusing", "Many users report unwanted recurring charges", "Need to pay to download your resume", "Free preview shows watermark"],
    bestFor: "First-time resume builders wanting a guided, step-by-step creation experience",
    rating: 3.9,
  },
];

function getRatingColor(rating: number): string {
  if (rating >= 4.5) return "text-green-400";
  if (rating >= 4.0) return "text-blue-400";
  if (rating >= 3.5) return "text-yellow-400";
  return "text-red-400";
}

export default function BestAIResumeToolsPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <section className="relative py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/30 to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-violet-500/10 px-4 py-1.5 text-sm text-violet-400 ring-1 ring-violet-500/20">
            📄 Updated April 2026
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Best AI Tools for Resumes in 2026
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            AI resume builders and optimizers that help you land more interviews. 
            We compared ATS optimization, content quality, design, and pricing across the top tools.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12">
        <div className="rounded-xl bg-gray-900/50 p-6 ring-1 ring-gray-800">
          <h2 className="mb-4 text-xl font-semibold">⚡ Top Picks</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-gray-800/50 p-4">
              <p className="text-sm text-gray-400">Best ATS Optimizer</p>
              <p className="font-semibold">Teal</p>
              <p className="text-sm text-blue-400">Match resume to specific job postings</p>
            </div>
            <div className="rounded-lg bg-gray-800/50 p-4">
              <p className="text-sm text-gray-400">Best Resume Builder</p>
              <p className="font-semibold">Kickresume</p>
              <p className="text-sm text-blue-400">Beautiful templates + AI content</p>
            </div>
            <div className="rounded-lg bg-gray-800/50 p-4">
              <p className="text-sm text-gray-400">Best Free Option</p>
              <p className="font-semibold">ChatGPT</p>
              <p className="text-sm text-blue-400">Rewrite bullets, generate cover letters</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16">
        <div className="space-y-10">
          {resumeTools.map((tool, index) => (
            <article key={tool.slug} id={tool.slug} className="scroll-mt-24">
              <div className="rounded-xl bg-gray-900/50 p-6 ring-1 ring-gray-800 transition hover:ring-gray-700">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-1 flex items-center gap-3">
                      <span className="text-sm text-gray-500">#{index + 1}</span>
                      <h3 className="text-2xl font-bold">{tool.name}</h3>
                      <span className="rounded-full bg-violet-500/10 px-2.5 py-0.5 text-xs text-violet-400 ring-1 ring-violet-500/20">
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

                <p className="text-sm text-gray-400 mb-4">
                  <strong className="text-gray-300">Best for:</strong> {tool.bestFor}
                </p>

                <div className="flex gap-3 pt-4 border-t border-gray-800">
                  {(() => {
                    const affiliateHref = tool.affiliateSlug ? getAffiliateUrl(tool.affiliateSlug) : null;
                    return affiliateHref ? (
                      <a
                        href={affiliateHref}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="flex-1 bg-violet-600 hover:bg-violet-700 text-white text-center px-4 py-2 rounded-lg text-sm font-medium transition"
                      >
                        Try {tool.name} →
                      </a>
                    ) : (
                      <a
                        href={tool.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-violet-600 hover:bg-violet-700 text-white text-center px-4 py-2 rounded-lg text-sm font-medium transition"
                      >
                        Visit {tool.name} →
                      </a>
                    );
                  })()}
                  <Link
                    href={`/tool/${tool.slug}`}
                    className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                  >
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
            <summary className="cursor-pointer font-medium">What is the best AI resume builder?</summary>
            <p className="mt-3 text-gray-400">For ATS optimization, Teal is the best — it matches your resume to specific job descriptions. For design and templates, Kickresume leads. For pure content writing, ChatGPT (free) is the most versatile. Most job seekers get the best results by combining ChatGPT for writing with Teal for ATS optimization.</p>
          </details>
          <details className="group rounded-xl bg-gray-900/50 p-4 ring-1 ring-gray-800">
            <summary className="cursor-pointer font-medium">Can recruiters tell if your resume was written by AI?</summary>
            <p className="mt-3 text-gray-400">Experienced recruiters can sometimes spot AI-written resumes by generic phrasing and buzzword overuse. The key is to use AI as a starting point and personalize with specific achievements, metrics, and company-specific language. The best approach: use AI to generate a first draft, then add your unique voice and real accomplishments.</p>
          </details>
          <details className="group rounded-xl bg-gray-900/50 p-4 ring-1 ring-gray-800">
            <summary className="cursor-pointer font-medium">Is it worth paying for an AI resume builder?</summary>
            <p className="mt-3 text-gray-400">If you&apos;re actively job searching and applying to many positions, a paid tool like Teal ($29/mo) or Rezi (lifetime $129) pays for itself with one interview that leads to a job. For occasional use, ChatGPT&apos;s free tier combined with free resume templates is sufficient.</p>
          </details>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16">
        <h2 className="mb-4 text-lg font-semibold text-gray-400">Related Guides</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/best-ai-writing-tools" className="rounded-lg bg-gray-800 px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Best AI Writing Tools →</Link>
          <Link href="/best-ai-tools-for-students" className="rounded-lg bg-gray-800 px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Best AI for Students →</Link>
          <Link href="/best-free-ai-tools" className="rounded-lg bg-gray-800 px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Best Free AI Tools →</Link>
          <Link href="/best-ai-tools-for-productivity" className="rounded-lg bg-gray-800 px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Best AI Productivity Tools →</Link>
        </div>
      </section>
    </div>
  );
}
