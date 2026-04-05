import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Tools Blog — Guides, Comparisons & Reviews",
  description:
    "Expert guides, in-depth comparisons, and reviews of AI tools. Compare ChatGPT vs Claude, discover the best AI coding tools, image generators, writing assistants, and more.",
  keywords: [
    "AI tools blog",
    "AI tool comparisons",
    "best AI tools guide",
    "ChatGPT vs Claude",
    "AI coding tools",
    "AI image generators",
  ],
  openGraph: {
    title: "AI Tools Blog — Guides, Comparisons & Reviews | AISO Tools",
    description:
      "Expert guides, in-depth comparisons, and reviews of the best AI tools across coding, writing, image generation, and more.",
    url: "https://aisotools.com/blog",
    type: "website",
  },
  alternates: {
    canonical: "https://aisotools.com/blog",
  },
};

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  date: string;
  readTime: string;
  badge?: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: "best-ai-coding-tools-2026",
    title: "Best AI Coding Tools 2026: Complete Comparison Guide",
    description:
      "Compare Cursor, GitHub Copilot, Windsurf, Replit Agent, v0, and more. Find the perfect AI coding assistant with pricing, features, and detailed comparisons.",
    category: "Coding & Development",
    categorySlug: "coding",
    date: "January 15, 2026",
    readTime: "15 min read",
    badge: "Popular",
  },
  {
    slug: "best-ai-image-generators-2026",
    title: "Best AI Image Generators 2026: Free & Paid Options Compared",
    description:
      "Discover the top AI image generators including Midjourney, DALL-E 3, Stable Diffusion, Flux, and more. Comprehensive comparison with pricing and features.",
    category: "Image Generation",
    categorySlug: "image-generation",
    date: "January 28, 2026",
    readTime: "14 min read",
    badge: "Popular",
  },
  {
    slug: "best-ai-writing-tools-comparison-2026",
    title: "Best AI Writing Tools 2026: ChatGPT vs Jasper vs Claude vs Copy.ai",
    description:
      "In-depth comparison of the top AI writing assistants. Find the best tool for content creation, copywriting, blogging, and marketing.",
    category: "Writing & Content",
    categorySlug: "writing",
    date: "February 5, 2026",
    readTime: "13 min read",
  },
  {
    slug: "chatgpt-vs-claude",
    title: "ChatGPT vs Claude: Which AI Assistant Is Better in 2026?",
    description:
      "The definitive head-to-head comparison of ChatGPT and Claude. Compare capabilities, pricing, use cases, and find which AI chatbot is best for your needs.",
    category: "Chatbots & Assistants",
    categorySlug: "chatbots",
    date: "February 14, 2026",
    readTime: "12 min read",
    badge: "Editor's Pick",
  },
  {
    slug: "chatgpt-vs-claude-vs-gemini",
    title: "ChatGPT vs Claude vs Gemini: Which AI Assistant is Best in 2026?",
    description:
      "Three-way comparison of the leading AI assistants. Discover which AI chatbot wins for coding, writing, research, and everyday tasks.",
    category: "Chatbots & Assistants",
    categorySlug: "chatbots",
    date: "February 26, 2026",
    readTime: "14 min read",
  },
  {
    slug: "github-copilot-vs-cursor-vs-codeium",
    title: "Top AI Coding Assistants: GitHub Copilot vs Cursor vs Codeium",
    description:
      "Detailed comparison of the three most popular AI coding assistants. Features, pricing, IDE support, and which one is right for your development workflow.",
    category: "Coding & Development",
    categorySlug: "coding",
    date: "March 6, 2026",
    readTime: "13 min read",
  },
  {
    slug: "jasper-vs-copy-ai",
    title: "Jasper vs Copy.ai: Best AI Writing Tool for Marketers 2026",
    description:
      "Head-to-head comparison of Jasper and Copy.ai for marketing content. Compare pricing, features, templates, and find the best AI writing tool for your team.",
    category: "Writing & Content",
    categorySlug: "writing",
    date: "March 15, 2026",
    readTime: "11 min read",
  },
  {
    slug: "midjourney-vs-dall-e",
    title: "Midjourney vs DALL-E 3: AI Image Generator Comparison 2026",
    description:
      "Compare Midjourney and DALL-E 3 across image quality, pricing, features, and use cases. Find out which AI image generator is best for your creative projects.",
    category: "Image Generation",
    categorySlug: "image-generation",
    date: "March 22, 2026",
    readTime: "11 min read",
  },
  {
    slug: "midjourney-vs-dalle-vs-stable-diffusion",
    title: "Best AI Image Generators Compared: Midjourney vs DALL-E vs Stable Diffusion",
    description:
      "Three-way showdown of the most popular AI image generators. Compare quality, pricing, customization, and find the best tool for your creative workflow.",
    category: "Image Generation",
    categorySlug: "image-generation",
    date: "March 30, 2026",
    readTime: "15 min read",
    badge: "Popular",
  },
  {
    slug: "best-ai-customer-service-tools-2026",
    title: "Best AI Customer Service Tools 2026: Complete Comparison Guide",
    description:
      "Compare the best AI customer service tools including Intercom Fin, Zendesk AI, Tidio, Freshdesk Freddy, Ada, and more. Find the right AI support platform for your team.",
    category: "Customer Service",
    categorySlug: "customer-service",
    date: "April 3, 2026",
    readTime: "16 min read",
    badge: "New",
  },
  {
    slug: "best-ai-data-analysis-tools-2026",
    title: "Best AI Data Analysis Tools 2026: Complete Comparison Guide",
    description:
      "Compare the best AI data analysis tools including Julius AI, Dataiku, Hex, Databricks, and more. Find the perfect AI analytics platform.",
    category: "Data & Analytics",
    categorySlug: "data-analytics",
    date: "April 1, 2026",
    readTime: "15 min read",
  },
  {
    slug: "best-ai-tools-for-content-creators-2026",
    title: "Best AI Tools for Content Creators 2026",
    description:
      "Discover the best AI tools for content creators including video editors, thumbnail generators, script writers, and more.",
    category: "Writing & Content",
    categorySlug: "writing",
    date: "March 28, 2026",
    readTime: "14 min read",
  },
  {
    slug: "best-ai-tools-for-small-business-2026",
    title: "Best AI Tools for Small Business 2026",
    description:
      "Complete guide to AI tools that help small businesses save time and money — from marketing and support to operations and analytics.",
    category: "Business",
    categorySlug: "business",
    date: "March 25, 2026",
    readTime: "15 min read",
  },
  {
    slug: "best-ai-tools-for-students-2026",
    title: "Best AI Tools for Students 2026",
    description:
      "Top AI tools for students including research assistants, writing helpers, math solvers, and study aids.",
    category: "Education",
    categorySlug: "education",
    date: "March 20, 2026",
    readTime: "13 min read",
  },
  {
    slug: "best-ai-tools-for-lawyers-2026",
    title: "Best AI Tools for Lawyers & Legal Professionals in 2026",
    description:
      "Discover the best AI tools for lawyers in 2026. From AI legal research with Harvey AI and Casetext to contract review, document drafting, and client intake automation — cut admin time and bill more high-value hours.",
    category: "Legal",
    categorySlug: "legal",
    date: "April 5, 2026",
    readTime: "18 min read",
  },
  {
    slug: "best-ai-tools-for-hr-professionals-2026",
    title: "Best AI Tools for HR Professionals in 2026",
    description:
      "Discover the best AI tools for HR professionals in 2026. From AI recruiting and resume screening to onboarding automation, employee engagement, and performance management — save 15+ hours per week on HR admin.",
    category: "HR & People Ops",
    categorySlug: "hr",
    date: "April 5, 2026",
    readTime: "16 min read",
  },
  {
    slug: "best-ai-tools-for-freelancers-2026",
    title: "Best AI Tools for Freelancers in 2026: Work Smarter, Earn More",
    description:
      "The complete AI toolkit for freelancers — writers, designers, developers, consultants. Save 10+ hours/week, deliver better work, and scale your income without burning out.",
    category: "Freelance",
    categorySlug: "freelance",
    date: "April 5, 2026",
    readTime: "16 min read",
    badge: "New",
  },
];

const categoryColors: Record<string, string> = {
  coding: "bg-green-600/20 text-green-400",
  "image-generation": "bg-purple-600/20 text-purple-400",
  writing: "bg-orange-600/20 text-orange-400",
  chatbots: "bg-blue-600/20 text-blue-400",
  "customer-service": "bg-pink-600/20 text-pink-400",
  "data-analytics": "bg-cyan-600/20 text-cyan-400",
  business: "bg-amber-600/20 text-amber-400",
  education: "bg-teal-600/20 text-teal-400",
  legal: "bg-indigo-600/20 text-indigo-400",
  hr: "bg-emerald-600/20 text-emerald-400",
  freelance: "bg-violet-600/20 text-violet-400",
};

export default function BlogIndexPage() {
  // Group posts by category
  const categories = new Map<string, BlogPost[]>();
  for (const post of blogPosts) {
    const existing = categories.get(post.categorySlug) || [];
    existing.push(post);
    categories.set(post.categorySlug, existing);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-white">
          Home
        </Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Blog</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          AI Tools{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Blog
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl">
          Expert guides, in-depth comparisons, and reviews to help you choose
          the best AI tools for coding, writing, image generation, and more.
        </p>
      </header>

      {/* Featured Posts (top 3) */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">📌 Featured Articles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts
            .filter((p) => p.badge)
            .slice(0, 3)
            .map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      categoryColors[post.categorySlug] || "bg-gray-800 text-gray-400"
                    }`}
                  >
                    {post.category}
                  </span>
                  {post.badge && (
                    <span className="bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded-full text-xs font-medium">
                      {post.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-3 mb-3">
                  {post.description}
                </p>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
        </div>
      </section>

      {/* All Posts */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">All Articles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500/40 transition group"
            >
              <div className="flex items-center gap-2 mb-3">
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                    categoryColors[post.categorySlug] || "bg-gray-800 text-gray-400"
                  }`}
                >
                  {post.category}
                </span>
                {post.badge && (
                  <span className="bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded-full text-xs font-medium">
                    {post.badge}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-2 mb-3">
                {post.description}
              </p>
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Browse by Topic */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Browse by Topic</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="/category/coding"
            className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-green-500/40 transition text-center"
          >
            <span className="text-3xl mb-2 block">💻</span>
            <h3 className="font-semibold mb-1">AI Coding Tools</h3>
            <p className="text-gray-500 text-xs">Editors, assistants &amp; more</p>
          </Link>
          <Link
            href="/category/image-generation"
            className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-purple-500/40 transition text-center"
          >
            <span className="text-3xl mb-2 block">🎨</span>
            <h3 className="font-semibold mb-1">AI Image Generation</h3>
            <p className="text-gray-500 text-xs">Generators, editors &amp; art</p>
          </Link>
          <Link
            href="/category/writing"
            className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-orange-500/40 transition text-center"
          >
            <span className="text-3xl mb-2 block">✍️</span>
            <h3 className="font-semibold mb-1">AI Writing Tools</h3>
            <p className="text-gray-500 text-xs">Copywriting, blogs &amp; more</p>
          </Link>
          <Link
            href="/category/chatbots"
            className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/40 transition text-center"
          >
            <span className="text-3xl mb-2 block">💬</span>
            <h3 className="font-semibold mb-1">AI Chatbots</h3>
            <p className="text-gray-500 text-xs">Assistants &amp; chatbots</p>
          </Link>
        </div>
      </section>

      {/* Alternatives CTA */}
      <section className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Looking for Alternatives?</h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Find the best alternative to any AI tool. Compare features, pricing,
          and capabilities across hundreds of tools.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/chatgpt-alternatives"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-medium transition text-sm"
          >
            ChatGPT Alternatives
          </Link>
          <Link
            href="/midjourney-alternatives"
            className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-lg font-medium transition text-sm"
          >
            Midjourney Alternatives
          </Link>
          <Link
            href="/github-copilot-alternatives"
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg font-medium transition text-sm"
          >
            GitHub Copilot Alternatives
          </Link>
          <Link
            href="/alternatives"
            className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-3 rounded-lg font-medium transition text-sm"
          >
            Browse All Alternatives →
          </Link>
        </div>
      </section>
    </div>
  );
}
