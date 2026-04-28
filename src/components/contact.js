export default function Contact() {
    return (
        <section id="contact" className="section-space">
            <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <article className="glass-card p-6 md:p-8">
                    <span className="section-kicker">Contact</span>
                    <h2 className="font-[family-name:var(--font-sora)] text-3xl font-semibold text-white md:text-4xl">
                        Ready to build your next product?
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
                        I am available for freelance projects, internships, and full-time opportunities. Share a quick brief and I will get back with a practical plan.
                    </p>

                    <div className="mt-8 space-y-3 text-sm text-slate-300">
                        <p>Email: moiztahirtahir009@gmail.com</p>
                        <p>Role: MERN Stack Developer</p>
                        <p>Location: Pakistan</p>
                    </div>
                </article>

                <form
                    className="glass-card space-y-4 p-6 md:p-8"
                    action="https://formsubmit.co/moiztahirtahir009@gmail.com"
                    method="POST"
                >
                    <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder="Your name"
                            className="liquid-field"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="you@example.com"
                            className="liquid-field"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
                            Project Brief
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            placeholder="Tell me about your goals, timeline, and scope."
                            className="liquid-field"
                        ></textarea>
                    </div>

                    <button type="submit" className="premium-btn w-full sm:w-auto">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
