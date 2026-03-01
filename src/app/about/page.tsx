export default function About() {
  return (
    <div className="space-y-8">
      <header>
        <span className="label">About</span>
        <h1 className="text-3xl mt-2" style={{ fontWeight: 500 }}>Nikhil Kumar</h1>
      </header>
      <div className="space-y-5 leading-relaxed" style={{ maxWidth: "600px", color: "var(--color-muted)" }}>
        <p>
          Nikhil is the co-founder of{" "}
          <a href="https://5x5.studio" target="_blank" rel="noopener noreferrer">5x5 Collective</a>{" "}
          and an artist-in-residence at{" "}
          <a href="https://www.blackbrickproject.com/studios" target="_blank" rel="noopener noreferrer">Black Brick Project</a>{" "}
          in Brooklyn, NY.
        </p>
        <p>
          He splits his time between the heart of New York City, the Lower East Side,
          and the middle of the woods in the Catskill mountains.
        </p>
        <p>He enjoys most things in life, but loud chewing noises drive him insane.</p>
        <p>
          He likes to learn how to create in the mediums he consumes — hence his
          internet moniker, the &ldquo;Fullstack_Human.&rdquo;
        </p>
        <p>
          Nikhil is a graduate of NYU&rsquo;s Interactive Telecommunications Program at the
          Tisch School of the Arts. While he enjoyed exploring many technical and conceptual
          domains at ITP, he spent more of his time with the emerging field of biodesign.
        </p>
        <p>
          Nikhil has worked as a chef, teacher, in various sides of the software world,
          and collected many other seemingly disparate experiences over the years, which
          has deeply informed both 5x5 Collective and his approach to work.
        </p>
        <p style={{ fontStyle: "italic", color: "var(--color-faint)" }}>
          He only speaks in 3rd person while writing &ldquo;About Me&rdquo; pages, promise.
        </p>
      </div>
    </div>
  );
}
