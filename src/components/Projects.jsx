import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { useCallback } from 'react';

const projects = [
  {
    name: 'Smart Vision',
    desc: 'Computer vision app for real-time object detection using YOLOv8.',
    img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    github: 'https://github.com/',
    demo: 'https://example.com',
  },
  {
    name: 'AlgoPlayground',
    desc: 'Interactive visualizer for classic algorithms and data structures.',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    github: 'https://github.com/',
    demo: 'https://example.com',
  },
  {
    name: 'DevNotes',
    desc: 'Markdown-based notes app with sync and full-text search.',
    img: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200&auto=format&fit=crop',
    github: 'https://github.com/',
    demo: 'https://example.com',
  },
];

export default function Projects() {
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
    window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
  }, []);

  return (
    <section id="projects" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.08),transparent_60%)]" />
      <div className="relative">
        <h2 className="text-3xl font-semibold">Projects</h2>
        <p className="mt-2 max-w-2xl text-gray-300">A selection of things I’ve built. Hover a card to explore.</p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0e1a] via-transparent" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-gray-300">{p.desc}</p>
                <div className="mt-3 flex items-center gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm transition hover:bg-white/10"
                  >
                    <Github className="h-4 w-4" /> Code
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-3 py-1.5 text-sm font-medium text-[#0b0e1a] transition hover:opacity-90"
                  >
                    <ExternalLink className="h-4 w-4" /> Live
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Contact Section */}
        <div id="contact" className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold">Let’s Connect</h3>
            <p className="mt-2 max-w-md text-gray-300">
              Like what you see? Reach out for collaborations, internships, or just to say hi.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition hover:bg-white/10"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition hover:bg-white/10"
              >
                LinkedIn
              </a>
              <a
                href="mailto:your.email@example.com"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition hover:bg-white/10"
              >
                Email
              </a>
            </div>
          </div>
          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-gray-300">Name</label>
                <input
                  name="name"
                  required
                  className="mt-1 w-full rounded-lg border border-white/10 bg-[#0b0e1a] px-3 py-2 text-white outline-none ring-cyan-400/0 transition focus:ring-2"
                />
              </div>
              <div>
                <label className="text-sm text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 w-full rounded-lg border border-white/10 bg-[#0b0e1a] px-3 py-2 text-white outline-none ring-cyan-400/0 transition focus:ring-2"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-gray-300">Message</label>
              <textarea
                name="message"
                rows={4}
                required
                className="mt-1 w-full rounded-lg border border-white/10 bg-[#0b0e1a] px-3 py-2 text-white outline-none ring-cyan-400/0 transition focus:ring-2"
              />
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-4 py-2 font-medium text-[#0b0e1a] shadow-[0_10px_30px_-10px_rgba(168,85,247,0.6)] transition hover:opacity-90"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
