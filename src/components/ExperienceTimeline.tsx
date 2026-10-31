import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function ExperienceTimeline() {
  const { experience, education } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-24 hairline-b bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Professional Experience */}
          <div className="lg:col-span-7 space-y-8">
            <div className="hairline-b pb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-none bg-accent-chartreuse inline-block"></span>
                <span className="mono-label text-accent-chartreuse">
                  CHRONICLE // PRACTICAL ENGINEERING
                </span>
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-4xl text-text-primary tracking-tight">
                Work Experience
              </h2>
            </div>

            <div className="space-y-6">
              {experience.map((item) => (
                <div
                  key={item.company}
                  className="bg-bg-card hairline-all p-6 space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 hairline-b pb-3">
                    <div>
                      <span className="font-mono text-xs text-accent-chartreuse font-semibold uppercase">
                        {item.role}
                      </span>
                      <h3 className="font-display font-bold text-xl text-text-primary mt-0.5">
                        {item.company}
                      </h3>
                    </div>
                    <div className="flex flex-col sm:items-end font-mono text-xs text-text-muted">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-accent-chartreuse" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1.5 text-[11px] text-text-secondary mt-0.5">
                        <MapPin className="w-3 h-3 text-text-muted" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {item.highlights.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary leading-relaxed font-sans">
                        <CheckCircle2 className="w-4 h-4 text-accent-chartreuse mt-0.5 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {item.technologies.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] px-2 py-0.5 bg-bg-secondary hairline-all text-text-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Academic Formation */}
          <div className="lg:col-span-5 space-y-8">
            <div className="hairline-b pb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-none bg-accent-amber inline-block"></span>
                <span className="mono-label text-accent-amber">
                  ACADEMIC FOUNDATION
                </span>
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-4xl text-text-primary tracking-tight">
                Education
              </h2>
            </div>

            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.institution}
                  className="bg-bg-card hairline-all p-6 space-y-4"
                >
                  <div>
                    <span className="font-mono text-xs text-accent-amber font-semibold">
                      DEGREE // 5-YEAR INTEGRATED
                    </span>
                    <h3 className="font-display font-bold text-xl text-text-primary mt-1">
                      {edu.institution}
                    </h3>
                    <p className="font-sans text-sm text-accent-chartreuse mt-0.5">
                      {edu.degree}
                    </p>
                  </div>

                  <div className="flex items-center justify-between font-mono text-xs text-text-muted py-2 hairline-t hairline-b">
                    <span>{edu.period}</span>
                    <span>{edu.location}</span>
                  </div>

                  <div className="space-y-2">
                    <span className="mono-label text-text-muted">CURRICULUM SPECIALIZATION</span>
                    <ul className="space-y-1.5 font-sans text-xs text-text-secondary">
                      {edu.focus.map((f, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-accent-chartreuse/60"></span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
