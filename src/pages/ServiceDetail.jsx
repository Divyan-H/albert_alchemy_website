import { useParams, Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import AuroraField from "../components/AuroraField";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import SEO from "../components/SEO";
import { servicesDetail } from "../data/servicesDetail";
import NotFound from "./NotFound";
import {
  Compass,
  Sparkles,
  Search,
  Cpu,
  Target,
  FlaskConical,
  Code2,
  Zap,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

const icons = {
  strategy: Compass,
  social: Sparkles,
  seo: Search,
  "ai-seo": Cpu,
  ads: Target,
  branding: FlaskConical,
  "web-dev-company": Code2,
  "web-dev": Zap,
};

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const detail = servicesDetail[serviceId];

  // If the service doesn't exist, show the 404 page
  if (!detail) {
    return <NotFound />;
  }

  const Icon = icons[serviceId] || Sparkles;

  return (
    <PageTransition>
      <SEO
        title={detail.metaTitle || `${detail.title} | Albert Digital Alchemy`}
        description={detail.metaDescription || detail.description}
        path={`services/${serviceId}`}
        image={detail.image}
      />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-void pt-36 pb-24 sm:pt-44 sm:pb-28">
        <AuroraField startingGap={100} breathingRange={5} />
        <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal className="flex items-center gap-2 font-mono text-xs tracking-[0.18em] uppercase text-text-onvoid-dim mb-4">
            <Link to="/services" className="hover:text-white transition-colors duration-200 flex items-center gap-1">
              <ArrowLeft size={12} /> Services
            </Link>
            <span>/</span>
            <span className="text-ember font-semibold">{detail.title}</span>
          </Reveal>
          <Reveal delay={0.08}>
            <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-gold/80 block mb-3">
              {detail.eyebrow}
            </span>
            <h1 className="font-display text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.1]">
              {detail.title}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* DETAILED CONTENT SECTION */}
      <section className="bg-ink py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 grid lg:grid-cols-[1.1fr_1fr] gap-12 sm:gap-16 items-start">
          
          {/* LEFT COLUMN: Overview & Visual Asset */}
          <div className="space-y-10">
            <Reveal>
              <h2 className="font-display text-text-dark text-2xl sm:text-3xl mb-4">
                Service Overview
              </h2>
              <p className="text-text-muted text-base sm:text-lg leading-relaxed">
                {detail.description}
              </p>
            </Reveal>

            {/* Visual Graphics - checks if illustration was generated */}
            <Reveal delay={0.1}>
              {detail.image ? (
                <div className="relative rounded-2xl border border-void/10 bg-white p-2 shadow-xl overflow-hidden aspect-[4/3] flex items-center justify-center">
                  <img
                    src={detail.image}
                    alt={detail.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  {/* Subtle decorative frame border */}
                  <div className="absolute inset-0 rounded-2xl border border-black/5 pointer-events-none" />
                </div>
              ) : serviceId === "web-dev-company" ? (
                <WebDevVisual />
              ) : serviceId === "web-dev" ? (
                <WebsiteOptimizationVisual />
              ) : (
                /* Premium CSS visual mockup fallback for failed generation items */
                <div
                  className="relative rounded-2xl p-8 sm:p-10 text-white overflow-hidden aspect-[4/3] flex flex-col justify-between shadow-xl"
                  style={{ background: detail.fallbackColor || "linear-gradient(135deg, #6a21d6, #ff6a1a)" }}
                >
                  <div className="grain absolute inset-0 opacity-[0.08]" />
                  <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-white/10 blur-2xl" />
                  <div className="absolute -left-16 -bottom-16 w-48 h-48 rounded-full bg-black/20 blur-2xl" />
                  
                  <div className="relative z-10">
                    <span className="font-mono text-xs uppercase tracking-widest text-white/70">
                      Albert Digital Alchemy
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold mt-1">
                      {detail.title}
                    </h3>
                  </div>

                  <div className="relative z-10 flex items-end justify-between">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md border border-white/20">
                      <Icon size={28} strokeWidth={1.5} className="text-white" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-white/80">
                      Custom Solutions
                    </span>
                  </div>
                </div>
              )}
            </Reveal>
          </div>

          {/* RIGHT COLUMN: What We Do & Why Hire Us */}
          <div className="space-y-12">
            
            {/* WHAT WE DO SECTION */}
            <div className="space-y-6">
              <Reveal>
                <h2 className="font-display text-text-dark text-2xl sm:text-3xl border-b border-void/10 pb-3">
                  What We Do
                </h2>
              </Reveal>
              <div className="space-y-6">
                {detail.whatWeDo.map((item, i) => (
                  <Reveal key={item.title} delay={i * 0.05} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1 inline-flex h-7 w-7 items-center justify-center rounded-lg bg-violet/5 border border-violet/10 text-violet">
                      <span className="font-mono text-xs font-semibold">{i + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-display text-text-dark text-base sm:text-lg font-semibold leading-snug mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-text-muted leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* WHY HIRE US SECTION */}
            <div className="space-y-6">
              <Reveal>
                <h2 className="font-display text-text-dark text-2xl sm:text-3xl border-b border-void/10 pb-3">
                  Why Hire Us
                </h2>
              </Reveal>
              <div className="space-y-4">
                {detail.whyHireUs.map((item, i) => (
                  <Reveal key={item.title} delay={i * 0.05} className="flex gap-3 items-start bg-white/40 border border-void/5 p-4 rounded-xl">
                    <CheckCircle2 size={18} className="text-ember flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-display text-text-dark text-sm sm:text-base font-semibold leading-snug mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative alchemy-gradient-bg overflow-hidden">
        <div className="grain absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-5 sm:px-8 py-20 text-center">
          <Reveal>
            <h2 className="font-display text-white text-3xl sm:text-4xl mb-6">
              Ready to grow your business online?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-white/85 max-w-xl mx-auto mb-9 leading-relaxed">
              Get in touch with us to schedule a free digital audit and consultation. We'll outline exact opportunities to lift your visibility and capture high-converting business leads.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="flex flex-wrap justify-center gap-4">
            <Button to="/contact" variant="primary" className="!bg-white !text-text-dark hover:scale-105">
              Request Free Consultation
            </Button>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 text-white px-6 py-3.5 font-semibold text-sm hover:bg-white/10 transition-all duration-300"
            >
              Back to Services
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}

function WebDevVisual() {
  return (
    <div className="relative rounded-2xl bg-void p-6 shadow-xl overflow-hidden aspect-[4/3] flex flex-col justify-between border border-white/10 select-none">
      <div className="grain absolute inset-0 opacity-[0.04] pointer-events-none" />
      
      {/* Background grid */}
      <svg className="absolute inset-0 w-full h-full stroke-white/5 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" fill="none">
        <defs>
          <pattern id="grid-dev" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-dev)" />
      </svg>

      {/* Ambient glows */}
      <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-violet/20 blur-3xl animate-pulse duration-[8s]" />
      <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-ember/15 blur-3xl animate-pulse duration-[6s]" />

      {/* Mockup devices layer */}
      <div className="relative w-full h-[80%] flex items-center justify-center">
        
        {/* Desktop Browser Mockup */}
        <div className="absolute w-[82%] h-[82%] border border-white/10 rounded-xl bg-void-soft/85 backdrop-blur-md shadow-2xl flex flex-col overflow-hidden transform -translate-y-4">
          {/* Header bar */}
          <div className="bg-white/[0.03] border-b border-white/5 px-3 py-2 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500/40" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/40" />
            <span className="w-2 h-2 rounded-full bg-green-500/40" />
            <div className="h-3 w-28 rounded bg-white/5 ml-3" />
          </div>
          {/* Mock layout code lines */}
          <div className="p-4 space-y-2 font-mono text-[9px] text-white/30 text-left">
            <div className="flex gap-1.5"><span className="text-violet-light">&lt;section</span> <span className="text-ember">class</span>=<span className="text-gold">"hero"</span>&gt;</div>
            <div className="pl-4 flex gap-1.5"><span className="text-violet-light">&lt;h1&gt;</span><span className="text-white/60">Digital Alchemy</span><span className="text-violet-light">&lt;/h1&gt;</span></div>
            <div className="pl-4 flex gap-1.5"><span className="text-violet-light">&lt;div</span> <span className="text-ember">className</span>=<span className="text-gold">"grid"</span>&gt;</div>
            <div className="pl-8 text-white/15">...</div>
            <div className="pl-4 text-violet-light">&lt;/div&gt;</div>
            <div className="text-violet-light">&lt;/section&gt;</div>
          </div>
        </div>

        {/* Tablet Mockup overlapping */}
        <div className="absolute w-[44%] h-[64%] border border-white/15 rounded-lg bg-void-soft/95 backdrop-blur-md shadow-2xl flex flex-col overflow-hidden transform translate-x-14 translate-y-4">
          <div className="bg-white/[0.04] border-b border-white/5 px-2 py-1.5 flex items-center justify-between">
            <div className="h-1.5 w-10 rounded bg-white/10" />
            <span className="w-1 h-1 rounded-full bg-white/20" />
          </div>
          <div className="p-3 space-y-1.5">
            <div className="h-2 w-full rounded bg-white/5" />
            <div className="h-2 w-2/3 rounded bg-white/5" />
            <div className="grid grid-cols-2 gap-1 pt-1.5">
              <div className="h-8 rounded border border-white/5 bg-white/[0.02]" />
              <div className="h-8 rounded border border-white/5 bg-white/[0.02]" />
            </div>
          </div>
        </div>

        {/* Smartphone Mockup */}
        <div className="absolute w-[22%] h-[48%] border border-white/20 rounded-md bg-void shadow-2xl flex flex-col overflow-hidden transform -translate-x-24 translate-y-10">
          <div className="h-2.5 bg-white/[0.05] border-b border-white/5 flex items-center justify-center">
            <span className="h-0.5 w-4 rounded-full bg-white/20" />
          </div>
          <div className="p-2 space-y-1">
            <div className="h-1 w-full rounded bg-white/5" />
            <div className="h-5 w-full rounded bg-white/[0.02] border border-white/5 flex items-center justify-center">
              <span className="text-[5px] font-mono text-ember font-semibold uppercase">API</span>
            </div>
            <div className="h-5 w-full rounded bg-white/[0.02] border border-white/5 flex items-center justify-center">
              <span className="text-[5px] font-mono text-gold font-semibold uppercase">UI</span>
            </div>
          </div>
        </div>

      </div>

      <div className="relative z-10 flex items-center justify-between">
        <span className="text-[9px] font-mono text-white/35 tracking-wider">RESPONSIVE STACK</span>
        <span className="text-[9px] font-mono text-ember tracking-wider">BUILD ENGINE v2.0</span>
      </div>
    </div>
  );
}

function WebsiteOptimizationVisual() {
  return (
    <div className="relative rounded-2xl bg-void p-6 shadow-xl overflow-hidden aspect-[4/3] flex flex-col justify-between border border-white/10 select-none">
      <div className="grain absolute inset-0 opacity-[0.04] pointer-events-none" />
      
      {/* Background grid */}
      <svg className="absolute inset-0 w-full h-full stroke-white/5 [mask-image:radial-gradient(100%_100%_at_top_left,white,transparent)]" fill="none">
        <defs>
          <pattern id="grid-opt" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-opt)" />
      </svg>

      {/* Ambient glows */}
      <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-ember/20 blur-3xl animate-pulse duration-[8s]" />
      <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-violet/15 blur-3xl animate-pulse duration-[6s]" />

      <div className="relative w-full h-[80%] flex flex-col items-center justify-center gap-3">
        
        {/* Speedometer Gauge */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90">
            {/* Track background */}
            <circle
              cx="64"
              cy="64"
              r="52"
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="5"
              fill="none"
              strokeDasharray="260 327"
              strokeLinecap="round"
              className="origin-center"
              style={{ transform: "rotate(30deg)" }}
            />
            {/* Speed line indicator */}
            <circle
              cx="64"
              cy="64"
              r="52"
              stroke="url(#speedGrad)"
              strokeWidth="5"
              fill="none"
              strokeDasharray="245 327"
              strokeLinecap="round"
              className="origin-center"
              style={{ transform: "rotate(30deg)", filter: "drop-shadow(0 0 8px rgba(255, 106, 26, 0.45))" }}
            />
            <defs>
              <linearGradient id="speedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6a21d6" />
                <stop offset="50%" stopColor="#c23bd0" />
                <stop offset="100%" stopColor="#ff6a1a" />
              </linearGradient>
            </defs>
          </svg>
          
          <div className="absolute text-center">
            <span className="font-display text-4xl font-bold text-white tracking-tighter">100</span>
            <p className="text-[7px] font-mono text-green-400 font-bold tracking-widest uppercase mt-0.5">SPEED</p>
          </div>
        </div>

        {/* Speed Metrics overlay cards */}
        <div className="flex gap-2 justify-center w-full">
          <div className="px-2.5 py-1.5 rounded-lg border border-white/5 bg-white/[0.02] text-center backdrop-blur-sm">
            <p className="text-[7px] font-mono text-white/30 uppercase">LCP</p>
            <p className="text-[10px] font-mono font-semibold text-green-400">0.6s</p>
          </div>
          <div className="px-2.5 py-1.5 rounded-lg border border-white/5 bg-white/[0.02] text-center backdrop-blur-sm">
            <p className="text-[7px] font-mono text-white/30 uppercase">TBT</p>
            <p className="text-[10px] font-mono font-semibold text-green-400">45ms</p>
          </div>
          <div className="px-2.5 py-1.5 rounded-lg border border-white/5 bg-white/[0.02] text-center backdrop-blur-sm">
            <p className="text-[7px] font-mono text-white/30 uppercase">CLS</p>
            <p className="text-[10px] font-mono font-semibold text-green-400">0.00</p>
          </div>
        </div>

      </div>

      <div className="relative z-10 flex items-center justify-between">
        <span className="text-[9px] font-mono text-white/35 tracking-wider">CORE WEB VITALS</span>
        <span className="text-[9px] font-mono text-green-400 tracking-wider">OPTIMIZED</span>
      </div>
    </div>
  );
}
