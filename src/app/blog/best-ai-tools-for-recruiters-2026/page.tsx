import { tools } from "@/data/tools";
import Link from "next/link";
import type { Metadata } from "next";
import { getAffiliateUrl } from "@/data/affiliate-links";

export const metadata: Metadata = {
  title: "Best AI Tools for Recruiters in 2026: Hire Faster, Hire Better",
  description:
    "Discover the best AI tools for recruiters in 2026. From AI-powered sourcing to automated interview scheduling and candidate screening — reduce time-to-hire by 50%.",
  keywords: [
    "best ai tools for recruiters",
    "ai recruiting tools 2026",
    "ai for talent acquisition",
    "ai candidate screening",
    "ai interview tools",
    "ai sourcing tools for recruiters",
    "chatgpt for recruiting",
    "ai job description writer",
    "best ai hr tools",
    "ai recruiting software",
  ],
  openGraph: {
    title: "Best AI Tools for Recruiters in 2026: Hire Faster, Hire Better",
    description:
      "The complete guide to AI tools for talent acquisition. Compare tools for sourcing, screening, interview scheduling, and candidate communication — all cutting time-to-hire in half.",
    url: "https://aisotools.com/blog/best-ai-tools-for-recruiters-2026",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/blog/best-ai-tools-for-recruiters-2026",
  },
};

interface RecruiterToolCategory {
  category: string;
  icon: string;
  description: string;
  tools: RecruiterAITool[];
}

interface RecruiterAITool {
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
  roiNote?: string;
}

const toolCategories: RecruiterToolCategory[] = [
  {
    category: "AI Writing for Job Descriptions & Outreach",
    icon: "✍️",
    description:
      "AI tools that write compelling job descriptions, personalized outreach messages, and recruiter content — reducing time on writing by 80%",
    tools: [
      {
        name: "ChatGPT",
        slug: "chatgpt",
        description:
          "The most versatile AI tool for recruiters who haven't adopted specialized HR software yet. ChatGPT writes bias-reduced job descriptions, generates personalized outreach sequences, creates interview question banks for any role, drafts offer letters, and helps build candidate communication templates. GPT-4o's web search keeps job market intel current.",
        pricing: "Freemium",
        pricingDetails: "Free (GPT-4o mini), Plus $20/mo, Team $25/user/mo",
        strengths: [
          "Write job descriptions with reduced gender bias in seconds",
          "Generate personalized LinkedIn outreach for 100+ candidates",
          "Create role-specific interview question banks",
          "Draft rejection emails with empathy-focused language",
          "Summarize resumes and highlight key qualifications",
          "Research salary benchmarks and compensation data",
          "Write Boolean search strings for candidate sourcing",
          "Create onboarding checklists for new hires",
        ],
        bestFor:
          "Individual recruiters and small TA teams who need a general-purpose AI writing and research assistant",
        freeFeatures: [
          "Unlimited conversations",
          "GPT-4o mini access",
          "Web search for salary data",
          "File uploads (resume analysis)",
        ],
        rating: 4.7,
        timeSaved: "2-4 hours per role on writing and research",
      },
      {
        name: "Claude",
        slug: "claude",
        description:
          "Anthropic's Claude is preferred by many recruiters for its exceptional writing quality and longer context window — paste an entire job description, multiple resumes, and a company overview, and Claude analyzes everything together. It's particularly strong at writing nuanced, culture-aligned job descriptions and creating personalized candidate briefings.",
        pricing: "Freemium",
        pricingDetails:
          "Free (Claude.ai), Pro $20/mo (priority access, longer context), Team $30/user/mo",
        strengths: [
          "200K token context: analyze multiple resumes simultaneously",
          "Superior writing quality for culture-forward job descriptions",
          "Detailed candidate comparison summaries",
          "Nuanced evaluation of soft skills from transcripts",
          "Produce structured hiring manager prep documents",
          "Follow strict instruction sets for consistent output",
          "Analyze interview transcripts for key themes",
        ],
        bestFor:
          "Senior recruiters and talent partners who need deep analysis, long-context processing, and high-quality writing for exec-level roles",
        freeFeatures: [
          "Generous free tier",
          "Long context window",
          "All Claude models",
          "File uploads",
        ],
        rating: 4.7,
        timeSaved: "3-5 hours on candidate analysis and documentation",
      },
    ],
  },
  {
    category: "Interview Intelligence & Notes",
    icon: "🎙️",
    description:
      "AI tools that record, transcribe, and summarize interviews — eliminating manual note-taking and improving decision consistency",
    tools: [
      {
        name: "Fireflies AI",
        slug: "fireflies",
        description:
          "AI notetaker that joins interviews via Zoom, Teams, or Google Meet and automatically records, transcribes, and summarizes every conversation. Fireflies creates searchable interview transcripts, flags key moments (hard skills mentioned, culture signals, red flags), and generates structured scorecards — making it the top choice for interview documentation.",
        pricing: "Freemium",
        pricingDetails:
          "Free (limited storage), Pro $18/seat/mo, Business $29/seat/mo, Enterprise custom",
        strengths: [
          "Automatic meeting join and transcription",
          "AI-generated meeting summaries with action items",
          "Searchable transcript database across all interviews",
          "Custom scorecards for structured evaluation",
          "Speaker identification in group interviews",
          "Sentiment analysis for candidate communication style",
          "CRM and ATS integrations (Greenhouse, Lever, etc.)",
          "Share interview recordings with hiring managers",
        ],
        bestFor:
          "Recruiting teams doing high-volume interviews who need searchable records, consistent scoring, and hiring manager collaboration",
        freeFeatures: [
          "800 minutes of transcription storage",
          "AI summaries",
          "Searchable transcripts",
          "3 ATS integrations",
        ],
        rating: 4.6,
        timeSaved: "30-60 minutes per interview on note-taking and summarization",
      },
      {
        name: "Grain AI",
        slug: "grain-ai",
        description:
          "Interview intelligence platform focused on building candidate highlight reels and collaborative hiring decisions. Grain lets recruiters clip the best (and most concerning) moments from interview recordings and share them instantly with hiring managers — cutting the loop-in time from days to minutes.",
        pricing: "Freemium",
        pricingDetails:
          "Free (10 recordings/mo), Starter $19/seat/mo, Business $39/seat/mo",
        strengths: [
          "Clip creation: highlight specific candidate moments",
          "Share video clips with hiring managers instantly",
          "AI interview summaries with key insights",
          "Collaborative notes with timestamp linking",
          "Integration with Greenhouse, Lever, HubSpot, Salesforce",
          "Templates for structured interview guides",
          "Playlist creation for comparing candidates",
        ],
        bestFor:
          "Talent teams using structured interviews where hiring manager collaboration and video sharing are critical",
        freeFeatures: [
          "10 recordings/month",
          "AI summaries",
          "Clip sharing",
          "3 integrations",
        ],
        rating: 4.5,
        timeSaved: "1-2 hours per role on hiring manager communication",
        roiNote: "Reduces time-to-decision by sharing video clips vs. written summaries",
      },
      {
        name: "MeetGeek",
        slug: "meetgeek",
        description:
          "AI meeting assistant with strong recruiting features including interview scorecards, custom templates, and knowledge base building. MeetGeek's standout feature for recruiters is its ability to track topics across multiple interviews — useful for seeing patterns in how candidates discuss specific competencies.",
        pricing: "Freemium",
        pricingDetails:
          "Free (5 meetings/mo), Pro $15/seat/mo, Business $29/seat/mo",
        strengths: [
          "Custom interview templates for each role",
          "Topic tracking across multiple interviews",
          "Highlight extraction based on custom keywords",
          "Knowledge base from accumulated interviews",
          "Automated follow-up email drafts",
          "Analytics on interview patterns and team productivity",
          "Works with Zoom, Teams, Meet, WebEx",
        ],
        bestFor:
          "Recruiting ops teams who want to build institutional knowledge from interview data and track patterns over time",
        freeFeatures: [
          "5 meetings/month",
          "AI summaries",
          "Custom keywords",
          "Basic integrations",
        ],
        rating: 4.4,
        timeSaved: "30-45 minutes per interview on documentation",
      },
    ],
  },
  {
    category: "Automation & Workflow",
    icon: "⚡",
    description:
      "AI automation tools that connect your ATS, calendar, email, and communication tools — eliminating repetitive scheduling and follow-up tasks",
    tools: [
      {
        name: "Zapier",
        slug: "zapier",
        description:
          "The most powerful automation platform for recruiters who use multiple tools. Zapier connects your ATS (Greenhouse, Lever, Workday) with your calendar, email, Slack, and CRM — automating candidate status updates, interview scheduling notifications, and rejection emails based on triggers. No code required.",
        pricing: "Freemium",
        pricingDetails:
          "Free (5 zaps, 100 tasks/mo), Starter $29.99/mo, Professional $73.50/mo",
        strengths: [
          "5,000+ app integrations including all major ATS platforms",
          "Auto-send calendar invites when candidate moves to interview stage",
          "Trigger rejection emails from ATS status changes",
          "Sync candidate data between LinkedIn and ATS",
          "Auto-create Slack alerts for new applicants",
          "Schedule follow-up sequences automatically",
          "No code required — anyone can build automations",
        ],
        bestFor:
          "Recruiting teams who use 3+ tools and spend significant time on manual data entry and status updates between systems",
        freeFeatures: [
          "5 automations (Zaps)",
          "100 tasks/month",
          "All app integrations",
          "Single-step automations",
        ],
        rating: 4.7,
        timeSaved: "5-10 hours per week on administrative coordination",
        roiNote: "Pays for itself in the first week by eliminating manual calendar coordination alone",
      },
      {
        name: "Notion AI",
        slug: "notion-ai",
        description:
          "AI-enhanced workspace that recruiting teams use to build their candidate tracking systems, interview guides, and onboarding documentation. Notion AI generates first drafts of job descriptions, summarizes candidate notes, creates structured hiring playbooks, and keeps your entire recruitment workflow in one searchable database.",
        pricing: "Freemium",
        pricingDetails:
          "Free (Notion free tier), Plus $10/user/mo (with Notion AI add-on at $10/user/mo), Business $18/user/mo",
        strengths: [
          "Build candidate databases with custom properties",
          "AI-generated job descriptions from bullet points",
          "Interview guide templates with scoring rubrics",
          "Summarize long application materials automatically",
          "Onboarding wiki for new hire documentation",
          "Hiring manager dashboards with visual pipeline views",
          "Team collaboration on candidate evaluations",
        ],
        bestFor:
          "In-house TA teams who want a customizable system for tracking candidates, managing playbooks, and collaborating on hiring decisions",
        freeFeatures: [
          "Unlimited pages",
          "Basic blocks",
          "Collaboration",
          "AI add-on required for AI features ($10/user/mo extra)",
        ],
        rating: 4.6,
        timeSaved: "2-3 hours per week on documentation and candidate tracking",
      },
    ],
  },
];

export default function BestAIToolsForRecruitersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best AI Tools for Recruiters in 2026",
    description:
      "The complete guide to AI tools for talent acquisition — job description writing, interview intelligence, and recruiting automation.",
    author: { "@type": "Organization", name: "AISOTools" },
    publisher: { "@type": "Organization", name: "AISOTools", url: "https://aisotools.com" },
    datePublished: "2026-04-24",
    dateModified: "2026-04-24",
    url: "https://aisotools.com/blog/best-ai-tools-for-recruiters-2026",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best AI tool for recruiters?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on your biggest bottleneck. For writing job descriptions and outreach, ChatGPT or Claude. For interview notes and summaries, Fireflies AI or Grain AI. For automating calendar coordination and ATS updates, Zapier. Most effective recruiting teams combine 2-3 of these rather than using one tool for everything.",
        },
      },
      {
        "@type": "Question",
        name: "Can AI write job descriptions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — and it does so faster and often with less unconscious bias than humans. ChatGPT, Claude, and Jasper can generate complete job descriptions from bullet points in under a minute. Research shows AI-assisted job descriptions use more inclusive language and attract a more diverse candidate pool when prompted correctly.",
        },
      },
      {
        "@type": "Question",
        name: "How is AI used in recruiting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI is used across the recruiting funnel: writing job descriptions (ChatGPT/Claude), sourcing outreach personalization, resume screening and summarization, interview transcription and scoring (Fireflies/Grain), scheduling automation (Zapier), and offer/rejection communication drafting. The biggest ROI areas are interview documentation and workflow automation.",
        },
      },
      {
        "@type": "Question",
        name: "Does AI in recruiting cause bias?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI can reduce bias (e.g., gender-neutral job descriptions, structured interview scoring) or amplify it if trained on biased historical data. The key is using AI as an assistive layer — AI takes notes and creates summaries, humans make final decisions. Tools like Fireflies and Grain improve decision consistency by ensuring every interviewer uses the same scoring structure.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best free AI tool for recruiters?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ChatGPT's free tier is the most useful free AI for recruiters — it handles job description writing, outreach drafting, and resume analysis without any subscription. Fireflies AI has a free plan with 800 minutes of interview transcription storage. Zapier's free tier automates 5 workflows (zaps) with 100 tasks per month.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <span>›</span>
            <span>Best AI Tools for Recruiters</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Best AI Tools for Recruiters in 2026: Hire Faster, Hire Better
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            The average time-to-hire is 44 days. Recruiting teams using AI are cutting that in half — here&apos;s exactly how, and which tools to use at each stage.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-gray-500">
            <span>📅 Updated April 2026</span>
            <span>•</span>
            <span>👥 7 AI tools reviewed</span>
            <span>•</span>
            <span>⏱️ 50% reduction in time-to-hire</span>
          </div>
        </div>

        {/* Quick Picks */}
        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-bold text-blue-900 mb-4">🏆 Best AI Tool for Each Stage of Recruiting</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { use: "Job descriptions & outreach writing", tool: "ChatGPT", slug: "chatgpt" },
              { use: "Deep candidate analysis", tool: "Claude", slug: "claude" },
              { use: "Interview notes & summaries", tool: "Fireflies AI", slug: "fireflies" },
              { use: "Hiring manager clip sharing", tool: "Grain AI", slug: "grain-ai" },
              { use: "Recruiting automation", tool: "Zapier", slug: "zapier" },
              { use: "Team knowledge & playbooks", tool: "Notion AI", slug: "notion-ai" },
            ].map((pick) => (
              <div key={pick.slug} className="flex items-center gap-2">
                <span className="text-blue-600 font-medium text-sm">{pick.use}:</span>
                <Link
                  href={`/tool/${pick.slug}`}
                  className="text-sm font-bold text-blue-800 hover:underline"
                >
                  {pick.tool}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Tool Categories */}
        {toolCategories.map((category) => (
          <div key={category.category} className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {category.icon} {category.category}
            </h2>
            <p className="text-gray-600 mb-6">{category.description}</p>

            <div className="space-y-6">
              {category.tools.map((tool) => (
                <div
                  key={tool.slug}
                  className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <Link
                        href={`/tool/${tool.slug}`}
                        className="text-xl font-bold text-gray-900 hover:text-blue-600"
                      >
                        {tool.name}
                      </Link>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                          {tool.pricing}
                        </span>
                        <span className="text-sm text-gray-500">{tool.pricingDetails}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm font-bold text-gray-800">{tool.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{tool.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {tool.timeSaved && (
                      <div className="bg-green-50 rounded-lg px-3 py-2 inline-flex items-center gap-2">
                        <span className="text-green-600">⏱️</span>
                        <span className="text-sm font-medium text-green-800">Saves: {tool.timeSaved}</span>
                      </div>
                    )}
                    {tool.roiNote && (
                      <div className="bg-yellow-50 rounded-lg px-3 py-2 inline-flex items-center gap-2">
                        <span className="text-yellow-600">💡</span>
                        <span className="text-sm font-medium text-yellow-800">{tool.roiNote}</span>
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                      {tool.strengths.map((s) => (
                        <li key={s} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-medium text-gray-500">Best for: </span>
                      <span className="text-xs text-gray-600">{tool.bestFor}</span>
                    </div>
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
                      className="text-sm font-medium text-blue-600 hover:text-blue-800"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* FAQ */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqJsonLd.mainEntity.map((faq) => (
              <div key={faq.name} className="border border-gray-200 rounded-lg p-5">
                <h3 className="text-base font-semibold text-gray-900 mb-2">{faq.name}</h3>
                <p className="text-gray-600 text-sm">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related */}
        <div className="mt-10 bg-gray-50 rounded-xl p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { href: "/blog/best-ai-tools-for-hr-professionals-2026", label: "Best AI Tools for HR Professionals 2026" },
              { href: "/blog/best-ai-tools-for-small-business-2026", label: "Best AI for Small Business 2026" },
              { href: "/blog/best-ai-tools-for-project-managers-2026", label: "Best AI for Project Managers 2026" },
              { href: "/alternatives/fireflies-ai", label: "Fireflies AI Alternatives" },
              { href: "/alternatives/notion", label: "Notion AI Alternatives" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-blue-600 hover:underline text-sm"
              >
                → {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
