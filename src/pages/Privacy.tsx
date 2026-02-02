import { Eye, FileText, Shield, Lock, type LucideIcon } from "lucide-react";
import { PrivacyPageNav } from "../components/Privacy/PrivacyPageNav";


interface ListDTO {
    icon: LucideIcon,
    title: string
}


const List: ListDTO[] = [
    { icon: Shield, title: "Introduction" },
    { icon: Lock, title: "Data Security" },
    { icon: Eye, title: "Information We Collect" },
    { icon: FileText, title: "Your Rights" }
]

export function PrivacyPage() {
    return <div className="h-screen w-screen bg-black flex flex-col ">
        <PrivacyPageNav />
        <div className="pt-36 text-white">

            {/* hero of privacy */}
            <div className="flex flex-col gap-5 w-full items-center">
                <div className="w-18 h-18 flex items-center justify-center bg-white rounded-xl">
                    <Shield className="h-12 w-12 text-black" />
                </div>
                <h1 className="text-6xl font-bold"> Privacy Policy
                </h1>
                <span>
                    Your privacy is our priority. Here's how we protect your data.
                </span>
                <span className="text-sm text-gray-400">
                    Last updated: Feb 3, 2026
                </span>
            </div>
        </div>

        {/* main content of privacy */}
        <div className="grid-cols-4 gap-8 dark:text-white">

            <div className="border-2 col-span-1 border-amber-500">
                <h4 className="bold">Table of contents</h4>
                {List.map(x => {
                    const Icon = x.icon
                    return <span className="flex items-center gap-2"><Icon className="w-4 h-4" /> {x.title}</span>
                })}
            </div>

            <div className="border-2 col-span-3 border-amber-500">werewwwwwwwwww</div>


        </div>

    </div >
}