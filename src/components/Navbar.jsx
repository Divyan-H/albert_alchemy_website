import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, brand } from "../data/content";
import logoFullWhite from "../assets/logo-white.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "backdrop-blur-xl bg-void/70 border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 py-1.5">
        <Link to="/" className="flex items-center shrink-0 overflow-visible" aria-label={`${brand.name} — home`}>
          <img src={logoFullWhite} alt={brand.name} className="h-16 sm:h-[4.5rem] w-auto object-contain overflow-visible" />
        </Link>
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `relative px-3 xl:px-4 py-2 text-[0.85rem] xl:text-sm font-medium transition-colors duration-300 ${
                  isActive ? "text-white" : "text-text-onvoid hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-4 right-4 -bottom-0.5 h-[2px] alchemy-gradient-bg rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="cta-gradient-bg text-void text-[0.8rem] xl:text-sm font-semibold rounded-full px-4 xl:px-5 py-2.5 shadow-[0_6px_24px_-8px_rgba(255,106,26,0.45)] transition-transform duration-300 hover:-translate-y-0.5 whitespace-nowrap"
          >
            Get a Free Consultation
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-white border border-white/15"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden border-t border-white/10 bg-void/95 backdrop-blur-xl"
          >
            <div className="flex flex-col px-5 py-4 gap-1">
              {nav.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `block py-3 text-base font-medium border-b border-white/5 ${
                        isActive ? "alchemy-gradient-text font-semibold" : "text-text-onvoid"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
              <Link
                to="/contact"
                className="cta-gradient-bg text-void text-center text-sm font-semibold rounded-full px-5 py-3 mt-3"
              >
                Get a Free Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
