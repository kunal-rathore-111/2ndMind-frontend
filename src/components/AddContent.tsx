import { CrossIcon } from "../assets/crossIcon";
import { ButtonComp } from "./Button";
import { InputComponent } from "./InputComp";
// controlled compoonent
// taking state variable and a function as input to hide the add content card 
export const AddContent = ({ open, onClose }: { open: boolean, onClose: () => void }) => {

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
                            <InputComponent placeholder="Title" />
                            <InputComponent placeholder="Link" />
                        </div>
                        <div className="flex justify-center my-5">
                            <ButtonComp variant="primary" title="Submit" />
                        </div>

                    </div>
                </div>

            </div>
            : ""}
    </div >

}
