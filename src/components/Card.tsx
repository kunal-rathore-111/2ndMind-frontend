"use client";

import { LinkIcon } from "@/assets/icons/Card/Link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { useRef } from "react";

import Tags from "@/utils/Tags";
import { ShareIcon } from "@/assets/icons/Card/Share";
import { EditIcon } from "@/assets/icons/Card/Edit";
import { DeleteIcon } from "@/assets/icons/Card/Delete";
import { BrowserIcon } from "@/assets/icons/Card/Brower";
import type { CardDTO, IconHandle } from "@/utils/HeroCardData";
import { delay, easeInOut, motion, stagger } from "framer-motion";

export function ThreeDCardDemo({ cardData }: { cardData: CardDTO }) {
  const parent = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.4 },
    },
  };
  const child = {
    hidden: { opacity: 0, y: 10 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: easeInOut,
      },
    },
  };
  const iconParent = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const subchild = {
    hidden: { opacity: 0, x: -20 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: easeInOut,
      },
    },
  };

  const IconRef = useRef<Array<IconHandle | null>>([]);
  return (
    <CardContainer className="inter-var">
      <motion.div variants={parent} initial={"hidden"} animate="show">
        <CardBody className="group/card dark:shadow-/90 relative h-auto w-auto rounded-xl bg-zinc-100 p-6 text-start shadow-sm shadow-zinc-800 sm:w-70 dark:bg-zinc-950 dark:shadow-zinc-50/80">
          <CardItem
            className="w-full text-xs text-neutral-600 dark:text-white"
            onMouseEnter={() =>
              IconRef.current?.forEach((x) => x?.startAnimation())
            }
            onMouseLeave={() =>
              IconRef.current?.forEach((x) => x?.stopAnimation())
            }
            translateZ="50"
            translateY={-10}
          >
            <motion.div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <cardData.categoryIcon
                  size={18}
                  className="rounded-sm border-2 border-black/50 p-1 dark:border-white/50 dark:text-white/90"
                  ref={(el) => {
                    IconRef.current[0] = el;
                  }}
                />
                <h5>{cardData.category}</h5>
              </div>
              <div className="flex items-center gap-1 dark:text-white/90">
                <LinkIcon
                  ref={(el) => {
                    IconRef.current[1] = el;
                  }}
                  size={18}
                />
                <span>Shared</span>
              </div>
            </motion.div>

            <div className="flex flex-col gap-2">
              <motion.div variants={child}>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="mt-2 max-w-sm text-sm font-semibold text-zinc-800 dark:text-zinc-300"
                >
                  {cardData.contentTitle}
                </CardItem>
              </motion.div>
              <motion.div variants={child}>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="max-w-sm text-sm text-zinc-500/85 dark:text-zinc-300/40"
                >
                  {cardData.contentDescription}
                </CardItem>
              </motion.div>
              <motion.div variants={child}>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="mt-2 max-w-sm text-sm text-zinc-400 dark:text-zinc-700"
                >
                  <Tags tags={cardData.tags} />
                </CardItem>
              </motion.div>
            </div>
            <CardItem
              as="p"
              translateZ={10}
              translateY="10"
              className="mt-4 flex w-full items-center justify-between text-xs text-zinc-600 dark:text-zinc-200"
            >
              <motion.div variants={subchild}>{cardData.date}</motion.div>
              <motion.div className="flex gap-2" variants={iconParent}>
                {[EditIcon, ShareIcon, DeleteIcon, BrowserIcon].map(
                  (Icon, idx) => (
                    <motion.div key={idx} variants={subchild}>
                      <Icon size={18} />
                    </motion.div>
                  ),
                )}
              </motion.div>
            </CardItem>
          </CardItem>
        </CardBody>
      </motion.div>
    </CardContainer>
  );
}
