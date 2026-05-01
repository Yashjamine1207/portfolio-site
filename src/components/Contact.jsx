"use client";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <p className="section-label" style={{ textAlign: "center" }}>
          Get in Touch
        </p>
        <h2
          className="section-title"
          style={{ textAlign: "center", marginBottom: "1rem" }}
        >
          Let's discuss{" "}
          <span className="text-accent">engineering</span>
        </h2>
        <p
          className="section-subtitle"
          style={{
            textAlign: "center",
            margin: "0 auto 3rem",
          }}
        >
          I'm actively seeking graduate mechanical engineering roles in the UK
          and Europe — particularly in simulation, design, AI/ML, and digital
          twin applications. Open to conversations about opportunities, research
          collaborations, or engineering challenges.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          <a
            href="mailto:yashjamine2003@gmail.com"
            className="card"
            style={{
              textDecoration: "none",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span style={{ fontSize: "1.5rem" }}>✉️</span>
            <p style={{ fontWeight: 600, fontSize: "0.9rem" }}>Email</p>
            <p className="mono" style={{ fontSize: "0.75rem", color: "var(--accent)" }}>
              yashjamine2003@gmail.com
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/yash-jamine/"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            style={{
              textDecoration: "none",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span style={{ fontSize: "1.5rem" }}>💼</span>
            <p style={{ fontWeight: 600, fontSize: "0.9rem" }}>LinkedIn</p>
            <p className="mono" style={{ fontSize: "0.75rem", color: "var(--accent)" }}>
              /in/yash-jamine
            </p>
          </a>

          <a
            href="https://github.com/Yashjamine1207"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            style={{
              textDecoration: "none",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span style={{ fontSize: "1.5rem" }}>🔗</span>
            <p style={{ fontWeight: 600, fontSize: "0.9rem" }}>GitHub</p>
            <p className="mono" style={{ fontSize: "0.75rem", color: "var(--accent)" }}>
              /Yashjamine1207
            </p>
          </a>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <a href="mailto:yashjamine2003@gmail.com" className="btn-primary">
            Send an Email ↗
          </a>
          <a href="#" className="btn-ghost">
            Download CV ↓
          </a>
        </div>
      </div>
    </section>
  );
}
