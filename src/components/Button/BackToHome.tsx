import { ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";


export function BackToHome() {
    return <button className="font-bold text-gray-900 dark:text-white hover:text-black dark:hover:text-gray-200 transition-colors duration-300">
        <Link to={'/'} className="flex text-sm  items-center justify-center gap-2 p-6   cursor-pointer group">
            <ArrowLeft className="w-5 h-5" />
            {/* <span className="hidden sm:inline"> Back to Home</span> */}
            <Home className="w-5 h-8" />
        </Link>
    </button>
}