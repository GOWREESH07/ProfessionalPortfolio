"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "WORK", href: "/#work" },
    { label: "EXPERTISE", href: "/#stack" },
    { label: "EXPERIENCE", href: "/#experience" },
    { label: "CONTACT", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-technical ${
        scrolled
          ? "bg-[var(--nav-bg-scrolled)] backdrop-blur-md border-b border-border-subtle py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1490px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Left Brand: GA Square Logo + Subtext */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="w-9 h-9 bg-bg-card border border-border-subtle flex items-center justify-center font-mono text-xs font-bold text-text-primary group-hover:border-accent-chartreuse group-hover:text-accent-chartreuse transition-technical">
              {PORTFOLIO_DATA.engineer.monogram}
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs font-semibold text-text-primary tracking-wider uppercase group-hover:text-accent-chartreuse transition-technical">
                {PORTFOLIO_DATA.engineer.name}
              </span>
              <span className="font-mono text-[10px] tracking-widest text-text-muted uppercase">
                PORTFOLIO · 2026
              </span>
            </div>
          </Link>

          {/* Right Navigation: WORK · EXPERTISE · EXPERIENCE · CONTACT · THEME TOGGLE · OPEN TO WORK */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 font-mono text-xs">
            <nav className="flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-text-secondary hover:text-accent-chartreuse tracking-[0.14em] uppercase transition-technical"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Controls: Theme Toggle + Status Indicator */}
            <div className="flex items-center gap-4 pl-4 border-l border-border-subtle">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                aria-label={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                className="w-8 h-8 flex items-center justify-center border border-border-subtle bg-bg-card text-text-secondary hover:text-accent-chartreuse hover:border-accent-chartreuse transition-technical"
              >
                {theme === "dark" ? (
                  <Sun className="w-3.5 h-3.5 text-accent-chartreuse" />
                ) : (
                  <Moon className="w-3.5 h-3.5 text-accent-chartreuse" />
                )}
              </button>

              {/* Status Indicator */}
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-chartreuse shadow-[0_0_8px_var(--accent-chartreuse)]"></span>
                <span className="text-[11px] font-mono tracking-[0.12em] text-text-muted uppercase">
                  OPEN TO WORK
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Header Controls */}
          <div className="md:hidden flex items-center gap-2.5">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
              title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
              className="w-8 h-8 flex items-center justify-center border border-border-subtle bg-bg-card text-text-secondary hover:text-accent-chartreuse hover:border-accent-chartreuse transition-technical"
            >
              {theme === "dark" ? (
                <Sun className="w-3.5 h-3.5 text-accent-chartreuse" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-accent-chartreuse" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="font-mono text-xs px-3 py-1.5 border border-border-subtle bg-bg-card text-text-secondary hover:text-accent-chartreuse"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? "CLOSE [X]" : "MENU [//]"}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-border-subtle bg-[var(--nav-bg-scrolled)] pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-mono text-xs text-text-secondary hover:text-accent-chartreuse py-1.5 uppercase tracking-widest"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-border-subtle flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-chartreuse"></span>
                <span className="font-mono text-xs text-text-muted uppercase">OPEN TO WORK</span>
              </div>
              <a
                href="mailto:gowreeshappathurai@gmail.com"
                className="font-mono text-xs text-accent-chartreuse hover:underline"
              >
                CONTACT // TRANSMIT
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
