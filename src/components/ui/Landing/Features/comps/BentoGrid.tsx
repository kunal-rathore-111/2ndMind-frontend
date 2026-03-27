import Tags from "@/lib/utils/Tags";
import { Tree, type TreeViewElement } from "./content-tree";
import { motion } from "framer-motion";

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
        staggerChildren: 0.4,
      },
    },
  };
  const tagsChildVariant = {
    hidden: { opacity: 0, y: 5 },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="mt-4 grid min-h-120 w-full grid-cols-2 p-4 md:grid-cols-3">
      {/* firts col */}
      <div className="col-span-1 flex flex-col gap-5 border p-5">
        <h4 className="text-2xl">A sample of organized content</h4>
        <Tree elements={elements} initialExpandedItems={folderIds} />
      </div>
      {/* 2nd col */}
      <div className="col-span-1 grid grid-rows-[65%_35%] border-x">
        <motion.div
          className="flex flex-col gap-4 border p-5"
          variants={tagsParentVariant}
          initial={"hidden"}
          animate={"show"}
        >
          <h4 className="text-3xl">Smart tags</h4>
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
            variants={tagsChildVariant}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h5 className="text-lg font-semibold">
              Auto-organize with intelligent tags
            </h5>
            <p>Suggested as you save. Filter and combine tags instantly.</p>
          </motion.div>
        </motion.div>
        <div className="flex items-center justify-center border"></div>
      </div>
      {/* 3rd col */}
      <div className="col-span-1 grid grid-rows-[35%_65%] border-x">
        <div className="flex items-center justify-center border"></div>
        <div className="flex items-center justify-center border"></div>
      </div>
    </div>
  );
}
