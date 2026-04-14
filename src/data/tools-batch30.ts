import { Tool } from "./tools";

export const toolsBatch30: Tool[] = [
  // ===== AI PRODUCTIVITY & KNOWLEDGE =====
  {
    name: "Heptabase",
    slug: "heptabase",
    description:
      "Heptabase is a visual PKM (Personal Knowledge Management) tool that combines a networked note-taking system with a spatial canvas. It allows users to map out complex ideas visually, organize notes into 'whiteboards', and build a structured knowledge base where information is connected rather than just filed.",
    shortDescription: "Visual PKM tool combining notes with a spatial canvas",
    url: "https://heptabase.com",
    category: "productivity",
    subcategory: "Note Taking",
    tags: [
      "pkm",
      "visual thinking",
      "knowledge management",
      "second brain",
      "whiteboard",
      "notes",
    ],
    pricing: "paid",
    pricingDetails: "Starting at $9.99/mo (billed annually). No free tier.",
    featured: false,
    sponsored: false,
    features: [
      "Infinite spatial whiteboards for visual mapping",
      "Atomic notes with networked backlinks",
      "Card-based organization for easy movement",
      "PDF annotation integrated directly into the canvas",
      "Strong focus on 'learning' and 'synthesis' workflows",
      "Fast search and intuitive navigation",
      "Cross-platform sync (Desktop, Mobile)",
    ],
    alternatives: ["obsidian", "roam-research", "logseq", "notion-ai", "capacities"],
    addedDate: "2026-04-13",
    rating: 4.7,
    reviewCount: 812,
    pros: [
      "Best-in-class for visual learners and complex research",
      "Reduces the 'friction' of organizing fragmented notes",
      "Excellent for synthesizing large amounts of information",
      "Powerful combination of linear notes and spatial maps",
      "High-performance rendering of large knowledge graphs",
    ],
    cons: [
      "No free tier — can be a barrier for new users",
      "Steeper learning curve than traditional note apps",
      "Mobile app is more for capture than deep visual work",
      "Smaller community ecosystem compared to Obsidian",
    ],
    bestFor: [
      "Researchers and academics managing complex topics",
      "Students synthesizing information for thesis/exams",
      "Knowledge workers who prefer visual mapping over folders",
      "Strategists and architects planning high-level systems",
    ],
    useCaseScenarios: [
      {
        title: "Complex Research Synthesis",
        description:
          "A PhD student uses Heptabase to map out the history of a specific scientific theory. They create atomic notes for each key paper and author, then visually link them on a whiteboard to identify gaps in the current literature, transforming 50+ PDFs into a coherent visual argument.",
      },
      {
        title: "Project Strategy Mapping",
        description:
          "A product manager uses a Heptabase whiteboard to plan a quarterly roadmap. They link user feedback cards, technical constraints, and feature ideas visually, allowing the team to see the dependencies and logic flow of the project in one glance.",
      },
      {
        title: "Learning a New Language",
        description:
          "A language learner creates a visual map of grammar rules, linking related concepts and providing examples in cards. By spatially organizing the 'logic' of the language, they retain complex rules faster than using traditional linear lists.",
      },
    ],
  },
  {
    name: "Capacities",
    slug: "capacities",
    description:
      "Capacities is an 'object-based' note-taking app that moves beyond folders and tags to a structured data approach. Instead of just pages, you define 'Objects' (e.g., People, Books, Meetings), ensuring that your knowledge is consistently organized and easily queryable.",
    shortDescription: "Object-based note-taking for structured knowledge",
    url: "https://capacities.io",
    category: "productivity",
    subcategory: "Note Taking",
    tags: [
      "pkm",
      "object-based",
      "knowledge management",
      "second brain",
      "structured data",
      "notes",
    ],
    pricing: "freemium",
    pricingDetails: "Free tier available. Pro plans for advanced features and sync.",
    featured: false,
    sponsored: false,
    features: [
      "Object-based organization (define your own entity types)",
      "Networked backlinks and automatic connections",
      "Daily notes for rapid capture",
      "Powerful querying and filtering of objects",
      "Clean, modern interface with high usability",
      "Integration with web clipping and external sources",
      "Ability to visualize connections between different object types",
    ],
    alternatives: ["notion-ai", "obsidian", "tana", "roam-research", "heptabase"],
    addedDate: "2026-04-13",
    rating: 4.6,
    reviewCount: 645,
    pros: [
      "Eliminates the 'where do I put this?' folder anxiety",
      "Consistent data structure makes retrieval effortless",
      "Better balance between structure (Notion) and fluidity (Roam)",
      "Extremely intuitive object-property system",
      "Beautifully designed UX that encourages organization",
    ],
    cons: [
      "Learning the 'object' mental model takes a few days",
      "Fewer plugins and extensions than Obsidian",
      "Still in active development (some features evolving)",
      "Sync can occasionally be slower on very large bases",
    ],
    bestFor: [
      "People who find Notion too rigid and Obsidian too chaotic",
      "Collectors of structured information (books, people, quotes)",
      "Researchers who need a consistent schema for their data",
      "Anyone building a long-term personal knowledge base",
    ],
    useCaseScenarios: [
      {
        title: "CRM for Personal Networks",
        description:
          "A freelance consultant defines a 'Person' object with properties for 'Last Contacted', 'Key Interest', and 'Relationship'. Every time they meet someone, they create a Person object and link it to 'Project' or 'Meeting' objects, creating a self-organizing professional CRM.",
      },
      {
        title: "Digital Library and Reading Log",
        description:
          "A voracious reader defines a 'Book' object with fields for 'Author', 'Genre', and 'Rating'. As they read, they create Book objects and link them to 'Concept' objects. Over time, they can query 'all books about Stoicism' and see a networked view of every related idea.",
      },
      {
        title: "Academic Study Workflow",
        description:
          "A law student defines 'Case', 'Statute', and 'Legal Principle' objects. When studying a new case, they link the 'Case' object to the relevant 'Statute' and 'Principle', creating a high-fidelity map of legal precedents that is far more useful than a linear notebook.",
      },
    ],
  },
  {
    name: "Affine",
    slug: "affine",
    description:
      "Affine is an open-source, privacy-focused alternative to Notion and Miro. It blends a document editor, a whiteboard, and a database into a single workspace, allowing users to switch between a linear doc view and a spatial canvas view instantly for the same content.",
    shortDescription: "Open-source workspace blending docs, whiteboards, and databases",
    url: "https://affine.pro",
    category: "productivity",
    subcategory: "Workspace",
    tags: [
      "open-source",
      "notion alternative",
      "whiteboard",
      "collaboration",
      "privacy",
      "pkm",
    ],
    pricing: "freemium",
    pricingDetails: "Free cloud tier. Self-hosting is free. Paid plans for teams.",
    featured: false,
    sponsored: false,
    features: [
      "Dual-mode view: Switch between 'Page' and 'Edgeless' (canvas) modes",
      "Database blocks for structured data management",
      "Real-time collaboration with team members",
      "Full open-source codebase with self-hosting options",
      "Privacy-first approach with local-first data storage",
      "Integrated AI assistant for drafting and brainstorming",
      "Rich media support and embeddable content",
    ],
    alternatives: ["notion-ai", "miro", "appflowy", "logseq", "obsidian"],
    addedDate: "2026-04-13",
    rating: 4.2,
    reviewCount: 321,
    pros: [
      "The Page-to-Canvas toggle is a game-changer for productivity",
      "Open-source and self-hostable — total control over data",
      "Strong privacy guarantees compared to proprietary tools",
      "Combines the best of Notion (docs) and Miro (canvas)",
      "Rapidly improving feature set and active community",
    ],
    cons: [
      "Performance can be uneven on very complex canvases",
      "UI can feel a bit cluttered when switching modes",
      "Less mature ecosystem of templates than Notion",
      "Mobile experience is still lagging behind desktop",
    ],
    bestFor: [
      "Privacy-conscious teams needing a shared workspace",
      "Visual thinkers who also need to write structured docs",
      "Open-source enthusiasts looking for a Notion replacement",
      "Product teams doing brainstorming and documentation in one place",
    ],
    useCaseScenarios: [
      {
        title: "Product Brainstorming to Spec",
        description:
          "A product team starts a new feature in 'Edgeless' mode, brainstorming ideas with sticky notes and arrows. Once the direction is clear, they toggle to 'Page' mode to write the detailed PRD, linking back to the visual map for context — all in the same file.",
      },
      {
        title: "Self-Hosted Knowledge Base",
        description:
          "A security-focused startup self-hosts Affine on their own servers to maintain a company wiki. They use the database features to track internal tools and the canvas mode to map out their network architecture, ensuring no sensitive data ever leaves their infrastructure.",
      },
      {
        title: "Personal Study Hub",
        description:
          "A student uses Affine to organize a course on History. They use the Page mode for detailed lecture notes and the Edgeless mode to create a visual timeline of events, allowing them to see the chronological flow and the conceptual links simultaneously.",
      },
    ],
  },
  {
    name: "Tana",
    slug: "tana",
    description:
      "Tana is a powerful 'knowledge graph' and task manager that uses a unique tagging system called 'Supertags'. By tagging a node, you instantly give it a set of fields and behaviors, turning a simple list of notes into a structured database without the overhead of traditional tables.",
    shortDescription: "Knowledge graph with powerful 'Supertags' for structured data",
    url: "https://tana.ai",
    category: "productivity",
    subcategory: "Note Taking",
    tags: [
      "knowledge graph",
      "supertags",
      "pkm",
      "productivity",
      "structured data",
      "second brain",
    ],
    pricing: "paid",
    pricingDetails: "Paid plans available. Often requires an invite for early access.",
    featured: false,
    sponsored: false,
    features: [
      "Supertags: Define schemas for notes via tags",
      "Networked graph of ideas and tasks",
      "Powerful search and dynamic filtering",
      "Daily nodes for seamless capture",
      "AI-powered tagging and content synthesis",
      "Flexible layout and view options",
      "Deeply integrated task management within the graph",
    ],
    alternatives: ["notion-ai", "obsidian", "roam-research", "capacities", "logseq"],
    addedDate: "2026-04-13",
    rating: 4.8,
    reviewCount: 512,
    pros: [
      "Most powerful structured data system in the PKM space",
      "Supertags allow for instant transformation of notes into data",
      "Eliminates the need for separate databases and documents",
      "Incredibly flexible — can be a CRM, Task Manager, or Wiki",
      "High-efficiency workflow for power users",
    ],
    cons: [
      "Extremely steep learning curve — requires a mindset shift",
      "Invite-only or restricted access can be frustrating",
      "Not for users who want a simple, 'out-of-the-box' experience",
      "Cloud-only — no local-first/offline mode like Obsidian",
    ],
    bestFor: [
      "Power users who find other PKM tools too limiting",
      "People managing highly complex, interlinked data sets",
      "Entrepreneurs needing a flexible system for everything",
      "Anyone who loves the idea of a 'computable' knowledge base",
    ],
    useCaseScenarios: [
      {
        title: "Dynamic Project & Task Management",
        description:
          "A project manager uses a #task supertag with fields for 'Priority', 'Due Date', and 'Assignee'. They can now instantly view all tasks across 10 different projects in one consolidated list, filtered by priority, while still keeping the tasks in their original contextual notes.",
      },
      {
        title: "High-Fidelity Content Pipeline",
        description:
          "A content creator uses a #content-idea tag and a #published-post tag. They can move an idea through a pipeline by simply changing its tag, while the supertag ensures that each stage (Idea -> Draft -> Review -> Published) has the required fields and checklists.",
      },
      {
        title: "Personalized Research Database",
        description:
          "A researcher defines a #source supertag with fields for 'Author', 'URL', and 'Key Takeaway'. Every time they find a new paper, they tag it. Tana automatically organizes these into a searchable library where they can find all sources related to a specific 'Concept' tag instantly.",
      },
    ],
  },
];
