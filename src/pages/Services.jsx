import PageTransition from "../components/PageTransition";
import AuroraField from "../components/AuroraField";
import Reveal from "../components/Reveal";
import ServiceCard from "../components/ServiceCard";
import Button from "../components/Button";
import { services } from "../data/content";
import {
  BadgeCheck,
  ClipboardCheck,
  Fingerprint,
  TrendingUp,
  Infinity as InfinityIcon,
} from "lucide-react";

const whyIcons = [BadgeCheck, ClipboardCheck, Fingerprint, TrendingUp, InfinityIcon];

export default function Services() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden bg-void pt-36 pb-24 sm:pt-44 sm:pb-28">
        <AuroraField startingGap={110} breathingRange={4} />
        <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <Reveal className="flex items-center justify-center gap-2.5 font-mono text-xs tracking-[0.18em] uppercase text-text-onvoid-dim mb-6">
            <span className="h-px w-8 bg-white/25" />
            What we do
            <span className="h-px w-8 bg-white/25" />
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display text-white text-4xl sm:text-5xl leading-[1.1]">
              {services.heading}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl mx-auto text-text-onvoid text-base sm:text-lg leading-relaxed">
              Eight disciplines, one accountable team — each service is built to
              connect with the others so strategy, creative, and execution move
              in the same direction.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.items.map((s, i) => (
              <ServiceCard key={s.id} title={s.title} description={s.description} icon={s.icon} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY OUR SERVICES WORK */}
      <section className="relative bg-void py-20 sm:py-28 overflow-hidden">
        <div className="pointer-events-none absolute -top-20 right-1/4 h-72 w-72 rounded-full alchemy-gradient-bg opacity-[0.12] blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="max-w-xl mb-14">
            <h2 className="font-display text-white text-3xl sm:text-4xl leading-tight">
              {services.whyItWorks.heading}
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.whyItWorks.items.map((item, i) => {
              const Icon = whyIcons[i % whyIcons.length];
              return (
                <Reveal key={item} delay={i * 0.07} className="text-center sm:text-left">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-ember mb-4">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <p className="font-display text-white text-base leading-snug">{item}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="alchemy-gradient-bg relative overflow-hidden">
        <div className="grain absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-5 sm:px-8 py-20 text-center">
          <Reveal>
            <h2 className="font-display text-white text-3xl sm:text-4xl mb-6">
              Not sure which service fits?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-white/85 max-w-xl mx-auto mb-9">
              Tell us where your business stands today and where you want it to
              go — we'll map the right mix of services to get there.
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
