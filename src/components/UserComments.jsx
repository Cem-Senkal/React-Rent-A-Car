import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";

const UserComments = () => {
    const userData = [
        {
            name: "Emily Johnson",
            img: "/img/user-pp-picture/img1.jpg",
            comment: "Great experience! Fast booking, friendly staff, and a clean, well-maintained car. Highly recommend!",
            rating: 5
        },
        {
            name: "Michael Smith",
            img: "/img/user-pp-picture/img2.jpg",
            comment: "Good service and car, but had to wait a bit longer at the counter. Overall, satisfied with the rental.",
            rating: 4
        },
        {
            name: "Sarah Williams",
            img: "/img/user-pp-picture/img3.jpg",
            comment: "Car was fine, but the cleanliness wasn’t up to standard. Staff took some time to address the issue.",
            rating: 3
        },
        {
            name: "Daniel Brown",
            img: "/img/user-pp-picture/img4.jpg",
            comment: "Excellent service! Fast booking, great car quality, and friendly staff. Will definitely use again.",
            rating: 5
        },
        {
            name: "Olivia Davis",
            img: "/img/user-pp-picture/img5.jpg",
            comment: "Easy rental and good car. Had a slight wait at pickup, but overall a smooth experience.",
            rating: 4
        }
    ]
    return (
        <section>
            <h1 className="text-center text-zinc-600 dark:text-zinc-200 text-2xl xl:text-3xl font-medium mb-5">User comments</h1>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                breakpoints={{
                    240: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    }
                }}
                className="mb-10 lg:mb-28"
            >
                {
                    userData.map((user, index) => (
                        <SwiperSlide key={index} className="bg-zinc-200 dark:bg-zinc-800 p-3 rounded-md text-zinc-600 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-3">
                                    <img
                                        className="w-10 h-10 object-cover object-center rounded-full"
                                        src={user.img}
                                        alt="user profile picture"
                                    />
                                    <p className="font-medium">{user.name}</p>
                                </div>
                                <div className="flex gap-1 items-center">
                                    {
                                        new Array(user.rating).fill().map((_, index) => (
                                            <svg key={index} className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height="800px" width="800px" version="1.1" id="Capa_1" viewBox="0 0 47.94 47.94" xmlSpace="preserve">
                                                <path style={{ fill: "#ED8A19" }} d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757  c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042  c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685  c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528  c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956  C22.602,0.567,25.338,0.567,26.285,2.486z" />
                                            </svg>
                                        ))
                                    }
                                </div>
                            </div>
                            <p className="mt-2">
                                {user.comment}
                            </p>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    )
}

export default UserComments