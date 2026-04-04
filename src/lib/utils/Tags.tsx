import { cn } from "@/lib/utils";
import { motion, type Variants } from "framer-motion";
import { colors } from "../constants/colors";

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
