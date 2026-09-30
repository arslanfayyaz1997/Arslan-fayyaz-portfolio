import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, ExternalLink, Github, Mail, Sparkles } from "lucide-react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Scene3D from "./components/Scene3D";
import SectionHeading from "./components/SectionHeading";
import ProjectCard from "./components/ProjectCard";
import Contact from "./components/Contact";
import { projects } from "./data/projects";
import { skills } from "./data/skills";
import { journey } from "./data/experience";

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <LoadingScreen done={loaded} />
      <Navbar />

      <main>
        <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 md:px-10">
          <div className="absolute inset-0 grid-background opacity-40" />
          <Scene3D />
          <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.2fr_.8fr]">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.15, duration: .8 }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.25em] text-white/55">
                <Sparkles size={14} className="text-cyan-300" /> Creative Developer
              </div>
              <h1 className="max-w-5xl font-display text-6xl font-bold leading-[.9] tracking-[-.06em] sm:text-7xl md:text-8xl lg:text-[7.5rem]">
                ARSLAN
                <span className="block text-white/30">FAYYAZ<span className="text-cyan-300">.</span></span>
              </h1>
              <p className="mt-7 max-w-xl text-sm leading-7 text-white/55 md:text-base">
                I build modern websites and digital experiences where clean interfaces,
                motion and technology come together.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-105">
                  Explore my work <ArrowUpRight size={17} />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white/75 transition hover:bg-white/10">
                  Contact me <Mail size={17} />
                </a>
              </div>
              <div className="mt-9 flex flex-wrap gap-5 text-xs text-white/35">
                <span>React</span><span>JavaScript</span><span>3D Web</span><span>Motion</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.35, duration: 1 }} className="relative mx-auto hidden w-full max-w-sm lg:block">
              <div className="absolute -inset-8 rounded-full bg-violet-500/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 p-3 backdrop-blur-xl">
                <img src="/Arslan.jpg" alt="Arslan Fayyaz profile placeholder" className="aspect-[4/5] w-full rounded-[1.5rem] object-cover" />
                <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/10 bg-black/55 p-4 backdrop-blur-xl">
                  <p className="font-display text-lg font-semibold">Building in public.</p>
                  <p className="mt-1 text-xs text-white/45">Code • Design • Experiments</p>
                </div>
              </div>
            </motion.div>
          </div>
          <a href="#about" className="absolute bottom-7 left-1/2 -translate-x-1/2 text-white/30 transition hover:text-white"><ArrowDown size={20} /></a>
        </section>

        <section id="about" className="section">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <SectionHeading eyebrow="01 / About" title="More than a portfolio." text="A personal space for the work, experiments and ideas behind the interfaces I build." />
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["01", "Builder", "I turn ideas into usable digital products and interfaces."],
                ["02", "Explorer", "I continuously experiment with new tools, interaction patterns and technologies."],
                ["03", "Problem Solver", "I care about structure, usability, responsive behavior and the details people notice."],
                ["04", "Creative", "I like web experiences that feel memorable without sacrificing clarity."]
              ].map(([n, t, d]) => (
                <motion.div whileHover={{ y: -5 }} key={n} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                  <span className="text-xs text-cyan-300">{n}</span>
                  <h3 className="mt-10 font-display text-xl font-semibold">{t}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/45">{d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section border-y border-white/5">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="02 / Toolkit" title="Skills that turn ideas into interfaces." text="A growing toolkit spanning frontend development, interaction, deployment and creative web technology." />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill, i) => (
                <motion.div key={skill.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .035 }}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-4 transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.04]">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 group-hover:text-cyan-300">{skill.level}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="section">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="03 / Selected work" title="Things I've built." text="A curated selection of platforms, interfaces and experiments. More work can be added from the project data file as the portfolio grows." />
            <div className="grid gap-5 lg:grid-cols-2">
              {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
            </div>
            <div className="mt-8 flex justify-center">
              <a href="https://github.com/Arxfamism" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-xs text-white/60 transition hover:bg-white hover:text-black">
                <Github size={15} /> Explore GitHub <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </section>

        <section id="journey" className="section border-y border-white/5">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="04 / Journey" title="Always building. Always learning." text="The journey is less about a finish line and more about what gets built along the way." />
            <div className="relative ml-3 border-l border-white/10 pl-8 md:ml-10 md:pl-12">
              {journey.map((item, i) => (
                <motion.div key={item.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }} className="relative mb-12 last:mb-0">
                  <span className="absolute -left-[2.72rem] top-1 h-3 w-3 rounded-full border-2 border-cyan-300 bg-[#050505] md:-left-[3.1rem]" />
                  <span className="text-xs tracking-[.25em] text-cyan-300">{item.year}</span>
                  <h3 className="mt-2 font-display text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/45">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="05 / What I do" title="From idea to experience." />
            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["01", "Web Development", "Responsive websites and interfaces built around real content, usability and maintainable components."],
                ["02", "Interactive UI", "Motion, hover states, transitions and micro-interactions that make interfaces feel alive."],
                ["03", "Creative Web", "3D visuals and experimental experiences for projects that need something beyond a standard layout."]
              ].map(([n, t, d]) => (
                <motion.div whileHover={{ y: -7 }} key={n} className="rounded-3xl border border-white/10 p-7">
                  <span className="text-xs text-white/25">{n}</span>
                  <h3 className="mt-16 font-display text-2xl font-semibold">{t}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/45">{d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-10">
          <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-3">
            {[["Projects", "03+"], ["Technologies", "10+"], ["Curiosity", "∞"]].map(([label, value]) => (
              <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 text-center">
                <div className="font-display text-4xl font-bold">{value}</div>
                <p className="mt-2 text-xs uppercase tracking-[.25em] text-white/30">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section pb-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="06 / Contact" title="Let's build something worth opening." text="For collaborations, projects, ideas or just a conversation, send a message." />
            <Contact />
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-10 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Arslan Fayyaz. Built with curiosity.</p>
          <div className="flex items-center gap-5">
            <a href="mailto:arslanfayyaz1997@gmail.com" className="hover:text-white">Email</a>
            <a href="https://github.com/Arxfamism" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
            <a href="#home" className="hover:text-white">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
