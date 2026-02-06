import { Grid, List, Search } from "lucide-react";

export function SearchSection() {
    return <section className="flex items-center gap-4 relative text-gray-900 dark:text-white transition-colors duration-300">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" />
        <input
            type="search"
            className="bg-transparent border border-gray-300 dark:border-gray-700 rounded-2xl flex-wrap min-w-42 md:w-87.5 pl-10 pr-4 py-1.5 appearance-none text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-400 focus:border-gray-400 dark:focus:border-gray-600 focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 focus:outline-none focus-visible:outline-none transition-colors duration-300"
            placeholder="Search your content..."
        />

        <select name="All types" id="All types"
            className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded transition-colors duration-300">
            <option value="All">All types</option>
            <option value="YouTube">YouTube</option>
            <option value="Twitter">Twitter</option>
            <option value="Other">Other</option>
        </select>

        <div className="border border-gray-300 dark:border-gray-700 px-1 py-1 rounded-lg flex gap-1 transition-colors duration-300">
            {/* need to complete using state */}
            <Grid className="text-gray-900 dark:text-white bg-transparent p-1 w-7 h-7 rounded transition-colors duration-300" />
            <List className="text-white dark:text-gray-900 bg-gray-900 dark:bg-white p-1 w-7 h-7 rounded transition-colors duration-300" />
        </div>
    </section>
}
