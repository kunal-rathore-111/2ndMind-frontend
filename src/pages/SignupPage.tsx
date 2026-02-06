import { Brain } from "lucide-react";
import { SignInput } from "../components/Sign/SignInput";
import { SubmitButton } from "../components/Sign/Button";
import { Link } from "react-router-dom";
import { BackToHome } from "../components/Button/BackToHome";
import { ThemeButton } from "../components/Button/ThemeButton";


export function Signup() {
    return <form className="flex flex-col h-screen items-center justify-center bg-gray-50 dark:bg-gray-950/99 transition-colors duration-300">

        <div className="fixed top-6 left-6 z-50">
            <BackToHome />
        </div>

        <div className="fixed top-6 right-6 z-50">
            <ThemeButton />
        </div>

        <div className="shadow-stone-300 dark:shadow-stone-600 shadow-sm rounded-2xl w-95 sm:w-110 min-h-140 bg-white dark:bg-gray-900 flex items-center px-10 transition-colors duration-300">

            <span className="flex flex-col gap-8 w-full ">
                {/* for icon and name */}
                <div className="flex flex-col items-center">
                    <span className="bg-black dark:bg-white flex h-12 w-12 items-center justify-center rounded-lg mb-4 transition-colors duration-300"> <Brain className="w-8 h-8 text-white dark:text-black" /></span>
                    <h3 className="font-bold text-2xl text-gray-900 dark:text-white transition-colors duration-300">Create Account</h3>
                    <h5 className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Start organizing your knowledge</h5>
                </div>

                {/* for inputs */}
                <div className="flex flex-col space-y-4">
                    <SignInput title={"Username"} holder={"Choose a username"} />
                    <SignInput title={"Password"} holder={"Create a password"} />
                    <SignInput title={"Confirm Password"} holder={"Confirm your password"} />
                </div>

                {/* for submit and already have acc */}
                <div className="flex flex-col items-center gap-4 mt-2">
                    <SubmitButton buttonName={"Create Account"} />
                    <span className="flex gap-1 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                        Already have an account?
                        <Link to={'/signin'} className="text-gray-900 dark:text-white hover:underline cursor-pointer transition-colors duration-300">Sign in</Link>
                    </span>
                </div>
            </span>
        </div>
    </form>
}

