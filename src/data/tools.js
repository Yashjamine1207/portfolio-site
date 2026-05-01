export const toolCategories = [
  {
    category: "CAD & Design",
    tools: ["SolidWorks", "AutoCAD", "CATIA (basic)"],
    icon: "✏️",
  },
  {
    category: "Simulation & FEA",
    tools: ["ANSYS Mechanical", "ANSYS Fluent (CFD)", "ANSYS System Coupling (FSI)", "SolidWorks Simulation", "MATLAB (structural)"],
    icon: "🔬",
  },
  {
    category: "Programming",
    tools: ["Python", "MATLAB", "LabVIEW", "SQL (basic)", "Git/GitHub"],
    icon: "💻",
  },
  {
    category: "Machine Learning & AI",
    tools: ["PyTorch", "TensorFlow/Keras", "Scikit-learn", "XGBoost", "Optuna", "KerasTuner", "Stable Baselines3", "Gymnasium"],
    icon: "🧠",
  },
  {
    category: "Data & Visualisation",
    tools: ["Pandas", "NumPy", "SciPy", "Plotly", "Matplotlib", "Seaborn", "Streamlit"],
    icon: "📊",
  },
  {
    category: "Testing & Instrumentation",
    tools: ["NI myRIO / LabVIEW FPGA", "Accelerometers (ADXL345, MPU-6050)", "Phantom high-speed cameras", "Force sensors", "Oscilloscope"],
    icon: "⚡",
  },
  {
    category: "Manufacturing",
    tools: ["3D Printing (FDM — PLA, ABS, TPU)", "Laser cutting", "Vacuum bagging", "Resin infusion", "Autoclave"],
    icon: "🏭",
  },
  {
    category: "Engineering Methods",
    tools: ["DOE / Taguchi", "FMEA", "DFM/DFA", "GD&T", "Tolerance analysis", "BS 7910 / R6 fracture assessment", "IEC 61400-1"],
    icon: "📐",
  },
];

export const currentResearch = {
  title: "Forward-Swept Composite Wing — ML-Enhanced Aeroelastic Optimisation",
  degree: "MSc Mechanical Engineering Design",
  university: "University of Manchester",
  supervisor: "Dr. Zhenmin Zou",
  date: "Mar 2026 – Aug 2026 (ongoing)",
  problem: "Forward-swept wings offer significant aerodynamic benefits but suffer from aeroelastic divergence — a catastrophic instability where aerodynamic forces amplify structural deformation. The composite laminate design space is >10¹² configurations for a 20-ply wing, rendering traditional optimisation intractable.",
  approach: [
    "Phase 1: MATLAB aeroelastic framework (CLPT + beam models + aerodynamic loading) validated against NASA X-29 data",
    "Phase 2: Neural network + gradient boosting surrogates for divergence speed prediction — targeting 100–1000× speedup vs physics solver",
    "Phase 3: Multi-objective optimisation (max divergence speed, min weight) using genetic algorithms + Bayesian optimisation on ML surrogates",
    "Phase 4 (exploratory): Generative AI/LLM for laminate sequence design",
    "Phase 5: Streamlit dashboard for real-time ML-based performance prediction",
  ],
  publication: "Targeting Q1/Q2 SCI journals: Composite Structures (IF ~6.3), Aerospace Science and Technology (IF ~5.6)",
  tools: ["MATLAB", "Python", "PyTorch/TensorFlow", "Streamlit", "University HPC"],
};
