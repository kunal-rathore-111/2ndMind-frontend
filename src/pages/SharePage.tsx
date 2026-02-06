import { ContentComp } from "../components/Shared/ContentCard";
import { DashBoardAndShareFooter } from "../components/Shared/DashboardAndShareFooter";
import { ExtraPagesNav } from "../components/Shared/ExtraPagesNav";
import { SearchSection } from "../components/Shared/SearchSection";


export function SharePage() {
    return <div className="bg-white dark:bg-black/95 flex flex-col min-h-screen gap-5 transition-colors duration-300">
        <ExtraPagesNav navHeading="User's collection" navSubHeading="Shared via 2ndMind" useFor="share" ></ExtraPagesNav>
        <main className="flex flex-col pt-32 pb-28 px-6 md:px-12 lg:px-22 gap-8">
            <SearchSection />
            <ContentComp />
        </main>
        <DashBoardAndShareFooter />
    </div>
}