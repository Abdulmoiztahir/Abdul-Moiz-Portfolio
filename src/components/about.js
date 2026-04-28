"use client"

import { motion } from 'framer-motion';

const highlights = [
  {
    title: 'Product-Minded Development',
    description:
      'I prioritize speed, clarity, and maintainability so teams can ship faster without losing code quality.',
  },
  {
    title: 'MERN Specialization',
    description:
      'From API architecture to polished frontend interfaces, I build complete applications with consistent performance.',
  },
  {
    title: 'Professional Communication',
    description:
      'Clear documentation, transparent updates, and practical decision-making are part of how I work.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-space">
      <div className="container-shell">
        <span className="section-kicker">About</span>
        <h2 className="section-title font-[family-name:var(--font-sora)]">Clean systems, reliable execution, premium outcomes.</h2>
        <p className="section-copy">
          I am Abdul Moiz Tahir, a developer focused on building practical products that are visually sharp and technically scalable. My workflow combines modern frontend craft with dependable backend architecture.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {highlights.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="glass-card liquid-hover p-6"
            >
              <h3 className="font-[family-name:var(--font-sora)] text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.description}</p>
            </motion.article>
          ))}
        </div>

        <div className="glass-card mt-6 grid gap-6 p-6 md:grid-cols-2 md:p-8">
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-cyan-100/90">Education</p>
            <p className="mt-3 text-base font-medium text-slate-100">Intermediate in Commerce</p>
            <p className="text-sm text-slate-400">Islamia College | 2022 - 2024</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-cyan-100/90">Certifications</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>JavaScript Essentials - Cisco (2024)</li>
              <li>Web & Mobile App Development - Saylani Mass IT Training Center (2023 - 2024)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
