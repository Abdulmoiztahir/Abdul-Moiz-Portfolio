export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-background text-foreground">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl font-bold text-foreground mb-6 ">Contact Me</h2>
                <form className="bg-card p-6 rounded-lg shadow-lg border border-border" action="https://formsubmit.co/moiztahirtahir009@gmail.com" method="POST">
                    <div className="mb-4">
                        <label htmlFor="name" className="text-muted-foreground">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name" // Add name attribute
                            placeholder="Enter Your Name"
                            className="w-full bg-muted text-foreground p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="text-muted-foreground">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email" // Add name attribute
                            placeholder="Enter Your Email Address"
                            className="w-full bg-muted text-foreground p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="text-muted-foreground">Message</label>
                        <textarea
                            id="message"
                            name="message" // Add name attribute
                            placeholder="Write Your Message Here"
                            className="w-full bg-muted text-foreground p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-primary text-primary-foreground p-3 rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
