export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-black text-light-gray">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl font-bold text-white mb-6 ">Contact Me</h2>
                <form className="bg-gray-800 p-6 rounded-lg shadow-lg" action="https://formsubmit.co/mustafaaaly27@gmail.com" method="POST">
                    <div className="mb-4">
                        <label htmlFor="name" className="text-gray-400">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name" // Add name attribute
                            placeholder="Enter Your Name"
                            className="w-full bg-gray-900 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="text-gray-400">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email" // Add name attribute
                            placeholder="Enter Your Email Address"
                            className="w-full bg-gray-900 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="text-gray-400">Message</label>
                        <textarea
                            id="message"
                            name="message" // Add name attribute
                            placeholder="Write Your Message Here"
                            className="w-full bg-gray-900 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
