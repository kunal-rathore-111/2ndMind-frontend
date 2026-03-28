import Tags from "@/lib/utils/Tags";
import { Tree, type TreeViewElement } from "./content-tree";
import { easeInOut, motion } from "framer-motion";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { LockIcon } from "@/assets/icons/Lock";
import { ChromeIcon } from "@/assets/icons/Chrome";

export function BentoGrid() {
  const elements: TreeViewElement[] = [
    {
      id: "Categories",
      type: "folder",
      name: "Categories",
      children: [
        {
          id: "All",
          type: "folder",
          name: "All",
          children: [
            {
              id: "React Library",
              name: "React Library",
            },
            {
              id: "Tailwind CSS",
              name: "Tailwind CSS",
            },
            {
              id: "Stripe — Financial",
              name: "Stripe — Financial",
            },
            {
              id: "OpenAI — AI research",
              name: "OpenAI — AI research",
            },
            {
              id: "Top-100 interview questions, JavaScript",
              name: "Top-100 interview questions, JavaScript",
            },
            {
              id: "GitHub",
              name: "GitHub",
            },
          ],
        },
        {
          id: "Finance",
          type: "folder",
          name: "Finance",
          children: [
            {
              id: "Stripe — Financial",
              name: "Stripe — Financial",
            },
          ],
        },
        {
          id: "Study",
          type: "folder",
          name: "Study",
          children: [
            {
              id: "Top-100 interview questions, JavaScript",
              name: "Top-100 JS interview questions",
            },
          ],
        },
        {
          id: "Research",
          type: "folder",
          name: "Research",
          children: [
            {
              id: "OpenAI — AI research",
              name: "OpenAI — AI research",
            },
          ],
        },
        {
          id: "Development",
          type: "folder",
          name: "Development",
          children: [
            {
              id: "React Library",
              name: "React Library",
            },
            {
              id: "Tailwind CSS",
              name: "Tailwind CSS",
            },
          ],
        },
      ],
    },
  ];

  const folderIds = ["Categories", "All", "Research", "Development"];
  const tags = [
    "Development",
    "Finance",
    "Social",
    "GitHub",
    "AI",
    "Research",
    "Others",
  ];

  const tagsParentVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
      },
    },
  };
  const tagsChildVariant = {
    hidden: { opacity: 0, transition: { duration: 0.3 } },
    show: (i: number) => ({
      opacity: [0, 1, 0],
      transition: {
        duration: 5,
        ease: easeInOut,
        repeat: Infinity,
        delay: i * 0.5, // stagger offset
        repeatDelay: 3,
      },
    }),
  };

  return (
    <div className="mt-4 grid min-h-120 w-full grid-cols-2 p-4 md:grid-cols-3">
      {/* firts col */}
      <div className="col-span-1 flex flex-col gap-5 border-2 border-black p-5 dark:border-white">
        <h4 className="text-2xl">A sample of organized content</h4>
        <Tree elements={elements} initialExpandedItems={folderIds} />
      </div>
      {/* 2nd col */}
      {/* first row */}

      <div className="col-span-1 grid grid-rows-[65%_35%]">
        <>
          <motion.div
            className="flex flex-col border-t-2 border-black p-5 dark:border-white"
            variants={tagsParentVariant}
            initial={"hidden"}
            animate={"show"}
          >
            <h4 className="text-3xl"> Smart tags</h4>
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 10 }}
                transition={{ duration: 0.8 }}
                className="text-lg font-semibold"
              >
                Auto-organize with intelligent tags
              </motion.div>
              {/* tags content poping using parent child using variants */}
              <motion.div
                className="text-sm"
                variants={tagsParentVariant}
                initial={"hidden"}
                animate={"show"}
              >
                {<Tags tags={tags} childVariant={tagsChildVariant} />}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-lg"
              >
                Suggested as you save. Filter and combine tags instantly.
              </motion.div>
            </div>
          </motion.div>
        </>

        {/* 2nd row */}
        <>
          <div className="flex flex-col border-y-2 border-black p-5 dark:border-white">
            <div className="flex flex-col gap-1">
              <p className="text-lg font-extralight">Privacy</p>
              <div className="flex flex-col gap-3">
                <h4 className="flex items-center gap-2 text-3xl font-semibold">
                  <LockIcon
                    size={24}
                    className="text-red-500 dark:text-lime-500"
                  />
                  Private by default
                </h4>
                <motion.span>
                  <TypingAnimation className="text-black/40 dark:text-zinc-300/40">
                    Everything encrypted. Your bookmarks belong to you, not us.
                  </TypingAnimation>
                </motion.span>
              </div>
            </div>
          </div>
        </>
      </div>
      {/* 3rd col */}
      <div className="col-span-1 grid grid-rows-[35%_65%]">
        <div className="flex flex-col gap-3 border-2 border-black p-5 dark:border-white">
          <div className="flex items-center gap-1">
            <ChromeIcon className="text-orange-500 dark:text-yellow-400" />
            <span className="text-2xl">Browser Extension</span>
          </div>
          <p className="font-semibold">Save any page in one click</p>
          <p className="text-xs text-black/40 dark:text-zinc-300/40">
            Chrome, Firefox, and Safari. Save without leaving the tab.
          </p>
        </div>
        <div className="flex items-center justify-center border-x-2 border-b-2 border-black dark:border-white"></div>
      </div>
    </div>
  );
}
