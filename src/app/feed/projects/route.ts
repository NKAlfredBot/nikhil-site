import { NextResponse } from "next/server";
import { getContent } from "@/lib/content";
import { generateJsonFeed } from "@/lib/feed";

export async function GET() {
  const items = getContent("projects");
  const feed = generateJsonFeed({
    title: "Nikhil Kumar — Projects",
    description: "Projects by Nikhil Kumar",
    feedUrl: "/feed/projects",
    items,
  });
  return NextResponse.json(feed, {
    headers: { "Content-Type": "application/feed+json" },
  });
}
