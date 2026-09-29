import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-5"
    >
      <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-2xl bg-gradient-to-br from-violet-950 via-slate-950 to-cyan-950">
        <div className="absolute inset-0 opacity-70 transition duration-500 group-hover:scale-110 group-hover:opacity-100"
          style={{background: "radial-gradient(circle at 30% 30%, rgba(34,211,238,.28), transparent 32%), radial-gradient(circle at 75% 70%, rgba(139,92,246,.3), transparent 34%)"}} />
        <div className="absolute bottom-5 left-5 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/60 backdrop-blur">
          {project.category}
        </div>
        <ArrowUpRight className="absolute right-5 top-5 text-white/40 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
      </div>

      <p className="mb-2 text-xs uppercase tracking-[0.2em] text-cyan-300">0{index + 1}</p>
      <h3 className="font-display text-2xl font-bold">{project.title}</h3>
      <p className="mt-3 min-h-14 text-sm leading-6 text-white/50">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-white/55">{tag}</span>
        ))}
      </div>

      <div className="mt-7 flex gap-3">
        <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs transition hover:bg-white hover:text-black">
          <Github size={14} /> GitHub
        </a>
        <a href={project.live} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:scale-105">
          Live view <ArrowUpRight size={14} />
        </a>
      </div>
    </motion.article>
  );
}