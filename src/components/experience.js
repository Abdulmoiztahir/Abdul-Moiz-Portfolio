"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Code Alpha',
    role: 'Frontend Intern',
    period: 'Oct 2024 - Completed',
    logo: '/images/codeaplha.png',
    points: [
      'Built responsive user interfaces using React and Next.js with reusable component patterns.',
      'Supported backend integration tasks using Firebase and MongoDB across project features.',
    ],
  },
  {
    company: 'Cluster Valley',
    role: 'Web Developer Intern',
    period: 'Apr 2025 - Completed',
    logo: '/images/clustervalley.png',
    points: [
      'Implemented interactive frontend modules with performance-focused styling and responsive behavior.',
      'Collaborated on full-stack workflows involving API integrations and production-ready deployment tasks.',
    ],
  },
  {
    company: 'Cluster Valley',
    role: 'Junior Web Developer',
    period: 'Jun 2025 - Dec 2025',
    logo: '/images/clustervalley.png',
    points: [
      'Delivered maintainable features in a fast-paced product environment with clear handoff documentation.',
      'Improved UI consistency and data flow across modules built with Next.js, MongoDB, and Node.js.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-space">
      <div className="container-shell">
        <span className="section-kicker">Experience</span>
        <h2 className="section-title font-[family-name:var(--font-sora)]">Hands-on contributions across internships and product teams.</h2>

        <div className="relative mt-12 space-y-6 before:absolute before:bottom-2 before:left-[1.1rem] before:top-2 before:hidden before:w-px before:bg-white/15 md:before:block">
          {experiences.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="glass-card liquid-hover relative grid gap-4 p-6 md:grid-cols-[auto_1fr] md:gap-6 md:p-7"
            >
              <div className="relative z-10 h-11 w-11 overflow-hidden rounded-full border border-white/20 bg-white/5 md:mt-1">
                <Image src={item.logo} alt={item.company} fill className="object-cover" />
              </div>

              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-[family-name:var(--font-sora)] text-xl font-semibold text-white">{item.role}</h3>
                  <p className="text-sm text-cyan-200">{item.period}</p>
                </div>
                <p className="mt-1 text-sm font-medium text-slate-300">{item.company}</p>

                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-300">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
