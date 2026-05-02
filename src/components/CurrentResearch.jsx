"use client";

import { currentResearch } from "@/data/tools";

export default function CurrentResearch() {
  return (
    <section id="research" className="section">
      <p className="section-label">Current Research</p>
      <h2 className="section-title">
        MSc Thesis:{" "}
        <span className="text-accent">Ongoing</span>
      </h2>

      <div
        className="card"
        style={{
          maxWidth: 900,
          marginTop: "2rem",
          borderLeft: "3px solid var(--accent)",
        }}
      >
        <div style={{ display: "grid", gap: "1.5rem" }}>
          {/* Header */}
          <div>
            <h3
              style={{
                fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                fontWeight: 700,
                lineHeight: 1.3,
                marginBottom: "0.5rem",
              }}
            >
              {currentResearch.title}
            </h3>
            <p className="mono" style={{ fontSize: "0.75rem", color: "var(--accent)" }}>
              {currentResearch.degree}, {currentResearch.university}
            </p>
            <p style={{ fontSize: "0.8rem", color: "var(--muted)", marginTop: "0.25rem" }}>
              Supervised by {currentResearch.supervisor} | {currentResearch.date}
            </p>
          </div>

          {/* Problem */}
          <div>
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--accent)",
                marginBottom: "0.5rem",
              }}
            >
              Research Problem
            </p>
            <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.7 }}>
              {currentResearch.problem}
            </p>
          </div>

          {/* Phases */}
          <div>
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--accent)",
                marginBottom: "0.75rem",
              }}
            >
              Research Phases
            </p>
            <div style={{ display: "grid", gap: "0.75rem" }}>
              {currentResearch.approach.map((phase, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    alignItems: "flex-start",
                  }}
                >
                  <div className="timeline-dot" />
                  <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.6, flex: 1 }}>
                    {phase}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Publication Target */}
          <div
            style={{
              background: "var(--accent-dim)",
              borderRadius: 10,
              padding: "1rem",
            }}
          >
            <p style={{ fontSize: "0.72rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--accent)", marginBottom: "0.35rem" }}>
              Publication Target
            </p>
            <p style={{ fontSize: "0.85rem", color: "var(--foreground)", lineHeight: 1.6 }}>
              {currentResearch.publication}
            </p>
          </div>

          {/* Tools */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
            {currentResearch.tools.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
