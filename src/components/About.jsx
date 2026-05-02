"use client";

export default function About() {
  return (
    <section id="about" className="section">
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", maxWidth: 900 }}>
        <div>
          <p className="section-label">About</p>
          <h2 className="section-title">
            Engineering decisions backed by physics,{" "}
            <span className="text-accent">validated by data</span>
          </h2>
        </div>

        <div style={{ display: "grid", gap: "1.5rem" }}>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--muted)" }}>
            I'm a Mechanical Engineering MSc student at the University of Manchester,
            where I specialise in bridging traditional engineering rigour with modern AI/ML capability.
            My work sits at the intersection of <strong style={{ color: "var(--foreground)" }}>structural analysis</strong>,{" "}
            <strong style={{ color: "var(--foreground)" }}>computational simulation</strong>,{" "}
            <strong style={{ color: "var(--foreground)" }}>physical testing</strong>, and{" "}
            <strong style={{ color: "var(--foreground)" }}>data-driven optimisation</strong>.
          </p>

          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--muted)" }}>
            What makes my approach distinct is the integration. I don't just run FEA or train neural
            networks. I build complete systems where physics simulation produces the data,
            ML models make the computation faster, and optimisers find practical engineering
            answers. Every project I do has clear numbers to prove the result.
          </p>

          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--muted)" }}>
            I have worked on projects covering vibration diagnostics, aerospace propulsion, rail vehicle
            design, battery thermal systems, structural integrity, composites manufacturing, and additive
            manufacturing. I have had hands-on experience at <strong style={{ color: "var(--foreground)" }}>Robert Bosch Engineering</strong> and
            research internships at IISc Bangalore and MNIT Jaipur.
          </p>
        </div>

        {/* Quick Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "1.5rem",
            paddingTop: "1rem",
          }}
        >
          {[
            { value: "17+", label: "Engineering Projects" },
            { value: "5", label: "Industry & Research Roles" },
            { value: "8+", label: "Simulation Tools" },
            { value: "6+", label: "ML Frameworks" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <p
                className="mono"
                style={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: "var(--accent)",
                  lineHeight: 1.1,
                }}
              >
                {stat.value}
              </p>
              <p style={{ fontSize: "0.78rem", color: "var(--muted)", marginTop: "0.35rem" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
