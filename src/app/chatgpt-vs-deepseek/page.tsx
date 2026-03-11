import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChatGPT vs DeepSeek: Complete Comparison 2026",
  description:
    "Compare ChatGPT vs DeepSeek R1. OpenAI's paid AI vs the free open-source challenger — pricing, reasoning, coding, features, and which AI chatbot to choose in 2026.",
  keywords: [
    "ChatGPT vs DeepSeek",
    "DeepSeek vs ChatGPT",
    "GPT-4o vs DeepSeek R1",
    "ChatGPT vs DeepSeek comparison",
    "best AI chatbot 2026",
    "free AI vs ChatGPT",
    "ChatGPT or DeepSeek",
  ],
  alternates: {
    canonical: "https://aisotools.com/deepseek-vs-chatgpt",
  },
};

export default function ChatGPTvsDeepSeekPage() {
  redirect("/deepseek-vs-chatgpt");
}
