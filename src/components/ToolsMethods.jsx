"use client";

import { toolCategories } from "@/data/tools";

export default function ToolsMethods() {
  return (
    <section id="tools" className="section">
      <p className="section-label">Tools & Methods</p>
      <h2 className="section-title">
        Technical{" "}
        <span className="text-accent">toolkit</span>
      </h2>
      <p className="section-subtitle" style={{ marginBottom: "3rem" }}>
        Grouped by engineering workflow, from CAD to deployment.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {toolCategories.map((cat) => (
          <div key={cat.category} className="card">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1rem",
              }}
            >
              <span style={{ fontSize: "1.5rem" }}>{cat.icon}</span>
              <h3 style={{ fontSize: "1rem", fontWeight: 700 }}>
                {cat.category}
              </h3>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.4rem",
              }}
            >
              {cat.tools.map((tool) => (
                <span key={tool} className="tool-badge">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
