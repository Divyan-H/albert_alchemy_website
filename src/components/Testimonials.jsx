import { Star, ExternalLink } from "lucide-react";
import Reveal from "./Reveal";
import { testimonials } from "../data/content";

export default function Testimonials() {
  return (
    <section className="relative bg-ink py-24 sm:py-28 border-t border-void/5">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <Reveal className="max-w-xl">
            <h2 className="font-display text-text-dark text-3xl sm:text-4xl leading-tight mb-3">
              {testimonials.heading}
            </h2>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed">
              {testimonials.subheading}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href={testimonials.googleReviewUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-void/15 px-5 py-2.5 text-sm font-semibold text-text-dark hover:border-void/40 transition-colors shrink-0"
            >
              Read reviews on Google
              <ExternalLink size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.items.map((t, i) => (
            <Reveal key={i} delay={i * 0.08} className="relative rounded-2xl bg-white border border-void/10 p-6 h-full flex flex-col">
              {testimonials.isPlaceholder && (
                <span className="absolute top-4 right-4 font-mono text-[10px] uppercase tracking-wide text-text-onvoid-dim bg-void/5 rounded-full px-2.5 py-1">
                  Sample
                </span>
              )}
              <div className="flex gap-0.5 mb-4 text-gold">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} size={15} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-sm text-text-muted leading-relaxed italic mb-6 flex-1">"{t.quote}"</p>
              <div>
                <p className="font-display text-text-dark text-sm">{t.name}</p>
                <p className="text-xs text-text-onvoid-dim font-mono mt-0.5">{t.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
