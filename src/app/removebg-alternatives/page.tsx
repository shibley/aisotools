import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Remove.bg Alternatives (2026): Top 8 AI Background Removers",
  description: "Looking for Remove.bg alternatives? Compare the best AI background removal tools including PhotoRoom, Cutout.Pro, PicWish, Canva, and more with pricing.",
  keywords: ["remove.bg alternatives", "best AI background remover", "background removal tools", "remove background from image"],
  openGraph: {
    title: "Best Remove.bg Alternatives 2026",
    description: "Compare top alternatives to Remove.bg for AI background removal.",
    url: "https://aisotools.com/removebg-alternatives",
    type: "article",
  },
  alternates: { canonical: "https://aisotools.com/removebg-alternatives" },
};

const alternatives = [
  { name: "PhotoRoom", slug: "photoroom", desc: "AI-powered photo editing platform specializing in product photography. Removes backgrounds instantly and offers AI-generated backgrounds for e-commerce.", pricing: "Free, Pro $12.99/mo", strengths: ["E-commerce optimized", "AI background generation", "Batch processing", "Mobile app"], bestFor: "E-commerce sellers and product photography" },
  { name: "Cutout.Pro", slug: "cutout-pro", desc: "Comprehensive AI visual editing platform with background removal, upscaling, photo restoration, and video background removal.", pricing: "Free tier, Pro $5.99/mo", strengths: ["Video background removal", "Photo restoration", "Image upscaling", "Batch processing"], bestFor: "Users needing multiple AI editing tools in one" },
  { name: "PicWish", slug: "picwish", desc: "Free AI photo editor with background removal, upscaling, and object removal. Desktop app works offline.", pricing: "Free with watermark, Premium $5.99/mo", strengths: ["Generous free tier", "Desktop app (offline)", "Object removal", "Simple interface"], bestFor: "Budget-conscious users wanting free background removal" },
  { name: "Canva", slug: "canva-ai", desc: "All-in-one design platform with AI background remover built in. Use it alongside thousands of templates for immediate design context.", pricing: "Free (basic), Pro $12.99/mo", strengths: ["Full design platform", "Thousands of templates", "Background remover + design", "Team collaboration"], bestFor: "Designers who need removal as part of larger designs" },
  { name: "Cleanup.pictures", slug: "cleanup-pictures", desc: "Clean and simple tool for removing objects, people, and text from photos. Also handles background removal with high accuracy.", pricing: "Free, Pro $5/mo", strengths: ["Object removal", "Very clean interface", "Affordable", "Fast processing"], bestFor: "Quick cleanup of unwanted objects from photos" },
  { name: "Pixlr", slug: "pixlr-ai", desc: "Online photo editor with AI-powered background removal, object removal, and generative fill. Good Photoshop alternative with free tier.", pricing: "Free, Plus $1.99/mo, Premium $7.99/mo", strengths: ["Full photo editor", "Very affordable", "Generative fill", "No download needed"], bestFor: "Users wanting a complete photo editor with AI features" },
  { name: "Fotor", slug: "fotor", desc: "AI photo editor with one-click background removal, AI enhancer, and design tools. Offers batch processing for multiple images.", pricing: "Free, Pro $8.99/mo", strengths: ["One-click removal", "Batch processing", "AI enhancer", "Design tools"], bestFor: "Quick batch background removal and enhancement" },
  { name: "Unscreen", slug: "unscreen", desc: "Specialized in removing backgrounds from video and GIFs. Works automatically without green screen.", pricing: "Free (watermark), Pro from $9/mo", strengths: ["Video background removal", "GIF support", "No green screen needed", "Plugin for Premiere/After Effects"], bestFor: "Video creators needing background removal" },
];

export default function RemoveBGAlternativesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-white">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/alternatives" className="hover:text-white">Alternatives</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Remove.bg Alternatives</span>
      </nav>

      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Remove.bg Alternatives in 2026</h1>
        <p className="text-xl text-gray-400 max-w-4xl">
          Remove.bg is the most popular AI background remover, but its credit-based pricing can add up quickly. These alternatives offer similar (or better) quality with different pricing models and additional features.
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">Updated April 2026</span>
          <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">{alternatives.length} alternatives reviewed</span>
        </div>
      </header>

      <section className="mb-16">
        <div className="space-y-6">
          {alternatives.map((alt, i) => (
            <div key={alt.slug} className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500/30 transition">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-blue-400 text-sm font-medium">#{i + 1}</span>
                  <h3 className="text-xl font-bold mt-1">{alt.name}</h3>
                </div>
                <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">{alt.pricing}</span>
              </div>
              <p className="text-gray-400 mb-4">{alt.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {alt.strengths.map((s) => (
                  <span key={s} className="bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded text-xs">{s}</span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-sm">Best for: {alt.bestFor}</span>
                <Link href={`/tool/${alt.slug}`} className="text-blue-400 hover:text-blue-300 text-sm font-medium">View Details →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            { q: "What is the best free alternative to Remove.bg?", a: "PicWish offers free background removal with a watermark on high-res exports. Cleanup.pictures has a solid free tier. Pixlr is also free with AI background removal." },
            { q: "Which tool is best for e-commerce product photos?", a: "PhotoRoom is purpose-built for e-commerce with AI-generated backgrounds. Cutout.Pro is excellent for batch processing large product catalogs." },
            { q: "Can any of these remove video backgrounds?", a: "Cutout.Pro and Unscreen both handle video background removal. Unscreen also offers plugins for Premiere Pro and After Effects." },
          ].map((faq) => (
            <div key={faq.q} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
              <p className="text-gray-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "What is the best free alternative to Remove.bg?", acceptedAnswer: { "@type": "Answer", text: "PicWish offers free removal with watermark. Cleanup.pictures and Pixlr also have solid free tiers." } },
          { "@type": "Question", name: "Which is best for e-commerce?", acceptedAnswer: { "@type": "Answer", text: "PhotoRoom is purpose-built for e-commerce. Cutout.Pro is excellent for batch processing." } },
          { "@type": "Question", name: "Can any remove video backgrounds?", acceptedAnswer: { "@type": "Answer", text: "Cutout.Pro and Unscreen handle video background removal. Unscreen has Premiere/AE plugins." } },
        ],
      }) }} />

      <section className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Explore More AI Design Tools</h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">Find the perfect AI design tool for your needs.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/alternatives" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition">All Alternatives</Link>
          <Link href="/category/design" className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition">AI Design Tools →</Link>
        </div>
      </section>
    </div>
  );
}
