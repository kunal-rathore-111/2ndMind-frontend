import { ClapIcon } from "@/assets/icons/Demo";
import { SendIcon } from "@/assets/icons/Send";
import { Nav } from "@/components/Nav";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { ThreeDCardDemo } from "@/components/Card";

export default function Landing() {
  const navigate = useNavigate();

  const HeroSection = () => {
    return (
      <section className="mx-4 my-28 flex justify-start">
        {/*left div*/}
        <div className="flex text-start">
          {/* app intro text */}
          <div className="flex flex-col gap-6">
            <h1 className="text-7xl font-semibold">
              Luci, <br /> Your's Second <br /> Mind with AI
            </h1>
            <p className="text-zinc-400 dark:text-zinc-600">
              Save, organize, and resurface any content in seconds.
              <br /> Built for people who live in the browser.
            </p>
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
          </div>
        </div>

        {/*right div*/}
        <div className="flex-1">
          {/* for floating cards (interactive right side)*/}
          <ThreeDCardDemo></ThreeDCardDemo>
        </div>
      </section>
    );
  };

  // --- Langing Page return
  return (
    <main className="flex w-full flex-col">
      <Nav />
      <HeroSection />
    </main>
  );
}
