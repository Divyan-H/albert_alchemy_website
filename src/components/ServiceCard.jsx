import {
  Compass,
  Sparkles,
  Search,
  Cpu,
  Target,
  FlaskConical,
  Code2,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
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
 * pattern, clickable to load the details page.
 */
export default function ServiceCard({ id, title, description, icon, index = 0 }) {
  const Icon = icons[icon] || Sparkles;
  const [from, to] = gradients[index % gradients.length];

  return (
    <Reveal delay={(index % 4) * 0.06} className="h-full">
      <Link
        to={`/services/${id}`}
        className="group relative flex flex-col justify-between h-full rounded-2xl border border-void/10 bg-white/60 p-6 overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-20px_rgba(106,33,214,0.35)]"
      >
        {/* skewed gradient panel, hidden until hover */}
        <span
          className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-30"
          style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
        />
        <div>
          <div
            className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
            style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
          >
            <Icon size={22} strokeWidth={1.75} />
          </div>
          <h3 className="font-display text-lg text-text-dark mb-2 leading-snug">{title}</h3>
          <p className="text-sm text-text-muted leading-relaxed mb-6">{description}</p>
        </div>
        
        <div className="flex items-center gap-1.5 text-xs font-semibold text-ember transition-colors duration-300 group-hover:text-violet">
          <span>Learn more</span>
          <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </Link>
    </Reveal>
  );
}
