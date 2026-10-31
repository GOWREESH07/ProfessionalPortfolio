# Gowreesh A. — Systems & Engineering Portfolio

> **"I build web products, AI workflows, and the systems that connect them."**  
> Integrated M.Tech in Software Engineering — Vellore Institute of Technology (VIT), Vellore.

---

## 1. Overview & Architectural Direction

This repository contains the expanded personal engineering portfolio and systems laboratory of **Gowreesh A.** Designed and developed using the **Cinematic UI** methodology under the creative direction of *Robert Wise* (*The Andromeda Strain*) and *David Fincher* (*Zodiac*).

### Core Principles
- **An Engineer's Digital Field Journal**: Editorial layout, technical telemetry, monospace data annotations, and surgical negative space.
- **No AI Slop / No SaaS Templates**: Devoid of generic floating orbs, giant purple-blue gradients, identical rounded cards, or fake terminal windows.
- **Curated Hierarchy**: Projects are categorized by architectural maturity into Flagships, Agentic Evolution, Applied Research, Hardware/IoT, and Active Explorations.
- **Strictly Truthful Claims**: Verified model metrics (explicitly labeled validation accuracy), genuine hardware connections, real academic team projects, and accurate status labels.

---

## 2. Complete Project Inventory & Routes

### Flagship Engineering Projects (Dedicated Case Studies)
1. [**`/work/agentmesh`**](http://localhost:3000/work/agentmesh) — **AgentMesh**: Multi-agent proof-of-concept featuring six independent FastAPI microservices, A2A communication, and Model Context Protocol (MCP) tool execution with a live network canvas.
2. [**`/work/brain-tumor-ai`**](http://localhost:3000/work/brain-tumor-ai) — **Brain Tumor Classification & MRI Analysis**: Medical AI research prototype comparing a custom 5-block CNN and EfficientNet-B0 on a four-class MRI dataset (~98.7%–98.9% validation accuracy), with OOD gating, Monte Carlo dropout uncertainty, and Grad-CAM visual heatmaps.
3. [**`/work/aegis`**](http://localhost:3000/work/aegis) — **AEGIS: Agentic Attack & Defense Simulation**: Autonomous defense pipeline defending against a five-stage agentic attack kill chain with dual Attacker-vs-Defender consoles, FastAPI, Redis, and automated incident dossiers.
4. [**`/work/smartedge`**](http://localhost:3000/work/smartedge) — **SmartEdge: Adaptive Energy Intelligence**: End-to-end hardware-to-cloud electrical sub-meter pairing an ESP32 SoC and PZEM-004T sensor with a Spring Boot REST backend and a React dashboard featuring ML anomaly detection.
5. [**`/work/review-radar`**](http://localhost:3000/work/review-radar) — **Review Radar**: Deployed Next.js product on Vercel utilizing ScraperAPI residential proxies and Google Gemini 1.5 structured JSON schemas to evaluate e-commerce review authenticity.

### Research & Applied Engineering Case Studies
6. [**`/work/software-quality-analyser`**](http://localhost:3000/work/software-quality-analyser) — **CodeSense**: Academic team project combining Abstract Syntax Tree static metrics (Halstead, Cyclomatic) with Scikit-learn defect prediction and an AI-versus-human code origin classifier.
7. [**`/work/learnmate`**](http://localhost:3000/work/learnmate) — **LearnMate**: Academic team project providing an AI-powered personalized learning companion for software design patterns, adaptive quizzes, and structured study plans.
8. [**`/work/quantumcrypt`**](http://localhost:3000/work/quantumcrypt) — **QuantumCrypt**: Non-linear dynamical chaos cipher pairing Lorenz attractor float keystreams with Arnold's Cat Map 2D bit permutations, PBKDF2 hashing, and Shannon entropy verification (7.994 bits/byte).
9. [**`/work/career-guidance`**](http://localhost:3000/work/career-guidance) — **AI Career Guidance Counsellor**: Full-stack platform mapping psychometric vectors to Gemini structured reasoning, ATS resume gap analysis, and Google Maps & Calendar dispatch.

### Agentic Systems Evolution
- **AgentFlow → AgentMesh**: A visual comparative analysis tracing the architectural leap from a 3-agent sequential pipeline (AgentFlow) to a decentralized 6-service autonomous mesh (AgentMesh).

### Hardware & Embedded Systems
- **SmartEdge**: High-voltage electrical telemetry hardware.
- **ESP8266 Plant Care System**: Autonomous microcontroller plant hydration with soil moisture/DHT11 sensors and relay actuator control.

### Active Research Explorations
- **Distributed Task Scheduler**: Conceptual architecture exploring Raft consensus, worker heartbeats, and partitioned job rescheduling.
- **Warehouse AI Video Intelligence**: Conceptual multi-camera computer vision pipeline exploring zone monitoring and anomaly heuristics.

---

## 3. Explicit Project Removals (Purged)
- Smart Park AI
- Hospital Appointment Booking Chatbot
- MAUS Wearable-Sensor Workload Analysis
- Genetic Algorithm-based University Exam Timetable Scheduling

---

## 4. Run & Test Instructions

```bash
# Run Development Server
npm run dev

# Compile Production Build (All 14 static routes)
npm run build

# Run Production Server
npm run start
# Accessible at http://localhost:3000

# Run Automated Playwright Multi-Viewport Visual Audit
node scripts/screen-audit.mjs
```
Visual screening verifies 10 routes across 5 screen sizes (1440px, 1280px, 768px, 390px, 360px) with **0 horizontal overflow**.
