import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LearnMateDiagram } from "@/components/ProjectDiagrams";
import { ArrowLeft, ArrowUpRight, CheckCircle2, GraduationCap, Users, Layers, BookOpen, BrainCircuit } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function LearnMateCaseStudy() {
  const project = PORTFOLIO_DATA.appliedProjects.find((p) => p.slug === "learnmate")!;

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
                EDTECH & DESIGN PATTERN SPEC
              </span>
              <span className="font-mono text-xs text-text-muted">
                SYS.REF // GA-LEARNMATE-2026
              </span>
              <span className="font-mono text-xs text-accent-chartreuse">
                TEAM PROJECT (VIT VELLORE)
              </span>
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-6xl text-text-primary tracking-tight">
              LearnMate: AI Personalized Learning Assistant
            </h1>

            <p className="font-sans text-lg sm:text-xl text-text-secondary max-w-3xl leading-relaxed">
              An intelligent personalized learning platform organized around software design pattern reviews, adaptive quizzes, customized study plans, and interactive learning assistance built with Next.js, FastAPI, Supabase, and Google Gemini.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 hairline-t font-mono text-xs">
            <div>
              <span className="text-text-muted block text-[10px]">COURSE CONTEXT</span>
              <span className="text-text-primary">Design Patterns (ISWE404L)</span>
            </div>
            <div>
              <span className="text-text-muted block text-[10px]">FRONTEND</span>
              <span className="text-text-primary">Next.js 15 + Tailwind CSS</span>
            </div>
            <div>
              <span className="text-text-muted block text-[10px]">AI SERVICE</span>
              <span className="text-accent-chartreuse">FastAPI + Google Gemini API</span>
            </div>
            <div>
              <span className="text-text-muted block text-[10px]">DATA STORE</span>
              <span className="text-text-primary">Supabase (PostgreSQL)</span>
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
                <BookOpen className="w-4 h-4 text-accent-chartreuse" />
                <h2 className="mono-label text-accent-chartreuse text-sm">
                  01 // THE EDUCATIONAL DILEMMA: ONE-SIZE-FITS-ALL SYLLABI
                </h2>
              </div>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
                Mastering software engineering design patterns (Creational, Structural, Behavioral) requires nuanced conceptual comprehension and architectural discernment. Most digital learning tools provide static multiple-choice questions without detecting individual misconceptions or adapting problem scenarios to a student&apos;s specific weak points.
              </p>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
                LearnMate was designed as an intelligent virtual study companion: it assesses student design pattern understanding, generates dynamic adaptive quizzes via Google Gemini, and maintains progress states in Supabase.
              </p>
            </section>

            {/* Embedded Diagram */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="mono-label text-text-primary">
                  02 // LEARNING ASSISTANT ARCHITECTURE
                </h3>
                <span className="font-mono text-xs text-text-muted">LEARNMATE WORKFLOW</span>
              </div>
              <LearnMateDiagram />
            </section>

            {/* Section 3: Architecture Breakdown */}
            <section className="space-y-6">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-accent-chartreuse" />
                <h2 className="mono-label text-accent-chartreuse text-sm">
                  03 // SYSTEM ARCHITECTURE & INTEGRATION
                </h2>
              </div>

              <div className="space-y-4">
                {project.architectureBreakdown.map((stage, idx) => (
                  <div key={stage.title} className="bg-bg-card hairline-all p-5 space-y-2 hover:border-accent-chartreuse/50 transition-technical">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-accent-chartreuse font-semibold">LAYER 0{idx + 1}</span>
                      <span className="font-mono text-[10px] text-text-muted px-2 py-0.5 bg-bg-secondary hairline-all">CORE TIER</span>
                    </div>
                    <h4 className="font-display font-semibold text-base text-text-primary">{stage.title}</h4>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans">{stage.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Academic Collaboration */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-accent-chartreuse" />
                <h2 className="mono-label text-accent-chartreuse text-sm">
                  04 // ACADEMIC TEAM CONTEXT & ROLE
                </h2>
              </div>
              <div className="bg-bg-secondary p-5 hairline-all space-y-3 font-sans text-xs sm:text-sm text-text-secondary leading-relaxed">
                <p>
                  Developed in partial fulfillment of the Design Patterns course (ISWE404L) at Vellore Institute of Technology by <strong className="text-text-primary">Rathinila S, Gowreesh A, and Abirami S</strong>. Individual contributions included the FastAPI service implementation, Gemini API prompting rubrics for design pattern critiques, and Supabase integration.
                </p>
              </div>
            </section>

            {/* Section 5: Key Contributions */}
            <section className="space-y-4">
              <h2 className="mono-label text-accent-chartreuse text-sm">
                05 // KEY CONTRIBUTIONS
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
                <BrainCircuit className="w-4 h-4 text-accent-chartreuse" />
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
                  className="font-mono text-xs w-full py-2.5 px-3 bg-bg-secondary hairline-all text-text-primary hover:text-accent-chartreuse hover:border-accent-chartreuse transition-technical flex items-center justify-between"
                >
                  <span>GITHUB REPOSITORY</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-accent-chartreuse" />
                </a>
              </div>
            </div>

            {/* Next Project Link */}
            <div className="bg-bg-card hairline-all p-5 space-y-2">
              <span className="mono-label text-text-muted text-[10px]">APPLIED SECURITY CASE</span>
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
