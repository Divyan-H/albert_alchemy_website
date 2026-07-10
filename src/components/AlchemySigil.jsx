const nodes = [
  { label: "SEO", angle: -90 },
  { label: "AI", angle: -30 },
  { label: "ADS", angle: 30 },
  { label: "SOC", angle: 90 },
  { label: "WEB", angle: 150 },
  { label: "BRD", angle: 210 },
];

const R = 152;
const CX = 200;
const CY = 200;

function pointOn(angleDeg, radius) {
  const a = (angleDeg * Math.PI) / 180;
  return { x: CX + radius * Math.cos(a), y: CY + radius * Math.sin(a) };
}

/**
 * AlchemySigil — the site's signature element.
 * Six orbiting nodes represent the agency's service disciplines, all feeding
 * a single glowing core: raw channels transmuted into one growth outcome.
 * This is the one deliberately maximalist, hand-built moment on the page —
 * everything else stays quiet by comparison.
 */
export default function AlchemySigil({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        role="img"
        aria-label="Diagram: six digital marketing disciplines orbiting a central growth core"
      >
        <defs>
          <radialGradient id="coreGrad" cx="35%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#ffe3b0" />
            <stop offset="35%" stopColor="#ff9a3d" />
            <stop offset="70%" stopColor="#c23bd0" />
            <stop offset="100%" stopColor="#6a21d6" />
          </radialGradient>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9b5cf0" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ff9a3d" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c9a4ff" />
            <stop offset="100%" stopColor="#ffb648" />
          </linearGradient>
          <filter id="glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="9" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* orbit path */}
        <circle
          cx={CX}
          cy={CY}
          r={R}
          fill="none"
          stroke="url(#lineGrad)"
          strokeOpacity="0.25"
          strokeWidth="1"
          strokeDasharray="2 8"
        />

        {/* rotating group: connecting lines + nodes */}
        <g className="sigil-rotate" style={{ transformOrigin: `${CX}px ${CY}px` }}>
          {nodes.map((n) => {
            const p = pointOn(n.angle, R);
            return (
              <line
                key={`line-${n.label}`}
                x1={CX}
                y1={CY}
                x2={p.x}
                y2={p.y}
                stroke="url(#lineGrad)"
                strokeWidth="1.4"
              />
            );
          })}
          {nodes.map((n) => {
            const p = pointOn(n.angle, R);
            return (
              <g key={n.label} className="sigil-counter-rotate" style={{ transformOrigin: `${p.x}px ${p.y}px` }}>
                <circle cx={p.x} cy={p.y} r="21" fill="#0c0716" stroke="url(#nodeGrad)" strokeWidth="1.5" />
                <text
                  x={p.x}
                  y={p.y + 4}
                  textAnchor="middle"
                  fontFamily="IBM Plex Mono, monospace"
                  fontSize="10"
                  fill="#f1ecfa"
                  letterSpacing="0.5"
                >
                  {n.label}
                </text>
              </g>
            );
          })}
        </g>

        {/* fixed glowing core */}
        <circle cx={CX} cy={CY} r="48" fill="url(#coreGrad)" filter="url(#glow)" className="sigil-pulse" />
        <circle cx={CX} cy={CY} r="48" fill="none" stroke="#ffe3b0" strokeOpacity="0.5" strokeWidth="1" />
      </svg>

      <style>{`
        .sigil-rotate {
          animation: sigil-spin 42s linear infinite;
        }
        .sigil-counter-rotate {
          animation: sigil-spin-reverse 42s linear infinite;
        }
        .sigil-pulse {
          animation: sigil-pulse 5s ease-in-out infinite;
        }
        @keyframes sigil-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes sigil-spin-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes sigil-pulse {
          0%, 100% { opacity: 0.92; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.045); }
        }
        @media (prefers-reduced-motion: reduce) {
          .sigil-rotate, .sigil-counter-rotate, .sigil-pulse { animation: none; }
        }
      `}</style>
    </div>
  );
}
