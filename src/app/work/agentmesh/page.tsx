import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AgentMeshDiagram } from "@/components/ProjectDiagrams";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Terminal, Network, ShieldCheck, Layers, GitBranch } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function AgentMeshCaseStudy() {
  const project = [...PORTFOLIO_DATA.flagshipProjects, ...PORTFOLIO_DATA.appliedProjects].find((p) => p.slug === "agentmesh")!;

  return (
    <main className="min-h-screen bg-transparent text-text-primary selection:bg-accent-chartreuse selection:text-bg-primary">
      <Navigation />

      {/* Case Study Header & Coordinate Banner */}
      <div className="pt-28 pb-12 hairline-b bg-[#080909]/60 backdrop-blur-sm engineering-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-xs text-text-muted hover:text-accent-chartreuse transition-technical"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN TO PORTFOLIO TELEMETRY</span>
          </Link>

          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs px-2.5 py-0.5 bg-accent-chartreuse text-bg-primary font-bold">
                DISTRIBUTED AGENT SPEC
              </span>
              <span className="font-mono text-xs text-text-muted">
                SYS.REF // GA-AGENTMESH-2026
              </span>
              <span className="font-mono text-xs text-accent-chartreuse">
                STATUS: VERIFIED POC
              </span>
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-6xl text-text-primary tracking-tight">
              AgentMesh: Multi-Agent System Architecture
            </h1>

            <p className="font-sans text-lg sm:text-xl text-text-secondary max-w-3xl leading-relaxed">
              A decentralized six-service agent network implementing the Agent-to-Agent (A2A) communication protocol and Model Context Protocol (MCP) for tool execution and autonomous task coordination.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 hairline-t font-mono text-xs">
            <div>
              <span className="text-text-muted block text-[10px]">DOMAIN</span>
              <span className="text-text-primary">{project.domain}</span>
            </div>
            <div>
              <span className="text-text-muted block text-[10px]">COMMUNICATION</span>
              <span className="text-text-primary">A2A Protocol / WebSockets</span>
            </div>
            <div>
              <span className="text-text-muted block text-[10px]">TOOL STANDARD</span>
              <span className="text-accent-chartreuse">Model Context Protocol</span>
            </div>
            <div>
              <span className="text-text-muted block text-[10px]">DAEMONS</span>
              <span className="text-text-primary">6 Independent FastAPI Nodes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Technical Blueprint Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Case Narrative (8 Cols) */}
          <div className="lg:col-span-8 space-y-16">
            {/* Section 1: The Architectural Challenge */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <Network className="w-4 h-4 text-accent-chartreuse" />
                <h2 className="mono-label text-accent-chartreuse text-sm">
                  01 // THE DISTRIBUTED COORDINATION PROBLEM
                </h2>
              </div>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
                Monolithic LLM applications that rely on single-prompt chains suffer from severe failure cascades. When an agent experiences tool latency or hallucinates during an intermediate reasoning step, the entire session state is compromised. 
              </p>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
                In multi-agent systems, the challenge shifts to deterministic message routing: how do specialized agents discover each other&apos;s capabilities, negotiate task execution, share working state diffs, and recover gracefully when an individual peer node becomes unresponsive?
              </p>
            </section>

            {/* Embedded Architecture Canvas */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="mono-label text-text-primary">
                  02 // LIVE TOPOLOGY & PROTOCOL ROUTING CANVAS
                </h3>
                <span className="font-mono text-xs text-text-muted">FASTAPI MESH</span>
              </div>
              <AgentMeshDiagram />
            </section>

            {/* Section 3: The Six Independent Microservices */}
            <section className="space-y-6">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-accent-chartreuse" />
                <h2 className="mono-label text-accent-chartreuse text-sm">
                  03 // SERVICE DECOMPOSITION & SPECIALIZATION
                </h2>
              </div>

              <div className="space-y-4">
                {project.architectureBreakdown.map((service, index) => (
                  <div
                    key={service.title}
                    className="bg-bg-card hairline-all p-5 space-y-2 hover:border-accent-chartreuse/50 transition-technical"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-accent-chartreuse font-semibold">
                        DAEMON 0{index + 1}
                      </span>
                      <span className="font-mono text-[10px] text-text-muted px-2 py-0.5 bg-bg-secondary hairline-all">
                        PORT :800{index}
                      </span>
                    </div>
                    <h4 className="font-display font-semibold text-base text-text-primary">
                      {service.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: A2A Protocol Implementation & MCP Tool Isolation */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-accent-chartreuse" />
                <h2 className="mono-label text-accent-chartreuse text-sm">
                  04 // PROTOCOL INTEGRATION: A2A & MCP
                </h2>
              </div>

              <div className="bg-bg-secondary p-5 hairline-all space-y-4">
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans">
                  Communication between services adheres to the <strong className="text-text-primary">Agent-to-Agent (A2A) protocol</strong>, using JSON schema manifests advertised at each service&apos;s <code className="text-accent-chartreuse font-mono">/.well-known/agent.json</code> endpoint. This permits runtime service discovery without hard-coding static IP registries.
                </p>

                <div className="p-3 bg-bg-primary hairline-all font-mono text-[11px] text-text-secondary overflow-x-auto">
                  <div className="text-text-muted">// A2A Capability Advertisement Manifest Sample</div>
                  <pre className="text-accent-chartreuse mt-1">{`{
  "agent_id": "service_02_context_broker",
  "protocol_version": "a2a-v1.2",
  "capabilities": ["state_checkpoints", "json_diff_patch", "ttl_eviction"],
  "endpoints": {
    "handshake": "/api/v1/a2a/handshake",
    "dispatch": "/api/v1/a2a/task"
  }
}`}</pre>
                </div>

                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans">
                  For tool interactions, AgentMesh integrates <strong className="text-text-primary">Model Context Protocol (MCP)</strong> servers. This separates the LLM reasoning loop from execution privileges: tools run in sandboxed Docker subprocesses, enforcing strict argument schemas and preventing arbitrary execution exploits.
                </p>
              </div>
            </section>

            {/* Section 5: Verified Key Technical Contributions */}
            <section className="space-y-4">
              <h2 className="mono-label text-accent-chartreuse text-sm">
                05 // VERIFIED ENGINEERING CONTRIBUTIONS
              </h2>
              <div className="bg-bg-card hairline-all p-6 space-y-3">
                {project.keyContributions.map((contrib, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-accent-chartreuse shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{contrib}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Architectural Sidebar & Telemetry (4 Cols) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* Project Quick Specs */}
            <div className="bg-bg-card hairline-all p-5 space-y-4">
              <div className="flex items-center gap-2 hairline-b pb-3">
                <Terminal className="w-4 h-4 text-accent-chartreuse" />
                <span className="mono-label text-text-primary">
                  SYSTEM MANIFEST
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                {project.specifications.map((spec) => (
                  <div key={spec.label} className="hairline-b pb-2">
                    <span className="text-text-muted block text-[10px]">{spec.label}</span>
                    <span className="text-text-primary font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 space-y-2">
                <span className="mono-label text-text-muted block text-[10px]">
                  VERIFIED REPOSITORY
                </span>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs w-full py-2.5 px-3 bg-bg-secondary hairline-all text-text-primary hover:text-accent-chartreuse hover:border-accent-chartreuse transition-technical flex items-center justify-between"
                >
                  <span>GITHUB // GOWREESH07</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-accent-chartreuse" />
                </a>
              </div>
            </div>

            {/* Architectural Guardrail Notes */}
            <div className="bg-bg-secondary p-5 hairline-all space-y-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-accent-chartreuse" />
                <span className="mono-label text-accent-chartreuse">
                  VERIFICATION NOTE
                </span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed font-sans">
                This project represents a verified multi-agent proof-of-concept demonstrating decentralized A2A routing and MCP encapsulation. It is documented without exaggerated production deployment claims.
              </p>
            </div>

            {/* Next Project Link */}
            <div className="bg-bg-card hairline-all p-5 space-y-2">
              <span className="mono-label text-text-muted text-[10px]">NEXT CASE STUDY</span>
              <h4 className="font-display font-semibold text-sm text-text-primary">
                AI Career Guidance Counsellor
              </h4>
              <Link
                href="/work/ai-career-guidance"
                className="font-mono text-xs text-accent-chartreuse hover:underline flex items-center gap-1.5 pt-1"
              >
                <span>INSPECT PIPELINE</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
