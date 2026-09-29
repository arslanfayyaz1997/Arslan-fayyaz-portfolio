import { motion } from "framer-motion";

export default function LoadingScreen({ done }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: done ? 0 : 1, pointerEvents: done ? "none" : "auto" }}
      transition={{ duration: 0.7 }}
      className="fixed inset-0 z-[100] grid place-items-center bg-[#050505]"
    >
      <div className="text-center">
        <div className="mx-auto mb-5 h-2 w-40 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="h-full w-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
          />
        </div>
        <p className="font-display text-xs uppercase tracking-[0.5em] text-white/60">Arslan Fayyaz</p>
      </div>
    </motion.div>
  );
}