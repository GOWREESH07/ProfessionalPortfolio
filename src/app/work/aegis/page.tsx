import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AegisConsoleDiagram } from "@/components/ProjectDiagrams";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Shield, Terminal, AlertTriangle, Layers, Radio } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function AegisCaseStudy() {
  const project = PORTFOLIO_DATA.flagshipProjects.find((p) => p.slug === "aegis")!;

  return (
    <main className="min-h-screen bg-transparent text-text-primary selection:bg-accent-amber selection:text-bg-primary">
      <Navigation />

      {/* Case Study Header & Coordinate Banner */}
      <div className="pt-28 pb-12 hairline-b bg-bg-card/60 backdrop-blur-sm engineering-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-xs text-text-muted hover:text-accent-amber transition-technical"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN TO PORTFOLIO TELEMETRY</span>
          </Link>

          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs px-2.5 py-0.5 bg-accent-amber text-bg-primary font-bold">
                CYBER DEFENSE SIMULATION SPEC
              </span>
              <span className="font-mono text-xs text-text-muted">
                SYS.REF // GA-AEGIS-SEC-2026
              </span>
              <span className="font-mono text-xs text-accent-amber">
                STATUS: SIMULATION PROTOTYPE
              </span>
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-6xl text-text-primary tracking-tight">
              AEGIS: Agentic Attack Simulation & Autonomous Defense
            </h1>

            <p className="font-sans text-lg sm:text-xl text-text-secondary max-w-3xl leading-relaxed">
              An autonomous defensive simulation platform demonstrating an orchestrated defense pipeline against a five-stage agentic attack kill chain, featuring dual Attacker-vs-Defender consoles, FastAPI, Redis, and automated forensic incident reporting.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 hairline-t font-mono text-xs">
            <div>
              <span className="text-text-muted block text-[10px]">ATTACK SCOPE</span>
              <span className="text-text-primary">5-Stage Agentic Kill Chain</span>
            </div>
            <div>
              <span className="text-text-muted block text-[10px]">CORE BACKEND</span>
              <span className="text-text-primary">FastAPI + Redis Async Bus</span>
            </div>
            <div>
              <span className="text-text-muted block text-[10px]">DEFENSIVE CORES</span>
              <span className="text-accent-amber">Surveillance, Council, Healing</span>
            </div>
            <div>
              <span className="text-text-muted block text-[10px]">CONTAINERIZATION</span>
              <span className="text-text-primary">Docker Compose Multi-Node</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Case Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Column (8 Cols) */}
          <div className="lg:col-span-8 space-y-16">
            {/* Section 1: The Agentic Threat Landscape */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-accent-amber" />
                <h2 className="mono-label text-accent-amber text-sm">
                  01 // THE PROBLEM: AUTONOMOUS AGENTIC ADVERSARIES
                </h2>
              </div>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
                Modern cyber attacks are transitioning from scripted exploits to autonomous agentic adversaries capable of adaptive reconnaissance, dynamic payload mutation, and context-aware privilege escalation across microservices. Static signatures and manual security operations centers (SOCs) are overwhelmed by sub-second attack shifts.
              </p>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
                AEGIS was engineered to simulate this adversarial interaction: a multi-stage attacker agent iteratively tests target endpoints, while an autonomous defensive pipeline detects, deliberates, rate-limits, and isolates threats in real time without human intervention.
              </p>
            </section>

            {/* Embedded Dual-Console Simulation Visualization */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="mono-label text-text-primary">
                  02 // 5-STAGE KILL CHAIN VS DEFENSIVE PIPELINE
                </h3>
                <span className="font-mono text-xs text-text-muted">DUAL CONSOLES</span>
              </div>
              <AegisConsoleDiagram />
            </section>

            {/* Section 3: The 5-Layer Defensive Pipeline */}
            <section className="space-y-6">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-accent-amber" />
                <h2 className="mono-label text-accent-amber text-sm">
                  03 // AUTONOMOUS DEFENSIVE PIPELINE ARCHITECTURE
                </h2>
              </div>

              <div className="space-y-4">
                {project.architectureBreakdown.map((layer, idx) => (
                  <div key={layer.title} className="bg-bg-card hairline-all p-5 space-y-2 hover:border-accent-amber/50 transition-technical">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-accent-amber font-semibold">MODULE 0{idx + 1}</span>
                      <span className="font-mono text-[10px] text-text-muted px-2 py-0.5 bg-bg-secondary hairline-all">AEGIS CORE</span>
                    </div>
                    <h4 className="font-display font-semibold text-base text-text-primary">{layer.title}</h4>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans">{layer.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Forensic Reporting & Healing */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-accent-amber" />
                <h2 className="mono-label text-accent-amber text-sm">
                  04 // AUTOMATED FORENSIC REPORTING & ENDPOINT HEALING
                </h2>
              </div>
              <div className="bg-bg-secondary p-5 hairline-all space-y-3 font-sans text-xs sm:text-sm text-text-secondary leading-relaxed">
                <p>
                  Upon detecting anomalous traffic escalation, the <strong className="text-text-primary">Council engine</strong> deliberates across multiple evaluators, issuing automated remediation decisions logged to Redis. When an exploit attempt is confirmed, the <strong className="text-text-primary">Healing engine</strong> automatically executes endpoint resets, revoking compromised JWT keys and compiling comprehensive forensic incident reports in Markdown and PDF format.
                </p>
                <div className="p-3 bg-bg-primary hairline-all font-mono text-[11px] text-accent-amber">
                  [INCIDENT_REPORT] ID: JADEPUFFER-2026-088 // STATUS: QUARANTINED // DURATION: 184ms
                </div>
              </div>
            </section>

            {/* Section 5: Specific Contributions */}
            <section className="space-y-4">
              <h2 className="mono-label text-accent-amber text-sm">
                05 // KEY SYSTEM CONTRIBUTIONS
              </h2>
              <div className="bg-bg-card hairline-all p-6 space-y-3">
                {project.keyContributions.map((contrib, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-accent-amber shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-sans">{contrib}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Sidebar & Scope Callouts */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <div className="bg-bg-card hairline-all p-5 space-y-4">
              <div className="flex items-center gap-2 hairline-b pb-3">
                <span className="mono-label text-text-primary">SIMULATION MANIFEST</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                {project.specifications.map((spec) => (
                  <div key={spec.label} className="hairline-b pb-2">
                    <span className="text-text-muted block text-[10px]">{spec.label}</span>
                    <span className="text-text-primary font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs w-full py-2.5 px-3 bg-bg-secondary hairline-all text-text-primary hover:text-accent-amber hover:border-accent-amber transition-technical flex items-center justify-between"
                >
                  <span>GITHUB REPOSITORY</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-accent-amber" />
                </a>
              </div>
            </div>

            {/* Scope Framing Note */}
            <div className="bg-bg-secondary p-5 hairline-all space-y-2 border-border-subtle">
              <div className="flex items-center gap-2 text-accent-amber">
                <AlertTriangle className="w-4 h-4" />
                <span className="mono-label text-accent-amber">SIMULATION BOUNDARY</span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed font-sans">
                AEGIS is designed and implemented as an academic and hiring demonstration of agentic defense pipelines in isolated Docker testbeds. It is accurately portrayed as a simulation rather than a commercial SOC deployment.
              </p>
            </div>

            {/* Next Project Link */}
            <div className="bg-bg-card hairline-all p-5 space-y-2">
              <span className="mono-label text-text-muted text-[10px]">NEXT FLAGSHIP CASE</span>
              <h4 className="font-display font-semibold text-sm text-text-primary">
                SmartEdge: IoT Energy Intelligence
              </h4>
              <Link
                href="/work/smartedge"
                className="font-mono text-xs text-accent-amber hover:underline flex items-center gap-1.5 pt-1"
              >
                <span>INSPECT HARDWARE PIPELINE</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
