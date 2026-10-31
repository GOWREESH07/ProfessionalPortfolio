export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  domain?: string;
  primaryDomain: "agentic" | "medical-ai" | "security" | "iot" | "product" | "software-eng" | "applied-ai";
  tier: "flagship" | "applied-research" | "evolution" | "hardware" | "exploration";
  year: string;
  status: "Verified POC" | "Implemented Prototype" | "Active Product" | "Academic Research" | "Team Project" | "Early Architecture";
  technologies: string[];
  summary: string;
  problem: string;
  approach: string;
  keyContributions: string[];
  architectureBreakdown: {
    title: string;
    description: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  githubUrl?: string;
  demoUrl?: string;
  diagramType?: "mesh" | "mri" | "aegis" | "smartedge" | "radar" | "pipeline" | "crypto" | "quality" | "learnmate";
  teamContext?: string;
}

export interface EvolutionItem {
  stage: string;
  title: string;
  role: string;
  architecture: string;
  agentsCount: number;
  protocol: string;
  limitationsSolved?: string[];
  description: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  focus: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  credentialCode?: string;
  domain: string;
}

export const PORTFOLIO_DATA = {
  engineer: {
    name: "Gowreesh A.",
    monogram: "GA",
    title: "Software Engineer",
    subtitles: ["Full-Stack Development", "Agentic AI", "Distributed Systems", "Applied ML"],
    statement: "I build web products, AI workflows, and the systems that connect them.",
    bio: "An Integrated M.Tech Software Engineering student at Vellore Institute of Technology working across full-stack development, distributed agent systems, AI-integrated applications, and hardware-connected engineering. Focused on architectural clarity, verifiable system security, and reliable autonomous workflows.",
    status: {
      availability: "Open to SWE, Full-Stack & AI Engineering Roles",
      location: "Vellore / Chennai, India",
      education: "Integrated M.Tech (SE), VIT Vellore (2023 – Present)",
    },
    contact: {
      email: "gowreeshappathurai@gmail.com",
      linkedin: "https://linkedin.com/in/gowreesh-ap",
      github: "https://github.com/GOWREESH07/",
    },
  },

  // ==========================================
  // 1. FEATURED FLAGSHIP ENGINEERING PROJECTS
  // ==========================================
  flagshipProjects: [
    {
      id: "agentmesh",
      slug: "agentmesh",
      title: "AgentMesh",
      tagline: "Multi-Agent System Proof-of-Concept & Network Telemetry",
      category: "Agentic AI / Distributed Systems",
      primaryDomain: "agentic",
      tier: "flagship",
      year: "2026",
      status: "Verified POC",
      technologies: ["Python", "FastAPI", "A2A Protocol", "Model Context Protocol (MCP)", "WebSockets", "Docker"],
      summary: "A multi-agent proof-of-concept featuring six independent FastAPI microservices integrated using the Agent-to-Agent (A2A) protocol and Anthropic's Model Context Protocol (MCP), accompanied by a live network canvas frontend.",
      problem: "Monolithic LLM chains suffer from cascading hallucinations, tightly coupled tool runtimes, and opaque failure points. When sub-tasks fail, the entire execution context is lost or silently corrupted.",
      approach: "Engineered an asynchronous network of six specialized FastAPI services communicating via standardized A2A discovery manifests and WebSocket telemetry. Integrated MCP servers for sandboxed, type-safe tool execution with dynamic peer handoff.",
      keyContributions: [
        "Architected six independent FastAPI agent services: Orchestrator (:8000), Context Broker (:8001), MCP Tool Runner (:8002), Web Agent (:8003), Critic Daemon (:8004), and Synthesis Gateway (:8005).",
        "Implemented standardized A2A protocol contracts for agent capability advertisement, payload validation, and negotiated task completion.",
        "Integrated Model Context Protocol (MCP) server endpoints enabling sandboxed, type-safe external tool execution across all nodes.",
        "Constructed a real-time visual network canvas that live-renders inter-agent communication, token handoffs, and verification cycles.",
        "Demonstrated resilient fallback patterns where failed sub-agent tasks trigger automated peer handoffs rather than orchestrator crashes."
      ],
      architectureBreakdown: [
        {
          title: "Service 01: Orchestrator & Dispatch Node (:8000)",
          description: "Deconstructs incoming client intent into an acyclic dependency graph, assigning sub-goals to specialist agents based on dynamic capability manifests."
        },
        {
          title: "Service 02: Context & State Broker (:8001)",
          description: "Maintains shared working memory and conversation checkpoints using structured JSON diffs, preventing state collision during parallel agent execution."
        },
        {
          title: "Service 03: MCP Tool Execution Gateway (:8002)",
          description: "Exposes sandboxed environment access and local CLI capabilities conforming to the Model Context Protocol specification with strict schema validation."
        },
        {
          title: "Service 04: Web Surfacing & Ingestion Node (:8003)",
          description: "Fetches, sanitizes, and condenses external web sources, providing citation provenance and ground-truth references for downstream reasoning."
        },
        {
          title: "Service 05: Verification & Critic Daemon (:8004)",
          description: "Runs adversarial sanity checks against intermediate agent outputs, flagging ungrounded claims and format drift before final synthesis."
        },
        {
          title: "Service 06: Synthesis & Delivery Gateway (:8005)",
          description: "Aggregates verified sub-agent payloads into a structured deliverable and streams execution telemetry over WebSockets to the client canvas."
        }
      ],
      specifications: [
        { label: "Architecture Type", value: "Microservice Multi-Agent Network" },
        { label: "Active Services", value: "6 Independent FastAPI Daemons" },
        { label: "Inter-Agent Protocol", value: "Agent-to-Agent (A2A) / REST" },
        { label: "Tool Protocol", value: "Model Context Protocol (MCP v1)" },
        { label: "Telemetry Transport", value: "WebSocket Event Bus + Checkpoints" }
      ],
      githubUrl: "https://github.com/GOWREESH07/",
      diagramType: "mesh"
    },
    {
      id: "brain-tumor-ai",
      slug: "brain-tumor-ai",
      title: "Brain Tumor Classification & MRI Analysis",
      tagline: "Comparative Deep Learning & Clinical Decision-Support Pipeline",
      category: "Medical AI / Deep Learning Research",
      primaryDomain: "medical-ai",
      tier: "flagship",
      year: "2026",
      status: "Academic Research",
      technologies: ["PyTorch", "Python", "EfficientNet-B0", "Custom CNN", "Grad-CAM", "Monte Carlo Dropout", "OOD Detection"],
      summary: "A research-prototype decision-support pipeline for four-class brain tumor MRI classification combining comparative deep learning models, out-of-distribution input gating, Monte Carlo dropout uncertainty estimation, and Grad-CAM visual explanations.",
      problem: "Standard clinical image classifiers act as opaque black boxes that output overconfident predictions even on blurred, corrupted, or non-brain imagery, lacking uncertainty bounds and visual rationale needed for clinical review.",
      approach: "Built a comparative pipeline evaluating a custom 5-block CNN (3→32→64→128→256→512 channels) and pre-trained EfficientNet-B0 across four axial MRI classes (Glioma, Meningioma, Pituitary, and No-Tumor). Wrapped the models with an automated OOD input gate, post-hoc temperature-scaled MC dropout for uncertainty quantification, and Grad-CAM explainability.",
      keyContributions: [
        "Developed and trained a 5-block custom CNN architecture alongside fine-tuned EfficientNet-B0 on a curated four-class axial brain MRI dataset.",
        "Achieved a reported validation accuracy of approximately 98.7%–98.9% across model checkpoints (reported explicitly as validation accuracy).",
        "Engineered an Out-of-Distribution (OOD) quality gate using reconstruction error and feature divergence to reject non-MRI and low-quality inputs before inference.",
        "Implemented Monte Carlo Dropout with temperature scaling over multiple forward passes to generate epistemic uncertainty metrics and confidence bounds.",
        "Generated Grad-CAM activation heatmaps overlaid on axial MRI scans to visually localize anatomical regions driving the classifier's predictions.",
        "Designed a human-in-the-loop correction logging architecture that triggers versioned confidence recalibration once per-class feedback thresholds are reached."
      ],
      architectureBreakdown: [
        {
          title: "Phase 01: Input & Quality Gate (OOD Detection)",
          description: "Filters incoming scans for valid axial MRI geometry, contrast distribution, and out-of-distribution anomalies before admitting inputs to the neural core."
        },
        {
          title: "Phase 02: Dual Model Architecture (Custom CNN vs EfficientNet-B0)",
          description: "Compares a lightweight 5-stage custom CNN against pre-trained EfficientNet-B0 feature backbones, optimizing latency and class separation."
        },
        {
          title: "Phase 03: Epistemic Uncertainty Estimation (MC Dropout)",
          description: "Runs multiple stochastic forward passes with active dropout layers to compute predictive variance and empirical uncertainty bounds."
        },
        {
          title: "Phase 04: Visual Explainability (Grad-CAM Heatmaps)",
          description: "Computes gradients of the target class score with respect to the final convolutional feature map, generating diagnostic localization heatmaps."
        },
        {
          title: "Phase 05: Human-in-the-Loop Recalibration Loop",
          description: "Logs radiologist corrections into a versioned feedback store, triggering scheduled threshold updates and temperature recalibration."
        }
      ],
      specifications: [
        { label: "Classification Scope", value: "4 Classes (Glioma, Meningioma, Pituitary, No Tumor)" },
        { label: "Primary Architectures", value: "Custom 5-Block CNN & EfficientNet-B0" },
        { label: "Reported Performance", value: "98.7% – 98.9% Validation Accuracy" },
        { label: "Uncertainty Engine", value: "Monte Carlo Dropout (Temperature-Scaled)" },
        { label: "Explainability", value: "Gradient-Weighted Class Activation Mapping (Grad-CAM)" },
        { label: "System Framing", value: "IP-Focused Research Prototype (Non-Clinical)" }
      ],
      githubUrl: "https://github.com/GOWREESH07/",
      diagramType: "mri"
    },
    {
      id: "aegis",
      slug: "aegis",
      title: "AEGIS: Agentic Attack & Defense Simulation",
      tagline: "Autonomous Defense Pipeline Against a Five-Stage Kill Chain",
      category: "Cybersecurity / Agentic Security Simulation",
      primaryDomain: "security",
      tier: "flagship",
      year: "2026",
      status: "Implemented Prototype",
      technologies: ["FastAPI", "Redis", "Docker", "React", "WebSockets", "Python", "Incident Reporting"],
      summary: "An autonomous defense simulation platform demonstrating defensive orchestration against a simulated five-stage agentic attack kill chain, featuring dual Attacker-vs-Defender consoles and automated incident reporting.",
      problem: "Traditional rule-based firewalls cannot counter agentic adversaries that adapt attack payloads across multiple discovery and privilege-escalation stages in real time without human intervention.",
      approach: "Architected a dual-console simulation environment connecting an Attacker console (:8003) and Target environment (:8001) through an autonomous defensive gateway running FastAPI and Redis. Implemented a five-tier defensive pipeline: Surveillance, Council consensus, Escalation, Response, and Healing.",
      keyContributions: [
        "Simulated a five-stage agentic attack kill chain: Reconnaissance, Initial Access, Lateral Movement, Privilege Escalation, and Data Exfiltration.",
        "Constructed an autonomous defense pipeline featuring Surveillance Layer packet sniffing, Council deliberation, and automated Healing mitigation.",
        "Built dual interactive React consoles providing real-time attacker orchestration and defender response telemetry over WebSockets.",
        "Integrated Redis caching and pub/sub queues for sub-millisecond threat event classification, rate limiting, and state tracking.",
        "Containerized the multi-node simulation using Docker Compose to isolate attacker agents, defense gateways, and target web services.",
        "Implemented automated incident report generation in Markdown and PDF detailing attack vectors, council decisions, and remediation logs."
      ],
      architectureBreakdown: [
        {
          title: "Console 01: Attacker Orchestrator (:8003)",
          description: "Generates multi-stage adaptive attack vectors targeting API vulnerabilities, authentication bypasses, and unauthorized lateral traversal."
        },
        {
          title: "Gateway 02: Surveillance & Traffic Inspection Layer",
          description: "Sniffs raw HTTP/WebSocket payloads, extracting behavioral features and tagging traffic against the JadePuffer kill-chain taxonomy."
        },
        {
          title: "Engine 03: Council Deliberation & Escalation Manager",
          description: "Runs consensus logic across multiple heuristic evaluators to classify threat severity and trigger targeted defensive escalations."
        },
        {
          title: "Engine 04: Response Engine & Automated Healing",
          description: "Deploys dynamic IP blacklists, revokes compromised session tokens, and executes healing scripts to patch exploited endpoints."
        },
        {
          title: "Console 05: Defender Live Telemetry & Incident Reporting",
          description: "Streams defensive events to the React dashboard and automatically compiles forensic Markdown/PDF incident dossiers."
        }
      ],
      specifications: [
        { label: "Simulation Scope", value: "5-Stage Agentic Attack Kill Chain" },
        { label: "Backend Core", value: "FastAPI + Redis Async State Bus" },
        { label: "Interface", value: "Dual Attacker & Defender React Consoles" },
        { label: "Defensive Modules", value: "Surveillance, Council, Response, Healing" },
        { label: "Infrastructure", value: "Multi-container Docker Network" }
      ],
      githubUrl: "https://github.com/GOWREESH07/",
      diagramType: "aegis"
    },
    {
      id: "smartedge",
      slug: "smartedge",
      title: "SmartEdge: Adaptive Energy Intelligence",
      tagline: "End-to-End IoT Sensing, Spring Boot Backend & ML Analytics",
      category: "IoT / Embedded Systems / Applied Machine Learning",
      primaryDomain: "iot",
      tier: "flagship",
      year: "2026",
      status: "Implemented Prototype",
      technologies: ["ESP32", "PZEM Sensor", "Spring Boot", "React", "Python", "MQTT / REST", "MySQL"],
      summary: "An intelligent electrical energy monitoring and analysis system spanning embedded ESP32 hardware, PZEM electrical sensors, a Spring Boot REST backend, and a React telemetry dashboard with machine learning anomaly detection and load classification.",
      problem: "Commercial energy sub-meters only provide aggregated monthly billing data without real-time phase diagnostics, device-level load classification, or predictive anomaly detection for electrical faults.",
      approach: "Engineered an end-to-end hardware-to-cloud telemetry pipeline: an ESP32 microcontroller interfaces with a PZEM-004T sensor to sample high-frequency AC electrical parameters (voltage, current, active power, cumulative energy, frequency, power factor). Data streams via Wi-Fi to a Spring Boot microservice, which stores telemetry in a normalized database and runs ML models for load classification and consumption anomaly alerting.",
      keyContributions: [
        "Integrated ESP32 firmware with PZEM energy measurement hardware over UART to continuously acquire 6 electrical parameters.",
        "Built a robust Spring Boot backend with RESTful telemetry endpoints, JPA/Hibernate data persistence, and WebSocket real-time event broadcasting.",
        "Developed machine learning models for non-intrusive appliance load classification and statistical anomaly detection against baseline consumption curves.",
        "Designed and implemented an interactive React monitoring dashboard displaying real-time power metrics, load graphs, and energy forecasting.",
        "Implemented edge connection caching on the ESP32 to prevent telemetry loss during transient network disconnects."
      ],
      architectureBreakdown: [
        {
          title: "Layer 01: Physical Load & PZEM Sensor Interface",
          description: "High-precision physical current transformer and voltage tap measuring RMS voltage, load current, active power, and power factor."
        },
        {
          title: "Layer 02: ESP32 Edge Firmware Processing",
          description: "UART communication with error-checking, sensor calibration, moving-average smoothing, and Wi-Fi transmission."
        },
        {
          title: "Layer 03: Spring Boot Enterprise Backend",
          description: "High-throughput REST API ingestion, relational database persistence, data validation, and aggregation cron jobs."
        },
        {
          title: "Layer 04: Applied ML Analytics Core",
          description: "Statistical anomaly detection flagging voltage sags/surges, paired with load classification models identifying active device signatures."
        },
        {
          title: "Layer 05: React Operator Dashboard",
          description: "Interactive live telemetry UI with time-series charts, historical audit logs, and customizable threshold alert notifications."
        }
      ],
      specifications: [
        { label: "Hardware Core", value: "ESP32 SoC + PZEM-004T Sensor" },
        { label: "Acquired Metrics", value: "Voltage, Current, Power, Energy, Hz, PF" },
        { label: "Backend Service", value: "Spring Boot 3.x (Java) + JPA/Hibernate" },
        { label: "Frontend Layer", value: "React Dashboard + Real-Time Charts" },
        { label: "Intelligence", value: "Load Classification & Energy Forecasting" }
      ],
      githubUrl: "https://github.com/GOWREESH07/",
      diagramType: "smartedge"
    },
    {
      id: "review-radar",
      slug: "review-radar",
      title: "Review Radar",
      tagline: "AI Review Intelligence, ScraperAPI Pipeline & Deployed Web App",
      category: "AI Product / Full-Stack Development",
      primaryDomain: "product",
      tier: "flagship",
      year: "2026",
      status: "Active Product",
      technologies: ["Next.js", "TypeScript", "Google Gemini API", "ScraperAPI", "Supabase", "Tailwind CSS", "Vercel"],
      summary: "A production-grade AI-powered product review intelligence application deployed on Vercel that collects live e-commerce reviews using ScraperAPI, evaluates review authenticity with Gemini, and extracts actionable product sentiment.",
      problem: "E-commerce shoppers and product analysts face thousands of astroturfed, AI-generated, or incentivized reviews that skew consumer purchasing decisions and conceal recurring product defects.",
      approach: "Engineered a reactive Next.js web application integrating ScraperAPI for dynamic proxy-managed review collection and Google Gemini 1.5 for natural language authenticity scoring. Reviews are parsed into verified vs flagged buckets with sentiment breakdowns and stored in Supabase.",
      keyContributions: [
        "Constructed automated review ingestion pipelines using ScraperAPI to reliably bypass anti-scraping blocks on commercial e-commerce listings.",
        "Built a Gemini API reasoning engine utilizing structured JSON outputs to detect synthetic linguistic patterns, repetitive syntax, and unverified review traits.",
        "Engineered an interactive Next.js dashboard providing product authenticity scores, genuine vs flagged review counts, and top feature pros/cons.",
        "Integrated Supabase PostgreSQL for caching analyzed product URLs, preventing duplicate scraping costs and enabling historical comparison.",
        "Deployed the production application on Vercel with serverless API routes, optimized edge caching, and mobile-responsive layouts."
      ],
      architectureBreakdown: [
        {
          title: "Ingestion: ScraperAPI Collection Pipeline",
          description: "Accepts product URLs, routing requests through residential proxy pools to extract customer review bodies, ratings, dates, and verification badges."
        },
        {
          title: "Analysis: Gemini Structured NLP Engine",
          description: "Evaluates review corpora against authenticity rubrics, calculating authenticity confidence, sentiment polarity, and key product pain points."
        },
        {
          title: "Storage: Supabase Data & Cache Layer",
          description: "Persists extracted reviews, analysis scores, and product metadata for fast retrieval and longitudinal trend analysis."
        },
        {
          title: "Presentation: Next.js Client & Vercel Edge",
          description: "Delivers a fast, responsive user interface with authentic score indicators, flagged review inspector, and exportable summaries."
        }
      ],
      specifications: [
        { label: "Frontend / Backend", value: "Next.js App Router (TypeScript)" },
        { label: "Review Ingestion", value: "ScraperAPI Proxy Network" },
        { label: "AI Reasoning Core", value: "Google Gemini API (JSON Schema)" },
        { label: "Database Layer", value: "Supabase (PostgreSQL)" },
        { label: "Hosting Platform", value: "Deployed on Vercel" }
      ],
      githubUrl: "https://github.com/GOWREESH07/",
      diagramType: "radar"
    }
  ] as Project[],

  // ==========================================
  // 2. RESEARCH & APPLIED ENGINEERING PROJECTS
  // ==========================================
  appliedProjects: [
    {
      id: "software-quality-analyser",
      slug: "software-quality-analyser",
      title: "CodeSense: AI Software Quality Analyser",
      tagline: "Static Analysis, ML Defect Prediction & AI-Code Detection",
      category: "Software Engineering / Machine Learning",
      primaryDomain: "software-eng",
      tier: "applied-research",
      year: "2026",
      status: "Team Project",
      technologies: ["Python", "Flask / FastAPI", "Scikit-learn", "AST Parser", "React", "Halstead Metrics"],
      teamContext: "Academic Engineering Team Project: Rathinila S, Gowreesh A, Abinaya S (VIT Vellore)",
      summary: "A comprehensive software engineering quality analysis system combining traditional static code metrics with machine-learning-based defect prediction and an AI-versus-human code origin detector.",
      problem: "Conventional static analyzers only detect syntax violations, while standalone ML defect predictors lack interpretability. Additionally, the influx of generative AI code introduces structural defects without authorship clarity.",
      approach: "Engineered an integrated software quality platform with 8 functional modules: static metrics computation (Cyclomatic Complexity, Halstead metrics, maintainability index), Scikit-learn defect prediction models, and an AI-generated code detection classifier.",
      keyContributions: [
        "Implemented static analysis parsers computing line-level Halstead volume, Cyclomatic complexity, and maintainability indices across codebases.",
        "Integrated machine-learning defect prediction models trained on historical software repository defect datasets to flag high-risk modules.",
        "Developed an AI-versus-human code classification module that analyzes syntactic perplexity, token distributions, and formatting patterns.",
        "Built an interactive reporting dashboard providing actionable refactoring recommendations based on static and predictive findings.",
        "Collaborated within an academic team structure, contributing to metrics computation, backend API design, and defect prediction modules."
      ],
      architectureBreakdown: [
        {
          title: "Module 01: Project Ingestion & Parser",
          description: "Accepts source files, converting code into Abstract Syntax Trees (AST) for structural traversal."
        },
        {
          title: "Module 02: Static Complexity Analysis",
          description: "Calculates Halstead metrics, McCabe Cyclomatic complexity, and maintainability index scores."
        },
        {
          title: "Module 03: ML Defect Prediction Engine",
          description: "Scikit-learn classification pipeline correlating software metrics against historical defect probabilities."
        },
        {
          title: "Module 04: AI-Generated Code Detector",
          description: "Evaluates entropy and token predictability to distinguish human-authored code from LLM outputs."
        }
      ],
      specifications: [
        { label: "Project Nature", value: "Academic Team Project (ISWE404L)" },
        { label: "Analysis Paradigms", value: "Static Metrics + ML Defect Prediction" },
        { label: "Complexity Metrics", value: "McCabe Cyclomatic, Halstead, Maintainability" },
        { label: "AI Code Detection", value: "Syntactic Perplexity & Token Heuristics" },
        { label: "Interface", value: "Interactive Dashboard & Code Review Viewer" }
      ],
      githubUrl: "https://github.com/GOWREESH07/",
      diagramType: "quality"
    },
    {
      id: "learnmate",
      slug: "learnmate",
      title: "LearnMate: AI Personalized Learning Assistant",
      tagline: "Design-Pattern-Oriented Learning Companion & Adaptive Workflows",
      category: "AI Learning Assistant / Full-Stack Development",
      primaryDomain: "applied-ai",
      tier: "applied-research",
      year: "2026",
      status: "Team Project",
      technologies: ["Next.js", "FastAPI", "Supabase", "Google Gemini API", "Tailwind CSS"],
      teamContext: "Academic Engineering Project: Rathinila S, Gowreesh A, Abirami S (Design Patterns ISWE404L, VIT Vellore)",
      summary: "An intelligent personalized learning platform designed around software design pattern reviews, adaptive quizzes, customized study plans, and interactive learning assistance.",
      problem: "Traditional online learning platforms present static syllabi that treat all students uniformly, failing to identify specific design pattern misconceptions or adapt practice quizzes dynamically.",
      approach: "Built a full-stack learning assistant with a Next.js frontend, a FastAPI backend, and Supabase for student state. Integrated Google Gemini to analyze student design pattern comprehension, recommend tailored resources, and generate adaptive quizzes.",
      keyContributions: [
        "Designed structured learning workflows tailored to software design patterns (Creational, Structural, Behavioral patterns).",
        "Engineered the FastAPI backend service interfacing with Google Gemini for real-time concept explanations and code critique.",
        "Integrated Supabase PostgreSQL authentication, student progress tracking, and quiz history storage.",
        "Built responsive Next.js interfaces with adaptive quiz components, study milestone checklists, and progress visualizers.",
        "Contributed to system architecture, API routing, and AI prompting rubrics as part of a 3-person engineering team."
      ],
      architectureBreakdown: [
        {
          title: "Module 01: Next.js Client & Study Dashboard",
          description: "Interactive learning workspace with design pattern catalogs, interactive code samples, and quiz runners."
        },
        {
          title: "Module 02: FastAPI Core & AI Tutor Broker",
          description: "Handles multi-turn tutoring prompts, design pattern explanations, and adaptive quiz generation via Gemini."
        },
        {
          title: "Module 03: Supabase User & Progress Store",
          description: "Tracks student competencies across pattern categories, logging test scores and personalized study roadmaps."
        }
      ],
      specifications: [
        { label: "Academic Course", value: "Design Patterns (ISWE404L) Fall 2026" },
        { label: "Frontend", value: "Next.js / React / Tailwind CSS" },
        { label: "Backend", value: "FastAPI (Python) Microservice" },
        { label: "AI Reasoning", value: "Google Gemini 1.5 API" },
        { label: "Database", value: "Supabase (PostgreSQL + Auth)" }
      ],
      githubUrl: "https://github.com/GOWREESH07/",
      diagramType: "learnmate"
    },
    {
      id: "quantumcrypt",
      slug: "quantumcrypt",
      title: "QuantumCrypt",
      tagline: "Chaos-Based File Encryption & Secure Transmission System",
      category: "Cybersecurity / Secure Systems",
      primaryDomain: "security",
      tier: "applied-research",
      year: "2025",
      status: "Implemented Prototype",
      technologies: ["Python", "Streamlit", "NumPy", "Cryptography", "Chaos Theory (Lorenz / Cat Map)", "Hashlib"],
      summary: "A cryptographic file security platform that combines non-linear dynamical chaos systems with modern key derivation, role-based access control, and entropy validation for sensitive file safeguarding.",
      problem: "Standard single-pass symmetric encryption can become vulnerable when pseudo-random number generators lack state entropy or when spatial byte correlations survive encryption in structured binary files.",
      approach: "Engineered a hybrid cryptosystem using chaotic map equations (Lorenz Attractor state sequences coupled with Arnold's Cat Map bit permutation) for high-sensitivity diffusion and confusion, reinforced with PBKDF2 HMAC-SHA256 key derivation and session role validation.",
      keyContributions: [
        "Implemented chaos-based encryption pipelines utilizing discrete numerical iterations of the 3D Lorenz attractor system to generate pseudo-random keystreams.",
        "Integrated Arnold's Cat Map 2D coordinate permutation for spatial byte diffusion prior to non-linear XOR substitution rounds.",
        "Built robust session authentication with role-based access control (RBAC), password hashing via PBKDF2 with salt, and strict in-memory buffer sanitization.",
        "Developed live entropy and avalanche effect diagnostics that visualize byte frequency distribution before and after encryption to verify diffusion uniformity.",
        "Created a clean Streamlit interface with drag-and-drop file chunking, integrity checksum verification (SHA-256), and secure packet inspection."
      ],
      architectureBreakdown: [
        {
          title: "Module 01: Authentication & RBAC Boundary",
          description: "Enforces strict user privilege tiers, validating session tokens and hashing passwords with PBKDF2 (100,000 iterations + 16-byte random salt)."
        },
        {
          title: "Module 02: Chaotic Attractor Keystream Generator",
          description: "Solves Lorenz differential equations via 4th-order Runge-Kutta integration to produce high-entropy non-repeating float sequences."
        },
        {
          title: "Module 03: Spatial Bit Diffusion (Arnold's Cat Map)",
          description: "Applies modular 2D matrix transformation to scramble byte positions across block matrices, destroying statistical frequency signatures."
        },
        {
          title: "Module 04: Verification & Telemetry Ledger",
          description: "Computes Shannon entropy (targeting > 7.99 bits/byte) and displays histogram differentials to confirm complete ciphertext randomization."
        }
      ],
      specifications: [
        { label: "Core Security Concept", value: "Non-linear Dynamical Chaos Cryptography" },
        { label: "Key Derivation", value: "PBKDF2 HMAC-SHA256 (Salted)" },
        { label: "Integrity Verification", value: "SHA-256 Digest Validation" },
        { label: "Access Control", value: "Role-Based Access Control (RBAC)" },
        { label: "Runtime Environment", value: "Python 3.11 / Streamlit Interactive UI" }
      ],
      githubUrl: "https://github.com/GOWREESH07/",
      diagramType: "crypto"
    },
    {
      id: "career-guidance",
      slug: "career-guidance",
      title: "AI Career Guidance Counsellor",
      tagline: "Multimodal Career Discovery & Spatial Opportunity Engine",
      category: "Full-Stack Development / AI Integration",
      primaryDomain: "applied-ai",
      tier: "applied-research",
      year: "2026",
      status: "Implemented Prototype",
      technologies: ["TypeScript", "Next.js", "Google Gemini API", "Google Maps API", "Google Calendar API", "Tailwind CSS"],
      summary: "An intelligent career counselling engine that evaluates candidate profiles, analyzes resume ATS compliance, constructs personalized milestone roadmaps, and correlates opportunities with geographic clusters.",
      problem: "Traditional career discovery tools provide static, generic advice disconnected from real-world regional industry ecosystems, candidate psychometric aptitudes, and calendar-actionable scheduling.",
      approach: "Built a reactive full-stack application leveraging Google Gemini's structured JSON output mode to assess user capabilities across multiple evaluation dimensions. Connected real-time roadmap milestones with Google Calendar and local tech ecosystems via Google Maps.",
      keyContributions: [
        "Designed structured multi-turn prompting pipelines with Google Gemini 1.5 for psychometric aptitude evaluation and personalized career trajectory scoring.",
        "Built an algorithmic ATS (Applicant Tracking System) parser that analyzes uploaded resume text against industry role taxonomies.",
        "Integrated the Google Maps JavaScript API and Places API to locate nearby innovation hubs, technical meetups, and regional engineering clusters.",
        "Implemented automated milestone scheduling via the Google Calendar API, synchronizing learning deadlines and certification targets.",
        "Engineered a responsive dashboard with real-time career readiness analytics and interactive progress tracking."
      ],
      architectureBreakdown: [
        {
          title: "Stage 01: Psychometric & Profile Evaluation",
          description: "Collects multi-attribute candidate preferences, skill matrices, and academic backgrounds, converting them into structured latent query vectors."
        },
        {
          title: "Stage 02: Gemini Analytical Engine",
          description: "Processes profile vectors against real-time industry taxonomies using constrained JSON schema outputs, ensuring predictable, hallucination-free career projections."
        },
        {
          title: "Stage 03: Algorithmic ATS Scorer",
          description: "Extracts keyword frequencies, experience formatting, and semantic match scores to generate actionable resume optimization recommendations."
        },
        {
          title: "Stage 04: Spatial & Temporal Dispatch",
          description: "Queries Google Maps for regional engineering ecosystems and dispatches learning milestones directly to Google Calendar via OAuth2."
        }
      ],
      specifications: [
        { label: "Frontend Architecture", value: "TypeScript / Next.js Responsive App" },
        { label: "AI Reasoning Core", value: "Google Gemini 1.5 Pro (Structured JSON)" },
        { label: "Spatial Mapping", value: "Google Maps Platform (Places / Geocoding)" },
        { label: "Time Synchronization", value: "Google Calendar API v3 Integration" },
        { label: "Resume Analysis", value: "ATS Token Extraction & Semantic Scoring" }
      ],
      githubUrl: "https://github.com/GOWREESH07/",
      diagramType: "pipeline"
    }
  ] as Project[],

  // ==========================================
  // 3. AGENTIC SYSTEMS EVOLUTION
  // ==========================================
  agenticEvolution: {
    title: "Agentic Systems Architectural Progression",
    subtitle: "From Linear Pipeline to Decentralized Autonomous Mesh",
    description: "An architectural comparative study showing the evolution from a three-agent linear pipeline (AgentFlow) to a decentralized six-service autonomous mesh communicating over A2A and MCP protocols (AgentMesh).",
    stages: [
      {
        stage: "GEN 1: PIPELINE",
        title: "AgentFlow",
        role: "Sequential 3-Agent Task Automation",
        architecture: "Sequential Pipeline (Planner → Executor → Reviewer)",
        agentsCount: 3,
        protocol: "Internal Function Calls / HTTP",
        description: "An early multi-agent experiment orchestrating three agents in a fixed linear chain: PlannerAgent broke prompts down into tasks, ExecutorAgent executed actions, and ReviewerAgent verified output quality.",
        limitationsSolved: [
          "Fixed sequential coupling: if Executor stalled, entire chain blocked",
          "Centralized context passing: token context accumulated linearly",
          "No standard external tool encapsulation protocol"
        ]
      },
      {
        stage: "GEN 2: DECENTRALIZED MESH",
        title: "AgentMesh",
        role: "Decentralized 6-Service Autonomous Mesh",
        architecture: "Microservice Topology (FastAPI + A2A + MCP + WebSockets)",
        agentsCount: 6,
        protocol: "A2A Protocol + Model Context Protocol (MCP v1)",
        description: "A mature, production-grade distributed architecture where six specialized FastAPI microservices operate autonomously with peer discovery, dynamic capability negotiation, and sandboxed MCP tool execution.",
        limitationsSolved: [
          "Dynamic peer-to-peer delegation without monolithic single-point failure",
          "State diff brokering and memory checkpointing across microservices",
          "Strictly sandboxed tool execution adhering to the open MCP specification"
        ]
      }
    ] as EvolutionItem[]
  },

  // ==========================================
  // 4. HARDWARE & EMBEDDED SYSTEMS
  // ==========================================
  hardwareProjects: [
    {
      id: "smartedge-hw",
      title: "SmartEdge: IoT Hardware-to-Cloud Sub-Meter",
      category: "IoT / Embedded Sensing",
      year: "2026",
      technologies: ["ESP32", "PZEM-004T Sensor", "UART", "Spring Boot", "React"],
      summary: "High-frequency electrical telemetry unit pairing an ESP32 microcontroller with a PZEM-004T sensor module to monitor voltage, current, power, and frequency, transmitting data over Wi-Fi to a cloud backend.",
      workflow: "Physical AC Load → PZEM-004T CT Sensor → ESP32 UART → Wi-Fi JSON Ingestion → Spring Boot REST → React Telemetry"
    },
    {
      id: "esp8266-plant-care",
      title: "ESP8266 Automated Plant Care System",
      category: "Embedded Systems / IoT",
      year: "2025",
      technologies: ["ESP8266 NodeMCU", "Soil Moisture Sensor", "DHT11 Sensor", "Relay Module", "C++ / Arduino IDE"],
      summary: "An autonomous microcontroller-driven plant hydration and climate monitoring system that continuously samples ambient temperature, humidity, and soil moisture levels, triggering relay-controlled water pumps when thresholds drop below setpoints.",
      workflow: "Soil Moisture / DHT11 Sensors → ESP8266 ADC/GPIO → Autonomous Threshold Logic → 5V Relay Actuator → Water Pump Subsystem"
    }
  ],

  // ==========================================
  // 5. RESEARCH & ENGINEERING EXPLORATIONS
  // ==========================================
  explorations: [
    {
      id: "distributed-task-scheduler",
      title: "Distributed Task Scheduler",
      category: "Distributed Systems",
      status: "Early Architecture / Design Exploration",
      technologies: ["Go / Python", "Raft Consensus Concept", "gRPC", "Redis"],
      summary: "An ongoing systems exploration investigating leader election, distributed job queues, worker node heartbeat protocols, and partitioned task rescheduling under network failure conditions.",
      note: "Currently in architectural design and prototype specification stage. Documented as an active engineering exploration rather than a completed deployment."
    },
    {
      id: "warehouse-ai-video",
      title: "Warehouse AI Video Intelligence",
      category: "Computer Vision / Intelligent Systems",
      status: "Early Architecture / Design Exploration",
      technologies: ["Python", "OpenCV", "YOLO Architecture", "RTSP Streaming"],
      summary: "A conceptual computer vision pipeline exploring multi-camera zone monitoring, worker safety perimeter tracking, forklift spatial velocity alerts, and automated congestion logging in simulated logistics environments.",
      note: "Currently in prompt-architecture and camera topology specification phase. Documented accurately as an early-stage research prototype."
    }
  ],

  // ==========================================
  // 6. TECHNICAL STACK MATRIX
  // ==========================================
  techStack: [
    {
      discipline: "01 / Programming Languages",
      description: "Foundational languages for systems, algorithms, and application backends.",
      items: [
        { name: "Java", level: "Core", note: "Spring Boot, enterprise architectures, OOP design patterns" },
        { name: "Python", level: "Primary", note: "FastAPI, PyTorch, NumPy, chaos algorithms, microservices" },
        { name: "TypeScript", level: "Primary", note: "Type-safe full-stack applications, Next.js, React" },
        { name: "JavaScript", level: "Core", note: "ESNext, DOM manipulation, asynchronous event loops" },
        { name: "C++", level: "Systems", note: "Embedded systems, algorithmic problem solving" },
        { name: "C", level: "Foundational", note: "Low-level memory management, pointers, OS primitives" }
      ]
    },
    {
      discipline: "02 / Web & Backend Systems",
      description: "Production web architectures, responsive client layers, and resilient APIs.",
      items: [
        { name: "React", level: "Frontend", note: "Component composition, state management, interactive dashboards" },
        { name: "Next.js", level: "Full-Stack", note: "App Router, SSR/SSG, server actions, route optimization" },
        { name: "Spring Boot", level: "Backend", note: "Java REST APIs, JPA/Hibernate, IoT telemetry ingestion" },
        { name: "FastAPI", level: "Backend", note: "Asynchronous Python services, Pydantic type validation, OpenAPI" },
        { name: "Express.js", level: "Backend", note: "Node.js middleware pipelines, authentication, routing" },
        { name: "Tailwind CSS", level: "Styling", note: "Utility-first design systems, responsive layouts, dark mode" }
      ]
    },
    {
      discipline: "03 / Agentic AI & Machine Learning",
      description: "Autonomous multi-agent architectures, deep learning models, and LLM tool protocols.",
      items: [
        { name: "PyTorch", level: "Deep Learning", note: "Custom CNNs, EfficientNet fine-tuning, Grad-CAM, MC Dropout" },
        { name: "Google Gemini API", level: "LLM Platform", note: "Structured JSON schemas, multimodal review analysis, tutoring" },
        { name: "A2A Protocol", level: "Agentic", note: "Agent-to-Agent discovery, message passing, and capability negotiation" },
        { name: "MCP (Model Context Protocol)", level: "Protocol", note: "Standardized sandboxed tool execution and client-server tool encapsulation" },
        { name: "Multi-Agent Networks", level: "Design", note: "FastAPI agent daemons, orchestrator-critic patterns, consensus" },
        { name: "Scikit-learn", level: "Applied ML", note: "Software defect prediction, anomaly detection classifiers" }
      ]
    },
    {
      discipline: "04 / Cloud, Databases & DevOps",
      description: "Cloud infrastructure, caching layers, and containerized deployment pipelines.",
      items: [
        { name: "Oracle Cloud (OCI)", level: "Certified", note: "Compute instances, OCI Data Science, network security rules" },
        { name: "Amazon Web Services (AWS)", level: "Certified", note: "S3, EC2, IAM, Cloud Practitioner CLF-C02 foundations" },
        { name: "Redis", level: "Cache/MQ", note: "In-memory caching, pub/sub queues, rate limiting in AEGIS" },
        { name: "Supabase", level: "BaaS", note: "PostgreSQL database, authentication schemas, real-time sync" },
        { name: "Docker", level: "Containers", note: "Multi-container compose, network isolation, service replication" },
        { name: "Vercel", level: "Deployment", note: "Edge hosting, Next.js serverless functions, CI/CD pipelines" }
      ]
    },
    {
      discipline: "05 / Embedded Systems & IoT",
      description: "Physical microcontroller programming, sensor interfacing, and telemetry hardware.",
      items: [
        { name: "ESP32", level: "Hardware", note: "Wi-Fi telemetry, UART interfacing with PZEM sensor, FreeRTOS" },
        { name: "ESP8266", level: "Microcontroller", note: "NodeMCU, ADC sensor acquisition, relay actuator control" },
        { name: "PZEM-004T", level: "Sensor", note: "AC electrical voltage, current, active power, and frequency sensing" },
        { name: "Arduino IDE / PlatformIO", level: "Firmware Tooling", note: "C++ firmware compilation, serial debugging, libraries" }
      ]
    },
    {
      discipline: "06 / Developer Tools & Protocols",
      description: "Version control, testing suites, network simulation, and web scraping.",
      items: [
        { name: "Git & GitHub", level: "VCS", note: "Branching workflows, semantic commits, code reviews" },
        { name: "ScraperAPI", level: "Data Pipeline", note: "Proxy-managed review extraction, anti-bot bypass" },
        { name: "WebSockets", level: "Protocol", note: "Bidirectional real-time event streaming for mesh canvas & AEGIS" },
        { name: "Cisco Packet Tracer", level: "Networking", note: "Subnet topology, VLAN routing, packet inspection" }
      ]
    }
  ],

  // ==========================================
  // 7. EXPERIENCE & EDUCATION
  // ==========================================
  experience: [
    {
      company: "Strategic Research Insights",
      role: "Data Analyst Intern",
      location: "Chennai, India",
      period: "May 2026 – June 2026",
      highlights: [
        "Cleaned, structured, and audited extensive multivariate business datasets using Python, Pandas, and NumPy, reducing missing-value anomalies.",
        "Identified core longitudinal trends to furnish stakeholders with evidence-based strategic decision guidance.",
        "Built publication-ready diagnostic charts and visual reports utilizing Matplotlib and Seaborn for executive presentations.",
        "Employed Microsoft Excel for rigorous data validation cross-checks, formula auditing, and supplementary tabular summaries."
      ],
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Excel"]
    }
  ] as ExperienceItem[],

  education: [
    {
      institution: "Vellore Institute of Technology (VIT)",
      degree: "Integrated M.Tech in Software Engineering",
      period: "August 2023 – Present",
      location: "Vellore, Tamil Nadu, India",
      focus: [
        "Advanced Data Structures & Algorithms",
        "Distributed Systems & Object-Oriented Software Engineering",
        "Computer Networks & Cryptographic Security",
        "Full-Stack Web Architectures & Applied Machine Learning Systems"
      ]
    }
  ] as EducationItem[],

  certifications: [
    {
      id: "oci-ai-foundations",
      title: "Oracle Cloud Infrastructure Certified AI Foundations Associate",
      issuer: "Oracle University",
      credentialCode: "OCI-AI-2024",
      domain: "Artificial Intelligence & Cloud Fundamentals"
    },
    {
      id: "oci-data-science",
      title: "Oracle Cloud Infrastructure Certified Data Science Professional",
      issuer: "Oracle University",
      credentialCode: "OCI-DS-PROF",
      domain: "Machine Learning Pipelines & MLOps in OCI"
    },
    {
      id: "aws-clf-c02",
      title: "Certified Cloud Practitioner CLF-C02",
      issuer: "Udemy / AWS Training Partner",
      credentialCode: "AWS-CLF-C02",
      domain: "Cloud Architecture, AWS Services & Security Model"
    }
  ] as CertificationItem[]
};
