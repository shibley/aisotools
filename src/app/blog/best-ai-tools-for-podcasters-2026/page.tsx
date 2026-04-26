import { tools } from "@/data/tools";
import { getAffiliateUrl } from "@/data/affiliate-links";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Tools for Podcasters in 2026: Record, Edit & Grow",
  description:
    "Discover the best AI tools for podcasters in 2026. From AI transcription with Otter.ai to automated editing with Descript and show notes with Castmagic — save hours per episode.",
  keywords: [
    "best ai tools for podcasters",
    "ai podcast tools",
    "ai podcast editing",
    "ai transcription for podcasts",
    "ai show notes generator",
    "podcast ai tools 2026",
    "descript ai",
    "castmagic ai",
    "otter ai podcast",
    "ai podcast software",
  ],
  openGraph: {
    title: "Best AI Tools for Podcasters in 2026: Record, Edit & Grow",
    description:
      "The ultimate guide to AI tools for podcasters. Compare Descript, Castmagic, Otter.ai, Alitu, and more for transcription, editing, show notes, and podcast growth.",
    url: "https://aisotools.com/blog/best-ai-tools-for-podcasters-2026",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/blog/best-ai-tools-for-podcasters-2026",
  },
};

interface PodcastToolCategory {
  category: string;
  icon: string;
  description: string;
  tools: PodcastAITool[];
}

interface PodcastAITool {
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
}

const toolCategories: PodcastToolCategory[] = [
  {
    category: "Transcription & Show Notes",
    icon: "📝",
    description:
      "AI tools that automatically transcribe episodes and generate show notes, chapters, and summaries — saving 2-4 hours per episode",
    tools: [
      {
        name: "Castmagic",
        slug: "castmagic",
        description:
          "The most powerful AI tool purpose-built for podcasters. Upload your audio and Castmagic automatically generates transcripts, show notes, social media posts, email newsletters, blog posts, chapters, and highlight clips — all from one recording.",
        pricing: "Paid",
        pricingDetails: "Starter $23/mo, Pro $69/mo, Business $186/mo",
        strengths: [
          "Generates 10+ content pieces from one episode upload",
          "Accurate speaker-separated transcripts",
          "AI show notes with timestamps and chapter markers",
          "Social media clips and hooks auto-generated",
          "Email newsletter content ready to send",
          "Blog post draft from podcast audio",
          "Custom templates for your podcast's tone",
        ],
        bestFor:
          "Podcasters who want to repurpose every episode into maximum content without extra work",
        freeFeatures: ["Free trial available", "Sample generation"],
        rating: 4.8,
        timeSaved: "3-5 hours per episode",
      },
      {
        name: "Otter.ai",
        slug: "otter-ai",
        description:
          "AI transcription and meeting notes tool that works excellently for podcast recording. Otter provides accurate real-time transcripts with speaker identification, searchable audio, and AI-generated summaries.",
        pricing: "Freemium",
        pricingDetails: "Free (300 min/mo), Pro $16.99/mo, Business $30/user/mo",
        strengths: [
          "Real-time live transcription during recording",
          "Speaker diarization (tells speakers apart)",
          "Searchable transcript archive",
          "AI summary and action item extraction",
          "Integrates with Zoom, Google Meet, Teams",
          "Mobile app for recording on-the-go",
        ],
        bestFor:
          "Interview podcasters who need reliable transcription with speaker labels and searchable archives",
        freeFeatures: [
          "300 minutes/month transcription",
          "Real-time transcription",
          "Basic summaries",
          "Mobile app",
        ],
        rating: 4.5,
        timeSaved: "2-3 hours per episode",
      },
      {
        name: "Podsqueeze",
        slug: "podsqueeze",
        description:
          "AI content generator built specifically for podcasters. Feed it your episode and Podsqueeze outputs show notes, chapter markers, timestamps, social media posts, newsletter content, and blog articles optimized for SEO.",
        pricing: "Paid",
        pricingDetails: "Starter $15/mo (5 episodes), Pro $29/mo (20 episodes), Unlimited $49/mo",
        strengths: [
          "SEO-optimized show notes automatically",
          "Chapter markers with precise timestamps",
          "Multi-platform social content (Twitter, LinkedIn, Instagram)",
          "Newsletter and blog post generation",
          "Supports 30+ languages",
          "Quick turnaround (minutes, not hours)",
        ],
        bestFor:
          "Solo podcasters wanting affordable all-in-one show notes and content repurposing",
        freeFeatures: ["Free trial episode", "Sample output preview"],
        rating: 4.4,
        timeSaved: "2-4 hours per episode",
      },
    ],
  },
  {
    category: "Editing & Production",
    icon: "✂️",
    description:
      "AI-powered editing tools that remove filler words, silences, and mistakes — turning raw recordings into polished episodes automatically",
    tools: [
      {
        name: "Descript",
        slug: "descript",
        description:
          "The most revolutionary podcast editing tool: edit audio by editing the transcript. Delete 'um', 'uh', and filler words in one click. Clone your voice for re-recording mistakes without re-recording. Studio Sound removes background noise and makes any mic sound professional.",
        pricing: "Freemium",
        pricingDetails: "Free (1 hour transcription/mo), Hobbyist $24/mo, Creator $40/mo, Business $75/mo",
        strengths: [
          "Edit audio by editing text transcript",
          "Remove all filler words with one click",
          "AI Overdub: clone your voice for corrections",
          "Studio Sound: professional audio from any mic",
          "Remove silences and awkward pauses automatically",
          "Screen recording and video editing built in",
          "Clip creation for social media",
        ],
        bestFor:
          "Podcasters who spend hours editing and want to cut post-production time by 80%",
        freeFeatures: [
          "1 hour transcription per month",
          "Basic video/audio editing",
          "3 watermarked exports",
          "Studio Sound preview",
        ],
        rating: 4.8,
        timeSaved: "3-6 hours per episode",
      },
      {
        name: "Alitu",
        slug: "alitu",
        description:
          "The all-in-one podcast maker designed for beginners. Alitu records, processes, edits, and publishes your podcast automatically — cleaning audio, leveling volumes, adding intro/outro music, and publishing to all major platforms.",
        pricing: "Paid",
        pricingDetails: "$38/mo (all-in-one), includes hosting",
        strengths: [
          "Automatic audio cleanup and noise removal",
          "Volume leveling across all speakers",
          "Drag-and-drop episode builder",
          "Built-in podcast hosting included",
          "Music library for intros/outros",
          "One-click publishing to Spotify, Apple, etc.",
          "No technical knowledge required",
        ],
        bestFor:
          "New podcasters who want simplicity over control — just record and let Alitu handle everything else",
        freeFeatures: ["7-day free trial"],
        rating: 4.5,
        timeSaved: "2-4 hours per episode",
      },
    ],
  },
  {
    category: "Audio Enhancement",
    icon: "🎙️",
    description:
      "AI tools that clean up audio quality, remove background noise, and isolate vocals — making any recording sound studio-quality",
    tools: [
      {
        name: "Lalal.ai",
        slug: "lalal-ai",
        description:
          "AI stem separation tool that cleanly isolates vocals, instruments, and background noise. For podcasters, it's invaluable for salvaging recordings with background noise or separating interviewee audio from ambient sounds.",
        pricing: "Pay-per-use",
        pricingDetails: "Lite pack 90 min for $15, Plus 300 min for $35, Pro 900 min for $80",
        strengths: [
          "Best-in-class vocal isolation quality",
          "Remove background noise from any recording",
          "Separate music from speech",
          "Salvage interviews recorded in noisy environments",
          "No subscription required — pay per use",
          "Supports MP3, WAV, FLAC, and video files",
        ],
        bestFor:
          "Podcasters who record in-person interviews or deal with audio quality issues from remote guests",
        freeFeatures: [
          "10-second free preview per file",
          "Quality preview before purchase",
        ],
        rating: 4.6,
        timeSaved: "1-2 hours of manual noise editing",
      },
      {
        name: "ElevenLabs",
        slug: "elevenlabs",
        description:
          "Industry-leading AI voice platform that podcasters use for intros, outros, ad reads, and content narration. Create a cloned voice model for consistent branding, or use 3,000+ AI voices for any production need.",
        pricing: "Freemium",
        pricingDetails: "Free (10k chars/mo), Starter $5/mo, Creator $22/mo, Pro $99/mo",
        strengths: [
          "Clone your own voice for consistent narration",
          "Generate professional ad reads instantly",
          "3,000+ AI voices in 30+ languages",
          "Create intro/outro narration without re-recording",
          "Voice library for custom podcast characters",
          "API for automated content generation",
        ],
        bestFor:
          "Podcasters who produce narrated content or want to automate ad reads and promos",
        freeFeatures: [
          "10,000 characters/month",
          "Access to standard voices",
          "Basic voice cloning",
          "Audio downloads",
        ],
        rating: 4.8,
        timeSaved: "1-3 hours on narration and ad production",
      },
    ],
  },
  {
    category: "Clip Creation & Growth",
    icon: "🚀",
    description:
      "AI tools that automatically find the best moments, create short-form clips, and help grow your podcast audience across social platforms",
    tools: [
      {
        name: "Autopod",
        slug: "autopod",
        description:
          "AI auto-editing plugin for Adobe Premiere Pro that automatically switches camera angles, removes silences, and creates multi-cam sequences for video podcasts — cutting video editing time from hours to minutes.",
        pricing: "Paid",
        pricingDetails: "$29/mo or $290/yr",
        strengths: [
          "Auto-reframe for vertical/horizontal formats",
          "Smart camera switching based on who's speaking",
          "Silence removal with customizable sensitivity",
          "Multi-cam sequence automation",
          "Works natively in Adobe Premiere Pro",
          "Social media clip creator",
        ],
        bestFor:
          "Video podcasters using Adobe Premiere Pro who want to automate multi-cam editing",
        freeFeatures: ["7-day free trial"],
        rating: 4.5,
        timeSaved: "4-8 hours per video podcast episode",
      },
      {
        name: "Descript",
        slug: "descript",
        description:
          "Beyond editing, Descript's Clip Creator automatically identifies the best soundbites from your episode and creates social-optimized clips with captions, layouts, and branding — ready for TikTok, Instagram Reels, and YouTube Shorts.",
        pricing: "Freemium",
        pricingDetails: "Creator plan $40/mo includes clip creation",
        strengths: [
          "AI finds the most shareable podcast moments",
          "Auto-captions with customizable fonts and colors",
          "Social-ready aspect ratios (9:16, 1:1, 16:9)",
          "Brand kit for consistent clip design",
          "Batch export multiple clips at once",
        ],
        bestFor:
          "Video podcasters wanting one tool for editing and clip creation",
        freeFeatures: ["Watermarked clips on free plan"],
        rating: 4.7,
        timeSaved: "2-3 hours on clip creation per episode",
      },
    ],
  },
];

export default function BestAIToolsForPodcastersPage() {
  const allSlugs = toolCategories.flatMap((cat) => cat.tools.map((t) => t.slug));
  const uniqueSlugs = [...new Set(allSlugs)];
  const linkedTools = tools.filter((t) => uniqueSlugs.includes(t.slug));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best AI Tools for Podcasters in 2026",
    description:
      "The complete guide to AI tools that help podcasters transcribe, edit, repurpose, and grow their shows — saving 5-10 hours per episode.",
    author: { "@type": "Organization", name: "AISOTools" },
    publisher: { "@type": "Organization", name: "AISOTools", url: "https://aisotools.com" },
    datePublished: "2026-04-24",
    dateModified: "2026-04-24",
    url: "https://aisotools.com/blog/best-ai-tools-for-podcasters-2026",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best AI tool for podcast transcription?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Otter.ai and Castmagic are the top choices. Otter.ai excels at real-time transcription with speaker diarization (ideal for live interviews), while Castmagic generates transcripts plus show notes, social content, and newsletters from the same upload — making it more cost-effective for content repurposing.",
        },
      },
      {
        "@type": "Question",
        name: "Can AI edit my podcast automatically?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Descript lets you edit audio by editing the transcript — delete 'um' or any word and it removes it from the audio. Alitu goes further by automatically cleaning audio, leveling volumes, and building your episode from segments. For video podcasts, Autopod automates multi-cam switching and silence removal in Adobe Premiere Pro.",
        },
      },
      {
        "@type": "Question",
        name: "How much time can AI save per podcast episode?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most podcasters report saving 5-10 hours per episode using AI tools. Transcription (2-3 hours saved), editing filler words (1-2 hours), show notes writing (1-2 hours), social media clip creation (1-2 hours), and newsletter/blog repurposing (1-2 hours) are the biggest time savers.",
        },
      },
      {
        "@type": "Question",
        name: "What AI tool generates podcast show notes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Castmagic and Podsqueeze are purpose-built for podcast show notes. Both generate chapter markers, timestamps, key takeaways, and SEO-optimized summaries from your audio. Podsqueeze is more affordable for solo podcasters; Castmagic produces more content types per upload.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a free AI tool for podcasters?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Otter.ai's free plan offers 300 minutes of transcription per month — enough for 5-10 podcast episodes. Descript's free plan includes 1 hour of transcription. ElevenLabs offers 10,000 characters free per month for voice generation. Most paid tools also offer free trials.",
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
            <span>Best AI Tools for Podcasters</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Best AI Tools for Podcasters in 2026: Record, Edit & Grow
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            The average podcaster spends 8-12 hours producing a single 1-hour episode. AI is cutting that to 2-4 hours. Here&apos;s the complete toolkit for 2026.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-gray-500">
            <span>📅 Updated April 2026</span>
            <span>•</span>
            <span>🎙️ 10 AI tools reviewed</span>
            <span>•</span>
            <span>⏱️ 5-10 hours saved per episode</span>
          </div>
        </div>

        {/* Quick Picks */}
        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-bold text-blue-900 mb-4">🏆 Quick Picks by Use Case</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { use: "Best for show notes & repurposing", tool: "Castmagic", slug: "castmagic" },
              { use: "Best for audio editing", tool: "Descript", slug: "descript" },
              { use: "Best for transcription (free)", tool: "Otter.ai", slug: "otter-ai" },
              { use: "Best for beginners", tool: "Alitu", slug: "alitu" },
              { use: "Best for audio cleanup", tool: "Lalal.ai", slug: "lalal-ai" },
              { use: "Best for video podcasts", tool: "Autopod", slug: "autopod" },
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
              {category.tools.map((tool) => {
                const affiliateUrl = getAffiliateUrl(tool.slug);
                return (
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

                  {tool.timeSaved && (
                    <div className="bg-green-50 rounded-lg px-3 py-2 mb-4 inline-flex items-center gap-2">
                      <span className="text-green-600">⏱️</span>
                      <span className="text-sm font-medium text-green-800">Time saved: {tool.timeSaved}</span>
                    </div>
                  )}

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
                    <div className="flex items-center gap-2">
                      {affiliateUrl && (
                        <a
                          href={affiliateUrl}
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
                        {affiliateUrl ? "Full Review →" : "View Details →"}
                      </Link>
                    </div>
                  </div>
                </div>
                );
              })}
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
              { href: "/blog/best-ai-video-generators-2026", label: "Best AI Video Generators 2026" },
              { href: "/blog/best-ai-writing-tools-comparison-2026", label: "Best AI Writing Tools 2026" },
              { href: "/blog/best-ai-tools-for-content-creators-2026", label: "Best AI for Content Creators" },
              { href: "/blog/best-ai-music-generators-2026", label: "Best AI Music Generators 2026" },
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
