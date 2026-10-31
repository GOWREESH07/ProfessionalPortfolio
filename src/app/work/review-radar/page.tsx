import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ReviewRadarDiagram } from "@/components/ProjectDiagrams";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Globe, Sparkles, Database, ShieldCheck, Layers } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function ReviewRadarCaseStudy() {
  const project = PORTFOLIO_DATA.flagshipProjects.find((p) => p.slug === "review-radar")!;

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
                DEPLOYED PRODUCT SPEC
              </span>
              <span className="font-mono text-xs text-text-muted">
                SYS.REF // GA-REVIEWRADAR-2026
              </span>
              <span className="font-mono text-xs text-accent-chartreuse">
                HOSTING: DEPLOYED VIA VERCEL
              </span>
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-6xl text-text-primary tracking-tight">
              Review Radar: AI Product Review Intelligence
            </h1>

            <p className="font-sans text-lg sm:text-xl text-text-secondary max-w-3xl leading-relaxed">
              A production-grade AI review analysis application deployed on Vercel that ingests live e-commerce reviews using ScraperAPI, evaluates authenticity via Google Gemini, and surfaces actionable product sentiment.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 hairline-t font-mono text-xs">
            <div>
              <span className="text-text-muted block text-[10px]">APPLICATION STACK</span>
              <span className="text-text-primary">Next.js App Router (TypeScript)</span>
            </div>
            <div>
              <span className="text-text-muted block text-[10px]">INGESTION SERVICE</span>
              <span className="text-text-primary">ScraperAPI Proxy Network</span>
            </div>
            <div>
              <span className="text-text-muted block text-[10px]">REASONING CORE</span>
              <span className="text-accent-chartreuse">Google Gemini API (JSON Schema)</span>
            </div>
            <div>
              <span className="text-text-muted block text-[10px]">DATA PERSISTENCE</span>
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
            {/* Section 1: The Review Fraud Problem */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-accent-chartreuse" />
                <h2 className="mono-label text-accent-chartreuse text-sm">
                  01 // THE PRODUCT PROBLEM: UNRELIABLE E-COMMERCE REVIEWS
                </h2>
              </div>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
                E-commerce consumer reviews are heavily distorted by incentivized feedback, bot-generated promotional texts, and astroturfing campaigns. Consumers and market research analysts waste hours reading through hundreds of comments without knowing which percentage of reviews reflect genuine, uncompensated user experiences.
              </p>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
                Review Radar was built as a clean, production-oriented application: users input any product listing URL, the system scrapes reviews through rotating proxy networks via ScraperAPI, evaluates linguistic markers using Google Gemini 1.5, and outputs an authenticity ratio alongside genuine feature highlights.
              </p>
            </section>

            {/* Embedded Product Pipeline Diagram */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="mono-label text-text-primary">
                  02 // SCRAPER-TO-VERCEL EDGE PIPELINE
                </h3>
                <span className="font-mono text-xs text-text-muted">PRODUCT ARCHITECTURE</span>
              </div>
              <ReviewRadarDiagram />
            </section>

            {/* Section 3: Architecture Breakdown */}
            <section className="space-y-6">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-accent-chartreuse" />
                <h2 className="mono-label text-accent-chartreuse text-sm">
                  03 // PIPELINE STAGES & CLOUD INTEGRATION
                </h2>
              </div>

              <div className="space-y-4">
                {project.architectureBreakdown.map((stage, idx) => (
                  <div key={stage.title} className="bg-bg-card hairline-all p-5 space-y-2 hover:border-accent-chartreuse/50 transition-technical">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-accent-chartreuse font-semibold">STAGE 0{idx + 1}</span>
                      <span className="font-mono text-[10px] text-text-muted px-2 py-0.5 bg-bg-secondary hairline-all">VERCEL WORKFLOW</span>
                    </div>
                    <h4 className="font-display font-semibold text-base text-text-primary">{stage.title}</h4>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans">{stage.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Key Implementation Contributions */}
            <section className="space-y-4">
              <h2 className="mono-label text-accent-chartreuse text-sm">
                04 // KEY IMPLEMENTATION CONTRIBUTIONS
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

          {/* Right Column: Specifications Sidebar & Deployment Info */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <div className="bg-bg-card hairline-all p-5 space-y-4">
              <div className="flex items-center gap-2 hairline-b pb-3">
                <Sparkles className="w-4 h-4 text-accent-chartreuse" />
                <span className="mono-label text-text-primary">PRODUCT MANIFEST</span>
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

            {/* Vercel Deployment Note */}
            <div className="bg-bg-secondary p-5 hairline-all space-y-2">
              <div className="flex items-center gap-2 text-accent-chartreuse">
                <ShieldCheck className="w-4 h-4" />
                <span className="mono-label text-accent-chartreuse">DEPLOYMENT TELEMETRY</span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed font-sans">
                Built and verified as a deployed Next.js product on Vercel leveraging serverless API handlers and Supabase caching to deliver sub-second analysis responses.
              </p>
            </div>

            {/* Next Project Link */}
            <div className="bg-bg-card hairline-all p-5 space-y-2">
              <span className="mono-label text-text-muted text-[10px]">APPLIED ENGINEERING CASE</span>
              <h4 className="font-display font-semibold text-sm text-text-primary">
                CodeSense: Software Quality Analyser
              </h4>
              <Link
                href="/work/software-quality-analyser"
                className="font-mono text-xs text-accent-chartreuse hover:underline flex items-center gap-1.5 pt-1"
              >
                <span>INSPECT QUALITY SUITE</span>
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
