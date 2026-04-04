import { motion, easeOut, easeInOut } from "framer-motion";
import { ThreeDCardDemo } from "../Features/comps/Card";
import { card1, card2 } from "@/lib/utils/HeroCardData";
import DotComp from "../Dot";

export default function SampleCards() {
  const parent = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.4 },
    },
  };
  const child = {
    hidden: { opacity: 0, y: -50, x: 0 },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easeInOut,
      },
    },
  };
  return (
    <>
      <div className="mt-0 flex flex-col">
        <h3 className="flex items-center gap-1 text-4xl font-semibold text-black/70 uppercase dark:text-white/60">
          {<DotComp />} Sample
        </h3>
        <div className="mt-8 flex flex-col items-center justify-center">
          <h2 className="text-2xl">How your data looks</h2>
          <motion.section
            variants={parent}
            initial="hidden"
            animate="show"
            className="mt-8 flex w-full justify-evenly gap-14"
            transition={{ duration: 0.3, ease: easeOut }}
          >
            <motion.div variants={child}>
              <ThreeDCardDemo cardData={card1}></ThreeDCardDemo>
            </motion.div>
            <motion.div variants={child}>
              <ThreeDCardDemo cardData={card2}></ThreeDCardDemo>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </>
  );
}
