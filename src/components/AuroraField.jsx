import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * AuroraField — an ambient, breathing radial gradient field.
 * Adapted from a 21st.dev community component (Animated Gradient Background),
 * recoloured to the Digital Alchemy violet -> magenta -> ember -> gold palette
 * and simplified for use as a full-bleed hero/section backdrop.
 */
export default function AuroraField({
  className = "",
  startingGap = 130,
  breathing = true,
  animationSpeed = 0.015,
  breathingRange = 6,
  topOffset = 0,
  gradientColors = ["#0c0716", "#6a21d6", "#c23bd0", "#ff6a1a", "#ffb648"],
  gradientStops = [30, 48, 65, 82, 100],
}) {
  const ref = useRef(null);

  useEffect(() => {
    let raf;
    let width = startingGap;
    let dir = 1;

    const tick = () => {
      if (width >= startingGap + breathingRange) dir = -1;
      if (width <= startingGap - breathingRange) dir = 1;
      if (!breathing) dir = 0;
      width += dir * animationSpeed;

      const stops = gradientStops
        .map((s, i) => `${gradientColors[i]} ${s}%`)
        .join(", ");

      const gradient = `radial-gradient(${width}% ${width + topOffset}% at 50% 12%, ${stops})`;
      if (ref.current) ref.current.style.background = gradient;

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [startingGap, breathing, animationSpeed, breathingRange, topOffset, gradientColors, gradientStops]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.3 }}
      animate={{ opacity: 1, scale: 1, transition: { duration: 1.6, ease: [0.25, 0.1, 0.25, 1] } }}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div ref={ref} className="absolute inset-0" />
    </motion.div>
  );
}
