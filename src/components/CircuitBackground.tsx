"use client";

import React from "react";

export default function CircuitBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0"
      aria-hidden="true"
    >
      <svg
        className="w-full h-full object-cover"
        viewBox="0 0 1920 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Enhanced Neon Lime Glow Filter for Signal Pulses */}
          <filter id="circuitSignalGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Node Illumination Glow Filter */}
          <filter id="circuitNodeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ========================================================= */}
        {/* LAYER 1: STATIC PCB PATHWAYS & HARDWARE VIA JUNCTIONS    */}
        {/* ========================================================= */}
        <g stroke="var(--circuit-path)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          {/* --- TOP NAVIGATION & HEADER BUSES --- */}
          {/* Pathway 1: Top-left logo connector */}
          <path d="M 60 50 L 140 50 L 140 85 L 280 85" />
          
          {/* Pathway 2: Top horizontal system telemetry bus */}
          <path d="M 360 35 L 560 35 L 560 65 L 780 65 L 780 35 L 940 35" />
          
          {/* Pathway 3: Top right navigation feeds */}
          <path d="M 1160 30 L 1380 30 L 1380 70 L 1540 70" />
          <path d="M 1480 35 L 1480 95 L 1680 95 L 1680 50 L 1820 50" />

          {/* --- LEFT COLUMN: EDITORIAL, NAME & INTRO REGION --- */}
          {/* Pathway 4: Feeder to avatar header */}
          <path d="M 30 180 L 160 180 L 160 230 L 110 230" />
          
          {/* Pathway 5: Main Name horizontal accent line */}
          <path d="M 80 380 L 220 380 L 220 440 L 360 440" />
          
          {/* Pathway 6: Left perimeter vertical highway */}
          <path d="M 40 460 L 40 720 L 120 720" />
          <path d="M 40 560 L 90 560" />
          
          {/* Pathway 7: Bio description framing */}
          <path d="M 90 580 L 320 580 L 320 630 L 460 630" />
          
          {/* Pathway 8: Under-CTA button logic bus */}
          <path d="M 70 860 L 260 860 L 260 810 L 420 810 L 420 870 L 580 870" />

          {/* --- CENTER COLUMN: BRIDGE & BUS INTERCONNECTS --- */}
          {/* Pathway 9: High-level inter-column bridge */}
          <path d="M 460 240 L 590 240 L 590 150 L 780 150 L 780 270 L 910 270" />
          
          {/* Pathway 10: Mid-level cross-link */}
          <path d="M 520 360 L 680 360 L 680 430 L 850 430" />
          
          {/* Pathway 11: Primary logic backbone */}
          <path d="M 480 670 L 630 670 L 630 750 L 820 750 L 820 830 L 990 830" />
          
          {/* Pathway 12: Diagonal-offset horizontal run */}
          <path d="M 640 530 L 780 530 L 780 610 L 940 610" />

          {/* --- RIGHT COLUMN: IDE CODE WINDOW & TELEMETRY --- */}
          {/* Pathway 13: Directly framing top of IDE window */}
          <path d="M 920 120 L 1080 120 L 1080 170 L 1320 170" />
          
          {/* Pathway 14: Upper right quadrant circuit branch */}
          <path d="M 1390 130 L 1580 130 L 1580 230 L 1740 230" />
          
          {/* Pathway 15: IDE lateral data channel */}
          <path d="M 1020 350 L 1180 350 L 1180 440 L 1360 440" />
          
          {/* Pathway 16: Right vertical perimeter feeder */}
          <path d="M 1660 170 L 1720 170 L 1720 540 L 1600 540 L 1600 660 L 1520 660" />
          
          {/* Pathway 17: IDE-to-Status panel connector */}
          <path d="M 880 640 L 960 640 L 960 680 L 1120 680" />
          
          {/* Pathway 18: Lower status panel telemetry bus */}
          <path d="M 1320 630 L 1460 630 L 1460 740 L 1640 740 L 1640 880 L 1520 880" />
          
          {/* Pathway 19: Hardware stack base traces */}
          <path d="M 1080 870 L 1260 870 L 1260 950 L 1520 950" />

          {/* --- BOTTOM SECTION: FIELD ARCHIVE & EXPANDED RUNS --- */}
          {/* Pathway 20: Bottom left diagnostic path */}
          <path d="M 140 970 L 380 970 L 380 1030 L 640 1030" />
          
          {/* Pathway 21: Bottom center highway */}
          <path d="M 740 960 L 980 960 L 980 1020 L 1280 1020" />
          
          {/* Pathway 22: Bottom right exit trace */}
          <path d="M 1440 990 L 1690 990 L 1690 1040 L 1880 1040" />
        </g>

        {/* --- STATIC STATIC HARDWARE VIAS & CONNECTION PADS --- */}
        {/* Outlined Vias */}
        <g stroke="var(--circuit-via-stroke)" strokeWidth="1.2" fill="var(--circuit-via-fill)">
          <circle cx="60" cy="50" r="4" />
          <circle cx="280" cy="85" r="4" />
          <circle cx="360" cy="35" r="4" />
          <circle cx="940" cy="35" r="4" />
          <circle cx="1160" cy="30" r="4" />
          <circle cx="1540" cy="70" r="4" />
          <circle cx="1820" cy="50" r="4" />
          
          <circle cx="30" cy="180" r="4" />
          <circle cx="80" cy="380" r="4" />
          <circle cx="360" cy="440" r="4" />
          <circle cx="40" cy="460" r="4" />
          <circle cx="120" cy="720" r="4" />
          <circle cx="460" cy="630" r="4" />
          <circle cx="70" cy="860" r="4" />
          <circle cx="580" cy="870" r="4" />

          <circle cx="460" cy="240" r="4" />
          <circle cx="910" cy="270" r="4" />
          <circle cx="520" cy="360" r="4" />
          <circle cx="850" cy="430" r="4" />
          <circle cx="480" cy="670" r="4" />
          <circle cx="990" cy="830" r="4" />

          <circle cx="920" cy="120" r="4" />
          <circle cx="1320" cy="170" r="4" />
          <circle cx="1390" cy="130" r="4" />
          <circle cx="1740" cy="230" r="4" />
          <circle cx="1020" cy="350" r="4" />
          <circle cx="1360" cy="440" r="4" />
          <circle cx="1720" cy="170" r="4" />
          <circle cx="880" cy="640" r="4" />
          <circle cx="1120" cy="680" r="4" />
          <circle cx="1320" cy="630" r="4" />
          <circle cx="1520" cy="880" r="4" />
          <circle cx="1080" cy="870" r="4" />
          <circle cx="1520" cy="950" r="4" />
          
          <circle cx="140" cy="970" r="4" />
          <circle cx="640" cy="1030" r="4" />
          <circle cx="740" cy="960" r="4" />
          <circle cx="1280" cy="1020" r="4" />
          <circle cx="1440" cy="990" r="4" />
          <circle cx="1880" cy="1040" r="4" />
        </g>

        {/* Center Copper Pins */}
        <g fill="var(--circuit-path)">
          <circle cx="60" cy="50" r="1.5" />
          <circle cx="360" cy="35" r="1.5" />
          <circle cx="1160" cy="30" r="1.5" />
          <circle cx="30" cy="180" r="1.5" />
          <circle cx="80" cy="380" r="1.5" />
          <circle cx="40" cy="460" r="1.5" />
          <circle cx="460" cy="240" r="1.5" />
          <circle cx="920" cy="120" r="1.5" />
          <circle cx="1390" cy="130" r="1.5" />
          <circle cx="1020" cy="350" r="1.5" />
          <circle cx="1720" cy="170" r="1.5" />
          <circle cx="140" cy="970" r="1.5" />
          <circle cx="740" cy="960" r="1.5" />
          <circle cx="1440" cy="990" r="1.5" />
        </g>

        {/* Square Surface Mount Pads */}
        <g fill="var(--circuit-path)">
          <rect x="278" y="83" width="4" height="4" />
          <rect x="938" y="33" width="4" height="4" />
          <rect x="1538" y="68" width="4" height="4" />
          <rect x="108" y="228" width="4" height="4" />
          <rect x="88" y="558" width="4" height="4" />
          <rect x="358" y="438" width="4" height="4" />
          <rect x="458" y="628" width="4" height="4" />
          <rect x="578" y="868" width="4" height="4" />
          <rect x="908" y="268" width="4" height="4" />
          <rect x="848" y="428" width="4" height="4" />
          <rect x="988" y="828" width="4" height="4" />
          <rect x="938" y="608" width="4" height="4" />
          <rect x="1318" y="168" width="4" height="4" />
          <rect x="1738" y="228" width="4" height="4" />
          <rect x="1358" y="438" width="4" height="4" />
          <rect x="1518" y="658" width="4" height="4" />
          <rect x="1118" y="678" width="4" height="4" />
          <rect x="1518" y="878" width="4" height="4" />
          <rect x="1518" y="948" width="4" height="4" />
          <rect x="638" y="1028" width="4" height="4" />
          <rect x="1278" y="1018" width="4" height="4" />
          <rect x="1878" y="1038" width="4" height="4" />
        </g>

        {/* ========================================================= */}
        {/* LAYER 2: MOVING SIGNALS (PULSING LIME TRACES)             */}
        {/* ========================================================= */}
        <g
          stroke="var(--circuit-signal)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#circuitSignalGlow)"
          className="circuit-signal"
        >
          {/* Signal 1: Top Navigation Telemetry */}
          <path
            d="M 360 35 L 560 35 L 560 65 L 780 65 L 780 35 L 940 35"
            pathLength="1000"
            className="signal-pulse-1"
          />

          {/* Signal 2: Top Right Feeder */}
          <path
            d="M 1480 35 L 1480 95 L 1680 95 L 1680 50 L 1820 50"
            pathLength="1000"
            className="signal-pulse-2"
          />

          {/* Signal 3: Left Avatar Header Input */}
          <path
            d="M 30 180 L 160 180 L 160 230 L 110 230"
            pathLength="1000"
            className="signal-pulse-3"
          />

          {/* Signal 4: Left Name Telemetry Accent */}
          <path
            d="M 80 380 L 220 380 L 220 440 L 360 440"
            pathLength="1000"
            className="signal-pulse-4"
          />

          {/* Signal 5: Left Under-CTA Output */}
          <path
            d="M 70 860 L 260 860 L 260 810 L 420 810 L 420 870 L 580 870"
            pathLength="1000"
            className="signal-pulse-5"
          />

          {/* Signal 6: Center High-Level Bridge */}
          <path
            d="M 460 240 L 590 240 L 590 150 L 780 150 L 780 270 L 910 270"
            pathLength="1000"
            className="signal-pulse-6"
          />

          {/* Signal 7: Center Mid Cross-link */}
          <path
            d="M 520 360 L 680 360 L 680 430 L 850 430"
            pathLength="1000"
            className="signal-pulse-7"
          />

          {/* Signal 8: Center Primary Logic Backbone */}
          <path
            d="M 480 670 L 630 670 L 630 750 L 820 750 L 820 830 L 990 830"
            pathLength="1000"
            className="signal-pulse-8"
          />

          {/* Signal 9: Right IDE Upper Frame */}
          <path
            d="M 920 120 L 1080 120 L 1080 170 L 1320 170"
            pathLength="1000"
            className="signal-pulse-9"
          />

          {/* Signal 10: Right Vertical Feeder */}
          <path
            d="M 1660 170 L 1720 170 L 1720 540 L 1600 540 L 1600 660 L 1520 660"
            pathLength="1000"
            className="signal-pulse-10"
          />

          {/* Signal 11: Right Status Panel Channel */}
          <path
            d="M 1320 630 L 1460 630 L 1460 740 L 1640 740 L 1640 880 L 1520 880"
            pathLength="1000"
            className="signal-pulse-11"
          />

          {/* Signal 12: Bottom Diagnostic Bus */}
          <path
            d="M 740 960 L 980 960 L 980 1020 L 1280 1020"
            pathLength="1000"
            className="signal-pulse-12"
          />
        </g>

        {/* ========================================================= */}
        {/* LAYER 3: JUNCTION ILLUMINATION ACTIVATION                 */}
        {/* ========================================================= */}
        <g className="junction-nodes">
          {/* Junction 1: Top bus terminal */}
          <circle cx="940" cy="35" r="4.5" className="junction-node-1" />
          
          {/* Junction 2: Avatar feeder target */}
          <circle cx="110" cy="230" r="4.5" className="junction-node-2" />
          
          {/* Junction 3: Name telemetry terminal */}
          <circle cx="360" cy="440" r="4.5" className="junction-node-3" />
          
          {/* Junction 4: Center bridge junction */}
          <circle cx="910" cy="270" r="4.5" className="junction-node-4" />
          
          {/* Junction 5: Primary backbone terminal */}
          <circle cx="990" cy="830" r="4.5" className="junction-node-5" />
          
          {/* Junction 6: IDE top frame terminal */}
          <circle cx="1320" cy="170" r="4.5" className="junction-node-6" />
          
          {/* Junction 7: Right status bus node */}
          <circle cx="1520" cy="880" r="4.5" className="junction-node-7" />
          
          {/* Junction 8: Bottom bus exit node */}
          <circle cx="1280" cy="1020" r="4.5" className="junction-node-8" />
        </g>
      </svg>
    </div>
  );
}
