import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Award, ShieldCheck, Check } from "lucide-react";

export default function Certifications() {
  const { certifications } = PORTFOLIO_DATA;

  return (
    <section id="certifications" className="py-20 hairline-b bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 hairline-b pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-none bg-accent-chartreuse inline-block"></span>
              <span className="mono-label text-accent-chartreuse">
                CREDENTIAL REGISTRY // VERIFIED COMPETENCY
              </span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-text-primary tracking-tight">
              Cloud & AI Certifications
            </h2>
          </div>
          <p className="font-mono text-xs text-text-muted max-w-sm">
            INDUSTRY-CERTIFIED FOUNDATIONS IN ORACLE CLOUD, MLOPS & AWS INFRASTRUCTURE
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-bg-card hairline-all p-6 space-y-4 flex flex-col justify-between transition-technical hover:border-accent-chartreuse/60"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 bg-bg-secondary hairline-all flex items-center justify-center text-accent-chartreuse">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[10px] text-accent-chartreuse px-2 py-0.5 bg-accent-chartreuse/10 hairline-all">
                    VERIFIED
                  </span>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider block">
                    {cert.issuer}
                  </span>
                  <h3 className="font-display font-semibold text-base text-text-primary mt-1 leading-snug">
                    {cert.title}
                  </h3>
                </div>
              </div>

              <div className="pt-4 hairline-t space-y-2">
                <div className="flex items-center justify-between font-mono text-[11px]">
                  <span className="text-text-muted">DOMAIN</span>
                  <span className="text-text-secondary text-right">{cert.domain}</span>
                </div>
                {cert.credentialCode && (
                  <div className="flex items-center justify-between font-mono text-[10px]">
                    <span className="text-text-muted">ID REF</span>
                    <span className="text-accent-chartreuse">{cert.credentialCode}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
