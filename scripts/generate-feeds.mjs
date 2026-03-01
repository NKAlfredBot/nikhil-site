import fs from "fs";
import path from "path";

const SITE_URL = "https://nikhilkumar.media";
const AUTHOR = { name: "Nikhil Kumar", url: SITE_URL };

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };
  const data = {};
  for (const line of match[1].split("\n")) {
    const m = line.match(/^(\w[\w_]*)\s*:\s*(.+)$/);
    if (m) {
      let val = m[2].trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'")))
        val = val.slice(1, -1);
      if (val.startsWith("[")) {
        try { data[m[1]] = JSON.parse(val); continue; } catch {}
      }
      data[m[1]] = val;
    }
  }
  return { data, content: match[2] };
}

function getContent(type) {
  const dir = path.join("src/content", type);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith(".md"))
    .map(f => {
      const { data, content } = parseFrontmatter(fs.readFileSync(path.join(dir, f), "utf-8"));
      return {
        slug: f.replace(/\.md$/, ""),
        type,
        title: data.title || f,
        description: data.description,
        date: data.date || "2026-01-01",
        tags: data.tags,
        external_url: data.external_url,
        body: content,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

function makeFeed(title, description, feedUrl, items) {
  return {
    version: "https://jsonfeed.org/version/1.1",
    title,
    home_page_url: SITE_URL,
    feed_url: `${SITE_URL}${feedUrl}`,
    description,
    authors: [AUTHOR],
    language: "en-US",
    items: items.map(item => ({
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

const writing = getContent("writing");
const projects = getContent("projects");
const all = [...writing, ...projects].sort((a, b) => new Date(b.date) - new Date(a.date));

const outDir = "public/feed";
fs.mkdirSync(outDir, { recursive: true });

fs.writeFileSync(path.join(outDir, "index.json"), JSON.stringify(makeFeed("Nikhil Kumar", "Everything from Nikhil Kumar", "/feed/index.json", all), null, 2));
fs.writeFileSync(path.join(outDir, "essays.json"), JSON.stringify(makeFeed("Nikhil Kumar — Essays", "Essays by Nikhil Kumar", "/feed/essays.json", writing), null, 2));
fs.writeFileSync(path.join(outDir, "projects.json"), JSON.stringify(makeFeed("Nikhil Kumar — Projects", "Projects by Nikhil Kumar", "/feed/projects.json", projects), null, 2));

console.log(`Generated feeds: ${all.length} items (${writing.length} essays, ${projects.length} projects)`);
