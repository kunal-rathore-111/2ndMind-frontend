import { useRef } from "react";
import { CrossIcon } from "../assets/crossIcon";
import { ButtonComp } from "./Button";
import { InputComponent } from "./InputComp";
import { BackendUrl } from "../config/Url";
// controlled compoonent
// taking state variable and a function as input to hide the add content card 
export const AddContent = ({ open, onClose }: { open: boolean, onClose: () => void }) => {
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const discriptionRef = useRef<HTMLInputElement>(null);

    async function AddContentFunc() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        const discription = discriptionRef.current?.value;

        const respond = await fetch(`${BackendUrl}/user/content/add`, {
            method: "POST",
            body: JSON.stringify({
                title, link, discription
            }),
            headers: {
                "Content-type": "application/json"
            },
            credentials: "include"
        });

        const res = await respond.json();
        alert(res?.message);
    }

    return <div>
        {open ?
            <div className="h-screen w-screen top-0 left-0 fixed flex justify-center items-center">
                <div className="absolute bg-slate-50 opacity-60 h-full w-full "> </div >
                <div className=" absolute bg-slate-50 flex">
                    <div className="  flex flex-col bg-white border rounded-md opacity-100">

                        {/* close button */}
                        <div className=" flex justify-end cursor-pointer pt-2 pr-2" onClick={onClose}>
                            <CrossIcon></CrossIcon>
                        </div>

                        <div className="p-5 flex flex-col">
                            <InputComponent reference={titleRef} placeholder="Title" />
                            <InputComponent reference={linkRef} placeholder="Link" />
                            <InputComponent reference={discriptionRef} placeholder="Discription" />
                        </div>
                        <div className="flex justify-center my-5">
                            <ButtonComp variant="primary" title="Submit" onClick={AddContentFunc} />
                        </div>

                    </div>
                </div>

            </div>
            : ""}
    </div >

}
