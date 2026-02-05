import { Grid, List, Search } from "lucide-react";

export function SearchSection() {
    return <section className="flex  items-center gap-4 relative text-white">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2  w-5 h-5" />
        <input
            type="search"
            className=" bg-transparent border border-white rounded-2xl flex-wrap min-w-42 md:w-87.5 pl-10 pr-4 py-1.5 appearance-none focus:border-white focus:ring-2 focus:ring-white focus:outline-none  focus-visible:outline-none"
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
