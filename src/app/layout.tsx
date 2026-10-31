import type { Metadata } from "next";
import CircuitBackground from "@/components/CircuitBackground";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gowreesh A. — Software Engineer | Full-Stack & Agentic AI",
  description: "Personal engineering portfolio and systems laboratory of Gowreesh A. Integrated M.Tech in Software Engineering at VIT Vellore. Building web products, AI workflows, and distributed systems.",
  keywords: [
    "Gowreesh A",
    "Software Engineer",
    "Full-Stack Development",
    "Agentic AI",
    "Distributed Systems",
    "VIT Vellore",
    "AgentMesh",
    "QuantumCrypt",
    "FastAPI",
    "Next.js",
    "TypeScript"
  ],
  authors: [{ name: "Gowreesh A." }],
  openGraph: {
    title: "Gowreesh A. — Software Engineer",
    description: "I build web products, AI workflows, and the systems that connect them.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        {/* Anti-Flicker Script to apply stored theme before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('portfolio-theme');
                  var theme = stored === 'light' ? 'light' : 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-bg-primary text-text-primary antialiased font-sans selection:bg-accent-chartreuse selection:text-bg-primary min-h-screen relative overflow-x-hidden">
        <ThemeProvider>
          {/* Global Dynamic Circuit Board Background */}
          <CircuitBackground />
          {/* Page Content Layer */}
          <div className="relative z-10 w-full min-h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
