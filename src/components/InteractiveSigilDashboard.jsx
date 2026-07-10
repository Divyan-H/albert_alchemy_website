import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, TrendingUp, Cpu, Target, Compass, Award } from "lucide-react";

const nodes = [
  { label: "SEO",  angle: -90,  id: "SEO",  icon: Compass    },
  { label: "AI",   angle: -30,  id: "AI",   icon: Cpu        },
  { label: "ADS",  angle:  30,  id: "ADS",  icon: Target     },
  { label: "SOC",  angle:  90,  id: "SOC",  icon: Sparkles   },
  { label: "WEB",  angle: 150,  id: "WEB",  icon: Award      },
  { label: "BRD",  angle: 210,  id: "BRD",  icon: TrendingUp },
];

const R  = 142;
const CX = 200;
const CY = 200;

function pointOn(angleDeg, radius) {
  const a = (angleDeg * Math.PI) / 180;
  return { x: CX + radius * Math.cos(a), y: CY + radius * Math.sin(a) };
}

const nodeInfo = {
  SEO: {
    title: "Google SEO Optimization",
    description: "Building authoritative, high-ranking pages backed by solid technical SEO, structured data, and keyword relevance to drive free, perpetual lead generation.",
    color: "#ff6a1a",
    gradient: "linear-gradient(135deg, #ff6a1a, #ffb648)",
  },
  AI: {
    title: "AI Search Optimization",
    description: "Structuring schema and content matrices so your business is chosen, summarized, and credited by generative search engines like Perplexity, ChatGPT, and Google Gemini.",
    color: "#ffb648",
    gradient: "linear-gradient(135deg, #ffb648, #ff6a1a)",
  },
  ADS: {
    title: "Google Ads Management",
    description: "Paid search, display, and remarketing funnels optimized weekly to target transactional search intents and capture high-converting business leads.",
    color: "#e55ef2",
    gradient: "linear-gradient(135deg, #e55ef2, #ff6a1a)",
  },
  SOC: {
    title: "Social Media Marketing",
    description: "Creating thumb-stopping visual assets, managing custom campaigns, and designing organic social funnels that build long-term authority and consumer trust.",
    color: "#b78bff",
    gradient: "linear-gradient(135deg, #b78bff, #e55ef2)",
  },
  WEB: {
    title: "Web Development",
    description: "Custom corporate websites, WordPress portals, and landing pages that load instantly, secure your visitor data, and feature seamless call-to-action funnels.",
    color: "#a56fff",
    gradient: "linear-gradient(135deg, #a56fff, #b78bff)",
  },
  BRD: {
    title: "Branding Solutions",
    description: "Creating strategic positioning, corporate logos, comprehensive guidelines, and unique visual assets that elevate your brand high above standard competitors.",
    color: "#ff9a3d",
    gradient: "linear-gradient(135deg, #ff9a3d, #ffb648)",
  },
};

const DEFAULT_GRADIENT = "linear-gradient(135deg, #6a21d6, #c23bd0, #ff6a1a)";
const DEFAULT_COLOR    = "#ff6a1a";

export default function InteractiveSigilDashboard() {
  const [hovered, setHovered] = useState(null);

  const active      = hovered ? nodeInfo[hovered] : null;
  const activeColor = active?.color ?? DEFAULT_COLOR;
  const isHovering  = hovered !== null;

  return (
    /*
     * Outer wrapper: position:relative, fixed total height.
     * The description sits INSIDE this wrapper, absolutely positioned
     * below the sigil — so it NEVER pushes anything and never triggers
     * a layout-shift → mouseLeave → flicker loop.
     */
    <div
      className="relative select-none mx-auto"
      style={{ width: "100%", maxWidth: 400 }}
    >
      {/* Ambient glow — purely decorative */}
      <div
        className="absolute inset-0 rounded-full blur-[100px] opacity-[0.18] pointer-events-none transition-all duration-700"
        style={{ background: active?.gradient ?? DEFAULT_GRADIENT }}
      />

      {/* ── Sigil SVG ── */}
      <svg viewBox="0 0 400 400" className="w-full h-auto block">
        <defs>
          <radialGradient id="coreGrad" cx="35%" cy="30%" r="75%">
            <stop offset="0%"   stopColor="#ffe3b0" />
            <stop offset="35%"  stopColor={activeColor} />
            <stop offset="70%"  stopColor="#c23bd0" />
            <stop offset="100%" stopColor="#0c0716" />
          </radialGradient>

          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#9b5cf0" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ff9a3d" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#c9a4ff" />
            <stop offset="100%" stopColor="#ffb648" />
          </linearGradient>

          <filter id="coreGlow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="nodeGlowF" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Dashed orbit ring */}
        <circle
          cx={CX} cy={CY} r={R}
          fill="none"
          stroke="url(#lineGrad)"
          strokeOpacity="0.2"
          strokeWidth="1"
          strokeDasharray="3 8"
        />

        {/* ── Rotating group ── */}
        <g
          className={isHovering ? "paused" : "sigil-spin-anim"}
          style={{ transformOrigin: `${CX}px ${CY}px` }}
        >
          {/* Spokes */}
          {nodes.map((n) => {
            const p        = pointOn(n.angle, R);
            const isActive = hovered === n.id;
            return (
              <line
                key={`sp-${n.id}`}
                x1={CX} y1={CY} x2={p.x} y2={p.y}
                stroke={isActive ? activeColor : "url(#lineGrad)"}
                strokeWidth={isActive ? "2.5" : "1.2"}
                strokeOpacity={isActive ? "0.95" : "0.45"}
                style={{ transition: "stroke 0.3s, stroke-opacity 0.3s, stroke-width 0.3s" }}
              />
            );
          })}

          {/* Node groups — counter-rotate so labels stay upright */}
          {nodes.map((n) => {
            const p        = pointOn(n.angle, R);
            const isActive = hovered === n.id;
            const col      = isActive ? nodeInfo[n.id].color : null;
            return (
              <g
                key={n.id}
                className={isHovering ? "paused" : "sigil-spin-rev"}
                style={{ transformOrigin: `${p.x}px ${p.y}px`, cursor: "pointer" }}
                onMouseEnter={() => setHovered(n.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Hit area — larger invisible circle so hover is stable */}
                <circle cx={p.x} cy={p.y} r="26" fill="transparent" />

                {/* Aura ring */}
                <circle
                  cx={p.x} cy={p.y} r="26"
                  fill="transparent"
                  stroke={col ?? "transparent"}
                  strokeWidth="1"
                  opacity={isActive ? 0.5 : 0}
                  filter={isActive ? "url(#nodeGlowF)" : undefined}
                  style={{ transition: "opacity 0.3s" }}
                />
                {/* Node body */}
                <circle
                  cx={p.x} cy={p.y} r="20"
                  fill="#0c0716"
                  stroke={col ?? "url(#nodeGrad)"}
                  strokeWidth={isActive ? "2" : "1"}
                  filter={isActive ? "url(#nodeGlowF)" : undefined}
                  style={{ transition: "stroke 0.3s, stroke-width 0.3s" }}
                />
                {/* Label */}
                <text
                  x={p.x} y={p.y + 4}
                  textAnchor="middle"
                  fontFamily="IBM Plex Mono, monospace"
                  fontSize="9.5"
                  fontWeight={isActive ? "bold" : "normal"}
                  fill={isActive ? "#ffffff" : "#cabfe6"}
                  pointerEvents="none"
                  style={{ transition: "fill 0.3s" }}
                >
                  {n.label}
                </text>
              </g>
            );
          })}
        </g>

        {/* Central pulsing core */}
        <circle
          cx={CX} cy={CY} r="46"
          fill="url(#coreGrad)"
          filter="url(#coreGlow)"
          className="sigil-pulse-anim"
          style={{ transition: "fill 0.5s ease" }}
        />
        <circle cx={CX} cy={CY} r="46" fill="none" stroke="#ffe3b0" strokeOpacity="0.35" strokeWidth="1" />

        {/* Hint text rendered inside the SVG — zero layout impact */}
        <text
          x={CX} y="388"
          textAnchor="middle"
          fontFamily="IBM Plex Mono, monospace"
          fontSize="9"
          letterSpacing="3"
          fill={isHovering ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.2)"}
          style={{ transition: "fill 0.4s", textTransform: "uppercase" }}
        >
          {isHovering ? "· ATTUNED ·" : "· HOVER NODES ·"}
        </text>
      </svg>

      {/* ── Description — absolutely positioned, zero layout impact ── */}
      <div
        className="absolute left-0 right-0 text-center px-4 pointer-events-none"
        style={{ top: "calc(100% + 12px)" }}
      >
        <AnimatePresence mode="wait">
          {isHovering && active && (
            <motion.div
              key={hovered}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <p
                className="font-display text-base sm:text-lg font-semibold mb-1"
                style={{ color: active.color }}
              >
                {active.title}
              </p>
              <p className="text-text-onvoid text-sm leading-relaxed max-w-sm mx-auto">
                {active.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        .sigil-spin-anim {
          animation: sigil-spin 60s linear infinite;
        }
        .sigil-spin-rev {
          animation: sigil-spin-rev 60s linear infinite;
        }
        .sigil-pulse-anim {
          animation: sigil-pulse 6s ease-in-out infinite;
        }
        .paused {
          animation-play-state: paused !important;
        }
        @keyframes sigil-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes sigil-spin-rev {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        @keyframes sigil-pulse {
          0%, 100% { transform: scale(1);    opacity: 0.9; }
          50%       { transform: scale(1.06); opacity: 1;   }
        }
        @media (prefers-reduced-motion: reduce) {
          .sigil-spin-anim, .sigil-spin-rev, .sigil-pulse-anim { animation: none; }
        }
      `}</style>
    </div>
  );
}
