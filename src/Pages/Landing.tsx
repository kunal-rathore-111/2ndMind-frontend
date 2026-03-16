import { ClapIcon } from "@/assets/icons/Demo";
import { SendIcon } from "@/assets/icons/Send";
import { Nav } from "@/components/Nav"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router"
import { motion } from "framer-motion"

export default function Landing() {
    const navigate = useNavigate();



    const HeroSection = () => {
        return <section className="flex m-4">
            {/*left div*/}
            <div className="flex text-start">
                {/* app intro text */}
                <div className="flex flex-col gap-6">
                    <span className="text-zinc-400/35">
                        Bookmark Manager
                    </span>
                    <h1 className="font-semibold  text-6xl">
                        Your second mind <br />
                        for bookmarks.
                    </h1>
                    <p className="text-zinc-400 dark:text-zinc-700">
                        Save, organize, and resurface any link in seconds.
                        <br /> Built for people who live in the browser.
                    </p>
                    <div className="flex gap-2">

                        <Button
                            onClick={() => navigate('/signup')}
                            asChild>
                            <motion.button whileHover={"animate"} >
                                Get Started Free
                                {<SendIcon />}
                            </motion.button>
                        </Button>

                        <Button variant={"secondary_hover"} className="border  border-amber-900/40 dark:border-white/30 bg-white/10 hover:bg-gray-300/30 dark:hover:bg-zinc-300/14 shadow-sm" asChild>
                            <motion.button whileHover={'animate'}>
                                View demo
                                {<ClapIcon />}
                            </motion.button>
                        </Button>
                    </div>
                </div>
            </div>

            {/*right div*/}
            <div className="flex-1">
                {/* for floating cards (interactive right side)*/}
                BY
            </div>

        </section >
    }



    // --- Langing Page return
    return <main className="flex flex-col w-full">
        <Nav />
        <HeroSection />
    </main>
}