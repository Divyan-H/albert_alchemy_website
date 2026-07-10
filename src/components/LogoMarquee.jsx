import { clients } from "../data/content";

const images = import.meta.glob("../assets/clients/*", { eager: true, import: "default" });

function resolveClientImage(file) {
  const match = Object.keys(images).find((k) => k.endsWith(`/${file}`));
  return match ? images[match] : null;
}

/**
 * LogoMarquee — continuous horizontal scroll of client logo tiles.
 * Logos come from varied source backgrounds, so each sits on its own
 * neutral white tile for visual consistency regardless of section theme.
 */
export default function LogoMarquee() {
  const loop = [...clients, ...clients];

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max gap-5 marquee-track">
        {loop.map((c, i) => (
          <div
            key={`${c.name}-${i}`}
            className="flex h-24 w-44 sm:h-28 sm:w-52 shrink-0 items-center justify-center rounded-xl bg-white border border-void/8 shadow-sm p-4"
            title={c.name}
          >
            <img
              src={resolveClientImage(c.file)}
              alt={c.name}
              className="max-h-full max-w-full object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <style>{`
        .marquee-track {
          animation: marquee-scroll 34s linear infinite;
        }
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </div>
  );
}
