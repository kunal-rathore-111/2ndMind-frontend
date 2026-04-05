import { useNavigate } from "react-router";
import { Button } from "./Buttons/shadcnButton";
import GlareHover from "./GlareHover";
import { CardBody, CardContainer, CardItem } from "./3d-card";

export default function GetStarted2() {
  const navigate = useNavigate();
  return (
    <>
      <div className="mt-0 flex flex-col">
        <h3 className="mb-14 flex w-full items-center justify-center gap-1 text-6xl font-semibold text-black/70 uppercase dark:text-white/60">
          What's stopping you my dear?
        </h3>
        <div className="flex items-center justify-center">
          <CardContainer className="inter-var rounded-4xl border-2 dark:border-zinc-400">
            <GlareHover
              className="flex items-center justify-center"
              background="transparent"
              borderColor="transparent"
              width="630px"
              height="290px"
            >
              <CardBody className="flex h-auto w-auto bg-zinc-500/20 px-20 py-12">
                <CardItem
                  className="flex w-full flex-col items-center gap-4 text-xs"
                  translateX={7}
                  translateY={-7}
                >
                  <div className="w-fit font-sans text-4xl font-bold whitespace-nowrap uppercase">
                    <p>Start building your</p>
                    <p>second mind today.</p>
                  </div>

                  <p className="text-black/40 dark:text-zinc-300/40">
                    Free forever. No credit card required.
                  </p>

                  <div className="z-50 flex items-center gap-1">
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
        </div>
      </div>
    </>
  );
}
