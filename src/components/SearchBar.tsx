"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";
import { tools } from "@/data/tools";

interface SearchResult {
  name: string;
  slug: string;
  shortDescription: string;
  category: string;
  pricing: string;
}

export default function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const search = useCallback((q: string) => {
    if (q.length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const lower = q.toLowerCase();
    const matched = tools
      .filter(
        (t) =>
          t.name.toLowerCase().includes(lower) ||
          t.shortDescription.toLowerCase().includes(lower) ||
          t.tags.some((tag) => tag.toLowerCase().includes(lower)) ||
          t.category.toLowerCase().includes(lower)
      )
      .slice(0, 8)
      .map((t) => ({
        name: t.name,
        slug: t.slug,
        shortDescription: t.shortDescription,
        category: t.category,
        pricing: t.pricing,
      }));

    setResults(matched);
    setIsOpen(matched.length > 0);
    setSelectedIndex(-1);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => search(query), 150);
    return () => clearTimeout(timer);
  }, [query, search]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!isOpen) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0 && results[selectedIndex]) {
        router.push(`/tool/${results[selectedIndex].slug}`);
        setIsOpen(false);
        setQuery("");
      }
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  }

  function navigateToTool(slug: string) {
    router.push(`/tool/${slug}`);
    setIsOpen(false);
    setQuery("");
  }

  const pricingColors: Record<string, string> = {
    free: "text-green-400",
    freemium: "text-blue-400",
    paid: "text-orange-400",
    "open-source": "text-purple-400",
  };

  return (
    <div ref={wrapperRef} className="relative w-full max-w-lg">
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => query.length >= 2 && results.length > 0 && setIsOpen(true)}
        onKeyDown={handleKeyDown}
        placeholder="Search AI tools..."
        className="w-full bg-gray-800/80 border border-gray-700 rounded-xl px-5 py-4 text-base sm:text-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />
      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">🔍</span>

      {isOpen && (
        <div className="absolute z-50 top-full mt-2 w-full bg-gray-900 border border-gray-700 rounded-xl shadow-2xl overflow-hidden">
          {results.map((r, i) => (
            <button
              key={r.slug}
              onClick={() => navigateToTool(r.slug)}
              className={`w-full text-left px-5 py-3 flex items-start gap-3 transition ${
                i === selectedIndex
                  ? "bg-blue-600/20 border-l-2 border-blue-500"
                  : "hover:bg-gray-800 border-l-2 border-transparent"
              }`}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white truncate">{r.name}</span>
                  <span className={`text-xs ${pricingColors[r.pricing] || "text-gray-400"}`}>
                    {r.pricing}
                  </span>
                </div>
                <p className="text-sm text-gray-400 truncate">{r.shortDescription}</p>
              </div>
              <span className="text-xs text-gray-600 mt-1 whitespace-nowrap">{r.category}</span>
            </button>
          ))}
          {query.length >= 2 && results.length === 0 && (
            <div className="px-5 py-4 text-gray-500 text-sm text-center">
              No tools found for &ldquo;{query}&rdquo;
            </div>
          )}
        </div>
      )}
    </div>
  );
}
