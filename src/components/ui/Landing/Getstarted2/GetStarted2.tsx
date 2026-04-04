import { useNavigate } from "react-router";
import { Button } from "../../Buttons/shadcnButton";
import GlareHover from "../../GlareHover";
import { CardBody, CardContainer, CardItem } from "../Features/comps/3d-card";
import { motion } from "framer-motion";

export default function GetStarted2() {
  const navigate = useNavigate();
  return (
    <>
      <div className="mt-0 flex flex-col">
        <motion.div className="flex items-center justify-center">
          <CardContainer className="inter-var">
            <GlareHover
              className="flex items-center justify-center"
              background="transparent"
              borderColor="transparent"
              width="620px"
              height="300px"
            >
              <CardBody className="flex h-auto w-auto rounded-xl bg-zinc-100/70 px-25 py-12 text-start shadow-sm shadow-zinc-900 dark:bg-zinc-950/80 dark:shadow-zinc-300/90">
                <CardItem
                  className="flex w-full flex-col items-center gap-4 text-xs"
                  translateZ="45"
                  translateX={7}
                  translateY={-7}
                >
                  <div className="w-fit font-sans text-4xl font-semibold whitespace-nowrap">
                    <p>Start building your</p>
                    <p>second mind today.</p>
                  </div>

                  <p className="text-black/40 dark:text-zinc-300/40">
                    Free forever. No credit card required.
                  </p>

                  <div className="z-40 flex items-center gap-1">
                    <Button
                      className="cursor-pointer"
                      onClick={() => {
                        //console.log("Get started clicked");
                        navigate("/signup");
                      }}
                    >
                      Get started
                    </Button>
                    <Button
                      variant={"secondary"}
                      className="bg-black/30 font-light transition-colors duration-400 hover:bg-zinc-300 dark:bg-white/30 dark:hover:bg-zinc-800"
                    >
                      View Demo
                    </Button>
                  </div>
                </CardItem>
              </CardBody>
            </GlareHover>
          </CardContainer>
        </motion.div>
      </div>
    </>
  );
}
