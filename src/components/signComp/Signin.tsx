
import { InputComponent } from "../InputComp"
import { ButtonComp } from "../Button"
import { useRef } from "react"
import { BackendUrl } from "../../config/Url";
export const SignIn = () => {

    const UsernameRef = useRef<HTMLInputElement>(null);
    const PasswordRef = useRef<HTMLInputElement>(null);
    async function SignInFunc() {
        const username = UsernameRef.current?.value;
        const password = PasswordRef.current?.value;

        const respond = await fetch(`${BackendUrl}/sign/sign-in`, {
            method: "POST",
            headers: {
                "Content-type": 'application/json'
            },
            body: JSON.stringify({
                username, password
            })
        })

        const res = await respond.json();
        alert(JSON.stringify(res?.message));
    }

    return <div className="h-full w-full bg-white flex justify-center items-center fixed ">
        <div className=" border rounded-xl p-10 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <InputComponent reference={UsernameRef} placeholder="Username" ></InputComponent>
                <InputComponent reference={PasswordRef} placeholder="Password" ></InputComponent>
            </div>
            {/* need to add the loading  */}
            <ButtonComp variant="primary" title="Sign-in" onClick={SignInFunc}></ButtonComp>
        </div>
    </div>
}