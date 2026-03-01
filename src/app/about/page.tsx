export default function About() {
  return (
    <>
      <div className="page-header">
        <h1>About</h1>
        <p>Biography · Context · Disclaimers</p>
      </div>

      <div className="mt-12">
        <div className="component-label">The Biographical Sketch</div>
        
        <div 
          className="space-y-4 leading-relaxed" 
          style={{ 
            color: "var(--dfw-text-secondary)",
            textAlign: "justify",
            hyphens: "auto"
          }}
        >
          <p>
            Nikhil is the co-founder of <a href="https://5x5.studio" target="_blank" rel="noopener noreferrer">5x5 Collective</a> and an artist-in-residence at <a href="https://www.blackbrickproject.com/studios" target="_blank" rel="noopener noreferrer">Black Brick Project</a> in Brooklyn, NY.
          </p>
          <p>
            He splits his time between the heart of New York City, the Lower East Side, and the middle of the woods in the Catskill mountains—a geographic schizophrenia that mirrors the conceptual one between technology and nature, systems and organisms, the digital and the biological.
          </p>
          <p>
            He enjoys most things in life, but loud chewing noises drive him insane. This detail is included not because it's particularly revealing but because most "About" pages are so carefully curated that they end up revealing nothing at all.
          </p>
          <p>
            He likes to learn how to create in the mediums he consumes—hence his internet moniker, the "Fullstack_Human." The underscore is load-bearing. Without it, the phrase could be mistaken for aspirational self-help jargon rather than a technical joke about software architecture that also happens to be a statement about interdisciplinary practice.
          </p>
          <p>
            Nikhil is a graduate of NYU's Interactive Telecommunications Program at the Tisch School of the Arts. While he enjoyed exploring many technical and conceptual domains at ITP, he spent more of his time with the emerging field of biodesign—a discipline that sits at the uncomfortable intersection of art, science, and ethics.
          </p>
          <p>
            Nikhil has worked as a chef, teacher, in various sides of the software world, and collected many other seemingly disparate experiences over the years. These experiences have deeply informed both 5x5 Collective and his approach to work, though exactly <em>how</em> they've informed it remains difficult to articulate—which is perhaps the point.
          </p>
          <p>
            He only speaks in 3rd person while writing "About Me" pages, promise.
          </p>
        </div>

        <div 
          className="mt-8 pt-6 border-t" 
          style={{ 
            borderColor: "var(--color-border)", 
            borderStyle: "dashed" 
          }}
        >
          <p 
            className="text-sm leading-relaxed" 
            style={{ 
              color: "var(--dfw-text-tertiary)",
              fontStyle: "italic",
              fontFamily: "'Inter', sans-serif"
            }}
          >
            The justified text alignment and serif typography are deliberate choices meant 
            to evoke the feel of printed biographical notes—the kind you'd find in the back 
            of a literary journal or on a dust jacket. Whether this aesthetic choice enhances 
            or detracts from readability on screen is an open question, though the author 
            suspects it might be both simultaneously.
          </p>
        </div>

        <div className="mt-8">
          <div className="component-label">Contact</div>
          <p 
            className="text-sm" 
            style={{ color: "var(--dfw-text-secondary)" }}
          >
            Email:{" "}
            <a 
              href="mailto:hello@nikhilkumar.com"
              style={{ 
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.9em"
              }}
            >
              hello@nikhilkumar.com
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
