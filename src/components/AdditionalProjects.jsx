"use client";

import { additionalProjects } from "@/data/projects";

export default function AdditionalProjects() {
  return (
    <section id="additional" className="section">
      <p className="section-label">Additional Work</p>
      <h2 className="section-title">
        More engineering{" "}
        <span className="text-accent">projects</span>
      </h2>
      <p className="section-subtitle" style={{ marginBottom: "2.5rem" }}>
        Complementary coursework and self-directed projects demonstrating breadth across thermal,
        structural, and materials engineering.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1rem",
        }}
      >
        {additionalProjects.map((project) => (
          <div key={project.id} className="card">
            <p
              className="mono"
              style={{
                fontSize: "0.68rem",
                color: "var(--accent)",
                letterSpacing: "0.08em",
                marginBottom: "0.5rem",
              }}
            >
              {project.date} — {project.context}
            </p>
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                lineHeight: 1.25,
                marginBottom: "0.75rem",
              }}
            >
              {project.title}
            </h3>
            <p
              className="mono"
              style={{
                fontSize: "0.82rem",
                color: "var(--accent)",
                fontWeight: 600,
                marginBottom: "0.75rem",
                lineHeight: 1.4,
              }}
            >
              {project.highlight}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
              {project.tools.map((t) => (
                <span key={t} className="tag" style={{ fontSize: "0.63rem" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
