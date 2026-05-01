"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CoreStrengths from "@/components/CoreStrengths";
import FeaturedProjects from "@/components/FeaturedProjects";
import AIDigitalTwin from "@/components/AIDigitalTwin";
import Internships from "@/components/Internships";
import CurrentResearch from "@/components/CurrentResearch";
import AdditionalProjects from "@/components/AdditionalProjects";
import ToolsMethods from "@/components/ToolsMethods";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ScrollReveal><About /></ScrollReveal>
        <div className="divider" />
        <ScrollReveal><CoreStrengths /></ScrollReveal>
        <div className="divider" />
        <ScrollReveal><FeaturedProjects /></ScrollReveal>
        <div className="divider" />
        <ScrollReveal><AIDigitalTwin /></ScrollReveal>
        <div className="divider" />
        <ScrollReveal><Internships /></ScrollReveal>
        <div className="divider" />
        <ScrollReveal><CurrentResearch /></ScrollReveal>
        <div className="divider" />
        <ScrollReveal><AdditionalProjects /></ScrollReveal>
        <div className="divider" />
        <ScrollReveal><ToolsMethods /></ScrollReveal>
        <div className="divider" />
        <ScrollReveal><Contact /></ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
