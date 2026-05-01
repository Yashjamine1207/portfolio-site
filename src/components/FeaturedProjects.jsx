"use client";

import { useState } from "react";
import { featuredProjects } from "@/data/projects";

function ProjectCard({ project, isOpen, onToggle }) {
  return (
    <div className="card" style={{ padding: 0, overflow: "hidden" }}>
      {/* Header — always visible */}
      <div
        onClick={onToggle}
        style={{
          padding: "1.75rem",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "1rem",
          }}
        >
          <div style={{ flex: 1 }}>
            <p
              className="mono"
              style={{
                fontSize: "0.7rem",
                color: "var(--accent)",
                letterSpacing: "0.08em",
                marginBottom: "0.4rem",
              }}
            >
              {project.date} — {project.context}
            </p>
            <h3
              style={{
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                lineHeight: 1.25,
              }}
            >
              {project.title}
            </h3>
          </div>
          <span
            style={{
              fontSize: "1.2rem",
              color: "var(--accent)",
              transition: "transform 0.3s ease",
              transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
              flexShrink: 0,
            }}
          >
            +
          </span>
        </div>

        <p
          style={{
            fontSize: "0.85rem",
            color: "var(--muted)",
            lineHeight: 1.6,
          }}
        >
          {project.tagline}
        </p>

        {/* Tool tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
          {project.tools.slice(0, 5).map((tool) => (
            <span key={tool} className="tag" style={{ fontSize: "0.65rem" }}>
              {tool}
            </span>
          ))}
          {project.tools.length > 5 && (
            <span className="tag" style={{ fontSize: "0.65rem", opacity: 0.6 }}>
              +{project.tools.length - 5} more
            </span>
          )}
        </div>
      </div>

      {/* Expandable Detail */}
      <div className={`project-detail ${isOpen ? "open" : ""}`}>
        <div
          style={{
            borderTop: "1px solid var(--border-color)",
            paddingTop: "1.5rem",
            display: "grid",
            gap: "1.5rem",
          }}
        >
          {/* Meta */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1rem",
            }}
          >
            <div>
              <p style={{ fontSize: "0.7rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.25rem" }}>
                Role
              </p>
              <p style={{ fontSize: "0.85rem", fontWeight: 600 }}>{project.role}</p>
            </div>
            <div>
              <p style={{ fontSize: "0.7rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.25rem" }}>
                Team
              </p>
              <p style={{ fontSize: "0.85rem", fontWeight: 600 }}>{project.team}</p>
            </div>
            <div>
              <p style={{ fontSize: "0.7rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.25rem" }}>
                Domain
              </p>
              <p style={{ fontSize: "0.85rem", fontWeight: 600 }}>{project.domain}</p>
            </div>
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
              Problem
            </p>
            <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.7 }}>
              {project.problem}
            </p>
          </div>

          {/* Approach */}
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
              Approach
            </p>
            <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.7 }}>
              {project.approach}
            </p>
          </div>

          {/* Methods */}
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
              Methods
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
              {project.methods.map((m) => (
                <span key={m} className="tag">{m}</span>
              ))}
            </div>
          </div>

          {/* Results */}
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
              Quantified Results
            </p>
            <div className="result-grid">
              {project.results.map((r, i) => (
                <div key={i} className="result-row">
                  <span style={{ color: "var(--muted)" }}>{r.metric}</span>
                  <span
                    className="mono"
                    style={{ color: "var(--accent)", fontWeight: 700, fontSize: "0.82rem" }}
                  >
                    {r.value}
                  </span>
                  <span
                    className="mono"
                    style={{ fontSize: "0.72rem", color: "var(--muted)", opacity: 0.7 }}
                  >
                    target: {r.target}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Impact */}
          <div
            style={{
              background: "var(--accent-dim)",
              borderRadius: 12,
              padding: "1.25rem",
              borderLeft: "3px solid var(--accent)",
            }}
          >
            <p style={{ fontSize: "0.72rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--accent)", marginBottom: "0.4rem" }}>
              Engineering Insight
            </p>
            <p style={{ fontSize: "0.88rem", color: "var(--foreground)", lineHeight: 1.7 }}>
              {project.impact}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="projects" className="section">
      <p className="section-label">Featured Projects</p>
      <h2 className="section-title">
        Engineering work with{" "}
        <span className="text-accent">quantified outcomes</span>
      </h2>
      <p className="section-subtitle" style={{ marginBottom: "3rem" }}>
        Each project follows a structured pipeline: problem definition → constraints → approach → validated results.
        Click any project to expand the full case study.
      </p>

      <div style={{ display: "grid", gap: "1rem" }}>
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isOpen={openId === project.id}
            onToggle={() =>
              setOpenId(openId === project.id ? null : project.id)
            }
          />
        ))}
      </div>
    </section>
  );
}
