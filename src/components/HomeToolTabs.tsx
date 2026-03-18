"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import ToolLogo from "@/components/ToolLogo";
import type { Tool } from "@/data/tools";

const tabs = [
  { id: "latest", label: "🆕 Latest" },
  { id: "trending", label: "🔥 Trending" },
  { id: "featured", label: "⭐ Featured" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const pricingLabels: Record<Tool["pricing"], string> = {
  free: "Free",
  freemium: "Freemium",
  paid: "Paid",
  "open-source": "Open Source",
};

const pricingStyles: Record<Tool["pricing"], string> = {
  free: "bg-emerald-500/10 text-emerald-300 border border-emerald-500/30",
  freemium: "bg-sky-500/10 text-sky-300 border border-sky-500/30",
  paid: "bg-amber-500/10 text-amber-300 border border-amber-500/30",
  "open-source": "bg-violet-500/10 text-violet-300 border border-violet-500/30",
};

function formatAddedDate(addedDate: string) {
  const added = new Date(addedDate);
  if (Number.isNaN(added.getTime())) return "Added recently";
  const now = new Date();
  const diffMs = now.getTime() - added.getTime();
  const days = Math.max(0, Math.floor(diffMs / (1000 * 60 * 60 * 24)));
  if (days === 0) return "Added today";
  if (days === 1) return "Added 1 day ago";
  return `Added ${days} days ago`;
}

interface HomeToolTabsProps {
  tools: Tool[];
  featuredTools: Tool[];
  categoryLabels: Record<string, string>;
}

export default function HomeToolTabs({ tools, featuredTools, categoryLabels }: HomeToolTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>("latest");

  const latestTools = useMemo(() => {
    return [...tools]
      .sort((a, b) => new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime())
      .slice(0, 9);
  }, [tools]);

  const trendingTools = useMemo(() => {
    return [...tools]
      .sort((a, b) => {
        const diff = (b.alternatives?.length ?? 0) - (a.alternatives?.length ?? 0);
        if (diff !== 0) return diff;
        return a.name.localeCompare(b.name);
      })
      .slice(0, 9);
  }, [tools]);

  const featuredSet = useMemo(() => featuredTools, [featuredTools]);

  const activeTools =
    activeTab === "latest" ? latestTools : activeTab === "trending" ? trendingTools : featuredSet;

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 mb-8">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition border ${
                isActive
                  ? "bg-white text-gray-900 border-white"
                  : "bg-gray-900 text-gray-300 border-gray-800 hover:border-gray-600"
              }`}
              aria-pressed={isActive}
              type="button"
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {activeTools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tool/${tool.slug}`}
            className="group rounded-2xl border border-gray-800 bg-gray-900/70 p-5 transition hover:border-blue-500/50 hover:bg-gray-900"
          >
            <div className="flex gap-4">
              <ToolLogo name={tool.name} url={tool.url} logoUrl={tool.logoUrl} size={48} />
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="font-semibold text-white truncate group-hover:text-blue-300 transition">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-1">{tool.shortDescription}</p>
                  </div>
                  <span className={`text-[11px] font-semibold px-2 py-1 rounded-full ${pricingStyles[tool.pricing]}`}>
                    {pricingLabels[tool.pricing]}
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                    {categoryLabels[tool.category] ?? tool.category}
                  </span>
                  {activeTab === "latest" && (
                    <span className="text-xs text-gray-500">{formatAddedDate(tool.addedDate)}</span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
