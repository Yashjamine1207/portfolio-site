"use client";

const PILLARS = [
  {
    icon: "🔬",
    title: "Simulation & Analysis",
    description: "FEA, CFD, FSI, fracture mechanics — from mesh convergence to validated engineering decisions",
    evidence: [
      "F1 wing 2-way FSI — 2,415 N downforce, 35% deflection reduction",
      "Penstock fracture assessment — 52.3-year fatigue life, SF 8.28",
      "Heat exchanger CFD — 2.34× heat duty increase",
      "Wind turbine FEA — IEC 61400-1 compliance, FoS 2.8",
    ],
  },
  {
    icon: "🧠",
    title: "AI & Machine Learning",
    description: "DNNs, PINNs, Transformers, XGBoost, RL — engineering-specific ML that respects physics",
    evidence: [
      "Turbofan DNN — MSE 7.179×10⁻⁹ (99.39% error reduction)",
      "PINN — zero thermodynamic violations (vs +12% LSTM hallucination)",
      "TFT RUL prediction — 7.26 cycle RMSE (74.8% improvement)",
      "Agentic RL — 12.8% fuel reduction, 0 safety violations",
    ],
  },
  {
    icon: "⚡",
    title: "Testing & Instrumentation",
    description: "Real hardware, real signals — vibration DAQ, high-speed imaging, composites characterisation",
    evidence: [
      "NI myRIO 20 kHz vibration acquisition + fault detection",
      "Phantom cameras — 20k–50k fps impact analysis",
      "Composite TLM — 0.80% MAPE electrical characterisation",
      "BOSCH 3D printing — PLA 0.08 mm on 100 mm feature",
    ],
  },
  {
    icon: "✏️",
    title: "Design & Manufacturing",
    description: "SolidWorks, DFM, tolerance analysis, composites fabrication — concept through prototype",
    evidence: [
      "Rail trolley — full mechanical design, £719.87 BOM, 18.7 kg",
      "Composite tube CLT — 10,404 layup combinations evaluated",
      "Vacuum bagging + resin infusion fabrication at Manchester NCEM",
      "Additive manufacturing characterisation (ABS, PLA, TPU)",
    ],
  },
];

export default function CoreStrengths() {
  return (
    <section id="strengths" className="section">
      <p className="section-label">Core Strengths</p>
      <h2 className="section-title">Four pillars of engineering capability</h2>
      <p className="section-subtitle" style={{ marginBottom: "3rem" }}>
        Each capability is demonstrated through multiple validated projects — not claimed, proven.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {PILLARS.map((pillar) => (
          <div key={pillar.title} className="card">
            <div className="pillar-icon">{pillar.icon}</div>
            <h3
              style={{
                fontSize: "1.15rem",
                fontWeight: 700,
                marginBottom: "0.5rem",
                letterSpacing: "-0.01em",
              }}
            >
              {pillar.title}
            </h3>
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--muted)",
                lineHeight: 1.6,
                marginBottom: "1.25rem",
              }}
            >
              {pillar.description}
            </p>
            <ul style={{ listStyle: "none", display: "grid", gap: "0.5rem" }}>
              {pillar.evidence.map((item, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--muted)",
                    lineHeight: 1.5,
                    paddingLeft: "1rem",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      color: "var(--accent)",
                      fontWeight: 600,
                    }}
                  >
                    →
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
