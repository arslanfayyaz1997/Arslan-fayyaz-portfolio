import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Work", "work"],
  ["Journey", "journey"],
  ["Contact", "contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/45 px-4 py-3 backdrop-blur-xl md:px-6">
        <a href="#home" className="font-display text-sm font-bold tracking-[0.2em]">
          AF<span className="text-cyan-400">.</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="text-xs text-white/60 transition hover:text-white">
              {label}
            </a>
          ))}
          <a href="#contact" className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:scale-105">
            Let&apos;s talk
          </a>
        </div>

        <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="rounded-lg p-2 md:hidden">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-black/90 p-4 backdrop-blur-xl md:hidden"
          >
            {links.map(([label, id]) => (
              <a key={id} onClick={() => setOpen(false)} href={`#${id}`} className="block rounded-xl px-4 py-3 text-sm text-white/70 hover:bg-white/5 hover:text-white">
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}