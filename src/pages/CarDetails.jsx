import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarData } from "../redux/slices/detailsSlice";
import CarCard from "../components/CarCard"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react";

const CarDetails = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const id = useParams().id;
    const data = useSelector((state) => state.details.data).slice(0, 10);
    const carData = useSelector((state) => state.details.carData)
    const tableContent = {
        brandAndModel: `${carData.make} ${carData.model}`,
        modelYear: carData.year,
        color: carData.color,
        category: carData.category,
        features: carData.features,
        fuelType: carData.fuel_type,
        transmission: carData.transmission,
        seats: carData.seats,
        luggageCapacity: carData.luggage_capacity,
        mileage: carData.mileage,
        location: carData.location,
        rating: carData.rating,
        price: carData.daily_price,
    }

    useEffect(() => {
        dispatch(fetchCarData(id))
        window.scrollTo(0, 0)
    }, [id]);

    return (
        <>
            <Helmet>
                <title>{carData != 0 && `${carData.make} | ${carData.model}`}</title>
            </Helmet>
            <Header />
            <motion.section initial={{ opacity: 0 }} animate={{ opacity: 100 }} className="text-zinc-600 dark:text-zinc-200">
                <div className="bg-white relative h-[250px] lg:h-[450px] overflow-hidden flex justify-center items-center rounded-md mt-3">
                    <button onClick={() => navigate(-1)} className="absolute top-0 left-0 z-10 bg-zinc-500/80 hover:bg-zinc-500 text-zinc-200 dark:bg-zinc-700/50 dark:hover:bg-zinc-700/80 transition-colors m-1 p-1 rounded-full"><ArrowLeft /></button>
                    <img
                        className="scale-x-[-1] object-cover w-[80%] lg:w-[40%]"
                        src={carData.image_url}
                        alt=""
                    />
                </div>
                <div className=" lg:flex lg:justify-between mt-10">
                    <div className="lg:w-1/2 px-5">
                        <h1 className="font-medium text-4xl text-center">
                            {carData.make} {carData.model}
                        </h1>
                        <div>
                            <h2 className="text-2xl font-medium mt-5 mb-2 text-center lg:text-start">Description</h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
                                veritatis officia consequuntur libero dolore labore aliquid illo
                                laborum doloribus laboriosam, omnis, molestiae, quas nam ea
                                consectetur explicabo quos similique ipsa.
                            </p>
                        </div>
                        <div className="flex gap-1 mt-3">
                            {
                                new Array(carData.rating).fill().map((_, index) => (
                                    <svg key={index} className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height="800px" width="800px" version="1.1" id="Capa_1" viewBox="0 0 47.94 47.94" xmlSpace="preserve">
                                        <path style={{ fill: "#ED8A19" }} d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757  c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042  c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685  c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528  c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956  C22.602,0.567,25.338,0.567,26.285,2.486z" />
                                    </svg>
                                ))
                            }
                        </div>
                        <div className="mt-3">
                            <h2 className="text-xl font-medium">
                                Daily price : {carData.daily_price}$
                            </h2>
                        </div>
                        <button className="w-full mt-5 py-2 bg-zinc-500/80 hover:bg-zinc-500 text-zinc-200 dark:bg-zinc-700/50 dark:hover:bg-zinc-700/80 transition-colors rounded-md">
                            Rent the car
                        </button>
                    </div>
                    <div className="lg:w-1/2 mt-10 lg:mt-0 rounded-md border border-zinc-300 dark:border-zinc-700">
                        <h2 className="text-center mt-2 font-medium text-2xl">Details</h2>
                        <table className="w-full divide-y-2  text-sm dark:divide-zinc-700 dark:bg-zinc-900 rounded-md">
                            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-700">
                                <tr>
                                    <th className="py-3">Brand & Model</th>
                                    <td>{tableContent.brandAndModel}</td>
                                </tr>
                                <tr>
                                    <th className="py-3">Model year</th>
                                    <td>{tableContent.modelYear}</td>
                                </tr>
                                <tr>
                                    <th className="py-3">Category</th>
                                    <td>{tableContent.category}</td>
                                </tr>
                                <tr>
                                    <th className="py-3">Features</th>
                                    <td>{tableContent.features !== undefined && tableContent.features.join(", ")}</td>
                                </tr>
                                <tr>
                                    <th className="py-3">Fuel type</th>
                                    <td>{tableContent.fuelType}</td>
                                </tr>
                                <tr>
                                    <th className="py-3">Transmission</th>
                                    <td>{tableContent.transmission}</td>
                                </tr>
                                <tr>
                                    <th className="py-3">Luggage Capacity</th>
                                    <td>{tableContent.luggageCapacity}</td>
                                </tr>
                                <tr>
                                    <th className="py-3">Mileage</th>
                                    <td>{tableContent.mileage}</td>
                                </tr>
                                <tr>
                                    <th className="py-3">Location</th>
                                    <td>{tableContent.location}</td>
                                </tr>
                                <tr>
                                    <th className="py-3">Rating</th>
                                    <td>{tableContent.rating}</td>
                                </tr>
                                <tr>
                                    <th className="py-3">Price</th>
                                    <td>{tableContent.price}$</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="mt-10">
                    <h1 className="text-2xl font-medium mb-5 text-center lg:text-start">Our cars you might like</h1>
                    <div className="grid grid-cols-2 2xl:grid-cols-5 xl:grid-cols-3 md:grid-cols-2 gap-3">
                        {
                            data.map((car) => (
                                <div key={car.id}>
                                    <CarCard data={car} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <Footer />
            </motion.section>
        </>
    );
};

export default CarDetails;
