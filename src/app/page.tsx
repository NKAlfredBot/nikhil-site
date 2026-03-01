export default function Home() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-medium tracking-tight">Nikhil Kumar</h1>
        <p className="mt-4 leading-relaxed" style={{ color: "var(--color-muted)" }}>
          {/* TODO: Pull bio from Squarespace */}
          Builder, writer, artist. Working at the intersection of technology, art, and culture.
        </p>
      </section>

      <section>
        <h2 className="text-sm font-medium uppercase tracking-wider" style={{ color: "var(--color-muted)" }}>
          Recent Writing
        </h2>
        <div className="mt-4 space-y-3">
          <p className="text-sm" style={{ color: "var(--color-muted)" }}>
            Essays coming soon — porting from Substack.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-sm font-medium uppercase tracking-wider" style={{ color: "var(--color-muted)" }}>
          Selected Work
        </h2>
        <div className="mt-4 space-y-3">
          <p className="text-sm" style={{ color: "var(--color-muted)" }}>
            Projects coming soon.
          </p>
        </div>
      </section>
    </div>
  );
}
