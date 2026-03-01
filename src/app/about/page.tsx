export default function About() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-medium tracking-tight">About</h1>
      <div className="space-y-4 leading-relaxed" style={{ color: "var(--color-muted)" }}>
        <p>
          {/* TODO: Port bio from Squarespace */}
          Nikhil Kumar is a builder, writer, and artist working at the intersection of
          technology, art, and culture.
        </p>
      </div>
    </div>
  );
}
