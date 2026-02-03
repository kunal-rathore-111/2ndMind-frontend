import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";


export function BackToHome() {
    return <span className="font-bold dark:text-white">
        <Link to={'/'} className="flex text-sm  items-center justify-center gap-2 p-6 text-lg hover:mr-5 transition-all duration-600 cursor-pointer">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
        </Link>
    </span>
}