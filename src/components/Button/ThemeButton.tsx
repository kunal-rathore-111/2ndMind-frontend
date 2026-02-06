import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";



export function ThemeButton() {

    const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark')
    useEffect(() => {
        document.documentElement.classList.toggle('dark', dark)
        localStorage.setItem('theme', dark ? 'dark' : 'light')
    }, [dark])
    return <button
        onClick={() => setDark(!dark)}
        className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300">
        {dark ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />}
    </button>
}