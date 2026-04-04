import { GithubIcon } from "@/assets/icons/Github";
import CardOutline from "@/components/CardOutline";

import BackToHome_MoveUpComp from "@/components/ui/BackToHome_MoveUpComp";
import { Button } from "@/components/ui/Buttons/shadcnButton";
import DotComp from "@/components/ui/Landing/Dot";
import ThemeHomeComp from "@/components/ui/ThemeHomeComp";
import { cn } from "@/lib/utils";
import { EmailLink, GithubRepo } from "@/lib/utils/SocialLinks";
import { colors } from "@/lib/utils/Tags";
import {
  FolderKanban,
  HelpCircle,
  MailIcon,
  Puzzle,
  Search,
  Share2,
  ShieldCheck,
  Tags,
  Zap,
} from "lucide-react";

export default function Docs() {
  const StepsArray = [
    {
      title: "Step 1 - Sign up",
      description:
        "Create a free account in under 30 seconds. No credit card required.",
    },
    {
      title: "Step 2 - Save",
      description:
        "Add your first bookmark using the dashboard or browser extension.",
    },
    {
      title: "Step 3 - Organize",
      description:
        "Add tags and assign categories to keep everything structured.",
    },
    {
      title: "Step 4 - Search",
      description:
        "Use instant search to find anything — titles, URLs, or tags.",
    },
  ];
  const FeaturesArray = [
    {
      icon: Search,
      title: "Instant Search",
      description:
        "Search across all your bookmarks by title, URL, tag, or description. Results appear as you type — no loading, no waiting.",
    },
    {
      icon: Tags,
      title: "Tags",
      description:
        "Add any number of tags to each bookmark. Tags are colour-coded and searchable. Expand the Tags section in the sidebar to filter by any tag.",
    },
    {
      icon: FolderKanban,
      title: "Categories",
      description:
        "Every bookmark belongs to a category — Development, Design, Productivity, DevOps, AI & Research, or Finance. Categories group your library automatically.",
    },
    {
      icon: Share2,
      title: "Sharing",
      description:
        "Toggle sharing on any bookmark to get a permanent public link. The public page shows the title, URL, tags, and description. You can turn sharing off at any time.",
    },
    {
      icon: ShieldCheck,
      title: "Privacy",
      description:
        "Bookmarks are private by default. Nothing is visible to anyone unless you explicitly share it. No ads, no data selling.",
    },
    {
      icon: Puzzle,
      title: "Browser Extension",
      description:
        "Install the extension for Chrome, Firefox, or Safari. Click the icon on any page to save instantly without leaving your current tab.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "2nd Mind is built for speed. The dashboard loads instantly, search is real-time, and bookmarks sync immediately across devices.",
    },
  ];

  const TipsArray = [
    { text: "Create a free account on the Sign Up page." },
    {
      text: "You'll land on the Dashboard. Click + Add or press N to save your first bookmark.",
    },
    {
      text: "Assign a category and tags. Categories live in the sidebar; tags let you cross-reference across categories.",
    },
    {
      text: "Use the search bar to find bookmarks instantly. You can search by title, URL, or tag.",
    },
    {
      text: "Click the share toggle on any bookmark to generate a public link. Share it anywhere — it's permanent until you turn sharing off.",
    },
  ];

  return (
    <div className="my-24 flex flex-col items-start gap-5 text-start">
      <div className="border-b-2 py-6">
        <div className="flex w-180 flex-col gap-10">
          {/*What is 2nd Mind?  */}
          <div className="flex flex-col gap-3">
            <div className="flex w-full justify-between">
              <div className="flex w-fit items-center gap-1 rounded-sm border border-zinc-500 bg-zinc-200 px-2 text-xs text-zinc-600">
                <DotComp /> Documentation
              </div>
              <div className="flex w-1/11 items-end">
                <ThemeHomeComp />
              </div>
            </div>
            <h1 className="text-4xl">What is 2nd Mind?</h1>
            <p>
              2nd Mind is a premium bookmark manager designed for knowledge
              workers who save hundreds of links. Powered by instant search,
              smart tags, and category-based organisation — so you never lose
              track of what matters.
            </p>
          </div>

          {/* Getting Started           */}
          <div className="w-full">
            <div className="space-y-2">
              <h2 className="font-semibold"> Getting Started </h2>
              <p>Follow these steps to start building your bookmark library:</p>
            </div>
            <div className="my-6 grid grid-cols-2 gap-4">
              {StepsArray.map((x, idx) => {
                return (
                  <CardOutline key={idx}>
                    <h2
                      className={cn(
                        colors[idx % colors.length].light,
                        colors[idx % colors.length].dark,
                        "bg-transparent font-medium dark:bg-transparent",
                      )}
                    >
                      {x.title}
                    </h2>
                    <p>{x.description}</p>
                  </CardOutline>
                );
              })}
            </div>
          </div>

          {/* features */}
          <div className="w-full">
            <h2 className="font-semibold"> Core Features</h2>
            <div className="my-6 flex w-full flex-col gap-6">
              {FeaturesArray.map((x, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex h-auto w-full flex-col rounded-xl bg-zinc-100 p-6 px-5 py-3 text-start text-sm shadow-sm shadow-zinc-900 dark:bg-zinc-950/80 dark:shadow-zinc-300/90"
                  >
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={cn(
                            colors[idx % colors.length].light,
                            colors[idx % colors.length].dark,
                            "rounded border p-1",
                          )}
                        >
                          <x.icon size={14} />
                        </span>
                        <h2
                          className={cn(
                            colors[idx % colors.length].light,
                            colors[idx % colors.length].dark,
                            "bg-transparent font-medium dark:bg-transparent",
                          )}
                        >
                          {x.title}
                        </h2>
                      </div>
                      <p>{x.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Tips */}
          <div className="flex flex-col gap-2">
            <h2 className="font-medium">Quick Tips</h2>
            <ul className="text-sm leading-6">
              {TipsArray.map((x, idx) => {
                return (
                  <li key={idx} className="text-zinc-500">
                    - {x.text}
                  </li>
                );
              })}
            </ul>
          </div>
          {/* support */}
          <div className="flex flex-col gap-2 text-sm">
            <h2 className="text-lg">Support</h2>
            <p className="">Need help? We're here for you.</p>
            <div className="my-1 flex gap-3">
              {/* need to implement links need to decide wheter the .env or what to use for that */}
              {[
                { title: "Email support", icon: MailIcon, link: EmailLink },
                {
                  title: "View on Github",
                  icon: GithubIcon,
                  link: `${GithubRepo}/issues`,
                },
                { title: "Contact us", icon: HelpCircle, link: "/contact" },
              ].map((x, idx) => {
                return (
                  <Button
                    asChild
                    className="border-3 border-zinc-300 bg-zinc-800 transition-all duration-300 hover:scale-105 hover:bg-black dark:border-zinc-600 dark:bg-zinc-200 hover:dark:bg-zinc-100"
                    key={idx}
                  >
                    <a
                      className="flex items-center gap-2 rounded border px-2 py-1 text-xs"
                      referrerPolicy="no-referrer"
                      target="_blank"
                      href={x.link}
                    >
                      <x.icon size={16} /> {x.title}
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <BackToHome_MoveUpComp />
    </div>
  );
}
