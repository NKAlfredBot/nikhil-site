import { NextResponse } from "next/server";
import { getContent } from "@/lib/content";
import { generateJsonFeed } from "@/lib/feed";

export async function GET() {
  const items = getContent("writing");
  const feed = generateJsonFeed({
    title: "Nikhil Kumar — Essays",
    description: "Essays by Nikhil Kumar",
    feedUrl: "/feed/essays",
    items,
  });
  return NextResponse.json(feed, {
    headers: { "Content-Type": "application/feed+json" },
  });
}
