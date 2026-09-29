import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className="mb-12 max-w-3xl"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">{eyebrow}</p>
      <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">{title}</h2>
      {text && <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55 md:text-base">{text}</p>}
    </motion.div>
  );
}