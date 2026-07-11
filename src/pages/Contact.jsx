import { useState } from "react";
import PageTransition from "../components/PageTransition";
import AuroraField from "../components/AuroraField";
import Reveal from "../components/Reveal";
import SEO from "../components/SEO";
import { brand, contact } from "../data/content";
import { contactSchema } from "../data/schema";
import { Mail, Phone, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "../components/SocialIcons";

const services = [
  "Digital Marketing Strategy",
  "Social Media Marketing",
  "Google SEO",
  "AI SEO",
  "Google Ads Management",
  "Branding",
  "Web Development",
  "Not sure yet",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: services[0], message: "" });
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Free Consultation Request — ${form.name || "New enquiry"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nInterested in: ${form.service}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <PageTransition>
      <SEO
        title="Contact Us | Albert Digital Alchemy"
        description={contact.subheading}
        path="contact"
        schema={contactSchema}
      />
      <section className="relative overflow-hidden bg-void pt-36 pb-20 sm:pt-44 sm:pb-24">
        <AuroraField startingGap={110} breathingRange={4} />
        <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <Reveal className="flex items-center justify-center gap-2.5 font-mono text-xs tracking-[0.18em] uppercase text-text-onvoid-dim mb-6">
            <span className="h-px w-8 bg-white/25" />
            Free consultation
            <span className="h-px w-8 bg-white/25" />
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display text-white text-4xl sm:text-5xl leading-[1.1]">{contact.heading}</h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl mx-auto text-text-onvoid text-base sm:text-lg leading-relaxed">
              {contact.subheading}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-[1fr_1.2fr] gap-10">
          {/* CONTACT DETAILS */}
          <Reveal>
            <div className="alchemy-border-glow rounded-3xl bg-void text-white p-8 sm:p-10 h-full">
              <h2 className="font-display text-2xl mb-2">Reach us directly</h2>
              <p className="text-text-onvoid-dim text-sm mb-8 leading-relaxed">{contact.formNote}</p>

              <ul className="space-y-5">
                <li>
                  <a href={`mailto:${brand.email}`} className="flex items-center gap-3 group">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full alchemy-gradient-bg shrink-0">
                      <Mail size={17} />
                    </span>
                    <span className="text-sm text-text-onvoid group-hover:text-white transition-colors break-all">
                      {brand.email}
                    </span>
                  </a>
                </li>
                <li>
                  <a href={`tel:${brand.phoneHref}`} className="flex items-center gap-3 group">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full alchemy-gradient-bg shrink-0">
                      <Phone size={17} />
                    </span>
                    <span className="text-sm text-text-onvoid group-hover:text-white transition-colors">
                      {brand.phone}
                    </span>
                  </a>
                </li>
                <li>
                  <a href={brand.whatsappChannel} target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full alchemy-gradient-bg shrink-0">
                      <MessageCircle size={17} />
                    </span>
                    <span className="text-sm text-text-onvoid group-hover:text-white transition-colors">
                      WhatsApp Channel
                    </span>
                  </a>
                </li>
              </ul>

              <div className="flex items-center gap-3 mt-9 pt-7 border-t border-white/10">
                <a
                  href={brand.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:border-white/40 transition-colors"
                >
                  <InstagramIcon size={17} />
                </a>
                <a
                  href={brand.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:border-white/40 transition-colors"
                >
                  <FacebookIcon size={17} />
                </a>
              </div>
            </div>
          </Reveal>

          {/* FORM */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-void/10 bg-white p-8 sm:p-10 shadow-[0_30px_70px_-40px_rgba(106,33,214,0.3)]"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full name" required>
                  <input
                    required
                    value={form.name}
                    onChange={update("name")}
                    type="text"
                    placeholder="Your name"
                    className="input"
                  />
                </Field>
                <Field label="Email" required>
                  <input
                    required
                    value={form.email}
                    onChange={update("email")}
                    type="email"
                    placeholder="you@company.com"
                    className="input"
                  />
                </Field>
                <Field label="Phone">
                  <input
                    value={form.phone}
                    onChange={update("phone")}
                    type="tel"
                    placeholder="+91"
                    className="input"
                  />
                </Field>
                <Field label="Interested in">
                  <select value={form.service} onChange={update("service")} className="input">
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>
              <div className="mt-5">
                <Field label="Tell us about your business" required>
                  <textarea
                    required
                    value={form.message}
                    onChange={update("message")}
                    rows={5}
                    placeholder="What are you looking to achieve?"
                    className="input resize-none"
                  />
                </Field>
              </div>

              <button
                type="submit"
                className="mt-6 w-full sm:w-auto group inline-flex items-center justify-center gap-2 rounded-full cta-gradient-bg text-void px-7 py-3.5 font-semibold text-sm shadow-[0_8px_26px_-8px_rgba(255,106,26,0.5)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Send message
                <Send size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>

              {sent && (
                <p className="mt-4 flex items-center gap-2 text-sm text-violet">
                  <CheckCircle2 size={16} /> Your email app should now open with this pre-filled. Prefer not to?
                  Email <a className="underline" href={`mailto:${brand.email}`}>{brand.email}</a> directly.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>

      <style>{`
        .input {
          width: 100%;
          border: 1px solid rgba(21,12,41,0.12);
          border-radius: 0.75rem;
          padding: 0.7rem 0.9rem;
          font-size: 0.9rem;
          background: #faf7ff;
          color: #150c29;
          transition: border-color .25s ease, box-shadow .25s ease;
        }
        .input:focus {
          outline: none;
          border-color: #c23bd0;
          box-shadow: 0 0 0 3px rgba(194,59,208,0.12);
        }
      `}</style>
    </PageTransition>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="block text-xs font-mono uppercase tracking-wide text-text-muted mb-1.5">
        {label}
        {required ? " *" : ""}
      </span>
      {children}
    </label>
  );
}
