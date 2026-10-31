import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-transparent text-text-muted text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 hairline-b pb-8">
          <div className="flex items-center gap-3">
            <span className="w-6 h-6 bg-bg-card hairline-all flex items-center justify-center text-accent-chartreuse font-bold text-[10px]">
              {PORTFOLIO_DATA.engineer.monogram}
            </span>
            <span className="text-text-primary font-display font-medium text-sm">
              {PORTFOLIO_DATA.engineer.name}
            </span>
            <span className="text-text-muted">·</span>
            <span className="text-text-secondary">Software Engineer</span>
          </div>

          <div className="flex items-center gap-6 text-[11px] uppercase tracking-wider">
            <a
              href={PORTFOLIO_DATA.engineer.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-chartreuse transition-technical"
            >
              GitHub
            </a>
            <a
              href={PORTFOLIO_DATA.engineer.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-chartreuse transition-technical"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.engineer.contact.email}`}
              className="hover:text-accent-chartreuse transition-technical"
            >
              Email
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-text-muted">
          <div>
            © {currentYear} Gowreesh A. All verified systems and architectures documented.
          </div>
          <div className="flex items-center gap-2">
            <span>BUILT WITH NEXT.JS 15</span>
            <span>·</span>
            <span>TYPESCRIPT</span>
            <span>·</span>
            <span>TAILWIND CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
