/**
 * use-case-enrichments.ts
 * Deeper use-case scenarios for 20 high-traffic tools.
 * Applied via the tools spread — added to individual tool objects in tools-batch-enrichment.ts
 *
 * These are consumed by the tool page template to render a "Use Cases" section
 * that adds content depth and improves E-E-A-T signals.
 */

export interface UseCaseScenario {
  title: string;
  description: string;
}

export const toolUseCaseScenarios: Record<string, UseCaseScenario[]> = {
  chatgpt: [
    {
      title: "Content Creation at Scale",
      description:
        "Marketing teams use ChatGPT to draft 10-20 blog posts, social captions, and email sequences per week. With a detailed brand voice prompt in the system message, GPT-4o maintains tone consistency across thousands of content pieces — reducing creative team time by 60-80% on first drafts.",
    },
    {
      title: "Code Generation & Debugging",
      description:
        "Developers use ChatGPT to generate boilerplate, write unit tests, explain unfamiliar code, and debug issues. Teams commonly share ChatGPT Custom GPTs pre-configured with their tech stack and coding standards for consistent team-wide outputs.",
    },
    {
      title: "Customer Support Automation",
      description:
        "Support teams build Custom GPTs trained on documentation and FAQ data to handle Tier-1 customer inquiries. These bots resolve 40-60% of common queries without escalation, reducing ticket volume and response times significantly.",
    },
    {
      title: "Data Analysis & Reporting",
      description:
        "Analysts upload CSVs and Excel files directly to ChatGPT's Code Interpreter for instant statistical analysis, chart generation, and pattern identification. Reports that took half a day to write manually can be drafted in 30 minutes.",
    },
    {
      title: "Interview Prep & Learning",
      description:
        "Candidates use ChatGPT in roleplay mode for mock technical and behavioral interviews. It generates STAR-format answer frameworks, asks follow-up probing questions, and provides detailed feedback — making it one of the most effective self-directed learning tools available.",
    },
  ],
  claude: [
    {
      title: "Long-Document Analysis",
      description:
        "Lawyers, consultants, and analysts upload 100-500 page contracts, reports, or research papers to Claude's 200K token context. Claude identifies key clauses, inconsistencies, risks, and summarizes findings with section references — a task that previously took days.",
    },
    {
      title: "Technical Writing & Documentation",
      description:
        "Engineering teams use Claude to draft technical specifications, API documentation, RFC documents, and architecture decision records (ADRs). Claude's ability to follow detailed style guides and maintain technical precision makes it superior to ChatGPT for complex docs.",
    },
    {
      title: "Code Review & Refactoring",
      description:
        "Senior engineers paste entire source files into Claude for comprehensive review — not just syntax errors but architectural feedback, security vulnerabilities, and performance issues. Claude's responses are thoughtful and nuanced, explaining the 'why' behind recommendations.",
    },
    {
      title: "Academic Research Synthesis",
      description:
        "Researchers upload multiple academic papers and ask Claude to synthesize findings, identify contradictions across studies, and suggest research gaps. The 200K context window allows comparing multiple papers simultaneously without losing context.",
    },
    {
      title: "Multi-step Research Projects",
      description:
        "Using Claude Projects, teams maintain persistent context across a research engagement — uploading background documents once, then running dozens of analysis conversations that all reference the same shared knowledge base.",
    },
  ],
  midjourney: [
    {
      title: "Brand Identity Design",
      description:
        "Design agencies use Midjourney to rapidly prototype brand identity concepts — generating logo mark directions, color palette explorations, and lifestyle imagery for mood boards. A week of initial concept exploration can compress to a single afternoon with Midjourney.",
    },
    {
      title: "Product Mockup Visualization",
      description:
        "E-commerce brands use Midjourney to generate lifestyle product photography — placing products in realistic scenes, on models, and in various settings — without expensive photo shoots. Platforms like Pebblely and Photoroom integrate Midjourney for automated product imagery.",
    },
    {
      title: "Book & Game Concept Art",
      description:
        "Authors, game developers, and indie studios use Midjourney to develop consistent visual universes — characters, environments, props, and style guides. Character reference sheets generated in Midjourney then guide 3D artists and illustrators.",
    },
    {
      title: "Marketing Campaign Assets",
      description:
        "Growth teams generate hundreds of ad creative variations for A/B testing across Facebook, Instagram, and Display campaigns. Midjourney's --chaos and --stylize parameters enable rapid variation generation at costs far below stock photo licensing.",
    },
    {
      title: "Interior Design Visualization",
      description:
        "Interior designers and architects generate photorealistic room renderings from text descriptions — showing clients multiple design directions without expensive 3D rendering. AI-staging tools like Decoratly use Midjourney's models for virtual staging of real estate photos.",
    },
  ],
  cursor: [
    {
      title: "Full-Stack Feature Development",
      description:
        "Developers use Cursor's Agent mode to implement full features end-to-end — frontend, backend, database migrations, and tests — from a single natural language prompt. Complex features that previously took a day can be drafted in 1-2 hours with iterative prompting.",
    },
    {
      title: "Legacy Codebase Modernization",
      description:
        "Teams paste legacy codebases into Cursor and use the chat interface to understand, refactor, and modernize old code. Cursor can explain what decade-old code does, suggest modern replacements, and generate migration scripts while maintaining behavior.",
    },
    {
      title: "Test Suite Generation",
      description:
        "QA engineers use Cursor to generate comprehensive test suites for existing code — unit tests, integration tests, and edge case coverage. Cursor understands the implementation and generates tests that accurately reflect the code's intended behavior.",
    },
    {
      title: "Bug Hunting & Fixing",
      description:
        "When debugging complex issues, developers share error logs, stack traces, and related source files with Cursor. The AI identifies root causes, explains why the bug occurs, and generates targeted fixes with context-aware reasoning.",
    },
    {
      title: "API Integration Development",
      description:
        "Developers use Cursor to rapidly integrate third-party APIs — it reads API documentation from the web, generates typed client code, handles authentication, and writes error handling in one pass. Multi-day integration work compresses to hours.",
    },
  ],
  perplexity: [
    {
      title: "Competitive Research",
      description:
        "Product managers and strategists use Perplexity to quickly research competitors, market landscape, and industry trends with cited sources. Perplexity's Deep Research feature generates comprehensive 2,000-word reports with dozens of citations on complex topics.",
    },
    {
      title: "Fact-Checking & Verification",
      description:
        "Journalists and editors use Perplexity to fact-check claims in articles — each claim can be verified with a quick query returning primary sources. The citations make it easy to trace information back to original reporting.",
    },
    {
      title: "Academic Literature Discovery",
      description:
        "Researchers use Perplexity to discover relevant papers, understand recent developments in a field, and get cited overviews of academic debates. Unlike ChatGPT, Perplexity cites real papers with clickable links to abstracts and full texts.",
    },
    {
      title: "Technical Documentation Search",
      description:
        "Developers use Perplexity as a smarter Stack Overflow — asking complex technical questions and getting synthesized answers from documentation, GitHub issues, and blog posts. The answer quality is often better than individual search results because it synthesizes across sources.",
    },
    {
      title: "Investment & Business Due Diligence",
      description:
        "Investors and analysts use Perplexity to rapidly research companies, executives, and markets before meetings. Perplexity Finance provides real-time financial data integration for public companies, reducing research time by hours.",
    },
  ],
  "github-copilot": [
    {
      title: "Autocomplete & Code Suggestions",
      description:
        "Developers receive inline code completions as they type — Copilot predicts the next line, next block, or entire function based on context from the current file and open tabs. Studies show 55% faster task completion for common development workflows.",
    },
    {
      title: "PR Code Review Automation",
      description:
        "Teams use GitHub Copilot's code review feature to get AI comments on every pull request — catching bugs, suggesting improvements, and enforcing coding standards before human reviewers see the code. Reduces review cycles and catches 30-40% of issues automatically.",
    },
    {
      title: "Documentation Generation",
      description:
        "Engineers use Copilot to generate docstrings, README files, and inline comments from existing code. With a single slash command, entire modules get documented with accurate parameter descriptions, return values, and usage examples.",
    },
    {
      title: "Test Generation",
      description:
        "QA teams use Copilot to generate unit tests for existing functions with a single `/tests` command. Copilot generates tests that cover happy paths, edge cases, and error conditions, significantly increasing test coverage without manual test-writing effort.",
    },
    {
      title: "CLI Task Automation",
      description:
        "DevOps engineers use Copilot in the terminal to generate shell commands, write GitHub Actions workflows, and automate deployment scripts from natural language descriptions. Copilot CLI translates 'find all files modified in the last 7 days' into the exact shell command.",
    },
  ],
  notion: [
    {
      title: "Company Knowledge Base",
      description:
        "Operations teams build searchable company wikis in Notion — engineering runbooks, HR policies, product roadmaps, onboarding guides. Notion AI can answer questions from the entire wiki, reducing time spent searching documentation and asking colleagues.",
    },
    {
      title: "Product Roadmap Management",
      description:
        "Product managers use Notion's database views to manage product roadmaps — toggling between Timeline, Board, Table, and Gallery views of the same data. Notion AI drafts PRDs, generates user stories from feature descriptions, and summarizes stakeholder feedback.",
    },
    {
      title: "Meeting Notes & Action Tracking",
      description:
        "Teams use Notion templates for recurring meetings — standup, 1-on-1, sprint retro — with Notion AI generating summaries and extracting action items automatically. Meeting notes link directly to relevant project pages for seamless context.",
    },
    {
      title: "Personal Productivity System",
      description:
        "Knowledge workers build GTD or PARA-inspired productivity systems in Notion — linking projects to goals, capturing quick notes, and managing tasks all in one place. Notion AI can write, summarize, and reformat content across any page instantly.",
    },
    {
      title: "Startup Operating System",
      description:
        "Startups use Notion as their all-in-one operating system — replacing Google Docs, Confluence, Jira, and Asana with a unified workspace. Custom databases model any workflow, and Notion AI fills in the cognitive overhead of information retrieval.",
    },
  ],
  jasper: [
    {
      title: "SEO Content Campaigns",
      description:
        "Content marketing teams use Jasper's SEO mode with Surfer SEO integration to produce dozens of keyword-optimized articles per week. A content calendar that took a 10-person team a month now takes 2-3 people using Jasper for first drafts and AI-assisted editing.",
    },
    {
      title: "Ad Copy at Scale",
      description:
        "Performance marketing teams generate hundreds of Facebook, Google, and LinkedIn ad variations with Jasper's templates. Jasper's brand voice feature ensures all copy matches the company tone, enabling consistent messaging across campaigns without manual rewrites.",
    },
    {
      title: "Multi-Channel Email Campaigns",
      description:
        "Email marketers use Jasper to produce entire nurture sequences — welcome series, re-engagement campaigns, product launches — in hours instead of days. Jasper's long-form editor maintains narrative consistency across a 7-email sequence.",
    },
    {
      title: "Product Description Generation",
      description:
        "E-commerce teams use Jasper to generate SEO-optimized product descriptions at scale — feeding it product attributes and getting unique, compelling descriptions for thousands of SKUs. Amazon, Etsy, and Shopify sellers dramatically reduce copywriting costs.",
    },
    {
      title: "Brand Voice Enforcement Across Teams",
      description:
        "Enterprise marketing teams use Jasper's Brand Voice feature to ensure everyone — from interns to external agencies — produces on-brand content. The voice training captures tone, vocabulary, and style rules, making brand consistency automatic.",
    },
  ],
  elevenlabs: [
    {
      title: "Podcast & Audiobook Production",
      description:
        "Authors and publishers use ElevenLabs to create professional audiobooks from manuscripts without hiring voice actors. With high-quality voice cloning or pre-built voices, a 300-page book can be fully narrated in hours versus weeks of studio recording.",
    },
    {
      title: "Video Voiceover Localization",
      description:
        "Video creators use ElevenLabs' dubbing feature to translate and re-voice YouTube videos and marketing content in 29+ languages while preserving the original speaker's voice characteristics. International reach expands dramatically without re-recording.",
    },
    {
      title: "Interactive Voice AI Products",
      description:
        "Developers use ElevenLabs' Conversational AI platform to build voice agents with sub-300ms latency — customer service bots, tutoring assistants, and voice companions. The emotional voice synthesis makes interactions feel natural and engaging.",
    },
    {
      title: "Game & Animation Voice Acting",
      description:
        "Indie game developers and animation studios use ElevenLabs to voice characters without hiring actors for every iteration. NPCs can have unique voices generated from text, dramatically reducing production costs and enabling dynamic in-game dialogue.",
    },
    {
      title: "Accessibility & Assistive Tech",
      description:
        "Developers building accessibility tools use ElevenLabs for text-to-speech features — turning web content, documents, and apps into natural-sounding audio for visually impaired users. The quality gap vs. traditional TTS engines improves user experience significantly.",
    },
  ],
  runway: [
    {
      title: "Short Film & Music Video Production",
      description:
        "Independent filmmakers use Runway's Gen-3 Alpha model to generate establishing shots, environment extensions, and visual effects that would require expensive production budgets. Music artists commission AI-generated visuals from their lyrics, cutting music video costs by 70-80%.",
    },
    {
      title: "Video Editing & Post-Production",
      description:
        "Video editors use Runway's background removal, object erasure, and motion tracking features to accelerate post-production. Green screens can be replaced, unwanted elements removed from footage, and slow-motion effects applied — all without heavy Adobe After Effects expertise.",
    },
    {
      title: "Brand Campaign Ideation",
      description:
        "Creative agencies use Runway to generate video concepts for client presentations before committing to expensive production. Ten different visual directions can be prototyped in an afternoon, enabling data-informed creative decisions before shoots.",
    },
    {
      title: "Social Media Content Automation",
      description:
        "Content teams use Runway to transform static images and illustrations into animated social media posts — adding camera movements, environment animation, and character motion to previously static assets. Engagement rates improve with minimal additional production effort.",
    },
    {
      title: "AI-Assisted Script Visualization",
      description:
        "Directors and cinematographers use Runway to generate pre-visualization (previz) of scenes from script descriptions — planning shot compositions and camera angles before the production day. This accelerates pre-production and improves on-set efficiency.",
    },
  ],
  synthesia: [
    {
      title: "Corporate L&D Video Production",
      description:
        "L&D teams replace expensive studio-recorded training videos with Synthesia AI presenter videos. A 60-minute onboarding course that previously cost $10,000-50,000 in production can be created for under $1,000 — and updated in minutes when processes change.",
    },
    {
      title: "Multilingual Employee Communications",
      description:
        "Global companies use Synthesia to deliver HR communications, executive messages, and safety training in 120+ languages from a single English script. The same AI presenter speaks natively in French, Spanish, Japanese, and German without hiring multiple presenters.",
    },
    {
      title: "Product Demo & Explainer Videos",
      description:
        "SaaS companies use Synthesia to produce product demo videos, feature announcement videos, and tutorial series at scale. Marketing teams create new videos for every major feature release without scheduling video shoots or waiting for editing queues.",
    },
    {
      title: "Sales Enablement Content",
      description:
        "Sales teams create personalized video pitches with AI-generated presenters delivering customized scripts for each prospect vertical. Deal win rates improve when prospects receive tailored video content vs. generic materials.",
    },
    {
      title: "Accessibility-First Documentation",
      description:
        "Technical documentation teams use Synthesia to create video versions of all text documentation, improving accessibility for visual learners and non-native speakers. Videos also reduce support tickets because users watch rather than read complex procedures.",
    },
  ],
  descript: [
    {
      title: "Podcast Editing via Transcript",
      description:
        "Podcasters use Descript's text-based editing to remove filler words, cut tangents, and tighten conversations by editing the transcript — the audio follows the changes automatically. An hour-long podcast interview is edited to publishable quality in 15-30 minutes.",
    },
    {
      title: "YouTube & YouTube Shorts Repurposing",
      description:
        "YouTubers use Descript's Underlord AI to automatically create short clips from long videos for YouTube Shorts, TikTok, and Instagram Reels. The AI identifies the most engaging moments, adds captions, and reformats to vertical video with minimal human review.",
    },
    {
      title: "Screen Recording & Tutorial Creation",
      description:
        "Software companies use Descript's screen recorder to create product tutorials, support videos, and demo content. AI removes awkward pauses, corrects stumbles, and adds clean captions — turning raw screen recordings into polished product documentation.",
    },
    {
      title: "Video Sales Letters & Webinar Editing",
      description:
        "Marketing teams edit webinar recordings and video sales letters in Descript — removing dead air, cutting off-topic sections, adding B-roll, and producing highlight reels. A 2-hour webinar becomes a tight 45-minute video or a series of 5-minute clips.",
    },
    {
      title: "Overdub for Voice Correction",
      description:
        "Journalists and documentary makers use Descript's Overdub to re-record stumbles and mistakes in their own cloned voice — eliminating the need for re-recording sessions. Corrections are indistinguishable from the original recording when voices are well-cloned.",
    },
  ],
  heygen: [
    {
      title: "Personalized Outbound Video Sales",
      description:
        "Sales teams use HeyGen to send personalized video messages to 100s of prospects — the AI avatar delivers each video with the prospect's name, company, and specific talking points. Video email open rates are 2-3x higher than text-only outreach.",
    },
    {
      title: "AI Avatar Brand Spokesperson",
      description:
        "Companies create a branded AI spokesperson avatar (or a clone of a real spokesperson) to deliver consistent messaging across website videos, social content, and product updates. Once trained, the avatar can produce new videos in any language in minutes.",
    },
    {
      title: "Training Content Localization",
      description:
        "Global training programs use HeyGen to translate AI avatar presenters into 40+ languages, with lip sync automatically synchronized to the translated audio. Training content that previously required re-recording with local talent is updated in hours.",
    },
    {
      title: "Social Media Presence at Scale",
      description:
        "Content creators use HeyGen's AI avatar to maintain a consistent social media video presence without being on camera daily. Scripts are written by AI, delivered by the avatar, with the creator focusing on strategy rather than filming.",
    },
    {
      title: "Interactive Video Personalization",
      description:
        "Real estate agents, financial advisors, and consultants use HeyGen to create personalized client videos at scale — the same template is personalized with each client's name, their specific portfolio data, or property address for truly individualized communication.",
    },
  ],
  "stable-diffusion": [
    {
      title: "Custom LoRA Model Training",
      description:
        "Artists train custom LoRA (Low-Rank Adaptation) models on their own art style with just 20-50 reference images — enabling them to generate infinite new works in their unique style. This protects and extends their artistic identity while accelerating output.",
    },
    {
      title: "Product Prototyping & Design Exploration",
      description:
        "Industrial designers use Stable Diffusion to rapidly explore hundreds of product form factor concepts in hours. The local nature means proprietary designs stay private, unlike cloud-based tools. ComfyUI workflows automate batch generation across design parameters.",
    },
    {
      title: "Game Asset Generation",
      description:
        "Indie game studios use Stable Diffusion with specialized game-art LoRAs to generate consistent character sprites, item icons, environment textures, and UI assets. With proper training, all generated assets share a visual cohesion matching the game's art direction.",
    },
    {
      title: "Print-on-Demand & Merchandise",
      description:
        "Etsy sellers and print-on-demand entrepreneurs use Stable Diffusion to generate unique designs for t-shirts, posters, mugs, and phone cases at scale. Thousands of design variations can be tested as products without upfront design costs.",
    },
    {
      title: "Privacy-Sensitive Image Generation",
      description:
        "Healthcare companies, legal firms, and research institutions use local Stable Diffusion deployments for image generation that must never leave their infrastructure. Sensitive data stays on-premises while still benefiting from state-of-the-art image generation.",
    },
  ],
  otter: [
    {
      title: "Lecture & Conference Transcription",
      description:
        "Students and journalists use Otter AI to transcribe lectures, conference talks, and panel discussions in real-time. The AI identifies speakers, adds timestamps, and creates searchable transcripts that become a reference library for assignments and articles.",
    },
    {
      title: "Sales Call Documentation",
      description:
        "Sales teams use OtterPilot to automatically join and transcribe sales calls, then send AI-generated summaries with action items to Salesforce and Slack immediately after. CRM data entry burden is eliminated, and no meeting details are lost.",
    },
    {
      title: "Accessibility for Deaf & Hard-of-Hearing",
      description:
        "Otter's real-time transcription with speaker labels provides live accessibility for deaf attendees in meetings, conferences, and conversations. The mobile app's live captions work without an internet connection delay that affects competitors.",
    },
    {
      title: "Content Repurposing from Audio",
      description:
        "Podcasters and content creators use Otter to transcribe audio content and repurpose it into blog posts, newsletters, and social captions. The transcript serves as both documentation and as source material for written content creation.",
    },
    {
      title: "Team Meeting Intelligence",
      description:
        "Distributed teams use Otter's workspace features to share meeting transcripts with action items across team channels. Members who couldn't attend get caught up in 2 minutes, and action items automatically appear in project management tools.",
    },
  ],
  langchain: [
    {
      title: "Production RAG System Development",
      description:
        "Engineering teams use LangChain to build retrieval-augmented generation (RAG) systems that answer questions from internal documentation, knowledge bases, and code repositories. LangChain's retriever abstractions work across Pinecone, Weaviate, Chroma, and PostgreSQL pgvector.",
    },
    {
      title: "Multi-Step AI Agent Workflows",
      description:
        "Developers use LangGraph (LangChain's agent orchestration layer) to build sophisticated agents that use tools, search the web, execute code, and make conditional decisions over multiple steps. LangGraph's state management handles complex multi-turn interactions reliably.",
    },
    {
      title: "LLM Application Observability",
      description:
        "Production teams instrument their LLM applications with LangSmith to trace every prompt, LLM call, and tool invocation. When AI applications behave unexpectedly, LangSmith's trace explorer pinpoints exactly where the pipeline went wrong.",
    },
    {
      title: "Automated Data Extraction Pipelines",
      description:
        "Data teams use LangChain to build document processing pipelines — extracting structured data from unstructured PDFs, emails, and web pages. LangChain's extraction chains with Pydantic output parsers convert messy text into typed data reliably.",
    },
    {
      title: "Conversational AI with Memory",
      description:
        "Developers use LangChain's memory abstractions to build chatbots with persistent conversation history — entity memory, summary memory, and vector store memory enable chatbots that remember context across sessions and thousands of turns.",
    },
  ],
  figma: [
    {
      title: "Design System Management",
      description:
        "Design system teams use Figma as the single source of truth for component libraries — with variables, auto-layout, and component properties enabling one component to adapt across all breakpoints and brand variations. Engineering teams pull design tokens directly into code.",
    },
    {
      title: "Rapid Prototype Testing",
      description:
        "Product teams use Figma's prototyping features to create high-fidelity interactive mockups that connect to Maze or Useberry for user testing. Figma prototypes are so realistic that users often mistake them for working products during usability tests.",
    },
    {
      title: "Collaborative Design Reviews",
      description:
        "Design review workflows use Figma comments to track feedback in context — stakeholders annotate mockups directly in the file rather than emailing screenshots. Figma's version history enables rolling back to any design state.",
    },
    {
      title: "Developer Handoff",
      description:
        "Product teams use Figma Dev Mode to provide developers with precise CSS measurements, color tokens, assets, and component documentation — eliminating the back-and-forth of traditional handoff. Developers inspect and export assets directly without design involvement.",
    },
    {
      title: "AI-Assisted Design with Figma AI",
      description:
        "Designers use Figma AI to generate UI mockups from text prompts, auto-rename layers intelligently, search for components with natural language, and generate realistic dummy content for wireframes. The first-draft generation cuts initial layout time by 40-60%.",
    },
  ],
  zapier: [
    {
      title: "CRM & Email Marketing Automation",
      description:
        "Marketing teams use Zapier to trigger email sequences when leads are added to CRMs, update Salesforce records when emails are opened, and sync new subscribers between tools automatically. Multi-step Zaps replace hours of daily manual data entry.",
    },
    {
      title: "Lead Capture & Routing",
      description:
        "Sales operations teams build Zapier workflows that capture form submissions, enrich lead data via Clearbit or Apollo, assign leads to the right rep based on territory/size, notify via Slack, and create CRM records — all without any developer work.",
    },
    {
      title: "E-Commerce Order Management",
      description:
        "Shopify merchants use Zapier to automatically update inventory in Airtable, notify fulfillment teams in Slack, add customers to email lists, and generate invoices in QuickBooks — turning a complex multi-step process into an instant automated workflow.",
    },
    {
      title: "AI-Powered Content Workflows",
      description:
        "Content teams use Zapier's AI integrations to automatically draft social posts from published blog articles, send drafts to Slack for approval, and publish approved posts — creating a semi-automated content distribution engine.",
    },
    {
      title: "Support Ticket Triage & Routing",
      description:
        "Customer success teams use Zapier to pull in support tickets from Zendesk, classify them using OpenAI's API, route high-priority tickets to senior reps, create Jira issues for bug reports, and send auto-responses — reducing first-response time dramatically.",
    },
  ],
};
