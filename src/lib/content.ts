import fs from "fs";
import path from "path";

export type ContentType = "writing" | "projects";

export interface ContentItem {
  slug: string;
  type: ContentType;
  title: string;
  description?: string;
  date: string;
  tags?: string[];
  external_url?: string;
  body: string;
}

function parseFrontmatter(raw: string): { data: Record<string, string | string[]>; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const data: Record<string, string | string[]> = {};
  for (const line of match[1].split("\n")) {
    const m = line.match(/^(\w[\w_]*)\s*:\s*(.+)$/);
    if (m) {
      let val = m[2].trim();
      // Handle quoted strings
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      // Handle arrays like ["a", "b"]
      if (val.startsWith("[")) {
        try {
          data[m[1]] = JSON.parse(val);
          continue;
        } catch { /* fall through */ }
      }
      data[m[1]] = val;
    }
  }
  return { data, content: match[2] };
}

const contentDir = path.join(process.cwd(), "src/content");

export function getContent(type: ContentType): ContentItem[] {
  const dir = path.join(contentDir, type);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((filename) => {
      const raw = fs.readFileSync(path.join(dir, filename), "utf-8");
      const { data, content } = parseFrontmatter(raw);
      return {
        slug: filename.replace(/\.mdx?$/, ""),
        type,
        title: (data.title as string) || filename,
        description: data.description as string | undefined,
        date: (data.date as string) || "2026-01-01",
        tags: data.tags as string[] | undefined,
        external_url: data.external_url as string | undefined,
        body: content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllContent(): ContentItem[] {
  return [...getContent("writing"), ...getContent("projects")].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
