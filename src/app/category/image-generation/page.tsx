import { tools } from "@/data/tools";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Image Generators (2026) — Art, Design & Photo Editing",
  description:
    "Discover the best AI image generators for art creation, design, and photo editing. Compare Midjourney, DALL-E, Stable Diffusion, Leonardo AI, and top AI art tools.",
  keywords: [
    "ai image generator",
    "ai art generator",
    "text to image ai",
    "ai photo editor",
    "ai design tool",
    "midjourney alternatives",
    "dall-e alternatives",
  ],
  openGraph: {
    title: "Best AI Image Generators (2026) — Art, Design & Photo Editing",
    description:
      "Compare the best AI image generators for art, design, and photo editing. In-depth reviews and comparisons of top AI art tools.",
    url: "https://aisotools.com/category/image-generation",
    type: "website",
  },
  alternates: {
    canonical: "https://aisotools.com/category/image-generation",
  },
};

interface FeaturedTool {
  name: string;
  slug: string;
  description: string;
  pricing: string;
  bestFor: string;
  features: string[];
}

const featuredImageTools: FeaturedTool[] = [
  {
    name: "Midjourney",
    slug: "midjourney",
    description: "The leading AI image generator known for stunning, artistic outputs with exceptional aesthetic quality and style control.",
    pricing: "Paid ($10/mo Basic)",
    bestFor: "Artistic imagery, concept art, creative projects",
    features: ["Text-to-image", "Style control", "Upscaling", "Web editor"],
  },
  {
    name: "DALL-E 3",
    slug: "dall-e",
    description: "OpenAI's image generator with excellent prompt understanding and seamless ChatGPT integration for iterative creation.",
    pricing: "Via ChatGPT Plus ($20/mo)",
    bestFor: "Precise prompt following, iterative design",
    features: ["ChatGPT integration", "Precise prompts", "Editing", "API access"],
  },
  {
    name: "Stable Diffusion",
    slug: "stable-diffusion",
    description: "Open-source AI image generation with unlimited local use, extensive customization, and a massive model ecosystem.",
    pricing: "Free (Open Source)",
    bestFor: "Custom workflows, unlimited generation, developers",
    features: ["Open source", "Local install", "LoRA models", "ControlNet"],
  },
  {
    name: "Leonardo AI",
    slug: "leonardo-ai",
    description: "Powerful AI art platform with game asset focus, custom model training, and generous free tier for creators.",
    pricing: "Freemium ($12/mo Apprentice)",
    bestFor: "Game assets, consistent characters, custom models",
    features: ["Game assets", "Custom training", "Canvas editor", "Free tier"],
  },
  {
    name: "Adobe Firefly",
    slug: "adobe-firefly",
    description: "Adobe's AI image generator with commercial-safe licensing and tight integration with Creative Cloud apps.",
    pricing: "Freemium (CC included)",
    bestFor: "Commercial use, Adobe workflow, designers",
    features: ["Commercial safe", "Photoshop integration", "Generative fill", "Text effects"],
  },
  {
    name: "Canva AI",
    slug: "canva",
    description: "AI image generation built into Canva's design platform, perfect for quick graphics and social media content.",
    pricing: "Freemium ($12.99/mo Pro)",
    bestFor: "Social media graphics, quick designs, non-designers",
    features: ["Design platform", "Templates", "Magic tools", "Brand kit"],
  },
];

const useCases = [
  {
    title: "Art & Creative Projects",
    icon: "🎨",
    description: "Create stunning digital art, illustrations, concept designs, and creative visuals. AI art tools enable artists to explore styles and ideas faster than ever before.",
    tools: ["Midjourney", "DALL-E 3", "Leonardo AI", "Stable Diffusion"],
  },
  {
    title: "Marketing & Social Media",
    icon: "📱",
    description: "Generate eye-catching social media graphics, ad creatives, thumbnails, and marketing visuals. Perfect for rapid iteration and A/B testing visual content.",
    tools: ["Canva AI", "Adobe Firefly", "DALL-E 3", "Ideogram"],
  },
  {
    title: "Product & Mockup Design",
    icon: "📦",
    description: "Create product mockups, packaging visualizations, and e-commerce imagery. AI helps visualize concepts before production.",
    tools: ["Adobe Firefly", "Leonardo AI", "Midjourney", "Stable Diffusion"],
  },
  {
    title: "Game & 3D Asset Creation",
    icon: "🎮",
    description: "Generate game textures, character concepts, environment art, and 2D assets. AI accelerates the game development art pipeline.",
    tools: ["Leonardo AI", "Stable Diffusion", "Midjourney", "Scenario"],
  },
  {
    title: "Photo Editing & Enhancement",
    icon: "📸",
    description: "Remove backgrounds, expand images, enhance quality, and edit photos using AI. Transform ordinary photos into professional-quality images.",
    tools: ["Adobe Firefly", "Remove.bg", "Topaz Labs", "Luminar Neo"],
  },
  {
    title: "Logo & Brand Design",
    icon: "✨",
    description: "Create logo concepts, brand imagery, and visual identity elements. AI helps explore design directions and generate variations quickly.",
    tools: ["Ideogram", "Canva AI", "Looka", "Adobe Firefly"],
  },
];

const comparisonPosts = [
  { title: "Best AI Image Generators 2026", slug: "/blog/best-ai-image-generators-2026" },
  { title: "Midjourney vs DALL-E vs Stable Diffusion", slug: "/blog/midjourney-vs-dalle-vs-stable-diffusion" },
  { title: "Midjourney vs DALL-E: Deep Dive", slug: "/blog/midjourney-vs-dall-e" },
  { title: "Midjourney Alternatives", slug: "/midjourney-alternatives" },
  { title: "DALL-E Alternatives", slug: "/dall-e-alternatives" },
  { title: "Canva Alternatives", slug: "/canva-alternatives" },
];

const faqs = [
  {
    question: "What is the best AI image generator in 2026?",
    answer: "Midjourney is widely considered the best for artistic quality and aesthetics. DALL-E 3 excels at following complex prompts accurately. Stable Diffusion offers the most flexibility as open-source software. Leonardo AI provides the best balance of quality and free access. Your choice depends on your specific needs—art style, workflow, budget, and use case.",
  },
  {
    question: "Are AI-generated images free to use commercially?",
    answer: "It depends on the tool. Adobe Firefly is specifically designed for commercial use with trained on licensed content. Midjourney allows commercial use on paid plans. DALL-E 3 grants usage rights through OpenAI's terms. Stable Diffusion outputs are generally unrestricted. Always check each tool's current licensing terms for your specific use case.",
  },
  {
    question: "Can I run AI image generators locally?",
    answer: "Yes! Stable Diffusion is fully open-source and can run on your own computer with a decent GPU (8GB+ VRAM recommended). This gives you unlimited generations with no subscription costs. Tools like Automatic1111, ComfyUI, and Fooocus provide user-friendly interfaces for local generation.",
  },
  {
    question: "What's the difference between Midjourney and DALL-E?",
    answer: "Midjourney excels at artistic, aesthetic images with a distinctive style and strong composition. DALL-E 3 is better at precisely following complex prompts and integrates seamlessly with ChatGPT for conversational image creation. Midjourney works via Discord; DALL-E is in ChatGPT. Midjourney costs $10/mo minimum; DALL-E requires ChatGPT Plus at $20/mo.",
  },
  {
    question: "How much do AI image generators cost?",
    answer: "Prices range from free to $60+/month. Stable Diffusion is free and open-source. Leonardo AI offers 150 free images/day. Midjourney starts at $10/mo. DALL-E 3 is included with ChatGPT Plus ($20/mo). Adobe Firefly comes with Creative Cloud subscriptions. Most tools offer free tiers or trials to start.",
  },
  {
    question: "Can AI image generators create consistent characters?",
    answer: "This is improving rapidly. Leonardo AI and Midjourney now offer character consistency features. Stable Diffusion can achieve consistency using LoRA training or reference images. DALL-E 3 is working on this feature. For production workflows requiring strict consistency, custom fine-tuning or traditional design tools may still be needed.",
  },
];

export default function ImageGenerationCategoryPage() {
  // Get tools in the image-generation category
  const imageTools = tools.filter((t) => t.category === "image-generation");
  const sponsoredTools = imageTools.filter((t) => t.sponsored);
  const regularTools = imageTools.filter((t) => !t.sponsored);
  const toolsBySlug = new Map(tools.map((t) => [t.slug, t]));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-white">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/directory" className="hover:text-white">Categories</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">AI Image Generators</span>
      </nav>

      {/* Hero Section */}
      <header className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-5xl">🎨</span>
          <h1 className="text-4xl md:text-5xl font-bold">AI Image Generators</h1>
        </div>
        <p className="text-xl text-gray-400 max-w-4xl leading-relaxed mb-6">
          Create stunning visuals with AI image generators. From artistic masterpieces to marketing 
          graphics, product mockups to game assets—AI art tools transform your ideas into images 
          in seconds.
        </p>

        {/* Extended Description (200+ words) */}
        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-gray-400 leading-relaxed">
            AI image generation has revolutionized visual content creation, making it possible for 
            anyone to generate professional-quality images from simple text descriptions. Whether 
            you're an artist exploring new creative directions, a marketer needing quick visuals, 
            a game developer creating assets, or a designer prototyping concepts—there's an AI 
            image generator built for your workflow.
          </p>
          <p className="text-gray-400 leading-relaxed">
            The technology has matured significantly, with tools like Midjourney producing art that 
            rivals professional digital artists, DALL-E 3 understanding complex multi-part prompts 
            with remarkable accuracy, and Stable Diffusion offering unlimited local generation with 
            deep customization through its open-source ecosystem. Adobe Firefly brings AI generation 
            directly into the creative professional workflow with commercial-safe outputs.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Modern AI image tools go beyond basic text-to-image. They offer inpainting (editing parts 
            of images), outpainting (expanding images beyond their borders), style transfer, upscaling, 
            image-to-image transformation, and even video generation. Many now support consistency 
            features for creating characters that look the same across multiple images. Whether you 
            need photorealistic renders, anime illustrations, oil painting styles, or abstract art, 
            these tools can adapt to virtually any visual style you can imagine.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <span className="bg-pink-600/20 text-pink-400 px-4 py-2 rounded-full text-sm font-medium">
            Art Generation
          </span>
          <span className="bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium">
            Photo Editing
          </span>
          <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
            Design Tools
          </span>
          <span className="bg-green-600/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium">
            Stock Images
          </span>
          <span className="bg-orange-600/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium">
            Logo Design
          </span>
          <span className="bg-cyan-600/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium">
            Background Removal
          </span>
        </div>
      </header>

      {/* Featured Tools Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Featured AI Image Generators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredImageTools.map((tool) => {
            const toolData = toolsBySlug.get(tool.slug);
            return (
              <div
                key={tool.slug}
                className="bg-gradient-to-br from-pink-600/10 to-purple-600/10 border border-pink-500/30 rounded-xl p-6 hover:border-pink-500/50 transition"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold">{tool.name}</h3>
                  <span className="text-xs bg-yellow-500/10 text-yellow-400 px-2 py-0.5 rounded-full">
                    Featured
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{tool.description}</p>
                <div className="mb-4">
                  <span className="text-xs text-gray-500">Best for:</span>
                  <p className="text-sm text-gray-300">{tool.bestFor}</p>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {tool.features.slice(0, 3).map((feature) => (
                    <span key={feature} className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-pink-400">{tool.pricing}</span>
                  {toolData ? (
                    <Link
                      href={`/tool/${tool.slug}`}
                      className="text-sm text-white bg-pink-600 hover:bg-pink-700 px-3 py-1 rounded transition"
                    >
                      View Tool →
                    </Link>
                  ) : (
                    <span className="text-xs text-gray-600">Coming soon</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Use Cases for AI Image Generators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase) => (
            <div key={useCase.title} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{useCase.icon}</span>
                <h3 className="text-lg font-semibold">{useCase.title}</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">{useCase.description}</p>
              <div className="flex flex-wrap gap-2">
                {useCase.tools.map((tool) => (
                  <span key={tool} className="text-xs bg-pink-600/20 text-pink-400 px-2 py-1 rounded">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Image Tools */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">
          All Image Generation Tools ({imageTools.length})
        </h2>
        
        {/* Sponsored Tools */}
        {sponsoredTools.length > 0 && (
          <div className="mb-8">
            <h3 className="text-sm text-gray-500 mb-3 uppercase tracking-wide">⭐ Sponsored</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sponsoredTools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tool/${tool.slug}`}
                  className="bg-gradient-to-br from-yellow-600/10 to-orange-600/10 border border-yellow-500/30 rounded-xl p-6 hover:border-yellow-500/50 transition"
                >
                  <h3 className="text-lg font-semibold mb-2">{tool.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{tool.shortDescription}</p>
                  <span className="text-xs bg-gray-800 text-gray-500 px-2 py-0.5 rounded-full">{tool.pricing}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Regular Tools */}
        {regularTools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tool/${tool.slug}`}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-pink-500/50 transition group"
              >
                <h3 className="text-lg font-semibold group-hover:text-pink-400 transition mb-2">
                  {tool.name}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{tool.shortDescription}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-gray-800 text-gray-500 px-2 py-0.5 rounded-full">{tool.pricing}</span>
                  <div className="flex gap-1">
                    {tool.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs text-gray-600">{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-12 text-center">
            <p className="text-gray-400 mb-4">More image generation tools coming soon!</p>
            <Link
              href="/submit"
              className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Submit a Tool →
            </Link>
          </div>
        )}
      </section>

      {/* Comparison Posts */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Comparisons & Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {comparisonPosts.map((post) => (
            <Link
              key={post.slug}
              href={post.slug}
              className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-pink-500/50 transition flex items-center gap-3"
            >
              <span className="text-2xl">🖼️</span>
              <span className="text-gray-300 hover:text-white">{post.title}</span>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/ai-image-generator"
            className="text-pink-400 hover:text-pink-300 transition"
          >
            View all AI image generator comparisons →
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 border border-pink-500/20 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Start Creating AI Art Today</h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Compare features, pricing, and styles to find the perfect AI image generator for your 
          creative projects.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/ai-image-generator"
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Compare Image Generators
          </Link>
          <Link
            href="/category/video"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            AI Video Tools →
          </Link>
        </div>
      </section>
    </div>
  );
}
