import { ExternalLink, Link, Trash2, Twitter, Youtube } from "lucide-react";
import { ExtraPagesNav } from "../components/Shared/ExtraPagesNav";
import { SearchSection } from "../components/Shared/SearchSection";
import { ContentComp } from "../components/Shared/ContentCard";
import { DashBoardAndShareFooter } from "../components/Shared/DashboardAndShareFooter";


export function DashboardPage() {
    /* need to wrap in protected form */
    return <div className="bg-white dark:bg-black/95 flex flex-col min-h-screen transition-colors duration-300">
        <ExtraPagesNav navHeading="2ndMind" navSubHeading="Your dashboard" useFor="dashboard" />

        {/* main page */}
        <main className="flex flex-col pt-32 pb-28 px-6 md:px-12 lg:px-22 gap-8">

            <SearchSection />

            <ContentComp />
        </main>
        <DashBoardAndShareFooter />
    </div>
}

