import { ArrowLeft, Brain } from "lucide-react";
import { SignInput } from "../components/Sign/SignInput";
import { SubmitButton } from "../components/Sign/Button";
import { Link } from "react-router-dom";


export function Signup() {
    return <form className="flex flex-col gap-6 h-screen items-center justify-center bg-stone-100">
        <Link to={'/'} className="flex justify-start gap-1 cursor-pointer hover:mr-4 transition-all duration-600 min-w-100">
            <ArrowLeft className="w-5 h-6" />
            Back to home
        </Link>

        <div className="shadow-stone-600 shadow-sm rounded-2xl min-w-100 min-h-140 bg-white flex items-center px-10">

            <span className="flex flex-col gap-8 w-full ">
                {/* for icon and name */}
                <div className="flex flex-col items-center">
                    <span className="bg-black flex h-12 w-12 items-center justify-center rounded-lg mb-4"> <Brain className="w-8 h-8 text-white" /></span>
                    <h3 className="font-bold text-2xl">Create Account</h3>
                    <h5>Start organizing your knowledge</h5>
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
                    <span className="flex gap-1">
                        Already have an account?
                        <Link to={'/signin'} className="hover:underline cursor-pointer">Sign in</Link>
                    </span>
                </div>
            </span>
        </div>
    </form>
}

