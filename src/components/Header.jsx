import { Link, NavLink } from "react-router-dom";
import DarkMode from "./DarkMode";
import { AlignJustify, X } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
    const [visibility, setVisibility] = useState(false);

    const routes = [
        {
            route: "/",
            name: "Home",
        },
        {
            route: "/cars",
            name: "Cars",
        },
        {
            route: "/aboutus",
            name: "About us",
        },
        {
            route: "/contact",
            name: "Contact",
        },
    ];

    useEffect(() => {
        visibility ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "auto")
    }, [visibility])

    return (
        <>
            <nav className="flex justify-between items-center px-5 py-3 sm:py-2 bg-zinc-200 dark:bg-zinc-800 rounded-md mt-3 border border-zinc-300 text-zinc-600 dark:border-zinc-700 dark:text-zinc-200 w-full">
                <Link to="/">
                    <img
                        src="/img/icon.png"
                        className="scale-x-[-1] w-28"
                        alt="rent a car logo"
                    />
                </Link>
                <div className="flex gap-5 font-medium">
                    {routes.map((route, index) => (
                        <NavLink
                            key={index}
                            to={route.route}
                            className={({ isActive }) =>
                                isActive
                                    ? "px-5 py-2 bg-zinc-300 dark:bg-zinc-700 rounded-md transition-colors hidden sm:block"
                                    : "px-5 py-2 hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-md transition-colors hidden sm:block"
                            }
                        >
                            {route.name}
                        </NavLink>
                    ))}
                </div>
                <div className="flex gap-3 text-zinc-600 dark:text-zinc-200">
                    <DarkMode style="rounded-full hover:bg-zinc-300 dark:hover:bg-zinc-700 p-2 transition-colors" />
                    <button
                        className="block sm:hidden"
                        onClick={() => setVisibility(!visibility)}
                    >
                        {visibility ? <X /> : <AlignJustify />}
                    </button>
                </div>
            </nav>
            <div
                className={`${visibility
                    ? "relative opacity-100 visible transition-all z-50"
                    : "relative invisible opacity-0 transition-all z-50"
                    }`}
            >
                <div className="w-full h-[calc(100vh-90px)] rounded-md absolute mt-2 dark:bg-zinc-800/95 bg-zinc-300/90 backdrop-blur-md block sm:hidden text-zinc-600 dark:text-zinc-200 border border-zinc-400/20 dark:border-zinc-700 p-3">
                    {routes.map((route, index) => (
                        <NavLink
                            key={index}
                            to={route.route}
                            className="w-full block text-center bg-zinc-200 dark:bg-zinc-700 py-3 px-3 rounded-md dark:hover:bg-zinc-700 transition-colors my-3"
                        >
                            {route.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Header;
