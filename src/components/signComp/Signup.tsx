
import { InputComponent } from "../InputComp"
import { ButtonComp } from "../Button"
import { useRef } from "react"
import { BackendUrl } from "../../config/Url"

export const SignUp = () => {

    // using the username and password REf so can have the input values store when entered via InputComponent

    const UsernameRef = useRef<HTMLInputElement>(null);
    const PassswordRef = useRef<HTMLInputElement>(null);

    async function signupFunc() {
        const username = UsernameRef.current?.value;
        const password = PassswordRef.current?.value;

        const respond = await fetch(`${BackendUrl}/sign/sign-up`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username, password
            })
        });
        const res = await respond.json();
        alert(JSON.stringify(res?.message));
    }

    return <div className="h-full w-full bg-white flex justify-center items-center fixed ">
        <div className=" border rounded-xl p-10 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <InputComponent reference={UsernameRef} placeholder="Username" ></InputComponent>
                <InputComponent reference={PassswordRef} placeholder="Password" ></InputComponent>
            </div>
            {/* need to add the loading  */}
            <ButtonComp variant="primary" title="Sign-up" onClick={signupFunc}></ButtonComp>
        </div>
    </div >
}