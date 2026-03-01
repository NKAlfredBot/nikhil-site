import { NextResponse } from "next/server";
import { getAllContent } from "@/lib/content";
import { generateJsonFeed } from "@/lib/feed";

export async function GET() {
  const items = getAllContent();
  const feed = generateJsonFeed({
    title: "Nikhil Kumar",
    description: "Everything from Nikhil Kumar",
    feedUrl: "/feed",
    items,
  });
  return NextResponse.json(feed, {
    headers: { "Content-Type": "application/feed+json" },
  });
}
