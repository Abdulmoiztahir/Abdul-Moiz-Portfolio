"use client"

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Shine's Budget",
    category: 'Full-Stack Finance Platform',
    image: '/images/shinesbudget.png',
    description:
      'A secure budgeting and portfolio platform with AI-assisted stock analysis, MFA, and multilingual support.',
    tech: ['Next.js', 'NestJS', 'MongoDB', 'Docker'],
    link: '#',
  },
  {
    title: 'QR Cards',
    category: 'Mobile Product',
    image: '/images/qrcards.avif',
    description:
      'A digital business card system using mobile workflows, NFC integration, and instant profile sharing.',
    tech: ['React Native', 'Firebase', 'NFC', 'Bubble'],
    link: '#',
  },
  {
    title: 'Furniro Commerce',
    category: 'E-Commerce Experience',
    image: '/images/ecommerce.png',
    description:
      'Furniture storefront with dynamic catalog sync, real-time cart behavior, and clean conversion-first UI.',
    tech: ['React.js', 'Firebase', 'Tailwind', 'REST APIs'],
    link: '#',
  },
  {
    title: 'Case Intelligence',
    category: 'Case Management SaaS',
    image: '/images/caseintelligence.png',
    description:
      'Professional investigation workspace for case tracking, secure collaboration, and relationship mapping.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'AWS'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-space">
      <div className="container-shell">
        <span className="section-kicker">Projects</span>
        <h2 className="section-title font-[family-name:var(--font-sora)]">Selected work built for real-world users and teams.</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="glass-card liquid-hover group"
            >
              <div className="relative h-56 overflow-hidden border-b border-white/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
                <p className="absolute bottom-4 left-4 rounded-full border border-cyan-200/30 bg-cyan-300/10 px-3 py-1 text-xs font-medium tracking-wide text-cyan-100">
                  {project.category}
                </p>
              </div>

              <div className="p-6">
                <h3 className="font-[family-name:var(--font-sora)] text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <Link
                  href={project.link}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
                >
                  View Project
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
