import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gemini vs ChatGPT: Complete Comparison 2026",
  description:
    "Compare Google Gemini vs ChatGPT. Detailed analysis of Google integration, multimodal capabilities, pricing, accuracy, and which AI chatbot is best for your needs in 2026.",
  keywords: [
    "Gemini vs ChatGPT",
    "ChatGPT vs Gemini",
    "Google Gemini vs ChatGPT",
    "ChatGPT vs Google Gemini",
    "best AI chatbot 2026",
    "Google AI vs OpenAI",
    "Gemini or ChatGPT",
  ],
  alternates: {
    canonical: "https://aisotools.com/chatgpt-vs-gemini",
  },
};

export default function GeminiVsChatGPTPage() {
  redirect("/chatgpt-vs-gemini");
}
