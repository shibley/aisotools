"use client";

import {
  Pen,
  Image,
  Video,
  Music,
  MessageCircle,
  Code2,
  TrendingUp,
  Zap,
  Palette,
  BarChart3,
  GraduationCap,
  Briefcase,
  HeartPulse,
  Search,
  Workflow,
  Box,
  Bot,
  Shield,
  Globe,
  Building2,
  Database,
} from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { ComponentType } from "react";

interface IconConfig {
  icon: ComponentType<LucideProps>;
  color: string;   // text color
  bg: string;      // background
}

const iconConfig: Record<string, IconConfig> = {
  writing: {
    icon: Pen,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  "image-generation": {
    icon: Image,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  video: {
    icon: Video,
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  audio: {
    icon: Music,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  chatbots: {
    icon: MessageCircle,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  coding: {
    icon: Code2,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  marketing: {
    icon: TrendingUp,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  productivity: {
    icon: Zap,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
  design: {
    icon: Palette,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
  data: {
    icon: BarChart3,
    color: "text-teal-400",
    bg: "bg-teal-500/10",
  },
  education: {
    icon: GraduationCap,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  business: {
    icon: Briefcase,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  healthcare: {
    icon: HeartPulse,
    color: "text-rose-400",
    bg: "bg-rose-500/10",
  },
  search: {
    icon: Search,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  automation: {
    icon: Workflow,
    color: "text-sky-400",
    bg: "bg-sky-500/10",
  },
  "3d": {
    icon: Box,
    color: "text-fuchsia-400",
    bg: "bg-fuchsia-500/10",
  },
  "agent-infrastructure": {
    icon: Bot,
    color: "text-sky-400",
    bg: "bg-sky-500/10",
  },
  "security-testing": {
    icon: Shield,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  seo: {
    icon: Globe,
    color: "text-lime-400",
    bg: "bg-lime-500/10",
  },
  "real-estate": {
    icon: Building2,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  "data-extraction": {
    icon: Database,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
};

interface CategoryIconProps {
  slug: string;
  size?: number;
  className?: string;
}

export default function CategoryIcon({ slug, size = 32, className = "" }: CategoryIconProps) {
  const config = iconConfig[slug];
  if (!config) return null;

  const { icon: Icon, color, bg } = config;

  return (
    <div className={`inline-flex items-center justify-center rounded-xl ${bg} p-2.5 ${className}`}>
      <Icon size={size} className={color} strokeWidth={1.5} />
    </div>
  );
}

export { iconConfig };
