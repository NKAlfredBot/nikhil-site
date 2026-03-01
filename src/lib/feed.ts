import { ContentItem } from "./content";

const SITE_URL = "https://nikhilkumar.me";
const AUTHOR = { name: "Nikhil Kumar", url: SITE_URL };

interface FeedOptions {
  title: string;
  description: string;
  feedUrl: string;
  items: ContentItem[];
}

export function generateJsonFeed({ title, description, feedUrl, items }: FeedOptions) {
  return {
    version: "https://jsonfeed.org/version/1.1",
    title,
    home_page_url: SITE_URL,
    feed_url: `${SITE_URL}${feedUrl}`,
    description,
    authors: [AUTHOR],
    language: "en-US",
    items: items.map((item) => ({
      id: `${SITE_URL}/${item.type === "writing" ? "writing" : "work"}/${item.slug}`,
      url: item.external_url || `${SITE_URL}/${item.type === "writing" ? "writing" : "work"}/${item.slug}`,
      title: item.title,
      summary: item.description,
      content_text: item.body.slice(0, 500),
      date_published: new Date(item.date).toISOString(),
      tags: item.tags,
    })),
  };
}
