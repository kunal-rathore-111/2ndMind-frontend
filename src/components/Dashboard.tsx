import { AddIcon, ShareIcon } from "../assets/ButtonIcons";
import { ButtonComp } from "./Button";
import { CardComp } from "./Card";
import { SideBar } from "../components/SideBar";
import { AddContent } from "./AddContent";

import { useEffect, useState } from "react";
import { useContent } from "../hooks/useContent";
import { BackendUrl, FrontendUrl } from "../config/Url";


export const Dashboard = () => {
    const [open, setOpen] = useState(false);
    /* use react query */
    const { contents, isLoaded, refresh } = useContent();

    async function shareProfileFunc() {
        const respond = await fetch(`${BackendUrl}/user/share`, {
            method: "POST",
            body: JSON.stringify({

                /* need to implement the toggle of delete and create share link */
                share: true
            }),
            credentials: "include",
            headers: {
                "Content-type": "application/json"
            }
        });
        const res = await respond.json();

        const shareUrl = `${FrontendUrl}/user/${res?.hash}`
        navigator.clipboard.writeText(shareUrl);
        alert("Share Link copied");
    }


    /* whenever the addcomponent closes it refetch the data */
    useEffect(() => { refresh() }, [open]);


    return <div className="h-full w-full flex flex-row bg-sky-100">
        {/* controlled component (child tells parent to change state) */}
        <AddContent open={open} onClose={() => { setOpen(false) }} />
        <div className={`h-screen w-50 bg-white ${open ? "" : "fixed"}`}><SideBar /></div>

        <div className={`flex-1 ${open ? "" : "ml-50"}`}>
            <div className="flex flex-col">
                <div className="flex justify-end p-4 gap-6">
                    <ButtonComp
                        variant="primary" title="Add Content"
                        startIcon={<AddIcon />} onClick={() => { setOpen(true) }} />
                    <ButtonComp
                        variant="secondary" title="Share Profile"
                        onClick={shareProfileFunc} startIcon={<ShareIcon />} />
                </div>

                <div className=" flex justify-center items-center flex-wrap gap-10 my-8 ">

                    {
                        contents.map(({ type, title, link }, index) => {
                            return <CardComp
                                title={title} key={index}
                                type={type} link={link}>
                            </CardComp>
                        })
                    }
                </div>
            </div>
        </div>
        <span>
        </span>
    </div>
}