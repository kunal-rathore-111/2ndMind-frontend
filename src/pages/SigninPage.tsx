import { Brain } from "lucide-react";
import { SignInput } from "../components/Sign/SignInput";
import { SubmitButton } from "../components/Sign/Button";
import { Link } from "react-router-dom";
import { BackToHome } from "../components/Button/BackToHome";


export function Signin() {
    return <form className="flex flex-col h-screen items-center justify-center bg-stone-100 gap-6">

        <BackToHome />

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
                    <SignInput title={"Username"} holder={"Enter your username"} />
                    <SignInput title={"Password"} holder={"Enter your password"} />
                </div>

                {/* for submit and already have acc */}
                <div className="flex flex-col items-center gap-4 mt-2">
                    <SubmitButton buttonName={"Sign In"} />
                    <span className="flex gap-1">
                        Don't have an account?
                        <Link to={'/signup'} className="hover:underline cursor-pointer">Sign up</Link>
                    </span>
                </div>
            </span>
        </div>
    </form>
}

