import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Common alternate slugs → canonical slugs
      { source: "/pricing/chatgpt-plus", destination: "/pricing/chatgpt", permanent: true },
      { source: "/pricing/jasper-ai", destination: "/pricing/jasper", permanent: true },
      { source: "/pricing/dall-e-3", destination: "/pricing/dall-e", permanent: true },
      { source: "/pricing/grammarly-ai", destination: "/pricing/grammarly", permanent: true },
      { source: "/pricing/github-copilot-x", destination: "/pricing/github-copilot", permanent: true },
      { source: "/pricing/notion-ai-2", destination: "/pricing/notion-ai", permanent: true },
      { source: "/pricing/stable-diffusion-xl", destination: "/pricing/stable-diffusion", permanent: true },
      { source: "/pricing/deepseek-ai", destination: "/pricing/deepseek", permanent: true },
      { source: "/pricing/claude-ai", destination: "/pricing/claude", permanent: true },
      { source: "/pricing/gemini-ai", destination: "/pricing/gemini", permanent: true },
      // Tool page alternates
      { source: "/tool/chatgpt-plus", destination: "/tool/chatgpt", permanent: true },
      { source: "/tool/jasper-ai", destination: "/tool/jasper", permanent: true },
      { source: "/tool/dall-e-3", destination: "/tool/dall-e", permanent: true },
      { source: "/tool/claude-ai", destination: "/tool/claude", permanent: true },
      { source: "/tool/gemini-ai", destination: "/tool/gemini", permanent: true },
      { source: "/tool/deepseek-ai", destination: "/tool/deepseek", permanent: true },
    ];
  },
};

export default nextConfig;
