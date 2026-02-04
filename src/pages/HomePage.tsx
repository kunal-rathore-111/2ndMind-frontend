import { ExternalLink, Grid, List, Search, Trash, Trash2, Youtube } from "lucide-react";
import { ExtraPagesNav } from "../components/Shared/ExtraPagesNav";


export function DashboardPage() {
    /* need to wrap in protected form */
    return <div>
        <ExtraPagesNav useFor="dashboard" />

        {/* main page */}
        <main className="w-full h-screen flex flex-col pt-34 bg-black px-6 lg:px-20 gap-14">

            <SearchSection />

            <ContentComp />


        </main>
    </div>
}

function SearchSection() {
    return <section className="flex  items-center gap-4 relative text-white">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2  w-5 h-5" />
        <input
            type="search"
            className=" bg-transparent border border-white rounded-2xl flex-wrap min-w-[109px] md:w-[350px] pl-10 pr-4 py-1 appearance-none focus:border-white focus:ring-2 focus:ring-white focus:outline-none  focus-visible:outline-none"
            placeholder="Search your content..."
        />

        <select name="All types" id="All types"
            className="px-3 py-1 bg-black">
            <option value="All">All types</option>
            <option value="YouTube">YouTube</option>
            <option value="Twitter">Twitter</option>
            <option value="Other">Other</option>
        </select>

        <div className="border  px-1 py-1  rounded-lg flex gap-1">
            {/* need to complete using state */}
            <Grid className="text- bg- p-1 w-7 h-7 rounded" />
            <List className="text-black bg-white p-1 w-7 h-7 rounded" />
        </div>
    </section>
}

const DataDetails = [
    { name: "Total Items", quantity: 6 },
    { name: "YouTube Videos", quantity: 2 },
    { name: "Twitter Posts", quantity: 2 },
]

function ContentComp() {
    return <section className="flex flex-col gap-14">
        <section className="border grid grid-cols-3 gap-5 sm:gap-20 ">

            {DataDetails.map(x => <div className="rounded-xl lg:rounded-3xl bg-black text-white flex justify-between flex-col gap-1 p-3 sm:px-8 sm:py-5 border ">{x.name}
                <span className="font-bold text-4xl">{x.quantity}</span>
            </div>)
            }
        </section>

        {/* the user actual content */}
        <section className=" sm:grid grid-cols-2 lg:grid-cols-3">
            <ContentGridCard />
        </section>

    </section>
}

/* content card to show the user data for grid form used in ContentComp */
function ContentGridCard() {
    return <div className="flex flex-col px-10 py-8 text-white border border-amber-300 rounded-2xl gap-4  group">

        {/* type and its icon */}
        <div className=" flex justify-between items-center">
            <span className="ring-1 ring-red-500 px-2 py-1 rounded-lg flex gap-2 text-red-500" >
                <Youtube className="" />
                {"props.type"}
            </span>
            <Trash2 className="text-red-500 w-5 cursor-pointer h-5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        </div>

        {/* Title */}
        <h4 className="font-bold text-xl">{"props.title here we write the title"}</h4>

        {/* description */}
        <p className="text-xl text-gray-400">{"props.description we write the description and here im checking my typing speed"}</p>

        <a href="contentlink" className="flex gap-3"> <ExternalLink className="w-5 h-5" /> view content</a>

        {/* tags which has to be mapped to first two */}
        <div>{/* {"props.tag.map"} */}
            <span className="bg-gray-500 py-1 px-2 rounded-lg">#{"x max"}</span>
        </div>
    </div >
}