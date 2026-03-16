import { Link, useNavigate } from "react-router"
import { Button } from "./ui/button"
import { GithubIcon } from "@/assets/icons/Github"
import { BookTextIcon } from "@/assets/icons/Book"
import { MoonIcon } from "@/assets/icons/Moon"
import { SunIcon } from "@/assets/icons/Sun"
import { useTheme } from "./theme-provider"

export const Nav = () => {
    const navigate = useNavigate()
    const { theme, setTheme } = useTheme()

    const isDark = theme === "dark";


    const NavFunctionalComps = [
        { label: "Features", action: () => handleScrollTo("features") },
        { label: "Blog", action: () => { } },
        { label: "Docs", action: () => navigate("/docs") },
    ]

    const handleScrollTo = (id: string) => {
        const section = document.getElementById(id)
        if (!section) return
        section.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    return (
        <header
            className='fixed inset-x-0 top-0 z-200 border-b transition-all duration-300 border-transparent '
        >
            <nav className="mx-auto flex h-14.5 w-full max-w-251 items-center px-4  backdrop-blur-sm  bg-white/30 dark:bg-black/0">

                <div className="flex gap-10">
                    <div
                        className="flex items-center"
                        id="top"
                        onClick={() => handleScrollTo('top')}
                    >
                        <Link to="/" className="flex items-center gap-1 ">
                            <div className="flex size-6 items-center justify-center rounded-[7px]">
                                <BookTextIcon size={18} className="dark:text-zinc-100 text-zinc-900" />
                            </div>
                            <span className="text-sm font-bold tracking-[-0.03em] text-zinc-900 dark:text-zinc-100">
                                2nd Mind
                            </span>
                        </Link>
                    </div>

                    <div className="flex items-center justify-center gap-1">
                        {NavFunctionalComps.map(({ label, action }) => (
                            <button
                                key={label}
                                onClick={action}
                                className="
                                rounded-md px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-1 items-center justify-end gap-2">

                    <button
                        type="button"

                        onClick={() => {
                            setTheme(isDark ? "light" : "dark")
                        }}
                        className="
                        flex size-7 items-center justify-center rounded-sm
                        border border-zinc-200 dark:border-zinc-700
                        bg-zinc-100 dark:bg-zinc-900
                        text-zinc-600 dark:text-zinc-400
                        shadow-[0_1px_0_rgba(0,0,0,0.12)]
                        transition-all duration-300
                        hover:scale-102
                        hover:shadow-[0_3px_0_rgba(0,0,0,0.18)]
                        hover:border-zinc-300
                        hover:text-zinc-900
                        dark:hover:bg-zinc-800
                        dark:hover:text-zinc-100"
                    >
                        {isDark ? <SunIcon size={17} /> : <MoonIcon size={17} />}
                    </button>

                    <div className="h-4 w-px bg-zinc-300 dark:bg-zinc-700" />

                    <a href="https://github.com/2nd-mind/app"
                        target="_blank"
                        rel="noreferrer"
                        className="
                        flex size-7 items-center justify-center rounded-sm                       
                        text-zinc-200
                        hover:bg-zinc-200
                        hover:text-zinc-700
                        dark:text-zinc-700
                        hover:dark:text-zinc-200
                        hover:dark:bg-zinc-800
                        transition-all duration-400"

                    >
                        <GithubIcon size={18} />
                    </a>

                    <div className="h-4 w-px bg-zinc-300 dark:bg-zinc-700" />


                    <Button
                        variant={"secondary"}
                        onClick={() => navigate("/signin")} size="sm"
                        className="rounded-sm text-xs
                        hover:bg-zinc-300
                        hover:text-zinc-900
                        dark:hover:bg-zinc-700
                        dark:hover:text-zinc-300
                         transition-colors duration-400"
                    >
                        Sign In
                    </Button>

                    <Button onClick={() => navigate("/signup")} size="sm"
                        className="rounded-sm text-xs transition-colors duration-400"
                    >
                        Sign Up
                    </Button>
                </div>
            </nav>
        </header>
    )
}