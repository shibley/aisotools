import { tools } from "@/data/tools";
import { getAffiliateUrl } from "@/data/affiliate-links";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Fitness Apps in 2026: Train Smarter, Recover Faster",
  description:
    "Discover the 8 best AI fitness apps in 2026. From AI personal trainers and workout generators to nutrition planning and recovery optimization — apps that transform how you train.",
  keywords: [
    "best ai fitness apps",
    "ai personal trainer",
    "ai workout generator",
    "ai fitness app 2026",
    "ai for working out",
    "ai nutrition planning",
    "ai workout planner",
    "ai exercise app",
    "personalized ai workout",
    "ai health and fitness",
  ],
  openGraph: {
    title: "Best AI Fitness Apps in 2026: Train Smarter, Recover Faster",
    description:
      "The definitive guide to AI fitness apps in 2026. Compare AI personal trainers, workout generators, nutrition planners, and recovery optimization tools.",
    url: "https://aisotools.com/blog/best-ai-fitness-apps-2026",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/blog/best-ai-fitness-apps-2026",
  },
};

interface FitnessTool {
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

const fitnessTools: FitnessTool[] = [
  {
    name: "ChatGPT",
    slug: "chatgpt",
    category: "AI Personal Trainer & Program Designer",
    description:
      "ChatGPT is the most flexible AI personal trainer available — it can design customized workout programs for any goal, equipment situation, experience level, and time constraint. Describe your goals (lose 20 lbs, run a 5K, build muscle), available equipment (home gym, commercial gym, no equipment), schedule (3 days/week, 45 minutes per session), and limitations (bad knees, recovering from shoulder injury), and ChatGPT generates a structured multi-week program with progressive overload built in. The conversational interface means you can ask questions mid-program: 'I can't do squats, what should I substitute?' or 'I'm plateauing on bench press, how do I break through?' Unlike fixed apps, ChatGPT adapts to your actual situation.",
    pricing: "Freemium",
    pricingDetails: "Free (GPT-4o limited). Plus $20/mo for full access.",
    strengths: [
      "Designs fully customized programs for any goal and equipment",
      "Adaptive programming — modifies based on feedback and limitations",
      "Progressive overload planning for strength and hypertrophy",
      "Handles exercise substitutions for injuries or missing equipment",
      "Nutrition and recovery advice alongside training programs",
    ],
    bestFor: "Anyone who wants a fully customized, adaptable training program designed around their specific goals, equipment, and constraints",
    rating: 4.8,
  },
  {
    name: "Claude",
    slug: "claude",
    category: "Exercise Science & Research-Based Coaching",
    description:
      "Claude's strength in research synthesis makes it the best AI for evidence-based fitness advice. When you want to understand WHY a training protocol works — the mechanisms behind progressive overload, the optimal training frequency for hypertrophy, the science of RPE vs. percentage-based training — Claude provides thorough, accurate explanations grounded in exercise science. For advanced trainees who want to optimize their programming, Claude can analyze periodization models, discuss the evidence for specific interventions (cluster sets, blood flow restriction, tempo training), and help design evidence-informed approaches. Claude is also excellent for nutrition science — explaining protein synthesis, carbohydrate periodization, and supplement evidence.",
    pricing: "Freemium",
    pricingDetails: "Free tier. Pro $20/mo, Team $25/user/mo.",
    strengths: [
      "Evidence-based exercise science explanations with mechanism detail",
      "Periodization and program design theory for advanced athletes",
      "Supplement evidence review — what works vs. what doesn't",
      "Nutrition science: protein synthesis, carb periodization, timing",
      "Injury prevention and rehabilitation guidance based on research",
    ],
    bestFor: "Advanced trainees who want to understand the science behind their programming and make evidence-based decisions",
    rating: 4.6,
  },
  {
    name: "Perplexity",
    slug: "perplexity",
    category: "Fitness Research & Latest Studies",
    description:
      "Perplexity is invaluable for fitness enthusiasts who want access to the latest research. The fitness science landscape evolves rapidly — new studies on training frequency, protein intake, sleep and recovery, and supplement effectiveness emerge constantly. Ask Perplexity about recent research on any fitness topic and get cited answers from peer-reviewed journals and authoritative sources. For athletes tracking innovations in their sport (new training methods, injury prevention protocols, performance nutrition), Perplexity's real-time information access means you're working with current evidence rather than outdated bro-science. Deep Research can generate comprehensive literature reviews on any training or nutrition question.",
    pricing: "Freemium",
    pricingDetails: "Free tier. Pro $20/mo for Deep Research.",
    strengths: [
      "Access to latest exercise science research with citations",
      "Real-time updates on training, nutrition, and recovery innovations",
      "Cited answers from peer-reviewed sports science journals",
      "Deep Research generates comprehensive literature reviews",
      "Distinguishes evidence-based recommendations from gym myths",
    ],
    bestFor: "Evidence-minded athletes and fitness enthusiasts who want the latest research to inform their training and nutrition decisions",
    rating: 4.5,
  },
  {
    name: "Notion AI",
    slug: "notion-ai",
    category: "Training Log & Progress Tracking",
    description:
      "Notion combined with Notion AI creates the most powerful personal training log and analytics system available. Build workout databases that track every session — exercises, sets, reps, weights, RPE, and notes. Notion AI can analyze your training logs to identify stagnation points, generate trend summaries ('your squat has increased 15% over 8 weeks'), and help you spot patterns in performance vs. recovery quality. The flexibility of Notion means your system evolves with your training — from simple workout logs to comprehensive training journals that track nutrition, sleep, and subjective feel alongside performance metrics. Advanced athletes use Notion to build periodization maps, track competition prep timelines, and analyze which training blocks produced the best results.",
    pricing: "Freemium",
    pricingDetails: "Free (limited). Plus $12/user/mo, Business $18/user/mo.",
    strengths: [
      "Flexible training log with unlimited custom fields",
      "AI analysis of training trends and performance patterns",
      "Periodization planning and training block management",
      "Correlates performance with recovery, nutrition, and sleep notes",
      "Builds comprehensive training history for long-term analysis",
    ],
    bestFor: "Serious trainees who want detailed training logs with AI-powered analysis and long-term periodization tracking",
    rating: 4.4,
  },
  {
    name: "ElevenLabs",
    slug: "elevenlabs",
    category: "Audio Workout Coaching",
    description:
      "ElevenLabs enables a unique fitness application: creating custom audio workout coaching narration. Feed your workout program into any AI, generate the script for guided instructions, timing cues, and motivational coaching, then convert it to realistic speech with ElevenLabs. The result is a personalized workout audio guide that sounds like a professional coach — not a robotic text-to-speech voice. Fitness creators use ElevenLabs to produce workout audio programs, coaching podcasts, and instructional content. Personal trainers create branded audio coaching products for clients. For home workouts without a trainer, high-quality audio coaching maintains the psychological benefits of real-time coaching.",
    pricing: "Freemium",
    pricingDetails: "Free (10K chars/mo). Starter $5/mo (30K chars). Creator $22/mo.",
    strengths: [
      "Create personalized audio workout coaching with realistic voice",
      "AI-narrated workout instructions with professional quality",
      "Branded fitness content for personal trainers",
      "Motivational cues and exercise guidance in your own pace",
      "Multilingual workout coaching for international clients",
    ],
    bestFor: "Personal trainers who want to create audio coaching products, and home gym users who want guided workout audio",
    rating: 4.3,
  },
  {
    name: "Runway",
    slug: "runway",
    category: "Fitness Content Creation",
    description:
      "Runway's AI video tools are increasingly used by fitness content creators, personal trainers, and wellness brands to produce professional-quality exercise videos and transformation content. The video editing and generation capabilities allow fitness creators to produce demo videos, workout highlights, and educational content faster than traditional production. For personal trainers building online businesses, Runway reduces the production barrier for creating quality video content that drives client acquisition. The text-to-video capabilities enable quick creation of animated exercise guides and training concept explanations.",
    pricing: "Freemium",
    pricingDetails: "Free (limited). Standard $15/mo, Pro $35/mo.",
    strengths: [
      "Professional-quality workout demo video production",
      "Fitness transformation content creation",
      "Educational exercise guide animations",
      "Background removal for clean exercise demonstration videos",
      "Social media fitness content at scale",
    ],
    bestFor: "Personal trainers and fitness creators who want to produce professional video content for online coaching businesses",
    rating: 4.1,
  },
  {
    name: "Grammarly",
    slug: "grammarly",
    category: "Fitness Communication & Coaching",
    description:
      "Personal trainers and fitness coaches who communicate with clients online benefit from Grammarly's professional writing polish. Workout program PDFs, client check-in responses, email coaching updates, and social media content all benefit from error-free, clear communication. For trainers building online coaching businesses where written communication is a primary delivery method, Grammarly ensures every client interaction reflects professional standards. The business communication suggestions help trainers communicate progress, give feedback on form videos, and deliver difficult messages (plateau discussions, diet adherence conversations) with the right tone.",
    pricing: "Freemium",
    pricingDetails: "Free (basic). Premium $12/mo (annual).",
    strengths: [
      "Polishes workout program PDFs and client communication",
      "Professional tone for online coaching check-ins",
      "Clear explanation of exercise technique and programming rationale",
      "Social media fitness content clarity and accuracy",
      "Consistency across all client communications",
    ],
    bestFor: "Personal trainers and online coaches who want professional-quality written communication with clients",
    rating: 4.2,
  },
  {
    name: "Copy.ai",
    slug: "copyai",
    category: "Fitness Marketing & Content",
    description:
      "Personal trainers and gym owners use Copy.ai to generate marketing copy, social media content, email newsletters, and program descriptions at scale. Building an online fitness coaching business requires constant content production — workout tips, nutrition advice, client testimonials, promotional offers — and Copy.ai dramatically reduces the time spent on marketing writing. The fitness-specific templates help generate social media post series, email sequences for new client nurturing, and promotional content for training programs. For trainers who are great at coaching but find marketing writing challenging, Copy.ai provides a starting point that captures their voice and message.",
    pricing: "Freemium",
    pricingDetails: "Free (limited). Starter $49/mo, Advanced $249/mo.",
    strengths: [
      "Fitness marketing copy for social media and email campaigns",
      "Program descriptions and sales page content",
      "Client testimonial and case study formatting",
      "Email sequences for lead nurturing and client retention",
      "Social media content calendars for fitness brands",
    ],
    bestFor: "Personal trainers and gym owners building online businesses who need high-volume fitness marketing content",
    rating: 4.1,
  },
];

const faqs = [
  {
    question: "What is the best AI app for fitness and working out in 2026?",
    answer:
      "The best AI fitness app depends on your goal. For a fully customized workout program designed around your specific situation, ChatGPT is the most flexible — describe your goals, equipment, and constraints and get a complete program. For understanding the science behind your training, Claude provides evidence-based explanations. For tracking progress analytically, Notion AI enables sophisticated training logs. Most serious fitness enthusiasts use ChatGPT for program design, Claude for research questions, and Notion for tracking.",
  },
  {
    question: "Can AI replace a personal trainer?",
    answer:
      "AI can replace many personal trainer functions: program design, exercise selection, progression planning, nutrition guidance, and answering training questions. What AI cannot do: watch your form and provide real-time correction, provide in-person motivation and accountability, physically spot you on heavy lifts, or build the relationship that keeps you consistent. For program design and coaching knowledge, AI is now a viable and affordable alternative. For technique development and accountability, working with a human trainer (even occasionally) remains valuable. Many people use AI for programming and occasional human trainer sessions for form checks.",
  },
  {
    question: "How do I use ChatGPT to create a workout program?",
    answer:
      "The key to getting a great workout program from ChatGPT is specificity. Include: (1) Your primary goal (fat loss, muscle gain, strength, endurance, general fitness). (2) Training frequency (3x/week, 5x/week, etc.). (3) Session length (30, 45, 60 minutes). (4) Available equipment (full gym, dumbbells only, home gym with barbell, no equipment). (5) Experience level (beginner, intermediate, advanced) and relevant history. (6) Any injuries or limitations. (7) How long you want the program to run. With all this context, ChatGPT generates a specific, progressive, structured program rather than generic advice.",
  },
  {
    question: "What AI tools are best for nutrition and diet planning?",
    answer:
      "For nutrition planning, ChatGPT is strong at creating meal plans based on calorie targets, dietary restrictions, and food preferences. Claude is excellent for understanding the science of nutrition — protein timing, carbohydrate strategies, supplement evidence. Perplexity is best for latest nutrition research with citations. For serious athletes, Claude can analyze and discuss sports nutrition strategies (carb loading, periodized nutrition, competition prep diets) with nuance that respects the evidence. Note: for medical nutrition therapy or conditions requiring clinical guidance, consult a registered dietitian.",
  },
  {
    question: "Can AI help me train for a specific sport or event?",
    answer:
      "Yes — AI is particularly good at sport-specific programming. Tell ChatGPT your sport, current training base, competition timeline, and performance goals, and it can design periodized training leading to peak performance. For endurance sports (running, cycling, triathlon), Claude can explain periodization models like base training, build, and peak phases. Perplexity can research sport-specific training methodologies and current performance science. The combination of ChatGPT for program structure and Perplexity for sport-specific research creates a solid sport-specific training plan.",
  },
];

export default async function Page() {
  const toolData = fitnessTools.map((ft) => {
    const tool = tools.find((t) => t.slug === ft.slug);
    return { ...ft, url: tool ? getAffiliateUrl(ft.slug) || tool.url : "#" };
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
            <span>Fitness</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Best AI Fitness Apps in 2026: Train Smarter, Recover Faster
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            AI has democratized access to expert fitness coaching — a fully customized workout program, evidence-based nutrition guidance, and adaptive training planning are now available to anyone with a smartphone. Here are the 8 best AI fitness and workout tools in 2026, from AI personal trainers to recovery optimizers.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
            <span>📅 Updated May 2026</span>
            <span>•</span>
            <span>⏱️ 10 min read</span>
            <span>•</span>
            <span>💪 {fitnessTools.length} tools reviewed</span>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-10">
          <h2 className="font-semibold text-white mb-3">Quick Navigation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {fitnessTools.map((tool, i) => (
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
          <h2 className="text-2xl font-bold mb-4">How AI is Changing Fitness in 2026</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Personal training used to cost $60-150 per session. A good customized program required a credentialed trainer and multiple consultations. AI has changed this — you can now get a fully personalized, adaptive training program for any goal, equipment setup, and schedule at no cost beyond an AI subscription.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {[
              { icon: "🏋️", title: "Train", desc: "Custom programs for any goal and equipment (ChatGPT)" },
              { icon: "🔬", title: "Optimize", desc: "Evidence-based training and nutrition science (Claude)" },
              { icon: "📊", title: "Track", desc: "Training logs with AI performance analysis (Notion AI)" },
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
                    Key Strengths for Fitness
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
          <h2 className="text-2xl font-bold mb-6">AI Fitness Apps: Quick Comparison</h2>
          <div className="overflow-x-auto">
            <div className="min-w-[640px]">
              <div className="grid grid-cols-4 gap-px bg-gray-800 rounded-xl overflow-hidden text-sm">
                <div className="bg-gray-900 p-3 font-semibold text-gray-400">Tool</div>
                <div className="bg-gray-900 p-3 font-semibold text-gray-400">Primary Use</div>
                <div className="bg-gray-900 p-3 font-semibold text-gray-400">Pricing</div>
                <div className="bg-gray-900 p-3 font-semibold text-gray-400">Rating</div>
                {fitnessTools.map((tool) => (
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
          <h2 className="text-2xl font-bold mb-4">The AI Fitness Stack We Recommend</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            For most fitness enthusiasts, we recommend:{" "}
            <Link href="/tool/chatgpt" className="text-blue-400 hover:text-blue-300">
              ChatGPT
            </Link>{" "}
            for program design and adaptive coaching,{" "}
            <Link href="/tool/claude" className="text-blue-400 hover:text-blue-300">
              Claude
            </Link>{" "}
            for evidence-based training and nutrition science,{" "}
            <Link href="/tool/notion-ai" className="text-blue-400 hover:text-blue-300">
              Notion AI
            </Link>{" "}
            for training logs and progress tracking, and{" "}
            <Link href="/tool/perplexity" className="text-blue-400 hover:text-blue-300">
              Perplexity
            </Link>{" "}
            for the latest research on any training question.
          </p>
          <p className="text-gray-400 text-sm">
            Three of four have free tiers — start your AI-assisted training today.
          </p>
        </section>

        {/* Related Posts */}
        <section>
          <h2 className="text-xl font-bold mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                href: "/blog/best-ai-tools-for-personal-trainers-2026",
                title: "Best AI Tools for Personal Trainers",
                desc: "AI tools for fitness professionals building coaching businesses",
              },
              {
                href: "/blog/best-ai-tools-for-healthcare-professionals-2026",
                title: "Best AI Tools for Healthcare Professionals",
                desc: "AI for medical and health professionals",
              },
              {
                href: "/blog/best-ai-scheduling-tools-2026",
                title: "Best AI Scheduling Tools 2026",
                desc: "Schedule your workouts and optimize your day",
              },
              {
                href: "/blog/best-ai-tools-for-coaches-2026",
                title: "Best AI Tools for Coaches",
                desc: "AI tools across all coaching disciplines",
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
            headline: "Best AI Fitness Apps in 2026: Train Smarter, Recover Faster",
            description:
              "Comprehensive guide to the 8 best AI fitness apps in 2026, covering AI personal trainers, workout program generators, nutrition planning, and training analytics.",
            author: { "@type": "Organization", name: "AISO Tools" },
            publisher: {
              "@type": "Organization",
              name: "AISO Tools",
              url: "https://aisotools.com",
            },
            datePublished: "2026-05-04",
            dateModified: "2026-05-04",
            url: "https://aisotools.com/blog/best-ai-fitness-apps-2026",
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
