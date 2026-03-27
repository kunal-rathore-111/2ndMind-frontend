import { ClapIcon } from "@/assets/icons/Demo";
import { SendIcon } from "@/assets/icons/Send";
import { Button } from "@/components/ui/button";
import { easeInOut, easeOut, motion } from "framer-motion";
import { card1, card2 } from "@/lib/utils/HeroCardData";
import { GlobeIcon } from "@/assets/icons/Globe";
import { useNavigate } from "react-router";
import { ThreeDCardDemo } from "./comps/Card";
import { AvatarGroupComp } from "./comps/AvatarGroup";

export default function HeroSection() {
  const parent = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.4 },
    },
  };
  const child = {
    hidden: { opacity: 0, y: -50, x: -60 },
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

  const navigate = useNavigate();
  return (
    <section className="flex flex-col gap-6">
      <section className="flex">
        {/*left div*/}
        <div className="flex flex-col text-start">
          {/* app intro text */}
          <div className="flex flex-col gap-1">
            <h1 className="text-[97px] leading-22 font-semibold">
              Luci, <br /> Your's <br /> Second <br /> Mind with AI
            </h1>
            <div>
              <p className="text-zinc-400 dark:text-zinc-600">
                Save, organize, and resurface any content in seconds.
                <br /> Built for people who live in the browser.
              </p>
            </div>
          </div>
        </div>

        {/*right div*/}
        <motion.div
          className="relative flex flex-1"
          variants={parent}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.3, ease: easeOut }}
        >
          <motion.div
            variants={child}
            className="absolute top-0 right-60"
            animate={{ rotateZ: -20 }}
          >
            <ThreeDCardDemo cardData={card1}></ThreeDCardDemo>
          </motion.div>
          <motion.div
            className="absolute top-50 right-10"
            variants={child}
            animate={{ rotateZ: 10 }}
          >
            <ThreeDCardDemo cardData={card2}></ThreeDCardDemo>
          </motion.div>
        </motion.div>
      </section>
      {/* bottom of both left and right */}
      <section className="flex flex-col gap-6 text-start">
        <div className="flex gap-3">
          <Button onClick={() => navigate("/signup")} asChild>
            <motion.button whileHover={"animate"}>
              Get Started Free
              {<SendIcon />}
            </motion.button>
          </Button>

          <Button
            variant={"secondary_hover"}
            className="border border-amber-900/40 bg-white/10 shadow-sm hover:bg-gray-300/30 dark:border-white/30 dark:hover:bg-zinc-300/14"
            asChild
          >
            <motion.button whileHover={"animate"}>
              View demo
              {<ClapIcon />}
            </motion.button>
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <AvatarGroupComp />
          <span className="flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-400">
            <span>Trusted by users worldwide</span>
            {
              <GlobeIcon
                className="transition-all duration-200 hover:scale-130"
                size={22}
              />
            }
          </span>
        </div>
      </section>
    </section>
  );
}
