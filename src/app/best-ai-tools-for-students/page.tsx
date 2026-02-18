import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Tools for Students 2026 — 12 Must-Have Apps",
  description:
    "Discover the 12 best AI tools for students in 2026. From AI writing assistants and research tools to note-taking apps, presentation makers, and math solvers — ace your coursework with AI.",
  keywords: [
    "best AI tools for students",
    "AI tools for students",
    "AI for studying",
    "AI writing tools for students",
    "AI research tools",
    "AI note taking",
    "AI homework help",
    "ChatGPT for students",
    "Grammarly for students",
    "AI study tools",
  ],
  openGraph: {
    title: "Best AI Tools for Students 2026 — 12 Must-Have Apps",
    description:
      "The 12 best AI tools for students covering writing, research, note-taking, presentations, math, and studying.",
    url: "https://aisotools.com/best-ai-tools-for-students",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/best-ai-tools-for-students",
  },
};

interface StudentTool {
  name: string;
  slug?: string;
  tagline: string;
  description: string;
  bestFor: string;
  pricing: string;
  studentDiscount?: string;
  pros: string[];
  cons: string[];
  url: string;
  highlight?: boolean;
}

interface ToolCategory {
  category: string;
  icon: string;
  description: string;
  tools: StudentTool[];
}

const studentTools: ToolCategory[] = [
  {
    category: "Writing",
    icon: "✍️",
    description: "AI writing assistants to help you draft, edit, and polish essays and papers",
    tools: [
      {
        name: "ChatGPT",
        slug: "chatgpt",
        tagline: "The ultimate AI study and writing partner",
        description:
          "ChatGPT is the most versatile AI tool available to students — brainstorm essay ideas, get feedback on drafts, understand complex concepts, get study help across subjects, and more. The free tier is genuinely useful for everyday student needs.",
        bestFor: "All-purpose study help, writing assistance, concept explanations",
        pricing: "Free · $20/mo (Plus) · $25/seat/mo (Team)",
        studentDiscount: "No student discount, but free tier is excellent",
        pros: [
          "Incredibly versatile — helps with almost every subject",
          "Explains complex concepts in simple terms",
          "Free tier handles most student needs",
          "Custom GPTs for specific subjects",
        ],
        cons: [
          "Can produce inaccurate information (always verify facts)",
          "Overreliance can hinder learning",
          "GPT-4 requires paid plan",
        ],
        url: "https://chat.openai.com",
        highlight: true,
      },
      {
        name: "Grammarly",
        slug: "grammarly",
        tagline: "AI writing quality for academic papers",
        description:
          "Grammarly catches grammar mistakes, improves clarity, and checks for plagiarism — essential for polishing academic writing. Its tone detector helps match formal academic style.",
        bestFor: "Polishing essays, checking grammar, academic writing quality",
        pricing: "Free · $12/mo (Pro) · Student discounts available",
        studentDiscount: "Often offers student discounts — check site for current offers",
        pros: [
          "Works across browsers, Word, and Google Docs",
          "Plagiarism checker (Premium)",
          "Academic tone suggestions",
          "Browser extension for everywhere you write",
        ],
        cons: [
          "Plagiarism checking requires Premium plan",
          "Advanced suggestions cost extra",
          "Can sometimes suggest overly formal changes",
        ],
        url: "https://grammarly.com",
        highlight: true,
      },
      {
        name: "Quillbot",
        slug: "quillbot",
        tagline: "AI paraphrasing and summarization",
        description:
          "QuillBot helps students paraphrase content to avoid plagiarism, summarize long research papers, and check for grammar errors. The free tier offers useful paraphrasing up to 125 words.",
        bestFor: "Paraphrasing sources, summarizing research, avoiding plagiarism",
        pricing: "Free (125 words) · $9.95/mo (Premium)",
        studentDiscount: "No dedicated student discount",
        pros: [
          "Seven paraphrasing modes (formal, academic, etc.)",
          "Summarizer condenses long texts",
          "Grammar checker included",
          "Integrates with Microsoft Word",
        ],
        cons: [
          "Word limit on free tier (125 words)",
          "AI detector can flag paraphrased content",
          "Not a substitute for original thinking",
        ],
        url: "https://quillbot.com",
      },
    ],
  },
  {
    category: "Research",
    icon: "🔍",
    description: "AI research tools to find sources, explore topics, and synthesize information",
    tools: [
      {
        name: "Perplexity",
        slug: "perplexity",
        tagline: "AI-powered research with citations",
        description:
          "Perplexity is the best AI research tool for students — it searches the web, synthesizes information, and cites every source so you can verify information and build your bibliography.",
        bestFor: "Research with cited sources, exploring new topics, literature discovery",
        pricing: "Free (unlimited searches) · $20/mo (Pro)",
        studentDiscount: "No student discount, but free tier is excellent for research",
        pros: [
          "Always cites sources — critical for academic work",
          "Real-time web search for current information",
          "Academic mode for scholarly sources",
          "Completely free for basic research",
        ],
        cons: [
          "May miss niche academic papers",
          "Pro needed for advanced models and file uploads",
          "Not a replacement for proper database research",
        ],
        url: "https://perplexity.ai",
        highlight: true,
      },
      {
        name: "Consensus",
        slug: "consensus",
        tagline: "AI search engine for scientific papers",
        description:
          "Consensus searches 200M+ research papers and uses AI to extract and synthesize findings. Ask research questions in plain English and get evidence-backed answers with paper citations.",
        bestFor: "Finding scientific consensus, literature reviews, research papers",
        pricing: "Free (limited) · $9.99/mo (Premium) · $9.99/mo (Teams)",
        studentDiscount: "Student pricing available — check their website",
        pros: [
          "Searches 200M+ peer-reviewed papers",
          "Extracts key findings and consensus views",
          "Saves hours of literature searching",
          "Excellent for STEM and social science research",
        ],
        cons: [
          "Free tier has limited searches per month",
          "Some niche fields have limited coverage",
          "Full access requires Premium",
        ],
        url: "https://consensus.app",
      },
      {
        name: "Elicit",
        slug: "elicit",
        tagline: "AI research assistant for literature reviews",
        description:
          "Elicit is an AI research assistant that automates literature review tasks — finding papers, extracting data, summarizing methods and results, and identifying research gaps.",
        bestFor: "Literature reviews, systematic research, paper summarization",
        pricing: "Free (limited) · $12/mo (Basic) · $46/mo (Plus)",
        studentDiscount: "Limited free tier available for students",
        pros: [
          "Extracts data from papers automatically",
          "Identifies related papers and research gaps",
          "Summarizes multiple papers side by side",
          "Great for systematic literature reviews",
        ],
        cons: [
          "Free tier is very limited",
          "Works best for empirical research papers",
          "Steeper learning curve than simpler tools",
        ],
        url: "https://elicit.com",
      },
    ],
  },
  {
    category: "Notes & Organization",
    icon: "📝",
    description: "AI note-taking and transcription tools for lectures and study sessions",
    tools: [
      {
        name: "Notion AI",
        slug: "notion",
        tagline: "AI-powered note-taking and knowledge base",
        description:
          "Notion AI lets you write study notes, organize your coursework, summarize readings, create flashcards, and get AI help directly inside your study workspace.",
        bestFor: "Organizing study materials, summarizing notes, project management",
        pricing: "Free · $10/mo (Plus) · +$10/mo for AI add-on",
        studentDiscount: "Free for students with .edu email — includes Plus features",
        pros: [
          "Free for students with .edu email (huge value)",
          "All-in-one workspace for study, projects, notes",
          "AI writing and summarization inside your notes",
          "Strong collaboration for group projects",
        ],
        cons: [
          "AI is an add-on ($10/mo) not included in student free plan",
          "Steeper learning curve than simpler note apps",
          "Can be overwhelming at first",
        ],
        url: "https://notion.so",
        highlight: true,
      },
      {
        name: "Otter.ai",
        slug: "otter-ai",
        tagline: "AI lecture transcription and notes",
        description:
          "Otter.ai transcribes lectures and meetings in real time, generating searchable notes automatically. Never miss a key point — Otter captures everything so you can focus on listening.",
        bestFor: "Transcribing lectures, office hours, study group discussions",
        pricing: "Free (300 min/mo) · $16.99/mo (Pro) · $30/mo (Business)",
        studentDiscount: "No dedicated student discount",
        pros: [
          "Real-time transcription during lectures",
          "300 free minutes per month",
          "Searchable transcripts with speaker labels",
          "Integrates with Zoom and Google Meet",
        ],
        cons: [
          "Accuracy varies with accents and technical terms",
          "30-minute limit per conversation on free tier",
          "Monthly minute cap on free plan",
        ],
        url: "https://otter.ai",
      },
    ],
  },
  {
    category: "Presentations",
    icon: "📊",
    description: "AI tools to create stunning presentations and visual reports",
    tools: [
      {
        name: "Gamma",
        slug: "gamma",
        tagline: "AI presentation generator in minutes",
        description:
          "Gamma creates professional presentations, documents, and web pages from a text prompt in minutes. Perfect for quick class presentations without spending hours on PowerPoint.",
        bestFor: "Quick presentations, visual reports, project summaries",
        pricing: "Free (400 AI credits) · $10/mo (Plus) · $20/mo (Pro)",
        studentDiscount: "No dedicated student discount",
        pros: [
          "Generates full presentations from a prompt",
          "Modern, professional-looking designs",
          "Free tier is generous for occasional use",
          "One-click theme and layout changes",
        ],
        cons: [
          "Credit system limits free usage",
          "Less control than PowerPoint/Google Slides",
          "Watermark on free tier",
        ],
        url: "https://gamma.app",
        highlight: true,
      },
      {
        name: "Beautiful.ai",
        slug: "beautiful-ai",
        tagline: "Smart presentation design with AI",
        description:
          "Beautiful.ai uses AI to automatically layout and design slides as you add content — keeping everything visually balanced. Great for creating polished presentations without design skills.",
        bestFor: "Professional-looking presentations, portfolios, case studies",
        pricing: "Free (limited) · $12/mo (Pro) · $40/seat/mo (Team)",
        studentDiscount: "Check for student/education pricing",
        pros: [
          "Smart slide design — looks professional automatically",
          "Hundreds of built-in templates",
          "AI layout suggestions as you build",
          "Easy collaboration for group presentations",
        ],
        cons: [
          "Free tier is limited in templates",
          "Less control over granular design elements",
          "Premium required for best features",
        ],
        url: "https://beautiful.ai",
      },
    ],
  },
  {
    category: "Math & Science",
    icon: "🔬",
    description: "AI tools for solving math problems, understanding equations, and science help",
    tools: [
      {
        name: "Wolfram Alpha",
        slug: "wolfram-alpha",
        tagline: "Computational knowledge engine",
        description:
          "Wolfram Alpha solves math problems step-by-step, answers science questions, and computes complex calculations. It's the gold standard for math, statistics, physics, and chemistry help.",
        bestFor: "Math problem solving, step-by-step solutions, scientific calculations",
        pricing: "Free (basic) · $7.25/mo (Pro) · $5/mo (Pro Student)",
        studentDiscount: "Pro Student plan at $5/mo with .edu email",
        pros: [
          "Step-by-step math solutions",
          "Covers calculus, statistics, linear algebra, and more",
          "Trustworthy, computation-based answers",
          "Student discount on Pro plan",
        ],
        cons: [
          "Step-by-step requires Pro subscription",
          "Not conversational like ChatGPT",
          "Interface can feel dated",
        ],
        url: "https://wolframalpha.com",
        highlight: true,
      },
    ],
  },
  {
    category: "Study & Flashcards",
    icon: "🧠",
    description: "AI tools to help you study smarter with flashcards, quizzes, and spaced repetition",
    tools: [
      {
        name: "Anki AI",
        slug: "anki",
        tagline: "Spaced repetition flashcard system",
        description:
          "Anki is the gold standard for memorization using spaced repetition — an algorithm that shows you cards right before you'd forget them. AI add-ons can generate cards from your notes automatically.",
        bestFor: "Medical school, language learning, memorizing large amounts of information",
        pricing: "Free (desktop + Android) · $24.99 (iOS, one-time) · AnkiWeb free",
        studentDiscount: "Essentially free — one of the best free study tools available",
        pros: [
          "Scientifically proven spaced repetition system",
          "Completely free on desktop and web",
          "Massive shared deck library",
          "AI plugins can generate cards from text",
        ],
        cons: [
          "iOS app costs $24.99 (one-time)",
          "Default interface is dated",
          "Takes time to build good card habits",
        ],
        url: "https://apps.ankiweb.net",
        highlight: true,
      },
    ],
  },
];

const comparisonData = [
  { tool: "ChatGPT", category: "Writing/All-purpose", pricing: "Free–$20/mo", studentPlan: "No (free tier strong)", rating: "⭐⭐⭐⭐⭐" },
  { tool: "Grammarly", category: "Writing", pricing: "Free–$12/mo", studentPlan: "Occasional discounts", rating: "⭐⭐⭐⭐⭐" },
  { tool: "Notion AI", category: "Notes", pricing: "Free (.edu) +$10 AI", studentPlan: "Free for .edu", rating: "⭐⭐⭐⭐⭐" },
  { tool: "Quillbot", category: "Writing", pricing: "Free–$9.95/mo", studentPlan: "No", rating: "⭐⭐⭐⭐" },
  { tool: "Perplexity", category: "Research", pricing: "Free–$20/mo", studentPlan: "No (free tier strong)", rating: "⭐⭐⭐⭐⭐" },
  { tool: "Otter.ai", category: "Transcription", pricing: "Free–$30/mo", studentPlan: "No", rating: "⭐⭐⭐⭐" },
  { tool: "Gamma", category: "Presentations", pricing: "Free–$20/mo", studentPlan: "No", rating: "⭐⭐⭐⭐" },
  { tool: "Beautiful.ai", category: "Presentations", pricing: "Free–$40/mo", studentPlan: "Check site", rating: "⭐⭐⭐⭐" },
  { tool: "Wolfram Alpha", category: "Math/Science", pricing: "Free–$7.25/mo", studentPlan: "$5/mo (.edu)", rating: "⭐⭐⭐⭐⭐" },
  { tool: "Consensus", category: "Research", pricing: "Free–$9.99/mo", studentPlan: "Check site", rating: "⭐⭐⭐⭐" },
  { tool: "Elicit", category: "Research", pricing: "Free–$46/mo", studentPlan: "Limited free", rating: "⭐⭐⭐⭐" },
  { tool: "Anki AI", category: "Study", pricing: "Free (mostly)", studentPlan: "Essentially free", rating: "⭐⭐⭐⭐⭐" },
];

const faqs = [
  {
    question: "Is it cheating to use AI tools as a student?",
    answer:
      "It depends on your institution's policy and how you use AI. Using AI to understand concepts, get feedback on your own writing, or research topics is generally considered acceptable. Submitting AI-generated work as your own without disclosure may violate academic integrity policies. Always check your school's AI policy and use these tools to enhance your learning, not replace it.",
  },
  {
    question: "What is the best free AI tool for students?",
    answer:
      "ChatGPT's free tier is the most versatile free AI tool for students — it can help with virtually any subject. For research with citations, Perplexity is free and excellent. For writing quality, Grammarly's free tier handles grammar and clarity. For note-taking, Notion's student plan (free with .edu email) is outstanding value. For math, Wolfram Alpha's free tier solves most problems.",
  },
  {
    question: "Can students get AI tools for free?",
    answer:
      "Yes! Many AI tools are free or offer student discounts. ChatGPT and Perplexity have strong free tiers. Notion offers free Plus plans for students with a .edu email. Wolfram Alpha Pro is $5/mo for students. Grammarly occasionally offers student discounts. Anki is free on desktop and web. GitHub Copilot is free for verified students through GitHub Education.",
  },
  {
    question: "What AI tools are best for writing essays?",
    answer:
      "For essay writing, use a combination: ChatGPT for brainstorming, outlining, and getting feedback on your ideas; Grammarly for catching grammar errors and improving clarity; Quillbot for paraphrasing sources; and Perplexity for research with citations. Remember — use AI as a writing aid, not to write the essay for you.",
  },
  {
    question: "Can AI help with math and science coursework?",
    answer:
      "Absolutely. Wolfram Alpha is the gold standard for step-by-step math solutions across calculus, statistics, physics, and more. ChatGPT can explain math concepts and walk through problems conversationally. For science research, Consensus and Elicit help find and synthesize peer-reviewed papers. Always verify AI math solutions independently.",
  },
  {
    question: "Which AI tool is best for research papers?",
    answer:
      "Perplexity AI is best for general research with web citations. Consensus specializes in finding scientific research papers and extracting findings. Elicit is ideal for systematic literature reviews. For writing and citation management, combine these with tools like Zotero (free) for organizing your sources. Always verify and cite primary sources directly.",
  },
];

export default function BestAIToolsForStudentsPage() {
  const totalTools = studentTools.reduce((sum, cat) => sum + cat.tools.length, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                headline: "Best AI Tools for Students 2026",
                description:
                  "The 12 best AI tools for students covering writing, research, note-taking, presentations, math, and studying.",
                author: { "@type": "Organization", name: "AISO Tools" },
                publisher: { "@type": "Organization", name: "AISO Tools", url: "https://aisotools.com" },
                datePublished: "2026-01-01",
                dateModified: "2026-02-01",
                url: "https://aisotools.com/best-ai-tools-for-students",
              },
              {
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: { "@type": "Answer", text: faq.answer },
                })),
              },
            ],
          }),
        }}
      />

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-white">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/directory" className="hover:text-white">AI Tools</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Best AI Tools for Students</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Best AI Tools for Students 2026
        </h1>
        <p className="text-xl text-gray-400 max-w-4xl">
          The {totalTools} best AI tools for students in 2026 — from writing assistants and research
          engines to note-taking apps, presentation makers, math solvers, and study tools. Many are
          free or offer student discounts.
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
            🎓 Student Picks
          </span>
          <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
            📈 18,100 searches/mo
          </span>
          <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
            Updated February 2026
          </span>
          <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
            {totalTools} Tools · 6 Categories
          </span>
        </div>
      </header>

      {/* Category Navigation */}
      <section className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-12">
        <h2 className="text-lg font-semibold mb-4">Jump to Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {studentTools.map((cat) => (
            <a
              key={cat.category}
              href={`#${cat.category.toLowerCase().replace(/[\s&]+/g, "-")}`}
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-3 py-3 rounded-lg transition text-sm"
            >
              <span className="text-2xl">{cat.icon}</span>
              <div>
                <div className="font-medium">{cat.category}</div>
                <div className="text-xs text-gray-500">{cat.tools.length} tool{cat.tools.length !== 1 ? "s" : ""}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="prose prose-invert max-w-none mb-16">
        <h2 className="text-3xl font-bold mb-4">How AI is Changing Student Life in 2026</h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          Students today have access to AI tools that were unimaginable a few years ago — AI that can
          explain complex concepts, transcribe lectures, help draft and edit papers, find research
          sources with citations, and even solve math problems step-by-step.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          The key is using AI as a learning accelerator, not a shortcut. The best student use of AI
          involves using it to understand material more deeply, get faster feedback on your work, and
          handle administrative tasks (note organization, scheduling) so you can focus on learning.
        </p>
        <div className="bg-yellow-600/10 border border-yellow-500/20 rounded-xl p-6 mb-6">
          <h3 className="text-xl font-semibold mb-3 text-yellow-400">⚠ Academic Integrity Note</h3>
          <p className="text-gray-400">
            Always check your institution's AI policy. Using AI to enhance your understanding and
            improve your own work is generally acceptable. Submitting AI-generated content as
            your own original work may violate academic integrity policies. Use these tools responsibly.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Student AI Tools Comparison 2026</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-gray-900 border border-gray-800 rounded-xl">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Tool</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Category</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Pricing</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Student Plan</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {comparisonData.map((item, i) => (
                <tr key={i} className="hover:bg-gray-800/50 transition">
                  <td className="px-4 py-3 font-medium">{item.tool}</td>
                  <td className="px-4 py-3 text-sm text-gray-400">{item.category}</td>
                  <td className="px-4 py-3 text-sm text-gray-400">{item.pricing}</td>
                  <td className="px-4 py-3 text-sm text-gray-400">{item.studentPlan}</td>
                  <td className="px-4 py-3 text-sm">{item.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Tool Categories */}
      {studentTools.map((category) => (
        <section
          key={category.category}
          id={category.category.toLowerCase().replace(/[\s&]+/g, "-")}
          className="mb-16 scroll-mt-24"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">{category.icon}</span>
            <div>
              <h2 className="text-3xl font-bold">{category.category} AI Tools for Students</h2>
              <p className="text-gray-400">{category.description}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {category.tools.map((tool) => (
              <article
                key={tool.name}
                className={`bg-gray-900 border rounded-xl p-6 hover:border-gray-700 transition ${
                  tool.highlight ? "border-blue-500/30 ring-1 ring-blue-500/20" : "border-gray-800"
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold">{tool.name}</h3>
                  {tool.highlight && (
                    <span className="bg-blue-600/20 text-blue-400 text-xs px-2 py-1 rounded-full font-medium whitespace-nowrap ml-2">
                      Top Pick
                    </span>
                  )}
                </div>
                <p className="text-sm text-blue-400 mb-3 font-medium">{tool.tagline}</p>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{tool.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Best For</span>
                    <p className="text-sm text-white mt-1">{tool.bestFor}</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1 bg-gray-800/50 rounded-lg p-3">
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Pricing</span>
                      <p className="text-sm text-white mt-1">{tool.pricing}</p>
                    </div>
                    {tool.studentDiscount && (
                      <div className="flex-1 bg-green-900/20 border border-green-500/20 rounded-lg p-3">
                        <span className="text-xs font-semibold text-green-400 uppercase tracking-wide">🎓 Student</span>
                        <p className="text-xs text-gray-400 mt-1">{tool.studentDiscount}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <h4 className="text-xs font-semibold text-green-400 mb-2 uppercase tracking-wide">✓ Pros</h4>
                    <ul className="space-y-1">
                      {tool.pros.slice(0, 3).map((pro, i) => (
                        <li key={i} className="text-xs text-gray-400 flex items-start gap-1">
                          <span className="text-green-400 mt-0.5 shrink-0">+</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-red-400 mb-2 uppercase tracking-wide">✗ Cons</h4>
                    <ul className="space-y-1">
                      {tool.cons.slice(0, 3).map((con, i) => (
                        <li key={i} className="text-xs text-gray-400 flex items-start gap-1">
                          <span className="text-red-400 mt-0.5 shrink-0">−</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center px-4 py-2 rounded-lg text-sm font-medium transition"
                  >
                    Try {tool.name} →
                  </a>
                  {tool.slug && (
                    <Link
                      href={`/tool/${tool.slug}`}
                      className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                    >
                      Details
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
              <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA + Cross-links */}
      <section className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/20 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Explore More AI Tool Categories</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Discover AI tools for every need — from coding and marketing to video creation and beyond.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/best-free-ai-tools" className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg font-medium transition">
            Best Free AI Tools →
          </Link>
          <Link href="/ai-chatbot-tools" className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-3 rounded-lg font-medium transition">
            Best AI Chatbots →
          </Link>
          <Link href="/best-ai-tools-for-developers" className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-3 rounded-lg font-medium transition">
            AI for Developers →
          </Link>
          <Link href="/best-ai-tools-for-marketing" className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-3 rounded-lg font-medium transition">
            AI for Marketing →
          </Link>
          <Link href="/directory" className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-3 rounded-lg font-medium transition">
            Full Directory →
          </Link>
        </div>
      </section>
    </div>
  );
}
