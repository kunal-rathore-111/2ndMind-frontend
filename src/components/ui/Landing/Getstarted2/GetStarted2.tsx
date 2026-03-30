import { Button } from "../../button";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../Herosection/comps/3d-card";
import { motion } from "framer-motion";

export default function GetStarted2() {
  return (
    <>
      <div className="mt-20 flex flex-col">
        <motion.div className="mt-10 flex items-center justify-center gap-7">
          <CardContainer className="inter-var">
            <CardBody className="relative flex h-auto w-auto rounded-xl bg-zinc-100 px-25 py-12 text-start shadow-sm shadow-zinc-900 dark:bg-zinc-950/80 dark:shadow-zinc-300/90">
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

                <div className="flex items-center gap-1">
                  <Button>Get started</Button>
                  <Button
                    variant={"secondary"}
                    className="bg-black/30 font-light hover:bg-zinc-300 dark:bg-white/30 dark:hover:bg-gray-500"
                  >
                    View Demo
                  </Button>
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        </motion.div>
      </div>
    </>
  );
}
