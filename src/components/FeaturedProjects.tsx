"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Layers, Cpu, Shield, Sparkles, Activity, Radio } from "lucide-react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import {
  AgentMeshDiagram,
  BrainTumorMriDiagram,
  AegisConsoleDiagram,
  SmartEdgeDiagram,
  ReviewRadarDiagram,
} from "./ProjectDiagrams";

export default function FeaturedProjects() {
  const { flagshipProjects } = PORTFOLIO_DATA;
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProjects = activeFilter === "all"
    ? flagshipProjects
    : flagshipProjects.filter(p => p.primaryDomain === activeFilter);

  return (
    <section id="work" className="py-24 hairline-b bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 hairline-b pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-none bg-accent-chartreuse inline-block"></span>
              <span className="mono-label text-accent-chartreuse">
                FLAGSHIP ENGINEERING PORTFOLIO
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-text-primary tracking-tight">
              Featured Systems & Case Studies
            </h2>
          </div>
          <p className="font-mono text-xs text-text-muted max-w-sm">
            FIVE FLAGSHIP ARCHITECTURES // AUTONOMOUS AGENTS, MEDICAL AI RESEARCH, CYBER SIMULATION, IOT TELEMETRY & DEPLOYED PRODUCTS
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-16 font-mono text-xs">
          <span className="text-text-muted mr-2 text-[10px]">FILTER DOMAIN:</span>
          {[
            { id: "all", label: "00 // ALL FLAGSHIPS" },
            { id: "agentic", label: "01 // AGENTIC MESH" },
            { id: "medical-ai", label: "02 // MEDICAL AI RESEARCH" },
            { id: "security", label: "03 // CYBER SIMULATION" },
            { id: "iot", label: "04 // IOT & SENSORS" },
            { id: "product", label: "05 // DEPLOYED PRODUCT" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3 py-1.5 hairline-all transition-technical ${
                activeFilter === tab.id
                  ? "bg-accent-chartreuse text-bg-primary font-bold border-accent-chartreuse"
                  : "bg-bg-card hover:bg-bg-elevated text-text-secondary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Featured Projects Stack */}
        <div className="space-y-28">
          {filteredProjects.map((project, index) => {
            return (
              <article
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hairline-b pb-20 last:border-b-0 last:pb-0"
              >
                {/* Left Column: Project Overview & Deep Engineering Details */}
                <div className="lg:col-span-6 space-y-6">
                  {/* Category & Status Eyebrow */}
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-accent-chartreuse font-semibold">
                      FLAGSHIP 0{index + 1} //
                    </span>
                    <span className="font-mono text-xs px-2.5 py-0.5 bg-bg-card hairline-all text-text-secondary uppercase">
                      {project.category}
                    </span>
                    <span className="font-mono text-[11px] text-accent-chartreuse/90">
                      {project.status}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="font-display font-bold text-2xl sm:text-4xl text-text-primary tracking-tight">
                      {project.title}
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-accent-chartreuse/90 mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-text-secondary leading-relaxed font-sans">
                    {project.summary}
                  </p>

                  {/* Problem & Approach Split */}
                  <div className="space-y-4 pt-2">
                    <div className="bg-bg-secondary p-4 hairline-all space-y-1">
                      <span className="mono-label text-text-muted">THE ENGINEERING PROBLEM</span>
                      <p className="text-xs text-text-secondary leading-relaxed font-sans">
                        {project.problem}
                      </p>
                    </div>

                    <div className="bg-bg-secondary p-4 hairline-all space-y-1">
                      <span className="mono-label text-accent-chartreuse">THE ARCHITECTURAL APPROACH</span>
                      <p className="text-xs text-text-secondary leading-relaxed font-sans">
                        {project.approach}
                      </p>
                    </div>
                  </div>

                  {/* Verified Key Contributions */}
                  <div className="space-y-2 pt-1">
                    <span className="mono-label text-text-primary block">
                      CORE CONTRIBUTIONS & VERIFIED CAPABILITIES
                    </span>
                    <ul className="space-y-2">
                      {project.keyContributions.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-text-secondary">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-chartreuse mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] px-2.5 py-1 bg-bg-card hairline-all text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Link to Dedicated Case Study */}
                  <div className="pt-4 flex items-center gap-4">
                    <Link
                      href={`/work/${project.slug}`}
                      className="font-mono text-xs px-4 py-2.5 bg-accent-chartreuse text-bg-primary font-semibold hover:bg-white transition-technical flex items-center gap-2"
                    >
                      <span>INSPECT CASE STUDY</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs px-3.5 py-2.5 hairline-all text-text-secondary hover:text-text-primary transition-technical flex items-center gap-1.5"
                      >
                        <span>SOURCE CODE</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Custom Bespoke Architectural Visualization */}
                <div className="lg:col-span-6 space-y-4">
                  {project.diagramType === "mesh" && <AgentMeshDiagram />}
                  {project.diagramType === "mri" && <BrainTumorMriDiagram />}
                  {project.diagramType === "aegis" && <AegisConsoleDiagram />}
                  {project.diagramType === "smartedge" && <SmartEdgeDiagram />}
                  {project.diagramType === "radar" && <ReviewRadarDiagram />}

                  {/* Specification Manifest */}
                  <div className="bg-bg-card hairline-all p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Layers className="w-3.5 h-3.5 text-accent-chartreuse" />
                      <span className="mono-label text-text-primary">
                        SYSTEM MANIFEST & SPECIFICATIONS
                      </span>
                    </div>
                    <div className="divide-y divide-border-subtle font-mono text-xs">
                      {project.specifications.map((spec) => (
                        <div key={spec.label} className="py-2 flex items-center justify-between">
                          <span className="text-text-muted">{spec.label}</span>
                          <span className="text-text-primary font-medium text-right">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
