import { useState } from "react"
import { CrossIcon } from "../assets/crossIcon";
import { ButtonComp } from "./Button";
// controlled compoonent
export const AddContent = () => {

    const open = true;

    return <div>
        {open ?
            <div className="h-screen w-screen top-0 left-0 fixed bg-slate-50 opacity-75 flex justify-center items-center">
                <span className="flex flex-col bg-white border rounded-md opacity-100">

                    {/* close button */}
                    <div className="flex justify-end cursor-pointer pt-2 pr-2">
                        <CrossIcon></CrossIcon>
                    </div>

                    <div className="p-5 flex flex-col">
                        <InputComponent placeholder="Title" />
                        <InputComponent placeholder="Link" />
                    </div>
                    <div className="flex justify-center">
                        <ButtonComp variant="primary" title="Submit" />
                    </div>
                </span >

            </div>
            : ""}
    </div >

}

const InputComponent = ({ onChange, placeholder }: { onChange: () => void, placeholder: string }) => {
    return <div >
        < input placeholder={placeholder} type="text" className="px-4 py-2" onChange={onChange} />
    </div >
}