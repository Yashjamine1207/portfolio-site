import "./globals.css";

export const metadata = {
  title: "Yash Jamine — Mechanical Engineer | Simulation · AI · Design",
  description: "Portfolio of Yash Jamine — MSc Mechanical Engineering Design, University of Manchester. Bridging structural analysis, computational simulation, and AI-driven optimisation for next-generation engineering.",
  keywords: "mechanical engineer, FEA, CFD, machine learning, digital twin, portfolio, University of Manchester",
  authors: [{ name: "Yash Jamine" }],
  openGraph: {
    title: "Yash Jamine — Mechanical Engineer",
    description: "Simulation · AI · Design — Engineering portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
