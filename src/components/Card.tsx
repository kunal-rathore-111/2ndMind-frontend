

/* title,  link, type- twitter,yt,etc, icon on based of type */
import { ShareIcon } from "../assets/ButtonIcons"


interface CardInterface {
    title: string,
    type: "youtube" | "twitter"
    link: string,
}


function getYoutubeId(link: string) {

    let VID_REGEX = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

    const youtubeArray = link.match(VID_REGEX);
    let youtubeID = "";
    if (youtubeArray) youtubeID = youtubeArray[1];
    return youtubeID;
}

const defaultStyles = "rounded-xl p-4 border border-slate-200 shadow-md min-w-2xs min-h-80 flex flex-col gap-4"
export const CardComp = (props: CardInterface) => {


    return <div
        className={`${defaultStyles}`}
    >
        <div className=" flex justify-between p-1 ">
            <div className="flex gap-3 items-center ">
                <span className="text-gray-600">
                    <ShareIcon></ShareIcon>
                </span>
                <b>{props.title}</b>
            </div>
            <div className="flex gap-4 text-gray-600 items-center">
                <ShareIcon></ShareIcon>
                <ShareIcon></ShareIcon>
            </div>
        </div>
        <div>
            {props.type === "youtube" ?
                /* getting youtube id usign regex for embeding casue the youtube share link has watch and youtube embeed works on embeed with the id */
                <iframe className="w-full h-full rounded-lg"
                    src={`https://youtube.com/embed/${getYoutubeId(props.link)}?autoplay=0`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                : ""
            }
            {props.type === "twitter" ? <div>
                <blockquote className="twitter-tweet w-full">
                    {/* the twitter share link comes with x.com but its href works for twiiter.com so needs to replace */}
                    <a href={props.link.replace('x.com', 'twitter.com')}></a>
                </blockquote>  <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
            </div> : ""}
        </div>
    </div>
}