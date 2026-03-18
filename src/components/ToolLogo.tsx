"use client";

import { useState } from "react";

interface ToolLogoProps {
  name: string;
  url: string;
  logoUrl?: string;
  size?: number;
  className?: string;
}

function getDomain(url: string): string {
  try {
    return new URL(url).hostname;
  } catch {
    return url.replace(/^https?:\/\//, "").split("/")[0];
  }
}

export default function ToolLogo({ name, url, logoUrl, size = 32, className = "" }: ToolLogoProps) {
  const [error, setError] = useState(false);
  const domain = getDomain(url);

  // Priority: logoUrl > Google favicon API > fallback initial
  const src = logoUrl
    ? logoUrl
    : `https://www.google.com/s2/favicons?domain=${domain}&sz=${size * 2}`;

  if (error) {
    // Fallback: colored initial
    const colors = [
      "bg-blue-500/20 text-blue-400",
      "bg-purple-500/20 text-purple-400",
      "bg-emerald-500/20 text-emerald-400",
      "bg-orange-500/20 text-orange-400",
      "bg-pink-500/20 text-pink-400",
      "bg-cyan-500/20 text-cyan-400",
      "bg-amber-500/20 text-amber-400",
    ];
    const colorIndex = name.charCodeAt(0) % colors.length;

    return (
      <div
        className={`inline-flex items-center justify-center rounded-lg ${colors[colorIndex]} ${className}`}
        style={{ width: size, height: size, minWidth: size }}
      >
        <span className="font-bold" style={{ fontSize: size * 0.45 }}>
          {name.charAt(0).toUpperCase()}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center justify-center rounded-lg bg-gray-800/50 overflow-hidden flex-shrink-0 ${className}`}
      style={{ width: size, height: size, minWidth: size }}
    >
      <img
        src={src}
        alt={`${name} logo`}
        width={size}
        height={size}
        className="object-contain"
        style={{ maxWidth: size, maxHeight: size }}
        onError={() => setError(true)}
        loading="lazy"
      />
    </div>
  );
}
