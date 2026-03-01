import fs from "fs";
import path from "path";

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

const all = [...getContent("writing"), ...getContent("projects")];

fs.mkdirSync("public/api", { recursive: true });
fs.writeFileSync("public/api/content.json", JSON.stringify(all, null, 2));
console.log(`Generated content.json: ${all.length} items`);
