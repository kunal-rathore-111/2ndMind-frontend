import type { ReactElement } from "react"

interface SideBarInterface {
    title: string,
    icon: ReactElement
}

export const SideBarComponent = (props: SideBarInterface) => {
    return <div className=" w-full flex gap-3 items-center hover:bg-lime-300 px-4 py-1 rounded transition duration-300 ">
        {props.icon} {props.title}
    </div>
}