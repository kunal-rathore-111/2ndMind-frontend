import type { ReactElement } from "react"

interface SideBarInterface {
    title: string,
    icon: ReactElement
}

export const SideBarComponent = (props: SideBarInterface) => {
    return <div className="flex w-full items-center gap-3 hover:bg-lime-300 px-4 py-1 rounded transition duration-200 ">
        {props.icon} {props.title}
    </div>
}