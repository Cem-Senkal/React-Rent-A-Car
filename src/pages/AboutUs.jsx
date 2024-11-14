import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion"

const AboutUs = () => {
    return (
        <>
            <Helmet>
                <title>About us</title>
            </Helmet>
            <Header />
            <motion.section initial={{ opacity: 0 }} animate={{ opacity: 100 }} className="text-zinc-600 dark:text-zinc-200 " >
                <div className="relative mt-3 border border-zinc-300 dark:border-zinc-700 rounded-md">
                    <img
                        className="w-full rounded-md h-80 object-cover brightness-50"
                        src="/img/aboutImg.jpg"
                        alt="about us image"
                    />
                    <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl text-nowrap font-semibold lg:text-9xl text-zinc-200">
                        Who are we?
                    </h1>
                </div>
                <div className="flex justify-center lg:mt-5">
                    <div className="lg:w-3/4 w-full">
                        <div className="flex justify-center">
                            <img className="scale-x-[-1] w-52 my-3" src="/img/icon.png" alt="" />
                        </div>
                        <div>
                            <p>At Rent a Car, we have been providing safe, reliable, and affordable car rental services for over 20 years. With a wide range of vehicles and professional customer service, we strive to make every journey comfortable, hassle-free, and enjoyable for our clients.</p>

                            <h3 className="text-2xl font-semibold mt-6">Our Mission</h3>
                            <p>Our mission is to offer high-quality, safe, and cost-effective car rental services. We aim to be a leader in the industry and always prioritize customer satisfaction.</p>

                            <h3 className="text-2xl font-semibold mt-6">Our Vision</h3>
                            <p>Our vision is to strengthen our position in the car rental industry by providing innovative solutions that meet customer needs and by making car rental services more accessible to everyone.</p>

                            <h3 className="text-2xl font-semibold mt-6">Safety and Insurance</h3>
                            <p>All of our vehicles are fully insured and undergo regular maintenance checks. During your rental, we take all necessary safety precautions and offer 24/7 support in case of emergencies.</p>

                            <h3 className="text-2xl font-semibold mt-6">Our Fleet</h3>
                            <p>We offer a wide range of vehicles, from economy models to luxury cars. Whether you need a compact car for city driving or a spacious vehicle for family trips, we have something for every need.</p>

                            <h3 className="text-2xl font-semibold mt-6">Contact Us</h3>
                            <p>Getting in touch with us is easy! You can reach us at 12345678900 or email us at example@example.com. Our friendly customer service team is always here to assist you.</p>
                        </div>

                    </div>
                </div>
            </motion.section>
            <Footer />
        </>
    );
};

export default AboutUs;
