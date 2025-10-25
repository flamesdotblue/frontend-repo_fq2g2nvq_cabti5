import { motion } from 'framer-motion';
import { Code2, BrainCircuit, Boxes, Cpu, Database, Globe } from 'lucide-react';

const skills = [
  { name: 'C++', level: 85, icon: Cpu },
  { name: 'Python', level: 90, icon: BrainCircuit },
  { name: 'Web Dev (React)', level: 88, icon: Globe },
  { name: 'Machine Learning', level: 70, icon: BrainCircuit },
  { name: 'DSA', level: 80, icon: Code2 },
  { name: 'Databases', level: 75, icon: Database },
  { name: 'Systems Design', level: 65, icon: Boxes },
];

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.06),transparent_60%)]" />
      <div className="relative">
        <h2 className="text-3xl font-semibold">Skills</h2>
        <p className="mt-2 max-w-2xl text-gray-300">A snapshot of my technical toolbelt. Hover to see the glow and watch the bars fill.</p>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {skills.map((s, idx) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <s.icon className="h-5 w-5 text-cyan-300" />
                  <span className="font-medium">{s.name}</span>
                </div>
                <span className="text-sm text-gray-300">{s.level}%</span>
              </div>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
