import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import AuroraField from "../components/AuroraField";
import InteractiveSigilDashboard from "../components/InteractiveSigilDashboard";
import ServiceCard from "../components/ServiceCard";
import LogoMarquee from "../components/LogoMarquee";
import Testimonials from "../components/Testimonials";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import SEO from "../components/SEO";
import { home, services } from "../data/content";
import { homeSchema } from "../data/schema";
import { Check } from "lucide-react";

export default function Home() {
  return (
    <PageTransition>
      <SEO
        title="Digital Marketing Company in Chennai | SEO, Social Media & Web Development"
        description="Albert Digital Alchemy is a leading Digital Marketing Company in Chennai offering SEO, AI SEO, Social Media Marketing, Google Ads, Branding, Web Development, and Website Optimization services across Tamil Nadu."
        path=""
        schema={homeSchema}
      />
      {/* HERO */}
      <section className="relative overflow-hidden bg-void pt-36 pb-28 sm:pt-44 sm:pb-36">
        <AuroraField />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[1.15fr_1fr] gap-16 items-center">
          <div>
            <Reveal>
              <span className="flex items-center gap-2.5 font-mono text-xs tracking-[0.18em] uppercase text-ember mb-6">
                <span className="h-px w-8 bg-ember/60" />
                {home.hero.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-display text-white text-[2.35rem] leading-[1.12] sm:text-5xl sm:leading-[1.1] lg:text-[3.4rem] lg:leading-[1.08] max-w-2xl">
                {home.hero.headline}
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-text-onvoid text-base sm:text-lg leading-relaxed">
                {home.hero.subheadline}
              </p>
            </Reveal>
            <Reveal delay={0.24} className="mt-9 flex flex-wrap gap-4">
              <Button to="/contact" variant="primary">
                {home.hero.primaryCta}
              </Button>
              <Button to="/services" variant="outline">
                {home.hero.secondaryCta}
              </Button>
            </Reveal>

            <Reveal delay={0.34} className="mt-14 flex flex-wrap gap-4">
              {home.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-white/15 bg-void/60 backdrop-blur-sm px-5 py-4 min-w-[9.5rem]"
                >
                  <p className="font-display text-white text-2xl sm:text-3xl">{s.value}</p>
                  <p className="text-xs text-text-onvoid mt-1 leading-snug">{s.label}</p>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.2} className="relative mx-auto w-full max-w-md lg:max-w-none">
            <InteractiveSigilDashboard />
          </Reveal>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="bg-ink py-12 sm:py-14 border-b border-void/5">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="text-center mb-8">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
              Trusted by growing businesses
            </p>
          </Reveal>
          <LogoMarquee />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative bg-ink py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-14 items-start">
            <Reveal>
              <h2 className="font-display text-text-dark text-3xl sm:text-4xl leading-tight">
                {home.whyChooseUs.heading}
              </h2>
            </Reveal>
            <div>
              <Reveal>
                <p className="text-text-muted text-base sm:text-lg leading-relaxed max-w-xl">
                  {home.whyChooseUs.body}
                </p>
              </Reveal>
              <div className="mt-10 grid sm:grid-cols-3 gap-6">
                {home.whyChooseUs.pillars.map((p, i) => (
                  <Reveal key={p.name} delay={i * 0.08} className="border-l-2 border-violet/30 pl-4">
                    <p className="font-display text-text-dark text-lg mb-1.5">{p.name}</p>
                    <p className="text-sm text-text-muted leading-relaxed">{p.detail}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="relative bg-ink-soft py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="max-w-xl mb-12">
            <h2 className="font-display text-text-dark text-3xl sm:text-4xl leading-tight">
              {home.servicesPreview.heading}
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.items.slice(0, 6).map((s, i) => (
              <ServiceCard key={s.id} id={s.id} title={s.title} description={s.description} icon={s.icon} index={i} />
            ))}
          </div>
          <Reveal className="mt-10 flex justify-center">
            <Button to="/services" variant="outlineDark">
              View Our Services
            </Button>
          </Reveal>
        </div>
      </section>

      <Testimonials />

      {/* SEO CONTENT SECTION */}
      <section className="relative bg-void py-24 sm:py-28 overflow-hidden">
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full alchemy-gradient-bg opacity-[0.14] blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="font-display text-white text-3xl sm:text-4xl leading-tight mb-6">
              {home.seoSection.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-text-onvoid text-base sm:text-lg leading-relaxed">
              {home.seoSection.body}
            </p>
          </Reveal>
          <Reveal delay={0.2} className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {["Google SEO", "AI SEO", "Paid Advertising", "Branding", "High-Performance Websites"].map((k) => (
              <span key={k} className="inline-flex items-center gap-2 text-sm text-text-onvoid-dim font-mono">
                <Check size={14} className="text-ember" /> {k}
              </span>
            ))}
          </Reveal>
        </div>
      </section>



      {/* CTA */}
      <section className="relative alchemy-gradient-bg overflow-hidden">
        <div className="grain absolute inset-0" />
        <div className="relative mx-auto max-w-5xl px-5 sm:px-8 py-20 sm:py-24 text-center">
          <Reveal>
            <h2 className="font-display text-white text-3xl sm:text-[2.6rem] leading-tight mb-5">
              {home.cta.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-9">
              {home.cta.body}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white text-text-dark px-7 py-3.5 font-semibold text-sm shadow-xl transition-transform duration-300 hover:-translate-y-0.5"
            >
              {home.cta.button}
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
