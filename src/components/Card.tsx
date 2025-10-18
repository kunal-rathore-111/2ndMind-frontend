

/* title,  link, type- twitter,yt,etc, icon on based of type */
import { ShareIcon } from "../assets/ButtonIcons"
const defaultStyles = "rounded-xl p-4 border border-slate-200 shadow-md w-72  flex flex-col gap-14"

export const CardComp = () => {


    return <div
        className={`${defaultStyles}`}
    >
        <div className=" flex justify-between p-1 ">
            <div className="flex gap-3 items-center ">
                <span className="text-gray-600">
                    <ShareIcon></ShareIcon>
                </span>
                <b>ProjectIdeas</b>
            </div>
            <div className="flex gap-4 text-gray-600 items-center">
                <ShareIcon></ShareIcon>
                <ShareIcon></ShareIcon>
            </div>
        </div>
        <div>
            {/*   <iframe className="w-full" src="https://www.youtube.com/embed/6b-Kp6trydE?si=VqRInKpQWYn7nxYF" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
            <blockquote className="twitter-tweet">
                <a href="https://twitter.com/ANI/status/1947548419423093218?ref_src=twsrc%5Etfw"></a>
            </blockquote>            <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </div>
    </div>
}