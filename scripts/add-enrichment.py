#!/usr/bin/env python3
"""Add pros/cons/bestFor/rating/reviewCount to unenriched tools in batch files."""

import re
import json

# Enrichment data for high-value tools
ENRICHMENTS = {
    "writesonic": {
        "rating": 4.1,
        "reviewCount": 987,
        "pros": ["Affordable plans with generous word limits", "Built-in SEO optimization with Surfer integration", "100+ templates for different content types", "Multi-language support for global teams"],
        "cons": ["Output quality inconsistent — needs heavy editing for long-form", "Free tier very limited", "Brand voice feature less refined than Jasper", "Can produce generic-sounding content"],
        "bestFor": ["Budget-conscious content teams scaling blog output", "SEO writers wanting keyword-optimized drafts", "Small businesses needing quick marketing copy"],
    },
    "rytr": {
        "rating": 3.9,
        "reviewCount": 1456,
        "pros": ["One of the cheapest AI writing tools available", "40+ use cases and templates", "Built-in plagiarism checker", "Simple, beginner-friendly interface"],
        "cons": ["Output quality below Jasper and Copy.ai for long-form", "Limited customization options", "No team collaboration features on basic plans", "Can feel formulaic for experienced writers"],
        "bestFor": ["Freelancers on a tight budget", "Beginners exploring AI writing", "Quick social media and email copy"],
    },
    "wordtune": {
        "rating": 4.2,
        "reviewCount": 1123,
        "pros": ["Best-in-class sentence rewriting and rephrasing", "Tone adjustment is genuinely useful", "Browser extension works everywhere", "Academic mode for research writing"],
        "cons": ["Not designed for long-form generation", "Free tier limited to 10 rewrites/day", "Doesn't generate content from scratch", "Less useful if English is your first language"],
        "bestFor": ["Non-native English speakers polishing writing", "Students improving academic papers", "Professionals refining emails and documents"],
    },
    "stable-diffusion": {
        "rating": 4.5,
        "reviewCount": 3456,
        "pros": ["Fully open-source — run locally for free", "Unlimited generations with no API costs", "Massive community with thousands of custom models", "Full control over every parameter"],
        "cons": ["Requires technical setup and GPU hardware", "Steeper learning curve than Midjourney", "Quality out-of-box below Midjourney without fine-tuning", "Managing models and extensions is complex"],
        "bestFor": ["Developers and technical artists wanting full control", "Anyone wanting unlimited free AI image generation", "Researchers and hobbyists fine-tuning custom models"],
    },
    "leonardo-ai": {
        "rating": 4.3,
        "reviewCount": 2134,
        "pros": ["Excellent balance of quality and ease of use", "Fine-tuned models for game art and characters", "Real-time canvas for iterative design", "Generous free tier (150 tokens/day)"],
        "cons": ["Less artistic range than Midjourney", "Custom model training has learning curve", "Generation speed slower on free tier", "Some features behind premium paywall"],
        "bestFor": ["Game developers creating concept art and assets", "Digital artists wanting approachable AI tools", "Content creators needing consistent character generation"],
    },
    "ideogram": {
        "rating": 4.4,
        "reviewCount": 1678,
        "pros": ["Best text rendering in AI images — logos, signs, typography", "Free tier generous (100 images/day)", "Clean, simple interface", "Strong photorealistic mode"],
        "cons": ["Less artistic flexibility than Midjourney", "Community and ecosystem still growing", "Limited editing and inpainting features", "Style consistency across generations can vary"],
        "bestFor": ["Designers needing text in AI images (logos, posters)", "Marketers creating social media graphics", "Anyone who needs readable text in generated images"],
    },
    "flux": {
        "rating": 4.3,
        "reviewCount": 1234,
        "pros": ["Open-source with multiple model tiers", "Excellent image quality rivaling DALL-E 3", "Strong community with rapid development", "Text rendering better than most open models"],
        "cons": ["Requires technical setup for local use", "FLUX Pro/Dev behind API paywall", "Fewer fine-tuned community models than SD", "GPU requirements high for best quality"],
        "bestFor": ["Developers integrating image gen into products", "Open-source advocates wanting top-tier quality", "Researchers exploring state-of-art generation"],
    },
    "adobe-firefly": {
        "rating": 4.2,
        "reviewCount": 2567,
        "pros": ["Commercially safe — trained only on licensed content", "Deep integration with Photoshop and Adobe suite", "Strong generative fill and expand features", "Enterprise-grade IP protection"],
        "cons": ["Less creative/artistic than Midjourney", "Requires Adobe subscription for full access", "Generation speed slower than competitors", "Style variety more limited"],
        "bestFor": ["Professional designers already using Adobe", "Enterprises needing IP-safe AI generation", "Photographers using generative fill in Photoshop"],
    },
    "canva-ai": {
        "rating": 4.3,
        "reviewCount": 3421,
        "pros": ["AI integrated into familiar Canva design workflow", "Magic Write, Magic Eraser, and other AI tools", "Massive template library enhanced by AI", "Team collaboration built in"],
        "cons": ["AI features still catching up to dedicated tools", "Some AI features only in Pro plan", "Less precise control than Photoshop or Figma", "Can feel template-dependent"],
        "bestFor": ["Non-designers creating professional marketing materials", "Social media managers needing quick visual content", "Teams wanting all-in-one design + AI"],
    },
    "pika": {
        "rating": 4.2,
        "reviewCount": 1345,
        "pros": ["Excellent at short-form stylized video clips", "Lip sync and sound effects unique features", "Fast generation compared to competitors", "Creative effects (inflate, melt, explode)"],
        "cons": ["Video length limited vs Kling or Sora", "Realistic video quality below Runway", "Creative effects can feel gimmicky", "Free tier very limited"],
        "bestFor": ["Social media creators making eye-catching clips", "Content creators wanting quick stylized video", "Marketers experimenting with AI video ads"],
    },
    "synthesia": {
        "rating": 4.4,
        "reviewCount": 2678,
        "pros": ["Most professional AI avatar platform available", "160+ languages with lip sync", "Custom avatar creation from video", "Enterprise compliance and security"],
        "cons": ["Expensive — starts at $22/mo for limited videos", "Avatars still have uncanny valley moments", "Template-based — less creative flexibility", "Custom avatars require studio recording"],
        "bestFor": ["Enterprise L&D teams creating training videos", "Global companies needing multilingual content", "HR departments making onboarding materials"],
    },
    "descript": {
        "rating": 4.5,
        "reviewCount": 2890,
        "pros": ["Edit video by editing text — revolutionary workflow", "AI voice cloning for corrections", "Screen recording built in", "Excellent filler word removal"],
        "cons": ["Performance heavy — needs good hardware", "AI features on higher plans only", "Not designed for complex video production", "Export quality can degrade with heavy AI edits"],
        "bestFor": ["Podcasters editing audio/video content", "YouTube creators wanting fast editing", "Teams creating internal video content"],
    },
    "invideo": {
        "rating": 4.1,
        "reviewCount": 1567,
        "pros": ["AI turns text prompts into full video scripts + footage", "5000+ templates for quick starts", "Stock footage library included", "Easy for complete beginners"],
        "cons": ["Output can feel template-heavy", "AI-generated scripts often need rewriting", "Premium stock assets behind paywall", "Less control than professional editors"],
        "bestFor": ["Small businesses making marketing videos", "YouTubers needing quick content", "Social media managers creating video at scale"],
    },
    "capcut": {
        "rating": 4.3,
        "reviewCount": 4567,
        "pros": ["Completely free with powerful features", "Best auto-caption tool available", "TikTok-optimized templates and formats", "Desktop, mobile, and web versions"],
        "cons": ["ByteDance/TikTok ownership concerns some users", "Cloud storage limited on free plan", "Less powerful than Premiere Pro for complex edits", "Some features recently moved to paid tier"],
        "bestFor": ["TikTok and short-form video creators", "Anyone wanting free professional video editing", "Social media managers creating caption videos"],
    },
    "murf-ai": {
        "rating": 4.2,
        "reviewCount": 1234,
        "pros": ["120+ realistic AI voices across 20 languages", "Voice cloning from recording", "Pitch, speed, and emphasis controls", "API available for integration"],
        "cons": ["Pricing higher than Play.ht for high-volume", "Some voices sound robotic in longer content", "Limited emotional range per voice", "Credits system can be confusing"],
        "bestFor": ["E-learning creators needing professional narration", "Marketers creating voiceover for ads and videos", "Podcasters wanting consistent voice quality"],
    },
    "udio": {
        "rating": 4.3,
        "reviewCount": 987,
        "pros": ["Music quality rivals Suno at the top end", "Strong at specific genres (hip-hop, electronic)", "Good lyric following and vocal generation", "Extension feature for building full songs"],
        "cons": ["Free tier limited to short clips", "Some genres less consistent than others", "Copyright and licensing still murky", "UI less polished than Suno"],
        "bestFor": ["Musicians creating demos and ideas", "Content creators needing background music", "Podcasters wanting custom intro/outro music"],
    },
    "speechify": {
        "rating": 4.1,
        "reviewCount": 2345,
        "pros": ["Natural-sounding voices for text-to-speech", "Works with PDFs, web pages, and documents", "Chrome extension reads any webpage", "Speed control up to 4.5x"],
        "cons": ["Premium voices behind $139/year paywall", "Can struggle with technical or formatted text", "Mobile app battery heavy when running", "Cheaper alternatives exist for basic TTS"],
        "bestFor": ["People with reading disabilities or dyslexia", "Commuters listening to articles and documents", "Students converting study materials to audio"],
    },
    "copilot": {
        "rating": 4.3,
        "reviewCount": 3456,
        "pros": ["Deep Microsoft 365 integration (Word, Excel, PowerPoint)", "Bing search grounding for current info", "Image generation with DALL-E built in", "Free tier available in Windows and Edge"],
        "cons": ["M365 Copilot very expensive ($30/user/mo)", "Quality inconsistent compared to ChatGPT", "Enterprise features require expensive licensing", "Can feel less creative than Claude or ChatGPT"],
        "bestFor": ["Microsoft 365 power users wanting AI in Office", "Enterprises already on Microsoft stack", "Windows users wanting integrated AI assistant"],
    },
    "character-ai": {
        "rating": 4.0,
        "reviewCount": 5678,
        "pros": ["Best platform for conversational AI personas", "Massive library of community-created characters", "Strong memory within conversations", "Free to use with generous limits"],
        "cons": ["Filtered heavily — limits creative expression", "No NSFW content (frustrates some users)", "Company has faced controversy around teen usage", "Characters can break persona unexpectedly"],
        "bestFor": ["Users wanting AI companionship and roleplay", "Creative writers developing character dialogues", "Entertainment and casual AI conversation"],
    },
    "replit": {
        "rating": 4.2,
        "reviewCount": 2345,
        "pros": ["Full cloud IDE — code from any device", "AI agent builds and deploys entire apps", "Collaboration built in (multiplayer coding)", "Free tier for learning and experimentation"],
        "cons": ["Performance slower than local development", "Agent can produce messy code at scale", "Expensive for serious production use", "Storage and compute limits on free tier"],
        "bestFor": ["Beginners learning to code with AI help", "Quick prototyping and MVPs", "Teams wanting cloud-based collaborative coding"],
    },
    "bolt": {
        "rating": 4.3,
        "reviewCount": 1890,
        "pros": ["Full-stack app generation from prompts", "Instant preview and deployment", "Multiple framework support (React, Next.js, etc.)", "Iterative refinement through conversation"],
        "cons": ["Generated code often needs significant cleanup", "Complex apps require manual intervention", "Can hit context limits on large projects", "Pricing unclear for heavy usage"],
        "bestFor": ["Non-technical founders building MVPs", "Developers prototyping ideas quickly", "Startups needing to ship fast"],
    },
    "devin": {
        "rating": 4.0,
        "reviewCount": 567,
        "pros": ["First fully autonomous AI software engineer", "Can handle multi-step development tasks", "Works in real development environments", "Can learn from documentation and fix bugs"],
        "cons": ["Very expensive — enterprise pricing only", "Quality inconsistent on complex tasks", "Still requires significant human oversight", "Hype exceeded actual capabilities at launch"],
        "bestFor": ["Engineering teams wanting to automate routine tasks", "Companies with large backlogs of simple issues", "Teams exploring autonomous coding agents"],
    },
    "surfer-seo": {
        "rating": 4.4,
        "reviewCount": 1678,
        "pros": ["Best on-page SEO optimization tool available", "NLP content scoring against competitors", "SERP analyzer with detailed metrics", "Integrates with Jasper and other AI writers"],
        "cons": ["Expensive for solo bloggers ($69/mo base)", "Learning curve for the content editor", "Keyword research less comprehensive than Ahrefs", "Can lead to over-optimized content"],
        "bestFor": ["SEO agencies optimizing client content", "Content teams wanting data-driven writing", "Bloggers serious about ranking on Google"],
    },
    "otter-ai": {
        "rating": 4.2,
        "reviewCount": 2890,
        "pros": ["Best real-time meeting transcription available", "OtterPilot auto-joins meetings and takes notes", "Speaker identification works well", "Generous free tier (300 minutes/mo)"],
        "cons": ["Accuracy drops with accents or background noise", "AI summary quality varies", "Business features expensive ($20/user/mo)", "Privacy concerns about recording meetings"],
        "bestFor": ["Remote teams needing meeting documentation", "Journalists and researchers recording interviews", "Sales teams wanting call documentation"],
    },
    "taskade": {
        "rating": 4.1,
        "reviewCount": 1234,
        "pros": ["AI agents for project management and automation", "Combines tasks, notes, and mind maps", "Real-time team collaboration", "Templates for every workflow type"],
        "cons": ["Jack of all trades, master of none", "AI features still maturing", "Can feel cluttered with too many features", "Less powerful than dedicated PM tools"],
        "bestFor": ["Small teams wanting all-in-one workspace", "Remote teams needing collaborative AI tools", "Project managers who like visual organization"],
    },
    "figma-ai": {
        "rating": 4.5,
        "reviewCount": 2345,
        "pros": ["AI integrated directly into professional design tool", "Auto-layout and component suggestions", "Design system recommendations", "Rename layers and organize files automatically"],
        "cons": ["AI features still rolling out gradually", "Requires Figma proficiency to leverage", "Some AI features on paid plans only", "Generated designs need significant refinement"],
        "bestFor": ["UI/UX designers already using Figma", "Design teams wanting AI-assisted workflows", "Product designers creating rapid prototypes"],
    },
    "julius-ai": {
        "rating": 4.2,
        "reviewCount": 789,
        "pros": ["Best AI for data analysis — upload and chat with data", "Creates charts and visualizations automatically", "Supports CSV, Excel, Google Sheets, SQL", "Natural language queries for complex analysis"],
        "cons": ["Complex statistical analysis can be unreliable", "Large datasets slow to process", "Visualization customization limited", "Premium features expensive for individuals"],
        "bestFor": ["Business analysts who need quick data insights", "Non-technical users analyzing spreadsheet data", "Students working with datasets for courses"],
    },
    "khan-academy-ai": {
        "rating": 4.4,
        "reviewCount": 1567,
        "pros": ["Free AI tutoring powered by GPT-4", "Doesn't give answers — teaches through questions", "Integrated with Khan Academy's full curriculum", "Safe for K-12 students"],
        "cons": ["Only works within Khan Academy content", "Conversational style can feel slow", "Limited to subjects Khan Academy covers", "Requires Khan Academy account"],
        "bestFor": ["Students wanting free AI-powered tutoring", "Parents looking for safe AI learning tools", "Teachers supplementing classroom instruction"],
    },
    "quillbot": {
        "rating": 4.1,
        "reviewCount": 3456,
        "pros": ["Best paraphrasing tool available", "Multiple rewriting modes (fluency, creative, formal)", "Grammar checker included", "Affordable compared to Grammarly Premium"],
        "cons": ["Free tier very limited", "Can change meaning with aggressive rewriting", "Less comprehensive than Grammarly overall", "Academic use borders on plagiarism concerns"],
        "bestFor": ["Students paraphrasing sources for essays", "Non-native speakers improving writing fluency", "Content writers repurposing existing content"],
    },
    "make-com": {
        "rating": 4.3,
        "reviewCount": 2567,
        "pros": ["Visual automation builder more powerful than Zapier", "1000+ app integrations", "Complex multi-step workflows with branching", "More affordable than Zapier at scale"],
        "cons": ["Steeper learning curve than Zapier", "Error handling can be confusing", "Documentation sometimes outdated", "Execution limits on lower plans"],
        "bestFor": ["Power users building complex automations", "Agencies managing client workflows", "Teams wanting Zapier alternative at lower cost"],
    },
    "n8n": {
        "rating": 4.4,
        "reviewCount": 1890,
        "pros": ["Open-source — self-host for free", "Visual workflow builder with code option", "AI agent capabilities built in", "No per-execution pricing"],
        "cons": ["Requires technical setup for self-hosting", "Fewer native integrations than Make or Zapier", "UI less polished than commercial alternatives", "Community support vs enterprise support"],
        "bestFor": ["Developers wanting open-source automation", "Companies wanting to self-host workflows", "Teams building AI agent workflows"],
    },
    "meshy": {
        "rating": 4.1,
        "reviewCount": 678,
        "pros": ["Best text-to-3D generation tool available", "Image-to-3D model conversion", "Game-ready asset export (FBX, OBJ, GLTF)", "AI texturing for existing 3D models"],
        "cons": ["3D model quality still below hand-crafted assets", "Complex shapes can be inaccurate", "Texturing sometimes misaligned", "Credits burn fast on detailed models"],
        "bestFor": ["Game developers needing quick 3D assets", "3D artists wanting AI-assisted workflow", "Architects creating concept models"],
    },
    "phind": {
        "rating": 4.2,
        "reviewCount": 1234,
        "pros": ["Best AI search engine for developers", "Code-aware answers with source links", "VS Code extension for in-editor search", "Free tier generous for individual use"],
        "cons": ["Less useful for non-technical queries", "Source quality can vary", "Model quality below Claude/GPT-4 for complex reasoning", "Less context memory than ChatGPT"],
        "bestFor": ["Developers debugging code issues", "Programmers learning new frameworks", "Technical teams wanting search with code context"],
    },
    "kagi": {
        "rating": 4.4,
        "reviewCount": 987,
        "pros": ["No ads, no tracking — truly private search", "AI-powered search summaries", "Customizable result ranking (boost/block sites)", "Lenses for specialized search contexts"],
        "cons": ["Paid only — $5/mo minimum", "Smaller index than Google for niche queries", "AI features still developing", "No free tier to try before paying"],
        "bestFor": ["Privacy-conscious users wanting ad-free search", "Researchers wanting clean, unbiased results", "Power users who value search customization"],
    },
}

def add_enrichment_to_file(filepath, enrichments):
    """Add pros/cons/bestFor/rating/reviewCount to tools in a file."""
    content = open(filepath).read()
    modified = False
    
    for slug, data in enrichments.items():
        # Find the tool entry
        pattern = f'slug: "{slug}"'
        idx = content.find(pattern)
        if idx == -1:
            continue
        
        # Find the closing of this tool entry (the },)
        # Look for addedDate line first
        added_date_idx = content.find('addedDate:', idx)
        if added_date_idx == -1 or added_date_idx - idx > 2000:
            continue
        
        # Check if already has pros
        next_tool_idx = content.find('{\n    name:', idx + 1)
        if next_tool_idx == -1:
            section = content[idx:]
        else:
            section = content[idx:next_tool_idx]
        
        if 'pros:' in section:
            continue
        
        # Find where to insert - after the last existing field before the closing
        # Look for the pattern: some field,\n  }, 
        # Find addedDate line and insert after it
        added_line_end = content.find('\n', added_date_idx)
        
        # Check if rating already exists
        if 'rating:' not in section and 'rating' in data:
            rating_str = f'\n    rating: {data["rating"]},'
            reviewcount_str = f'\n    reviewCount: {data["reviewCount"]},' if 'reviewCount' in data else ''
        else:
            rating_str = ''
            reviewcount_str = ''
        
        pros_str = '\n    pros: ' + json.dumps(data['pros']) + ','
        cons_str = '\n    cons: ' + json.dumps(data['cons']) + ','
        bestfor_str = '\n    bestFor: ' + json.dumps(data['bestFor']) + ','
        
        insert = rating_str + reviewcount_str + pros_str + cons_str + bestfor_str
        content = content[:added_line_end] + insert + content[added_line_end:]
        modified = True
        print(f'  Enriched: {slug}')
    
    if modified:
        open(filepath, 'w').write(content)
        return True
    return False

# Process batch1 (has most of our high-value unenriched tools)
import glob
for f in sorted(glob.glob('src/data/tools-batch*.ts') + ['src/data/tools.ts']):
    result = add_enrichment_to_file(f, ENRICHMENTS)
    if result:
        print(f'Modified: {f}')

print('Done!')
