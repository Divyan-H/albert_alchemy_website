import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const base =
  "group inline-flex items-center gap-2 rounded-full px-6 py-3 font-body font-semibold text-sm tracking-wide transition-all duration-300 focus-visible:outline-2";

const variants = {
  // Distinct warm accent — deliberately different from the violet/magenta
  // decorative gradient used in backgrounds, so the CTA reads as an action,
  // not another piece of ambient decoration.
  primary:
    "cta-gradient-bg text-void shadow-[0_8px_26px_-8px_rgba(255,106,26,0.5)] hover:shadow-[0_12px_34px_-6px_rgba(255,182,72,0.6)] hover:-translate-y-0.5",
  outline:
    "border border-white/25 text-white hover:border-white/60 hover:bg-white/5 hover:-translate-y-0.5",
  outlineDark:
    "border border-text-dark/20 text-text-dark hover:border-text-dark/50 hover:bg-text-dark/5 hover:-translate-y-0.5",
};

// Solid CTAs stay clean text-only (no icon) — the arrow-in-a-pill on every
// button is one of the more obvious template tells. Outline/secondary
// actions keep a small arrow since it reads more like an inline "explore"
// link than a primary action.
const showArrow = { primary: false, outline: true, outlineDark: true };

export default function Button({ to, href, onClick, type = "button", variant = "primary", children, className = "" }) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {showArrow[variant] && (
        <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {content}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
