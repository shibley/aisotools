import { tools } from "@/data/tools";
import { getAffiliateUrl } from "@/data/affiliate-links";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Language Learning Apps in 2026: Speak Faster, Learn Smarter",
  description:
    "Discover the 8 best AI language learning apps in 2026. From AI conversation partners and pronunciation coaches to adaptive grammar lessons and immersive tutors — apps that accelerate fluency.",
  keywords: [
    "best ai language learning apps",
    "ai language learning",
    "ai language tutor",
    "best app to learn a language 2026",
    "ai conversation practice",
    "ai pronunciation coach",
    "duolingo alternatives 2026",
    "ai for learning languages",
    "language learning app 2026",
    "ai spanish tutor",
  ],
  openGraph: {
    title: "Best AI Language Learning Apps in 2026: Speak Faster, Learn Smarter",
    description:
      "The definitive guide to AI language learning apps in 2026. Compare AI conversation partners, pronunciation coaches, adaptive tutors, and immersive language platforms.",
    url: "https://aisotools.com/blog/best-ai-language-learning-apps-2026",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/blog/best-ai-language-learning-apps-2026",
  },
};

interface LangTool {
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

const langTools: LangTool[] = [
  {
    name: "ChatGPT",
    slug: "chatgpt",
    category: "AI Conversation Partner",
    description:
      "ChatGPT is the most versatile AI language learning tool available because it supports every language, adapts to any learning level, and never judges slow or imperfect responses. You can have full conversations in your target language, ask for grammar corrections mid-conversation, request vocabulary explanations with examples, and practice specific scenarios (ordering food, job interviews, business meetings). The voice mode in ChatGPT's mobile app enables spoken practice with real-time responses. Advanced learners use ChatGPT to discuss complex topics — politics, philosophy, business — entirely in their target language, which builds the contextual fluency formal apps miss.",
    pricing: "Freemium",
    pricingDetails: "Free (GPT-4o limited). Plus $20/mo for full access including voice mode.",
    strengths: [
      "Supports every major language and many minor ones",
      "Voice mode enables real spoken conversation practice",
      "Adapts difficulty from beginner to near-native level",
      "Explains grammar rules in context with real examples",
      "Practice any scenario: job interviews, travel, business",
    ],
    bestFor: "Intermediate and advanced learners who want real conversation practice on any topic in any language",
    rating: 4.8,
  },
  {
    name: "Claude",
    slug: "claude",
    category: "Grammar & Writing Coach",
    description:
      "Claude is exceptional for language learners who want deep, nuanced explanations of grammar rules, idiomatic expressions, and cultural context. Unlike apps that give binary right/wrong feedback, Claude explains WHY a sentence is incorrect, offers multiple alternatives, and discusses the subtle differences between similar expressions. For learners writing in their target language — essays, emails, messages — Claude provides detailed correction with explanations that teach rather than just fix. The large context window means Claude can review and correct entire compositions while maintaining consistent feedback across the full document. Claude's patient, thorough explanations make complex grammar digestible.",
    pricing: "Freemium",
    pricingDetails: "Free tier. Pro $20/mo, Team $25/user/mo.",
    strengths: [
      "Deep grammar explanations with cultural context",
      "Corrects writing with explanations that teach, not just fix",
      "Nuanced guidance on idioms and register (formal vs. casual)",
      "Reviews full essays and emails for comprehensive feedback",
      "Patient and never condescending with beginner mistakes",
    ],
    bestFor: "Learners who want detailed grammar explanations and writing feedback in their target language",
    rating: 4.7,
  },
  {
    name: "Perplexity",
    slug: "perplexity",
    category: "Language Research Tool",
    description:
      "Perplexity is a surprisingly powerful language learning companion for curious learners. When you encounter an unknown word, phrase, or cultural reference, Perplexity provides instant cited explanations from dictionaries, language forums, and native resources. For learners who want to understand etymology, regional variations (Spanish in Spain vs. Mexico), or whether a phrase is formal or slang, Perplexity's real-time search surfaces authoritative linguistic sources. Deep Research can generate comprehensive vocabulary lists for specific domains (medical Spanish, business French, legal German) with example sentences and usage notes — the kind of targeted vocabulary acquisition that accelerates professional language learning.",
    pricing: "Freemium",
    pricingDetails: "Free tier. Pro $20/mo for Deep Research and advanced features.",
    strengths: [
      "Instant explanations of words, phrases, and cultural context",
      "Cites authoritative linguistic sources for every answer",
      "Explains regional variations and register differences",
      "Deep Research generates domain-specific vocabulary lists",
      "Etymology and word origin explanations",
    ],
    bestFor: "Curious learners who want to understand the why behind language rules and cultural context",
    rating: 4.5,
  },
  {
    name: "ElevenLabs",
    slug: "elevenlabs",
    category: "Pronunciation & Audio Learning",
    description:
      "ElevenLabs' ultra-realistic text-to-speech in 29 languages provides native-quality audio for pronunciation learning that traditional apps can't match. Language learners use ElevenLabs to hear exactly how native speakers pronounce specific words, phrases, or sentences — at any speed, with any accent (British vs. American English, Castilian vs. Latin American Spanish). You can type full paragraphs of target-language text and hear them read by native-sounding voices, effectively creating custom listening practice from any text. For learners struggling with tonal languages like Mandarin or Vietnamese, hearing precise pronunciation from multiple voice samples is invaluable.",
    pricing: "Freemium",
    pricingDetails: "Free (10K chars/mo). Starter $5/mo (30K chars). Creator $22/mo (100K chars).",
    strengths: [
      "Native-quality pronunciation in 29 languages",
      "Multiple accents per language (British/American, Castilian/Latin American)",
      "Convert any text to audio for custom listening practice",
      "Precise tonal pronunciation for Mandarin, Vietnamese, Thai",
      "Adjustable speech speed for listening comprehension practice",
    ],
    bestFor: "Learners focused on pronunciation and listening comprehension who want native-quality audio models",
    rating: 4.6,
  },
  {
    name: "Notion AI",
    slug: "notion-ai",
    category: "Study Notes & Vocabulary System",
    description:
      "Notion combined with Notion AI creates a powerful personalized language learning system. Build vocabulary databases with native example sentences, grammar rule libraries with AI-generated examples, and spaced repetition systems using Notion's database views. Notion AI can generate additional example sentences for any vocabulary entry, create practice exercises from your notes, summarize grammar rules, and translate content with explanations. Advanced language learners use Notion to build a 'second brain' for their target language — capturing notes from immersion, organizing grammar patterns, and using AI to expand their learning material. This approach builds a personalized curriculum rather than following a fixed app sequence.",
    pricing: "Freemium",
    pricingDetails: "Free (limited). Plus $12/user/mo, Business $18/user/mo. AI add-on included in paid plans.",
    strengths: [
      "Build personalized vocabulary databases with AI-generated examples",
      "Create grammar pattern libraries with AI explanations",
      "Generate practice exercises from your own notes",
      "Flexible spaced repetition system using database views",
      "Integrates all learning resources in one knowledge base",
    ],
    bestFor: "Self-directed learners who want to build a personalized language learning system beyond preset app curricula",
    rating: 4.4,
  },
  {
    name: "Otter AI",
    slug: "otter-ai",
    category: "Immersion & Transcription Tool",
    description:
      "Otter AI is a powerful immersion tool for language learners watching foreign language media or attending language exchange sessions. Point Otter at a YouTube video, podcast, or live conversation in your target language and get instant transcripts with timestamps. This enables 'shadowing' practice — reading the transcript while listening to improve comprehension — and vocabulary lookup for specific phrases. For learners in language exchange meetups or conversation groups, Otter transcribes the full conversation so you can review later, look up unfamiliar phrases, and reinforce what you heard. The searchable transcript archive becomes a growing vocabulary resource from real-world language use.",
    pricing: "Freemium",
    pricingDetails: "Free (300 min/mo transcription). Pro $16.99/mo, Business $30/user/mo.",
    strengths: [
      "Transcribes foreign language media for shadow reading practice",
      "Searchable archive of transcribed conversations",
      "Real-time transcription of language exchange sessions",
      "Timestamped transcripts for focused listening review",
      "Works with YouTube videos, podcasts, and live conversations",
    ],
    bestFor: "Immersion-method learners who want to extract maximum value from foreign language media and conversation practice",
    rating: 4.3,
  },
  {
    name: "Grammarly",
    slug: "grammarly",
    category: "Writing Correction for ESL Learners",
    description:
      "For non-native English speakers learning English, Grammarly is the most comprehensive AI writing assistant available. It catches grammar errors, suggests more natural phrasing, identifies vocabulary appropriate to the context (academic vs. casual), and explains corrections with clear reasoning. The real-time feedback loop — write a sentence, see the correction, understand why — is more effective for grammar acquisition than exercises because it works on the learner's own authentic content. Grammarly's 'Goals' feature lets ESL learners set their audience and tone, getting corrections calibrated for professional email, academic writing, or casual communication. The mobile keyboard works across all apps for persistent English support.",
    pricing: "Freemium",
    pricingDetails: "Free (basic corrections). Premium $12/mo (annual) with full suggestions and clarity improvements.",
    strengths: [
      "Real-time grammar correction with explanations for ESL learners",
      "Suggests more natural, native-sounding phrasing",
      "Context-aware corrections for academic vs. casual writing",
      "Mobile keyboard provides English support in any app",
      "Tone detection helps ESL learners match appropriate register",
    ],
    bestFor: "ESL learners and non-native English speakers who want real-time grammar feedback in professional and academic writing",
    rating: 4.5,
  },
  {
    name: "Runway",
    slug: "runway",
    category: "Video Comprehension Practice",
    description:
      "Runway's AI video tools enable a creative language learning approach: generate short video clips with target-language narration, create visual mnemonics for vocabulary, or use video translation features to analyze how content is phrased across languages. Innovative language learners use Runway to create mini immersion experiences — generating scenes with AI and adding target-language audio. While not a traditional language learning tool, Runway represents the cutting edge of AI-assisted immersive learning for visual learners who need concrete associations to retain vocabulary. The 'describe and generate' workflow also works as a vocabulary production exercise.",
    pricing: "Freemium",
    pricingDetails: "Free (limited credits). Standard $15/mo, Pro $35/mo, Unlimited $95/mo.",
    strengths: [
      "Generate visual mnemonics for vocabulary retention",
      "Create immersion scenarios with target-language narration",
      "Video translation for cross-language content analysis",
      "Visual storytelling approach for visual learners",
      "Describe scenes in target language to practice production",
    ],
    bestFor: "Visual learners and creative language learners who want AI-generated immersion scenarios and visual vocabulary practice",
    rating: 4.1,
  },
];

const faqs = [
  {
    question: "What is the best AI app for learning a language in 2026?",
    answer:
      "The best AI language learning app depends on your learning style and goals. For real conversation practice, ChatGPT with voice mode is the most flexible — it supports any language and any topic at any level. For grammar explanations and writing feedback, Claude provides the most detailed, educational corrections. For pronunciation guidance, ElevenLabs' native-quality audio in 29 languages is unmatched. Most effective learners combine ChatGPT for conversation, Claude for writing feedback, and native media with Otter transcription for immersion.",
  },
  {
    question: "Can AI replace a human language tutor?",
    answer:
      "AI can replace many functions of a human tutor — conversation practice, grammar correction, vocabulary building, pronunciation audio — and is available 24/7 at much lower cost. What AI still lacks compared to human tutors: cultural nuance from lived experience, emotional connection and accountability, judgment about your specific learning gaps, and the unpredictability of real human conversation. The most effective approach uses AI for high-frequency practice (daily conversation, grammar correction) and human tutors for accountability, culture, and advanced fluency refinement.",
  },
  {
    question: "How many minutes a day do I need to practice with AI to learn a language?",
    answer:
      "Research suggests 30 minutes of daily, focused practice is more effective than 3-hour weekend sessions. With AI tools, even 15 minutes of daily conversation practice with ChatGPT, combined with Claude for writing correction on anything you write in the target language, can produce noticeable progress within 2-3 months. The key is consistency and actual production (speaking and writing), not passive consumption. Use Otter and ElevenLabs for passive immersion during commutes or while doing other tasks.",
  },
  {
    question: "What AI tools work best for learning Spanish?",
    answer:
      "For Spanish, ChatGPT's voice mode offers excellent conversation practice and correctly handles the Castilian vs. Latin American distinction when specified. ElevenLabs has high-quality Spanish voice models for both accents — essential for pronunciation practice. For Spanish grammar explanations, Claude is extremely strong at explaining the subjunctive, ser vs. estar, and por vs. para — some of the trickiest concepts for English speakers. Perplexity is useful for understanding regional vocabulary differences and slang.",
  },
  {
    question: "Is AI language learning effective for beginners?",
    answer:
      "AI language learning can work for beginners but requires more structure than for intermediate learners. Beginners benefit from starting with a structured curriculum to learn fundamentals before using open-ended AI conversation. Once you have basic grammar and 500+ vocabulary words, AI conversation practice accelerates dramatically. For true beginners, use a structured resource to cover the basics, then layer in ChatGPT for conversation, Claude for grammar questions, and ElevenLabs for pronunciation from the intermediate stage onward.",
  },
];

export default async function Page() {
  const toolData = langTools.map((lt) => {
    const tool = tools.find((t) => t.slug === lt.slug);
    return { ...lt, url: tool ? getAffiliateUrl(lt.slug) || tool.url : "#" };
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
            <span>Language Learning</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Best AI Language Learning Apps in 2026: Speak Faster, Learn Smarter
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            AI has transformed language learning — you can now practice conversation 24/7, get instant grammar corrections with explanations, hear native pronunciation on demand, and learn any language without waiting for a tutor. Here are the 8 best AI language learning tools in 2026, from AI conversation partners to pronunciation coaches.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
            <span>📅 Updated May 2026</span>
            <span>•</span>
            <span>⏱️ 10 min read</span>
            <span>•</span>
            <span>🗣️ {langTools.length} tools reviewed</span>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-10">
          <h2 className="font-semibold text-white mb-3">Quick Navigation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {langTools.map((tool, i) => (
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
          <h2 className="text-2xl font-bold mb-4">How AI is Changing Language Learning in 2026</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Traditional language learning required expensive tutors, rigid app curricula, or hoping you&apos;d find a language exchange partner. AI has eliminated these bottlenecks — you now have an infinitely patient conversation partner, grammar coach, and pronunciation teacher available whenever you want, in any language.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {[
              { icon: "💬", title: "Conversation", desc: "Practice speaking in any language, anytime (ChatGPT)" },
              { icon: "✍️", title: "Grammar", desc: "Instant corrections with explanations that teach (Claude)" },
              { icon: "🔊", title: "Pronunciation", desc: "Native-quality audio models for any accent (ElevenLabs)" },
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
                    Key Strengths for Language Learning
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
          <h2 className="text-2xl font-bold mb-6">AI Language Learning Tools: Quick Comparison</h2>
          <div className="overflow-x-auto">
            <div className="min-w-[640px]">
              <div className="grid grid-cols-4 gap-px bg-gray-800 rounded-xl overflow-hidden text-sm">
                <div className="bg-gray-900 p-3 font-semibold text-gray-400">Tool</div>
                <div className="bg-gray-900 p-3 font-semibold text-gray-400">Primary Use</div>
                <div className="bg-gray-900 p-3 font-semibold text-gray-400">Pricing</div>
                <div className="bg-gray-900 p-3 font-semibold text-gray-400">Rating</div>
                {langTools.map((tool) => (
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
          <h2 className="text-2xl font-bold mb-4">The AI Language Learning Stack We Recommend</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            For most language learners, we recommend:{" "}
            <Link href="/tool/chatgpt" className="text-blue-400 hover:text-blue-300">
              ChatGPT
            </Link>{" "}
            for daily conversation practice (voice mode),{" "}
            <Link href="/tool/claude" className="text-blue-400 hover:text-blue-300">
              Claude
            </Link>{" "}
            for grammar correction and writing feedback,{" "}
            <Link href="/tool/elevenlabs" className="text-blue-400 hover:text-blue-300">
              ElevenLabs
            </Link>{" "}
            for pronunciation modeling, and{" "}
            <Link href="/tool/otter-ai" className="text-blue-400 hover:text-blue-300">
              Otter AI
            </Link>{" "}
            for transcribing foreign language media. This combination covers conversation, grammar, pronunciation, and immersion.
          </p>
          <p className="text-gray-400 text-sm">
            All four have free tiers — start today. Consistency beats intensity.
          </p>
        </section>

        {/* Related Posts */}
        <section>
          <h2 className="text-xl font-bold mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                href: "/blog/best-ai-tools-for-teachers-2026",
                title: "Best AI Tools for Teachers 2026",
                desc: "AI tools for language and ESL educators",
              },
              {
                href: "/blog/best-ai-tools-for-translators-2026",
                title: "Best AI Tools for Translators",
                desc: "AI translation and localization tools",
              },
              {
                href: "/blog/best-ai-voice-generators-2026",
                title: "Best AI Voice Generators 2026",
                desc: "Text-to-speech tools for language audio",
              },
              {
                href: "/blog/best-ai-transcription-tools-2026",
                title: "Best AI Transcription Tools 2026",
                desc: "Transcription tools for language immersion",
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
            headline: "Best AI Language Learning Apps in 2026: Speak Faster, Learn Smarter",
            description:
              "Comprehensive guide to the 8 best AI language learning apps in 2026, covering AI conversation partners, grammar coaches, pronunciation tools, and immersion methods.",
            author: { "@type": "Organization", name: "AISO Tools" },
            publisher: {
              "@type": "Organization",
              name: "AISO Tools",
              url: "https://aisotools.com",
            },
            datePublished: "2026-05-04",
            dateModified: "2026-05-04",
            url: "https://aisotools.com/blog/best-ai-language-learning-apps-2026",
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
