"use client";

import { useState } from "react";

function NewsletterForm() {
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

  if (status === "success") {
    return <p className="text-green-400 text-sm">{message}</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 max-w-xs">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@email.com"
        required
        className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm min-w-0 flex-1 focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white px-3 py-2 rounded-lg text-sm font-medium transition shrink-0"
      >
        {status === "loading" ? "..." : "Join"}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-xs mt-1">{message}</p>
      )}
    </form>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="font-semibold text-white mb-3">AISO Tools</h3>
            <p className="text-gray-400 text-sm">
              Discover the best AI tools for every task. Updated daily.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Browse</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="/category" className="hover:text-white transition">
                  All Categories
                </a>
              </li>
              <li>
                <a href="/category/writing" className="hover:text-white transition">
                  AI Writing
                </a>
              </li>
              <li>
                <a href="/category/coding" className="hover:text-white transition">
                  AI Coding
                </a>
              </li>
              <li>
                <a href="/category/image-generation" className="hover:text-white transition">
                  AI Image
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="/about" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="/advertise" className="hover:text-white transition">
                  Advertise
                </a>
              </li>
              <li>
                <a href="/submit" className="hover:text-white transition">
                  Submit Tool
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Our Projects</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="https://apistatuscheck.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  API Status Check
                </a>
              </li>
              <li>
                <a
                  href="https://www.usersrated.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  UsersRated
                </a>
              </li>
              <li>
                <a
                  href="https://www.4dayjob.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  4DayJob
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-3">
              Get the best new AI tools in your inbox weekly.
            </p>
            <NewsletterForm />
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} AISO Tools. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
