import { tools } from "@/data/tools";
import { getAffiliateUrl } from "@/data/affiliate-links";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Photo Editing Tools in 2026: Edit, Enhance, Transform",
  description:
    "Discover the 8 best AI photo editing tools in 2026. From one-click background removal and AI upscaling to generative fill, portrait retouching, and object removal — tools that transform photo editing workflows.",
  keywords: [
    "best ai photo editing tools",
    "ai photo editor",
    "ai photo editing software",
    "ai image editor 2026",
    "best ai photo enhancer",
    "ai background remover",
    "ai photo retouching",
    "ai generative fill",
    "ai image upscaler",
    "ai object removal",
  ],
  openGraph: {
    title: "Best AI Photo Editing Tools in 2026: Edit, Enhance, Transform",
    description:
      "The definitive guide to AI photo editing tools in 2026. Compare background removers, upscalers, generative fill, portrait enhancers, and one-click editing tools.",
    url: "https://aisotools.com/blog/best-ai-photo-editing-tools-2026",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/blog/best-ai-photo-editing-tools-2026",
  },
};

interface PhotoTool {
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

const photoTools: PhotoTool[] = [
  {
    name: "Adobe Firefly",
    slug: "adobe-firefly",
    category: "Generative AI Editing",
    description:
      "Adobe Firefly is the generative AI engine built directly into Photoshop, Lightroom, and Adobe Express. Its Generative Fill lets you paint over any area of an image and describe what should replace it — extend backgrounds, remove objects, add elements, or completely transform scenes. Firefly is commercially safe by design, trained exclusively on Adobe Stock and public domain images, making it the go-to choice for professional designers and agencies who need to use AI-edited images in client work without IP risk. The integration into Photoshop's existing workflow means no context switching — Firefly works exactly where you already edit.",
    pricing: "Freemium",
    pricingDetails: "Free (limited credits). Creative Cloud All Apps $54.99/mo includes Firefly premium.",
    strengths: [
      "Generative Fill integrates directly into Photoshop workflow",
      "Commercially safe — trained on licensed and public domain images",
      "Extend images beyond original borders with generative expand",
      "Remove objects and replace backgrounds with natural language",
      "Seamless blending with existing photo content",
    ],
    bestFor: "Professional designers and agencies who need commercially safe AI editing inside Photoshop",
    rating: 4.8,
  },
  {
    name: "Midjourney",
    slug: "midjourney",
    category: "AI Image Generation & Editing",
    description:
      "Midjourney's v6 inpainting and variation features make it one of the most powerful tools for photo transformation and creative editing. While not a traditional photo editor, Midjourney excels at generating photorealistic variations, extending images with consistent style, and creating heavily stylized versions of existing photos. The latest versions produce images with text rendering, realistic lighting, and fine detail that rivals professional photography. For photographers and creative directors who want AI-augmented creative possibilities rather than surgical editing, Midjourney is unmatched for output quality.",
    pricing: "Paid",
    pricingDetails: "Basic $10/mo (200 images), Standard $30/mo (unlimited relaxed), Pro $60/mo.",
    strengths: [
      "Industry-leading photorealistic image quality",
      "Consistent style variations and creative remixes",
      "Inpainting for targeted area regeneration",
      "Prompt-driven stylization of any photo",
      "Active Discord community with prompt expertise",
    ],
    bestFor: "Creative directors and photographers wanting high-quality AI image generation and stylistic transformation",
    rating: 4.7,
  },
  {
    name: "Topaz Labs",
    slug: "topaz-labs",
    category: "AI Photo Enhancement & Upscaling",
    description:
      "Topaz Labs makes the most advanced AI photo enhancement software available — Topaz Photo AI, Gigapixel AI, and DeNoise AI address the specific technical problems photographers face: sharpening blurry shots, upscaling low-resolution images to print quality, and removing noise from high-ISO images. Topaz Gigapixel AI can upscale images up to 6x while adding realistic detail that wasn't in the original — turning a web-resolution image into a print-quality file. Photo AI combines all three capabilities with automatic subject detection and single-click enhancement. Used by professional photographers, news agencies, and print labs worldwide.",
    pricing: "Paid",
    pricingDetails: "Photo AI $199/yr or $299 one-time. Gigapixel AI $99/yr. Bundle options available.",
    strengths: [
      "Industry-best AI upscaling — 6x enlargement with genuine detail",
      "AI sharpening recovers motion blur and focus issues",
      "DeNoise AI removes grain while preserving fine texture",
      "Batch processing handles thousands of images",
      "One-click auto-enhance detects subjects automatically",
    ],
    bestFor: "Professional photographers who need to upscale, denoise, or sharpen images to print or commercial quality",
    rating: 4.8,
  },
  {
    name: "Cutout.Pro",
    slug: "cutout-pro",
    category: "Background Removal & Object Editing",
    description:
      "Cutout.Pro is an AI-powered creative platform specializing in background removal, photo retouching, and image enhancement with commercial-grade accuracy. Its background remover handles complex edges including hair, fur, and transparent objects better than most competitors. Beyond background removal, Cutout.Pro offers AI portrait retouching (skin smoothing, teeth whitening, eye enhancement), old photo restoration, and AI image colorization for black-and-white photos. The bulk processing API makes it practical for e-commerce teams processing thousands of product images. The free tier includes 5 background removals per day.",
    pricing: "Freemium",
    pricingDetails: "Free (5 images/day). Pro starts at $8.99/50 credits. API available for bulk processing.",
    strengths: [
      "Handles complex edges: hair, fur, transparent objects accurately",
      "AI portrait retouching: skin, teeth, eyes in one click",
      "Old photo restoration restores damaged vintage images",
      "AI colorization for black-and-white photos",
      "Bulk API for e-commerce product image processing",
    ],
    bestFor: "E-commerce teams, portrait photographers, and anyone needing high-accuracy background removal at scale",
    rating: 4.5,
  },
  {
    name: "Canva",
    slug: "canva",
    category: "All-in-One AI Photo & Design Editor",
    description:
      "Canva's Magic Studio suite brings AI photo editing to non-designers through an intuitive drag-and-drop interface. Magic Eraser removes objects with one click, Magic Expand extends images in any direction, Magic Edit replaces selected areas using text prompts, and Background Remover works on any image instantly. For social media managers, marketers, and small business owners who need quick professional edits without learning Photoshop, Canva delivers 80% of the utility at 10% of the complexity. The integration with Canva's template library means edited photos slot directly into social posts, presentations, and marketing materials.",
    pricing: "Freemium",
    pricingDetails: "Free (limited AI features). Pro $15/mo includes Magic Studio. Teams $10/user/mo.",
    strengths: [
      "Magic Eraser removes objects in one click, no masking needed",
      "Magic Edit replaces areas using text descriptions",
      "Magic Expand extends image borders in any direction",
      "Instant background removal on any image",
      "Direct integration with Canva design templates",
    ],
    bestFor: "Marketers, social media managers, and small business owners who need fast AI photo edits without Photoshop",
    rating: 4.6,
  },
  {
    name: "PicWish",
    slug: "picwish",
    category: "AI Background & Portrait Editing",
    description:
      "PicWish is a dedicated AI photo editing platform built around background removal, portrait enhancement, and product photo processing. Its AI background remover is among the most accurate for product photography — critical for e-commerce sellers who need clean, consistent product shots against white or custom backgrounds. PicWish's batch processing handles 50+ images simultaneously, making it practical for Shopify and Amazon sellers processing product catalogs. The portrait enhancement suite includes facial retouching, HDR photo enhancement, image upscaling, and old photo restoration. PicWish processes faster than desktop software because all AI runs in the cloud.",
    pricing: "Freemium",
    pricingDetails: "Free (10 images/day). Pro $9.99/mo for unlimited processing.",
    strengths: [
      "Batch background removal for e-commerce product catalogs",
      "High accuracy on complex product edges and transparent objects",
      "Cloud-based processing — no powerful hardware required",
      "Portrait retouching and HDR enhancement",
      "Background replacement with custom colors and scenes",
    ],
    bestFor: "E-commerce sellers and product photographers who need fast, accurate batch background removal",
    rating: 4.4,
  },
  {
    name: "Luminar Neo",
    slug: "luminar-neo",
    category: "AI Photo Enhancement Suite",
    description:
      "Luminar Neo is Skylum's AI-powered photo editing suite that targets landscape photographers, portrait photographers, and photo enthusiasts who want dramatic AI-driven enhancements. Its sky replacement AI swaps skies in seconds with realistic lighting adaptation. Portrait AI handles skin retouching, body reshaping, iris enhancement, and portrait background bokeh. The Neon AI feature applies atmospheric haze and glow effects. Luminar Neo operates as both a standalone application and Photoshop/Lightroom plugin, giving photographers the option to integrate AI enhancements into their existing workflow without abandoning their current tools.",
    pricing: "Paid",
    pricingDetails: "One-time purchase from $79. Subscription plans from $9.95/mo. Extensions sold separately.",
    strengths: [
      "Sky replacement with automatic lighting adaptation",
      "Portrait AI: skin, body, iris enhancement in one pass",
      "Works as Photoshop and Lightroom plugin",
      "Dramatic landscape enhancement with one-click AI",
      "Large extension ecosystem for specialized editing styles",
    ],
    bestFor: "Photographers wanting dramatic sky replacement, portrait enhancement, and landscape AI in a non-subscription tool",
    rating: 4.3,
  },
  {
    name: "Fotor",
    slug: "fotor",
    category: "Online AI Photo Editor",
    description:
      "Fotor is a browser-based AI photo editing platform that delivers professional-grade editing without software installation. Its one-tap AI enhancer analyzes each photo and applies optimized adjustments for brightness, contrast, color, and sharpness. The AI portrait retoucher smooths skin, enhances eyes, and whitens teeth automatically. Fotor's background remover and background changer handle product and portrait photography, while the AI image upscaler enhances resolution for printing. Being entirely browser-based with a clean interface makes Fotor the fastest path from raw photo to finished edit for casual users and bloggers who want AI enhancement without complexity.",
    pricing: "Freemium",
    pricingDetails: "Free (with watermark on some features). Pro $8.99/mo, Team $5.99/user/mo.",
    strengths: [
      "Browser-based — no installation required",
      "One-tap AI enhance analyzes and optimizes each photo",
      "AI portrait retouching: skin, eyes, teeth",
      "Background removal and replacement",
      "AI upscaling for print-quality output",
    ],
    bestFor: "Bloggers, content creators, and casual users who want quick AI photo enhancement without installing software",
    rating: 4.2,
  },
];

const faqs = [
  {
    question: "What is the best AI photo editing tool in 2026?",
    answer:
      "The best AI photo editing tool depends on your use case. For professional generative editing inside Photoshop, Adobe Firefly is unmatched. For maximum upscaling and technical enhancement quality, Topaz Labs is the industry standard. For background removal at scale, Cutout.Pro or PicWish deliver the best accuracy. For casual editing with a simple interface, Canva Magic Studio or Fotor work beautifully. Most photographers use 2-3 tools covering different editing tasks.",
  },
  {
    question: "Can AI photo editors match manual Photoshop editing quality?",
    answer:
      "For specific tasks — background removal, sky replacement, noise reduction, upscaling — AI tools now surpass manual editing in both speed and quality. Topaz DeNoise AI removes grain better than any manual technique. Firefly's Generative Fill creates seamless object removal that would take hours manually. However, for complex compositing, color grading, and artistic retouching requiring creative judgment, skilled human editing still produces better results. The best approach uses AI for repetitive technical tasks and manual work for creative decisions.",
  },
  {
    question: "Are AI-edited photos safe to use commercially?",
    answer:
      "It depends on the tool. Adobe Firefly is specifically designed for commercial safety — trained on licensed Adobe Stock and public domain images with indemnification for enterprise users. Midjourney, Canva's AI features, and most other tools have varying commercial use rights detailed in their terms of service. Always check the specific tool's commercial license terms. For professional agency and client work, Firefly or tools with explicit commercial licenses are the safest choice.",
  },
  {
    question: "What AI tools are best for e-commerce product photo editing?",
    answer:
      "For e-commerce product photography, the best AI workflow combines background removal (Cutout.Pro or PicWish for accuracy), AI upscaling (Topaz Gigapixel AI for print quality), and image enhancement (Fotor or Canva for quick batch processing). PicWish's batch API is particularly useful for Shopify/Amazon sellers processing hundreds of product images. The combination of precise background removal and consistent enhancement is what separates professional product photography from amateur shots.",
  },
  {
    question: "Can AI remove objects from photos realistically?",
    answer:
      "Yes — object removal is one of AI's strongest photo editing capabilities. Adobe Firefly's Generative Fill, Samsung Galaxy's Magic Eraser, and Google Photos' Magic Eraser can remove objects and realistically fill the background. For professional results, Firefly produces the most convincing fills because it understands scene context. For quick casual use, Canva's Magic Eraser handles most objects in one click. Complex backgrounds with patterns or textures still benefit from some manual refinement.",
  },
];

export default async function Page() {
  const toolData = photoTools.map((pt) => {
    const tool = tools.find((t) => t.slug === pt.slug);
    return { ...pt, url: tool ? getAffiliateUrl(pt.slug) || tool.url : "#" };
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
            <span>Photo Editing</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Best AI Photo Editing Tools in 2026: Edit, Enhance, Transform
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            AI has fundamentally changed photo editing — tasks that took hours in Photoshop now take seconds. Background removal, sky replacement, object removal, upscaling, and generative fill have all been transformed by AI. Here are the 8 best AI photo editing tools in 2026, from professional-grade software to browser-based tools anyone can use.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
            <span>📅 Updated May 2026</span>
            <span>•</span>
            <span>⏱️ 10 min read</span>
            <span>•</span>
            <span>📸 {photoTools.length} tools reviewed</span>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-10">
          <h2 className="font-semibold text-white mb-3">Quick Navigation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {photoTools.map((tool, i) => (
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
          <h2 className="text-2xl font-bold mb-4">How AI is Transforming Photo Editing in 2026</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            AI photo editing has moved beyond simple filters. Modern AI editing tools understand scene content, generate realistic fills, and perform technical corrections that previously required years of Photoshop expertise. The result is a massive democratization of photo editing — hobbyists achieve professional results, and professionals work 10x faster.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {[
              { icon: "✂️", title: "Remove & Replace", desc: "Background removal, object erasure, generative fill (Firefly, Canva)" },
              { icon: "🔍", title: "Enhance & Upscale", desc: "AI upscaling, denoising, sharpening (Topaz Labs)" },
              { icon: "✨", title: "Retouch & Transform", desc: "Portrait enhancement, sky replacement (Luminar Neo, PicWish)" },
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
                    Key Strengths for Photo Editing
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
          <h2 className="text-2xl font-bold mb-6">AI Photo Editing Tools: Quick Comparison</h2>
          <div className="overflow-x-auto">
            <div className="min-w-[640px]">
              <div className="grid grid-cols-4 gap-px bg-gray-800 rounded-xl overflow-hidden text-sm">
                <div className="bg-gray-900 p-3 font-semibold text-gray-400">Tool</div>
                <div className="bg-gray-900 p-3 font-semibold text-gray-400">Primary Use</div>
                <div className="bg-gray-900 p-3 font-semibold text-gray-400">Pricing</div>
                <div className="bg-gray-900 p-3 font-semibold text-gray-400">Rating</div>
                {photoTools.map((tool) => (
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
          <h2 className="text-2xl font-bold mb-4">The AI Photo Editing Stack We Recommend</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            For most photographers and creators, we recommend:{" "}
            <Link href="/tool/topaz-labs" className="text-blue-400 hover:text-blue-300">
              Topaz Labs
            </Link>{" "}
            for technical enhancement and upscaling,{" "}
            <Link href="/tool/adobe-firefly" className="text-blue-400 hover:text-blue-300">
              Adobe Firefly
            </Link>{" "}
            for generative editing inside Photoshop,{" "}
            <Link href="/tool/cutout-pro" className="text-blue-400 hover:text-blue-300">
              Cutout.Pro
            </Link>{" "}
            for background removal at scale, and{" "}
            <Link href="/tool/canva" className="text-blue-400 hover:text-blue-300">
              Canva Magic Studio
            </Link>{" "}
            for quick social media and marketing edits. This covers 95% of AI photo editing use cases.
          </p>
          <p className="text-gray-400 text-sm">
            All four have free tiers or trials — start with one, add others as your needs grow.
          </p>
        </section>

        {/* Related Posts */}
        <section>
          <h2 className="text-xl font-bold mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                href: "/blog/best-ai-image-generators-2026",
                title: "Best AI Image Generators 2026",
                desc: "Generate images from text with AI",
              },
              {
                href: "/blog/best-ai-tools-for-photographers-2026",
                title: "Best AI Tools for Photographers",
                desc: "Complete AI toolkit for photography professionals",
              },
              {
                href: "/blog/best-ai-art-generators-2026",
                title: "Best AI Art Generators 2026",
                desc: "AI art creation and creative image generation",
              },
              {
                href: "/blog/best-ai-design-tools-2026",
                title: "Best AI Design Tools 2026",
                desc: "AI tools for graphic design and visual creation",
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
            headline: "Best AI Photo Editing Tools in 2026: Edit, Enhance, Transform",
            description:
              "Comprehensive guide to the 8 best AI photo editing tools in 2026, covering background removal, upscaling, generative fill, portrait retouching, and object removal.",
            author: { "@type": "Organization", name: "AISO Tools" },
            publisher: {
              "@type": "Organization",
              name: "AISO Tools",
              url: "https://aisotools.com",
            },
            datePublished: "2026-05-04",
            dateModified: "2026-05-04",
            url: "https://aisotools.com/blog/best-ai-photo-editing-tools-2026",
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
