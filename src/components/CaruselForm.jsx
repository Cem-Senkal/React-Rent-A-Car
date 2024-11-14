import { Calendar, Clock8, Clock9, MapPinPlus, MapPinX } from "lucide-react";

const CaruselForm = () => {
    return (
        <>
            <section className="absolute w-[93%] rounded-md pt-5 pb-5 lg:pt-10 lg:pb-16 text-zinc-600 dark:text-zinc-200 bg-zinc-200/70 dark:bg-zinc-800/90 border dark:border-zinc-700 border-zinc-300 backdrop-blur-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:-translate-y-1/4 z-20">
                <h1 className="text-xl lg:text-3xl font-semibold text-center mb-5 lg:mt-5 xl:mb-10">
                    Rent Your Dream Car Now!
                </h1>
                <ol className="grid lg:grid-cols-9 gap-3 px-3">
                    <li className="col-span-2">
                        <p className="flex gap-2 mb-2 text-sm text-nowrap items-center">
                            <MapPinPlus className="w-4 h-4 xl:w-6 xl:h-6" /> Vehicle pick-up address
                        </p>
                        <select
                            className="dark:bg-zinc-800 border dark:border-zinc-700 w-full px-2 py-2 rounded-md focus:outline-none"
                            name="vehicle pick-up address"
                        >
                            <option value="">
                                Select
                            </option>
                            <option value="ohoio">
                                Ohoio
                            </option>
                            <option value="georgia">
                                Georgia
                            </option>
                            <option value="virginia">
                                Virginia
                            </option>
                            <option value="colorado">
                                Colorado
                            </option>
                        </select>
                    </li>
                    <li className="col-span-2">
                        <p className="flex gap-2 mb-2 text-sm text-nowrap items-center">
                            <MapPinX className="w-4 h-4 xl:w-6 xl:h-6" /> Drop-off address
                        </p>
                        <select
                            className="dark:bg-zinc-800 border dark:border-zinc-700 w-full px-2 py-2 rounded-md focus:outline-none"
                            name="drop-off address"
                        >
                            <option value="">
                                Select
                            </option>
                            <option value="ohoio">
                                Ohoio
                            </option>
                            <option value="georgia">
                                Georgia
                            </option>
                            <option value="virginia">
                                Virginia
                            </option>
                            <option value="colorado">
                                Colorado
                            </option>
                        </select>
                    </li>
                    <li className="col-span-1">
                        <p className="flex gap-2 mb-2 text-sm text-nowrap items-center">
                            <Calendar className="hidden xl:block" /> Rental date
                        </p>
                        <input
                            className="dark:bg-zinc-800 border dark:border-zinc-700 w-full px-2 py-2 rounded-md focus:outline-none"
                            type="date"
                            name="rental date input"
                        />
                    </li>
                    <li className="col-span-1">
                        <p className="flex gap-2 mb-2 text-sm text-nowrap items-center">
                            <Calendar className="hidden xl:block" /> Return date
                        </p>
                        <input
                            className="dark:bg-zinc-800 border dark:border-zinc-700 w-full px-2 py-2 rounded-md focus:outline-none"
                            type="date"
                            name="return date input"
                        />
                    </li>
                    <li className="col-span-1">
                        <p className="flex gap-2 mb-2 text-sm text-nowrap items-center">
                            <Clock8 className="hidden xl:block" />Rental hours
                        </p>
                        <input
                            className="dark:bg-zinc-800 h-[44px] border dark:border-zinc-700 w-full px-2 py-2 rounded-md focus:outline-none"
                            placeholder="8:35"
                            type="number"
                            name="rental hours input"
                        />
                    </li>
                    <li className="col-span-1">
                        <p className="flex gap-2 mb-2 text-sm text-nowrap items-center">
                            <Clock9 className="hidden xl:block" />Drop-off time
                        </p>
                        <input
                            className="dark:bg-zinc-800 h-[44px] border dark:border-zinc-700 w-full px-2 py-2 rounded-md focus:outline-none"
                            placeholder="21:05"
                            type="number"
                            name="drop of time input"
                        />
                    </li>
                    <li className="items-end flex col-span-2 lg:col-span-1">
                        <button className="dark:bg-zinc-600 w-full py-2 mb-px rounded-md bg-zinc-500 text-zinc-200 hover:bg-zinc-600 border border-zinc-400 dark:hover:bg-zinc-500 transition-colors">
                            Rent a car
                        </button>
                    </li>
                </ol>
            </section>
        </>
    )
}

export default CaruselForm