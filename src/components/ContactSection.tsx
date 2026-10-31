import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function ContactSection() {
  const { contact } = PORTFOLIO_DATA.engineer;

  return (
    <section id="contact" className="py-24 hairline-b bg-transparent engineering-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-bg-card hairline-all p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          {/* Subtle Corner Telemetry Coordinate */}
          <div className="absolute top-4 right-4 font-mono text-[10px] text-text-muted">
            PORT // 443_DISPATCH
          </div>

          <div className="max-w-3xl space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-chartreuse rounded-full animate-ping"></span>
                <span className="mono-label text-accent-chartreuse">
                  STATUS: AVAILABLE FOR SWE, FULL-STACK & AI ROLES
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-text-primary tracking-tight">
                Have something interesting to build?
              </h2>
              <p className="font-sans text-base sm:text-lg text-text-secondary leading-relaxed">
                Whether it is distributed agent architecture, full-stack application engineering, or applied machine learning systems, my inbox is open.
              </p>
            </div>

            {/* Direct Interactive Dispatch Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${contact.email}`}
                className="font-mono text-sm px-6 py-4 bg-accent-chartreuse text-bg-primary font-bold tracking-wide hover:bg-white transition-technical flex items-center gap-2.5"
              >
                <Mail className="w-4 h-4" />
                <span>SEND DIRECT EMAIL</span>
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm px-5 py-4 hairline-all bg-bg-secondary text-text-primary hover:bg-bg-elevated transition-technical flex items-center gap-2"
              >
                <svg className="w-4 h-4 text-accent-chartreuse fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.8v8.37h-2.8v-8.37M7.86 6.3a1.63 1.63 0 0 0-1.64 1.63 1.64 1.64 0 1 0 3.28 0 1.63 1.63 0 0 0-1.64-1.63Z" />
                </svg>
                <span>LINKEDIN // GOWREESH-AP</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm px-5 py-4 hairline-all bg-bg-secondary text-text-primary hover:bg-bg-elevated transition-technical flex items-center gap-2"
              >
                <svg className="w-4 h-4 text-accent-chartreuse fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GITHUB // GOWREESH07</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Location & Response Expectation */}
            <div className="pt-8 hairline-t flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-text-muted">
              <div>
                <span className="text-text-secondary">BASE OF OPERATIONS: </span>
                <span>Vellore / Chennai, Tamil Nadu, India</span>
              </div>
              <div>
                <span className="text-text-secondary">DIRECT ADDRESS: </span>
                <span className="text-accent-chartreuse">{contact.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
