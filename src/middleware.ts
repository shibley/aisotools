import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Redirect standalone static comparison pages to the dynamic /compare/ versions
 * to consolidate SEO and avoid duplicate content.
 */
const comparisonRedirects: Record<string, string> = {
  "/chatgpt-vs-claude": "/compare/chatgpt-vs-claude",
  "/chatgpt-vs-gemini": "/compare/chatgpt-vs-gemini",
  "/cursor-vs-github-copilot": "/compare/cursor-vs-github-copilot",
  "/midjourney-vs-dall-e": "/compare/dall-e-vs-midjourney",
  // Handle common reverse-order queries
  "/claude-vs-chatgpt": "/compare/chatgpt-vs-claude",
  "/gemini-vs-chatgpt": "/compare/chatgpt-vs-gemini",
  "/github-copilot-vs-cursor": "/compare/cursor-vs-github-copilot",
  "/dall-e-vs-midjourney": "/compare/dall-e-vs-midjourney",
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const redirect = comparisonRedirects[pathname];
  if (redirect) {
    const url = request.nextUrl.clone();
    url.pathname = redirect;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/chatgpt-vs-claude",
    "/chatgpt-vs-gemini",
    "/cursor-vs-github-copilot",
    "/midjourney-vs-dall-e",
    "/claude-vs-chatgpt",
    "/gemini-vs-chatgpt",
    "/github-copilot-vs-cursor",
    "/dall-e-vs-midjourney",
  ],
};
