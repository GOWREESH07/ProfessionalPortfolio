# COMPILED IMPLEMENTATION SPECIFICATION
**Gowreesh A. | Cinematic Engineering Portfolio**

---

## 1. Technical Architecture & Constraints
- **Framework**: Next.js 15 (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS with custom editorial configuration
- **Icons**: Lucide React
- **Performance Budget**:
  - First Contentful Paint: < 0.8s
  - Cumulative Layout Shift: 0.00
  - Zero external blocking fonts; standard system font stack with Google Font fallbacks (`Space Grotesk`, `Inter`, `IBM Plex Mono`).
  - Zero external tracking or bloated JS libraries.

---

## 2. Directory Layout
```
src/
├── app/
│   ├── layout.tsx                # Root layout with metadata, fonts, and global navigation
│   ├── page.tsx                  # Primary home experience (Hero, Work, Archive, Stack, Timeline, Contact)
│   ├── globals.css               # Design tokens, custom grid lines, animation utilities
│   └── work/
│       ├── agentmesh/
│       │   └── page.tsx          # Dedicated case study: AgentMesh
│       ├── ai-career-guidance/
│       │   └── page.tsx          # Dedicated case study: AI Career Guidance Counsellor
│       └── quantumcrypt/
│           └── page.tsx          # Dedicated case study: QuantumCrypt
├── components/
│   ├── Navigation.tsx            # Minimal, responsive sticky navigation header
│   ├── Hero.tsx                  # Editorial hero with interactive SVG topology
│   ├── FeaturedProjects.tsx      # Deep architectural case study showcases
│   ├── ProjectDiagrams.tsx       # Bespoke SVG diagrams for each project
│   ├── FieldArchive.tsx          # Secondary projects & exploratory engineering
│   ├── TechStack.tsx             # Categorized technical index
│   ├── ExperienceTimeline.tsx    # SRI internship + VIT academic timeline
│   ├── Certifications.tsx        # OCI & AWS verified credentials ledger
│   ├── ContactSection.tsx        # High-impact dispatch section
│   └── Footer.tsx                # Refined footer with metadata & coordinates
└── data/
    └── portfolioData.ts          # Central source of truth for all verified content
```

---

## 3. Design Tokens (CSS Variables)
```css
:root {
  --bg-primary: #090a0c;
  --bg-secondary: #0f1115;
  --bg-card: #15171e;
  --border-hairline: rgba(255, 255, 255, 0.07);
  --border-strong: rgba(255, 255, 255, 0.16);
  --text-titanium: #f3f3f0;
  --text-muted: #8b8e98;
  --text-faint: #52555f;
  --accent-chartreuse: #d7ff38;
  --accent-amber: #e8a838;
  --accent-cyan: #38d7ff;
}
```

---

## 4. Content Verification & Accuracy Guarantee
- **Education**: Integrated M.Tech in Software Engineering at Vellore Institute of Technology, Vellore (2023 – Present).
- **Work Experience**: Data Analyst Intern at Strategic Research Insights, Chennai (May 2026 – June 2026).
- **Certifications**:
  1. Oracle Cloud Infrastructure Certified AI Foundations Associate
  2. Oracle Cloud Infrastructure Certified Data Science Professional
  3. Udemy Certified Cloud Practitioner CLF-C02
- **Featured Projects**:
  - AgentMesh (6-service FastAPI POC, A2A & MCP protocols, network canvas)
  - AI Career Guidance Counsellor (TypeScript, Gemini API, Maps API, Calendar API)
  - QuantumCrypt (Python, Streamlit, chaos-based file encryption, RBAC, entropy metrics)
- **Zero Hallucinated Metrics**: No fake user counts, no false production claims.
