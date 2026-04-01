import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit Your AI Tool — Get Listed Free",
  description:
    "Submit your AI tool to AISO Tools directory. Free basic listing. Featured placements available for maximum visibility.",
};

export default function SubmitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
