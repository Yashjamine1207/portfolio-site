"use client";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-color)",
        padding: "2.5rem 1.5rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p
          className="mono"
          style={{
            fontSize: "0.85rem",
            fontWeight: 700,
            marginBottom: "0.5rem",
          }}
        >
          yash<span style={{ color: "var(--accent)" }}>jamine</span>
        </p>
        <p
          style={{
            fontSize: "0.78rem",
            color: "var(--muted)",
            lineHeight: 1.6,
            maxWidth: 500,
            margin: "0 auto 1rem",
          }}
        >
          Mechanical Engineer, MSc Mechanical Engineering Design, University of Manchester.
          Designed, simulated, tested, and optimised.
        </p>
        <p
          style={{
            fontSize: "0.7rem",
            color: "var(--muted)",
            opacity: 0.5,
          }}
        >
          © {new Date().getFullYear()} Yash Jamine. All content derived from
          verified project outcomes.
        </p>
      </div>
    </footer>
  );
}
