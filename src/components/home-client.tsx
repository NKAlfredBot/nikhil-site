"use client";

import { useState, useEffect } from "react";

interface ContentItem {
  slug: string;
  type: string;
  title: string;
  description?: string;
  date: string;
  body: string;
  tags?: string[];
}

export function HomeClient({ items }: { items: ContentItem[] }) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    if (window.location.hash) {
      const slug = window.location.hash.slice(1);
      setOpenSlug(slug);
      setTimeout(() => {
        document.getElementById(slug)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, []);

  function toggle(slug: string) {
    const next = openSlug === slug ? null : slug;
    setOpenSlug(next);
    if (next) {
      window.history.replaceState(null, "", `#${slug}`);
    } else {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }

  function share(slug: string) {
    const url = `${window.location.origin}${window.location.pathname}#${slug}`;
    navigator.clipboard.writeText(url);
    setCopied(slug);
    setTimeout(() => setCopied(null), 2000);
  }

  const writing = items.filter((i) => i.type === "writing");
  const projects = items.filter((i) => i.type === "projects");

  return (
    <div className="space-y-12">
      {/* Bio — left-aligned paragraph with footnotes */}
      <section>
        <p className="leading-relaxed" style={{ maxWidth: "580px" }}>
          I&rsquo;m a builder, writer, chef, and teacher working at the intersection of technology, art, and culture.
          I co-founded{" "}
          <a href="https://5x5.studio">5x5 Collective</a>
          <sup className="fn-marker">1</sup>{" "}
          and I&rsquo;m currently an artist-in-residence at{" "}
          <a href="https://www.blackbrickproject.com/studios">Black Brick Project</a>
          <sup className="fn-marker">2</sup>{" "}
          in Brooklyn. I graduated from NYU&rsquo;s Interactive Telecommunications Program
          <sup className="fn-marker">3</sup>{" "}
          where I explored biodesign, and before that I taught statistics and economics at
          KIPP Houston
          <sup className="fn-marker">4</sup>{" "}
          and helped open Pondicheri Caf&eacute; in the Flatiron District.
          <sup className="fn-marker">5</sup>{" "}
          I split my time between the Lower East Side and the Catskill mountains.
        </p>
        <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", color: "var(--color-faint)", marginTop: "20px", lineHeight: 2 }}>
          <div><span style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent)" }}>1</span> Cross-disciplinary collective — art, technology, biology, finance</div>
          <div><span style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent)" }}>2</span> Studio space in Brooklyn, NY</div>
          <div><span style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent)" }}>3</span> Tisch School of the Arts — &ldquo;ITP&rdquo;</div>
          <div><span style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent)" }}>4</span> Teach for America corps member, 2010</div>
          <div><span style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent)" }}>5</span> Where I became a professional chef before returning to tech</div>
        </div>
      </section>

      {/* Writing */}
      <section>
        <p className="label mb-5">Writing</p>
        {writing.map((item, i) => (
          <ItemRow key={item.slug} item={item} index={i} isOpen={openSlug === item.slug} onToggle={toggle} onShare={share} copied={copied} showYear={false} />
        ))}
      </section>

      {/* Work */}
      <section>
        <p className="label mb-5">Work</p>
        {projects.map((item, i) => (
          <ItemRow key={item.slug} item={item} index={i} isOpen={openSlug === item.slug} onToggle={toggle} onShare={share} copied={copied} showYear={true} />
        ))}
      </section>
    </div>
  );
}

function ItemRow({
  item,
  index,
  isOpen,
  onToggle,
  onShare,
  copied,
  showYear,
}: {
  item: ContentItem;
  index: number;
  isOpen: boolean;
  onToggle: (slug: string) => void;
  onShare: (slug: string) => void;
  copied: string | null;
  showYear: boolean;
}) {
  return (
    <div id={item.slug}>
      <button
        onClick={() => onToggle(item.slug)}
        className="w-full text-left flex items-baseline gap-3 py-2 group"
        style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-serif)", fontSize: "18px", color: "var(--color-text)" }}
      >
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: isOpen ? "var(--color-accent)" : "var(--color-faint)", minWidth: "28px" }}>
          [{index + 1}]
        </span>
        <span className="flex-1 group-hover:text-[var(--color-accent)] transition-colors">
          {item.title}
        </span>
        <time style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--color-faint)", flexShrink: 0 }}>
          {showYear
            ? new Date(item.date).getFullYear()
            : new Date(item.date).toLocaleDateString("en-US", { year: "numeric", month: "short" })}
        </time>
      </button>
      <div className={`unfurl ${isOpen ? "open" : ""}`}>
        <div className="unfurl-date">
          {new Date(item.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </div>
        <div className="unfurl-body" dangerouslySetInnerHTML={{ __html: renderMarkdown(item.body) }} />
        <button className="unfurl-share" onClick={() => onShare(item.slug)}>
          {copied === item.slug ? "✓ Copied" : "⤴ Share link"}
        </button>
      </div>
    </div>
  );
}

function renderMarkdown(md: string): string {
  return md
    .split("\n\n")
    .map((block) => {
      const t = block.trim();
      if (!t) return "";
      if (t.startsWith("### ")) return `<h3 style="font-size:1.05rem;font-weight:500;margin:1.2em 0 0.4em">${inline(t.slice(4))}</h3>`;
      if (t.startsWith("## ")) return `<h2 style="font-size:1.15rem;font-weight:500;margin:1.4em 0 0.4em">${inline(t.slice(3))}</h2>`;
      if (t.startsWith("# ")) return `<h2 style="font-size:1.2rem;font-weight:500;margin:1.4em 0 0.4em">${inline(t.slice(2))}</h2>`;
      if (t.startsWith("- ") || t.startsWith("* ")) {
        const items = t.split("\n").map((l) => `<li>${inline(l.replace(/^[-*]\s+/, ""))}</li>`).join("");
        return `<ul style="padding-left:1.5em;list-style:disc;margin-bottom:1em">${items}</ul>`;
      }
      return `<p>${inline(t.replace(/\n/g, " "))}</p>`;
    })
    .join("\n");
}

function inline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, '<code style="font-family:var(--font-mono);font-size:0.85em;background:var(--color-card-bg);padding:1px 4px;border-radius:2px">$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}
