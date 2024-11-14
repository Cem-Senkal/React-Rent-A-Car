import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Carusel from "../components/Carusel";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import UserComments from "../components/UserComments";
import Footer from "../components/Footer";
import "swiper/css/pagination";
import "swiper/css";
import CarCard from "../components/CarCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllData } from "../redux/slices/homeSlice";
import { motion } from "framer-motion"

const Home = () => {
    const dispatch = useDispatch()
    const sliderData = useSelector((state) => state.home.data)
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const states = useSelector((state) => state.home.states)

    useEffect(() => {
        dispatch(fetchAllData())
    }, []);

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Header />
            <motion.section initial={{ opacity: 0 }} animate={{ opacity: 100 }}>
                <Carusel />
                <div className="relative">
                    <h1 className="text-2xl font-medium text-zinc-600 dark:text-zinc-200 mb-5 text-center lg:text-start">Our cars you might like</h1>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={10}
                        slidesPerView={5}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        breakpoints={{
                            240: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1280: {
                                slidesPerView: 4,
                            },
                            1536: {
                                slidesPerView: 5,
                            },
                        }}
                    >
                        {sliderData.map((car) => (
                            <SwiperSlide key={car.id}>
                                <CarCard data={car} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button
                        ref={prevRef}
                        className="absolute hidden xl:block left-0 top-1/2 transform -translate-y-1/2 bg-zinc-500/80 hover:bg-zinc-500 text-zinc-200 dark:bg-zinc-700/50 dark:hover:bg-zinc-700/80 transition-colors p-1 -ml-4 rounded-full z-40"
                    >
                        <ChevronLeft />
                    </button>
                    <button
                        ref={nextRef}
                        className="absolute hidden xl:block right-0 top-1/2 transform -translate-y-1/2 bg-zinc-500/80 hover:bg-zinc-500 text-zinc-200 dark:bg-zinc-700/50 dark:hover:bg-zinc-700/80 transition-colors p-1 -mr-4 rounded-full z-40"
                    >
                        <ChevronRight />
                    </button>
                </div>
                <section className="flex items-center my-10 lg:my-24 relative">
                    <div className="lg:flex w-full items-center bg-zinc-200 dark:bg-zinc-800 p-5 lg:p-10 border border-zinc-300 dark:border-zinc-700 rounded-md">
                        <h1 className="text-2xl lg:text-4xl block lg:hidden font-medium w-full text-center mb-5 text-zinc-600 dark:text-zinc-200">
                            Where Are We?
                        </h1>
                        <div className="grid grid-cols-1 lg:grid-cols-2 w-fit gap-3">
                            {states.map((state, index) => (
                                <div key={index} className="group relative cursor-pointer">
                                    <p className="text-zinc-200 font-medium text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity cursor-pointer">
                                        {state.state}
                                    </p>
                                    <img
                                        key={index}
                                        className="object-cover w-full lg:w-[500px] lg:h-40 rounded-md brightness-50 lg:brightness-100 lg:group-hover:brightness-50 transition-all"
                                        src={state.img}
                                        alt={state.state}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="ml-32 text-zinc-600 dark:text-zinc-200 hidden lg:block">
                            <h1 className="text-4xl font-medium w-full text-center mb-5">
                                Where Are We?
                            </h1>
                            <p>
                                We offer car rentals across key U.S. states, with vehicles suited
                                to your needs. Here are the locations we serve:
                            </p>
                            <ol>
                                <li className="mt-5">
                                    <b>Ohio:</b> A mix of city life and nature. Explore Cleveland,
                                    Columbus, and more in one of our reliable vehicles.
                                </li>
                                <li className="mt-5">
                                    <b>Georgia:</b> From Atlanta's modern vibe to Savannah's charm,
                                    Georgia offers endless adventure. Let us help you get there.
                                </li>
                                <li className="mt-5">
                                    <b>Virginia:</b> Rich in history and nature. Visit Richmond,
                                    Virginia Beach, and more in comfort.
                                </li>
                                <li className="mt-5">
                                    <b>Colorado:</b> From the Rockies to Denver, explore Colorado’s
                                    natural wonders with our perfect ride.
                                </li>
                            </ol>
                        </div>
                    </div>
                </section>
                <section className="flex w-full items-center h-fit py-10 px-2 my-10 lg:my-28 gap-20 bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md">
                    <img
                        className="scale-x-[-1] h-[250px] hidden xl:block object-cover ml-10"
                        src="/data/img/ford-mustang.png"
                        alt=""
                    />
                    <div className="w-full">
                        <h1 className="text-center text-zinc-600 dark:text-zinc-200 text-2xl xl:text-3xl font-medium mb-5">
                            Why Choose Us?
                        </h1>
                        <ol className="text-zinc-600 dark:text-zinc-200">
                            <li className="mt-3">
                                <b>Dependable Vehicles for Every Journey</b> – Travel with
                                confidence knowing our fleet is well-maintained and ready to hit
                                the road.
                            </li>
                            <li className="mt-3">
                                <b>24/7 Customer Support</b> – We're always here for you, no
                                matter the time of day or night.
                            </li>
                            <li className="mt-3">
                                <b>Extensive Vehicle Selection</b> – From compact cars to spacious
                                SUVs, we have the perfect ride for every need.
                            </li>
                            <li className="mt-3">
                                <b>Uncompromised Safety and Comfort</b> – Enjoy peace of mind with
                                vehicles that prioritize your safety and comfort at every mile.
                            </li>
                            <li className="mt-3">
                                <b>Flexible Payment Options</b> – Choose a payment plan that fits
                                your budget and travel plans.
                            </li>
                        </ol>
                    </div>
                </section>
                <UserComments />
                <Footer />
            </motion.section>
        </>
    );
};

export default Home;
