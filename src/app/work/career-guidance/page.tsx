import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CareerGuidanceDiagram } from "@/components/ProjectDiagrams";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Sparkles, MapPin, Calendar, FileText, BrainCircuit } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function CareerGuidanceCaseStudy() {
  const project = PORTFOLIO_DATA.appliedProjects.find((p) => p.slug === "career-guidance")!;

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
                FULL-STACK & AI SPEC
              </span>
              <span className="font-mono text-xs text-text-muted">
                SYS.REF // GA-CAREER-AI-2026
              </span>
              <span className="font-mono text-xs text-accent-chartreuse">
                STATUS: IMPLEMENTED PROTOTYPE
              </span>
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-6xl text-text-primary tracking-tight">
              AI Career Guidance Counsellor
            </h1>

            <p className="font-sans text-lg sm:text-xl text-text-secondary max-w-3xl leading-relaxed">
              A comprehensive career navigation system combining Google Gemini 1.5 structured JSON reasoning, ATS resume scoring algorithms, and location-aware Google Maps & Calendar dispatch.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 hairline-t font-mono text-xs">
            <div>
              <span className="text-text-muted block text-[10px]">REASONING CORE</span>
              <span className="text-text-primary">Google Gemini 1.5 Pro</span>
            </div>
            <div>
              <span className="text-text-muted block text-[10px]">SPATIAL ENGINE</span>
              <span className="text-text-primary">Google Maps Platform</span>
            </div>
            <div>
              <span className="text-text-muted block text-[10px]">TIME SYNC</span>
              <span className="text-accent-chartreuse">Google Calendar API</span>
            </div>
            <div>
              <span className="text-text-muted block text-[10px]">RESUME ENGINE</span>
              <span className="text-text-primary">Algorithmic ATS Parser</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Technical Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Case Narrative (8 Cols) */}
          <div className="lg:col-span-8 space-y-16">
            {/* Section 1: The Practical Problem */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <BrainCircuit className="w-4 h-4 text-accent-chartreuse" />
                <h2 className="mono-label text-accent-chartreuse text-sm">
                  01 // THE STATIC CAREER ADVICE DILEMMA
                </h2>
              </div>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
                Most career counselling platforms rely on rigid decision-trees or generic generative AI text prompts that output boilerplate summaries. These summaries lack two critical dimensions: actionable temporal roadmaps that integrate into a candidate&apos;s daily routine, and spatial grounding within regional industry ecosystems.
              </p>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
                The objective was to create an end-to-end full-stack platform where psychometric input drives deterministic structured JSON reasoning via Gemini, parses candidate resumes against real-world ATS schemas, and turns recommendations into physical and temporal commitments.
              </p>
            </section>

            {/* Embedded Multi-Stage Pipeline Diagram */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="mono-label text-text-primary">
                  02 // MULTISTAGE REASONING & DISPATCH FLOW
                </h3>
                <span className="font-mono text-xs text-text-muted">INTERACTIVE MATRIX</span>
              </div>
              <CareerGuidanceDiagram />
            </section>

            {/* Section 3: Technical Capabilities Implemented */}
            <section className="space-y-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent-chartreuse" />
                <h2 className="mono-label text-accent-chartreuse text-sm">
                  03 // VERIFIED PLATFORM CAPABILITIES
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-bg-card hairline-all p-5 space-y-2">
                  <div className="flex items-center gap-2 text-accent-chartreuse">
                    <FileText className="w-4 h-4" />
                    <h4 className="font-display font-semibold text-sm text-text-primary">
                      ATS Resume Scoring & Tokenizer
                    </h4>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed font-sans">
                    Tokenizes uploaded resume text to detect quantifiable metrics, formatting traps (tables, graphics), and keyword densities aligned with target job specifications.
                  </p>
                </div>

                <div className="bg-bg-card hairline-all p-5 space-y-2">
                  <div className="flex items-center gap-2 text-accent-chartreuse">
                    <BrainCircuit className="w-4 h-4" />
                    <h4 className="font-display font-semibold text-sm text-text-primary">
                      Structured Psychometric Synthesis
                    </h4>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed font-sans">
                    Constrains Gemini API outputs to strict JSON schemas, generating multi-phase skill roadmaps with prerequisites and estimated completion timelines.
                  </p>
                </div>

                <div className="bg-bg-card hairline-all p-5 space-y-2">
                  <div className="flex items-center gap-2 text-accent-chartreuse">
                    <MapPin className="w-4 h-4" />
                    <h4 className="font-display font-semibold text-sm text-text-primary">
                      Geographic Innovation Cluster Discovery
                    </h4>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed font-sans">
                    Integrates Google Maps JavaScript and Places API to locate technical meetups, co-working incubators, and companies actively hiring within the candidate&apos;s geographic locus.
                  </p>
                </div>

                <div className="bg-bg-card hairline-all p-5 space-y-2">
                  <div className="flex items-center gap-2 text-accent-chartreuse">
                    <Calendar className="w-4 h-4" />
                    <h4 className="font-display font-semibold text-sm text-text-primary">
                      Automated Milestone Synchronization
                    </h4>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed font-sans">
                    Connects via Google Calendar API to automatically schedule weekly study blocks, project sprint deadlines, and certification checkpoints directly into user agendas.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Key Contributions Checklist */}
            <section className="space-y-4">
              <h2 className="mono-label text-accent-chartreuse text-sm">
                04 // SPECIFIC ARCHITECTURAL CONTRIBUTIONS
              </h2>
              <div className="bg-bg-card hairline-all p-6 space-y-3">
                {project.keyContributions.map((contrib, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-accent-chartreuse shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{contrib}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Specifications Sidebar & Telemetry (4 Cols) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <div className="bg-bg-card hairline-all p-5 space-y-4">
              <div className="flex items-center gap-2 hairline-b pb-3">
                <span className="mono-label text-text-primary">
                  INTEGRATION SPECIFICATIONS
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
                  className="font-mono text-xs w-full py-2.5 px-3 bg-bg-secondary hairline-all text-text-primary hover:text-accent-chartreuse hover:border-accent-chartreuse transition-technical flex items-center justify-between"
                >
                  <span>GITHUB // GOWREESH07</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-accent-chartreuse" />
                </a>
              </div>
            </div>

            {/* Next Project Link */}
            <div className="bg-bg-card hairline-all p-5 space-y-2">
              <span className="mono-label text-text-muted text-[10px]">NEXT CASE STUDY</span>
              <h4 className="font-display font-semibold text-sm text-text-primary">
                QuantumCrypt: Chaos File Encryption
              </h4>
              <Link
                href="/work/quantumcrypt"
                className="font-mono text-xs text-accent-chartreuse hover:underline flex items-center gap-1.5 pt-1"
              >
                <span>INSPECT CIPHER</span>
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
