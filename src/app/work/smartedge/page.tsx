import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SmartEdgeDiagram } from "@/components/ProjectDiagrams";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Cpu, Zap, Server, Activity, Monitor } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function SmartEdgeCaseStudy() {
  const project = PORTFOLIO_DATA.flagshipProjects.find((p) => p.slug === "smartedge")!;

  return (
    <main className="min-h-screen bg-transparent text-text-primary selection:bg-accent-chartreuse selection:text-bg-primary">
      <Navigation />

      {/* Case Study Header & Coordinate Banner */}
      <div className="pt-28 pb-12 hairline-b bg-bg-card/60 backdrop-blur-sm engineering-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-xs text-text-muted hover:text-accent-chartreuse transition-technical"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN TO PORTFOLIO TELEMETRY</span>
          </Link>

          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs px-2.5 py-0.5 bg-accent-chartreuse text-bg-primary font-bold">
                HARDWARE-TO-CLOUD IOT SPEC
              </span>
              <span className="font-mono text-xs text-text-muted">
                SYS.REF // GA-SMARTEDGE-IOT-2026
              </span>
              <span className="font-mono text-xs text-accent-chartreuse">
                STATUS: IMPLEMENTED PROTOTYPE
              </span>
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-6xl text-text-primary tracking-tight">
              SmartEdge: Adaptive Energy Intelligence
            </h1>

            <p className="font-sans text-lg sm:text-xl text-text-secondary max-w-3xl leading-relaxed">
              An intelligent electrical energy monitoring and analysis system bridging embedded ESP32 hardware, PZEM electrical sensors, a Spring Boot REST backend, and a React telemetry dashboard with machine learning anomaly detection.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 hairline-t font-mono text-xs">
            <div>
              <span className="text-text-muted block text-[10px]">EDGE SENSING</span>
              <span className="text-text-primary">ESP32 + PZEM-004T (UART)</span>
            </div>
            <div>
              <span className="text-text-muted block text-[10px]">BACKEND SERVICE</span>
              <span className="text-text-primary">Spring Boot 3.x (Java)</span>
            </div>
            <div>
              <span className="text-text-muted block text-[10px]">ML ANALYTICS</span>
              <span className="text-accent-chartreuse">Load Classification & Anomaly Heuristics</span>
            </div>
            <div>
              <span className="text-text-muted block text-[10px]">OPERATOR UI</span>
              <span className="text-text-primary">React Dashboard</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Case Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Column (8 Cols) */}
          <div className="lg:col-span-8 space-y-16">
            {/* Section 1: The Sub-Metering Problem */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-accent-chartreuse" />
                <h2 className="mono-label text-accent-chartreuse text-sm">
                  01 // THE PROBLEM: COARSE-GRAINED ENERGY MONITORING
                </h2>
              </div>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
                Commercial and residential energy monitoring systems traditionally provide aggregate monthly consumption metrics without granular time-series visibility. Without high-frequency phase diagnostics (measuring voltage, current, power factor, and frequency simultaneously), electrical anomalies such as brownouts, inductive motor surges, and faulty appliances remain undetected until physical equipment failure occurs.
              </p>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
                SmartEdge addresses this by engineering a complete data continuum: physical high-voltage AC measurements are digitized at the edge by a PZEM sensor, buffered by an ESP32, and streamed over Wi-Fi into an enterprise Spring Boot microservice for ML load classification and real-time visualization.
              </p>
            </section>

            {/* Embedded Architecture Diagram */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="mono-label text-text-primary">
                  02 // HARDWARE-TO-CLOUD DATA CONTINUUM
                </h3>
                <span className="font-mono text-xs text-text-muted">INTERACTIVE STAGES</span>
              </div>
              <SmartEdgeDiagram />
            </section>

            {/* Section 3: The 5-Layer System Architecture */}
            <section className="space-y-6">
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4 text-accent-chartreuse" />
                <h2 className="mono-label text-accent-chartreuse text-sm">
                  03 // SYSTEM ARCHITECTURE & DATA FLOW
                </h2>
              </div>

              <div className="space-y-4">
                {project.architectureBreakdown.map((layer, idx) => (
                  <div key={layer.title} className="bg-bg-card hairline-all p-5 space-y-2 hover:border-accent-chartreuse/50 transition-technical">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-accent-chartreuse font-semibold">TIER 0{idx + 1}</span>
                      <span className="font-mono text-[10px] text-text-muted px-2 py-0.5 bg-bg-secondary hairline-all">SUBSYSTEM</span>
                    </div>
                    <h4 className="font-display font-semibold text-base text-text-primary">{layer.title}</h4>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans">{layer.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Machine Learning Diagnostics */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-accent-chartreuse" />
                <h2 className="mono-label text-accent-chartreuse text-sm">
                  04 // APPLIED MACHINE LEARNING & TELEMETRY HEURISTICS
                </h2>
              </div>
              <div className="bg-bg-secondary p-5 hairline-all space-y-3 font-sans text-xs sm:text-sm text-text-secondary leading-relaxed">
                <p>
                  On the backend, incoming streams are evaluated using sliding-window statistical heuristics to compute running mean and variance for active power and voltage stability. When consumption signatures match characteristic inductive or resistive transient patterns, the system classifies active appliances and flags power factor degradation below 0.85.
                </p>
                <div className="p-3 bg-bg-primary hairline-all font-mono text-[11px] text-accent-chartreuse">
                  ACQUIRED_FIELDS: [VOLTAGE_V, CURRENT_A, ACTIVE_KW, FREQ_HZ, POWER_FACTOR] // 1Hz_RATE
                </div>
              </div>
            </section>

            {/* Section 5: Key Contributions */}
            <section className="space-y-4">
              <h2 className="mono-label text-accent-chartreuse text-sm">
                05 // KEY IMPLEMENTATION CONTRIBUTIONS
              </h2>
              <div className="bg-bg-card hairline-all p-6 space-y-3">
                {project.keyContributions.map((contrib, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-accent-chartreuse shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-sans">{contrib}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Specifications Sidebar */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <div className="bg-bg-card hairline-all p-5 space-y-4">
              <div className="flex items-center gap-2 hairline-b pb-3">
                <Cpu className="w-4 h-4 text-accent-chartreuse" />
                <span className="mono-label text-text-primary">IOT SPECIFICATIONS</span>
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
                  className="font-mono text-xs w-full py-2.5 px-3 bg-bg-secondary hairline-all text-text-primary hover:text-accent-chartreuse hover:border-accent-chartreuse transition-technical flex items-center justify-between"
                >
                  <span>GITHUB REPOSITORY</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-accent-chartreuse" />
                </a>
              </div>
            </div>

            {/* Next Project Link */}
            <div className="bg-bg-card hairline-all p-5 space-y-2">
              <span className="mono-label text-text-muted text-[10px]">NEXT FLAGSHIP CASE</span>
              <h4 className="font-display font-semibold text-sm text-text-primary">
                Review Radar: AI Product Intelligence
              </h4>
              <Link
                href="/work/review-radar"
                className="font-mono text-xs text-accent-chartreuse hover:underline flex items-center gap-1.5 pt-1"
              >
                <span>INSPECT PRODUCT CASE</span>
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
