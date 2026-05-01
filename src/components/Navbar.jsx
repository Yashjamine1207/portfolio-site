"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "AI & Digital Twins", href: "#ai" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Tools", href: "#tools" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="nav-blur"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? "0.75rem 1.5rem" : "1.25rem 1.5rem",
        background: scrolled ? "var(--surface)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border-color)" : "none",
        transition: "all 0.35s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Logo */}
      <a
        href="#"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 700,
          fontSize: "1rem",
          color: "var(--foreground)",
          textDecoration: "none",
          letterSpacing: "-0.02em",
        }}
      >
        yash<span style={{ color: "var(--accent)" }}>jamine</span>
      </a>

      {/* Desktop Nav */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.25rem",
        }}
        className="hide-mobile"
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="nav-pill"
            style={{
              padding: "0.4rem 0.85rem",
              fontSize: "0.8rem",
              fontWeight: 500,
              color: "var(--muted)",
              textDecoration: "none",
              borderRadius: 8,
              transition: "all 0.3s ease",
            }}
          >
            {item.label}
          </a>
        ))}
        <div style={{ marginLeft: "0.5rem" }}>
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }} className="show-mobile">
        <ThemeToggle />
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "1px solid var(--border-color)",
            borderRadius: 10,
            padding: "0.5rem 0.65rem",
            cursor: "pointer",
            color: "var(--foreground)",
            fontSize: "1.2rem",
            lineHeight: 1,
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "var(--surface)",
            borderBottom: "1px solid var(--border-color)",
            padding: "1rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
          }}
          className="nav-blur"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: "0.6rem 0",
                fontSize: "0.9rem",
                fontWeight: 500,
                color: "var(--muted)",
                textDecoration: "none",
                borderBottom: "1px solid var(--border-color)",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      <style jsx>{`
        @media (min-width: 768px) {
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hide-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
