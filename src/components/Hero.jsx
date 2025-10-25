import { useMemo } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const navItems = useMemo(
    () => [
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Projects' },
    ],
    []
  );

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[#0b0e1a] text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays - non-blocking */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0e1a]/20 via-[#0b0e1a]/60 to-[#0b0e1a]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b0e1a] via-transparent" />

      {/* Top Navigation */}
      <div className="relative z-10">
        <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <a href="#home" className="group inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.9)]" />
            <span className="text-sm tracking-widest text-cyan-200 group-hover:text-white transition-colors">CSE PORTFOLIO</span>
          </a>
          <nav className="hidden gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm text-gray-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-4 py-2 text-sm font-medium text-[#0b0e1a] shadow-[0_10px_30px_-10px_rgba(168,85,247,0.6)] transition hover:opacity-90"
            >
              Contact
            </a>
          </nav>
        </header>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-6xl flex-col items-start justify-center px-6">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-200 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          Welcome to my space
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
        >
          Hi, I’m <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">Your Name</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-3 text-lg text-gray-200 md:text-xl"
        >
          CSE Student | Developer | Problem Solver
        </motion.p>

        {/* Typing-like tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-4 max-w-2xl text-gray-300"
        >
          <span className="relative inline-block pr-3">
            Building efficient systems, sleek interfaces, and solving real-world problems one commit at a time.
            <span className="ml-1 animate-pulse">▍</span>
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-3 font-medium text-[#0b0e1a] shadow-[0_10px_30px_-10px_rgba(168,85,247,0.6)] transition hover:opacity-90"
          >
            View Projects
          </a>
          <a
            href="#about"
            className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
}
