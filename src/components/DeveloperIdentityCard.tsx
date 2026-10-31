"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowUpRight, Mail, ExternalLink, Cpu, GraduationCap, Sparkles } from "lucide-react";
import profileImg from "../../public/profile.jpg";

interface DeveloperIdentityCardProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DeveloperIdentityCard({
  isOpen,
  onClose,
}: DeveloperIdentityCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Close on ESC key and trap scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    // Prevent body background scroll while open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    // Focus close button on entrance
    setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const technicalInterests = [
    "Agentic AI",
    "Multi-Agent Systems",
    "Full-Stack Development",
    "Machine Learning",
    "Distributed Systems",
    "IoT and Embedded Systems",
  ];

  const techStack = [
    "Python",
    "FastAPI",
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "SQL",
    "Docker",
    "Redis",
    "Supabase",
  ];

  const featuredProjects = [
    {
      id: "01",
      name: "AgentMesh",
      desc: "Multi-agent architecture using FastAPI, A2A, and MCP.",
      category: "Agentic AI / Distributed Systems",
      href: "/work/agentmesh",
    },
    {
      id: "02",
      name: "AEGIS",
      desc: "An autonomous attack-and-defense simulation platform.",
      category: "Cybersecurity / Multi-Agent",
      href: "/work/aegis",
    },
    {
      id: "03",
      name: "SmartEdge",
      desc: "An IoT energy-monitoring system integrating hardware, backend services, and analytics.",
      category: "IoT / Energy Intelligence",
      href: "/work/smartedge",
    },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dossier-identity-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 dark:bg-black/75 backdrop-blur-sm animate-dossier-backdrop transition-opacity cursor-pointer"
        aria-hidden="true"
      />

      {/* Main Identity Dossier Card */}
      <div
        ref={cardRef}
        className="relative z-10 w-full max-w-2xl bg-bg-card border border-border-medium shadow-2xl overflow-hidden animate-dossier-card my-auto max-h-[92vh] flex flex-col rounded-none ring-1 ring-accent-chartreuse/25"
      >
        {/* Telemetry Header Bar */}
        <div className="bg-bg-elevated px-4 sm:px-5 py-2.5 border-b border-border-subtle flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5 font-mono text-[11px] tracking-wider text-text-muted">
            <span className="w-2 h-2 rounded-full bg-accent-chartreuse shadow-[0_0_8px_var(--accent-chartreuse)]"></span>
            <span className="text-accent-chartreuse font-semibold uppercase">
              DOSSIER // GA-07
            </span>
            <span className="hidden sm:inline text-text-muted/60">|</span>
            <span className="hidden sm:inline text-text-secondary uppercase">
              ENGINEERING IDENTITY SPEC
            </span>
          </div>

          {/* Close Button */}
          <button
            ref={closeBtnRef}
            onClick={onClose}
            aria-label="Close developer identity dossier"
            className="flex items-center gap-1.5 px-2.5 py-1 font-mono text-xs text-text-secondary hover:text-accent-chartreuse hover:bg-bg-card border border-border-subtle hover:border-accent-chartreuse transition-technical focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-chartreuse"
          >
            <span className="hidden sm:inline text-[10px] text-text-muted">ESC</span>
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Scrollable Content Container */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6 text-text-primary">
          
          {/* ========================================================= */}
          {/* SECTION A: IDENTITY HEADER                                */}
          {/* ========================================================= */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 pb-5 border-b border-border-subtle">
            {/* Circular Profile Photo with Double Ring Highlight */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-border-medium shrink-0 bg-bg-primary ring-2 ring-accent-chartreuse/40 shadow-md">
              <Image
                src={profileImg}
                alt="Gowreesh A."
                fill
                className="object-cover object-[50%_18%]"
                priority
              />
            </div>

            {/* Name, Roles, Academic Affiliation */}
            <div className="space-y-1 w-full">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h2
                  id="dossier-identity-title"
                  className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight text-text-primary"
                >
                  GOWREESH A.
                </h2>
                {/* Live Status Indicator */}
                <div className="flex items-center gap-1.5 px-2 py-0.5 bg-bg-elevated border border-border-subtle font-mono text-[10px] tracking-wider text-accent-chartreuse">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-chartreuse animate-pulse"></span>
                  <span>SYS.OPERATIONAL // OPEN TO WORK</span>
                </div>
              </div>

              <div className="font-mono text-xs sm:text-[13px] text-accent-chartreuse font-semibold uppercase tracking-wider">
                Software Engineer | Full-Stack Developer
              </div>

              <div className="font-sans text-xs text-text-secondary flex flex-wrap items-center gap-x-2 gap-y-1 pt-0.5">
                <span>Integrated M.Tech Software Engineering student</span>
                <span className="text-text-muted">•</span>
                <span className="text-text-primary font-medium">VIT Vellore, India</span>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* SECTION B: SHORT PROFESSIONAL SUMMARY                     */}
          {/* ========================================================= */}
          <div className="space-y-2">
            <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-text-muted flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-accent-chartreuse" />
              <span>SYSTEM PROFILE // PROFESSIONAL SUMMARY</span>
            </div>
            <p className="font-sans text-[13.5px] sm:text-[14px] leading-relaxed text-text-secondary bg-bg-elevated/60 p-3.5 sm:p-4 border border-border-subtle">
              I build connected software systems, intelligent applications, and distributed AI workflows. My work spans agentic AI, full-stack development, machine learning, and systems engineering, with a focus on building reliable, practical software.
            </p>
          </div>

          {/* ========================================================= */}
          {/* SECTION C & D: ENGINEERING INTERESTS & TECH STACK         */}
          {/* ========================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            
            {/* Engineering Interests */}
            <div className="space-y-2.5">
              <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-text-muted flex items-center gap-1.5">
                <Cpu className="w-3 h-3 text-accent-chartreuse" />
                <span>ENGINEERING INTERESTS</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {technicalInterests.map((interest) => (
                  <span
                    key={interest}
                    className="font-mono text-[11px] px-2.5 py-1 bg-bg-elevated border border-border-subtle text-text-primary hover:border-accent-chartreuse hover:text-accent-chartreuse transition-technical"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Technical Stack */}
            <div className="space-y-2.5">
              <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-text-muted flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-accent-chartreuse inline-block"></span>
                <span>CORE TECHNICAL STACK</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[10.5px] px-2 py-0.5 bg-bg-card border border-border-subtle text-text-secondary hover:border-accent-chartreuse hover:text-text-primary transition-technical"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* ========================================================= */}
          {/* SECTION E: ACADEMIC INFORMATION                           */}
          {/* ========================================================= */}
          <div className="space-y-2 border-t border-border-subtle pt-4">
            <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-text-muted flex items-center gap-1.5">
              <GraduationCap className="w-3 h-3 text-accent-chartreuse" />
              <span>ACADEMIC AFFILIATION</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border-subtle border border-border-subtle bg-bg-elevated/70">
              <div className="p-3">
                <span className="font-mono text-[9.5px] text-text-muted uppercase block">
                  INSTITUTION
                </span>
                <span className="font-sans text-xs sm:text-[13px] font-semibold text-text-primary block mt-0.5">
                  VIT Vellore
                </span>
              </div>
              <div className="p-3">
                <span className="font-mono text-[9.5px] text-text-muted uppercase block">
                  PROGRAM
                </span>
                <span className="font-sans text-xs sm:text-[13px] font-semibold text-text-primary block mt-0.5">
                  Integrated M.Tech (SE)
                </span>
              </div>
              <div className="p-3">
                <span className="font-mono text-[9.5px] text-text-muted uppercase block">
                  LOCATION
                </span>
                <span className="font-sans text-xs sm:text-[13px] font-semibold text-accent-chartreuse block mt-0.5">
                  Vellore, India
                </span>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* SECTION F: FEATURED PROJECTS                              */}
          {/* ========================================================= */}
          <div className="space-y-2.5 border-t border-border-subtle pt-4">
            <div className="flex items-center justify-between">
              <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-text-muted flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-accent-chartreuse inline-block"></span>
                <span>FEATURED ARCHITECTURES</span>
              </div>
              <span className="font-mono text-[10px] text-text-muted">
                SELECT // 01–03
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {featuredProjects.map((p) => (
                <Link
                  key={p.id}
                  href={p.href}
                  onClick={onClose}
                  className="group p-3 bg-bg-elevated border border-border-subtle hover:border-accent-chartreuse hover:bg-bg-card transition-technical flex flex-col justify-between"
                >
                  <div className="space-y-1 mb-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] font-bold text-text-primary group-hover:text-accent-chartreuse transition-technical">
                        {p.id} / {p.name}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-text-muted group-hover:text-accent-chartreuse transition-technical" />
                    </div>
                    <span className="font-mono text-[9.5px] text-accent-chartreuse/90 uppercase block">
                      {p.category}
                    </span>
                  </div>
                  <p className="font-sans text-[11.5px] text-text-secondary leading-snug">
                    {p.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* ========================================================= */}
          {/* SECTION G: QUICK ACTIONS                                  */}
          {/* ========================================================= */}
          <div className="border-t border-border-subtle pt-4">
            <div className="flex flex-wrap items-center gap-2.5">
              {/* Button 1: View Selected Work */}
              <Link
                href="#work"
                onClick={onClose}
                className="px-4 py-2.5 bg-accent-chartreuse text-[#080909] font-mono text-xs font-bold tracking-wider uppercase hover:bg-text-primary hover:text-bg-primary transition-technical flex items-center gap-1.5 border border-accent-chartreuse"
              >
                <span>VIEW SELECTED WORK ↗</span>
              </Link>

              {/* Button 2: GitHub */}
              <a
                href="https://github.com/GOWREESH07/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2.5 bg-bg-elevated border border-border-subtle text-text-primary font-mono text-xs tracking-wider uppercase hover:border-accent-chartreuse hover:text-accent-chartreuse transition-technical flex items-center gap-2"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GITHUB ↗</span>
              </a>

              {/* Button 3: LinkedIn */}
              <a
                href="https://linkedin.com/in/gowreesh-ap"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2.5 bg-bg-elevated border border-border-subtle text-text-primary font-mono text-xs tracking-wider uppercase hover:border-accent-chartreuse hover:text-accent-chartreuse transition-technical flex items-center gap-2"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.8v8.37h-2.8v-8.37M7.86 6.3a1.63 1.63 0 0 0-1.64 1.63 1.64 1.64 0 1 0 3.28 0 1.63 1.63 0 0 0-1.64-1.63Z" />
                </svg>
                <span>LINKEDIN ↗</span>
              </a>

              {/* Button 4: Contact */}
              <Link
                href="#contact"
                onClick={onClose}
                className="px-3.5 py-2.5 bg-bg-elevated border border-border-subtle text-text-primary font-mono text-xs tracking-wider uppercase hover:border-accent-chartreuse hover:text-accent-chartreuse transition-technical flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>CONTACT ↗</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Footer Technical Coordinate Bar */}
        <div className="bg-bg-elevated px-4 py-2 border-t border-border-subtle flex items-center justify-between font-mono text-[9.5px] text-text-muted shrink-0">
          <span>PORTFOLIO IDENTITY PROTOCOL // VIT-SE-2026</span>
          <span className="text-accent-chartreuse font-medium">CLICK OUTSIDE OR ESC TO DISMISS</span>
        </div>
      </div>
    </div>
  );
}
