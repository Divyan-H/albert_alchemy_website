import {
  Compass,
  Sparkles,
  Search,
  Cpu,
  Target,
  FlaskConical,
  Code2,
  Zap,
} from "lucide-react";
import Reveal from "./Reveal";

const icons = {
  compass: Compass,
  sparkles: Sparkles,
  search: Search,
  cpu: Cpu,
  target: Target,
  flask: FlaskConical,
  code: Code2,
  bolt: Zap,
};

const gradients = [
  ["#6a21d6", "#c23bd0"],
  ["#c23bd0", "#ff6a1a"],
  ["#ff6a1a", "#ffb648"],
  ["#6a21d6", "#ff6a1a"],
];

/**
 * ServiceCard — adapted from a 21st.dev community "skewed gradient card"
 * pattern, recoloured to the violet/magenta/ember palette and toned down
 * (single consistent hover language across the grid instead of per-card
 * randomised hues) so eight cards read as one cohesive system.
 */
export default function ServiceCard({ title, description, icon, index = 0 }) {
  const Icon = icons[icon] || Sparkles;
  const [from, to] = gradients[index % gradients.length];

  return (
    <Reveal delay={(index % 4) * 0.06} className="h-full">
      <div className="group relative h-full rounded-2xl border border-void/10 bg-white/60 p-6 overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-20px_rgba(106,33,214,0.35)]">
        {/* skewed gradient panel, hidden until hover */}
        <span
          className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-30"
          style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
        />
        <div
          className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
          style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
        >
          <Icon size={22} strokeWidth={1.75} />
        </div>
        <h3 className="font-display text-lg text-text-dark mb-2 leading-snug">{title}</h3>
        <p className="text-sm text-text-muted leading-relaxed">{description}</p>
      </div>
    </Reveal>
  );
}
