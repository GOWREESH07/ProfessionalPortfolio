import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Compass, Clock, Terminal } from "lucide-react";

export default function ResearchExplorations() {
  const { explorations } = PORTFOLIO_DATA;

  return (
    <section id="explorations" className="py-20 hairline-b bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 hairline-b pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-none bg-accent-amber inline-block"></span>
              <span className="mono-label text-accent-amber">
                ACTIVE R&D // EARLY ARCHITECTURES
              </span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-text-primary tracking-tight">
              Research & Engineering Explorations
            </h2>
          </div>
          <p className="font-mono text-xs text-text-muted max-w-sm">
            CONCEPTUAL PROTOTYPES & PROMPT ARCHITECTURES ACCURATELY DOCUMENTED AS IN-PROGRESS
          </p>
        </div>

        {/* 2 Exploration Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {explorations.map((exp, idx) => (
            <div
              key={exp.id}
              className="bg-bg-card hairline-all p-6 sm:p-8 space-y-4 border-dashed border-border-medium hover:border-accent-amber/50 transition-technical"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-accent-amber font-semibold">
                  R&D 0{idx + 1} //
                </span>
                <span className="font-mono text-[10px] px-2.5 py-0.5 bg-accent-amber/10 text-accent-amber hairline-all">
                  {exp.status}
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-xl text-text-primary">
                  {exp.title}
                </h3>
                <span className="font-mono text-[11px] text-text-muted mt-0.5 block">
                  CATEGORY // {exp.category}
                </span>
              </div>

              <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed">
                {exp.summary}
              </p>

              <div className="p-3 bg-bg-secondary hairline-all font-mono text-[11px] text-text-muted">
                <span className="text-accent-amber uppercase text-[9px] block mb-0.5">DEVELOPMENT STATUS NOTE</span>
                {exp.note}
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] px-2 py-0.5 bg-bg-secondary hairline-all text-text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
