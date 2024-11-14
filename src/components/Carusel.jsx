import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CaruselForm from "./CaruselForm";

const Carusel = () => {
    return (
        <>
            <section className="relative">
                <Swiper
                    spaceBetween={30}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="rounded-md border border-zinc-300 dark:border-zinc-700 my-5"
                >
                    <SwiperSlide>
                        <img
                            className="w-full h-[500px] object-cover object-center"
                            src="/img/carusel-img/img1.jpg"
                            alt="carusel image"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="w-full h-[500px] object-cover object-center"
                            src="/img/carusel-img/img2.jpg"
                            alt="carusel image"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="w-full h-[500px] object-cover object-center"
                            src="/img/carusel-img/img3.jpg"
                            alt="carusel image"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="w-full h-[500px] object-cover object-center"
                            src="/img/carusel-img/img4.jpg"
                            alt="carusel image"
                        />
                    </SwiperSlide>
                </Swiper>
                <CaruselForm/>
            </section>
        </>
    );
};

export default Carusel;
