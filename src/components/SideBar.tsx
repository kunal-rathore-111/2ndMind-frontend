
import { SideBarComponent } from "./SideBarItems"
import { TwitterIcon, YoutubeIcon, DocumentsIcon, LinksIcon, TagsIcon } from "../assets/SideBarIcons"
import logoImage from "../assets/logo.png"

export const SideBar = () => {
    const defaultStyles = `h-full w-full flex flex-col items-center py-13  justify-center left-0 top-0 border-r`
    return <div className={`${defaultStyles}`}>
        <div className="flex items-center mr-4">
            <img src={logoImage} alt="" className="h-18" />
            <span className="text-lg">OmniHive</span>
        </div>
        <div className="h-full flex flex-col justify-evenly items-center ">
            <SideBarComponent title="Twitter" icon={<TwitterIcon />}></SideBarComponent>
            <SideBarComponent title="Videos" icon={<YoutubeIcon />}></SideBarComponent>
            <SideBarComponent title="Documents" icon={<DocumentsIcon />}></SideBarComponent>
            <SideBarComponent title="Links" icon={<LinksIcon />}></SideBarComponent>
            <SideBarComponent title="Tags" icon={<TagsIcon />}></SideBarComponent>
        </div>
    </div>
}
