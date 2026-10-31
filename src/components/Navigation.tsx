"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          ? "bg-[#080909]/95 backdrop-blur-md border-b border-[#252729] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1490px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Left Brand: GA Square Logo + Subtext */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="w-9 h-9 bg-[#0d0e0f] border border-[#252729] flex items-center justify-center font-mono text-xs font-bold text-[#f4f4f0] group-hover:border-[#d5f52f] group-hover:text-[#d5f52f] transition-technical">
              {PORTFOLIO_DATA.engineer.monogram}
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs font-semibold text-[#f4f4f0] tracking-wider uppercase group-hover:text-[#d5f52f] transition-technical">
                {PORTFOLIO_DATA.engineer.name}
              </span>
              <span className="font-mono text-[10px] tracking-widest text-[#62656b] uppercase">
                PORTFOLIO · 2026
              </span>
            </div>
          </Link>

          {/* Right Navigation: WORK · EXPERTISE · EXPERIENCE · CONTACT · OPEN TO WORK */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10 font-mono text-xs">
            <nav className="flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[#a0a0a0] hover:text-[#d5f52f] tracking-[0.14em] uppercase transition-technical"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Status Indicator */}
            <div className="flex items-center gap-2 pl-4 border-l border-[#252729]">
              <span className="w-2 h-2 rounded-full bg-[#d5f52f] shadow-[0_0_8px_#d5f52f]"></span>
              <span className="text-[11px] font-mono tracking-[0.12em] text-[#a0a0a0] uppercase">
                OPEN TO WORK
              </span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden font-mono text-xs px-3 py-1.5 border border-[#252729] bg-[#0d0e0f] text-[#a0a0a0] hover:text-[#d5f52f]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? "CLOSE [X]" : "MENU [//]"}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-[#252729] bg-[#080909]/95 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-mono text-xs text-[#a0a0a0] hover:text-[#d5f52f] py-1.5 uppercase tracking-widest"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-[#252729] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d5f52f]"></span>
                <span className="font-mono text-[10px] text-[#a0a0a0] tracking-wider uppercase">
                  OPEN TO WORK
                </span>
              </div>
              <Link
                href="mailto:gowreeshappathurai@gmail.com"
                className="font-mono text-xs text-[#d5f52f] hover:underline"
              >
                gowreeshappathurai@gmail.com
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
