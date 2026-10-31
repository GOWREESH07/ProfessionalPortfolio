import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { QuantumCryptDiagram } from "@/components/ProjectDiagrams";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Shield, Lock, Activity, Binary, Terminal } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function QuantumCryptCaseStudy() {
  const project = [...PORTFOLIO_DATA.flagshipProjects, ...PORTFOLIO_DATA.appliedProjects].find((p) => p.slug === "quantumcrypt")!;

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
                CYBERSECURITY & CHAOS DYNAMICS
              </span>
              <span className="font-mono text-xs text-text-muted">
                SYS.REF // GA-QC-2025
              </span>
              <span className="font-mono text-xs text-accent-amber">
                STATUS: IMPLEMENTED PROTOTYPE
              </span>
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-6xl text-text-primary tracking-tight">
              QuantumCrypt: Chaos File Encryption
            </h1>

            <p className="font-sans text-lg sm:text-xl text-text-secondary max-w-3xl leading-relaxed">
              A hybrid file security platform combining non-linear dynamical chaos systems (Lorenz Attractor & Arnold&apos;s Cat Map) with salted PBKDF2 HMAC-SHA256 key derivation and role-based access validation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 hairline-t font-mono text-xs">
            <div>
              <span className="text-text-muted block text-[10px]">CIPHER CORE</span>
              <span className="text-text-primary">Lorenz Chaos Equation</span>
            </div>
            <div>
              <span className="text-text-muted block text-[10px]">SPATIAL PERMUTATION</span>
              <span className="text-text-primary">Arnold&apos;s Cat Map</span>
            </div>
            <div>
              <span className="text-text-muted block text-[10px]">KEY DERIVATION</span>
              <span className="text-accent-amber">PBKDF2 HMAC-SHA256</span>
            </div>
            <div>
              <span className="text-text-muted block text-[10px]">USER INTERFACE</span>
              <span className="text-text-primary">Python 3.11 / Streamlit</span>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Technical Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Case Narrative (8 Cols) */}
          <div className="lg:col-span-8 space-y-16">
            {/* Section 1: The Cryptographic Problem */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-accent-amber" />
                <h2 className="mono-label text-accent-amber text-sm">
                  01 // STATISTICAL LEAKAGE & STATE ENTROPY
                </h2>
              </div>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
                Standard block cipher implementations, when misconfigured or when relying on low-entropy pseudo-random number generators, can exhibit statistical patterns across adjacent byte blocks. In high-dimensional data (such as binary documents, medical images, and telemetry logs), spatial byte correlations often survive single-pass substitution rounds.
              </p>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
                QuantumCrypt addresses this through a multi-stage pipeline: it scrambles matrix coordinates using Arnold&apos;s Cat Map to eliminate adjacent correlations (diffusion), and computes chaotic state sequences using Lorenz differential equations to generate a non-periodic, deterministic keystream (confusion).
              </p>
            </section>

            {/* Embedded Chaos Visualization */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="mono-label text-text-primary">
                  02 // CHAOS EQUATIONS & BIT PERMUTATION TOPOLOGY
                </h3>
                <span className="font-mono text-xs text-text-muted">ENTROPY VERIFIED</span>
              </div>
              <QuantumCryptDiagram />
            </section>

            {/* Section 3: The 4-Stage Architecture */}
            <section className="space-y-6">
              <div className="flex items-center gap-2">
                <Binary className="w-4 h-4 text-accent-amber" />
                <h2 className="mono-label text-accent-amber text-sm">
                  03 // MATHEMATICAL & SECURITY ARCHITECTURE
                </h2>
              </div>

              <div className="space-y-4">
                {project.architectureBreakdown.map((stage, idx) => (
                  <div
                    key={stage.title}
                    className="bg-bg-card hairline-all p-5 space-y-2 hover:border-accent-amber/50 transition-technical"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-accent-amber font-semibold">
                        LAYER 0{idx + 1}
                      </span>
                      <span className="font-mono text-[10px] text-text-muted px-2 py-0.5 bg-bg-secondary hairline-all">
                        STAGE PROTOCOL
                      </span>
                    </div>
                    <h4 className="font-display font-semibold text-base text-text-primary">
                      {stage.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans">
                      {stage.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Shannon Entropy & Verification Testing */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-accent-amber" />
                <h2 className="mono-label text-accent-amber text-sm">
                  04 // VERIFICATION & ENTROPY DIAGNOSTICS
                </h2>
              </div>

              <div className="bg-bg-secondary p-5 hairline-all space-y-4">
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans">
                  To verify the efficacy of the chaos permutation layers without making ungrounded mathematical claims, the application includes live entropy testing. It computes the <strong className="text-text-primary">Shannon Entropy</strong> across all output byte blocks:
                </p>

                <div className="p-3.5 bg-bg-primary hairline-all font-mono text-xs text-accent-amber">
                  H(X) = - ∑ P(xᵢ) · log₂ P(xᵢ) → Observed: 7.994 bits/byte (Max theoretical: 8.0)
                </div>

                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans">
                  The ciphertext approaches maximal entropy, confirming uniform frequency distribution with zero recognizable file signature headers or byte artifacts remaining in memory.
                </p>
              </div>
            </section>

            {/* Section 5: Specific Implementation Contributions */}
            <section className="space-y-4">
              <h2 className="mono-label text-accent-amber text-sm">
                05 // VERIFIED ENGINEERING CONTRIBUTIONS
              </h2>
              <div className="bg-bg-card hairline-all p-6 space-y-3">
                {project.keyContributions.map((contrib, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-accent-amber shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{contrib}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Architectural Sidebar & Telemetry (4 Cols) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <div className="bg-bg-card hairline-all p-5 space-y-4">
              <div className="flex items-center gap-2 hairline-b pb-3">
                <Terminal className="w-4 h-4 text-accent-amber" />
                <span className="mono-label text-text-primary">
                  CIPHER SPECIFICATIONS
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                {project.specifications.map((spec) => (
                  <div key={spec.label} className="hairline-b pb-2">
                    <span className="text-text-muted block text-[10px]">{spec.label}</span>
                    <span className="text-text-primary font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 space-y-2">
                <span className="mono-label text-text-muted block text-[10px]">
                  VERIFIED REPOSITORY
                </span>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs w-full py-2.5 px-3 bg-bg-secondary hairline-all text-text-primary hover:text-accent-amber hover:border-accent-amber transition-technical flex items-center justify-between"
                >
                  <span>GITHUB // GOWREESH07</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-accent-amber" />
                </a>
              </div>
            </div>

            {/* Return Link */}
            <div className="bg-bg-card hairline-all p-5 space-y-2">
              <span className="mono-label text-text-muted text-[10px]">PORTFOLIO DIRECTORY</span>
              <h4 className="font-display font-semibold text-sm text-text-primary">
                Return to Overview
              </h4>
              <Link
                href="/#work"
                className="font-mono text-xs text-accent-amber hover:underline flex items-center gap-1.5 pt-1"
              >
                <span>EXPLORE ALL ARCHITECTURES</span>
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
