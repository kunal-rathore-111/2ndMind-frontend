import { cn } from "@/lib/utils";
import { motion, type Variants } from "framer-motion";

export const colors = [
  {
    light: "bg-cyan-50/90 text-cyan-700 border-cyan-200",
    dark: "dark:bg-cyan-500/15 dark:text-cyan-200 dark:border-cyan-400/35",
  },

  {
    light: "bg-violet-50/90 text-violet-700 border-violet-200",
    dark: "dark:bg-violet-500/15 dark:text-violet-200 dark:border-violet-400/35",
  },
  {
    light: "bg-fuchsia-50/90 text-fuchsia-700 border-fuchsia-200",
    dark: "dark:bg-fuchsia-500/15 dark:text-fuchsia-200 dark:border-fuchsia-400/35",
  },
  {
    light: "bg-indigo-50/90 text-indigo-700 border-indigo-200",
    dark: "dark:bg-indigo-500/15 dark:text-indigo-200 dark:border-indigo-400/35",
  },
  {
    light: "bg-rose-50/90 text-rose-700 border-rose-200",
    dark: "dark:bg-rose-500/15 dark:text-rose-200 dark:border-rose-400/35",
  },

  {
    light: "bg-orange-50/90 text-orange-700 border-orange-200",
    dark: "dark:bg-orange-500/15 dark:text-orange-200 dark:border-orange-400/35",
  },
  {
    light: "bg-amber-50/90 text-amber-700 border-amber-200",
    dark: "dark:bg-amber-500/15 dark:text-amber-200 dark:border-amber-400/35",
  },
  {
    light: "bg-emerald-50/90 text-emerald-700 border-emerald-200",
    dark: "dark:bg-emerald-500/15 dark:text-emerald-200 dark:border-emerald-400/35",
  },
  {
    light: "bg-lime-50/90 text-lime-700 border-lime-200",
    dark: "dark:bg-lime-500/15 dark:text-lime-200 dark:border-lime-400/35",
  },
  {
    light: "bg-yellow-50/90 text-yellow-700 border-yellow-200",
    dark: "dark:bg-yellow-500/15 dark:text-yellow-200 dark:border-yellow-400/35",
  },
];

// generating color string based(tag based)
function getColor(tag: string) {
  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    // here the below thing converts the string tag in a specific no like "abc"= 382 and "cba" = 234 (different string different no)
    hash = tag.charCodeAt(i) + 19 * hash; // 19*hash (the previous substring weight * 19 (performing *19 in hash to get unique no.))
  }
  return colors[Math.abs(hash) % colors.length];
}

interface TagsDTO {
  tags: string[];
  childVariant?: Variants;
}

export default function Tags({ tags, childVariant }: TagsDTO) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, idx) => {
        const color = getColor(tag);

        return (
          <motion.span
            key={idx}
            variants={childVariant ?? undefined}
            custom={childVariant ? idx : 0}
            className={cn(
              "rounded-full border px-3 py-1 text-[12px]",
              color.light,
              color.dark,
            )}
          >
            #{tag}
          </motion.span>
        );
      })}
    </div>
  );
}
