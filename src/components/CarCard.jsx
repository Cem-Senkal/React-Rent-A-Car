import { useNavigate } from "react-router-dom";

const CarCard = ({ data }) => {
    const navigate = useNavigate()
    const car = data;

    return (
        <>
            <div className="w-full h-[346px] text-zinc-600 dark:text-zinc-200 bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md relative pb-1">
                <div className="w-full bg-white rounded-t-md flex justify-center">
                <img
                    className="h-32 object-contain w-[80%] scale-x-[-1]"
                    src={car.image_url}
                    alt="car images"
                />
                </div>
                <p className="text-center mt-2 text-xl font-medium line-clamp-1">
                    {car.make} {car.model}
                </p>
                <table className="table-auto text-sm w-full">
                    <tbody>
                        <tr className="flex justify-between px-5">
                            <th>Brand</th>
                            <td className="line-clamp-1">{car.make}</td>
                        </tr>
                        <tr className="flex justify-between px-5">
                            <th>Model</th>
                            <td>{car.model}</td>
                        </tr>
                        <tr className="flex justify-between px-5">
                            <th>Year</th>
                            <td>{car.year}</td>
                        </tr>
                        <tr className="flex justify-between px-5">
                            <th>Doors</th>
                            <td>{car.doors}</td>
                        </tr>
                        <tr className="flex justify-between px-5">
                            <th>Seats</th>
                            <td>{car.seats}</td>
                        </tr>
                        <tr className="flex justify-between px-5 text-base">
                            <th>Price</th>
                            <td>{car.daily_price}$</td>
                        </tr>
                    </tbody>
                </table>
                <div className="px-1 mt-2">
                    <button onClick={() => navigate(`/details/${car.id}`)} className="w-full py-1 bg-zinc-500/80 hover:bg-zinc-500 text-zinc-200 dark:bg-zinc-700/50 dark:hover:bg-zinc-700/80 transition-colors rounded-md">
                        See the car
                    </button>
                </div>
            </div>
        </>
    );
};

export default CarCard;
