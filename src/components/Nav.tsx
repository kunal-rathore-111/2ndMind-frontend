import { Link, useNavigate } from "react-router"
import { Button } from "./ui/button"
import { GithubIcon } from "@/assets/icons/Github"
import { BookTextIcon } from "@/assets/icons/Book"
import { MoonIcon } from "@/assets/icons/Moon"
import { SunIcon } from "@/assets/icons/Sun"
import { useTheme } from "./theme-provider"

export const NavComp = () => {
    const navigate = useNavigate()
    const scrolled = false
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
            className={`fixed inset-x-0 top-0 z-200 border-b transition-all duration-300 ${scrolled
                ? "border-zinc-200 bg-white/95 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/95"
                : "border-transparent bg-transparent"
                }`}
        >
            <nav className="mx-auto flex h-14.5 w-full max-w-264 items-center px-9">

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

                        transition-all duration-150

                        hover:-translate-y-px
                        hover:shadow-[0_3px_0_rgba(0,0,0,0.18)]
                        hover:border-zinc-300
                        hover:text-zinc-900

                        dark:hover:bg-zinc-800
                        dark:hover:text-zinc-100
                        active:translate-y-px
                        active:shadow-[0_1px_0_rgba(0,0,0,0.2)]
                        "
                    >
                        {isDark ? <SunIcon size={17} /> : <MoonIcon size={17} />}
                    </button>

                    <div className="h-4 w-px bg-zinc-300 dark:bg-zinc-700" />

                    <a href="https://github.com/2nd-mind/app"
                        target="_blank"
                        rel="noreferrer"
                        className="
                        flex size-7 items-center justify-center rounded-sm
                        border border-zinc-200 dark:border-zinc-700
                        bg-zinc-100 dark:bg-zinc-900
                        text-zinc-600 dark:text-zinc-400

                        shadow-[0_1px_0_rgba(0,0,0,0.12)]

                        transition-all duration-150

                        hover:-translate-y-px
                        hover:shadow-[0_3px_0_rgba(0,0,0,0.18)]
                        hover:border-zinc-300
                        hover:text-zinc-900

                        dark:hover:bg-zinc-800
                        dark:hover:text-zinc-100
                        "
                    >
                        <GithubIcon size={17} />
                    </a>

                    <div className="h-4 w-px bg-zinc-300 dark:bg-zinc-700" />


                    <Button
                        variant={"secondary"}
                        onClick={() => navigate("/signin")} size="sm"
                        className="rounded-sm text-xs
                        hover:bg-stone-300
                        dark:hover:bg-stone-700
                         transition-colors duration-400
                        
                         "
                    >
                        Sign In
                    </Button>
                    <Button onClick={() => navigate("/signup")} size="sm"
                        className="rounded-sm text-xs transition-all duration-400 hover:scale-92"
                    >
                        Sign Up
                    </Button>
                </div>
            </nav>
        </header>
    )
}