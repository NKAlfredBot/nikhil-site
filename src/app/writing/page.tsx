import Link from "next/link";
import { getContent } from "@/lib/content";

export default function Writing() {
  const posts = getContent("writing");

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl" style={{ fontWeight: 500 }}>Writing</h1>
        <p className="mt-2" style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--color-muted)" }}>
          Essays on technology, art, culture, and the spaces between.
        </p>
      </header>

      <div className="space-y-4">
        {posts.map((post, i) => (
          <Link
            key={post.slug}
            href={post.external_url || `/writing/${post.slug}`}
            className="flex items-baseline gap-4 no-underline group py-1"
          >
            <span className="fn-number">[{i + 1}]</span>
            <div className="flex-1">
              <span className="group-hover:text-[var(--color-accent)] transition-colors" style={{ color: "var(--color-text)" }}>
                {post.title}
              </span>
              {post.description && (
                <p className="mt-1" style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--color-muted)" }}>
                  {post.description}
                </p>
              )}
            </div>
            <time style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-faint)", flexShrink: 0 }}>
              {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short" })}
            </time>
          </Link>
        ))}
      </div>
    </div>
  );
}
