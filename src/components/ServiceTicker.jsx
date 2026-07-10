import { services } from "../data/content";

/**
 * ServiceTicker — a quiet, continuously scrolling manifest of the actual
 * eight services. Chosen deliberately over an abstract orbiting-node
 * diagram: it's concrete (real service names, not decorative shapes),
 * reads as informational rather than illustrative, and doesn't lean on the
 * generic "AI orbit/network" visual that's become a template cliché.
 */
export default function ServiceTicker() {
  const loop = [...services.items, ...services.items];

  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden h-[420px] sm:h-[480px]">
      <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-white/10">
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-text-onvoid-dim">
          What we do
        </span>
        <span className="h-1.5 w-1.5 rounded-full bg-ember" />
      </div>

      <div className="relative h-[calc(100%-3.2rem)] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]">
        <div className="ticker-track">
          {loop.map((s, i) => (
            <div
              key={`${s.id}-${i}`}
              className="flex items-start gap-3 px-6 py-4 border-b border-white/[0.06]"
            >
              <span className="mt-2 h-1 w-1 rounded-full bg-gradient-to-br from-violet-light to-ember shrink-0" />
              <p className="font-display text-white/90 text-[0.95rem] leading-snug">{s.title}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .ticker-track {
          animation: ticker-scroll 26s linear infinite;
        }
        @keyframes ticker-scroll {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ticker-track { animation: none; }
        }
      `}</style>
    </div>
  );
}
