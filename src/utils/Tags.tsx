import { cn } from "@/lib/utils";

const colors = [
  {
    light: "bg-red-50 text-red-600 border-red-200",
    dark: "dark:bg-red-500/10 dark:text-red-300 dark:border-red-400/30",
  },

  {
    light: "bg-blue-50 text-blue-600 border-blue-200",
    dark: "dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-400/30",
  },
  {
    light: "bg-yellow-50 text-yellow-700 border-yellow-200",
    dark: "dark:bg-yellow-500/10 dark:text-yellow-300 dark:border-yellow-400/30",
  },
  {
    light: "bg-green-50 text-green-600 border-green-200",
    dark: "dark:bg-green-500/10 dark:text-green-300 dark:border-green-400/30",
  },
  {
    light: "bg-amber-50 text-amber-600 border-amber-200",
    dark: "dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-400/30",
  },
  {
    light: "bg-teal-50 text-teal-600 border-teal-200",
    dark: "dark:bg-teal-500/10 dark:text-teal-300 dark:border-teal-400/30",
  },

  {
    light: "bg-pink-50 text-pink-600 border-pink-200",
    dark: "dark:bg-pink-500/10 dark:text-pink-300 dark:border-pink-400/30",
  },
  {
    light: "bg-purple-50 text-purple-600 border-purple-200",
    dark: "dark:bg-purple-500/10 dark:text-purple-300 dark:border-purple-400/30",
  },
  {
    light: "bg-indigo-50 text-indigo-600 border-indigo-200",
    dark: "dark:bg-indigo-500/10 dark:text-indigo-300 dark:border-indigo-400/30",
  },
  {
    light: "bg-cyan-50 text-cyan-600 border-cyan-200",
    dark: "dark:bg-cyan-500/10 dark:text-cyan-300 dark:border-cyan-400/30",
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

export default function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.slice(0, 4).map((tag, idx) => {
        const color = getColor(tag);

        return (
          <span
            key={idx}
            className={cn(
              "rounded-full border px-3 py-1 text-xs font-medium",
              color.light,
              color.dark,
            )}
          >
            #{tag}
          </span>
        );
      })}
    </div>
  );
}
