import PageTransition from "../components/PageTransition";
import AuroraField from "../components/AuroraField";
import Reveal from "../components/Reveal";
import { about } from "../data/content";
import founderPhoto from "../assets/founder.jpeg";

export default function About() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden bg-void pt-36 pb-24 sm:pt-44 sm:pb-28">
        <AuroraField startingGap={110} breathingRange={4} />
        <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <Reveal className="flex items-center justify-center gap-2.5 font-mono text-xs tracking-[0.18em] uppercase text-text-onvoid-dim mb-6">
            <span className="h-px w-8 bg-white/25" />
            About the agency
            <span className="h-px w-8 bg-white/25" />
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display text-white text-4xl sm:text-5xl leading-[1.1]">{about.heading}</h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-6">
          <Reveal>
            <p className="text-text-dark text-lg sm:text-xl leading-relaxed font-display">
              {about.intro}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-text-muted text-base leading-relaxed">{about.body}</p>
          </Reveal>
          <Reveal delay={0.16} className="flex flex-wrap gap-3 pt-2">
            {about.audiences.map((a) => (
              <span
                key={a}
                className="text-xs font-mono uppercase tracking-wide text-violet border border-violet/25 bg-violet/5 rounded-full px-4 py-2"
              >
                {a}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="bg-ink-soft py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal className="mb-10">
            <h2 className="font-display text-text-dark text-3xl sm:text-4xl">{about.leadership.heading}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid sm:grid-cols-[220px_1fr] gap-8 sm:gap-12 items-start rounded-3xl border border-void/10 bg-white p-6 sm:p-10 shadow-[0_30px_70px_-40px_rgba(106,33,214,0.35)]">
              <div className="relative mx-auto sm:mx-0 alchemy-border-glow rounded-2xl">
                <img
                  src={founderPhoto}
                  alt={about.leadership.name}
                  className="h-52 w-52 sm:h-56 sm:w-56 rounded-2xl object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-text-dark text-2xl">{about.leadership.name}</h3>
                <p className="alchemy-gradient-text font-mono text-sm uppercase tracking-wide mt-1 mb-5">
                  {about.leadership.title}
                </p>
                <p className="text-text-muted leading-relaxed">{about.leadership.bio}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VISION / MISSION */}
      <section className="relative bg-void py-20 sm:py-28 overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-1/4 h-72 w-72 rounded-full alchemy-gradient-bg opacity-[0.12] blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-5 sm:px-8 grid sm:grid-cols-2 gap-6">
          <Reveal className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 sm:p-10">
            <h3 className="font-display alchemy-gradient-text text-2xl mb-4">{about.vision.heading}</h3>
            <p className="text-text-onvoid leading-relaxed">{about.vision.body}</p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 sm:p-10">
            <h3 className="font-display alchemy-gradient-text text-2xl mb-4">{about.mission.heading}</h3>
            <p className="text-text-onvoid leading-relaxed">{about.mission.body}</p>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
