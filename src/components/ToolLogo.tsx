"use client";

import { useMemo, useState } from "react";

interface ToolLogoProps {
  name: string;
  url: string;
  logoUrl?: string;
  size?: number;
}

const fallbackColors = [
  "from-sky-500/40 to-blue-500/40",
  "from-emerald-500/40 to-teal-500/40",
  "from-amber-500/40 to-orange-500/40",
  "from-pink-500/40 to-rose-500/40",
  "from-violet-500/40 to-purple-500/40",
];

export default function ToolLogo({ name, url, logoUrl, size = 44 }: ToolLogoProps) {
  const domain = useMemo(() => {
    try {
      return new URL(url).hostname;
    } catch {
      return "";
    }
  }, [url]);

  const fallbackSrc = domain
    ? `https://www.google.com/s2/favicons?domain=${domain}&sz=64`
    : "";

  const [currentSrc, setCurrentSrc] = useState<string | null>(logoUrl || fallbackSrc || null);
  const [triedFallback, setTriedFallback] = useState(false);

  const initial = name?.trim()?.[0]?.toUpperCase() || "?";
  const colorIndex = (name?.charCodeAt(0) || 0) % fallbackColors.length;

  if (!currentSrc) {
    return (
      <div
        className={`flex items-center justify-center rounded-2xl bg-gradient-to-br ${fallbackColors[colorIndex]} text-white font-semibold shadow-inner`}
        style={{ width: size, height: size }}
        aria-label={`${name} logo`}
      >
        {initial}
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={`${name} logo`}
      width={size}
      height={size}
      className="rounded-2xl bg-gray-900 object-contain shadow-sm"
      onError={() => {
        if (!triedFallback && logoUrl && fallbackSrc) {
          setCurrentSrc(fallbackSrc);
          setTriedFallback(true);
        } else {
          setCurrentSrc(null);
        }
      }}
    />
  );
}
