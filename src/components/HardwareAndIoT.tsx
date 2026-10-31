import Link from "next/link";
import { ArrowUpRight, Cpu, Zap, Activity, Droplets } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function HardwareAndIoT() {
  const { hardwareProjects } = PORTFOLIO_DATA;

  return (
    <section id="hardware" className="py-24 hairline-b bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 hairline-b pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-none bg-accent-chartreuse inline-block"></span>
              <span className="mono-label text-accent-chartreuse">
                EMBEDDED SYSTEMS & HARDWARE TELEMETRY
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-text-primary tracking-tight">
              Hardware & IoT Engineering
            </h2>
          </div>
          <p className="font-mono text-xs text-text-muted max-w-sm">
            PHYSICAL MICROCONTROLLERS, HIGH-VOLTAGE AC SENSING & RELAY-BASED ACTUATION
          </p>
        </div>

        {/* 2 Hardware Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hardwareProjects.map((hw, idx) => {
            const isSmartEdge = hw.id === "smartedge-hw";

            return (
              <div
                key={hw.id}
                className="bg-bg-card hairline-all p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-accent-chartreuse/60 transition-technical"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-accent-chartreuse font-semibold">
                      HW 0{idx + 1} //
                    </span>
                    <span className="font-mono text-[11px] px-2.5 py-0.5 bg-bg-secondary hairline-all text-text-secondary uppercase">
                      {hw.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary">
                      {hw.title}
                    </h3>
                    <span className="font-mono text-xs text-text-muted mt-1 block">
                      YEAR // {hw.year}
                    </span>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {hw.summary}
                  </p>

                  <div className="p-3 bg-bg-primary hairline-all font-mono text-xs text-accent-chartreuse/90 space-y-1">
                    <div className="text-[10px] text-text-muted uppercase">HARDWARE WORKFLOW</div>
                    <div className="text-[11px] leading-relaxed text-text-primary">{hw.workflow}</div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {hw.technologies.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] px-2 py-0.5 bg-bg-secondary hairline-all text-text-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 hairline-t flex items-center justify-between">
                  <span className="font-mono text-[11px] text-text-muted">
                    {isSmartEdge ? "FLAGSHIP SYSTEM" : "STANDALONE PROTOTYPE"}
                  </span>
                  {isSmartEdge ? (
                    <Link
                      href="/work/smartedge"
                      className="font-mono text-xs text-accent-chartreuse hover:underline flex items-center gap-1.5 font-medium"
                    >
                      <span>INSPECT SMARTEDGE CASE</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : (
                    <span className="font-mono text-[10px] text-accent-chartreuse px-2 py-0.5 bg-accent-chartreuse/10 hairline-all">
                      FIRMWARE VERIFIED
                    </span>
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
