"use client";

import { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Terminal, Code2, Cpu, Cloud, BarChart3, Wrench } from "lucide-react";

export default function TechStack() {
  const { techStack } = PORTFOLIO_DATA;
  const [selectedDiscipline, setSelectedDiscipline] = useState(0);

  const icons = [Code2, Terminal, Cpu, Cloud, BarChart3, Wrench];

  return (
    <section id="stack" className="py-24 hairline-b bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 hairline-b pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-none bg-accent-chartreuse inline-block"></span>
              <span className="mono-label text-accent-chartreuse">
                SYSTEM CAPABILITIES & PROTOCOLS
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-text-primary tracking-tight">
              Classified Technical Stack
            </h2>
          </div>
          <p className="font-mono text-xs text-text-muted max-w-sm">
            STRUCTURED ARCHITECTURAL DISCIPLINES // NOT A GENERIC CLOUD OF LOGOS
          </p>
        </div>

        {/* Master Discipline Selector & Detailed Ledger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Discipline Navigation Index */}
          <div className="lg:col-span-5 space-y-2">
            {techStack.map((category, idx) => {
              const Icon = icons[idx % icons.length];
              const isSelected = selectedDiscipline === idx;

              return (
                <button
                  key={category.discipline}
                  onClick={() => setSelectedDiscipline(idx)}
                  className={`w-full text-left p-4 hairline-all transition-technical flex items-center justify-between ${
                    isSelected
                      ? "bg-bg-card border-accent-chartreuse"
                      : "bg-bg-secondary hover:bg-bg-card text-text-secondary"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isSelected ? "text-accent-chartreuse" : "text-text-muted"}`} />
                    <span className={`font-mono text-xs font-semibold ${isSelected ? "text-text-primary" : "text-text-secondary"}`}>
                      {category.discipline}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-text-muted">
                    {category.items.length} SPECS
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Discipline Specifications Panel */}
          <div className="lg:col-span-7 bg-bg-card hairline-all p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 hairline-b pb-4">
              <div>
                <span className="mono-label text-accent-chartreuse">
                  INSPECTING DOMAIN
                </span>
                <h3 className="font-display font-bold text-xl text-text-primary mt-1">
                  {techStack[selectedDiscipline].discipline}
                </h3>
              </div>
              <p className="font-sans text-xs text-text-secondary max-w-xs">
                {techStack[selectedDiscipline].description}
              </p>
            </div>

            {/* Item Ledger Table */}
            <div className="divide-y divide-border-subtle">
              {techStack[selectedDiscipline].items.map((item) => (
                <div
                  key={item.name}
                  className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-display font-semibold text-sm text-text-primary">
                      {item.name}
                    </span>
                    <span className="font-mono text-[10px] px-2 py-0.5 bg-bg-secondary hairline-all text-accent-chartreuse">
                      {item.level}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-text-secondary sm:text-right max-w-sm">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 hairline-t flex items-center justify-between text-[11px] font-mono text-text-muted">
              <span>VALIDATED VIA WORKING REPOSITORIES & ACADEMIC LABS</span>
              <span className="text-accent-chartreuse">TIER 1 PROFICIENCY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
