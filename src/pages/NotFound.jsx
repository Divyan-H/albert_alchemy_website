import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import AuroraField from "../components/AuroraField";

export default function NotFound() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden bg-void min-h-screen flex items-center justify-center">
        <AuroraField />
        <div className="relative mx-auto max-w-2xl px-5 sm:px-8 text-center">
          {/* Glowing 404 */}
          <p
            className="font-display text-[8rem] sm:text-[11rem] leading-none font-bold select-none"
            style={{
              background: "linear-gradient(135deg, #ff6a1a, #c23bd0, #6a21d6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 60px rgba(255,106,26,0.35))",
            }}
          >
            404
          </p>

          <h1 className="font-display text-white text-2xl sm:text-3xl mt-2 mb-4 leading-tight">
            This page doesn't exist
          </h1>

          <p className="text-text-onvoid text-base sm:text-lg leading-relaxed max-w-md mx-auto mb-10">
            The URL you entered couldn't be found. It may have been moved,
            deleted, or never existed. Head back to our home page to find what
            you're looking for.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-ember text-white px-7 py-3.5 font-semibold text-sm shadow-xl transition-transform duration-300 hover:-translate-y-0.5"
            >
              ← Back to Home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 text-white px-7 py-3.5 font-semibold text-sm backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </div>

          {/* Decorative ambient glow */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full blur-[120px] opacity-[0.12]"
            style={{ background: "linear-gradient(135deg, #6a21d6, #c23bd0, #ff6a1a)" }}
          />
        </div>
      </section>
    </PageTransition>
  );
}
