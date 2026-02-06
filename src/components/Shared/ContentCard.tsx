import { ExternalLink, Link, Trash2, Twitter, Youtube } from "lucide-react"

const DataDetails = [
    { name: "Total Items", quantity: 6 },
    { name: "YouTube Videos", quantity: 2 },
    { name: "Twitter Posts", quantity: 2 },
]

export function ContentComp() {
    return <section className="flex flex-col gap-10">
        <section className=" grid grid-cols-3 gap-5 sm:gap-15 ">

            {DataDetails.map(x => <div className="rounded-xl lg:rounded-2xl bg-gray-100 dark:bg-gray-900/40 text-gray-700 dark:text-gray-300 flex justify-between flex-col gap-1 p-3 md:px-6 lg:px-10 sm:py-3 border border-gray-300 dark:border-gray-700 transition-colors duration-300">{x.name}
                <span className="font-bold text-4xl">{x.quantity}</span>
            </div>)
            }
        </section>

        {/* the user actual content need to map it*/}
        <section className=" flex flex-col sm:grid grid-cols-2 lg:grid-cols-3 gap-15 ">
            {/* need to change later the color  */}
            <ContentGridCard color={"YouTube"} />
            <ContentGridCard color={"Twitter"} />
            <ContentGridCard color={"Others"} />
            <ContentGridCard color={"Twitter"} />
        </section>

    </section>
}

/* content card to show the user data for grid form used in ContentComp */
function ContentGridCard({ color }: { color: "YouTube" | "Twitter" | "Others" }) {
    return <div className="flex flex-col px-8 py-6 text-gray-800 dark:text-gray-200/90 border border-gray-300 dark:border-gray-600 rounded-2xl gap-4 group transition-colors duration-300">

        {/* type and its icon */}
        <ContentTypeComp type={color} />


        {/* Title */}
        <h4 className="font-bold text-lg">{"props.title here  we write the title and the title is TITLE"}</h4>

        {/* description */}
        <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">{"props.description we write the description and here im checking my typing speed"}</p>

        <a href="contentlink" className="flex gap-3 text-gray-800 dark:text-gray-200 transition-colors duration-300"> <ExternalLink className="w-5 h-5" /> view content</a>

        {/* tags which has to be mapped to first two */}
        <div>{/* {"props.tag.map"} */}
            <span className="bg-gray-300 dark:bg-gray-500 py-1 px-2 rounded-lg transition-colors duration-300">#{"x max"}</span>
        </div>
    </div >
}





function ContentTypeComp({ type }: { type: "YouTube" | "Twitter" | "Others" }) {

    function LoadIconWithType() {
        if (type === 'YouTube') return <span className="ring-1 ring-red-500 px-2.5 py-1 rounded-lg flex gap-2 text-red-500 items-center" >
            <Youtube className="w-5 h-5" />
            {"props.typename"}
        </span>

        else if (type === 'Twitter') return <span className="ring-1 ring-blue-500 px-2.5 py-1 rounded-lg flex gap-2 text-blue-500 items-center" >
            <Twitter className="w-5 h-5" />
            {"props.typename"}
        </span>

        else return <span className="ring-1 ring-gray-400 px-2.5 py-1 rounded-lg flex gap-2 text-gray-400 items-center" >
            <Link className="w-5 h-5" />
            {"props.typename"}
        </span>
    }


    return <div className=" flex justify-between items-center">
        <LoadIconWithType />
        <Trash2 className="text-red-500 w-5 cursor-pointer h-5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
    </div>
}