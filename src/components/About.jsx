import { motion } from 'framer-motion';

const timeline = [
  {
    title: 'Software Engineering Intern',
    org: 'Tech Company',
    period: 'Summer 2024',
    details: 'Worked on full‑stack features, optimized performance, and wrote tests.',
  },
  {
    title: 'B.Tech CSE',
    org: 'Your University',
    period: '2022 — Present',
    details: 'Data Structures, Algorithms, Operating Systems, DBMS, ML fundamentals.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.08),transparent_60%)]" />

      <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative h-56 w-56 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-600/30 via-fuchsia-500/20 to-cyan-400/30 p-1 shadow-xl">
            <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[#0b0e1a] text-5xl font-bold text-cyan-300">YN</div>
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h2 className="text-3xl font-semibold">About Me</h2>
          <p className="mt-4 text-gray-300">
            I’m a Computer Science & Engineering student passionate about systems, web, and ML. I love
            translating ideas into clean, performant code and crafting polished user experiences.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 text-sm text-gray-300 sm:grid-cols-2">
            <li className="rounded-xl border border-white/10 bg-white/5 p-3">• Strong DSA & problem solving</li>
            <li className="rounded-xl border border-white/10 bg-white/5 p-3">• Backend fundamentals (APIs, DBs)</li>
            <li className="rounded-xl border border-white/10 bg-white/5 p-3">• Frontend engineering & UX</li>
            <li className="rounded-xl border border-white/10 bg-white/5 p-3">• Interested in ML & systems</li>
          </ul>
        </motion.div>
      </div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative mt-14"
      >
        <h3 className="mb-6 text-2xl font-semibold">Experience & Education</h3>
        <div className="relative pl-6">
          <div className="absolute left-2 top-0 h-full w-px bg-gradient-to-b from-cyan-400/60 via-white/20 to-fuchsia-400/60" />
          <div className="space-y-8">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 shadow-[0_0_18px_rgba(168,85,247,0.8)]" />
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium text-white">{item.title}</p>
                    <span className="text-xs text-gray-400">{item.period}</span>
                  </div>
                  <p className="text-sm text-cyan-200">{item.org}</p>
                  <p className="mt-2 text-sm text-gray-300">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
