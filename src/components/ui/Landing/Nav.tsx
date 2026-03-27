import { Link, useNavigate } from "react-router";
import { Button } from "../button";
import { GithubIcon } from "@/assets/icons/Github";
import { BookTextIcon } from "@/assets/icons/Book";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedThemeToggler } from "../animated-theme-toggler";

export const Nav = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState<number | null>(null);

  const NavFunctionalComps = [
    { label: "Features", action: () => handleScrollTo("features") },
    { label: "Blog", action: () => {} },
    { label: "Docs", action: () => navigate("/docs") },
  ];

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-200 border-b border-transparent transition-all duration-300">
      <nav className="mx-auto flex h-14.5 w-full max-w-251 items-center bg-white/30 px-4 backdrop-blur-sm dark:bg-black/0">
        <div className="flex gap-10">
          <div
            className="flex items-center"
            id="top"
            onClick={() => handleScrollTo("top")}
          >
            <Link to="/" className="flex items-center gap-1">
              <div className="flex size-6 items-center justify-center rounded-[7px]">
                <BookTextIcon
                  size={23}
                  className="text-zinc-900 dark:text-zinc-100"
                />
              </div>
              <span className="text-sm font-bold tracking-[-0.03em] text-zinc-900 dark:text-zinc-100">
                Luci
              </span>
            </Link>
          </div>

          <motion.div
            className="flex items-center justify-center gap-1"
            onMouseLeave={() => setHovered(null)}
          >
            {NavFunctionalComps.map(({ label, action }, idx) => (
              <motion.button
                key={label}
                onClick={action}
                className="relative z-10 rounded-md bg-transparent px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                onMouseEnter={() => setHovered(idx)}
              >
                {hovered === idx && (
                  <motion.span
                    layoutId="idx"
                    className="absolute inset-0 -z-10 h-full w-full rounded-lg bg-zinc-200/70 dark:bg-zinc-100/20"
                  ></motion.span>
                )}
                {label}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <div className="flex flex-1 items-center justify-end gap-2">
          <AnimatedThemeToggler className="flex size-7 items-center justify-center rounded-sm border border-zinc-200 bg-zinc-100 text-zinc-600 shadow-[0_1px_0_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-102 hover:border-zinc-300 hover:text-zinc-900 hover:shadow-[0_3px_0_rgba(0,0,0,0.18)] dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100" />
          <div className="h-4 w-px bg-zinc-300 dark:bg-zinc-700" />
          <a
            href="https://github.com/2nd-mind/app"
            target="_blank"
            rel="noreferrer"
            className="flex size-7 items-center justify-center rounded-sm text-zinc-200 transition-all duration-400 hover:bg-zinc-200 hover:text-zinc-700 dark:text-zinc-700 hover:dark:bg-zinc-800 hover:dark:text-zinc-200"
          >
            <GithubIcon size={18} />
          </a>
          <div className="h-4 w-px bg-zinc-300 dark:bg-zinc-700" />
          <Button
            variant={"secondary"}
            onClick={() => navigate("/signin")}
            size="sm"
            className="rounded-sm text-xs transition-colors duration-400 hover:bg-zinc-300 hover:text-zinc-900 dark:hover:bg-zinc-700 dark:hover:text-zinc-300"
          >
            Sign In
          </Button>

          <Button
            onClick={() => navigate("/signup")}
            size="sm"
            className="rounded-sm text-xs transition-colors duration-400"
          >
            Sign Up
          </Button>
        </div>
      </nav>
    </header>
  );
};
