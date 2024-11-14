import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useEffect } from "react";
import CarCard from "../components/CarCard";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { fetchAllCars } from "../redux/slices/carsSlice";
import { useSelector } from "react-redux";
import { motion } from "framer-motion"

const Cars = () => {
    const dispatch = useDispatch();
    const filteredData = useSelector((state) => state.cars.filteredData);

    useEffect(() => {
        dispatch(fetchAllCars());
    }, []);

    return (
        <>
            <Helmet>
                <title>Cars</title>
            </Helmet>
            <Header />
            <motion.section initial={{ opacity: 0 }} animate={{ opacity: 100 }}>
                <div className="block lg:hidden">
                    <Sidebar />
                </div>
                <div className="flex w-full gap-3">
                    <div className="hidden lg:block">
                        <Sidebar />
                    </div>
                    <div className="grid grid-cols-2 2xl:grid-cols-5 xl:grid-cols-3 md:grid-cols-2 w-full gap-3 mt-3">
                        {filteredData == 0 ? (
                            <h1 className="text-zinc-600 dark:text-zinc-200 font-medium text-2xl mb-3 lg:text-4xl text-center mt-3">
                                No car found
                            </h1>
                        ) : (
                            filteredData.map((car) => (
                                <div key={car.id} className="h-[346px]">
                                    <CarCard data={car} />
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </motion.section>
            <Footer />
        </>
    );
};

export default Cars;
