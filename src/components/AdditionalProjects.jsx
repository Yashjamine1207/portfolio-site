"use client";

import { useState } from "react";
import { additionalProjects } from "@/data/projects";

export default function AdditionalProjects() {
  const [openId, setOpenId] = useState(null);

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
        {additionalProjects.map((project) => {
          if (!project.problem) {
            return (
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
                  {project.date} | {project.context}
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
            );
          }

          const isOpen = openId === project.id;
          return (
            <div key={project.id} className="card" style={{ padding: 0 }}>
              <div
                onClick={() => setOpenId(isOpen ? null : project.id)}
                style={{ padding: "1.75rem", cursor: "pointer" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <p
                    className="mono"
                    style={{
                      fontSize: "0.68rem",
                      color: "var(--accent)",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {project.date} | {project.context}
                  </p>
                  <span
                    style={{
                      fontSize: "1.2rem",
                      color: "var(--accent)",
                      transition: "transform 0.3s ease",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      flexShrink: 0,
                      lineHeight: 1,
                    }}
                  >
                    +
                  </span>
                </div>
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

              <div className={`project-detail ${isOpen ? "open" : ""}`}>
                <div
                  style={{
                    borderTop: "1px solid var(--border-color)",
                    paddingTop: "1.5rem",
                    display: "grid",
                    gap: "1.5rem",
                  }}
                >
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem" }}>
                    <div>
                      <p style={{ fontSize: "0.7rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.25rem" }}>Role</p>
                      <p style={{ fontSize: "0.85rem", fontWeight: 600 }}>{project.role}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: "0.7rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.25rem" }}>Team</p>
                      <p style={{ fontSize: "0.85rem", fontWeight: 600 }}>{project.team}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: "0.7rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.25rem" }}>Domain</p>
                      <p style={{ fontSize: "0.85rem", fontWeight: 600 }}>{project.domain}</p>
                    </div>
                  </div>

                  <div>
                    <p style={{ fontSize: "0.72rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--accent)", marginBottom: "0.5rem" }}>Problem</p>
                    <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.7 }}>{project.problem}</p>
                  </div>

                  <div>
                    <p style={{ fontSize: "0.72rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--accent)", marginBottom: "0.5rem" }}>Approach</p>
                    <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.7 }}>{project.approach}</p>
                  </div>

                  <div>
                    <p style={{ fontSize: "0.72rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--accent)", marginBottom: "0.5rem" }}>Methods</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                      {project.methods.map((m) => (
                        <span key={m} className="tag">{m}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p style={{ fontSize: "0.72rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--accent)", marginBottom: "0.75rem" }}>Quantified Results</p>
                    <div className="result-grid">
                      {project.results.map((r, i) => (
                        <div key={i} className="result-row">
                          <span style={{ color: "var(--muted)" }}>{r.metric}</span>
                          <span className="mono" style={{ color: "var(--accent)", fontWeight: 700, fontSize: "0.82rem" }}>{r.value}</span>
                          <span className="mono" style={{ fontSize: "0.72rem", color: "var(--muted)", opacity: 0.7 }}>target: {r.target}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ background: "var(--accent-dim)", borderRadius: 12, padding: "1.25rem", borderLeft: "3px solid var(--accent)" }}>
                    <p style={{ fontSize: "0.72rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--accent)", marginBottom: "0.4rem" }}>
                      Engineering Insight
                    </p>
                    <p style={{ fontSize: "0.88rem", color: "var(--foreground)", lineHeight: 1.7 }}>{project.impact}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
