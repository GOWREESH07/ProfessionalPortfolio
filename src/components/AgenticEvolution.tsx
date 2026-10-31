import Link from "next/link";
import { ArrowUpRight, GitBranch, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function AgenticEvolution() {
  const { agenticEvolution } = PORTFOLIO_DATA;

  return (
    <section id="evolution" className="py-24 hairline-b bg-transparent engineering-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 hairline-b pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-none bg-accent-chartreuse inline-block"></span>
              <span className="mono-label text-accent-chartreuse">
                ARCHITECTURAL EVOLUTION // AGENTIC SYSTEMS
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-text-primary tracking-tight">
              {agenticEvolution.title}
            </h2>
          </div>
          <p className="font-mono text-xs text-text-muted max-w-sm">
            {agenticEvolution.subtitle}
          </p>
        </div>

        <p className="font-sans text-sm sm:text-base text-text-secondary max-w-3xl mb-12 leading-relaxed">
          {agenticEvolution.description}
        </p>

        {/* Comparative Evolution Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {agenticEvolution.stages.map((item, idx) => {
            const isMesh = item.title === "AgentMesh";

            return (
              <div
                key={item.title}
                className={`lg:col-span-6 p-6 sm:p-8 hairline-all flex flex-col justify-between space-y-6 transition-technical ${
                  isMesh
                    ? "bg-bg-card border-accent-chartreuse/60 shadow-[0_0_30px_rgba(215,255,56,0.03)]"
                    : "bg-bg-secondary hover:bg-bg-card"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs px-2.5 py-0.5 bg-bg-primary hairline-all font-semibold text-accent-chartreuse">
                      {item.stage}
                    </span>
                    <span className="font-mono text-xs text-text-muted">
                      {item.agentsCount} AGENT NODES
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-text-primary">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-accent-chartreuse/90 mt-1">
                      {item.role}
                    </p>
                  </div>

                  <div className="p-3 bg-bg-primary hairline-all font-mono text-xs text-text-muted space-y-1">
                    <div className="text-[10px] text-text-secondary uppercase">TOPOLOGY MODEL</div>
                    <div className="text-text-primary font-medium">{item.architecture}</div>
                    <div className="text-[10px] text-text-muted pt-1">PROTOCOL: {item.protocol}</div>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>

                  {/* Architectural Learnings & Breakthroughs */}
                  <div className="space-y-2 pt-2">
                    <span className="mono-label text-[10px] text-text-muted block">
                      {isMesh ? "ARCHITECTURAL ADVANCEMENTS ACHIEVED" : "SYSTEM CONSTRAINTS IDENTIFIED"}
                    </span>
                    <ul className="space-y-1.5 font-sans text-xs text-text-secondary">
                      {item.limitationsSolved?.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          {isMesh ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent-chartreuse mt-0.5 shrink-0" />
                          ) : (
                            <AlertCircle className="w-3.5 h-3.5 text-text-muted mt-0.5 shrink-0" />
                          )}
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 hairline-t flex items-center justify-between">
                  <span className="font-mono text-[11px] text-text-muted">
                    {isMesh ? "STATUS: ACTIVE FLAGSHIP" : "STATUS: FOUNDATIONAL EXPERIMENT"}
                  </span>
                  {isMesh && (
                    <Link
                      href="/work/agentmesh"
                      className="font-mono text-xs text-accent-chartreuse hover:underline flex items-center gap-1.5"
                    >
                      <span>INSPECT MESH BLUEPRINT</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
