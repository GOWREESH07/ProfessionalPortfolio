import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Shield, BrainCircuit, Code2, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function AppliedResearchProjects() {
  const { appliedProjects } = PORTFOLIO_DATA;

  return (
    <section id="applied" className="py-24 hairline-b bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 hairline-b pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-none bg-accent-cyan inline-block"></span>
              <span className="mono-label text-accent-cyan">
                RESEARCH & APPLIED ENGINEERING
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-text-primary tracking-tight">
              Software Quality, EdTech & Security Systems
            </h2>
          </div>
          <p className="font-mono text-xs text-text-muted max-w-sm">
            VERIFIED ACADEMIC TEAM PROJECTS, CRYPTOGRAPHIC CIPHERS & AI-INTEGRATED PLATFORMS
          </p>
        </div>

        {/* 2x2 Clean Grid of Applied Systems */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {appliedProjects.map((project, idx) => (
            <article
              key={project.id}
              className="bg-bg-card hairline-all p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-accent-cyan/60 transition-technical"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-accent-cyan font-semibold">
                    SYS 0{idx + 1} //
                  </span>
                  <span className="font-mono text-[11px] px-2.5 py-0.5 bg-bg-secondary hairline-all text-text-secondary uppercase">
                    {project.status}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-accent-cyan/90 mt-1">
                    {project.tagline}
                  </p>
                </div>

                {project.teamContext && (
                  <div className="p-2.5 bg-bg-secondary hairline-all font-mono text-[10px] text-text-muted">
                    {project.teamContext}
                  </div>
                )}

                <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {project.summary}
                </p>

                <div className="space-y-1.5 pt-1">
                  <span className="mono-label text-[10px] text-text-muted block">
                    KEY IMPLEMENTATION SPECS
                  </span>
                  <ul className="space-y-1 text-xs text-text-secondary font-sans">
                    {project.keyContributions.slice(0, 2).map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] px-2 py-0.5 bg-bg-secondary hairline-all text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 hairline-t flex items-center justify-between">
                <span className="font-mono text-[11px] text-text-muted">
                  DOMAIN: {project.category.split("/")[0]}
                </span>
                <Link
                  href={`/work/${project.slug}`}
                  className="font-mono text-xs text-accent-cyan hover:underline flex items-center gap-1.5 font-medium"
                >
                  <span>INSPECT FULL CASE STUDY</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
