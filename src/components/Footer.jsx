import { Link } from "react-router-dom";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { InstagramIcon, FacebookIcon, YouTubeIcon, LinkedInIcon } from "./SocialIcons";
import { brand, nav } from "../data/content";
import logoFull from "../assets/logo-full-trimmed.png";

export default function Footer() {
  return (
    <footer className="relative bg-void text-text-onvoid overflow-hidden">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full alchemy-gradient-bg opacity-[0.12] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-8">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Link to="/" className="inline-flex items-center mb-5 bg-white px-4 py-2.5 rounded-xl transition-all duration-300 hover:opacity-95 hover:shadow-lg hover:shadow-white/5">
              <img src={logoFull} alt={brand.name} className="h-10 sm:h-12 w-auto object-contain" />
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-text-onvoid-dim">
              A growth-focused Digital Marketing Company delivering SEO, AI SEO,
              Google Ads, Social Media Marketing, Branding, and Web Development
              services that turn visibility into revenue.
            </p>
          </div>

          <div>
            <h4 className="font-display text-white text-base mb-4">Navigate</h4>
            <ul className="space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-white text-base mb-4">Get in touch</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`mailto:${brand.email}`} className="flex items-center gap-2.5 hover:text-white transition-colors">
                  <Mail size={16} className="shrink-0 text-ember" /> {brand.email}
                </a>
              </li>
              <li>
                <a href={`tel:${brand.phoneHref}`} className="flex items-center gap-2.5 hover:text-white transition-colors">
                  <Phone size={16} className="shrink-0 text-ember" /> {brand.phone}
                </a>
              </li>
              <li>
                <a href={brand.whatsappChannel} target="_blank" rel="noreferrer" className="flex items-center gap-2.5 hover:text-white transition-colors">
                  <MessageCircle size={16} className="shrink-0 text-ember" /> WhatsApp Channel
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-5">
              <a
                href={brand.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-white/40 hover:text-white transition-colors"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={brand.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-white/40 hover:text-white transition-colors"
              >
                <FacebookIcon size={16} />
              </a>
              <a
                href={brand.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-white/40 hover:text-white transition-colors"
              >
                <YouTubeIcon size={16} />
              </a>
              <a
                href={brand.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-white/40 hover:text-white transition-colors"
              >
                <LinkedInIcon size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse gap-3 sm:flex-row items-center justify-between border-t border-white/10 pt-6 text-xs text-text-onvoid-dim">
          <p>© {new Date().getFullYear()} Albert Digital Alchemy. All rights reserved.</p>
          <p className="font-mono">{brand.website}</p>
        </div>
      </div>
    </footer>
  );
}
