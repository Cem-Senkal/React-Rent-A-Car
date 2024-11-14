import { MoonStar, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const DarkMode = ({ style }) => {
    const [theme, setTheme] = useState("");
    const localTheme = localStorage.getItem("theme")
    const html = document.documentElement
    
    useEffect(() => {
        const browserTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
        
        if (localStorage.length === 0 || localTheme === "") {
            html.classList.add(browserTheme)
            setTheme(browserTheme)
            localStorage.setItem("theme", browserTheme)
        }else {
            setTheme(localTheme)
            html.classList.add(localTheme)
        }
    }, [])
    
    const themeSwitch = () => {
        html.className = ""
        const newTheme = theme === "dark" ? "light" : "dark"
        localStorage.setItem("theme", newTheme)
        setTheme(newTheme)
        html.classList.add(newTheme)
    }
    
    return (
        <>
            <button className={style} onClick={themeSwitch}>
                {localTheme === "dark" ? <Sun /> : <MoonStar />}
            </button>
        </>
    );
};

export default DarkMode;
