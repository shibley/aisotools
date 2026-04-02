import { tools } from "@/data/tools";
import { getAffiliateUrl } from "@/data/affiliate-links";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Tools for Teachers 2026 - Lesson Planning, Grading & Classroom Management",
  description:
    "Discover the best AI tools for teachers in 2026. Khanmigo, Curipod, Gradescope, ChatGPT, Notion AI, and more. Save time on lesson planning, grading, and classroom management.",
  keywords: [
    "best ai tools for teachers",
    "ai tools for teachers",
    "ai for teaching",
    "ai tools for educators",
    "ai classroom tools",
    "ai lesson planning",
    "teacher ai tools",
    "classroom ai",
    "teaching with ai",
    "ai grading tools",
  ],
  openGraph: {
    title: "Best AI Tools for Teachers 2026 - Lesson Planning, Grading & Classroom Management",
    description:
      "The ultimate guide to AI tools for teachers. Compare Khanmigo, Curipod, Gradescope, ChatGPT, and 8+ tools to save time and enhance your teaching.",
    url: "https://aisotools.com/best-ai-tools-for-teachers",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/best-ai-tools-for-teachers",
  },
};

interface TeacherTool {
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
  teacherTip?: string;
}

const teacherTools: TeacherTool[] = [
  {
    name: "Khanmigo",
    slug: "khanmigo",
    description: "Khan Academy's AI teaching assistant that helps with lesson planning, provides student progress insights, and offers personalized tutoring support for your classroom.",
    category: "Teaching Assistant",
    pricing: "Paid",
    pricingDetails: "$4/month per student or $44/month for teachers (piloting districts may have free access)",
    strengths: [
      "Built by trusted education nonprofit Khan Academy",
      "Personalized tutoring for each student at scale",
      "Real-time insights into student understanding",
      "Helps create differentiated lesson plans",
      "Socratic teaching method - guides rather than tells",
    ],
    weaknesses: [
      "Requires paid subscription for full access",
      "Still in pilot phase at many schools",
      "Best for STEM subjects, less comprehensive for humanities",
    ],
    bestFor: "Math and STEM teachers seeking personalized student support and progress insights",
    features: ["AI tutor for students", "Lesson planning assistant", "Progress tracking", "Differentiation tools", "Parent communication"],
    teacherTip: "Use Khanmigo to identify struggling students early - the AI tracks misconceptions in real-time and flags students who need intervention before they fall behind.",
  },
  {
    name: "Curipod",
    slug: "curipod",
    description: "AI-powered interactive lesson creator that generates engaging presentations, polls, word clouds, and drawing activities to boost classroom engagement.",
    category: "Lesson Creation",
    pricing: "Freemium",
    pricingDetails: "Free tier available, Pro $10/month (unlimited lessons)",
    strengths: [
      "Creates complete interactive lessons in minutes",
      "Built-in engagement tools (polls, word clouds, drawings)",
      "Real-time student responses visible during class",
      "Integrates with Google Slides and PowerPoint",
      "Pre-built curriculum-aligned templates",
    ],
    weaknesses: [
      "Free tier limits number of lessons per month",
      "Requires students to have devices",
      "AI-generated content needs teacher review",
    ],
    bestFor: "Creating engaging, interactive lessons quickly for any subject",
    features: ["AI lesson generation", "Interactive slides", "Live polling", "Word clouds", "Student-paced activities"],
    teacherTip: "Generate a base lesson with Curipod's AI, then customize the interactive elements to match your teaching style. The combination saves hours while keeping your personal touch.",
  },
  {
    name: "Gradescope",
    slug: "gradescope",
    description: "AI-assisted grading platform that streamlines assessment, provides consistent rubric-based feedback, and generates analytics on student performance patterns.",
    category: "Grading & Assessment",
    pricing: "Free/Paid",
    pricingDetails: "Free for core features, Institution pricing for advanced features",
    strengths: [
      "Dramatically speeds up grading with AI assistance",
      "Consistent rubric application across all students",
      "Works with paper assignments (scan and upload)",
      "Identifies common mistakes and patterns",
      "Analytics show which concepts students struggle with",
    ],
    weaknesses: [
      "Initial setup time to configure rubrics",
      "Best for assignments with clear rubrics",
      "Some features require institutional license",
    ],
    bestFor: "Teachers with large classes needing efficient, consistent grading",
    features: ["AI-assisted grading", "Rubric templates", "Bubble sheet scanning", "Analytics dashboard", "Regrade requests"],
    teacherTip: "Create a detailed rubric once, then let Gradescope suggest grading for similar answers. Review the AI's suggestions - it learns your preferences and gets more accurate over time.",
  },
  {
    name: "Quillbot",
    slug: "quillbot",
    description: "AI writing feedback tool that helps teachers provide constructive feedback on student papers, check for paraphrasing quality, and generate writing rubrics.",
    category: "Writing Feedback",
    pricing: "Freemium",
    pricingDetails: "Free tier (125 words), Premium $4.17/mo annual, Educator discounts available",
    strengths: [
      "Helps identify areas where student writing needs improvement",
      "Paraphraser shows if students are paraphrasing vs plagiarizing",
      "Citation generator teaches proper attribution",
      "Co-Writer helps scaffold writing instruction",
      "Very affordable for teachers",
    ],
    weaknesses: [
      "Free tier word limit is restrictive",
      "Should supplement, not replace teacher feedback",
      "Can enable over-reliance if students misuse it",
    ],
    bestFor: "Providing writing feedback and teaching paraphrasing skills",
    features: ["Paraphrasing checker", "Grammar feedback", "Citation generator", "Summarizer", "Co-Writer"],
    teacherTip: "Use Quillbot to pre-screen student papers for areas that need feedback, then focus your time on higher-level content and argumentation comments.",
  },
  {
    name: "Gamma",
    slug: "gamma",
    description: "AI presentation builder that creates professional-looking classroom materials, visual aids, and student handouts from simple text prompts.",
    category: "Content Creation",
    pricing: "Freemium",
    pricingDetails: "Free tier (400 AI credits), Plus $10/mo, Pro $20/mo (educator discounts)",
    strengths: [
      "Creates beautiful presentations in minutes",
      "No design skills required",
      "Export to PDF, PowerPoint, or share link",
      "Built-in templates for education",
      "Interactive elements and embedded media",
    ],
    weaknesses: [
      "Free tier credit limit",
      "Less control than traditional design tools",
      "Requires internet connection",
    ],
    bestFor: "Creating engaging visual presentations and classroom materials quickly",
    features: ["AI presentation generation", "Templates", "Interactive elements", "Export options", "Collaboration"],
    teacherTip: "Generate a presentation outline with Gamma, then spend your time refining the content rather than wrestling with slide layouts. Students stay more engaged with visually appealing materials.",
  },
  {
    name: "Canva for Education",
    slug: "canva",
    description: "Design platform with AI features for creating worksheets, infographics, posters, certificates, and classroom materials - free for verified teachers.",
    category: "Design & Materials",
    pricing: "Free",
    pricingDetails: "Free for K-12 teachers and verified educators (normally $12.99/mo)",
    strengths: [
      "100% free for teachers with verification",
      "Massive template library for education",
      "AI design tools (Magic Design, Magic Write)",
      "Create worksheets, posters, certificates, presentations",
      "Student accounts with classroom management",
      "Print-ready or digital delivery",
    ],
    weaknesses: [
      "Requires teacher verification (but worth it)",
      "Learning curve for advanced features",
      "Some premium elements still cost extra",
    ],
    bestFor: "Creating professional classroom materials, worksheets, and visual aids",
    features: ["AI design tools", "Education templates", "Student accounts", "Collaboration", "Print & digital export"],
    teacherTip: "Set up your class in Canva and have students create visual projects. The built-in feedback tools let you comment directly on student work, and everything stays organized in one place.",
  },
  {
    name: "Notion AI",
    slug: "notion",
    description: "AI-enhanced workspace for lesson planning, curriculum organization, student tracking, and collaborative teaching resources - all in one flexible system.",
    category: "Lesson Planning",
    pricing: "Free/Paid",
    pricingDetails: "Free Notion for teachers, AI add-on $10/mo (free for verified students)",
    strengths: [
      "All-in-one system for lesson plans, resources, schedules",
      "AI helps draft lesson plans and activities",
      "Summarize research and generate ideas",
      "Share templates with colleagues",
      "Database features for student tracking",
      "Available on all devices",
    ],
    weaknesses: [
      "Steep learning curve initially",
      "AI features cost extra for teachers (free for students)",
      "Can be overwhelming with so many features",
    ],
    bestFor: "Organizing all teaching materials, lesson planning, and curriculum development",
    features: ["Lesson plan templates", "AI writing assistant", "Database tracking", "Collaboration", "Calendar integration"],
    teacherTip: "Create a master lesson plan template with sections for objectives, activities, materials, and assessment. Duplicate it each week and use Notion AI to generate activity ideas when you're stuck.",
  },
  {
    name: "Otter.ai",
    slug: "otter-ai",
    description: "AI transcription tool that records and transcribes meetings, professional development sessions, and parent-teacher conferences automatically.",
    category: "Transcription",
    pricing: "Freemium",
    pricingDetails: "Free (300 min/mo), Pro $16.99/mo, Business $30/user/mo (education discounts)",
    strengths: [
      "Automatic transcription of meetings and PD",
      "Searchable archive of all conversations",
      "Action items and summary extraction",
      "Integrates with Zoom for virtual meetings",
      "Share transcripts with colleagues or absent students",
      "Generous free tier (300 minutes/month)",
    ],
    weaknesses: [
      "Accuracy varies with audio quality and accents",
      "Free tier monthly limit",
      "Requires internet connection",
    ],
    bestFor: "Recording meetings, PD sessions, and creating accessible content",
    features: ["Live transcription", "Meeting summaries", "Action items", "Zoom integration", "Search transcripts"],
    teacherTip: "Record department meetings and parent-teacher conferences so you can focus on the conversation instead of note-taking. The searchable transcripts are invaluable when you need to recall what was discussed.",
  },
  {
    name: "ChatGPT",
    slug: "chatgpt",
    description: "The most versatile AI assistant for teachers - lesson planning, differentiated instruction, quiz generation, parent communication, and curriculum ideation.",
    category: "General Assistant",
    pricing: "Freemium",
    pricingDetails: "Free tier available, Plus $20/mo, Team $25/user/mo (education pilot programs available)",
    strengths: [
      "Generate lesson plans for any topic instantly",
      "Create differentiated versions for various ability levels",
      "Generate quiz questions, discussion prompts, activities",
      "Draft parent communication emails",
      "Explain complex concepts in grade-appropriate language",
      "Free tier is very capable",
    ],
    weaknesses: [
      "Requires fact-checking for accuracy",
      "Generic outputs need personalization",
      "Free tier limited to GPT-3.5 (older model)",
    ],
    bestFor: "General teaching support, lesson planning, content generation, brainstorming",
    features: ["Lesson plan generation", "Quiz creation", "Differentiation", "Email drafting", "Activity ideas"],
    teacherTip: "When generating lesson plans, be specific in your prompt: include grade level, learning objectives, time constraints, and any accommodations needed. The more context you provide, the better the output.",
  },
  {
    name: "Diffit",
    slug: "diffit",
    description: "AI tool that automatically generates differentiated reading materials at multiple reading levels from any source text - perfect for inclusive classrooms.",
    category: "Differentiation",
    pricing: "Freemium",
    pricingDetails: "Free tier available, Premium $99/year for unlimited use",
    strengths: [
      "Automatically adapts texts to different reading levels",
      "Generates comprehension questions",
      "Creates vocabulary lists with definitions",
      "Saves hours of differentiation work",
      "Works with any source material (articles, excerpts, etc.)",
    ],
    weaknesses: [
      "Free tier has monthly limits",
      "Quality varies with source text complexity",
      "Should be reviewed before assigning to students",
    ],
    bestFor: "Creating differentiated reading materials for mixed-ability classrooms",
    features: ["Multi-level text generation", "Comprehension questions", "Vocabulary support", "Summary generation", "Standards alignment"],
    teacherTip: "Use Diffit when you find a great article that's too advanced for some students. It generates 3-4 reading levels plus comprehension questions, saving you hours of manual differentiation work.",
  },
  {
    name: "SchoolAI",
    slug: "schoolai",
    description: "Purpose-built AI platform for K-12 schools with student interaction tools, classroom management features, and district-level content controls.",
    category: "Classroom Management",
    pricing: "Paid",
    pricingDetails: "District/school licensing (contact for pricing), pilot programs available",
    strengths: [
      "Designed specifically for K-12 education",
      "Student-safe AI interactions with content filtering",
      "Teacher dashboard for monitoring student use",
      "Built-in digital citizenship lessons",
      "District-level controls and data privacy",
    ],
    weaknesses: [
      "Requires school or district purchase",
      "Not available for individual teachers yet",
      "Still rolling out to more districts",
    ],
    bestFor: "Schools implementing AI tools with safety controls and student monitoring",
    features: ["Student AI assistant", "Teacher monitoring", "Content filtering", "Digital citizenship", "Usage analytics"],
    teacherTip: "If your school has SchoolAI, use the monitoring dashboard to see which students are asking the AI to solve problems vs using it to understand concepts. Intervene early if students are over-relying on AI.",
  },
  {
    name: "Brisk Teaching",
    slug: "brisk-teaching",
    description: "Chrome extension that brings AI-powered feedback, resource generation, and curriculum tools directly into Google Classroom, Docs, and Slides.",
    category: "Feedback & Curriculum",
    pricing: "Freemium",
    pricingDetails: "Free tier available, Premium $4/month (billed annually)",
    strengths: [
      "Works directly in Google Workspace tools you already use",
      "One-click AI feedback on Google Docs assignments",
      "Generate lesson materials without leaving your workflow",
      "Create rubrics, quizzes, and discussion prompts instantly",
      "Very affordable premium tier",
    ],
    weaknesses: [
      "Chrome/Google Workspace only (no Firefox, Safari, Microsoft)",
      "Free tier has usage limits",
      "Requires Google Classroom integration",
    ],
    bestFor: "Google Classroom teachers wanting AI tools integrated into their existing workflow",
    features: ["AI feedback in Docs", "Resource generator", "Rubric creator", "Quiz builder", "Google Classroom integration"],
    teacherTip: "Use Brisk's one-click feedback feature to quickly provide initial comments on student Google Docs, then spend your time on personalized, content-specific feedback that only you can provide.",
  },
];

export default function BestAIToolsForTeachersPage() {
  const toolsBySlug = new Map(tools.map((t) => [t.slug, t]));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* JSON-LD Schema for FAQs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What are the best free AI tools for teachers?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The best free AI tools for teachers include ChatGPT (free tier with GPT-3.5), Canva for Education (100% free for verified K-12 teachers), Curipod (free tier for basic lessons), and Otter.ai (300 minutes/month free). These cover lesson planning, content creation, and transcription without any cost.",
                },
              },
              {
                "@type": "Question",
                name: "How can AI tools save teachers time?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "AI tools save teachers time by automating repetitive tasks like generating lesson plans, creating differentiated materials, grading assignments, providing feedback, and designing classroom resources. Teachers report saving 5-10 hours per week using tools like ChatGPT for planning, Gradescope for grading, and Diffit for differentiation.",
                },
              },
              {
                "@type": "Question",
                name: "Are AI tools safe for K-12 classrooms?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Many AI tools now offer education-specific versions with safety features like content filtering, student monitoring, and FERPA/COPPA compliance. Tools like SchoolAI, Khanmigo, and Canva for Education are specifically designed for K-12 use. Always review your district's AI policy and use tools with appropriate safety controls.",
                },
              },
              {
                "@type": "Question",
                name: "Can AI replace teachers?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. AI tools are teaching assistants, not teacher replacements. They handle time-consuming tasks like grading, material creation, and differentiation, but cannot replace the human elements of teaching: building relationships, understanding student needs, providing emotional support, and adapting to classroom dynamics. AI amplifies great teaching; it doesn't replace it.",
                },
              },
              {
                "@type": "Question",
                name: "What's the best AI tool for lesson planning?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "ChatGPT and Notion AI are the most versatile for lesson planning. ChatGPT generates complete lesson plans with objectives, activities, and assessments from simple prompts. Notion AI integrates planning with organization, scheduling, and resource management. Curipod is excellent if you want ready-to-present interactive lessons quickly.",
                },
              },
              {
                "@type": "Question",
                name: "How do I get started with AI tools as a teacher?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Start with one free tool that addresses your biggest pain point: ChatGPT for lesson planning, Canva for Education for materials, or Gradescope for grading. Spend 30 minutes experimenting, then gradually incorporate it into your workflow. Join teacher communities on social media to learn tips from others. Most importantly, check your school's AI policy before introducing AI to students.",
                },
              },
              {
                "@type": "Question",
                name: "Do these AI tools offer educator discounts?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, many do. Canva for Education is 100% free for verified K-12 teachers. Notion offers free Plus plans for educators. Gradescope's core features are free. Tools like Quillbot, Otter.ai, and Gamma offer education discounts. Always verify your teacher status with your school email to unlock discounts.",
                },
              },
              {
                "@type": "Question",
                name: "Can AI tools help with differentiated instruction?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. Diffit automatically generates reading materials at multiple levels. ChatGPT can create differentiated versions of lessons, activities, and assessments. Khanmigo provides personalized learning paths for each student. These tools make differentiation practical even with large class sizes.",
                },
              },
            ],
          }),
        }}
      />

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-white">
          Home
        </Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Best AI Tools for Teachers</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Best AI Tools for Teachers 2026: Save Time & Teach Better
        </h1>
        <p className="text-xl text-gray-400 max-w-4xl">
          Discover the AI tools transforming education in 2026. From lesson planning and grading to
          differentiation and classroom management - these 12 tools help teachers work smarter, not
          harder. Cut prep time in half while providing better, more personalized instruction.
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
            Updated February 2026
          </span>
          <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
            12 Essential Teaching Tools
          </span>
          <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">
            Educator Discounts Available
          </span>
        </div>
      </header>

      {/* Quick Navigation */}
      <section className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-12">
        <h2 className="text-lg font-semibold mb-3">Quick Navigation by Use Case</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-2">📚 Lesson Planning</h3>
            <div className="space-y-1 text-sm">
              <a href="#chatgpt" className="text-blue-400 hover:text-blue-300 block">ChatGPT</a>
              <a href="#curipod" className="text-blue-400 hover:text-blue-300 block">Curipod</a>
              <a href="#notion" className="text-blue-400 hover:text-blue-300 block">Notion AI</a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-2">✅ Grading & Feedback</h3>
            <div className="space-y-1 text-sm">
              <a href="#gradescope" className="text-blue-400 hover:text-blue-300 block">Gradescope</a>
              <a href="#brisk-teaching" className="text-blue-400 hover:text-blue-300 block">Brisk Teaching</a>
              <a href="#quillbot" className="text-blue-400 hover:text-blue-300 block">Quillbot</a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-2">🎨 Materials & Design</h3>
            <div className="space-y-1 text-sm">
              <a href="#canva" className="text-blue-400 hover:text-blue-300 block">Canva for Education</a>
              <a href="#gamma" className="text-blue-400 hover:text-blue-300 block">Gamma</a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-2">📊 Differentiation</h3>
            <div className="space-y-1 text-sm">
              <a href="#diffit" className="text-blue-400 hover:text-blue-300 block">Diffit</a>
              <a href="#khanmigo" className="text-blue-400 hover:text-blue-300 block">Khanmigo</a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-2">🏫 Classroom Management</h3>
            <div className="space-y-1 text-sm">
              <a href="#schoolai" className="text-blue-400 hover:text-blue-300 block">SchoolAI</a>
              <a href="#otter-ai" className="text-blue-400 hover:text-blue-300 block">Otter.ai</a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="prose prose-invert max-w-none mb-16">
        <h2 className="text-3xl font-bold mb-4">How AI Is Transforming Teaching in 2026</h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          Teaching has never been more demanding. Between lesson planning, grading, differentiation,
          parent communication, and administrative tasks, teachers work an average of 54 hours per
          week - with much of that time spent on repetitive tasks that AI can now handle.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          The AI tools in this guide aren't here to replace teachers - they're here to give you back
          your time. Tools like ChatGPT can generate a week's worth of lesson plans in 20 minutes.
          Gradescope can grade 100 assignments in the time it used to take to grade 10. Diffit can
          differentiate a reading passage for three ability levels instantly. Canva for Education
          creates professional classroom materials without design skills.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed">
          This isn't about replacing your expertise - it's about amplifying it. Spend less time on
          administrative work and more time doing what only you can do: building relationships with
          students, providing personalized support, and fostering a love of learning. Here are the
          12 AI tools that will transform your teaching in 2026.
        </p>
      </section>

      {/* Comparison Table */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Quick Comparison: AI Tools for Teachers</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-gray-900 border border-gray-800 rounded-xl">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Tool</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Best For</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Pricing</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Key Feature</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {teacherTools.map((tool) => (
                <tr key={tool.slug} className="hover:bg-gray-800/50 transition">
                  <td className="px-4 py-3">
                    <a href={`#${tool.slug}`} className="font-medium text-blue-400 hover:text-blue-300">
                      {tool.name}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-400">{tool.bestFor.split(",")[0]}</td>
                  <td className="px-4 py-3 text-sm text-gray-400">{tool.pricing}</td>
                  <td className="px-4 py-3 text-sm text-gray-400">{tool.features[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed Reviews */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Detailed Reviews: Best AI Tools for Teachers</h2>
        <div className="space-y-12">
          {teacherTools.map((tool, index) => {
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
                  <div className="flex gap-2 shrink-0">
                    {(() => {
                      const affUrl = getAffiliateUrl(tool.slug) || toolData?.affiliateUrl;
                      return affUrl ? (
                        <a
                          href={affUrl}
                          target="_blank"
                          rel="noopener noreferrer sponsored"
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                        >
                          Try {tool.name} →
                        </a>
                      ) : null;
                    })()}
                    {toolData && (
                      <Link
                        href={`/tool/${tool.slug}`}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                      >
                        View Tool →
                      </Link>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  {/* Pricing */}
                  <div>
                    <h4 className="font-semibold text-gray-300 mb-2">💰 Pricing</h4>
                    <p className="text-gray-400 text-sm mb-1">{tool.pricing}</p>
                    <p className="text-gray-500 text-xs">{tool.pricingDetails}</p>
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

                {/* Teacher Tip */}
                {tool.teacherTip && (
                  <div className="mt-6 bg-blue-600/10 border border-blue-500/20 rounded-lg p-4">
                    <p className="text-sm text-gray-300">
                      <span className="font-semibold text-blue-400">💡 Teacher Tip:</span>{" "}
                      {tool.teacherTip}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* Use Case Guide */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">AI Tools by Teaching Challenge</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">📚 I Need to Plan Lessons Faster</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>ChatGPT:</strong> Generate complete lesson plans with objectives, activities, assessments</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Curipod:</strong> Create ready-to-present interactive lessons in minutes</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Notion AI:</strong> Organize all lesson plans, resources, and schedules in one place</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">✅ Grading Takes Forever</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Gradescope:</strong> AI-assisted grading with consistent rubrics</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Brisk Teaching:</strong> One-click AI feedback in Google Docs</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Quillbot:</strong> Pre-screen writing for areas needing feedback</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">📊 My Students Have Different Levels</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Diffit:</strong> Auto-generate reading materials at multiple levels</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Khanmigo:</strong> Personalized AI tutoring for each student</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>ChatGPT:</strong> Create differentiated versions of any assignment</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">🎨 I Need Better-Looking Materials</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Canva for Education:</strong> 100% free professional design tools</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Gamma:</strong> Beautiful presentations from text prompts</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Curipod:</strong> Engaging interactive slides students love</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">👥 I Need to Track Student Progress</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Khanmigo:</strong> Real-time insights into student understanding</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Gradescope:</strong> Analytics on common mistakes and patterns</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>SchoolAI:</strong> Monitor how students interact with AI</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">💰 I'm on a Tight Budget</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Canva for Education:</strong> 100% free for verified teachers</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>ChatGPT:</strong> Very capable free tier</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Gradescope:</strong> Core features free</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Brisk Teaching:</strong> Only $4/month for unlimited use</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Educator Resources Section */}
      <section className="mb-16 bg-gradient-to-r from-green-600/10 to-blue-600/10 border border-green-500/20 rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6">🎓 Free Resources for Educators</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-green-400">100% Free for Teachers</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• <strong>Canva for Education:</strong> Verify with school email - normally $12.99/mo</li>
              <li>• <strong>Notion:</strong> Free Plus plan for verified educators</li>
              <li>• <strong>Gradescope:</strong> Core grading features completely free</li>
              <li>• <strong>Otter.ai:</strong> 300 minutes/month transcription free</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-blue-400">Educator Discounts</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• <strong>Quillbot:</strong> Educator pricing available on request</li>
              <li>• <strong>Gamma:</strong> Education plans with discounts</li>
              <li>• <strong>Brisk Teaching:</strong> Only $4/mo (one of the most affordable)</li>
              <li>• <strong>Diffit:</strong> $99/year unlimited differentiation</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg">
          <p className="text-sm text-gray-400">
            💡 <strong>Pro Tip:</strong> Always verify with your .edu email to unlock educator
            pricing. Many tools offer generous free tiers for teachers but don't advertise them
            publicly. When in doubt, contact their education team - they want teachers using their
            tools!
          </p>
        </div>
      </section>

      {/* How We Evaluated Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">How We Evaluated These AI Tools</h2>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
          <p className="text-gray-400 mb-6">
            We evaluated these AI tools based on criteria that matter most to teachers with limited
            time and budgets. Every tool in this guide was assessed on:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-300 mb-3">⏱️ Time Savings</h3>
              <p className="text-gray-400 text-sm">
                Does this tool actually save time, or does it add complexity? We prioritized tools
                that reduce workload without a steep learning curve.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-300 mb-3">💰 Cost-Effectiveness</h3>
              <p className="text-gray-400 text-sm">
                Teachers shouldn't have to pay out-of-pocket. We favored free tools and those with
                generous educator discounts.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-300 mb-3">🎯 Output Quality</h3>
              <p className="text-gray-400 text-sm">
                Does the AI produce results you can actually use in the classroom? We tested for
                accuracy, age-appropriateness, and alignment with standards.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-300 mb-3">🔒 Student Safety</h3>
              <p className="text-gray-400 text-sm">
                For tools students use directly, we evaluated content filtering, data privacy, and
                alignment with FERPA/COPPA requirements.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-300 mb-3">🚀 Ease of Use</h3>
              <p className="text-gray-400 text-sm">
                Teachers need tools that work immediately, not ones that require hours of training.
                We prioritized intuitive interfaces and minimal setup.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-300 mb-3">📈 Real Classroom Impact</h3>
              <p className="text-gray-400 text-sm">
                We consulted with practicing teachers and reviewed case studies to ensure these
                tools deliver measurable improvements in efficiency or student outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">What are the best free AI tools for teachers?</h3>
            <p className="text-gray-400">
              The best free AI tools for teachers include <strong>ChatGPT</strong> (free tier with
              GPT-3.5), <strong>Canva for Education</strong> (100% free for verified K-12 teachers),
              <strong>Curipod</strong> (free tier for basic lessons), and <strong>Otter.ai</strong>
              (300 minutes/month free). These cover lesson planning, content creation, and
              transcription without any cost.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">How can AI tools save teachers time?</h3>
            <p className="text-gray-400">
              AI tools save teachers time by automating repetitive tasks like generating lesson
              plans, creating differentiated materials, grading assignments, providing feedback, and
              designing classroom resources. Teachers report saving 5-10 hours per week using tools
              like ChatGPT for planning, Gradescope for grading, and Diffit for differentiation.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Are AI tools safe for K-12 classrooms?</h3>
            <p className="text-gray-400">
              Many AI tools now offer education-specific versions with safety features like content
              filtering, student monitoring, and FERPA/COPPA compliance. Tools like{" "}
              <strong>SchoolAI</strong>, <strong>Khanmigo</strong>, and{" "}
              <strong>Canva for Education</strong> are specifically designed for K-12 use. Always
              review your district's AI policy and use tools with appropriate safety controls.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Can AI replace teachers?</h3>
            <p className="text-gray-400">
              No. AI tools are teaching assistants, not teacher replacements. They handle
              time-consuming tasks like grading, material creation, and differentiation, but cannot
              replace the human elements of teaching: building relationships, understanding student
              needs, providing emotional support, and adapting to classroom dynamics. AI amplifies
              great teaching; it doesn't replace it.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">What's the best AI tool for lesson planning?</h3>
            <p className="text-gray-400">
              <strong>ChatGPT</strong> and <strong>Notion AI</strong> are the most versatile for
              lesson planning. ChatGPT generates complete lesson plans with objectives, activities,
              and assessments from simple prompts. Notion AI integrates planning with organization,
              scheduling, and resource management. <strong>Curipod</strong> is excellent if you want
              ready-to-present interactive lessons quickly.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">How do I get started with AI tools as a teacher?</h3>
            <p className="text-gray-400">
              Start with one free tool that addresses your biggest pain point: ChatGPT for lesson
              planning, Canva for Education for materials, or Gradescope for grading. Spend 30
              minutes experimenting, then gradually incorporate it into your workflow. Join teacher
              communities on social media to learn tips from others. Most importantly, check your
              school's AI policy before introducing AI to students.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Do these AI tools offer educator discounts?</h3>
            <p className="text-gray-400">
              Yes, many do. <strong>Canva for Education</strong> is 100% free for verified K-12
              teachers. <strong>Notion</strong> offers free Plus plans for educators.{" "}
              <strong>Gradescope's</strong> core features are free. Tools like Quillbot, Otter.ai,
              and Gamma offer education discounts. Always verify your teacher status with your school
              email to unlock discounts.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Can AI tools help with differentiated instruction?</h3>
            <p className="text-gray-400">
              Absolutely. <strong>Diffit</strong> automatically generates reading materials at
              multiple levels. <strong>ChatGPT</strong> can create differentiated versions of
              lessons, activities, and assessments. <strong>Khanmigo</strong> provides personalized
              learning paths for each student. These tools make differentiation practical even with
              large class sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Ethical AI Use for Teachers */}
      <section className="mb-16 bg-yellow-600/10 border border-yellow-500/30 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4 text-yellow-400">⚠️ Important: Using AI Ethically in Education</h2>
        <div className="space-y-3 text-gray-300">
          <p>
            <strong>AI tools should enhance teaching, not replace teacher judgment.</strong> Here's
            how to use AI responsibly in your classroom:
          </p>
          <ul className="space-y-2 ml-6">
            <li>• <strong>DO:</strong> Use AI to save time on repetitive tasks (planning, grading, materials)</li>
            <li>• <strong>DO:</strong> Review and customize all AI-generated content before using with students</li>
            <li>• <strong>DO:</strong> Teach students about AI capabilities and limitations</li>
            <li>• <strong>DO:</strong> Use AI to support differentiation and personalization</li>
            <li>• <strong>DON'T:</strong> Assume AI-generated content is always accurate or age-appropriate</li>
            <li>• <strong>DON'T:</strong> Share student data with AI tools that lack proper privacy protections</li>
            <li>• <strong>DON'T:</strong> Use AI as a substitute for human connection and mentorship</li>
          </ul>
          <div className="mt-4 p-4 bg-gray-900/50 rounded-lg">
            <p className="text-sm">
              <strong>Check your district's AI policy before introducing AI tools to students.</strong>
              Many schools are still developing guidelines. When in doubt, use AI for your own
              productivity (lesson planning, grading) rather than having students interact directly
              with AI tools. Model responsible AI use for your students.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Explore More AI Tools for Education</h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Discover hundreds more AI tools for writing, productivity, research, and classroom
          management.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Browse All Tools
          </Link>
          <Link
            href="/best-ai-tools-for-students"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Student AI Tools →
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
