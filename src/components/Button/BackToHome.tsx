import { ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";


export function BackToHome() {
    return <span className="font-bold dark:text-white">
        <Link to={'/'} className="flex text-sm  items-center justify-center gap-2 p-6 text-lg hover:mr-3 transition-all duration-800 cursor-pointer group">
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline"> Back to Home</span>
            <Home className="w-5 h-8" />
        </Link>
    </span>
}