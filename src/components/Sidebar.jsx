import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useFilter } from "../redux/slices/carsSlice";
import { Filter } from "lucide-react";

const Sidebar = () => {
    const dispatch = useDispatch();
    const [only, setOnly] = useState("");
    const [location, setLocation] = useState("");
    const [year, setYear] = useState("");
    const [seats, setSeats] = useState("");
    const [luggage, setLuggage] = useState("");
    const [price, setPrice] = useState("");
    const [filterHidden, setFilterHidden] = useState(true)

    useEffect(() => {
        dispatch(
            useFilter({
                only: only,
                location: location,
                year: Number(year),
                seats: Number(seats),
                luggage: Number(luggage),
                price: Number(price),
            })
        );
    }, [only, location, year, seats, luggage, price])

    const clearFilters = () => {
        setOnly("")
        setLocation("")
        setYear("")
        setSeats("")
        setLuggage("")
        setPrice("")
        dispatch(
            useFilter({
                only: "",
                location: "",
                year: null,
                seats: "",
                luggage: "",
                price: "",
            })
        )
    }

    return (
        <aside className={`mt-3 h-14 ${!filterHidden ? "h-full" : ""} overflow-hidden lg:h-[865px] rounded-md bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700 p-3`}>
            <div className="flex items-center justify-between">
                <h1 className="text-xl lg:text-2xl mt-[2px]">Filters</h1>
                <button onClick={() => setFilterHidden(!filterHidden)} className="block lg:hidden w-5 h-5"><Filter /></button>
            </div>
            <div className="my-3 h-px bg-zinc-300 dark:bg-zinc-700 hidden lg:block" />
            <div className="flex gap-2 items-center mt-4">
                <p>Only</p>
                <select
                    className="w-full py-1 bg-zinc-300 dark:bg-zinc-700 rounded-md px-2 focus:outline-none"
                    value={only}
                    onChange={(e) => setOnly(e.target.value)}
                    name="status"
                    aria-label="Project status"
                >
                    <option value="">Select</option>
                    <option value="Luxury">Luxury</option>
                    <option value="Sports">Sports</option>
                    <option value="SUV">SUV</option>
                    <option value="Economy">Economy</option>
                    <option value="Electric">Electric</option>
                    <option value="Premium">Premium</option>
                </select>
            </div>
            <div className="flex gap-2 items-center mt-4">
                <p className="text-nowrap">Location</p>
                <select
                    name="select seats"
                    className="w-full py-1 bg-zinc-300 dark:bg-zinc-700 rounded-md px-2 focus:outline-none"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                >
                    <option value="">Select</option>
                    <option value="Ohio">Ohio</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Virginia">Virginia</option>
                    <option value="Colorado">Colorado</option>
                </select>
            </div>
            <div className="flex gap-2 items-center mt-4">
                <p className="text-nowrap">Min year</p>
                <input
                    className="w-full py-1 bg-zinc-300 dark:bg-zinc-700 rounded-md px-2 focus:outline-none"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    placeholder="2020"
                    type="number"
                    name="maxium price"
                />
            </div>
            <div className="flex gap-2 items-center mt-4">
                <p className="text-nowrap">Seats</p>
                <select
                    name="select seats"
                    className="w-full py-1 bg-zinc-300 dark:bg-zinc-700 rounded-md px-2 focus:outline-none"
                    value={seats}
                    onChange={(e) => setSeats(e.target.value)}
                >
                    <option value="">Select</option>
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div className="flex gap-2 items-center mt-4">
                <p className="text-nowrap">Luggage Capacity</p>
                <select
                    name="select seats"
                    className="w-full py-1 bg-zinc-300 dark:bg-zinc-700 rounded-md px-2 focus:outline-none"
                    value={luggage}
                    onChange={(e) => setLuggage(e.target.value)}
                >
                    <option value="">Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                </select>
            </div>
            <div className="flex gap-2 items-center mt-4">
                <p className="text-nowrap">Max price</p>
                <input
                    className="w-full py-1 bg-zinc-300 dark:bg-zinc-700 rounded-md px-2 focus:outline-none"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="500"
                    type="number"
                    name="maxium price"
                />
            </div>
            <div className='my-3 h-px bg-zinc-300 dark:bg-zinc-700' />
            <button onClick={clearFilters} className="w-full py-1 bg-zinc-500/80 hover:bg-zinc-500 text-zinc-200 dark:bg-zinc-700/50 dark:hover:bg-zinc-700/80 transition-colors rounded-md">
                Clear filter
            </button>
        </aside>
    );
};

export default Sidebar;
