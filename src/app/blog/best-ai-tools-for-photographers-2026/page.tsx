import { tools } from "@/data/tools";
import { getAffiliateUrl } from "@/data/affiliate-links";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Tools for Photographers in 2026: Edit Faster, Sell More",
  description: "Discover the best AI tools for photographers in 2026. From AI photo editing with Lightroom AI to background removal with Canva and upscaling with Topaz — cut editing time in half.",
  keywords: ["best ai tools for photographers", "ai photo editing tools", "ai photography tools 2026", "ai photo enhancer", "ai background remover"],
  openGraph: {
    title: "Best AI Tools for Photographers in 2026",
    description: "The ultimate guide to AI photography tools. Compare Lightroom AI, Topaz Labs, Luminar Neo, and more.",
    url: "https://aisotools.com/blog/best-ai-tools-for-photographers-2026",
    type: "article",
  },
  alternates: { canonical: "https://aisotools.com/blog/best-ai-tools-for-photographers-2026" },
};

interface PhotoTool { name: string; slug: string; description: string; pricing: string; pricingDetails: string; strengths: string[]; bestFor: string; freeFeatures: string[]; rating: number; }
interface PhotoCategory { category: string; icon: string; description: string; tools: PhotoTool[]; }

const toolCategories: PhotoCategory[] = [
  {
    category: "AI Photo Editing & Retouching",
    icon: "✨",
    description: "AI tools that automate culling, color grading, skin retouching, and complex edits in seconds",
    tools: [
      {
        name: "Adobe Lightroom",
        slug: "adobe-lightroom",
        description: "The industry standard with powerful AI features: AI Masking (subject, sky, background separation), Denoise (AI noise reduction), and Generative Remove for content-aware healing. AI-suggested presets learn your editing style over time.",
        pricing: "Paid",
        pricingDetails: "Photography plan $9.99/mo (Lightroom + Photoshop + 20GB)",
        strengths: ["AI Masking: select subject/sky/background instantly", "Generative Remove for object removal", "AI Denoise — best in class for high-ISO shots", "Content-aware crop and fill", "Adaptive presets that learn your style", "Cloud sync across devices"],
        bestFor: "Professional photographers who need the industry-standard workflow with powerful AI enhancements",
        freeFeatures: ["7-day free trial", "Lightroom mobile (free with ads)"],
        rating: 4.8,
      },
      {
        name: "Luminar Neo",
        slug: "luminar-neo",
        description: "AI-first photo editor with one-click AI features: Sky Replacement, Portrait Bokeh AI, Face AI (skin, eyes, body), and Structure AI. Faster for creative edits than Lightroom.",
        pricing: "Paid",
        pricingDetails: "Explore $9.95/mo, Professional $14.95/mo; perpetual licenses available",
        strengths: ["Sky Replacement AI (any sky in one click)", "Face AI: skin smoothing, eye whitening, body reshape", "Portrait Bokeh AI for background blur", "Structure AI for detail enhancement", "Relight AI for exposure correction", "Neon & Glow AI for creative effects"],
        bestFor: "Portrait and landscape photographers who want creative AI transformations faster than Lightroom",
        freeFeatures: ["Free trial (full features)", "No watermark on trial"],
        rating: 4.5,
      },
      {
        name: "Topaz Photo AI",
        slug: "topaz-photo-ai",
        description: "AI image quality tool combining Sharpen AI, Denoise AI, and Gigapixel AI in one product. The gold standard for rescuing blurry, noisy, or low-resolution images and upscaling to print quality.",
        pricing: "Paid",
        pricingDetails: "Photo AI $199 one-time, or $99/yr subscription",
        strengths: ["Best-in-class AI noise reduction", "Motion blur and focus correction", "Gigapixel upscaling (up to 6x)", "Facial detail recovery in portraits", "Raw file support", "Batch processing"],
        bestFor: "Photographers who shoot in challenging conditions (high ISO, fast motion) or need to upscale images for print",
        freeFeatures: ["Free trial (30 saves)", "Full feature access during trial"],
        rating: 4.7,
      },
    ],
  },
  {
    category: "Photo Culling & Organization",
    icon: "🗂️",
    description: "AI tools that automatically cull the best shots from thousands of images, saving hours after every shoot",
    tools: [
      {
        name: "Aftershoot",
        slug: "aftershoot",
        description: "AI photo culling tool that learns your preferences and automatically selects the best shots from a shoot. Reduces 1,000 images to 200 in minutes, flagging blurry, duplicate, and closed-eye shots.",
        pricing: "Paid",
        pricingDetails: "$14.99/mo, $119.99/yr, or $299 lifetime",
        strengths: ["Learns your selection style over time", "Culls closed eyes, blurry, and duplicates", "AI skin retouching (Aftershoot Edits)", "Consistent editing across a batch", "Works with Lightroom and Capture One", "Up to 80% time reduction on culling"],
        bestFor: "Wedding, event, and portrait photographers who spend hours culling thousands of images per session",
        freeFeatures: ["Free trial (2 shoots)", "Full feature access during trial"],
        rating: 4.6,
      },
      {
        name: "Imagen AI",
        slug: "imagen-ai",
        description: "AI editing assistant that learns your Lightroom editing style from your portfolio and applies consistent edits to new shoots. Used by thousands of professional photographers for consistent color grading.",
        pricing: "Paid",
        pricingDetails: "From $9.99/1,000 images or subscription plans",
        strengths: ["Trains a personal AI profile on your editing style", "Applies your signature look consistently", "Batch editing of entire shoots in minutes", "Lightroom-native workflow integration", "Wedding and portrait photographer focus", "Improves with each shoot trained"],
        bestFor: "Professional photographers who want consistent editing across all images without spending hours on each shoot",
        freeFeatures: ["First 1,500 images free on signup", "Personal profile creation"],
        rating: 4.5,
      },
    ],
  },
  {
    category: "Background Removal & Compositing",
    icon: "🖼️",
    description: "AI tools for professional background removal, replacement, and composite creation",
    tools: [
      {
        name: "Remove.bg",
        slug: "remove-bg",
        description: "One-click background removal with AI. Upload any photo and the background disappears instantly — perfect for product photography, portrait cutouts, and composite creation.",
        pricing: "Freemium",
        pricingDetails: "Free (small resolution), Preview $9/mo, Plus $99/mo",
        strengths: ["Instant background removal (3 seconds)", "Handles complex subjects (hair, fur, transparent objects)", "API for bulk processing", "Adobe Photoshop plugin", "High-resolution output on paid plans", "Batch processing"],
        bestFor: "Product photographers and portrait photographers who need clean cutouts for clients",
        freeFeatures: ["Unlimited small-size removals", "Preview full resolution", "API trial"],
        rating: 4.7,
      },
      {
        name: "Canva",
        slug: "canva",
        description: "Design platform with powerful AI photo tools: Background Remover, Magic Eraser, Magic Expand (outpainting), and photo enhancement. Used by photographers for quick client-facing deliverables.",
        pricing: "Freemium",
        pricingDetails: "Free tier, Pro $12.99/mo, Teams $14.99/mo",
        strengths: ["One-click background removal", "Magic Eraser for object removal", "Magic Expand for canvas extension", "Photo filters and enhancement tools", "Social media templates for photographer portfolios", "Client presentation design"],
        bestFor: "Photographers who deliver social-ready assets, client presentations, and marketing materials alongside photos",
        freeFeatures: ["Basic background remover", "Limited AI features", "500GB cloud storage"],
        rating: 4.5,
      },
    ],
  },
  {
    category: "Business & Client Management",
    icon: "💼",
    description: "AI tools that help photographers market themselves, manage clients, and grow their business",
    tools: [
      {
        name: "ChatGPT",
        slug: "chatgpt",
        description: "Photographers use ChatGPT for client email templates, contract language, pricing guide copy, website SEO text, and social media captions for portfolio posts.",
        pricing: "Freemium",
        pricingDetails: "Free tier, Plus $20/mo",
        strengths: ["Client email templates (inquiry, booking, delivery)", "Pricing guide copy and justification", "Photography contract clauses", "Instagram caption writing for portfolio shots", "SEO meta descriptions for portfolio pages", "Blog content for photography websites"],
        bestFor: "Photographers who handle their own marketing, client communication, and business operations",
        freeFeatures: ["GPT-4o mini", "Unlimited questions", "File uploads"],
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
      {Array.from({ length: 5 }).map((_, i) => <span key={i} className="text-lg">{i < fullStars ? "⭐" : i === fullStars && hasHalf ? "⭐" : "☆"}</span>)}
      <span className="ml-1 text-sm font-medium text-gray-600">{rating}/5</span>
    </div>
  );
}

export default function BestAIToolsForPhotographers2026() {
  const totalTools = toolCategories.reduce((sum, cat) => sum + cat.tools.length, 0);
  return (
    <article className="mx-auto max-w-4xl px-4 py-8">
      <header className="mb-12">
        <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/blog" className="hover:text-blue-600">Blog</Link><span>→</span><span>AI Tools for Photographers</span>
        </div>
        <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">Best AI Tools for Photographers in 2026</h1>
        <p className="mb-6 text-xl leading-relaxed text-gray-600">{totalTools} AI tools that cut editing time in half — from AI culling and retouching to background removal and client management.</p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          <span>📅 Updated May 2026</span><span>•</span><span>⏱️ 14 min read</span><span>•</span><span>📷 {totalTools} tools reviewed</span>
        </div>
      </header>
      <section className="mb-12 rounded-lg bg-blue-50 p-6">
        <h2 className="mb-3 text-2xl font-bold text-gray-900">How AI Is Transforming Photography Workflows</h2>
        <p className="mb-4 leading-relaxed text-gray-700">Wedding photographers used to spend <strong>20-40 hours per wedding</strong> on culling and editing. With AI tools like Aftershoot and Imagen AI, that's down to <strong>5-8 hours</strong>. The photos are better (consistent edits, no fatigue) and the photographer earns more per hour.</p>
        <p className="leading-relaxed text-gray-700">The technology has matured: Lightroom's AI Masking is accurate enough for professional work, Topaz Denoise outperforms manual denoising in blind tests, and background removal tools handle even complex hair and fur with high accuracy.</p>
      </section>
      <nav className="mb-12 rounded-lg border border-gray-200 bg-gray-50 p-6">
        <h2 className="mb-4 text-lg font-bold text-gray-900">Jump to Category</h2>
        <div className="grid gap-2 sm:grid-cols-2">
          {toolCategories.map((cat) => (
            <a key={cat.category} href={`#${cat.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="flex items-center gap-2 rounded-md p-2 text-sm transition-colors hover:bg-white hover:shadow-sm">
              <span>{cat.icon}</span><span className="text-blue-600 hover:underline">{cat.category}</span><span className="text-gray-400">({cat.tools.length})</span>
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
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-5">
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">What is the best AI photo editing software in 2026?</h3>
            <p className="leading-relaxed text-gray-700">Adobe Lightroom is the professional standard with the most powerful AI tools (Masking, Denoise, Generative Remove). For AI-first creative editing, Luminar Neo is faster. For image quality rescue, Topaz Photo AI is unmatched for noise reduction and upscaling.</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">Can AI replace photo editing for professional photographers?</h3>
            <p className="leading-relaxed text-gray-700">AI handles the mechanical parts (culling, basic corrections, batch consistency) extremely well. Creative direction, client consultation, and artistic decisions remain human. Most professionals use AI to handle 70-80% of the editing workload automatically, then review and refine the remaining creative decisions.</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">How much time can AI save in photography workflows?</h3>
            <p className="leading-relaxed text-gray-700">Wedding photographers using AI culling (Aftershoot) + AI editing (Imagen AI) report reducing post-processing from 20-40 hours to 5-8 hours per wedding — a 75% time reduction. Product photographers using AI background removal save 10-15 minutes per product image.</p>
          </div>
        </div>
      </section>
      <section className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
        <h2 className="mb-4 text-3xl font-bold">Spend More Time Behind the Lens</h2>
        <p className="mb-6 text-lg leading-relaxed text-blue-50">The best photographers use AI to handle the editing grind so they can focus on capturing the moment.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/tools" className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-colors hover:bg-gray-100">Explore All AI Tools →</Link>
          <Link href="/blog/best-ai-image-generators-2026" className="inline-flex items-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-blue-600">AI Image Generators →</Link>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Best AI Tools for Photographers in 2026", description: "Guide to AI photography tools including Lightroom AI, Topaz Labs, Aftershoot, Luminar Neo, and more.", author: { "@type": "Organization", name: "AISOTools" }, publisher: { "@type": "Organization", name: "AISOTools", logo: { "@type": "ImageObject", url: "https://aisotools.com/logo.png" } }, datePublished: "2026-05-05", dateModified: "2026-05-05", mainEntityOfPage: { "@type": "WebPage", "@id": "https://aisotools.com/blog/best-ai-tools-for-photographers-2026" } })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "What is the best AI photo editing software?", acceptedAnswer: { "@type": "Answer", text: "Adobe Lightroom is the professional standard. For creative AI editing, Luminar Neo. For quality rescue, Topaz Photo AI." } }, { "@type": "Question", name: "How much time can AI save in photography?", acceptedAnswer: { "@type": "Answer", text: "Wedding photographers using AI culling + editing report 75% time reduction — from 20-40 hours to 5-8 hours per wedding." } }] })}} />
    </article>
  );
}
