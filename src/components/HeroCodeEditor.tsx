"use client";

import React, { useState, useEffect, useRef } from "react";

interface CodeToken {
  text: string;
  className?: string;
}

interface CodeLine {
  id: number;
  tokens: CodeToken[];
  indent?: boolean; // pl-4
  isBlank?: boolean;
  pauseAfter?: number; // ms pause after finishing line
}

const CODE_LINES: CodeLine[] = [
  // Block 1: Imports
  {
    id: 1,
    tokens: [
      { text: "from", className: "text-[#e06c75]" },
      { text: " " },
      { text: "fastapi", className: "text-[#e5c07b]" },
      { text: " " },
      { text: "import", className: "text-[#e06c75]" },
      { text: " " },
      { text: "FastAPI", className: "text-[#e5c07b]" },
      { text: ", " },
      { text: "BackgroundTasks", className: "text-[#e5c07b]" },
    ],
    pauseAfter: 200,
  },
  {
    id: 2,
    tokens: [
      { text: "from", className: "text-[#e06c75]" },
      { text: " " },
      { text: "a2a.protocol", className: "text-[#e5c07b]" },
      { text: " " },
      { text: "import", className: "text-[#e06c75]" },
      { text: " " },
      { text: "A2AMessage", className: "text-[#e5c07b]" },
      { text: ", " },
      { text: "AgentRegistry", className: "text-[#e5c07b]" },
    ],
    pauseAfter: 200,
  },
  {
    id: 3,
    tokens: [
      { text: "from", className: "text-[#e06c75]" },
      { text: " " },
      { text: "mcp.client", className: "text-[#e5c07b]" },
      { text: " " },
      { text: "import", className: "text-[#e06c75]" },
      { text: " " },
      { text: "MCPClient", className: "text-[#e5c07b]" },
    ],
    pauseAfter: 480, // Pause between imports and function
  },
  {
    id: 4,
    tokens: [],
    isBlank: true,
    pauseAfter: 100,
  },

  // Block 2: Orchestration logic
  {
    id: 5,
    tokens: [
      { text: "async def", className: "text-[#e06c75]" },
      { text: " " },
      { text: "orchestrate_mesh", className: "text-[#61afef]" },
      { text: "(" },
      { text: "task", className: "text-[#e5c07b]" },
      { text: ": A2AMessage):" },
    ],
    pauseAfter: 260,
  },
  {
    id: 6,
    indent: true,
    tokens: [
      { text: "agent = " },
      { text: "await", className: "text-[#e06c75]" },
      { text: " AgentRegistry." },
      { text: "resolve", className: "text-[#61afef]" },
      { text: "(task.capability)" },
    ],
    pauseAfter: 220,
  },
  {
    id: 7,
    indent: true,
    tokens: [
      { text: "payload = " },
      { text: "await", className: "text-[#e06c75]" },
      { text: " agent." },
      { text: "dispatch", className: "text-[#61afef]" },
      { text: "(task.payload)" },
    ],
    pauseAfter: 220,
  },
  {
    id: 8,
    indent: true,
    tokens: [
      { text: "await", className: "text-[#e06c75]" },
      { text: " MCPClient." },
      { text: "execute_tool", className: "text-[#61afef]" },
      { text: "(payload.tool_call)" },
    ],
    pauseAfter: 240,
  },
  {
    id: 9,
    indent: true,
    tokens: [
      { text: "return", className: "text-[#e06c75]" },
      { text: " {" },
      { text: '"status"', className: "text-[#98c379]" },
      { text: ": " },
      { text: '"SYNCED"', className: "text-[#98c379]" },
      { text: ", " },
      { text: '"node"', className: "text-[#98c379]" },
      { text: ": agent.id}" },
    ],
    pauseAfter: 520, // Pause between functions
  },
  {
    id: 10,
    tokens: [],
    isBlank: true,
    pauseAfter: 120,
  },

  // Block 3: FastAPI Dispatch Route
  {
    id: 11,
    tokens: [
      { text: "@app.post", className: "text-[#56b6c2]" },
      { text: "(" },
      { text: '"/api/v1/mesh/dispatch"', className: "text-[#98c379]" },
      { text: ")" },
    ],
    pauseAfter: 240,
  },
  {
    id: 12,
    tokens: [
      { text: "async def", className: "text-[#e06c75]" },
      { text: " " },
      { text: "dispatch_task", className: "text-[#61afef]" },
      { text: "(" },
      { text: "payload", className: "text-[#e5c07b]" },
      { text: ": dict):" },
    ],
    pauseAfter: 260,
  },
  {
    id: 13,
    indent: true,
    tokens: [
      { text: "workflow = " },
      { text: "await", className: "text-[#e06c75]" },
      { text: " " },
      { text: "orchestrate_mesh", className: "text-[#61afef]" },
      { text: "(payload)" },
    ],
    pauseAfter: 220,
  },
  {
    id: 14,
    indent: true,
    tokens: [
      { text: "return", className: "text-[#e06c75]" },
      { text: " {" },
      { text: '"workflow_id"', className: "text-[#98c379]" },
      { text: ": workflow.id, " },
      { text: '"state"', className: "text-[#98c379]" },
      { text: ": " },
      { text: '"ROUTED"', className: "text-[#98c379]" },
      { text: "}" },
    ],
    pauseAfter: 400,
  },
];

// Calculate total characters
const TOTAL_CHARS = CODE_LINES.reduce((sum, line) => {
  return sum + line.tokens.reduce((lineSum, t) => lineSum + t.text.length, 0);
}, 0);

export default function HeroCodeEditor() {
  const [typedChars, setTypedChars] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setTypedChars(TOTAL_CHARS);
      setIsFinished(true);
      return;
    }

    let currentChar = 0;

    // Helper: calculate character offset at end of each line
    const lineEndIndices: { lineIndex: number; charEnd: number; pause: number }[] = [];
    let runningCharCount = 0;
    CODE_LINES.forEach((line, idx) => {
      const lineLen = line.tokens.reduce((s, t) => s + t.text.length, 0);
      runningCharCount += lineLen;
      lineEndIndices.push({
        lineIndex: idx,
        charEnd: runningCharCount,
        pause: line.pauseAfter || 200,
      });
    });

    const step = () => {
      currentChar += 1;
      setTypedChars(currentChar);

      if (currentChar >= TOTAL_CHARS) {
        setIsFinished(true);
        return;
      }

      // Check if we just completed a line
      const lineEnd = lineEndIndices.find((l) => l.charEnd === currentChar);
      let nextDelay = 18 + Math.floor(Math.random() * 8); // 18ms - 25ms standard keystroke

      if (lineEnd) {
        nextDelay = lineEnd.pause;
      }

      timeoutRef.current = setTimeout(step, nextDelay);
    };

    // Initial delay before typing begins (500ms)
    timeoutRef.current = setTimeout(step, 500);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Render logic: maps CODE_LINES according to typedChars
  let runningCount = 0;
  let cursorRendered = false;

  return (
    <div
      className="p-5 sm:p-6 font-mono text-xs sm:text-[12.5px] leading-[1.75] overflow-x-auto text-[#f4f4f0] min-h-[385px] sm:min-h-[415px] select-text"
      aria-label="Interactive Python code editor showing AgentMesh orchestrator implementation"
    >
      {CODE_LINES.map((line) => {
        if (line.isBlank) {
          // Render blank line if we have typed past previous line
          const previousLineCompleted = runningCount <= typedChars;
          if (!previousLineCompleted) return null;
          return <div key={line.id} className="h-4" />;
        }

        const lineLen = line.tokens.reduce((s, t) => s + t.text.length, 0);
        const lineStart = runningCount;
        const lineEnd = runningCount + lineLen;

        // Has this line started typing yet?
        if (typedChars < lineStart) {
          return null;
        }

        const isCurrentLine = typedChars >= lineStart && typedChars <= lineEnd;

        const renderedTokens = line.tokens.map((token, tokenIdx) => {
          const tokenStart = runningCount;
          const tokenEnd = runningCount + token.text.length;
          runningCount += token.text.length;

          if (typedChars < tokenStart) {
            return null;
          }

          if (typedChars >= tokenEnd) {
            // Token is fully typed
            return (
              <span key={tokenIdx} className={token.className || ""}>
                {token.text}
              </span>
            );
          }

          // Token is partially typed: cursor belongs here!
          const visibleSlice = token.text.slice(0, typedChars - tokenStart);
          cursorRendered = true;

          return (
            <React.Fragment key={tokenIdx}>
              <span className={token.className || ""}>{visibleSlice}</span>
              <span
                className="inline-block w-[2px] h-[1.15em] bg-[#d5f52f] ml-0.5 align-middle shadow-[0_0_8px_#d5f52f]"
                style={{ animation: "cursorBlink 0.8s steps(2, start) infinite" }}
                aria-hidden="true"
              />
            </React.Fragment>
          );
        });

        // If cursor wasn't placed inside a token (e.g. exactly at line end)
        const renderLineEndCursor =
          isCurrentLine && !cursorRendered && typedChars === lineEnd && !isFinished;

        return (
          <div key={line.id} className={line.indent ? "pl-4" : ""}>
            {renderedTokens}
            {renderLineEndCursor && (
              <span
                className="inline-block w-[2px] h-[1.15em] bg-[#d5f52f] ml-0.5 align-middle shadow-[0_0_8px_#d5f52f]"
                style={{ animation: "cursorBlink 0.8s steps(2, start) infinite" }}
                aria-hidden="true"
              />
            )}
            {/* If this is the last line and finished, render subtle blinking cursor at the end */}
            {isFinished && line.id === 14 && (
              <span
                className="inline-block w-[2px] h-[1.15em] bg-[#d5f52f]/70 ml-1 align-middle shadow-[0_0_5px_#d5f52f]"
                style={{ animation: "cursorBlink 1.2s steps(2, start) infinite" }}
                aria-hidden="true"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
