import { tools } from "@/data/tools";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Tools for Students 2026 - Writing, Research & Study Aids",
  description:
    "Discover the best AI tools for students in 2026. ChatGPT, Grammarly, Quillbot, Photomath, Notion AI, Otter.ai, and more. Boost grades, save time, and learn smarter.",
  keywords: [
    "AI tools for students",
    "student AI apps",
    "AI homework help",
    "AI study tools",
    "ChatGPT for students",
    "Grammarly AI",
    "Quillbot AI",
    "AI note-taking",
    "AI research tools",
  ],
  openGraph: {
    title: "Best AI Tools for Students 2026 - Writing, Research & Study Aids",
    description:
      "The ultimate guide to AI tools for students. Compare ChatGPT, Grammarly, Quillbot, Photomath, and 10+ tools to ace your studies.",
    url: "https://aisotools.com/best-ai-tools-for-students",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/best-ai-tools-for-students",
  },
};

interface StudentTool {
  name: string;
  slug: string;
  description: string;
  category: string;
  pricing: string;
  pricingDetails: string;
  strengths: string[];
  weaknesses: string[];
  bestFor: string;
  features: string[];
  studentDiscount?: string;
}

const studentTools: StudentTool[] = [
  {
    name: "ChatGPT",
    slug: "chatgpt",
    description: "The most versatile AI assistant for students - writing help, research, brainstorming, exam prep, and learning new concepts.",
    category: "General Purpose",
    pricing: "Freemium",
    pricingDetails: "Free tier available, Plus $20/mo (50% student discount via GitHub Student Pack)",
    strengths: [
      "Explains complex concepts in simple terms",
      "Helps with essay outlines and brainstorming",
      "Debug code and solve programming problems",
      "Practice language learning",
      "Study buddy for exam preparation",
      "Free tier is quite generous",
    ],
    weaknesses: [
      "Can generate incorrect information confidently",
      "Requires fact-checking for academic work",
      "Free tier limited to GPT-3.5",
    ],
    bestFor: "General academic support, writing assistance, learning explanations, coding help",
    features: ["Essay writing", "Exam prep", "Concept explanations", "Code debugging", "Study plans"],
    studentDiscount: "50% off Plus via GitHub Student Pack",
  },
  {
    name: "Grammarly",
    slug: "grammarly",
    description: "AI-powered writing assistant that checks grammar, spelling, punctuation, and suggests improvements for academic writing.",
    category: "Writing",
    pricing: "Freemium",
    pricingDetails: "Free tier, Premium $12/mo, Premium Pro $15/mo (student discounts available)",
    strengths: [
      "Catches grammar and spelling errors instantly",
      "Suggests better word choices",
      "Tone detection for academic writing",
      "Plagiarism checker (Premium)",
      "Works across all platforms",
      "Browser extension integrates everywhere",
    ],
    weaknesses: [
      "Premium features require subscription",
      "Can be overly prescriptive",
      "Plagiarism checker only in paid tiers",
    ],
    bestFor: "Essay writing, academic papers, email communication, proofreading",
    features: ["Grammar checking", "Plagiarism detection", "Tone suggestions", "Browser extension", "Academic style"],
    studentDiscount: "20% off Premium plans",
  },
  {
    name: "Quillbot",
    slug: "quillbot",
    description: "AI paraphrasing and summarization tool that helps rewrite text, avoid plagiarism, and create summaries of long articles.",
    category: "Writing",
    pricing: "Freemium",
    pricingDetails: "Free tier (125 words), Premium $4.17/mo annual ($8.33/mo monthly)",
    strengths: [
      "Excellent paraphrasing capabilities",
      "Summarize long research papers quickly",
      "Multiple writing modes (fluency, creative, academic)",
      "Citation generator included",
      "Very affordable premium tier",
      "Grammar checker included",
    ],
    weaknesses: [
      "Free tier word limit is restrictive",
      "Output sometimes needs editing",
      "Can make text sound robotic if overused",
    ],
    bestFor: "Paraphrasing, summarizing research, avoiding plagiarism, literature reviews",
    features: ["Paraphrasing", "Summarizer", "Citation generator", "Grammar checker", "Co-Writer"],
  },
  {
    name: "Photomath",
    slug: "photomath",
    description: "AI-powered math solver that uses your phone camera to scan and solve math problems with step-by-step explanations.",
    category: "Math & STEM",
    pricing: "Freemium",
    pricingDetails: "Free basic solver, Plus $9.99/mo or $59.99/year",
    strengths: [
      "Instant math problem solving via camera",
      "Step-by-step explanations",
      "Covers algebra, calculus, trigonometry",
      "Multiple solution methods shown",
      "Works offline",
      "Great for checking homework",
    ],
    weaknesses: [
      "Detailed steps require Plus subscription",
      "Can make students reliant without understanding",
      "Camera recognition sometimes fails",
    ],
    bestFor: "Math homework, exam preparation, understanding solution steps, STEM courses",
    features: ["Photo recognition", "Step-by-step solutions", "Multiple methods", "Graphing", "Word problems"],
  },
  {
    name: "Notion AI",
    slug: "notion",
    description: "AI writing assistant built into Notion for note-taking, summarizing lectures, generating study guides, and organizing research.",
    category: "Note-Taking",
    pricing: "Add-on",
    pricingDetails: "Free Notion, AI add-on $10/user/mo (Plus $8/mo, free for verified students)",
    strengths: [
      "Integrated into best note-taking app",
      "Summarize lecture notes instantly",
      "Generate study guides from notes",
      "Ask questions about your notes",
      "Action items and to-do extraction",
      "Free for verified students",
    ],
    weaknesses: [
      "Requires Notion subscription",
      "Learning curve for Notion itself",
      "AI features cost extra (unless student)",
    ],
    bestFor: "Note-taking, organizing research, study guides, project management, collaboration",
    features: ["Note summarization", "Study guide generation", "Q&A on notes", "Writing assistance", "Database AI"],
    studentDiscount: "Free Plus plan + AI for verified students",
  },
  {
    name: "Otter.ai",
    slug: "otter-ai",
    description: "AI transcription service that converts lectures, meetings, and interviews into searchable text notes automatically.",
    category: "Note-Taking",
    pricing: "Freemium",
    pricingDetails: "Free (300 min/mo), Pro $16.99/mo, Business $30/user/mo (student discounts available)",
    strengths: [
      "Automatic lecture transcription",
      "Real-time captions during class",
      "Searchable transcript library",
      "Speaker identification",
      "Integrates with Zoom",
      "Generous free tier (300 minutes/month)",
    ],
    weaknesses: [
      "Accuracy drops with accents or technical terms",
      "Free tier monthly limit",
      "Requires internet connection",
    ],
    bestFor: "Lecture transcription, interview recording, group study sessions, accessibility",
    features: ["Live transcription", "Speaker ID", "Search transcripts", "Zoom integration", "Mobile app"],
  },
  {
    name: "Perplexity AI",
    slug: "perplexity",
    description: "AI-powered research assistant that provides sourced answers with citations - perfect for academic research and fact-checking.",
    category: "Research",
    pricing: "Freemium",
    pricingDetails: "Free tier, Pro $20/mo (student discounts emerging)",
    strengths: [
      "Provides source citations for all answers",
      "Real-time web search integration",
      "Great for research and fact-checking",
      "Academic mode for scholarly sources",
      "Follow-up questions maintain context",
      "Collections for organizing research",
    ],
    weaknesses: [
      "Free tier has usage limits",
      "Not designed for creative writing",
      "Can't replace deep reading of sources",
    ],
    bestFor: "Academic research, literature reviews, fact-checking, essay research, credible sources",
    features: ["Source citations", "Academic search", "Collections", "Follow-ups", "Pro search"],
  },
  {
    name: "Consensus",
    slug: "consensus",
    description: "AI-powered academic search engine that finds and summarizes peer-reviewed research papers instantly.",
    category: "Research",
    pricing: "Freemium",
    pricingDetails: "Free (10 credits/mo), Premium $8.99/mo, Enterprise custom",
    strengths: [
      "Searches actual peer-reviewed papers",
      "Summarizes research findings",
      "Synthesizes multiple studies",
      "Perfect for literature reviews",
      "Shows consensus across papers",
      "Academic-focused results only",
    ],
    weaknesses: [
      "Free tier very limited (10 searches/month)",
      "Only covers published research",
      "Less useful for non-scientific topics",
    ],
    bestFor: "Literature reviews, research papers, STEM research, finding academic sources",
    features: ["Peer-reviewed search", "Paper summaries", "Synthesis", "Citations", "Study snapshots"],
  },
  {
    name: "Claude",
    slug: "claude",
    description: "Anthropic's AI assistant with superior reasoning - excellent for complex analysis, long documents, and Socratic learning.",
    category: "General Purpose",
    pricing: "Freemium",
    pricingDetails: "Free tier, Pro $20/mo (no student discount yet)",
    strengths: [
      "200K+ token context for long documents",
      "Superior analytical reasoning",
      "Excellent at explaining complex topics",
      "Socratic teaching style",
      "Great for coding assignments",
      "Artifacts feature for interactive content",
    ],
    weaknesses: [
      "No student discount",
      "Slower on free tier",
      "No image generation",
    ],
    bestFor: "Complex analysis, long essay feedback, code debugging, philosophy discussions",
    features: ["Long document analysis", "Code generation", "Vision", "Artifacts", "Projects"],
  },
  {
    name: "Wolfram Alpha",
    slug: "wolfram-alpha",
    description: "Computational knowledge engine that solves math, chemistry, physics problems and provides expert-level answers.",
    category: "Math & STEM",
    pricing: "Freemium",
    pricingDetails: "Free basic, Pro $7.25/mo student rate (normally $8.25/mo)",
    strengths: [
      "Expert-level STEM computations",
      "Step-by-step solutions (Pro)",
      "Covers math, physics, chemistry, stats",
      "Trusted by educators",
      "Interactive visualizations",
      "Student discount available",
    ],
    weaknesses: [
      "Learning curve for query syntax",
      "Step-by-step requires Pro",
      "Not conversational like ChatGPT",
    ],
    bestFor: "STEM homework, calculus, statistics, physics problems, data analysis",
    features: ["STEM computation", "Step-by-step", "Graphing", "Unit conversions", "Data analysis"],
    studentDiscount: "$7.25/mo student pricing",
  },
  {
    name: "Hemingway Editor",
    slug: "hemingway",
    description: "AI writing tool that makes your writing clear, concise, and easy to read - perfect for academic clarity.",
    category: "Writing",
    pricing: "Freemium",
    pricingDetails: "Free web version, Desktop app $19.99 one-time",
    strengths: [
      "Improves readability and clarity",
      "Highlights complex sentences",
      "Suggests simpler alternatives",
      "Grade level readability score",
      "One-time purchase for desktop",
      "Works offline (desktop)",
    ],
    weaknesses: [
      "Can oversimplify academic writing",
      "No plagiarism checking",
      "Less comprehensive than Grammarly",
    ],
    bestFor: "Improving essay clarity, simplifying complex writing, readability checks",
    features: ["Readability analysis", "Sentence complexity", "Passive voice detection", "Adverb highlighting"],
  },
  {
    name: "Elicit",
    slug: "elicit",
    description: "AI research assistant that helps analyze research papers, extract data, and accelerate literature reviews.",
    category: "Research",
    pricing: "Freemium",
    pricingDetails: "Free (5,000 credits), Plus $10/mo, Pro $42/mo (student discounts)",
    strengths: [
      "Automates literature reviews",
      "Extracts data from papers",
      "Finds similar research",
      "Summarizes methodology and findings",
      "Great for systematic reviews",
    ],
    weaknesses: [
      "Steep learning curve",
      "Free tier limited",
      "Best for scientific research",
    ],
    bestFor: "Literature reviews, research synthesis, graduate students, systematic reviews",
    features: ["Paper analysis", "Data extraction", "Literature mapping", "Summaries", "Citation export"],
  },
  {
    name: "Knowt",
    slug: "knowt",
    description: "AI-powered flashcard creator that automatically generates study materials from notes, PDFs, and lectures.",
    category: "Study Aids",
    pricing: "Freemium",
    pricingDetails: "Free tier, Unlimited $5.99/mo",
    strengths: [
      "Auto-generate flashcards from notes",
      "Import Quizlet sets for free",
      "Practice tests and spaced repetition",
      "Very affordable premium tier",
      "Mobile app for studying anywhere",
    ],
    weaknesses: [
      "Free tier has limits",
      "Quality depends on source material",
      "Less features than Anki for power users",
    ],
    bestFor: "Flashcard creation, spaced repetition, exam prep, memorization",
    features: ["Auto flashcards", "Spaced repetition", "Practice tests", "Import Quizlet", "Mobile app"],
  },
  {
    name: "Speechify",
    slug: "speechify",
    description: "AI text-to-speech tool that reads textbooks, articles, and PDFs aloud - perfect for auditory learners and accessibility.",
    category: "Study Aids",
    pricing: "Freemium",
    pricingDetails: "Free tier, Premium $11.58/mo annual (student discounts available)",
    strengths: [
      "Natural-sounding AI voices",
      "Speed adjustment for faster learning",
      "Reads PDFs, web pages, emails",
      "Mobile and browser extension",
      "Great for accessibility",
      "Import documents and textbooks",
    ],
    weaknesses: [
      "Free tier very limited",
      "Premium can be expensive",
      "Voice quality varies by language",
    ],
    bestFor: "Auditory learning, textbook reading, accessibility, multitasking while studying",
    features: ["Text-to-speech", "PDF reading", "Speed control", "Natural voices", "Browser extension"],
    studentDiscount: "Available on annual plans",
  },
];

export default function BestAIToolsForStudentsPage() {
  const toolsBySlug = new Map(tools.map((t) => [t.slug, t]));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-white">
          Home
        </Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Best AI Tools for Students</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Best AI Tools for Students 2026: Ace Your Studies
        </h1>
        <p className="text-xl text-gray-400 max-w-4xl">
          The ultimate guide to AI tools for students. From writing assistants and research tools
          to math solvers and note-taking apps - discover how AI can help you study smarter, save
          time, and boost your grades in 2026.
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
            Updated February 2026
          </span>
          <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
            14 Essential Student Tools
          </span>
          <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">
            Student Discounts Available
          </span>
        </div>
      </header>

      {/* Quick Navigation */}
      <section className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-12">
        <h2 className="text-lg font-semibold mb-3">Quick Navigation by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-2">✍️ Writing</h3>
            <div className="space-y-1 text-sm">
              <a href="#chatgpt" className="text-blue-400 hover:text-blue-300 block">ChatGPT</a>
              <a href="#grammarly" className="text-blue-400 hover:text-blue-300 block">Grammarly</a>
              <a href="#quillbot" className="text-blue-400 hover:text-blue-300 block">Quillbot</a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-2">🔬 Research</h3>
            <div className="space-y-1 text-sm">
              <a href="#perplexity" className="text-blue-400 hover:text-blue-300 block">Perplexity</a>
              <a href="#consensus" className="text-blue-400 hover:text-blue-300 block">Consensus</a>
              <a href="#elicit" className="text-blue-400 hover:text-blue-300 block">Elicit</a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-2">📐 Math & STEM</h3>
            <div className="space-y-1 text-sm">
              <a href="#photomath" className="text-blue-400 hover:text-blue-300 block">Photomath</a>
              <a href="#wolfram-alpha" className="text-blue-400 hover:text-blue-300 block">Wolfram Alpha</a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-2">📝 Note-Taking</h3>
            <div className="space-y-1 text-sm">
              <a href="#notion" className="text-blue-400 hover:text-blue-300 block">Notion AI</a>
              <a href="#otter-ai" className="text-blue-400 hover:text-blue-300 block">Otter.ai</a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-2">🎯 Study Aids</h3>
            <div className="space-y-1 text-sm">
              <a href="#knowt" className="text-blue-400 hover:text-blue-300 block">Knowt</a>
              <a href="#speechify" className="text-blue-400 hover:text-blue-300 block">Speechify</a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="prose prose-invert max-w-none mb-16">
        <h2 className="text-3xl font-bold mb-4">How AI Tools Are Transforming Student Life</h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          AI tools have become essential companions for modern students. Whether you're writing
          essays, solving complex math problems, transcribing lectures, or conducting research,
          there's an AI tool that can save you hours of work and improve your results.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          From ChatGPT's versatile assistance to Grammarly's writing polish, Photomath's instant
          problem-solving to Notion AI's smart note organization - these tools help you study
          smarter, not harder. Many offer student discounts or free tiers specifically designed
          for academic use.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed">
          This guide covers 14 essential AI tools across writing, research, math, note-taking, and
          study aids - complete with pricing, features, and tips to maximize your academic success.
        </p>
      </section>

      {/* Comparison Table */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Quick Comparison: Student AI Tools</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-gray-900 border border-gray-800 rounded-xl">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Tool</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Category</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Pricing</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Student Discount</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {studentTools.map((tool) => (
                <tr key={tool.slug} className="hover:bg-gray-800/50 transition">
                  <td className="px-4 py-3">
                    <a href={`#${tool.slug}`} className="font-medium text-blue-400 hover:text-blue-300">
                      {tool.name}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-400">{tool.category}</td>
                  <td className="px-4 py-3 text-sm text-gray-400">{tool.pricing}</td>
                  <td className="px-4 py-3 text-sm">
                    {tool.studentDiscount ? (
                      <span className="text-green-400">✓ {tool.studentDiscount.split(" ")[0]}</span>
                    ) : (
                      <span className="text-gray-600">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-400">{tool.bestFor.split(",")[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed Reviews */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Detailed Reviews: Best AI Tools for Students</h2>
        <div className="space-y-12">
          {studentTools.map((tool, index) => {
            const toolData = toolsBySlug.get(tool.slug);
            return (
              <article
                key={tool.slug}
                id={tool.slug}
                className="bg-gray-900 border border-gray-800 rounded-xl p-8 scroll-mt-24"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold">
                        {index + 1}. {tool.name}
                      </h3>
                      <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-xs">
                        {tool.category}
                      </span>
                    </div>
                    <p className="text-gray-400">{tool.description}</p>
                  </div>
                  {toolData && (
                    <Link
                      href={`/tool/${tool.slug}`}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition shrink-0"
                    >
                      View Tool →
                    </Link>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  {/* Pricing */}
                  <div>
                    <h4 className="font-semibold text-gray-300 mb-2">💰 Pricing</h4>
                    <p className="text-gray-400 text-sm mb-1">{tool.pricing}</p>
                    <p className="text-gray-500 text-xs mb-2">{tool.pricingDetails}</p>
                    {tool.studentDiscount && (
                      <p className="text-green-400 text-sm">🎓 {tool.studentDiscount}</p>
                    )}
                  </div>

                  {/* Best For */}
                  <div>
                    <h4 className="font-semibold text-gray-300 mb-2">🎯 Best For</h4>
                    <p className="text-gray-400 text-sm">{tool.bestFor}</p>
                  </div>
                </div>

                {/* Strengths */}
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-300 mb-3">✅ Strengths</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {tool.strengths.map((strength, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start">
                        <span className="text-green-400 mr-2 mt-0.5">•</span>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Weaknesses */}
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-300 mb-3">⚠️ Limitations</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {tool.weaknesses.map((weakness, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start">
                        <span className="text-yellow-400 mr-2 mt-0.5">•</span>
                        {weakness}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features */}
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-300 mb-3">🔧 Key Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {tool.features.map((feature, i) => (
                      <span
                        key={i}
                        className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Use Case Guide */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Which AI Tools Should You Use?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">📝 For Essay Writing</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>ChatGPT:</strong> Brainstorming, outlines, research</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Grammarly:</strong> Grammar, spelling, polish</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Quillbot:</strong> Paraphrasing, avoiding plagiarism</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Hemingway:</strong> Clarity and readability</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">🔬 For Research Papers</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Consensus:</strong> Finding peer-reviewed sources</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Perplexity:</strong> Research with citations</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Elicit:</strong> Literature reviews</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Claude:</strong> Analyzing long research papers</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">🧮 For Math & STEM</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Photomath:</strong> Quick homework help with steps</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Wolfram Alpha:</strong> Advanced STEM computation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>ChatGPT:</strong> Explaining concepts</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">📚 For Exam Preparation</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Knowt:</strong> Auto-generate flashcards</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Notion AI:</strong> Create study guides from notes</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>ChatGPT:</strong> Practice questions and quizzes</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Speechify:</strong> Audio review of textbooks</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">🎧 For Lectures & Note-Taking</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Otter.ai:</strong> Auto-transcribe lectures</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Notion AI:</strong> Organize and summarize notes</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>ChatGPT:</strong> Clarify lecture concepts</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">💰 On a Budget (Free/Cheap)</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>ChatGPT:</strong> Free tier is generous</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Notion AI:</strong> Free for verified students</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Otter.ai:</strong> 300 free minutes/month</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Knowt:</strong> Only $5.99/mo unlimited</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Student Discount Section */}
      <section className="mb-16 bg-gradient-to-r from-green-600/10 to-blue-600/10 border border-green-500/20 rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6">🎓 Student Discounts & Free Tiers</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-green-400">Free for Students</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• <strong>Notion AI:</strong> Free Plus + AI for verified students</li>
              <li>• <strong>GitHub Student Pack:</strong> 50% off ChatGPT Plus</li>
              <li>• <strong>Otter.ai:</strong> 300 minutes/month free tier</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-blue-400">Student Discounts</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• <strong>Grammarly:</strong> 20% off Premium</li>
              <li>• <strong>Wolfram Alpha:</strong> $7.25/mo student rate</li>
              <li>• <strong>Speechify:</strong> Discounts on annual plans</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg">
          <p className="text-sm text-gray-400">
            💡 <strong>Pro Tip:</strong> Always check with your .edu email or student ID. Many tools
            offer discounts not publicly advertised. GitHub Student Developer Pack includes free
            access to dozens of premium tools!
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Can I use AI tools for homework without cheating?</h3>
            <p className="text-gray-400">
              Yes, when used ethically. AI tools are excellent for brainstorming, understanding
              concepts, getting feedback, and organizing ideas. However, submitting AI-generated
              work as your own is plagiarism. Use AI as a study partner and learning aid, not a
              replacement for learning. Always check your school's AI policy.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Which AI tool is best for students on a budget?</h3>
            <p className="text-gray-400">
              ChatGPT's free tier is the best all-around free option. Combine it with Grammarly
              free for writing, Otter.ai free (300 min/mo) for lectures, and Notion's free student
              plan with AI. This combo covers most student needs at zero cost.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Do teachers know if I use AI tools?</h3>
            <p className="text-gray-400">
              Many schools now use AI detection tools like Turnitin, GPTZero, and others. These
              aren't perfect but can flag AI-generated content. The best approach: use AI for
              learning and assistance, but write your own work. Tools like Grammarly for grammar
              checking are generally acceptable, but check your institution's specific policies.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Can Photomath solve any math problem?</h3>
            <p className="text-gray-400">
              Photomath handles most high school and early college math: algebra, geometry,
              trigonometry, calculus, and statistics. Very advanced topics or specialized notation
              may not work. For those, Wolfram Alpha (with its computational engine) is more
              powerful but has a steeper learning curve.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Is Grammarly or Quillbot better for students?</h3>
            <p className="text-gray-400">
              They serve different purposes. <strong>Grammarly</strong> is best for grammar,
              spelling, and polishing your writing. <strong>Quillbot</strong> excels at
              paraphrasing and summarizing. Most students benefit from using both: Quillbot to
              help rephrase and avoid plagiarism, Grammarly to ensure it's grammatically correct.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">How can I get the GitHub Student Developer Pack?</h3>
            <p className="text-gray-400">
              Visit education.github.com and verify your student status with your .edu email or
              student ID. You'll get free access to GitHub Pro, 50% off ChatGPT Plus, and dozens
              of other premium developer tools. It's completely free for students and incredibly
              valuable.
            </p>
          </div>
        </div>
      </section>

      {/* Academic Integrity Warning */}
      <section className="mb-16 bg-yellow-600/10 border border-yellow-500/30 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4 text-yellow-400">⚠️ Important: Academic Integrity</h2>
        <div className="space-y-3 text-gray-300">
          <p>
            <strong>Use AI tools ethically.</strong> These tools are designed to help you learn,
            not to cheat. Here's how to use AI responsibly:
          </p>
          <ul className="space-y-2 ml-6">
            <li>• <strong>DO:</strong> Use AI to understand concepts, get explanations, brainstorm ideas, check grammar</li>
            <li>• <strong>DO:</strong> Use AI as a study partner, tutor, or research assistant</li>
            <li>• <strong>DO:</strong> Always cite when you use AI-generated ideas in your work</li>
            <li>• <strong>DON'T:</strong> Submit AI-generated work as your own</li>
            <li>• <strong>DON'T:</strong> Use AI to complete assignments meant to assess YOUR understanding</li>
            <li>• <strong>DON'T:</strong> Violate your school's academic honesty policy</li>
          </ul>
          <p className="mt-4 text-sm">
            Check your institution's AI policy. When in doubt, ask your professor. The goal is to
            use AI to learn better, not to skip learning altogether.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Explore More AI Tools</h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Discover hundreds more AI tools for writing, research, productivity, and creativity.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Browse All Tools
          </Link>
          <Link
            href="/category/writing"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Writing Tools →
          </Link>
          <Link
            href="/category/productivity"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Productivity Tools →
          </Link>
        </div>
      </section>
    </div>
  );
}
