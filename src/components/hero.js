"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
    const fadeUp = {
        hidden: { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="section-space pt-20 md:pt-24" id="hero">
            <div className="container-shell grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    transition={{ staggerChildren: 0.14 }}
                    className="space-y-6"
                >
                    <motion.span variants={fadeUp} className="section-kicker">
                        MERN STACK DEVELOPER
                    </motion.span>
                    <motion.h1
                        variants={fadeUp}
                        className="font-[family-name:var(--font-sora)] text-4xl font-semibold leading-[1.1] text-white sm:text-5xl md:text-6xl"
                    >
                        Building clean, scalable products that feel premium from the first click.
                    </motion.h1>
                    <motion.p variants={fadeUp} className="max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
                        I am Abdul Moiz Tahir, a MERN stack developer focused on crafting fast interfaces and robust backend systems for modern digital products.
                    </motion.p>

                    <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-2">
                        <Link href="#projects" className="premium-btn">
                            View Selected Work
                        </Link>
                        <a 
                            href="https://wa.me/923233450785?text=Hi%20Abdul%20Moiz%2C%20I%20would%20like%20to%20discuss%20a%20project."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="premium-btn-muted"
                        >
                            Book a Quick Call
                        </a>
                    </motion.div>

                    <motion.div variants={fadeUp} className="flex flex-wrap gap-6 pt-4">
                        <div>
                              <p className="font-[family-name:var(--font-sora)] text-2xl font-semibold text-cyan-200">20+</p>
                            <p className="text-sm text-slate-400">Projects Delivered</p>
            </div>
                        <div>
                              <p className="font-[family-name:var(--font-sora)] text-2xl font-semibold text-cyan-200">2+</p>
                            <p className="text-sm text-slate-400">Years Hands-On Learning</p>
            </div>
                        <div>
                              <p className="font-[family-name:var(--font-sora)] text-2xl font-semibold text-cyan-200">MERN</p>
                            <p className="text-sm text-slate-400">End-to-End Expertise</p>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 26 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="glass-card liquid-hover mx-auto w-full max-w-sm p-4"
                >
                    <div className="absolute -left-14 top-0 h-36 w-36 rounded-full bg-cyan-400/15 blur-3xl" />
                    <div className="absolute -right-14 bottom-0 h-36 w-36 rounded-full bg-blue-400/20 blur-3xl" />

                    <div className="relative overflow-hidden rounded-2xl border border-white/10">
                        <Image
                            src="/images/profile.jpg"
                            alt="Abdul Moiz Tahir"
                            width={520}
                            height={620}
                            priority
                            className="h-auto w-full object-cover"
                        />
                    </div>

                    <div className="relative mt-4 rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                        <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Current Focus</p>
                        <p className="mt-2 text-sm text-slate-200">Next.js 15, APIs, performant UI systems, and production-grade MongoDB workflows.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
