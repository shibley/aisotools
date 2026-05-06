import { tools } from "@/data/tools";
import { getAffiliateUrl } from "@/data/affiliate-links";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Tools for Personal Trainers in 2026: Train More Clients Better",
  description: "Discover the best AI tools for personal trainers in 2026. From AI workout plan generators to client management and nutrition planning — scale your coaching business.",
  keywords: ["best ai tools for personal trainers", "ai tools for personal trainers", "ai fitness coaching tools", "ai workout planner", "personal trainer ai 2026"],
  openGraph: {
    title: "Best AI Tools for Personal Trainers in 2026",
    description: "Guide to AI tools for personal trainers. Compare ChatGPT, Trainerize, and more.",
    url: "https://aisotools.com/blog/best-ai-tools-for-personal-trainers-2026",
    type: "article",
  },
  alternates: { canonical: "https://aisotools.com/blog/best-ai-tools-for-personal-trainers-2026" },
};

const toolCategories = [
  { category: "Program Design & Client Management", icon: "💪", description: "AI tools for creating personalized workout programs and managing client relationships", tools: [
    { name: "Trainerize", slug: "trainerize", description: "Online coaching platform with AI-powered features for personal trainers. Create and deliver workout programs, nutrition plans, and habit coaching. AI helps personalize program templates and automates check-in workflows for scaling to 50+ clients.", pricing: "Freemium", pricingDetails: "Free (1 client), Grow $5.92/mo, Pro $9.08/mo", strengths: ["AI-assisted program design from templates", "Workout delivery via mobile app", "Nutrition and habit tracking", "Automated check-in workflows", "Progress photo comparison", "Client messaging within platform"], bestFor: "Online personal trainers who coach clients remotely and need a professional platform for program delivery", freeFeatures: ["1 client free", "Basic program delivery", "Mobile app access"], rating: 4.6 },
    { name: "ChatGPT", slug: "chatgpt", description: "Personal trainers use ChatGPT to generate customized workout programs, periodization plans, exercise progressions, warm-up routines, and exercise substitutions for client limitations — in minutes rather than hours.", pricing: "Freemium", pricingDetails: "Free tier, Plus $20/mo", strengths: ["Custom workout program generation", "Periodization plans (4-12 weeks)", "Exercise substitution for injuries or equipment", "Warm-up and cool-down protocols", "Progression schemes (volume, intensity)", "Client FAQ and coaching scripts"], bestFor: "Generating first-draft workout programs, periodization plans, and client education content", freeFeatures: ["GPT-4o mini", "Unlimited queries", "File uploads"], rating: 4.7 },
    { name: "Claude", slug: "claude", description: "Personal trainers use Claude for writing client assessments, designing long-term training blocks, creating educational content, drafting coaching agreements, and writing personalized nutrition guidance notes.", pricing: "Freemium", pricingDetails: "Free tier, Pro $20/mo", strengths: ["Long-form training block design", "Client health assessment documentation", "Nutrition guidance notes (non-dietitian scope)", "Coaching agreement and waiver drafts", "Educational content for clients", "Personalized program rationale writing"], bestFor: "Writing client documentation, long-term training plans, and professional coaching materials", freeFeatures: ["Claude Sonnet", "Projects for client templates", "File uploads"], rating: 4.7 },
  ]},
  { category: "Nutrition Planning Support", icon: "🥗", description: "AI tools that support nutrition coaching within personal trainer scope of practice", tools: [
    { name: "Cronometer", slug: "cronometer", description: "Nutrition tracking app with AI-powered insights. Trainers use it to help clients track intake, identify micronutrient gaps, and monitor macros. AI-generated nutrient analysis helps trainers provide informed (non-prescriptive) nutritional guidance.", pricing: "Freemium", pricingDetails: "Free, Gold $7.99/mo", strengths: ["Complete micronutrient tracking (50+ nutrients)", "Macro and calorie targets", "AI-generated nutrient gap insights", "Food diary and barcode scanning", "Custom targets for specific goals", "Progress reports for client reviews"], bestFor: "Personal trainers supporting clients with general nutrition awareness within PT scope of practice", freeFeatures: ["Full nutrition tracking", "Macro targets", "Recipe creation", "Basic analysis"], rating: 4.5 },
  ]},
  { category: "Business & Marketing", icon: "📈", description: "AI tools that help personal trainers grow their client base and business", tools: [
    { name: "Canva", slug: "canva", description: "Design tool personal trainers use to create client welcome packs, workout cards, social media fitness content, transformation photos comparisons, and marketing materials for their services.", pricing: "Freemium", pricingDetails: "Free tier, Pro $12.99/mo", strengths: ["Workout card and exercise guide design", "Social media fitness content templates", "Before/after comparison layouts", "Client welcome pack design", "Video Reel and Stories templates", "Fitness brand kit creation"], bestFor: "Creating professional-looking training materials and growing social media presence", freeFeatures: ["250,000+ templates", "Basic design tools", "5GB storage"], rating: 4.6 },
    { name: "Grammarly", slug: "grammarly", description: "Writing assistant for professional personal trainer communications — client emails, fitness content, program descriptions, and coaching agreements. Ensures polished professionalism in all written communications.", pricing: "Freemium", pricingDetails: "Free tier, Premium $12/mo", strengths: ["Professional email polishing", "Fitness content clarity improvements", "Coaching contract review", "Social media caption refinement", "Works in all writing environments", "Tone suggestions for client communication"], bestFor: "Personal trainers who want polished, professional written communications with clients", freeFeatures: ["Grammar checking", "Basic clarity suggestions", "Browser extension"], rating: 4.4 },
  ]},
  { category: "Education & Continuing Learning", icon: "📚", description: "AI tools for ongoing professional development and staying current in fitness science", tools: [
    { name: "Perplexity", slug: "perplexity", description: "Personal trainers use Perplexity to research exercise science topics, find evidence for programming decisions, understand injury mechanisms, and stay current on fitness research — all with cited academic sources.", pricing: "Freemium", pricingDetails: "Free, Pro $20/mo", strengths: ["Exercise science research with citations", "Injury prevention and mechanism research", "Programming methodology research", "Supplement and nutrition science", "Current fitness trends and research", "NASM, ACE, NSCA exam prep topics"], bestFor: "Staying current on exercise science, researching programming decisions, and professional development", freeFeatures: ["Unlimited queries", "Source citations", "Academic research access"], rating: 4.5 },
  ]},
];

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.3;
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => <span key={i} className="text-lg">{i < fullStars ? "⭐" : i === fullStars && hasHalf ? "⭐" : "☆"}</span>)}
      <span className="ml-1 text-sm font-medium text-gray-600">{rating}/5</span>
    </div>
  );
}

export default function BestAIToolsForPersonalTrainers2026() {
  const totalTools = toolCategories.reduce((sum, cat) => sum + cat.tools.length, 0);
  return (
    <article className="mx-auto max-w-4xl px-4 py-8">
      <header className="mb-12">
        <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/blog" className="hover:text-blue-600">Blog</Link><span>→</span><span>AI Tools for Personal Trainers</span>
        </div>
        <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">Best AI Tools for Personal Trainers in 2026</h1>
        <p className="mb-6 text-xl leading-relaxed text-gray-600">{totalTools} AI tools that help personal trainers create better programs faster, manage more clients, and grow their coaching business.</p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          <span>📅 Updated May 2026</span><span>•</span><span>⏱️ 13 min read</span><span>•</span><span>🏋️ {totalTools} tools reviewed</span>
        </div>
      </header>
      <section className="mb-12 rounded-lg bg-orange-50 p-6">
        <h2 className="mb-3 text-2xl font-bold text-gray-900">How AI Is Changing Personal Training in 2026</h2>
        <p className="mb-4 leading-relaxed text-gray-700">The most successful personal trainers in 2026 are using AI to solve the fundamental constraint of the business: <strong>time per client</strong>. ChatGPT generates a customized 12-week training program in 10 minutes that previously took 2 hours. Online coaching platforms like Trainerize let one trainer effectively coach 50-100 clients.</p>
        <p className="leading-relaxed text-gray-700">AI doesn't replace the coaching relationship — it handles the documentation and program design so trainers can spend more time on coaching, motivation, and the human connection that actually drives client results and retention.</p>
      </section>
      <nav className="mb-12 rounded-lg border border-gray-200 bg-gray-50 p-6">
        <h2 className="mb-4 text-lg font-bold text-gray-900">Jump to Category</h2>
        <div className="grid gap-2 sm:grid-cols-2">
          {toolCategories.map((cat) => <a key={cat.category} href={`#${cat.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="flex items-center gap-2 rounded-md p-2 text-sm transition-colors hover:bg-white hover:shadow-sm"><span>{cat.icon}</span><span className="text-blue-600 hover:underline">{cat.category}</span><span className="text-gray-400">({cat.tools.length})</span></a>)}
        </div>
      </nav>
      {toolCategories.map((category, catIndex) => (
        <section key={category.category} id={category.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")} className="mb-16">
          <div className="mb-8">
            <h2 className="mb-2 text-3xl font-bold text-gray-900"><span className="mr-2">{category.icon}</span>{category.category}</h2>
            <p className="text-lg text-gray-600">{category.description}</p>
          </div>
          <div className="space-y-8">
            {category.tools.map((tool, toolIndex) => {
              const globalIndex = toolCategories.slice(0, catIndex).reduce((sum, c) => sum + c.tools.length, 0) + toolIndex + 1;
              const toolData = tools.find((t) => t.slug === tool.slug || t.name.toLowerCase() === tool.name.toLowerCase());
              const affiliateUrl = getAffiliateUrl(tool.slug) || toolData?.affiliateUrl;
              const toolUrl = toolData ? `/tool/${toolData.slug}` : `/tools?q=${encodeURIComponent(tool.name)}`;
              return (
                <div key={tool.name} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="mb-1 flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">{globalIndex}</span>
                        <h3 className="text-2xl font-bold text-gray-900"><Link href={toolUrl} className="hover:text-blue-600">{tool.name}</Link></h3>
                      </div>
                      <StarRating rating={tool.rating} />
                    </div>
                    <div className="text-right">
                      <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">{tool.pricing}</span>
                      <p className="mt-1 text-xs text-gray-500">{tool.pricingDetails}</p>
                    </div>
                  </div>
                  <p className="mb-4 leading-relaxed text-gray-700">{tool.description}</p>
                  <div className="mb-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">Key Strengths</h4>
                      <ul className="space-y-1">{tool.strengths.map((s: string) => <li key={s} className="flex items-start gap-2 text-sm text-gray-700"><span className="mt-0.5 text-green-500">✓</span>{s}</li>)}</ul>
                    </div>
                    <div>
                      <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">Free Features</h4>
                      <ul className="space-y-1">{tool.freeFeatures.map((f: string) => <li key={f} className="flex items-start gap-2 text-sm text-gray-700"><span className="mt-0.5 text-blue-500">★</span>{f}</li>)}</ul>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 border-t border-gray-100 pt-4">
                    <span className="text-sm text-gray-500"><strong>Best for:</strong> {tool.bestFor}</span>
                    <div className="ml-auto flex gap-2">
                      {affiliateUrl && <a href={affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">Try {tool.name} →</a>}
                      <Link href={toolUrl} className="inline-flex items-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">Full Review</Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">FAQ: AI for Personal Trainers</h2>
        <div className="space-y-5">
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">Can AI write workout programs for personal trainers?</h3>
            <p className="leading-relaxed text-gray-700">Yes — ChatGPT and Claude can generate structured 4-12 week programs with periodization, progression schemes, and exercise substitutions. Use these as first drafts that you customize based on your professional assessment of the client's movement quality, injury history, and goals. Never share AI-generated programs without professional review.</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">What is the best platform for online personal training?</h3>
            <p className="leading-relaxed text-gray-700">Trainerize is the most popular for independent trainers. It handles program delivery, client communication, nutrition tracking, and progress photos in one app. Starts free with 1 client — scale up as your online business grows. TrueCoach and ABC Trainerize are popular alternatives.</p>
          </div>
        </div>
      </section>
      <section className="rounded-lg bg-gradient-to-r from-orange-500 to-red-500 p-8 text-white">
        <h2 className="mb-4 text-3xl font-bold">Coach More Clients, Work Smarter</h2>
        <p className="mb-6 text-lg leading-relaxed text-orange-50">AI handles the program design documentation. You focus on the coaching, motivation, and client relationships that drive results.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/tools" className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-orange-600 transition-colors hover:bg-gray-100">Explore All AI Tools →</Link>
          <Link href="/blog/best-ai-fitness-apps-2026" className="inline-flex items-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-orange-600">Best AI Fitness Apps →</Link>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Best AI Tools for Personal Trainers in 2026", description: "Guide to AI tools for personal trainers including Trainerize, ChatGPT, Claude, and more.", author: { "@type": "Organization", name: "AISOTools" }, publisher: { "@type": "Organization", name: "AISOTools", logo: { "@type": "ImageObject", url: "https://aisotools.com/logo.png" } }, datePublished: "2026-05-05", dateModified: "2026-05-05", mainEntityOfPage: { "@type": "WebPage", "@id": "https://aisotools.com/blog/best-ai-tools-for-personal-trainers-2026" } })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "Can AI write workout programs for personal trainers?", acceptedAnswer: { "@type": "Answer", text: "Yes — ChatGPT and Claude generate 4-12 week programs as first drafts. Always customize based on professional assessment and never share without review." } }] })}} />
    </article>
  );
}
