"use client";

import { useState } from "react";
import { internships } from "@/data/internships";

export default function Internships() {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="experience" className="section">
      <p className="section-label">Professional Experience</p>
      <h2 className="section-title">
        Industry & research{" "}
        <span className="text-accent">exposure</span>
      </h2>
      <p className="section-subtitle" style={{ marginBottom: "3rem" }}>
        Hands-on experience across additive manufacturing, composites research,
        erosion modelling, impact testing, and sustainability consulting.
      </p>

      <div style={{ display: "grid", gap: "1rem" }}>
        {internships.map((intern) => {
          const isOpen = openId === intern.id;
          return (
            <div key={intern.id} className="card" style={{ padding: 0 }}>
              <div
                onClick={() => setOpenId(isOpen ? null : intern.id)}
                style={{ padding: "1.5rem", cursor: "pointer" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        marginBottom: "0.4rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <h3 style={{ fontSize: "1.05rem", fontWeight: 700 }}>
                        {intern.company}
                      </h3>
                      <span
                        className="mono"
                        style={{ fontSize: "0.7rem", color: "var(--accent)" }}
                      >
                        {intern.date}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--muted)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {intern.role}, {intern.location}
                    </p>
                    <p
                      style={{
                        fontSize: "0.78rem",
                        color: "var(--muted)",
                        opacity: 0.7,
                      }}
                    >
                      {intern.domain}
                    </p>
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
              </div>

              <div className={`project-detail ${isOpen ? "open" : ""}`}>
                <div
                  style={{
                    borderTop: "1px solid var(--border-color)",
                    paddingTop: "1.25rem",
                    display: "grid",
                    gap: "1.25rem",
                  }}
                >
                  {/* Tools */}
                  <div>
                    <p style={{ fontSize: "0.7rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
                      Tools & Equipment
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                      {intern.tools?.map((t) => (
                        <span key={t} className="tag" style={{ fontSize: "0.65rem" }}>{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <p style={{ fontSize: "0.7rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
                      Key Contributions
                    </p>
                    <ul style={{ listStyle: "none", display: "grid", gap: "0.5rem" }}>
                      {intern.highlights?.map((h, i) => (
                        <li
                          key={i}
                          style={{
                            fontSize: "0.85rem",
                            color: "var(--muted)",
                            lineHeight: 1.6,
                            paddingLeft: "1rem",
                            position: "relative",
                          }}
                        >
                          <span style={{ position: "absolute", left: 0, color: "var(--accent)" }}>→</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Insight */}
                  <div
                    style={{
                      background: "var(--accent-dim)",
                      borderRadius: 10,
                      padding: "1rem",
                      borderLeft: "3px solid var(--accent)",
                    }}
                  >
                    <p style={{ fontSize: "0.85rem", color: "var(--foreground)", lineHeight: 1.6, fontStyle: "italic" }}>
                      {intern.insight}
                    </p>
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
