import { tools } from "@/data/tools";
import { getAffiliateUrl } from "@/data/affiliate-links";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Tools for Podcasters in 2026: Record, Edit & Grow Faster",
  description: "Discover the best AI tools for podcasters in 2026. From AI audio editing with Descript to transcription with Otter.ai and show notes with ChatGPT — save hours per episode.",
  keywords: ["best ai tools for podcasters", "ai podcast tools", "ai podcast editing", "ai transcription podcast", "podcast ai tools 2026"],
  openGraph: {
    title: "Best AI Tools for Podcasters in 2026",
    description: "The ultimate guide to AI tools for podcasters. Compare Descript, Riverside, Otter.ai, and more.",
    url: "https://aisotools.com/blog/best-ai-tools-for-podcasters-2026",
    type: "article",
  },
  alternates: { canonical: "https://aisotools.com/blog/best-ai-tools-for-podcasters-2026" },
};

interface PodcastTool {
  name: string; slug: string; description: string; pricing: string;
  pricingDetails: string; strengths: string[]; bestFor: string; freeFeatures: string[]; rating: number;
}
interface PodcastCategory { category: string; icon: string; description: string; tools: PodcastTool[]; }

const toolCategories: PodcastCategory[] = [
  {
    category: "Recording & Editing",
    icon: "🎙️",
    description: "AI tools that make recording, editing, and producing podcast episodes faster and easier",
    tools: [
      {
        name: "Descript",
        slug: "descript",
        description: "The podcaster's power tool. Edit audio by editing the transcript — delete words to remove them from the audio. AI removes filler words, silences, and background noise in one click. Overdub lets you fix mistakes by typing.",
        pricing: "Freemium",
        pricingDetails: "Free (1 hr transcription), Creator $12/mo, Pro $24/mo",
        strengths: ["Edit audio by editing text transcript", "Filler word removal (um, uh, like) one click", "AI background noise removal", "Overdub: fix mistakes by typing", "Multitrack podcast editing", "Video recording support for video podcasts"],
        bestFor: "Podcasters who want to dramatically speed up editing by working with text instead of waveforms",
        freeFeatures: ["1 hour transcription/month", "Basic editing", "Screen recording", "Watermarked export"],
        rating: 4.8,
      },
      {
        name: "Riverside",
        slug: "riverside",
        description: "Remote podcast recording platform with local track recording (no quality loss from internet issues). AI automatically removes background noise, balances levels, and generates transcripts.",
        pricing: "Freemium",
        pricingDetails: "Free (2 hrs/mo), Standard $15/mo, Pro $24/mo",
        strengths: ["Local track recording for lossless quality", "AI noise removal and audio enhancement", "Up to 4K video recording for video podcasts", "Automatic transcription", "Magic clips for social media cuts", "Guest links require no software install"],
        bestFor: "Podcasters recording with remote guests who need broadcast-quality audio regardless of guest internet quality",
        freeFeatures: ["2 hours recording/month", "Basic transcription", "720p video", "Guest browser recording"],
        rating: 4.7,
      },
      {
        name: "Adobe Podcast",
        slug: "adobe-podcast",
        description: "Adobe's free AI podcast audio enhancer. Upload any audio file and AI removes background noise, balances levels, and makes it sound like it was recorded in a professional studio.",
        pricing: "Free (Beta)",
        pricingDetails: "Free while in beta; future pricing not announced",
        strengths: ["Mic Check for recording setup optimization", "Enhance Speech: one-click studio sound", "Removes background noise, reverb, and hum", "Works on any audio file", "Adobe Creative Cloud integration", "Simple drag-and-drop interface"],
        bestFor: "Podcasters who want professional-sounding audio without expensive equipment or complex editing",
        freeFeatures: ["Full Enhance Speech feature (free)", "Mic Check tool", "Basic audio editing"],
        rating: 4.6,
      },
    ],
  },
  {
    category: "Transcription & Show Notes",
    icon: "📝",
    description: "AI tools that turn your audio into text, show notes, chapters, and written content",
    tools: [
      {
        name: "Otter.ai",
        slug: "otter-ai",
        description: "AI transcription that turns podcast recordings into searchable, shareable transcripts. Identifies speakers, highlights key moments, and generates summaries — essential for accessibility and SEO.",
        pricing: "Freemium",
        pricingDetails: "Free (300 min/mo), Pro $8.33/mo, Business $20/mo",
        strengths: ["Accurate speaker-identified transcripts", "Key highlight extraction", "Searchable archive of all episodes", "Zoom, Google Meet integration", "Export to Word, PDF", "Accessibility compliance"],
        bestFor: "Podcasters who publish episode transcripts for SEO and accessibility",
        freeFeatures: ["300 minutes/month", "Speaker ID", "Basic highlights", "Export"],
        rating: 4.5,
      },
      {
        name: "ChatGPT",
        slug: "chatgpt",
        description: "Podcasters use ChatGPT to generate show notes, episode summaries, chapter markers, social captions, blog posts, and email newsletters from transcripts — turning one episode into 10 pieces of content.",
        pricing: "Freemium",
        pricingDetails: "Free tier, Plus $20/mo",
        strengths: ["Show notes from transcript (3 formats: short/medium/long)", "Episode chapter marker generation", "Social media caption writing (Twitter/LinkedIn/Instagram)", "Email newsletter from episode", "Blog post expansion from transcript", "Guest outreach email templates"],
        bestFor: "Content repurposing — turning one episode transcript into a full content suite",
        freeFeatures: ["GPT-4o mini", "Unlimited questions", "File uploads"],
        rating: 4.7,
      },
      {
        name: "Castmagic",
        slug: "castmagic",
        description: "AI tool built specifically for podcasters to repurpose audio. Upload an episode and get show notes, timestamps, social posts, newsletter, blog post, and a searchable transcript — all automatically.",
        pricing: "Paid",
        pricingDetails: "Starter $23/mo (3 hrs), Pro $49/mo (10 hrs), Business $99/mo",
        strengths: ["One upload → 10+ content formats automatically", "Custom AI prompts for your brand voice", "Searchable content library", "LinkedIn, Twitter, email newsletter formats", "Chapter and timestamp generation", "Guest quote extraction"],
        bestFor: "High-volume podcasters who publish regularly and need a content repurposing workflow",
        freeFeatures: ["Free trial (30 min audio)", "Sample output preview"],
        rating: 4.6,
      },
    ],
  },
  {
    category: "Podcast Growth & Marketing",
    icon: "📈",
    description: "AI tools that help podcasters grow their audience, optimize for discovery, and analyze performance",
    tools: [
      {
        name: "Headliner",
        slug: "headliner",
        description: "Create audiograms, video clips, and social media content from podcast episodes. AI automatically finds the best quote moments and creates shareable video clips with waveform animations.",
        pricing: "Freemium",
        pricingDetails: "Free (watermarked), Basic $7.99/mo, Pro $19.99/mo",
        strengths: ["Automatic audiogram creation", "AI quote finder for best moments", "Animated waveforms and captions", "Auto-publish to social platforms", "Video clip creation for YouTube Shorts/Reels/TikTok", "Podcast website builder"],
        bestFor: "Podcasters who want to grow on social media with shareable video clips from episodes",
        freeFeatures: ["Watermarked audiograms", "Basic clip creation", "1 video/month unwatermarked"],
        rating: 4.4,
      },
      {
        name: "ElevenLabs",
        slug: "elevenlabs",
        description: "AI voice generation for podcast ads, intros, and promotional content. Create custom ad reads in any voice style — or clone your own voice for consistent promotional content.",
        pricing: "Freemium",
        pricingDetails: "Free (10K chars/mo), Starter $5/mo, Creator $22/mo",
        strengths: ["Natural-sounding AI voices for ad reads", "Voice cloning for consistent brand voice", "Dynamic ad insertion content creation", "Multilingual podcast content", "Character voices for narrative podcasts", "Pronunciation control for brand names"],
        bestFor: "Podcasters who create their own ads, need multilingual content, or produce narrative/fiction podcasts",
        freeFeatures: ["10,000 characters/month", "3 custom voices", "API access"],
        rating: 4.6,
      },
    ],
  },
];

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.3;
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-lg">{i < fullStars ? "⭐" : i === fullStars && hasHalf ? "⭐" : "☆"}</span>
      ))}
      <span className="ml-1 text-sm font-medium text-gray-600">{rating}/5</span>
    </div>
  );
}

export default function BestAIToolsForPodcasters2026() {
  const totalTools = toolCategories.reduce((sum, cat) => sum + cat.tools.length, 0);
  return (
    <article className="mx-auto max-w-4xl px-4 py-8">
      <header className="mb-12">
        <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span>→</span>
          <span>AI Tools for Podcasters</span>
        </div>
        <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
          Best AI Tools for Podcasters in 2026
        </h1>
        <p className="mb-6 text-xl leading-relaxed text-gray-600">
          {totalTools} AI tools that save podcasters 5-10 hours per episode — from AI-powered editing and transcription to content repurposing and audience growth.
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          <span>📅 Updated May 2026</span><span>•</span>
          <span>⏱️ 14 min read</span><span>•</span>
          <span>🎙️ {totalTools} tools reviewed</span>
        </div>
      </header>

      <section className="mb-12 rounded-lg bg-purple-50 p-6">
        <h2 className="mb-3 text-2xl font-bold text-gray-900">How AI Is Changing Podcasting in 2026</h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          The biggest time sinks in podcasting — editing, show notes, social clips, transcripts — are now largely automatable with AI. Podcasters using Descript for editing and Castmagic for content repurposing report cutting episode production time from <strong>4-6 hours to under 2 hours</strong>.
        </p>
        <p className="leading-relaxed text-gray-700">
          The unlock: treat your episode recording as raw material. AI converts it into everything else — transcript, blog post, social clips, newsletter, chapters, and ads. One recording session feeds your entire content calendar.
        </p>
      </section>

      <nav className="mb-12 rounded-lg border border-gray-200 bg-gray-50 p-6">
        <h2 className="mb-4 text-lg font-bold text-gray-900">Jump to Category</h2>
        <div className="grid gap-2 sm:grid-cols-2">
          {toolCategories.map((cat) => (
            <a key={cat.category} href={`#${cat.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="flex items-center gap-2 rounded-md p-2 text-sm transition-colors hover:bg-white hover:shadow-sm">
              <span>{cat.icon}</span>
              <span className="text-blue-600 hover:underline">{cat.category}</span>
              <span className="text-gray-400">({cat.tools.length})</span>
            </a>
          ))}
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
                        <h3 className="text-2xl font-bold text-gray-900">
                          <Link href={toolUrl} className="hover:text-blue-600">{tool.name}</Link>
                        </h3>
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
                      <ul className="space-y-1">{tool.strengths.map((s) => <li key={s} className="flex items-start gap-2 text-sm text-gray-700"><span className="mt-0.5 text-green-500">✓</span>{s}</li>)}</ul>
                    </div>
                    <div>
                      <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">Free Features</h4>
                      <ul className="space-y-1">{tool.freeFeatures.map((f) => <li key={f} className="flex items-start gap-2 text-sm text-gray-700"><span className="mt-0.5 text-blue-500">★</span>{f}</li>)}</ul>
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

      <section className="mb-12 rounded-lg bg-amber-50 p-6">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">The Optimal Podcaster AI Stack</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <h3 className="mb-2 font-bold text-gray-900">🎙️ Solo / Indie Podcaster</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li><strong>Record:</strong> Adobe Podcast (free enhancement)</li>
              <li><strong>Edit:</strong> Descript Creator ($12/mo)</li>
              <li><strong>Transcripts:</strong> Otter.ai free (300 min/mo)</li>
              <li><strong>Content:</strong> ChatGPT free tier</li>
            </ul>
            <p className="mt-2 text-xs text-gray-500">💰 Total: $12/mo</p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <h3 className="mb-2 font-bold text-gray-900">🎧 Professional / Remote Interviews</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li><strong>Record:</strong> Riverside Pro ($24/mo)</li>
              <li><strong>Edit:</strong> Descript Pro ($24/mo)</li>
              <li><strong>Repurpose:</strong> Castmagic ($49/mo)</li>
              <li><strong>Social:</strong> Headliner Basic ($8/mo)</li>
            </ul>
            <p className="mt-2 text-xs text-gray-500">💰 Total: ~$105/mo for pro workflow</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-5">
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">What is the best AI tool for podcast editing?</h3>
            <p className="leading-relaxed text-gray-700">Descript is the gold standard — it lets you edit audio by editing the transcript, which is dramatically faster than traditional waveform editing. Its filler word removal and overdub features are industry-leading. Adobe Podcast's Enhance Speech is the best free option for audio quality improvement.</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">How do AI tools help with podcast transcription?</h3>
            <p className="leading-relaxed text-gray-700">Tools like Otter.ai and Descript automatically transcribe audio with 90%+ accuracy, identify speakers, and create searchable text. Published transcripts improve accessibility for deaf listeners and add SEO value — Google can index the content of your episodes when you publish transcripts.</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">Can AI write podcast show notes?</h3>
            <p className="leading-relaxed text-gray-700">Yes. Upload your transcript to ChatGPT or Castmagic and get show notes in seconds. Castmagic is purpose-built for this and produces more structured output automatically. ChatGPT gives you more control over format and tone. Both save 30-60 minutes per episode on show notes alone.</p>
          </div>
        </div>
      </section>

      <section className="rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white">
        <h2 className="mb-4 text-3xl font-bold">Ship More, Edit Less</h2>
        <p className="mb-6 text-lg leading-relaxed text-purple-50">AI handles the production grind. You focus on finding great guests and asking great questions.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/tools" className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-purple-600 transition-colors hover:bg-gray-100">Explore All AI Tools →</Link>
          <Link href="/blog/best-ai-transcription-tools-2026" className="inline-flex items-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-purple-600">Best AI Transcription Tools →</Link>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        headline: "Best AI Tools for Podcasters in 2026",
        description: "Guide to AI podcast tools including Descript, Riverside, Otter.ai, Castmagic, and more.",
        author: { "@type": "Organization", name: "AISOTools" },
        publisher: { "@type": "Organization", name: "AISOTools", logo: { "@type": "ImageObject", url: "https://aisotools.com/logo.png" } },
        datePublished: "2026-05-05", dateModified: "2026-05-05",
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://aisotools.com/blog/best-ai-tools-for-podcasters-2026" },
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "What is the best AI tool for podcast editing?", acceptedAnswer: { "@type": "Answer", text: "Descript is the gold standard — edit audio by editing text transcript. Adobe Podcast Enhance Speech is the best free option for audio quality." } },
          { "@type": "Question", name: "Can AI write podcast show notes?", acceptedAnswer: { "@type": "Answer", text: "Yes. Upload transcript to ChatGPT or Castmagic for instant show notes. Saves 30-60 minutes per episode." } },
        ],
      })}} />
    </article>
  );
}
