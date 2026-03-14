import { Link, useNavigate } from "react-router"
import { BookOpen, Github } from "lucide-react"
import { Button } from "./ui/button"
export const NavComp = () => {
    const navigate = useNavigate()
    const scrolled = false

    const handleScrollTo = (id: string) => {
        const section = document.getElementById(id)
        if (!section) return
        section.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    return (
        <header
            className={`fixed inset-x-0 top-0 z-200 border-b transition-all duration-300 ${scrolled
                ? "border-border bg-background/95 backdrop-blur-xl"
                : "border-transparent bg-transparent"
                }`}
        >
            <div className="mx-auto flex h-14.5 w-full max-w-264 items-center px-9">
                <div className="flex flex-1 items-center">
                    <Link to="/" className="flex shrink-0 items-center gap-2 no-underline">
                        <div className="flex size-[26px] items-center justify-center rounded-[7px] border border-white/15 bg-zinc-950">
                            <BookOpen size={18} className="text-zinc-50" strokeWidth={2.5} />
                        </div>
                        <span className="text-sm font-bold tracking-[-0.03em] text-black">
                            2nd Mind
                        </span>
                    </Link>
                </div>

                <nav className="flex flex-1 items-center justify-center gap-1">
                    {[
                        { label: "Features", action: () => handleScrollTo("features") },
                        { label: "Blog", action: () => { } },
                        { label: "Docs", action: () => navigate("/docs") },
                    ].map(({ label, action }) => (
                        <button
                            key={label}
                            onClick={action}
                            className="rounded-md px-3 py-1.5 text-xs font-medium text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800"
                        >
                            {label}
                        </button>
                    ))}
                </nav>

                <div className="flex flex-1 items-center justify-end gap-2">
                    <span className="text-xs text-zinc-500">THEMETOGG</span>
                    <div className="h-4 w-px bg-zinc-200" />
                    <a
                        href="https://github.com/2nd-mind/app"
                        target="_blank"
                        rel="noreferrer"
                        className="flex size-8 items-center justify-center rounded-md text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
                    >
                        <Github size={16} />
                    </a>
                    <div className="h-4 w-px bg-zinc-200" />
                    <Link
                        to="/signin"
                        className="px-3 py-1.5 text-xs text-zinc-600 no-underline transition-colors hover:text-zinc-900"
                    >
                        Sign in
                    </Link>
                    <Button onClick={() => navigate("/signup")} size="sm">
                        Get started
                    </Button>
                </div>
            </div>
        </header>
    )
}