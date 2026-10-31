"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import profileImg from "../../public/profile.jpg";
import HeroCodeEditor from "./HeroCodeEditor";

export default function Hero() {
  return (
    <section className="relative min-h-[96vh] pt-28 pb-16 bg-transparent text-[#f4f4f0] flex flex-col justify-between overflow-hidden">
      <div className="relative z-10 max-w-[1490px] mx-auto w-full px-6 sm:px-10 lg:px-12 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Profile, Single-Line Name, Bio, CTA Buttons  */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 flex flex-col justify-start space-y-4 sm:space-y-5 pt-1">
            
            {/* Circular Avatar + Greeting Header */}
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#2e3235] shrink-0 bg-[#0d0e0f] ring-1 ring-[#d5f52f]/30">
                <Image
                  src={profileImg}
                  alt="Gowreesh A."
                  fill
                  className="object-cover object-[50%_18%]"
                  priority
                />
              </div>
              <div className="font-mono text-xs sm:text-[13px] tracking-[0.16em] uppercase font-semibold flex items-center gap-2">
                <span className="text-[#d5f52f]">&lt; GOWREESH /&gt;</span>
                <span className="text-[#e2e4dc]">HI, I&apos;M GOWREESH —</span>
              </div>
            </div>

            {/* Main Name: Single Horizontal Line Typography */}
            <div className="w-full overflow-visible">
              <h1 className="hero-name font-display font-black uppercase text-[#f4f4f0]">
                GOWREESH A.
              </h1>
            </div>

            {/* Professional Title Subheader */}
            <div className="space-y-1">
              <div className="font-mono text-[13px] sm:text-[14px] text-[#d5f52f] tracking-[0.16em] uppercase font-semibold">
                SOFTWARE ENGINEER · FULL-STACK DEVELOPER
              </div>
              <div className="font-mono text-[11px] sm:text-[12px] text-[#8e9199] tracking-[0.14em] uppercase">
                AGENTIC AI · DISTRIBUTED SYSTEMS
              </div>
            </div>

            {/* Descriptive Introduction Paragraphs */}
            <div className="text-[#a0a0a0] font-sans text-[15px] sm:text-[16px] leading-[1.65] max-w-[560px] space-y-2.5 pt-1">
              <p className="text-[#e2e4dc] font-medium text-[16px] sm:text-[17px] leading-snug">
                I build connected software systems, intelligent applications, and distributed AI workflows.
              </p>
              <p className="text-[#9699a3] text-[14px] sm:text-[15px]">
                An Integrated M.Tech Software Engineering student at VIT Vellore. I develop across agentic AI, distributed systems, full-stack engineering, and machine learning — combining applied research with production architectures to engineer reliable software for complex domains.
              </p>
            </div>

            {/* CTA Button Row */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              {/* Button 1: Solid Lime Green */}
              <a
                href="https://github.com/GOWREESH07/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-[#d5f52f] text-[#080909] font-mono text-xs font-bold tracking-wider uppercase hover:bg-white transition-technical flex items-center gap-2 border border-[#d5f52f]"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GITHUB ↗</span>
              </a>

              {/* Button 2: Transparent Outlined Selected Work */}
              <Link
                href="#work"
                className="px-5 py-3 bg-[#0d0e0f] border border-[#252729] text-[#f4f4f0] font-mono text-xs tracking-wider uppercase hover:border-[#d5f52f] hover:text-[#d5f52f] transition-technical flex items-center gap-1.5"
              >
                <span>SELECTED WORK ↗</span>
              </Link>

              {/* Button 3: Transparent Outlined Contact */}
              <Link
                href="#contact"
                className="px-5 py-3 bg-[#0d0e0f] border border-[#252729] text-[#f4f4f0] font-mono text-xs tracking-wider uppercase hover:border-[#d5f52f] hover:text-[#d5f52f] transition-technical flex items-center gap-1.5"
              >
                <span>CONTACT ↗</span>
              </Link>
            </div>

            {/* Technical Engineering Snapshot */}
            <div className="pt-5 border-t border-[#252729] w-full">
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#252729] border border-[#252729] bg-[#0d0e0f]/90">
                <div className="p-3 sm:p-3.5">
                  <span className="font-mono text-[10px] text-[#62656b] tracking-[0.14em] uppercase block mb-1">
                    CORE FOCUS
                  </span>
                  <span className="font-sans text-xs sm:text-[13px] font-semibold text-[#f4f4f0] leading-snug block">
                    Agentic AI &amp; Distributed Systems
                  </span>
                </div>
                <div className="p-3 sm:p-3.5">
                  <span className="font-mono text-[10px] text-[#62656b] tracking-[0.14em] uppercase block mb-1">
                    ENGINEERING
                  </span>
                  <span className="font-sans text-xs sm:text-[13px] font-semibold text-[#f4f4f0] leading-snug block">
                    Full-Stack · Python · FastAPI
                  </span>
                </div>
                <div className="p-3 sm:p-3.5">
                  <span className="font-mono text-[10px] text-[#62656b] tracking-[0.14em] uppercase block mb-1">
                    CURRENTLY BUILDING
                  </span>
                  <span className="font-sans text-xs sm:text-[13px] font-semibold text-[#d5f52f] leading-snug block">
                    Multi-Agent Systems &amp; Intelligent Apps
                  </span>
                </div>
              </div>
            </div>

            {/* Selected Systems Mini-Directory */}
            <div className="pt-2 w-full">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#252729]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#d5f52f] inline-block"></span>
                  <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#62656b] font-semibold">
                    SELECTED SYSTEMS
                  </span>
                </div>
                <span className="font-mono text-[10px] tracking-wider text-[#62656b]">
                  INDEX // 01–03
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <Link
                  href="/work/agentmesh"
                  className="group p-2.5 bg-[#0d0e0f]/80 border border-[#252729] hover:border-[#d5f52f] transition-technical flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[11px] font-bold text-[#f4f4f0] group-hover:text-[#d5f52f] transition-technical">
                      01 / AgentMesh
                    </span>
                    <ArrowUpRight className="w-3 h-3 text-[#62656b] group-hover:text-[#d5f52f] transition-technical" />
                  </div>
                  <span className="font-mono text-[10px] text-[#8e9096] leading-tight">
                    Multi-Agent AI Architecture
                  </span>
                </Link>

                <Link
                  href="/work/aegis"
                  className="group p-2.5 bg-[#0d0e0f]/80 border border-[#252729] hover:border-[#d5f52f] transition-technical flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[11px] font-bold text-[#f4f4f0] group-hover:text-[#d5f52f] transition-technical">
                      02 / AEGIS
                    </span>
                    <ArrowUpRight className="w-3 h-3 text-[#62656b] group-hover:text-[#d5f52f] transition-technical" />
                  </div>
                  <span className="font-mono text-[10px] text-[#8e9096] leading-tight">
                    Autonomous Security Simulation
                  </span>
                </Link>

                <Link
                  href="/work/smartedge"
                  className="group p-2.5 bg-[#0d0e0f]/80 border border-[#252729] hover:border-[#d5f52f] transition-technical flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[11px] font-bold text-[#f4f4f0] group-hover:text-[#d5f52f] transition-technical">
                      03 / SmartEdge
                    </span>
                    <ArrowUpRight className="w-3 h-3 text-[#62656b] group-hover:text-[#d5f52f] transition-technical" />
                  </div>
                  <span className="font-mono text-[10px] text-[#8e9096] leading-tight">
                    IoT Energy Intelligence
                  </span>
                </Link>
              </div>
            </div>

            {/* Bottom Academic Sub-label */}
            <div className="pt-2 font-mono text-[10px] sm:text-[11px] text-[#62656b] tracking-[0.14em] uppercase flex items-center justify-between">
              <span>VIT VELLORE · INTEGRATED M.TECH SOFTWARE ENGINEERING</span>
              <span className="hidden sm:inline text-[#d5f52f]/70 font-mono text-[10px]">SYS.TELEMETRY // ACTIVE</span>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Code IDE Window + System Status Panel       */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 flex flex-col items-stretch space-y-4 pt-1 max-w-[650px] lg:ml-auto w-full">
            
            {/* IDE Window Container */}
            <div className="bg-[#0d0e0f] border border-[#252729] shadow-2xl overflow-hidden">
              
              {/* Title Bar */}
              <div className="bg-[#121314] px-4 py-2.5 border-b border-[#252729] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] inline-block"></span>
                </div>
                <span className="font-mono text-xs text-[#a0a0a0] tracking-wider uppercase">
                  agentmesh/orchestrator.py
                </span>
                <div className="w-10"></div>
              </div>

              {/* Syntax-Highlighted Code Editor Body with Realistic Typing Animation */}
              <HeroCodeEditor />
            </div>

            {/* System Status Panel (Directly Beneath IDE) */}
            <div className="bg-[#0d0e0f] border border-[#252729] p-5 space-y-3.5 shadow-xl">
              {/* Header with Green Pulse Dot */}
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d5f52f] shadow-[0_0_8px_#d5f52f]"></span>
                <span className="font-mono text-xs text-[#d5f52f] tracking-[0.14em] uppercase font-semibold">
                  AGENTMESH // SYSTEM STATUS
                </span>
              </div>

              {/* 2-Column Metadata Specifications */}
              <div className="divide-y divide-[#252729]/60 font-mono text-xs">
                <div className="py-2 flex items-center justify-between">
                  <span className="text-[#62656b] uppercase text-[11px] tracking-wider">PROJECT</span>
                  <span className="text-[#f4f4f0] font-medium">AgentMesh</span>
                </div>
                <div className="py-2 flex items-center justify-between">
                  <span className="text-[#62656b] uppercase text-[11px] tracking-wider">ARCHITECTURE</span>
                  <span className="text-[#f4f4f0] font-medium">6 FastAPI Services</span>
                </div>
                <div className="py-2 flex items-center justify-between">
                  <span className="text-[#62656b] uppercase text-[11px] tracking-wider">PROTOCOLS</span>
                  <span className="text-[#d5f52f] font-medium">A2A + MCP</span>
                </div>
                <div className="py-2 flex items-center justify-between">
                  <span className="text-[#62656b] uppercase text-[11px] tracking-wider">FRONTEND</span>
                  <span className="text-[#f4f4f0] font-medium">Live Network Canvas</span>
                </div>
                <div className="py-2 flex items-center justify-between">
                  <span className="text-[#62656b] uppercase text-[11px] tracking-wider">CATEGORY</span>
                  <span className="text-[#a0a0a0] font-medium">Agentic AI / Distributed Systems</span>
                </div>
              </div>
            </div>

            {/* Bottom Row of 8 Tech Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[10px]">
              {["PYTHON", "FASTAPI", "A2A", "MCP", "NEXT.JS", "REACT", "TYPESCRIPT", "DOCKER"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-[#0d0e0f] border border-[#252729] text-[#a0a0a0] tracking-wider uppercase hover:border-[#d5f52f] hover:text-[#d5f52f] transition-technical"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
