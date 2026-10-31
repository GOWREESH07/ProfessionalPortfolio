import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BrainTumorMriDiagram } from "@/components/ProjectDiagrams";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ShieldAlert, Cpu, Eye, FileText, Activity } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function BrainTumorAiCaseStudy() {
  const project = PORTFOLIO_DATA.flagshipProjects.find((p) => p.slug === "brain-tumor-ai")!;

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
                MEDICAL AI RESEARCH SPEC
              </span>
              <span className="font-mono text-xs text-text-muted">
                SYS.REF // GA-MRI-NEURO-2026
              </span>
              <span className="font-mono text-xs text-accent-cyan">
                VALIDATION ACCURACY: ~98.7% – 98.9%
              </span>
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-6xl text-text-primary tracking-tight">
              Brain Tumor Classification & Intelligent MRI Analysis
            </h1>

            <p className="font-sans text-lg sm:text-xl text-text-secondary max-w-3xl leading-relaxed">
              A research-prototype decision-support pipeline for four-class brain tumor MRI classification combining comparative deep learning, an out-of-distribution input gate, Monte Carlo dropout uncertainty estimation, and Grad-CAM explainability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 hairline-t font-mono text-xs">
            <div>
              <span className="text-text-muted block text-[10px]">CLASSES</span>
              <span className="text-text-primary">Glioma, Meningioma, Pituitary, Normal</span>
            </div>
            <div>
              <span className="text-text-muted block text-[10px]">BACKBONES</span>
              <span className="text-text-primary">Custom 5-Block CNN & EfficientNet-B0</span>
            </div>
            <div>
              <span className="text-text-muted block text-[10px]">UNCERTAINTY</span>
              <span className="text-accent-cyan">Monte Carlo Dropout (Temperature-Scaled)</span>
            </div>
            <div>
              <span className="text-text-muted block text-[10px]">SYSTEM STATUS</span>
              <span className="text-text-primary">IP-Focused Research Prototype</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Research Case Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Column (8 Cols) */}
          <div className="lg:col-span-8 space-y-16">
            {/* Section 1: Research Abstract & Problem Statement */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-accent-cyan" />
                <h2 className="mono-label text-accent-cyan text-sm">
                  01 // RESEARCH PROBLEM: BEYOND THE BLACK-BOX CLASSIFIER
                </h2>
              </div>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
                Conventional deep convolutional networks applied to brain tumor MRI datasets achieve high headline accuracy in controlled benchmarks, but typically operate as opaque black boxes. In clinical decision-support contexts, three fundamental vulnerabilities arise:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-bg-secondary p-4 hairline-all space-y-1">
                  <span className="font-mono text-xs text-accent-cyan">01 / Overconfidence</span>
                  <p className="text-xs text-text-secondary">Standard softmax outputs report near 100% confidence even on corrupted, blurry, or non-cranial input images.</p>
                </div>
                <div className="bg-bg-secondary p-4 hairline-all space-y-1">
                  <span className="font-mono text-xs text-accent-cyan">02 / No Epistemic Bounds</span>
                  <p className="text-xs text-text-secondary">Models lack a statistical mechanism to quantify what they do not know when confronted with borderline tumor margins.</p>
                </div>
                <div className="bg-bg-secondary p-4 hairline-all space-y-1">
                  <span className="font-mono text-xs text-accent-cyan">03 / Zero Visual Rationale</span>
                  <p className="text-xs text-text-secondary">Radiologists cannot verify which anatomical voxel regions drove the neural classification decision.</p>
                </div>
              </div>
            </section>

            {/* Embedded Interactive MRI Research Diagram */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="mono-label text-text-primary">
                  02 // MULTI-STAGE DECISION-SUPPORT PIPELINE
                </h3>
                <span className="font-mono text-xs text-text-muted">4-CLASS MRI WORKFLOW</span>
              </div>
              <BrainTumorMriDiagram />
            </section>

            {/* Section 3: Model Architecture & Comparative Development */}
            <section className="space-y-6">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-accent-cyan" />
                <h2 className="mono-label text-accent-cyan text-sm">
                  03 // MODEL ARCHITECTURES: CUSTOM CNN VS EFFICIENTNET-B0
                </h2>
              </div>
              <div className="space-y-4 font-sans text-sm text-text-secondary leading-relaxed">
                <p>
                  The system evaluates two complementary architectures trained on a curated four-class axial MRI dataset spanning <strong className="text-text-primary">Glioma</strong>, <strong className="text-text-primary">Meningioma</strong>, <strong className="text-text-primary">Pituitary</strong>, and <strong className="text-text-primary">No-Tumor</strong> classes:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  <div className="bg-bg-card hairline-all p-5 space-y-2">
                    <span className="font-mono text-xs text-accent-cyan font-semibold">MODEL A // CUSTOM 5-BLOCK CNN</span>
                    <h4 className="font-display font-semibold text-text-primary">Trained-From-Scratch Convolutional Network</h4>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      A custom 5-block convolutional architecture (3→32→64→128→256→512 channels) with batch normalization, LeakyReLU activations, and max-pooling, designed specifically for rapid inference with minimal parameter overhead.
                    </p>
                    <span className="font-mono text-[11px] text-text-muted block pt-1">REPORTED VAL ACCURACY: ~98.55%</span>
                  </div>

                  <div className="bg-bg-card hairline-all p-5 space-y-2">
                    <span className="font-mono text-xs text-accent-cyan font-semibold">MODEL B // EFFICIENTNET-B0</span>
                    <h4 className="font-display font-semibold text-text-primary">Compound Scaled Feature Backbone</h4>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      A transfer-learning pipeline utilizing pre-trained EfficientNet-B0 weights, fine-tuned across the upper inverted residual blocks (MBConv) to capture high-order contextual spatial relationships across cranial tissue.
                    </p>
                    <span className="font-mono text-[11px] text-text-muted block pt-1">REPORTED VAL ACCURACY: ~98.7% – 98.9%</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Uncertainty Quantification & Explainability */}
            <section className="space-y-6">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-accent-cyan" />
                <h2 className="mono-label text-accent-cyan text-sm">
                  04 // OOD GATING, MC DROPOUT & GRAD-CAM EXPLAINABILITY
                </h2>
              </div>

              <div className="space-y-4">
                {project.architectureBreakdown.map((stage, i) => (
                  <div key={stage.title} className="bg-bg-card hairline-all p-5 space-y-2 hover:border-accent-cyan/50 transition-technical">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-accent-cyan font-semibold">PHASE 0{i + 1}</span>
                      <span className="font-mono text-[10px] text-text-muted px-2 py-0.5 bg-bg-secondary hairline-all">RESEARCH MODULE</span>
                    </div>
                    <h4 className="font-display font-semibold text-base text-text-primary">{stage.title}</h4>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans">{stage.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Human-in-the-Loop Calibration & Verified Contributions */}
            <section className="space-y-4">
              <h2 className="mono-label text-accent-cyan text-sm">
                05 // KEY SYSTEM & METHODOLOGICAL CONTRIBUTIONS
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

          {/* Right Column: Specifications Sidebar & Research Disclaimers */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <div className="bg-bg-card hairline-all p-5 space-y-4">
              <div className="flex items-center gap-2 hairline-b pb-3">
                <FileText className="w-4 h-4 text-accent-cyan" />
                <span className="mono-label text-text-primary">RESEARCH SPECIFICATIONS</span>
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

            {/* Crucial Ethical & Clinical Framing Disclaimer */}
            <div className="bg-bg-secondary p-5 hairline-all space-y-3 border-amber-500/30">
              <div className="flex items-center gap-2 text-accent-amber">
                <ShieldAlert className="w-4 h-4" />
                <span className="mono-label text-accent-amber">ETHICAL & REGULATORY NOTICE</span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed font-sans">
                This project is explicitly framed as an <strong className="text-text-primary">intellectual-property-focused research prototype</strong>. It is not certified for clinical diagnosis, surgery planning, or therapeutic prescription. Reported metrics reflect validation performance on curated retrospective datasets.
              </p>
            </div>

            {/* Next Project Link */}
            <div className="bg-bg-card hairline-all p-5 space-y-2">
              <span className="mono-label text-text-muted text-[10px]">NEXT FLAGSHIP CASE</span>
              <h4 className="font-display font-semibold text-sm text-text-primary">
                AEGIS: Agentic Attack Simulation
              </h4>
              <Link
                href="/work/aegis"
                className="font-mono text-xs text-accent-cyan hover:underline flex items-center gap-1.5 pt-1"
              >
                <span>INSPECT KILL CHAIN DEFENSE</span>
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
