import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CodeSenseQualityDiagram } from "@/components/ProjectDiagrams";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Code2, Users, Layers, ShieldCheck, Bug } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function SoftwareQualityAnalyserCaseStudy() {
  const project = PORTFOLIO_DATA.appliedProjects.find((p) => p.slug === "software-quality-analyser")!;

  return (
    <main className="min-h-screen bg-transparent text-text-primary selection:bg-accent-cyan selection:text-bg-primary">
      <Navigation />

      {/* Case Study Header & Coordinate Banner */}
      <div className="pt-28 pb-12 hairline-b bg-bg-card/60 backdrop-blur-sm engineering-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-xs text-text-muted hover:text-accent-cyan transition-technical"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN TO PORTFOLIO TELEMETRY</span>
          </Link>

          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs px-2.5 py-0.5 bg-accent-cyan text-bg-primary font-bold">
                SOFTWARE QUALITY & ML SPEC
              </span>
              <span className="font-mono text-xs text-text-muted">
                SYS.REF // GA-CODESENSE-2026
              </span>
              <span className="font-mono text-xs text-accent-cyan">
                TEAM PROJECT (VIT VELLORE)
              </span>
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-6xl text-text-primary tracking-tight">
              CodeSense: AI Software Quality Analyser
            </h1>

            <p className="font-sans text-lg sm:text-xl text-text-secondary max-w-3xl leading-relaxed">
              An integrated software engineering quality suite combining Abstract Syntax Tree static metrics, Scikit-learn defect prediction models, and an AI-generated code detection classifier.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 hairline-t font-mono text-xs">
            <div>
              <span className="text-text-muted block text-[10px]">COLLABORATION</span>
              <span className="text-text-primary">Academic Team Project (ISWE404L)</span>
            </div>
            <div>
              <span className="text-text-muted block text-[10px]">STATIC PARSER</span>
              <span className="text-text-primary">Halstead & McCabe Cyclomatic</span>
            </div>
            <div>
              <span className="text-text-muted block text-[10px]">ML PREDICTION</span>
              <span className="text-accent-cyan">Defect Classification Pipeline</span>
            </div>
            <div>
              <span className="text-text-muted block text-[10px]">AI CODE ORIGIN</span>
              <span className="text-text-primary">Syntactic Perplexity Classifier</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Case Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Column (8 Cols) */}
          <div className="lg:col-span-8 space-y-16">
            {/* Section 1: The Problem */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <Bug className="w-4 h-4 text-accent-cyan" />
                <h2 className="mono-label text-accent-cyan text-sm">
                  01 // THE DEFECT PREDICTION & CODE ORIGIN CHALLENGE
                </h2>
              </div>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
                Conventional static code linters alert developers to syntax style inconsistencies, but fail to predict whether a particular module has an elevated mathematical probability of containing runtime defects. Concurrently, the pervasive use of generative code assistants creates codebases with subtle hallucinations and unfamiliar maintainability anti-patterns.
              </p>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
                CodeSense bridges these two paradigms by parsing source code into Abstract Syntax Trees, calculating structural complexity metrics, running supervised defect prediction models, and classifying whether functions originated from human authors or LLMs.
              </p>
            </section>

            {/* Embedded Diagram */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="mono-label text-text-primary">
                  02 // THREE-TIER QUALITY & PREDICTION PIPELINE
                </h3>
                <span className="font-mono text-xs text-text-muted">CODESENSE ARCHITECTURE</span>
              </div>
              <CodeSenseQualityDiagram />
            </section>

            {/* Section 3: Architecture Breakdown */}
            <section className="space-y-6">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-accent-cyan" />
                <h2 className="mono-label text-accent-cyan text-sm">
                  03 // FUNCTIONAL MODULE DECOMPOSITION
                </h2>
              </div>

              <div className="space-y-4">
                {project.architectureBreakdown.map((stage, idx) => (
                  <div key={stage.title} className="bg-bg-card hairline-all p-5 space-y-2 hover:border-accent-cyan/50 transition-technical">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-accent-cyan font-semibold">MODULE 0{idx + 1}</span>
                      <span className="font-mono text-[10px] text-text-muted px-2 py-0.5 bg-bg-secondary hairline-all">ANALYSIS CORE</span>
                    </div>
                    <h4 className="font-display font-semibold text-base text-text-primary">{stage.title}</h4>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans">{stage.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Academic Team Contributions */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-accent-cyan" />
                <h2 className="mono-label text-accent-cyan text-sm">
                  04 // ACADEMIC COLLABORATION & INDIVIDUAL CONTRIBUTIONS
                </h2>
              </div>
              <div className="bg-bg-secondary p-5 hairline-all space-y-3 font-sans text-xs sm:text-sm text-text-secondary leading-relaxed">
                <p>
                  Developed as an academic software engineering project at Vellore Institute of Technology by <strong className="text-text-primary">Rathinila S, Gowreesh A, and Abinaya S</strong>. Individual contributions focused on the AST parsing pipeline, static Halstead/McCabe complexity calculations, backend API routing, and defect prediction dataset integration.
                </p>
              </div>
            </section>

            {/* Section 5: Key Implementation Contributions */}
            <section className="space-y-4">
              <h2 className="mono-label text-accent-cyan text-sm">
                05 // VERIFIED PROJECT CONTRIBUTIONS
              </h2>
              <div className="bg-bg-card hairline-all p-6 space-y-3">
                {project.keyContributions.map((contrib, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
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
                <Code2 className="w-4 h-4 text-accent-cyan" />
                <span className="mono-label text-text-primary">SYSTEM SPECIFICATIONS</span>
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
                  className="font-mono text-xs w-full py-2.5 px-3 bg-bg-secondary hairline-all text-text-primary hover:text-accent-cyan hover:border-accent-cyan transition-technical flex items-center justify-between"
                >
                  <span>GITHUB REPOSITORY</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-accent-cyan" />
                </a>
              </div>
            </div>

            {/* Next Project Link */}
            <div className="bg-bg-card hairline-all p-5 space-y-2">
              <span className="mono-label text-text-muted text-[10px]">NEXT CASE STUDY</span>
              <h4 className="font-display font-semibold text-sm text-text-primary">
                LearnMate: AI Learning Assistant
              </h4>
              <Link
                href="/work/learnmate"
                className="font-mono text-xs text-accent-cyan hover:underline flex items-center gap-1.5 pt-1"
              >
                <span>INSPECT TUTOR WORKFLOWS</span>
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
