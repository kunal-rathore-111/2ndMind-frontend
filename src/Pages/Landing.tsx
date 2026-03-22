import { ClapIcon } from "@/assets/icons/Demo";
import { SendIcon } from "@/assets/icons/Send";
import { Nav } from "@/components/Nav";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { easeOut, motion } from "framer-motion";
import { ThreeDCardDemo } from "@/components/Card";
import { card1, card2 } from "@/utils/HeroCardData";
import { AvatarGroupComp } from "@/components/AvatarGroup";
import { GlobeIcon } from "@/assets/icons/Globe";

function HeroSection({
  navigate,
}: {
  navigate: ReturnType<typeof useNavigate>;
}) {
  return (
    <section>
      <section className="flex">
        {/*left div*/}
        <div className="flex text-start">
          {/* app intro text */}
          <div className="flex flex-col gap-6">
            <h1 className="text-[87px] leading-20 font-semibold">
              Luci, <br /> Your's <br /> Second <br /> Mind with AI
            </h1>
          </div>
        </div>

        {/*right div*/}
        <motion.div
          className="relative flex flex-1"
          initial={{ opacity: 0, y: -10, rotate: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: easeOut }}
        >
          <motion.div
            initial={{ rotateZ: -40 }}
            className="absolute top-10 right-65"
          >
            <ThreeDCardDemo cardData={card1}></ThreeDCardDemo>
          </motion.div>
          <motion.div className="absolute top-0 right-10">
            <ThreeDCardDemo cardData={card2}></ThreeDCardDemo>
          </motion.div>
        </motion.div>
      </section>
      {/* bottom of both left and right */}
      <section className="flex flex-col gap-6 text-start">
        <div>
          <p className="text-zinc-400 dark:text-zinc-600">
            Save, organize, and resurface any content in seconds.
            <br /> Built for people who live in the browser.
          </p>
        </div>
        <div className="flex gap-2">
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

export default function Landing() {
  const navigate = useNavigate();
  return (
    <main className="flex min-h-screen w-full flex-col px-4 py-28">
      <Nav />
      <HeroSection navigate={navigate} />
    </main>
  );
}
