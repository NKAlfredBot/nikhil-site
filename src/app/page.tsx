import { getAllContent } from "@/lib/content";
import { HomeClient } from "@/components/home-client";

export default function Home() {
  const items = getAllContent().map((item) => ({
    slug: item.slug,
    type: item.type,
    title: item.title,
    description: item.description,
    date: item.date,
    body: item.body,
    tags: item.tags,
  }));

  return <HomeClient items={items} />;
}
