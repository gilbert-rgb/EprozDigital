import { motion, MotionConfig } from "framer-motion";

export function MotionRoot({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({ eyebrow, title, text, light = false }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">{eyebrow}</p>
      <h2 className={`mt-3 font-display text-3xl md:text-4xl font-bold leading-tight ${light ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {text && <p className={`mt-4 text-lg leading-8 ${light ? "text-slate-300" : "text-slate-600"}`}>{text}</p>}
    </div>
  );
}
