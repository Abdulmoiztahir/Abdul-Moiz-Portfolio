"use client"
import { useState, useEffect } from "react";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(false);
    const [emailjs, setEmailjs] = useState(null);
    const [emailEnabled, setEmailEnabled] = useState(true);
    const [waUrl, setWaUrl] = useState("");
    const [showWhatsAppFallback, setShowWhatsAppFallback] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    // Initialize EmailJS on client side only
    useEffect(() => {
        const initEmailJS = async () => {
            try {
                const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
                if (!publicKey) {
                    console.warn("EmailJS public key missing — falling back to WhatsApp");
                    setEmailEnabled(false);
                    return;
                }

                const emailjsLib = await import("@emailjs/browser");
                emailjsLib.default.init(publicKey);
                setEmailjs(emailjsLib.default);
                setEmailEnabled(true);
            } catch (error) {
                console.error("EmailJS init error:", error);
                setEmailEnabled(false);
            }
        };
        initEmailJS();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // If EmailJS is disabled/missing public key, immediately fallback to WhatsApp
        if (!emailEnabled) {
            const waMsg = `${formData.message || ""}`;
            const builtWaUrl = `https://wa.me/923233450785?text=${encodeURIComponent(waMsg)}`;
            setWaUrl(builtWaUrl);
            setShowWhatsAppFallback(true);
            try {
                const opened = window.open(builtWaUrl, "_blank");
                if (!opened) window.location.href = builtWaUrl;
            } catch (err) {
                window.location.href = builtWaUrl;
            }
            return;
        }

        if (!emailjs) {
            console.error("EmailJS is not ready despite public key. Falling back to WhatsApp.");
            setSubmitError(true);
            const waMsg = `${formData.message || ""}`;
            const builtWaUrl = `https://wa.me/923233450785?text=${encodeURIComponent(waMsg)}`;
            setWaUrl(builtWaUrl);
            setShowWhatsAppFallback(true);
            try { const opened = window.open(builtWaUrl, "_blank"); if (!opened) window.location.href = builtWaUrl; } catch (err) { window.location.href = builtWaUrl; }
            return;
        }
        setIsSubmitting(true);
        setSubmitError(false);

        try {
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

            if (!serviceId || !templateId) {
                throw new Error("Missing EmailJS service or template id");
            }

            // Send email to admin
            await emailjs.send(serviceId, templateId, {
                to_email: "moiztahirtahir009@gmail.com",
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                subject: `New Project Brief from ${formData.name}`
            });

            setSubmitSuccess(true);
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setSubmitSuccess(false), 5000);
        } catch (error) {
            console.error("Email send error:", error);
            setSubmitError(true);
            // fallback to WhatsApp on send failure
            try {
                const waMsg = `${formData.message || ""}`;
                const builtWaUrl = `https://wa.me/923233450785?text=${encodeURIComponent(waMsg)}`;
                setWaUrl(builtWaUrl);
                setShowWhatsAppFallback(true);
                const opened = window.open(builtWaUrl, "_blank");
                if (!opened) window.location.href = builtWaUrl;
            } catch (waErr) {
                console.error("WhatsApp fallback failed:", waErr);
            }
            setTimeout(() => setSubmitError(false), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

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
                    onSubmit={handleSubmit}
                >
                    {submitSuccess && (
                        <div className="rounded-lg border border-cyan-400/30 bg-cyan-400/10 p-4 text-sm text-cyan-200">
                            ✓ Thanks for reaching out! I&apos;ve received your message and will get back to you within 24 hours.
                        </div>
                    )}

                    {submitError && (
                        <div className="rounded-lg border border-red-400/30 bg-red-400/10 p-4 text-sm text-red-200">
                            <div>✗ Failed to send message. Please try again.</div>
                            {showWhatsAppFallback && waUrl && (
                                <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:gap-3">
                                    <a
                                        href={waUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-md bg-green-500/10 px-3 py-2 text-sm text-green-300 hover:bg-green-500/20"
                                    >
                                        Contact via WhatsApp
                                    </a>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            try { window.open(waUrl, "_blank"); } catch (e) { window.location.href = waUrl; }
                                        }}
                                        className="inline-flex items-center gap-2 rounded-md bg-green-500 px-3 py-2 text-sm text-black"
                                    >
                                        Open WhatsApp
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
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
                            value={formData.email}
                            onChange={handleChange}
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
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            placeholder="Tell me about your goals, timeline, and scope."
                            className="liquid-field"
                        ></textarea>
                    </div>

                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="premium-btn w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </section>
    );
}
