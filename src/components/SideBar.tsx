
import { SideBarComponent } from "./SideBarItems"
import { TwitterIcon, YoutubeIcon, DocumentsIcon, LinksIcon, TagsIcon } from "../assets/SideBarIcons"

export const SideBar = () => {
    const defaultStyles = `h-full w-full flex flex-col items-center py-13 justify-center left-0 top-0 border-r `
    return <div className={`${defaultStyles}`}>
        <div className="w-full flex flex-col justify-evenly">
            HI this is div
        </div>
        <div className="w-full h-full flex flex-col justify-evenly p-6">
            <SideBarComponent title="Twitter" icon={<TwitterIcon />}></SideBarComponent>
            <SideBarComponent title="Videos" icon={<YoutubeIcon />}></SideBarComponent>
            <SideBarComponent title="Documents" icon={<DocumentsIcon />}></SideBarComponent>
            <SideBarComponent title="Links" icon={<LinksIcon />}></SideBarComponent>
            <SideBarComponent title="Tags" icon={<TagsIcon />}></SideBarComponent>

        </div>
    </div>
}
