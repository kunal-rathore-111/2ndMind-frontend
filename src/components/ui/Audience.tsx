import { CardBody, CardContainer, CardItem } from "./3d-card";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import Marquee from "./Marquee";
import { HandHeartIcon } from "@/assets/icons/HandHeart";
import {
  animateIconUsingRef,
  type IconHandle,
} from "@/lib/utils/IconAnimateRef";
import { useRef } from "react";
import { AudienceCommentArray } from "@/lib/constants/content/audience";

export default function Audience() {
  const AnimateRef = useRef<IconHandle>(null);
  return (
    <>
      <div className="mt-0 flex flex-col overflow-hidden">
        <h3
          className="flex items-center justify-center gap-1 text-6xl font-semibold text-black/70 uppercase dark:text-white/60"
          {...animateIconUsingRef(AnimateRef)}
        >
          Love from Audience <HandHeartIcon ref={AnimateRef} size={42} />
        </h3>
        <div className="mt-8 flex flex-col items-center justify-center">
          <motion.div className="mt-8 flex items-center justify-center gap-7">
            <Marquee>
              {AudienceCommentArray.map((x, idx) => {
                return (
                  <CardContainer className="inter-var" key={idx}>
                    <CardBody className="relative flex h-auto w-auto rounded-xl bg-zinc-100 p-6 text-start shadow-sm shadow-zinc-900 sm:w-65 dark:bg-zinc-950/80 dark:shadow-zinc-300/90">
                      <CardItem
                        className="flex w-full flex-col gap-2 text-xs"
                        translateZ="5"
                        translateY={-10}
                      >
                        <p>"{x.comment}"</p>
                        <div className="flex items-center gap-1">
                          <Avatar>
                            <AvatarImage src={x.image} alt={`@${x.name}`} />
                            <AvatarFallback>
                              {x.name.slice(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <span>@{x.name}</span>
                        </div>
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                );
              })}
            </Marquee>
          </motion.div>
        </div>
      </div>
    </>
  );
}
