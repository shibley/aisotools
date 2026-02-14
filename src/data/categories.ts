export interface Category {
  name: string;
  slug: string;
  description: string;
  icon: string;
  subcategories: string[];
}

export const categories: Category[] = [
  {
    name: "Writing & Content",
    slug: "writing",
    description: "AI tools for content creation, copywriting, blogging, and text generation",
    icon: "✍️",
    subcategories: ["Copywriting", "Blog Writing", "Email Writing", "Social Media", "SEO Content", "Storytelling"],
  },
  {
    name: "Image Generation",
    slug: "image-generation",
    description: "AI image generators, art creators, and visual design tools",
    icon: "🎨",
    subcategories: ["Art Generation", "Photo Editing", "Logo Design", "Stock Images", "Avatars", "Background Removal"],
  },
  {
    name: "Video & Animation",
    slug: "video",
    description: "AI video generators, editors, and animation tools",
    icon: "🎬",
    subcategories: ["Video Generation", "Video Editing", "Animation", "Subtitles", "Avatars", "Clips"],
  },
  {
    name: "Audio & Music",
    slug: "audio",
    description: "AI music generators, voice cloning, text-to-speech, and audio tools",
    icon: "🎵",
    subcategories: ["Music Generation", "Text-to-Speech", "Voice Cloning", "Podcast", "Transcription", "Sound Effects"],
  },
  {
    name: "Chatbots & Assistants",
    slug: "chatbots",
    description: "AI chatbots, virtual assistants, and conversational AI tools",
    icon: "💬",
    subcategories: ["General Chat", "Customer Support", "Personal Assistant", "Character AI", "Knowledge Base", "Roleplay"],
  },
  {
    name: "Coding & Development",
    slug: "coding",
    description: "AI coding assistants, code generation, debugging, and developer tools",
    icon: "💻",
    subcategories: ["Code Generation", "Code Review", "Debugging", "Documentation", "Testing", "DevOps"],
  },
  {
    name: "Marketing & SEO",
    slug: "marketing",
    description: "AI marketing tools, SEO optimization, analytics, and growth",
    icon: "📈",
    subcategories: ["SEO", "Social Media", "Email Marketing", "Analytics", "Ad Copy", "Lead Generation"],
  },
  {
    name: "Productivity",
    slug: "productivity",
    description: "AI productivity tools, automation, scheduling, and workflow",
    icon: "⚡",
    subcategories: ["Note Taking", "Task Management", "Automation", "Scheduling", "Summarization", "Research"],
  },
  {
    name: "Design & UI/UX",
    slug: "design",
    description: "AI design tools for UI/UX, web design, and creative work",
    icon: "🎯",
    subcategories: ["UI Design", "Web Design", "Presentations", "Prototyping", "Color Palettes", "Mockups"],
  },
  {
    name: "Data & Analytics",
    slug: "data",
    description: "AI data analysis, visualization, spreadsheet, and business intelligence tools",
    icon: "📊",
    subcategories: ["Data Analysis", "Visualization", "Spreadsheets", "BI", "Scraping", "Databases"],
  },
  {
    name: "Education & Research",
    slug: "education",
    description: "AI learning tools, research assistants, tutoring, and study aids",
    icon: "📚",
    subcategories: ["Tutoring", "Research", "Language Learning", "Study Aids", "Course Creation", "Citation"],
  },
  {
    name: "Business & Finance",
    slug: "business",
    description: "AI tools for business operations, finance, accounting, and legal",
    icon: "💼",
    subcategories: ["Accounting", "Legal", "HR", "Sales", "CRM", "Invoicing"],
  },
  {
    name: "Healthcare & Wellness",
    slug: "healthcare",
    description: "AI health tools, fitness, mental health, and medical research",
    icon: "🏥",
    subcategories: ["Fitness", "Mental Health", "Diagnostics", "Medical Research", "Nutrition", "Meditation"],
  },
  {
    name: "Search & Knowledge",
    slug: "search",
    description: "AI search engines, knowledge bases, and information retrieval",
    icon: "🔍",
    subcategories: ["AI Search", "Knowledge Management", "Q&A", "Fact Checking", "Summarization", "Web Scraping"],
  },
  {
    name: "Automation & Integration",
    slug: "automation",
    description: "AI automation platforms, workflow builders, and API integrations",
    icon: "🔄",
    subcategories: ["Workflow Automation", "Zapier Alternatives", "API Tools", "RPA", "No-Code", "Integration"],
  },
  {
    name: "3D & Spatial",
    slug: "3d",
    description: "AI 3D modeling, AR/VR, game assets, and spatial computing tools",
    icon: "🧊",
    subcategories: ["3D Modeling", "Game Assets", "AR/VR", "Architecture", "Product Visualization"],
  },
];
