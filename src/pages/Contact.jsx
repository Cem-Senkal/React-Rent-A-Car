import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <Header />
            <motion.section initial={{ opacity: 0 }} animate={{ opacity: 100 }}>
                <div className="relative mt-3 border border-zinc-300 dark:border-zinc-700 rounded-md">
                    <img
                        className="w-full rounded-md h-80 object-cover brightness-50"
                        src="/img/contactImg.jpg"
                        alt="about us image"
                    />
                    <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl text-nowrap font-semibold lg:text-9xl text-zinc-200">
                        Contact
                    </h1>
                </div>

                <div className="flex justify-center w-full mx-auto p-6 bg-zinc-200 dark:bg-zinc-800 rounded-md mt-3 lg:mt-10 border border-zinc-300 dark:border-zinc-700">
                    <form className="lg:w-1/2">
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-zinc-600 dark:text-zinc-200 mb-2"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                autoComplete="off"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none text-zinc-600 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 transition-colors duration-200"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-zinc-600 dark:text-zinc-200 mb-2"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                autoComplete="off"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none text-zinc-600 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 transition-colors duration-200"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="phone"
                                className="block text-sm font-medium text-zinc-600 dark:text-zinc-200 mb-2"
                            >
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Your Phone"
                                autoComplete="off"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none text-zinc-600 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 transition-colors duration-200"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-zinc-600 dark:text-zinc-200 mb-2"
                            >
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                placeholder="How can we assist you?"
                                autoComplete="off"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none text-zinc-600 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 transition-colors duration-200"
                            />
                        </div>

                        <button
                            type="submit"
                            onClick={(e) => e.preventDefault()}
                            className="w-full py-2 px-4 bg-zinc-500/80 hover:bg-zinc-500 text-zinc-200 dark:bg-zinc-700/50 dark:hover:bg-zinc-700/80 transition-colors rounded-md"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </motion.section>
            <Footer />
        </>
    );
};

export default contact;
