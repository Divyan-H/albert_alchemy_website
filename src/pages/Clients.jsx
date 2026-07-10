import PageTransition from "../components/PageTransition";
import AuroraField from "../components/AuroraField";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import { clients } from "../data/content";

const images = import.meta.glob("../assets/clients/*", { eager: true, import: "default" });

function resolveClientImage(file) {
  const match = Object.keys(images).find((k) => k.endsWith(`/${file}`));
  return match ? images[match] : null;
}

export default function Clients() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden bg-void pt-36 pb-24 sm:pt-44 sm:pb-28">
        <AuroraField startingGap={110} breathingRange={4} />
        <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <Reveal className="flex items-center justify-center gap-2.5 font-mono text-xs tracking-[0.18em] uppercase text-text-onvoid-dim mb-6">
            <span className="h-px w-8 bg-white/25" />
            Who we work with
            <span className="h-px w-8 bg-white/25" />
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display text-white text-4xl sm:text-5xl leading-[1.1]">Our Clients</h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl mx-auto text-text-onvoid text-base sm:text-lg leading-relaxed">
              Real estate, food, agriculture, staffing, craft, and more — we
              build growth strategies around each industry's own customers,
              not a one-size-fits-all template.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((c, i) => (
              <Reveal
                key={c.name}
                delay={(i % 3) * 0.08}
                className="group rounded-2xl border border-void/10 bg-white p-7 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-24px_rgba(106,33,214,0.35)]"
              >
                <div className="h-28 w-full flex items-center justify-center mb-5">
                  <img
                    src={resolveClientImage(c.file)}
                    alt={c.name}
                    className="max-h-full max-w-[85%] object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <p className="font-display text-text-dark text-base leading-snug">{c.name}</p>
                <p className="text-xs font-mono uppercase tracking-wide text-text-onvoid-dim mt-1.5">
                  {c.industry}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="alchemy-gradient-bg relative overflow-hidden">
        <div className="grain absolute inset-0" />
        <div className="relative mx-auto max-w-3xl px-5 sm:px-8 py-20 text-center">
          <Reveal>
            <h2 className="font-display text-white text-3xl sm:text-4xl mb-6">Want to join them?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-white/85 max-w-xl mx-auto mb-9">
              Let's talk about where your business is today and build the
              growth plan to get where you want to go next.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Button to="/contact" variant="outline" className="!border-white !text-white">
              Get a Free Consultation
            </Button>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
