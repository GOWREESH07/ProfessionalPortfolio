"use client";

import { useState } from "react";

// ==========================================
// 01. AGENTMESH ARCHITECTURAL DIAGRAM
// ==========================================
export function AgentMeshDiagram() {
  const [activeNode, setActiveNode] = useState<number | null>(0);

  const nodes = [
    { id: 0, name: "Orchestrator Node", port: ":8000", role: "Graph Planning & A2A Task Dispatch", x: 250, y: 50 },
    { id: 1, name: "Context / State Broker", port: ":8001", role: "Working Memory & JSON State Diffs", x: 100, y: 150 },
    { id: 2, name: "MCP Tool Gateway", port: ":8002", role: "Sandboxed Local CLI & Shell Execution", x: 400, y: 150 },
    { id: 3, name: "Web Surfacing Node", port: ":8003", role: "External Sourcing & Grounding Ingestion", x: 100, y: 280 },
    { id: 4, name: "Verification Critic", port: ":8004", role: "Adversarial Hallucination Checks", x: 400, y: 280 },
    { id: 5, name: "Synthesis Gateway", port: ":8005", role: "Stream Telemetry & Deliverable Packaging", x: 250, y: 350 },
  ];

  return (
    <div className="w-full bg-bg-card hairline-all p-5 rounded-none flex flex-col gap-4">
      <div className="flex items-center justify-between hairline-b pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-none bg-accent-chartreuse inline-block"></span>
          <span className="mono-label text-text-primary">
            TOPOLOGY // 6-SERVICE MULTI-AGENT MESH (FASTAPI + A2A + MCP)
          </span>
        </div>
        <span className="font-mono text-[11px] text-accent-chartreuse bg-accent-chartreuse/10 px-2 py-0.5 hairline-all">
          INTERACTIVE PROTOCOL BUS
        </span>
      </div>

      <div className="relative w-full aspect-[500/380] max-h-[360px] bg-bg-secondary/70 hairline-all overflow-hidden p-2">
        <svg viewBox="0 0 500 400" className="w-full h-full">
          <defs>
            <pattern id="meshGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
            </pattern>
          </defs>

          <rect width="500" height="400" fill="url(#meshGrid)" />

          {/* Central Bus Connections */}
          <line x1="250" y1="75" x2="100" y2="150" stroke="rgba(215, 255, 56, 0.3)" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="250" y1="75" x2="400" y2="150" stroke="rgba(215, 255, 56, 0.3)" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="100" y1="175" x2="100" y2="280" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" />
          <line x1="400" y1="175" x2="400" y2="280" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" />
          <line x1="100" y1="305" x2="250" y2="350" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" />
          <line x1="400" y1="305" x2="250" y2="350" stroke="rgba(215, 255, 56, 0.4)" strokeWidth="1.5" strokeDasharray="4 2" />

          {/* Inter-Agent Cross-Check Pathway */}
          <line x1="100" y1="150" x2="400" y2="280" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
          <line x1="400" y1="150" x2="100" y2="280" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />

          {/* Center Protocol Badge */}
          <rect x="190" y="195" width="120" height="26" fill="var(--bg-card)" stroke="var(--accent-chartreuse)" strokeOpacity="0.5" strokeWidth="1" />
          <text x="250" y="212" textAnchor="middle" fill="var(--accent-chartreuse)" fontSize="9" fontFamily="monospace" letterSpacing="0.08em">
            A2A EVENT BUS
          </text>

          {/* Node Elements */}
          {nodes.map((node) => {
            const isSelected = activeNode === node.id;
            return (
              <g
                key={node.id}
                onClick={() => setActiveNode(node.id)}
                className="cursor-pointer transition-technical"
              >
                <rect
                  x={node.x - 70}
                  y={node.y - 20}
                  width="140"
                  height="44"
                  fill={isSelected ? "var(--bg-elevated)" : "var(--bg-card)"}
                  stroke={isSelected ? "var(--accent-chartreuse)" : "var(--border-subtle)"}
                  strokeWidth={isSelected ? "1.5" : "1"}
                />
                <circle
                  cx={node.x - 55}
                  cy={node.y - 2}
                  r="3.5"
                  fill={isSelected ? "var(--accent-chartreuse)" : "var(--text-muted)"}
                />
                <text
                  x={node.x - 44}
                  y={node.y - 5}
                  fill={isSelected ? "var(--accent-chartreuse)" : "var(--text-primary)"}
                  fontSize="10"
                  fontFamily="sans-serif"
                  fontWeight="600"
                >
                  {node.name.length > 17 ? node.name.slice(0, 16) + "..." : node.name}
                </text>
                <text
                  x={node.x - 44}
                  y={node.y + 12}
                  fill={isSelected ? "var(--accent-chartreuse)" : "var(--text-secondary)"}
                  fontSize="8.5"
                  fontFamily="monospace"
                >
                  FASTAPI {node.port}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {activeNode !== null && (
        <div className="bg-bg-secondary p-3.5 hairline-all flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
          <div>
            <span className="mono-label text-accent-chartreuse">ACTIVE SERVICE // </span>
            <span className="font-semibold text-text-primary ml-1">{nodes[activeNode].name}</span>
            <span className="font-mono text-text-muted ml-2">({nodes[activeNode].port})</span>
            <p className="text-text-secondary mt-1 text-[11px] font-sans">
              {nodes[activeNode].role}
            </p>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] text-text-muted shrink-0">
            <span className="px-2 py-0.5 bg-bg-card hairline-all">A2A_COMPLIANT</span>
            <span className="px-2 py-0.5 bg-bg-card hairline-all text-accent-chartreuse">MCP_V1</span>
          </div>
        </div>
      )}
    </div>
  );
}

// ==========================================
// 02. BRAIN TUMOR MRI RESEARCH PIPELINE
// ==========================================
export function BrainTumorMriDiagram() {
  const [activeModule, setActiveModule] = useState<"pipeline" | "classes" | "ood" | "gradcam">("pipeline");

  const classes = [
    { name: "Glioma", desc: "Glial cell infiltration; diffuse boundaries across white matter" },
    { name: "Meningioma", desc: "Extra-axial dural attachment; distinct encapsulated margins" },
    { name: "Pituitary", desc: "Sellar/parasellar region lesion; neuroendocrine interface" },
    { name: "No Tumor", desc: "Normal axial cranial geometry; baseline anatomical symmetry" },
  ];

  return (
    <div className="w-full bg-bg-card hairline-all p-5 rounded-none flex flex-col gap-4">
      <div className="flex items-center justify-between hairline-b pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-none bg-accent-cyan inline-block"></span>
          <span className="mono-label text-text-primary">
            RESEARCH PIPELINE // 4-CLASS MRI CLASSIFIER & GRAD-CAM EXPLAINABILITY
          </span>
        </div>
        <span className="font-mono text-[11px] text-accent-cyan bg-accent-cyan/10 px-2 py-0.5 hairline-all">
          VAL ACC: ~98.7%–98.9%
        </span>
      </div>

      {/* Interactive Tabs */}
      <div className="grid grid-cols-4 gap-2 font-mono text-xs">
        <button
          onClick={() => setActiveModule("pipeline")}
          className={`py-2 px-3 hairline-all transition-technical ${
            activeModule === "pipeline" ? "bg-bg-elevated border-accent-cyan text-text-primary" : "bg-bg-secondary text-text-muted hover:text-text-primary"
          }`}
        >
          01 // ARCHITECTURE
        </button>
        <button
          onClick={() => setActiveModule("classes")}
          className={`py-2 px-3 hairline-all transition-technical ${
            activeModule === "classes" ? "bg-bg-elevated border-accent-cyan text-text-primary" : "bg-bg-secondary text-text-muted hover:text-text-primary"
          }`}
        >
          02 // 4 CLASSES
        </button>
        <button
          onClick={() => setActiveModule("ood")}
          className={`py-2 px-3 hairline-all transition-technical ${
            activeModule === "ood" ? "bg-bg-elevated border-accent-cyan text-text-primary" : "bg-bg-secondary text-text-muted hover:text-text-primary"
          }`}
        >
          03 // OOD GATE & MC
        </button>
        <button
          onClick={() => setActiveModule("gradcam")}
          className={`py-2 px-3 hairline-all transition-technical ${
            activeModule === "gradcam" ? "bg-bg-elevated border-accent-cyan text-text-primary" : "bg-bg-secondary text-text-muted hover:text-text-primary"
          }`}
        >
          04 // GRAD-CAM
        </button>
      </div>

      {/* Main Diagram Canvas */}
      <div className="bg-bg-secondary p-4 hairline-all min-h-[220px] flex flex-col justify-center">
        {activeModule === "pipeline" && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2 text-center font-mono text-[11px]">
              <div className="p-3 bg-bg-card hairline-all">
                <span className="text-text-muted block text-[9px]">STEP 01</span>
                <span className="font-semibold text-text-primary">Axial MRI Scan</span>
                <span className="text-[10px] text-text-muted block mt-1">224×224 Normalization</span>
              </div>
              <div className="p-3 bg-bg-card hairline-all border-accent-cyan/50">
                <span className="text-accent-cyan block text-[9px]">STEP 02 (GATE)</span>
                <span className="font-semibold text-text-primary">OOD Quality Gate</span>
                <span className="text-[10px] text-text-muted block mt-1">Reject Non-MRI</span>
              </div>
              <div className="p-3 bg-bg-card hairline-all">
                <span className="text-text-muted block text-[9px]">STEP 03 (CORE)</span>
                <span className="font-semibold text-text-primary">Custom CNN / B0</span>
                <span className="text-[10px] text-accent-cyan block mt-1">5-Block Backbone</span>
              </div>
              <div className="p-3 bg-bg-card hairline-all">
                <span className="text-text-muted block text-[9px]">STEP 04</span>
                <span className="font-semibold text-text-primary">MC Dropout</span>
                <span className="text-[10px] text-text-muted block mt-1">Uncertainty Bounds</span>
              </div>
              <div className="p-3 bg-bg-card hairline-all">
                <span className="text-text-muted block text-[9px]">STEP 05</span>
                <span className="font-semibold text-text-primary">Grad-CAM Map</span>
                <span className="text-[10px] text-text-muted block mt-1">Anatomical Heatmap</span>
              </div>
            </div>
            <p className="font-sans text-xs text-text-secondary leading-relaxed text-center max-w-2xl mx-auto">
              Comparative analysis between a 5-block custom CNN (3→32→64→128→256→512 channels) and fine-tuned EfficientNet-B0 with explicit validation accuracy tracking (~98.7%–98.9%).
            </p>
          </div>
        )}

        {activeModule === "classes" && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {classes.map((c, i) => (
              <div key={c.name} className="p-3 bg-bg-card hairline-all space-y-1">
                <span className="font-mono text-xs text-accent-cyan font-semibold">
                  CLASS 0{i + 1}
                </span>
                <h4 className="font-display font-semibold text-sm text-text-primary">{c.name}</h4>
                <p className="font-sans text-[11px] text-text-secondary">{c.desc}</p>
              </div>
            ))}
          </div>
        )}

        {activeModule === "ood" && (
          <div className="space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between hairline-b pb-2">
              <span className="text-accent-cyan">OUT-OF-DISTRIBUTION QUALITY & REJECTION GATE</span>
              <span className="text-text-muted">THRESHOLD // τ = 0.82</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-sans">
              <div className="p-3 bg-bg-card hairline-all space-y-1">
                <span className="font-mono text-[10px] text-text-muted uppercase">OOD Gate Mechanism</span>
                <p className="text-xs text-text-secondary">
                  Measures latent feature reconstruction error against known brain MRI distributions. Prevents overconfident classification on corrupted or non-cranial images.
                </p>
              </div>
              <div className="p-3 bg-bg-card hairline-all space-y-1">
                <span className="font-mono text-[10px] text-text-muted uppercase">Monte Carlo Uncertainty</span>
                <p className="text-xs text-text-secondary">
                  Executes stochastic forward passes with active dropout layers (p = 0.25) to quantify epistemic variance and empirical confidence intervals.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeModule === "gradcam" && (
          <div className="space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between hairline-b pb-2">
              <span className="text-accent-cyan">GRAD-CAM VISUAL EXPLANATION (LAST CONV LAYER)</span>
              <span className="text-text-muted">WEIGHTED FEATURE MAPS</span>
            </div>
            <div className="p-3 bg-bg-card hairline-all flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-xs text-text-secondary">
              <div className="space-y-1 max-w-lg">
                <span className="font-mono text-accent-cyan text-[10px]">ANATOMICAL LOCALIZATION</span>
                <p>
                  Computes gradients of the target class score yᶜ with respect to feature maps Aᵏ of the final convolutional block, producing coarse 2D heatmaps highlighting tumor boundaries.
                </p>
              </div>
              <div className="shrink-0 font-mono text-[11px] px-3 py-1.5 bg-bg-secondary hairline-all text-accent-cyan">
                L_Grad-CAM = ReLU(∑ α_k A^k)
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="text-[10px] font-mono text-text-muted flex items-center justify-between">
        <span>* REPORTED METRIC: VALIDATION ACCURACY ACROSS RECORDED CHECKPOINTS</span>
        <span className="text-accent-cyan">IP-FOCUSED RESEARCH PROTOTYPE // NON-CLINICAL</span>
      </div>
    </div>
  );
}

// ==========================================
// 03. AEGIS ATTACKER VS DEFENDER CONSOLE
// ==========================================
export function AegisConsoleDiagram() {
  const [activeStage, setActiveStage] = useState(0);

  const killChain = [
    {
      stage: "STAGE 01",
      attack: "Reconnaissance & Footprinting",
      attackDetail: "Automated port sweeps, endpoint discovery, and OpenAPI schema enumeration on :8001.",
      defense: "Surveillance & Rate Limiting",
      defenseDetail: "Surveillance layer flags abnormal probe density, logging IP signatures to Redis bus.",
    },
    {
      stage: "STAGE 02",
      attack: "Initial Access & Injection",
      attackDetail: "Adversarial prompt payloads and SQLi probe injections directed at unauthenticated routes.",
      defense: "Council Heuristic Evaluation",
      defenseDetail: "Council triggers multi-evaluator consensus, isolating payload and quarantining token.",
    },
    {
      stage: "STAGE 03",
      attack: "Lateral Traversal",
      attackDetail: "Attempts to traverse internal microservices via forged authorization headers.",
      defense: "Escalation & Network Segmentation",
      defenseDetail: "Escalation manager dynamically terminates inter-service JWTs and segments routing tables.",
    },
    {
      stage: "STAGE 04",
      attack: "Privilege Escalation",
      attackDetail: "Role-spoofing vectors seeking root admin overrides on Redis state keys.",
      defense: "Response Engine Lockdown",
      defenseDetail: "Response engine revokes credentials, enforces emergency read-only state lock.",
    },
    {
      stage: "STAGE 05",
      attack: "Simulated Data Exfiltration",
      attackDetail: "Egress burst attempts to siphon simulated target database records to :8003.",
      defense: "Automated Healing & Incident Report",
      defenseDetail: "Healing engine resets compromised endpoints and generates PDF/Markdown forensic dossier.",
    },
  ];

  return (
    <div className="w-full bg-bg-card hairline-all p-5 rounded-none flex flex-col gap-4">
      <div className="flex items-center justify-between hairline-b pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-none bg-accent-amber inline-block"></span>
          <span className="mono-label text-text-primary">
            AEGIS SIMULATION // 5-STAGE ATTACK KILL CHAIN VS AUTONOMOUS DEFENSE
          </span>
        </div>
        <span className="font-mono text-[11px] text-accent-amber bg-accent-amber/10 px-2 py-0.5 hairline-all">
          DUAL-CONSOLE ARCHITECTURE
        </span>
      </div>

      {/* 5-Stage Stepper */}
      <div className="grid grid-cols-5 gap-1 font-mono text-xs">
        {killChain.map((k, i) => (
          <button
            key={k.stage}
            onClick={() => setActiveStage(i)}
            className={`py-2 px-1 text-center hairline-all transition-technical ${
              activeStage === i
                ? "bg-bg-elevated border-accent-amber text-text-primary"
                : "bg-bg-secondary text-text-muted hover:text-text-primary"
            }`}
          >
            <span className="text-[10px] block">{k.stage}</span>
            <span className="text-[9px] text-text-muted hidden sm:inline">{k.attack.split(" ")[0]}</span>
          </button>
        ))}
      </div>

      {/* Dual Console Split View: Attacker vs Defender */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Attacker Console (Simulated Red Team) */}
        <div className="bg-bg-secondary p-4 hairline-all space-y-3 border-red-500/30">
          <div className="flex items-center justify-between hairline-b pb-2">
            <span className="mono-label text-red-400">ATTACKER CONSOLE (:8003)</span>
            <span className="font-mono text-[10px] text-red-400/80">SIMULATED ADVERSARY</span>
          </div>
          <div className="space-y-1">
            <span className="font-mono text-xs font-semibold text-text-primary">
              {killChain[activeStage].attack}
            </span>
            <p className="font-sans text-xs text-text-secondary leading-relaxed">
              {killChain[activeStage].attackDetail}
            </p>
          </div>
          <div className="font-mono text-[10px] text-text-muted pt-2 hairline-t">
            TARGET: http://target:8001 // PAYLOAD_DISPATCH
          </div>
        </div>

        {/* Defender Console (Autonomous Blue Team) */}
        <div className="bg-bg-secondary p-4 hairline-all space-y-3 border-accent-chartreuse/30">
          <div className="flex items-center justify-between hairline-b pb-2">
            <span className="mono-label text-accent-chartreuse">DEFENDER PIPELINE (FASTAPI + REDIS)</span>
            <span className="font-mono text-[10px] text-accent-chartreuse/80">AUTONOMOUS MITIGATION</span>
          </div>
          <div className="space-y-1">
            <span className="font-mono text-xs font-semibold text-text-primary">
              {killChain[activeStage].defense}
            </span>
            <p className="font-sans text-xs text-text-secondary leading-relaxed">
              {killChain[activeStage].defenseDetail}
            </p>
          </div>
          <div className="font-mono text-[10px] text-text-muted pt-2 hairline-t flex items-center justify-between">
            <span>REDIS_EVENT_BUS: ACK</span>
            <span className="text-accent-chartreuse">STATE: MITIGATED</span>
          </div>
        </div>
      </div>

      <div className="text-[10px] font-mono text-text-muted flex items-center justify-between pt-1">
        <span>FRAMEWORK: FASTAPI + REDIS ASYNC STATE + DOCKER COMPOSE</span>
        <span className="text-accent-amber">SIMULATION RUNTIME ONLY</span>
      </div>
    </div>
  );
}

// ==========================================
// 04. SMARTEDGE HARDWARE-TO-CLOUD PIPELINE
// ==========================================
export function SmartEdgeDiagram() {
  const [activeStage, setActiveStage] = useState(0);

  const pipeline = [
    {
      layer: "01 // PHYSICAL",
      name: "Physical AC Load & PZEM Sensor",
      desc: "Measures 230V AC mains parameters: RMS voltage, current via current transformer, active wattage, cumulative kWh, frequency (Hz), and power factor.",
      spec: "PZEM-004T v3.0 // 100A Current Transformer",
    },
    {
      layer: "02 // EMBEDDED",
      name: "ESP32 SoC Microcontroller",
      desc: "Polls sensor over UART serial bus, executes sliding-window noise smoothing, validates CRC checksums, and dispatches JSON payloads over Wi-Fi.",
      spec: "ESP32 Dual-Core 240MHz // PlatformIO C++",
    },
    {
      layer: "03 // BACKEND",
      name: "Spring Boot Microservice",
      desc: "Receives sensor streams, enforces rate-limiting, persists high-frequency electrical telemetry into relational MySQL storage via Spring Data JPA.",
      spec: "Spring Boot 3.x (Java) + JPA/Hibernate + WebSocket",
    },
    {
      layer: "04 // ANALYTICS",
      name: "Machine Learning Intelligence",
      desc: "Runs statistical anomaly detection to catch electrical brownouts/spikes and applies load classification models to identify active appliances.",
      spec: "Non-Intrusive Load Monitoring (NILM) Heuristics",
    },
    {
      layer: "05 // TELEMETRY",
      name: "React Monitoring Dashboard",
      desc: "Visualizes real-time power curves, historical energy audits, projected billing estimates, and dispatches threshold fault alerts.",
      spec: "React + Tailwind CSS + Time-Series Visualizer",
    },
  ];

  return (
    <div className="w-full bg-bg-card hairline-all p-5 rounded-none flex flex-col gap-4">
      <div className="flex items-center justify-between hairline-b pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-none bg-accent-chartreuse inline-block"></span>
          <span className="mono-label text-text-primary">
            SMARTEDGE DATA PIPELINE // HARDWARE SENSING TO CLOUD DASHBOARD
          </span>
        </div>
        <span className="font-mono text-[11px] text-accent-chartreuse bg-accent-chartreuse/10 px-2 py-0.5 hairline-all">
          ESP32 + SPRING BOOT + REACT
        </span>
      </div>

      {/* Visual Pipeline Flow */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
        {pipeline.map((p, i) => (
          <button
            key={p.layer}
            onClick={() => setActiveStage(i)}
            className={`p-3 text-left hairline-all transition-technical flex flex-col justify-between h-28 ${
              activeStage === i
                ? "bg-bg-elevated border-accent-chartreuse"
                : "bg-bg-secondary hover:bg-bg-card"
            }`}
          >
            <span className="font-mono text-[10px] text-accent-chartreuse">{p.layer}</span>
            <h5 className="font-display font-semibold text-xs text-text-primary leading-tight">
              {p.name.split(" ")[0]} {p.name.split(" ")[1]}
            </h5>
            <span className="font-mono text-[9px] text-text-muted truncate">
              {p.spec.split("//")[0]}
            </span>
          </button>
        ))}
      </div>

      {/* Active Stage Detail */}
      <div className="bg-bg-secondary p-4 hairline-all space-y-2">
        <div className="flex items-center justify-between">
          <span className="mono-label text-accent-chartreuse">
            {pipeline[activeStage].name}
          </span>
          <span className="font-mono text-xs text-text-muted">
            {pipeline[activeStage].spec}
          </span>
        </div>
        <p className="font-sans text-xs text-text-secondary leading-relaxed">
          {pipeline[activeStage].desc}
        </p>
      </div>

      <div className="text-[10px] font-mono text-text-muted flex items-center justify-between">
        <span>ACQUISITION RATE: 1000ms SAMPLING INTERVAL</span>
        <span className="text-accent-chartreuse">HARDWARE-TO-CLOUD VERIFIED</span>
      </div>
    </div>
  );
}

// ==========================================
// 05. REVIEW RADAR PRODUCT PIPELINE
// ==========================================
export function ReviewRadarDiagram() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: "01 // SCRAPING",
      title: "ScraperAPI Review Ingestion",
      desc: "Routes target e-commerce listing URLs through ScraperAPI residential proxy pools, cleanly extracting review bodies, star ratings, dates, and verified-purchase indicators without triggering CAPTCHA blocks.",
    },
    {
      step: "02 // ANALYSIS",
      title: "Gemini Structured NLP Engine",
      desc: "Feeds raw review corpora into Google Gemini 1.5 using constrained JSON schema outputs to flag synthetic linguistic markers, repeated token phrases, and promotional astroturfing.",
    },
    {
      step: "03 // DATABASE",
      title: "Supabase Cache & Persistence",
      desc: "Caches calculated authenticity scores and review metadata in Supabase PostgreSQL, avoiding duplicate scraper API calls and tracking score drift over time.",
    },
    {
      step: "04 // VERIFICATION",
      title: "Vercel Edge Deployment",
      desc: "Delivers an accessible Next.js UI on Vercel with responsive breakdown charts showing genuine vs flagged review distributions and key product pros/cons.",
    },
  ];

  return (
    <div className="w-full bg-bg-card hairline-all p-5 rounded-none flex flex-col gap-4">
      <div className="flex items-center justify-between hairline-b pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-none bg-accent-chartreuse inline-block"></span>
          <span className="mono-label text-text-primary">
            REVIEW RADAR PIPELINE // SCRAPERAPI + GEMINI + SUPABASE + VERCEL
          </span>
        </div>
        <span className="font-mono text-[11px] text-accent-chartreuse bg-accent-chartreuse/10 px-2 py-0.5 hairline-all">
          DEPLOYED ON VERCEL
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
        {steps.map((s, i) => (
          <button
            key={s.step}
            onClick={() => setActiveStep(i)}
            className={`p-3 text-left hairline-all transition-technical ${
              activeStep === i
                ? "bg-bg-elevated border-accent-chartreuse"
                : "bg-bg-secondary hover:bg-bg-card"
            }`}
          >
            <span className="font-mono text-[10px] text-accent-chartreuse block">{s.step}</span>
            <h5 className="font-display font-semibold text-xs text-text-primary mt-1">
              {s.title}
            </h5>
          </button>
        ))}
      </div>

      <div className="bg-bg-secondary p-4 hairline-all space-y-2">
        <span className="mono-label text-accent-chartreuse">
          {steps[activeStep].title}
        </span>
        <p className="font-sans text-xs text-text-secondary leading-relaxed">
          {steps[activeStep].desc}
        </p>
      </div>

      <div className="text-[10px] font-mono text-text-muted flex items-center justify-between">
        <span>RUNTIME: NEXT.JS APP ROUTER + SERVER ACTIONS</span>
        <span className="text-accent-chartreuse">LIVE PRODUCT ARCHITECTURE</span>
      </div>
    </div>
  );
}

// ==========================================
// 06. CODESENSE: SOFTWARE QUALITY ANALYSER
// ==========================================
export function CodeSenseQualityDiagram() {
  const [activeTab, setActiveTab] = useState<"static" | "ml" | "aicode">("static");

  return (
    <div className="w-full bg-bg-card hairline-all p-5 rounded-none flex flex-col gap-4">
      <div className="flex items-center justify-between hairline-b pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-none bg-accent-cyan inline-block"></span>
          <span className="mono-label text-text-primary">
            CODESENSE ARCHITECTURE // STATIC METRICS + ML DEFECT + AI-CODE DETECTION
          </span>
        </div>
        <span className="font-mono text-[11px] text-text-muted">TEAM PROJECT (ISWE404L)</span>
      </div>

      <div className="grid grid-cols-3 gap-2 font-mono text-xs">
        <button
          onClick={() => setActiveTab("static")}
          className={`py-2 px-3 hairline-all transition-technical ${
            activeTab === "static" ? "bg-bg-elevated border-accent-cyan text-text-primary" : "bg-bg-secondary text-text-muted"
          }`}
        >
          01 // STATIC METRICS
        </button>
        <button
          onClick={() => setActiveTab("ml")}
          className={`py-2 px-3 hairline-all transition-technical ${
            activeTab === "ml" ? "bg-bg-elevated border-accent-cyan text-text-primary" : "bg-bg-secondary text-text-muted"
          }`}
        >
          02 // ML DEFECT PREDICTION
        </button>
        <button
          onClick={() => setActiveTab("aicode")}
          className={`py-2 px-3 hairline-all transition-technical ${
            activeTab === "aicode" ? "bg-bg-elevated border-accent-cyan text-text-primary" : "bg-bg-secondary text-text-muted"
          }`}
        >
          03 // AI-CODE DETECTOR
        </button>
      </div>

      <div className="bg-bg-secondary p-4 hairline-all min-h-[140px] flex flex-col justify-center font-sans text-xs text-text-secondary leading-relaxed">
        {activeTab === "static" && (
          <div className="space-y-2">
            <span className="mono-label text-accent-cyan">HALSTEAD & MCCABE COMPLEXITY</span>
            <p>
              Traverses Abstract Syntax Trees (AST) to compute Halstead program volume, difficulty, effort, McCabe Cyclomatic complexity, and maintainability index scores across individual functions and source files.
            </p>
          </div>
        )}
        {activeTab === "ml" && (
          <div className="space-y-2">
            <span className="mono-label text-accent-cyan">SCIKIT-LEARN DEFECT CLASSIFICATION</span>
            <p>
              Applies supervised machine-learning models trained on historical software repository defect datasets to correlate code metrics with defect probabilities, flagging high-risk files prior to deployment.
            </p>
          </div>
        )}
        {activeTab === "aicode" && (
          <div className="space-y-2">
            <span className="mono-label text-accent-cyan">SYNTACTIC PERPLEXITY & AI ORIGIN</span>
            <p>
              Examines token distribution uniformity and comment-to-code structural characteristics to differentiate human developer patterns from automated LLM generation signatures.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ==========================================
// 07. LEARN MATE ARCHITECTURE
// ==========================================
export function LearnMateDiagram() {
  return (
    <div className="w-full bg-bg-card hairline-all p-5 rounded-none flex flex-col gap-4">
      <div className="flex items-center justify-between hairline-b pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-none bg-accent-chartreuse inline-block"></span>
          <span className="mono-label text-text-primary">
            LEARNMATE PIPELINE // DESIGN PATTERN TUTOR & ADAPTIVE QUIZ
          </span>
        </div>
        <span className="font-mono text-[11px] text-text-muted">NEXT.JS + FASTAPI + GEMINI + SUPABASE</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-bg-secondary p-3.5 hairline-all space-y-1">
          <span className="font-mono text-[10px] text-accent-chartreuse">CLIENT LAYER</span>
          <h5 className="font-display font-semibold text-xs text-text-primary">Next.js 15 Client</h5>
          <p className="font-sans text-[11px] text-text-secondary">
            Design pattern review workflows, interactive quiz runners, and personalized progress dashboard.
          </p>
        </div>
        <div className="bg-bg-secondary p-3.5 hairline-all space-y-1">
          <span className="font-mono text-[10px] text-accent-chartreuse">INTELLIGENCE</span>
          <h5 className="font-display font-semibold text-xs text-text-primary">FastAPI & Gemini</h5>
          <p className="font-sans text-[11px] text-text-secondary">
            AI explanation broker generating dynamic questions and code critique targeted to student gaps.
          </p>
        </div>
        <div className="bg-bg-secondary p-3.5 hairline-all space-y-1">
          <span className="font-mono text-[10px] text-accent-chartreuse">DATA PERSISTENCE</span>
          <h5 className="font-display font-semibold text-xs text-text-primary">Supabase Store</h5>
          <p className="font-sans text-[11px] text-text-secondary">
            PostgreSQL relational store tracking student mastery levels, quiz attempts, and roadmaps.
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 08. QUANTUMCRYPT CRYPTOGRAPHIC DIAGRAM
// ==========================================
export function QuantumCryptDiagram() {
  const [activeStage, setActiveStage] = useState<"lorenz" | "arnold" | "hash">("lorenz");

  return (
    <div className="w-full bg-bg-card hairline-all p-5 rounded-none flex flex-col gap-4">
      <div className="flex items-center justify-between hairline-b pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-none bg-accent-amber inline-block"></span>
          <span className="mono-label text-text-primary">
            CIPHER TOPOLOGY // CHAOS DYNAMICS & PBKDF2 HYBRID SYSTEM
          </span>
        </div>
        <span className="font-mono text-[11px] text-accent-amber bg-accent-amber/10 px-2 py-0.5 hairline-all">
          ENTROPY: 7.994 BITS/BYTE
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <button
          onClick={() => setActiveStage("lorenz")}
          className={`p-3 text-left hairline-all transition-technical ${
            activeStage === "lorenz"
              ? "bg-bg-elevated border-accent-amber"
              : "bg-bg-secondary hover:bg-bg-card"
          }`}
        >
          <span className="font-mono text-[10px] text-accent-amber block mb-1">
            PHASE 01 // NON-LINEAR DYNAMICS
          </span>
          <h4 className="font-display text-xs font-semibold text-text-primary">
            Lorenz Chaotic Attractor
          </h4>
          <span className="font-mono text-[10px] text-text-muted mt-2 block">
            dx/dt = σ(y - x) · dy/dt = x(ρ - z) - y
          </span>
        </button>

        <button
          onClick={() => setActiveStage("arnold")}
          className={`p-3 text-left hairline-all transition-technical ${
            activeStage === "arnold"
              ? "bg-bg-elevated border-accent-amber"
              : "bg-bg-secondary hover:bg-bg-card"
          }`}
        >
          <span className="font-mono text-[10px] text-accent-amber block mb-1">
            PHASE 02 // 2D PERMUTATION
          </span>
          <h4 className="font-display text-xs font-semibold text-text-primary">
            Arnold&apos;s Cat Map Diffusion
          </h4>
          <span className="font-mono text-[10px] text-text-muted mt-2 block">
            [x&apos;, y&apos;]ᵀ = [1 1; 1 2][x, y]ᵀ mod N
          </span>
        </button>

        <button
          onClick={() => setActiveStage("hash")}
          className={`p-3 text-left hairline-all transition-technical ${
            activeStage === "hash"
              ? "bg-bg-elevated border-accent-amber"
              : "bg-bg-secondary hover:bg-bg-card"
          }`}
        >
          <span className="font-mono text-[10px] text-accent-amber block mb-1">
            PHASE 03 // INTEGRITY & RBAC
          </span>
          <h4 className="font-display text-xs font-semibold text-text-primary">
            PBKDF2 & SHA-256 Digest
          </h4>
          <span className="font-mono text-[10px] text-text-muted mt-2 block">
            100,000 Rounds + 16-Byte Random Salt
          </span>
        </button>
      </div>

      <div className="bg-bg-secondary p-4 hairline-all">
        {activeStage === "lorenz" && (
          <div className="space-y-1.5">
            <span className="mono-label text-accent-amber">
              MECHANISM // PSEUDO-RANDOM FLOAT SEQUENCE GENERATION
            </span>
            <p className="text-xs text-text-secondary leading-relaxed font-sans">
              Solves the 3D non-linear Lorenz differential equations using 4th-order Runge-Kutta integration with high initial sensitivity.
              Generates deterministic yet non-periodic keystreams resistant to linear cryptanalysis.
            </p>
          </div>
        )}

        {activeStage === "arnold" && (
          <div className="space-y-1.5">
            <span className="mono-label text-accent-amber">
              MECHANISM // TWO-DIMENSIONAL SPATIAL BYTE SCRAMBLING
            </span>
            <p className="text-xs text-text-secondary leading-relaxed font-sans">
              Transforms byte indices across square matrix planes, disrupting adjacent pixel/byte correlations.
              Guarantees high diffusion (Avalanche Effect) where a single-bit input shift cascades across the entire block.
            </p>
          </div>
        )}

        {activeStage === "hash" && (
          <div className="space-y-1.5">
            <span className="mono-label text-accent-amber">
              MECHANISM // ROLE-BASED ACCESS & DIGEST INTEGRITY
            </span>
            <p className="text-xs text-text-secondary leading-relaxed font-sans">
              Guards file access using cryptographic PBKDF2 HMAC-SHA256 password derivation.
              Calculates SHA-256 pre- and post-encryption digests to confirm zero bit-corruption during transit.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ==========================================
// 09. CAREER GUIDANCE PIPELINE DIAGRAM
// ==========================================
export function CareerGuidanceDiagram() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      num: "01",
      title: "Psychometric Input",
      tech: "TypeScript / Client Form",
      desc: "Captures candidate technical competencies, preferences, and academic benchmarks as normalized multidimensional vectors.",
    },
    {
      num: "02",
      title: "Gemini 1.5 Reasoning Core",
      tech: "Google Gemini API (JSON Schema)",
      desc: "Executes multi-turn career path projections with strictly enforced JSON schemas, preventing unstructured hallucinations.",
    },
    {
      num: "03",
      title: "Algorithmic ATS Scorer",
      tech: "Regex & Semantic Tokenizer",
      desc: "Scores resumes against target industry skill taxonomies, producing quantifiable keyword gap metrics and structural revisions.",
    },
    {
      num: "04",
      title: "Geo & Calendar Dispatch",
      tech: "Google Maps & Calendar APIs",
      desc: "Pins regional tech hubs and meetups via Maps API and schedules roadmap milestone deadlines straight to user calendars.",
    },
  ];

  return (
    <div className="w-full bg-bg-card hairline-all p-5 rounded-none flex flex-col gap-4">
      <div className="flex items-center justify-between hairline-b pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-none bg-accent-chartreuse inline-block"></span>
          <span className="mono-label text-text-primary">
            PIPELINE // MULTIMODAL CAREER DISCOVERY & GEO-SPATIAL DISPATCH
          </span>
        </div>
        <span className="font-mono text-[11px] text-text-muted">STAGE {activeStep + 1} OF 4</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {steps.map((step, idx) => {
          const isSelected = activeStep === idx;
          return (
            <div
              key={step.num}
              onClick={() => setActiveStep(idx)}
              className={`p-3.5 hairline-all cursor-pointer transition-technical flex flex-col justify-between h-36 ${
                isSelected
                  ? "bg-bg-elevated border-accent-chartreuse"
                  : "bg-bg-secondary hover:bg-bg-card"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-semibold text-accent-chartreuse">
                    STAGE {step.num}
                  </span>
                  <span className="w-1.5 h-1.5 bg-text-muted rounded-full"></span>
                </div>
                <h4 className="font-display font-medium text-xs text-text-primary leading-tight">
                  {step.title}
                </h4>
              </div>
              <div>
                <span className="font-mono text-[10px] text-text-muted block truncate">
                  {step.tech}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-bg-secondary p-4 hairline-all flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="mono-label text-accent-chartreuse">
            EXECUTION SPECIFICATION // {steps[activeStep].title}
          </span>
          <span className="font-mono text-[11px] text-text-muted">
            {steps[activeStep].tech}
          </span>
        </div>
        <p className="text-xs text-text-secondary leading-relaxed font-sans">
          {steps[activeStep].desc}
        </p>
      </div>
    </div>
  );
}
