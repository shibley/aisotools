"use client";

import { useState } from "react";

interface NewsletterBannerProps {
  categoryName?: string;
}

export default function NewsletterBanner({ categoryName }: NewsletterBannerProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage("You're in! Check your inbox 🎉");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  const heading = categoryName
    ? `Stay updated on ${categoryName} tools — join our weekly newsletter`
    : "📬 Get the best new AI tools delivered weekly";

  if (status === "success") {
    return (
      <div className="relative rounded-xl p-[1px] bg-gradient-to-r from-blue-500/50 to-purple-500/50 my-8">
        <div className="bg-gray-950 rounded-xl p-6 text-center">
          <p className="text-green-400 font-medium">{message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative rounded-xl p-[1px] bg-gradient-to-r from-blue-500/50 to-purple-500/50 my-8">
      <div className="bg-gray-950 rounded-xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white">{heading}</h3>
            <p className="text-gray-400 text-sm mt-1">
              One concise email with fresh launches, trending picks, and featured standouts.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@company.com"
              className="w-full sm:w-64 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition whitespace-nowrap"
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        </div>
        {status === "error" && (
          <p className="text-red-400 text-xs mt-2 text-center md:text-right">{message}</p>
        )}
      </div>
    </div>
  );
}
