"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <div style={{ position: "absolute", inset: 0, background: "transparent" }} />,
});

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* 3D Canvas */}
      <div className="hero-canvas">
        <HeroScene />
      </div>

      {/* Gradient Orb */}
      <div className="hero-gradient" />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "8rem 1.5rem 4rem",
          width: "100%",
        }}
      >
        <div style={{ maxWidth: 720 }}>
          {/* Overline */}
          <p
            className="mono"
            style={{
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "1.25rem",
            }}
          >
            MSc Mechanical Engineering Design, University of Manchester
          </p>

          {/* Name */}
          <h1
            className="heading-xl"
            style={{ marginBottom: "1.5rem" }}
          >
            Yash{" "}
            <span style={{ color: "var(--accent)" }}>Jamine</span>
          </h1>

          {/* Positioning Statement */}
          <p
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
              color: "var(--muted)",
              lineHeight: 1.7,
              maxWidth: 600,
              marginBottom: "2.5rem",
            }}
          >
            I design, simulate, test, and optimise mechanical systems. I also build
            AI tools that make the entire process faster, safer, and more precise.
          </p>

          {/* Capability Tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              marginBottom: "2.5rem",
            }}
          >
            {[
              "FEA & CFD",
              "Digital Twins",
              "Machine Learning",
              "Composites",
              "Metaheuristic Optimisation",
              "Experimental Testing",
            ].map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="#projects" className="btn-primary">
              View Projects ↓
            </a>
            <a href="#contact" className="btn-ghost">
              Get in Touch
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            opacity: 0.4,
          }}
        >
          <span className="mono" style={{ fontSize: "0.65rem", letterSpacing: "0.1em" }}>
            SCROLL
          </span>
          <div
            style={{
              width: 1,
              height: 32,
              background: "var(--accent)",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scaleY(0.6); }
          50% { opacity: 1; transform: scaleY(1); }
        }
      `}</style>
    </section>
  );
}
