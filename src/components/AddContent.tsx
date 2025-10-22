import { useRef, useState } from "react";
import { CrossIcon } from "../assets/crossIcon";
import { ButtonComp } from "./Button";
import { InputComponent } from "./InputComp";
import { BackendUrl } from "../config/Url";
// controlled compoonent
// taking state variable and a function as input to hide the add content card 

enum ContentType {
    Youtube = "Youtube",
    Twitter = "Twitter",
    Other = "Other"
}

export const AddContent = ({ open, onClose }: { open: boolean, onClose: () => void }) => {
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const discriptionRef = useRef<HTMLInputElement>(null);

    const [type, setType] = useState(ContentType.Other);


    async function AddContentFunc() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        const discription = discriptionRef.current?.value;

        const respond = await fetch(`${BackendUrl}/user/content/add`, {
            method: "POST",
            body: JSON.stringify({
                title, link, discription, type
            }),
            headers: {
                "Content-type": "application/json"
            },
            credentials: "include"
        });

        const res = await respond.json();
        alert(res?.message);
        onClose();
    }

    return <div>
        {open ?
            <div className="h-screen w-screen top-0 left-0 fixed flex justify-center items-center">
                {/* div for bluring the behind content for opacity */}
                <div className="absolute bg-slate-50 opacity-60 h-full w-full "> </div >

                {/* div for having top add content with clear background */}
                <div className=" absolute bg-slate-50 flex">
                    <div className="  flex flex-col bg-white border rounded-md opacity-100">

                        {/* close button */}
                        <div className=" flex justify-end cursor-pointer pt-2 pr-2" onClick={onClose}>
                            <CrossIcon></CrossIcon>
                        </div>

                        <div className="p-5 flex flex-col gap-2">
                            <InputComponent reference={titleRef} placeholder="Title" />
                            <InputComponent reference={linkRef} placeholder="Link" />
                            <InputComponent reference={discriptionRef} placeholder="Discription" />
                            <div className="m-1">
                                Type-
                                <div className="flex gap-2 justify-center m-1">
                                    <ButtonComp
                                        variant={type === ContentType.Youtube ? "primary" : 'secondary'} title="Youtube"
                                        onClick={() => setType(ContentType.Youtube)} />

                                    <ButtonComp
                                        variant={type === ContentType.Twitter ? "primary" : "secondary"} title="Twitter"
                                        onClick={() => setType(ContentType.Twitter)} />

                                    <ButtonComp
                                        variant={type === ContentType.Other ? "primary" : "secondary"} title="Other"
                                        onClick={() => setType(ContentType.Other)} />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center my-2">
                            <ButtonComp variant="primary" title="Submit" onClick={AddContentFunc} />
                        </div>

                    </div>
                </div>

            </div>
            : ""}
    </div >

}
