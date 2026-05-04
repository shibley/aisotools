import { tools } from "@/data/tools";
import { getAffiliateUrl } from "@/data/affiliate-links";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Tools for Travel Planning in 2026: Plan Smarter Trips",
  description:
    "The 8 best AI tools for travel planning in 2026. From AI itinerary generators and research assistants to packing list creators and language translation — plan your best trip with AI.",
  keywords: [
    "best ai tools for travel planning",
    "ai travel planner 2026",
    "ai itinerary generator",
    "best ai for travel",
    "ai trip planner",
    "ai travel assistant",
    "ai for vacation planning",
    "ai travel recommendations",
    "chatgpt travel itinerary",
    "ai travel tools 2026",
  ],
  openGraph: {
    title: "Best AI Tools for Travel Planning in 2026: Plan Smarter Trips",
    description:
      "The definitive guide to AI travel planning tools in 2026. Compare itinerary generators, research assistants, packing helpers, and translation tools.",
    url: "https://aisotools.com/blog/best-ai-tools-for-travel-planning-2026",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/blog/best-ai-tools-for-travel-planning-2026",
  },
};

interface TravelTool {
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

const travelTools: TravelTool[] = [
  {
    name: "ChatGPT",
    slug: "chatgpt",
    category: "AI Itinerary Generator",
    description:
      "ChatGPT is the best AI travel planner for creating detailed, personalized itineraries. Tell it your destination, travel dates, budget, travel style (luxury, backpacker, family, adventure, cultural), and interests, and ChatGPT generates a day-by-day itinerary with morning, afternoon, and evening activities — including neighborhoods to stay in, local restaurants, transportation tips, and estimated costs. The conversational interface means you can refine in real time: 'Remove the museum on day 3 and replace it with something outdoors' or 'We have kids ages 5 and 8, adjust the itinerary.' For multi-city trips, ChatGPT optimizes routing to minimize backtracking. It also generates context alongside the itinerary — explaining why each destination is recommended, what time of year is best, and what to watch out for as a tourist.",
    pricing: "Freemium",
    pricingDetails: "Free (GPT-4o limited). Plus $20/mo for full access.",
    strengths: [
      "Day-by-day itineraries with morning/afternoon/evening structure",
      "Personalized to travel style: luxury, budget, family, solo, adventure",
      "Real-time refinement: adjust any part of the itinerary conversationally",
      "Multi-city routing optimization to minimize backtracking",
      "Budget estimates, neighborhood recommendations, and local tips",
    ],
    bestFor: "Travelers who want a fully personalized, detailed itinerary built around their specific interests, budget, and travel style",
    rating: 4.9,
  },
  {
    name: "Perplexity",
    slug: "perplexity",
    category: "Travel Research with Citations",
    description:
      "Perplexity is the most reliable AI for travel research because it cites current sources — not training data that may be months or years out of date. Ask about current visa requirements, entry restrictions, local travel advisories, seasonal weather, and event calendars for any destination and get answers from up-to-date government and travel authority sources. This is critical: a wrong answer about visa requirements from outdated training data could ruin a trip. Perplexity's Deep Research feature generates comprehensive destination reports — covering climate, safety, transport, currency, cultural norms, and top attractions — with citations you can verify. For travelers researching less-visited destinations where information is sparse, Perplexity's web search capability surfaces recent traveler reports and blogs.",
    pricing: "Freemium",
    pricingDetails: "Free tier. Pro $20/mo for Deep Research.",
    strengths: [
      "Current visa and entry requirements from official government sources",
      "Real-time travel advisories and safety information",
      "Weather and seasonal research based on current data",
      "Deep Research generates comprehensive destination profiles with citations",
      "Recent traveler reports for off-the-beaten-path destinations",
    ],
    bestFor: "Travelers who need accurate, up-to-date research on destinations — especially for visas, safety, and entry requirements where accuracy is critical",
    rating: 4.7,
  },
  {
    name: "Claude",
    slug: "claude",
    category: "Long-Form Travel Planning & Analysis",
    description:
      "Claude excels at complex, multi-factor travel planning tasks that require nuanced reasoning. Planning a 3-week trip across 6 countries with a mix of budget and luxury experiences, coordinating specific dietary requirements with restaurant research, or synthesizing contradictory travel advice from multiple sources — Claude handles the complexity gracefully. Its large context window means you can paste entire guidebook sections, multiple blog posts, and your personal notes into a single conversation and ask Claude to synthesize them into a unified plan. For couples or families with different interests and constraints, Claude mediates the planning by finding overlapping priorities. Claude is also excellent for writing: travel journals, postcards, and trip reports benefit from its clear, engaging writing style.",
    pricing: "Freemium",
    pricingDetails: "Free tier. Pro $20/mo, Team $25/user/mo.",
    strengths: [
      "Complex multi-country, multi-week trip planning with many constraints",
      "Synthesizes multiple sources into a unified, conflict-free itinerary",
      "Large context window handles full guidebook sections and research notes",
      "Mediates competing preferences for group or family travel planning",
      "Travel writing: journals, postcards, and trip summaries",
    ],
    bestFor: "Complex travel planning with many constraints — multi-country itineraries, group travel with competing preferences, or detailed budget analysis",
    rating: 4.6,
  },
  {
    name: "Notion AI",
    slug: "notion-ai",
    category: "Trip Organization & Documentation",
    description:
      "Notion combined with Notion AI is the most powerful trip planning and organization system available. Build a travel database that tracks every aspect of your trip: flights, hotels, activities, reservations, packing lists, budgets, and notes — all in one place with shared access for travel partners. Notion AI can summarize the research you've collected, generate packing lists based on destination and activities, write confirmation emails, and organize your notes from multiple sources into structured itinerary pages. The collaborative features make Notion ideal for group travel — everyone adds ideas, votes on activities, and tracks their contributions to shared expenses. For frequent travelers, Notion builds a permanent trip archive that becomes more valuable over time.",
    pricing: "Freemium",
    pricingDetails: "Free (limited). Plus $12/user/mo, Business $18/user/mo.",
    strengths: [
      "All-in-one trip database: flights, hotels, reservations, and budgets",
      "AI-generated packing lists tailored to destination and activities",
      "Collaborative planning for group trips with shared editing",
      "Permanent trip archive — reference past trips for repeat destinations",
      "Budget tracking with AI summaries of total costs by category",
    ],
    bestFor: "Organized travelers and group trips who want all planning materials, reservations, and budgets in one collaborative, searchable system",
    rating: 4.4,
  },
  {
    name: "Midjourney",
    slug: "midjourney",
    category: "Travel Inspiration & Visualization",
    description:
      "Midjourney helps you visualize destinations before you book and creates stunning travel-inspired imagery for sharing trip memories. Generate photorealistic images of destinations you're considering — 'a boutique hotel in Santorini with caldera view at sunset' or 'traditional Japanese ryokan surrounded by cherry blossoms' — to see if the aesthetic matches your vision before spending money. For travel bloggers, Midjourney creates unique editorial images for posts when stock photos feel generic or expensive. Travel journals and social posts benefit from AI-generated imagery that captures the essence of a place even when your own photos don't do it justice. Wedding and honeymoon planners use Midjourney to mock up romantic destination ideas for clients.",
    pricing: "Paid",
    pricingDetails: "Basic $10/mo, Standard $30/mo, Pro $60/mo.",
    strengths: [
      "Photorealistic destination visualization before booking",
      "Travel blog imagery without expensive stock photo licensing",
      "Hotel and accommodation aesthetic preview from text descriptions",
      "Trip scrapbook and memory imagery beyond personal photos",
      "Destination mood board creation for trip planning inspiration",
    ],
    bestFor: "Travel bloggers, destination wedding planners, and visual travelers who want to visualize and document experiences with AI-generated imagery",
    rating: 4.3,
  },
  {
    name: "Grammarly",
    slug: "grammarly",
    category: "Travel Writing & Communication",
    description:
      "Grammarly ensures professional, error-free communication throughout the travel experience — from booking confirmations to vendor negotiations. When emailing hotels about room upgrades, contacting tour operators about custom experiences, or communicating with Airbnb hosts in your non-native language, Grammarly catches errors that might undermine the professionalism of your request. Travel bloggers and travel writers rely on Grammarly to polish posts and articles before publishing. For business travelers, Grammarly ensures client-facing travel reports, expense summaries, and trip reports meet professional standards. The tone detection helps calibrate formal requests (visa application cover letters) versus friendly inquiries (local guide recommendations).",
    pricing: "Freemium",
    pricingDetails: "Free (basic). Premium $12/mo (annual).",
    strengths: [
      "Professional email communication with hotels, operators, and hosts",
      "Travel blog and article polishing before publication",
      "Visa application cover letter and formal document review",
      "Non-native English travelers: catches errors in English communication",
      "Business travel expense reports and trip summaries",
    ],
    bestFor: "Travel writers, bloggers, and business travelers who need professional, error-free written communication throughout the travel experience",
    rating: 4.2,
  },
  {
    name: "Canva AI",
    slug: "canva-ai",
    category: "Travel Documents & Memory Books",
    description:
      "Canva AI creates beautiful, shareable travel documents — trip itineraries, packing lists, destination guides, and memory books — that go far beyond plain text exports. The travel-specific templates include photo albums, destination postcards, trip summaries, and shareable itinerary documents that look professionally designed. Magic Design generates branded travel content from photos you upload. For travel bloggers, Canva AI produces Pinterest-optimized graphics, Instagram travel posts, and blog featured images efficiently. The collaborative features allow couples and families to design shared trip scrapbooks. Travel agents use Canva to produce professional client itinerary documents and destination proposal presentations.",
    pricing: "Freemium",
    pricingDetails: "Free (limited AI). Pro $15/mo, Teams $10/user/mo.",
    strengths: [
      "Professional itinerary and trip guide documents for sharing",
      "Photo album and travel scrapbook templates for memories",
      "Pinterest and Instagram graphics for travel bloggers",
      "Destination postcards and shareable social content",
      "Travel agent client proposals and itinerary presentations",
    ],
    bestFor: "Travel bloggers, travel agents, and memory-focused travelers who want beautifully designed documents and social content from their trips",
    rating: 4.2,
  },
  {
    name: "Copy.ai",
    slug: "copyai",
    category: "Travel Blog & Content Creation",
    description:
      "Copy.ai is strong for travel content creators — bloggers, YouTubers, and Instagrammers who monetize travel content. The travel blog templates generate destination guides, hotel reviews, and 'things to do in [city]' posts with SEO-optimized structure. For YouTube travel vloggers, Copy.ai writes video descriptions, chapter timestamps, and channel About sections. The email newsletter templates help travel bloggers build and monetize their audiences. For travel agencies and tour operators, Copy.ai generates destination marketing copy, tour description pages, and promotional email campaigns. The batch generation capability allows travel sites to produce location-specific content at scale — essential for travel aggregators covering hundreds of destinations.",
    pricing: "Freemium",
    pricingDetails: "Free (limited). Starter $49/mo, Advanced $249/mo.",
    strengths: [
      "Travel blog post templates: destination guides, hotel reviews, top lists",
      "YouTube travel video descriptions and chapter markers",
      "Email newsletter content for travel blog monetization",
      "Tour operator and travel agency destination marketing copy",
      "Location-specific content at scale for travel aggregator sites",
    ],
    bestFor: "Travel bloggers, tour operators, and travel content creators who need high-volume, SEO-structured destination content",
    rating: 4.1,
  },
];

const faqs = [
  {
    question: "What is the best AI tool for travel planning in 2026?",
    answer:
      "ChatGPT is the best all-around AI travel planner — it creates detailed, personalized day-by-day itineraries and refines them conversationally. For research accuracy (especially visa requirements and entry restrictions), use Perplexity which cites current sources. For organizing your trip with shared access for travel partners, Notion AI is the best system. Most travelers use ChatGPT for the itinerary, Perplexity to verify critical information, and Notion to keep everything organized.",
  },
  {
    question: "How do I use ChatGPT to plan a trip?",
    answer:
      "The most effective ChatGPT travel planning prompt: 'Plan a [X]-day trip to [destination] for [number of travelers]. Travel style: [luxury/budget/adventure/cultural/family]. Budget: approximately $[X] per day excluding flights. Interests: [list your interests]. Dietary restrictions: [any dietary needs]. Avoid: [anything you want to skip]. Structure the itinerary with morning, afternoon, and evening for each day. Include neighborhood recommendations for accommodation, local restaurant suggestions, and tips for getting around.' Then follow up with refinements: remove activities you don't want, swap in specific interests, and ask for backup options if anything is fully booked.",
  },
  {
    question: "Can AI replace a travel agent?",
    answer:
      "AI handles most of what travel agents traditionally do: research, itinerary building, destination recommendations, packing advice, and travel tips. Where travel agents still add value: complex luxury bookings that require insider relationships (specific suite upgrades, sold-out experiences), specialized travel like expedition cruises or remote lodges, group travel with 10+ people, and troubleshooting when things go wrong mid-trip (flight cancellations, hotels losing reservations). For standard leisure travel — city trips, beach vacations, road trips — AI does 90% of what a travel agent does for free. For ultra-luxury or highly complex logistics, a specialist travel agent's relationships justify the fee.",
  },
  {
    question: "How accurate is AI for travel information?",
    answer:
      "AI accuracy for travel information varies significantly by question type. Highly accurate: general destination knowledge, cultural context, packing recommendations, activity suggestions, and itinerary logic. Less reliable: specific current prices (change constantly), operating hours and reservation requirements (change seasonally), visa requirements (change with geopolitics), and recent openings or closures. For anything time-sensitive or legally consequential (visa requirements, entry restrictions, travel advisories), always verify with Perplexity (which searches current sources) and official government websites. Use AI for the creative and logistical framework, verify critical facts from authoritative current sources.",
  },
  {
    question: "What AI tool creates the best travel itinerary?",
    answer:
      "ChatGPT consistently produces the best travel itineraries because of its instruction-following and conversational refinement capabilities. The key is prompt quality: be specific about travel style, budget, interests, and constraints. Include who you're traveling with (solo, couple, family with ages, group of friends) as AI tailors recommendations accordingly. For destinations you've never visited, Claude is also excellent — its large context window lets you paste travel blog posts and guidebook excerpts for Claude to synthesize into a plan. For destinations with complex logistics (Japan rail passes, national park permits, multi-country visas), Claude's reasoning handles the complexity better than simpler AI tools.",
  },
];

export default async function Page() {
  const toolData = travelTools.map((t) => {
    const tool = tools.find((x) => x.slug === t.slug);
    return { ...t, url: tool ? getAffiliateUrl(t.slug) || tool.url : "#" };
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
            <span>Travel</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Best AI Tools for Travel Planning in 2026: Plan Smarter Trips
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            AI has transformed travel planning — from creating custom itineraries in minutes to researching visa requirements with cited sources. Here are the 8 best AI tools for planning your next trip, whether you&apos;re a solo backpacker, family traveler, or travel content creator.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
            <span>📅 Updated May 2026</span>
            <span>•</span>
            <span>⏱️ 10 min read</span>
            <span>•</span>
            <span>✈️ {travelTools.length} tools reviewed</span>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-10">
          <h2 className="font-semibold text-white mb-3">Quick Navigation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {travelTools.map((tool, i) => (
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
          <h2 className="text-2xl font-bold mb-4">How AI is Changing Travel Planning in 2026</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Travel planning used to take weeks — guidebooks, travel blogs, TripAdvisor reviews, and spreadsheets cobbled together into a fragile itinerary. AI compresses this to hours, producing plans that are more personalized than anything a travel agent could produce at comparable cost.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {[
              { icon: "🗺️", title: "Plan", desc: "Day-by-day itineraries tailored to your style (ChatGPT)" },
              { icon: "🔍", title: "Research", desc: "Verified current visa and entry requirements (Perplexity)" },
              { icon: "📋", title: "Organize", desc: "All-in-one trip database with shared access (Notion AI)" },
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
                    Key Strengths for Travel Planning
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
          <h2 className="text-2xl font-bold mb-6">AI Travel Tools: Quick Comparison</h2>
          <div className="overflow-x-auto">
            <div className="min-w-[640px]">
              <div className="grid grid-cols-4 gap-px bg-gray-800 rounded-xl overflow-hidden text-sm">
                <div className="bg-gray-900 p-3 font-semibold text-gray-400">Tool</div>
                <div className="bg-gray-900 p-3 font-semibold text-gray-400">Primary Use</div>
                <div className="bg-gray-900 p-3 font-semibold text-gray-400">Pricing</div>
                <div className="bg-gray-900 p-3 font-semibold text-gray-400">Rating</div>
                {travelTools.map((tool) => (
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
          <h2 className="text-2xl font-bold mb-4">The Travel Planning AI Stack We Recommend</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            For most travelers, start with:{" "}
            <Link href="/tool/chatgpt" className="text-blue-400 hover:text-blue-300">
              ChatGPT
            </Link>{" "}
            for itinerary creation,{" "}
            <Link href="/tool/perplexity" className="text-blue-400 hover:text-blue-300">
              Perplexity
            </Link>{" "}
            for verifying visa and entry requirements, and{" "}
            <Link href="/tool/notion-ai" className="text-blue-400 hover:text-blue-300">
              Notion AI
            </Link>{" "}
            for organizing everything. Add{" "}
            <Link href="/tool/claude" className="text-blue-400 hover:text-blue-300">
              Claude
            </Link>{" "}
            for complex multi-country itineraries with many constraints.
          </p>
          <p className="text-gray-400 text-sm">
            ChatGPT, Claude, Perplexity, and Notion AI all have free tiers — test before subscribing.
          </p>
        </section>

        {/* Related Posts */}
        <section>
          <h2 className="text-xl font-bold mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                href: "/blog/best-ai-tools-for-writers-2026",
                title: "Best AI Tools for Writers",
                desc: "AI tools for travel writers and bloggers",
              },
              {
                href: "/blog/best-ai-note-taking-apps-2026",
                title: "Best AI Note-Taking Apps 2026",
                desc: "Capture and organize your travel research",
              },
              {
                href: "/blog/best-ai-tools-for-photographers-2026",
                title: "Best AI Tools for Photographers",
                desc: "AI photo editing for travel photography",
              },
              {
                href: "/blog/best-ai-summarizers-2026",
                title: "Best AI Summarizers 2026",
                desc: "Summarize travel guides and destination research fast",
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
            headline: "Best AI Tools for Travel Planning in 2026: Plan Smarter Trips",
            description:
              "Comprehensive guide to the 8 best AI tools for travel planning in 2026, covering itinerary generators, research tools, trip organizers, and travel content creation.",
            author: { "@type": "Organization", name: "AISO Tools" },
            publisher: {
              "@type": "Organization",
              name: "AISO Tools",
              url: "https://aisotools.com",
            },
            datePublished: "2026-05-04",
            dateModified: "2026-05-04",
            url: "https://aisotools.com/blog/best-ai-tools-for-travel-planning-2026",
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
